import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 6,
  titulo: "Navegação Suave e Conforto",
  semana: "Semana 3",
  duracao: "1 hora",
  objetivo: `Refinar a locomoção em VR adicionando rotação por snap turn e uma transição de fade ao teleportar, controlando em C# quais áreas são acessíveis para que o percurso pela cena seja confortável e sem enjoo.`,
  descricao: `Nesta aula o aluno deixa de apenas se mover pela cena e passa a se mover com conforto. Nas aulas anteriores deste mês a turma já aprendeu a usar as mãos em VR, a pegar e lançar objetos e, na Aula 5, a se teletransportar pelo mundo. O problema é que mover-se em Realidade Virtual mexe diretamente com o corpo do jogador: girar a câmera de forma errada ou aparecer de repente em outro lugar pode causar tontura e enjoo, o famoso mal-estar de VR. Hoje vamos resolver isso com duas técnicas que todo jogo profissional usa: o snap turn e o fade de teleporte.

O snap turn é uma rotação em saltos. Em vez de a câmera girar suavemente como num jogo de tela, ela gira de uma vez um ângulo fixo, por exemplo 45 graus, sempre que o jogador empurra o analógico para o lado. Pode parecer estranho à primeira vista, mas é justamente esse pulo seco que evita o enjoo: o cérebro não vê o mundo deslizando, então não estranha o movimento. É a forma mais confortável de virar de costas dentro de uma cena VR.

A segunda técnica é o fade, uma transição em que a tela escurece por um instante e clareia de novo no destino do teleporte. Esse pequeno escurecer esconde o salto brusco da posição e dá ao cérebro um respiro entre o lugar de origem e o de chegada. Junto com isso, o aluno vai programar em C# o controle de quais áreas da cena são acessíveis, definindo onde o jogador pode aparecer e onde não pode, para que ninguém se teletransporte para dentro de uma parede ou para fora do mundo.

No fim da aula, cada aluno terá uma cena em que dá para girar com conforto por snap turn, teleportar com um fade suave e circular apenas pelas áreas permitidas. O aluno testa um percurso completo combinando teleporte e giro, garantindo que dá para chegar em todos os pontos importantes sem desconforto. Esse refinamento prepara o terreno para a Aula 7, sobre reagir ao toque do jogador, e para a Aula 8, a cena VR interativa completa.`,
  materiais: [
    `Computadores com Realidade Virtual (Unity + C#) instalado, com o XR Rig e o teleporte da Aula 5 já prontos (um por aluno)`,
    `Óculos VR conectados e testados, ou ao menos um headset compartilhado para a turma sentir a diferença de conforto`,
    `Projetor ou TV para o professor demonstrar os passos do Unity e o código em tela grande`,
    `Arquivo de exemplo do Unity com a cena de teleporte pronta, para quem perdeu a Aula 5`,
    `Script de exemplo AreaTeleporte.cs já comentado, como apoio para o professor`,
    `Folha impressa com o passo a passo do componente Snap Turn Provider e do Tunneling Vignette`,
  ],
  conceitosChave: [
    `Snap turn — rotação em saltos de um ângulo fixo (por exemplo 45 graus), usada para virar em VR sem causar enjoo.`,
    `Fade de teleporte — transição em que a tela escurece e clareia ao trocar de posição, escondendo o salto brusco e dando conforto ao jogador.`,
    `Conforto em VR — conjunto de cuidados para evitar tontura e enjoo, como movimentos previsíveis e transições suaves.`,
    `Área de teleporte — região da cena marcada como destino válido, onde o jogador pode aparecer ao se teletransportar.`,
    `Locomoção — o jeito como o jogador se move e gira dentro do mundo virtual, somando teleporte e rotação.`,
    `Snap Turn Provider — componente do Unity, do pacote XR, que faz a rotação em saltos quando o analógico é empurrado para o lado.`,
    `Vinheta de túnel (tunneling vignette) — efeito que escurece as bordas da visão durante o movimento, reduzindo o enjoo.`,
  ],
  treinamento: `## O que o professor precisa saber

Você não precisa dominar Realidade Virtual para dar esta aula. Precisa entender três ideias. Primeira: girar a câmera suavemente em VR enjoa muita gente, por isso usamos o snap turn, que gira de uma vez um ângulo fixo. No Unity isso é feito por um componente pronto chamado Snap Turn Provider, que já vem no pacote XR Interaction Toolkit. Segunda: ao teleportar, o salto súbito de posição incomoda; um fade que escurece e clareia a tela suaviza isso. Terceira: nem todo lugar da cena deve ser um destino válido de teleporte, então marcamos com um componente Teleportation Area apenas o chão onde o jogador pode aparecer, e podemos ligar e desligar essas áreas por código C#. Antes da aula, abra a cena da Aula 5, localize o objeto XR Origin na Hierarchy e confira se ele tem um objeto filho chamado Locomotion System. É ali que vamos trabalhar.

## Passo a passo da aula (ritmo 10/15/25/10, com o código exato)

10 min, aquecimento e revisão. Relembre o teleporte da Aula 5 perguntando: como o jogador se move hoje na cena? Coloque um aluno no headset para girar suavemente de propósito e descreva em voz alta a sensação. Conduza a turma à palavra enjoo e diga que hoje vamos deixar o movimento confortável.

15 min, conteúdo novo guiado. No Unity, selecione o objeto Locomotion System dentro do XR Origin. No Inspector, clique em Add Component e adicione o Snap Turn Provider. No campo System, arraste o próprio Locomotion System; em Turn Amount, deixe 45 (graus por salto). Para o fade, adicione o componente Tunneling Vignette no objeto da câmera (Main Camera dentro do XR Origin) e ligue-o ao provider de locomoção, para a visão escurecer durante o giro e o teleporte. Em seguida, mostre o código que controla quais áreas são acessíveis. Crie um script chamado AreaTeleporte.cs com este conteúdo exato:

using UnityEngine;
using UnityEngine.XR.Interaction.Toolkit;

public class AreaTeleporte : MonoBehaviour
{
    public TeleportationArea[] areas;

    public void DefinirAcesso(bool liberado)
    {
        for (int i = 0; i < areas.Length; i = i + 1)
        {
            areas[i].enabled = liberado;
        }
    }
}

Explique linha a linha: a lista areas guarda todas as áreas de teleporte da cena; o método DefinirAcesso recebe um valor verdadeiro ou falso e, percorrendo a lista com o for, liga ou desliga cada área pela propriedade enabled. Quando enabled vale falso, aquela área deixa de aceitar teleporte.

25 min, mão na massa. Cada aluno adiciona o Snap Turn Provider com 45 graus, liga o fade pelo Tunneling Vignette e cria o script AreaTeleporte.cs. No Inspector, o aluno arrasta para o campo areas as áreas de chão que existem na cena. Para testar o controle por código, peça que liguem o método a um botão simples. Circule pela sala. Quem terminar entra no headset e confere se gira em saltos e teleporta com a tela escurecendo de leve.

10 min, desafio e compartilhar. Cada aluno faz um percurso completo combinando teleporte e giro, indo de um canto ao outro da cena sem desconforto. Faça uma rodada: cada um conta qual área deixou bloqueada e por quê.

## Como explicar de forma clara (linguagem para a idade)

Use comparações com o corpo. Para o snap turn, diga que é como virar a cadeira de uma vez, em vez de rodar devagar até ficar tonto. Para o fade, fale que é como piscar os olhos ao mudar de lugar: por um instante tudo escurece e, quando a luz volta, você já está no destino. Para as áreas de teleporte, diga que são como tapetes mágicos no chão: você só pode pousar onde tem tapete. E para o código, explique que enabled é um interruptor de liga e desliga: verdadeiro acende o tapete, falso apaga. Lembre sempre que, em VR, o conforto vem antes do visual bonito, porque ninguém quer jogar enjoado.

## Erros comuns e como ajudar

O erro mais comum é o snap turn não funcionar porque o aluno esqueceu de arrastar o Locomotion System para o campo System do provider; confira esse encaixe primeiro. Outro é deixar o Turn Amount muito pequeno, como 5 graus, fazendo o giro parecer suave de novo e voltar o enjoo; reforce que 45 graus é o valor confortável. No código, é comum esquecer de arrastar as áreas para o campo areas no Inspector, e aí o método não controla nada; mostre que a lista precisa estar preenchida. Há quem escreva enable em vez de enabled e o projeto não compila; corrija o nome exato da propriedade. Por fim, se o teleporte ainda cair em lugares proibidos, quase sempre falta tirar o componente Teleportation Area das superfícies que não deveriam ser destino.`,
  exercicios: [
    {
      titulo: `Ligando o snap turn`,
      tipo: `prática na ferramenta`,
      tempo: `7 minutos`,
      guiaProfessor: `Garanta que cada aluno tenha a cena da Aula 5 aberta. Mostre onde fica o objeto Locomotion System na Hierarchy e o botão Add Component no Inspector. Reforce o encaixe do campo System.`,
      atividade: `Selecione o objeto Locomotion System dentro do XR Origin. No Inspector, clique em Add Component e adicione o Snap Turn Provider. Arraste o próprio Locomotion System para o campo System e deixe o Turn Amount em 45. Mostre o resultado ao professor.`,
      gabarito: `O Locomotion System deve ter o componente Snap Turn Provider com o campo System preenchido com ele mesmo e o Turn Amount em 45. No headset, ao empurrar o analógico para o lado, a câmera deve girar de uma vez 45 graus, em salto, e não suavemente. Se nada acontecer, quase sempre o campo System ficou vazio.`,
    },
    {
      titulo: `Escurecendo a tela com o fade`,
      tipo: `prática na ferramenta`,
      tempo: `9 minutos`,
      guiaProfessor: `Explique que o fade é o que esconde o salto do teleporte e o giro. Ajude a encontrar a Main Camera dentro do XR Origin e a ligar o Tunneling Vignette ao provider de locomoção.`,
      atividade: `Selecione a Main Camera dentro do XR Origin. No Inspector, adicione o componente Tunneling Vignette. Ligue-o ao provider de locomoção, conforme o professor mostrar, para a visão escurecer durante o giro e o teleporte. Teste no headset e descreva a sensação.`,
      gabarito: `A Main Camera deve ter o componente Tunneling Vignette ligado ao provider de locomoção. No headset, ao girar por snap turn ou teleportar, as bordas da visão devem escurecer por um instante e clarear de novo. A sensação esperada é de mais conforto e menos tontura. Se a tela não escurecer, o vignette não foi ligado ao provider.`,
    },
    {
      titulo: `Programando o controle de áreas`,
      tipo: `programação`,
      tempo: `12 minutos`,
      guiaProfessor: `Mostre que o script guarda uma lista de áreas e liga ou desliga cada uma pela propriedade enabled. Reforce o nome exato enabled. Lembre de arrastar as áreas para o campo areas no Inspector.`,
      atividade: `Crie um script chamado AreaTeleporte.cs com uma lista pública de TeleportationArea e um método DefinirAcesso que recebe um valor verdadeiro ou falso e liga ou desliga todas as áreas pela propriedade enabled. Adicione o script a um objeto da cena e arraste as áreas de chão para o campo areas no Inspector.`,
      gabarito: `O código-solução é:

using UnityEngine;
using UnityEngine.XR.Interaction.Toolkit;

public class AreaTeleporte : MonoBehaviour
{
    public TeleportationArea[] areas;

    public void DefinirAcesso(bool liberado)
    {
        for (int i = 0; i < areas.Length; i = i + 1)
        {
            areas[i].enabled = liberado;
        }
    }
}

A lista areas precisa estar preenchida no Inspector com as áreas de chão da cena. Ao chamar DefinirAcesso com falso, todas as áreas devem parar de aceitar teleporte; com verdadeiro, voltam a aceitar. Se o projeto não compilar, verifique se a propriedade foi escrita como enabled, e não enable.`,
    },
    {
      titulo: `Bloqueando uma sala proibida`,
      tipo: `desafio`,
      tempo: `12 minutos`,
      guiaProfessor: `Ajude o aluno a ligar o método DefinirAcesso a um botão ou gatilho simples. Mostre que basta chamar o método com falso para fechar uma área e com verdadeiro para reabrir. Incentive o teste no headset.`,
      atividade: `Usando o script da atividade anterior, escolha uma área da cena que deve ficar proibida no começo. Ligue o método DefinirAcesso a um botão simples que, ao ser apertado, libera essa área. Comece com a área bloqueada e, ao apertar o botão, ela deve passar a aceitar teleporte. Teste o ciclo de bloquear e liberar.`,
      gabarito: `A área proibida deve começar com a propriedade enabled em falso, recusando teleporte. Ao apertar o botão, o método DefinirAcesso é chamado com verdadeiro e a área passa a aceitar teleporte. Uma forma de iniciar bloqueado é chamar areas[i].enabled = false no método Start, ou desmarcar o componente Teleportation Area no Inspector. O ciclo correto é: bloqueado no início, liberado após o botão. Se o jogador conseguir teleportar antes do botão, a área não começou bloqueada.`,
    },
    {
      titulo: `Percurso completo confortável`,
      tipo: `projeto curto`,
      tempo: `15 minutos`,
      guiaProfessor: `Lembre que o objetivo é combinar teleporte e giro por snap turn num percurso sem desconforto. Peça que cada aluno planeje os pontos de parada antes de testar. Quem puder, faz o percurso de olhos no headset.`,
      atividade: `Monte um percurso na sua cena com pelo menos três pontos de parada. Saindo do início, vá de um ponto ao outro combinando teleporte para se deslocar e snap turn para virar e olhar ao redor. Deixe ao menos uma área bloqueada para mostrar que o controle por código funciona. Salve a cena com o seu nome e faça o percurso completo no headset.`,
      gabarito: `A cena deve permitir chegar aos três pontos combinando teleporte e snap turn, sem giro suave e com o fade ativo. Pelo menos uma área deve estar bloqueada pelo código AreaTeleporte, recusando teleporte. O percurso é considerado bem-feito quando o aluno vai do início ao fim sem desconforto, gira em saltos de 45 graus, vê a tela escurecer de leve nas transições e não consegue teleportar para a área proibida. A cena deve estar salva com o nome do aluno. Se houver enjoo, verifique se o snap turn está em 45 graus e se o Tunneling Vignette está ligado.`,
    },
  ],
};
