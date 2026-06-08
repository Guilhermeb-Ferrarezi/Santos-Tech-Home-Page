import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 7,
  titulo: "Polimento e Som Imersivo",
  semana: "Semana 4",
  duracao: "1 hora",
  objetivo: `Refinar a experiência de Realidade Virtual adicionando som espacial, feedback visual e pequenos detalhes que aumentam a sensação de presença, corrigindo os últimos bugs e otimizando o desempenho para a build de entrega.`,
  descricao: `Nesta aula o aluno deixa de construir coisas novas e passa a polir o que já existe. Depois de testar a experiência no dispositivo na Aula 6, ele agora sabe o que funciona, o que trava e o que quebra a imersão. Hoje o foco é transformar uma cena que "funciona" em uma cena que "convence": som que vem da direção certa, luzes e brilhos que respondem ao toque das mãos e um desempenho suave, sem engasgos que enjoam quem está usando o óculos.

O coração da aula é o som espacial. Em Realidade Virtual, ouvir um som vindo da esquerda e virar a cabeça para encontrar a fonte é uma das sensações mais fortes de presença. No Unity isso é feito com o componente AudioSource configurado como som 3D (espacial), preso a um objeto do mundo. Quando o jogador se aproxima, o som fica mais alto; quando se afasta, fica mais baixo. O aluno vai aprender a colocar o som no lugar certo da cena e a ajustá-lo para que pareça realmente vir daquele objeto.

Além do som, a aula trata do feedback visual e tátil. Quando o aluno toca, agarra ou ativa algo, a experiência precisa responder: a cor muda, um brilho aparece, o controle vibra. Esse retorno imediato diz ao cérebro "isso é real, eu causei isso". Vamos escrever um trecho curto de código em C# que muda a cor de um objeto quando a mão se aproxima, dando ao aluno uma ferramenta simples e poderosa de polimento.

Por fim, o aluno prepara a entrega. Ele revisa a lista de bugs do teste, corrige os mais importantes, faz a cena rodar suave e gera a build final que será apresentada na Aula 8. O foco do mês é uma experiência VR própria, então tudo o que for polido hoje serve diretamente ao entregável. A regra de ouro da aula: pequenos detalhes, somados, fazem uma experiência parecer profissional.`,
  materiais: [
    `Computadores com Unity instalado e o pacote XR Interaction Toolkit configurado, um por aluno, com o projeto VR das aulas anteriores aberto`,
    `Óculos VR (Meta Quest ou equivalente) com cabo de conexão ou modo sem fio para testar o som e o feedback na cabeça`,
    `Projetor ou TV para o professor demonstrar os passos do Unity em tela grande`,
    `Pasta de áudios de exemplo livres de direitos (vento.wav, agua-pingando.wav, maquina-zumbido.wav) para o som espacial`,
    `Arquivo de exemplo do Unity com uma cena VR simples e um objeto interativo já pronto, para quem precisar de um ponto de partida`,
    `Lista impressa de bugs e checklist de polimento (som, brilho, vibração, desempenho) para cada aluno marcar`,
    `Fones de ouvido para os alunos que forem ajustar áudio sem colocar o óculos a todo momento`,
  ],
  conceitosChave: [
    `Presença — a sensação de "estar de verdade" dentro do mundo virtual; detalhes de som e feedback aumentam essa sensação.`,
    `Som espacial (áudio 3D) — som que muda de volume e direção conforme a posição do jogador, como se viesse de um ponto fixo do mundo.`,
    `AudioSource — o componente do Unity que toca um som a partir de um objeto; configurado como 3D, ele vira som espacial.`,
    `Spatial Blend — controle do AudioSource que vai de 2D (som plano, igual em todo lugar) a 3D (som que vem de um ponto da cena).`,
    `Feedback visual — resposta que o jogo dá ao jogador (mudar cor, acender brilho) para confirmar que a ação aconteceu.`,
    `Háptico (vibração) — o tremor do controle de VR que dá retorno físico quando o jogador toca ou agarra algo.`,
    `Build — o arquivo final do aplicativo, gerado pelo Unity, que roda no óculos sem precisar do editor aberto.`,
  ],
  treinamento: `## O que o professor precisa saber

Você não precisa dominar Realidade Virtual para dar esta aula. Precisa entender três ideias. Primeira: som espacial no Unity é um AudioSource com o Spatial Blend no máximo (3D), preso a um objeto da cena. Quanto mais perto o jogador chega, mais alto o som fica. Segunda: feedback é o jogo responder ao jogador, e a forma mais simples é trocar a cor de um objeto por código quando a mão chega perto. Terceira: polimento é corrigir bugs pequenos e fazer a cena rodar suave, não criar coisas novas. Antes da aula, abra o projeto, arraste um áudio para um objeto, mude o Spatial Blend para 1 (3D) e dê Play uma vez para ouvir a diferença. Isso já te dá segurança.

## Passo a passo da aula (ritmo 10/15/25/10, com o código exato)

10 min, aquecimento e revisão. Coloque o óculos em um aluno e pergunte à turma: "O que faria isso parecer mais real?" Conduza até as respostas: som, brilho, vibração e fluidez. Mostre a lista de bugs do teste da Aula 6 e escolham juntos os dois ou três mais importantes para corrigir hoje.

15 min, conteúdo novo guiado. No Unity, selecione um objeto da cena (por exemplo, uma fonte de água). No Inspector, clique em "Add Component" e adicione "Audio Source". Arraste um áudio da pasta (agua-pingando.wav) para o campo "AudioClip". Marque "Play On Awake" e "Loop". Agora encontre o controle "Spatial Blend" e arraste o slider de 2D para 3D (valor 1). Dê Play: ande perto e longe do objeto e mostre o volume mudando. Em seguida, ensine feedback por código. Crie um script chamado BrilhoAoAproximar e cole:

using UnityEngine;

public class BrilhoAoAproximar : MonoBehaviour
{
    public Color corNormal = Color.white;
    public Color corDestaque = Color.yellow;
    private Renderer rend;

    void Start()
    {
        rend = GetComponent<Renderer>();
        rend.material.color = corNormal;
    }

    void OnTriggerEnter(Collider other)
    {
        rend.material.color = corDestaque;
    }

    void OnTriggerExit(Collider other)
    {
        rend.material.color = corNormal;
    }
}

Explique: Start guarda o Renderer (quem desenha o objeto) e deixa a cor normal. OnTriggerEnter roda quando a mão entra na zona do objeto e troca para a cor de destaque. OnTriggerExit volta ao normal quando a mão sai. Para funcionar, o objeto precisa de um Collider com "Is Trigger" marcado, e a mão precisa de um Collider também.

25 min, mão na massa. Cada aluno adiciona pelo menos um som espacial (AudioSource em 3D) a um objeto do seu mundo e aplica o script BrilhoAoAproximar em um objeto interativo. Quem terminar corrige um bug da lista e tenta deixar a cena mais leve, desligando sombras pesadas em luzes secundárias. Circule pela sala conferindo o Spatial Blend em 3D e o Collider como Trigger.

10 min, desafio e compartilhar. Cada aluno coloca o óculos por trinta segundos e mostra um detalhe novo ao colega: o som que vem de um lado ou o objeto que brilha ao toque. Faça uma rodada: cada um diz qual detalhe deixou a experiência mais real.

## Como explicar de forma clara (linguagem para a idade)

Use comparações concretas. Para som espacial: "É como uma música tocando numa caixa de som no canto da sala; quanto mais perto você chega, mais alto fica, e você sabe de onde vem." Para feedback: "Quando você aperta um botão de elevador e ele acende, você sabe que funcionou. No seu mundo, o objeto brilhar é esse aviso." Para presença: "Presença é quando você esquece que está usando um óculos. Cada detalhe pequeno ajuda nisso." Para Spatial Blend, diga: "Em 2D o som está na sua cabeça; em 3D o som está no mundo." Sempre ligue ao projeto do aluno: "Que som existe no seu mundo? De onde ele vem?"

## Erros comuns e como ajudar

O erro mais comum é o som tocar igual em todo lugar: quase sempre o Spatial Blend ficou em 2D. Mande arrastar para 3D (valor 1). Outro erro: o som não toca; geralmente faltou marcar "Play On Awake" ou o AudioClip está vazio. No script, se a cor não muda, falta o Collider com "Is Trigger" marcado no objeto, ou a mão não tem Collider. Se aparecer erro de Renderer nulo, o objeto não tem material visível; coloque um material simples. Por fim, muitos querem adicionar coisas novas em vez de polir; lembre que hoje a missão é refinar e corrigir, não recomeçar.`,
  exercicios: [
    {
      titulo: `Som que vem do mundo`,
      tipo: `prática na ferramenta`,
      tempo: `8 minutos`,
      guiaProfessor: `Garanta que cada aluno tenha um objeto selecionado e um áudio da pasta de exemplo. Reforce que o segredo é o Spatial Blend em 3D e os campos Play On Awake e Loop marcados.`,
      atividade: `Escolha um objeto do seu mundo VR. Adicione um Audio Source, arraste um áudio da pasta para o AudioClip, marque Play On Awake e Loop e ponha o Spatial Blend em 3D. Dê Play e ande perto e longe para ouvir o volume mudar.`,
      gabarito: `O som deve ficar mais alto perto do objeto e mais baixo longe dele. Caminho correto: selecionar o objeto, Add Component, Audio Source, arrastar o áudio para AudioClip, marcar Play On Awake e Loop e arrastar o Spatial Blend de 2D para 3D (valor 1). Se o som tocar igual em todo lugar, o Spatial Blend ainda está em 2D; se não tocar, falta o AudioClip ou o Play On Awake.`,
    },
    {
      titulo: `Brilho ao aproximar a mão`,
      tipo: `programação em C#`,
      tempo: `10 minutos`,
      guiaProfessor: `Confirme que o objeto tem um Collider com Is Trigger marcado e que a mão também tem Collider. Mostre que OnTriggerEnter e OnTriggerExit só funcionam com Trigger.`,
      atividade: `Aplique o script BrilhoAoAproximar em um objeto interativo do seu mundo. Marque Is Trigger no Collider do objeto. Teste aproximando a mão: o objeto deve mudar de cor ao tocar e voltar ao normal ao sair.`,
      gabarito: `O objeto deve ficar amarelo (corDestaque) quando a mão entra e voltar a branco (corNormal) quando a mão sai. Código-solução:

using UnityEngine;

public class BrilhoAoAproximar : MonoBehaviour
{
    public Color corNormal = Color.white;
    public Color corDestaque = Color.yellow;
    private Renderer rend;

    void Start()
    {
        rend = GetComponent<Renderer>();
        rend.material.color = corNormal;
    }

    void OnTriggerEnter(Collider other)
    {
        rend.material.color = corDestaque;
    }

    void OnTriggerExit(Collider other)
    {
        rend.material.color = corNormal;
    }
}

Se a cor não muda, falta o Collider com Is Trigger no objeto ou a mão não tem Collider.`,
    },
    {
      titulo: `Caça aos bugs em dupla`,
      tipo: `em dupla`,
      tempo: `12 minutos`,
      guiaProfessor: `Forme duplas. Use a lista de bugs do teste da Aula 6. Um aluno descreve o bug, o outro tenta reproduzir e corrigir; depois trocam. Foque em bugs pequenos e corrigíveis em poucos minutos.`,
      atividade: `Em dupla, peguem a lista de bugs da experiência. Escolham dois bugs. Para cada um, descrevam quando ele acontece, corrijam no Unity e testem de novo para confirmar que sumiu. Anotem o que era e como resolveram.`,
      gabarito: `Cada bug deve estar corrigido e testado novamente. Exemplos válidos: "O objeto atravessava o chão; faltava um Collider no chão, adicionamos e parou"; "O som não tocava; o AudioClip estava vazio, arrastamos o áudio e voltou." A dupla deve registrar o problema e a solução. Resposta fraca a melhorar: marcar o bug como resolvido sem testar de novo.`,
    },
    {
      titulo: `Vibração do controle (háptico)`,
      tipo: `desafio`,
      tempo: `10 minutos`,
      guiaProfessor: `Este é um desafio para quem quer ir além. Mostre o método SendHapticImpulse do XR Interaction Toolkit. Explique que a vibração dá retorno físico ao toque. Aceite que nem todos concluam; o importante é entender a ideia.`,
      atividade: `Adicione vibração quando a mão tocar um objeto. Use o script abaixo como base e complete a chamada de vibração no lugar do brilho. Teste no óculos e sinta o controle tremer ao tocar.`,
      gabarito: `O controle deve vibrar ao tocar o objeto. Código-solução usando o XR Interaction Toolkit:

using UnityEngine;
using UnityEngine.XR.Interaction.Toolkit;

public class VibrarAoTocar : MonoBehaviour
{
    public XRBaseController controle;
    public float forca = 0.5f;
    public float duracao = 0.2f;

    void OnTriggerEnter(Collider other)
    {
        if (controle != null)
        {
            controle.SendHapticImpulse(forca, duracao);
        }
    }
}

O campo controle recebe o controle da mão no Inspector. SendHapticImpulse recebe a força (de 0 a 1) e a duração em segundos. Se não vibrar, o campo controle está vazio ou o teste foi feito no editor sem óculos.`,
    },
    {
      titulo: `Mini projeto: cena polida e build de entrega`,
      tipo: `projeto curto`,
      tempo: `15 minutos`,
      guiaProfessor: `Use o checklist de polimento (som, brilho, vibração opcional, desempenho). Acompanhe a geração da build em File, Build Settings. Lembre de escolher a plataforma Android para Meta Quest e salvar o arquivo com o nome do aluno.`,
      atividade: `Aplique o checklist na sua experiência: pelo menos um som espacial, um objeto com brilho ao toque e nenhum bug grave. Deixe a cena rodando suave. Depois, gere a build final pelo menu File, Build Settings e salve o arquivo com o seu nome para a entrega da Aula 8.`,
      gabarito: `A cena entregue deve ter ao menos um som espacial em 3D, um objeto que dá feedback ao toque e estar livre de bugs graves, rodando suave. A build deve ser gerada por File, Build Settings, com a plataforma correta selecionada (Android para Meta Quest) e o arquivo salvo com o nome do aluno. Se a build falhar, conferir a plataforma selecionada e se a cena foi adicionada na lista de Scenes In Build. O entregável final é o arquivo da build pronto para a Aula 8.`,
    },
  ],
};
