import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 6,
  titulo: "Imprimindo e Observando",
  semana: "Semana 3",
  duracao: "1 hora",
  objetivo: `A criança vai mandar imprimir a sua própria criação na Bambu Lab e acompanhar a impressão acontecer camada por camada, aprendendo a observar com paciência e a perceber quando a peça está ficando pronta.`,
  descricao: `Nesta aula chega o momento mais esperado do mês: a impressora Bambu Lab ligada, trabalhando de verdade na frente da turma, construindo as criações das crianças camada por camada. Nas aulas anteriores os alunos abriram o ateliê, posicionaram a peça na mesa, entenderam o que é fatiar e escolheram as configurações. Agora todo esse preparo vira ação: cada criança aperta o botão de imprimir e vê o desenho 3D virar um objeto que dá para segurar na mão.

O coração desta aula é a observação. Imprimir em 3D é lento, e isso é uma oportunidade linda para ensinar paciência. A impressora não fica pronta num passe de mágica: ela deposita um fio de plástico derretido bem fininho, uma camada de cada vez, e cada camada se apoia na de baixo, como tijolinhos de uma parede. As crianças vão aprender a olhar a peça crescer, a reconhecer a primeira camada (a mais importante de todas) e a perceber sinais de que está tudo indo bem.

Como a impressão demora mais do que uma aula, o professor vai trabalhar com a ideia de fila e de acompanhamento. Manda-se a impressão de uma criança ao vivo para todos verem o começo, e as demais peças entram numa lista para imprimir ao longo dos dias seguintes. O importante hoje não é cada peça ficar pronta na hora, e sim cada criança ver a SUA criação começar, entender o passo a passo e saber observar o progresso pela tela do Bambu Studio e pelo visor da própria impressora.

Por fim, as crianças aprendem que às vezes algo não sai como esperado: o fio pode falhar, a peça pode soltar da mesa, a primeira camada pode não grudar. Em vez de frustração, isso vira investigação: o que aconteceu e o que dá para fazer? Observar com calma é a habilidade mais valiosa que sai desta aula.`,
  materiais: [
    `Uma impressora Bambu Lab ligada, com filamento já carregado e mesa limpa, posicionada onde toda a turma consiga ver com segurança.`,
    `Computador do professor com o Bambu Studio aberto e conectado à impressora (pela rede ou pela tela da própria máquina), ligado ao projetor ou TV grande.`,
    `Computadores das crianças (um por aluno ou em duplas) com o Bambu Studio aberto e os projetos fatiados das aulas anteriores prontos para enviar.`,
    `Exemplos de peças já impressas em vários estágios: uma só com a primeira camada, uma pela metade e uma terminada, para mostrar como a peça cresce.`,
    `Cronômetro grande ou relógio visível, para acompanhar o tempo estimado que o Bambu Studio mostra.`,
    `Uma folha de acompanhamento simples por criança (com espaço para anotar o nome da peça, a hora que começou e quantas camadas tem).`,
    `Filamento extra da mesma cor, caso seja preciso recarregar durante a aula.`,
  ],
  conceitosChave: [
    `Camada — uma fatia bem fininha de plástico; a impressora empilha muitas camadas, uma em cima da outra, para formar a peça.`,
    `Primeira camada — a camada de baixo, a mais importante de todas, porque é ela que gruda na mesa e segura o resto.`,
    `Imprimir — mandar a impressora começar a construir de verdade a criação que a gente preparou no computador.`,
    `Fila de impressão — a lista de peças esperando a vez de serem impressas, uma de cada vez.`,
    `Tempo estimado — o palpite que o Bambu Studio dá de quanto tempo a impressão vai demorar.`,
    `Bico (nozzle) — a pontinha quente da impressora por onde sai o fio de plástico derretido.`,
    `Observar — olhar com calma e paciência para perceber se está tudo indo bem com a peça.`,
  ],
  treinamento: `## O que o professor precisa saber

Imprimir em 3D é construir um objeto empilhando camadas finíssimas de plástico derretido. O bico (nozzle) da Bambu Lab esquenta, derrete o filamento e desenha cada camada sobre a anterior. A primeira camada é a mais crítica: se ela não grudar bem na mesa, a peça inteira pode falhar. Por isso a Bambu Lab faz uma calibração automática antes de começar (a cabeça passeia pela mesa "tocando" levemente) — explique à turma que a máquina está "se preparando", não imprimindo ainda.

No Bambu Studio, depois de fatiar, aparece o botão Print (Imprimir), em azul, no canto superior direito. Ao clicar, abre uma janela para escolher a impressora e confirmar o filamento. Confirmando, o arquivo é enviado e a impressora começa. Você acompanha o progresso na aba Device (Dispositivo), no topo: ela mostra a câmera da impressora, a porcentagem concluída, o tempo restante e o número da camada atual. A própria Bambu Lab também tem um visor com essas informações. Antes da aula, faça um teste sozinho do clique em Print até a primeira camada sair, para não descobrir um problema na frente das crianças.

## Passo a passo da aula

Aquecimento (10 min): Mostre as três peças de exemplo (primeira camada, metade, pronta) e pergunte qual veio primeiro. Conduza a turma a perceber que a peça cresce de baixo para cima, camada por camada. Relembre que nas aulas passadas eles fatiaram e escolheram as configurações; hoje a impressora vai trabalhar de verdade.

Conteúdo novo guiado (15 min): No projetor, com um projeto já fatiado, clique no botão Print (azul, canto superior direito) do Bambu Studio. Mostre a janela que abre, confirme a impressora e o filamento e clique em Send/Print. Vá para a aba Device no topo e mostre a câmera, a porcentagem, o tempo restante e o número da camada. Aponte a calibração ("a máquina está se preparando") e, quando o bico começar a depositar plástico, mostre ao vivo a primeira camada nascendo.

Mão na massa (25 min): Chame as crianças por ordem da fila. Cada uma, no próprio computador, abre o projeto fatiado e clica em Print com você ao lado, confirmando impressora e filamento. Como há uma só impressora, mande ao vivo uma ou duas e coloque as demais na folha de acompanhamento (nome, hora, número de camadas). Enquanto uma imprime, as outras observam pela aba Device no projetor e anotam quantas camadas já saíram. Reforce o olhar paciente: contem as camadas juntos.

Desafio + compartilhar (10 min): Cada criança diz uma coisa que observou (a cor do fio, a primeira camada grudando, o tempo que falta). Pergunte: "como saberemos que está pronta?" Conduza à resposta: quando a porcentagem chegar a 100% e a impressora parar. Combine de checar as peças nas próximas aulas.

## Como explicar para crianças

Compare as camadas a tijolinhos: a parede sobe um por um, e o de baixo segura os de cima. A primeira camada é o "chão da casa" — se o chão é torto, a casa cai; por isso esperamos ela ficar pronta com atenção. Diga que a impressora "desenha com cola quente" linha por linha. Para a paciência, use a semente: a gente planta e não nasce na hora, mas se cuidar, cresce. Evite palavras como "nozzle" ou "calibração"; diga "a pontinha quente" e "a máquina se preparando".

## Erros comuns e como ajudar

O erro mais comum é a criança esperar a peça ficar pronta na hora e ficar frustrada — combine desde o começo que hoje só vemos COMEÇAR. Outro é clicar em Print sem ter fatiado: se não houver fatiamento, o botão pede para fatiar antes (clique em Slice plate primeiro). Se a primeira camada não gruda (vira um "espaguete"), pause na tela da impressora, confira se a mesa está limpa e reinicie a primeira camada. Algumas crianças confundem a calibração com erro ("a máquina está andando e não sai nada!") — explique que é normal. Se o filamento acabar no meio, a Bambu Lab pausa sozinha e pede troca; mostre como recarregar com calma. E reforce a segurança: o bico é MUITO quente, ninguém encosta na impressora sem o professor.`,
  exercicios: [
    {
      titulo: `A ordem das peças`,
      tipo: `observação`,
      tempo: `7 minutos`,
      guiaProfessor: `Coloque as três peças de exemplo embaralhadas na mesa (uma com só a primeira camada, uma pela metade, uma pronta). Pergunte qual saiu primeiro e por quê. Deixe as crianças pegarem e olharem de perto.`,
      atividade: `Cada criança coloca as três peças na ordem em que foram feitas, da menos pronta para a mais pronta, e explica que a peça cresce de baixo para cima, camada por camada.`,
      gabarito: `Acertou quem ordena: primeiro a peça só com a primeira camada, depois a pela metade, por fim a terminada, dizendo que a impressora empilha camadas de baixo para cima. Reconhecer que a camada de baixo vem antes prova que entendeu o conceito.`,
    },
    {
      titulo: `Apertando o botão Imprimir`,
      tipo: `prática na ferramenta`,
      tempo: `8 minutos`,
      guiaProfessor: `Mostre no projetor onde fica o botão Print (azul, canto superior direito) do Bambu Studio. Faça com a turma um por vez: abrir o projeto fatiado, clicar em Print, confirmar a impressora e o filamento na janela que abre. Fique ao lado de cada criança.`,
      atividade: `Cada criança abre o próprio projeto já fatiado no Bambu Studio, clica no botão Print e confirma a impressora e o filamento na janela que aparece, deixando a peça pronta para enviar.`,
      gabarito: `Acertou quem encontra o botão Print, clica nele e chega na janela de confirmação com a impressora e o filamento escolhidos. Se a janela de envio abre corretamente, está certo, mesmo que a impressão real entre na fila.`,
    },
    {
      titulo: `Caçadores de camadas`,
      tipo: `observação`,
      tempo: `10 minutos`,
      guiaProfessor: `Com uma impressão acontecendo, abra a aba Device no projetor e mostre o número da camada atual e a porcentagem. Peça que as crianças anotem na folha de acompanhamento quantas camadas já saíram e voltem a olhar depois de alguns minutos para ver o número subir.`,
      atividade: `Cada criança observa a impressão pela aba Device e anota na folha de acompanhamento o número da camada no começo e o número alguns minutos depois, comparando para ver que aumentou.`,
      gabarito: `Acertou quem anota dois números de camada diferentes e percebe que o segundo é maior que o primeiro, concluindo que a impressora está construindo a peça aos poucos. Notar que o número sobe prova que observou a impressão crescendo.`,
    },
    {
      titulo: `Como sei que está pronta?`,
      tipo: `roda de conversa`,
      tempo: `8 minutos`,
      guiaProfessor: `Sente a turma em roda de frente para a tela da impressora ou para a aba Device. Pergunte como vamos saber que a peça terminou. Conduza, sem dar a resposta de cara, até chegarem à porcentagem 100% e à impressora parando de se mover.`,
      atividade: `Em roda, as crianças dizem em voz alta pelo menos um sinal de que a impressão acabou e pelo menos um sinal de que ainda está no meio, usando o que veem na tela (porcentagem, tempo restante, movimento do bico).`,
      gabarito: `Acertou quem diz que a peça está pronta quando a porcentagem chega a 100% e a impressora para de se mover, e que ainda está no meio quando a porcentagem é menor que 100% e o bico continua andando. Citar a porcentagem ou o tempo restante mostra que entendeu como acompanhar.`,
    },
    {
      titulo: `Detetives do probleminha`,
      tipo: `desenho no papel`,
      tempo: `7 minutos`,
      guiaProfessor: `Conte que às vezes algo não sai como esperado: a peça solta da mesa ou a primeira camada não gruda. Peça que cada criança desenhe um "probleminha" da impressão e o que faria para resolver. Dê um exemplo no quadro (peça soltou, então limpamos a mesa e tentamos de novo).`,
      atividade: `Cada criança desenha uma situação em que a impressão deu errado (a peça soltou, virou espaguete ou o fio acabou) e, ao lado, desenha ou escreve uma ideia simples para resolver o problema.`,
      gabarito: `Acertou quem mostra um problema possível (peça solta, primeira camada que não gruda ou filamento acabando) e uma solução coerente, como limpar a mesa, reiniciar a primeira camada ou recarregar o filamento. Ligar um problema a uma solução prova que entendeu observar para resolver com calma.`,
    },
  ],
};
