import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 8,
  titulo: "Minha Cena VR Interativa Completa",
  semana: "Semana 4",
  duracao: "1 hora",
  objetivo: `Integrar mãos, pegar objetos, teleporte e interações do cenário em uma única cena VR jogável no Unity, testar o fluxo completo no headset, corrigir bugs com apoio do Claude e apresentar a experiência para a turma.`,
  descricao: `Esta é a aula que fecha o mês de Interação em VR. Durante as sete aulas anteriores, cada aluno aprendeu uma peça separada: as mãos virtuais, os gestos e botões dos controles, pegar objetos, usar e lançar, o teleporte, a navegação suave com conforto e as reações ao toque do jogador. Agora chega a hora de juntar tudo dentro de uma única cena que funcione do começo ao fim. O objetivo não é criar nada novo do zero, e sim montar, organizar e testar a experiência completa que já existe em pedaços.

O coração da aula é a integração. Integrar significa colocar todos os componentes para conviver na mesma cena sem brigar: as mãos seguram os objetos, o teleporte leva o jogador até eles, e os gatilhos do cenário reagem quando o jogador chega ou toca em algo. Quando tudo está numa cena só, surgem conflitos que não apareciam antes, e é exatamente isso que o aluno vai aprender a resolver. Testar de verdade no headset, com o corpo dentro da experiência, é a única forma de descobrir esses problemas.

A segunda grande ideia é a depuração com apoio do Claude. O aluno vai aprender a descrever um bug com clareza (o que esperava, o que aconteceu, qual mensagem apareceu) e a usar o Claude como assistente para sugerir causas e correções. Isso treina uma habilidade real de quem faz games: o jogo quase nunca funciona perfeito na primeira vez, e saber investigar e corrigir vale mais do que decorar código.

Ao final, cada aluno terá uma cena VR jogável onde dá para se mover, pegar coisas e ver o mundo reagir, e vai apresentá-la para os colegas. Este é o entregável do mês e também uma peça do portfólio de games que fecha o Ano 4. Não precisa ser grande nem perfeita: precisa funcionar do começo ao fim e ser divertida de experimentar.`,
  materiais: [
    `Computadores com Unity instalado e o pacote XR Interaction Toolkit configurado, um por aluno`,
    `Óculos VR (headset) com os controles, ao menos um por dupla, com a conexão já testada antes da aula`,
    `Projetor ou TV para o professor demonstrar a cena e espelhar o que o jogador vê no headset`,
    `Projeto Unity de exemplo com as peças das aulas anteriores (mãos, pegar, teleporte e gatilhos) já prontas`,
    `Acesso ao Claude aberto no navegador para apoiar a correção de bugs`,
    `Folha impressa com a Lista de Verificação da Cena (checklist de tudo que precisa funcionar)`,
    `Espaço livre e seguro no chão para o aluno se mover com o headset sem tropeçar`,
  ],
  conceitosChave: [
    `Integração — juntar várias partes prontas (mãos, pegar, teleporte, gatilhos) em uma única cena que funcione do início ao fim.`,
    `Cena (Scene) — o arquivo do Unity que guarda o mundo VR completo, com todos os objetos e scripts daquela experiência.`,
    `Build de teste — colocar a cena no headset para experimentar de verdade, com o corpo dentro do jogo, e não só no editor.`,
    `Bug — um comportamento errado do jogo, como um objeto que não pode ser pego ou um teleporte que leva para o lugar errado.`,
    `Depuração (debug) — o processo de encontrar a causa de um bug e corrigi-lo, observando o jogo e lendo as mensagens do Console.`,
    `Console — a janela do Unity que mostra avisos e erros (em amarelo e vermelho), a primeira pista quando algo dá errado.`,
    `Playtest — alguém de fora joga a cena enquanto você observa, para descobrir problemas que você não percebia sozinho.`,
  ],
  treinamento: `## O que o professor precisa saber

Você não precisa dominar VR para conduzir esta aula. O trabalho pesado de criar cada interação já foi feito nas aulas 1 a 7; hoje é dia de montar e testar. No Unity, a janela mais importante é a Hierarchy (lista de objetos da cena, à esquerda), a janela Scene (onde você arruma o mundo), o botão Play (o triângulo no topo, que liga a prévia) e a janela Console (que mostra erros em vermelho e avisos em amarelo). Para abrir o Console use o menu Window e depois Analysis e Console. O jogador em VR é o objeto XR Origin (antes chamado XR Rig); dentro dele ficam a câmera (a cabeça) e os dois controladores (as mãos). Tenha o projeto de exemplo aberto e teste o headset antes dos alunos chegarem.

## Passo a passo da aula

Aquecimento (10 min): Pergunte à turma quais peças eles construíram no mês (mãos, pegar, lançar, teleporte, navegação, toque). Liste no quadro. Diga que hoje todas essas peças vão morar na mesma cena. Mostre rapidamente, no projetor, a cena de exemplo já integrada para eles verem o objetivo.

Conteúdo novo guiado (15 min): No projetor, abra a cena no Unity. Na Hierarchy, confirme que existe um XR Origin com o teleporte ativo, ao menos um objeto com o componente XR Grab Interactable (para pegar) e uma área de gatilho no cenário. Mostre como confirmar que cada objeto que deve ser pego tem um Collider e um Rigidbody. Em seguida, abra um script simples de gatilho que conta interações e mostre o código exato, explicando linha a linha:

using UnityEngine;

public class ContadorDeInteracoes : MonoBehaviour
{
    public int total = 0;

    private void OnTriggerEnter(Collider other)
    {
        total = total + 1;
        Debug.Log("O jogador interagiu. Total agora: " + total);
    }
}

Explique: a linha do OnTriggerEnter roda sozinha quando algo entra na área; a soma usa o sinal de mais para aumentar o total; e o Debug.Log escreve no Console juntando o texto com o número usando o sinal de mais. Aperte Play e mostre a mensagem aparecendo no Console.

Mão na massa (25 min): Cada aluno abre a própria cena (ou a de exemplo) e usa a Lista de Verificação para confirmar, um item por vez: as mãos aparecem, dá para pegar um objeto, o teleporte funciona, um gatilho do cenário reage. Quando algo não funcionar, o aluno descreve o bug por escrito e pede ajuda ao Claude. Faça rodízio no headset para que todos testem com o corpo.

Desafio + compartilhar (10 min): Cada aluno faz um playtest com um colega: um joga, o outro observa e anota um problema. Dois ou três voluntários apresentam a cena no projetor para a turma.

## Como explicar de forma clara

Use comparações do dia a dia. Diga que integrar é como arrumar um quarto: cada coisa já existe, você só coloca no lugar certo para tudo funcionar junto. Um bug é como um interruptor ligado no fio errado: a luz não acende, mas o conserto é simples quando você acha o fio. O Console é o "recado do jogo": quando aparece vermelho, o jogo está avisando onde doeu. Mostre sempre antes de mandar fazer, e repita que ninguém acerta de primeira: corrigir faz parte de criar games.

## Erros comuns e como ajudar

O erro mais comum é o objeto que não pode ser pego: quase sempre falta o Collider ou o Rigidbody, ou falta o componente XR Grab Interactable. Outro clássico é o teleporte que não funciona porque a área de chão não tem o Teleportation Area marcado. Há quem teste só no editor e ache que está pronto; lembre que VR só se confirma no headset. Quando aparece erro vermelho no Console, ensine a ler a primeira linha e levar o texto exato ao Claude, em vez de adivinhar. Por fim, alguns alunos querem adicionar coisas novas; reforce que hoje o foco é fazer o que já existe funcionar do começo ao fim.`,
  exercicios: [
    {
      titulo: `Lista de Verificação da cena`,
      tipo: `prática na ferramenta`,
      tempo: `6 minutos`,
      guiaProfessor: `Entregue a folha de checklist. Oriente o aluno a testar um item por vez e marcar só o que realmente funciona, sem pular.`,
      atividade: `Abra sua cena VR e confira, item por item: as mãos aparecem? Dá para pegar um objeto? O teleporte leva você a outro ponto? Um gatilho do cenário reage? Marque cada item como OK ou COM PROBLEMA.`,
      gabarito: `O aluno entrega a lista preenchida com honestidade, indicando claramente quais interações funcionam e quais ainda apresentam problema. Esperado: ao menos as mãos e o pegar marcados como OK.`,
    },
    {
      titulo: `Consertar o objeto que não pega`,
      tipo: `prática na ferramenta`,
      tempo: `7 minutos`,
      guiaProfessor: `Prepare um objeto de propósito sem Rigidbody. Mostre que pegar exige Collider, Rigidbody e o componente XR Grab Interactable.`,
      atividade: `Existe um objeto na cena que você não consegue pegar. Selecione-o na Hierarchy e adicione o que estiver faltando para que ele possa ser segurado com a mão em VR.`,
      gabarito: `O aluno seleciona o objeto, clica em Add Component e adiciona Rigidbody e XR Grab Interactable (além de garantir um Collider). Ao testar, a mão consegue pegar o objeto. Solução: Add Component > Rigidbody; Add Component > XR Grab Interactable; conferir que há um Collider.`,
    },
    {
      titulo: `Contador de interações do cenário`,
      tipo: `programação`,
      tempo: `7 minutos`,
      guiaProfessor: `Mostre como criar um script novo e arrastá-lo para um objeto com Collider marcado como Is Trigger. Reforce que o texto e o número se juntam com o sinal de mais.`,
      atividade: `Crie um script chamado ContadorDeInteracoes e coloque-o numa área de gatilho do cenário. Toda vez que o jogador entrar na área, ele deve somar 1 e escrever o total no Console.`,
      gabarito: `using UnityEngine;

public class ContadorDeInteracoes : MonoBehaviour
{
    public int total = 0;

    private void OnTriggerEnter(Collider other)
    {
        total = total + 1;
        Debug.Log("O jogador interagiu. Total agora: " + total);
    }
}

O objeto que recebe o script tem um Collider com Is Trigger marcado. Ao entrar na área durante o Play, o Console mostra a mensagem com o total aumentando.`,
    },
    {
      titulo: `Caçar o bug com o Claude`,
      tipo: `depuração com o Claude`,
      tempo: `6 minutos`,
      guiaProfessor: `Ensine a descrever o bug em três partes: o que eu esperava, o que aconteceu e qual mensagem do Console apareceu. Depois leve ao Claude.`,
      atividade: `Escolha um problema da sua cena, leia a mensagem do Console e escreva um pedido claro ao Claude com as três partes. Aplique a sugestão e teste de novo.`,
      gabarito: `O aluno escreve um pedido completo, por exemplo: "Esperava pegar a esfera, mas a mão atravessa. O Console mostra um aviso sobre missing Rigidbody. Como corrijo no Unity?". Em seguida aplica a correção sugerida (adicionar Rigidbody) e confirma no headset que o bug sumiu.`,
    },
    {
      titulo: `Playtest e apresentação final`,
      tipo: `em dupla e apresentação`,
      tempo: `4 minutos`,
      guiaProfessor: `Forme duplas. Um joga com o headset enquanto o outro observa e anota. Conduza para que os comentários sejam sobre o jogo, nunca sobre a pessoa.`,
      atividade: `Deixe seu colega jogar sua cena do começo ao fim. Observe e anote um ponto forte e um problema. Depois, apresente em uma frase o que a sua cena VR permite fazer.`,
      gabarito: `A dupla completa o playtest com a cena funcionando de ponta a ponta (mover, pegar e ver algo reagir). O aluno anota ao menos um ponto forte e um problema reais e apresenta a cena em uma frase clara, como: "Na minha cena você se teleporta até a mesa, pega a caixa e a porta abre quando você chega".`,
    },
  ],
};
