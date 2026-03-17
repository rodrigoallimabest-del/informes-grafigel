const state = {
  modo: 'consulta',
  adminLogado: false,
  arquivoBase: null,
  arquivosPdf: [],
  arquivosDisponiveis: [],
  baseImportada: false,
  colaboradores: [
    { cpf: '60250660350', nome: 'ADONIAS DE SOUSA OLIVEIRA', arquivos: [] },
    { cpf: '70715415158', nome: 'ADRIEL MACHADO NETO', arquivos: [] },
    { cpf: '70439498155', nome: 'ALAN CESAR DE MELO', arquivos: [] },
    { cpf: '01419694154', nome: 'ALEXANDRE BORGES FERREIRA', arquivos: [] },
    { cpf: '01324167190', nome: 'ALFRENE ALVES DA SILVA', arquivos: [] },
    { cpf: '70854752188', nome: 'AMANDA CRISTINA LOPES PEREIRA', arquivos: [] },
    { cpf: '92018670182', nome: 'ANA LUCIA DE SOUZA LIMA SILVA', arquivos: [] },
  ],
  resultado: { enviados: 0, vinculados: 0, pendencias: 0, pendentes: [], sucesso: [] },
};

const $ = (id) => document.getElementById(id);

function limparCPF(valor) {
  return String(valor || '').replace(/\D/g, '').slice(0, 11);
}

function formatarCPF(valor) {
  const digits = limparCPF(valor);
  return digits
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d{1,2})$/, '$1-$2');
}

function normalizarNome(nome) {
  return String(nome || '')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^A-Z0-9 ]/gi, '')
    .trim()
    .replace(/\s+/g, '_')
    .toUpperCase();
}

function normalizarNomeBase(nomeArquivo) {
  return String(nomeArquivo || '')
    .replace(/_(\d(?:\.\d+)?)\.pdf$/i, '')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^A-Z0-9_ ]/gi, '')
    .trim()
    .replace(/\s+/g, '_')
    .toUpperCase();
}

function extrairTipoArquivo(nomeArquivo) {
  const match = nomeArquivo.match(/_(\d(?:\.\d+)?)\.pdf$/i);
  const sufixo = match?.[1];
  if (sufixo === '1') return { grupo: 'Informe 1', ordem: 1, etiqueta: 'Informe 1' };
  if (sufixo === '2') return { grupo: 'Informe 2', ordem: 2, etiqueta: 'Informe 2' };
  if (sufixo?.startsWith('1.')) return { grupo: 'Informe 1', ordem: 1, etiqueta: `Continuação Informe 1 - pág. ${sufixo.split('.')[1]}` };
  if (sufixo?.startsWith('2.')) return { grupo: 'Informe 2', ordem: 2, etiqueta: `Continuação Informe 2 - pág. ${sufixo.split('.')[1]}` };
  return { grupo: 'Outro', ordem: 99, etiqueta: nomeArquivo };
}

function agruparArquivos(arquivos) {
  const grupos = {};
  arquivos.forEach((arquivo) => {
    const info = extrairTipoArquivo(arquivo);
    if (!grupos[info.grupo]) grupos[info.grupo] = { titulo: info.grupo, ordem: info.ordem, itens: [] };
    grupos[info.grupo].itens.push({ nome: arquivo, etiqueta: info.etiqueta });
  });
  return Object.values(grupos).sort((a, b) => a.ordem - b.ordem);
}

function normalizarChaveColuna(valor) {
  return String(valor || '')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-zA-Z0-9]/g, '')
    .toLowerCase();
}

async function lerPlanilhaColaboradores(file) {
  const buffer = await file.arrayBuffer();
  const workbook = XLSX.read(buffer, { type: 'array' });
  const primeiraAba = workbook.SheetNames[0];
  const sheet = workbook.Sheets[primeiraAba];
  const rows = XLSX.utils.sheet_to_json(sheet, { defval: '' });
  const mapa = new Map();

  rows.forEach((row) => {
    const entries = Object.entries(row);
    let nome = '';
    let cpf = '';

    entries.forEach(([chave, valor]) => {
      const chaveNorm = normalizarChaveColuna(chave);
      if (!nome && (chaveNorm.includes('colaborador') || chaveNorm.includes('nome') || chaveNorm.includes('funcionario'))) {
        nome = String(valor || '').trim().toUpperCase();
      }
      if (!cpf && chaveNorm.includes('cpf')) {
        cpf = limparCPF(String(valor || ''));
      }
    });

    if (!nome) {
      const candidatoNome = entries.find(([, valor]) => /[A-Za-zÀ-ÿ]/.test(String(valor || '')));
      if (candidatoNome) nome = String(candidatoNome[1] || '').trim().toUpperCase();
    }

    if (!cpf) {
      const candidatoCpf = entries.find(([, valor]) => limparCPF(String(valor || '')).length === 11);
      if (candidatoCpf) cpf = limparCPF(String(candidatoCpf[1] || ''));
    }

    if (!nome || cpf.length !== 11) return;
    if (!mapa.has(cpf)) mapa.set(cpf, { cpf, nome, arquivos: [] });
  });

  return Array.from(mapa.values());
}

