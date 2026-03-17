const DOWNLOAD_BASE_URL = "https://dapper-marigold-f1af05.netlify.app";

const state = {
  colaboradores: [
    { cpf: '60250660350', nome: 'ADONIAS DE SOUSA OLIVEIRA' },
    { cpf: '70715415158', nome: 'ADRIEL MACHADO NETO' },
    { cpf: '70439498155', nome: 'ALAN CESAR DE MELO' },
    { cpf: '01419694154', nome: 'ALEXANDRE BORGES FERREIRA' },
    { cpf: '01324167190', nome: 'ALFRENE ALVES DA SILVA' },
    { cpf: '70854752188', nome: 'AMANDA CRISTINA LOPES PEREIRA' },
    { cpf: '92018670182', nome: 'ANA LUCIA DE SOUZA LIMA SILVA' },
    { cpf: '94853339191', nome: 'ANA PAULA SILVA DOS REIS' },
    { cpf: '00095169130', nome: 'ANAEL RIBEIRO BISPO' },
    { cpf: '91378044134', nome: 'ANDRE ROBERTO DA SILVA' },
    { cpf: '88547752153', nome: 'ANGELO ALVES DE OLIVEIRA' },
    { cpf: '71238567169', nome: 'ANGELO LOPES DOS SANTOS' },
    { cpf: '06676574101', nome: 'ANILTON DE SOUSA PEREIRA' },
    { cpf: '00913358339', nome: 'ANTONIO VIRGINIO DE SOUSA NETO' },
    { cpf: '02073872140', nome: 'APARECIDO PEREIRA DE MIRANDA' },
    { cpf: '03447244178', nome: 'ARLETE PEREIRA DOS SANTOS' },
    { cpf: '88684970187', nome: 'ARNICREN JOSE DOS SANTOS' },
    { cpf: '71029351104', nome: 'ARTUR GODINHO LEAO' },
    { cpf: '71535584114', nome: 'BRAYAN DE OLIVEIRA MACHADO' },
    { cpf: '70234757108', nome: 'BRENDO LUKA DA CUNHA ALVES' },
    { cpf: '70723997128', nome: 'BRUNA NASCIMENTO SALES VIANA' },
    { cpf: '70070668140', nome: 'CAMILA SANTANA GOMES' },
    { cpf: '06714986146', nome: 'CARLOS ALEXANDRO DE ARAUJO SANTOS' },
    { cpf: '99546804172', nome: 'CARLOS DE ALMEIDA DO ESPIRITO SANTOS' },
    { cpf: '70383185118', nome: 'CARLOS EDUARDO PEREIRA DOS SANTOS' },
    { cpf: '71085031151', nome: 'CARLOS HENRIQUE ANTONELLI DE PAULA' },
    { cpf: '90201255120', nome: 'CARLOS HENRIQUE DA SILVA LOURENCO' },
    { cpf: '50047621187', nome: 'CARLOS HENRIQUE DE SOUZA' },
    { cpf: '00231117199', nome: 'CARLOS HENRIQUE DIAS DA SILVA' },
    { cpf: '71567291108', nome: 'CASSIO XAVIER NERES' },
    { cpf: '51484563100', nome: 'CHARLES JOSE PINTO MARCIANO' },
    { cpf: '01873005130', nome: 'CLEBER ALVES DE SOUZA' },
    { cpf: '70524617102', nome: 'CLEION INACIO CARVALHO DE OLIVEIRA' },
    { cpf: '71914222145', nome: 'CLEYSON ROCHA DE LACERDA' },
    { cpf: '69553510159', nome: 'CONCEICAO PEREIRA DA SILVA' },
    { cpf: '02072855171', nome: 'CRISTIANE DE MELO DO CARMO' },
    { cpf: '71284417117', nome: 'DANIEL MENDES NUNES DOS SANTOS' },
    { cpf: '08198012396', nome: 'DANIEL SILVA DE JESUS' },
    { cpf: '70232181188', nome: 'DANILLO FRANCA VELOSO' },
    { cpf: '07203960148', nome: 'DANILLO MORAIS DE LIMA' },
    { cpf: '97168484134', nome: 'DARIU PEREIRA FARIA' },
    { cpf: '70547097139', nome: 'DAVI MATIAS DO VALE' },
    { cpf: '03414329100', nome: 'DAVID ALVES DA SILVA FILHO' },
    { cpf: '70202133177', nome: 'DAVID BECHARA PARREIRA' },
    { cpf: '70498192185', nome: 'DAVID FERREIRA COSTA' },
    { cpf: '80485838134', nome: 'DEBORA OLIVEIRA PIRES' },
    { cpf: '71499725115', nome: 'DEGMAR GONZAGA FILHO' },
    { cpf: '71419731115', nome: 'DENILSON ALBINO DE OLIVEIRA' },
    { cpf: '80139472172', nome: 'DEUBER CRISTIANO RIBEIRO PIRES JUNIOR' },
    { cpf: '07223028106', nome: 'DIMITRIUS CAVALLINI POSSE DE ALBUQUERQUE' },
    { cpf: '69813863159', nome: 'DIOGO BATISTA GALVAO' },
    { cpf: '71480221170', nome: 'DIVINO CARLOS PACHECO' },
    { cpf: '69836513168', nome: 'DIVINO MARTINS DE ARAUJO' },
    { cpf: '93439940144', nome: 'DOMINGOS ALVES NORONHA' },
    { cpf: '71181472172', nome: 'DOMINGOS FERREIRA DE MENES' },
    { cpf: '60936216149', nome: 'DORVALINO ALVES CORREA' },
    { cpf: '71557330178', nome: 'EDIREI FRANCISCO DE SOUSA' },
    { cpf: '96803021168', nome: 'EDIVALDO DIAS DE LIMA' },
    { cpf: '88738688149', nome: 'EDSON MESSIAS DE SOUZA' },
    { cpf: '02940909131', nome: 'EDSON PEREIRA DE SOUZA' },
    { cpf: '70647652179', nome: 'EDUARDO CRUZ DA SILVA' },
    { cpf: '46921607104', nome: 'ELCIO ANTONIO GOMES XAVIER' },
    { cpf: '03831401136', nome: 'ELIANA CRETTON SANTOS' },
    { cpf: '71623523177', nome: 'ELIANDRO FERREIRA MARQUES' },
    { cpf: '00663194137', nome: 'ELIANDRO PEREIRA RAMOS' },
    { cpf: '02587521154', nome: 'ELIELTON DA SILVA SILVA' },
    { cpf: '71265415145', nome: 'ELISA DANIELE GUEDES MARCIANO' },
    { cpf: '70601135144', nome: 'ELIVANIA LUIZ TAVARES' },
    { cpf: '71593524111', nome: 'EMERSON MATEUS DE NASCIMENTO' },
    { cpf: '01401183176', nome: 'EMERSON RODRIGUES DE BRITO' },
    { cpf: '02124205186', nome: 'EMERSON VASCONCELOS DE BRITO' },
    { cpf: '70373491102', nome: 'EMILY BRENDA SILVA DA SILVA' },
    { cpf: '06069181110', nome: 'ERICK MARCILIO DURANS PINTO' },
    { cpf: '70444026100', nome: 'ERICK RAIMUNDO PARREIRA' },
    { cpf: '70469980158', nome: 'ERICSSON PEDRO BATISTA' },
    { cpf: '70386945114', nome: 'ERIKA MANOELA DE ALMEIDA SILVA' },
    { cpf: '71235165198', nome: 'ERIKY GABRIEL DE JESUS ATAIDES' },
    { cpf: '08700499105', nome: 'EUDER LUCAS DOS ANJOS SANTOS' },
    { cpf: '02514050107', nome: 'FABIO JUNIOR DA SILVA' },
    { cpf: '70395524170', nome: 'FAINER DAVID DA SILVA' },
    { cpf: '71693248170', nome: 'FERNANDO BATISTA DA SILVA' },
    { cpf: '06708968104', nome: 'FRANCIELE ALVES PEREIRA SILVA' },
    { cpf: '02410512310', nome: 'FRANCISCO EDINALDO DE SOUZA CASTRO' },
    { cpf: '01218531192', nome: 'FRANCISLEY MARTINS DE MOURA PERES' },
    { cpf: '70341102100', nome: 'GABRIEL ALVES REIS' },
    { cpf: '02169355185', nome: 'GABRIEL ANTONIO DA SILVA' },
    { cpf: '70239764177', nome: 'GABRIEL ARAGAO MARTINS' },
    { cpf: '70777402150', nome: 'GABRIEL DOS SANTOS SOUZA' },
    { cpf: '70376666117', nome: 'GABRIEL FARIAS DA SILVA' },
    { cpf: '71290068179', nome: 'GABRIEL GIUSEPE DE SOUSA' },
    { cpf: '05643231131', nome: 'GEELISON SANTOS FONSECA' },
    { cpf: '50810041166', nome: 'GEORGIA ABRAO' },
    { cpf: '70509905140', nome: 'GHYSA PINTO MIRANDA' },
    { cpf: '03554954182', nome: 'GIDEILTON BARROS DA SILVA' },
    { cpf: '70630852100', nome: 'GLAUDILSON RENATO DOS SANTOS SILVA' },
    { cpf: '51436362109', nome: 'GLEICIKELLY DE SOUZA' },
    { cpf: '71272897108', nome: 'GRACIELLE BATISTA DE PAULA GUIMARAES' },
    { cpf: '71130755157', nome: 'GUILHERME HENRIQUE FERREIRA CANDIDO' },
    { cpf: '71058718121', nome: 'GUILHERME SANTOS CUNHA' },
    { cpf: '70705953135', nome: 'GUSTAVO ALVES DA SILVA' },
    { cpf: '70397872166', nome: 'GUSTAVO PEREIRA NASCIMENTO' },
    { cpf: '03523100195', nome: 'GUSTAVO PHELIPE PIRES SOARES' },
    { cpf: '97513312191', nome: 'HENRIQUE MELO DINIZ' },
    { cpf: '05375426118', nome: 'HERIC ARCANJO RODRIGUES DE OLIVEIRA' },
    { cpf: '70512545121', nome: 'HOZANA TEIXEIRA DE ASSUNCAO' },
    { cpf: '04900519137', nome: 'IDESLAN PEREIRA DE ALMEIDA' },
    { cpf: '70414025113', nome: 'ISMAEL CARDOSO DE OLIVEIRA' },
    { cpf: '03110079181', nome: 'ISRAEL OLIVEIRA CARNEIRO' },
    { cpf: '02233850154', nome: 'JAIRO DIAS DA SILVA' },
    { cpf: '70781815154', nome: 'JAZIEL PAULO DA SILVA' },
    { cpf: '70656953124', nome: 'JOANA GONZAGA PEREIRA' },
    { cpf: '70626544117', nome: 'JOAO ANTONIO DOS SANTOS JUNIOR' },
    { cpf: '71537601184', nome: 'JOAO PAULO DA SILVA ALVES' },
    { cpf: '70809139101', nome: 'JOAO PAULO DO CARMO DIAS' },
    { cpf: '71279538196', nome: 'JOAO VICTOR SANTOS SOUSA' },
    { cpf: '80546216149', nome: 'JORBASAN BATISTA DOS SANTOS' },
    { cpf: '86915014120', nome: 'JORDAO DE ARAUJO GOMES' },
    { cpf: '05388830159', nome: 'JORGE LUIS LIMA DE SOUSA' },
    { cpf: '69992083159', nome: 'JORGE LUIZ MACHADO PEREIRA' },
    { cpf: '70745514176', nome: 'JOSE DE OLIVEIRA MATOS' },
    { cpf: '69840406120', nome: 'JOSE DIAS ANTUNES' },
    { cpf: '71115764187', nome: 'JOSE MIRANDA DE LIMA' },
    { cpf: '71447185153', nome: 'JOSE OLIVEIRA COSTA' },
    { cpf: '03161918173', nome: 'JOSENILDO SANTIAGO DOS SANTOS' },
    { cpf: '70699301175', nome: 'JOSENIR CARVALHO DE LIMA' },
    { cpf: '70512586100', nome: 'JOSIELE DA LUZ CARVALHO' },
    { cpf: '70534489189', nome: 'JOVENIAS MARIA DE JESUS' },
    { cpf: '71148349145', nome: 'JOYCE ALVES DOS SANTOS' },
    { cpf: '70641911106', nome: 'JOYCE LUDMILA ALVES ROMEIRO' },
    { cpf: '89172304191', nome: 'JULIO CESAR SILVA RIBEIRO' },
    { cpf: '70709144138', nome: 'JUNIOR CEZAR ALVES LEAO' },
    { cpf: '71586870186', nome: 'JURANDIR SANTANA' },
    { cpf: '07144414173', nome: 'KAYRO MATEUS OLIVEIRA COELHO' },
    { cpf: '70771254140', nome: 'KLERISTON DOS SANTOS GOMES' },
    { cpf: '71525698100', nome: 'LAURO SABACK SA NETO' },
    { cpf: '70709198126', nome: 'LAYANE ALVES DE HOLANDA JANUARIO' },
    { cpf: '80323035172', nome: 'LEANDRO DAMASCENO BARBOSA' },
    { cpf: '70647382139', nome: 'LEANDRO DE SOUSA' },
    { cpf: '70448175105', nome: 'LEANDRO NUNES DE ALMEIDA' },
    { cpf: '70483715150', nome: 'LEANDRO OLIVEIRA SOUZA' },
    { cpf: '70702032171', nome: 'LEILA DA SILVA BEZERRA' },
    { cpf: '70756086172', nome: 'LEOMAR JUSTO DE OLIVEIRA' },
    { cpf: '71594294189', nome: 'LEONARDO BARBOSA DOS SANTOS' },
    { cpf: '71239054160', nome: 'LEONARDO DOS SANTOS SOUZA' },
    { cpf: '70700874147', nome: 'LEONICE RODRIGUES DE SOUSA' },
    { cpf: '08205606108', nome: 'LINIENNY MARQUES CAVALCANTE MOURA' },
    { cpf: '71389044144', nome: 'LIVIA RODRIGUES MONTEIRO' },
    { cpf: '70718250175', nome: 'LUAN DE PAULA MARQUES GONCALVES' },
    { cpf: '70846284175', nome: 'LUCAS BRAGA DA SILVA' },
    { cpf: '70376832135', nome: 'LUCAS GOMES DE SANTANA' },
    { cpf: '70731595180', nome: 'LUCAS LUSTOSA ARAUJO' },
    { cpf: '70807978103', nome: 'LUCIANO OLIVEIRA DOS SANTOS' },
    { cpf: '71401907115', nome: 'LUCINEIDE PAULA DOS SANTOS' },
    { cpf: '70655352179', nome: 'LUIDI SOUZA DE OLIVEIRA' },
    { cpf: '70813291173', nome: 'LUIS CARLOS CAMILO' },
    { cpf: '02436661122', nome: 'LUIS FELLIPPE RODRIGUES DA SILVA' },
    { cpf: '00508526140', nome: 'LUIZ ANTONIO NUNES' },
    { cpf: '71337904180', nome: 'LUIZ CARLOS RODRIGUES' },
    { cpf: '71051005100', nome: 'LUIZ JULIO DE LIMA' },
    { cpf: '70370079172', nome: 'LUIZA RIBEIRO DOS SANTOS' },
    { cpf: '70809600172', nome: 'MACIEL SILVA SAMPAIO' },
    { cpf: '70644147178', nome: 'MANOEL MARCOS LIMA SILVA' },
    { cpf: '81290222153', nome: 'MANUEL BONFIM DA COSTA CAVALCANTE' },
    { cpf: '50782203168', nome: 'MARCELO DE DEUS PEREIRA' },
    { cpf: '71186290149', nome: 'MARCELO DIAS PEIXOTO' },
    { cpf: '03382792165', nome: 'MARCIA ARAUJO DA SILVA' },
    { cpf: '04671736179', nome: 'MARCIA VITORIA DA SILVA BONFIM' },
    { cpf: '70670740100', nome: 'MARCIO CAVALCANTE BENTO' },
    { cpf: '01283399104', nome: 'MARCIO NERES DE SOUZA JUNIOR' },
    { cpf: '00401718137', nome: 'MARCO ANTONIO BARBOSA RODRIGUES' },
    { cpf: '69732458149', nome: 'MARIA DA PAZ DIAS PEREIRA' },
    { cpf: '91127521100', nome: 'MARIA DE JESUS SILVA' },
    { cpf: '70524767152', nome: 'MARILIA ALMEIDA LEAL DE SOUZA' },
    { cpf: '71172481187', nome: 'MARINEZ MARIA DE SOUZA' },
    { cpf: '71230428176', nome: 'MATHEUS RODRIGUES DE SOUZA BARBOSA' },
    { cpf: '71547600106', nome: 'MAYCON DOUGLAS DOS REIS SILVEIRA' },
    { cpf: '01655457120', nome: 'MILTON CABRAL DA SILVA' },
    { cpf: '71715300104', nome: 'MOACIR PEREIRA AGUIAR' },
    { cpf: '00946636143', nome: 'NEIRIMARCE VELOSO DE CARVALHO FERNANDES' },
    { cpf: '02305827100', nome: 'NELSON MESSIAS DE SOUSA' },
    { cpf: '97919309153', nome: 'NESTOR ALI LARA RENGEL' },
    { cpf: '70462146185', nome: 'OSANA GOMES DA SILVA' },
    { cpf: '70544924117', nome: 'PABLO JUNIO CALDEIRA DA SILVA' },
    { cpf: '03512898166', nome: 'PATRICIA DE ALMEIDA SILVA' },
    { cpf: '70758621177', nome: 'PATRICK TAVARES FERREIRA' },
    { cpf: '71080450139', nome: 'PAULO CESAR BORGES DE ASSIS' },
    { cpf: '71598697110', nome: 'PAULO CESAR GOMES HOLANDA' },
    { cpf: '71095179120', nome: 'PAULO RICARDO MORATO CRUZ' },
    { cpf: '71690351159', nome: 'PEDRO HENRIQUE PEREIRA DA SILVA' },
    { cpf: '70812111170', nome: 'PEDRO LUCAS SILVA CONCEICAO' },
    { cpf: '70541682153', nome: 'RAFAEL RODRIGUES SILVA' },
    { cpf: '02236210120', nome: 'RAFAEL SADRAK MUNIZ DE SOUZA' },
    { cpf: '71140642155', nome: 'RAFAEL TRAVASSOS DE LIRA' },
    { cpf: '70812393179', nome: 'RAIMUNDO BATISTA DE SOUSA FILHO' },
    { cpf: '70310129144', nome: 'RANGEL FRANCISCO DA SILVA' },
    { cpf: '70392263109', nome: 'RAYANE MENDES DA COSTA' },
    { cpf: '70353864104', nome: 'RAYDAN SANTOS SILVA' },
    { cpf: '70278530108', nome: 'REGIANE NUNES SOUZA DELFINO' },
    { cpf: '70542549153', nome: 'REGINALDO MARTINS DE SOUSA' },
    { cpf: '70399290120', nome: 'RILDO OLIVEIRA DE SOUZA' },
    { cpf: '71481958191', nome: 'RINAR ESTEFSON BATISTA NOGUEIRA' },
    { cpf: '04599732126', nome: 'ROBERTO JOSE BISPO' },
    { cpf: '03528645150', nome: 'RODRIGO ALVES DE LIMA' },
    { cpf: '70400531107', nome: 'RODRIGO FELIX ARRUDA' },
    { cpf: '71109265115', nome: 'ROMILDO DE PAULO CASTRO' },
    { cpf: '06043743177', nome: 'RONALDO APARECIDO DE SOUZA' },
    { cpf: '70842281118', nome: 'RONILSON SILVA ROCHA' },
    { cpf: '70393904117', nome: 'ROSANGELA ALVES DE SOUZA' },
    { cpf: '07349590157', nome: 'ROSANITA BARBOSA SILVA' },
    { cpf: '71373660163', nome: 'ROSILENE INOCENCIO DE GODOI' },
    { cpf: '71485341172', nome: 'RUBENS PEREIRA DA COSTA' },
    { cpf: '71115029157', nome: 'SAMANTHA MENDES DE SOUZA' },
    { cpf: '02234824190', nome: 'SAMUEL MONTEIRO MARQUES' },
    { cpf: '70724104166', nome: 'SAMUEL NASCIMENTO SALES VIANA' },
    { cpf: '70835801112', nome: 'SILAS SANTOS MACEDO' },
    { cpf: '71164738172', nome: 'SIVONALDO DA SILVA ROCHA' },
    { cpf: '02141669100', nome: 'SUELI RODRIGUES XAVIER' },
    { cpf: '70782534168', nome: 'SUELMA PEREIRA DA SILVA' },
    { cpf: '70352449102', nome: 'SUYANE DA SILVA AZEVEDO' },
    { cpf: '70311714103', nome: 'TAHYAN TAVARES GUIMARAES' },
    { cpf: '70685042119', nome: 'TATIANE MOURA DOS REIS' },
    { cpf: '02303951132', nome: 'TATIANE SOARES DE SOUSA' },
    { cpf: '70619124102', nome: 'TAYNARA BATISTA LACERDA SILVA' },
    { cpf: '71273849161', nome: 'TERTULLIANA PEREIRA DO CARMO' },
    { cpf: '71127340179', nome: 'THAYWANE OLIVEIRA FERREIRA DOS SANTOS' },
    { cpf: '70482902163', nome: 'THIAGO FERNANDES DA CUNHA' },
    { cpf: '70616494124', nome: 'THIAGO PEREIRA DOS SANTOS' },
    { cpf: '71099774191', nome: 'VAGNER DE JESUS PEREIRA' },
    { cpf: '71145814186', nome: 'VALDECY FERREIRA DE CARVALHO JUNIOR' },
    { cpf: '51250754153', nome: 'VALDIRENE DE JESUS SANTOS' },
    { cpf: '71243278176', nome: 'VALDIVINO ALVES DA SILVA' },
    { cpf: '02855762195', nome: 'VALDIVINO DE SOUSA OLIVEIRA' },
    { cpf: '70312139176', nome: 'VALERIA CORREA OLIVEIRA' },
    { cpf: '89459953100', nome: 'VALTO PEREIRA DA SILVA' },
    { cpf: '70369982169', nome: 'VANDERLY OLIVEIRA DA MATA' },
    { cpf: '71484611120', nome: 'VANDESMAR APARECIDO DA SILVA' },
    { cpf: '70513568104', nome: 'VICTOR HUGO ABREU' },
    { cpf: '71317061181', nome: 'VILANEY RIBEIRO DE SOUSA' },
    { cpf: '71069851151', nome: 'VINICIUS COELHO PIRES DA SILVA' },
    { cpf: '07217727142', nome: 'VINICIUS ROBERTO MARQUES DA SILVA' },
    { cpf: '07429348136', nome: 'VINICIUS RODRIGUES DA SILVA' },
    { cpf: '70740612105', nome: 'VINICIUS SANTOS SOUZA' },
    { cpf: '71397914120', nome: 'VITOR GEDIAEL REIS CRISOSTOMO' },
    { cpf: '05640453188', nome: 'VYCTOR HUGO RODRIGUES DE SOUSA BRITO' },
    { cpf: '70759614139', nome: 'WANDERSON MATIAS JUNQUEIRA' },
    { cpf: '70724710113', nome: 'WANESSA DE OLIVEIRA BORGES' },
    { cpf: '71314438171', nome: 'WARLEY ALVES DOS SANTOS' },
    { cpf: '71919659100', nome: 'WELSON DIVINO BORGES' },
    { cpf: '01619297108', nome: 'WHELDER ROBSON BATISTA DE JESUS' },
    { cpf: '89027574120', nome: 'WILMAR DANTAS DOS SANTOS' },
    { cpf: '84639342187', nome: 'WILSON SILVA DE SOUSA' },
    { cpf: '07985870164', nome: 'YURI GABRIEL ARRUDA ARCANJO' }
  ]
};

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

