import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 2,
  titulo: "Prompts que Geram o Clipe Certo",
  semana: "Semana 1",
  duracao: "1 hora",
  objetivo: `Escrever prompts no Veo de forma intencional para gerar o vídeo desejado de propósito, ajustando palavras-chave e comparando versões até salvar os dois melhores clipes ligados ao tema do jogo do aluno.`,
  descricao: `Na aula passada os alunos geraram seus primeiros vídeos com o Veo dentro do Gemini e descobriram que a IA cria movimento a partir de texto. Foi divertido, mas muita coisa saiu por sorte: às vezes o clipe vinha ótimo, às vezes vinha estranho, e o aluno não sabia explicar o porquê. Esta aula resolve exatamente isso. O foco agora é tirar o resultado da sorte e colocar na intenção: escrever o prompt com cuidado para que o vídeo saia parecido com o que estava na cabeça do aluno.

A ideia central é que um prompt é uma receita. Se a receita estiver vaga, o prato vem qualquer coisa. Se estiver clara, com os ingredientes certos, o resultado se aproxima do esperado. Os alunos vão aprender a estrutura de um bom prompt para vídeo: dizer o que aparece (sujeito), onde está (cenário), o que acontece (ação) e como parece (estilo e clima). Vão praticar trocar uma palavra-chave de cada vez e observar como o clipe muda, entendendo que cada palavra tem peso.

O coração da prática é comparar versões. O aluno escreve um prompt fraco de propósito, vê o resultado fraco, depois reescreve o mesmo prompt de forma forte e gera de novo. Colocando os dois lado a lado, ele enxerga com os próprios olhos a diferença que a escrita faz. Esse exercício de refazer e comparar é o que transforma a geração de vídeo numa habilidade controlada, e não num jogo de azar.

Ao final, cada aluno conecta tudo ao seu próprio jogo. Em vez de pedir clipes aleatórios, ele gera vídeos que combinam com o tema do game que está criando ao longo do curso, e salva os dois melhores. Esses clipes começam a alimentar o Banco de Vídeos da IA, que é o entregável do mês. A aula é prática do início ao fim, com cada aluno no computador, escrevendo, gerando, comparando e salvando.`,
  materiais: [
    `Computadores (um por aluno) com acesso ao Gemini e ao Veo já logados na conta da escola, em navegador atualizado e com internet estável`,
    `Conta Google ativa em cada máquina, com o Veo liberado dentro do Gemini (verificar o acesso antes da aula começar)`,
    `Projetor ou TV ligado ao computador do professor para mostrar a tela do Gemini durante a parte guiada`,
    `Arquivo de exemplo com prompts fracos e fortes prontos (um documento simples com 3 pares "antes e depois") para o professor projetar`,
    `Folha ou bloco de notas digital por aluno para anotar palavras-chave e as duas versões de cada prompt`,
    `Pasta digital por aluno (no computador ou na nuvem) para salvar os clipes que entrarão no Banco de Vídeos da IA`,
    `Lista impressa com a estrutura do prompt (sujeito, cenário, ação, estilo) colada na parede ou na mesa para consulta rápida`,
  ],
  conceitosChave: [
    `Prompt — texto que o aluno escreve para a IA dizendo qual vídeo ela deve criar; é a receita do clipe.`,
    `Palavra-chave — palavra importante dentro do prompt que muda bastante o resultado, como rápido, escuro, alegre ou realista.`,
    `Prompt fraco — descrição vaga e curta demais que deixa a IA adivinhar, gerando um clipe qualquer e sem controle.`,
    `Prompt forte — descrição clara com sujeito, cenário, ação e estilo, que aproxima o vídeo do que o aluno imaginou.`,
    `Estrutura do prompt — ordem que ajuda a montar a descrição: o que aparece, onde está, o que acontece e como parece.`,
    `Comparar versões — gerar duas vezes o mesmo tema com prompts diferentes e olhar os clipes lado a lado para ver o que melhorou.`,
    `Tema do jogo — assunto, clima e visual do game do aluno, que guia as escolhas de palavras para os clipes ficarem com a cara do projeto.`,
  ],
  treinamento: `## O que o professor precisa saber

Você não precisa ser especialista em IA para dar esta aula. O Veo é uma ferramenta de geração de vídeo que funciona dentro do Gemini: o aluno digita uma descrição em texto e a IA cria um clipe curto. A grande ideia desta aula é simples e você vai repeti-la o tempo todo: prompt é receita. Quanto mais clara a receita, mais perto o vídeo fica do desejado. A geração leva alguns segundos ou um minuto, então planeje as falas para preencher essa espera.

Antes da aula, abra o Gemini no seu computador, faça login na conta da escola e confirme que o Veo aparece (geralmente no seletor de ferramentas ou no menu de criação de vídeo, próximo à caixa de digitação). Teste um prompt simples para garantir que tudo funciona. Tenha o arquivo de exemplo com pares de prompts fracos e fortes aberto e pronto para projetar.

## Passo a passo da aula (ritmo 10/15/25/10)

Aquecimento e revisão (10 min): peça que cada aluno conte em uma frase qual clipe gerou na aula 1 e se saiu como esperava. Provavelmente vários dirão que não. Use isso como gancho: hoje vamos parar de depender da sorte. Escreva na lousa a frase prompt é receita.

Conteúdo novo guiado (15 min): projete sua tela com o Gemini aberto. Mostre onde fica a caixa de digitação e como ativar o Veo. Digite na frente deles um prompt fraco, como gato correndo. Clique em enviar e espere o clipe. Comente o resultado genérico. Agora apague e escreva um prompt forte com a estrutura na tela: um gato laranja correndo por um beco à noite, luz de neon azul, câmera baixa, estilo de jogo de aventura. Gere de novo e compare em voz alta as diferenças. Aponte cada palavra-chave que mudou o resultado: cor, lugar, hora, luz, ângulo, estilo.

Mão na massa (25 min): cada aluno no seu computador. Primeiro, todos escrevem um prompt fraco de propósito sobre o tema do próprio jogo e geram. Depois, reescrevem o mesmo tema usando a estrutura sujeito, cenário, ação e estilo, e geram de novo. Circule pela sala lendo os prompts antes de eles enviarem; sugira trocar uma palavra-chave de cada vez para perceberem o efeito. Peça que anotem as duas versões e salvem os clipes na pasta.

Desafio e compartilhar (10 min): cada aluno escolhe os dois melhores clipes ligados ao tema do jogo e salva na pasta do Banco de Vídeos. Dois ou três voluntários mostram o antes e o depois para a turma e dizem qual palavra fez a maior diferença.

## Como explicar de forma clara (linguagem para a idade)

Fale assim: a IA não adivinha o que está na sua cabeça, ela só lê o que você escreve. Se você pedir pouco, ela inventa o resto e geralmente erra. Compare com pedir um lanche: se você falar só comida, vem qualquer coisa; se falar pão, queijo e presunto quente, vem o que você quer. Use a imagem da receita o tempo todo. Mostre que trocar uma palavra é como trocar um tempero: muda o prato inteiro. Evite termos técnicos; prefira aparece, lugar, acontece e parece.

## Erros comuns e como ajudar

O erro mais comum é escrever prompts curtíssimos de uma ou duas palavras; peça para responder o que aparece, onde, o que acontece e como parece. Outro erro é trocar tudo de uma vez ao refazer, então o aluno não sabe o que melhorou; oriente a mudar uma palavra-chave por vez. Alguns esquecem de ligar o clipe ao tema do jogo e geram coisas aleatórias; lembre o tema antes de cada geração. Há também quem aceite o primeiro resultado por preguiça; incentive a versão forte. E muitos esquecem de salvar; reserve os últimos minutos só para guardar os dois melhores na pasta certa.`,
  exercicios: [
    {
      titulo: `Conserta o prompt fraco`,
      tipo: `prática na ferramenta`,
      tempo: `8 minutos`,
      guiaProfessor: `Projete um prompt fraco pronto, como menino pulando. Peça que cada aluno reescreva no próprio Gemini usando a estrutura sujeito, cenário, ação e estilo, e gere o clipe. Circule lendo os prompts antes do envio.`,
      atividade: `Pegue o prompt fraco menino pulando, transforme em um prompt forte com pelo menos quatro detalhes (quem, onde, o que faz, como parece) e gere o vídeo no Veo.`,
      gabarito: `Exemplo de resposta correta: um menino de moletom vermelho pulando entre telhados de uma cidade à noite, chuva leve, luz de poste amarela, câmera de lado, estilo de jogo de ação. O aluno deve ter incluído sujeito com detalhe, cenário, ação e estilo, e gerado um clipe mais definido que o original.`,
    },
    {
      titulo: `Uma palavra, grande mudança`,
      tipo: `desafio`,
      tempo: `8 minutos`,
      guiaProfessor: `Oriente o aluno a manter o mesmo prompt e trocar apenas uma palavra-chave por vez (por exemplo, a luz, a hora ou a velocidade), gerando após cada troca. O objetivo é perceber o peso de cada palavra.`,
      atividade: `Escolha um prompt seu, gere uma vez, depois troque só uma palavra-chave e gere de novo. Repita trocando outra palavra. Anote qual troca mudou mais o clipe.`,
      gabarito: `Não há resposta única, mas o aluno deve mostrar três clipes do mesmo prompt com uma única palavra diferente em cada e apontar, por escrito, qual palavra causou a maior diferença, explicando o efeito (por exemplo, trocar dia por noite escureceu toda a cena e mudou as cores).`,
    },
    {
      titulo: `Dupla detetive de prompts`,
      tipo: `em dupla`,
      tempo: `10 minutos`,
      guiaProfessor: `Forme duplas. Um aluno escreve um prompt forte sem mostrar ao colega; o outro tenta adivinhar quais palavras-chave foram usadas só olhando o clipe gerado. Depois trocam os papéis.`,
      atividade: `Em dupla: o aluno A gera um clipe a partir de um prompt forte escondido. O aluno B assiste e tenta listar as palavras-chave do prompt. Conferem juntos e depois invertem os papéis.`,
      gabarito: `O exercício dá certo quando o aluno B acerta pelo menos parte das palavras-chave visíveis no clipe (como cor, cenário, hora ou estilo) e a dupla discute por que algumas palavras aparecem claramente no vídeo e outras não. O acerto total não é obrigatório; o objetivo é perceber a ligação entre palavra e imagem.`,
    },
    {
      titulo: `Roda do antes e depois`,
      tipo: `roda de conversa`,
      tempo: `10 minutos`,
      guiaProfessor: `Reúna a turma em roda. Cada aluno mostra rapidamente seu clipe fraco e seu clipe forte e diz qual palavra fez a maior diferença. Conduza para que todos percebam padrões (luz, cenário e estilo costumam mudar muito).`,
      atividade: `Apresente para a turma seu par antes e depois e responda em uma frase: qual palavra-chave fez o vídeo melhorar mais?`,
      gabarito: `A participação está correta quando o aluno apresenta os dois clipes, identifica ao menos uma palavra-chave decisiva e usa a ideia de prompt é receita para explicar. Respostas válidas variam: alguns citarão a luz, outros o cenário, o ângulo da câmera ou o estilo. O professor confirma reforçando que descrições claras geram clipes melhores.`,
    },
    {
      titulo: `Dois clipes com a cara do meu jogo`,
      tipo: `projeto curto`,
      tempo: `12 minutos`,
      guiaProfessor: `Peça que cada aluno escreva dois prompts fortes ligados ao tema do próprio jogo, gere os clipes, escolha os dois melhores e salve na pasta do Banco de Vídeos da IA. Cheque se o tema do jogo aparece de fato nos clipes.`,
      atividade: `Crie dois clipes fortes que combinem com o tema do seu jogo, usando a estrutura completa do prompt. Escolha os dois melhores e salve na sua pasta do Banco de Vídeos da IA, anotando os prompts usados.`,
      gabarito: `O projeto está completo quando o aluno entrega dois clipes salvos na pasta, ambos ligados ao tema do jogo, gerados a partir de prompts fortes com sujeito, cenário, ação e estilo, e com os prompts anotados. Exemplo: para um jogo de floresta mágica, dois clipes de uma raposa brilhante correndo entre árvores luminosas ao entardecer, estilo cartoon. Esses clipes passam a fazer parte do entregável do mês.`,
    },
  ],
};
