import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 5,
  titulo: "Polir Jogabilidade e Áudio",
  semana: "Semana 3",
  duracao: "1 hora",
  objetivo: `Refinar a experiência do jogo na Unreal Engine adicionando som, feedback visual (HUD e impacto) e corrigindo bugs encontrados em uma rodada de playtest com os colegas.`,
  descricao: `Nesta aula o aluno deixa de "construir" o jogo e passa a "polir" o jogo. Polir significa cuidar dos detalhes que fazem a experiência parecer profissional: um som que toca na hora certa, uma barra de vida que aparece na tela, um pequeno tremor da câmera quando o personagem sofre dano e a remoção daqueles pequenos defeitos que atrapalham a diversão. É um trabalho diferente de criar mecânicas novas, porque o foco agora é a sensação de jogar, e não acrescentar funções.

O coração da aula é o playtest. O aluno joga o jogo do colega, anota o que sentiu e devolve um retorno honesto e gentil. Esse retorno vira uma lista de problemas. Como não dá tempo de arrumar tudo em uma hora, o aluno aprende a priorizar: o que mais atrapalha a diversão é arrumado primeiro. O Claude entra como assistente de organização, ajudando a transformar anotações soltas em uma lista clara de tarefas, da mais urgente para a menos urgente.

Na parte técnica, o aluno trabalha com três frentes na Unreal Engine. A primeira é o áudio: importar um arquivo de som e tocá-lo a partir de um Blueprint usando o nó Play Sound. A segunda é o feedback visual: criar um HUD simples com Widget Blueprint para mostrar informações na tela, e adicionar um efeito de tremor de câmera (Camera Shake) no momento do impacto. A terceira é a correção de bugs, em que o aluno usa o que aprendeu nas aulas anteriores de Blueprints e C++ para consertar os defeitos priorizados.

Ao final, o jogo continua o mesmo em conteúdo, mas fica mais gostoso de jogar. Essa é a lição central: polir é o que separa um protótipo de um jogo que dá orgulho de mostrar no Demo Day. O aluno sai da aula com um registro do playtest, uma lista priorizada e pelo menos um ajuste de áudio e um de feedback já aplicados.`,
  materiais: [
    `Computadores com Unreal Engine 5 e o projeto C++ do aluno aberto (um por aluno)`,
    `Projeto de exemplo do professor com um som e um Camera Shake já configurados, para demonstrar`,
    `Arquivos de áudio de exemplo no formato WAV (um som de acerto e um som de dano), na pasta compartilhada da turma`,
    `Projetor ou TV para a demonstração guiada do professor`,
    `Fones de ouvido para cada aluno, para não misturar os áudios durante o playtest`,
    `Ficha de playtest impressa ou digital (campos: o que foi divertido, o que travou, o que confundiu)`,
    `Acesso ao Claude para organizar e priorizar a lista de ajustes`,
  ],
  conceitosChave: [
    `Polir (polishing) — fase final em que se melhoram detalhes de som, visual e correções, sem criar mecânicas novas, para deixar o jogo mais agradável.`,
    `Playtest — sessão em que outra pessoa joga o seu jogo enquanto você observa e anota o que funciona e o que atrapalha.`,
    `Feedback — informação que o jogo devolve ao jogador (som, luz, tremor, número na tela) confirmando que algo aconteceu.`,
    `HUD — sigla de Heads-Up Display; são as informações fixas na tela, como vida, pontos e munição, que ficam por cima do jogo.`,
    `Widget Blueprint — tipo de Blueprint da Unreal usado para montar telas e elementos de interface, como o HUD, arrastando componentes visuais.`,
    `Camera Shake — efeito que faz a câmera tremer por um instante para dar peso a impactos, explosões e danos.`,
    `Priorizar — escolher a ordem das tarefas resolvendo primeiro o problema que mais prejudica a diversão.`,
  ],
  treinamento: `## O que o professor precisa saber

Você não precisa ser especialista em Unreal Engine para dar esta aula. Polir é, na maior parte, trabalho de bom senso: ouvir o jogo, sentir o que falta e ajustar. Os três recursos técnicos que vamos usar são simples e já vêm prontos na engine. O primeiro é o nó Play Sound, que toca um som. O segundo é o Widget Blueprint, que cria telas de interface (o HUD). O terceiro é o Camera Shake, que treme a câmera no impacto. Antes da aula, abra o projeto de exemplo, importe um arquivo WAV (arraste o arquivo para a janela Content Browser, na parte de baixo da tela) e teste o Play Sound uma vez, para você ver acontecer ao vivo.

## Passo a passo da aula (ritmo 10/15/25/10)

Aquecimento (10 min): pergunte "qual jogo que voces conhecem tem um som que voces nunca esquecem?". Deixe dois ou três falarem. Explique a frase do dia: "hoje a gente nao cria coisas novas, a gente deixa o que ja existe mais gostoso de jogar". Apresente a ficha de playtest.

Conteúdo novo guiado (15 min): no projetor, faça três demonstrações curtas. (1) Áudio: no Content Browser, arraste um WAV para dentro; abra o Blueprint do personagem; no Event Graph clique com o botão direito, busque Play Sound at Location, conecte o pino de execução vindo de um evento (por exemplo, o evento de acerto) e escolha o som no campo Sound. (2) HUD: no Content Browser clique em Add, depois User Interface, depois Widget Blueprint; nomeie BP_HUD; dentro dele arraste um componente Text para a tela. No Blueprint do jogador, no evento BeginPlay, use o nó Create Widget (classe BP_HUD) seguido de Add to Viewport. (3) Camera Shake: clique direito no Content Browser, Blueprint Class, busque LegacyCameraShake, nomeie BP_Shake; no Blueprint do jogador, no momento do dano, use Get Player Controller seguido de Client Start Camera Shake escolhendo BP_Shake.

Mão na massa (25 min): forme duplas. Por 8 minutos, o aluno A joga o jogo do aluno B enquanto B observa e anota na ficha; depois trocam. Em seguida, cada aluno cola suas anotacoes no Claude com o pedido: "transforme estas anotacoes de playtest em uma lista de tarefas, da mais urgente para a menos urgente, separando som, visual e bug". Com a lista pronta, cada aluno aplica no minimo dois ajustes: um de audio (Play Sound) e um de feedback (HUD ou Camera Shake). Circule pela sala ajudando a conectar os pinos certos.

Desafio + compartilhar (10 min): desafio "som com proposito": que cada aluno garanta que pelo menos um som so toca quando uma acao especifica acontece (acerto ou dano), e nao o tempo todo. Para fechar, dois ou tres alunos mostram no projetor o antes e o depois de um ajuste.

## Como explicar de forma clara (linguagem para a idade)

Use a ideia de "tempero". Diga: "a comida ja esta pronta; agora a gente coloca sal e tempero para ficar deliciosa". Som, HUD e tremor de camera sao temperos. Sobre feedback, use o exemplo do celular: quando voce digita a senha errada, o celular treme; isso e o aparelho te avisando sem palavras. Sobre priorizar, explique com a imagem de arrumar a mochila: primeiro entra o que voce mais precisa. Reforce que polir nao e ficar adicionando coisas novas para sempre; e fechar bem o que ja existe.

## Erros comuns e como ajudar

O som nao toca: quase sempre o pino de execucao (a seta branca) nao foi conectado ao no Play Sound, ou o campo Sound ficou vazio. Peca para o aluno seguir a seta branca com o dedo na tela. O HUD nao aparece: faltou o Add to Viewport depois do Create Widget, ou o Create Widget foi colocado fora do BeginPlay. O tremor nao acontece: o aluno esqueceu o Get Player Controller antes do Client Start Camera Shake. Aluno querendo refazer o jogo inteiro: lembre que hoje so polimos, e que mudancas grandes ficam para depois do Demo Day. Lista de bugs sem fim: oriente a escolher apenas os tres primeiros itens da lista do Claude e ignorar o resto por enquanto.`,
  exercicios: [
    {
      titulo: `Caça ao tempero`,
      tipo: `Observação e discussão`,
      tempo: `8 minutos`,
      guiaProfessor: `Aquecimento conceitual. Mostre um trecho curto de um jogo conhecido com o som ligado e depois sem som. Pergunte o que mudou na sensação. Aceite respostas simples; o objetivo é o aluno perceber que som e feedback mudam a experiência sem mudar as regras.`,
      atividade: `Assista ao mesmo trecho de jogo duas vezes, uma com áudio e outra sem. Liste três coisas que o som e o feedback visual fazem você sentir e que somem quando estão desligados.`,
      gabarito: `Respostas variam, mas devem incluir ideias como: 1) o som confirma que a ação aconteceu (acertei o inimigo); 2) o tremor e o efeito de impacto dão a sensação de peso e perigo; 3) o HUD me deixa seguro porque eu sei quanta vida ainda tenho. Conclusão esperada: o conteúdo do jogo é o mesmo, mas a experiência fica muito mais clara e divertida com áudio e feedback.`,
    },
    {
      titulo: `Tocar um som no acerto`,
      tipo: `Prática guiada na Unreal (Blueprints)`,
      tempo: `8 minutos`,
      guiaProfessor: `Acompanhe a importação do WAV pelo Content Browser. O erro mais comum é não conectar o pino de execução. Peça para o aluno seguir a seta branca com o dedo. Verifique que o campo Sound do nó está preenchido.`,
      atividade: `Importe o arquivo de som de acerto para o Content Browser. No Blueprint do personagem, faça com que o som toque toda vez que o evento de acerto acontecer.`,
      gabarito: `Passos corretos: arrastar o WAV para o Content Browser; abrir o Blueprint do personagem; no Event Graph, a partir do evento de acerto (por exemplo, OnHit), clicar direito e adicionar o nó Play Sound at Location; conectar o pino de execução branco do evento ao pino de entrada do Play Sound; no campo Sound, escolher o arquivo importado. Resultado: ao acertar, o som toca uma vez. Sem som significa pino de execução desconectado ou campo Sound vazio.`,
    },
    {
      titulo: `HUD com a vida na tela`,
      tipo: `Prática na Unreal (Widget Blueprint)`,
      tempo: `12 minutos`,
      guiaProfessor: `Esta é a parte que mais confunde. Garanta que o aluno crie o Widget Blueprint pelo menu Add, User Interface. O erro clássico é esquecer o Add to Viewport. Confira que o Create Widget está dentro do evento BeginPlay.`,
      atividade: `Crie um Widget Blueprint chamado BP_HUD com um texto que diga "Vida". Faça esse HUD aparecer na tela assim que o jogo começa.`,
      gabarito: `Passos corretos: no Content Browser, Add, depois User Interface, depois Widget Blueprint, nomear BP_HUD; abrir o BP_HUD e arrastar um componente Text para a tela, escrevendo Vida; no Blueprint do jogador, no evento BeginPlay, adicionar o nó Create Widget escolhendo a classe BP_HUD; ligar a saída Return Value do Create Widget no nó Add to Viewport; conectar os pinos de execução em sequência (BeginPlay para Create Widget para Add to Viewport). Resultado: o texto Vida aparece sobre o jogo desde o início. Se não aparecer, faltou o Add to Viewport.`,
    },
    {
      titulo: `Tremor de câmera no dano (C++)`,
      tipo: `Prática na Unreal (C++)`,
      tempo: `12 minutos`,
      guiaProfessor: `Use o exemplo do celular que vibra na senha errada. No código, reforce que precisamos pegar o PlayerController antes de mandar a câmera tremer. Tenha a classe BP_Shake (LegacyCameraShake) já criada para o aluno apenas referenciar.`,
      atividade: `No código C++ do personagem, dentro da função que trata o dano, faça a câmera tremer chamando o efeito de Camera Shake quando o jogador recebe dano.`,
      gabarito: `Solução em C++ dentro da função de dano do personagem (substitua MyCameraShakeClass pela classe BP_Shake configurada no Blueprint ou no construtor):

void AMeuPersonagem::AoReceberDano(float Quantidade)
{
    Vida = Vida - Quantidade;

    APlayerController* PC = Cast<APlayerController>(GetController());
    if (PC != nullptr && CameraShakeClasse != nullptr)
    {
        PC->ClientStartCameraShake(CameraShakeClasse);
    }
}

Explicação: a primeira linha desconta a vida; Cast pega o PlayerController do personagem; o if confere se o controller e a classe de shake existem antes de usar, evitando travamento; ClientStartCameraShake dispara o tremor. A variável CameraShakeClasse é do tipo TSubclassOf de UCameraShakeBase e deve apontar para BP_Shake. Erro comum: chamar o shake sem pegar o PlayerController antes.`,
    },
    {
      titulo: `Playtest e lista priorizada com o Claude`,
      tipo: `Playtest + organização com IA`,
      tempo: `15 minutos`,
      guiaProfessor: `Conduza as duplas: 5 minutos cada um joga o jogo do colega enquanto o dono observa e anota. Depois, o aluno usa o Claude para organizar. O ponto pedagógico é a priorização: limite a três itens para caber no tempo. Confira que o aluno aplicou pelo menos um ajuste da lista.`,
      atividade: `Jogue o jogo de um colega e anote o que foi divertido, o que travou e o que confundiu. Cole suas anotações no Claude e peça uma lista priorizada de ajustes. Aplique pelo menos o primeiro item da lista no seu jogo.`,
      gabarito: `Exemplo de resultado esperado. Anotações cruas: "o pulo as vezes nao funciona; o som de acerto nao tem; nao da pra saber a vida; o cenario e bonito". Pedido ao Claude: "transforme estas anotacoes de playtest em uma lista de tarefas da mais urgente para a menos urgente, separando bug, som e visual". Lista priorizada possível: 1) BUG: corrigir o pulo que falha (atrapalha jogar, prioridade alta); 2) SOM: adicionar som de acerto com Play Sound; 3) VISUAL: mostrar a vida no HUD. O elogio ao cenário é registrado como ponto positivo, não como tarefa. O aluno deve aplicar ao menos o item 1. Critério de sucesso: existe uma lista ordenada por impacto na diversão e um ajuste já feito no projeto.`,
    },
  ],
};
