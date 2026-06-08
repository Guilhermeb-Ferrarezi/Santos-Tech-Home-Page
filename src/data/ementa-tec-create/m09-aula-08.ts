import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 8,
  titulo: "Showcase: Sprites Animados",
  semana: "Semana 4",
  duracao: "1 hora",
  objetivo: `Finalizar e exportar o conjunto completo de sprites animados e apresentá-los em uma vitrine em loop para a turma.`,
  descricao: `Esta é a aula que fecha o mês de animação em pixel art. Durante quatro semanas os alunos deram vida a personagens e objetos: o idle que respira, o ciclo de caminhada, o brilho da moeda, a explosão em quadros e o polimento final. Agora chegou a hora de juntar tudo, exportar com qualidade e mostrar o resultado com orgulho. O entregável do mês são os sprites animados prontos para o jogo, e esta aula é o momento de consolidá-los.

Showcase significa vitrine. Em estúdios profissionais, animadores e artistas montam pequenas demonstrações em loop para apresentar seu trabalho a colegas, clientes e ao público. Aprender a apresentar uma animação é tão importante quanto saber criá-la. Nesta aula o aluno organiza suas melhores animações em uma única tela de exibição, ajusta a velocidade de cada loop e prepara um arquivo final exportado como GIF e como sprite sheet, garantindo que tudo esteja pronto para o Construct 3 no próximo mês.

Esta aula também é a etapa 3 de 4 do projeto do ano. O aluno já modelou em 3D, está finalizando a fase de pixel art animado e em breve montará o jogo 2D completo, transformando depois os personagens em modelos impressos. Por isso, a apresentação de hoje não é só um encerramento: é uma ponte. Cada aluno mostra o que construiu, recebe retorno dos colegas e percebe que aquelas animações vão de fato virar parte de um jogo jogável.

O clima da aula deve ser de celebração e capricho. Não é dia de começar coisas novas, e sim de finalizar, exportar e apresentar. O professor conduz como um curador de exposição: ajuda cada aluno a escolher suas melhores peças, a deixar os loops limpos e a falar com clareza sobre as próprias escolhas de animação.`,
  materiais: [
    `Computadores com Aseprite instalado e aberto, um por aluno`,
    `Projetor ou TV conectada para o showcase coletivo da turma`,
    `Arquivos .aseprite de todas as animações feitas no mês (idle, caminhada, moeda, explosão)`,
    `Pasta organizada com subpastas por personagem para salvar os arquivos exportados`,
    `Arquivo de exemplo do professor com uma vitrine pronta em GIF, para servir de referência`,
    `Fones de ouvido opcionais e um cronômetro visível para controlar o tempo das apresentações`,
  ],
  conceitosChave: [
    `Showcase — vitrine que reúne as melhores animações em loop para apresentar a um público.`,
    `Loop limpo — animação que repete sem travar nem dar um pulo perceptível entre o último e o primeiro quadro.`,
    `Exportar — gerar um arquivo final, como GIF ou PNG, a partir do projeto .aseprite para usar fora do programa.`,
    `Sprite sheet — imagem única que reúne todos os quadros da animação lado a lado, lida pelo motor do jogo.`,
    `GIF animado — formato de imagem que toca uma sequência de quadros em loop, ótimo para mostrar a animação rapidamente.`,
    `Tag — etiqueta colorida que marca o início e o fim de uma animação dentro de um mesmo arquivo no Aseprite.`,
    `FPS — quadros por segundo; controla a velocidade com que a animação é reproduzida.`,
  ],
  treinamento: `## O que o professor precisa saber

Esta aula é de finalização, não de criação. O objetivo é que cada aluno exporte suas animações do mês e monte uma pequena vitrine para apresentar. Você precisa dominar três ações no Aseprite: usar a janela de preview de animação (atalho F7 ou menu View, item Preview), conferir e nomear tags (painel da linha do tempo, na parte de baixo) e exportar tanto em GIF animado quanto em sprite sheet. A exportação de GIF fica em File, Export, Export Animation, ou simplesmente Save As escolhendo a extensão .gif. O sprite sheet fica em File, Export Sprite Sheet. Antes da aula, abra um arquivo de animação seu e faça esse percurso uma vez, para chegar seguro. Lembre que o entregável do mês são os sprites animados prontos para o jogo, então o capricho na exportação importa.

## Passo a passo da aula (ritmo 10/15/25/10)

Aquecimento e revisão (10 min): peça que cada aluno abra no Aseprite as quatro animações do mês. Pergunte qual delas é a favorita e por quê. Mostre no projetor o seu arquivo de exemplo com uma vitrine pronta em GIF, para que todos vejam onde querem chegar.

Conteúdo novo guiado (15 min): com o projetor ligado, ensine a exportar. Abra uma animação, pressione F7 para ver o Preview rodando em loop e ajuste a velocidade clicando duas vezes em um quadro na linha do tempo para mudar a duração em milissegundos. Em seguida, vá em File, Export, Export Animation e gere um GIF; mostre o resultado abrindo o arquivo. Depois mostre File, Export Sprite Sheet, marque a opção de incluir as tags e exporte o PNG com o JSON. Explique que o GIF serve para mostrar e o sprite sheet serve para o jogo.

Mão na massa (25 min): cada aluno exporta todas as suas animações em GIF e em sprite sheet, salvando em subpastas organizadas por personagem. Em seguida, montam a vitrine: criam um novo arquivo no Aseprite, colam lado a lado os melhores loops ou organizam os GIFs em uma tela única. Circule pela sala conferindo se os loops estão limpos e se os nomes dos arquivos fazem sentido.

Desafio e compartilhar (10 min): cada aluno mostra sua vitrine no projetor por cerca de um minuto, dizendo o nome do personagem e qual animação tem mais orgulho. A turma aplaude e dá um elogio específico a cada apresentação.

## Como explicar de forma clara (linguagem para a idade)

Use a ideia de exposição de arte ou vitrine de loja: "Hoje a gente não desenha mais, a gente coloca o trabalho na vitrine." Compare o GIF a um vídeo curtinho que toca sozinho em repetição, igual a um story, e o sprite sheet a uma tira de fotos que o jogo lê uma por uma para criar o movimento. Para o loop limpo, diga: "Quando a animação dá um pulinho feio no fim, é porque o último quadro não conversa com o primeiro." Reforce que apresentar bem é uma habilidade profissional, e que falar do próprio trabalho com segurança vale tanto quanto a arte.

## Erros comuns e como ajudar

O erro mais frequente é exportar como PNG estático em vez de GIF animado: confira se o aluno usou Export Animation e não apenas Save. Outro erro é o loop que trava, geralmente por um quadro repetido no fim; oriente a apagar o quadro duplicado. Muitos esquecem de nomear as tags, e o sprite sheet sai sem organização: peça que renomeiem cada tag antes de exportar. Há quem salve tudo solto na área de trabalho; pare e ajude a criar as subpastas. Por fim, alguns travam na hora de apresentar; combine uma frase pronta, como "Esse é o meu personagem e essa é a animação que mais gostei de fazer", para destravar a fala.`,
  exercicios: [
    {
      titulo: `Exporte seu primeiro GIF`,
      tipo: `prática na ferramenta`,
      tempo: `7 min`,
      guiaProfessor: `Conduza passo a passo no projetor enquanto os alunos repetem. Garanta que todos usem Export Animation, e não apenas Save.`,
      atividade: `Abra a animação de idle, pressione F7 para conferir o loop e exporte como GIF animado usando File, Export, Export Animation. Salve na subpasta do personagem.`,
      gabarito: `O aluno gera um arquivo .gif que toca em loop sozinho ao ser aberto, salvo na pasta correta. Se o arquivo for estático, ele usou Save em vez de Export Animation e precisa refazer.`,
    },
    {
      titulo: `Conserte o loop que trava`,
      tipo: `desafio`,
      tempo: `8 min`,
      guiaProfessor: `Entregue ou aponte uma animação cujo loop dá um pulo no fim. Deixe o aluno descobrir a causa antes de dar a dica do quadro duplicado.`,
      atividade: `Identifique por que a animação dá um pulinho ao repetir e ajuste para que o loop fique limpo, conferindo no Preview com F7.`,
      gabarito: `Na maioria dos casos há um quadro duplicado ou faltando no fim; o aluno apaga ou ajusta o quadro e o loop passa a repetir sem travar. A correção está certa quando o Preview roda contínuo, sem pulo perceptível.`,
    },
    {
      titulo: `Sprite sheet com tags`,
      tipo: `em dupla`,
      tempo: `10 min`,
      guiaProfessor: `Forme duplas para que um confira o trabalho do outro. Verifique se todas as tags foram nomeadas antes da exportação.`,
      atividade: `Em dupla, confiram se cada animação tem sua tag nomeada na linha do tempo e exportem juntos um sprite sheet por File, Export Sprite Sheet, marcando a opção de incluir as tags e o arquivo JSON.`,
      gabarito: `Cada dupla produz um PNG de sprite sheet com os quadros em sequência e um arquivo JSON acompanhando, com as tags nomeadas corretamente. Se faltar o JSON ou as tags, a opção não foi marcada na janela de exportação.`,
    },
    {
      titulo: `Roda de curadoria`,
      tipo: `roda de conversa`,
      tempo: `8 min`,
      guiaProfessor: `Conduza a conversa garantindo que cada aluno fale. Estimule elogios específicos, e não apenas um genérico ficou bom.`,
      atividade: `Em roda, cada aluno mostra duas animações e explica qual escolheria para a vitrine e por quê. Os colegas dão um elogio específico e uma sugestão.`,
      gabarito: `Não há resposta única. Espera-se que o aluno justifique a escolha com critérios como loop limpo, fluidez ou personalidade do movimento, e que os colegas apontem algo concreto, como a suavidade da caminhada ou o brilho da moeda.`,
    },
    {
      titulo: `Monte a vitrine completa`,
      tipo: `projeto curto`,
      tempo: `12 min`,
      guiaProfessor: `Este é o fechamento do entregável. Acompanhe a organização das pastas e ajude quem travar na apresentação com uma frase pronta.`,
      atividade: `Monte uma vitrine reunindo seus melhores loops do mês em uma única tela ou conjunto de GIFs, organize tudo em subpastas por personagem e apresente para a turma em até um minuto.`,
      gabarito: `O aluno entrega uma vitrine com pelo menos três animações em loop limpo, exportadas em GIF e sprite sheet, salvas em pastas organizadas, e apresenta dizendo o nome do personagem e a animação de que mais se orgulha. Isso conclui a etapa 3 de 4 do projeto.`,
    },
  ],
};
