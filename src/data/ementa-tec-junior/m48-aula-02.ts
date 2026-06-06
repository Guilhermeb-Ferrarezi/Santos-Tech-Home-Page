import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 2,
  titulo: "Conserta-Tudo: corrigindo o código Lua",
  semana: "Semana 1",
  duracao: "1 hora",
  objetivo: `Ao final da aula, cada criança será capaz de abrir o seu jogo no Roblox Studio e consertar pelo menos um bug da sua lista, ajustando o código Lua, a posição de uma peça ou uma regra do jogo, testando logo depois para confirmar que ficou bom.`,
  descricao: `Na aula passada, cada criança virou uma caçadora de bugs e fez a sua lista de problemas: coisas que não funcionavam, peças no lugar errado e regras esquisitas no jogo. Hoje começa a parte mais empolgante: virar uma mecânica conserta-tudo e arrumar esses problemas um por um. Cada aluno abre o seu próprio jogo no Roblox Studio, pega a sua lista e escolhe o primeiro bug para resolver.

Consertar um código é como arrumar um brinquedo que parou de funcionar: a gente olha com calma, descobre a pecinha que está fora do lugar e troca por uma certa. No Roblox, esse conserto pode ser de três tipos. Às vezes o problema está no código Lua, e a criança precisa corrigir uma palavra escrita errada ou um número trocado. Às vezes o problema é uma peça (Part) que está no lugar errado, e basta arrastar para a posição certa. E às vezes é uma regra do jogo, como a quantidade de pontos para vencer, que precisa de um ajuste.

O coração desta aula é um hábito de gente grande que faz software: consertar e testar, consertar e testar. Não adianta arrumar dez coisas de uma vez e nunca clicar em Play. Depois de cada conserto, a criança aperta Play, vê se o problema sumiu e só então marca o bug como resolvido na lista. Esse ciclo curto ensina que a gente não precisa acertar de primeira; a gente vai melhorando aos pouquinhos, testando o tempo todo.

O professor é o mestre conserta-tudo da turma. Como as turmas têm até dez alunos, dá para circular e dar atenção a cada criança, lendo junto a mensagem de erro na Output, mostrando onde está a pecinha trocada no código e comemorando cada bug que vira um "resolvido". A meta não é deixar o jogo perfeito hoje, é a criança sentir o orgulho de ter consertado com as próprias mãos pelo menos um problema e ter visto o teste confirmar a vitória.`,
  materiais: [
    `Um computador por aluno com o Roblox Studio aberto e o jogo final de cada criança já carregado (o mesmo arquivo da aula anterior, com os scripts Lua dentro).`,
    `A lista de bugs de cada aluno, feita na Aula 1, impressa ou anotada, com espaço para marcar cada problema como resolvido.`,
    `Projetor ou TV ligado ao computador do professor para mostrar na tela grande onde clicar e como ler a janela de erros.`,
    `Um jogo de exemplo do professor com três bugs prontos de propósito: uma palavra Lua escrita errada, uma peça fora do lugar e uma regra de pontos trocada.`,
    `Uma folha "Antes e Depois" por aluno para anotar o bug, o que fez para consertar e o resultado do teste.`,
    `Adesivos ou carimbos de "resolvido" para marcar cada conserto confirmado no teste.`,
    `Lápis, borracha e lápis de cor para preencher as folhas e a lista.`,
  ],
  conceitosChave: [
    `Bug — um errinho no jogo que faz alguma coisa não funcionar, como um botão que não aperta ou um pulo que não acontece.`,
    `Conserto — a mudança que a gente faz para o bug ir embora, como trocar uma pecinha torta por uma direita.`,
    `Código Lua — o texto de instruções dentro do Script que diz ao Roblox o que fazer; cada palavra precisa estar certinha.`,
    `Script — a folha de instruções do jogo, que aparece como um ícone de papelzinho dentro do Explorer.`,
    `Output — a janelinha de avisos do Studio onde aparecem as mensagens de erro escritas em vermelho.`,
    `Testar — apertar o botão Play para brincar e ver se o conserto deu certo de verdade.`,
    `Resolvido — quando o bug some no teste e a gente marca ele como vencido na lista.`,
  ],
  treinamento: `## O que o professor precisa saber

Hoje a turma corrige os bugs que cada criança listou na aula anterior. Você não precisa ser especialista em Lua; precisa saber ler uma mensagem de erro e achar três tipos de conserto. O primeiro é o erro de código Lua. No Roblox Studio, o código mora dentro de um Script, que aparece no painel Explorer (à direita) como um papelzinho. Dois cliques no Script abrem o editor de texto. Embaixo, a janela Output mostra os erros em vermelho. A mensagem traz o número da linha, por exemplo "Script:5", indicando que o problema está na linha 5.

Os erros de Lua mais comuns nas crianças são: palavra digitada errada (escreveram "prnt" em vez de "print"), maiúscula trocada (Lua diferencia maiúsculas, então "Print" não funciona como "print"), e esquecer a palavra "end" que fecha um bloco. Mostre o código certo linha a linha. Exemplo de código correto que solta uma mensagem:

local pontos = 0
print("Comecou o jogo")

Se a criança escreveu "prit" na primeira palavra, o conserto é trocar por "print". Simples assim.

O segundo tipo de conserto é a posição de uma peça: a criança clica na Part na janela 3D (Viewport) e arrasta para o lugar certo, ou usa as setas da ferramenta Move. O terceiro tipo é uma regra do jogo, como o número de pontos para vencer: basta abrir o Script e trocar o número. Antes da aula, abra o jogo de exemplo, confira os três bugs e teste cada conserto você mesmo apertando Play.

## Passo a passo da aula (ritmo 10/15/25/10)

10 min — Aquecimento e revisão: relembre a caçada de ontem. Pergunte: quantos bugs cada um achou? Mostre no projetor a sua lista de exemplo e diga que hoje vamos virar mecânicos conserta-tudo, arrumando e testando um por vez.

15 min — Conteúdo novo guiado: no seu jogo de exemplo, no projetor, mostre os três tipos de conserto. Primeiro, o código Lua: dê dois cliques no Script no Explorer, aponte o erro em vermelho na Output, mostre a linha apontada, corrija a palavra (por exemplo, troque "prit" por "print") e aperte Play. Segundo, a peça: clique na Part na Viewport e arraste para o lugar certo. Terceiro, a regra: abra o Script e troque o número de pontos. Depois de cada conserto, aperte Play e mostre que funcionou.

25 min — Mão na massa: cada criança abre o seu jogo, pega a sua lista e escolhe o primeiro bug. Circule pela sala, leia a Output junto com cada aluno e ajude a achar o conserto. Reforce sempre: conserta um, aperta Play, confere e marca como resolvido. Só então passa para o próximo bug. Comemore cada "resolvido".

10 min — Desafio e compartilhar: peça que cada aluno conte um bug que conseguiu resolver e como fez. Quem terminou cedo tenta um bug mais difícil sozinho. Entregue o adesivo de "resolvido" para cada conserto confirmado.

## Como explicar para crianças

Use a ideia do mecânico conserta-tudo. O jogo é como um carrinho que tem uma pecinha torta. A janela Output em vermelho é o carrinho "reclamando" e dizendo onde dói. O número da linha (Script:5) é o endereço da pecinha torta: é só ir até a linha 5. Consertar é trocar a palavra errada pela certa, igual trocar uma peça de Lego que não encaixa. Apertar Play é dar a partida no carrinho para ver se ele anda. Marcar "resolvido" é dar um troféu para a pecinha que voltou a funcionar. Fale frases curtas, aponte na tela e celebre cada vitória pequena.

## Erros comuns e como ajudar

A criança conserta vários bugs de uma vez e não sabe qual deu certo: peça para arrumar um só e apertar Play antes do próximo. A criança ignora a Output: leia a mensagem em voz alta com ela e mostre o número da linha. Maiúsculas: lembre que "print" é diferente de "Print" em Lua; o robô é exigente com letras. A criança apaga código demais: oriente trocar só a palavra errada, não a linha inteira. O teste não roda porque faltou "end": mostre que todo bloco precisa fechar com "end". A criança fica triste por não terminar tudo: reforce que arrumar um bug com teste já é uma grande vitória de programador.`,
  exercicios: [
    {
      titulo: `Achando a Reclamação do Jogo`,
      tipo: `Prática na ferramenta (guiada)`,
      tempo: `8 minutos`,
      guiaProfessor: `Abra no projetor o jogo de exemplo com o bug de Lua. Mostre onde fica a janela Output e como a mensagem vermelha aparece. Peça que cada aluno encontre a Output no seu Studio e leia em voz alta o número da linha que está reclamando. Passe de mesa em mesa confirmando.`,
      atividade: `Aperte Play no seu jogo. Olhe a janelinha de avisos chamada Output, lá embaixo. Procure uma mensagem escrita em vermelho. Leia bem alto o número da linha que aparece, por exemplo "linha 5". Esse é o endereço da pecinha torta!`,
      gabarito: `O aluno acertou quando aponta a janela Output, identifica a mensagem em vermelho e diz em voz alta o número da linha indicado pelo erro. Se ele não acha a Output, mostre como abri-la pelo menu View. Confirmar que ele leu o número correto da linha.`,
    },
    {
      titulo: `Trocando a Palavra Torta`,
      tipo: `Prática na ferramenta (autônoma)`,
      tempo: `12 minutos`,
      guiaProfessor: `Cada aluno conserta um bug de código Lua simples (uma palavra digitada errada). Conduza o ciclo: dois cliques no Script, ir até a linha do erro, trocar só a palavra errada, apertar Play. Reforce que Lua exige a palavra certinha e em minúsculas, como "print".`,
      atividade: `Dê dois cliques no Script (o papelzinho) no Explorer. Vá até a linha que estava reclamando. Ache a palavra escrita errada e troque pela certa. Por exemplo, se está "prit", apague e escreva "print". Agora aperte Play e veja se o erro vermelho sumiu.`,
      gabarito: `O aluno acertou quando corrige a palavra errada no Script, aperta Play e a mensagem vermelha não aparece mais na Output. Por exemplo, a linha correta fica: print("Comecou o jogo"). Se ainda der erro, leia a Output junto e confira maiúsculas e aspas.`,
    },
    {
      titulo: `A Peça no Lugar Certo`,
      tipo: `Prática na ferramenta (autônoma)`,
      tempo: `10 minutos`,
      guiaProfessor: `Agora o conserto é de posição, não de código. Cada aluno escolhe da sua lista uma peça (Part) que está no lugar errado, clica nela na Viewport, usa a ferramenta Move (setas) ou arrasta para o lugar certo e testa apertando Play para ver se o jogo melhorou.`,
      atividade: `Olhe a sua lista e ache um bug de peça fora do lugar. Clique nessa peça na janela grande (Viewport). Use as setinhas da ferramenta Move ou arraste a peça para o lugar certo. Aperte Play e ande até lá para ver se agora está bom. Deu certo? Marque como resolvido!`,
      gabarito: `O aluno acertou quando seleciona a peça certa, move para a posição correta e, ao testar com Play, o problema (por exemplo, um buraco no chão ou uma plataforma longe demais) desaparece. Confirmar que a criança testou e marcou o bug na lista.`,
    },
    {
      titulo: `Ajustando a Regra do Jogo`,
      tipo: `Prática na ferramenta (autônoma)`,
      tempo: `12 minutos`,
      guiaProfessor: `Conserto de regra: a criança abre o Script e troca um número que define uma regra, como quantos pontos são precisos para vencer. Mostre que mudar só o número muda a regra. Depois ela testa apertando Play. Ajude a localizar o número certo no código.`,
      atividade: `Abra o Script onde fica a regra do seu jogo. Ache o número da regra, por exemplo a quantidade de pontos para ganhar. Troque por um número que deixe o jogo mais justo (nem fácil demais, nem difícil demais). Por exemplo, mude de 100 para 10. Aperte Play e teste se ficou melhor.`,
      gabarito: `O aluno acertou quando localiza no Script o número da regra, troca por outro valor e, ao testar com Play, a regra muda como esperado (por exemplo, o jogo agora termina com 10 pontos). Por exemplo: local pontosParaVencer = 10. Confirmar que testou e anotou o resultado.`,
    },
    {
      titulo: `Mecânico Mestre: consertar e provar`,
      tipo: `Desafio (autônomo, dificuldade maior)`,
      tempo: `10 minutos`,
      guiaProfessor: `Para quem já resolveu os bugs mais fáceis. O aluno escolhe sozinho o bug mais difícil da sua lista, decide qual dos três tipos de conserto usar (código, peça ou regra), arruma, testa com Play e preenche a folha "Antes e Depois". Ajude só se travar de verdade. Premie com o adesivo de Mecânico Mestre.`,
      atividade: `Sozinho, escolha o bug mais difícil da sua lista. Pense: é problema de código, de peça ou de regra? Faça o conserto, aperte Play e teste. Depois preencha a folha "Antes e Depois": o que estava errado, o que você fez e se funcionou. Se resolveu, você é Mecânico Mestre!`,
      gabarito: `O aluno acertou quando, sem ajuda, identifica o tipo de bug, faz o conserto correto, confirma com o teste (Play) que o problema sumiu e preenche a folha "Antes e Depois" com as três informações (problema, conserto e resultado). Se conseguir, ganha o adesivo de Mecânico Mestre.`,
    },
  ],
};
