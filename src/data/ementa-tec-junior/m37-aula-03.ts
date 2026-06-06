import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 3,
  titulo: "Como a IA pensa e decide",
  semana: "Semana 2",
  duracao: "1 hora",
  objetivo: `Entender que a IA não tem certeza absoluta: ela dá uma nota de confiança (porcentagem) a cada palpite, e essa nota sobe quando o exemplo é fácil e treinado, e desce quando o exemplo é difícil ou novo.`,
  descricao: `Na aula passada as crianças treinaram o primeiro modelo de IA no ML for Kids. Hoje a gente vai abrir a "cabeça" da IA e descobrir uma coisa surpreendente: a inteligência artificial nunca diz "tenho 100 por cento de certeza" como se fosse mágica. Em vez disso, ela mostra uma nota de confiança, uma porcentagem, para cada palpite que faz. Quando você testa um exemplo no ML for Kids, a tela mostra algo como "gato — 92 por cento". Esse número é o coração da aula de hoje.

A ideia central é simples e muito visual: a IA é como um aluno fazendo prova. Quando a pergunta é parecida com o que ela estudou, ela responde com firmeza (confiança alta, perto de 100 por cento). Quando a pergunta é estranha, confusa ou nunca vista antes, ela responde com dúvida (confiança baixa, perto de 50 por cento ou menos). As crianças vão testar exemplos fáceis e exemplos difíceis e observar, ao vivo, a porcentagem subir e descer no projetor.

O professor vai conduzir uma investigação em grupo. Primeiro mostramos um exemplo bem fácil e celebramos a confiança alta. Depois mostramos um exemplo confuso de propósito (uma imagem borrada, um texto com palavras misturadas, um som abafado) e observamos a confiança despencar. As crianças anotam os números e começam a perceber um padrão: quanto mais exemplos bons a IA viu no treino, mais segura ela fica.

Esse conceito prepara o terreno para as próximas aulas, em que vamos caçar os erros da IA (Aula 4) e construir o modelo final (Aula 7). Hoje o objetivo não é consertar nada ainda, é apenas aprender a LER a confiança e entender que ela é uma pista honesta: a IA está dizendo "olha, dessa eu não tenho tanta certeza". Saber ler esse sinal é o que separa quem usa IA de qualquer jeito de quem usa IA com inteligência.`,
  materiais: [
    `Computadores (1 por dupla ou por criança) com o ML for Kids aberto no projeto de IA treinado na Aula 2`,
    `Projetor ou TV grande conectado ao computador do professor para mostrar a porcentagem de confiança para a turma toda`,
    `Conta do professor no ML for Kids com um modelo já treinado e funcionando (testar antes da aula)`,
    `Exemplos fáceis prontos: imagens/textos/sons bem claros e parecidos com o treino`,
    `Exemplos difíceis prontos: uma imagem borrada ou cortada, um texto com palavras trocadas, um som abafado (algo "pegadinha")`,
    `Folha de registro impressa ou caderno para cada criança anotar as porcentagens (uma coluna "exemplo", uma coluna "palpite", uma coluna "confiança")`,
    `Quadro branco ou cartolina para desenhar a "régua da confiança" de 0 a 100 por cento`,
  ],
  conceitosChave: [
    `Confiança — é o quanto a IA acredita no próprio palpite, mostrada como uma porcentagem de 0 a 100 por cento.`,
    `Porcentagem — um número que mostra "quanto de 100"; 90 por cento é quase tudo, 50 por cento é metade (pura dúvida).`,
    `Palpite — a resposta que a IA escolhe; ela sempre escolhe a opção com a maior confiança.`,
    `Exemplo fácil — algo bem parecido com o que a IA treinou, que deixa a confiança alta.`,
    `Exemplo difícil — algo estranho, novo ou confuso, que faz a confiança cair.`,
    `Treino — os exemplos que ensinamos para a IA; quanto mais exemplos bons, mais segura ela fica.`,
    `Dúvida da IA — quando a confiança fica baixa, é a IA sendo honesta e dizendo "não tenho certeza".`,
  ],
  treinamento: `## O que o professor precisa saber

Você não precisa ser especialista em IA para dar esta aula. Só precisa entender uma ideia: toda vez que a IA recebe algo para classificar (uma imagem, um texto ou um som), ela calcula um número de confiança para cada rótulo que aprendeu, e escolhe o rótulo com o número mais alto. No ML for Kids, depois de treinar o modelo, existe um botão "Testar" (em inglês, "Test"). Ao testar, a tela mostra o rótulo escolhido e, logo abaixo, a confiança em porcentagem (por exemplo, "happy — 87%"). Esse número é o protagonista da aula.

Analogia para você ter na cabeça: a IA é um aluno na prova. Pergunta fácil e estudada, responde com firmeza. Pergunta estranha, responde no chute. A porcentagem é o "tom de voz" do aluno: alto e firme, ou baixinho e inseguro.

Antes da aula: entre no seu projeto no ML for Kids, clique em "Learn & Test", confirme que o modelo está treinado (aparece "available") e teste 2 exemplos fáceis e 2 difíceis você mesmo, anotando as porcentagens. Assim você já sabe o que vai aparecer.

## Passo a passo da aula (10/15/25/10)

Aquecimento (10 min): Desenhe no quadro uma régua de 0 a 100 por cento, a "régua da confiança". Pergunte: "Quando vocês têm CERTEZA da resposta, ficam onde? E quando estão chutando?". Marque 100% (certeza), 50% (dúvida total). Relembre o modelo treinado na Aula 2.

Conteúdo novo guiado (15 min): No seu computador, com o projetor ligado, abra o ML for Kids, clique em "Learn & Test" e depois em "Test by you" (ou "Test"). Teste um exemplo fácil. Aponte para a porcentagem na tela: "Olha, a IA disse 90 por cento! Ela está confiante." Agora teste um exemplo difícil de propósito (borrado, confuso). A confiança cai. Diga: "A IA ficou na dúvida! Ela é honesta, está avisando." Mostre 3 exemplos fáceis e 3 difíceis, sempre apontando o número.

Mão na massa (25 min): As duplas vão para os computadores. Cada dupla testa pelo menos 6 exemplos (3 fáceis e 3 difíceis) clicando em "Test" e anotando na folha de registro: o que testaram, qual foi o palpite e a confiança em porcentagem. Circule pela sala perguntando "essa foi alta ou baixa? Por quê você acha?".

Desafio e compartilhar (10 min): Desafio: "Tentem achar o exemplo que deixou a IA MAIS confusa (a menor porcentagem)". Cada dupla mostra para a turma o exemplo mais difícil que encontrou e o número. Feche com a grande conclusão: quanto mais exemplos bons no treino, mais segura a IA fica.

## Como explicar para crianças

Use frases curtas e a analogia do aluno na prova. Diga: "A IA nunca tem certeza mágica. Ela dá uma nota de confiança, igual quando vocês falam 'acho que é isso... bem certinho' ou 'ahn... talvez?'". Use as mãos: braços bem abertos para confiança alta, dedinhos quase juntos para confiança baixa. Compare 90% com "quase enchi o copo de água" e 50% com "copo pela metade, na dúvida". Sempre que a confiança cair, comemore a honestidade da IA: "Que legal, ela avisou que não sabia!". Reforce a régua: aponte onde cada porcentagem cai.

## Erros comuns e como ajudar

As crianças confundem o palpite com a confiança: elas acham que "gato" é o número. Mostre que são duas coisas, o rótulo (a palavra) e a porcentagem (o número). Outra confusão: acham que confiança baixa significa "a IA está quebrada". Explique que baixa confiança é a IA sendo honesta, não um defeito. Algumas testam só exemplos fáceis para "ganhar" 100%; incentive a procurar exemplos difíceis de propósito. Se uma dupla travar no botão, mostre de novo onde fica "Test". Se a porcentagem não aparecer, confirme que o modelo terminou de treinar ("available"). Evite a ideia de "errado" hoje; o foco é só ler a confiança, não consertar.`,
  exercicios: [
    {
      titulo: `Leitura da régua da confiança`,
      tipo: `Aquecimento oral em grupo`,
      tempo: `8 minutos`,
      guiaProfessor: `Desenhe a régua de 0 a 100 por cento no quadro. Fale uma porcentagem e peça que as crianças mostrem com os braços (bem abertos = alta, quase juntos = baixa) e digam se a IA está confiante ou na dúvida.`,
      atividade: `Para cada número que o professor falar (95%, 50%, 80%, 55%, 99%), mostre com os braços e responda: a IA está CONFIANTE ou na DÚVIDA?`,
      gabarito: `95% confiante; 50% na dúvida (total); 80% confiante; 55% na dúvida (quase chute); 99% muito confiante. Regra: perto de 100 por cento é confiança; perto de 50 por cento é dúvida.`,
    },
    {
      titulo: `Caça à confiança alta`,
      tipo: `Prática guiada no computador`,
      tempo: `10 minutos`,
      guiaProfessor: `Cada dupla abre o ML for Kids em "Learn & Test", clica em "Test" e experimenta exemplos fáceis (bem parecidos com o treino). Peça que anotem a maior porcentagem que conseguirem.`,
      atividade: `Testem 3 exemplos fáceis no botão "Test". Anotem o palpite e a confiança de cada um. Qual exemplo deu a confiança MAIS ALTA?`,
      gabarito: `Os exemplos fáceis costumam dar confiança alta (acima de 80 ou 90 por cento). O exemplo mais parecido com o treino dá o maior número. Resposta correta = a dupla anotou três porcentagens altas e marcou a maior.`,
    },
    {
      titulo: `A pegadinha da IA`,
      tipo: `Investigação prática`,
      tempo: `12 minutos`,
      guiaProfessor: `Agora as duplas testam exemplos difíceis de propósito (imagem borrada, texto com palavras trocadas, som abafado). Circule perguntando por que a confiança caiu. Lembre: confiança baixa não é defeito, é honestidade.`,
      atividade: `Testem 3 exemplos difíceis. Anotem palpite e confiança. O que aconteceu com a porcentagem comparada à dos exemplos fáceis? Ela subiu ou desceu?`,
      gabarito: `A confiança DESCEU nos exemplos difíceis (mais perto de 50 por cento). Motivo: o exemplo é estranho ou novo, parecido com pouca coisa do treino, então a IA fica na dúvida. Isso é a IA sendo honesta.`,
    },
    {
      titulo: `O caçador da menor porcentagem`,
      tipo: `Desafio em dupla`,
      tempo: `10 minutos`,
      guiaProfessor: `Lance o desafio: encontrar o exemplo que deixa a IA MAIS confusa, ou seja, com a MENOR confiança possível. Vale criar exemplos esquisitos. Cada dupla registra o número campeão de baixo.`,
      atividade: `Procurem o exemplo que faz a IA ficar com a MENOR confiança de todas. Anotem qual foi e o número. Por que vocês acham que ele confundiu tanto a IA?`,
      gabarito: `O exemplo vencedor é o mais diferente de tudo que a IA treinou (muito borrado, muito misturado, muito novo). Quanto mais estranho, menor a confiança (perto de 50 por cento ou menos). A IA confunde porque não viu nada parecido no treino.`,
    },
    {
      titulo: `Por que a IA fica mais segura?`,
      tipo: `Reflexão e conclusão escrita`,
      tempo: `8 minutos`,
      guiaProfessor: `Feche a aula conectando tudo: por que a confiança é alta em uns casos e baixa em outros? Conduza a turma à grande ideia do mês: quanto mais exemplos bons no treino, mais segura a IA fica. Peça uma frase escrita ou falada.`,
      atividade: `Complete a frase: "A IA fica MAIS confiante quando ____________ e fica na DÚVIDA quando ____________." Escreva ou fale sua resposta.`,
      gabarito: `A IA fica mais confiante quando o exemplo é parecido com o que ela treinou (e quando teve muitos exemplos bons no treino); fica na dúvida quando o exemplo é novo, estranho ou confuso. Conclusão do mês: mais exemplos bons no treino = IA mais segura.`,
    },
  ],
};
