import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 3,
  titulo: "Do Blender ao Unity: importando modelos",
  semana: "Semana 2",
  duracao: "1 hora",
  objetivo: `Exportar modelos do Blender em formato FBX e importá-los corretamente no Unity, organizando a pasta Assets e ajustando escala e eixos.`,
  descricao: `Nesta aula o aluno faz a ponte entre dois mundos que ele já conhece: a modelagem que aprendeu no Ano 3 (Blender) e o motor de jogos que está descobrindo este mês (Unity). Até agora, no Mês 6, ele viu a interface do Unity e aprendeu a navegar e montar uma cena com objetos simples. Chegou a hora de trazer o próprio personagem e os cenários que ele mesmo criou para dentro do projeto.

O conceito central é o de "asset": qualquer arquivo que o Unity usa para construir o jogo, como modelos 3D, texturas, sons e scripts. O aluno vai entender que o Unity não abre o arquivo nativo do Blender diretamente no jogo; em vez disso, exportamos o modelo em um formato neutro e universal chamado FBX, que carrega a malha (a forma 3D), os materiais básicos e, quando existem, as animações e o esqueleto do personagem.

Boa parte da aula gira em torno de um problema muito comum e muito educativo: modelos que chegam tortos, deitados ou gigantes. Isso acontece porque o Blender e o Unity discordam sobre duas coisas: a escala (no Blender, uma unidade pode não valer um metro) e os eixos (o Blender usa o eixo Z apontando para cima, enquanto o Unity usa o eixo Y para cima). Compreender essa diferença transforma um bug assustador em um ajuste simples de configuração.

Ao final, cada aluno terá uma pasta Assets organizada, com subpastas claras (Models, Textures, Prefabs), e verá o próprio personagem aparecer na cena do Unity na escala e na orientação corretas. É um momento de orgulho: o trabalho de modelagem do ano anterior ganha vida dentro de um motor de jogos de verdade.`,
  materiais: [
    `Computadores com Unity instalado (versão LTS) e o projeto do Mês 6 já criado`,
    `Blender instalado, com os arquivos .blend do personagem e dos cenários feitos pelo aluno no Ano 3`,
    `Projetor ou tela compartilhada para o professor demonstrar a exportação e a importação passo a passo`,
    `Arquivos de exemplo: um personagem em FBX já pronto e uma textura, caso algum aluno não tenha o trabalho do Ano 3 à mão`,
    `Pasta de backup com os modelos do Ano 3, organizada por aluno (evita perda de tempo procurando arquivos)`,
    `Acesso ao Claude como assistente, para tirar dúvidas sobre mensagens de erro de importação`,
  ],
  conceitosChave: [
    `Asset — qualquer arquivo que o Unity usa no jogo, como modelos 3D, texturas, sons e scripts; tudo fica dentro da pasta Assets.`,
    `FBX — formato de arquivo universal de troca de modelos 3D; guarda a malha, os materiais e, às vezes, animações, e é entendido por quase todos os programas.`,
    `Malha (mesh) — a forma 3D do objeto, feita de vértices, arestas e faces; é o "esqueleto visível" do modelo.`,
    `Escala — o tamanho do modelo em relação ao mundo; uma diferença de escala faz o personagem chegar gigante ou minúsculo no Unity.`,
    `Eixos (orientação) — as três direções X, Y e Z; o Blender usa Z para cima e o Unity usa Y para cima, por isso modelos chegam deitados ou tortos.`,
    `Import Settings — o painel do Inspector que aparece ao clicar num modelo importado; ali se ajusta escala, eixos e geração de materiais.`,
    `Prefab — um modelo configurado e salvo como modelo reutilizável; permite arrastar várias cópias prontas para a cena.`,
  ],
  treinamento: `## O que o professor precisa saber

Você não precisa dominar o Blender nem o Unity para dar esta aula. Precisa entender uma ideia simples: o Unity não usa o arquivo de trabalho do Blender (o .blend); ele usa uma "cópia de entrega" em formato FBX. O FBX é como um PDF do modelo 3D: qualquer programa abre. Importar é só colocar esse FBX dentro da pasta Assets do projeto. Os problemas de escala e eixo são esperados e fáceis de corrigir no painel Import Settings. Tenha sempre um FBX de exemplo pronto, caso algum aluno não encontre o trabalho do Ano 3.

## Passo a passo da aula (ritmo 10/15/25/10)

10 min — Aquecimento e revisão. Pergunte: "Na aula passada, como vocês colocaram um cubo na cena?" Relembre que arrastar objetos para a janela Scene é o gesto básico. Anuncie a missão de hoje: trazer o personagem que eles criaram no Ano 3 para dentro do Unity. Mostre no projetor uma imagem do personagem deitado e gigante e pergunte: "Por que será que isso acontece?" Deixe a curiosidade no ar.

15 min — Conteúdo novo guiado (demonstre no projetor). Primeiro, no Blender: abra o arquivo .blend, vá no menu File, depois Export, e escolha FBX (.fbx). Na janela de exportação, no painel da direita, em Transform, ajuste Scale para 1.0 e, em Geometry, deixe "Apply Transform" marcado. Clique em Export FBX e salve numa pasta fácil de achar, como a Área de Trabalho. Segundo, no Unity: na janela Project (parte de baixo), clique com o botão direito na pasta Assets e escolha Create, depois Folder, e crie três pastas: Models, Textures e Prefabs. Arraste o arquivo FBX para dentro da pasta Models. O Unity importa sozinho. Clique no modelo importado e olhe o Inspector à direita: ali está o Import Settings.

25 min — Mão na massa (alunos no computador). Cada aluno repete os passos com o próprio modelo. Oriente: localizar o .blend, exportar em FBX, criar as subpastas no Unity e arrastar o FBX para Models. Quando o personagem chegar torto ou gigante, leve-os ao Inspector. Na aba Model do Import Settings, mude "Scale Factor" (experimente 0.01 ou 100, conforme o tamanho) e marque "Bake Axis Conversion" para corrigir o eixo deitado. Sempre clique em "Apply" no fim do Inspector. Depois, arraste o modelo da pasta Models para a janela Scene e veja-o aparecer. Para criar um Prefab, basta arrastar o objeto da janela Hierarchy de volta para a pasta Prefabs.

10 min — Desafio e compartilhar. Peça que cada aluno deixe o personagem na escala correta, em pé, e crie um Prefab dele. Quem terminar tenta importar também um cenário. Faça uma volta rápida pela sala: cada aluno mostra o personagem na cena e diz uma diferença que descobriu entre Blender e Unity.

## Como explicar de forma clara (linguagem para a idade)

Use comparações do dia a dia. Diga que o .blend é o "caderno de rascunho" e o FBX é a "versão final entregue". Explique escala assim: "Imagine montar um boneco de LEGO numa maquete; se o boneco vier do tamanho de um prédio, não cabe na maquete." Para os eixos, levante a mão: "No Blender, o 'para cima' é uma direção; no Unity é outra. Por isso o personagem chega deitado, como se tivesse tropeçado. A gente só precisa avisar ao Unity qual é o cima certo." Reforce que erro de importação não é culpa do aluno: é só um acerto de configuração.

## Erros comuns e como ajudar

Modelo gigante ou minúsculo: ajuste o Scale Factor no Import Settings e clique em Apply. Personagem deitado: marque "Bake Axis Conversion" ou rotacione no eixo X. Modelo aparece cinza, sem cor: as texturas não vieram juntas; na aba Materials do Import Settings, use "Extract Textures" ou importe a textura na pasta Textures. Aluno esqueceu de marcar Apply: lembre que nada muda até clicar em Apply. Aluno arrastou o FBX para fora da pasta Assets: só funciona dentro de Assets; mova o arquivo para lá.`,
  exercicios: [
    {
      titulo: `Caça aos assets`,
      tipo: `Identificação / oral`,
      tempo: `5 minutos`,
      guiaProfessor: `Aquecimento conceitual antes de mexer nos arquivos. Faça em roda ou apontando para a janela Project no projetor. Aceite respostas faladas; o objetivo é fixar o vocabulário.`,
      atividade: `Liste cinco tipos de arquivos e diga, para cada um, se é um asset do Unity ou não: um modelo 3D em FBX, uma textura PNG, um som MP3, um arquivo de texto do bloco de notas usado como anotação pessoal, e um script C#. Explique onde os assets devem ficar dentro do projeto.`,
      gabarito: `São assets do Unity: o modelo FBX, a textura PNG, o som MP3 e o script C#, pois o jogo os utiliza. A anotação pessoal no bloco de notas não é um asset do jogo (não é usada pelo Unity). Todos os assets devem ficar dentro da pasta Assets do projeto, de preferência organizados em subpastas como Models, Textures e Scripts.`,
    },
    {
      titulo: `Exportando o FBX no Blender`,
      tipo: `Prática guiada`,
      tempo: `7 minutos`,
      guiaProfessor: `Acompanhe pela tela compartilhada. Garanta que cada aluno encontre o próprio .blend do Ano 3; quem não tiver usa o arquivo de exemplo. Verifique se o Scale ficou em 1.0 e se "Apply Transform" está marcado.`,
      atividade: `Abra seu arquivo do personagem no Blender. Exporte-o em formato FBX usando o menu File, depois Export, depois FBX (.fbx). Ajuste o Scale para 1.0 e marque "Apply Transform". Salve o arquivo numa pasta fácil de achar.`,
      gabarito: `O caminho correto é File > Export > FBX (.fbx). No painel de exportação, em Transform, o Scale deve estar em 1.0 e, em Geometry, "Apply Transform" marcado. Ao clicar em Export FBX, um arquivo com extensão .fbx é gerado no local escolhido. Resultado esperado: existe um arquivo personagem.fbx salvo, pronto para ser importado.`,
    },
    {
      titulo: `Organizando a pasta Assets`,
      tipo: `Prática`,
      tempo: `8 minutos`,
      guiaProfessor: `Foco em organização. Mostre o botão direito na janela Project. Reforce que pastas bem nomeadas evitam bagunça quando o projeto crescer. Confira se as três pastas foram criadas dentro de Assets.`,
      atividade: `No Unity, na janela Project, crie dentro da pasta Assets três subpastas chamadas Models, Textures e Prefabs. Depois, importe seu personagem arrastando o arquivo FBX para dentro da pasta Models.`,
      gabarito: `Na janela Project, clique com o botão direito sobre Assets e escolha Create > Folder; repita para criar Models, Textures e Prefabs. Em seguida, arraste o arquivo .fbx para a pasta Models. Resultado esperado: a estrutura Assets/Models, Assets/Textures e Assets/Prefabs existe, e o personagem aparece como asset dentro de Models, pronto para ser usado.`,
    },
    {
      titulo: `Consertando o personagem torto e gigante`,
      tipo: `Resolução de problema`,
      tempo: `10 minutos`,
      guiaProfessor: `Aqui está o coração da aula. Provoque o aluno a observar o problema antes de corrigir. Lembre sempre do botão Apply no fim do Inspector. Se o eixo não corrigir pelo "Bake Axis Conversion", oriente rotacionar -90 no eixo X.`,
      atividade: `Arraste o personagem da pasta Models para a janela Scene. Ele provavelmente chega gigante e deitado. Usando o Import Settings no Inspector, deixe-o na escala correta e em pé. Descreva quais campos você ajustou.`,
      gabarito: `Selecione o modelo na pasta Models e abra o Inspector. Na aba Model, ajuste o "Scale Factor" (por exemplo, 0.01 se estiver gigante ou 100 se estiver minúsculo) e marque "Bake Axis Conversion" para corrigir o eixo, já que o Blender usa Z para cima e o Unity usa Y para cima. Clique em Apply. Caso ainda fique deitado, selecione o objeto na cena e rotacione -90 graus no eixo X. Resultado esperado: personagem em pé e na escala correta.`,
    },
    {
      titulo: `Criando o Prefab e importando o cenário`,
      tipo: `Desafio (avançado)`,
      tempo: `10 minutos`,
      guiaProfessor: `Para quem já dominou os passos anteriores. Avalie se o Prefab foi salvo na pasta Prefabs (ícone azul) e se o cenário foi ajustado em escala e eixo como o personagem. Incentive o uso do Claude para interpretar mensagens de aviso na importação.`,
      atividade: `Transforme seu personagem ajustado em um Prefab salvo na pasta Prefabs. Em seguida, importe um cenário que você criou no Ano 3, repetindo o processo de exportação e ajuste, e monte uma cena com o personagem dentro do cenário.`,
      gabarito: `Para criar o Prefab, arraste o objeto da janela Hierarchy para a pasta Prefabs; o objeto na Hierarchy fica com nome azul, indicando que virou um Prefab reutilizável. Para o cenário, repita: exportar em FBX no Blender, arrastar para Assets/Models, ajustar Scale Factor e Bake Axis Conversion no Import Settings e clicar em Apply. Por fim, arraste cenário e personagem para a Scene e posicione o personagem sobre o cenário. Resultado esperado: um Prefab do personagem na pasta Prefabs e uma cena com personagem e cenário na escala e orientação corretas.`,
    },
  ],
};
