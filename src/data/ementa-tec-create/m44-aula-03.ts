import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 3,
  titulo: "Física e Colisões com Rigidbody",
  semana: "Semana 2",
  duracao: "1 hora",
  objetivo: `Aplicar o sistema de física do Unity usando Rigidbody, Colliders e triggers para fazer objetos caírem com gravidade e detectar colisões que acionam eventos como dano e coleta.`,
  descricao: `Nesta aula o aluno descobre como dar vida real aos objetos do jogo usando o motor de física do Unity. Até agora, nas aulas anteriores, o personagem se movia porque o aluno escreveu um script que mudava a posição na mão. Hoje a lógica muda: em vez de mandar o objeto andar passo a passo, o aluno entrega o objeto ao motor de física e deixa que a gravidade, o impulso e as colisões cuidem do movimento de forma natural, como acontece no mundo real.

A peça central é o componente Rigidbody. Quando você adiciona um Rigidbody a um objeto, está dizendo ao Unity: este objeto obedece às leis da física, pode cair, pode ser empurrado e pode bater em outros. Junto dele entram os Colliders, que são as formas invisíveis de contato que envolvem cada objeto. Sem um Collider, dois objetos atravessam um ao outro como fantasmas; com Colliders, eles se encostam, se empilham e se chocam. O aluno vai entender que o Rigidbody cuida do movimento físico e o Collider cuida do contato, e que os dois trabalham juntos.

A segunda metade da aula é sobre detectar esses contatos no código. O Unity avisa o script toda vez que algo encosta em algo, e o aluno aprende a ouvir esse aviso com duas funções especiais: OnCollisionEnter, que dispara quando dois objetos sólidos batem de verdade, e OnTriggerEnter, que dispara quando um objeto atravessa uma área marcada como Is Trigger, sem empurrar nada. Com isso o aluno consegue programar eventos do jogo: tirar pontos de vida quando o jogador encosta num inimigo, somar pontos quando ele passa por uma moeda, ou abrir uma porta quando ele pisa num gatilho.

Ao final da aula, cada aluno terá pelo menos um objeto caindo com gravidade graças ao Rigidbody, um chão com Collider que o segura, e dois eventos funcionando no seu jogo: uma colisão sólida que causa um efeito (como empurrar ou dar dano) e um trigger que coleta um item e o faz desaparecer. Tudo isso entra direto no jogo que está sendo montado ao longo do mês, deixando o projeto mais perto da entrega final.`,
  materiais: [
    `Computadores com Unity instalado e um editor de código C# (Visual Studio ou VS Code), um por aluno`,
    `Projetor ou TV para o professor demonstrar os painéis do Unity (Hierarchy, Inspector, Scene) em tela grande`,
    `Arquivo de exemplo: cena Unity com um plano (chão), uma esfera e um cubo pequeno já posicionados para virar item de coleta`,
    `Script de exemplo pronto chamado ColetorDeItens.cs para o professor mostrar como modelo`,
    `Quadro branco para desenhar a diferença entre colisão sólida e trigger (atravessar a área)`,
    `Mouse com scroll para facilitar a navegação na janela Scene do Unity`,
    `Folha impressa com o resumo dos componentes Rigidbody e Collider e das funções de detecção de colisão`,
  ],
  conceitosChave: [
    `Física do Unity — o sistema que faz objetos se moverem sozinhos seguindo regras parecidas com as do mundo real, como gravidade e impulso.`,
    `Rigidbody — componente que entrega o objeto ao motor de física, permitindo que ele caia, seja empurrado e responda a forças.`,
    `Collider — forma invisível de contato em volta do objeto; sem ela os objetos se atravessam, com ela eles se encostam e se chocam.`,
    `Gravidade — força que puxa o objeto com Rigidbody para baixo, fazendo-o cair de forma automática.`,
    `Is Trigger — opção do Collider que faz o objeto deixar passar em vez de bloquear, servindo como área de detecção.`,
    `OnCollisionEnter — função chamada pelo Unity quando dois objetos sólidos batem de verdade um no outro.`,
    `OnTriggerEnter — função chamada pelo Unity quando um objeto entra numa área marcada como Is Trigger, sem empurrar nada.`,
  ],
  treinamento: `## O que o professor precisa saber

O Unity tem um motor de física embutido que faz objetos se moverem sozinhos, como acontece no mundo real. Para usar isso, dois componentes são essenciais. O primeiro é o Rigidbody: ao adicioná-lo a um objeto, esse objeto passa a obedecer à gravidade, pode ser empurrado e responde a forças. O segundo é o Collider: é a forma invisível de contato que envolve o objeto. Sem Collider, dois objetos se atravessam; com Collider, eles se encostam. A regra simples para os alunos: Rigidbody cuida do movimento físico, Collider cuida do contato.

Há dois tipos de evento de contato. Quando dois objetos sólidos batem de verdade, o Unity chama a função OnCollisionEnter no script. Quando você marca a caixinha Is Trigger num Collider, esse objeto deixa os outros passarem por dentro dele, e o Unity chama a função OnTriggerEnter. Use colisão sólida para coisas que empurram ou param (paredes, dano por choque) e trigger para áreas que detectam sem bloquear (coletar moeda, ativar um gatilho). Antes da aula, abra a cena de exemplo e teste arrastar a esfera para cima e dar Play para vê-la cair.

## Passo a passo da aula

Aquecimento (10 min): pergunte como o personagem se movia nas aulas anteriores (script mudando a posição na mão). No projetor, solte um objeto sem Rigidbody e mostre que ele fica parado no ar. Pergunte por que ele não cai. Conduza para a ideia de que falta entregar o objeto à física.

Conteúdo novo guiado (15 min): com a esfera selecionada na Hierarchy, vá ao painel Inspector, clique em Add Component, digite Rigidbody e adicione. Dê Play: a esfera cai e atravessa o chão. Selecione o chão, Add Component, Box Collider (ou já existe um). Dê Play de novo: agora a esfera para no chão. Explique Rigidbody (cai) e Collider (segura). Agora mostre como detectar coleta. Selecione o cubo pequeno, no seu Collider marque a caixa Is Trigger. Crie um script ColetorDeItens.cs e escreva, sem usar interpolação de texto:

using UnityEngine;

public class ColetorDeItens : MonoBehaviour
{
    public int pontos = 0;

    void OnTriggerEnter(Collider outro)
    {
        if (outro.CompareTag("Item"))
        {
            pontos = pontos + 1;
            Debug.Log("Coletado! Pontos: " + pontos);
            Destroy(outro.gameObject);
        }
    }
}

Explique linha por linha: OnTriggerEnter roda quando algo entra na área; outro.CompareTag("Item") confere se o que entrou tem a tag Item; pontos = pontos + 1 soma um ponto; Debug.Log mostra o número usando + para juntar texto e número; Destroy faz o item sumir. Marque o cubo com a tag Item (no topo do Inspector, Tag, Add Tag, crie Item). Arraste o script para o jogador.

Mão na massa (25 min): cada aluno adiciona um Rigidbody a um objeto do seu jogo e um Collider no chão, testa a queda, depois cria uma área de coleta com Is Trigger e o script para somar pontos e destruir o item. Circule pela sala conferindo Play e o Console.

Desafio e compartilhar (10 min): quem terminar cria um segundo evento com OnCollisionEnter que tire um ponto de vida ao bater num obstáculo. Dois alunos mostram a coleta funcionando no projetor.

## Como explicar de forma clara

Diga: Rigidbody é como tirar o objeto do "modo congelado" e deixá-lo viver na física, então ele cai igual a uma bola que você solta da mão. O Collider é o "corpo" invisível: sem corpo, os objetos passam um pelo outro como fantasmas. Para o trigger, use a imagem de uma porta automática de mercado: você atravessa, nada te empurra, mas um sensor percebe que você passou e abre a porta. Já a colisão sólida é como esbarrar numa parede de verdade: ela te para. Repita a dupla de funções como dois ouvidos do jogo: OnCollisionEnter ouve as batidas, OnTriggerEnter ouve quem atravessou a área.

## Erros comuns e como ajudar

Erro 1: o objeto cai e atravessa o chão; falta um Collider no chão, adicione um Box Collider. Erro 2: o trigger não dispara; confira se a caixa Is Trigger está marcada e se pelo menos um dos dois objetos tem Rigidbody. Erro 3: o script some o item errado; lembre de marcar a tag Item e usar CompareTag. Erro 4: o aluno escreve OnTriggerEnter mas usa colisão sólida (ou o contrário); relembre que trigger é atravessar e colisão é bater. Erro 5: erro de digitação no nome da função (letra maiúscula errada), pois o Unity só reconhece OnTriggerEnter e OnCollisionEnter exatamente assim. Erro 6: o nome da classe no arquivo é diferente do nome do arquivo .cs; eles precisam ser iguais para o script funcionar.`,
  exercicios: [
    {
      titulo: `Por que ele não cai?`,
      tipo: `roda de conversa`,
      tempo: `6 min`,
      guiaProfessor: `No projetor, mostre um objeto parado no ar sem Rigidbody e o mesmo objeto caindo com Rigidbody. Conduza a turma a explicar a diferença com suas próprias palavras antes de dar a resposta.`,
      atividade: `Observe os dois objetos que o professor mostra: um fica parado no ar e o outro cai quando você dá Play. Diga em voz alta qual componente foi adicionado ao que cai e o que esse componente faz.`,
      gabarito: `O componente adicionado é o Rigidbody. Ele entrega o objeto ao motor de física do Unity, fazendo a gravidade puxá-lo para baixo, ou seja, o objeto passa a cair sozinho. Acerta quem nomeia o Rigidbody e explica que ele liga a física (gravidade) no objeto.`,
    },
    {
      titulo: `Caindo e parando no chão`,
      tipo: `prática na ferramenta`,
      tempo: `8 min`,
      guiaProfessor: `Acompanhe cada aluno. Mostre o caminho Inspector, Add Component, Rigidbody para o objeto que cai, e Add Component, Box Collider para o chão. Reforce que sem o Collider do chão o objeto atravessa.`,
      atividade: `No seu jogo, escolha um objeto, adicione um Rigidbody pelo Inspector e dê Play para vê-lo cair. Depois adicione um Box Collider ao chão e dê Play de novo, conferindo que o objeto agora para em cima do chão.`,
      gabarito: `O aluno deve ter um objeto com Rigidbody caindo e um chão com Collider que o segura. Caminho correto: selecionar o objeto, Inspector, Add Component, Rigidbody; selecionar o chão, Add Component, Box Collider. Acerta quem, ao dar Play, vê o objeto cair e parar sobre o chão em vez de atravessá-lo.`,
    },
    {
      titulo: `Colisão ou trigger?`,
      tipo: `exercício no papel`,
      tempo: `7 min`,
      guiaProfessor: `Relembre no quadro a diferença: colisão sólida é bater e ser parado; trigger é atravessar uma área que apenas detecta. Leia cada situação em voz alta antes de os alunos responderem.`,
      atividade: `Para cada situação, escreva no papel se você usaria uma COLISÃO sólida (OnCollisionEnter) ou um TRIGGER (OnTriggerEnter): 1) o jogador esbarra numa parede e é parado; 2) o jogador passa por cima de uma moeda e ela some; 3) o jogador entra numa área que abre uma porta; 4) uma caixa empurra outra caixa.`,
      gabarito: `1) Colisão (OnCollisionEnter), pois a parede para o jogador. 2) Trigger (OnTriggerEnter), pois ele atravessa a moeda que apenas detecta. 3) Trigger (OnTriggerEnter), pois é uma área de detecção que não bloqueia. 4) Colisão (OnCollisionEnter), pois uma caixa empurra a outra de verdade. Acerta quem marca colisão para os casos de bloqueio/empurrão e trigger para os casos de atravessar e detectar.`,
    },
    {
      titulo: `Coletando o item com código`,
      tipo: `prática na ferramenta`,
      tempo: `12 min`,
      guiaProfessor: `Ajude os alunos a marcar Is Trigger no Collider do item, criar a tag Item e arrastar o script para o jogador. Lembre que o nome do arquivo .cs e o nome da classe devem ser iguais e que as funções têm nome exato.`,
      atividade: `Crie um item com Collider marcado como Is Trigger e a tag Item. Escreva um script que, quando o jogador entrar no item, some 1 ponto, mostre o total no Console e destrua o item. Dê Play e atravesse o item para testar.`,
      gabarito: `Solução em C# (arquivo ColetorDeItens.cs):

using UnityEngine;

public class ColetorDeItens : MonoBehaviour
{
    public int pontos = 0;

    void OnTriggerEnter(Collider outro)
    {
        if (outro.CompareTag("Item"))
        {
            pontos = pontos + 1;
            Debug.Log("Coletado! Pontos: " + pontos);
            Destroy(outro.gameObject);
        }
    }
}

Acerta quem: marca Is Trigger no item, cria e aplica a tag Item, coloca o script no jogador e, ao atravessar o item, vê o item sumir e o número de pontos aumentar no Console.`,
    },
    {
      titulo: `Dano ao bater no obstáculo`,
      tipo: `desafio`,
      tempo: `12 min`,
      guiaProfessor: `Este é o desafio crescente: agora o aluno usa colisão sólida em vez de trigger. Garanta que o obstáculo tenha a tag Obstaculo e um Collider sólido (Is Trigger desmarcado). Oriente a comparar com o script de coleta para perceber as diferenças.`,
      atividade: `Crie um obstáculo sólido com a tag Obstaculo. Escreva um script no jogador que, ao bater no obstáculo, tire 1 ponto de vida e mostre a vida restante no Console. Comece a vida em 3. Dê Play e bata no obstáculo para testar.`,
      gabarito: `Solução em C# (arquivo VidaDoJogador.cs):

using UnityEngine;

public class VidaDoJogador : MonoBehaviour
{
    public int vida = 3;

    void OnCollisionEnter(Collision colisao)
    {
        if (colisao.gameObject.CompareTag("Obstaculo"))
        {
            vida = vida - 1;
            Debug.Log("Tomou dano! Vida: " + vida);
        }
    }
}

Acerta quem usa OnCollisionEnter (e não trigger), confere a tag Obstaculo com CompareTag, subtrai 1 da vida e mostra o valor no Console. Diferenças-chave em relação à coleta: aqui o Collider é sólido (Is Trigger desmarcado), a função é OnCollisionEnter e o parâmetro é do tipo Collision, acessando o objeto por colisao.gameObject.`,
    },
  ],
};
