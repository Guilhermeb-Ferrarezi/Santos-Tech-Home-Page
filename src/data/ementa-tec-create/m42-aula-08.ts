import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 8,
  titulo: "Personagem em movimento: entrega do mês",
  semana: "Semana 4",
  duracao: "1 hora",
  objetivo: `Cada aluno finaliza um script de movimentação completo em C# que move o personagem do Blender em todas as direções com velocidade ajustável, testa, organiza o projeto e registra o entregável mover um personagem no portfólio, usando o Claude para revisar o código final.`,
  descricao: `Esta é a aula que fecha o mês inteiro de Unity. Nas semanas anteriores a turma conheceu a interface, navegou e montou a cena, importou o modelo do personagem feito no Blender, criou materiais e prefabs, escreveu o primeiro script em C#, entendeu variáveis e lógica e aprendeu a capturar o teclado com o Input. Agora chega o momento mais esperado do mês: juntar tudo em um único script de movimentação que faz o personagem andar de verdade na cena, em todas as direções, com uma velocidade que o aluno controla. Esse é o entregável do mês, mover um personagem, e é isto que cada aluno vai concluir hoje.

O coração da aula é a consolidação. Até agora o aluno viu cada peça separada: a variável pública que aparece no Inspector, o método Update que roda a cada quadro, o Input.GetAxis que lê as setas e as teclas WASD, e o transform que representa a posição do objeto na cena. Nesta aula ele junta essas peças em um script chamado MovimentoPersonagem, organizado e comentado, que multiplica a direção lida do teclado pela velocidade e pelo Time.deltaTime para mover o personagem de forma suave e independente da máquina. Quando o aluno aperta Play e vê o próprio modelo do Blender deslizando pela cena ao toque das setas, a ficha cai: ele programou o controle de um personagem de jogo de verdade.

Depois de funcionar, vem o refino e a organização. O aluno ajusta a velocidade no Inspector até o movimento ficar agradável, renomeia o que estiver bagunçado, guarda o script na pasta Scripts e o personagem na pasta Prefabs, e salva a cena. Um projeto organizado é a marca de quem programa de verdade, e também o que permite que o trabalho entre bonito no portfólio. O professor aproveita para mostrar como nomes claros e comentários ajudam qualquer pessoa, inclusive o próprio aluno daqui a um mês, a entender o código.

Por fim, a aula faz a ponte com o resto da trilha. Este é o ano final, e o entregável de hoje vira a primeira peça de um portfólio de jogos. O aluno usa o Claude como assistente para revisar o código final, pedir uma explicação linha a linha e planejar o próximo passo: depois de mover um personagem no Unity, vem montar um jogo completo no Unity com assets do Blender, criar uma experiência em Realidade Virtual e, mais adiante, um jogo na Unreal Engine com C++ e assets do Maya. Encerrar o mês olhando para essa estrada dá sentido a tudo: o personagem nasceu no Blender, ganhou material e prefab no Unity e agora se move por um código que o próprio aluno escreveu.`,
  materiais: [
    `Um computador por aluno com o Unity instalado e aberto no projeto do mês, com o personagem do Blender já importado, com material e prefab prontos, e o Visual Studio (ou editor de código) configurado para C#`,
    `Projetor ou tela grande ligada ao computador do professor para demonstrar o script no editor e o personagem se movendo na janela Game`,
    `Um projeto de exemplo do professor, com o script MovimentoPersonagem já pronto e funcionando, para mostrar o resultado final antes de os alunos tentarem`,
    `Arquivo de exemplo com o código completo do script (texto puro), para o professor consultar e colar caso algum aluno trave perto do fim`,
    `Acesso ao Claude (assistente de IA) em uma aba do navegador, para revisar o código final, pedir explicação linha a linha e planejar o próximo passo`,
    `Uma pasta combinada no projeto (Scripts e Prefabs) e um local para salvar a cena, de modo que o entregável do mês fique organizado e pronto para o portfólio`,
    `Um cartão ou slide simples do portfólio do aluno, onde ele registra o entregável mover um personagem com o nome do projeto e uma frase sobre o que aprendeu`,
  ],
  conceitosChave: [
    `Script de movimentação — o código em C# que lê o teclado e muda a posição do personagem na cena a cada quadro do jogo.`,
    `Update — o método que o Unity executa automaticamente a cada quadro; é onde colocamos o movimento para o personagem responder o tempo todo.`,
    `Input.GetAxis — o comando que lê o teclado e devolve um número entre menos um e um, indicando a direção e a intensidade que o jogador aperta.`,
    `transform.Translate — a instrução que move o objeto na cena somando um deslocamento à posição atual do personagem.`,
    `Time.deltaTime — o tempo que passou desde o quadro anterior; multiplicar por ele deixa o movimento suave e igual em qualquer computador.`,
    `Variável pública — um valor como a velocidade, declarado como public, que aparece no Inspector e pode ser ajustado sem mexer no código.`,
    `Portfólio — a coleção organizada dos projetos do aluno, onde o entregável mover um personagem entra como a primeira peça do ano final.`,
  ],
  treinamento: `## O que o professor precisa saber

Esta é a aula de fechamento do mês de Unity. O objetivo não é ensinar um comando novo do zero, é sim CONSOLIDAR tudo em um único script de movimentação, TESTAR, ORGANIZAR o projeto e REGISTRAR o entregável mover um personagem no portfólio. Antes da aula, abra o Unity no projeto de exemplo, garanta que o personagem do Blender está na cena com material e prefab, e monte você mesmo o script completo para dominar o caminho.

Relembre as peças que os alunos já viram nas aulas anteriores. O script vive em um arquivo .cs dentro da pasta Scripts e é arrastado para o personagem na janela Hierarchy ou somado pelo botão Add Component no Inspector. Dentro dele, o método Update roda a cada quadro. O comando Input.GetAxis com o nome Horizontal lê as setas esquerda e direita e as teclas A e D; com o nome Vertical lê as setas cima e baixo e as teclas W e S. O resultado é um número entre menos um e um. Multiplicamos esse número pela velocidade e pelo Time.deltaTime e usamos transform.Translate para mover o personagem. O Time.deltaTime é o segredo do movimento suave e igual em qualquer máquina.

Tenha o código de exemplo à mão para colar se alguém travar perto do fim, e deixe uma aba do Claude aberta para a revisão final.

## Passo a passo da aula (ritmo 10/15/25/10, com o código exato)

1. Aquecimento e revisão (10 min). Peça que cada aluno abra o projeto e aperte Play para conferir o que já existe. No projetor, relembre as peças no quadro: variável pública de velocidade, método Update, Input.GetAxis (Horizontal e Vertical), transform.Translate e Time.deltaTime. Diga: hoje a gente junta tudo e o personagem anda de verdade.

2. Conteúdo novo guiado (15 min). No seu computador no projetor, mostre o script completo no editor. Crie o arquivo MovimentoPersonagem.cs na pasta Scripts (clique direito na pasta, Create, depois C# Script) e digite, explicando cada parte:

using UnityEngine;

public class MovimentoPersonagem : MonoBehaviour
{
    public float velocidade = 5f;

    void Update()
    {
        float eixoX = Input.GetAxis("Horizontal");
        float eixoZ = Input.GetAxis("Vertical");

        Vector3 direcao = new Vector3(eixoX, 0f, eixoZ);
        transform.Translate(direcao * velocidade * Time.deltaTime);
    }
}

Explique: velocidade é a variável pública que aparece no Inspector; Update roda a cada quadro; eixoX e eixoZ guardam a direção lida do teclado; direcao junta os dois em um Vector3 (o zero do meio é a altura, que não muda); transform.Translate move o personagem multiplicando direcao por velocidade e por Time.deltaTime. Arraste o script para o personagem, aperte Play e mostre ele andando.

3. Mão na massa (25 min). Cada aluno escreve o próprio MovimentoPersonagem, arrasta para o personagem e aperta Play. Depois ajusta a velocidade no Inspector até ficar agradável. Por fim organiza: script na pasta Scripts, personagem como prefab na pasta Prefabs, e salva a cena com Ctrl mais S. Circule de mesa em mesa, comemore cada personagem que começa a andar e ajude quem errar uma chave ou um ponto e vírgula.

4. Desafio e compartilhar (10 min). Cada aluno cola o código no Claude e pede: explique este código linha a linha e sugira uma melhoria simples. Em seguida registra o entregável mover um personagem no cartão de portfólio com uma frase sobre o que aprendeu. Para fechar, faça a ponte: o próximo passo da trilha é um jogo completo no Unity, depois a Realidade Virtual e a Unreal Engine.

## Como explicar de forma clara (linguagem para a idade)

Use a imagem do controle remoto. O Input.GetAxis é como sentir qual seta o jogador está apertando; o transform.Translate é o motor que empurra o personagem para aquele lado. Compare o Update com bater o coração: ele acontece muitas vezes por segundo, e por isso o personagem responde na hora. Para o Time.deltaTime, diga que ele é o relógio que deixa o movimento justo, para o personagem não correr mais rápido em um computador potente. Mostre, não explique demais: aperte Play e deixe o personagem andar no telão antes de detalhar o código.

## Erros comuns e como ajudar

O personagem não se mexe: confira se o script foi arrastado para o personagem (deve aparecer como Component no Inspector) e se a velocidade não está em zero. O Console mostra um erro vermelho: quase sempre falta um ponto e vírgula no fim da linha ou uma chave de fechamento; leia o número da linha no erro e vá até lá. O nome da classe não bate com o nome do arquivo: o arquivo precisa se chamar MovimentoPersonagem.cs igualzinho à classe. O personagem some ou afunda: o aluno escreveu o eixo no lugar errado do Vector3; lembre que o do meio é a altura e deve ficar em zero. O movimento está rápido demais ou lento demais: ajuste a velocidade no Inspector, sem mexer no código. O aluno esquece de salvar a cena: faça Ctrl mais S junto com ele no fim.`,
  exercicios: [
    {
      titulo: `Revisando as peças do movimento`,
      tipo: `Roda de conversa`,
      tempo: `8 min`,
      guiaProfessor: `Antes de codar, faça uma revisão rápida no quadro. Escreva as cinco peças (variável pública de velocidade, método Update, Input.GetAxis, transform.Translate, Time.deltaTime) embaralhadas e peça que a turma diga o que cada uma faz. Conecte cada peça ao que virá no script de hoje. Use perguntas curtas para todos participarem e confira se ninguém ficou perdido nas aulas anteriores.`,
      atividade: `Olhe as cinco peças que o professor escreveu no quadro. Para cada uma, diga em uma frase o que ela faz no nosso jogo: quem guarda a velocidade? Quem roda a cada quadro? Quem lê o teclado? Quem move o personagem? Quem deixa o movimento suave em qualquer computador?`,
      gabarito: `O aluno acerta quando associa: variável pública velocidade guarda quão rápido o personagem anda e aparece no Inspector; Update roda a cada quadro; Input.GetAxis lê o teclado e devolve um número entre menos um e um; transform.Translate move o personagem; Time.deltaTime deixa o movimento suave e igual em qualquer máquina. Sinal de sucesso: a turma encaixa as cinco peças sem ajuda.`,
    },
    {
      titulo: `Escrevendo o script MovimentoPersonagem`,
      tipo: `Prática na ferramenta`,
      tempo: `12 min`,
      guiaProfessor: `Mostre primeiro no projetor o caminho: clique direito na pasta Scripts, Create, C# Script, e nomeie MovimentoPersonagem. Acompanhe cada aluno digitando o código (sem copiar e colar, para aprender). Cuide para que o nome do arquivo seja igual ao nome da classe e que não falte ponto e vírgula nem chave. Quem terminar, arrasta o script para o personagem na Hierarchy.`,
      atividade: `Na pasta Scripts, crie um C# Script chamado MovimentoPersonagem. Abra no editor e escreva o código que move o personagem com as setas e o WASD. Depois arraste o script para o personagem na janela Hierarchy. Salve o arquivo.`,
      gabarito: `using UnityEngine;

public class MovimentoPersonagem : MonoBehaviour
{
    public float velocidade = 5f;

    void Update()
    {
        float eixoX = Input.GetAxis("Horizontal");
        float eixoZ = Input.GetAxis("Vertical");

        Vector3 direcao = new Vector3(eixoX, 0f, eixoZ);
        transform.Translate(direcao * velocidade * Time.deltaTime);
    }
}

Sinal de sucesso: o script existe na pasta Scripts, aparece como Component no Inspector do personagem e não gera erro vermelho no Console.`,
    },
    {
      titulo: `Testar e ajustar a velocidade`,
      tipo: `Prática na ferramenta`,
      tempo: `10 min`,
      guiaProfessor: `Peça que apertem Play e movam o personagem com as setas e o WASD. Depois oriente a parar o Play, selecionar o personagem e mudar o campo Velocidade no Inspector, testando valores diferentes (por exemplo 3, 5 e 10) até achar um movimento agradável. Reforce que ajustar a velocidade no Inspector NÃO exige mexer no código, e essa é a vantagem da variável pública.`,
      atividade: `Aperte Play e mova o seu personagem em todas as direções. Estranho demais? Pare o Play, clique no personagem, ache o campo Velocidade no Inspector e troque o número. Teste 3, 5 e 10. Qual valor deixou o movimento mais gostoso de jogar?`,
      gabarito: `O aluno acerta quando o personagem anda nas quatro direções ao apertar Play e ele consegue mudar a velocidade pelo Inspector, percebendo a diferença, sem alterar o código. Sinal de sucesso: ele escolhe um valor de velocidade e justifica a escolha pela sensação de jogo.`,
    },
    {
      titulo: `Revisar o código com o Claude`,
      tipo: `Prática com o Claude`,
      tempo: `12 min`,
      guiaProfessor: `Mostre como copiar o código do editor e colar no Claude. Sugira o pedido: explique este código C# de Unity linha a linha e sugira uma melhoria simples para um iniciante. Oriente o aluno a ler a explicação com calma, comparar com o que ele entendeu na aula e, se a sugestão fizer sentido e for simples, aplicá-la. Reforce que o Claude é um assistente: o aluno decide o que aceitar e precisa testar depois.`,
      atividade: `Copie o seu script e cole no Claude. Peça: explique este código linha a linha e sugira uma melhoria simples. Leia a resposta. A explicação bate com o que você entendeu? Se a sugestão for simples, experimente aplicar e teste no Play para ver se continua funcionando.`,
      gabarito: `O aluno acerta quando cola o código no Claude, lê a explicação linha a linha, compara com o próprio entendimento e avalia a sugestão de forma crítica, testando no Unity se decidir aplicar. Uma melhoria simples válida é, por exemplo, normalizar a direção com direcao.Normalized para o personagem não andar mais rápido na diagonal. Sinal de sucesso: ele usa o Claude como apoio e mantém o jogo funcionando.`,
    },
    {
      titulo: `Organizar o projeto e registrar no portfólio`,
      tipo: `Desafio e roda de conversa`,
      tempo: `12 min`,
      guiaProfessor: `Conduza a organização final e o registro do entregável. Peça que cada aluno guarde o script na pasta Scripts, deixe o personagem como prefab na pasta Prefabs e salve a cena com Ctrl mais S. Depois cada um preenche o cartão de portfólio com o nome do projeto e uma frase sobre o que aprendeu. Para fechar, faça a ponte com o futuro: o próximo passo é um jogo completo no Unity, depois a Realidade Virtual e a Unreal Engine. Garanta aplausos para a turma fechar o mês.`,
      atividade: `Hora de fechar o mês! Organize o projeto: script na pasta Scripts, personagem na pasta Prefabs, e salve a cena com Ctrl mais S. Depois registre no seu portfólio o entregável mover um personagem, com o nome do projeto e uma frase sobre o que você aprendeu. Pense: qual jogo você quer construir no próximo passo da trilha?`,
      gabarito: `O aluno acerta quando deixa o projeto organizado (script em Scripts, personagem como prefab em Prefabs, cena salva), registra o entregável mover um personagem no portfólio com uma frase própria, e aponta uma ideia para o próximo passo da trilha. O objetivo é o orgulho de ter um personagem se movendo por código próprio e a empolgação com o portfólio de jogos do ano final.`,
    },
  ],
};