function renderTabs() {
  $('tabConsulta').classList.toggle('active', state.modo === 'consulta');
  $('tabAdmin').classList.toggle('active', state.modo === 'admin');
  $('consultaView').classList.toggle('hidden', state.modo !== 'consulta');
  $('adminLoginView').classList.toggle('hidden', !(state.modo === 'admin' && !state.adminLogado));
  $('adminView').classList.toggle('hidden', !(state.modo === 'admin' && state.adminLogado));
}

function renderAdminStats() {
  $('baseCount').textContent = state.colaboradores.length;
  $('statEnviados').textContent = state.resultado.enviados;
  $('statVinculados').textContent = state.resultado.vinculados;
  $('statPendencias').textContent = state.resultado.pendencias;
  $('pdfHint').textContent = state.arquivosPdf.length ? `${state.arquivosPdf.length} PDF(s) selecionado(s)` : '';

  const sucessoBox = $('sucessoBox');
  const pendenciaBox = $('pendenciaBox');
  sucessoBox.innerHTML = '';
  pendenciaBox.innerHTML = '';

  if (state.resultado.sucesso.length) {
    sucessoBox.innerHTML = `<div class="listBox success"><strong>Primeiros arquivos vinculados</strong><div>${state.resultado.sucesso.slice(0, 30).map((i) => `<div>${i}</div>`).join('')}</div></div>`;
  }
  if (state.resultado.pendentes.length) {
    pendenciaBox.innerHTML = `<div class="listBox warning"><strong>Arquivos com pendência</strong><div>${state.resultado.pendentes.slice(0, 50).map((i) => `<div>${i}</div>`).join('')}</div></div>`;
  }
}

function renderConsultaResultado() {
  const container = $('consultaResultado');
  const cpf = limparCPF($('cpfInput').value);
  const colaborador = state.colaboradores.find((item) => item.cpf === cpf);

  if (!cpf) {
    container.innerHTML = '';
    return;
  }

  if (!colaborador) {
    container.innerHTML = `<div class="alert error"><strong>Nenhum colaborador encontrado</strong><p>Não foi localizado nenhum colaborador para este CPF.</p></div>`;
    return;
  }

  let html = `
    <div class="alert success">
      <strong>Colaborador localizado</strong>
      <p>${colaborador.nome}</p>
      <p>CPF: ${formatarCPF(colaborador.cpf)}</p>
    </div>
  `;

  if (!colaborador.arquivos.length) {
    html += `<div class="panel">Colaborador encontrado na base. Os arquivos ainda não foram vinculados.</div>`;
    container.innerHTML = html;
    return;
  }

  const grupos = agruparArquivos(colaborador.arquivos);
  grupos.forEach((grupo) => {
    html += `<div class="panel"><h3>${grupo.titulo}</h3>`;
    grupo.itens.forEach((item) => {
      html += `
        <div class="fileCard">
          <div>
            <strong>${item.etiqueta}</strong>
            <p>${item.nome}</p>
          </div>
          <button class="btn dark" data-download="${item.nome}">Baixar PDF</button>
        </div>
      `;
    });
    html += `</div>`;
  });

  container.innerHTML = html;
  container.querySelectorAll('[data-download]').forEach((btn) => {
    btn.addEventListener('click', () => handleDownload(btn.getAttribute('data-download')));
  });
}

function handleDownload(nomeArquivo) {
  const arquivoLocal = state.arquivosDisponiveis.find((item) => item.nome === nomeArquivo)
    || state.arquivosDisponiveis.find((item) => normalizarNomeBase(item.nome) === normalizarNomeBase(nomeArquivo));

  if (!arquivoLocal) {
    alert(`O arquivo ${nomeArquivo} não está disponível nesta sessão. Volte na área administrativa, selecione os PDFs novamente, clique em \"Enviar e processar PDFs\" e depois faça a consulta.`);
    return;
  }

  const link = document.createElement('a');
  link.href = arquivoLocal.url;
  link.download = arquivoLocal.nome;
  link.style.display = 'none';
  document.body.appendChild(link);
  link.click();
  setTimeout(() => {
    if (document.body.contains(link)) document.body.removeChild(link);
  }, 0);
}

