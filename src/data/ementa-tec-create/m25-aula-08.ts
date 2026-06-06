import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 8,
  titulo: "Meus Primeiros Assets 3D",
  semana: "Semana 4",
  duracao: "1 hora",
  objetivo: `Consolidar o entregável do mês: cada aluno revisa, exporta e apresenta seus primeiros assets 3D (personagem e itens) modelados no Maya, fechando a Etapa 1 de 5 do projeto do jogo.`,
  descricao: `Esta é a aula de fechamento do primeiro mês de Maya. Durante as sete aulas anteriores, cada aluno reencontrou o programa, dominou o espaço 3D, construiu a base de um personagem, modelou itens do jogo, refinou detalhes, cuidou de proporção e equilíbrio e, na Aula 7, preparou os assets para a exportação. Hoje tudo isso se junta: o aluno faz uma revisão final, exporta os arquivos no formato correto e apresenta o resultado para a turma. É o dia de colocar a primeira pedra do jogo no lugar.

Exportar é o ato de salvar o modelo 3D em um arquivo que outros programas conseguem abrir. No nosso caso, o destino é o Roblox Studio, que vai receber esses assets nos próximos meses, e a impressora 3D (Bambu Studio), que vai imprimir os personagens. Por isso, hoje não basta o modelo estar bonito na tela do Maya: ele precisa estar limpo, com nome claro, na origem da cena e exportado em um formato universal, o FBX para o jogo e o OBJ como formato de troca. O aluno aprende que um asset entregue é diferente de um asset só modelado.

Esta aula também é uma aula de apresentação. Falar sobre o próprio trabalho é uma habilidade tão importante quanto modelar. Cada aluno vai mostrar o personagem e pelo menos um item, explicar uma decisão de design (por que escolheu aquela forma, aquela proporção) e ouvir os colegas. O professor conduz uma roda curta e acolhedora, valorizando o esforço e registrando o que cada um entregou. É a "fechadura" da Etapa 1 do projeto do jogo.

O foco do mês é modelar os assets do jogo, e o entregável são os primeiros assets 3D. No fim da aula, cada aluno deve sair com uma pasta organizada contendo o arquivo do Maya salvo, os arquivos exportados (FBX e OBJ) e um print da cena. O professor encerra apontando para frente: estes assets voltarão à mesa quando, mais adiante, o jogo for montado no Roblox e os personagens forem impressos em 3D.`,
  materiais: [
    `Computadores com o Autodesk Maya instalado e funcionando (um por aluno)`,
    `Projetor ou TV para o professor demonstrar a exportação e para os alunos apresentarem em tela grande`,
    `Arquivo de exemplo .mb ou .ma com um personagem simples e dois itens já modelados (modelo de referência do professor)`,
    `Pasta padrão criada em cada computador, por exemplo "Assets_Mes1_Nome", para organizar os arquivos exportados`,
    `Checklist de exportação impresso ou em slide (nome, escala, origem, faces fechadas, formato)`,
    `Pen drive ou pasta na nuvem para o aluno levar uma cópia dos assets entregues`,
    `Cronômetro ou timer na tela para controlar o tempo das apresentações`,
  ],
  conceitosChave: [
    `Asset — qualquer peça pronta do jogo (personagem, item, objeto) que pode ser usada em outro programa, como o Roblox Studio.`,
    `Exportar — salvar o modelo em um arquivo que outros programas conseguem abrir, diferente de só salvar a cena do Maya.`,
    `FBX — formato de arquivo 3D muito usado em jogos; guarda a forma e outras informações do modelo.`,
    `OBJ — formato 3D simples e universal, ótimo para trocar modelos entre programas diferentes.`,
    `Origem da cena — o ponto central (0, 0, 0) onde o modelo deve estar posicionado antes de exportar, para não nascer "perdido" no outro programa.`,
    `Entregável — o resultado final combinado do mês; aqui, os primeiros assets 3D revisados e exportados.`,
    `Etapa 1 de 5 — a primeira das cinco grandes etapas do projeto do jogo, que se fecha nesta aula.`,
  ],
  treinamento: `## O que o professor precisa saber

Você não precisa ser especialista em Maya para conduzir esta aula. Ela é, acima de tudo, uma aula de organização, exportação e apresentação. Três ideias bastam. Primeira: salvar a cena do Maya não é a mesma coisa que exportar. Salvar guarda o seu trabalho; exportar cria um arquivo que outro programa, como o Roblox, consegue abrir. Segunda: antes de exportar, o modelo precisa estar limpo, com nome claro, na origem da cena (ponto 0, 0, 0) e em escala razoável. Terceira: o caminho da exportação é simples, decore-o. Com o objeto selecionado, vá no menu superior "File", depois "Export Selection", escolha o tipo de arquivo (FBX ou OBJ), dê um nome e clique em "Export Selection". Faça esse caminho uma vez antes da aula para ganhar confiança.

## Passo a passo da aula (ritmo 10/15/25/10)

10 min, aquecimento e revisão. Abra na tela grande o modelo de referência. Pergunte: "O que fizemos nas últimas semanas?" Conduza a turma a listar: base do personagem, itens, detalhes, proporção, preparação. Diga que hoje vamos transformar isso em arquivos de verdade. Mostre o checklist na tela.

15 min, conteúdo novo guiado. Demonstre a exportação no modelo de referência. Primeiro, selecione o personagem. Confira o checklist em voz alta: tem nome claro? Está na origem? Para centralizar, use o menu "Modify" e depois "Center Pivot", e zere a posição no Channel Box digitando 0 em Translate X, Y e Z. Em seguida, vá em "File", "Export Selection". Na janela, em "Files of type", escolha "FBX export". Digite o nome, por exemplo "personagem_nome", e clique em "Export Selection". Repita escolhendo "OBJexport" para gerar o OBJ. Mostre a pasta no computador com os dois arquivos criados.

25 min, mão na massa. Cada aluno revisa seus assets com o checklist, corrige o que faltar e exporta o personagem e pelo menos um item, em FBX e OBJ, para a pasta padrão. Em seguida tira um print da cena (tecla Print Screen ou o menu de captura) e salva na mesma pasta. Circule pela sala conferindo nomes e a pasta de cada um. Quem terminar antes exporta também o segundo item.

10 min, desafio e compartilhar. Roda de apresentação. Cada aluno mostra na tela grande o personagem e um item, diz o nome dos arquivos e explica uma decisão de design em uma frase. A turma dá um retorno positivo. Encerre dizendo que a Etapa 1 de 5 do jogo está fechada e que estes assets voltarão no Roblox e na impressão 3D.

## Como explicar de forma clara (linguagem para a idade)

Use comparações do dia a dia. Diga: "Salvar é como guardar o seu desenho na gaveta. Exportar é tirar uma foto desse desenho para mandar para um amigo em outro programa." Para a origem da cena: "É como colocar o boneco no centro do palco antes de bater a foto; se ele estiver no canto, vai nascer torto no Roblox." Para o FBX e o OBJ: "São dois tipos de embalagem; o FBX é a embalagem que o jogo gosta, o OBJ é a embalagem que quase todo programa entende." Sempre conecte com o futuro: "Esse arquivo é a primeira peça do seu jogo de verdade."

## Erros comuns e como ajudar

O erro mais comum é o aluno só salvar a cena e achar que exportou. Mostre a diferença abrindo a pasta e procurando o arquivo FBX. Outro erro frequente é exportar sem selecionar o objeto, gerando um arquivo vazio; ensine a sempre clicar no modelo primeiro e conferir se ficou destacado. Há quem exporte o personagem longe da origem, e ele "some" no outro programa; use "Center Pivot" e zere o Translate. Nomes confusos como "teste1" atrapalham; combine um padrão como "personagem_nome" e "item_nome". Por fim, se a janela de exportação não mostrar FBX em "Files of type", o plugin pode estar desligado; oriente a salvar em OBJ, que sempre funciona, e siga em frente sem travar a aula.`,
  exercicios: [
    {
      titulo: `Checklist do asset pronto`,
      tipo: `verificação guiada`,
      tempo: `8 minutos`,
      guiaProfessor: `Distribua o checklist e leia item por item em voz alta. Peça que cada aluno confira o próprio personagem e marque o que já está certo e o que falta corrigir.`,
      atividade: `Abra o seu personagem no Maya e confira o checklist: tem nome claro? Está na origem (Translate 0, 0, 0)? As faces estão fechadas? A escala parece razoável? Marque o que está certo e anote o que precisa corrigir.`,
      gabarito: `O aluno deve identificar corretamente o estado do modelo. Um asset pronto tem nome claro (por exemplo "personagem_nome"), está na origem com Translate X, Y e Z iguais a 0, não tem buracos visíveis nas faces e está em escala parecida com a do modelo de referência. Itens marcados como "falta corrigir" devem ser ajustados antes de exportar. Se algo estiver fora da origem, usar "Modify", "Center Pivot" e zerar o Translate no Channel Box.`,
    },
    {
      titulo: `Salvar não é exportar`,
      tipo: `prática na ferramenta`,
      tempo: `9 minutos`,
      guiaProfessor: `Reforce a diferença entre salvar a cena e exportar um arquivo. Acompanhe o caminho do menu File na tela grande enquanto os alunos repetem.`,
      atividade: `Selecione o seu personagem. Vá em "File" e depois "Export Selection". Em "Files of type" escolha "FBX export", dê o nome "personagem_nome" e clique em "Export Selection". Depois abra a pasta no computador e confirme que o arquivo FBX apareceu.`,
      gabarito: `Deve existir um arquivo chamado "personagem_nome.fbx" dentro da pasta padrão do aluno. Caminho correto: selecionar o objeto, "File", "Export Selection", escolher "FBX export" em "Files of type", nomear e clicar em "Export Selection". Se nenhum arquivo aparecer, provavelmente o aluno apenas salvou a cena (.mb/.ma) ou exportou sem selecionar o objeto. A solução é selecionar o modelo primeiro e refazer a exportação.`,
    },
    {
      titulo: `Dois formatos para o mesmo asset`,
      tipo: `desafio`,
      tempo: `11 minutos`,
      guiaProfessor: `Explique por que geramos dois formatos: FBX para o jogo e OBJ como troca universal. Confira nome e pasta de cada aluno enquanto exportam.`,
      atividade: `Pegue um item do seu jogo. Exporte ele duas vezes para a pasta padrão: uma vez como FBX ("item_nome") e outra como OBJ ("item_nome"). Confira na pasta que existem os dois arquivos, um terminando em .fbx e outro em .obj.`,
      gabarito: `A pasta deve conter "item_nome.fbx" e "item_nome.obj". Para o OBJ, em "Files of type" escolher "OBJexport"; para o FBX, escolher "FBX export". O FBX é o formato preferido do jogo (Roblox) e o OBJ é universal, bom para trocar entre programas. Se o OBJ não exportar, conferir se o item estava selecionado e se o nome foi digitado. Ter os dois formatos garante que o asset possa ser aberto em diferentes ferramentas mais à frente.`,
    },
    {
      titulo: `Pasta de entrega organizada`,
      tipo: `projeto curto`,
      tempo: `12 minutos`,
      guiaProfessor: `Verifique a pasta de cada aluno. O objetivo é uma entrega limpa: arquivo do Maya, exportados e um print. Ajude quem ainda não tirou o print da cena.`,
      atividade: `Monte a sua pasta de entrega "Assets_Mes1_Nome" com: o arquivo do Maya salvo (.mb ou .ma), o personagem em FBX e OBJ, pelo menos um item em FBX e OBJ, e um print da cena mostrando os modelos. Confira que está tudo lá e copie para o pen drive ou nuvem.`,
      gabarito: `A pasta final deve conter, no mínimo: o arquivo da cena do Maya (cena_nome.mb ou .ma), "personagem_nome.fbx", "personagem_nome.obj", "item_nome.fbx", "item_nome.obj" e uma imagem de print (por exemplo print_nome.png). Tudo com nomes claros, dentro de "Assets_Mes1_Nome", e com uma cópia de segurança no pen drive ou na nuvem. Se faltar algum arquivo, o aluno reexporta o item ausente ou tira o print da cena antes de copiar.`,
    },
    {
      titulo: `Apresentação dos primeiros assets`,
      tipo: `roda de conversa`,
      tempo: `15 minutos`,
      guiaProfessor: `Conduza a roda com tempo cronometrado por aluno e clima acolhedor. Registre o que cada um entregou. Encerre marcando o fechamento da Etapa 1 de 5 do projeto do jogo.`,
      atividade: `Na sua vez, mostre na tela grande o personagem e um item, diga o nome dos arquivos exportados e explique em uma frase uma decisão de design: por que você escolheu aquela forma, aquela proporção ou aquele detalhe? Depois ouça os colegas e dê um retorno positivo a um deles.`,
      gabarito: `Não há resposta única, mas a apresentação deve cumprir três pontos: mostrar o personagem e um item, citar os arquivos exportados (FBX e OBJ) e justificar uma decisão de design ligada ao jogo. Exemplos válidos: "Deixei a cabeça maior porque meu jogo é divertido e o personagem fica fofo"; "Usei formas simples no item para imprimir fácil em 3D depois." Respostas a melhorar são as que não explicam nenhuma escolha. O professor confirma que cada aluno entregou os assets e declara fechada a Etapa 1 de 5 do projeto do jogo.`,
    },
  ],
};
