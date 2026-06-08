import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 6,
  titulo: "Sons que Dão Vida ao Jogo",
  semana: "Semana 3",
  duracao: "1 hora",
  objetivo: `A criança aprende a colocar efeitos sonoros no jogo para tocar um som quando pega um item, quando perde uma vida e quando vence.`,
  descricao: `Nesta aula o jogo, que até agora era quase silencioso, ganha barulho e vida. As crianças vão descobrir que um bom som faz toda a diferença: um "pluim" alegre quando pegam uma moeda, um "ops" quando encostam no inimigo e uma musiquinha de festa quando vencem. O som é o ingrediente que transforma o jogo de "bonito de olhar" em "gostoso de jogar".

O assunto central é o efeito sonoro. Em Construct 3, isso é feito com um objeto chamado Audio e com uma ação simples de "tocar som" (Play). A criança vai escolher sons de uma lista pronta, dar um nome de carinho para cada um e ligar esse som a um momento do jogo que ela já criou nas aulas anteriores: pegar o ponto, perder a vida e a tela de vitória.

Por que isso importa? Porque o som é uma das primeiras formas de a criança sentir que o jogo "responde" a ela. Quando ela clica e algo soa, ela entende na hora que tem poder sobre aquele mundo. É um momento de muita alegria e de muito orgulho, e quase sempre o ponto alto do mês.

Durante a aula, cada aluno escolhe os seus próprios sons. Isso deixa cada jogo com uma personalidade diferente: um terá moeda de "tin-tin", outro de "boing". O professor guia a parte técnica (onde clicar) e deixa a parte criativa (qual som) totalmente nas mãos da criança.`,
  materiais: [
    `Computadores ligados, com o Construct 3 aberto e o projeto do jogo de cada aluno (aquele que vem sendo construído desde a aula 1 do mês) já carregado.`,
    `Projetor ou TV grande conectada ao computador do professor, para demonstrar cada passo em tela cheia.`,
    `Caixas de som ou fones de ouvido funcionando em todas as máquinas (teste o volume ANTES da aula).`,
    `Um projeto de exemplo do professor, já com os três sons funcionando (pegar item, perder vida, vencer), para mostrar o resultado final logo no começo.`,
    `Lista impressa ou na tela com os nomes dos sons prontos do Construct 3, para a criança escolher apontando.`,
    `Folhas de papel e lápis de cor para o exercício de "desenhar o som".`,
    `Cartões com carinhas (alegre, triste, festa) para a roda de conversa sobre que som combina com cada momento.`,
  ],
  conceitosChave: [
    `Som (efeito sonoro) — um barulho curto que o jogo faz para avisar que algo aconteceu, como um "pluim" ao pegar uma moeda.`,
    `Objeto Audio — uma caixinha mágica e invisível que fica no jogo só para tocar os sons; sem ela, o jogo fica mudo.`,
    `Tocar som (Play) — a ação de mandar o jogo soltar um barulho naquele exato momento.`,
    `Importar som — trazer um barulho de fora para dentro do jogo, igual a colocar uma figurinha nova no álbum.`,
    `Momento do jogo — a hora certa em que o som toca: ao pegar o item, ao perder a vida ou ao vencer.`,
    `Volume — o quão alto ou baixo o som toca; nem muito gritando, nem tão baixinho que ninguém ouve.`,
  ],
  treinamento: `## O que o professor precisa saber (a teoria + a base técnica)

Em Construct 3, todo som passa por um objeto especial chamado Audio. Pense nele como uma caixinha de som invisível que mora dentro do jogo: ele não aparece na tela, mas é ele que faz o barulho sair. Sem esse objeto, nenhuma ação de som funciona. Em muitos projetos ele já vem adicionado; se não vier, é rápido criar.

Os sons ficam na pasta Sounds, dentro do painel Project (canto direito, lado a lado com Layouts e Object Types). O Construct 3 oferece uma biblioteca de sons prontos e gratuitos: basta clicar com o botão direito em Sounds, escolher Import Sounds e depois Browse Sound Library. Lá dentro a criança escolhe entre dezenas de barulhos (moedas, pulos, explosões, vitórias). Importante: o som tocado por código usa o NOME do arquivo (sem extensão), então combine nomes simples.

A mágica acontece na Event Sheet, a folha de eventos onde já existem as regras das aulas anteriores (pegar ponto, perder vida, vencer). Você não vai criar regras novas: vai apenas ABRIR as regras que já existem e ADICIONAR uma ação. Em cada uma, clica em Add action, escolhe o objeto Audio e a ação Play. Aparece uma janela; no campo Audio file você escolhe o som da lista. Pronto, o som está ligado àquele momento.

## Passo a passo da aula (ritmo 10/15/25/10)

10 min — Aquecimento: abra o SEU projeto de exemplo no projetor e jogue na frente da turma, agora COM os sons. Pegue uma moeda (toca!), encoste no inimigo (toca!), vença (festa!). Pergunte: "O que mudou desde a última aula?" Deixe as crianças notarem que agora o jogo faz barulho. Diga que hoje cada uma vai dar voz ao próprio jogo.

15 min — Conteúdo novo guiado: no projetor, mostre o painel Project à direita e a pasta Sounds. Clique com o botão direito em Sounds, depois Import Sounds, depois Browse Sound Library. Escolha um som de moeda, dê play para ouvir, e clique em Import. Repita o ritmo bem devagar, nomeando cada clique em voz alta. Depois vá à Event Sheet, abra a regra de pegar o ponto, clique em Add action, escolha Audio e Play, selecione o som. Rode o jogo (botão Preview, o triângulo no topo) e ouça juntos.

25 min — Mão na massa: cada aluno faz o mesmo nos três momentos. Use a sequência: (1) importar três sons (pegar, perder, vencer); (2) ligar o som de pegar na regra do ponto; (3) ligar o som de perder na regra da vida; (4) ligar o som de vencer na tela de vitória. Circule sem parar, ajudando clique a clique. Quem terminar, troca um som por outro e compara.

10 min — Desafio + compartilhar: cada criança roda o jogo com fone para a turma toda escutar (ou um de cada vez no projetor). Faça uma "rodada de sons": cada um mostra o seu barulho de vitória. Aplaudam.

## Como explicar para crianças de 5 a 9 (analogias e linguagem)

Não fale "evento" nem "ação". Fale assim: "Vamos ensinar o jogo a falar." O objeto Audio é a "boca do jogo". Importar um som é "guardar um barulho no bolso do jogo". Ligar o som à regra é "dizer pro jogo: quando pegar a moeda, faça PLUIM". Use muito a voz: imite os sons com a boca antes de mostrar na tela, e elas adoram. Compare com um desenho animado: "No desenho, quando o personagem cai, faz BUM. Vamos colocar o BUM no nosso jogo."

## Erros comuns e como ajudar

Som mudo no preview: quase sempre é volume do computador no zero ou fone desconectado — teste antes. Esqueceram de adicionar o objeto Audio: o Play não aparece na lista; adicione o objeto e tente de novo. Colocaram o Play na regra errada (toca na hora errada): mostre na tela qual regra é "pegar" e qual é "perder". Importaram o som mas escolheram outro na ação: confira se o nome bate. Volume altíssimo de todos ao mesmo tempo: combine usar fone na hora de testar e caixa só na hora de compartilhar.`,
  exercicios: [
    {
      titulo: `Caça ao Som da Moeda`,
      tipo: `prática na ferramenta`,
      tempo: `8 minutos`,
      guiaProfessor: `Mostre no projetor, devagar, como abrir a pasta Sounds e entrar na Sound Library. Faça uma vez na frente de todos e depois deixe cada um repetir na própria máquina. Circule e confira cada clique.`,
      atividade: `Abra a pasta Sounds no seu projeto. Clique com o botão direito, escolha Import Sounds e depois Browse Sound Library. Ouça três sons diferentes de moeda e importe o que você mais gostar para o seu jogo.`,
      gabarito: `A criança acertou se, ao final, existir pelo menos um som novo dentro da pasta Sounds do projeto dela, escolhido por ela. Confirme abrindo a pasta Sounds: o som importado aparece na lista.`,
    },
    {
      titulo: `Liga o Som no Ponto`,
      tipo: `prática na ferramenta`,
      tempo: `10 minutos`,
      guiaProfessor: `Leve a turma até a Event Sheet e mostre a regra que já existe para pegar o ponto (criada na aula 3). Demonstre adicionar a ação Add action, escolher Audio e Play, e selecionar o som da moeda. Rode o Preview junto com eles.`,
      atividade: `Na folha de eventos, ache a regra de pegar o ponto. Clique em Add action, escolha o objeto Audio e a ação Play, e selecione o som da moeda. Aperte o botão de Preview e pegue um ponto no jogo.`,
      gabarito: `Acertou quando, ao pegar o ponto durante o Preview, o som toca. Se não tocar, verifique se a ação Play foi colocada na regra certa e se o nome do som escolhido é o mesmo que foi importado.`,
    },
    {
      titulo: `Que Som Combina?`,
      tipo: `roda de conversa`,
      tempo: `8 minutos`,
      guiaProfessor: `Sente a turma em roda. Mostre os cartões com carinhas (alegre, triste, festa). Para cada momento do jogo, pergunte qual som combina e por quê. Deixe as crianças imitarem o som com a boca antes de decidir.`,
      atividade: `Em roda, responda em voz alta: que som combina com pegar uma moeda? E com perder uma vida? E com vencer o jogo? Imite cada som com a boca e mostre a carinha que combina.`,
      gabarito: `Não há som único certo, mas a criança deve associar coerentemente: pegar item a um som alegre, perder vida a um som triste ou de susto, e vencer a um som de festa. Acertou quando justifica a escolha ligando o sentimento ao momento.`,
    },
    {
      titulo: `Desenhando o Barulho`,
      tipo: `desenho/papel`,
      tempo: `10 minutos`,
      guiaProfessor: `Entregue papel e lápis de cor. Explique que o som não se vê, mas a gente pode desenhar como ele seria. Dê exemplos: um som agudo pode ser uma estrelinha; um som grave, uma nuvem escura. Não corrija o desenho, valorize a ideia.`,
      atividade: `Escolha o seu som de vitória e desenhe como ele seria se a gente pudesse vê-lo. Use cores e formas: ele é grande ou pequeno? Brilhante ou escuro? Escreva ou conte qual momento do jogo ele acompanha.`,
      gabarito: `Acertou quando o desenho representa um som e a criança consegue dizer a qual momento do jogo ele pertence (vitória). O valor está na conexão entre o desenho, o sentimento e o momento, não na qualidade do traço.`,
    },
    {
      titulo: `O Trio de Sons Completo`,
      tipo: `desafio`,
      tempo: `12 minutos`,
      guiaProfessor: `Este é o desafio final e mais difícil: ligar os TRÊS sons sozinho. Anuncie como uma missão. Ofereça ajuda só quando a criança travar de verdade, deixando-a tentar primeiro. Ao final, faça cada um rodar o jogo para a turma ouvir.`,
      atividade: `Importe e ligue, sozinho, os três sons do seu jogo: um som ao pegar o ponto, um som ao perder a vida e um som ao vencer. Rode o Preview e teste os três momentos. Depois mostre o seu jogo cheio de barulho para a turma.`,
      gabarito: `Acertou quando, no Preview, os três sons tocam nos momentos certos: pegar o ponto, perder a vida e vencer. Se algum não tocar, o professor ajuda a achar a regra correspondente e confere se a ação Play tem o som certo selecionado.`,
    },
  ],
};