async function handleEnviarPlanilha() {
  if (!state.arquivoBase) {
    alert('Selecione a planilha antes de enviar.');
    return;
  }
  try {
    const importados = await lerPlanilhaColaboradores(state.arquivoBase);
    if (!importados.length) {
      alert('A planilha não trouxe colaboradores válidos.');
      return;
    }
    state.colaboradores = importados;
    state.baseImportada = true;
    state.resultado = { enviados: 0, vinculados: 0, pendencias: 0, pendentes: [], sucesso: [] };
    renderAdminStats();
    alert(`Planilha importada com sucesso: ${state.arquivoBase.name} (${importados.length} colaboradores)`);
  } catch (e) {
    console.error(e);
    alert('Não foi possível ler a planilha.');
  }
}

function handleProcessarPdfs() {
  if (!state.baseImportada) {
    alert('Importe a planilha antes de processar os PDFs.');
    return;
  }
  if (!state.arquivosPdf.length) {
    alert('Selecione os PDFs antes de enviar.');
    return;
  }

  const pendentes = [];
  const sucesso = [];
  let vinculados = 0;
  const mapaArquivos = new Map();
  state.colaboradores.forEach((c) => mapaArquivos.set(c.cpf, [...c.arquivos]));

  state.arquivosPdf.forEach((file) => {
    const nome = file.name;
    const info = extrairTipoArquivo(nome);
    const nomeBase = normalizarNomeBase(nome);
    const colaborador = state.colaboradores.find((item) => normalizarNome(item.nome) === nomeBase);

    if (info.grupo === 'Outro') {
      pendentes.push(`${nome} - padrão do nome inválido`);
      return;
    }
    if (!colaborador) {
      pendentes.push(`${nome} - colaborador não encontrado na base`);
      return;
    }

    const arquivosDoColaborador = mapaArquivos.get(colaborador.cpf) || [];
    if (!arquivosDoColaborador.includes(nome)) arquivosDoColaborador.push(nome);
    mapaArquivos.set(colaborador.cpf, arquivosDoColaborador);
    vinculados += 1;
    sucesso.push(`${nome} - vinculado a ${colaborador.nome}`);
  });

  state.colaboradores = state.colaboradores.map((colaborador) => ({
    ...colaborador,
    arquivos: (mapaArquivos.get(colaborador.cpf) || []).sort((a, b) => extrairTipoArquivo(a).ordem - extrairTipoArquivo(b).ordem || a.localeCompare(b)),
  }));

  state.resultado = {
    enviados: state.arquivosPdf.length,
    vinculados,
    pendencias: pendentes.length,
    pendentes,
    sucesso,
  };
  renderAdminStats();
  alert('PDFs processados com sucesso. Agora já dá para consultar por CPF e baixar.');
}

function bindEvents() {
  $('tabConsulta').addEventListener('click', () => { state.modo = 'consulta'; renderTabs(); });
  $('tabAdmin').addEventListener('click', () => { state.modo = 'admin'; renderTabs(); });
  $('cpfInput').addEventListener('input', (e) => { e.target.value = formatarCPF(e.target.value); });
  $('consultarBtn').addEventListener('click', renderConsultaResultado);
  $('loginBtn').addEventListener('click', () => {
    const email = $('adminEmail').value.trim();
    const senha = $('adminSenha').value;
    if (email === 'financeiro@grafigel.com.br' && senha === 'Grafigel@123') {
      state.adminLogado = true;
      renderTabs();
      renderAdminStats();
    } else {
      alert('E-mail ou senha inválidos.');
    }
  });
  $('sairBtn').addEventListener('click', () => {
    state.adminLogado = false;
    renderTabs();
  });
  $('selecionarExcelBtn').addEventListener('click', () => $('excelInput').click());
  $('selecionarPdfsBtn').addEventListener('click', () => $('pdfInput').click());
  $('excelInput').addEventListener('change', (e) => {
    state.arquivoBase = e.target.files?.[0] || null;
    $('selecionarExcelBtn').textContent = state.arquivoBase ? `Planilha selecionada: ${state.arquivoBase.name}` : 'Clique para selecionar o Excel';
  });
  $('pdfInput').addEventListener('change', (e) => {
    state.arquivosPdf = Array.from(e.target.files || []);
    state.arquivosDisponiveis.forEach((item) => URL.revokeObjectURL(item.url));
    state.arquivosDisponiveis = state.arquivosPdf.map((file) => ({ nome: file.name, file, url: URL.createObjectURL(file) }));
    $('selecionarPdfsBtn').textContent = state.arquivosPdf.length ? `${state.arquivosPdf.length} PDF(s) selecionado(s)` : 'Clique para selecionar os PDFs';
    renderAdminStats();
  });
  $('enviarPlanilhaBtn').addEventListener('click', handleEnviarPlanilha);
  $('processarPdfsBtn').addEventListener('click', handleProcessarPdfs);
}

bindEvents();
renderTabs();
renderAdminStats();
