import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 1,
  titulo: "A Ideia que Vira Brinquedo",
  semana: "Semana 1",
  duracao: "1 hora",
  objetivo: `Apresentar a missão do mês e fazer cada criança escolher e desenhar no papel a ideia da própria peça que será impressa de verdade na Bambu Lab.`,
  descricao: `Nesta primeira aula do mês começa a aventura mais especial do Ano 3: cada criança vai criar uma peça que sairá da tela do computador e virará um objeto de verdade, que ela vai poder segurar na mão. É a magia da impressão 3D! A peça nasce como uma ideia, depois vira um desenho no papel, em seguida é modelada no Blender e, no final do mês, sai pronta na impressora Bambu Lab. Hoje plantamos a semente: a ideia.

Antes de qualquer clique no computador, é importante que a turma entenda que uma peça boa para imprimir não é só bonita, ela também precisa ser firme. A criança vai conhecer dois inimigos da impressão: as partes muito finas (que quebram fácil) e as partes muito penduradas no ar (que a impressora não consegue segurar). Por isso, a aula começa com algo concreto: exemplos já impressos que o professor mostra e deixa as crianças tocarem. Tocar, comparar e perceber o que é firme e o que é frágil ajuda muito mais do que só explicar com palavras.

A maior parte do tempo da aula é mão na massa, mas com lápis e papel, não com mouse. Cada aluno escolhe uma ideia simples (um bichinho, um chaveiro, uma plaquinha com o nome, um troféu pequeno) e desenha essa ideia em uma folha, vendo a peça de frente e de cima. Esse desenho é o mapa que vamos seguir nas próximas aulas. O Blender fica aberto na tela só para a turma ver o ambiente onde a mágica vai acontecer nas semanas seguintes, criando expectativa.

No fim, cada criança mostra seu desenho para a turma e conta por que escolheu aquela peça. O professor reforça: ideias simples e gordinhas são as melhores para imprimir. Não existe ideia errada, existe ideia que precisa de pequenos ajustes para ficar firme, e é justamente isso que vamos aprender a fazer ao longo do mês.`,
  materiais: [
    `Computadores com o Blender já aberto na cena inicial (um por aluno ou em dupla)`,
    `Projetor ou TV ligada ao computador do professor para mostrar exemplos`,
    `Exemplos de peças já impressas na Bambu Lab: umas firmes e umas frágeis de propósito (uma com parte fininha quebrada)`,
    `Folhas de papel sulfite (duas por criança) e prancheta ou apoio firme`,
    `Lápis, borracha e lápis de cor ou canetinhas`,
    `Uma régua pequena por mesa, para ajudar a desenhar de frente e de cima`,
    `Fita crepe e um cantinho da parede para expor os desenhos da turma`,
  ],
  conceitosChave: [
    `Impressão 3D — quando a impressora vai colocando camadas de plástico, uma em cima da outra, até a sua ideia virar um objeto de verdade.`,
    `Peça firme — peça que não quebra fácil porque não tem partes muito finas nem muito penduradas no ar.`,
    `Parte fininha — pedaço da peça muito magrinho, tipo um palitinho, que quebra com facilidade quando você segura.`,
    `Parte pendurada — pedaço que fica solto no ar sem nada embaixo segurando, e a impressora tem dificuldade de construir.`,
    `Esboço — o desenho rápido no papel que mostra a ideia da peça antes de fazer no computador; é o nosso mapa.`,
    `Vista de frente e de cima — desenhar a peça olhando ela por dois lados, como se você estivesse na frente dela e depois voando bem em cima dela.`,
    `Bambu Lab — a impressora 3D de verdade da escola que vai transformar o trabalho de vocês em um brinquedo para levar para casa.`,
  ],
  treinamento: `## O que o professor precisa saber

Esta aula é quase toda no papel, então você não precisa dominar o Blender hoje. O Blender entra só como cenário: ele fica aberto na tela para criar expectativa. Mesmo assim, vale você abrir o programa antes da aula e reconhecer três coisas na tela inicial: o cubo cinza no meio (a cena já vem com um cubo), a grade do chão (as linhas quadriculadas) e o cubo colorido no canto superior direito chamado gizmo de navegação, que serve para girar a câmera. Se você clicar com o botão do meio do mouse e arrastar, a câmera gira em volta do cubo. Treine isso uma vez para mostrar com confiança. O coração da aula, porém, é a conversa sobre o que faz uma peça ser firme e o esboço no papel. Prepare antes os exemplos impressos: leve pelo menos uma peça firme (bem gordinha) e uma peça com defeito de propósito (com um palitinho quebrado), porque comparar as duas na mão das crianças ensina mais que mil palavras.

## Passo a passo da aula (ritmo 10/15/25/10)

Aquecimento (10 min): Receba a turma e anuncie a missão do mês com empolgação: "Este mês a gente vai criar uma peça que sai da tela e vira de verdade!" Passe os exemplos impressos de mão em mão. Pergunte: "Qual é mais firme? Por quê?" Deixe as crianças apertarem com cuidado e perceberem o palitinho quebrado.

Conteúdo novo guiado (15 min): No projetor, mostre o Blender aberto. Aponte o cubo do meio, a grade do chão e gire a câmera segurando o botão do meio do mouse, só para encantar. Diga que nas próximas aulas eles vão construir a peça aqui. Depois feche o foco no papel e explique os dois inimigos da impressão: a parte fininha e a parte pendurada. Desenhe no quadro uma peça gordinha (boa) e uma peça com um braço fininho esticado (ruim) para comparar.

Mão na massa (25 min): Entregue duas folhas por criança. Cada aluno escolhe a ideia da sua peça (sugira opções: bichinho, chaveiro, plaquinha com o nome, troféu pequeno). Peça que desenhe a peça de frente em uma folha e de cima na outra. Circule pelas mesas perguntando: "Tem algum pedaço fininho aqui que pode quebrar? Dá pra deixar mais gordinho?" Incentive cores e nome do aluno na folha.

Desafio e compartilhar (10 min): Cada criança mostra o desenho e conta por que escolheu. Lance o desafio: "Aponte no seu desenho a parte mais gordinha e a parte mais fininha." Cole os desenhos no cantinho da parede.

## Como explicar para crianças

Use a analogia do boneco de massinha: uma perninha muito fina de massinha cai sozinha, mas uma bolinha gorda fica firme. Diga que a impressora trabalha como um confeiteiro fazendo um bolo de camadas, colocando uma camada em cima da outra de baixo para cima, então ela precisa de chão embaixo de cada parte. Por isso uma parte pendurada no ar é difícil: é como tentar colocar cobertura onde não tem bolo embaixo. Repita a frase de ouro: "Gordinho é firme, fininho quebra."

## Erros comuns e como ajudar

Muitas crianças desenham peças cheias de detalhes finos, como antenas, patinhas e fios. Não diga que está errado: peça para deixar esses pedaços mais gordinhos ou maiores. Outro erro é desenhar só de frente e esquecer a vista de cima; lembre que precisamos dos dois desenhos, e ajude mostrando um objeto da mesa visto de cima. Algumas crianças travam na escolha da ideia: ofereça duas ou três opções prontas para elas escolherem. E há quem queira mexer no Blender já hoje; combine com carinho que hoje é dia de papel e que o computador entra forte na próxima aula.`,
  exercicios: [
    {
      titulo: `Caça aos pedaços frágeis`,
      tipo: `Observação em grupo`,
      tempo: `8 minutos`,
      guiaProfessor: `Distribua os exemplos impressos pela turma. Conduza a comparação entre a peça firme e a peça com defeito. Deixe cada criança apontar com o dedo onde a peça parece que pode quebrar.`,
      atividade: `Segure as peças impressas, aperte com cuidado e diga qual delas é mais firme e qual tem um pedaço que pode quebrar. Mostre com o dedo onde está a parte mais fraca.`,
      gabarito: `A peça mais gordinha e cheia é a mais firme. A peça com o palitinho ou pedaço fininho é a frágil, e a parte fraca é justamente o pedaço magrinho, que quebra com facilidade.`,
    },
    {
      titulo: `Firme ou quebra?`,
      tipo: `Classificação oral`,
      tempo: `7 minutos`,
      guiaProfessor: `Mostre ou descreva quatro peças, uma de cada vez, e pergunte para a turma se cada uma é firme ou se pode quebrar. Aceite a resposta com a justificativa.`,
      atividade: `Para cada peça que o professor mostrar, responda: é firme ou pode quebrar? Diga o porquê usando as palavras gordinho ou fininho.`,
      gabarito: `Uma bolinha gorda é firme. Um palitinho fino pode quebrar. Um chaveiro grosso é firme. Uma antena bem fininha pode quebrar. O motivo certo é sempre se a parte é gordinha (firme) ou fininha (quebra).`,
    },
    {
      titulo: `A ideia da minha peça`,
      tipo: `Desenho individual`,
      tempo: `12 minutos`,
      guiaProfessor: `Ajude cada criança a escolher uma ideia simples. Ofereça opções para quem travar: bichinho, chaveiro, plaquinha com o nome, troféu pequeno. Peça o desenho de frente em uma folha.`,
      atividade: `Escolha a peça que você quer imprimir e desenhe ela de frente em uma folha. Capriche, use cores e escreva seu nome na folha.`,
      gabarito: `Não há resposta única. Um bom desenho mostra uma peça simples e gordinha, fácil de entender, com o nome da criança na folha. Qualquer ideia simples está correta.`,
    },
    {
      titulo: `Vendo de cima`,
      tipo: `Desenho com mudança de ângulo`,
      tempo: `8 minutos`,
      guiaProfessor: `Mostre um objeto da mesa visto de cima para a turma entender a vista superior. Peça que desenhem a mesma peça da atividade anterior, agora vista de cima, na segunda folha.`,
      atividade: `Pegue a sua peça e imagine que você está voando bem em cima dela. Desenhe como ela fica vista de cima na segunda folha.`,
      gabarito: `A vista de cima mostra o contorno da peça olhando do alto. Por exemplo, um troféu redondo vira um círculo visto de cima; uma plaquinha vira um retângulo. O importante é mostrar o formato visto do alto.`,
    },
    {
      titulo: `Deixando a peça mais firme`,
      tipo: `Desafio de ajuste`,
      tempo: `10 minutos`,
      guiaProfessor: `Peça que cada criança encontre no próprio desenho a parte mais fininha e redesenhe esse pedaço mais gordinho. Circule ajudando a identificar antenas, patinhas e fios.`,
      atividade: `Olhe o seu desenho e ache a parte mais fininha. Desenhe ela de novo, mais gordinha, para ela não quebrar na impressão. Mostre para um colega a mudança que você fez.`,
      gabarito: `A criança deve apontar a parte mais magrinha (como uma antena, perninha ou fio) e redesenhá-la mais grossa. Exemplo: uma patinha fina vira uma patinha gordinha. Se o desenho já era todo gordinho, basta explicar que ele já está firme.`,
    },
  ],
};
