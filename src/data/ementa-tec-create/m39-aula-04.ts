import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 4,
  titulo: "Usando e Lançando Objetos",
  semana: "Semana 2",
  duracao: "1 hora",
  objetivo: `Programar em C# uma ação ao usar um objeto preso na mão (apertar o gatilho para ligar uma lanterna) e ajustar o ponto de encaixe e a física para arremessar itens em VR de forma realista.`,
  descricao: `Nesta aula o aluno dá o próximo passo na manipulação em Realidade Virtual. Na Aula 3 ele aprendeu a pegar objetos com o XR Grab Interactable; agora ele vai fazer esses objetos terem vida própria na mão. A pergunta que guia a aula é simples e empolgante: "O que acontece quando eu aperto o gatilho segurando esse objeto?". A resposta é uma ação programada em C#, como acender uma lanterna ou disparar um efeito. Além disso, o aluno vai aprender a soltar e arremessar itens com física convincente, ajustando como o objeto se encaixa na mão e como ele voa pelo ar.

A primeira metade do tema é a ação de usar. No XR Interaction Toolkit, quando seguramos um objeto, o controle ainda envia eventos, e o mais importante deles é o "activated", disparado ao apertar o gatilho. O aluno vai escrever um pequeno script em C# que escuta esse evento e liga uma luz (a Light de uma lanterna). É a primeira vez no mês que o aluno conecta um gesto do controle a uma resposta visível no mundo, e isso costuma gerar muita animação na turma.

A segunda metade é a física do arremesso. Soltar um objeto em VR não é só largar; é transferir a velocidade da mão para o objeto. O XR Grab Interactable já calcula isso, mas o resultado depende de configurações como o Movement Type, o Throw Velocity Scale e o ponto de encaixe (o Attach Transform). Um ajuste errado faz a bola cair morta no chão ou voar longe demais. O aluno vai experimentar esses valores até o arremesso parecer natural, entendendo que física em jogos é ajuste fino, não mágica.

O foco do mês é a Interação em VR, e o entregável é interagir com o mundo virtual. Esta aula entrega duas interações poderosas que aparecerão na cena final: usar um item na mão e arremessá-lo. O Claude entra como assistente de depuração: quando o arremesso ficar estranho, o aluno descreve o comportamento ao Claude e pede ajuda para descobrir qual configuração de física ajustar. Assim ele aprende a programar e a depurar como um desenvolvedor de verdade.`,
  materiais: [
    `Computadores com Unity (versão LTS recente) e o projeto VR do mês já com o XR Interaction Toolkit instalado, um por aluno`,
    `Óculos VR (Meta Quest ou equivalente) ou o XR Device Simulator habilitado para quem não tiver headset, para testar usar e arremessar`,
    `Projetor ou TV para o professor demonstrar o script em C# e os ajustes de física em tela grande`,
    `Arquivo de exemplo: uma cena com um XR Origin pronto, uma lanterna (objeto com um componente Light filho) e uma bola com Rigidbody e XR Grab Interactable`,
    `Arquivo de exemplo com o código C# completo do script Lanterna para os alunos copiarem sem erros de digitação`,
    `Folha ou slide com o checklist da aula: usar dispara ação, lanterna acende, bola é arremessada com física boa`,
  ],
  conceitosChave: [
    `Evento activated — o sinal que o XR Interaction Toolkit envia quando o jogador aperta o gatilho segurando um objeto; usamos ele para disparar ações.`,
    `XR Grab Interactable — o componente que torna um objeto agarrável em VR e também cuida de soltar e arremessar com física.`,
    `Rigidbody — o componente que dá física a um objeto: peso, gravidade e velocidade, necessário para o arremesso funcionar.`,
    `Attach Transform — o ponto de encaixe que define onde e como o objeto gruda na mão quando agarrado.`,
    `Throw Velocity Scale — o multiplicador que decide com quanta força o objeto sai da mão ao ser solto; controla a força do arremesso.`,
    `Movement Type — a forma como o objeto preso se move (Instantaneous, Kinematic ou Velocity Tracking); afeta o peso e a física do arremesso.`,
    `Light component — o componente do Unity que emite luz na cena; é o que liga e desliga para simular a lanterna.`,
  ],
  treinamento: `## O que o professor precisa saber

Você não precisa dominar VR para dar esta aula, mas precisa entender quatro ideias. Primeira: depois que o jogador agarra um objeto, o controle continua mandando eventos, e o evento de apertar o gatilho se chama activated. Segunda: para responder a esse evento, escrevemos um script em C# com um método público que liga ou desliga algo, e ligamos esse método ao evento pela janela Inspector, sem digitar conexões no código. Terceira: arremessar é transferir a velocidade da mão para o objeto, e isso só funciona se o objeto tiver um Rigidbody. Quarta: a qualidade do arremesso depende de três ajustes do XR Grab Interactable: Movement Type, Throw Velocity Scale e o Attach Transform. Antes da aula, faça o caminho completo uma vez e arremesse a bola algumas vezes para sentir os valores.

## Passo a passo da aula (ritmo 10/15/25/10, com o código exato)

10 min, aquecimento e revisão. Pergunte: "Na aula passada, como o objeto grudava na mão?". Conduza até o XR Grab Interactable. Faça a ponte: "Hoje o objeto vai obedecer ao gatilho e vai voar quando soltarmos."

15 min, conteúdo novo guiado. No projetor, abra a cena de exemplo. Selecione a lanterna e mostre o objeto Light filho. Crie um script C# chamado Lanterna (botão direito na pasta, Create, C# Script), abra e digite exatamente:

using UnityEngine;

public class Lanterna : MonoBehaviour
{
    public Light luz;

    public void Alternar()
    {
        luz.enabled = !luz.enabled;
    }

    public void Ligar()
    {
        luz.enabled = true;
    }

    public void Desligar()
    {
        luz.enabled = false;
    }
}

Explique: a variável luz guarda a Light; Alternar inverte o estado (liga se estava apagada e vice-versa). Arraste o script para a lanterna, e no Inspector arraste o objeto Light para o campo "Luz". Agora no XR Grab Interactable da lanterna, abra "Interactable Events", encontre "Activated", clique no mais, arraste a lanterna para o campo de objeto e escolha Lanterna, Alternar.

25 min, mão na massa. Cada aluno repete: cria o script, conecta a Light, liga o método Alternar ao evento Activated. Testa no simulador ou headset: pega a lanterna, aperta o gatilho, a luz acende. Depois passa para a física: seleciona a bola, no XR Grab Interactable troca o Movement Type para Velocity Tracking, ajusta o Throw Velocity Scale (comece em 1.5) e arremessa. Quem terminar move o Attach Transform para a bola encaixar melhor na palma.

10 min, desafio e compartilhar. Cada aluno arremessa a bola para um colega e ajusta o Throw Velocity Scale até o arremesso parecer natural. Quem quiser, descreve ao Claude o problema ("a bola voa longe demais") e aplica a sugestão. Façam uma rodada rápida mostrando a lanterna acendendo.

## Como explicar de forma clara (linguagem para a idade)

Use imagens do dia a dia. Diga: "O evento Activated é como um interruptor no gatilho: quando você aperta, ele avisa o jogo." Para o script: "O método Alternar é um botão de liga e desliga; cada aperto troca o estado." Para a física: "Soltar não é largar, é jogar; a mão passa a velocidade dela para a bola." Para o Throw Velocity Scale: "É o volume da força: número maior, arremesso mais forte." Sempre ligue ao objetivo: "Usar e arremessar são duas interações que vão entrar na sua cena final."

## Erros comuns e como ajudar

O erro mais comum é o aluno esquecer de arrastar a Light para o campo Luz no Inspector; aí dá erro de NullReference ao apertar o gatilho. Mostre como conferir o campo preenchido. Outro erro é ligar o método ao evento errado (Select em vez de Activated); reforce que Activated é o gatilho. Muitos digitam o nome do método com letra trocada e ele some da lista de eventos; lembre que C# diferencia maiúsculas e que o método precisa ser public e sem parâmetros. Na física, é comum a bola cair sem força porque o objeto não tem Rigidbody ou está como Kinematic; confira o Rigidbody e o Movement Type. Se o arremesso fica fraco ou exagerado, ajuste o Throw Velocity Scale aos poucos em vez de mexer em tudo de uma vez.`,
  exercicios: [
    {
      titulo: `Conhecendo o evento Activated`,
      tipo: `conceitual`,
      tempo: `8 minutos`,
      guiaProfessor: `Antes de programar, garanta que os alunos entendam a diferença entre agarrar e usar. Faça perguntas orais e corrija confusões entre o evento Select (agarrar) e o evento Activated (apertar o gatilho).`,
      atividade: `Responda com suas palavras: qual evento o XR Interaction Toolkit dispara quando o jogador aperta o gatilho segurando um objeto? E qual evento é disparado só de agarrar? Dê um exemplo de ação que faria sentido ligar ao evento de apertar o gatilho.`,
      gabarito: `O evento disparado ao apertar o gatilho é o Activated. O evento disparado ao agarrar é o Select. Exemplos válidos de ações ligadas ao Activated: acender uma lanterna, disparar uma arma, soltar um efeito, abrir um menu na mão. O ponto-chave que o aluno deve mostrar é que agarrar (Select) e usar (Activated) são momentos diferentes, e o gatilho corresponde ao Activated.`,
    },
    {
      titulo: `Escrevendo o script Lanterna em C#`,
      tipo: `programação`,
      tempo: `12 minutos`,
      guiaProfessor: `Deixe o código do arquivo de exemplo à vista para evitar erros de digitação. Reforce que o método precisa ser public e sem parâmetros, senão ele não aparece na lista de eventos do Inspector.`,
      atividade: `Crie um script C# chamado Lanterna. Ele deve ter uma variável pública do tipo Light e um método público chamado Alternar que liga a luz se estiver apagada e apaga se estiver acesa. Salve o arquivo.`,
      gabarito: `Código-solução:

using UnityEngine;

public class Lanterna : MonoBehaviour
{
    public Light luz;

    public void Alternar()
    {
        luz.enabled = !luz.enabled;
    }
}

A variável pública luz aparece no Inspector para receber a Light. O método Alternar inverte luz.enabled com o operador de negação (!): se estava true vira false e vice-versa. O método é public e sem parâmetros para poder ser ligado ao evento Activated. Se o aluno usar luz.enabled = true direto, lembre que isso só liga; o pedido era alternar.`,
    },
    {
      titulo: `Ligando o gatilho à ação no Inspector`,
      tipo: `prática na ferramenta`,
      tempo: `12 minutos`,
      guiaProfessor: `Acompanhe a conexão do evento. Os dois pontos de falha são: esquecer de arrastar a Light para o campo Luz, e ligar o método ao evento Select em vez de Activated. Teste com cada aluno no simulador ou headset.`,
      atividade: `Arraste o script Lanterna para o objeto lanterna. No Inspector, arraste o objeto Light para o campo Luz. No XR Grab Interactable, em Interactable Events, no evento Activated, adicione uma chamada para Lanterna, Alternar. Teste: pegue a lanterna e aperte o gatilho.`,
      gabarito: `Caminho correto: script Lanterna no objeto; campo Luz preenchido com a Light filha; em XR Grab Interactable, Interactable Events, Activated, botão de mais, arrastar a lanterna para o campo de objeto e escolher Lanterna, Alternar. Resultado esperado: ao apertar o gatilho segurando a lanterna, a luz acende; ao apertar de novo, apaga. Se der erro de NullReference, o campo Luz está vazio; arraste a Light para ele. Se nada acontecer, o método provavelmente foi ligado ao evento Select; mova a ligação para o Activated.`,
    },
    {
      titulo: `Ajustando a física do arremesso`,
      tipo: `prática na ferramenta`,
      tempo: `13 minutos`,
      guiaProfessor: `Garanta que a bola tenha Rigidbody com Use Gravity ligado. Oriente a mexer um valor por vez. Comece com Movement Type em Velocity Tracking e Throw Velocity Scale em torno de 1.5, depois deixe a turma calibrar.`,
      atividade: `Selecione a bola. Confirme que ela tem um Rigidbody com Use Gravity marcado. No XR Grab Interactable, mude o Movement Type para Velocity Tracking. Ajuste o Throw Velocity Scale (comece em 1.5). Arremesse a bola algumas vezes e calibre o valor até o arremesso parecer natural.`,
      gabarito: `Configuração esperada: bola com Rigidbody e Use Gravity ligado; XR Grab Interactable com Movement Type em Velocity Tracking; Throw Velocity Scale calibrado, normalmente entre 1.0 e 2.0. Sintomas e correções: bola cai morta no chão indica falta de Rigidbody ou Throw Velocity Scale baixo demais; bola voa longe demais indica Throw Velocity Scale alto demais, reduza aos poucos; bola sente pesada ou atrasada pode ser Movement Type errado, prefira Velocity Tracking para arremesso. Não existe um único número certo: o gabarito é o aluno justificar o valor pelo comportamento observado.`,
    },
    {
      titulo: `Mini desafio: depurar o arremesso com o Claude`,
      tipo: `desafio`,
      tempo: `15 minutos`,
      guiaProfessor: `Este exercício fecha a aula e treina a depuração. O valor está em o aluno descrever bem o problema e escolher a configuração certa, não em copiar a resposta do Claude. Cheque o checklist com cada aluno: usar dispara ação, lanterna acende, bola arremessada bem.`,
      atividade: `Escolha um problema real do seu arremesso (por exemplo, a bola voa longe demais ou cai sem força). Descreva o comportamento ao Claude com detalhes (o que você vê, o Movement Type e o Throw Velocity Scale atuais) e peça qual configuração ajustar. Aplique a sugestão, teste e anote o que mudou.`,
      gabarito: `Resposta forte: o aluno descreve o sintoma com precisão, informa os valores atuais (Movement Type e Throw Velocity Scale) e diz se há Rigidbody. Exemplos de boa depuração: "voa longe demais, reduzi o Throw Velocity Scale de 3 para 1.5 e melhorou"; "caía sem força, descobri que faltava Rigidbody na bola, adicionei e o arremesso voltou"; "estava pesada, troquei o Movement Type para Velocity Tracking". Checklist concluído: apertar o gatilho acende a lanterna e a bola é arremessada com física convincente. Resposta fraca a melhorar: pedir ajuda só com "não funciona" sem detalhes; oriente o aluno a sempre descrever o que vê e os valores atuais ao Claude.`,
    },
  ],
};
