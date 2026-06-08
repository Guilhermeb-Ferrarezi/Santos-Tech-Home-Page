import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 6,
  titulo: "Compartilhar e colaborar no Drive",
  semana: "Semana 3",
  duracao: "1 hora",
  objetivo: `Compartilhar arquivos no Google Drive com links e permissões corretas, colaborar em tempo real com colegas e manter tudo organizado e seguro.`,
  descricao: `Na aula anterior os alunos conheceram o Google Drive como uma nuvem pessoal: aprenderam a enviar arquivos, criar pastas e abrir documentos de qualquer computador. Agora chega a parte mais poderosa da nuvem: o compartilhamento. Guardar um arquivo só para você é útil, mas o verdadeiro superpoder do Drive é deixar várias pessoas trabalharem juntas no mesmo arquivo, ao mesmo tempo, sem precisar enviar cópias por e-mail nem ter dez versões diferentes perdidas pelo computador.

Nesta aula o foco é prático: o aluno vai gerar um link de compartilhamento, escolher quem pode acessar e definir o nível de permissão. No Drive existem três níveis principais, e entender a diferença entre eles é o coração da aula. O nível Leitor permite apenas ver o arquivo; o nível Comentarista permite ver e deixar comentários, mas sem mudar o conteúdo; e o nível Editor permite alterar tudo, como se fosse dono. Saber escolher o nível certo é uma questão de segurança e respeito: você não dá uma caneta vermelha para quem só precisa ler.

Os alunos também vão experimentar a colaboração ao vivo. Em duplas, dois colegas vão abrir o mesmo documento e ver, em tempo real, o cursor colorido do outro digitando. É um momento que costuma encantar a turma, porque mostra de forma concreta o que significa "trabalhar na nuvem". Junto disso, a aula reforça hábitos de organização e segurança: usar a busca do Drive para encontrar arquivos rapidamente, nomear documentos com clareza e nunca compartilhar como Editor com quem você não conhece.

Ao final, cada aluno terá criado um arquivo, compartilhado com um colega no nível correto, colaborado em conjunto e localizado documentos pela busca. São habilidades que servem para a escola, para trabalhos em grupo e para a vida digital toda. Compartilhar bem é tão importante quanto criar bem.`,
  materiais: [
    `Computadores com o Google Drive aberto no navegador (drive.google.com) e os alunos já conectados em suas contas Google`,
    `Projetor ou tela grande para o professor demonstrar cada passo do compartilhamento`,
    `Conta Google ativa para cada aluno (com Google Earth, Maps e Drive já acessados nas aulas anteriores)`,
    `Um documento de exemplo no Google Docs já criado pelo professor para demonstrar permissões (ex.: "Lista da turma")`,
    `Lista impressa ou no quadro com os e-mails dos alunos, para facilitar o compartilhamento entre duplas`,
    `Conexão de internet estável (a colaboração em tempo real depende dela)`,
    `Caderno ou bloco de notas para anotar a diferença entre os três níveis de permissão`,
  ],
  conceitosChave: [
    `Compartilhar — dar a outra pessoa acesso a um arquivo seu na nuvem, sem precisar enviar uma cópia.`,
    `Link de compartilhamento — endereço que você gera e envia para alguém abrir o arquivo direto pelo navegador.`,
    `Permissão Leitor — quem recebe só pode ver o arquivo; não consegue mudar nem comentar nada.`,
    `Permissão Comentarista — quem recebe pode ver e deixar comentários, mas não altera o conteúdo original.`,
    `Permissão Editor — quem recebe pode mudar tudo no arquivo, como se fosse dono; use só com pessoas de confiança.`,
    `Colaboração em tempo real — várias pessoas editando o mesmo arquivo ao mesmo tempo, vendo o cursor uma da outra.`,
    `Busca do Drive — barra no topo que encontra qualquer arquivo pelo nome, mesmo dentro de pastas escondidas.`,
  ],
  treinamento: `## O que o professor precisa saber

O Google Drive guarda os arquivos na nuvem, mas o recurso desta aula é o compartilhamento. Tudo começa no botão "Compartilhar": ele aparece como um ícone de pessoa com um sinal de mais, no canto superior direito de qualquer documento, ou no menu do botão direito sobre um arquivo na lista do Drive. Ao clicar, abre uma janela onde você faz duas escolhas: COM QUEM compartilhar (digitando o e-mail da pessoa) e QUAL permissão dar (Leitor, Comentarista ou Editor). Existe também a opção "Copiar link", que gera um endereço para enviar a alguém. Memorize bem os três níveis de permissão, pois é a parte que mais confunde. Faça o passo a passo sozinho antes da aula, criando um documento de teste e compartilhando com seu próprio segundo e-mail, para ver como o arquivo aparece do outro lado.

## Passo a passo da aula

AQUECIMENTO (10 min): Pergunte à turma: "Já fizeram um trabalho em grupo e cada um mandou sua parte por e-mail, virando uma bagunça de versões?" Mostre no projetor o Drive aberto e relembre como abrir um arquivo. Diga que hoje todos vão deixar os colegas trabalharem no MESMO arquivo.

CONTEÚDO NOVO GUIADO (15 min): No projetor, abra seu documento de exemplo no Google Docs. Clique no botão azul "Compartilhar" (ícone de pessoa com sinal de mais, canto superior direito). Na janela, mostre o campo "Adicionar pessoas e grupos" e digite um e-mail. Ao lado, abra o menu de permissões e explique os três níveis usando a comparação: Leitor é como uma vitrine de loja (você vê, não toca); Comentarista é como um bilhete colado (você sugere, não muda); Editor é como dono da casa (faz tudo). Mostre também o botão "Copiar link" e a opção "Qualquer pessoa com o link". Clique em "Concluído".

MÃO NA MASSA (25 min): Cada aluno cria um Google Docs novo (em drive.google.com, botão "Novo" depois "Documentos Google") e escreve um título e duas frases. Em duplas, cada um compartilha seu documento com o colega no nível EDITOR, digitando o e-mail dele. Quando os dois abrirem o documento do parceiro, peça que escrevam juntos uma lista de três lugares favoritos. Eles verão os cursores coloridos em tempo real. Depois, peça que um deles troque a permissão do outro para Comentarista e percebam a diferença. Por fim, todos usam a barra de Busca no topo do Drive para encontrar o documento pelo nome.

DESAFIO E COMPARTILHAR (10 min): Desafie: "Compartilhem com o professor no nível Comentarista." Depois, cada dupla conta para a turma o que mudou ao trocar Editor por Comentarista.

## Como explicar de forma clara

Use sempre a comparação dos três níveis com o mundo real, porque adolescentes entendem rápido por imagem: Leitor é vitrine, Comentarista é bilhete adesivo, Editor é dono da casa. Reforce a ideia de segurança com uma frase simples: "Editor é confiança total; só dê para quem você conhece de verdade." Quando mostrar a colaboração ao vivo, deixe o momento do cursor colorido brilhar: pause e diga "olha, vocês estão escrevendo no mesmo papel mágico ao mesmo tempo". Evite termos técnicos demais; fale "quem pode ver", "quem pode comentar", "quem pode mudar".

## Erros comuns e como ajudar

O erro mais frequente é digitar o e-mail errado do colega: o compartilhamento falha em silêncio. Peça que confiram a lista de e-mails no quadro. Outro erro é esquecer de mudar a permissão e deixar tudo como Leitor, e aí o colega não consegue escrever; oriente a olharem o menu ao lado do nome. Alguns alunos fecham a janela sem clicar em "Concluído" ou "Enviar"; lembre que precisa confirmar. Há também quem use "Qualquer pessoa com o link" sem necessidade; explique que isso é menos seguro e que o ideal é compartilhar por e-mail. Por fim, se a colaboração em tempo real travar, geralmente é a internet: peça que recarreguem a página.`,
  exercicios: [
    {
      titulo: `Compartilhando seu primeiro arquivo`,
      tipo: `prática na ferramenta`,
      tempo: `6 minutos`,
      guiaProfessor: `Garanta que cada aluno já tenha um Google Docs criado. Acompanhe pela tela do projetor onde fica o botão "Compartilhar". Verifique se digitaram o e-mail correto antes de enviar.`,
      atividade: `Crie um documento no Google Docs com o título "Meu primeiro compartilhamento" e escreva uma frase. Clique no botão "Compartilhar" (canto superior direito), digite o e-mail de um colega, escolha a permissão Leitor e clique em "Enviar".`,
      gabarito: `O aluno deve abrir o documento, clicar no botão "Compartilhar", digitar o e-mail correto do colega, selecionar o nível Leitor no menu de permissões e confirmar com "Enviar" ou "Concluído". O colega receberá um aviso e conseguirá ver, mas não editar, o arquivo.`,
    },
    {
      titulo: `Caça aos três níveis de permissão`,
      tipo: `desafio`,
      tempo: `7 minutos`,
      guiaProfessor: `Esse exercício testa se o aluno entendeu a diferença entre os níveis. Peça que façam um por vez e observem na prática o que o colega consegue ou não consegue fazer.`,
      atividade: `Pegue o mesmo documento e compartilhe com o mesmo colega mudando a permissão três vezes: primeiro Leitor, depois Comentarista, depois Editor. A cada troca, peça que o colega tente escrever no arquivo e anote o que acontece.`,
      gabarito: `Com Leitor, o colega só vê o texto e não consegue digitar nem comentar. Com Comentarista, ele consegue deixar comentários (botão de balão na lateral), mas não muda o texto. Com Editor, ele consegue digitar e alterar tudo livremente. O aluno deve descrever corretamente essas três diferenças.`,
    },
    {
      titulo: `Documento colaborativo em dupla`,
      tipo: `em dupla`,
      tempo: `8 minutos`,
      guiaProfessor: `Forme duplas. Confirme que ambos se compartilharam no nível Editor. Destaque o momento do cursor colorido aparecendo na tela. Circule pela sala ajudando quem não conseguir ver o colega online.`,
      atividade: `Em dupla, um aluno cria um documento chamado "Lista da dupla" e compartilha com o colega no nível Editor. Os dois abrem o mesmo arquivo ao mesmo tempo e escrevem juntos uma lista de cinco filmes ou jogos favoritos, alternando linhas.`,
      gabarito: `Os dois alunos devem estar no mesmo documento simultaneamente, cada um vendo o cursor colorido do outro e o nome dele no topo da tela. A lista final deve ter cinco itens escritos por ambos. Isso confirma que a permissão Editor e a colaboração em tempo real funcionaram.`,
    },
    {
      titulo: `Encontre na nuvem: roda de conversa`,
      tipo: `roda de conversa`,
      tempo: `6 minutos`,
      guiaProfessor: `Conduza a conversa em círculo. Use as perguntas para fixar segurança e organização. Aproveite para mostrar a barra de Busca no topo do Drive enquanto conversam.`,
      atividade: `Em roda, cada aluno responde: "Para quem você NUNCA daria permissão de Editor e por quê?" e "Como a barra de Busca do Drive ajuda você a achar um arquivo rápido?". Depois, todos usam a Busca para localizar o documento "Lista da dupla".`,
      gabarito: `Respostas válidas: nunca dar Editor para desconhecidos ou pessoas que podem apagar ou bagunçar o arquivo, pois Editor muda tudo. Sobre a Busca: ela fica no topo do Drive, encontra arquivos pelo nome mesmo dentro de pastas, e poupa tempo. Ao buscar "Lista da dupla", o arquivo deve aparecer nos resultados.`,
    },
    {
      titulo: `Projeto: mural colaborativo da turma`,
      tipo: `projeto curto`,
      tempo: `10 minutos`,
      guiaProfessor: `Crie antes um documento "Mural da turma" e compartilhe o link com permissão de Editor para a turma toda (ou compartilhe por e-mail um a um). Combine regras: cada aluno escreve só na sua linha. Acompanhe para evitar que apaguem o texto dos colegas.`,
      atividade: `Todos abrem o documento "Mural da turma" compartilhado pelo professor. Cada aluno escreve seu nome e uma curiosidade sobre si numa linha própria, sem apagar a dos outros. Ao final, a turma terá um mural feito por todos ao mesmo tempo.`,
      gabarito: `O documento final deve conter uma linha por aluno, com nome e curiosidade, sem que ninguém tenha apagado o conteúdo dos colegas. Vários cursores coloridos devem aparecer durante a atividade. O sucesso mostra que os alunos sabem colaborar com responsabilidade num arquivo compartilhado no nível Editor.`,
    },
  ],
};
