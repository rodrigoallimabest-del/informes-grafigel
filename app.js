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
    { cpf: '13159673677', nome: 'CAMILA SANTANA GOMES' },
    { cpf: '95338675153', nome: 'CARLOS ALEXANDRO DE ARAUJO SANTOS' },
    { cpf: '70849818109', nome: 'CARLOS DE ALMEIDA DO ESPIRITO SANTOS' },
    { cpf: '70411053183', nome: 'CARLOS EDUARDO PEREIRA DOS SANTOS' },
    { cpf: '05910591185', nome: 'CARLOS HENRIQUE ANTONELLI DE PAULA' },
    { cpf: '05970238163', nome: 'CARLOS HENRIQUE DA SILVA LOURENCO' },
    { cpf: '70176285199', nome: 'CARLOS HENRIQUE DE SOUZA' },
    { cpf: '70226662101', nome: 'CARLOS HENRIQUE DIAS DA SILVA' },
    { cpf: '04755008140', nome: 'CASSIO XAVIER NERES' },
    { cpf: '83935029187', nome: 'CHARLES JOSE PINTO MARCIANO' },
    { cpf: '89206401149', nome: 'CLEBER ALVES DE SOUZA' },
    { cpf: '95892869504', nome: 'CLEION INACIO CARVALHO DE OLIVEIRA' },
    { cpf: '02424465150', nome: 'CLEYSON ROCHA DE LACERDA' },
    { cpf: '45582637168', nome: 'CONCEICAO PEREIRA DA SILVA' },
    { cpf: '63424893358', nome: 'CRISTIANE DE MELO DO CARMO' },
    { cpf: '85933386588', nome: 'DANIEL MENDES NUNES DOS SANTOS' },
    { cpf: '75263319134', nome: 'DANIEL SILVA DE JESUS' },
    { cpf: '70660381184', nome: 'DANILLO FRANCA VELOSO' },
    { cpf: '71621278190', nome: 'DANILLO MORAIS DE LIMA' },
    { cpf: '01668046148', nome: 'DARIU PEREIRA FARIA' },
    { cpf: '05076095147', nome: 'DAVI MATIAS DO VALE' },
    { cpf: '04065653177', nome: 'DAVID ALVES DA SILVA FILHO' },
    { cpf: '04442607141', nome: 'DAVID BECHARA PARREIRA' },
    { cpf: '70019361114', nome: 'DAVID FERREIRA COSTA' },
    { cpf: '02330280130', nome: 'DEBORA OLIVEIRA PIRES' },
    { cpf: '50827227191', nome: 'DEGMAR GONZAGA FILHO' },
    { cpf: '43816444172', nome: 'DENILSON ALBINO DE OLIVEIRA' },
    { cpf: '08717420121', nome: 'DEUBER CRISTIANO RIBEIRO PIRES JUNIOR' },
    { cpf: '01654980137', nome: 'DIMITRIUS CAVALLINI POSSE DE ALBUQUERQUE' },
    { cpf: '70194761207', nome: 'DIOGO BATISTA GALVAO' },
    { cpf: '22921150182', nome: 'DIVINO CARLOS PACHECO' },
    { cpf: '46727272115', nome: 'DIVINO MARTINS DE ARAUJO' },
    { cpf: '42748755120', nome: 'DOMINGOS ALVES NORONHA' },
    { cpf: '00528999184', nome: 'DOMINGOS FERREIRA DE MENES' },
    { cpf: '56587740120', nome: 'DORVALINO ALVES CORREA' },
    { cpf: '01228446105', nome: 'EDIREI FRANCISCO DE SOUSA' },
    { cpf: '00333940245', nome: 'EDIVALDO DIAS DE LIMA' },
    { cpf: '89698282149', nome: 'EDSON MESSIAS DE SOUZA' },
    { cpf: '70025543288', nome: 'EDSON PEREIRA DE SOUZA' },
    { cpf: '70215805178', nome: 'EDUARDO CRUZ DA SILVA' },
    { cpf: '87256851120', nome: 'ELCIO ANTONIO GOMES XAVIER' },
    { cpf: '01920614109', nome: 'ELIANA CRETTON SANTOS' },
    { cpf: '59815302191', nome: 'ELIANDRO FERREIRA MARQUES' },
    { cpf: '02084590140', nome: 'ELIANDRO PEREIRA RAMOS' },
    { cpf: '07356770261', nome: 'ELIELTON DA SILVA SILVA' },
    { cpf: '02328696180', nome: 'ELISA DANIELE GUEDES MARCIANO' },
    { cpf: '01314560166', nome: 'ELIVANIA LUIZ TAVARES' },
    { cpf: '70146789148', nome: 'EMERSON MATEUS DE NASCIMENTO' },
    { cpf: '87768780159', nome: 'EMERSON RODRIGUES DE BRITO' },
    { cpf: '71235445100', nome: 'EMERSON VASCONCELOS DE BRITO' },
    { cpf: '04244156232', nome: 'EMILY BRENDA SILVA DA SILVA' },
    { cpf: '60497905310', nome: 'ERICK MARCILIO DURANS PINTO' },
    { cpf: '70318479150', nome: 'ERICK RAIMUNDO PARREIRA' },
    { cpf: '70379399199', nome: 'ERICSSON PEDRO BATISTA' },
    { cpf: '04515070100', nome: 'ERIKA MANOELA DE ALMEIDA SILVA' },
    { cpf: '08197724105', nome: 'ERIKY GABRIEL DE JESUS ATAIDES' },
    { cpf: '02855934125', nome: 'EUDER LUCAS DOS ANJOS SANTOS' },
    { cpf: '04201872432', nome: 'FABIO JUNIOR DA SILVA' },
    { cpf: '00195304128', nome: 'FAINER DAVID DA SILVA' },
    { cpf: '95070940163', nome: 'FERNANDO BATISTA DA SILVA' },
    { cpf: '04783979170', nome: 'FRANCIELE ALVES PEREIRA SILVA' },
    { cpf: '82420572220', nome: 'FRANCISCO EDINALDO DE SOUZA CASTRO' },
    { cpf: '70005099102', nome: 'FRANCISLEY MARTINS DE MOURA PERES' },
    { cpf: '70728915103', nome: 'GABRIEL ALVES REIS' },
    { cpf: '08021842199', nome: 'GABRIEL ANTONIO DA SILVA' },
    { cpf: '05494855112', nome: 'GABRIEL ARAGAO MARTINS' },
    { cpf: '62014353360', nome: 'GABRIEL DOS SANTOS SOUZA' },
    { cpf: '74818473120', nome: 'GABRIEL FARIAS DA SILVA' },
    { cpf: '70650789148', nome: 'GABRIEL GIUSEPE DE SOUSA' },
    { cpf: '07228566289', nome: 'GEELISON SANTOS FONSECA' },
    { cpf: '03418721133', nome: 'GEORGIA ABRAO' },
    { cpf: '07894475335', nome: 'GHYSA PINTO MIRANDA' },
    { cpf: '40849490510', nome: 'GIDEILTON BARROS DA SILVA' },
    { cpf: '01233682270', nome: 'GLAUDILSON RENATO DOS SANTOS SILVA' },
    { cpf: '05664881160', nome: 'GLEICIKELLY DE SOUZA' },
    { cpf: '00887570135', nome: 'GRACIELLE BATISTA DE PAULA GUIMARAES' },
    { cpf: '03935918160', nome: 'GUILHERME HENRIQUE FERREIRA CANDIDO' },
    { cpf: '70565575112', nome: 'GUILHERME SANTOS CUNHA' },
    { cpf: '05396597119', nome: 'GUSTAVO ALVES DA SILVA' },
    { cpf: '06723043251', nome: 'GUSTAVO PEREIRA NASCIMENTO' },
    { cpf: '70458744131', nome: 'GUSTAVO PHELIPE PIRES SOARES' },
    { cpf: '02725650160', nome: 'HENRIQUE MELO DINIZ' },
    { cpf: '70789943107', nome: 'HERIC ARCANJO RODRIGUES DE OLIVEIRA' },
    { cpf: '78340942115', nome: 'HOZANA TEIXEIRA DE ASSUNCAO' },
    { cpf: '03563507112', nome: 'IDESLAN PEREIRA DE ALMEIDA' },
    { cpf: '05960196298', nome: 'ISMAEL CARDOSO DE OLIVEIRA' },
    { cpf: '85048356187', nome: 'ISRAEL OLIVEIRA CARNEIRO' },
    { cpf: '86153862187', nome: 'JAIRO DIAS DA SILVA' },
    { cpf: '06040193190', nome: 'JAZIEL PAULO DA SILVA' },
    { cpf: '01854315188', nome: 'JOANA GONZAGA PEREIRA' },
    { cpf: '13132839400', nome: 'JOAO ANTONIO DOS SANTOS JUNIOR' },
    { cpf: '97164399115', nome: 'JOAO PAULO DA SILVA ALVES' },
    { cpf: '70879844116', nome: 'JOAO PAULO DO CARMO DIAS' },
    { cpf: '60653064365', nome: 'JOAO VICTOR SANTOS SOUSA' },
    { cpf: '64842762187', nome: 'JORBASAN BATISTA DOS SANTOS' },
    { cpf: '00945869185', nome: 'JORDAO DE ARAUJO GOMES' },
    { cpf: '04560461350', nome: 'JORGE LUIS LIMA DE SOUSA' },
    { cpf: '02940502307', nome: 'JORGE LUIZ MACHADO PEREIRA' },
    { cpf: '95081631191', nome: 'JOSE DE OLIVEIRA MATOS' },
    { cpf: '43444652100', nome: 'JOSE DIAS ANTUNES' },
    { cpf: '76372200104', nome: 'JOSE MIRANDA DE LIMA' },
    { cpf: '70101387105', nome: 'JOSE OLIVEIRA COSTA' },
    { cpf: '04282228547', nome: 'JOSENILDO SANTIAGO DOS SANTOS' },
    { cpf: '43414532115', nome: 'JOSENIR CARVALHO DE LIMA' },
    { cpf: '62442401380', nome: 'JOSIELE DA LUZ CARVALHO' },
    { cpf: '01431260169', nome: 'JOVENIAS MARIA DE JESUS' },
    { cpf: '70097505137', nome: 'JOYCE ALVES DOS SANTOS' },
    { cpf: '03568990121', nome: 'JOYCE LUDMILA ALVES ROMEIRO' },
    { cpf: '70087401150', nome: 'JULIO CESAR SILVA RIBEIRO' },
    { cpf: '00600191150', nome: 'JUNIOR CEZAR ALVES LEAO' },
    { cpf: '54844932187', nome: 'JURANDIR SANTANA' },
    { cpf: '05635750346', nome: 'KAYRO MATEUS OLIVEIRA COELHO' },
    { cpf: '03491450160', nome: 'KLERISTON DOS SANTOS GOMES' },
    { cpf: '70714026123', nome: 'LAURO SABACK SA NETO' },
    { cpf: '70927196158', nome: 'LAYANE ALVES DE HOLANDA JANUARIO' },
    { cpf: '00502572183', nome: 'LEANDRO DAMASCENO BARBOSA' },
    { cpf: '31185187820', nome: 'LEANDRO DE SOUSA' },
    { cpf: '05643158183', nome: 'LEANDRO NUNES DE ALMEIDA' },
    { cpf: '03547950155', nome: 'LEANDRO OLIVEIRA SOUZA' },
    { cpf: '00866112162', nome: 'LEILA DA SILVA BEZERRA' },
    { cpf: '92052363149', nome: 'LEOMAR JUSTO DE OLIVEIRA' },
    { cpf: '05479234145', nome: 'LEONARDO BARBOSA DOS SANTOS' },
    { cpf: '05337889516', nome: 'LEONARDO DOS SANTOS SOUZA' },
    { cpf: '00003870103', nome: 'LEONICE RODRIGUES DE SOUSA' },
    { cpf: '90589190130', nome: 'LINIENNY MARQUES CAVALCANTE MOURA' },
    { cpf: '01109970188', nome: 'LIVIA RODRIGUES MONTEIRO' },
    { cpf: '03122949130', nome: 'LUAN DE PAULA MARQUES GONCALVES' },
    { cpf: '04855318108', nome: 'LUCAS BRAGA DA SILVA' },
    { cpf: '03421739102', nome: 'LUCAS GOMES DE SANTANA' },
    { cpf: '06521196111', nome: 'LUCAS LUSTOSA ARAUJO' },
    { cpf: '79625711104', nome: 'LUCIANO OLIVEIRA DOS SANTOS' },
    { cpf: '01716995132', nome: 'LUCINEIDE PAULA DOS SANTOS' },
    { cpf: '04689954208', nome: 'LUIDI SOUZA DE OLIVEIRA' },
    { cpf: '05432043165', nome: 'LUIS CARLOS CAMILO' },
    { cpf: '70383539188', nome: 'LUIS FELLIPPE RODRIGUES DA SILVA' },
    { cpf: '21082197149', nome: 'LUIZ ANTONIO NUNES' },
    { cpf: '87529483153', nome: 'LUIZ CARLOS RODRIGUES' },
    { cpf: '39504972187', nome: 'LUIZ JULIO DE LIMA' },
    { cpf: '05818658120', nome: 'LUIZA RIBEIRO DOS SANTOS' },
    { cpf: '84483610325', nome: 'MACIEL SILVA SAMPAIO' },
    { cpf: '00761734376', nome: 'MANOEL MARCOS LIMA SILVA' },
    { cpf: '86275763191', nome: 'MANUEL BONFIM DA COSTA CAVALCANTE' },
    { cpf: '88781828187', nome: 'MARCELO DE DEUS PEREIRA' },
    { cpf: '01202123155', nome: 'MARCELO DIAS PEIXOTO' },
    { cpf: '00333365127', nome: 'MARCIA ARAUJO DA SILVA' },
    { cpf: '71412584183', nome: 'MARCIA VITORIA DA SILVA BONFIM' },
    { cpf: '76454851168', nome: 'MARCIO CAVALCANTE BENTO' },
    { cpf: '04320036140', nome: 'MARCIO NERES DE SOUZA JUNIOR' },
    { cpf: '04679204192', nome: 'MARCO ANTONIO BARBOSA RODRIGUES' },
    { cpf: '88657086204', nome: 'MARIA DA PAZ DIAS PEREIRA' },
    { cpf: '70720657172', nome: 'MARIA DE JESUS SILVA' },
    { cpf: '04317627167', nome: 'MARILIA ALMEIDA LEAL DE SOUZA' },
    { cpf: '04278521375', nome: 'MARINEZ MARIA DE SOUZA' },
    { cpf: '04672829197', nome: 'MATHEUS RODRIGUES DE SOUZA BARBOSA' },
    { cpf: '16548456637', nome: 'MAYCON DOUGLAS DOS REIS SILVEIRA' },
    { cpf: '00949137146', nome: 'MILTON CABRAL DA SILVA' },
    { cpf: '39159086149', nome: 'MOACIR PEREIRA AGUIAR' },
    { cpf: '46733248115', nome: 'NEIRIMARCE VELOSO DE CARVALHO FERNANDES' },
    { cpf: '84981792115', nome: 'NELSON MESSIAS DE SOUSA' },
    { cpf: '70808079212', nome: 'NESTOR ALI LARA RENGEL' },
    { cpf: '00628240155', nome: 'OSANA GOMES DA SILVA' },
    { cpf: '71355755123', nome: 'PABLO JUNIO CALDEIRA DA SILVA' },
    { cpf: '01925723186', nome: 'PATRICIA DE ALMEIDA SILVA' },
    { cpf: '02630383270', nome: 'PATRICK TAVARES FERREIRA' },
    { cpf: '80914462172', nome: 'PAULO CESAR BORGES DE ASSIS' },
    { cpf: '24148431368', nome: 'PAULO CESAR GOMES HOLANDA' },
    { cpf: '03129224181', nome: 'PAULO RICARDO MORATO CRUZ' },
    { cpf: '70597226105', nome: 'PEDRO HENRIQUE PEREIRA DA SILVA' },
    { cpf: '61726051358', nome: 'PEDRO LUCAS SILVA CONCEICAO' },
    { cpf: '09974529352', nome: 'RAFAEL RODRIGUES SILVA' },
    { cpf: '70188059105', nome: 'RAFAEL SADRAK MUNIZ DE SOUZA' },
    { cpf: '04655428406', nome: 'RAFAEL TRAVASSOS DE LIRA' },
    { cpf: '00616406380', nome: 'RAIMUNDO BATISTA DE SOUSA FILHO' },
    { cpf: '06064129565', nome: 'RANGEL FRANCISCO DA SILVA' },
    { cpf: '06595168103', nome: 'RAYANE MENDES DA COSTA' },
    { cpf: '03648129317', nome: 'RAYDAN SANTOS SILVA' },
    { cpf: '03542216127', nome: 'REGIANE NUNES SOUZA DELFINO' },
    { cpf: '83753338168', nome: 'REGINALDO MARTINS DE SOUSA' },
    { cpf: '00808732510', nome: 'RILDO OLIVEIRA DE SOUZA' },
    { cpf: '05838319313', nome: 'RINAR ESTEFSON BATISTA NOGUEIRA' },
    { cpf: '95731989168', nome: 'ROBERTO JOSE BISPO' },
    { cpf: '75798573168', nome: 'RODRIGO ALVES DE LIMA' },
    { cpf: '70199341109', nome: 'RODRIGO FELIX ARRUDA' },
    { cpf: '53305132191', nome: 'ROMILDO DE PAULO CASTRO' },
    { cpf: '83830600178', nome: 'RONALDO APARECIDO DE SOUZA' },
    { cpf: '70799719188', nome: 'RONILSON SILVA ROCHA' },
    { cpf: '00438991109', nome: 'ROSANGELA ALVES DE SOUZA' },
    { cpf: '02722741199', nome: 'ROSANITA BARBOSA SILVA' },
    { cpf: '98622102149', nome: 'ROSILENE INOCENCIO DE GODOI' },
    { cpf: '00655809155', nome: 'RUBENS PEREIRA DA COSTA' },
    { cpf: '04400727190', nome: 'SAMANTHA MENDES DE SOUZA' },
    { cpf: '70155785141', nome: 'SAMUEL MONTEIRO MARQUES' },
    { cpf: '70853956138', nome: 'SAMUEL NASCIMENTO SALES VIANA' },
    { cpf: '70421360127', nome: 'SILAS SANTOS MACEDO' },
    { cpf: '00089505557', nome: 'SIVONALDO DA SILVA ROCHA' },
    { cpf: '01744501173', nome: 'SUELI RODRIGUES XAVIER' },
    { cpf: '00331855143', nome: 'SUELMA PEREIRA DA SILVA' },
    { cpf: '06770930129', nome: 'SUYANE DA SILVA AZEVEDO' },
    { cpf: '04338452285', nome: 'TAHYAN TAVARES GUIMARAES' },
    { cpf: '62290153311', nome: 'TATIANE MOURA DOS REIS' },
    { cpf: '70909346160', nome: 'TATIANE SOARES DE SOUSA' },
    { cpf: '70412212102', nome: 'TAYNARA BATISTA LACERDA SILVA' },
    { cpf: '05076523122', nome: 'TERTULLIANA PEREIRA DO CARMO' },
    { cpf: '70390647152', nome: 'THAYWANE OLIVEIRA FERREIRA DOS SANTOS' },
    { cpf: '02408892155', nome: 'THIAGO FERNANDES DA CUNHA' },
    { cpf: '04591574180', nome: 'THIAGO PEREIRA DOS SANTOS' },
    { cpf: '42739365187', nome: 'VAGNER DE JESUS PEREIRA' },
    { cpf: '60581108310', nome: 'VALDECY FERREIRA DE CARVALHO JUNIOR' },
    { cpf: '04212024594', nome: 'VALDIRENE DE JESUS SANTOS' },
    { cpf: '89350731134', nome: 'VALDIVINO ALVES DA SILVA' },
    { cpf: '96523689115', nome: 'VALDIVINO DE SOUSA OLIVEIRA' },
    { cpf: '05983325299', nome: 'VALERIA CORREA OLIVEIRA' },
    { cpf: '97134953149', nome: 'VALTO PEREIRA DA SILVA' },
    { cpf: '87271087168', nome: 'VANDERLY OLIVEIRA DA MATA' },
    { cpf: '01770045171', nome: 'VANDESMAR APARECIDO DA SILVA' },
    { cpf: '70566635160', nome: 'VICTOR HUGO ABREU' },
    { cpf: '02776191146', nome: 'VILANEY RIBEIRO DE SOUSA' },
    { cpf: '03324091128', nome: 'VINICIUS COELHO PIRES DA SILVA' },
    { cpf: '03013802103', nome: 'VINICIUS ROBERTO MARQUES DA SILVA' },
    { cpf: '70613174186', nome: 'VINICIUS RODRIGUES DA SILVA' },
    { cpf: '07995748566', nome: 'VINICIUS SANTOS SOUZA' },
    { cpf: '04183018161', nome: 'VITOR GEDIAEL REIS CRISOSTOMO' },
    { cpf: '04400270122', nome: 'VYCTOR HUGO RODRIGUES DE SOUSA BRITO' },
    { cpf: '00440864151', nome: 'WANDERSON MATIAS JUNQUEIRA' },
    { cpf: '02805659171', nome: 'WANESSA DE OLIVEIRA BORGES' },
    { cpf: '96175532104', nome: 'WARLEY ALVES DOS SANTOS' },
    { cpf: '52156656134', nome: 'WELSON DIVINO BORGES' },
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

