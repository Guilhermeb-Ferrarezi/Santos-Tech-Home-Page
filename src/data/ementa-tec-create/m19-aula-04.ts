import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 4,
  titulo: "Ajuste fino: o detalhe que importa",
  semana: "Semana 2",
  duracao: "1 hora",
  objetivo: `Refinar as variações criadas na Aula 3 corrigindo proporções, nitidez e paleta de cores para que todas as imagens fiquem coerentes entre si.`,
  descricao: `Nesta aula o aluno deixa de gerar imagens novas o tempo todo e aprende a lapidar o que já tem. Depois da explosão de versões da Aula 3, é comum ter dez imagens parecidas, mas com pequenos problemas: um personagem com a cabeça grande demais, uma textura um pouco borrada, uma cor que não combina com as outras. O ajuste fino é exatamente isso: trocar o detalhe que está incomodando sem refazer a imagem inteira.

Usando o Gemini com o modelo de imagem Nano Banana, o aluno vai conversar com a IA para corrigir proporções ("deixe a espada menor", "alongue um pouco o corpo"), melhorar a nitidez ("deixe a imagem mais nítida e detalhada") e igualar a paleta de cores entre as imagens ("use os mesmos tons de azul e roxo da imagem anterior"). O segredo é fazer pedidos pequenos e específicos, um de cada vez, comparando antes e depois.

Outro ponto central é refinar prompts que "quase deram certo". Muitas vezes a imagem está a um detalhe de ficar boa. Em vez de jogar fora, o aluno aprende a guardar o prompt que funcionou e acrescentar só a correção que falta. Assim ele entende que prompt é rascunho que se melhora, não loteria.

Ao final, o aluno terá um conjunto de variações da Aula 3 alinhadas: mesmo estilo, mesma paleta, mesma qualidade. Esse material coerente é a base do pacote de imagens do mês, que será montado nas próximas aulas.`,
  materiais: [
    `Computadores com navegador atualizado e acesso ao Gemini com o modelo de imagem Nano Banana (uma conta Google por aluno, já testada antes da aula)`,
    `Projetor ou tela grande para o professor demonstrar onde clicar`,
    `As variações que cada aluno gerou na Aula 3, salvas em uma pasta pessoal (arquivos de exemplo prontos para reserva, caso algum aluno tenha perdido as suas)`,
    `Uma imagem de referência de paleta de cores (impressa ou na tela) para os alunos compararem os tons`,
    `Caderno ou documento para o aluno anotar os prompts que funcionaram`,
    `Cronômetro ou relógio visível para controlar o ritmo de 10/15/25/10 minutos`,
  ],
  conceitosChave: [
    `Ajuste fino — pequena correção em uma imagem já pronta, sem refazer tudo do zero.`,
    `Proporção — relação de tamanho entre as partes (cabeça, corpo, objetos); quando está errada, parece estranho.`,
    `Nitidez — quão definida e clara está a imagem; o oposto de borrada ou embaçada.`,
    `Paleta de cores — conjunto de cores que combinam e se repetem em todas as imagens de um mesmo projeto.`,
    `Coerência — qualidade de imagens diferentes parecerem da mesma família, com estilo e cores parecidos.`,
    `Refinar prompt — melhorar um pedido que quase deu certo, acrescentando só o detalhe que faltava.`,
    `Antes e depois — comparar a imagem original com a corrigida para ter certeza de que melhorou.`,
  ],
  treinamento: `## O que o professor precisa saber

Você vai usar o Gemini com o modelo de imagem chamado Nano Banana. Abra o site do Gemini, faça login com a conta Google e, na caixa de mensagem embaixo, ative a geração de imagem (procure o ícone ou a opção de imagem ao lado do campo de texto). Para esta aula, o ponto mais importante é: o Nano Banana mantém a conversa. Isso significa que, depois de gerar ou enviar uma imagem, você pode escrever um novo pedido na mesma conversa que ele edita a imagem anterior em vez de criar outra do zero. É assim que se faz ajuste fino.

Antes da aula, teste três pedidos no seu computador: "deixe a imagem mais nítida e detalhada", "diminua o tamanho da cabeça do personagem" e "use a mesma paleta de cores azul e roxo da imagem anterior". Veja como a IA responde para não se surpreender na frente da turma. Tenha as variações da Aula 3 abertas e salvas, porque a aula toda gira em torno de melhorar o que já existe.

## Passo a passo da aula (ritmo 10/15/25/10)

Aquecimento (10 min): peça que cada aluno abra suas variações da Aula 3 e escolha as três que mais gosta. No projetor, mostre duas imagens parecidas e pergunte "o que está faltando para ficarem irmãs?". Conduza a turma a notar diferenças de cor, tamanho e nitidez.

Conteúdo novo guiado (15 min): no Gemini, envie ou gere uma imagem na conversa. Mostre como pedir UM ajuste por vez. Digite "deixe a imagem mais nítida e detalhada" e gere. Depois "diminua um pouco a espada para ficar na proporção certa". Por fim "use os mesmos tons de azul e roxo da imagem anterior". Aponte na tela onde fica o campo de texto, o botão de enviar e como cada nova resposta aparece logo abaixo, mantendo o histórico. Explique que, se errar, basta pedir o contrário ("volte ao tamanho anterior").

Mão na massa (25 min): cada aluno escolhe duas variações da Aula 3 e faz três ajustes em cada uma: proporção, nitidez e paleta. Eles devem comparar antes e depois a cada pedido e salvar a versão final. Circule pela sala perguntando "esse ajuste melhorou mesmo?". Incentive pedidos pequenos e específicos.

Desafio e compartilhar (10 min): peça que cada aluno deixe suas imagens com a mesma paleta de cores, formando um grupo coerente. Cada um mostra o antes e o depois para a turma em 30 segundos.

## Como explicar de forma clara (linguagem para a idade)

Use a ideia de "deixar a foto irmã das outras". Diga: a IA é como um ajudante que entende pedidos curtos. Se você falar tudo de uma vez, ele se confunde; se pedir uma coisinha de cada vez, ele acerta. Compare nitidez com tirar o embaçado dos óculos. Compare paleta com escolher o uniforme do time: todas as imagens vestem as mesmas cores. Repita o lema: "um pedido pequeno por vez, e sempre olhe o antes e o depois".

## Erros comuns e como ajudar

O erro mais comum é pedir muitas mudanças numa frase só; oriente a separar em pedidos curtos. Outro é gerar imagem nova em vez de editar a anterior: lembre o aluno de continuar na mesma conversa, sem começar do zero. Alguns esquecem de comparar e acham que piorou quando melhorou; peça que olhem lado a lado. Há quem use cores aleatórias: dê uma referência de paleta para copiar. Por fim, se um ajuste estragar a imagem, ensine a pedir "volte como estava antes" em vez de recomeçar tudo.`,
  exercicios: [
    {
      titulo: `Deixe nítido`,
      tipo: `prática na ferramenta`,
      tempo: `7 minutos`,
      guiaProfessor: `Garanta que cada aluno esteja editando dentro da mesma conversa do Gemini, sem criar uma nova. Reforce que é um pedido por vez.`,
      atividade: `Escolha uma variação da Aula 3 que esteja um pouco borrada. Na mesma conversa, peça à IA para deixá-la mais nítida e detalhada. Compare o antes e o depois e salve a melhor.`,
      gabarito: `O aluno usa um prompt curto como "deixe esta imagem mais nítida e detalhada, mantendo o mesmo personagem" e obtém uma versão mais definida. Resultado esperado: imagem com bordas e detalhes mais claros, salva ao lado da original para comparação.`,
    },
    {
      titulo: `Proporção certa`,
      tipo: `prática na ferramenta`,
      tempo: `8 minutos`,
      guiaProfessor: `Ajude o aluno a identificar qual parte está fora de proporção antes de pedir. Incentive ajustes pequenos e graduais.`,
      atividade: `Pegue uma imagem em que algo esteja grande ou pequeno demais (cabeça, arma, objeto). Peça à IA para corrigir só essa proporção. Faça um ajuste de cada vez até ficar natural.`,
      gabarito: `O aluno escreve algo como "diminua um pouco a cabeça do personagem para ficar na proporção certa, sem mudar o resto". A imagem fica mais equilibrada. Se exagerar, ele corrige com "volte ao tamanho anterior". Resultado: proporção natural.`,
    },
    {
      titulo: `Mesma família de cores (em dupla)`,
      tipo: `em dupla`,
      tempo: `10 minutos`,
      guiaProfessor: `Forme duplas. Dê uma paleta de referência (dois ou três tons). Peça que combinem qual paleta vão seguir antes de começar.`,
      atividade: `Em dupla, escolham uma paleta de cores. Cada um aplica os mesmos tons em duas imagens suas usando a IA. No fim, juntem as quatro imagens e vejam se parecem da mesma família.`,
      gabarito: `Cada aluno usa um prompt como "use os mesmos tons de azul e roxo desta paleta nesta imagem". As quatro imagens da dupla ficam visivelmente coerentes, com cores repetidas. Resultado: conjunto coerente, fácil de reconhecer como do mesmo projeto.`,
    },
    {
      titulo: `Salvando o que funcionou (roda de conversa)`,
      tipo: `roda de conversa`,
      tempo: `8 minutos`,
      guiaProfessor: `Conduza a roda pedindo que cada aluno leia em voz alta um prompt que "quase deu certo" e o que mudou para acertar. Anote os melhores no quadro.`,
      atividade: `Em roda, cada aluno mostra um prompt que quase funcionou e conta qual detalhe acrescentou para corrigir. A turma discute por que pedidos curtos e específicos funcionam melhor.`,
      gabarito: `O aluno explica um exemplo real, como "meu prompt fazia a espada gigante; acrescentei deixe a espada menor e ficou certo". A turma conclui que refinar é melhor que recomeçar. Resultado: lista de prompts bons anotada e a ideia de que prompt é rascunho que se melhora.`,
    },
    {
      titulo: `Conjunto coerente da Aula 3 (projeto curto)`,
      tipo: `projeto curto`,
      tempo: `12 minutos`,
      guiaProfessor: `Este é o exercício mais difícil e fecha a aula. Peça pelo menos três imagens ajustadas e coerentes entre si. Verifique nitidez, proporção e paleta em cada uma.`,
      atividade: `Pegue três das suas variações da Aula 3 e aplique os três tipos de ajuste (proporção, nitidez e paleta) até que as três fiquem coerentes entre si. Salve o conjunto final para o seu pacote de imagens.`,
      gabarito: `O aluno entrega três imagens da mesma família: mesma paleta, nitidez parecida e proporções corrigidas. Cada uma tem antes e depois salvos. Resultado esperado: conjunto pronto e coerente, servindo de base para o pacote de imagens do mês.`,
    },
  ],
};
