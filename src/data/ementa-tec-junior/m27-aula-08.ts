import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 8,
  titulo: "Meu Primeiro Objeto Pronto!",
  semana: "Semana 4",
  duracao: "1 hora",
  objetivo: `Cada criança termina o seu objeto simples no Blender, ajusta os últimos detalhes, salva o arquivo e apresenta a sua criação para a turma em uma rodada de mostra cheia de comemoração.`,
  descricao: `Hoje é o grande dia do mês: o entregável fica pronto! Durante quatro semanas a turma conheceu o Blender, explorou as telas, aprendeu a girar o mundo em três dimensões, a mexer nos objetos, a usar formas mágicas e a montar a sua própria criação. Nesta última aula cada criança coloca a cereja no bolo: termina o seu objeto, deixa tudo do jeitinho que imaginou, salva o arquivo com segurança e mostra com orgulho para os colegas.

Esta aula é importante porque fecha o entregável do mês — Um objeto simples no Blender — e transforma o esforço de quatro semanas em uma vitória de verdade. Não vamos aprender nenhuma ferramenta nova hoje; vamos consolidar tudo o que a turma já sabe. O foco é finalizar com capricho, salvar para não perder o trabalho e celebrar. Quando a criança vê o seu objeto pronto na tela e ouve as palmas da turma, ela percebe que é uma pequena criadora em três dimensões.

O professor monta a aula como um ateliê seguido de uma exposição. Na primeira parte, cada criança abre o seu arquivo, dá os ajustes finais — posição, tamanho, talvez uma forminha a mais — e aprende o passo mais importante de todos: salvar. Salvar com Ctrl + S vira o ritual de fechamento, para que nenhum trabalho se perca. Depois a sala vira uma pequena galeria: um por um, os objetos aparecem no projetor e cada autor conta o que fez.

O clima é leve, caprichado e festivo. O professor circula ajudando quem precisa de um último empurrãozinho, garante que TODO arquivo seja salvo antes da mostra e conduz a rodada de apresentações com carinho, puxando palmas para cada criação. No final, a turma comemora junto: o primeiro objeto em três dimensões de cada um está pronto e guardado.`,
  materiais: [
    `Computadores com o Blender já aberto e o arquivo de cada criança da aula anterior salvo na pasta da turma`,
    `Projetor ou TV grande ligada em um computador, para mostrar o objeto de cada aluno para todos`,
    `Exemplos prontos de objetos simples já finalizados (um boneco de neve, um carrinho, uma casinha) para inspirar quem travou`,
    `Cartaz ou slide grande com o lembrete visual: salvar é Ctrl + S, com o desenho das duas teclas`,
    `Lista com o nome de cada aluno e o nome do objeto dele, na ordem da rodada de mostra`,
    `Mouse com rodinha em cada computador, conferido e funcionando, para girar e dar zoom na cena`,
    `Itens simples de comemoração: palmas combinadas, um carimbo ou adesivo de "objeto pronto" para cada criança`,
  ],
  conceitosChave: [
    `Finalizar — dar os últimos ajustes na sua criação até ela ficar do jeitinho que você imaginou.`,
    `Salvar — guardar o seu trabalho no computador com Ctrl + S, para que ele não suma quando a tela fechar.`,
    `Arquivo .blend — a caixinha do Blender onde mora todo o seu objeto, com o nome que você escolheu.`,
    `Cena — o palco em três dimensões dentro do Blender, onde o seu objeto fica montado.`,
    `Rodada de mostra — o momento em que cada criança apresenta a sua criação para a turma, um por vez.`,
    `Render rápido — uma fotinha bonita do objeto na tela, para deixar a apresentação mais especial.`,
    `Entregável — o trabalho pronto do mês, que aqui é o seu primeiro objeto em três dimensões no Blender.`,
  ],
  treinamento: `## O que o professor precisa saber

Esta é a aula de fechamento do mês no Blender. Tecnicamente ela é tranquila: nenhuma ferramenta nova entra em cena. O seu papel é garantir que cada criança termine o objeto que vem construindo, SALVE o arquivo e apresente para a turma. O passo mais importante do dia é salvar — não deixe nenhum trabalho ser perdido.

Antes da aula, abra você mesmo o Blender em cada computador e confira se o arquivo de cada criança da aula anterior abre certinho (menu Arquivo, em inglês File, no canto superior esquerdo, depois Abrir / Open Recent). Tenha um exemplo pronto na sua máquina ligada ao projetor. Saiba de cor os três atalhos do dia: girar a cena segurando o botão do meio do mouse (a rodinha) e arrastando; dar zoom rolando a rodinha; e salvar com Ctrl + S. Para salvar pela primeira vez aparece a janela Salvar Blender (Save Blender File): escreva o nome do arquivo embaixo e clique no botão azul Salvar Como (Save As). Depois disso, Ctrl + S salva sozinho.

## Passo a passo da aula (ritmo 10/15/25/10)

10 min — Aquecimento e revisão: receba a turma com os computadores ligados e o Blender aberto. Faça todos respirarem fundo e diga a frase do dia: hoje o nosso objeto fica pronto! Reveja rapidinho com o mouse no projetor: girar com a rodinha apertada, dar zoom rolando a rodinha, mover um objeto com a tecla G. Mostre o cartaz do Ctrl + S e leia a ordem da rodada de mostra.

15 min — Conteúdo novo guiado: no computador do projetor, abra um objeto de exemplo. Mostre como dar um ajuste final: clicar no objeto (ele fica com a borda laranja), apertar G para mover ou S para mudar o tamanho, e clicar com o botão esquerdo para confirmar. Em seguida, ensine o ritual de salvar: aperte Ctrl + S, mostre a janela Salvar Blender (Save Blender File), digite um nome e clique no botão azul Salvar Como (Save As). Repita o Ctrl + S e diga: pronto, guardado!

25 min — Mão na massa: cada criança volta ao seu arquivo e finaliza o objeto. Circule pela sala ajudando a posicionar, redimensionar com S e mover com G. Quando uma criança disser que terminou, vá até ela e faça o ritual de salvar juntos: Ctrl + S, conferir o nome, clicar em Salvar Como (Save As) na primeira vez. Confirme com os olhos que o arquivo foi salvo antes de liberar para a mostra. Quem terminar antes pode tirar um render rápido pela tecla F12.

10 min — Desafio e compartilhar: a sala vira galeria. Chame uma criança por vez pela lista; ela leva o objeto para o projetor (ou você abre o arquivo dela), gira com a rodinha para mostrar todos os lados e conta em uma frase o que criou. A turma dá palmas e cada autor ganha o carimbo de objeto pronto. Encerre com uma palma grande para todos.

## Como explicar para crianças

Use a ideia de ateliê e exposição. Diga que hoje cada um é um artista terminando a sua obra e que, no final, faremos uma galeria para todo mundo ver. Explique que salvar com Ctrl + S é como tirar uma foto do trabalho e guardar na gavetinha do computador: se não guardar, a obra some quando a tela apaga. A borda laranja quer dizer "este é o objeto que está escolhido para mexer". A tecla G é o ímã que carrega o objeto, e a tecla S é a borracha mágica que estica ou encolhe. Girar com a rodinha apertada é como pegar a peça na mão e virá-la de todos os lados. Fale devagar, mostre tudo na tela grande primeiro e celebre cada objeto pronto.

## Erros comuns e como ajudar

A criança esquece de salvar e perde o trabalho: torne o Ctrl + S um ritual em voz alta a cada conquista e confira você mesmo antes da mostra. A criança não acha o arquivo: abra pelo menu Arquivo (File), Abrir Recente (Open Recent), que mostra os últimos arquivos. Ela aperta uma tecla e o objeto some ou estica demais: ensine o salva-vidas Ctrl + Z para desfazer. O objeto fica fora da tela: aperte a tecla Início (Home) para enquadrar tudo de novo. A criança clica e o objeto não fica laranja: peça um clique com o botão esquerdo bem no meio do objeto. Na hora da mostra a criança fica tímida: fique ao lado, gire o objeto por ela e faça uma pergunta fácil, como "qual é a sua cor preferida nele?".`,
  exercicios: [
    {
      titulo: `Abrindo e olhando o meu objeto`,
      tipo: `prática na ferramenta`,
      tempo: `5 min`,
      guiaProfessor: `Mostre primeiro no projetor: o arquivo de cada criança já deve estar aberto no Blender. Ensine a girar a cena segurando a rodinha do mouse e arrastando, e a dar zoom rolando a rodinha. Passe pela sala conferindo se todos enxergam o seu objeto na tela.`,
      atividade: `A criança olha o seu objeto na tela, segura a rodinha do mouse e arrasta para girar a cena, depois rola a rodinha para dar zoom e ver o objeto de pertinho.`,
      gabarito: `Acertou quando a criança consegue girar a cena com a rodinha apertada e dar zoom, enxergando o seu objeto de vários lados. Ver o próprio objeto na tela e mexer na câmera já conta como sucesso.`,
    },
    {
      titulo: `O ajuste final`,
      tipo: `prática na ferramenta`,
      tempo: `6 min`,
      guiaProfessor: `Demonstre no projetor: clique no objeto até ele ficar com a borda laranja, aperte G para mover ou S para mudar o tamanho e clique com o botão esquerdo para confirmar. Lembre o salva-vidas Ctrl + Z, que desfaz se algo der errado. Circule ajudando quem precisar.`,
      atividade: `A criança clica no seu objeto (ele fica com a borda laranja), aperta G para colocá-lo no lugar certo ou S para deixá-lo do tamanho ideal e clica com o botão esquerdo para confirmar o ajuste.`,
      gabarito: `Acertou quando a criança seleciona o objeto (borda laranja) e faz pelo menos um ajuste com G ou S, confirmando com o clique. Qualquer melhoria intencional na posição ou no tamanho conta; usar Ctrl + Z para corrigir também é acerto.`,
    },
    {
      titulo: `Salvando com Ctrl + S`,
      tipo: `prática na ferramenta`,
      tempo: `6 min`,
      guiaProfessor: `Este é o exercício mais importante do dia. Mostre o cartaz do Ctrl + S. No projetor, aperte Ctrl + S, deixe aparecer a janela Salvar Blender (Save Blender File), digite um nome e clique no botão azul Salvar Como (Save As). Depois confira computador por computador se o arquivo de cada criança foi mesmo salvo.`,
      atividade: `A criança aperta as teclas Ctrl + S ao mesmo tempo. Se aparecer a janela, ela digita o nome do seu objeto e clica no botão azul Salvar Como (Save As). Se não aparecer nada, é porque já foi guardado.`,
      gabarito: `Acertou quando o arquivo da criança fica salvo, com nome, na pasta da turma. O professor confirma olhando o título da janela do Blender sem o asterisco de "não salvo". Todo arquivo precisa estar salvo antes da mostra.`,
    },
    {
      titulo: `A fotinha do meu objeto`,
      tipo: `desafio`,
      tempo: `8 min`,
      guiaProfessor: `Demonstre no projetor: enquadre bem o objeto girando a cena e aperte a tecla F12 para o Blender tirar um render rápido, uma fotinha bonita que abre em uma janela nova. Para fechar essa janela, basta apertar a tecla Esc. É um extra para deixar a apresentação especial; ajude quem quiser tentar.`,
      atividade: `A criança gira a cena até o seu objeto ficar bem enquadrado e aperta F12 para tirar uma fotinha (render) dele. Depois aperta Esc para voltar e fica pronta para a mostra.`,
      gabarito: `Acertou quando a janela de render abre com a foto do objeto da criança depois de apertar F12. Conseguir uma imagem do próprio objeto, mesmo simples, é o resultado certo; voltar com Esc fecha a atividade.`,
    },
    {
      titulo: `Rodada de mostra: meu primeiro objeto`,
      tipo: `roda de conversa`,
      tempo: `9 min`,
      guiaProfessor: `Este é o ponto alto da aula. Chame uma criança por vez pela lista de nomes. Abra o arquivo dela no projetor (ou deixe que ela mostre), ajude a girar o objeto com a rodinha do mouse e faça uma pergunta fácil para quem estiver tímido. Puxe palmas para cada criação e entregue o carimbo de objeto pronto.`,
      atividade: `Na sua vez, a criança mostra o seu objeto no projetor, gira para a turma ver todos os lados e diz em uma frase o que criou e do que mais gostou de fazer. No fim, todos batem palmas juntos.`,
      gabarito: `Acertou quando a criança apresenta o seu objeto na tela grande, gira para mostrar e diz pelo menos uma frase sobre a sua criação. Toda criança que mostra o objeto salvo e fala uma palavrinha sobre ele conta como sucesso; o resultado do mês é a turma inteira com o primeiro objeto pronto e guardado.`,
    },
  ],
};
