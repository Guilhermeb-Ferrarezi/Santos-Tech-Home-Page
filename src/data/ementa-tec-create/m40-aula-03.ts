import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 3,
  titulo: "Configurando o Projeto VR no Unity",
  semana: "Semana 2",
  duracao: "1 hora",
  objetivo: `Criar um projeto Unity preparado para Realidade Virtual com o XR Interaction Toolkit, montar a câmera VR e o rig do jogador e fazer um primeiro teste básico de movimento dentro de uma cena vazia.`,
  descricao: `Nesta aula o aluno deixa o papel e o roteiro de lado e entra de fato no computador para construir a base técnica da experiência em Realidade Virtual. Nas Aulas 1 e 2 a turma imaginou mundos imersivos e escreveu o plano da experiência. Agora chegou a hora de abrir o Unity e preparar o terreno onde tudo vai acontecer. O foco de hoje não é fazer um jogo bonito, e sim deixar o projeto pronto para receber o ambiente nas próximas aulas, com a câmera enxergando o mundo pelos olhos do jogador.

O coração desta aula é o XR Interaction Toolkit, um conjunto de ferramentas oficial do Unity que cuida do trabalho pesado da Realidade Virtual: ele liga o headset, lê a posição da cabeça e das mãos e transforma isso em movimento dentro da cena. Sem ele, o aluno teria que programar muita coisa do zero. Com ele, basta configurar o pacote e adicionar um objeto pronto chamado XR Origin, que funciona como o corpo virtual do jogador. Esse XR Origin carrega dentro de si a câmera (os olhos) e os controladores (as mãos).

Para entender por que isso funciona, o aluno precisa compreender o sistema de coordenadas em 3D. Todo objeto no Unity tem uma posição no espaço descrita por três números: X (esquerda e direita), Y (baixo e cima) e Z (frente e trás). O headset mede o quanto a cabeça do jogador se mexe na vida real e copia esse movimento para a câmera dentro dessas coordenadas. Quando você abaixa a cabeça, o valor de Y diminui; quando você anda para frente, o valor de Z muda. É essa correspondência entre o mundo real e os números do Unity que cria a sensação mágica de estar dentro do jogo.

Ao final da aula, cada aluno terá um projeto VR funcionando com o XR Origin configurado e fará um teste básico no modo de simulação ou no headset, conferindo se a câmera responde ao movimento da cabeça. É um marco importante: a partir daqui, todo o ambiente imersivo das próximas aulas será construído sobre essa base. O professor deve tratar este dia como a fundação de uma casa: invisível no fim, mas essencial para tudo se sustentar.`,
  materiais: [
    `Computadores com Realidade Virtual (Unity + C#) instalado, com o Unity Hub e uma versão LTS recente do Unity (um por aluno)`,
    `Óculos VR por aluno ou compartilhados em duplas (Meta Quest ligado por cabo ou outro headset compatível)`,
    `Projetor ou TV para o professor demonstrar cada passo da configuração em tela grande`,
    `Conexão com a internet para baixar o pacote XR Interaction Toolkit pelo Package Manager`,
    `Arquivo de exemplo (projeto base ou print das janelas) mostrando o XR Origin já configurado, para consulta rápida`,
    `Cabo de teste do headset e adaptadores, conferidos antes da aula`,
    `Folha impressa com o diagrama dos eixos X, Y e Z para apoiar a explicação de coordenadas`,
  ],
  conceitosChave: [
    `XR Interaction Toolkit — pacote oficial do Unity que cuida da Realidade Virtual, lendo o headset e os controles e transformando o movimento real em movimento na cena.`,
    `XR Origin — o objeto que representa o corpo virtual do jogador; dentro dele ficam a câmera (os olhos) e os controladores (as mãos).`,
    `Rig do jogador — o conjunto montado de câmera mais controladores que se move junto com a pessoa, posicionando o ponto de vista dentro do mundo.`,
    `Sistema de coordenadas 3D — a forma de descrever a posição de qualquer objeto com três números: X (esquerda e direita), Y (baixo e cima) e Z (frente e trás).`,
    `Tracking (rastreamento) — a leitura constante que o headset faz da posição da cabeça e das mãos para copiá-la para o jogo em tempo real.`,
    `Package Manager — a janela do Unity onde instalamos e atualizamos pacotes prontos, como o próprio XR Interaction Toolkit.`,
    `Cena (Scene) — o espaço de trabalho do Unity onde montamos o mundo; nesta aula ela está vazia, pronta para receber o ambiente.`,
  ],
  treinamento: `## O que o professor precisa saber

Você não precisa dominar Realidade Virtual para dar esta aula. Precisa entender quatro ideias. Primeira: o Unity organiza tudo em cenas, e cada objeto da cena tem uma posição em X, Y e Z. Segunda: o XR Interaction Toolkit é um pacote pronto que instalamos pelo Package Manager e que faz o headset conversar com o Unity. Terceira: o XR Origin é um objeto pronto que já vem com a câmera e as mãos do jogador; basta adicioná-lo à cena. Quarta: o headset rastreia a cabeça e copia esse movimento para a câmera. Antes da aula, faça o caminho uma vez: crie um projeto 3D, instale o pacote, adicione o XR Origin e aperte Play. Se conseguir, está pronto. Tenha o projeto de exemplo aberto para consulta.

## Passo a passo da aula (ritmo 10/15/25/10, com o código exato)

10 min, aquecimento e revisão. Retome o roteiro da Aula 2. Pergunte: para a câmera enxergar o mundo pelos olhos do jogador, o computador precisa saber onde está a cabeça dele. Como? Apresente os eixos com a folha impressa: X para os lados, Y para cima e baixo, Z para frente e trás. Faça a turma apontar cada direção com o braço.

15 min, conteúdo novo guiado. No Unity Hub, clique em New Project, escolha o modelo 3D, dê o nome ExperienciaVR e crie. Com o projeto aberto, vá no menu Window e clique em Package Manager. No alto, troque a fonte para Unity Registry, procure por XR Interaction Toolkit e clique em Install. Aceite instalar também os Samples chamados Starter Assets. Agora, na janela Hierarchy, clique com o botão direito, escolha XR e depois XR Origin (VR). Pronto: aparece o XR Origin com a Main Camera dentro e dois controladores (Left e Right). Apague a câmera antiga solta na cena, se houver, para não conflitar.

25 min, mão na massa. Cada aluno repete o caminho no próprio computador: cria o projeto, instala o pacote e adiciona o XR Origin. Em seguida, criam um C# Script chamado InfoCamera para imprimir a posição da câmera e entender as coordenadas. Crie o arquivo e cole o código exato abaixo, arraste o script para o XR Origin e aperte Play, observando os números mudarem ao mover a cabeça no simulador ou no headset.

using UnityEngine;

public class InfoCamera : MonoBehaviour
{
    public Transform cabeca;

    void Update()
    {
        Vector3 p = cabeca.position;
        Debug.Log("Posicao X: " + p.x + " Y: " + p.y + " Z: " + p.z);
    }
}

No Inspector, arraste a Main Camera (de dentro do XR Origin) para o campo cabeca. A linha Vector3 p guarda a posição em três números; cada Debug.Log mostra esses valores na janela Console.

10 min, desafio e compartilhar. Peça que cada aluno aperte Play, mexa a cabeça e diga em voz alta qual número muda quando agacha (Y) e quando anda para frente (Z). Quem tiver headset confirma no aparelho. Compartilhem em duplas o que descobriram.

## Como explicar de forma clara (linguagem para a idade)

Use comparações simples. Diga: o XR Origin é o seu corpo dentro do jogo; a câmera são seus olhos e os controladores são suas mãos. Para as coordenadas: imagine um mapa de tesouro com três medidas em vez de duas; X anda para os lados, Y sobe ou desce e Z vai para frente ou para trás. Para o tracking: o headset é como um amigo que copia cada movimento da sua cabeça e avisa o computador na hora. Evite jargão sem explicar: diga pacote antes de package e câmera antes de camera. Sempre ligue ao projeto: este é o corpo que vai viver no mundo que você imaginou.

## Erros comuns e como ajudar

O erro mais comum é instalar o projeto sem o XR Interaction Toolkit e não achar a opção XR no menu do botão direito; confira se o pacote terminou de instalar. Outro é deixar duas câmeras na cena, o que deixa a tela estranha; apague a câmera solta e mantenha só a de dentro do XR Origin. Muitos esquecem de arrastar a Main Camera para o campo cabeca do script e tomam erro de referência nula; mostre como arrastar no Inspector. Se nada aparece no Console, confira se a janela Console está aberta pelo menu Window. Se o headset não responde, verifique o cabo e se o aparelho foi reconhecido antes de culpar o código.`,
  exercicios: [
    {
      titulo: `Apontando os eixos X, Y e Z`,
      tipo: `aquecimento em grupo`,
      tempo: `7 minutos`,
      guiaProfessor: `Use a folha do diagrama e o corpo dos alunos. Faça todos apontarem cada eixo com o braço antes de tocar no computador. Confira se entenderam que Y é vertical.`,
      atividade: `Em pé, aponte com o braço para onde vai o eixo X, depois o eixo Y e depois o eixo Z. Em uma frase, escreva o que cada eixo controla na posição de um objeto.`,
      gabarito: `X controla o movimento para os lados (esquerda e direita), Y controla para cima e para baixo (altura) e Z controla para frente e para trás (profundidade). Resposta esperada: "X anda para os lados, Y sobe e desce, Z vai para frente e para trás." Toda posição no Unity é descrita por esses três números juntos, escritos como Vector3.`,
    },
    {
      titulo: `Instalando o XR Interaction Toolkit`,
      tipo: `prática na ferramenta`,
      tempo: `10 minutos`,
      guiaProfessor: `Garanta a internet funcionando antes de começar. Mostre na tela grande onde fica o Package Manager e como trocar a fonte para Unity Registry. Aguarde a instalação terminar antes de seguir.`,
      atividade: `Crie um novo projeto 3D chamado ExperienciaVR. Abra o Package Manager, procure por XR Interaction Toolkit e instale o pacote, incluindo os Starter Assets. Avise o professor quando aparecer a marca de instalado.`,
      gabarito: `Caminho correto: Unity Hub, New Project, modelo 3D, nome ExperienciaVR; depois menu Window, Package Manager, fonte Unity Registry, buscar XR Interaction Toolkit, botão Install e aceitar os Samples (Starter Assets). Ao final, o pacote aparece com a marca de instalado na lista. Se a opção XR não surgir depois no menu do botão direito, a instalação não terminou.`,
    },
    {
      titulo: `Montando o rig do jogador com o XR Origin`,
      tipo: `prática na ferramenta`,
      tempo: `12 minutos`,
      guiaProfessor: `Mostre o caminho do botão direito na Hierarchy: XR, depois XR Origin (VR). Lembre de apagar qualquer câmera solta para não haver duas câmeras na cena.`,
      atividade: `Na janela Hierarchy, adicione um XR Origin (VR). Abra o objeto e confira que dentro dele existem a Main Camera e os dois controladores (Left e Right). Apague a câmera antiga solta na cena, se houver.`,
      gabarito: `Caminho correto: botão direito na Hierarchy, XR, XR Origin (VR). Dentro do XR Origin devem aparecer a Camera Offset com a Main Camera e os controladores Left Controller e Right Controller. A cena deve ter apenas uma câmera, a de dentro do XR Origin. Se sobrar a câmera padrão solta, apague-a para evitar a tela dividida ou preta.`,
    },
    {
      titulo: `Lendo a posição da câmera com C#`,
      tipo: `programação`,
      tempo: `15 minutos`,
      guiaProfessor: `Crie um C# Script e cole o código. Reforce arrastar a Main Camera para o campo cabeca no Inspector. Abra a janela Console pelo menu Window antes do Play. Não use texto com cifrão dentro de aspas.`,
      atividade: `Crie um script chamado InfoCamera com o código da aula, arraste-o para o XR Origin e ligue a Main Camera no campo cabeca. Aperte Play e observe na janela Console os valores de X, Y e Z mudando ao mover a cabeça.`,
      gabarito: `Código-solução correto:

using UnityEngine;

public class InfoCamera : MonoBehaviour
{
    public Transform cabeca;

    void Update()
    {
        Vector3 p = cabeca.position;
        Debug.Log("Posicao X: " + p.x + " Y: " + p.y + " Z: " + p.z);
    }
}

No Inspector, o campo cabeca recebe a Main Camera arrastada de dentro do XR Origin. Ao apertar Play, o Console mostra três números que mudam com o movimento. Se aparecer erro de referência nula, o campo cabeca ficou vazio; basta arrastar a câmera para ele.`,
    },
    {
      titulo: `Teste de movimento: qual número muda?`,
      tipo: `desafio em dupla`,
      tempo: `12 minutos`,
      guiaProfessor: `Quem tiver headset testa no aparelho; os demais usam o simulador do XR (Device Simulator). Conduza a dupla a relacionar cada movimento real ao eixo certo. Cheque o cabo do headset antes.`,
      atividade: `Em dupla, com o projeto rodando, observem o Console. Um agacha (ou move a câmera para baixo no simulador) e o outro anota qual número muda. Depois andem para frente e anotem de novo. Escrevam qual eixo corresponde a cada movimento.`,
      gabarito: `Ao agachar ou abaixar a cabeça, o valor de Y diminui (altura). Ao andar ou mover para frente, o valor de Z muda (profundidade); movimentos para os lados alteram o X. Resposta esperada: "Agachar mexe no Y; andar para frente mexe no Z; ir para o lado mexe no X." Isso confirma que o headset está fazendo o tracking e copiando o movimento real para a câmera dentro da cena.`,
    },
  ],
};
