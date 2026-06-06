import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 3,
  titulo: "Pegando Objetos no Mundo VR",
  semana: "Semana 2",
  duracao: "1 hora",
  objetivo: `Tornar objetos da cena pegáveis em Realidade Virtual usando o componente XR Grab Interactable, para que o aluno consiga pegar e soltar caixas e ferramentas com os controles dentro do ambiente VR.`,
  descricao: `Nas aulas anteriores deste mês o aluno já viu as próprias mãos virtuais em VR e aprendeu a ler gestos e botões dos controles. Agora chega o momento mais divertido e esperado: tocar e pegar objetos de verdade dentro do mundo virtual. Esta é a base de quase todo jogo em Realidade Virtual, porque interagir com o cenário é o que faz a experiência parecer real.

No Unity, a peça central para isso é o componente XR Grab Interactable. Ele é adicionado a um objeto da cena (por exemplo, uma caixa ou uma ferramenta) e transforma esse objeto em algo que pode ser segurado pelas mãos virtuais. Quando o jogador aproxima o controle e aperta o gatilho, o objeto gruda na mão; quando solta, o objeto cai com física natural. Para que tudo funcione, o objeto precisa de duas peças de apoio: um Collider, que define a área física que pode ser tocada, e um Rigidbody, que dá peso e física ao objeto.

Nesta aula o professor vai mostrar, passo a passo, como configurar um objeto pegável do zero. O foco é prático: o aluno cria uma caixa, adiciona os componentes certos, ajusta o Rigidbody e testa pegar e soltar dentro do ambiente VR (ou no modo de simulação, quando não houver óculos disponível). Ao final, o aluno terá uma pequena bancada com caixas e ferramentas que podem ser manipuladas livremente.

É importante lembrar que esta aula trata apenas de pegar e soltar. Usar e lançar objetos com mais energia, mirar e arremessar, fica para a próxima aula. Aqui o objetivo é firmar a base: entender a tríade Collider mais Rigidbody mais XR Grab Interactable, que se repetirá em todos os jogos VR que o aluno fizer daqui em diante.`,
  materiais: [
    `Computadores com Unity instalado e o pacote XR Interaction Toolkit configurado (Realidade Virtual com Unity e C#)`,
    `Óculos VR conectados quando disponíveis; quando não houver, usar o XR Device Simulator para testar no teclado e mouse`,
    `Projetor ou TV para o professor mostrar a tela do Unity para a turma`,
    `Cena VR base das aulas anteriores, já com o XR Origin e os controles funcionando`,
    `Arquivos de exemplo: alguns modelos simples de caixas e ferramentas (cubos e prismas servem) para usar como objetos pegáveis`,
    `Folha impressa com a lista de checagem dos três componentes (Collider, Rigidbody, XR Grab Interactable)`,
  ],
  conceitosChave: [
    `XR Grab Interactable — componente do Unity que torna um objeto pegável, fazendo-o grudar na mão virtual quando o jogador aperta o gatilho.`,
    `Collider — forma invisível que define a área física do objeto; sem ela o controle não consegue tocar nem detectar o objeto.`,
    `Rigidbody — componente que dá física ao objeto, como peso e gravidade, fazendo-o cair de forma realista quando solto.`,
    `Interactor — a parte do controle ou da mão que age sobre o mundo, ou seja, quem pega; já vem configurado no XR Origin.`,
    `Interactable — qualquer objeto que pode receber uma interação, como ser pego, tocado ou usado; é o que vamos configurar nesta aula.`,
    `Movement Type — opção do XR Grab Interactable que define como o objeto se move ao ser pego (por física ou seguindo direto a mão).`,
    `Trigger — o gatilho do controle, botão usado para confirmar a ação de pegar o objeto na mão virtual.`,
  ],
  treinamento: `## O que o professor precisa saber

Em Realidade Virtual, pegar um objeto não acontece por mágica: o Unity precisa de três componentes trabalhando juntos no mesmo objeto. Primeiro, um Collider, que é a forma invisível que pode ser tocada. Segundo, um Rigidbody, que dá peso e física. Terceiro, o XR Grab Interactable, que conecta tudo ao sistema de mãos do XR Interaction Toolkit. Quem pega chama-se Interactor (já está nos controles do XR Origin); o que é pego chama-se Interactable. Você não precisa dominar VR de antemão: basta seguir os cliques abaixo na ordem. Antes da aula, abra a cena base e confirme que o XR Origin e os controles já existem (vêm das aulas 1 e 2).

## Passo a passo da aula (ritmo 10/15/25/10)

Aquecimento (10 min): peça a um aluno para entrar na cena e mexer os controles no ar. Pergunte: o que falta para tocar a caixa? Conduza até a ideia de que o objeto precisa ser preparado. Revise rapidamente que os controles já são Interactors.

Conteúdo novo guiado (15 min): no projetor, crie a caixa. Menu GameObject, depois 3D Object, depois Cube. No Inspector, renomeie para CaixaPegavel. Mostre que todo Cube já vem com um Box Collider (a forma tocável). Agora adicione a física: com a caixa selecionada, clique em Add Component, digite Rigidbody e selecione. Por fim, clique em Add Component de novo, digite XR Grab Interactable e selecione. Explique que, ao adicionar o XR Grab Interactable, o Unity costuma ajustar o Rigidbody sozinho. No componente XR Grab Interactable, mostre o campo Movement Type e deixe em Velocity Tracking, que dá um movimento mais natural e seguro.

Mão na massa (25 min): cada aluno cria a própria CaixaPegavel repetindo os três passos (Collider que já existe, Add Component Rigidbody, Add Component XR Grab Interactable). Depois entram no Play, ou no XR Device Simulator se não houver óculos, e testam aproximar a mão, apertar o gatilho (Trigger) para pegar e soltar para ver a caixa cair. Quando dominarem a caixa, peça que dupliquem o objeto (Ctrl mais D) e renomeiem para Ferramenta, criando uma bancada com vários itens pegáveis. Se quiserem um toque de código, mostre um script simples que avisa quando o objeto foi pego, usando o evento Select Entered.

Exemplo de script em C# (arquivo AvisoDePegar.cs):

using UnityEngine;
using UnityEngine.XR.Interaction.Toolkit;

public class AvisoDePegar : MonoBehaviour
{
    public void AoPegar()
    {
        Debug.Log("O jogador pegou: " + gameObject.name);
    }
}

Para ligar o script: adicione-o à caixa com Add Component, depois no XR Grab Interactable abra a lista Select Entered, clique no sinal de mais, arraste a própria caixa para o campo de objeto e escolha a função AvisoDePegar, opção AoPegar. Cada vez que o objeto for pego, aparecerá uma mensagem no Console.

Desafio mais compartilhar (10 min): proponha que cada aluno deixe uma das ferramentas mais pesada mudando o valor Mass do Rigidbody (por exemplo, de 1 para 5) e sinta a diferença ao soltar. Depois cada um mostra a bancada para um colega pegar um item.

## Como explicar de forma clara (linguagem para a idade)

Use a comparação com o mundo real: para pegar algo, ele precisa ter forma (Collider), precisa ter peso (Rigidbody) e precisa estar pronto para ser segurado (XR Grab Interactable). Diga que o controle é a mão e a caixa é o brinquedo; sem essas três peças, a mão atravessa o brinquedo. Mostre, não só fale: pegue e solte no projetor para a turma ver a física agindo. Reforce que o gatilho é o botão de pegar.

## Erros comuns e como ajudar

O objeto não é pego: quase sempre falta o Rigidbody ou o XR Grab Interactable; peça para conferir os três componentes no Inspector. O objeto atravessa o chão: o chão pode estar sem Collider, ou o Rigidbody está sem gravidade; ative Use Gravity. A caixa some ao pegar ou treme muito: mude o Movement Type para Velocity Tracking. O Console mostra erro de namespace: confirme a linha using UnityEngine.XR.Interaction.Toolkit no topo do script. Sem óculos? Use o XR Device Simulator, ele permite testar tudo com teclado e mouse.`,
  exercicios: [
    {
      titulo: `Caça aos três componentes`,
      tipo: `Identificação e revisão`,
      tempo: `5 minutos`,
      guiaProfessor: `Aplique logo após o conteúdo guiado, com a caixa selecionada no projetor. Peça aos alunos para apontar, no Inspector, quais componentes tornam o objeto pegável. Aceite respostas faladas e confira juntos.`,
      atividade: `Olhe a caixa CaixaPegavel no Inspector e escreva os três componentes que um objeto precisa ter para ser pego em VR. Explique em uma frase para que serve cada um.`,
      gabarito: `Os três componentes são: Collider (define a forma tocável do objeto), Rigidbody (dá peso e física, fazendo o objeto cair) e XR Grab Interactable (liga o objeto ao sistema de mãos, permitindo que ele seja pego). Sem qualquer um deles a mão não consegue segurar a caixa.`,
    },
    {
      titulo: `Minha primeira caixa pegável`,
      tipo: `Prática guiada no Unity`,
      tempo: `8 minutos`,
      guiaProfessor: `Acompanhe os alunos repetindo os passos do conteúdo guiado. Circule pela sala conferindo o Inspector de cada um. O erro mais comum é esquecer o Add Component do XR Grab Interactable.`,
      atividade: `Crie um Cube pela rota GameObject, 3D Object, Cube. Renomeie para CaixaPegavel. Adicione um Rigidbody e depois um XR Grab Interactable usando o botão Add Component. Entre no Play (ou no XR Device Simulator) e teste pegar e soltar a caixa.`,
      gabarito: `Passos corretos: 1) GameObject, 3D Object, Cube; 2) renomear para CaixaPegavel no Inspector; 3) o Box Collider já vem pronto; 4) Add Component, Rigidbody; 5) Add Component, XR Grab Interactable; 6) deixar Movement Type em Velocity Tracking; 7) entrar no Play, aproximar o controle, apertar o gatilho para pegar e soltar para a caixa cair. Se a caixa cair pelo chão, o piso precisa de Collider.`,
    },
    {
      titulo: `A bancada de ferramentas`,
      tipo: `Aplicação e duplicação`,
      tempo: `7 minutos`,
      guiaProfessor: `Estimule a autonomia. O objetivo é repetir o padrão de configuração em mais objetos. Lembre o atalho Ctrl mais D para duplicar e peça nomes diferentes para cada item.`,
      atividade: `A partir da CaixaPegavel, duplique o objeto com Ctrl mais D e crie pelo menos três itens pegáveis com nomes diferentes (por exemplo Caixa, Martelo, Chave). Posicione todos sobre uma superfície e teste pegar cada um.`,
      gabarito: `Resultado esperado: três ou mais objetos na cena, cada um com Collider, Rigidbody e XR Grab Interactable, com nomes distintos. Como a duplicação copia todos os componentes, cada novo item já nasce pegável. Todos devem poder ser pegos e soltos no teste, caindo na superfície quando soltos.`,
    },
    {
      titulo: `Aviso de pegar no Console`,
      tipo: `Programação em C#`,
      tempo: `8 minutos`,
      guiaProfessor: `Apresente o script no projetor antes. Reforce a linha using do toolkit e a ligação pelo evento Select Entered. Verifique se cada aluno arrastou o objeto correto para o campo do evento.`,
      atividade: `Crie um script chamado AvisoDePegar.cs que, ao pegar o objeto, escreva no Console o nome do objeto pego. Adicione o script à caixa e ligue a função ao evento Select Entered do XR Grab Interactable. Teste e confira a mensagem no Console.`,
      gabarito: `Código-solução do arquivo AvisoDePegar.cs:

using UnityEngine;
using UnityEngine.XR.Interaction.Toolkit;

public class AvisoDePegar : MonoBehaviour
{
    public void AoPegar()
    {
        Debug.Log("O jogador pegou: " + gameObject.name);
    }
}

Ligação: Add Component do script na caixa; no XR Grab Interactable, abrir Select Entered, clicar no mais, arrastar a própria caixa para o campo, escolher AvisoDePegar e a função AoPegar. Ao pegar, o Console mostra o nome do objeto. Observação: a mensagem usa concatenação com mais, sem strings interpoladas.`,
    },
    {
      titulo: `Peso que muda o jogo`,
      tipo: `Desafio de física e investigação`,
      tempo: `7 minutos`,
      guiaProfessor: `Use como desafio final. Deixe os alunos experimentarem valores e descreverem o que sentem ao soltar. Conecte com a próxima aula, em que objetos serão usados e lançados.`,
      atividade: `No Rigidbody de uma ferramenta, mude o valor Mass de 1 para 5 e teste soltar. Em seguida, desative Use Gravity em outro objeto e observe. Escreva o que muda em cada caso e por quê.`,
      gabarito: `Com Mass maior (5), o objeto cai com a mesma aceleração da gravidade, mas reage como mais pesado em colisões e empurrões, parecendo mais firme ao manipular. Com Use Gravity desativado, o objeto não cai: ele flutua no ar quando solto, porque deixa de sofrer a força da gravidade. Conclusão: Mass altera a sensação de peso nas interações e Use Gravity decide se o objeto cai ou flutua.`,
    },
  ],
};
