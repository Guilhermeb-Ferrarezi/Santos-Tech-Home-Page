import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 3,
  titulo: "Do Maya para a Unreal: preparando os modelos",
  semana: "Semana 2",
  duracao: "1 hora",
  objetivo: `Aprender a exportar um modelo do Maya para a Unreal Engine usando o formato FBX, garantindo escala, pivot, nomeação e geometria corretos.`,
  descricao: `Levar um modelo do Maya para dentro da Unreal Engine parece simples, mas é nesse caminho que a maioria dos problemas aparece. Um modelo que fica gigante demais, que gira em torno do ponto errado ou que tem nomes confusos pode atrapalhar a montagem da cena inteira. Por isso, antes de exportar qualquer coisa, o aluno precisa entender que o modelo tem que estar limpo e organizado. Esta aula é a ponte entre o trabalho de modelagem que ele já domina e o motor de jogo onde a cena vai ganhar vida.

O formato FBX é o padrão para transportar modelos 3D entre programas. Ele guarda a geometria (os vértices e faces), os mapas de UV (que dizem como a textura se enrola no modelo) e informações de posição e escala. Quando o FBX é exportado com as configurações certas, o modelo chega na Unreal pronto para uso. Quando algo está errado, o aluno vai gastar tempo consertando dentro do motor, o que é bem mais chato do que ajustar antes.

Três ajustes são a espinha dorsal desta aula. O primeiro é a escala: a Unreal trabalha em centímetros, e o Maya por padrão também, mas vale conferir, porque um modelo na escala errada vira um problema visível. O segundo é o pivot, que é o ponto em torno do qual o objeto gira e é movido; ele deve estar bem posicionado, geralmente na base do modelo. O terceiro é a nomeação: arquivos com nomes claros e sem espaços ou acentos evitam confusão na hora de organizar a pasta de assets.

Nesta aula, o aluno usa o Claude como assistente para revisar a checklist de exportação e confirmar se o modelo está pronto: geometria sem buracos, UVs presentes, pivot correto e nome adequado. O professor conduz o passo a passo no Maya, mostrando onde clicar para exportar o FBX, e o aluno repete com o próprio modelo, deixando o arquivo pronto para a Aula 4, quando ele será importado de fato na Unreal.`,
  materiais: [
    `Computadores com Unreal Engine e Maya instalados, com suporte a projetos C++`,
    `Projetor para o professor demonstrar o fluxo de exportação do Maya`,
    `Arquivo de exemplo no Maya (um objeto simples, como uma caixa ou uma cadeira de baixa poligonagem)`,
    `Pasta organizada no computador para salvar os arquivos FBX exportados`,
    `Acesso ao Claude como assistente para revisar a checklist de exportação`,
    `Checklist impressa ou na tela com os itens: geometria limpa, UVs, escala, pivot e nome do arquivo`,
  ],
  conceitosChave: [
    `FBX — formato de arquivo padrão para transportar modelos 3D entre programas, guardando geometria, UVs, escala e posição.`,
    `Escala — tamanho do modelo no mundo; a Unreal usa centímetros, então um modelo mal escalado fica gigante ou minúsculo na cena.`,
    `Pivot — ponto de origem do objeto, em torno do qual ele gira e é movido; deve ficar bem posicionado, geralmente na base.`,
    `UV — mapa que diz como uma textura plana se enrola na superfície do modelo 3D; sem ele, a textura aparece errada.`,
    `Geometria limpa — malha sem buracos, faces invertidas ou vértices duplicados, pronta para receber materiais na Unreal.`,
    `Nomeação — nome do arquivo e do objeto claro, sem espaços, acentos ou caracteres especiais, para evitar erros e confusão.`,
    `Exportação — processo de salvar o modelo do Maya em FBX com as configurações corretas para ser usado em outro programa.`,
  ],
  treinamento: `## O que o professor precisa saber

Você não precisa ser especialista em Maya nem em Unreal para dar esta aula. O segredo é entender quatro coisas que precisam estar certas no modelo antes de exportar: geometria limpa, UVs presentes, escala correta e pivot bem posicionado. O FBX é só o "caminhão" que leva o modelo de um programa para o outro. Se o modelo entra no caminhão organizado, ele chega organizado. A Unreal trabalha em centímetros, e o Maya também, mas sempre vale conferir a unidade do cenário antes de exportar. Tenha um modelo de exemplo simples já aberto no Maya para não perder tempo modelando na frente da turma.

## Passo a passo da aula

10 min - Aquecimento e revisão. Pergunte: "Quem lembra o que é UV?" e "Por que um modelo pode ficar gigante quando muda de programa?". Mostre no projetor um modelo bem feito ao lado de um modelo torto (pivot errado) para criar curiosidade. Explique que hoje eles vão preparar o próprio modelo para a viagem até a Unreal.

15 min - Conteúdo novo guiado. No Maya, com o modelo selecionado, mostre a checklist na tela:
1. Geometria: abra o menu Mesh Display e use Reverse para corrigir faces invertidas, se houver. Confira que não há buracos.
2. UVs: abra UV menu e depois UV Editor para confirmar que o modelo tem UVs distribuídas.
3. Escala: vá em Modify e depois Freeze Transformations para zerar transformações e fixar a escala atual.
4. Pivot: pressione a tecla D junto com X (snap) e arraste o pivot para a base do modelo. Solte as teclas.
5. Nome: no Outliner, renomeie o objeto para algo como cadeira_madeira, sem espaços nem acentos.
Depois, demonstre a exportação: File, depois Export Selection. Na janela, escolha o tipo de arquivo FBX export. Em Files of type confirme FBX. Em opções, marque Smoothing Groups e deixe Up Axis em Z (a Unreal usa Z para cima). Dê o nome do arquivo igual ao do objeto e clique Export Selection.

25 min - Mão na massa. Cada aluno aplica a checklist no próprio modelo e exporta o FBX. Peça que usem o Claude para revisar. Um exemplo de pergunta para o Claude: "Estou exportando um modelo do Maya para a Unreal. Minha checklist tem geometria limpa, UVs, escala congelada, pivot na base e nome sem espaços. Faltou algo importante?" Circule pela sala conferindo os pivots e as escalas, que são os erros mais comuns.

10 min - Desafio e compartilhar. Desafio: cada aluno mostra a pasta com o FBX salvo e diz onde colocou o pivot e por quê. Quem terminar rápido tenta exportar um segundo objeto pequeno.

## Como explicar de forma clara

Use a imagem da mudança de casa: o FBX é a caixa de mudança, e antes de fechar a caixa você organiza tudo. Se você joga as coisas de qualquer jeito, na casa nova vai estar tudo bagunçado. A escala é como o tamanho do móvel: imagine levar um sofá que de repente fica do tamanho de um prédio. O pivot é como segurar um objeto: se você segura pela base, ele se equilibra; se segura pelo canto, ele gira torto. Para os UVs, lembre que é como o papel de presente: o mapa diz como o papel se dobra em volta da caixa. Fale devagar e mostre cada clique no projetor antes de pedir que repitam.

## Erros comuns e como ajudar

O erro mais frequente é o pivot longe do modelo, fazendo o objeto girar estranho na Unreal; ensine sempre a colocar na base. Outro erro é esquecer o Freeze Transformations, o que faz a escala chegar errada; mostre que esse passo "trava" o tamanho. Modelos exportados com espaços ou acentos no nome causam confusão na pasta de assets; padronize nomes com letras minúsculas e underline. Por fim, se o aluno exportou e não achou o arquivo, ajude a conferir a pasta de destino na janela de exportação. Tranquilize a turma: é normal exportar mais de uma vez até ficar certo.`,
  exercicios: [
    {
      titulo: `Checklist de pré-exportação`,
      tipo: `Quiz conceitual`,
      tempo: `5 minutos`,
      guiaProfessor: `Faça como pergunta rápida oral ou na lousa. O objetivo é fixar os quatro itens que precisam estar prontos antes de exportar. Aceite respostas com palavras próprias do aluno.`,
      atividade: `Liste os quatro itens principais que um modelo precisa ter prontos antes de ser exportado do Maya para a Unreal e explique em uma frase por que cada um importa.`,
      gabarito: `1. Geometria limpa, sem buracos ou faces invertidas, para o modelo aparecer correto. 2. UVs presentes, para que as texturas se enrolem certo no modelo. 3. Escala congelada (Freeze Transformations), para o modelo chegar no tamanho certo. 4. Pivot bem posicionado, geralmente na base, para o objeto girar e se mover de forma previsível. Um quinto item desejável é o nome do arquivo sem espaços nem acentos.`,
    },
    {
      titulo: `Caça ao erro de nomeação`,
      tipo: `Identificação e correção`,
      tempo: `6 minutos`,
      guiaProfessor: `Mostre os nomes na tela e peça que os alunos apontem os problemas e sugiram correções. Reforce o padrão de letras minúsculas e underline.`,
      atividade: `Observe estes nomes de arquivo e diga quais estão errados e por quê, depois reescreva cada um no formato correto: "Cadeira Velha.fbx", "arvore3.fbx", "MESA_da_COZINHA.fbx", "lampada-de-mesa.fbx".`,
      gabarito: `"Cadeira Velha.fbx" tem espaço e maiúsculas; correto: cadeira_velha.fbx. "arvore3.fbx" tem acento; correto: arvore3.fbx escrito sem acento, ou seja arvore3.fbx vira "arvore3.fbx" sem o acento no a. "MESA_da_COZINHA.fbx" tem maiúsculas misturadas; correto: mesa_da_cozinha.fbx. "lampada-de-mesa.fbx" tem acento e usa hífen; melhor usar underline e sem acento: lampada_de_mesa.fbx. O padrão recomendado é letras minúsculas, sem acentos, sem espaços, separando palavras com underline.`,
    },
    {
      titulo: `Posicionando o pivot`,
      tipo: `Prática no Maya`,
      tempo: `8 minutos`,
      guiaProfessor: `Acompanhe a tecla D combinada com X para o snap. Confira de aluno em aluno se o pivot ficou na base. Este é o ponto que mais gera dúvida.`,
      atividade: `No seu modelo aberto no Maya, mova o pivot para a base do objeto usando o atalho de edição de pivot e o snap. Depois explique em uma frase por que a base é uma boa posição para o pivot.`,
      gabarito: `Passos: selecionar o objeto, pressionar e segurar a tecla D para entrar no modo de edição do pivot, segurar também a tecla X para ativar o snap à grade, arrastar o pivot até a base do modelo e soltar as teclas. A base é uma boa posição porque, ao colocar o objeto na cena da Unreal, ele "assenta" no chão de forma natural e gira em torno de um ponto previsível, facilitando posicionar e rotacionar.`,
    },
    {
      titulo: `Exportando o FBX com as opções certas`,
      tipo: `Prática guiada de exportação`,
      tempo: `9 minutos`,
      guiaProfessor: `Conduza a janela de exportação passo a passo. Confira Up Axis em Z e Smoothing Groups marcado. Verifique se o aluno salvou na pasta correta e com o nome certo.`,
      atividade: `Exporte o seu modelo do Maya em FBX. Antes de clicar em exportar, faça Freeze Transformations, escolha o tipo FBX, marque Smoothing Groups, deixe o Up Axis em Z e salve com um nome sem espaços nem acentos. Descreva a ordem dos passos que você seguiu.`,
      gabarito: `Ordem correta: 1. Selecionar o objeto no Maya. 2. Ir em Modify e depois Freeze Transformations para travar escala e posição. 3. Conferir geometria e UVs. 4. Posicionar o pivot na base. 5. Renomear o objeto no Outliner, por exemplo cadeira_madeira. 6. Ir em File e depois Export Selection. 7. Em Files of type escolher FBX export. 8. Nas opções, marcar Smoothing Groups e definir Up Axis como Z. 9. Digitar o nome do arquivo sem espaços nem acentos, igual ao nome do objeto. 10. Clicar em Export Selection e confirmar a pasta de destino. O arquivo .fbx deve aparecer na pasta escolhida.`,
    },
    {
      titulo: `Revisão final com o Claude e diagnóstico de problemas`,
      tipo: `Investigação com assistente de IA`,
      tempo: `10 minutos`,
      guiaProfessor: `Estimule os alunos a descreverem o problema de forma completa ao Claude. O foco é desenvolver autonomia para diagnosticar. Peça que tragam a resposta do Claude e validem com a própria checklist.`,
      atividade: `Imagine que você importou o FBX na Unreal e o modelo apareceu deitado de lado e três vezes maior que o esperado. Use o Claude para descobrir as causas prováveis e o que ajustar no Maya antes de exportar de novo. Escreva a pergunta que você faria ao Claude e liste as causas e correções que descobriu.`,
      gabarito: `Exemplo de pergunta ao Claude: "Exportei um modelo do Maya em FBX e na Unreal ele ficou deitado de lado e três vezes maior. O que pode ter causado isso e como ajusto no Maya antes de exportar de novo?". Causas e correções esperadas: 1. Modelo deitado: o eixo para cima (Up Axis) saiu errado na exportação; corrigir definindo Up Axis como Z na janela de exportação do FBX, já que a Unreal usa Z para cima. 2. Modelo três vezes maior: a escala não foi congelada ou as unidades estão diferentes; corrigir fazendo Freeze Transformations no Maya e conferindo que as unidades estão em centímetros, ajustando o tamanho do modelo se necessário. Depois reexportar o FBX e reimportar na Unreal para validar.`,
    },
  ],
};
