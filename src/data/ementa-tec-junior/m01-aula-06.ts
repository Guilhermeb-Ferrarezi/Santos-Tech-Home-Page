import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 6,
  titulo: "Fileiras Sem Parar",
  semana: "Semana 3",
  duracao: "1 hora",
  objetivo: `O aluno usa um loop de repetição para o Agente construir sozinho uma fileira de blocos, andando e plantando ao mesmo tempo, e troca o número de repetições para deixar a fileira maior ou menor.`,
  descricao: `Nesta aula as crianças descobrem que não precisam mandar o Agente fazer a mesma coisa várias vezes na mão. Em vez de empilhar muitos comandos iguais, elas colocam um único bloco de repetição (o loop) e dizem quantas vezes ele deve trabalhar. Dentro desse bloco vão dois comandos juntos: o Agente anda um passo e coloca um bloco. Repetindo isso, ele constrói uma fileira inteira de blocos, como se estivesse plantando uma cerca ou um caminho no chão.

Essa é uma das ideias mais importantes do mês: o computador é ótimo em repetir. Se uma pessoa fosse colocar cem blocos, ela ia se cansar e errar. O Agente não cansa nunca. Ele faz dez, vinte, cinquenta vezes com a mesma alegria. Por isso o loop é tão poderoso: a criança escreve pouco e o robô faz muito. Esse é o coração da programação e nesta idade ela já consegue sentir isso na prática, vendo a fileira crescer sozinha na tela.

O grande momento da aula é mudar o número dentro do loop. A criança digita 5 e aparece uma fileira de cinco blocos. Apaga, digita 10, e a fileira fica o dobro de comprida. Só um número muda tudo. Isso ensina, de um jeito concreto e divertido, que um número dentro do código tem poder de verdade sobre o que acontece no jogo.

A aula liga-se à anterior (em que conheceram o loop) e prepara a próxima (em que vão repetir fileiras para construir paredes e formas). Aqui o objetivo é firmar bem uma coisa só: repetir andar mais colocar bloco, e brincar com o número de repetições.`,
  materiais: [
    `Computadores (um por aluno ou em dupla) com Minecraft Education aberto e um mundo plano (Flat) já criado, com clima de dia e tempo parado, para as crianças não se distraírem com chuva ou monstros.`,
    `MakeCode já conectado ao Minecraft em cada máquina: dentro do jogo, apertar a tecla C abre a janela do Code Builder e a opção MakeCode.`,
    `Projetor ou TV ligada ao computador do professor para mostrar os passos na tela grande.`,
    `Agente já invocado perto de cada jogador (o comando de chamar o Agente pode ficar pronto num botão para facilitar).`,
    `Blocos suficientes para o Agente plantar: deixar a casinha (inventário) do Agente com bastante bloco do mesmo tipo, por exemplo lã colorida ou terra, no espaço 1.`,
    `Cartões impressos grandes com o desenho do bloco de repetição e setas, para usar na revisão sem o computador.`,
    `Adesivos ou carimbos de "Construtor do Dia" para premiar quem terminar o desafio.`,
  ],
  conceitosChave: [
    `Loop (repetição) — é o bloco que fala para o Agente fazer a mesma coisa de novo, de novo e de novo, sem a gente precisar repetir.`,
    `Número de repetições — é o numerozinho dentro do loop que diz quantas vezes o robô vai trabalhar. Trocar ele deixa a fileira maior ou menor.`,
    `Fileira — é uma linha de blocos um do lado do outro, igual aos vagões de um trenzinho.`,
    `Andar mais colocar — dentro do loop o Agente faz duas coisas juntas: dá um passo para a frente e deixa um bloco no chão.`,
    `Dentro do loop — são os comandos que ficam abrupados dentro da boca do bloco de repetição; só esses é que se repetem.`,
    `Executar — é apertar o botão para mandar o código rodar e ver o Agente obedecer no jogo.`,
    `O robô não cansa — diferente da gente, o Agente repete muitas vezes sem ficar cansado nem errar.`,
  ],
  treinamento: `## O que o professor precisa saber (a teoria + a base técnica)

O loop, ou bloco de repetição, é uma estrutura que executa os comandos de dentro dele um número definido de vezes. No MakeCode para Minecraft, o bloco que usaremos chama-se "repetir 4 vezes", da gaveta (categoria) "Laços" (Loops), de cor amarela ou laranja. Tudo que for encaixado dentro da boca desse bloco será repetido. Nesta aula colocaremos dois comandos do Agente lá dentro: "Agente mover para frente por 1" (gaveta azul "Agente", em inglês Agent) e "Agente colocar na frente" ou "Agente colocar para baixo" (também da gaveta Agente). A ordem importa: o Agente coloca o bloco e depois anda, ou anda e depois coloca; o resultado visual muda um pouquinho, mas qualquer ordem cria a fileira. Recomendo "colocar para baixo" e depois "mover para frente", pois assim os blocos ficam no chão formando um caminho fácil de ver.

Antes da aula, em cada máquina: entre no mundo plano, aperte C para abrir o Code Builder, escolha MakeCode, abra um Projeto Novo. Garanta que o Agente está visível (se não estiver, use o bloco "invocar agente"). Encha o inventário do Agente com blocos iguais no espaço 1, para que "colocar" sempre funcione.

## Passo a passo da aula (ritmo 10/15/25/10)

10 min — Aquecimento. Sem computador, mostre os cartões do loop. Diga: "Lembram do robô que não cansa?". Faça a turma bater palma 4 vezes e depois pergunte: "E se eu disser repetir 4 vezes bater palma?". Eles fazem. Troque o número para 2, depois 6. Já estão sentindo o loop.

15 min — Conteúdo novo guiado. No projetor, abra o MakeCode. Clique na gaveta "Laços" e arraste o bloco "repetir 4 vezes" para a área de trabalho, encaixando no "ao ser executado". Depois clique na gaveta azul "Agente": arraste "Agente colocar para baixo" para dentro do loop; em seguida arraste "Agente mover para frente por 1" logo abaixo, dentro do mesmo loop. Mostre que os dois comandos ficam abraçados pelo bloco amarelo. Clique no botão verde de executar (ou volte ao jogo e ative pelo botão de jogador). Todos veem o Agente plantar quatro blocos andando. Aplausos.

25 min — Mão na massa. Cada criança (ou dupla) monta o mesmo código na sua tela. Caminhe pela sala. Quando todos tiverem a fileira de 4, lance o desafio: "Clique no número 4 e troque por 8". Eles executam de novo e veem a fileira dobrar. Deixe brincarem: 10, 3, 15. Reforce que só o número mudou.

10 min — Desafio + compartilhar. Peça uma fileira de exatamente 6 blocos. Quem conseguir mostra a tela para a turma. Termine com a frase da aula: "Eu escrevo pouquinho e o robô faz muito!".

## Como explicar para crianças de 5 a 9 (analogias e linguagem)

Chame o loop de "máquina de repetir" ou "botão de fazer de novo". Use o trenzinho: cada bloco é um vagão, e o número diz quantos vagões o robô vai colocar. Outra imagem boa é plantar sementes: o Agente dá um passo e planta, dá um passo e planta. Evite as palavras "variável" ou "iteração". Fale "o numerozinho do loop" e "os comandos dentro da boca do bloco". Sempre conte junto em voz alta enquanto o Agente trabalha: "um, dois, três, quatro!", para a criança associar o número à quantidade de blocos.

## Erros comuns e como ajudar

O erro mais comum é colocar os comandos do Agente fora do loop (embaixo, não dentro): aí o Agente coloca só um bloco. Mostre que o bloco amarelo precisa "abraçar" os comandos. Outro erro: o Agente anda mas não planta porque o inventário está vazio; cheque o espaço 1 dele. Há quem troque o número e esqueça de executar de novo; lembre que é preciso clicar para rodar outra vez. Por fim, alguns esperam a fileira sair do nada: explique que primeiro montamos o código, depois apertamos o botão e só então o robô obedece.`,
  exercicios: [
    {
      titulo: `A Fileira do Agente`,
      tipo: `prática na ferramenta`,
      tempo: `12 minutos`,
      guiaProfessor: `Mostre no projetor o código pronto (loop "repetir 4 vezes" com "Agente colocar para baixo" e "Agente mover para frente por 1" dentro). Faça os alunos copiarem bloco por bloco na própria tela. Circule conferindo se os dois comandos estão DENTRO do loop. Ajude a encaixar quem deixou solto.`,
      atividade: `Monte na sua tela um loop que repete 4 vezes. Dentro dele coloque o Agente para deixar um bloco no chão e dar um passo para frente. Aperte o botão verde de executar e conte os blocos junto com a turma.`,
      gabarito: `O Agente anda quatro passos plantando um bloco a cada passo, formando uma fileira de exatamente 4 blocos no chão. Está certo quando os dois comandos do Agente aparecem abraçados pelo bloco amarelo de repetição e a fileira tem 4 blocos.`,
    },
    {
      titulo: `O Número Mágico`,
      tipo: `desafio na ferramenta`,
      tempo: `10 minutos`,
      guiaProfessor: `Com o código da fileira de 4 já pronto, peça que cliquem em cima do número 4 e digitem outro valor. Reforce em voz alta: "só o número muda, o resto fica igual". Lembre sempre de executar de novo depois de trocar.`,
      atividade: `Clique no número do seu loop. Troque o 4 por 8 e execute. Depois troque por 2 e execute. Por último troque por 10 e execute. Observe a fileira ficar maior e menor.`,
      gabarito: `Com 8 sai uma fileira de 8 blocos, com 2 sai uma de 2 blocos e com 10 sai uma de 10 blocos. Está certo quando o tamanho da fileira muda conforme o número digitado, sem precisar mexer em mais nada do código.`,
    },
    {
      titulo: `Vivo o Loop com o Corpo`,
      tipo: `jogo de movimento`,
      tempo: `8 minutos`,
      guiaProfessor: `Tire a turma das cadeiras. Você é o programador e cada criança é um Agente. Diga um número de repetições em voz alta e os comandos: dar um passo e fingir plantar uma semente. Conte junto. Depois deixe uma criança ser o programador e escolher o número.`,
      atividade: `Quando o professor disser "repetir 5 vezes: andar e plantar", dê 5 passos plantando uma sementinha imaginária a cada passo. Conte alto: um, dois, três, quatro, cinco! Depois alguém da turma escolhe um novo número.`,
      gabarito: `A criança dá exatamente o número de passos que foi dito, plantando a cada passo, e para quando o número acaba. Está certo quando a quantidade de passos bate com o número combinado e a turma conta junto até o fim.`,
    },
    {
      titulo: `Roda de Conversa: Por Que o Robô Não Cansa?`,
      tipo: `roda de conversa`,
      tempo: `8 minutos`,
      guiaProfessor: `Sente a turma em roda. Conduza com perguntas abertas, sem respostas certas ou erradas, valorizando cada fala. O objetivo é a criança perceber a vantagem de repetir com o loop em vez de fazer na mão.`,
      atividade: `Conversem juntos: Se VOCÊ tivesse que colocar 20 blocos um por um, ficaria cansado? E o Agente, cansa? Por que é melhor usar o loop em vez de mandar o comando 20 vezes na mão? O que acontece quando a gente troca o numerozinho do loop?`,
      gabarito: `Espera-se que as crianças digam, com suas palavras, que a gente se cansaria mas o Agente não, que o loop poupa trabalho porque a gente escreve pouco e o robô faz muito, e que trocar o número deixa a fileira maior ou menor. Está certo quando aparecem essas ideias, mesmo que ditas de forma simples.`,
    },
    {
      titulo: `Desenhe e Conte Sua Fileira`,
      tipo: `desenho no papel`,
      tempo: `12 minutos`,
      guiaProfessor: `Entregue papel e lápis de cor. Peça que cada criança desenhe a fileira que quer construir e escreva (ou peça ajuda para escrever) o número de blocos. Depois desafie a montar essa fileira no MakeCode usando o número certo no loop e conferir se bateu.`,
      atividade: `Desenhe no papel uma fileira de blocos coloridos e escreva embaixo quantos blocos ela tem. Depois vá no computador, coloque esse mesmo número no loop, execute e veja se a fileira do Agente ficou igual ao seu desenho.`,
      gabarito: `O número escrito no papel é o mesmo digitado no loop, e a fileira que o Agente constrói tem a mesma quantidade de blocos do desenho. Está certo quando a criança consegue dizer "desenhei 7 e o robô fez 7", mostrando que o número do loop controla o tamanho da fileira.`,
    },
  ],
};
