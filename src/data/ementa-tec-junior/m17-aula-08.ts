import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 8,
  titulo: "Animações prontas pro jogo!",
  semana: "Semana 4",
  duracao: "1 hora",
  objetivo: `A criança exporta as últimas animações de ação e de efeito do seu herói, organiza todos os PNGs numa pasta única do projeto e mostra para a turma a coleção completa de animações prontas para entrar no jogo.`,
  descricao: `Esta é a última aula do mês e o grande fechamento do entregável "Exportar as animações pro jogo"! Durante quatro semanas, cada criança deu vida ao herói: criou os quatro passos da caminhada, fez o herói andar de verdade, deixou o personagem parado mas cheio de vida com a animação de respiração, escolheu um poder (ataque ou pulo), espalhou poeirinha mágica nos pés e fez uma explosão pequena virar grande. Agora chegou a hora de juntar tudo e mandar essas animações para fora do Aseprite, no formato que o jogo entende.

Nesta aula a criança não cria uma animação nova. O assunto de hoje é exportar e organizar. Exportar é tirar a animação de dentro do Aseprite e salvar como imagens PNG, que são as figurinhas que o motor de jogo (como o Construct 3) sabe ler. Organizar é guardar cada PNG no lugar certo, com nome claro, dentro de uma pasta só do projeto, para que ninguém se perca na hora de montar o jogo. É como arrumar a mochila no fim do dia: cada coisa no seu lugar para achar fácil amanhã.

Isso importa muito porque uma animação linda que fica presa dentro do Aseprite não serve para o jogo. O que faz o herói andar e atacar dentro do game são os arquivos exportados. Aprender a exportar com o nome e a pasta certos é uma habilidade de verdade de quem cria jogos, e é a ponte entre desenhar o personagem e vê-lo se mexer na tela do jogo.

No fim da aula acontece a celebração: cada criança abre a sua pasta de animações e mostra para a turma a coleção completa de PNGs, do andar à explosão. Ela conta qual animação tem mais orgulho e ouve os colegas baterem palmas. É o fechamento do mês inteiro de animação, e a turma sai sabendo que o herói está pronto para entrar no jogo.`,
  materiais: [
    `Um computador por criança com o Aseprite aberto e os arquivos .aseprite de cada aluno já salvos (caminhada, respiração, ataque ou pulo, poeira e explosão das aulas anteriores).`,
    `Projetor ou TV grande ligado ao computador do professor para a demonstração da exportação e para as apresentações da turma.`,
    `Um projeto de exemplo do professor, completo e já testado, com todas as animações exportadas em PNG dentro de uma pasta organizada, para usar como modelo na tela.`,
    `Uma pasta-modelo criada antes da aula na área de trabalho ou no Documentos, chamada "HeroiPronto", para as crianças copiarem a forma de organizar.`,
    `Fichas ou cartões de "Animador Diplomado" (um por criança) para entregar no final como certificado de conclusão do mês.`,
    `Papel e lápis de cor na mesa para quem terminar antes desenhar a capa da sua coleção de animações.`,
    `Mouse extra e, se possível, um pen drive, caso algum computador apresente problema ou precise guardar os arquivos.`,
  ],
  conceitosChave: [
    `Exportar — é tirar a animação de dentro do Aseprite e salvar como imagens de verdade que o jogo consegue abrir.`,
    `PNG — é o tipo de figurinha que a gente salva; é a imagem do herói que o jogo entende e mostra na tela.`,
    `Sprite sheet — é uma folha só com todos os quadrinhos da animação enfileirados, como um adesivo grandão com várias figurinhas.`,
    `Frame — é cada quadrinho da animação, um pedacinho do movimento; vários frames juntos e rápidos viram o herói se mexendo.`,
    `Pasta do projeto — é a caixa no computador onde a gente guarda todos os arquivos do jogo para não perder nada.`,
    `Nome de arquivo — é o nome que a gente dá para cada PNG (como "andar" ou "pulo") para achar fácil depois.`,
    `Coleção pronta — é o conjunto de todas as animações exportadas e guardadas no lugar certo, prontinhas para entrar no jogo.`,
  ],
  treinamento: `## O que o professor precisa saber (a teoria + a base técnica)

Hoje você não ensina uma animação nova: você ajuda cada criança a exportar e guardar o que já criou. Antes da aula, abra o Aseprite e exporte você mesmo um arquivo de exemplo do começo ao fim, para sentir onde a turma costuma travar.

Relembre o caminho da exportação. No Aseprite, abra o arquivo da animação e vá no menu "File", depois "Export Sprite Sheet". Abre uma janela com abas. Na aba "Layout", em "Sheet Type", escolha "By Rows" (linhas) ou "Horizontal Strip"; isso enfileira os frames lado a lado numa folha só (o sprite sheet). Na aba "Output", marque a caixa "Output File", clique em "..." para escolher a pasta e digite um nome claro, como "andar". Confirme que o formato é ".png" e clique em "Export". Pronto: o PNG nasce na pasta escolhida. Para guardar o arquivo editável, lembre também de salvar o original com "File" e depois "Save" (ou as teclas Ctrl mais S). A diferença é importante: o ".aseprite" é o desenho que dá para editar; o ".png" é a figurinha que vai para o jogo.

## Passo a passo da aula (ritmo 10/15/25/10)

Aquecimento (10 min): receba a turma e abra a sua pasta de exemplo "HeroiPronto" no projetor, cheia de PNGs. Mostre uma figurinha e pergunte: "Como será que ela saiu de dentro do Aseprite?". Peça que cada criança abra um dos seus arquivos (em "File", depois "Open") e dê "Play" na animação (botão de play no painel de timeline) para lembrar o que fez.

Conteúdo novo guiado (15 min): com o seu exemplo na tela, faça a exportação devagar. Vá em "File", depois "Export Sprite Sheet". Na aba "Layout" escolha "Horizontal Strip". Na aba "Output" marque "Output File", clique em "..." e escolha a pasta "HeroiPronto", digite o nome "ataque" e clique em "Export". Abra a pasta e mostre o PNG novo aparecendo. Repita uma vez mais, bem rápido, para fixar o caminho.

Mão na massa (25 min): cada criança exporta as suas animações que ainda faltam (ação e efeitos) e guarda tudo na sua pasta. Circule mesa a mesa. Ajude a abrir cada arquivo, a achar "Export Sprite Sheet", a escolher a pasta certa e a digitar um nome claro. Reforce o bordão "Abriu? Exportou? Guardou na pasta?". Confira junto que o PNG apareceu antes de passar para a próxima animação.

Desafio e compartilhar (10 min): forme a roda. Um por vez, a criança vai ao computador do professor (ou ao seu, no projetor), abre a sua pasta e mostra a coleção de PNGs. Ela conta qual animação tem mais orgulho. A turma aplaude. Entregue o "Animador Diplomado" a cada apresentador.

## Como explicar para crianças de 5 a 9 (analogias e linguagem)

Use a ideia de "tirar a foto do herói para mandar pelo correio": exportar é tirar a animação de dentro do programa e transformar em figurinhas que o jogo recebe. O sprite sheet é "um adesivo grandão com todos os quadrinhos enfileirados". A pasta do projeto é "a caixa de brinquedos onde tudo fica guardado e a gente acha fácil". O nome do arquivo é "a etiqueta na caixa, para saber o que tem dentro sem abrir". Fale pouco e mostre muito: aponte na tela, faça junto, deixe a criança clicar no botão "Export".

## Erros comuns e como ajudar

Muitas crianças exportam mas não sabem onde o arquivo foi parar: ajude sempre a escolher a MESMA pasta "HeroiPronto" e a abrir a pasta depois para ver o PNG. Outras esquecem de marcar "Output File" e nada é salvo; confira essa caixinha junto. É comum dar nomes confusos como "sem título 1"; incentive nomes claros (andar, pulo, poeira). Algumas trocam o formato sem querer; confirme que termina em ".png". Há quem feche o Aseprite sem salvar o ".aseprite" original; repita "salve os dois: o que edita e o que vai pro jogo". Na apresentação, quem fica tímido recebe uma pergunta fácil ("qual figurinha você mais gostou?") e muitos aplausos.`,
  exercicios: [
    {
      titulo: `Caça às Figurinhas na Pasta`,
      tipo: `exploração na ferramenta`,
      tempo: `7 minutos`,
      guiaProfessor: `Abra no projetor a sua pasta de exemplo "HeroiPronto" cheia de PNGs já exportados. Mostre que cada figurinha tem um nome (andar, pulo, poeira). Peça que cada criança abra a própria pasta do projeto e conte quantos PNGs já tem lá. Leia os nomes em voz alta para quem ainda não lê.`,
      atividade: `Abra a sua pasta do projeto no computador. Conte quantas figurinhas PNG você já tem guardadas e diga o nome de cada uma em voz alta. Levante a mão e conte para o professor qual animação ainda falta exportar.`,
      gabarito: `A criança encontra a pasta, conta os PNGs que já existem e diz pelo menos um nome de arquivo. Acertou quando aponta na tela quais animações já estão guardadas e identifica pelo menos uma que ainda falta exportar (por exemplo, "falta o ataque" ou "falta a explosão").`,
    },
    {
      titulo: `Exportando o Meu Ataque`,
      tipo: `prática na ferramenta`,
      tempo: `10 minutos`,
      guiaProfessor: `Demonstre uma vez no projetor o caminho completo: "File", depois "Export Sprite Sheet", aba "Layout" com "Horizontal Strip", aba "Output" marcando "Output File", botão "..." para a pasta "HeroiPronto", nome claro e "Export". Depois deixe a criança repetir com a sua própria animação de ação. Confira junto que o PNG apareceu.`,
      atividade: `Abra o arquivo da sua animação de ação (ataque ou pulo). Vá em "File", depois "Export Sprite Sheet". Marque "Output File", escolha a pasta do projeto, escreva um nome claro como "ataque" e clique em "Export". Abra a pasta e veja a sua figurinha aparecer.`,
      gabarito: `A criança percorre o caminho de exportação e gera um PNG na pasta certa com nome claro. Acertou quando o arquivo aparece na pasta "HeroiPronto" com nome legível (ataque ou pulo) e ela consegue mostrar a figurinha nova para o professor.`,
    },
    {
      titulo: `Etiquetas Certas`,
      tipo: `jogo de organização`,
      tempo: `10 minutos`,
      guiaProfessor: `Projete os nomes corretos das animações do mês: andar, parado, ataque (ou pulo), poeira, explosao. Transforme em jogo: a cada PNG que a criança exporta com o nome certo, ela marca um ponto. Ajude a renomear os arquivos confusos ("sem título") clicando com o botão direito e em "Renomear" no explorador de arquivos.`,
      atividade: `Confira o nome de cada figurinha na sua pasta. Os nomes precisam ser fáceis: andar, parado, ataque (ou pulo), poeira, explosao. Se algum estiver confuso, peça ajuda para renomear. Marque um ponto para cada nome certo.`,
      gabarito: `A criança confere e corrige os nomes dos arquivos, deixando cada PNG com uma etiqueta clara. Acertou quando todos os arquivos da pasta têm nomes legíveis e sem repetição, e ela consegue apontar qual figurinha é cada animação só lendo (ou ouvindo) o nome.`,
    },
    {
      titulo: `A Coleção Completa`,
      tipo: `desafio`,
      tempo: `13 minutos`,
      guiaProfessor: `Agora a criança exporta TODAS as animações que faltam (ação e efeitos) e junta tudo numa pasta só. Circule reforçando o bordão "Abriu? Exportou? Guardou na pasta?". Use a "Lista do Herói Pronto" projetada com cinco itens: andar, parado, ação, poeira, explosão. Confira item por item com cada aluno.`,
      atividade: `Termine de exportar todas as suas animações que ainda faltam, uma de cada vez, sempre guardando na mesma pasta. No final, a sua pasta precisa ter as cinco figurinhas da lista: andar, parado, ação, poeira e explosão. Confira com o professor que não falta nenhuma.`,
      gabarito: `A criança completa a exportação de todas as animações pendentes e reúne os cinco PNGs na pasta do projeto. Acertou quando a pasta contém os cinco arquivos da lista (andar, parado, ação, poeira, explosão), cada um com nome claro, fechando o entregável do mês. Reconhecer corretamente o que ainda falta também conta como progresso.`,
    },
    {
      titulo: `Mostrando o Herói Pronto`,
      tipo: `roda de conversa`,
      tempo: `10 minutos`,
      guiaProfessor: `Forme a roda. Um por vez, a criança leva o seu projeto ao computador do professor (no projetor), abre a sua pasta "HeroiPronto" e mostra a coleção de PNGs. Peça que ela diga qual animação tem mais orgulho. Faça perguntas fáceis ("qual figurinha você mais gostou?") e puxe os aplausos. Entregue o "Animador Diplomado".`,
      atividade: `Mostre o seu herói pronto para a turma! Abra a sua pasta de animações e mostre as figurinhas PNG que você exportou. Conte UMA coisa que você tem orgulho de ter animado neste mês. Depois, aplauda o colega que apresentar.`,
      gabarito: `A criança apresenta a sua pasta com a coleção de PNGs, mostra as animações exportadas e fala uma frase sobre o que fez com orgulho. Acertou quando completa a apresentação mostrando os arquivos prontos e participa aplaudindo os colegas. O "Animador Diplomado" marca a conclusão do mês de animação.`,
    },
  ],
};
