import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 1,
  titulo: "Por dentro do computador: hardware",
  semana: "Semana 1",
  duracao: "1 hora",
  objetivo: `Entender o que é hardware e identificar as peças físicas principais do computador (processador, memória RAM, HD/SSD e placa-mãe), sabendo o que cada uma faz de forma simples.`,
  descricao: `Esta é a primeira aula do curso e do mês dedicado aos fundamentos da informática. Antes de aprender a usar programas, inteligências artificiais e ferramentas de produtividade, o aluno precisa entender a máquina que está na frente dele. Hardware é o nome de tudo que é físico no computador: as peças que você pode tocar, segurar e ver. É o oposto de software, que são os programas, e que será o assunto da próxima aula. Nesta aula o foco é só no que é palpável.

Os adolescentes vão conhecer quatro peças centrais e descobrir que cada uma tem uma função clara. O processador (também chamado de CPU) é o "cérebro": é ele que faz as contas e toma as decisões. A memória RAM é a "mesa de trabalho": guarda o que está sendo usado agora, mas esquece tudo quando o computador desliga. O HD ou SSD é o "armário": guarda os arquivos de forma permanente, mesmo com a máquina desligada. E a placa-mãe é a "cidade" onde tudo se conecta: é a grande placa que liga todas as peças entre si.

O coração da aula é uma distinção que costuma confundir muita gente, inclusive adultos: a diferença entre "cérebro" e "memória". Pensar e guardar são coisas diferentes. O processador pensa rápido, mas não guarda nada por muito tempo; o SSD guarda tudo, mas não pensa. Quando o aluno entende isso, frases como "meu computador travou porque a memória encheu" passam a fazer sentido de verdade.

O papel do professor é ser um guia tranquilo e concreto. Não é preciso ser técnico em manutenção: basta mostrar as peças (em fotos, em vídeo ou, se houver, em um gabinete aberto de verdade) e conectar cada uma a uma comparação do dia a dia. O clima ideal é de curiosidade e descoberta, como quem abre um brinquedo para ver o que tem dentro. Esta base é o alicerce de todo o curso: quem entende como a máquina funciona usa qualquer ferramenta com mais segurança.`,
  materiais: [
    `Computadores (1 por aluno) com Windows aberto, para localizar as informações de hardware da própria máquina`,
    `Projetor ou TV para o professor mostrar fotos das peças e demonstrar onde clicar no Windows`,
    `Slide ou folha impressa com fotos grandes e identificadas de processador, memória RAM, HD/SSD e placa-mãe`,
    `Se possível, um gabinete antigo aberto (ou peças soltas reais) para a turma ver e tocar com cuidado`,
    `Quadro branco ou flip chart para anotar as comparações (cérebro, mesa, armário, cidade)`,
    `Folha de atividade com a tabela "peça — apelido — função" para os alunos preencherem`,
    `Cartaz com a frase-chave do mês: pensar (processador) é diferente de guardar (memória e SSD)`,
  ],
  conceitosChave: [
    `Hardware — todas as peças físicas do computador, aquelas que você pode tocar (o oposto dos programas).`,
    `Processador (CPU) — o "cérebro" da máquina; faz as contas e toma as decisões em alta velocidade.`,
    `Memória RAM — a "mesa de trabalho"; guarda o que está em uso agora e esvazia quando o computador desliga.`,
    `HD/SSD — o "armário"; guarda arquivos e programas de forma permanente, mesmo com a máquina desligada.`,
    `Placa-mãe — a grande placa onde todas as peças se conectam e conversam entre si.`,
    `Gabinete — a caixa que protege e abriga as peças internas do computador.`,
    `Gigabyte (GB) — unidade que mede o tamanho da memória e do armazenamento; quanto mais GB, mais cabe.`,
  ],
  treinamento: `## O que o professor precisa saber

Você não precisa ser técnico em manutenção para dar esta aula. Bastam quatro ideias simples. Hardware é tudo que é físico no computador; software (programas) fica para a próxima aula. As quatro peças centrais são: processador (o cérebro, que pensa e calcula), memória RAM (a mesa de trabalho, rápida mas temporária), HD ou SSD (o armário, que guarda tudo de forma permanente) e placa-mãe (a placa grande onde tudo se conecta). A distinção mais importante é entre pensar e guardar: o processador pensa, a memória e o SSD guardam. Antes da aula, abra o aplicativo "Configurações" do Windows em uma máquina e localize as informações de hardware, para demonstrar com segurança.

## Passo a passo da aula (ritmo 10/15/25/10)

1. Aquecimento (10 min). Pergunte: "O que tem dentro de um computador?". Anote os palpites no quadro, mesmo os errados. Mostre uma foto de um gabinete aberto no projetor e diga: "tudo isso que vemos aqui tem um nome e uma função; hoje vamos conhecer as quatro peças mais importantes".

2. Conteúdo novo guiado (15 min). Apresente uma peça de cada vez, sempre com a comparação: processador = cérebro; RAM = mesa de trabalho; HD/SSD = armário; placa-mãe = cidade onde tudo se liga. Depois, mostre onde o próprio Windows revela essas peças. No teclado, pressione a tecla com o logo do Windows + a letra I para abrir as "Configurações". Clique em "Sistema" e desça até "Sobre". Aponte na tela: o "Processador" aparece escrito ali, e a "RAM instalada" também (em GB). Diga em voz alta o que cada número significa.

3. Mão na massa (25 min). Cada aluno repete no próprio computador: tecla Windows + I, depois "Sistema" e "Sobre". Eles anotam na folha de atividade o nome do processador e a quantidade de memória RAM da máquina. Em seguida, preenchem a tabela "peça — apelido — função" para as quatro peças. Circule pela sala conferindo se cada um achou o "Sobre" e ajude quem se perdeu. Para quem terminar rápido, peça que descubram também o armazenamento: em "Configurações", clique em "Sistema" e depois em "Armazenamento" para ver quantos GB o SSD tem.

4. Desafio e compartilhar (10 min). Cada dupla recebe a pergunta: "se o computador desliga, o que se apaga: a RAM ou o SSD?". Eles discutem e respondem com a comparação (mesa x armário). Feche escrevendo no quadro a frase-resumo: pensar é tarefa do processador; guardar é tarefa da memória e do SSD.

## Como explicar de forma clara (linguagem para a idade)

Use comparações do dia a dia, porque elas grudam. Diga: "o processador é o cérebro: ele pensa e decide tudo, mas não anota nada". "A memória RAM é a sua mesa enquanto faz a lição: cabe pouca coisa, é rápida, mas, quando você sai, a mesa fica vazia". "O SSD é o armário do quarto: cabe muita coisa e fica guardado mesmo quando você dorme". "A placa-mãe é a cidade onde todas essas peças moram e conversam por ruas". Evite termos técnicos demais; troque "volátil" por "esquece quando desliga". Mostre números reais da máquina deles (por exemplo, "8 GB de RAM") para tornar tudo concreto.

## Erros comuns e como ajudar

O erro mais comum é confundir memória RAM com armazenamento (SSD/HD); reforce sempre a dupla mesa (temporária) x armário (permanente). Muitos acham que "memória" é o lugar onde ficam as fotos: explique que fotos ficam no SSD, não na RAM. Outro engano é achar que o processador "guarda" coisas; lembre que ele só pensa. Alguns confundem o gabinete (a caixa) com o computador inteiro, ou chamam o monitor de "CPU": corrija com calma, mostrando que a CPU é uma peça lá dentro. Por fim, alguns alunos vão se perder no caminho das "Configurações"; mostre de novo o atalho tecla Windows + I e o caminho "Sistema" depois "Sobre", e peça que ajudem o colega ao lado.`,
  exercicios: [
    {
      titulo: `Quem é quem: ligando a peça à função`,
      tipo: `Prática na ferramenta`,
      tempo: `8 min`,
      guiaProfessor: `Faça com a turma, projetando as fotos das peças. O objetivo é fixar o nome e o apelido de cada uma antes de qualquer coisa mais difícil. Mostre cada foto, diga o nome e peça que a turma responda o apelido em voz alta.`,
      atividade: `Na sua folha, ligue cada peça ao apelido certo: Processador, Memória RAM, HD/SSD e Placa-mãe. Apelidos disponíveis: cérebro, mesa de trabalho, armário e cidade onde tudo se conecta.`,
      gabarito: `Processador = cérebro; Memória RAM = mesa de trabalho; HD/SSD = armário; Placa-mãe = cidade onde tudo se conecta. O aluno acerta se ligar corretamente os quatro pares.`,
    },
    {
      titulo: `Investigando a minha máquina`,
      tipo: `Prática na ferramenta`,
      tempo: `10 min`,
      guiaProfessor: `Demonstre o caminho no projetor antes de soltar a atividade: tecla Windows + I, depois "Sistema" e "Sobre". Circule para garantir que todos encontraram a tela e ajude quem não achar o atalho.`,
      atividade: `No seu computador, pressione a tecla Windows + I para abrir as Configurações. Clique em "Sistema" e depois em "Sobre". Anote na folha: 1) o nome do processador; 2) a quantidade de memória RAM (em GB).`,
      gabarito: `O aluno deve abrir as Configurações pelo atalho, chegar em "Sistema" depois "Sobre" e anotar dois dados reais da própria máquina: o nome do processador (ex.: Intel Core i5) e a RAM instalada em GB (ex.: 8 GB). Acerta quem registrar os dois corretamente, mesmo que os valores variem de máquina para máquina.`,
    },
    {
      titulo: `Mesa ou armário? O teste do desligar`,
      tipo: `Em dupla`,
      tempo: `12 min`,
      guiaProfessor: `Forme duplas. A ideia é aplicar a distinção entre memória temporária (RAM) e permanente (SSD) a situações reais. Peça que decidam juntos e justifiquem com o apelido (mesa ou armário) antes de escrever.`,
      atividade: `Em dupla, leiam cada situação e digam onde a informação está: na RAM (mesa) ou no SSD (armário). 1) Um texto que você está digitando e ainda não salvou. 2) Uma foto já salva na pasta Imagens. 3) Um vídeo aberto no navegador agora. 4) Um trabalho salvo ontem.`,
      gabarito: `1) RAM (mesa) — ainda não foi salvo, está em uso. 2) SSD (armário) — já está guardado de forma permanente. 3) RAM (mesa) — está em uso agora; se desligar, some. 4) SSD (armário) — foi salvo e continua lá. A dupla acerta se classificar pelo menos 3 das 4 situações corretamente e justificar com o apelido.`,
    },
    {
      titulo: `Por que o computador ficou lento?`,
      tipo: `Desafio`,
      tempo: `10 min`,
      guiaProfessor: `Aqui o aluno usa o que aprendeu para explicar um problema do dia a dia. Não há resposta única perfeita; valorize quem conectar o sintoma à peça certa. Incentive o uso das comparações (mesa cheia, armário cheio, cérebro fazendo muita conta).`,
      atividade: `Imagine três computadores com problemas. Para cada um, escreva qual peça pode estar sobrecarregada e por quê: 1) Trava quando muitos programas estão abertos ao mesmo tempo. 2) Não tem mais espaço para salvar fotos. 3) Demora muito para abrir e fazer cálculos pesados.`,
      gabarito: `1) Memória RAM — muitos programas abertos enchem a "mesa de trabalho" e a máquina trava. 2) HD/SSD — o "armário" está cheio, sem espaço para guardar mais arquivos. 3) Processador — o "cérebro" está sobrecarregado com muitas contas. O aluno acerta se associar cada sintoma à peça certa, usando as comparações para justificar.`,
    },
    {
      titulo: `Cartaz: as quatro peças do computador`,
      tipo: `Projeto curto`,
      tempo: `15 min`,
      guiaProfessor: `Esta atividade fecha a aula e reúne tudo. O aluno produz um pequeno cartaz (em papel) explicando as quatro peças. Oriente a usar uma cor por peça e o apelido de cada uma. Ao final, peça que cada um mostre o cartaz e diga qual peça achou mais interessante.`,
      atividade: `Monte um cartaz com as quatro peças principais. Para cada uma, escreva: o nome, o apelido e uma frase curta dizendo o que ela faz. Use os dados da sua própria máquina (processador e RAM) que você anotou no exercício 2. Capriche para que qualquer pessoa entenda só de ler.`,
      gabarito: `O cartaz deve trazer as quatro peças com nome, apelido e função: Processador (cérebro, pensa e calcula); Memória RAM (mesa, guarda o que está em uso e esvazia ao desligar); HD/SSD (armário, guarda tudo de forma permanente); Placa-mãe (cidade, conecta todas as peças). Acerta quem incluir as quatro peças com função correta e usar os dados reais da própria máquina no processador e na RAM. O ponto-chave é demonstrar que entendeu a diferença entre pensar e guardar.`,
    },
  ],
};
