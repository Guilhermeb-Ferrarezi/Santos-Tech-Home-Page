import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 3,
  titulo: "Do Maya ao Roblox: Preparando Assets",
  semana: "Semana 2",
  duracao: "1 hora",
  objetivo: `Aprender a exportar modelos 3D do Maya no formato correto (FBX/OBJ), verificar a escala e preparar os arquivos para importar no Roblox Studio pelo Asset Manager.`,
  descricao: `Nas aulas anteriores os alunos exploraram o Roblox Studio e começaram a construir o mundo do jogo. Agora chegou a hora de trazer os personagens e objetos 3D que eles criaram no Maya para dentro do cenário. Mas um modelo 3D não viaja de um programa para outro do jeito que ele está salvo: é preciso exportá-lo num formato que o Roblox entenda. Esta aula é uma ponte entre dois mundos, o do Maya e o do Roblox.

O formato mais usado para essa ponte é o FBX, que carrega a malha (a geometria do objeto), as texturas e até animações. Existe também o OBJ, mais simples, que guarda só a forma e as cores. Pense no FBX como uma mala completa e no OBJ como uma mochila leve. Nesta aula o foco é entender quando usar cada um e como salvar o arquivo certo.

Um detalhe que costuma assustar iniciantes é a escala. Um personagem que parecia perfeito no Maya pode chegar gigante ou minúsculo no Roblox, porque cada programa mede o mundo de um jeito. Por isso os alunos vão revisar seus modelos, conferir o tamanho e organizar os arquivos numa pasta antes de importar. Preparar bem o asset agora evita muita dor de cabeça depois.

Ao final, cada aluno terá pelo menos um modelo exportado em FBX ou OBJ, com a escala conferida, pronto para entrar no jogo na próxima aula. É uma vitória concreta: o trabalho do Maya finalmente vira parte do Roblox.`,
  materiais: [
    `Computadores com Roblox Studio instalado e com o Maya (ou os arquivos de modelo já salvos)`,
    `Projetor ou TV para o professor demonstrar a exportação passo a passo`,
    `Arquivos de exemplo: um personagem simples e um objeto (caixa, baú ou árvore) prontos no Maya`,
    `Uma pasta no computador chamada "assets-jogo" para guardar os arquivos exportados`,
    `Editor de código aberto (apenas para anotações e checklist do aluno, opcional)`,
    `Navegador aberto na documentação do Roblox sobre importação de modelos (referência rápida)`,
  ],
  conceitosChave: [
    `Asset — qualquer recurso do jogo, como um personagem, objeto, som ou textura, que pode ser importado e reutilizado.`,
    `FBX — formato de arquivo 3D completo que guarda a malha, as texturas e animações; é o mais recomendado para o Roblox.`,
    `OBJ — formato 3D mais simples que guarda só a forma e as cores, sem animação.`,
    `Exportar — salvar um modelo de um programa num formato que outro programa consiga abrir.`,
    `Escala — o tamanho do modelo em relação ao mundo do jogo; precisa ser conferida para o objeto não ficar gigante nem minúsculo.`,
    `Asset Manager — o painel do Roblox Studio onde você importa e organiza imagens, malhas e modelos do seu jogo.`,
    `Malha (mesh) — a geometria que forma a superfície do objeto 3D, feita de muitos triângulos.`,
  ],
  treinamento: `## O que o professor precisa saber

Você não precisa ser especialista em Maya. O segredo desta aula é entender o caminho: um modelo nasce no Maya, é exportado como arquivo FBX ou OBJ, e depois é importado no Roblox pelo Asset Manager. Sua função é guiar esse trajeto com calma. Tenha um modelo de exemplo já aberto no Maya antes da aula começar e teste a exportação uma vez sozinho, para conhecer onde ficam os botões.

No Maya, o comando de exportar fica em File, opção Export Selection (exportar o que está selecionado) ou Export All (exportar tudo). No Roblox Studio, o painel de importação é o Asset Manager, que fica no menu View. Decore esses dois caminhos: eles são o coração da aula.

## Passo a passo da aula (ritmo 10/15/25/10)

Aquecimento (10 min): Pergunte à turma: "O que vocês construíram no Maya?" Deixe cada aluno dizer em uma frase qual personagem ou objeto fez. Mostre no projetor um modelo de exemplo no Maya e diga: "Hoje vamos tirar isto daqui e colocar dentro do nosso jogo no Roblox."

Conteúdo novo guiado (15 min): Explique a diferença entre FBX e OBJ usando a imagem da mala e da mochila. Depois demonstre a exportação no projetor, passo a passo:
1. No Maya, clique no modelo para selecioná-lo.
2. Vá em File, depois Export Selection.
3. Em "Files of type" escolha FBX export.
4. Dê um nome sem espaços nem acentos, por exemplo: heroi_v1.
5. Salve dentro da pasta assets-jogo.

Em seguida mostre o lado do Roblox. Abra o Roblox Studio, vá em View e clique em Asset Manager. Mostre o botão de importar (o ícone de seta para cima) e explique: "É aqui que o arquivo do Maya vai entrar, na próxima aula. Hoje só preparamos o arquivo certo."

Fale também da escala: "Antes de exportar, olhe o tamanho do seu personagem. No Maya, um humano costuma ter cerca de 1,8 de altura. Anote esse número, porque no Roblox vamos conferir se ele chegou do tamanho certo."

Mão na massa (25 min): Cada aluno abre seu próprio modelo no Maya e repete os passos. Circule pela sala. O objetivo concreto é: cada aluno salva pelo menos um arquivo FBX (ou OBJ) na pasta assets-jogo, com nome sem acentos. Quem terminar rápido exporta um segundo objeto. Peça que anotem num papel ou no editor a altura do modelo no Maya, para conferir depois.

Desafio e compartilhar (10 min): Desafio: "Exporte o mesmo modelo também em OBJ e compare o tamanho dos dois arquivos no explorador de arquivos." Depois, cada aluno mostra o nome do arquivo que salvou e diz se escolheu FBX ou OBJ e por quê.

## Como explicar de forma clara (linguagem para a idade)

Use comparações do dia a dia. Diga que exportar é como salvar uma foto em outro formato para mandar pelo celular: a imagem é a mesma, mas o "embrulho" muda. Diga que o FBX é a mala de viagem completa (leva roupa, sapato e animação) e o OBJ é a mochila leve (leva só o essencial).

Para a escala, use o exemplo do brinquedo: "Imagine montar um boneco gigante na casa de bonecas pequena. Não cabe. A escala serve para tudo ficar do tamanho certo dentro do jogo."

Reforce a regra dos nomes: arquivos do jogo nunca devem ter acento ou espaço, porque alguns programas se confundem. Em vez de "herói final", use heroi_final.

## Erros comuns e como ajudar

O aluno exporta o arquivo errado: ele clicou em Export All quando queria só um objeto. Mostre Export Selection e lembre de selecionar antes. O nome com acento ou espaço: peça para renomear para algo como objeto_v1. O aluno não acha a pasta: combine que todos salvem em assets-jogo na Área de Trabalho. O modelo "some" ao selecionar: provavelmente nada estava selecionado; mostre como clicar no objeto na viewport. Por fim, se o Maya travar, peça paciência e que salve o projeto antes de exportar de novo.`,
  exercicios: [
    {
      titulo: `FBX ou OBJ? Ligando os pontos`,
      tipo: `Quiz oral / escrito`,
      tempo: `5 minutos`,
      guiaProfessor: `Leia cada situação em voz alta e peça que os alunos respondam qual formato é melhor. Reforce que FBX leva animação e OBJ é mais leve. Aceite respostas justificadas mesmo que diferentes do gabarito, desde que a lógica esteja certa.`,
      atividade: `Para cada caso, diga qual formato usar (FBX ou OBJ): (a) um personagem que tem uma animação de andar; (b) uma caixa simples sem movimento; (c) um modelo com várias texturas e movimento de braço.`,
      gabarito: `(a) FBX, porque guarda a animação de andar. (b) OBJ, porque é simples e não tem movimento, então a mochila leve basta. (c) FBX, porque tem texturas e animação, e o FBX leva tudo junto.`,
    },
    {
      titulo: `Nomes que não quebram`,
      tipo: `Atividade prática curta`,
      tempo: `5 minutos`,
      guiaProfessor: `Explique de novo a regra: sem acento e sem espaço. Mostre que pode usar o underline (_) para separar palavras. Verifique se cada aluno corrigiu os três nomes corretamente.`,
      atividade: `Reescreva estes nomes de arquivo deixando-os válidos para o jogo (sem acento e sem espaço): "Herói Final", "árvore grande", "Baú do Tesouro".`,
      gabarito: `"Herói Final" vira heroi_final. "árvore grande" vira arvore_grande. "Baú do Tesouro" vira bau_do_tesouro. Aceite variações como heroi-final ou heroiFinal, desde que não tenham acento nem espaço.`,
    },
    {
      titulo: `Exportando seu primeiro modelo`,
      tipo: `Mão na massa`,
      tempo: `10 minutos`,
      guiaProfessor: `Acompanhe a turma passo a passo. O ponto crítico é selecionar o objeto antes de usar Export Selection. Confira que o arquivo foi salvo na pasta assets-jogo com nome sem acento. Comemore quando o arquivo aparecer.`,
      atividade: `Abra seu modelo no Maya, selecione o objeto, exporte como FBX com um nome válido e salve na pasta assets-jogo. Confira que o arquivo apareceu na pasta.`,
      gabarito: `Passos corretos: 1) clicar no modelo para selecionar; 2) File, depois Export Selection; 3) em Files of type escolher FBX export; 4) digitar nome sem acento, por exemplo personagem_v1; 5) salvar em assets-jogo. Resultado esperado: o arquivo personagem_v1.fbx visível na pasta.`,
    },
    {
      titulo: `Conferindo a escala`,
      tipo: `Investigação`,
      tempo: `8 minutos`,
      guiaProfessor: `Mostre onde ler a altura do modelo no Maya (pelo eixo Y ou pela ferramenta de medida). Explique que anotar agora ajuda a conferir no Roblox na próxima aula. Não exija precisão perfeita; o objetivo é criar o hábito de checar.`,
      atividade: `Descubra a altura aproximada do seu personagem no Maya e anote o número. Compare com um colega: o personagem de vocês têm tamanhos parecidos? Escreva por que conferir a escala é importante antes de importar.`,
      gabarito: `O aluno deve registrar um número de altura, por exemplo cerca de 1,8 para um humano. Justificativa esperada: conferir a escala evita que o modelo chegue gigante ou minúsculo no Roblox, porque cada programa mede o mundo de um jeito; se a escala estiver errada, o objeto não combina com o resto do cenário.`,
    },
    {
      titulo: `Checklist do asset pronto e o desafio do OBJ`,
      tipo: `Desafio + organização`,
      tempo: `7 minutos`,
      guiaProfessor: `Use este exercício como fechamento. Peça que cada aluno preencha o checklist e tente o desafio extra de exportar o mesmo modelo em OBJ. Para quem terminar, peça que compare o tamanho dos dois arquivos no explorador de arquivos e diga qual é menor.`,
      atividade: `Preencha o checklist do seu asset: 1) o arquivo foi exportado? 2) o nome está sem acento e sem espaço? 3) está salvo na pasta assets-jogo? 4) você anotou a altura? Desafio: exporte o mesmo modelo também em OBJ e compare qual arquivo é menor.`,
      gabarito: `Checklist completo deve ter as quatro respostas como "sim". Exemplo: 1) sim, personagem_v1.fbx; 2) sim, sem acento nem espaço; 3) sim, em assets-jogo; 4) sim, altura cerca de 1,8. Desafio: ao exportar em OBJ, normalmente o arquivo OBJ é menor que o FBX, porque guarda só a forma e as cores, sem animação. Para exportar em OBJ, repita os passos da exportação mas escolha OBJexport em Files of type.`,
    },
  ],
};
