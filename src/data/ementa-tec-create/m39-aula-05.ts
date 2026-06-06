import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 5,
  titulo: "Teleporte: Movendo-se em VR",
  semana: "Semana 3",
  duracao: "1 hora",
  objetivo: `Configurar a locomoção por teleporte em Realidade Virtual no Unity, usando Teleportation Area e Teleportation Anchor para que o jogador se mova pela cena de forma confortável e sem enjoo.`,
  descricao: `Nesta aula, os alunos resolvem um dos maiores desafios da Realidade Virtual: como deixar o jogador andar por um mundo grande sem precisar caminhar de verdade pela sala. A resposta clássica é o teleporte. Em vez de deslizar suavemente (o que costuma causar enjoo em muita gente), o jogador aponta o controle para um lugar do chão, vê um marcador aparecer e, ao soltar, é levado instantaneamente para lá. É rápido, confortável e fácil de aprender.

O coração da aula são dois componentes do XR Interaction Toolkit do Unity: a Teleportation Area e o Teleportation Anchor. A Teleportation Area transforma uma superfície inteira (como o piso da cena) em uma região válida para teleporte: o jogador pode ir para qualquer ponto dela. Já o Teleportation Anchor define um ponto exato e fixo de chegada, como uma plataforma, um banco ou uma marca no chão. Juntos, eles dão ao professor o controle de para onde o jogador pode e não pode ir.

Para apontar, os alunos vão ativar um ray (um raio que sai do controle) com comportamento de teleporte. Esse raio normalmente aparece curvo, como um arco, ajudando a mirar no chão. Quando o jogador segura o botão certo, o raio fica visível; quando solta sobre uma área válida, o sistema executa o teleporte por meio de um componente chamado Teleportation Provider, que conversa com o XR Origin (o objeto que representa o corpo e a câmera do jogador no mundo).

Ao final, cada aluno terá uma cena em que consegue se mover livremente pelo piso por teleporte e também pular para pontos especiais marcados com âncoras. Mais do que apertar botões, eles vão entender uma decisão de design importante: escolher quais superfícies são seguras para o jogador pisar, deixando o passeio confortável e protegendo contra o enjoo, um problema real que todo desenvolvedor de VR precisa respeitar.`,
  materiais: [
    `Computadores com Realidade Virtual (Unity + C#) instalado e o XR Interaction Toolkit já importado no projeto, um por aluno`,
    `Óculos VR conectados e testados antes da aula (com os controles carregados e pareados)`,
    `Projetor ou TV para o professor demonstrar cada passo na tela do Unity`,
    `Projeto de exemplo com a cena pronta: um piso grande, paredes e algumas plataformas separadas para servirem de âncoras`,
    `Espaço livre e demarcado no chão da sala para o aluno usar o óculos com segurança`,
    `Folha impressa ou slide com o nome dos componentes principais (Teleportation Area, Teleportation Anchor, Teleportation Provider)`,
  ],
  conceitosChave: [
    `Locomoção por teleporte — forma de mover o jogador instantaneamente para o ponto mirado, em vez de deslizar, reduzindo o enjoo.`,
    `Teleportation Area — componente que marca uma superfície inteira (como o piso) onde o jogador pode teleportar para qualquer ponto.`,
    `Teleportation Anchor — componente que define um ponto fixo e exato de chegada, como uma plataforma ou uma marca no chão.`,
    `Ray (raio de teleporte) — a linha, geralmente curva como um arco, que sai do controle e mostra para onde o jogador vai.`,
    `Teleportation Provider — o componente que de fato executa o teleporte, movendo o XR Origin para o destino válido.`,
    `XR Origin — o objeto que representa o corpo e a câmera do jogador dentro do mundo VR; é ele que muda de lugar no teleporte.`,
    `Enjoo em VR (motion sickness) — o mal-estar que aparece quando a imagem se move e o corpo fica parado; o teleporte ajuda a evitar isso.`,
  ],
  treinamento: `## O que o professor precisa saber

Você não precisa ser especialista em Realidade Virtual. Esta aula usa peças prontas do XR Interaction Toolkit do Unity, e o seu papel é montá-las na ordem certa. Três janelas serão usadas o tempo todo: a Hierarchy (lista de objetos da cena, à esquerda), a Scene (a visão 3D no centro) e o Inspector (os ajustes do objeto selecionado, à direita). O objeto principal já existe no projeto de exemplo e se chama XR Origin: dentro dele ficam a câmera e os dois controles (left e right). O teleporte precisa de três coisas conversando: um destino (a Teleportation Area ou o Teleportation Anchor), um raio que mira (no controle) e um Teleportation Provider (no XR Origin) que executa o movimento. Se uma dessas peças faltar, o teleporte não funciona, então confira as três sempre que algo der errado.

## Passo a passo da aula

Aquecimento (10 min): Retome a aula anterior perguntando como o jogador pegava objetos. Em seguida, levante o problema: como andar por um mundo grande sem bater na parede da sala? Mostre no projetor um vídeo curto de teleporte em VR e pergunte por que ele evita enjoo.

Conteúdo novo guiado (15 min): No projetor, abra a cena de exemplo. Na Hierarchy, selecione o piso. No Inspector, clique em Add Component e adicione Teleportation Area. Confirme que o piso tem um Collider (caixa Mesh Collider ou Box Collider marcada). Depois, selecione o XR Origin e adicione o componente Teleportation Provider (Add Component, digite o nome). Agora o controle precisa de um raio de teleporte: no projeto de exemplo já há um objeto chamado Teleport Interactor dentro do controle direito; ative-o no Inspector marcando a caixa ao lado do nome. Entre no Play, coloque o óculos e segure o stick (ou o botão) para frente: o arco aparece; aponte para o piso e solte para teleportar. Por fim, crie um ponto fixo: selecione uma plataforma, adicione Teleportation Anchor e arraste o próprio objeto da plataforma para o campo Teleport Anchor Transform.

Opcionalmente, mostre um pequeno script que avisa quando o jogador chegou em uma âncora. Use string.Format, nunca strings interpoladas:

using UnityEngine;
using UnityEngine.XR.Interaction.Toolkit;

public class AvisoAncora : MonoBehaviour
{
    public void AoTeleportar()
    {
        Debug.Log(string.Format("Jogador chegou na ancora: {0}", gameObject.name));
    }
}

Explique que esse script tem um método público AoTeleportar que escreve no Console o nome do objeto. Ele pode ser ligado ao evento de seleção do anchor no Inspector, mostrando que código e componentes trabalham juntos.

Mão na massa (25 min): Cada aluno adiciona a Teleportation Area ao piso, o Teleportation Provider ao XR Origin e ativa o raio no controle. Testa no óculos (revezando se houver poucos). Depois cria pelo menos duas plataformas com Teleportation Anchor para virarem pontos de parada. Circule conferindo Colliders e o campo do anchor.

Desafio + compartilhar (10 min): Cada aluno mostra a um colega seu trajeto de teleporte e explica qual superfície deixou válida e qual deixou de fora. Dois voluntários demonstram no projetor.

## Como explicar de forma clara

Use comparações do dia a dia. Diga que a Teleportation Area é como o chão liberado de um pula-pula: pode pisar em qualquer lugar dele. Já o Teleportation Anchor é como uma cadeira marcada com o seu nome: você sempre cai exatamente ali. O raio curvo é como jogar uma bola de basquete: você mira o arco e a bola cai no ponto certo. Reforce que escolher onde pode teleportar é uma decisão de design, igual a um arquiteto decidindo onde tem porta e onde tem parede. Sempre demonstre no projetor antes de pedir para fazer, e fale o nome dos componentes devagar enquanto aponta na tela.

## Erros comuns e como ajudar

O erro mais comum é o piso não receber o teleporte porque está sem Collider: confira no Inspector se há um Collider ativo. Outro erro frequente é esquecer o Teleportation Provider no XR Origin, e aí o arco aparece mas nada acontece; lembre que o provider é quem executa. Muitos deixam o objeto do raio desativado no controle: confira a caixinha ao lado do nome na Hierarchy. No anchor, é comum esquecer de preencher o campo Teleport Anchor Transform, fazendo o jogador cair no lugar errado. Por fim, alguns colocam Teleportation Area na parede sem querer, deixando o jogador subir pelo muro; oriente a aplicar só nas superfícies que fazem sentido pisar.`,
  exercicios: [
    {
      titulo: `Liberando o chão para teleporte`,
      tipo: `prática na ferramenta`,
      tempo: `7 minutos`,
      guiaProfessor: `Confirme que cada aluno selecionou o piso correto na Hierarchy e que o piso tem um Collider ativo antes de adicionar o componente.`,
      atividade: `Selecione o piso da cena, adicione o componente Teleportation Area pelo botão Add Component e garanta que ele tenha um Collider marcado no Inspector.`,
      gabarito: `O piso aparece no Inspector com os componentes Collider (ativo) e Teleportation Area. Ao entrar no Play e mirar o controle no piso, o marcador de destino aparece sobre ele.`,
    },
    {
      titulo: `Ligando o raio e o provider`,
      tipo: `prática na ferramenta`,
      tempo: `7 minutos`,
      guiaProfessor: `Verifique se o Teleportation Provider foi adicionado ao XR Origin e se o objeto do raio de teleporte está ativado (caixa marcada) dentro do controle direito.`,
      atividade: `Adicione o Teleportation Provider ao XR Origin e ative o raio de teleporte no controle. Entre no Play, segure o botão de teleporte, mire no piso e solte para se mover.`,
      gabarito: `O XR Origin tem o componente Teleportation Provider. Ao segurar o botão, o arco curvo aparece; ao soltar sobre o piso, o jogador é levado para o ponto mirado, confirmando que raio e provider funcionam juntos.`,
    },
    {
      titulo: `Criando um ponto de parada com âncora`,
      tipo: `prática na ferramenta`,
      tempo: `6 minutos`,
      guiaProfessor: `Mostre como arrastar o próprio objeto da plataforma para o campo Teleport Anchor Transform. Confira se a plataforma também tem Collider.`,
      atividade: `Escolha uma plataforma da cena, adicione o componente Teleportation Anchor e preencha o campo Teleport Anchor Transform arrastando o objeto da plataforma para lá.`,
      gabarito: `A plataforma tem o componente Teleportation Anchor com o campo Teleport Anchor Transform preenchido. No Play, ao mirar na plataforma e soltar, o jogador cai exatamente no ponto fixo da âncora.`,
    },
    {
      titulo: `Decisão de design: onde pode pisar`,
      tipo: `desafio`,
      tempo: `6 minutos`,
      guiaProfessor: `Incentive o aluno a justificar cada escolha. Reforce que deixar superfícies erradas válidas (como paredes) quebra a experiência e pode causar enjoo.`,
      atividade: `Crie pelo menos duas plataformas com Teleportation Anchor como pontos de parada e deixe uma superfície de propósito SEM teleporte. Explique por que escolheu cada uma.`,
      gabarito: `A cena tem duas ou mais plataformas com Teleportation Anchor funcionando e ao menos uma superfície sem teleporte. O aluno justifica as escolhas dizendo, por exemplo, que liberou o chão e plataformas seguras e bloqueou a parede para o jogador não subir por ela.`,
    },
    {
      titulo: `Aviso de chegada com código`,
      tipo: `programação em C#`,
      tempo: `9 minutos`,
      guiaProfessor: `Ajude a criar o script, salvar com o mesmo nome da classe e ligar o método ao evento do anchor no Inspector. Reforce o uso de string.Format em vez de strings interpoladas.`,
      atividade: `Crie um script em C# chamado AvisoAncora com um método público que escreva no Console o nome do objeto quando o jogador teleportar para a âncora, e ligue esse método ao evento do Teleportation Anchor.`,
      gabarito: `using UnityEngine;
using UnityEngine.XR.Interaction.Toolkit;

public class AvisoAncora : MonoBehaviour
{
    public void AoTeleportar()
    {
        Debug.Log(string.Format("Jogador chegou na ancora: {0}", gameObject.name));
    }
}

O script é anexado à plataforma com o anchor e o método AoTeleportar é arrastado para o evento de seleção do componente no Inspector. Ao teleportar para a âncora durante o Play, o Console mostra a mensagem com o nome do objeto.`,
    },
  ],
};
