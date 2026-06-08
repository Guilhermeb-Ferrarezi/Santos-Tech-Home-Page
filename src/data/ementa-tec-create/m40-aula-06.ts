import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 6,
  titulo: "Testando no Dispositivo",
  semana: "Semana 3",
  duracao: "1 hora",
  objetivo: `Levar a experiência VR do computador para o óculos real, observar conforto e clareza das interações e aplicar ajustes rápidos de escala, velocidade e posicionamento com base no que o aluno sentir.`,
  descricao: `Até agora o aluno construiu a experiência de Realidade Virtual dentro do Unity e testou tudo na janela Game, usando o mouse e o teclado. Mas Realidade Virtual só revela a verdade quando o projeto roda no headset de verdade, na cabeça de uma pessoa. Coisas que pareciam perfeitas na tela podem causar desconforto, enjoo ou confusão quando o corpo todo está dentro do mundo. Esta aula é o momento de descobrir isso.

Hoje o aluno faz o build (a geração do aplicativo que roda no óculos) e veste o headset para sentir a própria criação. O objetivo não é só ver se funciona, e sim observar com atenção: a altura dos olhos está certa? Os objetos estão na escala correta para o tamanho do corpo? Os movimentos são suaves ou dão enjoo? As interações com as mãos ficam claras? O aluno vira, ao mesmo tempo, criador e usuário de teste (playtester).

Durante o teste, o aluno anota cada problema numa lista simples: o que aconteceu, onde aconteceu e como o corpo reagiu. Essa lista vira o plano de ajustes. Em VR, os três ajustes mais comuns e mais rápidos são escala (tamanho dos objetos e do mundo), velocidade (de movimento e de animações) e posicionamento (altura e distância das coisas em relação aos olhos e às mãos).

No final da aula, o aluno volta ao Unity e aplica pelo menos um ajuste rápido baseado no que sentiu de verdade no óculos. É a primeira vez que o projeto passa pelo ciclo completo: criar, testar no corpo, anotar, ajustar. Esse ciclo é exatamente o que profissionais de VR fazem todos os dias.`,
  materiais: [
    `Computadores com Unity instalado e o projeto VR da turma (com Build Settings já no perfil de cada aluno)`,
    `Óculos VR (headset) por aluno ou compartilhado em rodízio, com cabo ou conexão sem fio para o computador`,
    `Projetor ou TV para o professor mostrar a janela Build Settings e a lista de checagem`,
    `Ficha impressa de teste (folha de anotação de problemas: conforto, enjoo, clareza)`,
    `Espaço livre e seguro ao redor de cada estação, sem cadeiras ou cabos no chão`,
    `Arquivo de exemplo: cena VR pronta da turma e a ficha-modelo de anotação disponível na pasta da aula`,
  ],
  conceitosChave: [
    `Build — processo em que o Unity transforma a cena num aplicativo que roda direto no óculos, fora do editor.`,
    `Playtest — teste em que uma pessoa usa a experiência de verdade e observa o que sente e o que confunde.`,
    `Enjoo de movimento (motion sickness) — mal-estar que surge quando os olhos veem movimento que o corpo não sente; combate-se com movimento suave e visão estável.`,
    `Escala — tamanho dos objetos e do mundo em relação ao corpo do usuário; em VR, escala errada quebra a imersão.`,
    `Altura dos olhos (eye level) — posição vertical da câmera VR; precisa bater com a altura real de quem usa, para o mundo parecer natural.`,
    `Conforto — sensação de bem-estar no headset; envolve enjoo, peso, tempo de uso e clareza do que fazer.`,
    `Usabilidade — o quanto a interação é clara: a pessoa entende sozinha o que pode pegar, apertar ou alcançar.`,
  ],
  treinamento: `## O que o professor precisa saber

Você não precisa dominar Realidade Virtual para dar esta aula. Precisa entender três ideias: build é gerar o app que roda no óculos; playtest é vestir o headset e sentir; e ajuste rápido é mexer em escala, velocidade ou posicionamento sem reescrever o projeto. No Unity, o build sai pela janela File maior que Build Settings. Antes da aula, abra o projeto de um aluno e confirme que a plataforma correta já está marcada e que o headset liga e conecta. Se a turma usa óculos do tipo standalone (Android), o build vira um arquivo que é instalado no aparelho; se usa óculos ligado por cabo ao PC, dá para apertar Play e ver direto no headset. Saiba qual é o caso da sua escola.

## Passo a passo da aula (ritmo 10/15/25/10)

Aquecimento (10 min): pergunte quem já usou óculos VR e o que sentiu. Combine as regras de segurança: pés parados, sem correr, sempre com um colega de apoio por perto. Mostre a ficha de anotação no projetor e explique as três colunas: conforto, enjoo e clareza.

Conteúdo novo guiado (15 min): no projetor, abra File maior que Build Settings. Mostre a lista de cenas e confirme que a cena VR está marcada. Explique o botão Build (gera o arquivo) e o botão Build And Run (gera e já abre no óculos). Para óculos por cabo, mostre que basta apertar Play. Em seguida, apresente o pequeno script que ajuda o teste: ele mede quantos quadros por segundo a experiência roda, porque desempenho baixo causa enjoo. Digite com a turma:

using UnityEngine;
using UnityEngine.UI;

public class MonitorDesempenho : MonoBehaviour
{
    public Text textoFps;
    private float intervalo = 0.5f;
    private float tempo;
    private int quadros;

    void Update()
    {
        tempo += Time.unscaledDeltaTime;
        quadros++;
        if (tempo >= intervalo)
        {
            int fps = Mathf.RoundToInt(quadros / tempo);
            textoFps.text = string.Format("FPS: {0}", fps);
            tempo = 0f;
            quadros = 0;
        }
    }
}

Explique: Update roda todo quadro; somamos o tempo e contamos quadros; a cada meio segundo dividimos quadros pelo tempo para achar os FPS e mostramos no texto com string.Format. Acima de 70 FPS costuma ser confortável; abaixo disso, anote como problema.

Mão na massa (25 min): em rodízio, cada aluno faz Build And Run (ou Play) e veste o headset por 2 a 3 minutos. Os colegas seguram a ficha e anotam o que o usuário fala em voz alta: tonteira, objeto longe demais, mão que não alcança, chão na altura errada. Depois trocam. Cada um sai com pelo menos três problemas anotados.

Desafio e compartilhar (10 min): cada aluno escolhe UM problema e aplica um ajuste rápido no Unity. Para escala, mude o campo Scale do objeto no Inspector (por exemplo, de 1 para 1.3). Para altura dos olhos, ajuste a posição Y do rig de câmera. Para velocidade, reduza o número de velocidade no script de movimento. Peça que cada aluno diga em uma frase o que sentiu e o que mudou.

## Como explicar de forma clara (linguagem para a idade)

Diga: o seu corpo é o melhor teste do mundo. Na tela tudo parece certo, mas só dentro do óculos você descobre se a porta está na altura certa ou se o chão parece um buraco. Compare com um tênis novo: parece bom na vitrine, mas você só sabe se serve quando calça e anda. Lembre que enjoo não é fraqueza, é informação: significa que algo no movimento precisa ficar mais suave.

## Erros comuns e como ajudar

Build falha: quase sempre a cena não está marcada em Build Settings, ou a plataforma está errada. Aluno fica tonto: pare o teste, tire o óculos, sente. Reduza a velocidade de movimento e evite girar a câmera por código. Objetos gigantes ou minúsculos: ajuste o Scale no Inspector. Texto de FPS não aparece: confirme que o campo textoFps foi arrastado para o script no Inspector e que existe um Text na cena.`,
  exercicios: [
    {
      titulo: `Ficha de teste: conforto, enjoo e clareza`,
      tipo: `Observação guiada`,
      tempo: `8 min`,
      guiaProfessor: `Distribua a ficha e peça que cada aluno preencha as três colunas enquanto um colega usa o headset. Reforce que devem escrever o que o usuário FALA em voz alta, não o que eles acham.`,
      atividade: `Veste o óculos por 2 minutos na experiência da turma. Seu colega anota tudo que você disser em voz alta nas colunas conforto, enjoo e clareza. Depois troquem de papel.`,
      gabarito: `Exemplo de ficha preenchida: Conforto — ficou pesado depois de 1 minuto. Enjoo — leve tonteira ao andar para frente. Clareza — não entendi que dava para pegar a caixa. A ficha está correta se tiver pelo menos uma anotação real e específica em cada coluna (com o quê e onde aconteceu).`,
    },
    {
      titulo: `Fazer o primeiro build e abrir no óculos`,
      tipo: `Tutorial prático`,
      tempo: `10 min`,
      guiaProfessor: `Acompanhe a janela Build Settings de cada aluno. Confirme a cena marcada e a plataforma. Para óculos por cabo, aceite Play como equivalente ao build.`,
      atividade: `Abra File maior que Build Settings. Confirme que a cena VR está na lista e marcada. Clique em Build And Run (ou aperte Play, se o óculos for por cabo). Vista o headset e confirme que você está dentro da experiência.`,
      gabarito: `Passos corretos: 1) File maior que Build Settings; 2) cena VR marcada na lista de Scenes In Build; 3) plataforma certa selecionada; 4) Build And Run gera e abre o app no óculos (ou Play mostra direto no headset por cabo). Sucesso quando o aluno enxerga o ambiente da experiência dentro do óculos.`,
    },
    {
      titulo: `Medir os FPS com o monitor de desempenho`,
      tipo: `Programação em C#`,
      tempo: `12 min`,
      guiaProfessor: `Garanta que exista um objeto Text na cena (Canvas) e que o aluno arraste esse Text para o campo textoFps no Inspector. Lembre: acima de 70 FPS é confortável.`,
      atividade: `Crie o script MonitorDesempenho, anexe-o a um objeto da cena e arraste um Text para o campo textoFps no Inspector. Rode no óculos e anote o número de FPS que aparece quando você anda pelo mundo.`,
      gabarito: `using UnityEngine;
using UnityEngine.UI;

public class MonitorDesempenho : MonoBehaviour
{
    public Text textoFps;
    private float intervalo = 0.5f;
    private float tempo;
    private int quadros;

    void Update()
    {
        tempo += Time.unscaledDeltaTime;
        quadros++;
        if (tempo >= intervalo)
        {
            int fps = Mathf.RoundToInt(quadros / tempo);
            textoFps.text = string.Format("FPS: {0}", fps);
            tempo = 0f;
            quadros = 0;
        }
    }
}

O texto deve atualizar a cada meio segundo. Se ficar parado, o campo textoFps não foi ligado no Inspector.`,
    },
    {
      titulo: `Ajustar altura dos olhos e escala`,
      tipo: `Ajuste guiado no Unity`,
      tempo: `15 min`,
      guiaProfessor: `Mostre onde fica a posição Y do rig de câmera e o campo Scale do objeto no Inspector. Peça que o aluno teste, ajuste, e teste de novo no óculos para comparar.`,
      atividade: `No óculos, o chão parece muito baixo ou alto, ou um objeto parece grande ou pequeno demais. Volte ao Unity, ajuste a posição Y do rig de câmera para a altura correta e mude o Scale do objeto problemático. Teste de novo e compare.`,
      gabarito: `Exemplo de solução: rig de câmera com posição Y ajustada de 0 para 1.6 (altura média dos olhos em metros) deixa o mundo na altura certa. Objeto com Scale alterado de (1,1,1) para (1.3,1.3,1.3) fica maior e mais alcançável. Considera-se correto quando, no novo teste, o aluno relata que a altura e o tamanho ficaram mais naturais que antes.`,
    },
    {
      titulo: `Reduzir o enjoo ajustando a velocidade de movimento`,
      tipo: `Programação em C# (desafio)`,
      tempo: `15 min`,
      guiaProfessor: `Este é o exercício mais difícil. Mostre que velocidade menor e movimento suave reduzem o enjoo. Oriente a baixar o valor de velocidade e testar no óculos a diferença real no conforto.`,
      atividade: `Um colega sentiu tonteira ao andar para frente. No script de movimento, diminua a velocidade e deixe o deslocamento suave usando Time.deltaTime. Teste de novo no óculos e confirme se o enjoo diminuiu.`,
      gabarito: `using UnityEngine;

public class MovimentoConfortavel : MonoBehaviour
{
    public float velocidade = 1.5f;

    void Update()
    {
        float frente = Input.GetAxis("Vertical");
        Vector3 passo = transform.forward * frente * velocidade * Time.deltaTime;
        transform.position = transform.position + passo;
    }
}

Solução: reduzir velocidade (por exemplo de 4 para 1.5) e multiplicar por Time.deltaTime deixa o movimento suave e constante, o que reduz o enjoo. Considera-se correto quando o aluno baixa o valor de velocidade, testa no óculos e relata melhora no conforto ao andar.`,
    },
  ],
};
