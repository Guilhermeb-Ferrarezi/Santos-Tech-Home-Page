import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 2,
  titulo: "Editar imagens com palavras",
  semana: "Semana 1",
  duracao: "1 hora",
  objetivo: `Aprender a editar uma imagem já criada usando apenas texto no Nano Banana, descrevendo a mudança que se quer (trocar o fundo, mudar cores, adicionar ou remover elementos) e comparando o antes e o depois.`,
  descricao: `Na Aula 1, os alunos descobriram a magia de gerar imagens do zero com o Nano Banana dentro do Gemini. Agora, nesta aula, eles dão o passo seguinte: em vez de criar uma imagem nova, eles vão pegar uma imagem que já existe e mudá-la usando palavras. Essa é a grande força da edição por IA: você não precisa de mouse, pincel ou camadas; basta descrever em português o que quer ver diferente, e a IA refaz a imagem para você.

A ideia central é simples e poderosa: a imagem vira uma conversa. O aluno envia a imagem da Aula 1 para o Gemini e digita um pedido claro, como "troque o fundo por um céu noturno estrelado" ou "deixe a roupa do personagem vermelha". O Nano Banana entende o texto e devolve uma nova versão da imagem com a mudança aplicada, mantendo o resto parecido. É como dar uma ordem educada e ver o desenho obedecer.

Nesta aula, os alunos vão praticar os quatro tipos de edição mais úteis para quem cria jogos: trocar o fundo (mudar o cenário onde o personagem está), mudar cores (de roupas, objetos ou luz), adicionar elementos (colocar um chapéu, uma espada, uma nuvem) e remover elementos (apagar algo que atrapalha a cena). Cada pedido é feito em texto, e a turma aprende que a clareza do pedido decide a qualidade do resultado.

O grande hábito que queremos formar é o de comparar o antes e o depois. A cada edição, o aluno guarda a versão anterior e olha o que mudou de verdade. Assim ele percebe quando a IA acertou, quando exagerou e quando entendeu errado o pedido. Ao final, cada aluno terá transformado uma imagem da Aula 1 passo a passo, com pelo menos três edições feitas e os resultados comparados lado a lado.`,
  materiais: [
    `Computadores com acesso ao Gemini com Nano Banana (geração/edição de imagem por IA), um por aluno`,
    `Conta Google já logada no Gemini antes da aula, com a edição de imagem liberada`,
    `Projetor ou TV para o professor demonstrar cada passo na tela grande`,
    `Pasta com as imagens que os alunos criaram na Aula 1 (ou um conjunto de imagens de exemplo, caso algum aluno não tenha a sua)`,
    `Imagem de exemplo do professor para demonstrar (por exemplo, um personagem simples num fundo claro)`,
    `Folha impressa ou slide com modelos de pedidos de edição (trocar fundo, mudar cor, adicionar, remover)`,
    `Local para salvar as versões: uma pasta por aluno para guardar o antes e o depois`,
  ],
  conceitosChave: [
    `Edição por IA — mudar uma imagem que já existe usando texto, sem pincel nem mouse, só descrevendo a mudança.`,
    `Imagem de origem — a imagem de partida (a da Aula 1) que você envia para a IA editar.`,
    `Prompt de edição — a frase clara que diz o que mudar; por exemplo, "troque o fundo por uma floresta".`,
    `Trocar o fundo — substituir o cenário atrás do personagem ou objeto, mantendo o que está na frente.`,
    `Adicionar elemento — pedir que a IA coloque algo novo na imagem, como um chapéu ou uma estrela.`,
    `Remover elemento — pedir que a IA apague algo que está atrapalhando a cena.`,
    `Antes e depois — comparar a imagem original com a versão editada para ver exatamente o que mudou.`,
  ],
  treinamento: `## O que o professor precisa saber

Você não precisa dominar design para dar esta aula. A edição no Nano Banana acontece dentro do Gemini, na mesma caixa de conversa onde se digita texto. O segredo é este: para editar, primeiro você anexa (envia) uma imagem e depois escreve o pedido. No site do Gemini (gemini.google.com), o campo de digitação fica na parte de baixo da tela. Ao lado dele há um ícone de "+" ou de clipe (anexar); é por ali que você sobe a imagem do computador. Depois de anexar, digite a mudança em português e aperte "Enter" (ou o botão de enviar, a seta). A IA devolve a imagem editada logo acima, na conversa. Para baixar, passe o mouse sobre a imagem gerada e clique no ícone de download (uma seta para baixo). Guarde sempre a versão antiga antes de pedir a próxima edição.

## Passo a passo da aula

Aquecimento (10 min): Mostre no projetor a imagem original de um personagem e três versões editadas dela (fundo trocado, cor mudada, um chapéu adicionado). Pergunte à turma: "O que mudou em cada uma?". Conduza a ideia de que, na edição por IA, a gente não desenha, a gente fala o que quer.

Conteúdo novo guiado (15 min): No projetor, abra o Gemini. Clique no ícone de "+" (anexar) ao lado da caixa de texto e envie a imagem de exemplo. Com a imagem anexada, digite um pedido simples e direto: "Troque o fundo por um céu noturno estrelado, mantendo o personagem igual." Envie e mostre o resultado. Depois faça mais três pedidos, um de cada tipo: mudar cor ("Deixe a camiseta do personagem azul"), adicionar ("Coloque um chapéu de mago na cabeça dele") e remover ("Remova o objeto que está no canto direito"). A cada resposta, baixe a imagem e mostre o antes e o depois lado a lado.

Mão na massa (25 min): Cada aluno abre o Gemini, anexa a sua imagem da Aula 1 e faz pelo menos três edições, uma de cada tipo (trocar fundo, mudar cor e adicionar ou remover algo). Peça que salvem cada versão numa pasta, com nomes claros como "original", "fundo", "cor". Circule pela sala ajudando a escrever pedidos mais claros e a anexar a imagem certa.

Desafio + compartilhar (10 min): Cada aluno mostra ao colega do lado o antes e o depois da edição que mais gostou e explica qual frase usou. Dois ou três voluntários apresentam no projetor.

## Como explicar de forma clara

Use comparações do dia a dia. Diga que editar com a IA é como pedir a um amigo desenhista muito rápido: quanto mais claro o pedido, melhor o desenho. Mostre que "troque o fundo" funciona melhor do que "mude a imagem", porque é específico. Ensine a fórmula simples do pedido: o que mudar + como ficar + o que manter igual. Por exemplo: "Troque o fundo (o que) por uma praia ao pôr do sol (como), mantendo o personagem igual (o que manter)". Fale devagar os nomes dos botões enquanto aponta: anexar, enviar, download. Repita que cada pedido novo gera uma imagem nova, então vale a pena guardar as antigas.

## Erros comuns e como ajudar

O erro mais comum é digitar o pedido sem anexar a imagem; aí a IA cria uma imagem do zero em vez de editar. Lembre sempre: primeiro anexar, depois pedir. Outro erro é o pedido vago ("deixa mais legal"); ajude a turma a trocar por algo específico ("deixe o céu laranja"). Muitos pedem mudanças demais de uma vez e a imagem sai confusa; oriente a fazer uma mudança por mensagem. Alguns esquecem de salvar e perdem a versão boa; reforce o hábito de baixar cada resultado. Há também quem fique frustrado quando a IA muda o personagem sem querer; ensine a acrescentar a frase "mantendo o resto igual" no pedido. Por fim, se o resultado vier estranho, mostre que basta reenviar o pedido ou reescrevê-lo com outras palavras, sem medo de tentar de novo.`,
  exercicios: [
    {
      titulo: `Trocar o fundo da minha imagem`,
      tipo: `prática na ferramenta`,
      tempo: `6 minutos`,
      guiaProfessor: `Confirme que cada aluno anexou a imagem da Aula 1 antes de escrever o pedido. Lembre-os de incluir "mantendo o personagem igual" no fim da frase.`,
      atividade: `Anexe a sua imagem da Aula 1 no Gemini e peça à IA para trocar o fundo por um cenário diferente (por exemplo, uma floresta, uma cidade ou o espaço). Salve o resultado.`,
      gabarito: `A nova imagem tem o mesmo personagem ou objeto da original, mas com um cenário de fundo diferente. O aluno salvou a versão editada e ainda tem a original guardada para comparar.`,
    },
    {
      titulo: `Mudando as cores`,
      tipo: `prática na ferramenta`,
      tempo: `5 minutos`,
      guiaProfessor: `Mostre que a cor precisa ser dita com clareza (azul, vermelho, dourado). Verifique se o aluno aponta o que deve mudar de cor, e não a imagem inteira.`,
      atividade: `Na sua imagem, peça à IA para mudar a cor de um elemento específico (a roupa, um objeto ou a luz da cena). Faça pelo menos duas trocas de cor diferentes e salve cada uma.`,
      gabarito: `O aluno produziu duas versões com cores diferentes do mesmo elemento, e o resto da imagem permaneceu parecido. As frases usadas citam o elemento e a cor desejada de forma clara.`,
    },
    {
      titulo: `Adicionar e remover na mesma cena`,
      tipo: `desafio`,
      tempo: `6 minutos`,
      guiaProfessor: `Reforce a regra de uma mudança por mensagem: primeiro adicionar, enviar, ver o resultado; depois remover, enviar de novo. Ajude a descrever a posição do elemento.`,
      atividade: `Faça dois pedidos separados na sua imagem: no primeiro, adicione um elemento novo (um chapéu, uma espada, uma nuvem); no segundo, remova algo que está atrapalhando a cena. Salve as duas versões.`,
      gabarito: `Existem duas novas versões: uma com um elemento adicionado e outra com um elemento removido. As mudanças correspondem exatamente ao que o aluno pediu por texto, sem bagunçar o resto da imagem.`,
    },
    {
      titulo: `Editores em dupla`,
      tipo: `em dupla`,
      tempo: `5 minutos`,
      guiaProfessor: `Forme duplas. Oriente que cada um escreva o pedido para o colega executar, treinando clareza. Peça respeito ao trabalho do outro nos comentários.`,
      atividade: `Em dupla, troquem de cadeira. Escreva no papel um pedido de edição para a imagem do colega, e deixe que ele execute o seu pedido no Gemini. Depois comparem o antes e o depois juntos.`,
      gabarito: `Cada dupla aplicou pelo menos uma edição pedida pelo colega, e os dois conseguem explicar se o pedido foi claro o bastante e o que mudariam na frase para um resultado melhor.`,
    },
    {
      titulo: `Minha mini-transformação em três passos`,
      tipo: `projeto curto`,
      tempo: `8 minutos`,
      guiaProfessor: `Acompanhe a organização das versões em pasta com nomes claros. Incentive uma sequência lógica de edições que conte uma pequena história visual.`,
      atividade: `Escolha uma imagem da Aula 1 e faça uma transformação em três passos encadeados (por exemplo: 1) trocar o fundo, 2) mudar a cor da roupa, 3) adicionar um acessório). Salve as quatro versões: a original e as três edições, em ordem.`,
      gabarito: `O aluno apresenta quatro imagens em sequência (original mais três edições), cada passo com uma mudança visível em relação ao anterior. Ele consegue narrar, olhando o antes e o depois, o que cada pedido em texto alterou na imagem.`,
    },
  ],
};
