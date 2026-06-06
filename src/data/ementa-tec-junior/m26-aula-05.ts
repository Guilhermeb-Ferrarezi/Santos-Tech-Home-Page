import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 5,
  titulo: "Começou a imprimir!",
  semana: "Semana 3",
  duracao: "1 hora",
  objetivo: `Iniciar a impressão de verdade da peça de cada criança na Bambu Lab e observar com segurança as primeiras camadas saindo do bico, sem encostar nas partes quentes.`,
  descricao: `Esta é a aula mais esperada do mês inteiro. Nas aulas anteriores as crianças aprenderam como a impressora ganha vida, descobriram o segredo das camadas, abriram o modelo no Bambu Studio e o fatiaram deixando tudo pronto. Agora chega o grande momento: apertar o botão e ver a Bambu Lab começar a imprimir de verdade a peça que cada criança criou. É a hora em que o desenho que estava só na tela começa a virar um objeto que dá para pegar com a mão.

A impressão 3D funciona derretendo um fio de plástico chamado filamento. A impressora aquece um bico (chamado bico extrusor ou nozzle) até ficar bem quente, e por esse bico sai o plástico derretido, igual a um lápis de cola quente desenhando. A máquina deposita esse plástico na mesa de impressão seguindo o desenho do modelo, primeiro uma camada bem fininha encostada na mesa, depois outra camada por cima, e outra, e outra. Como o plástico esfria rápido, cada camada endurece e segura a próxima. É camada sobre camada, devagar, até a peça inteira ficar pronta.

Nesta aula o foco é começar a impressão e observar com segurança. As crianças vão acompanhar a primeira camada saindo do bico e grudando na mesa, que é a parte mais importante de toda a impressão: se a primeira camada gruda bem, o resto costuma dar certo. Elas vão ver o bico andando de um lado para o outro e o desenho do modelo aparecendo aos poucos na mesa, como mágica em câmera lenta. O professor vai conversar com a turma sobre o que está acontecendo e pedir palpites de como a peça vai ficar quando terminar.

A regra de ouro desta aula é uma só: olhar muito, encostar nunca. O bico e a mesa ficam muito quentes e podem queimar. As crianças observam pela porta de vidro fechada ou de uma distância segura, com as mãos para trás. O professor não precisa ser especialista: basta saber apertar o botão de imprimir, manter todos a uma distância segura e transformar a espera numa observação divertida e cheia de palpites.`,
  materiais: [
    `Impressora Bambu Lab ligada, com a placa de impressão limpa e o filamento já carregado`,
    `Computador do professor com o Bambu Studio aberto, mostrando o arquivo já fatiado de uma peça`,
    `Projetor ou tela grande para mostrar a tela do Bambu Studio e o painel de impressão para toda a turma`,
    `Os arquivos fatiados (.3mf) de cada criança, salvos e prontos da aula anterior`,
    `Uma peça já impressa de exemplo, para mostrar como vai ficar no final`,
    `Folhas e lápis de cor para as crianças desenharem o palpite de como a peça ficará`,
    `Uma linha no chão ou fita colorida marcando a distância segura da impressora`,
  ],
  conceitosChave: [
    `Filamento — o fio de plástico colorido que a impressora derrete para construir a peça, como a tinta de uma caneta mágica.`,
    `Bico (extrusor) — a pontinha quente de onde sai o plástico derretido; é como a ponta de um lápis de cola quente.`,
    `Mesa de impressão — a placa onde a peça é construída e onde a primeira camada gruda.`,
    `Primeira camada — a camada de baixo, encostada na mesa; é a base de tudo e a mais importante para a peça dar certo.`,
    `Botão de imprimir — o botão que manda a impressora começar a trabalhar no modelo escolhido.`,
    `Distância segura — o espaço que mantemos do corpo até a impressora para não encostar nas partes quentes.`,
    `Partes quentes — o bico e a mesa, que esquentam muito e podem queimar; a gente olha, mas nunca toca.`,
  ],
  treinamento: `## O que o professor precisa saber

Antes da aula, ligue a Bambu Lab e confirme três coisas: a placa de impressão está limpa (sem restos de plástico de impressões antigas), o filamento está carregado no AMS ou direto no carretel, e a porta de vidro fecha bem. No Bambu Studio, no computador do professor, abra um dos arquivos .3mf já fatiados na aula passada. No canto superior direito você verá o botão de impressão. Em equipamentos com tela, também é possível selecionar o arquivo direto no painel da máquina.

Há duas formas de enviar a impressão. Pelo Bambu Studio: com a impressora conectada (por Wi-Fi ou cabo), clique em Print plate (Imprimir placa) e depois confirme em Send (Enviar) ou Print (Imprimir). Pela tela da própria impressora: toque no ícone de arquivos, escolha o modelo e toque em Start (Iniciar). Faça você o envio; as crianças observam. A impressora vai primeiro aquecer o bico e a mesa (aparece uma barrinha de temperatura subindo), pode fazer uma checagem da mesa e só então começa a depositar a primeira camada.

## Passo a passo da aula

10 min — Aquecimento e revisão. Reúna a turma e relembre: o que a gente fez na aula passada? (Fatiamos o modelo.) Mostre a peça de exemplo já impressa e diga: hoje a impressora vai construir a nossa peça de verdade, camada sobre camada. Apresente a regra de ouro: olhar muito, encostar nunca, porque as partes ficam quentes.

15 min — Conteúdo novo guiado. No projetor, mostre o Bambu Studio com um arquivo fatiado aberto. Aponte o botão de impressão no canto superior direito. Explique que ao clicar, a impressora primeiro aquece (mostre onde aparece a temperatura subindo) e só depois começa. Clique em Print plate e confirme em Send. Leve a turma até a marca de distância segura e observem juntos a máquina aquecer.

25 min — Mão na massa. Um por um, ajude cada criança a enviar o próprio arquivo fatiado para a impressora (ou inicie você enquanto a criança aponta o botão). Como a sala tem até 10 alunos e poucas impressoras, faça rodízio: enquanto uma peça inicia, as outras crianças desenham no papel o palpite de como a peça vai ficar. Todos observam a primeira camada surgir, de longe e com as mãos para trás.

10 min — Desafio e compartilhar. Lance o desafio dos palpites: cada criança diz uma coisa que observou (o bico anda rápido ou devagar? a peça já dá para reconhecer?) e mostra o desenho do palpite. Combine que as impressões vão continuar sozinhas até a próxima aula.

## Como explicar para crianças

Use a analogia do lápis de cola quente: o bico é a pontinha quente que solta o plástico derretido e desenha na mesa. Diga que a impressora é como um confeiteiro fazendo um bolo com bico de confeitar, mas em vez de chantilly sai plástico, e em vez de uma camada ele faz muitas, uma sobre a outra. Repita sempre a regra de ouro: olhar muito, encostar nunca. Nomeie o que aparece na tela: agora está aquecendo, agora começou a primeira camada. Crianças de 5 a 9 anos adoram prever o que vai acontecer, então transforme a espera num jogo de palpites.

## Erros comuns e como ajudar

O erro mais perigoso é a criança querer tocar a impressora para ver de perto: reforce a marca de distância e mantenha a porta de vidro fechada. Outro ponto é a ansiedade: a impressão demora e a peça aparece devagar, então combine que não fica pronta hoje, evitando frustração. Algumas crianças acham que a máquina travou enquanto ela só está aquecendo; mostre a barrinha de temperatura subindo para explicar a espera. Se a primeira camada não grudar bem (o plástico enrola atrás do bico), pause pela tela, espere você ajustar e reinicie; não deixe a criança mexer. Por fim, com poucas impressoras para vários alunos, deixe claro o rodízio para ninguém se sentir esquecido.`,
  exercicios: [
    {
      titulo: `A regra de ouro`,
      tipo: `Roda de conversa`,
      tempo: `5 minutos`,
      guiaProfessor: `Faça oralmente, em roda, antes de ligar qualquer impressão. O objetivo é fixar a segurança. Peça que cada criança repita a regra com as próprias palavras e mostre a marca de distância segura no chão.`,
      atividade: `A impressora tem partes muito quentes. Qual é a regra de ouro quando ela está imprimindo? O que a gente pode fazer e o que a gente nunca pode fazer?`,
      gabarito: `A regra de ouro é: olhar muito, encostar nunca. A gente pode observar de uma distância segura, com as mãos para trás e a porta de vidro fechada. A gente nunca pode tocar o bico nem a mesa, porque são as partes quentes e podem queimar.`,
    },
    {
      titulo: `Caça ao botão de imprimir`,
      tipo: `Reconhecimento guiado`,
      tempo: `5 minutos`,
      guiaProfessor: `Mostre no projetor a tela do Bambu Studio com um arquivo fatiado aberto. Peça que apontem na tela. É reconhecimento, ainda sem enviar a impressão.`,
      atividade: `Olhe a tela do Bambu Studio. Onde está o botão que manda a impressora começar a imprimir? Em que canto da tela ele fica?`,
      gabarito: `O botão de imprimir (Print plate, ou Imprimir placa) fica no canto superior direito da tela do Bambu Studio. Ao clicar nele, aparece a opção de Enviar (Send) para a impressora começar.`,
    },
    {
      titulo: `Primeiro esquenta, depois imprime`,
      tipo: `Observação guiada`,
      tempo: `8 minutos`,
      guiaProfessor: `Depois de enviar a impressão, leve a turma à marca de distância segura. Aponte a barrinha ou o número da temperatura subindo na tela da impressora ou do Bambu Studio. Explique a espera enquanto a máquina aquece.`,
      atividade: `Acabamos de mandar a impressora imprimir, mas ela ainda não está soltando plástico. O que ela está fazendo primeiro? Por que ela precisa fazer isso antes de começar?`,
      gabarito: `Primeiro a impressora está aquecendo o bico e a mesa. Dá para ver o número da temperatura subindo na tela. Ela precisa aquecer porque o plástico (filamento) só derrete e sai pelo bico quando está bem quente. Sem esquentar, o plástico não sairia.`,
    },
    {
      titulo: `Olhando a primeira camada`,
      tipo: `Observação e registro`,
      tempo: `8 minutos`,
      guiaProfessor: `Com a primeira camada já saindo, observem juntos de longe. Faça perguntas dirigidas e peça que descrevam o que veem. Reforce que a primeira camada é a base de tudo. As crianças que ainda esperam vez podem ir desenhando.`,
      atividade: `Observe a impressora construindo a primeira camada na mesa. O que você está vendo o bico fazer? A peça já está parecendo com o seu modelo? Por que essa primeira camada de baixo é tão importante?`,
      gabarito: `O bico anda de um lado para o outro deixando uma linha fininha de plástico derretido grudada na mesa, desenhando o contorno da peça. A primeira camada já mostra o formato de baixo do modelo. Ela é a mais importante porque é a base: se grudar bem na mesa, as outras camadas se empilham firmes por cima; se não grudar, a peça pode soltar e estragar.`,
    },
    {
      titulo: `Meu palpite de como vai ficar`,
      tipo: `Desafio criativo`,
      tempo: `10 minutos`,
      guiaProfessor: `Este é o desafio final, que junta observação e imaginação. Entregue papel e lápis de cor. Mostre a peça de exemplo já impressa para inspirar, mas peça que cada um pense na própria peça. No fim, cada criança apresenta o palpite e uma coisa que observou.`,
      atividade: `A sua peça está só no comecinho. Desenhe no papel como você acha que ela vai ficar quando a impressora terminar todas as camadas. Pinte com a cor do filamento que está sendo usado. Depois conte para a turma uma coisa que você reparou enquanto observava a impressão.`,
      gabarito: `Não há um desenho único: cada criança imagina a própria peça pronta. O esperado é que o desenho lembre o formato do modelo dela, esteja pintado com a cor do filamento usado, e que a criança consiga contar pelo menos uma observação real da impressão (por exemplo: o bico anda de um lado para o outro, a peça vai crescendo de baixo para cima camada por camada, o plástico esfria e endurece rápido, ou as partes ficam quentes e por isso a gente só olha de longe).`,
    },
  ],
};
