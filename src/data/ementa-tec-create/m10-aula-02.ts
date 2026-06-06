import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 2,
  titulo: "Trocando de animação na hora certa",
  semana: "Semana 1",
  duracao: "1 hora",
  objetivo: `Fazer o personagem trocar automaticamente entre as animações de parado, correr e saltar usando eventos ligados ao movimento e ao pulo, com o espelhamento correto ao virar de lado.`,
  descricao: `Na aula passada o aluno trouxe as animações para dentro do personagem. Agora chega a parte mais viva do jogo: fazer com que a animação certa apareça no momento certo. Quando o jogador aperta a seta para a direita, o boneco precisa correr; quando solta, ele para; quando pula, ele mostra a pose de salto. Esse "trocar na hora certa" é o que transforma um quadrado que desliza pela tela em um personagem que parece ter vida própria.

A ferramenta para isso é a ação "Set animation" do plugin Sprite, comandada por eventos no Event Sheet. A lógica é simples de explicar: o jogo verifica, várias vezes por segundo, o que o jogador está fazendo. Se o personagem está se movendo no chão, mostramos a animação "Correr". Se está parado, mostramos "Parado". Se está no ar, mostramos "Saltar". Cada condição liga uma animação diferente, e o segredo é a ordem e a prioridade dessas verificações para não ficarem brigando entre si.

Outro ponto importante desta aula é o espelhamento. Em vez de criar uma animação separada para correr para a esquerda, usamos a propriedade "Set mirrored", que vira a imagem horizontalmente. Assim, com uma única animação de corrida, o personagem olha para o lado certo dependendo da direção do movimento. Isso economiza trabalho e mantém o projeto organizado.

Ao final, o aluno terá um personagem fluido, com transições suaves entre os três estados e virando para o lado correto. É uma vitória bem visível e motivadora, e prepara o terreno para as próximas aulas, em que o jogo ganhará pontos, inimigos e som.`,
  materiais: [
    `Computadores com Construct 3 aberto no projeto do jogo de cada aluno (com o personagem e as animações Parado, Correr e Saltar já criadas na Aula 1)`,
    `Projetor ou TV para o professor mostrar o Event Sheet e as ações na tela grande`,
    `Arquivo de exemplo .c3p com o personagem já animado, para usar como referência ou plano B`,
    `Personagem com comportamentos Platform e Solid no chão já configurados`,
    `Folha impressa ou slide com a tabela "Estado do jogador → Animação" para consulta`,
    `Mouse externo para os alunos que preferem (facilita clicar nos painéis do Construct 3)`,
  ],
  conceitosChave: [
    `Animação — sequência de imagens que se trocam rápido para dar a impressão de movimento, como correr ou pular.`,
    `Set animation — ação do Construct 3 que manda o personagem mostrar uma animação específica pelo nome dela.`,
    `Estado do jogador — a situação atual do personagem: parado, correndo ou no ar; cada estado pede uma animação.`,
    `Condição — a pergunta que o evento faz ("o jogador está se movendo?"); se a resposta é sim, a ação acontece.`,
    `Comportamento Platform — o componente que dá ao personagem o movimento de plataforma, com gravidade, andar e pular.`,
    `Espelhamento (mirror) — virar a imagem do personagem na horizontal para ele olhar para a esquerda ou para a direita.`,
    `Transição — a passagem suave de uma animação para outra no momento certo, sem travar nem piscar.`,
  ],
  treinamento: `## O que o professor precisa saber

Você vai usar três ferramentas do Construct 3: o objeto Sprite (o personagem), o comportamento Platform (já colocado nele) e o Event Sheet (a folha de eventos). O comportamento Platform oferece "expressões" e "condições" prontas que dizem se o personagem está andando ou no ar. As que mais importam hoje são as condições "Platform → Is moving", "Platform → Is on floor" e a expressão de velocidade horizontal. A ação central é "Sprite → Set animation", em que você digita o nome exato da animação entre aspas. Atenção: o nome precisa ser idêntico ao criado no editor de animações (maiúsculas e minúsculas contam).

## Passo a passo da aula (ritmo 10/15/25/10)

AQUECIMENTO (10 min): Peça que cada aluno abra o projeto e rode o jogo (botão Play, atalho F5). O personagem se move, mas a animação fica errada ou travada. Pergunte: "O que está faltando para ele parecer vivo?". Mostre no projetor o painel Animations do personagem e relembre os nomes Parado, Correr e Saltar.

CONTEÚDO NOVO GUIADO (15 min): No projetor, abra o Event Sheet (aba da folha de eventos). Clique em "Add event". Escolha o personagem, depois a condição "Platform → Is on floor". Adicione uma sub-condição com botão direito → "Add another condition" → "Platform → Is moving". Na ação, escolha "Sprite → Set animation", digite "Correr" e deixe "From beginning". Crie um segundo evento: "Is on floor" + inverter "Is moving" (botão direito na condição → "Invert") com a ação Set animation "Parado". Crie o terceiro: condição "Platform → Is on floor" invertida, ação Set animation "Saltar". Explique que o programa lê de cima para baixo a cada quadro.

MÃO NA MASSA (25 min): Cada aluno reproduz os três eventos no próprio projeto e testa com F5. Depois, faça o espelhamento: novo evento com condição "Platform → Vector X > 0" e ação "Sprite → Set Mirrored → Not mirrored"; outro com "Vector X < 0" e ação "Set Mirrored → Mirrored". Teste virando para os dois lados. Circule pela sala ajudando quem digitou o nome errado da animação.

DESAFIO E COMPARTILHAR (10 min): Desafie a deixar a transição mais bonita usando "Set animation" com a opção "Current frame" para o salto não reiniciar feio. Cada aluno mostra o personagem fluido para um colega ao lado.

## Como explicar de forma clara (linguagem para a idade)

Diga: "O jogo é muito rápido e olha para o seu personagem o tempo todo, como um vigia. A cada piscar de olhos ele pergunta: está no chão? está andando? está no ar? Cada resposta troca a roupa da animação certa. O 'Set animation' é o controle remoto que muda o canal do personagem." Para o espelhamento, use a imagem do espelho: "É o mesmo boneco, só que o espelho vira ele para o outro lado, então não precisamos desenhar duas vezes." Reforce que a ordem dos eventos importa, como uma fila.

## Erros comuns e como ajudar

O erro mais frequente é digitar o nome da animação diferente do criado (por exemplo "correr" com minúscula ou "Correndo"). Mostre que o Construct 3 não acusa erro, apenas não troca, então peça para comparar com o painel Animations. Outro erro é esquecer de inverter a condição "Is moving" no evento de parado, fazendo a animação ficar travada. Verifique também se o personagem realmente tem o comportamento Platform; sem ele as condições não aparecem. Por fim, muitos esquecem o "Is on floor" no salto e a pose de pulo nunca aparece; oriente a testar pulando e observando o ar.`,
  exercicios: [
    {
      titulo: `Correr e parar`,
      tipo: `prática na ferramenta`,
      tempo: `8 min`,
      guiaProfessor: `Acompanhe os dois primeiros eventos. Confira se os nomes das animações batem com o painel Animations e se a condição de parado está invertida.`,
      atividade: `Crie no Event Sheet os eventos que mostram a animação "Correr" quando o personagem está no chão e se movendo, e "Parado" quando está no chão sem se mover. Teste com F5.`,
      gabarito: `Evento 1: Platform Is on floor + Is moving → Set animation "Correr". Evento 2: Platform Is on floor + Is moving (invertida) → Set animation "Parado". Ao testar, o boneco corre ao andar e fica parado ao soltar a tecla.`,
    },
    {
      titulo: `A pose de salto`,
      tipo: `desafio`,
      tempo: `7 min`,
      guiaProfessor: `Lembre que a condição correta é "Is on floor" invertida, pois saltar significa estar no ar. Ajude quem deixou o personagem travado no salto.`,
      atividade: `Acrescente um evento que mostre a animação "Saltar" sempre que o personagem não estiver no chão. Pule e observe se a pose aparece no ar.`,
      gabarito: `Evento: Platform Is on floor (invertida) → Set animation "Saltar". Ao pular, o personagem exibe a pose de salto enquanto está no ar e volta para Correr ou Parado ao aterrissar.`,
    },
    {
      titulo: `Virando para o lado certo`,
      tipo: `em dupla`,
      tempo: `8 min`,
      guiaProfessor: `Cada dupla revisa o projeto do outro. Confira se usaram Vector X maior e menor que zero e a ação Set Mirrored correta para cada lado.`,
      atividade: `Em dupla, adicionem os eventos de espelhamento: ao se mover para a direita o personagem fica normal, ao se mover para a esquerda ele vira (mirrored). Testem juntos.`,
      gabarito: `Evento A: Platform Vector X > 0 → Set Mirrored "Not mirrored". Evento B: Platform Vector X < 0 → Set Mirrored "Mirrored". O personagem olha sempre para a direção em que anda.`,
    },
    {
      titulo: `Por que a ordem importa`,
      tipo: `roda de conversa`,
      tempo: `7 min`,
      guiaProfessor: `Conduza a conversa pedindo exemplos do que aconteceria se trocassem a ordem dos eventos. Aceite hipóteses e teste uma ao vivo no projetor.`,
      atividade: `Discutam: por que o jogo precisa verificar "está no chão?" antes de decidir entre correr e parar? O que mudaria se o evento de salto estivesse antes dos outros?`,
      gabarito: `O jogo lê os eventos a cada quadro, de cima para baixo. Verificar o chão primeiro separa o estado "no ar" dos estados "no chão". Se o salto viesse antes e fosse exclusivo, ele poderia sobrescrever as outras animações; a ordem garante que cada estado mostre a animação certa sem conflito.`,
    },
    {
      titulo: `Personagem fluido completo`,
      tipo: `projeto curto`,
      tempo: `10 min`,
      guiaProfessor: `Verifique as quatro transições (parado, correr, saltar, virar) funcionando juntas. Oriente o uso de "Current frame" no salto para suavizar e elogie cada entrega.`,
      atividade: `Junte tudo: parado, correr, saltar e espelhamento no mesmo projeto, com transições suaves. Use a opção que evita reiniciar o salto e mostre o resultado a um colega.`,
      gabarito: `O projeto final tem os eventos de Correr, Parado e Saltar (com Is on floor) mais o espelhamento por Vector X. As trocas acontecem sem travar; ao usar "Current frame" no Set animation do salto, a pose não pisca. O colega vê o personagem mudar de animação na hora certa e virar para o lado correto.`,
    },
  ],
};
