import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 7,
  titulo: "Olhando ao Redor em VR",
  semana: "Semana 4",
  duracao: "1 hora",
  objetivo: `Implementar o rastreamento de cabeça para que o olhar do jogador controle a câmera de forma natural e criar um script em C# de interação por gaze que reage ao que o jogador está encarando.`,
  descricao: `Nesta aula, os alunos descobrem a forma mais antiga e mais intuitiva de interagir dentro da Realidade Virtual: o olhar. Em VR, o headset já rastreia automaticamente a cabeça do jogador, e a câmera dentro do Unity segue esse movimento. Mas hoje vamos um passo além: vamos usar a direção para onde a pessoa está olhando como um comando. Quando o jogador encara um objeto, esse objeto reage, muda de cor, acende ou solta uma mensagem. Isso se chama interação por gaze (olhar), e é a base de menus, botões e seleção em muitos jogos e experiências de VR.

O coração técnico da aula é entender que a câmera dentro do XR Rig representa exatamente a cabeça do jogador. Ela tem uma posição e uma direção para a frente, chamada de vetor forward. Esse vetor aponta sempre para onde a pessoa está olhando. A partir dele, disparamos um raio invisível, o Raycast, que sai dos olhos e segue em linha reta. Quando esse raio bate em um objeto, sabemos que o jogador está olhando para ele. E aí a mágica acontece: o código decide o que fazer.

Os alunos já prepararam o Unity, montaram o XR Rig, criaram a primeira cena e cuidaram da iluminação e do conforto nas aulas anteriores. Agora eles escrevem o primeiro script de interação de verdade. Vão mexer com a classe Camera, com a Transform da câmera, com o Physics.Raycast e com componentes como o Renderer e o Material para mudar a aparência do objeto encarado. Tudo isso em C#, a linguagem do Unity.

Ao final, cada aluno terá um objeto na cena que reage ao olhar: ao virar a cabeça e mirá-lo, ele muda de cor; ao desviar o olhar, ele volta ao normal. É uma vitória pequena, mas poderosa, porque é a primeira vez que o mundo virtual responde a uma intenção do jogador. Na próxima aula, a oitava, eles vão somar o movimento e fechar o entregável do mês.`,
  materiais: [
    `Computadores com Realidade Virtual (Unity + C#) instalado e configurado, um por aluno`,
    `Óculos VR por aluno ou compartilhados em rodízio, já pareados e com o XR Plugin ativo`,
    `Projetor ou TV para o professor demonstrar cada passo na tela grande`,
    `Arquivo de exemplo: cena Unity da Aula 6 (com o XR Rig e a iluminação prontos) para quem precisar de um ponto de partida`,
    `Script de apoio GazeInteractor.cs (versão do professor) salvo na pasta de exemplos, para consulta`,
    `Folha impressa ou slide com o código exato do script, para os alunos acompanharem digitando`,
    `Cubos e esferas simples já na cena, com Collider, servindo de alvos para o olhar`,
  ],
  conceitosChave: [
    `Gaze (olhar) — usar a direção para onde o jogador está olhando como um comando dentro da experiência.`,
    `Vetor forward — a seta invisível que sai da câmera e aponta sempre para a frente, ou seja, para onde a cabeça está virada.`,
    `Raycast — um raio invisível disparado em linha reta que detecta o primeiro objeto que cruza o seu caminho.`,
    `RaycastHit — a caixinha de informações que o Raycast devolve quando bate em algo: qual objeto foi, onde e a que distância.`,
    `Collider — a casca invisível de colisão de um objeto; sem ela, o Raycast atravessa o objeto sem detectar nada.`,
    `Renderer e Material — o Renderer desenha o objeto na tela e o Material guarda a cor e a aparência que podemos trocar pelo código.`,
    `Camera.main — o atalho do Unity para encontrar a câmera principal da cena, que em VR é a cabeça do jogador.`,
  ],
  treinamento: `## O que o professor precisa saber

Você não precisa dominar Realidade Virtual para dar esta aula. A ideia central é simples: a câmera dentro do XR Rig representa a cabeça do jogador, e ela tem uma direção para a frente. Dessa direção, disparamos um raio invisível (o Raycast) e descobrimos para qual objeto a pessoa está olhando.

No Unity, os painéis que você vai usar são: a Hierarchy (lista de objetos da cena, à esquerda), a Scene (a janela 3D no centro), o Inspector (propriedades do objeto selecionado, à direita) e a aba Project (os arquivos, embaixo). Para criar um script, clique com o botão direito na pasta Scripts dentro da Project, escolha Create e depois C# Script. Para abrir e editar, clique duas vezes no script: o Visual Studio abre. Lembre que todo objeto que será detectado pelo raio precisa ter um Collider (o Unity já coloca um ao criar um cubo ou esfera).

## Passo a passo da aula

Aquecimento (10 min): Retome a Aula 6. Pergunte: quando você vira a cabeça com o headset, o que acontece na tela? Conduza até a resposta: a câmera vira junto. Faça um teste rápido: peça a um aluno colocar o óculos e olhar em volta da cena montada. Depois lance a pergunta do dia: e se, só de OLHAR para um objeto, ele mudasse de cor?

Conteúdo novo guiado (15 min): No projetor, selecione um cubo na Hierarchy e confirme no Inspector que ele tem um Box Collider. Na pasta Scripts, crie um C# Script chamado GazeInteractor. Abra e digite o código abaixo, explicando cada linha enquanto escreve:

using UnityEngine;

public class GazeInteractor : MonoBehaviour
{
    public float distancia = 10f;
    public Color corDestaque = Color.yellow;

    private Camera cameraJogador;
    private Renderer ultimoAlvo;
    private Color corOriginal;

    void Start()
    {
        cameraJogador = Camera.main;
    }

    void Update()
    {
        Ray raio = new Ray(cameraJogador.transform.position, cameraJogador.transform.forward);
        RaycastHit info;

        if (Physics.Raycast(raio, out info, distancia))
        {
            Renderer alvo = info.collider.GetComponent<Renderer>();
            if (alvo != null && alvo != ultimoAlvo)
            {
                Limpar();
                ultimoAlvo = alvo;
                corOriginal = alvo.material.color;
                alvo.material.color = corDestaque;
            }
        }
        else
        {
            Limpar();
        }
    }

    void Limpar()
    {
        if (ultimoAlvo != null)
        {
            ultimoAlvo.material.color = corOriginal;
            ultimoAlvo = null;
        }
    }
}

Explique: Camera.main acha a cabeça do jogador; transform.forward é a direção do olhar; Physics.Raycast dispara o raio; info.collider.GetComponent pega o desenho do objeto atingido; trocamos a cor e, quando o olhar sai, Limpar devolve a cor original. Arraste o script para um objeto vazio chamado GazeManager na Hierarchy.

Mão na massa (25 min): Cada aluno cria o script, digita o código, salva (Ctrl + S) e volta ao Unity. Coloca dois ou três cubos e esferas com cores diferentes na cena, aperta Play e testa com o óculos virando a cabeça para mirar cada alvo. Circule ajudando quem travar.

Desafio + compartilhar (10 min): Quem terminou muda a corDestaque no Inspector e cria um terceiro alvo. Dois ou três alunos mostram no projetor o objeto reagindo ao olhar.

## Como explicar de forma clara

Use a comparação da lanterna: a cabeça do jogador segura uma lanterna invisível que aponta sempre para a frente. O Raycast é o facho dessa lanterna. O que a luz toca, acende. Diga que transform.forward é a seta que sempre aponta para o nariz da câmera. Mostre antes de mandar fazer, e vá falando os nomes dos painéis enquanto aponta na tela. Repita a palavra Collider até fixar: sem casca, o raio passa direto.

## Erros comuns e como ajudar

O erro mais comum é esquecer o Collider no alvo: o raio não detecta nada. Mostre o Inspector e adicione um Box Collider. Outro erro é o objeto não ter Renderer ou Material próprio; oriente a usar objetos 3D padrão do Unity. Muitos esquecem de arrastar o script para um objeto da cena, e nada roda; lembre que script parado na pasta não executa. Tem quem digite Camera.Main com M maiúsculo; corrija para Camera.main. Por fim, se a cor não volta, geralmente a função Limpar não foi chamada; revise as chaves do else.`,
  exercicios: [
    {
      titulo: `Confirmar a cabeça do jogador`,
      tipo: `prática na ferramenta`,
      tempo: `7 minutos`,
      guiaProfessor: `Garanta que cada aluno encontre o XR Rig na Hierarchy e localize a câmera filha. Reforce que essa câmera é a cabeça do jogador e que ela tem uma Transform com posição e direção.`,
      atividade: `Na cena da Aula 6, expanda o XR Rig na Hierarchy, clique na câmera e observe no Inspector a sua Transform. Aperte Play, coloque o óculos e vire a cabeça confirmando que a câmera segue o seu movimento.`,
      gabarito: `O aluno aponta a câmera dentro do XR Rig, mostra a Transform no Inspector e, ao testar com o óculos, a imagem gira junto com a cabeça, provando que a câmera representa o olhar do jogador.`,
    },
    {
      titulo: `Disparar o primeiro raio`,
      tipo: `prática na ferramenta`,
      tempo: `8 minutos`,
      guiaProfessor: `Acompanhe a criação do script GazeInteractor e a digitação do Raycast. Confira se cada aluno arrastou o script para um objeto da cena e se o alvo tem Collider.`,
      atividade: `Crie o script GazeInteractor, digite o código do Raycast com Debug visual e teste se o raio detecta um cubo à frente. Use Debug.DrawRay para enxergar o raio na janela Scene.`,
      gabarito: `Código esperado dentro de Update:

Ray raio = new Ray(Camera.main.transform.position, Camera.main.transform.forward);
Debug.DrawRay(raio.origin, raio.direction * 10f, Color.green);
RaycastHit info;
if (Physics.Raycast(raio, out info, 10f))
{
    Debug.Log("Olhando para: " + info.collider.name);
}

Ao rodar, o Console mostra o nome do cubo quando o olhar o cruza e a linha verde aparece na Scene.`,
    },
    {
      titulo: `Mudar a cor do que olho`,
      tipo: `prática na ferramenta`,
      tempo: `8 minutos`,
      guiaProfessor: `Aqui o aluno completa o script da aula trocando a cor do alvo. Verifique se ele guarda a cor original e a devolve quando o olhar sai, usando a função Limpar.`,
      atividade: `Complete o GazeInteractor para que o objeto encarado fique amarelo e volte à cor original quando o jogador desviar o olhar. Teste com dois cubos lado a lado.`,
      gabarito: `Trecho-solução dentro de Update após o Raycast bater:

Renderer alvo = info.collider.GetComponent<Renderer>();
if (alvo != null && alvo != ultimoAlvo)
{
    Limpar();
    ultimoAlvo = alvo;
    corOriginal = alvo.material.color;
    alvo.material.color = Color.yellow;
}

E no else, chamar Limpar(); que faz ultimoAlvo.material.color = corOriginal; e ultimoAlvo = null;. Ao testar, o cubo mirado fica amarelo e volta ao normal quando o olhar sai.`,
    },
    {
      titulo: `Olhar com tempo de espera`,
      tipo: `desafio`,
      tempo: `6 minutos`,
      guiaProfessor: `Desafio de dificuldade maior: o objeto só deve reagir depois que o jogador o encara por um tempo (gaze com dwell). Ajude com um contador usando Time.deltaTime.`,
      atividade: `Faça o objeto só mudar de cor depois que o jogador olhar para ele por 2 segundos seguidos. Se o olhar sair antes, o contador reinicia.`,
      gabarito: `Solução usando um contador. Declarar private float tempoOlhando = 0f; e dentro do Update, quando o Raycast bate no mesmo alvo:

tempoOlhando = tempoOlhando + Time.deltaTime;
if (tempoOlhando >= 2f)
{
    alvo.material.color = Color.yellow;
}

Quando o raio não bate ou troca de alvo, fazer tempoOlhando = 0f; para reiniciar. Resultado: o objeto só acende após 2 segundos de olhar contínuo.`,
    },
    {
      titulo: `Roda de conversa: onde usar o olhar`,
      tipo: `roda de conversa`,
      tempo: `6 minutos`,
      guiaProfessor: `Reúna a turma e conduza com perguntas abertas. Anote no quadro as ideias para retomar na Aula 8, quando entrar o movimento. Ligue gaze a menus e botões de VR reais.`,
      atividade: `Em roda, cada aluno cita um lugar de um jogo ou experiência de VR onde olhar para algo poderia ser o comando: abrir uma porta, selecionar um item de menu, mirar um inimigo.`,
      gabarito: `A turma levanta ao menos quatro usos válidos do gaze, como: escolher opções de menu sem controle, destacar objetos interativos, mirar alvos e ativar gatilhos ao encarar uma área. O aluno explica por que o olhar é natural e confortável em VR.`,
    },
  ],
};
