import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 2,
  titulo: "Montando as Partes no Blender",
  semana: "Semana 1",
  duracao: "1 hora",
  objetivo: `Construir um objeto elaborado combinando várias formas no Blender, usando mover, girar e escalar para encaixar tudo, e dar os primeiros detalhes no Modo de Edição.`,
  descricao: `Na aula passada cada criança planejou um objeto legal no papel, escolhendo quais formas básicas (cubos, cilindros, esferas) ela usaria para montar a peça. Agora chegou a hora mais divertida: trazer esse desenho para dentro do Blender e construir o objeto de verdade, juntando as partes como se fossem peças de um brinquedo de montar. Esta é uma aula bem mão na massa, em que o professor demonstra um passo de cada vez no projetor e as crianças repetem no próprio computador.

O coração da aula são três superpoderes que todo modelador 3D usa o tempo todo: mover (a tecla G, de "grab", agarrar), girar (a tecla R, de "rotate") e escalar (a tecla S, de "scale", aumentar ou diminuir). Com esses três movimentos a criança consegue pegar cada forma, colocá-la no lugar certo, virá-la no ângulo que quiser e deixá-la do tamanho ideal para encaixar nas outras. É como brincar de montar um boneco de blocos, só que dentro do computador e em três dimensões.

Depois de juntar as formas, a turma dá o primeiro mergulho no Modo de Edição (Edit Mode). Lá dentro a criança aprende que cada forma é feita de pontinhos (vértices), linhas (arestas) e quadradinhos (faces). Nesta aula o foco é simples e seguro: selecionar uma face e usar o Extrudar (tecla E) para esticá-la, criando um pedaço novo, como puxar uma massinha. Com isso o objeto deixa de ser só "formas empilhadas" e começa a ganhar cara de pronto, com detalhes próprios.

Ao final, cada aluno deve ter um objeto reconhecível, com várias partes encaixadas e pelo menos um detalhe feito por esticamento de face. Não precisa estar perfeito nem colorido ainda — cor e materiais vêm nas próximas aulas. O importante hoje é a confiança de mexer no objeto sem medo, sabendo desfazer com Ctrl Z quando algo der errado.`,
  materiais: [
    `Computadores com o Blender já aberto em um arquivo novo (um por criança)`,
    `Projetor ligado mostrando a tela do professor com o Blender`,
    `Dois ou três exemplos prontos feitos pelo professor (ex.: um robozinho, um foguete e uma casinha) salvos para mostrar`,
    `Os desenhos de planejamento que as crianças fizeram na Aula 1`,
    `Mouse com rodinha (scroll) para cada computador — essencial para girar a câmera`,
    `Cartão ou cartaz grande com as teclas G, R, S e E desenhadas, fixado na parede`,
    `Folha de "checklist do objeto" para a criança marcar o que já fez`,
  ],
  conceitosChave: [
    `Mover (tecla G) — pegar uma forma e arrastar para outro lugar, como agarrar um brinquedo e colocá-lo onde você quer.`,
    `Girar (tecla R) — virar a forma para o lado, de ponta-cabeça ou de qualquer jeito, como rodar um volante.`,
    `Escalar (tecla S) — aumentar ou diminuir o tamanho da forma, como esticar ou apertar uma esponja.`,
    `Modo de Edição (Edit Mode) — o lugar onde a gente entra "dentro" da forma para mexer nos pontinhos, linhas e quadradinhos.`,
    `Face — cada quadradinho que forma a casquinha do objeto, como um ladrilho na parede.`,
    `Extrudar (tecla E) — puxar uma face para fora e criar um pedaço novo, como esticar massinha de modelar.`,
    `Desfazer (Ctrl Z) — o botão mágico de voltar atrás quando a gente erra, igual a uma borracha que apaga o último passo.`,
  ],
  treinamento: `## O que o professor precisa saber

Você não precisa ser um artista 3D para dar esta aula. Precisa só dominar quatro teclas: G (mover), R (girar), S (escalar) e E (extrudar). Abra o Blender em casa uma vez antes da aula e treine: clique numa forma para selecioná-la (ela fica com um contorno laranja), aperte G e mexa o mouse — a forma anda. Aperte R e o mouse gira a forma. Aperte S e o mouse muda o tamanho. Para confirmar, clique com o botão esquerdo ou aperte Enter; para cancelar, aperte Esc. Para adicionar formas use o menu "Add" (Adicionar) no topo da janela 3D, ou aperte Shift A. Para girar a câmera ao redor do objeto, segure o botão do meio do mouse (a rodinha) e mexa. Decore também o Ctrl Z (desfazer): será o seu melhor amigo e o das crianças.

## Passo a passo da aula (ritmo 10/15/25/10)

10 min — Aquecimento/revisão: Reúna a turma perto do projetor. Mostre seus exemplos prontos (robô, foguete, casinha) e pergunte: "Quantas formas vocês acham que tem aqui?" Peça que cada criança pegue o desenho da Aula 1 e diga em voz alta quais formas vai usar. Relembre as teclas no cartaz da parede.

15 min — Conteúdo novo guiado: No projetor, comece num arquivo novo. Apague o cubo inicial (clique nele, tecla X, confirme). Use "Add > Mesh > Cube" para colocar um cubo. Mostre G arrastando o cubo, R girando, S aumentando. Adicione um cilindro com "Add > Mesh > Cylinder" e encaixe um no outro usando G. Agora entre no Modo de Edição: com a forma selecionada, aperte Tab (ou troque "Object Mode" por "Edit Mode" no canto superior esquerdo). Clique numa face, aperte E e puxe o mouse para esticá-la; clique para confirmar. Aperte Tab de novo para voltar. Mostre Ctrl Z desfazendo.

25 min — Mão na massa: As crianças constroem o próprio objeto seguindo o desenho. Circule pela sala. Repita em voz alta: "Selecionou? Tá laranja? Então aperta a tecla." Ajude quem trava. Garanta que cada um adicione pelo menos três formas e faça pelo menos um Extrudar. Lembre sempre: "Errou? Ctrl Z!"

10 min — Desafio + compartilhar: Desafie cada criança a girar uma das partes com R para deixar o objeto mais interessante (uma asa inclinada, um telhado pontudo). Depois, cada um mostra o objeto na própria tela e diz uma parte de que mais gostou.

## Como explicar para crianças

Use analogias de brincadeira. "Mover é agarrar o brinquedo e levar pra outro lugar." "Girar é rodar igual a um volante." "Escalar é esticar ou apertar uma esponja." Para o Modo de Edição: "Vamos entrar dentro da forma, igual entrar dentro de uma casa, e mexer nos tijolinhos." Para o Extrudar: "É puxar a massinha pra fora e criar um pedaço novo." Sempre que alguém errar, comemore o Ctrl Z: "Que bom que a gente tem o botão mágico de voltar!"

## Erros comuns e como ajudar

O erro número um é apertar a tecla sem ter selecionado a forma — nada acontece. Cheque sempre se a peça está com contorno laranja antes de apertar G, R ou S. O segundo erro é mexer o mouse depois de apertar e não confirmar com o clique, deixando a forma "presa" ao cursor; ensine que o clique esquerdo "solta" a peça e o Esc cancela. Muitas crianças "perdem" o objeto ao girar demais a câmera — ensine a apertar a tecla Início (Home) para enquadrar tudo de novo. Outro tropeço é entrar no Modo de Edição e achar que sumiu o objeto; mostre o seletor de modo no canto e o Tab para alternar. Por fim, alguns esticam a face para muito longe e a peça fica esquisita — relembre o Ctrl Z e respire junto com a criança. Mantenha a calma: errar e desfazer faz parte de aprender a modelar.`,
  exercicios: [
    {
      titulo: `Caça às teclas mágicas`,
      tipo: `Aquecimento oral`,
      tempo: `5 minutos`,
      guiaProfessor: `Aponte para o cartaz com as teclas e faça perguntas rápidas para toda a turma, sem computador ainda. É só para ativar a memória das teclas.`,
      atividade: `O professor pergunta e as crianças respondem em voz alta: "Qual tecla agarra e move a forma?" "Qual tecla gira?" "Qual tecla muda o tamanho?" "Qual é o botão mágico de voltar atrás?"`,
      gabarito: `Mover = G. Girar = R. Escalar (tamanho) = S. Voltar atrás (desfazer) = Ctrl Z. Extrudar (esticar) = E.`,
    },
    {
      titulo: `Adicionar e mover uma forma`,
      tipo: `Prática guiada no computador`,
      tempo: `8 minutos`,
      guiaProfessor: `Faça junto, passo a passo, no projetor. Espere todos terminarem cada passo antes de seguir. Confirme que a forma fica laranja ao ser selecionada.`,
      atividade: `Cada criança usa "Add > Mesh > Cube" para colocar um cubo, clica nele até ficar laranja, aperta G e move para a direita, depois clica para confirmar.`,
      gabarito: `O cubo aparece, fica com contorno laranja ao ser clicado e desliza para a direita com a tecla G, parando no clique de confirmação. Se nada se mover, a criança esqueceu de selecionar (deixar laranja) antes de apertar G.`,
    },
    {
      titulo: `Girar e escalar para encaixar`,
      tipo: `Prática individual`,
      tempo: `8 minutos`,
      guiaProfessor: `Agora a criança combina dois movimentos. Circule e repita: "Selecionou? Tá laranja? Aperta a tecla." Ajude quem deixar a forma "presa" ao mouse a clicar para soltar.`,
      atividade: `Adicionar um cilindro com "Add > Mesh > Cylinder", girá-lo com R para ficar deitado e diminuí-lo com S, depois movê-lo com G até encostar no cubo.`,
      gabarito: `O cilindro deita após o R, fica menor após o S e encosta no cubo após o G. Cada movimento precisa ser confirmado com clique. Encaixe perfeito não é exigido — basta as duas formas se tocarem.`,
    },
    {
      titulo: `Esticar uma face no Modo de Edição`,
      tipo: `Desafio técnico`,
      tempo: `10 minutos`,
      guiaProfessor: `Mostre no projetor entrar no Modo de Edição com Tab, selecionar uma face e usar E. Avise que se a face for longe demais, é só Ctrl Z. Verifique que voltaram ao Modo Objeto com Tab no final.`,
      atividade: `Selecionar uma forma, apertar Tab para entrar no Modo de Edição, clicar numa face, apertar E e puxar um pouco para criar um pedaço novo (ex.: um cano, uma orelha, uma chaminé), confirmar com o clique e voltar com Tab.`,
      gabarito: `Surge um pedaço novo esticado a partir da face escolhida, e a criança volta ao Modo Objeto (Object Mode) com Tab. Se o objeto "sumir", ela ainda está no Modo de Edição — basta apertar Tab. Se o pedaço ficar enorme, usar Ctrl Z e tentar puxar menos.`,
    },
    {
      titulo: `Montar meu objeto completo`,
      tipo: `Projeto da aula`,
      tempo: `12 minutos`,
      guiaProfessor: `Esta é a entrega do dia. Cada criança segue o próprio desenho da Aula 1. Use a folha de checklist. Garanta o mínimo: três formas, um giro e um Extrudar. Termine pedindo que cada um mostre o objeto e diga a parte favorita.`,
      atividade: `Construir o objeto planejado combinando pelo menos três formas (usando G, R e S para encaixá-las) e dar pelo menos um detalhe com Extrudar (E) no Modo de Edição, deixando a peça com cara de pronta.`,
      gabarito: `O objeto está montado com três ou mais formas encaixadas, tem ao menos uma parte girada e ao menos um detalhe extrudado, e a criança consegue apontar e nomear as partes. Cor e materiais NÃO são avaliados hoje — ficam para as próximas aulas. Vale a montagem reconhecível e a confiança ao usar as teclas.`,
    },
  ],
};
