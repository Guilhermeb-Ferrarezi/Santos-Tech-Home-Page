import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 1,
  titulo: "Abrindo o Roblox Studio: meu mundo começa aqui",
  semana: "Semana 1",
  duracao: "1 hora",
  objetivo: `Abrir o Roblox Studio, escolher o template Baseplate, reconhecer as janelas Workspace, Explorer e Properties e inserir, mover, girar e redimensionar blocos (Parts) para começar o cenário do próprio jogo, salvando o projeto na nuvem com nome próprio.`,
  descricao: `Hoje é o grande começo do mês: a criança entra de verdade no Roblox Studio, o programa em que os criadores de jogos do Roblox constroem mundos. Até agora os alunos jogaram e modelaram itens 3D em outras ferramentas; nesta aula eles descobrem que o Studio é o lugar onde tudo se junta para virar um jogo de verdade. A ideia central é simples e poderosa: um jogo do Roblox é feito de blocos, chamados Parts, e nós somos os arquitetos que arrastam, giram e esticam esses blocos para montar o cenário.

Ao abrir o programa, o aluno escolhe um modelo de mundo vazio chamado Baseplate. Pense no Baseplate como uma folha de papel quadriculada gigante e cinza: um chão liso, pronto para receber as nossas construções. A partir desse chão a criança vai conhecer as três janelas mais importantes do Studio. O Workspace (a janela 3D grande no meio) é o palco onde o mundo aparece. O Explorer é a lista de tudo o que existe no jogo, como o índice de um caderno. O Properties é o painel de ajustes da peça selecionada, onde mudamos cor, tamanho e nome.

A parte prática é totalmente mão na massa e visual. As crianças aprendem a inserir uma Part, a usar as quatro ferramentas de manipulação: Select para escolher, Move para mover, Scale para redimensionar e Rotate para girar. Cada ferramenta mostra setas e alças coloridas em volta da peça, e o aluno arrasta essas alças para ver o bloco mudar na hora. É como brincar com peças de montar, só que dentro do computador e em três dimensões.

Esta é a primeira das oito aulas do mês, em que a turma vai montar um jogo jogável com código. Por isso o foco de hoje é dominar o espaço e ganhar confiança com o Studio, sem pressa de programar ainda. Ao final, cada criança salva o projeto na nuvem do Roblox com o próprio nome, para que o mundo dela fique guardado e possa crescer aula após aula. Esse hábito de salvar com nome próprio é uma vitória importante: o aluno entende que aquele mundo é dele e que vai voltar a ele toda semana.`,
  materiais: [
    `Computadores (um por aluno ou em duplas) com o Roblox Studio instalado, atualizado e já logado na conta de cada criança`,
    `Projetor ou TV ligada ao computador do professor para demonstrar onde clicar passo a passo`,
    `Um projeto Baseplate de exemplo já montado, com algumas Parts coloridas formando um cenário simples (uma plataforma e duas paredes) para servir de referência`,
    `Cartões ou etiquetas com as palavras Workspace, Explorer, Properties, Part e Baseplate para colar no quadro`,
    `Cronômetro ou timer na tela para marcar os quatro blocos de tempo da aula`,
    `Folha impressa simples com o passo a passo de abrir o Studio, criar uma Part e salvar na nuvem (apoio para o professor iniciante)`,
    `Mouse de verdade para cada computador (arrastar alças no touchpad é muito difícil para as crianças)`,
  ],
  conceitosChave: [
    `Roblox Studio — o programa onde a gente constrói e cria os jogos do Roblox, em vez de só jogar.`,
    `Baseplate — o modelo de mundo vazio, com um chão cinza quadriculado, pronto para a gente construir em cima.`,
    `Workspace — a janela 3D grande no meio da tela, o palco onde o nosso mundo aparece.`,
    `Explorer — a lista de tudo o que existe no jogo, parecida com o índice de um caderno.`,
    `Properties — o painel de ajustes da peça escolhida, onde mudamos cor, tamanho e nome.`,
    `Part — o bloco básico de construção do Roblox; é com vários Parts que montamos o cenário.`,
    `Salvar na nuvem — guardar o nosso jogo na internet do Roblox para que ele não se perca e a gente continue na próxima aula.`,
  ],
  treinamento: `## O que o professor precisa saber

Você não precisa ser especialista em Roblox para dar esta aula. Precisa entender uma única ideia: o Roblox Studio é uma sala de construção em três dimensões, e a peça básica chama-se Part. Antes da aula, abra o Studio uma vez, escolha o template Baseplate e brinque cinco minutos com as ferramentas Move, Scale e Rotate, arrastando as alças coloridas de uma Part. Saber localizar três janelas já basta: o Workspace (a visão 3D no centro), o Explorer (lista à direita) e o Properties (painel logo abaixo do Explorer). Se uma dessas janelas não aparecer, abra-a pela aba View, no menu de cima, clicando no nome correspondente. Tenha o seu próprio Baseplate aberto no projetor durante toda a aula.

## Passo a passo da aula

Aquecimento e revisão (10 min): pergunte "quem aqui já construiu algo com blocos de montar?". Diga que hoje vamos construir com blocos dentro do computador. Mostre os cartões Workspace, Explorer, Properties, Part e Baseplate no quadro e leia cada um. No projetor, abra o Roblox Studio: tela inicial, aba New (Novo), e clique no template Baseplate. Mostre o chão cinza surgindo.

Conteúdo novo guiado (15 min): apresente as três janelas apontando no projetor. Workspace é o palco 3D no meio. Explorer é a lista à direita; se não estiver visível, abra em View e clique em Explorer. Properties é o painel abaixo; abra em View, botão Properties. Agora insira uma peça: aba Home, botão Part. Um bloco cinza aparece. Mostre as quatro ferramentas no canto da aba Home: Select (a seta), Move (setas que empurram), Scale (alças com bolinhas que esticam) e Rotate (anéis que giram). Clique em Move e arraste a seta vermelha, depois a verde, depois a azul, para subir e andar com a peça. Clique em Scale e puxe uma bolinha para esticar. Clique em Rotate e arraste um anel para virar. No Explorer, clique duas vezes no nome Part e renomeie para Chao. No Properties, mude a propriedade Color.

Mão na massa (25 min): cada aluno cria o próprio Baseplate, insere ao menos três Parts e usa Move, Scale e Rotate para montar um cantinho de cenário (por exemplo, uma plataforma larga e uma parede). Circule pela sala, ajudando quem confundir as ferramentas. Lembre que clicar primeiro na peça é obrigatório para as alças aparecerem.

Desafio e compartilhar (10 min): desafie quem terminou a montar uma rampa, girando uma Part esticada. Depois, todos salvam: menu File, opção Save to Roblox (Salvar no Roblox), e escrevem um nome com o próprio nome, por exemplo "Mundo da Ana". Cada criança mostra o cenário no projetor.

## Como explicar para crianças

Use a analogia da caixa de blocos de montar: o Workspace é a mesa onde a gente monta, cada Part é uma peça da caixa, e o Explorer é a listinha de todas as peças que já tiramos da caixa. O Properties é o "cartão de identidade" da peça: ali está o nome dela, a cor e o tamanho. Para as ferramentas, diga: a seta (Move) empurra a peça para os lados, para cima e para baixo; as bolinhas (Scale) esticam e encolhem, como massinha; os anéis (Rotate) viram a peça, como girar um volante. Repita sempre: "primeiro eu clico na peça, depois eu mexo nela". E lembre que salvar na nuvem é como guardar o desenho na mochila para continuar amanhã.

## Erros comuns e como ajudar

Mexer sem selecionar: a criança tenta arrastar e nada acontece porque não clicou na peça antes; mostre que as alças só aparecem depois do clique. Trocar Move por Scale sem perceber: a peça estica em vez de andar; basta voltar e clicar na ferramenta certa na aba Home. A peça some no chão ou voa para longe: aconteceu de arrastar a seta azul demais; use a tecla de desfazer (Ctrl + Z) ou o botão Move para trazê-la de volta. Janela Explorer ou Properties fechada: abra em View e clique no nome dela. Esquecer de salvar com nome próprio: reforce no final, um por um, que o nome tem o nome da criança, e confirme que apareceu a mensagem de salvo.`,
  exercicios: [
    {
      titulo: `Caça às três janelas`,
      tipo: `Discussão guiada na tela`,
      tempo: `7 minutos`,
      guiaProfessor: `Aqueça o reconhecimento da tela antes de qualquer construção. Aponte cada janela no projetor e peça que as crianças apontem na própria tela. Confira que Explorer e Properties estão abertos em todos os computadores; se não, abra em View.`,
      atividade: `Olhando para o Roblox Studio aberto, encontre e mostre com o dedo na tela: a janela Workspace (o palco 3D no meio), o Explorer (a lista à direita) e o Properties (o painel de ajustes embaixo). Diga em voz alta o nome de cada uma.`,
      gabarito: `O aluno deve apontar corretamente as três janelas: Workspace é a área 3D central com o chão cinza; Explorer é a lista de itens, normalmente no canto direito; Properties é o painel abaixo do Explorer que mostra cor, tamanho e nome da peça. Se uma janela não aparecer, o caminho para abrir é a aba View depois clicar no nome dela.`,
    },
    {
      titulo: `Meu primeiro Baseplate`,
      tipo: `Prática guiada no Roblox Studio`,
      tempo: `6 minutos`,
      guiaProfessor: `Vá devagar mostrando no projetor cada clique. Garanta que todos cheguem ao mesmo ponto antes de avançar. Confira na tela de cada aluno se o chão cinza quadriculado apareceu.`,
      atividade: `Abra o Roblox Studio. Na tela inicial, vá na aba New (Novo) e clique no template Baseplate. Espere o chão cinza quadriculado aparecer na janela Workspace.`,
      gabarito: `Ao final, cada aluno deve ter na tela um Baseplate aberto: um chão cinza liso e quadriculado ocupando o Workspace, sem nenhuma peça extra ainda. Caminho correto: tela inicial, aba New, botão Baseplate. Se abriu um template colorido ou com casas, o aluno escolheu o modelo errado; basta fechar e abrir o Baseplate novamente.`,
    },
    {
      titulo: `Inserir e pintar uma Part`,
      tipo: `Prática no computador`,
      tempo: `9 minutos`,
      guiaProfessor: `Mostre que a peça nasce no centro do mundo. Lembre que é preciso clicar na peça antes de mexer no Properties. Acompanhe a renomeação no Explorer, pois clicar duas vezes no nome confunde algumas crianças.`,
      atividade: `Na aba Home, clique no botão Part para inserir um bloco. No Explorer, clique duas vezes no nome Part e troque para Chao. No painel Properties, encontre a propriedade Color e escolha uma cor bem viva.`,
      gabarito: `O aluno deve ter, no Explorer, uma Part renomeada para Chao, visível no Workspace, com uma cor diferente do cinza padrão. Caminho correto: Home depois Part para inserir; clique duplo no nome no Explorer para renomear; Properties depois Color para pintar. Se a cor não mudou, provavelmente a peça não estava selecionada: clique nela primeiro e tente de novo.`,
    },
    {
      titulo: `Mover, girar e esticar`,
      tipo: `Desafio de manipulação 3D`,
      tempo: `9 minutos`,
      guiaProfessor: `Este é o coração prático da aula. Reforce a ordem: clicar na peça, escolher a ferramenta, arrastar a alça certa. Mostre as cores das setas (vermelho, verde, azul) e diga que cada uma é uma direção. Tenha o exemplo no projetor para comparar.`,
      atividade: `Com a sua peça selecionada, use a ferramenta Move (setas) para levantá-la do chão, depois a ferramenta Scale (bolinhas) para deixá-la mais comprida, e por fim a ferramenta Rotate (anéis) para inclinar a peça como uma rampa.`,
      gabarito: `O aluno deve demonstrar as três ações: a peça sobe ou anda com o Move, fica mais comprida com o Scale e aparece inclinada com o Rotate, formando uma rampa. As ferramentas ficam na aba Home: Move (setas), Scale (alças com bolinhas) e Rotate (anéis). Erro comum: tentar arrastar sem ter selecionado a peça, então nenhuma alça aparece; a correção é clicar na peça primeiro. Se a peça sumiu, use Ctrl + Z para desfazer.`,
    },
    {
      titulo: `Salvar o meu mundo na nuvem`,
      tipo: `Desafio de finalização`,
      tempo: `5 minutos`,
      guiaProfessor: `Para encerrar, acompanhe a turma um a um. O ponto-chave é o nome do projeto conter o nome da criança e a mensagem de salvo aparecer. Explique que salvar na nuvem é diferente de salvar no computador: o mundo fica guardado na conta do Roblox e estará lá na próxima aula.`,
      atividade: `Monte um cantinho de cenário com pelo menos três Parts. Depois salve o seu jogo na nuvem: vá no menu File e clique em Save to Roblox (Salvar no Roblox). No campo do nome, escreva um título com o seu próprio nome, por exemplo "Mundo da Ana".`,
      gabarito: `O aluno deve ter um cenário com três ou mais Parts e o projeto salvo na nuvem com um nome que inclui o nome dele, por exemplo "Mundo do Pedro". Caminho correto: menu File depois Save to Roblox, preencher o nome e confirmar. O sinal de sucesso é a mensagem de jogo salvo ou o título aparecer na barra do topo. Se aparecer apenas Save (sem "to Roblox"), o aluno salvou no computador; oriente a refazer por Save to Roblox para guardar na nuvem.`,
    },
  ],
};
