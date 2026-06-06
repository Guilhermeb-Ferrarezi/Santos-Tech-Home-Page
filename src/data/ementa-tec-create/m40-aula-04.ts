import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 4,
  titulo: "Montando o Ambiente Imersivo",
  semana: "Semana 2",
  duracao: "1 hora",
  objetivo: `Construir o cenário 3D da experiência VR posicionando chão, objetos, iluminação e skybox em escala real, organizando a hierarquia da cena e salvando o ambiente como prefab.`,
  descricao: `Nesta aula o aluno sai do papel e monta, dentro do Unity, o mundo que imaginou nas Aulas 1 e 2 e configurou na Aula 3. Em Realidade Virtual o cenário não é apenas um pano de fundo: ele é o lugar onde o jogador vai estar de corpo presente, olhando para todos os lados. Por isso, montar o ambiente imersivo significa pensar como arquiteto e como diretor de cinema ao mesmo tempo: onde fica o chão, o que aparece em volta, de onde vem a luz e qual é o céu lá no fundo.

O coração da aula é a escala. No VR, o usuário enxerga o mundo no tamanho real do próprio corpo, então uma porta de dois metros precisa mesmo ter dois metros no Unity. Uma cadeira gigante ou uma mesa minúscula quebra a imersão na hora e pode até causar enjoo. O aluno vai aprender que, no Unity, uma unidade equivale a um metro, e vai conferir as proporções colocando uma referência humana na cena para comparar. Ajustar escala e posição com cuidado é o que faz o cérebro acreditar que aquele lugar é real.

A segunda grande ideia é a atmosfera. Um ambiente vivo nasce da combinação de três elementos: a iluminação (a luz direcional que faz o papel do sol, mais luzes de apoio para criar clima), o skybox (a textura que envolve toda a cena como uma redoma e define o céu, do azul de meio-dia ao alaranjado de fim de tarde) e o posicionamento dos objetos, que conta uma história sobre aquele espaço. O aluno aprende que poucos objetos bem colocados valem mais do que muitos jogados de qualquer jeito.

Por fim, o aluno organiza a hierarquia da cena, agrupando objetos sob objetos vazios com nomes claros como Ambiente, Iluminacao e Mobiliario, para não se perder, e salva o conjunto como um prefab, que é um molde reaproveitável do ambiente. Ao final, cada aluno terá um cenário 3D completo, em escala correta, iluminado, com céu definido e organizado, pronto para receber as interações de mão da próxima aula.`,
  materiais: [
    `Computadores com o Unity instalado (versão LTS recente) e o projeto VR da Aula 3 aberto, um por aluno`,
    `Óculos VR disponíveis para conferir a escala da cena ao vivo (uso rápido e supervisionado)`,
    `Projetor ou TV para o professor demonstrar cada passo na tela`,
    `Pasta com assets de exemplo: modelos 3D simples (chão, paredes, mesa, cadeira) e ao menos um arquivo de skybox`,
    `Modelo de referência humana (um boneco ou cápsula de 1,8 metro) para comparar proporções`,
    `Folha impressa ou slide com a regra de escala (1 unidade do Unity equivale a 1 metro) e o mapa dos painéis Hierarchy, Scene e Inspector`,
  ],
  conceitosChave: [
    `Escala — a relação entre o tamanho dos objetos e o tamanho real; no Unity 1 unidade equivale a 1 metro, essencial para o VR parecer verdadeiro.`,
    `Hierarchy (hierarquia) — o painel que lista todos os objetos da cena; objetos podem ficar agrupados dentro de outros, como pastas.`,
    `Objeto vazio (Empty) — um objeto sem forma, usado só para agrupar e organizar outros objetos na hierarquia.`,
    `Transform — o componente que guarda a posição (Position), a rotação (Rotation) e a escala (Scale) de cada objeto.`,
    `Iluminação — as luzes da cena; a Directional Light faz o papel do sol e luzes de apoio criam clima e profundidade.`,
    `Skybox — a textura que envolve toda a cena como uma redoma e define o céu e o horizonte ao fundo.`,
    `Prefab — um molde reaproveitável de um objeto ou grupo de objetos, salvo para ser usado de novo sem montar tudo outra vez.`,
  ],
  treinamento: `## O que o professor precisa saber

Você não precisa ser especialista em Unity. Esta aula tem quatro partes simples: montar o cenário, acertar a escala, criar atmosfera com luz e céu, e organizar e salvar. Três painéis importam hoje. A Hierarchy, à esquerda, é a lista de tudo que existe na cena. A Scene, a janela grande do meio, é onde montamos o mundo em 3D (navegue segurando o botão direito do mouse e usando as teclas W, A, S, D, como num jogo). E o Inspector, à direita, mostra os detalhes do objeto selecionado, com destaque para o componente Transform, que tem Position, Rotation e Scale. A regra de ouro do dia é a escala: 1 unidade do Unity equivale a 1 metro. Faça o caminho inteiro uma vez antes da aula, do chão ao prefab salvo.

## Passo a passo da aula (ritmo 10/15/25/10, com o código exato)

Aquecimento (10 min): abra o projeto VR da Aula 3 no projetor. Mostre a cena ainda vazia e o roteiro que cada aluno escreveu. Pergunte: o que precisa existir aqui para o jogador acreditar que está nesse lugar? Conduza até chão, objetos, luz e céu. Mostre uma foto de um cômodo bem iluminado e o mesmo cômodo escuro para sentirem o peso da iluminação.

Conteúdo novo guiado (15 min): no Hierarchy, clique com o botão direito, escolha 3D Object e depois Plane para criar o chão. No Inspector, no Transform, deixe Position em 0, 0, 0. Crie um cubo (3D Object, Cube) e no Transform ajuste a Scale para 1, 2, 1, explicando que isso é uma parede de dois metros de altura. Coloque a cápsula de referência humana ao lado para comparar. Agora a luz: clique na Directional Light que já existe e, no Inspector, gire o Rotation para mudar a direção do sol e ajuste a Intensity. Para o céu, abra Window, depois Rendering e Lighting, na aba Environment arraste um Skybox Material para o campo Skybox Material. Por fim, mostre como organizar: crie um objeto vazio com botão direito, Create Empty, renomeie para Ambiente e arraste o chão e as paredes para dentro dele na Hierarchy.

Mão na massa (25 min): cada aluno monta seu cenário com chão, ao menos quatro objetos posicionados com intenção, ajusta a escala usando a referência humana, escolhe um skybox e regula a luz. Em seguida, organiza a Hierarchy em grupos com nomes claros (Ambiente, Iluminacao, Mobiliario). Quando quiser garantir a escala por código, mostre um pequeno script chamado AjustaEscala anexado a um objeto, com este conteúdo dentro do método Start: transform.localScale = new Vector3(1f, 2f, 1f); que define largura 1, altura 2 e profundidade 1 em metros. Circule ajudando individualmente e empreste o óculos para um ou dois alunos conferirem a escala ao vivo.

Desafio e compartilhar (10 min): cada aluno transforma o grupo Ambiente em prefab arrastando-o da Hierarchy para a pasta Prefabs no Project, e troca o skybox por outro para mudar a hora do dia. Dois ou três voluntários mostram a cena no projetor explicando uma escolha de atmosfera.

## Como explicar de forma clara (linguagem para a idade)

Use comparações concretas. Diga que montar a cena é como arrumar um quarto de verdade: primeiro o piso, depois os móveis, por último a luz e a vista da janela. Explique a escala lembrando que, no VR, eles ficam do tamanho real, então uma porta tem que dar para passar por ela de pé. A referência humana é o boneco de comparação: se a mesa bate na cintura do boneco, está certa. O skybox é a redoma do céu que envolve tudo, como estar dentro de uma bolha pintada. O prefab é um molde, como um carimbo: monta uma vez e usa quantas vezes quiser. Mostre sempre antes de pedir para fazer e fale o nome do painel em voz alta enquanto aponta na tela.

## Erros comuns e como ajudar

O erro mais comum é a escala errada: objetos gigantes ou minúsculos. Ensine a sempre comparar com a cápsula humana e a conferir os valores no Transform. Outro é o chão flutuando ou enterrado; oriente a deixar o Plane com Position Y em 0. Muitos esquecem de criar os objetos vazios e a Hierarchy vira uma bagunça; reforce o hábito de agrupar com nomes claros. Na luz, alguns deixam a cena escura demais; ensine a girar o Rotation da Directional Light e subir a Intensity. Há quem não veja o skybox mudar; lembre que ele é configurado em Window, Rendering, Lighting, aba Environment. Por fim, ao salvar o prefab, alguns arrastam só um objeto em vez do grupo; mostre que é o objeto vazio Ambiente, com tudo dentro, que vai para a pasta Prefabs.`,
  exercicios: [
    {
      titulo: `Chão e referência humana`,
      tipo: `prática na ferramenta`,
      tempo: `5 minutos`,
      guiaProfessor: `Confirme que cada aluno criou o Plane com Position em 0, 0, 0. Mostre como adicionar a cápsula de referência e por que ela fica no chão e não enterrada.`,
      atividade: `Crie o chão da cena usando um Plane com Position 0, 0, 0 e adicione uma cápsula humana de referência de 1,8 metro de altura em pé sobre o chão.`,
      gabarito: `Na Hierarchy existe um Plane no centro (Position 0, 0, 0) e uma Capsule apoiada sobre ele, com a base no nível do chão. A cápsula serve de referência de tamanho real para os próximos objetos.`,
    },
    {
      titulo: `Uma parede em escala correta`,
      tipo: `prática na ferramenta`,
      tempo: `6 minutos`,
      guiaProfessor: `Reforce que 1 unidade equivale a 1 metro. Verifique no Inspector se o aluno alterou a Scale e comparou a altura da parede com a cápsula.`,
      atividade: `Crie um Cube e ajuste o Transform para virar uma parede de cerca de 2 metros de altura. Compare a altura com a cápsula humana e corrija se necessário.`,
      gabarito: `No Inspector, o Cube tem Scale 1, 2, 1 (ou valores próximos que deem aproximadamente 2 metros de altura). A parede fica um pouco mais alta que a cápsula de 1,8 metro, confirmando a escala correta.`,
    },
    {
      titulo: `Luz e skybox para criar clima`,
      tipo: `prática na ferramenta`,
      tempo: `6 minutos`,
      guiaProfessor: `Mostre o caminho Window, Rendering, Lighting, aba Environment. Ensine a girar o Rotation da Directional Light e a ajustar a Intensity. Incentive a escolher um clima.`,
      atividade: `Ajuste a Directional Light girando seu Rotation e mudando a Intensity, e troque o Skybox Material para definir o céu da sua cena, criando um clima (manhã, tarde ou noite).`,
      gabarito: `A Directional Light foi girada e teve a Intensity ajustada para a cena ficar bem iluminada, nem escura nem estourada. O Skybox Material foi trocado na aba Environment e o céu mudou de forma perceptível, criando um clima escolhido pelo aluno.`,
    },
    {
      titulo: `Organizando a hierarquia`,
      tipo: `desafio`,
      tempo: `5 minutos`,
      guiaProfessor: `Mostre Create Empty e como renomear. Verifique se os objetos foram arrastados para dentro dos grupos certos na Hierarchy e se os nomes estão claros.`,
      atividade: `Crie objetos vazios chamados Ambiente, Iluminacao e Mobiliario e arraste cada objeto da cena para o grupo certo dentro da Hierarchy.`,
      gabarito: `A Hierarchy tem três objetos vazios (Ambiente, Iluminacao, Mobiliario). O chão e as paredes estão dentro de Ambiente, as luzes dentro de Iluminacao e os móveis dentro de Mobiliario. A lista fica organizada e fácil de entender.`,
    },
    {
      titulo: `Garantindo a escala por código e salvando o prefab`,
      tipo: `projeto da aula`,
      tempo: `8 minutos`,
      guiaProfessor: `Esta atividade junta tudo. Mostre como criar e anexar o script AjustaEscala a um objeto e como arrastar o grupo Ambiente para a pasta Prefabs. Lembre de usar new Vector3 sem strings interpoladas.`,
      atividade: `Crie um script chamado AjustaEscala que, no método Start, defina a escala de um objeto para largura 1, altura 2 e profundidade 1 metro. Anexe-o a uma parede. Depois, transforme o grupo Ambiente em prefab arrastando-o para a pasta Prefabs.`,
      gabarito: `O script fica assim: public class AjustaEscala : MonoBehaviour { void Start() { transform.localScale = new Vector3(1f, 2f, 1f); } } e está anexado à parede, que passa a ter 2 metros de altura ao rodar a cena. O grupo Ambiente foi arrastado para a pasta Prefabs do Project e aparece lá como um molde reaproveitável (ícone azul de prefab).`,
    },
  ],
};
