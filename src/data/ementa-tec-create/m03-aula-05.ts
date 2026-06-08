import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 5,
  titulo: "Proporção que Encanta",
  semana: "Semana 3",
  duracao: "1 hora",
  objetivo: `Ajustar as proporções e a silhueta do personagem no Maya para que ele fique equilibrado e reconhecível mesmo visto de longe.`,
  descricao: `Nesta aula o aluno descobre que um bom modelo 3D não nasce só de muitos detalhes, mas de proporções bem escolhidas. Proporção é a relação de tamanho entre as partes do personagem: a cabeça em relação ao corpo, os braços em relação ao tronco, as pernas em relação ao tamanho total. Quando essa relação está harmoniosa, o personagem "encanta" e parece feito de propósito; quando está errada, ele parece esquisito sem que a gente saiba explicar por quê.

O segundo conceito da aula é a silhueta: a forma do personagem vista totalmente preenchida de preto, como uma sombra. Personagens marcantes (Mario, Kirby, um Creeper) são reconhecíveis só pela silhueta. Por isso, ao ajustar proporções, o aluno não pensa apenas em "ficou bonito de perto", e sim em "dá pra reconhecer de longe?". Essa é uma das ideias mais profissionais que um modelador aprende.

Para guiar os ajustes, o aluno usa referências visuais: imagens de personagens com estilos diferentes (realista, cartoon, chibi) e a regra das "cabeças de altura" — medir o corpo contando quantas cabeças cabem na altura total. Um personagem realista tem cerca de 7 a 8 cabeças; um chibi fofo tem 2 a 3. Escolher essa proporção é uma decisão de estilo que o aluno faz de propósito.

Na prática, o aluno refina o modelo que já vem construindo no mês: entra em modo de seleção de vértices e de objetos, usa as ferramentas Mover (W) e Escalar (R) para mudar o tamanho da cabeça, alongar ou encurtar membros e equilibrar o tronco, sempre comparando com a referência ao lado. Ele aprende a editar sem deformar feio, mantendo o modelo limpo e pronto para receber os detalhes nas próximas aulas.`,
  materiais: [
    `Computadores com o Autodesk Maya instalado e o projeto do personagem do aluno já aberto`,
    `Projetor ou TV para o professor demonstrar os passos em Maya ao vivo`,
    `Folha de referências visuais impressa ou em tela: personagens realista, cartoon e chibi lado a lado`,
    `Imagem-guia da "régua de cabeças" (2, 3, 5 e 8 cabeças de altura) para os alunos consultarem`,
    `Arquivo de exemplo .mb com um boneco de proporção propositalmente errada (cabeça enorme, pernas curtas) para a turma corrigir`,
    `Espelho pequeno ou papel preto para o exercício de silhueta (cobrir a tela e enxergar só a forma)`,
  ],
  conceitosChave: [
    `Proporção — relação de tamanho entre as partes do personagem, como cabeça, tronco, braços e pernas.`,
    `Silhueta — a forma do personagem vista toda preenchida de preto, como uma sombra; um bom design é reconhecível só por ela.`,
    `Régua de cabeças — modo de medir a altura do corpo contando quantas cabeças cabem nele; define o estilo (realista, cartoon ou chibi).`,
    `Chibi — estilo fofo com cabeça grande e corpo pequeno, geralmente de 2 a 3 cabeças de altura.`,
    `Referência visual — imagem usada como guia para comparar e acertar tamanhos e formas durante a modelagem.`,
    `Modo de Vértice — modo de seleção em que o aluno move pontos do modelo (vértices) para esticar ou encolher partes específicas.`,
    `Escalar (R) — ferramenta do Maya que aumenta ou diminui o tamanho de uma parte selecionada sem precisar refazê-la.`,
  ],
  treinamento: `## O que o professor precisa saber

Você não precisa ser artista para dar esta aula. Precisa entender duas ideias e três ferramentas. As ideias são proporção (relação de tamanho entre as partes) e silhueta (a forma vista como sombra). As ferramentas do Maya são: Mover (atalho W), Girar (atalho E) e Escalar (atalho R). Decore esta frase: "W move, E gira, R escala". Os modos de seleção ficam na barra de marcação: aperte a tecla 2 para entrar em Vértices e a tecla 1 para voltar ao Objeto inteiro. Antes da aula, abra o arquivo de exemplo com proporção errada e treine encolher a cabeça com R. Se você consegue fazer isso, está pronto.

## Passo a passo da aula (ritmo 10/15/25/10)

Aquecimento (10 min): Projete a folha de referências. Mostre Mario, um personagem realista e um chibi. Pergunte: "Qual tem a cabeça maior em relação ao corpo?". Apresente a régua de cabeças contando no projetor. Em seguida, faça o teste da silhueta: mostre os mesmos personagens em preto total e peça que adivinhem quem é. Isso prova que a forma importa mais que o detalhe.

Conteúdo novo guiado (15 min): No Maya, abra o boneco de exemplo errado. Mostre como entrar em Vértices apertando a tecla 2 e voltar ao Objeto com a tecla 1. Selecione a cabeça inteira, aperte R (Escalar) e arraste o quadradinho amarelo central para encolher de forma uniforme. Depois aperte W (Mover) e reposicione a cabeça sobre o pescoço. Repita alongando uma perna: selecione os vértices de baixo e use W para puxar. Reforce sempre olhar a referência ao lado enquanto edita. Salve com Ctrl+S.

Mão na massa (25 min): Cada aluno abre o próprio personagem e define quantas cabeças de altura quer (decisão de estilo). Em seguida ajusta cabeça, tronco e membros usando R para escalar e W para mover vértices, comparando com a referência. Circule pela sala perguntando "está reconhecível de longe?". Peça que salvem a cada ajuste grande.

Desafio e compartilhar (10 min): Lance o desafio da silhueta — cada aluno deixa o modelo em vista de frente e imagina (ou cobre a tela com papel preto) a sombra dele. A turma vota em qual silhueta é mais reconhecível. Feche pedindo que cada um diga em uma frase qual proporção escolheu e por quê.

## Como explicar de forma clara (linguagem para a idade)

Use comparações do dia a dia. Diga: "Proporção é como montar um boneco de Lego: se a cabeça for do tamanho do corpo inteiro, fica engraçado, mas talvez não seja o que você quer." Para silhueta, diga: "Se você visse só a sombra do seu personagem na parede, dava pra saber que é ele? Os personagens famosos passam nesse teste." Para a régua de cabeças, brinque: "Quantas cabeças empilhadas dá a altura do seu personagem? Duas é fofo, oito é herói de filme." Evite a palavra "errado" para o trabalho do aluno; diga "vamos deixar mais equilibrado".

## Erros comuns e como ajudar

O erro mais frequente é escalar no eixo errado e achatar o modelo: o aluno arrasta a seta vermelha (X) e a cabeça vira uma panqueca. Ensine a usar sempre o quadradinho central amarelo do Escalar para mudar tudo junto, de forma uniforme. Outro erro é estar em Objeto quando queria mover só uns pontos — lembre a tecla 2 para Vértices e a tecla 1 para Objeto. Muitos esquecem de soltar a seleção: oriente clicar numa área vazia para desmarcar antes de escolher outra parte. Há também quem exagere e deixe o personagem irreconhecível; nesse caso, peça para comparar com a referência e usar Ctrl+Z para voltar passos. Por fim, reforce salvar com Ctrl+S a cada mudança grande, porque o Maya pode travar e o trabalho se perde.`,
  exercicios: [
    {
      titulo: `Encolhendo a cabeça gigante`,
      tipo: `prática na ferramenta`,
      tempo: `7 min`,
      guiaProfessor: `Abra o arquivo de exemplo com a cabeça enorme. Mostre uma vez e deixe cada aluno repetir no próprio computador.`,
      atividade: `No arquivo de exemplo, selecione a cabeça do boneco, aperte R (Escalar) e arraste o quadradinho amarelo central até a cabeça ficar proporcional ao corpo. Depois aperte W e reposicione-a sobre o pescoço. Salve com Ctrl+S.`,
      gabarito: `A cabeça fica menor e centralizada sobre o pescoço, sem achatar, porque o aluno usou o quadradinho central amarelo (escala uniforme) e não as setas de eixo. O modelo continua em pé e proporcional.`,
    },
    {
      titulo: `Quantas cabeças de altura?`,
      tipo: `desafio`,
      tempo: `8 min`,
      guiaProfessor: `Mostre a régua de cabeças no projetor. Cada aluno mede o próprio personagem e decide o estilo de propósito.`,
      atividade: `Meça quantas cabeças de altura tem o seu personagem atual. Escreva o número e decida: você quer mais fofo (2 a 3 cabeças) ou mais heroico (6 a 8 cabeças)? Ajuste o corpo com R e W para chegar perto do número escolhido.`,
      gabarito: `O aluno anota o número de cabeças atual e o número-alvo, e o modelo passa a se aproximar do alvo. Resposta válida quando há uma escolha de estilo justificada, por exemplo: "Escolhi 3 cabeças porque quero um personagem fofo (chibi)."`,
    },
    {
      titulo: `Conserto em dupla`,
      tipo: `em dupla`,
      tempo: `10 min`,
      guiaProfessor: `Forme duplas. Um aluno aponta um problema de proporção no modelo do colega; o outro corrige. Depois trocam os papéis.`,
      atividade: `Olhe o personagem do seu colega e aponte uma parte que parece desequilibrada (braço comprido demais, tronco curto, etc.). O colega corrige usando vértices (tecla 2), Mover (W) e Escalar (R). Depois invertam os papéis.`,
      gabarito: `Cada dupla identifica pelo menos um problema real e o corrige sem deformar o modelo. Bons exemplos: encurtar um braço puxando os vértices da mão com W, ou alongar o tronco escalando-o no eixo de altura. Os dois modelos saem mais equilibrados.`,
    },
    {
      titulo: `Teste da silhueta`,
      tipo: `roda de conversa`,
      tempo: `10 min`,
      guiaProfessor: `Junte a turma. Cada aluno mostra o modelo em vista de frente; cubra mentalmente com a ideia de sombra preta. Conduza a votação sem deixar virar crítica pessoal.`,
      atividade: `Apresente seu personagem visto de frente e imagine só a sombra dele. A turma discute: dá pra reconhecer de longe? Que parte da silhueta ajuda a identificá-lo? Vote no modelo com a silhueta mais clara e diga por quê.`,
      gabarito: `A roda conclui que silhuetas com formas distintas (cabeça marcante, postura clara, membros bem separados) são mais reconhecíveis que modelos "empapuçados". Resposta válida cita uma característica concreta, por exemplo: "Reconheço pelas orelhas grandes que se destacam na sombra."`,
    },
    {
      titulo: `Mini-refinamento do meu personagem`,
      tipo: `projeto curto`,
      tempo: `12 min`,
      guiaProfessor: `Etapa final, individual. Peça que apliquem o que aprenderam no próprio modelo do mês e salvem. Circule garantindo o uso correto de R, W e da tecla 2.`,
      atividade: `Refine o seu personagem do mês ajustando pelo menos três proporções (por exemplo: tamanho da cabeça, comprimento das pernas e largura do tronco), sempre comparando com a referência ao lado. Salve com Ctrl+S e escreva uma frase explicando o estilo que você escolheu.`,
      gabarito: `O modelo apresenta três ajustes visíveis de proporção, continua em pé e sem achatamentos, e o arquivo está salvo. A frase final descreve uma intenção de estilo coerente, por exemplo: "Deixei a cabeça maior e as pernas curtas para um visual chibi fofo, com 3 cabeças de altura."`,
    },
  ],
};
