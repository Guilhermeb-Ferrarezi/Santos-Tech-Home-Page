import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 1,
  titulo: "Sua primeira música com IA no Suno",
  semana: "Semana 1",
  duracao: "1 hora",
  objetivo: `Conhecer o Suno e gerar a primeira faixa musical descrevendo em texto um estilo simples, com gênero, clima e instrumentos.`,
  descricao: `Nesta aula, os alunos descobrem que é possível transformar palavras em música. A ferramenta do mês é o Suno, uma inteligência artificial que recebe uma descrição em texto (o prompt) e devolve uma faixa pronta, com instrumentos, batida e até voz. Para adolescentes que já criaram imagens e vídeos com IA no Ano 1, esta é a porta de entrada para o mundo do som: agora eles vão produzir a própria trilha em vez de procurar uma música pronta na internet.

O coração da aula é aprender a escrever um prompt musical simples e claro. Um bom prompt responde a três perguntas: qual é o gênero (por exemplo, rock, lo-fi, eletrônica), qual é o clima ou a emoção (alegre, tenso, calmo, épico) e quais instrumentos aparecem (violão, bateria, piano, sintetizador). Quando o aluno junta esses três ingredientes em uma frase, a IA tem informação suficiente para gerar algo parecido com o que ele imaginou. Quanto mais vago o pedido, mais aleatório o resultado; quanto mais específico, mais perto do alvo.

Esta é uma aula de experimentação e escuta. Os alunos vão gerar faixas de teste, ouvir o que a IA criou e comparar como pequenas mudanças nas palavras mudam o som. Não existe resposta certa: o objetivo é entender a relação entre a descrição e o resultado, criar familiaridade com a tela do Suno e perder o medo de tentar. É a base para a próxima aula, em que eles vão compor a trilha pensada especificamente para o jogo.

Ao final, cada aluno terá pelo menos uma faixa gerada por IA, salva na conta, e saberá explicar com as próprias palavras quais escolhas do prompt levaram àquele som. Esse primeiro contato prepara o terreno para todo o mês de áudio, em que música, voz e efeitos vão se juntar ao vídeo e ao jogo.`,
  materiais: [
    `Computadores com acesso à internet e ao site do Suno (suno.com), um por aluno`,
    `Conta no Suno já criada e com login feito antes da aula, para não perder tempo no cadastro`,
    `Projetor ou TV para o professor mostrar a tela e demonstrar cada passo`,
    `Fones de ouvido para cada aluno escutar a própria faixa sem atrapalhar a turma`,
    `Caixa de som boa para o professor tocar exemplos para todos juntos`,
    `Folha ou slide com uma lista de gêneros, climas e instrumentos para os alunos consultarem`,
    `Arquivos de exemplo: duas ou três faixas curtas já geradas no Suno para mostrar o que dá para fazer`,
  ],
  conceitosChave: [
    `Suno — ferramenta de inteligência artificial que cria músicas a partir de uma descrição em texto.`,
    `Prompt musical — a frase que descreve para a IA o estilo da música que você quer gerar.`,
    `Gênero — o tipo ou estilo da música, como rock, lo-fi, eletrônica, pop ou orquestral.`,
    `Clima (mood) — a emoção que a música passa, por exemplo alegre, tenso, calmo ou épico.`,
    `Instrumentação — os instrumentos que aparecem na faixa, como violão, bateria, piano ou sintetizador.`,
    `Modo instrumental — a opção que gera a música sem voz cantada, ideal para usar de fundo no jogo.`,
    `Geração (render) — o momento em que a IA processa o prompt e produz a faixa de áudio.`,
  ],
  treinamento: `## O que o professor precisa saber

Você não precisa ser músico nem dominar o Suno. A aula gira em torno de uma única ideia: descrever som em palavras. O Suno funciona no navegador, no endereço suno.com. Depois de fazer login, o aluno clica no botão "Create" (Criar) no menu da esquerda. A tela de criação tem uma caixa de texto grande para o prompt, um seletor de "Simple" (Simples) e "Custom" (Personalizado), uma chave chamada "Instrumental" para gerar música sem voz, e o botão "Create" (ou "Generate") que dispara a geração. Cada geração costuma produzir duas versões da faixa, que aparecem na lista à direita ou embaixo. Para tocar, basta clicar no botão de play da faixa. Nesta primeira aula, use sempre o modo "Simple": ele só pede a descrição em texto, que é exatamente o que queremos treinar.

## Passo a passo da aula

Aquecimento (10 min): Toque duas faixas de exemplo bem diferentes (uma lo-fi calma e uma eletrônica animada) e pergunte: "Que palavras descrevem esta música?". Anote no quadro os termos que surgirem (calmo, rápido, triste, piano, batida forte). Conduza a turma a perceber que esses adjetivos são exatamente o que vamos digitar para a IA.

Conteúdo novo guiado (15 min): No projetor, abra suno.com e clique em "Create". Mostre o modo "Simple". Digite na caixa de prompt um exemplo claro com os três ingredientes, por exemplo: "música lo-fi calma para estudar, com piano suave e batida leve". Ligue a chave "Instrumental" para a faixa sair sem voz. Clique em "Create" e espere a geração. Quando as duas versões aparecerem, toque as duas e pergunte qual combinou melhor com o pedido. Repita com um segundo prompt, mudando só uma palavra (por exemplo, troque "calma" por "animada"), para mostrar como a descrição muda o som.

Mão na massa (25 min): Cada aluno escreve o próprio prompt seguindo a fórmula gênero + clima + instrumentos, liga o modo "Instrumental" e gera a faixa. Peça que escutem com os fones e, depois, mudem uma palavra do prompt e gerem de novo para comparar. Circule pela sala ajudando a deixar os prompts mais específicos e lembrando de salvar as faixas que gostarem.

Desafio + compartilhar (10 min): Cada aluno escolhe a melhor faixa e a toca para o colega do lado, dizendo qual prompt usou. Dois ou três voluntários mostram no projetor e leem o prompt para a turma adivinhar o gênero.

## Como explicar de forma clara

Use comparações do dia a dia. Diga que o prompt é como um "pedido de lanche": se você só fala "quero um lanche", vem qualquer coisa; se você fala "hambúrguer com queijo e batata", vem o que você imaginou. A música é igual: quanto mais detalhes (gênero, clima, instrumentos), mais perto do que você quer. Mostre antes de mandar fazer e fale devagar o nome de cada botão enquanto aponta na tela. Reforce a fórmula simples escrevendo no quadro: "gênero + clima + instrumentos". Evite termos técnicos demais de música; "batida rápida" funciona melhor do que "andamento acelerado".

## Erros comuns e como ajudar

O erro mais comum é o prompt vago, do tipo "uma música legal": mostre que faltam o gênero e o clima e ajude a reescrever. Outro erro é escrever um texto enorme e confuso; oriente a frase curta com os três ingredientes. Muitos esquecem de ligar o "Instrumental" e estranham a voz cantada; lembre-os da chave antes de gerar. Alguns geram uma vez só e param na primeira faixa; incentive a comparar as duas versões e a tentar de novo trocando uma palavra. Há quem fique frustrado porque o resultado não é idêntico ao que imaginou; explique que a IA dá uma interpretação, não uma cópia, e que ajustar o prompt aos poucos é parte do processo. Por fim, lembre-os de não usar nomes de cantores ou bandas reais no prompt e de salvar a faixa boa antes de gerar outra.`,
  exercicios: [
    {
      titulo: `Decifrando a música`,
      tipo: `roda de conversa`,
      tempo: `7 minutos`,
      guiaProfessor: `Toque duas faixas de exemplo bem diferentes e conduza com perguntas abertas. Anote no quadro os termos que descrevem gênero, clima e instrumentos.`,
      atividade: `Ouça as faixas que o professor tocar e diga três palavras que descrevam cada uma: o gênero, o clima e um instrumento que você percebeu.`,
      gabarito: `O aluno aponta termos coerentes com cada faixa, separando gênero (ex.: lo-fi, eletrônica), clima (ex.: calmo, animado) e instrumento (ex.: piano, batida/bateria). Não há resposta única, mas as três categorias devem aparecer.`,
    },
    {
      titulo: `Minha primeira faixa`,
      tipo: `prática na ferramenta`,
      tempo: `8 minutos`,
      guiaProfessor: `Garanta que cada aluno esteja em suno.com, no botão "Create" e no modo "Simple". Confira se ligaram a chave "Instrumental" antes de clicar em "Create".`,
      atividade: `No Suno, escreva um prompt com gênero, clima e instrumentos, ligue o modo "Instrumental" e gere sua primeira música de teste.`,
      gabarito: `O aluno tem ao menos uma faixa gerada e salva na conta, criada a partir de um prompt que contém os três ingredientes. A faixa sai sem voz cantada porque o modo "Instrumental" estava ligado.`,
    },
    {
      titulo: `Troca uma palavra`,
      tipo: `desafio`,
      tempo: `6 minutos`,
      guiaProfessor: `Mostre como mudar apenas uma palavra do prompt (clima ou instrumento) e gerar de novo. Incentive o uso de fones para comparar as duas faixas.`,
      atividade: `Pegue o seu prompt anterior, troque só uma palavra (por exemplo, o clima ou um instrumento) e gere outra faixa. Compare com a primeira.`,
      gabarito: `O aluno tem duas faixas geradas do mesmo prompt-base com uma palavra trocada e consegue dizer o que mudou no som por causa dessa troca (ex.: ficou mais animada, ganhou um piano).`,
    },
    {
      titulo: `Prompt do colega`,
      tipo: `em dupla`,
      tempo: `5 minutos`,
      guiaProfessor: `Forme duplas. Oriente que um descreva uma vibe em voz alta e o outro transforme em prompt, sem copiar nomes de artistas reais.`,
      atividade: `Em dupla, um colega descreve uma vibe (ex.: "trilha tensa de fase de chefe") e o outro escreve o prompt com gênero, clima e instrumentos e gera a faixa. Depois invertam os papéis.`,
      gabarito: `Cada dupla produziu ao menos duas faixas, uma para cada vibe pedida. Os prompts seguem a fórmula gênero + clima + instrumentos e combinam com a descrição falada pelo colega.`,
    },
    {
      titulo: `Faixa para o meu jogo`,
      tipo: `projeto curto`,
      tempo: `9 minutos`,
      guiaProfessor: `Peça que cada aluno pense em uma cena do próprio jogo e gere uma faixa para ela. Circule ajudando a tornar os prompts mais específicos e lembrando de salvar a melhor versão.`,
      atividade: `Escolha uma cena do seu jogo (menu, fase calma ou batalha), escreva um prompt instrumental que combine com ela e gere a faixa. Salve a versão que ficou melhor.`,
      gabarito: `O aluno tem uma faixa salva pensada para uma cena específica do jogo, com prompt que descreve gênero, clima e instrumentos adequados àquela cena (ex.: música épica com bateria forte e sintetizador para a batalha), e sabe explicar por que ela combina.`,
    },
  ],
};
