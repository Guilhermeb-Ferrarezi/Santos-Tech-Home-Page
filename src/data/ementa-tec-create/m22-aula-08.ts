import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 8,
  titulo: "Exportando os Assets 3D do Jogo",
  semana: "Semana 4",
  duracao: "1 hora",
  objetivo: `Exportar os personagens, itens e cenário modelados no Maya nos formatos FBX e OBJ e organizar a pasta de assets, fechando o mês com todos os modelos 3D prontos para a montagem no Roblox Studio.`,
  descricao: `Esta é a aula que fecha o mês inteiro de modelagem 3D no Maya. Durante quatro semanas, o aluno deu os primeiros passos no 3D, modelou o personagem principal, criou os itens do jogo, montou o cenário da fase, aplicou materiais e cores, trouxe as texturas feitas com a arte da IA e, na aula passada, fez a revisão e a limpeza dos modelos. Agora chega o momento de empacotar todo esse trabalho num formato que o Roblox Studio entende. O foco de hoje não é criar nada novo, e sim exportar com capricho e organizar a pasta de assets, para que nada se perca na hora de montar o jogo.

A grande ideia da aula é entender que o arquivo do Maya (com extensão .mb ou .ma) só abre dentro do próprio Maya. Para levar o modelo para outro programa, é preciso exportar num formato universal. Os dois formatos que o aluno vai usar são o FBX, que é o mais completo e o recomendado para o Roblox porque guarda a malha, os materiais e a posição certinha, e o OBJ, que é mais simples e serve como cópia de segurança. O aluno aprende a diferença entre salvar o projeto (guardar para continuar editando no Maya) e exportar (gerar um arquivo para usar em outro lugar). São duas ações diferentes, e confundir as duas é o erro mais comum do mês.

O coração técnico da aula é o caminho da exportação no Maya. O aluno seleciona o modelo, vai no menu File, escolhe Export Selection, define o tipo de arquivo como FBX export na janela que abre, dá um nome claro ao arquivo (como heroi.fbx ou moeda.fbx) e salva dentro da pasta de assets do jogo. Depois repete o processo para cada personagem, cada item e o cenário. A palavra de ordem é organização: nomes sem espaços e sem acentos, tudo em pastas separadas por tipo (personagens, itens, cenario), para que o aluno e o professor encontrem qualquer modelo em segundos.

Por fim, a aula amarra a ponte com a próxima etapa da trilha. Cada aluno apresenta a sua pasta de assets organizada e mostra que tem o personagem, os itens e o cenário exportados em FBX, prontos para entrar no Roblox Studio. Este é o entregável do mês: os assets 3D do jogo. O professor guarda essas pastas com cuidado, porque elas serão a base de tudo que vem a seguir, quando o aluno vai importar esses modelos no Roblox e programar o jogo na linguagem Lua, reaproveitando também a música, a voz e a arte criadas com IA nos meses anteriores.`,
  materiais: [
    `Computadores com o Autodesk Maya instalado e aberto, um por aluno, com os modelos 3D do mês (personagem, itens e cenário) já salvos`,
    `Conta e licença ativa do Maya (versão educacional) funcionando em cada computador`,
    `Projetor ou TV grande conectada ao computador do professor para demonstrar a exportação passo a passo`,
    `Pen drive ou pasta compartilhada na rede para guardar as pastas de assets exportadas de cada aluno`,
    `Arquivo de exemplo "assets_modelo" com uma pasta já organizada (personagens, itens, cenario) e modelos em FBX para o professor mostrar como fica o resultado final`,
    `Arquivo de exemplo "heroi_pronto.mb" para o professor demonstrar a exportação caso algum aluno esteja sem modelo`,
    `Folha impressa "Checklist de exportação" com a lista de verificação dos assets, uma por aluno`,
  ],
  conceitosChave: [
    `Asset — cada peça pronta do jogo (um personagem, um item, o cenário) que será usada na montagem no Roblox.`,
    `Exportar — gerar um arquivo do modelo num formato universal, para abrir em outro programa fora do Maya.`,
    `FBX — formato completo de exportação, recomendado para o Roblox, que guarda a malha, os materiais e a posição do modelo.`,
    `OBJ — formato mais simples de modelo 3D, leve e universal, usado aqui como cópia de segurança do FBX.`,
    `Export Selection — comando do menu File do Maya que exporta apenas o que está selecionado na cena.`,
    `Salvar versus exportar — salvar guarda o projeto para continuar no Maya; exportar cria um arquivo para usar em outro programa.`,
    `Pasta de assets — pasta organizada por tipo (personagens, itens, cenario) onde ficam todos os modelos exportados do jogo.`,
  ],
  treinamento: `## O que o professor precisa saber

Você não precisa dominar o Maya para conduzir esta aula. O trabalho pesado de modelagem já foi feito nas sete aulas anteriores; hoje é exportar e organizar. O único passo técnico de verdade é a exportação, e ele é curto. Memorize este caminho: selecione o modelo clicando nele na cena, vá no menu File (no topo, à esquerda), escolha Export Selection (Exportar seleção). Vai abrir uma janela; no campo Files of type (tipo de arquivo), escolha FBX export. Dê um nome claro ao arquivo, sem espaços e sem acentos (por exemplo, heroi ou moeda), escolha a pasta de assets do jogo e clique em Export Selection para confirmar. Antes da aula, abra a pasta "assets_modelo" para ver como fica uma pasta bem organizada e exporte você mesmo um modelo de teste, para sentir o caminho na prática. Tenha a "Checklist de exportação" impressa e o pen drive ou a pasta da rede prontos para guardar o trabalho dos alunos.

## Passo a passo da aula (ritmo 10/15/25/10)

10 min — Aquecimento e revisão: Reúna a turma e relembre o caminho do mês, aula por aula: primeiros passos, personagem, itens, cenário, materiais, texturas e limpeza. Diga que hoje é o dia de empacotar tudo. Peça que cada aluno abra o próprio projeto no Maya (File, Open Scene) e confira se o personagem, os itens e o cenário estão na cena. Mostre no projetor a diferença entre salvar (File, Save Scene) e exportar.

15 min — Conteúdo novo guiado: No projetor, faça a exportação passo a passo com o modelo de exemplo. Clique no modelo para selecioná-lo, vá em File, escolha Export Selection. Na janela, em Files of type, escolha FBX export. Digite o nome heroi, escolha a pasta de assets e clique em Export Selection. Abra a pasta e mostre o arquivo heroi.fbx criado. Repita rapidinho exportando o mesmo modelo em OBJexport para mostrar o formato de segurança. Por fim, mostre a pasta "assets_modelo" com as subpastas personagens, itens e cenario.

25 min — Mão na massa: Cada aluno cria a própria pasta de assets com as subpastas personagens, itens e cenario. Depois exporta, um por um, o personagem, cada item e o cenário em FBX, salvando na subpasta certa com nomes claros e sem acentos. Circule pela sala. Garanta que cada modelo seja selecionado antes do Export Selection e que o arquivo apareça na pasta. Quem terminar antes exporta também uma cópia em OBJ ou ajuda um colega.

10 min — Desafio e compartilhar: Cada aluno mostra no projetor a própria pasta de assets organizada, abrindo as subpastas para ver os FBX dentro. A turma confere junto a "Checklist de exportação": personagem, itens e cenário exportados, nomes sem acento, tudo na pasta certa. Celebre o entregável do mês e diga que esses modelos vão entrar no Roblox em breve.

## Como explicar de forma clara (linguagem para a idade)

Comece com a ideia da mala de viagem: "O Maya é a casa onde a gente construiu tudo. Agora vamos arrumar uma mala com os modelos para levar para outra casa, que é o Roblox." Explique que o arquivo do Maya é como um caderno que só abre no Maya, e o FBX é como uma foto do modelo que qualquer programa abre. Para a diferença entre salvar e exportar, diga: "Salvar é guardar o caderno para continuar desenhando; exportar é tirar uma foto para mandar para um amigo." Sobre nomes de arquivo, use a regra do armário: "Se a gente joga tudo numa pilha só, depois ninguém acha nada. Cada coisa tem a sua gaveta, e cada gaveta tem uma etiqueta com nome simples."

## Erros comuns e como ajudar

O erro mais comum é o aluno usar Export Selection sem ter selecionado nada, e o arquivo sai vazio; reforce sempre clicar no modelo antes. Muitos confundem salvar com exportar e acham que já entregaram só por terem salvado o projeto; mostre a diferença na prática. Outro tropeço é escolher o formato errado na janela; lembre que é FBX export para o Roblox. Alguns colocam acentos ou espaços no nome do arquivo (como "herói final"), o que dá problema no Roblox; oriente nomes simples como heroi_final. Há quem exporte tudo solto na mesma pasta; ajude a criar as subpastas personagens, itens e cenario. E há quem esqueça de salvar uma cópia na rede ou no pen drive; passe na sala conferindo que o entregável ficou guardado.`,
  exercicios: [
    {
      titulo: `Salvar não é exportar`,
      tipo: `roda de conversa`,
      tempo: `8 minutos`,
      guiaProfessor: `Antes de mexer no computador, faça uma rodada rápida de conversa para fixar a diferença entre salvar e exportar. Use a imagem do caderno (salvar) e da foto (exportar). Pergunte à turma exemplos do dia a dia e corrija com gentileza quem confundir.`,
      atividade: `Em uma frase, explique com suas palavras a diferença entre salvar o projeto no Maya e exportar um modelo em FBX. Depois diga qual das duas ações deixa o modelo pronto para entrar no Roblox.`,
      gabarito: `O aluno deve dizer que salvar guarda o projeto para continuar editando dentro do Maya (arquivo .mb ou .ma), enquanto exportar gera um arquivo universal, como o FBX, para usar em outro programa. A ação que deixa o modelo pronto para o Roblox é exportar em FBX. Aceite explicações com palavras próprias, desde que mostrem que ele entendeu que são duas ações diferentes.`,
    },
    {
      titulo: `Meu primeiro FBX`,
      tipo: `prática na ferramenta`,
      tempo: `10 minutos`,
      guiaProfessor: `Acompanhe a primeira exportação de cada aluno. Garanta que ele clique no personagem para selecioná-lo antes de ir em File, Export Selection. Confira que escolha FBX export no tipo de arquivo, use um nome sem acento e salve na subpasta personagens. Verifique que o arquivo heroi.fbx realmente apareça na pasta.`,
      atividade: `Selecione o seu personagem principal na cena. Vá em File, depois Export Selection, escolha FBX export, dê o nome heroi e salve na subpasta personagens. Abra a pasta e confira que o arquivo heroi.fbx está lá.`,
      gabarito: `Existe um arquivo heroi.fbx (ou com o nome do personagem do aluno, sem acentos e sem espaços) salvo dentro da subpasta personagens. Isso comprova que o aluno selecionou o modelo, usou Export Selection com o formato FBX export e salvou no lugar certo. Se o arquivo estiver vazio ou não aparecer, o aluno provavelmente não selecionou o modelo antes de exportar.`,
    },
    {
      titulo: `Exportando todos os itens`,
      tipo: `prática na ferramenta`,
      tempo: `12 minutos`,
      guiaProfessor: `Agora o aluno repete a exportação para cada item e para o cenário. Reforce a organização: itens na subpasta itens, cenário na subpasta cenario, nomes claros e sem acento. Circule conferindo que cada modelo é selecionado individualmente antes do Export Selection. Quem terminar exporta uma cópia em OBJ export como segurança.`,
      atividade: `Exporte cada item do seu jogo (a moeda, a chave, o que você criou) em FBX, salvando na subpasta itens com nomes simples como moeda e chave. Depois exporte o cenário em FBX na subpasta cenario. Se sobrar tempo, exporte uma cópia da moeda em OBJ.`,
      gabarito: `A subpasta itens contém um arquivo FBX para cada item do jogo (por exemplo moeda.fbx, chave.fbx) e a subpasta cenario contém o arquivo do cenário em FBX. Os nomes não têm acentos nem espaços. Quem fez o extra tem também um arquivo .obj de pelo menos um item. O sucesso é cada modelo ter virado um arquivo próprio, na pasta certa.`,
    },
    {
      titulo: `Inspetor de assets`,
      tipo: `em dupla`,
      tempo: `12 minutos`,
      guiaProfessor: `Em duplas, os alunos conferem a pasta de assets um do outro usando a "Checklist de exportação". Cada um abre as subpastas do colega e marca se há personagem, itens e cenário, se os nomes estão sem acento e se nada ficou solto fora das pastas. Reforce que apontar um erro é ajudar, não criticar.`,
      atividade: `Troque de computador com o colega e abra a pasta de assets dele. Usando a checklist, confira três coisas: tem personagem, itens e cenário exportados em FBX; os nomes estão sem acento e sem espaço; tudo está na subpasta certa. Anote um ponto para ele melhorar e volte para corrigir o seu, se precisar.`,
      gabarito: `A dupla deve preencher a checklist apontando se cada item está presente e correto. Um asset bem organizado tem o personagem em personagens, os itens em itens e o cenário em cenario, todos em FBX, com nomes simples sem acento. Cada aluno deve identificar pelo menos um ajuste possível (um nome com acento, um arquivo na pasta errada ou um modelo faltando) e corrigir o próprio se for o caso.`,
    },
    {
      titulo: `Pasta de assets pronta para o Roblox`,
      tipo: `projeto curto`,
      tempo: `15 minutos`,
      guiaProfessor: `Este é o fechamento do entregável do mês. Cada aluno finaliza a pasta de assets completa e salva uma cópia no pen drive ou na pasta da rede com o nome "assets_NOME". Depois apresenta no projetor, abrindo as subpastas para mostrar os FBX. Ajude quem ainda tiver modelos faltando a exportar os que faltam.`,
      atividade: `Monte a sua pasta de assets final com as três subpastas (personagens, itens, cenario), com todos os modelos do jogo exportados em FBX. Salve uma cópia com o nome "assets_SEUNOME" no local indicado pelo professor. Por fim, apresente a pasta no projetor mostrando que o personagem, os itens e o cenário estão prontos para o Roblox.`,
      gabarito: `O aluno entrega uma pasta "assets_NOME" contendo as subpastas personagens, itens e cenario, cada uma com os modelos exportados em FBX, nomes sem acento e nada solto fora das subpastas, salva também no pen drive ou na rede. Na apresentação, ele consegue abrir cada subpasta e mostrar os arquivos. Esse conjunto completo e organizado é o entregável do mês, pronto para a etapa de importação e montagem no Roblox Studio.`,
    },
  ],
};
