import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 6,
  titulo: "Luz, Conforto e Imersão",
  semana: "Semana 3",
  duracao: "1 hora",
  objetivo: `Melhorar a cena VR no Unity com iluminação e skybox que aumentam a imersão, aplicando boas práticas de conforto visual para evitar enjoo e testando o resultado no headset ou no simulador.`,
  descricao: `Nesta aula o aluno deixa a cena VR mais bonita e, principalmente, mais confortável de usar. Nas aulas anteriores deste mês a turma preparou o Unity para VR, montou o XR Rig e construiu a primeira cena com chão e objetos. Agora chegou a hora de cuidar da luz e do céu (o skybox), que são o que dá clima e profundidade ao mundo. Uma cena bem iluminada parece de verdade; uma cena escura ou estourada de luz cansa os olhos e quebra a imersão.

Em VR existe um detalhe que não aparece em jogos comuns de tela: o conforto. Como a imagem fica colada nos olhos do jogador, qualquer erro de luz, contraste ou movimento pode causar enjoo, o famoso motion sickness. Por isso, hoje o aluno aprende que iluminação em VR não é só estética: é saúde e bem-estar de quem joga. Vamos preferir luzes suaves, evitar piscadas fortes e manter um céu agradável, sem cores que machuquem os olhos.

No Unity, a luz principal de uma cena é a Directional Light, que funciona como o Sol: ilumina tudo de uma direção só. O céu vem do Skybox Material, que é a textura grande que envolve a cena inteira como uma redoma. Além disso, o Unity tem a luz ambiente (Ambient Light), que é a claridade geral que preenche as sombras para nada ficar totalmente preto. O aluno vai ajustar esses três elementos e testar dentro do headset ou no XR Device Simulator.

O foco do mês é Introdução à VR no Unity, e a entrega final é Olhar e se mover em VR. Esta aula é a ponte: ela prepara um ambiente confortável para que, nas aulas 7 e 8, o aluno olhe ao redor e se mova sem passar mal. Ao final, cada aluno terá uma cena VR com luz suave, um skybox escolhido por ele e o conforto visual conferido dentro do simulador ou do óculos.`,
  materiais: [
    `Computadores com o Unity instalado e o projeto VR das aulas anteriores aberto (um por aluno)`,
    `Óculos VR (headset) disponíveis para teste em rodízio, quando houver na escola`,
    `XR Device Simulator habilitado no projeto, para testar VR sem precisar do headset`,
    `Projetor ou TV para o professor demonstrar os ajustes de luz e skybox em tela grande`,
    `Cena de exemplo .unity já com o XR Rig, chão e alguns objetos da Aula 5`,
    `Dois ou três materiais de skybox de exemplo na pasta Assets (céu de dia, céu de fim de tarde, céu estrelado)`,
    `Lista impressa de boas práticas de conforto em VR para colar perto de cada computador`,
  ],
  conceitosChave: [
    `Iluminação (Lighting) — o conjunto de luzes que define o clima, a cor e a profundidade da cena no Unity.`,
    `Directional Light — luz que ilumina toda a cena de uma direção só, como o Sol; é a luz principal da cena.`,
    `Skybox — a textura que envolve a cena inteira como uma redoma, criando o céu e o horizonte ao redor do jogador.`,
    `Luz ambiente (Ambient Light) — a claridade geral que preenche as sombras para que nada fique totalmente preto.`,
    `Imersão — a sensação de estar dentro do mundo virtual, reforçada por luz, som e céu coerentes.`,
    `Motion sickness (enjoo) — mal-estar causado em VR por luz forte, movimento brusco ou imagem desconfortável.`,
    `XR Device Simulator — ferramenta do Unity que imita o headset na tela do computador, para testar VR sem o óculos.`,
  ],
  treinamento: `## O que o professor precisa saber

Você não precisa dominar VR para dar esta aula. Precisa entender quatro ideias. Primeira: a luz principal de uma cena Unity é a Directional Light, que funciona como o Sol e já vem criada em quase toda cena nova. Segunda: o céu ao redor é o Skybox, um material que envolve tudo. Terceira: a luz ambiente preenche as sombras para nada ficar preto demais. Quarta, e a mais importante em VR: conforto vem antes de beleza; luz suave e sem piscadas evita enjoo. Antes da aula, abra a cena, gire a Directional Light e troque o skybox uma vez para ganhar confiança. Tenha o XR Device Simulator ativo para testar sem o headset.

## Passo a passo da aula (ritmo 10/15/25/10, com o código exato)

10 min, aquecimento e revisão. Na tela grande, abra a cena VR da Aula 5. Pergunte: "O que falta para este mundo parecer de verdade?" Conduza até luz e céu. Mostre uma cena escura e uma cena estourada de luz e pergunte qual cansaria os olhos dentro do óculos.

15 min, conteúdo novo guiado. Na janela Hierarchy, clique na Directional Light. No Inspector, ajuste o campo Intensity para um valor suave, perto de 1, e mude a cor para um tom levemente quente. Gire a luz pelo campo Rotation para criar sombras bonitas. Agora abra o menu Window, depois Rendering, depois Lighting. Na aba Environment, no campo Skybox Material, arraste um dos skyboxes de exemplo. A cena ganha um céu. Mostre também o campo Ambient para clarear suavemente as sombras. Por fim, crie um script simples para deixar a luz mais suave por código. No menu Assets, escolha Create e depois C# Script, com o nome AjusteDeLuz. Abra o arquivo e digite o código exato abaixo:

using UnityEngine;

public class AjusteDeLuz : MonoBehaviour
{
    public Light luzPrincipal;
    public float intensidadeConfortavel = 0.9f;

    void Start()
    {
        if (luzPrincipal != null)
        {
            luzPrincipal.intensity = intensidadeConfortavel;
            RenderSettings.ambientLight = new Color(0.4f, 0.4f, 0.45f);
        }
    }
}

Explique cada parte: public Light luzPrincipal cria um espaço para arrastar a Directional Light no Inspector; intensidadeConfortavel guarda um valor suave de luz; o método Start roda quando a cena abre; a linha luzPrincipal.intensity ajusta o brilho; e RenderSettings.ambientLight deixa a luz ambiente azulada e calma. Arraste o script para um objeto vazio e arraste a Directional Light no campo luzPrincipal.

25 min, mão na massa. Cada aluno ajusta a intensidade e a cor da Directional Light, escolhe um skybox de exemplo e aplica o script AjusteDeLuz. Em seguida testa no XR Device Simulator ou no headset em rodízio. Circule pela sala perguntando: "Está confortável para os olhos?"

10 min, desafio e compartilhar. Cada aluno mostra a cena ao colega do lado e diz qual skybox escolheu e por que combina com o clima do mundo. Faça uma rodada rápida sobre o que deixou a cena mais confortável.

## Como explicar de forma clara (linguagem para a idade)

Use comparações do dia a dia. Diga: "A Directional Light é o Sol do seu mundo; girar ela é mudar a hora do dia." Para o skybox: "É o papel de parede do céu, que envolve você por inteiro." Para a luz ambiente: "É a claridade que entra mesmo na sombra, como dentro de casa num dia nublado." Para conforto: "Em VR a tela fica colada no olho; luz que pisca ou muito forte dá enjoo, igual ler no carro em movimento." Sempre conecte com a experiência: "Você gostaria de ficar dez minutos dentro deste mundo?"

## Erros comuns e como ajudar

O erro mais comum é deixar a cena escura demais; lembre de subir a luz ambiente e a intensidade. Outro é estourar a luz, deixando tudo branco e cansativo; baixe a Intensity. Muitos esquecem de arrastar a Directional Light no campo luzPrincipal do script, e a luz não muda; mostre o campo vazio no Inspector. Alguns escolhem skybox com cores berrantes que machucam os olhos em VR; oriente cores mais calmas. Se o script der erro, confira se o nome da classe AjusteDeLuz é igual ao nome do arquivo. Por fim, se ninguém testar no headset, reforce o uso do XR Device Simulator para sentir o conforto antes da próxima aula.`,
  exercicios: [
    {
      titulo: `Ligando o Sol: ajustando a Directional Light`,
      tipo: `prática na ferramenta`,
      tempo: `8 minutos`,
      guiaProfessor: `Garanta que cada aluno encontre a Directional Light na Hierarchy. Reforce os campos Intensity, Color e Rotation no Inspector e peça que comparem antes e depois.`,
      atividade: `Selecione a Directional Light na sua cena. Ajuste a Intensity para um valor suave perto de 1, escolha uma cor levemente quente e gire a luz para criar sombras. Mostre o resultado ao professor.`,
      gabarito: `A cena deve ficar bem iluminada, sem estar escura nem estourada de branco, com sombras visíveis vindo de uma direção. Caminho correto: clicar na Directional Light na Hierarchy e, no Inspector, mexer em Intensity (perto de 1), no campo Color (tom quente) e no Rotation para girar. Se ficar branco demais, a Intensity está alta; se ficar escuro, está baixa.`,
    },
    {
      titulo: `Trocando o céu: aplicando um Skybox`,
      tipo: `desafio`,
      tempo: `10 minutos`,
      guiaProfessor: `Mostre o caminho Window, Rendering, Lighting, aba Environment, campo Skybox Material. Tenha dois ou três skyboxes de exemplo na pasta Assets para os alunos arrastarem.`,
      atividade: `Abra a janela de Lighting pelo menu Window. Na aba Environment, arraste um dos skyboxes de exemplo para o campo Skybox Material. Troque por outro e escolha o que combina melhor com o clima do seu mundo. Anote em uma frase por que escolheu esse céu.`,
      gabarito: `A cena deve mostrar um céu novo envolvendo o ambiente (dia, fim de tarde ou estrelado). Caminho: Window, Rendering, Lighting, aba Environment, arrastar o material no campo Skybox Material. A frase deve ligar o céu ao clima do mundo, por exemplo: "Escolhi o céu estrelado porque meu mundo é um espaço de aventura noturna."`,
    },
    {
      titulo: `Luz suave por código: o script AjusteDeLuz`,
      tipo: `programação`,
      tempo: `12 minutos`,
      guiaProfessor: `Acompanhe a criação do script e o arrastar da Directional Light no campo luzPrincipal. Lembre que o nome da classe precisa ser igual ao nome do arquivo. Não use cifrão dentro de strings em C#.`,
      atividade: `Crie um script C# chamado AjusteDeLuz, digite o código que deixa a luz mais suave e a luz ambiente calma, salve, arraste o script para um objeto vazio e arraste a Directional Light no campo luzPrincipal. Rode a cena e confira se a luz ficou confortável.`,
      gabarito: `Ao rodar a cena, a luz principal deve assumir a intensidade suave e a luz ambiente deve ficar levemente azulada. Código-solução:

using UnityEngine;

public class AjusteDeLuz : MonoBehaviour
{
    public Light luzPrincipal;
    public float intensidadeConfortavel = 0.9f;

    void Start()
    {
        if (luzPrincipal != null)
        {
            luzPrincipal.intensity = intensidadeConfortavel;
            RenderSettings.ambientLight = new Color(0.4f, 0.4f, 0.45f);
        }
    }
}

Se a luz não mudar, o campo luzPrincipal ficou vazio: arraste a Directional Light nele. Se der erro de compilação, confira que o nome da classe AjusteDeLuz é igual ao nome do arquivo.`,
    },
    {
      titulo: `Roda de conversa: o que evita o enjoo`,
      tipo: `roda de conversa`,
      tempo: `12 minutos`,
      guiaProfessor: `Conduza sem julgar. Anote no quadro as boas práticas que os alunos citarem. Conecte cada ideia ao conforto de quem usa o headset por vários minutos.`,
      atividade: `Em roda, cada aluno diz uma escolha de luz ou céu que deixa a cena VR mais confortável e uma que causaria enjoo. Ouçam os colegas e montem juntos uma lista de boas práticas de conforto em VR.`,
      gabarito: `Não há resposta única, mas as ideias devem ligar conforto a luz e céu. Exemplos válidos de boas práticas: luz suave e sem piscar, céu de cores calmas, evitar contraste muito forte, nada de luzes estourando os olhos. Exemplos do que causa enjoo: luz que pisca, céu berrante, cena escura demais que cansa a vista. Respostas fracas a melhorar: "Só deixar bonito", sem ligar ao conforto.`,
    },
    {
      titulo: `Mini projeto: cena VR confortável testada no simulador`,
      tipo: `projeto curto`,
      tempo: `15 minutos`,
      guiaProfessor: `Garanta o XR Device Simulator ativo para quem não estiver no headset. Peça que cada aluno una luz, skybox e script e teste o conforto de ponta a ponta. Salve a cena com o nome do aluno.`,
      atividade: `Junte tudo: ajuste a Directional Light, escolha um skybox, aplique o script AjusteDeLuz e teste a cena no XR Device Simulator ou no headset. Olhe ao redor por alguns segundos e confira se está confortável. Salve a cena com o seu nome para usar na Aula 7.`,
      gabarito: `A cena final deve ter luz suave (Intensity perto de 1), um skybox coerente com o clima do mundo, a luz ambiente calma vinda do script e o teste feito no simulador ou no headset sem desconforto. Caminho de teste: abrir o XR Device Simulator e olhar ao redor; a imagem deve ficar agradável aos olhos. Arquivo salvo com o nome do aluno. Se a cena cansar a vista, baixe a Intensity ou troque o skybox por um de cores mais calmas.`,
    },
  ],
};
