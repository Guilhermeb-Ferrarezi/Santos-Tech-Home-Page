import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 6,
  titulo: "UVs, Texturas e Exportação FBX",
  semana: "Semana 3",
  duracao: "1 hora",
  objetivo: `Aprender a desempacotar as UVs de um asset, gerar texturas por baking e exportar em FBX com escala e eixos corretos, testando o resultado importado no Unity e corrigindo problemas de pivô e material.`,
  descricao: `Nesta aula o aluno fecha a ponte entre o Blender e o Unity. Até agora ele modelou, deu materiais e iluminou cenários e itens; agora precisa fazer o asset sair do Blender e chegar bonito e funcional dentro do motor de jogo. Para isso, três etapas são essenciais: desempacotar as UVs (UV unwrap), assar as texturas (baking) e exportar em FBX com a configuração certa de escala e eixos. Sem isso, o modelo pode chegar gigante, deitado de lado, sem textura ou com o ponto de giro no lugar errado.

UV unwrap é como abrir uma caixa de papelão e deixar ela plana sobre a mesa: a malha 3D vira um molde 2D, e é nesse molde que a textura vai grudar. O aluno aprende a marcar as costuras (seams), que são as linhas onde o modelo "abre", e a desempacotar para que cada parte do objeto receba sua imagem sem esticar nem sobrepor. Em seguida vem o baking, o processo de gravar numa imagem informações que antes eram calculadas em tempo real, como o sombreamento, a cor base ou os detalhes de relevo. Isso deixa o asset leve e rápido no jogo, porque o motor só precisa exibir a imagem pronta.

A parte final, e talvez a mais sensível, é a exportação em FBX. O Blender e o Unity medem o mundo de formas diferentes, e os eixos "para cima" e "para frente" não batem. O aluno aprende a configurar a janela de exportação para que o asset chegue na escala 1, em pé e olhando para a direção certa. Depois ele arrasta o FBX para o Unity, observa como ficou e corrige os problemas clássicos: pivô deslocado, material que não apareceu e tamanho errado.

Esta é a sexta de oito aulas do mês dedicado a mais 3D no Blender. Ela não cobre a produção em série da coleção de assets nem a entrega final do portfólio, que vêm nas próximas aulas. Aqui o foco é dominar o fluxo técnico que transforma um modelo do Blender em um asset de jogo confiável: UVs limpas, texturas assadas e um FBX que importa certo no Unity.`,
  materiais: [
    `Computadores com o Blender e o Unity instalados e abertos, um por aluno`,
    `Projetor ou TV para o professor mostrar o desempacotamento de UVs, o baking e a janela de exportação FBX ao vivo`,
    `Arquivo de exemplo do professor: um asset simples já modelado (por exemplo, uma caixa de madeira ou um barril) sem UVs nem textura, para servir de cobaia`,
    `Um projeto Unity vazio já criado, com uma pasta Assets/Imports pronta para receber os FBX`,
    `Imagem de textura de exemplo (madeira ou metal, em PNG) para aplicar no material antes do baking`,
    `Folha impressa com o checklist de exportação FBX para Unity (escala, eixos, pivô)`,
  ],
  conceitosChave: [
    `UV unwrap (desempacotamento) — abrir a malha 3D num molde plano 2D para que a textura grude em cada parte sem esticar.`,
    `Seam (costura) — a linha marcada na malha onde o modelo "abre" durante o unwrap, como o corte de um molde de roupa.`,
    `UV Editor — a janela do Blender onde você vê e organiza o molde 2D das UVs sobre a imagem.`,
    `Baking (assar textura) — gravar numa imagem informações que antes eram calculadas, deixando o asset mais leve e rápido no jogo.`,
    `FBX — o formato de arquivo usado para levar modelos 3D do Blender para motores como o Unity, levando malha, UVs e materiais juntos.`,
    `Pivô (origin) — o ponto de giro e de posição do objeto; se estiver no lugar errado, o asset gira e se posiciona de forma estranha no jogo.`,
    `Escala e eixos — Blender e Unity medem o mundo e definem "cima" e "frente" de formas diferentes; o FBX precisa ser exportado para corrigir isso.`,
  ],
  treinamento: `## O que o professor precisa saber

O objetivo da aula é tirar um asset do Blender e colocá-lo certo no Unity. Três etapas: UV unwrap, baking e exportação FBX. No UV unwrap, você entra no Modo de Edição (tecla Tab), marca costuras (seams) nas arestas escolhidas e manda o Blender achatar a malha; o resultado aparece no UV Editor. O baking grava o sombreamento ou a cor numa imagem, deixando o asset leve. Na exportação FBX, o segredo é a janela File > Export > FBX (.fbx), onde você ajusta a escala e os eixos para o Unity. Lembre-se: por padrão o Blender usa Z para cima e o Unity usa Y para cima; o FBX precisa converter isso. Antes da aula, faça o fluxo inteiro uma vez com o asset de exemplo, do unwrap até ver o modelo certo no Unity, para não travar na frente da turma.

## Passo a passo da aula (ritmo 10/15/25/10)

10 min — Aquecimento e revisão: no projetor, mostre um asset bonito no Blender e o mesmo asset quebrado no Unity (deitado, gigante, sem textura). Pergunte: "O que será que deu errado na ponte entre os dois programas?". Relembre rápido o material e a iluminação das aulas anteriores e conecte: agora vamos fazer o asset viajar para o jogo sem estragar.

15 min — Conteúdo novo guiado: selecione o asset, aperte Tab para entrar no Modo de Edição. Selecione as arestas onde o modelo deve abrir e use Edge > Mark Seam para marcar as costuras. Selecione tudo com A e faça U > Unwrap. Abra o UV Editor (mude um painel para UV Editor) e mostre o molde 2D. Volte ao Modo Objeto. Para o baking, vá na aba Render Properties, troque o Render Engine para Cycles, crie uma imagem nova no UV Editor (New, 1024 por 1024), conecte um nó Image Texture no material e, em Render Properties > Bake, escolha o tipo (por exemplo Diffuse ou Combined) e clique em Bake. Salve a imagem (Image > Save As). Por fim, exporte: File > Export > FBX (.fbx). Na coluna direita, em Transform, ajuste Scale para 1.0 e use o preset de eixos para Unity (Forward: -Z Forward, Up: Y Up). Marque Selected Objects e clique em Export FBX.

25 min — Mão na massa: cada aluno pega o asset de exemplo e faz o fluxo completo: marcar seams, unwrap, conferir as UVs no UV Editor, criar a imagem, assar a textura, salvar o PNG e exportar o FBX para a pasta do projeto Unity. Depois arrasta o FBX para a janela Project do Unity e observa o resultado na cena. Circule ajudando individualmente, principalmente na janela de exportação.

10 min — Desafio e compartilhar: quem terminar deve corrigir um problema de própria escolha no Unity (pivô no centro do objeto, escala 1, ou material reaplicado) e mostrar o antes e o depois. Cada aluno mostra o asset rodando no Unity e diz qual foi o ajuste mais importante.

## Como explicar de forma clara (linguagem para a idade)

Use comparações concretas. UV unwrap é "abrir uma caixa de papelão e deixar plana": a textura é o papel de presente que vai grudar nesse molde. Seam é "a linha pontilhada onde a tesoura corta o molde". Baking é "tirar uma foto da iluminação e colar na textura", para o jogo não precisar calcular tudo de novo. FBX é "a mala de viagem do modelo", que leva malha, UVs e textura para o Unity. Sobre eixos, brinque que "o Blender acha que o céu é o Z e o Unity acha que é o Y", por isso o asset chega deitado se não avisarmos. Mostre sempre o efeito ao vivo: exporte errado de propósito, veja o modelo deitado no Unity, e depois conserte com o preset.

## Erros comuns e como ajudar

O erro mais comum é esquecer de marcar seams: o unwrap fica todo esticado e bagunçado. Mostre o UV Editor e peça para procurar partes muito esticadas. Outro clássico é exportar com escala errada e o asset chegar gigante ou minúsculo no Unity: confira Scale 1.0 e o preset de eixos para Unity. Muitos esquecem de salvar a imagem assada e a textura some; lembre que Bake só cria, é preciso Image > Save As. O pivô deslocado faz o objeto girar torto; ensine Object > Set Origin > Origin to Geometry no Blender. Por fim, há quem solte o FBX fora da pasta do projeto Unity; oriente sempre exportar direto para Assets/Imports.`,
  exercicios: [
    {
      titulo: `Marcando as costuras`,
      tipo: `prática na ferramenta`,
      tempo: `7 minutos`,
      guiaProfessor: `Garanta que todos entrem no Modo de Edição com Tab e saibam selecionar arestas (modo de aresta, tecla 2). Circule conferindo se as seams formam um caminho que realmente permite abrir o modelo, e não arestas soltas aleatórias.`,
      atividade: `Entre no Modo de Edição do asset de exemplo (Tab). No modo de aresta, selecione as arestas onde o modelo deve abrir e marque as costuras com Edge > Mark Seam. As arestas marcadas ficam vermelhas.`,
      gabarito: `O aluno tem um conjunto de arestas marcadas em vermelho (seams) formando um caminho fechado ou contínuo que permite achatar o modelo. Em uma caixa, por exemplo, as seams seguem as quinas para a caixa "abrir" como um molde de papelão.`,
    },
    {
      titulo: `Desempacotando as UVs`,
      tipo: `prática na ferramenta`,
      tempo: `8 minutos`,
      guiaProfessor: `Mostre como trocar um painel para UV Editor. Após o Unwrap, peça para todos olharem se há ilhas muito esticadas. Reforce que selecionar tudo com A antes do U é essencial, senão só parte da malha é desempacotada.`,
      atividade: `Com as seams marcadas, selecione toda a malha com A e faça U > Unwrap. Abra o UV Editor e observe o molde 2D. Verifique se as partes não estão muito esticadas nem sobrepostas.`,
      gabarito: `No UV Editor aparecem as ilhas de UV (o molde 2D) bem distribuídas, sem esticamento exagerado nem sobreposição. A malha inteira foi desempacotada, porque o aluno selecionou tudo com A antes do Unwrap.`,
    },
    {
      titulo: `Assando a textura`,
      tipo: `desafio`,
      tempo: `12 minutos`,
      guiaProfessor: `Confirme que o Render Engine está em Cycles, que existe um nó Image Texture selecionado no material e que a imagem nova foi criada no UV Editor. O esquecimento clássico é não salvar a imagem depois do Bake; lembre todos do Image > Save As.`,
      atividade: `Troque o Render Engine para Cycles. No UV Editor, crie uma imagem nova (New, 1024 por 1024). No material, adicione um nó Image Texture com essa imagem e deixe-o selecionado. Em Render Properties > Bake, escolha o tipo e clique em Bake. Depois salve a imagem com Image > Save As.`,
      gabarito: `A imagem assada mostra o asset com o sombreamento ou a cor gravados, seguindo o molde das UVs. O arquivo PNG foi salvo com Image > Save As. O aluno entende que o Bake apenas gera o resultado na imagem e que salvar é um passo separado e obrigatório.`,
    },
    {
      titulo: `Exportando o FBX para o Unity`,
      tipo: `em dupla`,
      tempo: `13 minutos`,
      guiaProfessor: `Forme duplas para conferirem a janela de exportação um do outro. O ponto crítico é o painel Transform: Scale 1.0 e o preset de eixos para Unity. Use o checklist impresso. Oriente exportar direto para a pasta Assets/Imports do projeto Unity.`,
      atividade: `Em dupla, vá em File > Export > FBX (.fbx). No painel Transform, deixe Scale em 1.0 e ajuste os eixos para Unity (Forward: -Z Forward, Up: Y Up). Marque Selected Objects. Exporte para a pasta Assets/Imports do projeto Unity. Confiram o checklist juntos antes de clicar em Export.`,
      gabarito: `Um arquivo FBX foi gerado dentro de Assets/Imports com Scale 1.0 e os eixos no preset do Unity. Ao arrastar para a janela Project do Unity, o asset aparece na cena em pé, na orientação correta e em tamanho compatível com a cena. A dupla confirmou cada item do checklist antes de exportar.`,
    },
    {
      titulo: `Corrigindo pivô, escala e material no Unity`,
      tipo: `projeto curto`,
      tempo: `15 minutos`,
      guiaProfessor: `É a entrega da aula. Verifique cada asset importado: pivô, escala e material. Se o pivô estiver torto, ensine no Blender Object > Set Origin > Origin to Geometry e reexporte. Se o material sumiu, mostre como reaplicar a textura no Unity arrastando o PNG. Cobre o registro do antes e depois.`,
      atividade: `Importe seu FBX no Unity e identifique pelo menos um problema: pivô deslocado, escala errada ou material faltando. Corrija (no Blender e reexporte, ou diretamente no Unity), descreva em uma frase o que estava errado e mostre o asset funcionando na cena.`,
      gabarito: `Aprovado quando: o asset está na cena do Unity em pé, escala adequada, pivô coerente (por exemplo, na base ou no centro do objeto) e material com a textura visível. O aluno descreve corretamente o problema encontrado e como resolveu (por exemplo, "o pivô estava fora do objeto; usei Origin to Geometry no Blender e reexportei o FBX"). O fluxo Blender para Unity está completo e funcional.`,
    },
  ],
};
