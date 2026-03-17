const DOWNLOAD_BASE_URL = "https://dapper-marigold-f1af05.netlify.app";
const state = {
  colaboradores: [
  { cpf: '60250660350', nome: 'ADONIAS DE SOUSA OLIVEIRA', arquivos: [] },
  { cpf: '70715415158', nome: 'ADRIEL MACHADO NETO', arquivos: [] },
  { cpf: '70439498155', nome: 'ALAN CESAR DE MELO', arquivos: [] },
  { cpf: '01419694154', nome: 'ALEXANDRE BORGES FERREIRA', arquivos: [] },
  { cpf: '01324167190', nome: 'ALFRENE ALVES DA SILVA', arquivos: [] },
  { cpf: '70854752188', nome: 'AMANDA CRISTINA LOPES PEREIRA', arquivos: [] },
  { cpf: '92018670182', nome: 'ANA LUCIA DE SOUZA LIMA SILVA', arquivos: [] },
  { cpf: '94853339191', nome: 'ANA PAULA SILVA DOS REIS', arquivos: [] },
  { cpf: '00095169130', nome: 'ANAEL RIBEIRO BISPO', arquivos: [] },
  { cpf: '91378044134', nome: 'ANDRE ROBERTO DA SILVA', arquivos: [] },
  { cpf: '88547752153', nome: 'ANGELO ALVES DE OLIVEIRA', arquivos: [] },
  { cpf: '71238567169', nome: 'ANGELO LOPES DOS SANTOS', arquivos: [] },
  { cpf: '06676574101', nome: 'ANILTON DE SOUSA PEREIRA', arquivos: [] },
  { cpf: '00913358339', nome: 'ANTONIO VIRGINIO DE SOUSA NETO', arquivos: [] },
  { cpf: '02073872140', nome: 'APARECIDO PEREIRA DE MIRANDA', arquivos: [] },
  { cpf: '03447244178', nome: 'ARLETE PEREIRA DOS SANTOS', arquivos: [] },
  { cpf: '88684970187', nome: 'ARNICREN JOSE DOS SANTOS', arquivos: [] },
  { cpf: '71029351104', nome: 'ARTUR GODINHO LEAO', arquivos: [] },
  { cpf: '71535584114', nome: 'BRAYAN DE OLIVEIRA MACHADO', arquivos: [] },
  { cpf: '70234757108', nome: 'BRENDO LUKA DA CUNHA ALVES', arquivos: [] },
  { cpf: '70723997128', nome: 'BRUNA NASCIMENTO SALES VIANA', arquivos: [] },
  { cpf: '70070668140', nome: 'CAMILA SANTANA GOMES', arquivos: [] },
  { cpf: '06714986146', nome: 'CARLOS ALEXANDRO DE ARAUJO SANTOS', arquivos: [] },
  { cpf: '99546804172', nome: 'CARLOS DE ALMEIDA DO ESPIRITO SANTOS', arquivos: [] },
  { cpf: '70383185118', nome: 'CARLOS EDUARDO PEREIRA DOS SANTOS', arquivos: [] },
  { cpf: '71085031151', nome: 'CARLOS HENRIQUE ANTONELLI DE PAULA', arquivos: [] },
  { cpf: '90201255120', nome: 'CARLOS HENRIQUE DA SILVA LOURENCO', arquivos: [] },
  { cpf: '50047621187', nome: 'CARLOS HENRIQUE DE SOUZA', arquivos: [] },
  { cpf: '00231117199', nome: 'CARLOS HENRIQUE DIAS DA SILVA', arquivos: [] },
  { cpf: '71567291108', nome: 'CASSIO XAVIER NERES', arquivos: [] },
  { cpf: '51484563100', nome: 'CHARLES JOSE PINTO MARCIANO', arquivos: [] },
  { cpf: '01873005130', nome: 'CLEBER ALVES DE SOUZA', arquivos: [] },
  { cpf: '70524617102', nome: 'CLEION INACIO CARVALHO DE OLIVEIRA', arquivos: [] },
  { cpf: '71914222145', nome: 'CLEYSON ROCHA DE LACERDA', arquivos: [] },
  { cpf: '69553510159', nome: 'CONCEICAO PEREIRA DA SILVA', arquivos: [] },
  { cpf: '02072855171', nome: 'CRISTIANE DE MELO DO CARMO', arquivos: [] },
  { cpf: '71284417117', nome: 'DANIEL MENDES NUNES DOS SANTOS', arquivos: [] },
  { cpf: '08198012396', nome: 'DANIEL SILVA DE JESUS', arquivos: [] },
  { cpf: '70232181188', nome: 'DANILLO FRANCA VELOSO', arquivos: [] },
  { cpf: '07203960148', nome: 'DANILLO MORAIS DE LIMA', arquivos: [] },
  { cpf: '97168484134', nome: 'DARIU PEREIRA FARIA', arquivos: [] },
  { cpf: '70547097139', nome: 'DAVI MATIAS DO VALE', arquivos: [] },
  { cpf: '03414329100', nome: 'DAVID ALVES DA SILVA FILHO', arquivos: [] },
  { cpf: '70202133177', nome: 'DAVID BECHARA PARREIRA', arquivos: [] },
  { cpf: '70498192185', nome: 'DAVID FERREIRA COSTA', arquivos: [] },
  { cpf: '80485838134', nome: 'DEBORA OLIVEIRA PIRES', arquivos: [] },
  { cpf: '71499725115', nome: 'DEGMAR GONZAGA FILHO', arquivos: [] },
  { cpf: '71419731115', nome: 'DENILSON ALBINO DE OLIVEIRA', arquivos: [] },
  { cpf: '80139472172', nome: 'DEUBER CRISTIANO RIBEIRO PIRES JUNIOR', arquivos: [] },
  { cpf: '07223028106', nome: 'DIMITRIUS CAVALLINI POSSE DE ALBUQUERQUE', arquivos: [] },
  { cpf: '69813863159', nome: 'DIOGO BATISTA GALVAO', arquivos: [] },
  { cpf: '71480221170', nome: 'DIVINO CARLOS PACHECO', arquivos: [] },
  { cpf: '69836513168', nome: 'DIVINO MARTINS DE ARAUJO', arquivos: [] },
  { cpf: '93439940144', nome: 'DOMINGOS ALVES NORONHA', arquivos: [] },
  { cpf: '71181472172', nome: 'DOMINGOS FERREIRA DE MENES', arquivos: [] },
  { cpf: '60936216149', nome: 'DORVALINO ALVES CORREA', arquivos: [] },
  { cpf: '71557330178', nome: 'EDIREI FRANCISCO DE SOUSA', arquivos: [] },
  { cpf: '96803021168', nome: 'EDIVALDO DIAS DE LIMA', arquivos: [] },
  { cpf: '88738688149', nome: 'EDSON MESSIAS DE SOUZA', arquivos: [] },
  { cpf: '02940909131', nome: 'EDSON PEREIRA DE SOUZA', arquivos: [] },
  { cpf: '70647652179', nome: 'EDUARDO CRUZ DA SILVA', arquivos: [] },
  { cpf: '46921607104', nome: 'ELCIO ANTONIO GOMES XAVIER', arquivos: [] },
  { cpf: '03831401136', nome: 'ELIANA CRETTON SANTOS', arquivos: [] },
  { cpf: '71623523177', nome: 'ELIANDRO FERREIRA MARQUES', arquivos: [] },
  { cpf: '00663194137', nome: 'ELIANDRO PEREIRA RAMOS', arquivos: [] },
  { cpf: '02587521154', nome: 'ELIELTON DA SILVA SILVA', arquivos: [] },
  { cpf: '71265415145', nome: 'ELISA DANIELE GUEDES MARCIANO', arquivos: [] },
  { cpf: '70601135144', nome: 'ELIVANIA LUIZ TAVARES', arquivos: [] },
  { cpf: '71593524111', nome: 'EMERSON MATEUS DE NASCIMENTO', arquivos: [] },
  { cpf: '01401183176', nome: 'EMERSON RODRIGUES DE BRITO', arquivos: [] },
  { cpf: '02124205186', nome: 'EMERSON VASCONCELOS DE BRITO', arquivos: [] },
  { cpf: '70373491102', nome: 'EMILY BRENDA SILVA DA SILVA', arquivos: [] },
  { cpf: '06069181110', nome: 'ERICK MARCILIO DURANS PINTO', arquivos: [] },
  { cpf: '70444026100', nome: 'ERICK RAIMUNDO PARREIRA', arquivos: [] },
  { cpf: '70469980158', nome: 'ERICSSON PEDRO BATISTA', arquivos: [] },
  { cpf: '70386945114', nome: 'ERIKA MANOELA DE ALMEIDA SILVA', arquivos: [] },
  { cpf: '71235165198', nome: 'ERIKY GABRIEL DE JESUS ATAIDES', arquivos: [] },
  { cpf: '08700499105', nome: 'EUDER LUCAS DOS ANJOS SANTOS', arquivos: [] },
  { cpf: '02514050107', nome: 'FABIO JUNIOR DA SILVA', arquivos: [] },
  { cpf: '70395524170', nome: 'FAINER DAVID DA SILVA', arquivos: [] },
  { cpf: '71693248170', nome: 'FERNANDO BATISTA DA SILVA', arquivos: [] },
  { cpf: '06708968104', nome: 'FRANCIELE ALVES PEREIRA SILVA', arquivos: [] },
  { cpf: '02410512310', nome: 'FRANCISCO EDINALDO DE SOUZA CASTRO', arquivos: [] },
  { cpf: '01218531192', nome: 'FRANCISLEY MARTINS DE MOURA PERES', arquivos: [] },
  { cpf: '70341102100', nome: 'GABRIEL ALVES REIS', arquivos: [] },
  { cpf: '02169355185', nome: 'GABRIEL ANTONIO DA SILVA', arquivos: [] },
  { cpf: '70239764177', nome: 'GABRIEL ARAGAO MARTINS', arquivos: [] },
  { cpf: '70777402150', nome: 'GABRIEL DOS SANTOS SOUZA', arquivos: [] },
  { cpf: '70376666117', nome: 'GABRIEL FARIAS DA SILVA', arquivos: [] },
  { cpf: '71290068179', nome: 'GABRIEL GIUSEPE DE SOUSA', arquivos: [] },
  { cpf: '05643231131', nome: 'GEELISON SANTOS FONSECA', arquivos: [] },
  { cpf: '50810041166', nome: 'GEORGIA ABRAO', arquivos: [] },
  { cpf: '70509905140', nome: 'GHYSA PINTO MIRANDA', arquivos: [] },
  { cpf: '03554954182', nome: 'GIDEILTON BARROS DA SILVA', arquivos: [] },
  { cpf: '70630852100', nome: 'GLAUDILSON RENATO DOS SANTOS SILVA', arquivos: [] },
  { cpf: '51436362109', nome: 'GLEICIKELLY DE SOUZA', arquivos: [] },
  { cpf: '71272897108', nome: 'GRACIELLE BATISTA DE PAULA GUIMARAES', arquivos: [] },
  { cpf: '71130755157', nome: 'GUILHERME HENRIQUE FERREIRA CANDIDO', arquivos: [] },
  { cpf: '71058718121', nome: 'GUILHERME SANTOS CUNHA', arquivos: [] },
  { cpf: '70705953135', nome: 'GUSTAVO ALVES DA SILVA', arquivos: [] },
  { cpf: '70397872166', nome: 'GUSTAVO PEREIRA NASCIMENTO', arquivos: [] },
  { cpf: '03523100195', nome: 'GUSTAVO PHELIPE PIRES SOARES', arquivos: [] },
  { cpf: '97513312191', nome: 'HENRIQUE MELO DINIZ', arquivos: [] },
  { cpf: '05375426118', nome: 'HERIC ARCANJO RODRIGUES DE OLIVEIRA', arquivos: [] },
  { cpf: '70512545121', nome: 'HOZANA TEIXEIRA DE ASSUNCAO', arquivos: [] },
  { cpf: '04900519137', nome: 'IDESLAN PEREIRA DE ALMEIDA', arquivos: [] },
  { cpf: '70414025113', nome: 'ISMAEL CARDOSO DE OLIVEIRA', arquivos: [] },
  { cpf: '03110079181', nome: 'ISRAEL OLIVEIRA CARNEIRO', arquivos: [] },
  { cpf: '02233850154', nome: 'JAIRO DIAS DA SILVA', arquivos: [] },
  { cpf: '70781815154', nome: 'JAZIEL PAULO DA SILVA', arquivos: [] },
  { cpf: '70656953124', nome: 'JOANA GONZAGA PEREIRA', arquivos: [] },
  { cpf: '70626544117', nome: 'JOAO ANTONIO DOS SANTOS JUNIOR', arquivos: [] },
  { cpf: '71537601184', nome: 'JOAO PAULO DA SILVA ALVES', arquivos: [] },
  { cpf: '70809139101', nome: 'JOAO PAULO DO CARMO DIAS', arquivos: [] },
  { cpf: '71279538196', nome: 'JOAO VICTOR SANTOS SOUSA', arquivos: [] },
  { cpf: '80546216149', nome: 'JORBASAN BATISTA DOS SANTOS', arquivos: [] },
  { cpf: '86915014120', nome: 'JORDAO DE ARAUJO GOMES', arquivos: [] },
  { cpf: '05388830159', nome: 'JORGE LUIS LIMA DE SOUSA', arquivos: [] },
  { cpf: '69992083159', nome: 'JORGE LUIZ MACHADO PEREIRA', arquivos: [] },
  { cpf: '70745514176', nome: 'JOSE DE OLIVEIRA MATOS', arquivos: [] },
  { cpf: '69840406120', nome: 'JOSE DIAS ANTUNES', arquivos: [] },
  { cpf: '71115764187', nome: 'JOSE MIRANDA DE LIMA', arquivos: [] },
  { cpf: '71447185153', nome: 'JOSE OLIVEIRA COSTA', arquivos: [] },
  { cpf: '03161918173', nome: 'JOSENILDO SANTIAGO DOS SANTOS', arquivos: [] },
  { cpf: '70699301175', nome: 'JOSENIR CARVALHO DE LIMA', arquivos: [] },
  { cpf: '70512586100', nome: 'JOSIELE DA LUZ CARVALHO', arquivos: [] },
  { cpf: '70534489189', nome: 'JOVENIAS MARIA DE JESUS', arquivos: [] },
  { cpf: '71148349145', nome: 'JOYCE ALVES DOS SANTOS', arquivos: [] },
  { cpf: '70641911106', nome: 'JOYCE LUDMILA ALVES ROMEIRO', arquivos: [] },
  { cpf: '89172304191', nome: 'JULIO CESAR SILVA RIBEIRO', arquivos: [] },
  { cpf: '70709144138', nome: 'JUNIOR CEZAR ALVES LEAO', arquivos: [] },
  { cpf: '71586870186', nome: 'JURANDIR SANTANA', arquivos: [] },
  { cpf: '07144414173', nome: 'KAYRO MATEUS OLIVEIRA COELHO', arquivos: [] },
  { cpf: '70771254140', nome: 'KLERISTON DOS SANTOS GOMES', arquivos: [] },
  { cpf: '71525698100', nome: 'LAURO SABACK SA NETO', arquivos: [] },
  { cpf: '70709198126', nome: 'LAYANE ALVES DE HOLANDA JANUARIO', arquivos: [] },
  { cpf: '80323035172', nome: 'LEANDRO DAMASCENO BARBOSA', arquivos: [] },
  { cpf: '70647382139', nome: 'LEANDRO DE SOUSA', arquivos: [] },
  { cpf: '70448175105', nome: 'LEANDRO NUNES DE ALMEIDA', arquivos: [] },
  { cpf: '70483715150', nome: 'LEANDRO OLIVEIRA SOUZA', arquivos: [] },
  { cpf: '70702032171', nome: 'LEILA DA SILVA BEZERRA', arquivos: [] },
  { cpf: '70756086172', nome: 'LEOMAR JUSTO DE OLIVEIRA', arquivos: [] },
  { cpf: '71594294189', nome: 'LEONARDO BARBOSA DOS SANTOS', arquivos: [] },
  { cpf: '71239054160', nome: 'LEONARDO DOS SANTOS SOUZA', arquivos: [] },
  { cpf: '70700874147', nome: 'LEONICE RODRIGUES DE SOUSA', arquivos: [] },
  { cpf: '08205606108', nome: 'LINIENNY MARQUES CAVALCANTE MOURA', arquivos: [] },
  { cpf: '71389044144', nome: 'LIVIA RODRIGUES MONTEIRO', arquivos: [] },
  { cpf: '70718250175', nome: 'LUAN DE PAULA MARQUES GONCALVES', arquivos: [] },
  { cpf: '70846284175', nome: 'LUCAS BRAGA DA SILVA', arquivos: [] },
  { cpf: '70376832135', nome: 'LUCAS GOMES DE SANTANA', arquivos: [] },
  { cpf: '70731595180', nome: 'LUCAS LUSTOSA ARAUJO', arquivos: [] },
  { cpf: '70807978103', nome: 'LUCIANO OLIVEIRA DOS SANTOS', arquivos: [] },
  { cpf: '71401907115', nome: 'LUCINEIDE PAULA DOS SANTOS', arquivos: [] },
  { cpf: '70655352179', nome: 'LUIDI SOUZA DE OLIVEIRA', arquivos: [] },
  { cpf: '70813291173', nome: 'LUIS CARLOS CAMILO', arquivos: [] },
  { cpf: '02436661122', nome: 'LUIS FELLIPPE RODRIGUES DA SILVA', arquivos: [] },
  { cpf: '00508526140', nome: 'LUIZ ANTONIO NUNES', arquivos: [] },
  { cpf: '71337904180', nome: 'LUIZ CARLOS RODRIGUES', arquivos: [] },
  { cpf: '71051005100', nome: 'LUIZ JULIO DE LIMA', arquivos: [] },
  { cpf: '70370079172', nome: 'LUIZA RIBEIRO DOS SANTOS', arquivos: [] },
  { cpf: '70809600172', nome: 'MACIEL SILVA SAMPAIO', arquivos: [] },
  { cpf: '70644147178', nome: 'MANOEL MARCOS LIMA SILVA', arquivos: [] },
  { cpf: '81290222153', nome: 'MANUEL BONFIM DA COSTA CAVALCANTE', arquivos: [] },
  { cpf: '50782203168', nome: 'MARCELO DE DEUS PEREIRA', arquivos: [] },
  { cpf: '71186290149', nome: 'MARCELO DIAS PEIXOTO', arquivos: [] },
  { cpf: '03382792165', nome: 'MARCIA ARAUJO DA SILVA', arquivos: [] },
  { cpf: '04671736179', nome: 'MARCIA VITORIA DA SILVA BONFIM', arquivos: [] },
  { cpf: '70670740100', nome: 'MARCIO CAVALCANTE BENTO', arquivos: [] },
  { cpf: '01283399104', nome: 'MARCIO NERES DE SOUZA JUNIOR', arquivos: [] },
  { cpf: '00401718137', nome: 'MARCO ANTONIO BARBOSA RODRIGUES', arquivos: [] },
  { cpf: '69732458149', nome: 'MARIA DA PAZ DIAS PEREIRA', arquivos: [] },
  { cpf: '91127521100', nome: 'MARIA DE JESUS SILVA', arquivos: [] },
  { cpf: '70524767152', nome: 'MARILIA ALMEIDA LEAL DE SOUZA', arquivos: [] },
  { cpf: '71172481187', nome: 'MARINEZ MARIA DE SOUZA', arquivos: [] },
  { cpf: '71230428176', nome: 'MATHEUS RODRIGUES DE SOUZA BARBOSA', arquivos: [] },
  { cpf: '71547600106', nome: 'MAYCON DOUGLAS DOS REIS SILVEIRA', arquivos: [] },
  { cpf: '01655457120', nome: 'MILTON CABRAL DA SILVA', arquivos: [] },
  { cpf: '71715300104', nome: 'MOACIR PEREIRA AGUIAR', arquivos: [] },
  { cpf: '00946636143', nome: 'NEIRIMARCE VELOSO DE CARVALHO FERNANDES', arquivos: [] },
  { cpf: '02305827100', nome: 'NELSON MESSIAS DE SOUSA', arquivos: [] },
  { cpf: '97919309153', nome: 'NESTOR ALI LARA RENGEL', arquivos: [] },
  { cpf: '70462146185', nome: 'OSANA GOMES DA SILVA', arquivos: [] },
  { cpf: '70544924117', nome: 'PABLO JUNIO CALDEIRA DA SILVA', arquivos: [] },
  { cpf: '03512898166', nome: 'PATRICIA DE ALMEIDA SILVA', arquivos: [] },
  { cpf: '70758621177', nome: 'PATRICK TAVARES FERREIRA', arquivos: [] },
  { cpf: '71080450139', nome: 'PAULO CESAR BORGES DE ASSIS', arquivos: [] },
  { cpf: '71598697110', nome: 'PAULO CESAR GOMES HOLANDA', arquivos: [] },
  { cpf: '71095179120', nome: 'PAULO RICARDO MORATO CRUZ', arquivos: [] },
  { cpf: '71690351159', nome: 'PEDRO HENRIQUE PEREIRA DA SILVA', arquivos: [] },
  { cpf: '70812111170', nome: 'PEDRO LUCAS SILVA CONCEICAO', arquivos: [] },
  { cpf: '70541682153', nome: 'RAFAEL RODRIGUES SILVA', arquivos: [] },
  { cpf: '02236210120', nome: 'RAFAEL SADRAK MUNIZ DE SOUZA', arquivos: [] },
  { cpf: '71140642155', nome: 'RAFAEL TRAVASSOS DE LIRA', arquivos: [] },
  { cpf: '70812393179', nome: 'RAIMUNDO BATISTA DE SOUSA FILHO', arquivos: [] },
  { cpf: '70310129144', nome: 'RANGEL FRANCISCO DA SILVA', arquivos: [] },
  { cpf: '70392263109', nome: 'RAYANE MENDES DA COSTA', arquivos: [] },
  { cpf: '70353864104', nome: 'RAYDAN SANTOS SILVA', arquivos: [] },
  { cpf: '70278530108', nome: 'REGIANE NUNES SOUZA DELFINO', arquivos: [] },
  { cpf: '70542549153', nome: 'REGINALDO MARTINS DE SOUSA', arquivos: [] },
  { cpf: '70399290120', nome: 'RILDO OLIVEIRA DE SOUZA', arquivos: [] },
  { cpf: '71481958191', nome: 'RINAR ESTEFSON BATISTA NOGUEIRA', arquivos: [] },
  { cpf: '04599732126', nome: 'ROBERTO JOSE BISPO', arquivos: [] },
  { cpf: '03528645150', nome: 'RODRIGO ALVES DE LIMA', arquivos: [] },
  { cpf: '70400531107', nome: 'RODRIGO FELIX ARRUDA', arquivos: [] },
  { cpf: '71109265115', nome: 'ROMILDO DE PAULO CASTRO', arquivos: [] },
  { cpf: '06043743177', nome: 'RONALDO APARECIDO DE SOUZA', arquivos: [] },
  { cpf: '70842281118', nome: 'RONILSON SILVA ROCHA', arquivos: [] },
  { cpf: '70393904117', nome: 'ROSANGELA ALVES DE SOUZA', arquivos: [] },
  { cpf: '07349590157', nome: 'ROSANITA BARBOSA SILVA', arquivos: [] },
  { cpf: '71373660163', nome: 'ROSILENE INOCENCIO DE GODOI', arquivos: [] },
  { cpf: '71485341172', nome: 'RUBENS PEREIRA DA COSTA', arquivos: [] },
  { cpf: '71115029157', nome: 'SAMANTHA MENDES DE SOUZA', arquivos: [] },
  { cpf: '02234824190', nome: 'SAMUEL MONTEIRO MARQUES', arquivos: [] },
  { cpf: '70724104166', nome: 'SAMUEL NASCIMENTO SALES VIANA', arquivos: [] },
  { cpf: '70835801112', nome: 'SILAS SANTOS MACEDO', arquivos: [] },
  { cpf: '71164738172', nome: 'SIVONALDO DA SILVA ROCHA', arquivos: [] },
  { cpf: '02141669100', nome: 'SUELI RODRIGUES XAVIER', arquivos: [] },
  { cpf: '70782534168', nome: 'SUELMA PEREIRA DA SILVA', arquivos: [] },
  { cpf: '70352449102', nome: 'SUYANE DA SILVA AZEVEDO', arquivos: [] },
  { cpf: '70311714103', nome: 'TAHYAN TAVARES GUIMARAES', arquivos: [] },
  { cpf: '70685042119', nome: 'TATIANE MOURA DOS REIS', arquivos: [] },
  { cpf: '02303951132', nome: 'TATIANE SOARES DE SOUSA', arquivos: [] },
  { cpf: '70619124102', nome: 'TAYNARA BATISTA LACERDA SILVA', arquivos: [] },
  { cpf: '71273849161', nome: 'TERTULLIANA PEREIRA DO CARMO', arquivos: [] },
  { cpf: '71127340179', nome: 'THAYWANE OLIVEIRA FERREIRA DOS SANTOS', arquivos: [] },
  { cpf: '70482902163', nome: 'THIAGO FERNANDES DA CUNHA', arquivos: [] },
  { cpf: '70616494124', nome: 'THIAGO PEREIRA DOS SANTOS', arquivos: [] },
  { cpf: '71099774191', nome: 'VAGNER DE JESUS PEREIRA', arquivos: [] },
  { cpf: '71145814186', nome: 'VALDECY FERREIRA DE CARVALHO JUNIOR', arquivos: [] },
  { cpf: '51250754153', nome: 'VALDIRENE DE JESUS SANTOS', arquivos: [] },
  { cpf: '71243278176', nome: 'VALDIVINO ALVES DA SILVA', arquivos: [] },
  { cpf: '02855762195', nome: 'VALDIVINO DE SOUSA OLIVEIRA', arquivos: [] },
  { cpf: '70312139176', nome: 'VALERIA CORREA OLIVEIRA', arquivos: [] },
  { cpf: '89459953100', nome: 'VALTO PEREIRA DA SILVA', arquivos: [] },
  { cpf: '70369982169', nome: 'VANDERLY OLIVEIRA DA MATA', arquivos: [] },
  { cpf: '71484611120', nome: 'VANDESMAR APARECIDO DA SILVA', arquivos: [] },
  { cpf: '70513568104', nome: 'VICTOR HUGO ABREU', arquivos: [] },
  { cpf: '71317061181', nome: 'VILANEY RIBEIRO DE SOUSA', arquivos: [] },
  { cpf: '71069851151', nome: 'VINICIUS COELHO PIRES DA SILVA', arquivos: [] },
  { cpf: '07217727142', nome: 'VINICIUS ROBERTO MARQUES DA SILVA', arquivos: [] },
  { cpf: '07429348136', nome: 'VINICIUS RODRIGUES DA SILVA', arquivos: [] },
  { cpf: '70740612105', nome: 'VINICIUS SANTOS SOUZA', arquivos: [] },
  { cpf: '71397914120', nome: 'VITOR GEDIAEL REIS CRISOSTOMO', arquivos: [] },
  { cpf: '05640453188', nome: 'VYCTOR HUGO RODRIGUES DE SOUSA BRITO', arquivos: [] },
  { cpf: '70759614139', nome: 'WANDERSON MATIAS JUNQUEIRA', arquivos: [] },
  { cpf: '70724710113', nome: 'WANESSA DE OLIVEIRA BORGES', arquivos: [] },
  { cpf: '71314438171', nome: 'WARLEY ALVES DOS SANTOS', arquivos: [] },
  { cpf: '71919659100', nome: 'WELSON DIVINO BORGES', arquivos: [] },
  { cpf: '01619297108', nome: 'WHELDER ROBSON BATISTA DE JESUS', arquivos: [] },
  { cpf: '89027574120', nome: 'WILMAR DANTAS DOS SANTOS', arquivos: [] },
  { cpf: '84639342187', nome: 'WILSON SILVA DE SOUSA', arquivos: [] },
  { cpf: '07985870164', nome: 'YURI GABRIEL ARRUDA ARCANJO', arquivos: [] },
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
  const base = "https://dapper-marigold-f1af05.netlify.app";
  const url = `${base}/${encodeURIComponent(nomeArquivo)}`;
  window.open(url, '_blank');
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
