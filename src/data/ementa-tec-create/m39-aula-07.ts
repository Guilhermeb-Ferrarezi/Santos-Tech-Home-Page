import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 7,
  titulo: "Reagindo ao Toque do Jogador",
  semana: "Semana 4",
  duracao: "1 hora",
  objetivo: `Criar objetos interativos do cenário (botões, alavancas e portas) que reagem ao toque das mãos em VR, confirmando cada ação com vibração (haptics) e som.`,
  descricao: `Até agora os alunos aprenderam a pegar, usar e lançar objetos, e a se mover pelo mundo em VR. Nesta aula damos o próximo passo: fazer o cenário responder ao jogador. Em vez de apenas segurar coisas, o aluno vai construir elementos fixos do mundo que reagem quando a mão os toca ou os aciona. Pense em um botão que acende uma luz, uma alavanca que abre um portão, ou uma porta que desliza ao ser empurrada. Esse tipo de interação transforma uma cena estática em um ambiente vivo.

O coração da aula é o sistema de eventos do XR Interaction Toolkit. Cada objeto interativo (chamado de Interactable) dispara eventos quando algo acontece com ele: quando a mão entra em contato (Hover), quando o jogador aperta o gatilho para selecioná-lo (Select), e quando é ativado (Activate). Em C#, o aluno escreve métodos simples que são chamados automaticamente nesses momentos. Assim, um clique no botão vira luz acesa; um puxão na alavanca vira porta aberta.

Para que a interação pareça real, o feedback é essencial. Quando apertamos um botão no mundo real, sentimos o clique e ouvimos um som. Em VR fazemos o mesmo com haptics (a vibração do controle) e com áudio. O aluno vai aprender a disparar uma pequena vibração no controle exato que tocou o objeto e a tocar um efeito sonoro no momento da ação. Esse retorno sensorial confirma para o cérebro que algo aconteceu de verdade.

Esta é a penúltima aula do mês. Ela junta dois conceitos que vinham separados: a interação com as mãos e a construção do mundo. Na próxima aula os alunos vão reunir tudo em uma cena VR interativa completa, então é importante que saiam daqui com pelo menos um objeto reativo funcionando do começo ao fim, com vibração e som.`,
  materiais: [
    `Computadores com Realidade Virtual (Unity + C#) e o XR Interaction Toolkit já instalado`,
    `Óculos VR (Meta Quest ou equivalente) com os controles carregados, um por estação quando possível`,
    `Projetor ou TV para o professor mostrar a tela do Unity e a visão do óculos (espelhamento)`,
    `Arquivo de exemplo: cena VR da aula anterior com chão, mesa e o XR Origin já configurado`,
    `Dois efeitos sonoros curtos em formato WAV (um clique de botão e um rangido de porta)`,
    `Folha impressa com o passo a passo dos eventos (Hover, Select, Activate) para consulta rápida`,
  ],
  conceitosChave: [
    `Interactable — qualquer objeto do mundo VR que pode ser tocado ou acionado pela mão do jogador.`,
    `Evento de interação — aviso automático que o objeto dispara quando algo acontece, como Hover (mão por perto), Select (gatilho apertado) e Activate (botão de ação).`,
    `UnityEvent — lista de ações configurável no Inspector que liga um evento do objeto a um método do seu código.`,
    `Haptics — vibração enviada ao controle de VR para dar uma sensação física de toque ou clique.`,
    `AudioSource — componente do Unity que toca um som a partir de um objeto da cena.`,
    `Feedback — a resposta que o jogador recebe (vibração, som, luz) confirmando que a interação funcionou.`,
    `XR Interaction Toolkit — pacote oficial do Unity que fornece os componentes prontos para interação em VR.`,
  ],
  treinamento: `## O que o professor precisa saber

Você não precisa ser especialista em VR. O segredo desta aula é entender três eventos do XR Interaction Toolkit: Hover (a mão chega perto), Select (o jogador aperta o gatilho) e Activate (o jogador aperta o botão de ação enquanto segura). Cada um desses eventos pode chamar um método do nosso código em C#. A ideia central é simples: o objeto avisa que foi tocado, e o nosso script reage acendendo uma luz, abrindo uma porta, vibrando o controle e tocando um som.

No Unity, um objeto interativo precisa de três coisas: um Collider (a área que pode ser tocada), um componente de interação (use o XR Simple Interactable para botões e alavancas) e um script nosso ligado aos eventos. A vibração é enviada por um método do Toolkit chamado SendHapticImpulse, e o som por um AudioSource.SendHapticImpulse pede a força (de 0 a 1) e a duração em segundos.

## Passo a passo da aula (ritmo 10/15/25/10)

Aquecimento (10 min): Abra a cena de exemplo no projetor. Pergunte: o que acontece quando você aperta um interruptor de luz na vida real? Sente o clique, ouve o som, a luz acende. Diga que hoje vamos fazer um botão assim em VR.

Conteúdo novo guiado (15 min): No Hierarchy, crie um Cube chamado BotaoLuz. No Inspector, clique em Add Component e adicione XR Simple Interactable. Crie um script chamado BotaoInterativo (Add Component, New Script). Mostre o código abaixo, explicando linha a linha:

using UnityEngine;
using UnityEngine.XR.Interaction.Toolkit;

public class BotaoInterativo : MonoBehaviour
{
    public Light luz;
    public AudioSource som;

    public void AoSelecionar(SelectEnterEventArgs args)
    {
        luz.enabled = true;
        if (som != null) som.Play();
        var interactor = args.interactorObject as XRBaseInputInteractor;
        if (interactor != null)
        {
            interactor.SendHapticImpulse(0.6f, 0.15f);
        }
    }
}

Explique: luz e som aparecem no Inspector para arrastarmos os objetos. O método AoSelecionar roda quando o jogador aperta o gatilho sobre o botão. Ele liga a luz, toca o som e pede uma vibração de força 0.6 por 0.15 segundos no controle que tocou.

Agora ligue o evento: no componente XR Simple Interactable, abra a lista Select Entered, clique no sinal de mais, arraste o BotaoLuz para o campo do objeto e escolha BotaoInterativo, depois AoSelecionar. Crie uma Light na cena, deixe-a desligada (desmarque Enabled) e arraste-a para o campo luz do script. Adicione um AudioSource ao botão, coloque o clique no campo AudioClip, desmarque Play On Awake e arraste o AudioSource para o campo som.

Mão na massa (25 min): Cada aluno faz o próprio botão de luz do zero. Quem terminar cria uma porta: um Cube comprido com XR Simple Interactable e um script que gira a porta no método de seleção (transform.Rotate(0, 90, 0)) com vibração e som de rangido. Circule pela sala testando no óculos.

Desafio e compartilhar (10 min): Desafie a turma a usar o evento Hover Entered para mudar a cor do botão quando a mão chega perto, antes mesmo de apertar. Peça que dois alunos mostrem o botão funcionando no espelhamento da tela.

## Como explicar de forma clara (linguagem para a idade)

Compare com a vida real: o botão do elevador não faz nada sozinho, ele espera ser apertado e então responde. Diga que em VR o objeto fica escutando, e quando a mão age, ele acorda e faz o que mandamos no código. Use a frase: o evento é o aviso, e o método é a reação. Mostre que a vibração é como o tremorzinho do celular quando chega mensagem, só que no controle.

## Erros comuns e como ajudar

O erro mais comum é esquecer o Collider, sem ele a mão atravessa o objeto e nada dispara: verifique se há um Box Collider. Outro é arrastar a luz mas deixá-la ligada desde o início; lembre de desmarcar Enabled na Light. Se o som não tocar, confira se Play On Awake está desmarcado e se o AudioClip foi colocado. Se a vibração não acontecer, confirme que o evento Select Entered está ligado ao método e que o aluno apertou o gatilho de verdade no óculos.`,
  exercicios: [
    {
      titulo: `Ligando os pontos: evento e reação`,
      tipo: `Quiz conceitual`,
      tempo: `5 minutos`,
      guiaProfessor: `Use no aquecimento para checar se os alunos entenderam quais eventos existem e o que cada um faz. Leia em voz alta e peça respostas rápidas.`,
      atividade: `Associe cada evento à situação correta: 1) Hover Entered, 2) Select Entered, 3) Activate. Situações: (a) o jogador aperta o gatilho sobre o objeto; (b) a mão do jogador chega perto do objeto, sem apertar nada; (c) o jogador aperta o botão de ação enquanto já segura o objeto.`,
      gabarito: `1-b (Hover Entered acontece quando a mão chega perto). 2-a (Select Entered acontece ao apertar o gatilho sobre o objeto). 3-c (Activate acontece ao apertar o botão de ação com o objeto já selecionado).`,
    },
    {
      titulo: `Meu primeiro botão de luz`,
      tipo: `Prática guiada no Unity`,
      tempo: `10 minutos`,
      guiaProfessor: `Acompanhe passo a passo no projetor. Garanta que todos criem o Cube, adicionem o XR Simple Interactable e liguem o evento Select Entered ao método AoSelecionar antes de avançar.`,
      atividade: `Crie um Cube chamado BotaoLuz, adicione o componente XR Simple Interactable e o script BotaoInterativo. Crie uma Light desligada na cena, arraste-a para o campo luz e ligue o evento Select Entered ao método AoSelecionar. Teste no óculos: ao apertar o gatilho sobre o botão, a luz deve acender.`,
      gabarito: `using UnityEngine;
using UnityEngine.XR.Interaction.Toolkit;

public class BotaoInterativo : MonoBehaviour
{
    public Light luz;

    public void AoSelecionar(SelectEnterEventArgs args)
    {
        luz.enabled = true;
    }
}

No Inspector: XR Simple Interactable, lista Select Entered, sinal de mais, arrastar BotaoLuz, escolher BotaoInterativo e AoSelecionar. A Light deve ter Enabled desmarcado no início.`,
    },
    {
      titulo: `Sentindo o clique: vibração no controle`,
      tipo: `Prática de programação`,
      tempo: `10 minutos`,
      guiaProfessor: `Mostre como pegar o interactor a partir do args e chamar SendHapticImpulse. Reforce que a força vai de 0 a 1 e a duração é em segundos. Teste com força alta e baixa para sentir a diferença.`,
      atividade: `Adicione vibração ao botão de luz. Quando o jogador apertar o botão, o controle que tocou deve vibrar com força 0.6 por 0.15 segundos. Complete o método AoSelecionar para enviar o impulso háptico.`,
      gabarito: `public void AoSelecionar(SelectEnterEventArgs args)
{
    luz.enabled = true;
    var interactor = args.interactorObject as XRBaseInputInteractor;
    if (interactor != null)
    {
        interactor.SendHapticImpulse(0.6f, 0.15f);
    }
}

A conversão para XRBaseInputInteractor permite chamar SendHapticImpulse no controle exato que tocou o botão. O if evita erro caso a interação não venha de um controle.`,
    },
    {
      titulo: `Som de confirmação`,
      tipo: `Prática integrada (áudio + código)`,
      tempo: `8 minutos`,
      guiaProfessor: `Verifique que cada aluno adicionou um AudioSource ao botão, colocou o clipe de clique, desmarcou Play On Awake e ligou o campo som no script. Teste o som junto com a vibração.`,
      atividade: `Adicione um AudioSource ao botão com o som de clique, desmarque Play On Awake e toque o som dentro do método AoSelecionar, junto com a luz e a vibração. O objetivo é que apertar o botão acenda a luz, vibre o controle e toque o clique ao mesmo tempo.`,
      gabarito: `public Light luz;
public AudioSource som;

public void AoSelecionar(SelectEnterEventArgs args)
{
    luz.enabled = true;
    if (som != null) som.Play();
    var interactor = args.interactorObject as XRBaseInputInteractor;
    if (interactor != null)
    {
        interactor.SendHapticImpulse(0.6f, 0.15f);
    }
}

No Inspector: arrastar o AudioSource do botão para o campo som. O AudioClip deve estar preenchido e Play On Awake desmarcado para o som tocar só na interação.`,
    },
    {
      titulo: `A alavanca que abre a porta`,
      tipo: `Desafio criativo`,
      tempo: `12 minutos`,
      guiaProfessor: `Este é o exercício mais difícil e fecha a aula. Oriente os alunos a criar dois objetos: a alavanca (com interação) e a porta (que será girada). A alavanca usa o evento de seleção para girar a porta, vibrar e tocar o som de rangido. Ajude com a referência da porta no script.`,
      atividade: `Crie uma alavanca interativa que, ao ser puxada (Select Entered), abre uma porta girando-a 90 graus, vibra o controle e toca um som de rangido. A porta é um Cube separado; a alavanca guarda uma referência a ela e a gira no método de seleção.`,
      gabarito: `using UnityEngine;
using UnityEngine.XR.Interaction.Toolkit;

public class AlavancaPorta : MonoBehaviour
{
    public Transform porta;
    public AudioSource somRangido;

    public void AoPuxar(SelectEnterEventArgs args)
    {
        porta.Rotate(0f, 90f, 0f);
        if (somRangido != null) somRangido.Play();
        var interactor = args.interactorObject as XRBaseInputInteractor;
        if (interactor != null)
        {
            interactor.SendHapticImpulse(0.7f, 0.2f);
        }
    }
}

No Inspector: na alavanca, adicionar XR Simple Interactable e o script AlavancaPorta. Arrastar o Cube da porta para o campo porta e o AudioSource para somRangido. Ligar o evento Select Entered ao método AoPuxar. Ao puxar a alavanca no óculos, a porta gira 90 graus, o controle vibra e o rangido toca.`,
    },
  ],
};