function montarArquivosDoColaborador(nome) {
  const nomeBase = normalizarNome(nome);
  return [
    { titulo: 'Informe 1', arquivo: `${nomeBase}_1.pdf` },
    { titulo: 'Informe 2', arquivo: `${nomeBase}_2.pdf` }
  ];
}

function handleDownload(nomeArquivo) {
  const url = `${DOWNLOAD_BASE_URL}/${encodeURIComponent(nomeArquivo)}`;
  window.open(url, '_blank');
}

function renderResultado(colaborador) {
  const resultado = document.getElementById('consultaResultado');

  if (!colaborador) {
    resultado.innerHTML = `
      <div class="alert error">
        <strong>Nenhum colaborador encontrado</strong>
        <p>Não foi localizado nenhum colaborador para este CPF.</p>
      </div>
    `;
    return;
  }

  const arquivos = montarArquivosDoColaborador(colaborador.nome);

  resultado.innerHTML = `
    <div class="alert success">
      <strong>Colaborador localizado</strong>
      <p>${colaborador.nome}</p>
      <p>CPF: ${formatarCPF(colaborador.cpf)}</p>
    </div>
    <div class="panel">
      <h3>Informes disponíveis</h3>
      ${arquivos.map((item) => `
        <div class="fileCard">
          <div>
            <strong>${item.titulo}</strong>
            <p>${item.arquivo}</p>
          </div>
          <button class="btn dark" onclick="handleDownload('${item.arquivo}')">Baixar PDF</button>
        </div>
      `).join('')}
    </div>
  `;
}

function consultarCPF() {
  const input = document.getElementById('cpfInput');
  const cpf = limparCPF(input.value);
  const colaborador = state.colaboradores.find((item) => item.cpf === cpf);
  renderResultado(colaborador);
}

document.getElementById('consultarBtn')?.addEventListener('click', consultarCPF);
document.getElementById('cpfInput')?.addEventListener('input', (e) => {
  e.target.value = formatarCPF(e.target.value);
});
