import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 7,
  titulo: "Projects e pesquisa com responsabilidade",
  semana: "Semana 4",
  duracao: "1 hora",
  objetivo: `Criar um Project no Claude para reunir os materiais do mês em um só lugar e usar a pesquisa na web com honestidade, checando fontes e evitando cópia.`,
  descricao: `Durante todo o mês os alunos conversaram com o Claude, mandaram arquivos, analisaram imagens e planilhas e até criaram Artifacts. O problema é que tudo isso ficou espalhado por várias conversas diferentes. Nesta aula o aluno descobre os Projects, um recurso do Claude que funciona como uma pasta inteligente: dentro de um Project ficam guardadas as conversas e os documentos de um mesmo tema, e o Claude passa a "lembrar" desse material em todas as conversas daquele Project. É a forma profissional de organizar um trabalho longo.

O aluno aprende a criar um Project, dar um nome a ele, escrever uma instrução de contexto (o campo de conhecimento ou instruções do Project) e anexar seus arquivos do mês. A partir daí, qualquer conversa aberta dentro do Project já começa sabendo do que se trata, sem precisar repetir tudo de novo. Para um adolescente que está montando o Artifact do mês, isso significa ter o material de pesquisa sempre à mão.

A segunda metade da aula trata da pesquisa na web e da responsabilidade. Quando ativada, a ferramenta de busca permite que o Claude procure informações atuais na internet e mostre as fontes que usou. Aqui entra a parte mais importante do dia: ler quem é a fonte, abrir o link para conferir, comparar com outras fontes e nunca aceitar uma informação só porque a IA disse. O aluno aprende que a IA pode errar (as chamadas "alucinações") e que checar é obrigação de quem pesquisa.

Por fim, a aula trabalha a honestidade acadêmica: usar a IA como ajudante de estudo é ótimo, mas copiar e entregar como se fosse seu não é. O aluno entende a diferença entre pedir ajuda para entender e colar um texto pronto, aprende a citar quando usou a IA e a reescrever as ideias com as próprias palavras. É a base ética que vai acompanhá-lo no resto do curso.`,
  materiais: [
    `Computadores com o Claude aberto no navegador (claude.ai), um por aluno, já com a conta de cada aluno conectada`,
    `Projetor ou TV para o professor demonstrar a criação do Project e a pesquisa na web passo a passo`,
    `Arquivos de exemplo do mês de cada aluno (PDFs, imagens, planilhas e textos usados nas aulas anteriores) salvos numa pasta`,
    `Conta Claude de cada aluno com acesso aos Projects e à ferramenta de pesquisa na web`,
    `Um tema de pesquisa simples definido pela turma (por exemplo, "curiosidades sobre o planeta Marte") para a parte de busca`,
    `Folha impressa ou slide com a "checklist da fonte confiável" e a regra de honestidade acadêmica`,
    `Caderno ou documento para o aluno anotar as fontes que encontrar e comparar`,
  ],
  conceitosChave: [
    `Project — espaço no Claude que agrupa conversas e arquivos de um mesmo tema, funcionando como uma pasta que a IA "lembra".`,
    `Conhecimento do Project — área onde você anexa arquivos e escreve instruções que o Claude usa em todas as conversas daquele Project.`,
    `Pesquisa na web — recurso que permite ao Claude buscar informações atuais na internet e mostrar as fontes consultadas.`,
    `Fonte — o site ou documento de onde uma informação veio; deve ser verificada antes de ser usada como verdade.`,
    `Alucinação — quando a IA inventa uma informação que parece certa, mas é falsa; por isso é preciso sempre conferir.`,
    `Honestidade acadêmica — usar a IA como apoio para aprender e citar essa ajuda, sem copiar e entregar como se fosse trabalho próprio.`,
    `Citar a fonte — indicar de onde veio a informação ou que a IA ajudou, dando o devido crédito.`,
  ],
  treinamento: `## O que o professor precisa saber

Os Projects ficam no menu lateral esquerdo do Claude, no item "Projects" (ou "Projetos"). Para criar um, clique em "Projects" e depois no botão "New project" (ou "Novo projeto") no canto superior direito; dê um nome e, se quiser, uma descrição. Dentro do Project aberto, há uma área de conhecimento (normalmente um botão "Add content" ou "Adicionar conteúdo", ou um campo de instruções) onde você anexa arquivos e escreve um texto de contexto que vale para todas as conversas daquele Project. Toda conversa iniciada com o Project aberto já enxerga esse material.

A pesquisa na web é ativada na própria caixa de mensagem: procure o botão de ferramentas (ícone de mais "+" ou de controles ao lado de onde se digita) e ligue a opção "Web search" (ou "Pesquisar na web"). Quando o Claude busca, ele exibe as fontes com links clicáveis ao final ou ao lado da resposta. Clicar no link abre o site original numa nova aba. Reforce que essa verificação é o coração da aula.

## Passo a passo da aula (ritmo 10/15/25/10)

Aquecimento (10 min): pergunte à turma onde estão guardadas as conversas do mês e mostre que estão todas misturadas. Peça que cada aluno localize duas ou três conversas antigas do Claude. Projete o menu lateral e aponte o item "Projects".

Conteúdo novo guiado (15 min): no projetor, clique em "Projects" e depois em "New project". Nomeie o Project como "Meu mês com o Claude" e salve. Abra o Project e mostre a área de conhecimento; clique em "Add content", anexe um arquivo de exemplo e escreva uma instrução curta, como "Estes são meus materiais do mês". Em seguida, abra uma conversa dentro do Project e faça uma pergunta sobre o arquivo para mostrar que o Claude já o conhece. Depois, ative a pesquisa na web pelo botão de ferramentas, pergunte algo atual sobre o tema da turma e clique em uma das fontes para abri-la.

Mão na massa (25 min): cada aluno cria o próprio Project, anexa pelo menos dois arquivos do mês e escreve a instrução de contexto. Depois abre uma conversa dentro do Project, ativa a pesquisa na web e pesquisa o tema combinado. Cada aluno anota no caderno duas fontes diferentes, abre os links e marca se concordam ou divergem.

Desafio e compartilhar (10 min): cada aluno reescreve, com as próprias palavras, uma informação que encontrou e escreve uma frase citando que usou o Claude e qual site confirmou. Quem quiser mostra ao colega o Project organizado.

## Como explicar de forma clara (linguagem para a idade)

Compare o Project a uma mochila com divisórias: tudo de um mesmo trabalho fica junto e o Claude "lembra" do que está lá dentro. Diga: "Em vez de explicar tudo de novo a cada conversa, você guarda no Project uma vez só." Para a pesquisa na web, use a ideia de um detetive: a IA traz pistas, mas o detetive de verdade confere se a pista é verdadeira antes de acreditar. Explique alucinação assim: "Às vezes a IA fala com muita confiança uma coisa errada, igual a um colega que chuta a resposta na maior cara de pau." Para a honestidade, use a comparação com a prova: pedir dica para entender é estudar; copiar a resposta inteira é colar, e colar não ensina nada.

## Erros comuns e como ajudar

O erro mais comum é o aluno criar a conversa fora do Project e depois reclamar que o Claude "esqueceu" os arquivos; mostre que é preciso abrir o Project primeiro e iniciar a conversa de dentro dele. Outro erro é esquecer de ligar a pesquisa na web e achar que a resposta veio da internet quando não veio; confira sempre se aparecem fontes com link. Muitos aceitam a primeira resposta sem clicar nas fontes; insista que abrir o link e ler é parte obrigatória da tarefa. Há quem copie o texto da IA letra por letra para o caderno; pare a turma e relembre a regra de reescrever com as próprias palavras e citar. Por fim, alguns confundem o campo de instruções do Project com uma conversa normal; explique que ali se escreve o contexto fixo, não uma pergunta.`,
  exercicios: [
    {
      titulo: `Crie sua mochila de projeto`,
      tipo: `prática na ferramenta`,
      tempo: `6 minutos`,
      guiaProfessor: `Acompanhe quem clica em "New project" no lugar certo. Verifique se cada aluno deu um nome ao Project antes de seguir.`,
      atividade: `No menu lateral, clique em "Projects", depois em "New project". Dê o nome "Meu mês com o Claude" e salve. Confirme que o seu novo Project aparece na lista de Projects.`,
      gabarito: `O botão "Projects" fica no menu lateral esquerdo e "New project" no canto superior direito da tela de Projects. Depois de nomear e salvar, o Project "Meu mês com o Claude" passa a aparecer na lista, pronto para receber arquivos e conversas.`,
    },
    {
      titulo: `Encha o Project de conhecimento`,
      tipo: `desafio`,
      tempo: `6 minutos`,
      guiaProfessor: `Mostre antes onde fica o botão "Add content" dentro do Project. Lembre que a instrução de contexto é um texto fixo, não uma pergunta.`,
      atividade: `Abra o seu Project, use "Add content" para anexar pelo menos dois arquivos do mês e escreva a instrução "Estes são meus materiais do mês com o Claude". Depois abra uma conversa dentro do Project e pergunte: "Sobre o que são meus arquivos?".`,
      gabarito: `Os arquivos ficam na área de conhecimento do Project, anexados pelo botão "Add content", e a instrução de contexto vale para todas as conversas. Como a conversa foi aberta dentro do Project, o Claude responde citando o conteúdo dos arquivos anexados, provando que ele "lembra" do material.`,
    },
    {
      titulo: `Caça às fontes`,
      tipo: `em dupla`,
      tempo: `7 minutos`,
      guiaProfessor: `Forme duplas e garanta que ambos liguem a pesquisa na web antes de perguntar. Reforce que clicar nas fontes e abrir os links é obrigatório.`,
      atividade: `Em dupla, ativem a pesquisa na web pelo botão de ferramentas e façam a mesma pergunta sobre o tema da turma. Cada um abre uma fonte diferente clicando no link, anota o nome do site e comparem: as duas fontes dizem a mesma coisa?`,
      gabarito: `Com a pesquisa na web ligada, o Claude mostra fontes com links clicáveis que abrem o site original em outra aba. A dupla deve registrar o nome de pelo menos duas fontes e perceber que fontes diferentes podem confirmar ou divergir, mostrando por que comparar é necessário.`,
    },
    {
      titulo: `Pegando a IA no erro`,
      tipo: `roda de conversa`,
      tempo: `5 minutos`,
      guiaProfessor: `Conduza a roda projetando uma resposta com fontes. Provoque o aluno a explicar como saberia se uma informação é confiável ou inventada.`,
      atividade: `Em roda, cada aluno diz em voz alta uma forma de descobrir se uma informação da IA é verdadeira ou uma "alucinação". Juntos, montem uma checklist de três passos para checar uma fonte.`,
      gabarito: `Formas válidas incluem abrir o link da fonte e ler, comparar com outro site confiável e desconfiar quando não há fonte nenhuma. Uma checklist possível: 1) tem fonte com link?; 2) o link abre um site sério e confirma a informação?; 3) outra fonte diz o mesmo? Se algo falha, não dá para confiar.`,
    },
    {
      titulo: `Minha frase honesta`,
      tipo: `projeto curto`,
      tempo: `6 minutos`,
      guiaProfessor: `Relembre a regra antes de começar: reescrever com as próprias palavras e citar a ajuda da IA. Confira que ninguém apenas copiou o texto do Claude.`,
      atividade: `Escolha uma informação que você pesquisou hoje, reescreva-a com as suas próprias palavras (sem copiar) e adicione uma frase de crédito, por exemplo: "Pesquisei com a ajuda do Claude e confirmei no site tal". Guarde no seu Project.`,
      gabarito: `A reescrita deve manter a ideia, mas com palavras diferentes do texto original, e vir acompanhada de uma frase que cita o uso do Claude e a fonte que confirmou. Isso demonstra honestidade acadêmica: usar a IA como apoio, dar crédito e não entregar uma cópia como se fosse trabalho próprio.`,
    },
  ],
};