const colaboradoresComContinuacao1 = [
  '70234757108',
  '02424465150',
  '04201872432',
  '04515070100',
  '00887570135',
  '06040193190',
  '00600191150',
  '54844932187',
  '00866112162',
  '03122949130',
  '79625711104',
  '87529483153',
  '00628240155',
  '04655428406',
  '00438991109',
  '02408892155',
  '42739365187',
  '60581108310',
  '89350731134',
  '03013802103',
  '96175532104',
  '89027574120',
  '84639342187',
  '04317627167',
  '46727272115',
  '95070940163',
  '70097505137',
  '80914462172'
];

const colaboradoresComContinuacao2 = [
  '70234757108',
  '02424465150',
  '04201872432',
  '04515070100',
  '00887570135',
  '06040193190',
  '00600191150',
  '54844932187',
  '00866112162',
  '03122949130',
  '79625711104',
  '87529483153',
  '00628240155',
  '04655428406',
  '00438991109',
  '02408892155',
  '42739365187',
  '60581108310',
  '89350731134',
  '03013802103',
  '96175532104',
  '89027574120',
  '84639342187'
];

function montarArquivosDoColaborador(colaborador) {
  const nomeBase = normalizarNome(colaborador.nome);
  const arquivos = [
    { titulo: 'Informe 1', arquivo: `${nomeBase}_1.pdf` },
    { titulo: 'Informe 2', arquivo: `${nomeBase}_2.pdf` }
  ];

  if (colaboradoresComContinuacao1.includes(colaborador.cpf)) {
    arquivos.splice(1, 0, {
      titulo: 'Continuação Informe 1',
      arquivo: `${nomeBase}_1.1.pdf`
    });
  }

  if (colaboradoresComContinuacao2.includes(colaborador.cpf)) {
    arquivos.push({
      titulo: 'Continuação Informe 2',
      arquivo: `${nomeBase}_2.1.pdf`
    });
  }

  return arquivos;
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

  const arquivos = montarArquivosDoColaborador(colaborador);

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
