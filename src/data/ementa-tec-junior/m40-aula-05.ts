import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 5,
  titulo: "As Regras da Loja",
  semana: "Semana 3",
  duracao: "1 hora",
  objetivo: `Mostrar para a criança o padrão que a loja do Roblox pede — tamanho certo, modelo limpo e sem partes soltas — e ajudá-la a revisar o próprio item, marcando o que ainda precisa arrumar.`,
  descricao: `Até aqui cada criança modelou um item no Blender, deu cor e capricho no acabamento. Agora chega o momento de descobrir que a loja do Roblox não aceita qualquer modelo: ela tem regras, como uma vitrine de loja de verdade que só aceita produtos bem feitos. Esta aula não é de criar coisas novas — é de revisar com olho de inspetor o que já existe. A criança vira um "fiscal de qualidade" do próprio item.

As três regras de ouro desta aula são simples de explicar: o item precisa ter o tamanho certo (nem gigante, nem minúsculo demais), o modelo precisa estar limpo (uma peça só, sem partes flutuando soltas no ar) e a malha precisa estar fechada (sem buracos por onde "veríamos por dentro"). Essas regras existem porque, quando o item entra no jogo, ele precisa funcionar bem no corpo de um avatar e não pesar demais no computador de quem joga.

O coração da aula é uma "lista de inspeção" — uma folhinha com itens para checar, um por um. A criança gira o próprio modelo no Blender, olha de todos os lados e marca com um "joinha" o que já está certo e com uma "carinha pensativa" o que ainda precisa arrumar. Nada precisa ser consertado hoje: o objetivo é só enxergar os problemas. Consertar de verdade vem nas próximas aulas (tamanho na Aula 6, exportação na Aula 7).

Ao final, cada criança terá a própria lista de inspeção preenchida, sabendo exatamente o que está bom e o que falta no seu item. É como o checklist de um piloto antes de decolar: a gente não conserta o avião na hora, a gente descobre o que precisa de atenção. Sair da aula com clareza do que arrumar já é a grande vitória.`,
  materiais: [
    `Computadores com o Blender aberto e o arquivo do item de cada criança já carregado`,
    `Projetor ou TV grande para o professor mostrar a inspeção no próprio modelo, passo a passo`,
    `Lista de inspeção impressa para cada criança (tamanho certo / uma peça só / sem buracos / sem partes soltas)`,
    `Exemplo pronto de item APROVADO (limpo, uma peça, tamanho de avatar) aberto num arquivo modelo`,
    `Exemplo pronto de item REPROVADO (com um cubo solto flutuando e uma parte gigante) para comparar`,
    `Adesivos de "joinha" e carimbo de "Inspetor de Qualidade" para premiar quem revisou tudo`,
    `Um avatar de referência do Roblox no projetor para a turma ver o tamanho de um item de verdade`,
  ],
  conceitosChave: [
    `Regras da loja — combinados que a vitrine do Roblox pede para aceitar um item, como uma loja que só vende coisa bem feita.`,
    `Tamanho certo — o item não pode ser gigante nem minúsculo; precisa caber no avatar como uma roupa do tamanho certo.`,
    `Modelo limpo — quando o item é uma peça só, sem pedacinhos perdidos boiando no ar em volta dele.`,
    `Parte solta — um cubinho ou pedaço que ficou separado do item, flutuando sozinho, sem grudar no resto.`,
    `Malha fechada — a "casca" do modelo sem buracos; se tiver furo, dá para ver por dentro, e isso a loja não gosta.`,
    `Inspeção — olhar o item de todos os lados, com calma, para descobrir o que está bom e o que precisa arrumar.`,
    `Aprovado e reprovado — o carimbo de "passou" ou "ainda não passou" nas regras da loja.`,
  ],
  treinamento: `## O que o professor precisa saber

Você não precisa dominar o Blender para dar esta aula — o foco é revisar, não modelar. Mas precisa saber girar a câmera e enxergar três coisas no modelo da criança. Deixe todos os arquivos abertos antes da aula.

Para girar a câmera em volta do item: segure o botão do meio do mouse (a rodinha apertada) e mexa o mouse. O modelo gira na tela. Se o computador não tiver rodinha, use os números do "gizmo" de eixos no canto superior direito da tela 3D, ou aperte as teclas do teclado numérico (1 = frente, 3 = lado, 7 = cima). Para dar zoom, role a rodinha.

Para descobrir partes soltas: clique no item e aperte a tecla "L" com o mouse em cima de uma parte (isso seleciona só o pedaço grudado). Se sobrar algum cubinho sem ficar laranja, ele está solto. Outro jeito visual: no painel "Outliner" (a lista no canto superior direito), conte quantos objetos aparecem com o ícone de triângulo (malha). Se for mais de um, pode haver parte separada.

Para ver buracos: gire o modelo e procure lugares onde dá para "ver por dentro" — o avesso da malha costuma aparecer mais escuro. Não precisa consertar hoje; só anotar.

## Passo a passo da aula (ritmo 10/15/25/10)

Aquecimento (10 min): Sente a turma de frente para o projetor. Mostre o exemplo APROVADO e o REPROVADO lado a lado. Pergunte: "Qual dessas duas a loja aceitaria? Por quê?" Deixe as crianças apontarem o cubo solto flutuando e a parte gigante. Escreva no quadro as três regras de ouro: tamanho certo, uma peça só, sem buracos.

Conteúdo novo guiado (15 min): No seu computador no projetor, inspecione o exemplo REPROVADO devagar. Gire com o botão do meio do mouse mostrando o cubo solto. Clique nele, aperte "L" e mostre que ele não gruda no resto. Abra o "Outliner" e conte os objetos junto com a turma. Gire e ache o buraco. A cada problema, marque na lista de inspeção no projetor uma "carinha pensativa". Mostre depois o item APROVADO ganhando só "joinhas".

Mão na massa (25 min): Cada criança abre o próprio item e vira "Inspetor de Qualidade". Com a lista na mão, ela gira o modelo (botão do meio do mouse), olha de frente, de lado e de cima, e marca cada regra: joinha para o que está certo, carinha pensativa para o que falta. Passe de mesa em mesa ajudando a girar a câmera e a usar a tecla "L" para caçar partes soltas. Reforce: hoje só marcamos, não consertamos.

Desafio e compartilhar (10 min): Cada criança mostra a própria lista para um colega e conta UM problema que encontrou e UMA coisa que já está ótima. Quem inspecionou as três regras ganha o carimbo de "Inspetor de Qualidade". Encerre dizendo que na próxima aula vamos arrumar o tamanho.

## Como explicar para crianças

Use a analogia da loja de verdade: "Imaginem uma loja de brinquedos que só coloca na vitrine os brinquedos perfeitos, sem peça faltando. O Roblox é assim." Chame as partes soltas de "cubinhos fujões" que escaparam do modelo. O buraco é uma "janelinha que não devia existir". O tamanho certo é "uma roupa do tamanho do bonequinho — nem de gigante, nem de formiga". Lembre que ser inspetor é divertido: a gente caça os errinhos como um detetive com lupa.

## Erros comuns e como ajudar

A criança não consegue girar a câmera: mostre o botão do meio do mouse (a rodinha apertada) e segure a mão dela na primeira vez; se não tiver rodinha, use as teclas 1, 3 e 7. A criança acha que precisa consertar agora e fica nervosa: combine de novo que hoje só marcamos a lista, consertar é depois. A criança não enxerga a parte solta: peça para apertar "L" sobre o corpo do item — o que NÃO ficar laranja está solto. A criança dá zoom até sumir o modelo: aperte a tecla "Home" para o item voltar centralizado na tela. A criança marca tudo "joinha" sem olhar direito: peça para ela girar e contar em voz alta quantos lados já checou (frente, lado, cima).`,
  exercicios: [
    {
      titulo: `Aprovado ou reprovado?`,
      tipo: `Observação em turma`,
      tempo: `5 minutos`,
      guiaProfessor: `Mostre no projetor o exemplo APROVADO e o REPROVADO lado a lado. Peça para a turma apontar o que está errado no reprovado. Conduza até saírem as três regras: tamanho, uma peça só, sem buracos.`,
      atividade: `Olhe os dois itens na tela. Aponte qual a loja aceitaria e diga pelo menos um motivo pelo qual o outro foi reprovado.`,
      gabarito: `A criança escolhe o item APROVADO e cita um problema do reprovado. Exemplo de resposta certa: "O outro tem um cubinho solto flutuando" ou "Uma parte dele está gigante". Acerto = ligar o defeito a uma das três regras de ouro.`,
    },
    {
      titulo: `Girando o item como inspetor`,
      tipo: `Prática no Blender`,
      tempo: `5 minutos`,
      guiaProfessor: `Ensine a girar a câmera com o botão do meio do mouse (rodinha apertada). Quem não tiver rodinha usa as teclas 1 (frente), 3 (lado) e 7 (cima). Se sumir o modelo, aperte "Home" para centralizar.`,
      atividade: `Abra o seu item e gire ele para ver de frente, de lado e de cima. Conte em voz alta os três lados que você olhou.`,
      gabarito: `A criança gira o modelo e observa pelo menos três ângulos. Acerto = conseguir mover a câmera com o botão do meio do mouse (ou as teclas 1, 3, 7) e dizer "frente, lado e cima". Erro comum: dar zoom até o modelo sumir — resolve com a tecla "Home".`,
    },
    {
      titulo: `Caçando o tamanho certo`,
      tipo: `Comparação visual`,
      tempo: `5 minutos`,
      guiaProfessor: `Mostre no projetor o avatar de referência do Roblox ao lado de um item do tamanho correto. Peça para cada criança comparar mentalmente o próprio item com o avatar: ele cabe no bonequinho? Está de gigante ou de formiga? Só marcar, não consertar.`,
      atividade: `Compare o seu item com o avatar na tela. Na sua lista de inspeção, marque "joinha" se o tamanho parece certo ou "carinha pensativa" se está grande ou pequeno demais.`,
      gabarito: `A criança marca a regra do tamanho na lista. Acerto = comparar com o avatar e decidir com um motivo. Exemplo: "Joinha, meu chapéu cabe na cabeça do bonequinho" ou "Carinha pensativa, minha espada está maior que o avatar inteiro".`,
    },
    {
      titulo: `O detetive de partes soltas`,
      tipo: `Investigação no Blender`,
      tempo: `8 minutos`,
      guiaProfessor: `Ensine a clicar no item e apertar a tecla "L" com o mouse sobre o corpo dele — isso seleciona só o pedaço grudado. O que NÃO ficar laranja está solto. Mostre também o "Outliner" no canto e conte os objetos com ícone de malha. Ajude de mesa em mesa.`,
      atividade: `Clique no seu item e aperte a tecla "L" em cima dele. Olhe se sobrou algum cubinho sem ficar laranja. Marque na lista se o seu modelo é uma peça só ou se tem "cubinhos fujões".`,
      gabarito: `A criança identifica se há partes soltas. Acerto = usar o "L" e perceber pedaços não selecionados, ou confirmar que tudo grudou. Exemplo: "Tudo ficou laranja, é uma peça só, joinha!" ou "Tem um cubinho fujão atrás, carinha pensativa".`,
    },
    {
      titulo: `Lista de inspeção completa`,
      tipo: `Revisão final e desafio`,
      tempo: `7 minutos`,
      guiaProfessor: `Cada criança termina de preencher a lista com as três regras (tamanho, uma peça só, sem buracos) e mostra para um colega, contando um problema encontrado e uma coisa boa. Quem revisou as três regras ganha o carimbo de "Inspetor de Qualidade". Reforce que consertar é nas próximas aulas.`,
      atividade: `Termine de preencher a sua lista de inspeção marcando as três regras. Depois mostre para um amigo: diga uma coisa que já está ótima no seu item e uma coisa que ainda precisa arrumar.`,
      gabarito: `A lista preenchida nas três regras, mais uma fala com um ponto positivo e um a melhorar. Exemplo: "Já está ótimo que é uma peça só; preciso arrumar o tamanho porque está grande demais." Acerto = revisar as três regras e saber o que falta, sem precisar consertar hoje.`,
    },
  ],
};
