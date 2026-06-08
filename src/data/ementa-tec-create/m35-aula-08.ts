import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 8,
  titulo: "Meu Programa: Finalizar e Apresentar",
  semana: "Semana 4",
  duracao: "1 hora",
  objetivo: `Finalizar o programa próprio em Python, testar tudo, corrigir os últimos erros, adicionar melhorias finais e apresentar o projeto pronto para a turma.`,
  descricao: `Esta é a última aula do mês de Python e também a aula da grande entrega. Durante as três semanas anteriores, cada aluno aprendeu variáveis, decisões, repetições, funções, listas, dicionários e algoritmos, e nas aulas 6 e 7 começou a planejar e construir um programa próprio. Agora chegou o momento de fechar esse projeto com qualidade: testar o programa do começo ao fim, caçar os últimos erros, deixar a experiência clara e divertida para quem usa, e apresentar o resultado com orgulho para os colegas.

O foco do dia não é inventar coisas novas, e sim polir o que já existe. Polir significa olhar o próprio programa com olhar crítico, rodar várias vezes, testar respostas estranhas e consertar o que quebrar. Significa também caprichar nas mensagens que o programa mostra na tela, deixando o texto amigável, com instruções claras e um toque de personalidade. Um bom programa não é só aquele que funciona: é aquele que qualquer pessoa consegue usar sem se perder.

A segunda metade da aula é dedicada à apresentação. Apresentar um projeto é uma habilidade tão importante quanto programar. O aluno vai mostrar o programa rodando, explicar a ideia por trás dele, contar qual foi a parte mais difícil e o que aprendeu no caminho. Como as turmas têm até 10 alunos, dá tempo de cada um apresentar e receber aplausos e perguntas dos colegas, num clima de celebração.

Ao final desta aula, cada aluno terá concluído o entregável do mês: um programa próprio em Python, testado, melhorado e apresentado. É o fechamento do bloco de Python dentro do Ano 3, somando-se aos outros grandes projetos do ano, o jogo no Roblox e o site completo. O aluno sai daqui sabendo que é capaz de ter uma ideia, transformá-la em código e mostrar o resultado para outras pessoas.`,
  materiais: [
    `Computadores com Python instalado e um editor de código (por exemplo, VS Code ou Thonny) com o projeto de cada aluno aberto`,
    `Projetor ou tela grande para o professor demonstrar testes e para os alunos apresentarem o programa rodando`,
    `Arquivo de exemplo: um pequeno programa pronto e bem-acabado (com menu, mensagens claras e tratamento de erro) para servir de modelo`,
    `Arquivo de exemplo com erros propositais (uma divisão por zero e um texto onde se espera número) para treinar a correção de erros`,
    `Checklist de finalização impresso ou projetado (roda sem travar, mensagens claras, testado com respostas estranhas, código salvo)`,
    `Roteiro curto de apresentação impresso (o que faz, como usar, parte mais difícil, o que aprendi)`,
    `Navegador disponível para consultar a documentação do Python em caso de dúvida pontual`,
  ],
  conceitosChave: [
    `Testar — rodar o programa de propósito várias vezes, inclusive com respostas estranhas, para descobrir o que quebra antes de outra pessoa usar.`,
    `Bug — um erro no programa que faz ele travar ou se comportar de um jeito diferente do esperado.`,
    `Depurar (debugar) — procurar a causa de um bug e corrigi-la, lendo a mensagem de erro e testando de novo.`,
    `Tratamento de erro — proteger o programa para que ele avise educadamente em vez de quebrar quando o usuário digita algo inesperado.`,
    `Experiência do usuário — o quanto é fácil e agradável usar o programa, com mensagens claras e instruções simples.`,
    `Versão final — a entrega pronta, salva e organizada, depois de testada e melhorada.`,
    `Apresentação — mostrar o projeto rodando e explicar a ideia, as dificuldades e os aprendizados para a turma.`,
  ],
  treinamento: `## O que o professor precisa saber

Você não precisa ser especialista em Python para conduzir esta aula. O essencial é saber rodar um programa, ler a mensagem de erro quando ele quebra e ajudar o aluno a encontrar a linha problemática. Para rodar, abra o arquivo do projeto no editor e clique no botão de executar (no VS Code é o triângulo verde no canto superior direito; no Thonny é o botão verde Run). O programa aparece no terminal embaixo. Quando dá erro, o Python mostra um texto vermelho terminando com o tipo do erro e o número da linha; é ali que se começa a investigar.

Antes da aula, abra o programa de exemplo bem-acabado e rode algumas vezes para se familiarizar. Depois abra o exemplo com erros propositais e treine corrigir os dois problemas: a divisão por zero e o texto digitado onde se espera número. O segredo da aula é o aluno testar de propósito, inclusive com respostas erradas, e proteger o programa com tratamento de erro simples usando try e except.

## Passo a passo da aula (ritmo 10/15/25/10)

10 min — Aquecimento e revisão. Abra o programa de exemplo bem-acabado no projetor e use-o como usuário, mostrando como as mensagens são claras. Apresente o checklist de finalização em voz alta. Peça que cada aluno abra o próprio projeto e rode uma vez para ver onde está.

15 min — Conteúdo novo guiado. Ensine a testar de propósito. Digite respostas estranhas no programa de exemplo e mostre onde ele quebra. Apresente o tratamento de erro escrevendo na tela, linha a linha:

idade = input("Digite sua idade: ")
try:
    idade = int(idade)
    print("Ano que vem você tera", idade + 1)
except ValueError:
    print("Ops! Digite apenas numeros, por favor.")

Explique: input sempre devolve texto; int tenta virar número; o bloco try tenta executar e, se der erro de valor, o except mostra um aviso amigável em vez de travar. Mostre também como melhorar uma mensagem, trocando print("Erro") por print("Escolha invalida. Digite 1, 2 ou 3.").

25 min — Mão na massa. Cada aluno percorre o checklist no próprio programa: 1) roda do início ao fim sem travar; 2) testa com respostas estranhas e anota o que quebrou; 3) protege as entradas com try e except; 4) melhora pelo menos duas mensagens para ficarem claras e divertidas; 5) salva o arquivo. Circule pela sala parando em cada aluno e ajude a ler as mensagens de erro.

10 min — Desafio e compartilhar. Cada aluno faz uma mini-apresentação de um minuto usando o roteiro: o que o programa faz, como usar, a parte mais difícil e o que aprendeu. A turma aplaude e faz uma pergunta.

## Como explicar de forma clara (linguagem para a idade)

Compare testar com checar a mochila antes de sair: você confere tudo para não esquecar nada. Diga que um bug é como um tropeço escondido no caminho, e depurar é acender a lanterna para achá-lo. O tratamento de erro é como um corrimão na escada: se a pessoa escorregar digitando algo errado, o programa segura em vez de deixar cair. Para a experiência do usuário, peça que imaginem um amigo que nunca viu o programa: ele entenderia sozinho o que fazer? Reforce que apresentar é comemorar o que construíram.

## Erros comuns e como ajudar

O erro mais comum é o aluno achar que está pronto sem testar; insista para que rodem várias vezes e digitem respostas erradas de propósito. Outro é entrar em pânico com o texto vermelho do erro; ensine a ler a última linha, que diz o tipo e a linha do problema. Muitos esquecem que input devolve texto e tentam somar com número sem converter; mostre o int e o try. Há quem queira adicionar recursos novos e gigantes na última hora; oriente a focar em terminar e polir o que já existe. Por fim, alguns travam na hora de apresentar; combine antes o roteiro de quatro pontos e lembre que a turma está ali para torcer.`,
  exercicios: [
    {
      titulo: `Caça aos erros no programa de exemplo`,
      tipo: `prática guiada`,
      tempo: `8 minutos`,
      guiaProfessor: `Use o arquivo de exemplo com erros propositais. Peça que o aluno rode primeiro e leia a mensagem de erro antes de mexer. Reforce a leitura da última linha do erro, que aponta a linha e o tipo do problema.`,
      atividade: `Abra o arquivo de exemplo com erros, rode o programa e leia a mensagem vermelha. Encontre os dois problemas (uma divisão por zero e um texto onde se espera número) e descreva, com suas palavras, o que cada um causa.`,
      gabarito: `O aluno deve identificar dois erros. Primeiro, a divisão por zero, que gera ZeroDivisionError quando o divisor é 0. Segundo, a conversão de um texto que não é número com int, que gera ValueError. Resposta esperada: os dois erros localizados pela linha indicada e descritos em palavras simples, por exemplo "ele tenta dividir por zero" e "ele tenta transformar uma palavra em número".`,
    },
    {
      titulo: `Mensagem mais clara`,
      tipo: `prática na ferramenta`,
      tempo: `8 minutos`,
      guiaProfessor: `Mostre antes a diferença entre uma mensagem seca e uma mensagem clara. Oriente o aluno a escolher uma mensagem do próprio programa e melhorá-la. Peça que rode depois para conferir.`,
      atividade: `No seu programa, escolha uma mensagem pouco clara que aparece na tela e reescreva-a para ficar amigável e explicar o que o usuário deve fazer. Rode o programa e confira se ficou melhor.`,
      gabarito: `O aluno troca uma mensagem vaga por uma clara. Exemplo de solução: trocar print("Erro") por print("Escolha invalida. Digite 1 para somar ou 2 para sair."). Resposta esperada: pelo menos uma mensagem reescrita, mais clara e instruindo o usuário, com o programa rodando normalmente depois.`,
    },
    {
      titulo: `Proteger uma entrada com try e except`,
      tipo: `desafio`,
      tempo: `10 minutos`,
      guiaProfessor: `Relembre o exemplo do conteúdo guiado. Oriente o aluno a achar um ponto onde o programa pede um número e protegê-lo. Acompanhe a indentação, que é o erro mais comum aqui.`,
      atividade: `Encontre no seu programa um lugar onde você pede um número ao usuário. Proteja essa parte com try e except para que, se a pessoa digitar uma letra, o programa avise em vez de travar. Teste digitando uma letra de propósito.`,
      gabarito: `O aluno envolve a conversão em try e trata o ValueError. Exemplo de solução:

valor = input("Digite um numero: ")
try:
    valor = int(valor)
    print("O dobro e", valor * 2)
except ValueError:
    print("Isso não e um numero. Tente de novo.")

Resposta esperada: ao digitar uma letra, o programa mostra o aviso amigável e não quebra; ao digitar um número, funciona normalmente.`,
    },
    {
      titulo: `Teste maluco em dupla`,
      tipo: `em dupla`,
      tempo: `12 minutos`,
      guiaProfessor: `Forme duplas. Cada aluno usa o programa do colega tentando quebrá-lo de propósito, pois um usuário de fora encontra falhas que o autor não vê. Garanta um clima respeitoso, com elogio junto à falha encontrada.`,
      atividade: `Troque de computador com seu colega e use o programa dele tentando quebrá-lo: digite letras onde pede número, deixe respostas vazias, escolha opções que não existem. Anote tudo o que travou ou ficou confuso e devolva como dicas. Depois conserte pelo menos uma falha encontrada no seu próprio programa.`,
      gabarito: `Cada aluno entrega ao colega uma lista com ao menos uma falha real (por exemplo, o programa trava ao digitar texto, ou a opção 9 não mostra mensagem). Em seguida, cada um corrige pelo menos uma falha do próprio programa, geralmente adicionando try e except ou uma verificação com if. Resposta esperada: lista de falhas trocada entre a dupla e ao menos uma correção feita e testada em cada programa.`,
    },
    {
      titulo: `Versão final e apresentação`,
      tipo: `projeto curto`,
      tempo: `12 minutos`,
      guiaProfessor: `Esta é a entrega do mês. Garanta que cada aluno percorra o checklist de finalização e salve o arquivo. Use o roteiro de quatro pontos para a apresentação e cronometre cerca de um minuto por aluno, com aplausos e uma pergunta da turma.`,
      atividade: `Confira o checklist de finalização no seu programa: roda sem travar, mensagens claras, testado com respostas estranhas e arquivo salvo. Depois apresente para a turma em um minuto, dizendo o que o programa faz, como usar, a parte mais difícil e o que você aprendeu.`,
      gabarito: `O aluno entrega a versão final do programa próprio, com todos os itens do checklist atendidos: roda do início ao fim sem travar, tem mensagens claras, foi testado com respostas estranhas e está salvo. Na apresentação, cobre os quatro pontos do roteiro (o que faz, como usar, parte mais difícil, o que aprendeu). Resposta esperada: programa concluído, salvo e apresentado, fechando o entregável do mês de Python.`,
    },
  ],
};
