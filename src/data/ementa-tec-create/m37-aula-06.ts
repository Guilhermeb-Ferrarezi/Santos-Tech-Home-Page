import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 6,
  titulo: "Referências melhores a partir do seu projeto",
  semana: "Semana 3",
  duracao: "1 hora",
  objetivo: `Usar arquivos do próprio projeto para obter referências e feedback direcionados do Claude, comparando a precisão das respostas com e sem o anexo.`,
  descricao: `Nesta aula os alunos descobrem que o Claude fica muito mais útil quando recebe os arquivos reais do projeto. Em vez de pedir uma sugestão genérica, eles vão anexar uma cena de Realidade Virtual feita no Unity, uma lista de assets do Blender ou do Maya, ou um trecho de código em C# ou C++. Com esse contexto, o Claude consegue apontar melhorias específicas, sugerir referências de arte coerentes com o que já existe e dar feedback que faz sentido para aquele projeto.

O coração da aula é uma comparação direta: o mesmo pedido feito de duas formas. Primeiro sem nenhum arquivo, depois com o arquivo anexado. Os alunos vão ler as duas respostas lado a lado e perceber, com os próprios olhos, o quanto a resposta com contexto é mais precisa, mais aplicável e menos genérica. Esse "antes e depois" é a grande sacada da aula e deve ser o ponto alto da experiência.

Como é o Ano 4 e o ano final da trilha, os alunos já têm projetos reais em andamento: uma cena de VR, um jogo no Unity com assets do Blender e um jogo na Unreal com assets do Maya. Isso significa que eles têm material verdadeiro para anexar, e o feedback do Claude pode virar uma melhoria concreta no portfólio. O professor deve reforçar que o aluno continua sendo o autor das decisões; o Claude é o copiloto que mostra opções e aponta caminhos, mas a escolha final é sempre do criador.

Ao final, cada aluno deve sair com pelo menos uma referência ou melhoria direcionada que veio de um arquivo do próprio projeto, e com a clareza de quando vale a pena anexar algo para conversar com a IA.`,
  materiais: [
    `Computadores com o Claude aberto (navegador ou aplicativo) e login pronto`,
    `Projetos reais dos alunos abertos: cena de VR no Unity, jogo no Unity e jogo na Unreal`,
    `Óculos de Realidade Virtual disponíveis para conferir a cena revisada`,
    `Projetor para mostrar a comparação antes e depois para toda a turma`,
    `Arquivos de exemplo prontos: um print da cena de VR, um arquivo de texto com lista de assets do Blender e um trecho de código em C#`,
    `Bloco de notas ou documento para o aluno registrar as melhorias sugeridas`,
  ],
  conceitosChave: [
    `Referência direcionada — sugestão de arte ou solução baseada no que já existe no seu projeto, não em algo genérico.`,
    `Contexto de projeto — o conjunto de arquivos, código e imagens que mostram ao Claude como é o seu jogo de verdade.`,
    `Feedback de código — comentário do Claude sobre o que melhorar em um trecho de C# ou C++ que você enviou.`,
    `Anexo — arquivo que você adiciona à conversa para que o Claude analise antes de responder.`,
    `Comparação com e sem arquivo — técnica de fazer o mesmo pedido duas vezes para ver o ganho de precisão do anexo.`,
    `Asset — qualquer elemento que compõe o jogo, como um modelo 3D do Blender ou do Maya, uma textura ou um som.`,
    `Resposta genérica — sugestão vaga que serviria para qualquer projeto porque a IA não conhece o seu.`,
  ],
  treinamento: `## O que o professor precisa saber

Você não precisa dominar Unity, Blender ou Maya para dar esta aula. O que importa é entender uma ideia simples: quando o aluno anexa um arquivo do projeto, o Claude responde com muito mais precisão. Sua função é conduzir uma comparação clara entre uma resposta sem arquivo e uma resposta com arquivo, e ajudar o aluno a perceber a diferença. Antes da aula, anexe você mesmo um print de cena e um trecho de código no Claude para ver como funciona o botão de anexar (o ícone de clipe de papel, geralmente perto da caixa de texto). Tenha os arquivos de exemplo prontos numa pasta acessível.

## Passo a passo da aula

Aquecimento (10 min): Retome a Aula 5, em que o Claude leu arquivos para entender o contexto. Pergunte à turma: "O que aconteceu quando vocês mandaram o arquivo junto?" Projete uma resposta genérica do Claude (sem arquivo) para um pedido como "sugira melhorias para a cena de VR" e deixe a turma comentar como ela é vaga.

Conteúdo novo guiado (15 min): No projetor, mostre o anexo na prática. Clique no ícone de clipe de papel, selecione um print da cena de VR e escreva um pedido direcionado. Sugestão de prompt para projetar e os alunos copiarem:

"Anexei um print da minha cena de VR no Unity. Aponte três melhorias de composicao e iluminacao e sugira dois tipos de asset que combinariam com o estilo atual."

Mostre como a resposta agora cita elementos reais da imagem. Em seguida, mostre o caso de código. Cole um trecho simples de C# e peça feedback. Use este código de exemplo (note que ele usa concatenacao com mais, sem string interpolada):

using UnityEngine;

public class GiraCubo : MonoBehaviour
{
    public float velocidade = 30f;

    void Update()
    {
        transform.Rotate(0f, velocidade * Time.deltaTime, 0f);
        Debug.Log("Girando a " + velocidade + " graus por segundo");
    }
}

Peça ao Claude: "Aponte melhorias neste script de Unity e explique cada uma em uma frase." Mostre que ele comenta o código real, e não um genérico.

Mão na massa (25 min): Cada aluno escolhe um arquivo do próprio projeto (print de cena, lista de assets ou trecho de código) e faz o mesmo pedido duas vezes: uma sem anexar e outra anexando. Eles registram as duas respostas lado a lado e marcam qual foi mais útil e por quê. Circule pela sala garantindo que todos anexem de verdade e que o pedido seja específico.

Desafio e compartilhar (10 min): Cada aluno escolhe a melhor melhoria sugerida pelo arquivo e a aplica de fato no projeto, conferindo no Unity, no óculos de VR ou no editor de código. Dois ou três voluntários mostram o antes e depois no projetor.

## Como explicar de forma clara

Use uma comparação que adolescentes entendem: pedir ajuda sem anexar o arquivo é como pedir conselho sobre um desenho que a pessoa nunca viu. Ela só pode dar um conselho genérico. Quando você mostra o desenho, o conselho fica certeiro. Diga: "O Claude é esperto, mas ele não adivinha. Mostre o seu projeto e ele vira um copiloto de verdade." Reforce que o aluno é o autor: o Claude sugere, o aluno decide.

## Erros comuns e como ajudar

Aluno faz pedido vago mesmo com o arquivo: ajude a deixar específico, pedindo um número de sugestões e um foco (iluminação, performance, estilo). Aluno esquece de anexar e acha que a IA está ruim: confira se o arquivo aparece acima da caixa de texto antes de enviar. Aluno aceita tudo sem pensar: lembre que ele deve avaliar se a sugestão combina com a visão do jogo. Arquivo grande demais ou formato estranho: peça um print ou um trecho menor do código em vez do projeto inteiro.`,
  exercicios: [
    {
      titulo: `Vago ou direcionado?`,
      tipo: `Discussão em dupla`,
      tempo: `5 min`,
      guiaProfessor: `Projete dois pedidos e peça que as duplas classifiquem qual gera resposta genérica e qual gera resposta direcionada. Foque em por que o segundo é melhor.`,
      atividade: `Leia os dois pedidos: A) "Como melhorar um jogo de VR?" B) "Anexei um print da minha cena de VR; aponte três melhorias de iluminacao." Diga qual traz resposta mais útil e explique o motivo.`,
      gabarito: `O pedido B é o mais útil. Ele anexa um arquivo real e pede um número definido de melhorias com foco (iluminação), então o Claude responde sobre a cena específica do aluno. O pedido A é genérico: sem arquivo e sem foco, a resposta serviria para qualquer jogo e não ajuda no projeto real.`,
    },
    {
      titulo: `Anexar pela primeira vez`,
      tipo: `Prática guiada`,
      tempo: `8 min`,
      guiaProfessor: `Garanta que cada aluno encontre o ícone de clipe de papel e veja o arquivo aparecer acima da caixa de texto antes de enviar. Circule conferindo.`,
      atividade: `Abra o Claude, clique no ícone de anexar, selecione um print da sua cena de VR e escreva: "Descreva o que você ve nesta imagem da minha cena." Envie e leia a resposta.`,
      gabarito: `O aluno deve conseguir anexar a imagem (o nome do arquivo aparece acima do campo de texto) e enviar. A resposta esperada do Claude descreve elementos reais da cena, como objetos, cores e iluminação visíveis no print, provando que ele leu o arquivo. Se a descrição for genérica, o arquivo não foi anexado.`,
    },
    {
      titulo: `Comparação com e sem arquivo`,
      tipo: `Investigação prática`,
      tempo: `12 min`,
      guiaProfessor: `Este é o exercício central. Garanta que o aluno faça o MESMO pedido duas vezes, primeiro sem anexo e depois com anexo, e registre as duas respostas para comparar.`,
      atividade: `Escolha uma lista de assets do Blender ou do Maya do seu jogo. Faça o pedido "sugira três assets que combinariam com o meu jogo" duas vezes: a primeira sem anexar nada e a segunda anexando a lista. Copie as duas respostas lado a lado e marque qual foi mais precisa.`,
      gabarito: `A resposta COM o arquivo anexado é a mais precisa. Sem o anexo, o Claude sugere assets genéricos que poderiam servir a qualquer jogo. Com a lista anexada, ele sugere assets que combinam com o estilo e o tema já presentes, cita itens da lista e evita repetir o que o aluno já tem. A conclusão correta: anexar o arquivo aumenta a precisão e a utilidade.`,
    },
    {
      titulo: `Feedback no código`,
      tipo: `Programação em C#`,
      tempo: `12 min`,
      guiaProfessor: `Peça que o aluno cole um trecho real de C# do projeto (ou o exemplo abaixo) e peça melhorias. Verifique se ele entende cada sugestão antes de aplicar.`,
      atividade: `Cole este script no Claude e peça: "Aponte melhorias e reescreva o código mais claro." Código de partida: using UnityEngine; public class GiraCubo : MonoBehaviour { public float velocidade = 30f; void Update() { transform.Rotate(0f, velocidade * Time.deltaTime, 0f); } }`,
      gabarito: `Uma melhoria esperada é adicionar comentários, validar a velocidade e deixar o eixo de rotação configurável. Código-solução possível:

using UnityEngine;

// Gira o objeto em torno do eixo escolhido, em graus por segundo.
public class GiraCubo : MonoBehaviour
{
    public float velocidade = 30f;
    public Vector3 eixo = Vector3.up;

    void Update()
    {
        // Multiplicar por Time.deltaTime deixa o giro suave em qualquer FPS.
        transform.Rotate(eixo * velocidade * Time.deltaTime);
    }
}

O ponto-chave: o feedback do Claude é específico porque ele leu o código real enviado, e não um exemplo qualquer.`,
    },
    {
      titulo: `Da sugestão à melhoria aplicada`,
      tipo: `Projeto e reflexão`,
      tempo: `13 min`,
      guiaProfessor: `Peça que o aluno aplique de fato uma sugestão no projeto (Unity, óculos de VR ou editor de código) e escreva um parágrafo justificando a escolha. Reforce que ele é o autor da decisão.`,
      atividade: `Escolha a melhor sugestão direcionada que o Claude deu a partir de um arquivo seu. Aplique-a no projeto, confira o resultado e escreva um parágrafo explicando o que mudou e por que você aceitou (ou recusou) outras sugestões.`,
      gabarito: `Resposta-modelo: "Anexei o print da minha cena de VR e o Claude sugeriu aumentar o contraste da iluminação, adicionar um ponto de luz quente perto do objeto principal e remover um asset que poluía o fundo. Apliquei o ponto de luz quente no Unity e conferi no óculos: a cena ficou mais focada e agradável. Recusei remover o asset porque ele faz parte da história do jogo. A decisão final foi minha; o Claude só me deu opções direcionadas porque viu o arquivo real." O essencial é evidência de melhoria aplicada e de julgamento próprio do aluno.`,
    },
  ],
};
