import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 3,
  titulo: "Conhecendo a Teachable Machine",
  semana: "Semana 2",
  duracao: "1 hora",
  objetivo: `Ao final da aula, a criança será capaz de abrir um projeto de imagens na Teachable Machine, reconhecer os botões principais da tela e criar suas duas primeiras classes, capturando fotos pela webcam para cada uma delas de forma organizada.`,
  descricao: `Nesta aula as crianças abrem pela primeira vez a Teachable Machine, a ferramenta gratuita do Google que deixa qualquer pessoa treinar uma inteligência artificial sem precisar escrever nenhum código. Nas duas aulas anteriores elas entenderam, brincando, o que existe dentro de uma IA e como uma máquina aprende com exemplos. Agora chegou a hora de conhecer de pertinho a "máquina de ensinar" e descobrir onde tudo aquilo acontece de verdade na tela do computador.

O conceito mais importante desta aula é a ideia de classe. Uma classe é uma "caixinha" onde a gente junta vários exemplos parecidos para a IA aprender. Se queremos ensinar a IA a diferenciar uma maçã de uma banana, criamos a caixinha "Maçã" e a caixinha "Banana", e enchemos cada uma com várias fotos. Quanto mais exemplos a criança coloca em cada classe, mais a IA vai entender aquilo. Nesta aula o foco é só criar duas classes e capturar fotos pela webcam para cada uma; o treino de verdade fica para a próxima aula.

O professor mostra no projetor a tela da Teachable Machine sem pressa, apontando cada botão pelo nome: onde se clica para começar, onde aparecem as classes, onde fica o botão de webcam e onde se escreve o nome de cada caixinha. As crianças repetem os mesmos passos no computador delas, capturando fotos de dois objetos simples e bem diferentes (por exemplo, a mão aberta e o punho fechado, ou um lápis e uma borracha).

O foco é a organização e a segurança. As crianças aprendem que cada classe precisa de um nome claro e que as fotos de uma caixinha não podem ir parar na outra, senão a IA fica confusa. É uma aula muito visual e de mão na massa: o resultado de cada criança é a sua própria tela com duas caixinhas cheias de fotos, prontas para o treino da aula seguinte.`,
  materiais: [
    `Um computador por criança com a Teachable Machine já aberta no navegador (site teachablemachine.withgoogle.com) e com webcam funcionando.`,
    `Projetor ou TV grande ligado ao computador do professor para demonstrar cada clique na tela da Teachable Machine.`,
    `Projeto modelo do professor com duas classes já prontas e cheias de fotos (por exemplo, "Mão aberta" e "Punho fechado") para mostrar o resultado final.`,
    `Dois objetos simples e bem diferentes para cada criança (lápis e borracha, ou bichinho de pelúcia e bloquinho), usados como exemplos das duas classes.`,
    `Cartões impressos com os nomes dos botões principais (Imagem, Webcam, Manter pressionado para gravar) e um desenho grande em cada um.`,
    `Duas caixinhas ou potes de verdade, vazios, para a analogia das classes como "caixinhas de exemplos".`,
    `Crachás ou etiquetas em branco para a brincadeira de "dar nome às caixinhas".`,
  ],
  conceitosChave: [
    `Teachable Machine — um site do Google que é uma máquina de ensinar: a gente mostra exemplos e ela aprende sozinha, sem precisar escrever código.`,
    `Classe — uma caixinha onde a gente junta vários exemplos parecidos, como a caixinha "gato" cheia de fotos de gatos.`,
    `Exemplo — cada foto que a gente coloca dentro de uma caixinha para a IA olhar e aprender.`,
    `Webcam — a câmera do computador que tira as fotos das crianças e dos objetos para virar exemplos.`,
    `Capturar — clicar no botão para tirar as fotos pela webcam e guardar dentro de uma classe.`,
    `Nome da classe — a palavrinha que escrevemos na caixinha para saber o que tem dentro dela, como uma etiqueta.`,
    `Projeto de Imagem — o tipo de máquina que escolhemos quando queremos que a IA aprenda olhando fotos.`,
  ],
  treinamento: `## O que o professor precisa saber

A Teachable Machine é um site gratuito do Google (teachablemachine.withgoogle.com) que funciona dentro do navegador, sem instalar nada. Ao entrar, clica-se no botão grande "Get Started" (Começar). Aparecem três tipos de projeto: "Imagem", "Áudio" e "Pose". Nesta aula usamos sempre o "Projeto de Imagem" (Image Project) e, dentro dele, a opção "Modelo de imagem padrão" (Standard image model).

A tela do projeto tem três colunas. À esquerda ficam as classes (as caixinhas de exemplos); cada classe nova já vem com o nome "Class 1", "Class 2" e um botão "Webcam" e "Upload". No meio fica o botão "Train Model" (Treinar modelo), que NÃO usaremos hoje. À direita fica o "Preview" (pré-visualização), que também fica para depois. Hoje o foco é só a coluna da esquerda: criar classes, renomear e capturar fotos.

Antes da aula, abra o seu projeto modelo e treine: criar uma classe, clicar no lápis ao lado do nome para renomear, clicar em "Webcam", permitir a câmera no aviso do navegador, segurar o botão "Hold to Record" (Manter pressionado para gravar) e ver as fotos enchendo a caixinha. Saber permitir a webcam é o ponto mais importante, pois é onde os iniciantes travam.

## Passo a passo da aula

Aquecimento (10 min): Receba a turma e mostre as duas caixinhas de verdade vazias. Coloque alguns lápis numa e borrachas na outra, dizendo "esta é a caixinha dos lápis, esta é a dos lápis de novo? Não! Esta é a das borrachas". Explique que no computador a IA também tem caixinhas, chamadas classes. Mostre no projetor o seu projeto modelo pronto, com duas classes cheias de fotos.

Conteúdo novo guiado (15 min): No projetor, abra teachablemachine.withgoogle.com, clique em "Get Started", depois em "Image Project" e em "Standard image model". Aponte a coluna da esquerda: "aqui estão as caixinhas". Clique no ícone de lápis ao lado de "Class 1" e renomeie para o nome do primeiro objeto. Clique em "Webcam", mostre o aviso do navegador e clique em "Permitir" (Allow). Segure "Hold to Record" e mostre as fotos aparecendo. Faça o mesmo com a "Class 2". Vá devagar, narrando cada clique.

Mão na massa (25 min): Agora é a vez deles. Peça para cada criança: 1) renomear a "Class 1" com o nome do primeiro objeto; 2) clicar em "Webcam" e permitir a câmera; 3) segurar "Hold to Record" para capturar várias fotos; 4) repetir tudo na "Class 2" com o segundo objeto. Circule pela sala, sente ao lado de quem travar na permissão da câmera, confirme que as fotos certas estão em cada caixinha.

Desafio + compartilhar (10 min): Lance o desafio "Mais ângulos": cada criança captura mais algumas fotos do objeto virando-o de ladinho e de cabeça para baixo, para a caixinha ficar mais completa. Depois faça a "volta da galeria": cada um mostra a tela e diz "Minha caixinha 1 é de... e a caixinha 2 é de...".

## Como explicar para crianças

Use a analogia das caixinhas o tempo todo: "Cada classe é uma caixinha de fotos parecidas." Chame o botão Webcam de "ligar a câmera" e o "Hold to Record" de "segurar o dedo para tirar muitas fotinhas seguidas". Diga que renomear é "dar nome para a caixinha, como escrever na etiqueta". Reforce que foto de lápis vai SÓ na caixinha do lápis, senão "a IA fica tonta e confunde tudo". Comemore cada caixinha que enche.

## Erros comuns e como ajudar

Não permitir a webcam: o navegador mostra um aviso no topo; ajude a clicar em "Permitir" (Allow); se sumiu, recarregue a página. Colocar fotos do objeto errado na caixinha: mostre como apagar passando o mouse e clicando na lixeira de cada foto. Só uma ou duas fotos: incentive a segurar mais tempo o "Hold to Record". Clicar em "Train Model" sem querer: explique que hoje a gente ainda não treina e mostre como continuar capturando. Câmera muito perto ou escura: ajude a afastar o objeto e a acender a luz da sala.`,
  exercicios: [
    {
      titulo: `Abrindo a Máquina de Ensinar`,
      tipo: `Prática na ferramenta`,
      tempo: `6 minutos`,
      guiaProfessor: `Mostre no projetor, bem devagar, o caminho do começo: "Get Started", depois "Image Project" e "Standard image model". Faça você primeiro e depois deixe a turma repetir. Confirme que cada criança chegou na tela com as duas caixinhas do lado esquerdo.`,
      atividade: `No site da Teachable Machine, clique no botão "Get Started". Depois clique em "Image Project" (Projeto de Imagem) e em "Standard image model". Olhe para a tela: do lado esquerdo apareceram duas caixinhas chamadas "Class 1" e "Class 2". Você abriu a máquina de ensinar!`,
      gabarito: `A criança acertou quando a tela do projeto de imagem está aberta, mostrando as duas classes ("Class 1" e "Class 2") na coluna da esquerda. Se ela consegue apontar as duas caixinhas vazias na tela, está no lugar certo.`,
    },
    {
      titulo: `Dando Nome às Caixinhas`,
      tipo: `Prática na ferramenta`,
      tempo: `7 minutos`,
      guiaProfessor: `Mostre o pequeno ícone de lápis ao lado do nome "Class 1". Explique que renomear é como escrever na etiqueta de uma caixa. Ajude quem não achar o lápis e quem tiver dificuldade de digitar; pode soletrar a palavra junto.`,
      atividade: `Clique no ícone de lápis ao lado de "Class 1" e apague o nome. Escreva o nome do seu primeiro objeto (por exemplo, "Lápis"). Faça o mesmo com a "Class 2", escrevendo o nome do segundo objeto (por exemplo, "Borracha"). Agora as duas caixinhas têm nome!`,
      gabarito: `Certo quando as duas classes deixaram de se chamar "Class 1" e "Class 2" e passaram a ter os nomes dos dois objetos escolhidos. Cada caixinha precisa ter um nome diferente e claro, ligado ao objeto que vai dentro dela.`,
    },
    {
      titulo: `Ligando a Câmera`,
      tipo: `Prática na ferramenta`,
      tempo: `8 minutos`,
      guiaProfessor: `Este é o passo onde os iniciantes mais travam. Demonstre clicar em "Webcam" e mostre o aviso do navegador pedindo permissão. Reforce o clique em "Permitir" (Allow). Circule rápido pela sala, pois várias câmeras vão pedir permissão ao mesmo tempo.`,
      atividade: `Na sua primeira caixinha, clique no botão "Webcam". Vai aparecer um aviso perguntando se pode usar a câmera: clique em "Permitir" (Allow). Pronto, agora você se vê na telinha! Aponte o seu objeto para a câmera e deixe ele bem visível.`,
      gabarito: `A criança acertou quando a webcam está ligada na primeira classe e a imagem ao vivo aparece dentro da caixinha, mostrando ela mesma ou o objeto. Se a imagem da câmera está visível e nítida na tela, a permissão foi dada corretamente.`,
    },
    {
      titulo: `Enchendo as Duas Caixinhas`,
      tipo: `Desafio na ferramenta`,
      tempo: `8 minutos`,
      guiaProfessor: `Explique que para a IA aprender precisamos de MUITAS fotos, não só uma. Demonstre segurar o botão "Hold to Record" e ver as fotos enchendo a caixinha. Reforce a regra de ouro: foto do objeto 1 só na caixinha 1, foto do objeto 2 só na caixinha 2. Ajude a apagar fotos que foram para a caixinha errada.`,
      atividade: `Na primeira caixinha, segure o botão "Hold to Record" (Manter pressionado para gravar) com o seu primeiro objeto na frente da câmera, até juntar várias fotos. Depois vá para a segunda caixinha, ligue a webcam nela e faça o mesmo com o segundo objeto. Cuidado: cada objeto vai SÓ na sua caixinha certa!`,
      gabarito: `Certo quando as duas classes têm cada uma várias fotos (não só uma ou duas), e as fotos estão na caixinha correta: o objeto 1 só na classe 1 e o objeto 2 só na classe 2. Nenhuma foto pode estar trocada de caixinha. Quanto mais fotos certas em cada uma, melhor.`,
    },
    {
      titulo: `Roda da Minha Máquina`,
      tipo: `Roda de conversa`,
      tempo: `5 minutos`,
      guiaProfessor: `Reúna a turma em roda (na frente do projetor ou cada um no seu monitor). Convide cada criança a mostrar a tela e dizer o que tem em cada caixinha. Faça perguntas gentis sobre por que escolheram aqueles objetos. Encerre celebrando que todos já têm as caixinhas prontas para treinar a IA na próxima aula.`,
      atividade: `Mostre a sua tela para a turma e complete a frase em voz alta: "Minha caixinha 1 é de ... e a minha caixinha 2 é de ...". Conte quantas fotinhas mais ou menos você colocou em cada uma e diga qual objeto foi mais divertido de fotografar.`,
      gabarito: `A participação está completa quando a criança aponta na sua tela as duas classes, diz o nome de cada caixinha e o objeto que está dentro dela, e mostra que cada uma tem várias fotos. Saber nomear as duas caixinhas e o que há em cada uma prova que ela entendeu o conceito de classe.`,
    },
  ],
};
