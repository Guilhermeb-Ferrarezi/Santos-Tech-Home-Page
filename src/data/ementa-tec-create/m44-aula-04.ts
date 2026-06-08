import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 4,
  titulo: "Interface, HUD e Efeitos Sonoros",
  semana: "Semana 2",
  duracao: "1 hora",
  objetivo: `Construir a interface do jogo no Unity com Canvas e TextMeshPro (placar, barra de vida e tela de game over) e ligar sons de ação e música de fundo com AudioSource às mecânicas já criadas.`,
  descricao: `Nesta aula o jogo finalmente ganha cara de jogo de verdade. Até agora o aluno já tem movimento, regras e física funcionando, mas a tela ainda está crua: não há placar, não dá para ver a vida do personagem e nada avisa quando a partida termina. Hoje a turma constrói a interface gráfica (a UI, ou HUD) usando o Canvas do Unity e o TextMeshPro, que é a ferramenta moderna para mostrar textos bonitos e nítidos na tela.

O HUD é a camada de informação que fica por cima do jogo. Pense nele como o painel do carro: o jogador não dirige olhando para o motor, ele olha para a velocidade e o nível de combustível. No nosso jogo, o aluno vai criar um placar que mostra os pontos, uma barra de vida que diminui quando o personagem toma dano e uma tela de game over que aparece quando a vida chega a zero. Tudo isso conversa com os scripts de mecânicas que ele já escreveu nas aulas anteriores.

A segunda metade da aula é sobre som. Um jogo silencioso parece sem vida. O aluno vai usar o componente AudioSource para tocar um efeito sonoro quando algo acontece (pegar um item, levar dano, pular) e uma música de fundo em loop que toca o tempo todo. O segredo é conectar esses sons aos momentos certos do código, para que o som reaja às ações do jogador.

Ao final da aula, o aluno terá um jogo que mostra pontos, vida e fim de partida na tela, e que toca sons nos momentos certos. É um salto enorme de qualidade percebida: com pouca mudança nas mecânicas, o jogo passa a parecer profissional e muito mais divertido de jogar e de mostrar no portfólio.`,
  materiais: [
    `Computadores com Unity instalado (versão LTS) e o projeto do jogo do mês já aberto, com os scripts de mecânicas das aulas anteriores`,
    `Pacote TextMeshPro importado no projeto (Window > TextMeshPro > Import TMP Essential Resources)`,
    `Projetor ligado para mostrar a janela do Unity, o Canvas e o painel Inspector para a turma toda`,
    `Arquivos de áudio de exemplo: um efeito curto (formato WAV) e uma música de fundo (formato MP3 ou OGG) na pasta Assets do projeto`,
    `Arquivo de projeto de exemplo, já com HUD e sons funcionando, como referência caso o do aluno apresente problema`,
    `Fones de ouvido em cada computador para testar os sons sem bagunçar a sala`,
    `Editor de código (Visual Studio ou VS Code) configurado com o Unity para escrever os scripts em C#`,
  ],
  conceitosChave: [
    `Canvas — a tela invisível do Unity onde toda a interface (textos, barras, botões) é desenhada por cima do jogo.`,
    `HUD — sigla para painel de informações na tela; mostra ao jogador dados como pontos, vida e tempo durante a partida.`,
    `TextMeshPro — componente moderno do Unity para mostrar textos nítidos e estilizados na interface.`,
    `Slider — elemento de UI em forma de barra, usado aqui como barra de vida que enche ou esvazia conforme um valor.`,
    `AudioSource — componente que toca um som a partir de um clipe de áudio; pode tocar uma vez ou em loop.`,
    `AudioClip — o arquivo de som em si (efeito ou música) que o AudioSource reproduz.`,
    `SetActive — comando em C# que liga ou desliga um objeto na tela, usado para mostrar ou esconder a tela de game over.`,
  ],
  treinamento: `## O que o professor precisa saber

Você não precisa dominar o Unity para conduzir esta aula. O importante é entender três ideias simples. Primeira: a interface do jogo mora dentro de um objeto chamado Canvas. Tudo que aparece por cima do jogo (textos, barras, telas) fica dentro dele. Segunda: o TextMeshPro mostra textos bonitos; em vez do componente Text antigo, usamos o TextMeshPro Text. Terceira: o som vem de um componente AudioSource, que precisa de um AudioClip (o arquivo de som) para tocar.

Antes da aula, abra o projeto, confira se o TextMeshPro está importado (menu Window, TextMeshPro, Import TMP Essential Resources) e arraste os arquivos de áudio de exemplo para a pasta Assets. Deixe o projeto de referência pronto em uma máquina para tirar dúvidas.

## Passo a passo da aula (ritmo 10/15/25/10)

1. Aquecimento (10 min): retome a aula passada. Pergunte: "Quais mecânicas o jogo já tem?". Rode o jogo no projetor e mostre que falta informação na tela. Diga que hoje o jogo vai ganhar placar, barra de vida, tela de fim de jogo e sons.

2. Conteúdo novo guiado (15 min): no projetor, crie a interface. No menu, clique em GameObject, UI, Canvas. Depois, com o Canvas selecionado, clique em GameObject, UI, Text - TextMeshPro para criar o placar; renomeie para PlacarTexto e posicione no canto. Crie um Slider (GameObject, UI, Slider) e renomeie para BarraVida. Crie um Panel vazio chamado TelaGameOver e desative-o no Inspector (desmarque a caixinha no topo). Em seguida, mostre o script abaixo, que controla tudo. Crie um script chamado UIControle e escreva:

using UnityEngine;
using TMPro;
using UnityEngine.UI;

public class UIControle : MonoBehaviour
{
    public TMP_Text placarTexto;
    public Slider barraVida;
    public GameObject telaGameOver;
    public AudioSource somDano;

    public void AtualizarPlacar(int pontos)
    {
        placarTexto.text = "Pontos: " + pontos.ToString();
    }

    public void AtualizarVida(float vida, float vidaMaxima)
    {
        barraVida.value = vida / vidaMaxima;
        if (somDano != null)
        {
            somDano.Play();
        }
    }

    public void MostrarGameOver()
    {
        telaGameOver.SetActive(true);
    }
}

Explique cada parte: as variáveis public aparecem no Inspector para arrastar os objetos; placarTexto.text troca o texto do placar; barraVida.value vai de 0 a 1, por isso dividimos a vida atual pela vida máxima; somDano.Play() toca o efeito; SetActive(true) liga a tela de game over.

3. Mão na massa (25 min): cada aluno cria o Canvas, o placar, a barra de vida e o painel de game over no próprio projeto. Adiciona o script UIControle a um objeto vazio e arrasta os objetos da cena para os campos do Inspector. Para o som, cria um objeto vazio chamado MusicaFundo, adiciona o componente AudioSource (botão Add Component), arrasta a música para o campo AudioClip e marca as caixas Play On Awake e Loop. Adiciona outro AudioSource para o efeito de dano e arrasta esse componente para o campo somDano do script. Por fim, liga as chamadas do UIControle às mecânicas: onde o jogo já some pontos ou perde vida, chama os métodos AtualizarPlacar, AtualizarVida e MostrarGameOver.

4. Desafio + compartilhar (10 min): cada aluno troca a cor do placar quando os pontos passam de 10 ou adiciona um som ao pegar um item. Depois, dois ou três mostram a tela do jogo para a turma, com placar, barra de vida e som funcionando.

## Como explicar de forma clara (linguagem para a idade)

Compare o HUD com o painel de um carro: você dirige olhando a velocidade e o combustível, não o motor. O Canvas é a vidraça onde colamos esses adesivos de informação. A barra de vida é como uma garrafa de água que esvazia quando você bebe. Diga que o AudioSource é uma caixa de som e o AudioClip é a música que você coloca dentro dela. Use a frase "o som reage ao que acontece": apertou, soou.

## Erros comuns e como ajudar

- O texto não aparece: o objeto está fora da área visível do Canvas ou a fonte do TextMeshPro não foi importada. Centralize o objeto e importe os recursos do TMP.
- A barra de vida não mexe: o aluno esqueceu de dividir vida pela vida máxima; o value do Slider vai de 0 a 1.
- Erro NullReferenceException: algum campo do Inspector ficou vazio. Confira se todos os objetos foram arrastados para os campos do script.
- O som não toca: faltou arrastar o AudioClip ou o AudioSource está mudo (campo Volume em zero). Verifique também os fones.
- A música não repete: a caixa Loop do AudioSource não foi marcada.`,
  exercicios: [
    {
      titulo: `Caça aos elementos da interface`,
      tipo: `Prática na ferramenta`,
      tempo: `7 min`,
      guiaProfessor: `Garanta que cada aluno tenha o projeto aberto. Caminhe pela sala conferindo as telas. O objetivo é reconhecer os menus de UI, sem ainda escrever código. Mostre no projetor onde fica cada item antes de soltar a turma.`,
      atividade: `No seu projeto, use o menu GameObject, UI para criar um Canvas, um Text - TextMeshPro e um Slider. Renomeie o texto para PlacarTexto e o slider para BarraVida. Mostre ao colega do lado onde cada um aparece na janela Hierarchy.`,
      gabarito: `O aluno cria os três objetos pelo menu GameObject, UI. Na janela Hierarchy aparecem: Canvas, dentro dele PlacarTexto (do tipo TextMeshPro) e BarraVida (do tipo Slider). Os nomes foram trocados corretamente.`,
    },
    {
      titulo: `Escrevendo o placar`,
      tipo: `Programação guiada`,
      tempo: `10 min`,
      guiaProfessor: `Conduza linha a linha no projetor. Reforce que o using TMPro é obrigatório para usar o TextMeshPro. Mostre que a variável public aparece no Inspector para arrastar o objeto PlacarTexto. Cuidado com maiúsculas e minúsculas em C#.`,
      atividade: `Crie um script chamado PlacarSimples com uma variável public TMP_Text placarTexto e um método AtualizarPlacar que recebe um número inteiro de pontos e mostra o texto Pontos: seguido do número. Arraste o objeto PlacarTexto para o campo no Inspector.`,
      gabarito: `using UnityEngine;
using TMPro;

public class PlacarSimples : MonoBehaviour
{
    public TMP_Text placarTexto;

    public void AtualizarPlacar(int pontos)
    {
        placarTexto.text = "Pontos: " + pontos.ToString();
    }
}

O texto usa concatenacao com + para juntar a palavra Pontos: com o numero convertido por ToString().`,
    },
    {
      titulo: `Barra de vida que esvazia`,
      tipo: `Programação guiada`,
      tempo: `12 min`,
      guiaProfessor: `Explique que o value do Slider vai de 0 a 1. Por isso, dividimos a vida atual pela vida máxima. Mostre, rodando o jogo, a barra diminuindo quando o valor cai. Quem terminar antes pode mudar a cor de preenchimento do Slider no Inspector.`,
      atividade: `Crie um script chamado VidaUI com uma variável public Slider barraVida. Escreva um método AtualizarVida que recebe a vida atual e a vida máxima e ajusta a barra. Teste chamando o método com vida 50 e máxima 100; a barra deve ficar na metade.`,
      gabarito: `using UnityEngine;
using UnityEngine.UI;

public class VidaUI : MonoBehaviour
{
    public Slider barraVida;

    public void AtualizarVida(float vida, float vidaMaxima)
    {
        barraVida.value = vida / vidaMaxima;
    }
}

Com vida 50 e maxima 100, o value fica em 0.5, ou seja, a barra na metade. O Slider precisa ter Min Value 0 e Max Value 1 no Inspector.`,
    },
    {
      titulo: `Som no momento certo`,
      tipo: `Prática na ferramenta com código`,
      tempo: `13 min`,
      guiaProfessor: `Mostre como adicionar o componente AudioSource (Add Component) e arrastar o AudioClip. Reforce a diferença entre música de fundo (Loop e Play On Awake marcados) e efeito de ação (tocado por código com Play). Garanta que os fones estejam ligados para não virar bagunça.`,
      atividade: `Adicione um AudioSource para a música de fundo, com Loop e Play On Awake marcados. Depois, crie um script chamado SomAcao com uma variável public AudioSource efeito e um método Tocar que reproduz o efeito. Ligue o Tocar a alguma ação do jogo, como pegar um item.`,
      gabarito: `using UnityEngine;

public class SomAcao : MonoBehaviour
{
    public AudioSource efeito;

    public void Tocar()
    {
        if (efeito != null)
        {
            efeito.Play();
        }
    }
}

A música de fundo não precisa de código: basta marcar Loop e Play On Awake no AudioSource. O efeito de acao toca por código com efeito.Play(), chamado no momento da acao. O if evita erro se o campo estiver vazio.`,
    },
    {
      titulo: `HUD completo ligado às mecânicas`,
      tipo: `Projeto curto`,
      tempo: `15 min`,
      guiaProfessor: `Conduza com supervisão. O objetivo é juntar tudo: placar, barra de vida, tela de game over e som de dano em um único script, ligado às mecânicas que o aluno já tem. Reforce o uso de SetActive para mostrar a tela de game over e o cuidado com campos vazios no Inspector.`,
      atividade: `Crie um script UIControle que reúna: atualizar o placar, atualizar a barra de vida, tocar o som de dano e mostrar a tela de game over quando a vida chegar a zero. Arraste todos os objetos da cena para os campos no Inspector e teste o jogo do começo ao fim de uma partida.`,
      gabarito: `using UnityEngine;
using TMPro;
using UnityEngine.UI;

public class UIControle : MonoBehaviour
{
    public TMP_Text placarTexto;
    public Slider barraVida;
    public GameObject telaGameOver;
    public AudioSource somDano;

    public void AtualizarPlacar(int pontos)
    {
        placarTexto.text = "Pontos: " + pontos.ToString();
    }

    public void AtualizarVida(float vida, float vidaMaxima)
    {
        barraVida.value = vida / vidaMaxima;
        if (somDano != null)
        {
            somDano.Play();
        }
        if (vida <= 0f)
        {
            MostrarGameOver();
        }
    }

    public void MostrarGameOver()
    {
        telaGameOver.SetActive(true);
    }
}

O sucesso e: o placar muda ao somar pontos, a barra esvazia ao tomar dano, o som de dano toca e a tela de game over aparece (SetActive true) quando a vida chega a zero. Todos os campos devem estar preenchidos no Inspector para evitar NullReferenceException.`,
    },
  ],
};
