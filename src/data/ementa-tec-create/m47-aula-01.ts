import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 1,
  titulo: "Planejando Novos Itens no Maya",
  semana: "Semana 1",
  duracao: "1 hora",
  objetivo: `Revisar os assets que o aluno já criou e planejar, com ajuda do Claude, a lista dos novos itens que faltam para completar a cena do jogo na Unreal, configurando o projeto no Maya com unidades e escala corretas.`,
  descricao: `Esta é a primeira aula do mês e, ao mesmo tempo, uma das mais importantes: é aqui que o aluno deixa de modelar no improviso e passa a trabalhar como um artista 3D profissional, com um plano claro na mão. No ano final da trilha, ele já tem uma cena de jogo montada na Unreal Engine, mas ela ainda está incompleta. Faltam objetos para deixar o cenário rico e crível. Antes de abrir o Maya e começar a empurrar polígonos, vamos parar, olhar para o que já existe e decidir com inteligência o que ainda precisa ser feito.

A aula tem dois grandes momentos. No primeiro, o aluno faz um inventário dos assets que já produziu (no Blender, no Maya ou na própria Unreal) e identifica os buracos da cena. Para isso, ele usa o Claude como assistente de produção: pede ajuda para listar referências visuais reais, sugerir itens coerentes com o tema do jogo e organizar tudo numa lista de modelagem priorizada. O Claude não modela nada; ele ajuda o aluno a pensar, a não esquecer nada e a escrever um plano organizado, exatamente como um diretor de arte faria com a equipe.

No segundo momento, o aluno prepara o terreno técnico. Um erro silencioso e muito comum em projetos de jogos é a escala errada: um objeto modelado em centímetros que entra na Unreal do tamanho de um arranha-céu, ou uma cadeira menor que uma moeda. Para evitar isso, o aluno aprende a configurar as unidades de medida do Maya (Working Units) e a escala da cena para que tudo converse com a Unreal Engine, que trabalha em centímetros. Definir isso agora, na aula 1, poupa horas de retrabalho no fim do mês.

Ao final da hora, ninguém precisa ter modelado nenhum item novo. O entregável desta aula é justamente o planejamento: uma lista de modelagem clara, com referências, prioridades e tamanhos esperados, e um projeto do Maya já configurado e salvo, pronto para receber os modelos nas próximas aulas. É o mapa que vai guiar todo o restante do mês.`,
  materiais: [
    `Computadores com o Autodesk Maya instalado e abertos, um por aluno`,
    `Acesso ao Claude (navegador ou app) para cada aluno usar como assistente de planejamento`,
    `Projetor ou TV para o professor demonstrar a interface do Maya em tela grande`,
    `Arquivo de exemplo: um print ou captura da cena atual do jogo na Unreal de cada aluno`,
    `Arquivo de exemplo: uma lista de modelagem modelo, já preenchida, para servir de referência`,
    `Caderno ou documento de texto para o aluno registrar a lista de itens e as referências`,
  ],
  conceitosChave: [
    `Asset — qualquer recurso usado no jogo (modelo 3D, textura, som); aqui falamos dos modelos 3D que compõem a cena.`,
    `Lista de modelagem — documento que organiza quais itens serão modelados, com prioridade, referência e tamanho esperado de cada um.`,
    `Referência — imagem do mundo real ou de outros jogos usada como guia para modelar um objeto com credibilidade.`,
    `Working Units — configuração do Maya que define a unidade de medida da cena (milímetro, centímetro, metro).`,
    `Escala — relação entre o tamanho do modelo no software e o tamanho que ele terá dentro do jogo.`,
    `Centímetro como padrão — a Unreal Engine mede tudo em centímetros, então o Maya deve usar a mesma unidade para o objeto entrar no tamanho certo.`,
    `Pipeline — o caminho que um asset percorre do software de modelagem (Maya) até o motor do jogo (Unreal); planejar bem evita erros nesse trajeto.`,
  ],
  treinamento: `## O que o professor precisa saber

Você não precisa dominar modelagem para dar esta aula, porque hoje quase ninguém vai modelar. O foco é planejamento e configuração. Existem dois pontos técnicos que você precisa saber fazer no Maya antes da aula. Primeiro, abrir a janela de preferências: vá no menu superior Windows, depois Settings/Preferences, depois Preferences. Na lista da esquerda, clique em Settings. Ali, no campo Working Units, há um menu Linear; mude-o para centimeter. Esse é o ajuste que casa o Maya com a Unreal. Segundo, salvar o projeto: menu File, depois Set Project (para definir a pasta do projeto) e File, depois Save Scene As para salvar a cena com um nome. Teste os dois caminhos antes da aula. O Claude será usado como assistente de texto: ele ajuda a listar referências e a organizar a lista de modelagem, mas não gera os modelos.

## Passo a passo da aula

Aquecimento e revisão (10 min): peça que cada aluno abra um print da própria cena na Unreal. Pergunte em voz alta: o que já existe nessa cena? O que está faltando para ela parecer um lugar de verdade? Faça uma lista rápida no quadro com as ideias da turma (mesa, luminária, caixote, planta, placa). O objetivo é despertar o olhar crítico.

Conteúdo novo guiado (15 min): no projetor, mostre como pedir ajuda ao Claude. Digite um pedido claro como: Sou aluno de modelagem 3D e preciso completar a cena de um jogo de oficina. Me ajude a listar 6 objetos que faltariam nesse ambiente, com uma referência real de cada um e o tamanho aproximado em centimetros. Leia a resposta com a turma e mostre como transformar isso numa lista de modelagem. Em seguida, abra o Maya e configure as Working Units para centimeter, explicando por que isso importa.

Mão na massa (25 min): cada aluno conversa com o Claude sobre a própria cena, monta a lista de modelagem (item, prioridade, referência, tamanho em cm) e, no Maya, define as Working Units em centimeter, faz o Set Project e salva a cena com Save Scene As. Circule pela sala conferindo se cada um salvou o arquivo e ajustou a unidade.

Desafio e compartilhar (10 min): desafie quem terminou a pedir ao Claude uma sétima referência mais ousada e a justificar por que ela cabe na cena. Encerre com dois ou três alunos lendo o item mais importante da lista e dizendo o tamanho esperado dele.

## Como explicar de forma clara

Use a imagem da lista de compras: antes de ir ao mercado, a gente anota o que falta em casa para não esquecer nada nem comprar repetido. A lista de modelagem é a lista de compras da cena do jogo. Para a escala, use a comparação do mapa e do mundo: se o mapa estiver na escala errada, uma rua vira um quarteirão. Diga que o centímetro é a língua que a Unreal fala, então o Maya precisa falar a mesma língua para os objetos entrarem do tamanho certo. Sobre o Claude, deixe claro que ele é um ajudante de ideias e de organização, como um colega esperto que nunca esquece nada, mas que quem decide e quem vai modelar é o aluno.

## Erros comuns e como ajudar

O erro mais frequente é querer começar a modelar logo e pular o planejamento; reforce que a lista é o entregável de hoje e que ela economiza tempo depois. Outro erro é esquecer de mudar as Working Units; passe de mesa em mesa conferindo se está em centimeter, pois isso quebra a escala na Unreal mais tarde. Muitos alunos pedem coisas vagas ao Claude (faça meu jogo); ensine a pedir de forma específica, com tema, quantidade e unidade. Há quem não salve a cena e perca a configuração; lembre sempre do Save Scene As. Por fim, alguns copiam a lista do colega; incentive que cada lista nasça da cena real daquele aluno, olhando o próprio print da Unreal.`,
  exercicios: [
    {
      titulo: `Inventário da cena`,
      tipo: `observação e registro`,
      tempo: `7 min`,
      guiaProfessor: `Ajude o aluno a olhar o print da própria cena na Unreal com olhar crítico, separando o que já existe do que falta. Não deixe ninguém pular essa etapa.`,
      atividade: `Olhe o print da sua cena na Unreal e escreva duas listas: uma com os objetos que já existem e outra com pelo menos quatro objetos que estão faltando para a cena parecer um lugar de verdade.`,
      gabarito: `O aluno entrega duas listas coerentes com a sua cena. Exemplo: existem (chão, parede, mesa); faltam (luminária, caixote, planta, ferramenta na parede). O importante é que os itens faltantes façam sentido com o tema do cenário.`,
    },
    {
      titulo: `Pedindo referências ao Claude`,
      tipo: `uso do Claude`,
      tempo: `8 min`,
      guiaProfessor: `Mostre como escrever um pedido específico, com tema, quantidade e unidade. Reforce que o Claude ajuda a pensar, mas não modela.`,
      atividade: `Escreva ao Claude um pedido claro pedindo referências reais e o tamanho aproximado, em centímetros, de cada objeto que falta na sua cena. Anote a resposta.`,
      gabarito: `Um bom pedido tem tema, quantidade e unidade. Exemplo de pedido: Preciso completar a cena de uma oficina num jogo; liste 5 objetos com uma referencia real de cada e o tamanho aproximado em centimetros. A resposta esperada traz objetos com referência e medidas, como caixote (40 cm), luminária de teto (30 cm), bancada (90 cm de altura).`,
    },
    {
      titulo: `Montando a lista de modelagem`,
      tipo: `produção de documento`,
      tempo: `12 min`,
      guiaProfessor: `Garanta que cada linha da lista tenha os quatro campos: item, prioridade, referência e tamanho em cm. Confira se as prioridades fazem sentido.`,
      atividade: `Monte sua lista de modelagem com pelo menos cinco itens. Para cada um, registre: nome do item, prioridade (alta, média ou baixa), uma referência e o tamanho esperado em centímetros.`,
      gabarito: `A lista final tem cinco ou mais linhas completas. Exemplo de linha: Item: caixote de madeira | Prioridade: alta | Referencia: caixote de feira | Tamanho: 40 x 40 x 40 cm. Os itens de prioridade alta são os mais visíveis ou mais usados na cena.`,
    },
    {
      titulo: `Configurando as unidades do Maya`,
      tipo: `prática na ferramenta`,
      tempo: `8 min`,
      guiaProfessor: `Acompanhe o caminho de menus na tela do aluno. Confira pessoalmente se o Linear ficou em centimeter antes de liberar o próximo passo.`,
      atividade: `No Maya, abra Windows, Settings/Preferences, Preferences. Clique em Settings e mude o Working Units Linear para centimeter. Depois faça Set Project e salve a cena com Save Scene As.`,
      gabarito: `O projeto fica configurado em centimeter, alinhado à Unreal Engine, e a cena é salva num arquivo com nome próprio. Conferência: ao reabrir as Preferences, o campo Linear mostra centimeter; o título da janela do Maya mostra o nome do arquivo salvo.`,
    },
    {
      titulo: `Defendendo a sua lista`,
      tipo: `roda de conversa`,
      tempo: `7 min`,
      guiaProfessor: `Conduza uma rodada curta e positiva. Peça que cada aluno justifique a prioridade do item mais importante, ligando a escolha à cena real.`,
      atividade: `Em roda, apresente o item de prioridade mais alta da sua lista. Diga por que ele é o mais importante para a cena e qual o tamanho esperado dele em centímetros.`,
      gabarito: `O aluno justifica a prioridade com um argumento ligado à cena (é o objeto mais visível, ou o que o jogador mais usa) e informa um tamanho coerente em centímetros. A turma percebe que prioridade alta combina com itens centrais, e prioridade baixa com detalhes de fundo.`,
    },
  ],
};
