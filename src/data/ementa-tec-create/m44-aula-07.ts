import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 7,
  titulo: "Build e Empacotamento do Jogo",
  semana: "Semana 4",
  duracao: "1 hora",
  objetivo: `Gerar o build final do jogo no Unity, exportar o executável, testar o arquivo gerado fora do editor e corrigir os problemas mais comuns de exportação.`,
  descricao: `Esta é a aula em que o projeto deixa de ser apenas um arquivo aberto no Unity e vira um jogo de verdade, com um executável que qualquer pessoa pode abrir e jogar sem precisar instalar o editor. Depois de semanas montando scripts de movimento, regras, física, interface e fazendo playtests, chegou o momento de empacotar tudo em um único pacote distribuível. Para um adolescente do Ano 4, ver o ícone do próprio jogo aparecer na área de trabalho é um marco enorme: é a prova concreta de que ele construiu um software completo.

O coração da aula é a janela Build Settings do Unity. É ali que o aluno escolhe a plataforma de destino (no nosso caso, Windows), define a lista de cenas que entram no jogo e em que ordem aparecem, e dá o comando final que transforma o projeto em um executável. Muita coisa que funcionava no editor pode quebrar no build se a cena inicial estiver errada ou se uma cena ficar de fora da lista, então esta aula treina o olhar do aluno para esses detalhes.

Além de gerar o arquivo, a aula reserva tempo para o teste do executável. Rodar o jogo dentro do Unity não é a mesma coisa que rodá-lo como um aplicativo final: a resolução muda, a tela cheia entra em cena, e bugs que estavam escondidos aparecem. O aluno aprende a fechar o editor, abrir o executável como um jogador faria e anotar o que deu certo e o que precisa de conserto.

Por fim, a aula trabalha a correção de problemas de exportação. Cena faltando na build, jogo abrindo em uma cena errada, tela preta, controles que não respondem em tela cheia: são erros típicos e todos têm solução simples quando o professor sabe onde olhar. Ao final, cada aluno termina com um executável funcional do próprio jogo, pronto para a Aula 8, em que ele será publicado e entregue no portfólio.`,
  materiais: [
    `Computadores com Unity instalado, o módulo de build para Windows e o projeto do jogo do aluno`,
    `Projetor ou TV para o professor demonstrar a janela Build Settings passo a passo`,
    `Pasta vazia preparada em cada computador para receber o build (ex.: Documentos/Builds)`,
    `Projeto de exemplo do professor com pelo menos duas cenas, para mostrar a lista de cenas na build`,
    `Pen drive ou pasta compartilhada para os alunos trocarem seus executáveis e testarem o jogo do colega`,
    `Folha de checklist de build impressa (cenas, plataforma, teste do executável)`,
  ],
  conceitosChave: [
    `Build — o processo de transformar o projeto do Unity em um aplicativo final que roda sozinho, sem o editor.`,
    `Executável — o arquivo do jogo pronto para abrir (no Windows tem extensão .exe) que o jogador clica para jogar.`,
    `Build Settings — a janela do Unity onde você escolhe a plataforma, monta a lista de cenas e manda gerar o jogo.`,
    `Plataforma de destino — o sistema onde o jogo vai rodar (Windows, Android, etc.); cada uma gera um tipo de arquivo.`,
    `Scenes In Build — a lista ordenada de cenas que entram no jogo; a primeira da lista é a que abre quando o jogo inicia.`,
    `Player Settings — as configurações do jogo final, como nome, ícone, resolução e se abre em tela cheia.`,
    `Pasta de build — a pasta que recebe o executável e os arquivos de apoio; o jogo só roda se a pasta estiver completa.`,
  ],
  treinamento: `## O que o professor precisa saber

Build é o nome técnico de gerar o jogo final. Enquanto o aluno trabalha, o jogo só existe dentro do editor Unity. O build empacota tudo (cenas, scripts compilados, imagens, sons) em arquivos que rodam sozinhos. No Windows, o resultado é um arquivo .exe mais uma pasta de dados com o mesmo nome; os dois precisam andar juntos, senão o jogo não abre.

Você não precisa dominar C# para esta aula: o código já está pronto das semanas anteriores. O foco é a janela Build Settings, que você abre pelo menu File, depois Build Settings (atalho Ctrl+Shift+B). Nela há três coisas importantes: a lista Scenes In Build (as cenas que entram no jogo), a coluna Platform (escolha Windows, marcada como PC, Mac and Linux Standalone) e o botão Build. A regra de ouro: a primeira cena da lista é a que abre o jogo. Se a cena de menu não estiver no topo, o jogo abre na fase errada.

Antes da aula, gere um build de teste no seu projeto de exemplo para ter certeza de que o módulo do Windows está instalado. Se faltar, o Unity avisa e oferece instalar pelo Unity Hub, na aba Installs, botão de engrenagem, Add Modules.

## Passo a passo da aula (ritmo 10/15/25/10)

10 min - Aquecimento e revisão: Pergunte à turma "como você daria seu jogo para um amigo jogar em casa?". Conduza até a ideia de que ele precisa de um arquivo que abre sozinho. Mostre no projetor o ícone de um .exe e diga que hoje todos vão criar o seu.

15 min - Conteúdo novo guiado: Abra o Build Settings (Ctrl+Shift+B) no seu exemplo. Mostre como adicionar a cena aberta clicando em Add Open Scenes, e como arrastar as cenas para ordenar, deixando o menu no topo. Selecione PC, Mac and Linux Standalone e confirme Target Platform como Windows. Entre em Player Settings e mostre os campos Product Name e Default Is Full Screen. Clique em Build, escolha a pasta vazia e aguarde gerar.

25 min - Mão na massa: Cada aluno repete no próprio projeto. Roteiro no quadro: 1. Salvar a cena (Ctrl+S). 2. Abrir Build Settings. 3. Add Open Scenes e ordenar com o menu no topo. 4. Selecionar Windows. 5. Build numa pasta vazia chamada Build. Quando terminar, o aluno fecha o Unity, abre a pasta e dá dois cliques no .exe para testar. Circule conferindo a ordem das cenas e a pasta de destino.

10 min - Desafio e compartilhar: Em duplas, cada aluno copia o executável para o colega (pen drive ou pasta) e joga o jogo do outro. Cada um anota um problema encontrado no build e como resolveria. Feche pedindo a dois voluntários que mostrem o jogo rodando em tela cheia no projetor.

## Como explicar de forma clara (linguagem para a idade)

Use a imagem da lancheira: "O build é como guardar todo o almoço numa lancheira fechada; o amigo abre e come sem precisar da sua cozinha." Para a lista de cenas, diga: "É a ordem das fases; a de cima é a porta de entrada do jogo." Para a pasta de dados ao lado do .exe, avise: "O .exe e a pasta são irmãos gêmeos; separou um do outro, o jogo não abre." Reforce que testar fora do editor é obrigatório: "No Unity é ensaio; no executável é o show de verdade."

## Erros comuns e como ajudar

O erro mais frequente é esquecer uma cena na lista Scenes In Build: a fase some no jogo final. Peça para conferir se TODAS as cenas usadas estão marcadas. O segundo é a ordem errada, com o jogo abrindo na fase em vez do menu: arraste o menu para a posição 0. O terceiro é gerar o build dentro da pasta do projeto Assets, o que confunde o Unity; sempre use uma pasta separada e vazia. Se o jogo abre com tela preta, geralmente a cena inicial não tem câmera ou está fora da lista. Se o aluno tenta mandar só o .exe para o colega e nada abre, lembre que a pasta de dados precisa ir junto, ou oriente a compactar tudo em um arquivo .zip.`,
  exercicios: [
    {
      titulo: `Identificar a primeira cena do jogo`,
      tipo: `discussão guiada`,
      tempo: `6 min`,
      guiaProfessor: `Mostre no projetor uma lista Scenes In Build com três cenas em ordem trocada (fase no topo, menu no meio). Pergunte qual cena vai abrir quando o jogo iniciar e por quê.`,
      atividade: `Olhe a lista Scenes In Build na tela. Diga qual cena vai abrir primeiro quando o jogador clicar no executável e explique como você arrumaria a lista para que o menu apareça antes da fase.`,
      gabarito: `A cena que abre é sempre a que está na posição 0, ou seja, a primeira de cima na lista. Como no exemplo a fase está no topo, o jogo abriria na fase. Para corrigir, basta arrastar a cena de menu para o topo, deixando-a na posição 0; assim o menu vira a porta de entrada do jogo.`,
    },
    {
      titulo: `Montar a lista de cenas da build`,
      tipo: `prática na ferramenta`,
      tempo: `10 min`,
      guiaProfessor: `Confira se cada aluno abriu o Build Settings e adicionou todas as cenas do próprio jogo. Verifique especialmente se nenhuma fase ficou de fora e se o menu está no topo.`,
      atividade: `Abra o Build Settings (Ctrl+Shift+B). Use Add Open Scenes para incluir cada cena do seu jogo (abra cada uma antes e adicione). Depois arraste as cenas para a ordem certa, deixando o menu na posição 0 e as fases na sequência em que devem ser jogadas.`,
      gabarito: `O exercício está correto quando a lista Scenes In Build mostra todas as cenas do jogo marcadas (com o quadradinho de seleção ativo), o menu aparece na posição 0 e as fases vêm logo abaixo na ordem de jogo. Nenhuma cena usada pode ficar fora da lista.`,
    },
    {
      titulo: `Escolher a plataforma e gerar o executável`,
      tipo: `prática na ferramenta`,
      tempo: `12 min`,
      guiaProfessor: `Garanta que todos selecionaram PC, Mac and Linux Standalone com Target Platform Windows. Oriente a criar uma pasta vazia chamada Build, fora da pasta Assets, antes de clicar em Build.`,
      atividade: `No Build Settings, selecione PC, Mac and Linux Standalone e confirme Target Platform como Windows. Crie uma pasta vazia chamada Build (em Documentos, por exemplo). Clique em Build, escolha essa pasta e aguarde o Unity gerar o seu jogo.`,
      gabarito: `O exercício está completo quando, dentro da pasta Build, existem um arquivo executável com a extensão .exe e uma pasta de dados com o mesmo nome (terminada em _Data), além de arquivos de apoio do Unity. A presença do .exe ao lado da pasta de dados é o sinal de que a exportação funcionou.`,
    },
    {
      titulo: `Testar o jogo fora do editor`,
      tipo: `desafio`,
      tempo: `10 min`,
      guiaProfessor: `Peça que fechem o Unity por completo antes de testar, para sentir o jogo como um jogador. Tenha em mãos a folha de checklist para o aluno anotar o que funcionou e o que falhou.`,
      atividade: `Feche o Unity. Abra a pasta Build e dê dois cliques no arquivo .exe. Jogue por um minuto e preencha o checklist: o jogo abriu? Começou no menu? A fase carregou? Os controles funcionam em tela cheia? Anote qualquer problema.`,
      gabarito: `O teste é válido quando o aluno consegue abrir o jogo pelo .exe sem o editor aberto e responde às quatro perguntas do checklist com base no que viu. Um resultado ideal: o jogo abre no menu, a fase carrega e os controles respondem. Se algo falha, o aluno deve registrar exatamente o quê (ex.: tela preta, controle travado) para corrigir depois.`,
    },
    {
      titulo: `Corrigir um build com cena faltando`,
      tipo: `caça aos bugs`,
      tempo: `12 min`,
      guiaProfessor: `Prepare ou simule um build em que a segunda fase ficou de fora da lista, então ela some no jogo final. Deixe o aluno diagnosticar olhando o Scenes In Build e refazer o build. Esta é a atividade mais difícil; oriente a ler o problema com calma.`,
      atividade: `Seu jogo de exemplo abre no menu, mas ao passar da fase 1 para a fase 2 a tela fica preta ou volta ao menu. Investigue a lista Scenes In Build, descubra o que está faltando, conserte e gere o build de novo. Em C#, a troca de cena costuma usar o nome exato da cena, então confira se o nome carregado bate com o da lista.`,
      gabarito: `O problema é a fase 2 não estar marcada em Scenes In Build, então o Unity não a inclui no executável e a troca de cena falha. A correção: abrir o Build Settings, adicionar a cena da fase 2 (Add Open Scenes com ela aberta) e confirmar que ficou marcada na ordem certa, depois clicar em Build novamente. O código de troca de cena fica assim, sem alterações necessárias:

using UnityEngine;
using UnityEngine.SceneManagement;

public class TrocarCena : MonoBehaviour
{
    public string nomeDaProximaCena = "Fase2";

    public void IrParaProximaCena()
    {
        SceneManager.LoadScene(nomeDaProximaCena);
    }
}

A linha SceneManager.LoadScene(nomeDaProximaCena) só funciona se a cena chamada (Fase2) estiver presente e marcada na lista Scenes In Build; por isso a correção é incluir a cena na build, e o valor de nomeDaProximaCena deve ser exatamente igual ao nome do arquivo da cena.`,
    },
  ],
};
