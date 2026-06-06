import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 5,
  titulo: "Conhecendo a Bambu Lab",
  semana: "Semana 3",
  duracao: "1 hora",
  objetivo: `Visitar a impressora Bambu Lab de verdade, aprender as regras de segurança, conhecer o filamento e o bico quente e enviar o primeiro arquivo já fatiado para a impressão começar diante dos olhos da turma.`,
  descricao: `Nas semanas anteriores a turma aprendeu, no computador, a abrir o ateliê de impressão, a posicionar cada peça na mesa, a entender o que é fatiar e a escolher as configurações certas no Bambu Studio. Tudo isso aconteceu na tela. Hoje é o grande dia de sair de perto do monitor e ir até a máquina de verdade: a impressora Bambu Lab. As crianças vão conhecer de pertinho a estrela do mês, aquela que transforma o desenho em um objeto que dá para segurar na mão.

A ideia central da aula é segurança e respeito pela máquina. A impressora tem um bico que esquenta muito, como o ferro de passar roupa da casa, e tem partes que se movem sozinhas. Por isso, antes de qualquer coisa, vamos combinar as regras de ouro: olhar com os olhos, não com as mãos; nunca encostar no bico quente; manter os dedos longe das partes que andam. Em seguida, o professor mostra onde fica o filamento (o "rolo de massinha" que vira a peça), por onde ele entra e onde está o bico que derrete o material.

O momento mais esperado é o envio do primeiro arquivo. A peça já foi fatiada nas aulas passadas, então hoje o trabalho é apertar o botão certo, mandar o arquivo para a Bambu Lab pela rede e ver a máquina aquecer, calibrar e começar a desenhar a primeira camada. As crianças observam a mesa esquentando, o bico se movendo e o filamento saindo derretido, formando o contorno da peça. É puro encantamento.

Por ser uma turma pequena, de até dez alunos, dá para que cada criança chegue perto com calma, em fila organizada, aponte com o dedo (sem encostar) onde está o bico e o filamento, e acompanhe o início da impressão com atenção. No fim da aula, a turma terá conhecido a impressora por dentro e por fora, terá memorizado as regras de segurança e terá visto, ao vivo, a peça começar a nascer camada por camada.`,
  materiais: [
    `Impressora Bambu Lab ligada, limpa e posicionada num local seguro, com espaço para a turma chegar perto em fila`,
    `Computador do professor com o Bambu Studio aberto e conectado à impressora pela rede (Wi-Fi ou cabo)`,
    `Projetor ou TV ligado ao computador para mostrar a tela do Bambu Studio e o botão de enviar para todos`,
    `Um arquivo de peça já fatiado nas aulas anteriores, pronto para imprimir (de preferência uma peça pequena e rápida)`,
    `Um rolo (carretel) de filamento extra para mostrar e deixar as crianças tocarem com segurança quando frio`,
    `Cartaz das "Regras de Ouro de Segurança" impresso e colado na parede perto da impressora`,
    `Exemplos de peças já impressas em aulas passadas para a turma comparar com o que vai sair hoje`,
  ],
  conceitosChave: [
    `Bambu Lab — a nossa impressora 3D de verdade; a máquina que pega o desenho do computador e constrói a peça camada por camada.`,
    `Filamento — o fio comprido de plástico enrolado num rolo, parecido com um espaguete colorido; é a "massinha" que a impressora derrete para criar a peça.`,
    `Bico quente (nozzle) — a pontinha que esquenta muito e derrete o filamento, igual à ponta do ferro de passar; nunca se encosta nela.`,
    `Mesa de impressão — a plaquinha lisa onde a peça é construída; ela também esquenta para a primeira camada grudar direitinho.`,
    `Enviar para a impressora — o botão do Bambu Studio que manda o arquivo fatiado pela rede até a Bambu Lab, como mandar uma figurinha pelo celular.`,
    `Primeira camada — o primeiro risquinho de plástico que a impressora desenha na mesa; é a base de tudo e precisa sair bem certinha.`,
    `Regras de ouro — os combinados de segurança que protegem a turma: olhar com os olhos, manter as mãos longe e nunca encostar no que está quente.`,
  ],
  treinamento: `## O que o professor precisa saber

Você não precisa ser técnico em impressão 3D para dar esta aula. Precisa, sim, dominar três coisas simples e treiná-las uma vez antes da turma. A primeira é a segurança: o bico (nozzle) chega a mais de 200 graus e a mesa também esquenta, então a regra número um é ninguém encosta na máquina ligada. Você manuseia tudo; as crianças apenas observam. A segunda é reconhecer as partes principais: o rolo de filamento, o tubo por onde ele passa, o bico quente que derrete o material e a mesa onde a peça nasce. A terceira é o envio: no Bambu Studio, com a peça já fatiada das aulas anteriores, você clica em um único botão para mandar o arquivo pela rede até a Bambu Lab. Antes da aula, ligue a impressora, confirme que ela aparece conectada no canto do Bambu Studio e faça um teste de envio para garantir que a comunicação funciona.

## Passo a passo da aula (ritmo 10/15/25/10)

10 min — Aquecimento e revisão. Reúna a turma longe da impressora, sentados. Mostre uma peça já impressa e pergunte: "Como será que isto foi feito? Hoje vamos ver a máquina que faz!". Apresente o cartaz das Regras de Ouro e leia cada uma em voz alta, pedindo que repitam: olhar com os olhos, mãos longe, nunca encostar no quente.

15 min — Conteúdo novo guiado. Leve a turma em fila até a impressora, mantendo um passo de distância. Aponte (sem encostar) e nomeie cada parte: o rolo de filamento ("o espaguete que vira a peça"), o tubo por onde o fio caminha, o bico quente ("a pontinha que esquenta como o ferro de passar") e a mesa de impressão. Passe um pedaço de filamento frio de mão em mão para sentirem o material. Depois, sentados de novo, mostre no projetor a tela do Bambu Studio com a peça fatiada aberta.

25 min — Mão na massa. Aqui a "massa" é enviar o arquivo e observar. No Bambu Studio, mostre no topo da tela o status da Bambu Lab conectada. Clique no botão "Print" (Imprimir) ou "Print plate"; na janela que abre, confirme a impressora certa e clique em "Send" (Enviar) ou "Print" para mandar o arquivo pela rede. Leve a turma de volta à impressora, em fila segura, para ver a máquina aquecer o bico e a mesa, calibrar e começar a desenhar a primeira camada. Convide cada criança a apontar com o dedo, sem encostar, onde o filamento está saindo.

10 min — Desafio e compartilhar. De volta aos lugares, peça que cada criança diga uma regra de segurança e aponte, num desenho ou no telão, o nome de uma parte da impressora (filamento, bico, mesa). O desafio é a turma prever: "Quanto tempo a Bambu Studio disse que a peça vai levar?". Encerre dizendo que a peça vai continuar imprimindo e que na próxima aula vão observar como ela cresce.

## Como explicar para crianças

Use analogias do dia a dia. Para o bico quente: "É como a ponta do ferro de passar roupa da sua casa, esquenta muito e por isso a gente nunca encosta". Para o filamento: "É um espaguete de plástico bem comprido; a impressora derrete a pontinha e usa para desenhar a peça". Para o envio do arquivo: "É como mandar uma figurinha pelo celular: a peça vai do computador até a impressora pelo ar". Para a primeira camada: "É o primeiro risquinho de tinta no papel; se ele sair torto, o desenho todo torce, então a gente observa com carinho".

## Erros comuns e como ajudar

O erro mais perigoso é a criança querer tocar a máquina ligada; combine antes a fila e a distância de um passo, e fique sempre entre a turma e o bico. Outro erro comum é a turma se aglomerar; chame de duas em duas crianças para olhar de perto. No computador, o engano frequente é a impressora não aparecer conectada; confira o Wi-Fi e ligue a Bambu Lab antes da aula para evitar surpresa. Algumas crianças confundem "fatiar" com "imprimir"; lembre que fatiar já foi feito e que hoje só apertamos o botão de enviar. Por fim, se a primeira camada sair falhada, não se preocupe na frente da turma: explique com calma que ajustes fazem parte e que vamos observar juntos.`,
  exercicios: [
    {
      titulo: `As regras de ouro`,
      tipo: `Combinado oral em roda`,
      tempo: `6 minutos`,
      guiaProfessor: `Faça no aquecimento, antes de chegar perto da impressora. Leia o cartaz das Regras de Ouro e peça que cada criança repita uma regra. Reforce que quem segue as regras pode chegar perto com segurança. Serve para garantir a segurança da aula inteira.`,
      atividade: `Olhe o cartaz com a professora ou o professor e diga em voz alta uma regra de segurança da impressora. Por exemplo: "Eu olho com os olhos e mantenho as mãos longe".`,
      gabarito: `Estão certas as três regras de ouro: olhar com os olhos (não com as mãos), manter as mãos e os dedos longe da máquina, e nunca encostar no bico quente nem na mesa quente. Qualquer uma dessas, dita com as próprias palavras, é uma resposta válida.`,
    },
    {
      titulo: `Que parte é essa?`,
      tipo: `Reconhecimento apontando, sem encostar`,
      tempo: `7 minutos`,
      guiaProfessor: `Leve a turma em fila até a impressora, com um passo de distância. Aponte uma parte (filamento, bico, mesa) e peça que digam o nome. Fique sempre entre a turma e o bico quente. Aceite respostas com as palavras das crianças, como "espaguete" para o filamento.`,
      atividade: `Sem encostar na máquina, aponte com o dedo de longe e diga o nome da parte que a professora ou o professor mostrar: é o filamento, o bico quente ou a mesa?`,
      gabarito: `As respostas certas são: o rolo/fio é o filamento (o "espaguete" de plástico); a pontinha que esquenta é o bico quente (nozzle); a plaquinha lisa onde a peça nasce é a mesa de impressão. Vale a criança usar palavras simples desde que aponte a parte certa.`,
    },
    {
      titulo: `Frio ou quente?`,
      tipo: `Pergunta de segurança com votação`,
      tempo: `8 minutos`,
      guiaProfessor: `Mostre o pedaço de filamento frio para tocarem e relembre que o bico, ao contrário, fica muito quente. Faça perguntas e peça que votem levantando a mão. Reforce a diferença entre o que pode tocar (filamento frio) e o que nunca se toca (bico e mesa quentes).`,
      atividade: `Levante a mão para responder: o pedaço de filamento que você tocou estava frio ou quente? E o bico da impressora ligada, pode encostar ou não pode?`,
      gabarito: `O filamento solto que a turma tocou estava frio, por isso pode ser segurado com cuidado. O bico (e a mesa) da impressora ligada fica muito quente e nunca se pode encostar. A resposta correta é: filamento frio pode tocar; bico quente, não pode de jeito nenhum.`,
    },
    {
      titulo: `Enviar para a Bambu Lab`,
      tipo: `Demonstração guiada no Bambu Studio`,
      tempo: `12 minutos`,
      guiaProfessor: `Conduza você mesmo no projetor, com a turma observando. Mostre o status da impressora conectada no topo da tela, clique em "Print" (Imprimir), confirme a Bambu Lab certa na janela e clique em "Send"/"Print" (Enviar). Convide uma criança a dizer "agora!" no momento de apertar. Leve a turma para ver a máquina começar.`,
      atividade: `Acompanhe no telão enquanto a professora ou o professor mostra o botão de Imprimir no Bambu Studio. Quando todos estiverem prontos, conte junto "três, dois, um" para o arquivo ser enviado para a Bambu Lab.`,
      gabarito: `O envio está correto quando a impressora aparece conectada, o botão "Print" é clicado, a Bambu Lab certa é confirmada e o arquivo é enviado com "Send"/"Print". Sinal de êxito: a impressora recebe o arquivo, começa a aquecer o bico e a mesa e logo inicia a impressão.`,
    },
    {
      titulo: `Detetive da primeira camada`,
      tipo: `Observação ao vivo com previsão`,
      tempo: `12 minutos`,
      guiaProfessor: `É o momento mais esperado. Leve a turma à impressora em fila segura, de duas em duas para olhar de perto. Aponte o filamento saindo derretido e a primeira camada sendo desenhada. Antes, peça que a turma preveja o tempo que o Bambu Studio mostrou. Mantenha-se entre as crianças e o bico quente o tempo todo.`,
      atividade: `Observe a impressora desenhar a primeira camada. Aponte de longe onde o filamento está saindo. Depois adivinhe: o Bambu Studio disse que a peça vai levar pouco tempo ou muito tempo para ficar pronta?`,
      gabarito: `A primeira camada é o primeiro contorno de plástico que a impressora desenha na mesa, e o filamento sai derretido pelo bico quente. A previsão de tempo é a que aparece no Bambu Studio (em minutos ou horas); qualquer resposta próxima do número mostrado na tela está correta, pois o objetivo é a criança observar e ler o tempo estimado.`,
    },
  ],
};
