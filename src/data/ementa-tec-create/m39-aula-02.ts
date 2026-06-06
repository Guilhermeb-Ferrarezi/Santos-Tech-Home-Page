import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 2,
  titulo: "Gestos e Botões nos Controles",
  semana: "Semana 1",
  duracao: "1 hora",
  objetivo: `Mapear as entradas dos controles de VR (gatilho, grip e botões) com o Input System e programar respostas em C#, como acender uma luz e tocar um som, além de animar a mão para apontar e fechar.`,
  descricao: `Na aula passada o aluno colocou as mãos no mundo de Realidade Virtual e viu os controles representados na cena. Agora chegou a hora de fazer esses controles realmente responderem ao jogador. Esta aula é sobre entrada de dados em VR: cada botão, cada gatilho e cada aperto de mão envia um sinal para o jogo, e nós vamos capturar esse sinal e transformá-lo em ação.

A ferramenta principal é o Input System do Unity, o sistema moderno de entrada que substitui o antigo Input Manager. Ele funciona com Input Actions, que são "ações nomeadas" como Disparar ou Agarrar. O aluno conecta o gatilho do controle a uma ação e, no código C#, escuta o momento em que essa ação acontece. Quando o gatilho é pressionado, o programa executa uma resposta: ligar uma luz, tocar um som ou disparar uma animação.

A segunda metade da aula traz vida às mãos. Hoje quase todo controle de VR tem sensores que detectam se o dedo está sobre o botão ou se a mão está fechada no grip. Vamos ler esses valores e usá-los para trocar a pose da mão virtual: dedo no gatilho vira apontar; aperto do grip vira mão fechada. Isso aumenta muito a imersão, porque a mão na frente do jogador imita a mão real dele.

Ao final, o aluno terá controles que reagem ao toque com luz, som e gestos. É a base de tudo que vem depois na trilha de VR: pegar objetos, lançar, teleportar. Sem entrada de controle bem mapeada, nada disso funciona, então esta é uma aula-chave do mês.`,
  materiais: [
    `Computadores com Realidade Virtual (Unity + C#) e o pacote XR Interaction Toolkit instalado`,
    `Óculos VR por aluno (ou compartilhado em duplas), com controles carregados`,
    `Projetor para o professor demonstrar a janela do Input Actions e o código`,
    `Arquivo de exemplo CenaMaosVR.unity da Aula 1, já com as mãos na cena`,
    `Um clipe de áudio curto (formato WAV ou OGG) e um prefab de luz pontual para os testes`,
    `Modelo de mão com Animator e duas animações simples (apontar e fechar) prontos na pasta de assets`,
  ],
  conceitosChave: [
    `Input System — sistema moderno do Unity que lê botões, gatilhos e gestos e os entrega ao código como ações nomeadas.`,
    `Input Action — uma ação com nome, como Disparar ou Agarrar, ligada a um controle físico do oculos.`,
    `Gatilho (trigger) — botão sob o dedo indicador que envia um valor de 0 a 1, do toque leve ao aperto total.`,
    `Grip — botão de aperto na lateral do controle, usado para a mão fechar e segurar objetos.`,
    `Callback — função em C# que o Input System chama automaticamente quando a ação acontece, como performed ou canceled.`,
    `Animator — componente do Unity que controla as poses e transições da mão virtual, como apontar e fechar.`,
    `Imersão — sensação de estar dentro do mundo virtual; cresce quando a mão imita os gestos reais do jogador.`,
  ],
  treinamento: `## O que o professor precisa saber

Você não precisa ser especialista em VR para dar esta aula. O segredo é entender uma ideia: o controle envia sinais e o nosso código escuta esses sinais. O Unity já vem com o Input System, que organiza tudo em Input Actions (ações com nome). Em vez de perguntar a todo instante "o botão está pressionado?", nós pedimos ao sistema para nos avisar quando a ação acontecer. Esse aviso chega como uma função chamada callback. Há três momentos úteis: started (começou), performed (aconteceu) e canceled (soltou). Para esta aula, performed e canceled bastam. Teste tudo uma vez antes da turma, de preferência com os óculos, para conhecer onde cada resposta aparece.

## Passo a passo da aula (ritmo 10/15/25/10)

Aquecimento (10 min). Abra a cena CenaMaosVR. Peça que cada aluno coloque os óculos e mexa os controles, observando que eles aparecem mas ainda nao fazem nada. Pergunte: o que voce gostaria que o gatilho fizesse? Anote ideias no quadro (luz, som, gesto). Isso conecta a aula passada com a de hoje.

Conteúdo novo guiado (15 min). No projetor, crie um asset de Input Actions: clique direito na pasta, Create, Input Actions, e nomeie ControlesVR. Abra com dois cliques, adicione um Action Map chamado Maos, e dentro dele duas ações: Disparar (tipo Button) e Agarrar (tipo Value, Axis). Faça o binding: em Disparar use o caminho do trigger do controle direito; em Agarrar use o grip. Salve com Save Asset. Explique que cada ação agora tem um nome próprio e não depende do modelo do óculos.

Mão na massa (25 min). Os alunos criam um script C# chamado RespostaDoControle e colam o código abaixo. Repare: nada de cifrão; usamos concatenação com mais.

using UnityEngine;
using UnityEngine.InputSystem;

public class RespostaDoControle : MonoBehaviour
{
    public InputActionReference acaoDisparar;
    public Light luz;
    public AudioSource som;

    void OnEnable()
    {
        acaoDisparar.action.performed += AoDisparar;
        acaoDisparar.action.canceled += AoSoltar;
        acaoDisparar.action.Enable();
    }

    void OnDisable()
    {
        acaoDisparar.action.performed -= AoDisparar;
        acaoDisparar.action.canceled -= AoSoltar;
    }

    void AoDisparar(InputAction.CallbackContext ctx)
    {
        luz.enabled = true;
        som.Play();
        Debug.Log("Gatilho pressionado");
    }

    void AoSoltar(InputAction.CallbackContext ctx)
    {
        luz.enabled = false;
    }
}

Eles arrastam a ação Disparar, uma Light e um AudioSource para os campos no Inspector. Ao apertar o gatilho, a luz acende e o som toca; ao soltar, a luz apaga. Depois, animação da mão: no Animator da mão criam um parâmetro Float chamado Aperto, ligam dois estados (Aberta e Fechada) com transição por esse valor, e adicionam ao Update do script a leitura do grip:

    public InputActionReference acaoAgarrar;
    public Animator maoAnimator;

    void Update()
    {
        float aperto = acaoAgarrar.action.ReadValue<float>();
        maoAnimator.SetFloat("Aperto", aperto);
    }

Desafio e compartilhar (10 min). Cada aluno troca a resposta do gatilho por algo próprio (mudar a cor da luz, tocar outro som) e mostra para a dupla ao lado.

## Como explicar de forma clara (linguagem para a idade)

Compare o controle a uma campainha: quando você aperta, ele toca lá dentro do jogo. O nome da ação (Disparar) é como o nome de um amigo: você chama e ele responde, não importa de qual óculos veio o sinal. O callback é o "alô" do amigo atendendo. Para a mão, diga que o valor do grip é como o quanto você fecha o punho: zero é mão aberta, um é punho fechado, e o número no meio mostra o caminho.

## Erros comuns e como ajudar

O esquecimento mais comum é não chamar Enable na ação, e aí nada responde; mostre a linha acaoDisparar.action.Enable(). Outro é deixar os campos do Inspector vazios, o que gera erro de referência nula; confira se a Light, o AudioSource e a ação foram arrastados. Se a luz pisca sozinha, provavelmente ligaram performed e started juntos. Se a mão não anima, verifique se o nome do parâmetro Aperto está exatamente igual no Animator e no código, com a mesma grafia.`,
  exercicios: [
    {
      titulo: `Caça aos controles`,
      tipo: `Aquecimento oral`,
      tempo: `5 min`,
      guiaProfessor: `Use antes do código para ativar o vocabulário. Mostre um controle de VR e aponte cada parte. Aceite respostas em linguagem simples e corrija os nomes com carinho.`,
      atividade: `Em dupla, identifiquem no controle de VR onde ficam o gatilho, o grip e pelo menos um botão. Digam em voz alta o que cada um deve fazer no jogo de hoje.`,
      gabarito: `Gatilho: botão sob o dedo indicador, será usado para acender a luz e tocar o som. Grip: botão de aperto na lateral, será usado para fechar a mão. Botão (A, B ou X): botão de polegar, pode disparar uma ação extra. O gatilho envia um valor de 0 a 1; o grip também; o botão é ligado ou desligado.`,
    },
    {
      titulo: `Criando a ação Disparar`,
      tipo: `Prática guiada`,
      tempo: `8 min`,
      guiaProfessor: `Faça junto no projetor, passo a passo. Garanta que todos salvem o asset com Save Asset antes de seguir. Verifique o binding do trigger em cada máquina.`,
      atividade: `Crie um asset de Input Actions chamado ControlesVR, com um Action Map Maos e uma ação Disparar do tipo Button ligada ao gatilho do controle direito. Salve.`,
      gabarito: `Passos: clique direito na pasta, Create, Input Actions, nome ControlesVR. Abrir com duplo clique. Botão mais para criar Action Map, renomear para Maos. Dentro, botão mais para Action, renomear para Disparar, Action Type igual a Button. No binding, Path igual a XR Controller (Right Hand) e trigger pressed. Clicar em Save Asset. Resultado: a janela mostra Maos com a ação Disparar e um binding de trigger.`,
    },
    {
      titulo: `Luz e som ao apertar o gatilho`,
      tipo: `Programação em C#`,
      tempo: `10 min`,
      guiaProfessor: `Os alunos colam o script e ligam as referências no Inspector. Reforce o uso de Enable e a remoção dos callbacks em OnDisable. Teste com os óculos.`,
      atividade: `Escreva o script RespostaDoControle que acende uma Light e toca um AudioSource quando o gatilho é pressionado, e apaga a luz quando é solto. Ligue as referências no Inspector.`,
      gabarito: `using UnityEngine;
using UnityEngine.InputSystem;

public class RespostaDoControle : MonoBehaviour
{
    public InputActionReference acaoDisparar;
    public Light luz;
    public AudioSource som;

    void OnEnable()
    {
        acaoDisparar.action.performed += AoDisparar;
        acaoDisparar.action.canceled += AoSoltar;
        acaoDisparar.action.Enable();
    }

    void OnDisable()
    {
        acaoDisparar.action.performed -= AoDisparar;
        acaoDisparar.action.canceled -= AoSoltar;
    }

    void AoDisparar(InputAction.CallbackContext ctx)
    {
        luz.enabled = true;
        som.Play();
    }

    void AoSoltar(InputAction.CallbackContext ctx)
    {
        luz.enabled = false;
    }
}

No Inspector, arraste a ação Disparar para acaoDisparar, uma Light para luz e um AudioSource para som.`,
    },
    {
      titulo: `Mão que aponta e fecha`,
      tipo: `Animação + C#`,
      tempo: `10 min`,
      guiaProfessor: `Aqui entra o Animator. Confira se o parâmetro Aperto é Float e se o nome bate exatamente com o código. Mostre a transição entre os estados Aberta e Fechada.`,
      atividade: `Leia o valor do grip e use-o para animar a mão. Crie o parâmetro Float Aperto no Animator e atualize-o no Update do script com o valor da ação Agarrar.`,
      gabarito: `No Animator: criar parâmetro Float chamado Aperto. Dois estados, Aberta e Fechada, com transição condicionada a Aperto maior que 0.5 e de volta quando menor.

No script, adicionar:

    public InputActionReference acaoAgarrar;
    public Animator maoAnimator;

    void Update()
    {
        float aperto = acaoAgarrar.action.ReadValue<float>();
        maoAnimator.SetFloat("Aperto", aperto);
    }

Lembrar de chamar acaoAgarrar.action.Enable() em OnEnable. A mão fecha conforme o grip é apertado.`,
    },
    {
      titulo: `Meu gesto especial`,
      tipo: `Desafio criativo`,
      tempo: `7 min`,
      guiaProfessor: `Etapa aberta para personalização. Aceite soluções variadas, desde que usem um callback. Peça que cada aluno mostre o resultado para a dupla ao lado.`,
      atividade: `Adicione uma resposta nova a um botão à sua escolha (por exemplo o botão A): mude a cor da luz, toque outro som ou troque a pose da mão. Mostre para um colega.`,
      gabarito: `Exemplo de solução com mudança de cor ao apertar um segundo botão:

    public InputActionReference acaoBotaoA;

    void OnEnable()
    {
        acaoBotaoA.action.performed += AoBotaoA;
        acaoBotaoA.action.Enable();
    }

    void AoBotaoA(InputAction.CallbackContext ctx)
    {
        luz.color = Color.cyan;
    }

Qualquer resposta vale se criar uma nova Input Action, ligá-la a um botão, usar um callback performed e produzir um efeito visível ou sonoro no jogo.`,
    },
  ],
};
