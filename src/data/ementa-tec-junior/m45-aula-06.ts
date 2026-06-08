import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 6,
  titulo: "Mudando e Combinando Valores",
  semana: "Semana 3",
  duracao: "1 hora",
  objetivo: `Aprender a trocar o valor guardado em uma variável, somar números simples e juntar textos com valores em uma única mensagem mostrada no Output.`,
  descricao: `Na aula passada as crianças descobriram que uma variável é como uma caixinha que guarda um valor. Nesta aula a gente vai um passo além: vamos mexer no que está dentro da caixinha. O aluno vai ver que o valor de uma variável não é permanente, ele pode ser trocado quando a gente quiser. Basta escrever o nome da variável de novo e dar um novo valor a ela. Isso é poderoso, porque é assim que os jogos de verdade funcionam: a vida do personagem começa em 100, leva um dano e vira 80, pega uma poção e sobe de novo.

Além de trocar valores, vamos ensinar a fazer continhas de soma. O Lua entende matemática! Se a gente escreve pontos = pontos + 10, o computador pega o valor que já estava guardado, soma 10 e guarda o resultado de volta na mesma caixinha. As crianças adoram ver o número crescer sozinho quando rodam o código várias vezes. É a primeira vez que elas sentem que o código está "calculando" para elas.

O grande momento da aula é juntar textos e números em uma mensagem só. Em Lua, a gente usa duas pontinhas (..) para colar pedaços de texto, como se fosse uma fita adesiva entre as palavras. Assim o print deixa de mostrar coisas soltas e passa a montar frases bonitas, do tipo "O herói Lobo tem 100 de vida". Esse colar de textos chama-se concatenação, mas para as crianças a gente fala "grudar" ou "colar".

Para fechar, os alunos montam a ficha de um personagem usando variáveis de nome, vida e pontos, e mandam o computador anunciar essa ficha no Output. É um exercício criativo que une tudo: criar caixinhas, trocar valores, somar e colar textos. No fim, cada um tem o seu próprio herói descrito por código.`,
  materiais: [
    `Computadores com o Roblox Studio aberto e o painel de Script (Lua) pronto para uso`,
    `Projetor ou TV para o professor mostrar o código sendo digitado linha a linha`,
    `Script de exemplo já pronto com a ficha de um personagem (para mostrar o resultado final antes de começar)`,
    `Cartão impresso grande com a "régua do colar": texto .. número = frase completa`,
    `Folha de papel e lápis para cada aluno rascunhar o nome, a vida e os pontos do seu herói antes de digitar`,
    `Lista visível no quadro com os erros mais comuns (esquecer aspas, esquecer os dois pontinhos)`,
  ],
  conceitosChave: [
    `Trocar valor — escrever o nome da variável de novo e dar um valor diferente, como tirar o que tinha na caixinha e colocar outra coisa.`,
    `Soma — usar o sinal de mais (+) para juntar dois números e achar um total.`,
    `Atualizar a variável — pegar o que já estava guardado, mudar e guardar de volta na mesma caixinha (por exemplo: pontos = pontos + 10).`,
    `Colar textos (concatenação) — usar dois pontinhos (..) para grudar pedaços de texto e formar uma frase só.`,
    `Mensagem montada — uma frase no print que mistura texto fixo com o valor de uma variável.`,
    `Ficha do personagem — um conjunto de variáveis (nome, vida, pontos) que descrevem um herói do jogo.`,
    `Output — a janelinha de baixo do Roblox Studio onde aparece tudo que o print manda mostrar.`,
  ],
  treinamento: `## O que o professor precisa saber

Você não precisa ser especialista em Lua. Só precisa saber três truques desta aula. Primeiro: para trocar o valor de uma variável, basta escrever o nome dela de novo com um valor diferente. Por exemplo, vida = 100 e, na linha de baixo, vida = 80. O computador sempre guarda o último valor. Segundo: o Lua faz contas. Se você escreve pontos = pontos + 10, ele soma e guarda o total. Terceiro, o mais importante: para juntar texto com número, usamos dois pontos finais (os dois pontinhos: ponto ponto). Exemplo: print("Vida: " .. vida). Repare nas aspas envolvendo o texto e nos dois pontinhos colando o número. Teste o script de exemplo em casa antes da aula para chegar tranquilo.

## Passo a passo da aula

Aquecimento (10 min): retome a aula anterior. Pergunte: "O que é uma variável?" Espere a resposta "uma caixinha". Mostre no projetor uma variável simples, vida = 100, e rode com o botão Play (o triângulo verde no topo) ou o botão Run. Mostre o número aparecer no Output (a aba na parte de baixo; se não estiver visível, clique no menu View e depois em Output).

Conteúdo novo guiado (15 min): no projetor, abra um Script novo. Para criar, vá no Explorer, passe o mouse sobre ServerScriptService, clique no sinal de mais e escolha Script. Apague o código que vem pronto. Digite com as crianças, linha a linha:
vida = 100
vida = 80
print(vida)
Rode e mostre que apareceu 80, não 100. Explique: o computador guardou o último. Agora a soma:
pontos = 0
pontos = pontos + 10
print(pontos)
Rode e mostre o 10. Por fim, o colar de textos:
nome = "Lobo"
print("O herói " .. nome)
Rode e leia a frase montada em voz alta, comemorando.

Mão na massa (25 min): cada aluno abre o próprio Script e cria a ficha do herói: nome (com aspas), vida (número) e pontos (número). Depois monta a mensagem com print e os dois pontinhos. Circule pela sala, olhando tela por tela. Esta é a parte mais longa de propósito: é onde eles aprendem de verdade, errando e consertando.

Desafio e compartilhar (10 min): peça que cada um faça o herói "tomar dano", trocando a vida para um número menor, e some 50 pontos com pontos = pontos + 50. Quem terminar mostra o Output no projetor e lê a ficha do seu herói para a turma.

## Como explicar para crianças

Use a imagem da caixinha o tempo todo. Trocar valor é "esvaziar a caixinha e colocar outra coisa dentro". Para a soma, diga: "o computador olha quanto tinha, junta mais um tanto e devolve o total para a mesma caixinha". Para o colar de textos, mostre o cartão da régua e diga que os dois pontinhos são "fita adesiva entre as palavras". Faça a brincadeira de juntar duas folhas de papel com fita na frente deles. Sempre leia a frase montada em voz alta, com entusiasmo, porque o resultado visível é o que mais empolga.

## Erros comuns e como ajudar

O erro número um é esquecer as aspas no texto, escrevendo nome = Lobo em vez de nome = "Lobo". O Output vai mostrar um erro em vermelho. Mostre que texto sempre mora entre aspas, número não. O segundo erro é confundir os dois pontinhos: alguns colocam um ponto só, ou um sinal de mais entre texto e número. Lembre que para grudar texto usamos os dois pontinhos, e o sinal de mais é só para somar números. O terceiro erro é esquecer de fechar o parêntese do print. Quando aparecer vermelho no Output, comemore: "achamos um bug, vamos consertar juntos!". Isso tira o medo de errar.`,
  exercicios: [
    {
      titulo: `Caixinha que muda de ideia`,
      tipo: `Demonstração guiada`,
      tempo: `5 minutos`,
      guiaProfessor: `Faça no projetor com a turma acompanhando. O objetivo é só sentir que o último valor é o que vale. Digite devagar e rode no fim.`,
      atividade: `Digite estas três linhas em um Script e descubra qual número vai aparecer no Output: vida = 100, depois vida = 30, depois print(vida).`,
      gabarito: `Aparece o número 30. O computador sempre guarda o último valor que foi colocado na variável, então o 100 foi substituído pelo 30.`,
    },
    {
      titulo: `O número que cresce`,
      tipo: `Prática individual`,
      tempo: `6 minutos`,
      guiaProfessor: `Cada aluno digita no seu computador. Mostre que pontos = pontos + 10 pega o valor antigo e soma. Peça para rodar e conferir o total.`,
      atividade: `Escreva: pontos = 5, depois pontos = pontos + 10, depois print(pontos). Quanto vai aparecer no Output?`,
      gabarito: `Aparece o número 15. O computador pegou o 5 que já estava guardado, somou 10 e guardou o total (15) de volta na caixinha pontos.`,
    },
    {
      titulo: `Colando texto com número`,
      tipo: `Prática individual`,
      tempo: `7 minutos`,
      guiaProfessor: `Aqui entra a concatenação. Reforce as aspas no texto e os dois pontinhos para colar. Circule para conferir as aspas, que é o erro mais comum.`,
      atividade: `Crie a variável vida = 100 e escreva uma mensagem que mostre no Output a frase: Vida: 100. Use o print com aspas e os dois pontinhos.`,
      gabarito: `O código é: vida = 100 e depois print("Vida: " .. vida). No Output aparece a frase Vida: 100, com o texto fixo "Vida: " colado ao valor da variável pelos dois pontinhos.`,
    },
    {
      titulo: `A ficha do meu herói`,
      tipo: `Projeto criativo`,
      tempo: `9 minutos`,
      guiaProfessor: `É o coração da aula. Deixe a criança escolher o nome do herói. Confira três coisas: aspas no nome, números sem aspas e os dois pontinhos na mensagem. Elogie cada ficha pronta.`,
      atividade: `Monte a ficha do seu herói com três variáveis: nome (texto entre aspas), vida (número) e pontos (número). Depois faça um print que mostre uma frase com o nome e a vida do herói.`,
      gabarito: `Exemplo válido: nome = "Lobo", vida = 100, pontos = 0, e depois print("O herói " .. nome .. " tem " .. vida .. " de vida"). No Output aparece: O herói Lobo tem 100 de vida. Qualquer nome e números escolhidos pela criança servem, desde que o texto fique entre aspas e os dois pontinhos colem os pedaços.`,
    },
    {
      titulo: `Dano e recompensa`,
      tipo: `Desafio`,
      tempo: `8 minutos`,
      guiaProfessor: `Desafio final que junta trocar valor e somar. A criança faz o herói tomar dano (trocando a vida) e ganhar pontos (somando). Quem terminar lê a ficha no projetor.`,
      atividade: `Usando a ficha do herói, faça duas coisas: troque a vida para um número menor, como se tivesse tomado dano, e some 50 aos pontos. Depois mostre no Output a vida e os pontos atualizados.`,
      gabarito: `Exemplo válido: depois de vida = 100 e pontos = 0, a criança escreve vida = 60 e pontos = pontos + 50, e por fim print("Vida: " .. vida .. " | Pontos: " .. pontos). No Output aparece: Vida: 60 | Pontos: 50. A vida foi trocada pelo número menor e os pontos subiram de 0 para 50 pela soma.`,
    },
  ],
};
