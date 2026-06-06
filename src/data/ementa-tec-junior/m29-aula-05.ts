import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 5,
  titulo: "Tamanho Certo de Cada Parte",
  semana: "Semana 3",
  duracao: "1 hora",
  objetivo: `Aprender o que é proporção comparando objetos grandes e pequenos e ajustar o tamanho de cada parte do nosso asset 3D no Blender para que tudo fique equilibrado e na medida certa.`,
  descricao: `Nesta aula as crianças descobrem uma palavra mágica do mundo 3D: proporção. Proporção é só uma forma chique de dizer "o tamanho de uma coisa comparado com o tamanho de outra coisa". Quando olhamos para um boneco, sabemos na hora se a cabeça está grande demais ou se um braço ficou pequenininho. Nosso olho percebe isso sem nem pensar! Nesta aula vamos treinar esse olhar e usar o Blender para deixar cada parte do nosso asset com o tamanho que faz sentido.

Nas aulas anteriores as crianças planejaram o objeto, montaram as partes juntando vários blocos no Blender, pintaram com cores e escolheram materiais brilhantes e foscos. Agora o modelo já existe, mas talvez algumas partes estejam desproporcionais: uma chaminé gigante numa casinha pequena, uma roda enorme num carrinho pequeno, uma antena minúscula num robô grandão. Hoje é o dia de olhar com carinho e arrumar esses tamanhos.

A ferramenta principal é a escala (em inglês aparece como "Scale" no Blender). Escalar significa esticar ou encolher um objeto sem precisar apagar e fazer de novo. A criança seleciona uma parte, aperta a tecla S e mexe o mouse: a parte cresce ou diminui na hora, como mágica. Também vamos comparar partes lado a lado e usar o chão da cena como referência de "no tamanho real".

O segredo pedagógico é simples: proporção se aprende comparando e olhando, não decorando números. Por isso a aula é bem visual e mão na massa. O professor mostra exemplos exagerados (de propósito errados) no projetor, as crianças riem, apontam o que está estranho e depois corrigem o próprio asset. No final, cada um terá um modelo mais equilibrado e bonito, pronto para receber o acabamento final na próxima aula.`,
  materiais: [
    `Computadores com o Blender já aberto e o arquivo do asset de cada criança salvo da aula anterior`,
    `Projetor ou TV conectado ao computador do professor para demonstrar passo a passo`,
    `Dois exemplos prontos do mesmo modelo: um com partes desproporcionais (errado de propósito) e outro equilibrado (certo)`,
    `Objetos físicos para comparar tamanho: uma bolinha pequena e uma bola grande, ou um lápis e uma régua`,
    `Folha impressa simples com desenhos de bonecos certos e errados para o aquecimento`,
    `Mouse com rodinha para cada criança (facilita dar zoom e escalar com precisão)`,
  ],
  conceitosChave: [
    `Proporção — é o tamanho de uma parte comparado com o tamanho das outras partes; quando tudo combina, o modelo parece certo.`,
    `Escala (Scale) — é esticar ou encolher um objeto sem fazer de novo; no Blender usamos a tecla S.`,
    `Equilíbrio — quando nenhuma parte está exagerada nem sumindo, e o modelo parece harmonioso.`,
    `Referência — algo conhecido que serve para comparar, tipo "a cabeça tem o tamanho de duas mãos".`,
    `Desproporcional — quando uma parte está grande ou pequena demais e fica estranho aos nossos olhos.`,
    `Selecionar — clicar numa parte para escolher só ela antes de mudar o tamanho dela.`,
    `Confirmar — apertar o botão esquerdo do mouse ou Enter para travar o tamanho novo no lugar.`,
  ],
  treinamento: `## O que o professor precisa saber

Proporção é a relação de tamanho entre as partes de um modelo. Você não precisa saber matemática para ensinar isso: o olho humano já sabe. A ferramenta central da aula é a escala. No Blender, com uma parte selecionada, a criança aperta a tecla S (de "Scale"), move o mouse para crescer ou encolher e clica com o botão esquerdo para confirmar. Se ela errar, é só apertar Ctrl + Z para desfazer. Antes de começar, abra o arquivo de uma criança e teste você mesmo: clique numa parte (ela fica com contorno laranja), aperte S, mova o mouse e confirme. Faça isso umas três vezes para ganhar confiança. Lembre que selecionar é o passo mais importante: se nada estiver selecionado, o S não funciona.

## Passo a passo da aula

Aquecimento (10 min): mostre no projetor os dois exemplos prontos, o errado e o certo. Pergunte: "Qual parece estranho? Por quê?" Deixe as crianças apontarem. Pegue a bolinha e a bola grande e fale: "Imagina uma cabeça desse tamanho num corpo pequenininho!" Distribua a folha com bonecos certos e errados e peça que circulem os errados. Isso ativa o olhar para proporção.

Conteúdo novo guiado (15 min): no seu Blender, no projetor, clique com o botão esquerdo numa parte do modelo de exemplo até ela ficar laranja. Diga em voz alta: "Selecionei só a chaminé." Aperte a tecla S, mova o mouse devagar e mostre a parte crescendo e encolhendo. Clique para confirmar. Repita com encolher. Mostre o Ctrl + Z para desfazer. Apresente também o painel da direita: aperte N para abrir a barra lateral e mostre os números de "Dimensions" (Dimensões) mudando quando você escala. Não foque nos números, só mostre que eles existem.

Mão na massa (25 min): cada criança abre o próprio asset. Peça que olhem com atenção e escolham UMA parte que parece grande ou pequena demais. Selecionam (clique até ficar laranja), apertam S, ajustam e confirmam. Circule pela sala. Incentive a comparar: "Coloca essa parte do lado da outra, ficou melhor?" Deixe corrigirem duas ou três partes. Salve com Ctrl + S no final.

Desafio e compartilhar (10 min): proponha o desafio "Cabeça gigante": a criança escala uma parte para ficar bem exagerada de propósito, todos riem, e depois desfazem com Ctrl + Z. Isso fixa a tecla S brincando. Para encerrar, cada um gira a cena (segurando o botão do meio do mouse) e mostra ao colega do lado o modelo mais equilibrado.

## Como explicar para crianças

Use a palavra "combinar": "As partes precisam combinar de tamanho." Use comparações do dia a dia: "A cabeça do seu boneco tá do tamanho do corpo inteiro? Então tá grande demais!" Chame a tecla S de "tecla do crescer e encolher". Diga que escalar é como soprar um balão (cresce) ou apertar um balão (encolhe). Reforce sempre: "Primeiro clico na parte até ficar laranja, depois aperto S." Elogie quando perceberem sozinhos que algo está estranho, porque é exatamente esse olhar que queremos treinar.

## Erros comuns e como ajudar

O erro mais comum é apertar S sem ter selecionado nada: nada acontece. Mostre que a parte precisa estar laranja antes. Outro erro é mover o mouse longe demais e a parte virar gigante ou sumir: ensine a confirmar logo com calma e a usar Ctrl + Z. Algumas crianças clicam errado e selecionam a parte vizinha: peça que olhem o contorno laranja antes de escalar. Tem quem escale o modelo inteiro sem querer: lembre de selecionar só uma parte por vez. Por fim, há quem esqueça de confirmar e fique mexendo o mouse perdido: oriente a clicar com o botão esquerdo para travar o tamanho.`,
  exercicios: [
    {
      titulo: `Caça ao Tamanho Errado`,
      tipo: `Observação em grupo`,
      tempo: `7 minutos`,
      guiaProfessor: `Mostre no projetor o exemplo desproporcional e o equilibrado lado a lado. Conduza a conversa deixando cada criança apontar uma parte estranha. Não corrija no computador ainda, só treine o olhar.`,
      atividade: `Olhe os dois modelos na tela e diga em voz alta quais partes parecem grandes demais ou pequenas demais no modelo errado.`,
      gabarito: `As crianças devem identificar pelo menos uma parte desproporcional, por exemplo "a chaminé está enorme" ou "a roda está pequenininha". Qualquer parte que destoe das outras é uma resposta correta, pois o objetivo é perceber a falta de equilíbrio.`,
    },
    {
      titulo: `Aperta o S e Sente a Mágica`,
      tipo: `Prática guiada no Blender`,
      tempo: `8 minutos`,
      guiaProfessor: `Faça junto, passo a passo, todos ao mesmo tempo. Conte em voz alta: "Clica até ficar laranja... aperta S... mexe o mouse... clica pra confirmar." Verifique cada tela antes de seguir.`,
      atividade: `No seu asset, selecione uma parte qualquer (deixe laranja), aperte a tecla S, faça a parte crescer e depois encolher, e confirme com o botão esquerdo do mouse.`,
      gabarito: `A criança consegue selecionar uma parte, vê o contorno laranja, usa o S para mudar o tamanho e confirma o novo tamanho. Se errar, usa Ctrl + Z para voltar. Sucesso é dominar a sequência selecionar, escalar e confirmar.`,
    },
    {
      titulo: `Conserta a Parte Estranha`,
      tipo: `Mão na massa individual`,
      tempo: `10 minutos`,
      guiaProfessor: `Peça que cada um escolha UMA parte do próprio modelo que está fora de proporção e ajuste. Circule e incentive a comparar a parte ajustada com as vizinhas. Lembre de salvar com Ctrl + S.`,
      atividade: `Olhe o seu asset, escolha a parte que parece mais errada de tamanho, selecione, aperte S e ajuste até combinar com o resto. Salve no final.`,
      gabarito: `A parte escolhida fica mais equilibrada em relação às outras: nem exagerada nem sumindo. Não existe número exato; o gabarito é o modelo parecer mais harmonioso aos olhos do que estava antes do ajuste.`,
    },
    {
      titulo: `Use uma Referência`,
      tipo: `Comparação aplicada`,
      tempo: `8 minutos`,
      guiaProfessor: `Ensine a comparar duas partes diretamente: "A cabeça deve ter mais ou menos o tamanho de duas mãos." Ajude a criança a escolher uma referência simples e ajustar a parte com base nela usando o S.`,
      atividade: `Escolha duas partes do seu modelo e decida uma regra de tamanho entre elas (por exemplo: a roda deve ser metade da altura do carrinho). Ajuste com a tecla S até a regra ficar verdadeira.`,
      gabarito: `A criança define uma referência clara (uma parte comparada a outra) e ajusta a escala até que a relação combine, por exemplo a roda visivelmente menor que o corpo do carrinho. Acertar é conseguir explicar a comparação que usou.`,
    },
    {
      titulo: `Modelo Equilibrado Completo`,
      tipo: `Desafio final e compartilhamento`,
      tempo: `12 minutos`,
      guiaProfessor: `Peça uma revisão geral: cada criança confere todas as partes e ajusta o que ainda estiver estranho. Depois, todos giram a cena com o botão do meio do mouse e mostram ao colega. Verifique se salvaram.`,
      atividade: `Reveja o modelo inteiro, ajuste com o S qualquer parte que ainda esteja desproporcional, gire a cena para ver de todos os lados e mostre o resultado equilibrado para um colega.`,
      gabarito: `O asset final tem todas as partes combinando de tamanho, sem nenhuma exagerada ou minúscula, e a criança consegue apresentar girando a cena. O sucesso é um modelo visivelmente mais equilibrado que o do início da aula, salvo com Ctrl + S.`,
    },
  ],
};
