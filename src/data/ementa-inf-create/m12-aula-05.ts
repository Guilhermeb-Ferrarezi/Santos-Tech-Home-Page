import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 5,
  titulo: "Google Drive: sua nuvem pessoal",
  semana: "Semana 3",
  duracao: "1 hora",
  objetivo: `Entender o que é a nuvem e o Google Drive, acessá-lo pelo navegador, fazer upload de arquivos, criar e renomear pastas, organizar documentos e enxergar quanto espaço de armazenamento ainda está disponível.`,
  descricao: `Imagine ter uma mochila mágica que cabe no bolso, mas guarda todos os seus trabalhos, fotos e vídeos, e que você pode abrir de qualquer computador ou celular do mundo. Essa mochila existe e se chama Google Drive. Ela faz parte de algo maior chamado "nuvem": em vez de salvar seus arquivos apenas no disco do computador da sala, eles ficam guardados em servidores potentes da Google, acessíveis pela internet. Se um computador quebrar ou for trocado, seus arquivos continuam lá, intactos, esperando por você.

O Google Drive é o espaço pessoal de cada aluno na nuvem. Toda conta Google ganha, de graça, 15 GB de armazenamento para guardar documentos, planilhas, apresentações, fotos, PDFs e qualquer outro tipo de arquivo. Para acessar, basta abrir o navegador, entrar em drive.google.com e fazer login. A tela mostra os arquivos em uma área central, um menu à esquerda com atalhos como "Meu Drive" e "Recentes", e um botão grande de "+ Novo" para criar ou enviar coisas.

Nesta aula, o aluno vai colocar a mão na massa: vai aprender a fazer upload de um arquivo do computador para o Drive, criar pastas para separar matérias e assuntos, renomear documentos com nomes claros e organizar tudo arrastando arquivos para dentro das pastas certas. Organizar a nuvem é como arrumar o quarto: quando cada coisa tem seu lugar, encontrar o que se precisa fica rápido e fácil.

Por fim, o aluno vai descobrir como ver o espaço de armazenamento disponível, entendendo que a nuvem não é infinita e que vale a pena apagar o que não usa mais. Ao terminar, cada adolescente sai com uma noção concreta de que seus arquivos estão seguros, organizados e ao alcance de um clique, em qualquer lugar.`,
  materiais: [
    `Um computador por aluno, com navegador Chrome ou Edge e o Google Drive aberto (drive.google.com)`,
    `Conta Google escolar (Workspace) ativa para cada aluno, já com login feito`,
    `Projetor ou TV conectado ao computador do professor para demonstrar o passo a passo`,
    `Alguns arquivos de exemplo na área de trabalho de cada computador (uma imagem, um PDF e um documento) para praticar o upload`,
    `Acesso à internet estável, pois o Drive depende totalmente da nuvem`,
    `Slide ou folha com o roteiro de organização ("Minhas Matérias", "Fotos", "Trabalhos") para os alunos seguirem`,
  ],
  conceitosChave: [
    `Nuvem — espaço de armazenamento na internet, em servidores da empresa, acessível de qualquer aparelho com login.`,
    `Google Drive — o serviço da Google que guarda seus arquivos na nuvem; cada conta tem o seu espaço pessoal.`,
    `Upload — ação de enviar um arquivo do computador para a nuvem (subir o arquivo para o Drive).`,
    `Download — ação de trazer um arquivo da nuvem de volta para o computador (baixar o arquivo).`,
    `Pasta — caixa virtual usada para juntar e organizar arquivos relacionados, como uma gaveta.`,
    `Renomear — trocar o nome de um arquivo ou pasta para que fique claro e fácil de encontrar.`,
    `Armazenamento — quantidade total de espaço disponível (15 GB grátis) para guardar seus arquivos na nuvem.`,
  ],
  treinamento: `## O que o professor precisa saber

O Google Drive abre em drive.google.com com a conta Google logada. A tela tem três partes: o menu à esquerda (com "+ Novo", "Meu Drive", "Compartilhados comigo", "Recentes" e "Lixeira"), a área central onde os arquivos aparecem e, no topo, a barra de busca. O botão azul "+ Novo", no canto superior esquerdo, é o coração da aula: por ele se cria uma "Nova pasta" e se faz "Upload de arquivo" ou "Upload de pasta". Para renomear, clique com o botão direito no arquivo e escolha "Renomear" (ou aperte a tecla N com o arquivo selecionado). Para organizar, basta arrastar um arquivo para cima de uma pasta. O espaço usado aparece no rodapé do menu esquerdo, em "Armazenamento", mostrando algo como "2 GB de 15 GB usados". Faça todo o caminho uma vez antes da aula, em sua própria conta, para conhecer os nomes exatos dos botões.

## Passo a passo da aula (ritmo 10/15/25/10)

Aquecimento (10 min): pergunte "Onde vocês guardam suas fotos e trabalhos? E se o computador sumisse agora?". Recolha respostas e apresente a ideia da nuvem com a imagem da "mochila mágica". Revise rapidamente as aulas anteriores do mês (Earth e Maps) e diga que hoje a turma terá um espaço só seu na nuvem.

Conteúdo novo guiado (15 min): com o projetor ligado, abra drive.google.com. Mostre o menu à esquerda e a área central. Clique em "+ Novo" e demonstre "Nova pasta", criando uma chamada "Minhas Matérias". Depois clique em "+ Novo" > "Upload de arquivo", escolha uma imagem da área de trabalho e mostre o arquivo aparecendo no Drive. Clique com o botão direito nele e use "Renomear" para dar um nome claro. Arraste o arquivo para dentro da pasta. Por fim, aponte o medidor de "Armazenamento" no rodapé esquerdo.

Mão na massa (25 min): cada aluno abre o Drive e refaz os passos. Primeiro cria três pastas: "Minhas Matérias", "Fotos" e "Trabalhos". Depois faz upload dos arquivos de exemplo da área de trabalho. Em seguida renomeia cada arquivo com um nome que faça sentido (por exemplo, "foto-viagem" ou "trabalho-de-história"). Por fim, arrasta cada arquivo para a pasta correta. Circule pela sala ajudando quem se perder no botão "+ Novo" ou no arrastar.

Desafio e compartilhar (10 min): proponha o desafio "Drive arrumado": cada aluno deixa o "Meu Drive" sem nenhum arquivo solto, tudo dentro de pastas. Quem terminar, descobre quanto espaço já usou olhando o medidor. Feche com uma roda rápida: "Por que organizar a nuvem facilita a vida?".

## Como explicar de forma clara

Use comparações do dia a dia. Diga que a nuvem é como um armário guardado em um cofre superseguro, longe da escola, que você abre com sua chave (o login). As pastas são gavetas; os arquivos são as coisas dentro das gavetas. Upload é "subir" o arquivo para a nuvem, como mandar uma carta; download é "baixar", como receber a carta de volta. Compare os 15 GB com o espaço de uma mochila: cabe muita coisa, mas não é infinito, então vale jogar fora o que não serve. Evite termos técnicos demais; use "subir", "baixar", "gaveta" e "arrumar".

## Erros comuns e como ajudar

Muitos confundem upload com download: reforce com gestos, "upload sobe, download desce". Alguns procuram o botão de criar pasta no lugar errado; mostre devagar que tudo começa no "+ Novo", azul, no alto à esquerda. Outros fazem upload mas não acham o arquivo, porque ele caiu em "Recentes" e não no "Meu Drive"; explique a diferença e use a busca no topo. Ao renomear, alguns apagam a extensão do arquivo (o ponto e as letras finais, como .jpg) e se assustam; oriente a manter essa parte. No arrastar, há quem solte o arquivo no lugar errado; ensine a soltar só quando a pasta ficar destacada em azul. Se a internet cair, o upload trava: peça paciência e tente de novo, pois sem internet não há nuvem.`,
  exercicios: [
    {
      titulo: `Entrando na sua nuvem`,
      tipo: `prática na ferramenta`,
      tempo: `4 minutos`,
      guiaProfessor: `Garanta que todos estejam logados na conta Google escolar antes de começar. Mostre o endereço drive.google.com no projetor e aponte as três partes da tela.`,
      atividade: `Abra o navegador e entre em drive.google.com. Localize na tela: o botão "+ Novo", o menu "Meu Drive" e a barra de busca no topo. No rodapé do menu à esquerda, encontre o medidor de "Armazenamento" e anote quanto espaço você já usou (por exemplo, "0,5 GB de 15 GB").`,
      gabarito: `O aluno deve abrir o Drive, identificar os três elementos pedidos e informar um valor de armazenamento condizente com sua conta. Considera-se certo qualquer número real lido no medidor "Armazenamento" do rodapé esquerdo, desde que tenha acessado a página correta.`,
    },
    {
      titulo: `Subindo seu primeiro arquivo`,
      tipo: `prática na ferramenta`,
      tempo: `6 minutos`,
      guiaProfessor: `Lembre que upload é "subir" o arquivo para a nuvem. Mostre o caminho "+ Novo" > "Upload de arquivo" uma vez e deixe que repitam. Avise para esperarem a barrinha de envio terminar.`,
      atividade: `Clique em "+ Novo" e depois em "Upload de arquivo". Escolha uma imagem da área de trabalho do computador e confirme. Espere a mensagem de upload concluído e verifique se o arquivo apareceu no seu "Meu Drive".`,
      gabarito: `O arquivo escolhido deve aparecer na lista do "Meu Drive" após o envio. Acerta o aluno que usa o caminho "+ Novo" > "Upload de arquivo", seleciona uma imagem e a vê surgir no Drive depois da barra de progresso terminar.`,
    },
    {
      titulo: `Criando e nomeando gavetas`,
      tipo: `desafio individual`,
      tempo: `7 minutos`,
      guiaProfessor: `Reforce que nomes claros ajudam a achar tudo depois. Mostre que a pasta nova nasce com o nome "Pasta sem título" e precisa ser renomeada. Acompanhe quem clica no "+ Novo" errado.`,
      atividade: `Crie três pastas no seu Drive usando "+ Novo" > "Nova pasta". Dê a elas os nomes "Minhas Matérias", "Fotos" e "Trabalhos". Confira se as três aparecem no "Meu Drive" com os nomes corretos, sem nenhuma "Pasta sem título".`,
      gabarito: `Devem existir exatamente três pastas no "Meu Drive", com os nomes "Minhas Matérias", "Fotos" e "Trabalhos". O aluno acerta se criar as pastas pelo "+ Novo" > "Nova pasta" e nomear cada uma corretamente, sem deixar nenhuma sem título.`,
    },
    {
      titulo: `Arrumando o Drive em dupla`,
      tipo: `em dupla`,
      tempo: `8 minutos`,
      guiaProfessor: `Cada aluno trabalha no próprio Drive, mas a dupla confere o trabalho um do outro. Ensine a arrastar e soltar só quando a pasta ficar destacada em azul. Ajude a renomear sem apagar a extensão (como .jpg ou .pdf).`,
      atividade: `Em dupla, cada um faz upload dos três arquivos de exemplo (uma imagem, um PDF e um documento) e os renomeia com nomes claros, como "foto-passeio", "regras-do-jogo" e "trabalho-de-ciencias". Depois arraste cada arquivo para a pasta certa entre as três criadas. Ao terminar, troque de lugar com o colega e confira se o Drive dele ficou sem arquivos soltos.`,
      gabarito: `Cada Drive deve ter os três arquivos renomeados e guardados dentro das pastas corretas, sem arquivos soltos no "Meu Drive". A dupla acerta quando ambos organizam tudo por arrastar e soltar e confirmam, ao revisar o do colega, que nenhum arquivo ficou fora de pasta.`,
    },
    {
      titulo: `Roda de conversa: por que arrumar a nuvem?`,
      tipo: `roda de conversa`,
      tempo: `5 minutos`,
      guiaProfessor: `Conduza deixando os alunos falarem primeiro. Anote as melhores ideias no quadro e feche reforçando os conceitos de nuvem, organização e armazenamento limitado de 15 GB.`,
      atividade: `Em roda, cada aluno responde em uma frase: "Por que vale a pena organizar os arquivos no Google Drive em vez de deixar tudo solto?". Depois, juntos, listem três vantagens de guardar os arquivos na nuvem em vez de só no computador da escola.`,
      gabarito: `Respostas válidas citam que pastas e nomes claros ajudam a encontrar arquivos rápido e que a nuvem permite acessar de qualquer aparelho e não perder nada se o computador quebrar. Vantagens aceitas: acesso de qualquer lugar com login, segurança contra perda do computador e organização que economiza tempo. Qualquer trio coerente com esses conceitos é considerado correto.`,
    },
  ],
};
