import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 5,
  titulo: "Otimização: Polígonos e LODs",
  semana: "Semana 3",
  duracao: "1 hora",
  objetivo: `Reduzir a malha pesada de um asset do render mantendo a silhueta para que ele rode bem em tempo real no Unity.`,
  descricao: `Um modelo feito para render bonito pode ter centenas de milhares de polígonos. Isso fica lindo numa imagem parada, mas trava em um jogo, que precisa desenhar a cena 60 vezes por segundo. Nesta aula o aluno aprende a diferença entre um modelo de alta resolução (high-poly) e um modelo leve (low-poly), e por que o jogo sempre prefere o leve. A ideia central é simples: o que importa em tempo real é a silhueta e a impressão visual, não a quantidade de triângulos escondidos.

O aluno vai aprender três ferramentas de otimização no Blender. Primeiro, a contagem de polígonos, que mostra quantos triângulos a cena tem (vamos ligar as estatísticas na tela). Segundo, a retopologia, que é refazer a malha de forma mais limpa e econômica; nesta aula usamos o modificador Decimate, a forma mais rápida de reduzir polígonos sem refazer tudo à mão. Terceiro, os níveis de detalhe, ou LODs (Level of Detail), que são várias versões do mesmo objeto com mais ou menos polígonos: a versão pesada aparece quando o objeto está perto da câmera, e a leve aparece quando está longe.

Como este é o Ano 4 e o mês foca em mais 3D no Blender, o aluno já modelou e renderizou nas aulas anteriores. Agora ele pega aquele cenário ou item pesado e o prepara para virar um asset de jogo de verdade. O entregável do mês é uma coleção de assets 3D, e a otimização é o passo que separa um modelo bonito de um modelo utilizável no Unity.

O aluno pode usar o Claude como assistente para tirar dúvidas, por exemplo perguntando qual contagem de polígonos é razoável para um item de cenário, ou pedindo para o Claude explicar a diferença entre triângulos e faces. O professor deve incentivar perguntas específicas e sempre conferir a resposta dentro do Blender.`,
  materiais: [
    `Computadores com Blender instalado (versão 4.x), um por aluno`,
    `Projetor ou TV para o professor demonstrar a tela do Blender`,
    `Arquivo de exemplo high-poly: um item de cenário pesado já modelado nas aulas anteriores (por exemplo um barril, uma pedra ou um baú)`,
    `Pasta compartilhada com o arquivo de backup, caso algum aluno perca o modelo original`,
    `Acesso ao Claude como assistente para dúvidas durante a prática`,
    `Caderno ou bloco de notas para anotar a contagem de polígonos antes e depois`,
  ],
  conceitosChave: [
    `Polígono — face plana que forma a superfície do modelo; o jogo desenha tudo com triângulos.`,
    `High-poly — modelo de alta resolução, com muitos polígonos, ótimo para render mas pesado para jogo.`,
    `Low-poly — modelo leve, com poucos polígonos, feito para rodar bem em tempo real.`,
    `Silhueta — o contorno do objeto visto de fora; é o que mais importa preservar ao reduzir polígonos.`,
    `Retopologia — refazer a malha do modelo de forma mais limpa e econômica, mantendo a forma.`,
    `Decimate — modificador do Blender que reduz a quantidade de polígonos automaticamente.`,
    `LOD (Level of Detail) — versões do mesmo objeto com mais ou menos detalhe, trocadas conforme a distância da câmera.`,
  ],
  treinamento: `## O que o professor precisa saber

Você não precisa ser especialista em Blender. O segredo desta aula é uma ideia: jogo em tempo real precisa de modelos leves. Um render pode ter um milhão de polígonos porque o computador tem segundos para calcular cada imagem. Um jogo tem só alguns milissegundos por quadro, então usamos poucos polígonos e enganamos o olho com a silhueta e a textura. Os três conceitos que você vai ensinar são: contagem de polígonos (quantos triângulos tem a cena), retopologia (refazer a malha de forma econômica, aqui via modificador Decimate) e LODs (versões com mais ou menos detalhe conforme a distância). Antes da aula, abra o arquivo de exemplo, ligue as estatísticas e teste o Decimate uma vez para ganhar confiança.

## Passo a passo da aula (ritmo 10/15/25/10)

Aquecimento e revisão (10 min): Abra o item pesado que os alunos modelaram. Ligue a contagem de polígonos: clique no menu suspenso no canto superior direito da viewport (o ícone com setas, chamado Viewport Overlays), e marque a opção Statistics. Agora aparece o número de Faces e Triangles na tela. Pergunte aos alunos: este número é grande ou pequeno para um jogo? Anote o valor no quadro.

Conteúdo novo guiado (15 min): No projetor, selecione o objeto. Vá no painel de modificadores (o ícone de chave inglesa azul, na coluna de propriedades à direita). Clique em Add Modifier, depois Generate, depois Decimate. No campo Ratio, troque o valor de 1.0 para 0.3. Mostre como a contagem de Triangles cai na hora e como a silhueta continua quase igual. Explique: Ratio 0.3 significa manter trinta por cento dos polígonos. Mostre também o que acontece com Ratio muito baixo, como 0.05: a silhueta quebra. Conclusão: reduzir é bom, mas exagerar estraga a forma.

Mão na massa (25 min): Cada aluno aplica o Decimate no próprio item. Metas: começar anotando a contagem original; achar o menor Ratio que ainda mantém a silhueta boa; anotar a nova contagem. Quando estiver bom, aplicar o modificador (Ctrl+A com o mouse sobre o painel do modificador, ou no menu suspenso do modificador clicar em Apply). Depois, criar um LOD bem simples: duplicar o objeto com Shift+D e Enter, renomear a cópia para algo como Barril_LOD1, e aplicar nela um Decimate ainda mais forte (Ratio 0.1) para ser a versão de longe. Assim cada aluno termina com duas versões do mesmo asset.

Desafio e compartilhar (10 min): Desafio: descobrir o Ratio mínimo do próprio modelo sem quebrar a silhueta e gravar a porcentagem de redução. Cada aluno mostra a contagem antes e depois no projetor e diz quanto economizou. Comemore quem conseguiu maior redução mantendo a forma bonita.

## Como explicar de forma clara (linguagem para a idade)

Use a imagem de longe e de perto. Diga: quando o personagem está colado na câmera, você vê cada detalhe, então vale gastar polígonos. Quando ele está lá no fundo do mapa, do tamanho de uma formiga, ninguém percebe os detalhes, então usamos a versão leve. Isso é o LOD. Compare polígonos com peças de Lego: com poucas peças grandes você monta a forma rápido; com muitas peças minúsculas fica detalhado, mas pesado de carregar. A silhueta é a sombra do objeto na parede: se a sombra continua reconhecível, o jogador nem percebe que tiramos polígonos. Reforce a regra de ouro: o jogo prefere o leve que parece bom.

## Erros comuns e como ajudar

O aluno baixa o Ratio demais e o modelo vira uma bolha: peça para subir o Ratio aos poucos até a silhueta voltar. O aluno esquece de aplicar o modificador e acha que nada mudou: lembre que o Decimate só vira de verdade depois do Apply. O aluno aplica o Decimate no objeto errado: confirme que o objeto certo está selecionado, com a borda laranja. As estatísticas não aparecem: confira se a opção Statistics está marcada nos Viewport Overlays. O aluno apaga o original ao duplicar: ensine a sempre salvar uma cópia antes e a renomear cada versão com clareza.`,
  exercicios: [
    {
      titulo: `Ligando a contagem de polígonos`,
      tipo: `Prática guiada`,
      tempo: `7 minutos`,
      guiaProfessor: `Verifique se cada aluno conseguiu ativar as estatísticas e leu o número de triângulos. Passe nas mesas conferindo se o painel está visível.`,
      atividade: `Abra o item pesado da aula anterior. Ative as estatísticas da viewport e anote no caderno quantos triângulos o modelo tem agora, antes de qualquer otimização.`,
      gabarito: `Caminho correto: canto superior direito da viewport, menu Viewport Overlays (ícone de dois círculos sobrepostos), marcar a caixa Statistics. O número de Triangles aparece no canto superior esquerdo da tela. O aluno deve registrar esse valor, por exemplo: 48000 triângulos. Não há resposta numérica única, mas o aluno precisa anotar o valor real do modelo dele.`,
    },
    {
      titulo: `Reduzindo com o Decimate`,
      tipo: `Prática guiada`,
      tempo: `10 minutos`,
      guiaProfessor: `Mostre que a contagem de triângulos cai em tempo real conforme o Ratio diminui. Garanta que cada aluno encontre um Ratio que mantém a silhueta.`,
      atividade: `Adicione o modificador Decimate ao seu item. Teste os valores de Ratio 0.5, 0.3 e 0.1, observando a silhueta a cada mudança. Escolha o menor valor que ainda mantém a forma reconhecível.`,
      gabarito: `Passos: selecionar o objeto, abrir o painel de modificadores (ícone de chave inglesa), Add Modifier, Generate, Decimate. No campo Ratio, testar 0.5, 0.3 e 0.1. Resposta esperada: na maioria dos itens de cenário, um Ratio entre 0.3 e 0.2 mantém a silhueta. Em 0.1 a forma costuma começar a quebrar. O aluno deve justificar a escolha dizendo que escolheu o menor Ratio em que a silhueta ainda parece igual ao original.`,
    },
    {
      titulo: `Aplicando o modificador e comparando`,
      tipo: `Prática individual`,
      tempo: `8 minutos`,
      guiaProfessor: `Confirme que o aluno entendeu a diferença entre ter o modificador ligado e tê-lo aplicado de verdade. Peça a contagem antes e depois.`,
      atividade: `Aplique o modificador Decimate escolhido. Depois anote a nova contagem de triângulos e calcule quantos por cento você economizou em relação ao número original.`,
      gabarito: `Para aplicar: com o mouse sobre o painel do modificador, pressionar Ctrl+A, ou clicar no menu suspenso do modificador e escolher Apply. Cálculo da economia: economia em porcento igual a (original menos novo) dividido por original, vezes cem. Exemplo: original 48000, novo 14400, economia igual a (48000 menos 14400) dividido por 48000 vezes 100, que dá 70 por cento. O aluno deve mostrar a conta e a porcentagem.`,
    },
    {
      titulo: `Criando um segundo LOD`,
      tipo: `Desafio aplicado`,
      tempo: `12 minutos`,
      guiaProfessor: `Garanta que o aluno duplica o objeto sem apagar o original e renomeia as versões com clareza. Reforce a ideia de versão de perto e versão de longe.`,
      atividade: `Duplique o seu asset já otimizado, renomeie a cópia para terminar com LOD1 e aplique nela um Decimate mais forte (Ratio 0.1). Você deve terminar com duas versões: a de perto e a de longe.`,
      gabarito: `Passos: selecionar o objeto, Shift+D e Enter para duplicar no mesmo lugar, renomear a cópia no Outliner com duplo clique para algo como Barril_LOD1. Na cópia, adicionar outro Decimate com Ratio 0.1 e aplicar. Resultado esperado: duas malhas, por exemplo Barril_LOD0 com 14400 triângulos (versão de perto) e Barril_LOD1 com cerca de 1400 triângulos (versão de longe), ambas com a silhueta ainda reconhecível. O nome de cada versão deve indicar o nível.`,
    },
    {
      titulo: `Justificando a otimização para o jogo`,
      tipo: `Reflexão escrita`,
      tempo: `8 minutos`,
      guiaProfessor: `Aceite respostas com as próprias palavras, desde que cubram silhueta, custo por quadro e troca por distância. Peça para o aluno conferir uma dúvida com o Claude e validar no Blender.`,
      atividade: `Escreva em três a cinco frases por que o seu jogo no Unity deve usar a versão otimizada e os LODs em vez do modelo pesado do render. Cite a silhueta e a distância da câmera.`,
      gabarito: `Resposta esperada deve conter as ideias: o jogo desenha a cena muitas vezes por segundo, então cada polígono custa tempo; o modelo leve mantém a mesma silhueta, então o jogador não percebe a diferença; quando o objeto está longe da câmera usamos o LOD ainda mais leve, porque os detalhes não aparecem de longe; assim o jogo roda mais rápido e suave. Exemplo aceitável: O jogo precisa desenhar tudo 60 vezes por segundo, então uso a versão leve para não travar. A silhueta continua igual, então ninguém percebe. Quando o objeto está longe, troco pelo LOD1, que tem ainda menos polígonos. Isso deixa o jogo rápido sem perder a aparência.`,
    },
  ],
};
