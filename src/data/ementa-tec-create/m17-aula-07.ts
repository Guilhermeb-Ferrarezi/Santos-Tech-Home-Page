import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 7,
  titulo: "Montando o vídeo profissional final",
  semana: "Semana 4",
  duracao: "1 hora",
  objetivo: `Reunir cortes, efeitos, transições, textos e legendas em um único projeto do CapCut, integrando música, voz e imagens de IA com a arte do jogo para montar a versão final do vídeo profissional.`,
  descricao: `Esta é a aula da grande montagem. Durante o mês, os alunos aprenderam habilidades separadas: cortar com ritmo, usar efeitos e transições com propósito, animar textos na tela e gerar legendas automáticas. Agora chega o momento de juntar tudo em um único projeto coerente. O objetivo não é aprender uma técnica nova, e sim costurar as peças que já existem para que o vídeo conte uma história clara sobre o jogo de cada aluno, com começo, meio e fim.

A palavra-chave da aula é identidade. Um vídeo profissional não é só um amontoado de clipes bonitos: ele tem uma linha visual e sonora que se repete e dá unidade. Por isso, os alunos vão reaproveitar dentro do CapCut os materiais de IA que produziram nos meses anteriores: a música feita no Suno, a voz gerada no ElevenLabs, as imagens do DALL-E e do Nano Banana, e capturas da arte e da interface do próprio jogo do Roblox. Quando todos esses elementos compartilham a mesma paleta, a mesma fonte e o mesmo clima sonoro, o vídeo ganha cara de produto acabado.

Tecnicamente, o trabalho gira em torno da linha do tempo (timeline) do CapCut e da organização em camadas: a faixa de vídeo principal embaixo, as imagens e recortes em cima, os textos em outra camada e o áudio nas faixas de som. A aula treina o olhar de montador: o aluno revê o roteiro mental do vídeo, decide a ordem das cenas, ajusta a duração de cada corte ao ritmo da música e garante que a voz e as legendas estejam sincronizadas.

Vale lembrar o ritmo do mês. Esta é a Aula 7 de 8: aqui montamos a versão final, mas ainda não exportamos com todos os cuidados de qualidade nem fazemos a estreia. A exportação caprichada e a apresentação ficam para a Aula 8. Hoje o entregável é o projeto montado de ponta a ponta, pronto para os ajustes finais.`,
  materiais: [
    `Computadores com o CapCut instalado e atualizado, um por aluno`,
    `Conta CapCut ativa em cada máquina (com login feito antes da aula)`,
    `Projetor ou TV para o professor demonstrar a montagem na tela grande`,
    `Arquivos de IA dos alunos: música do Suno, voz do ElevenLabs, imagens do DALL-E e do Nano Banana`,
    `Capturas de tela e gravações da arte e da interface (UI) do jogo no Roblox Studio`,
    `Um projeto CapCut de exemplo já montado pelo professor, para mostrar o resultado esperado`,
    `Fones de ouvido para os alunos conferirem o áudio sem atrapalhar a turma`,
  ],
  conceitosChave: [
    `Linha do tempo (timeline) — a área embaixo da tela do CapCut onde os clipes, textos e áudios ficam organizados em sequência e em camadas.`,
    `Camada (track) — cada faixa empilhada na linha do tempo; o que está na faixa de cima aparece na frente do que está embaixo.`,
    `Montagem final — o ato de reunir todas as cenas, efeitos e áudios já prontos em um único projeto coerente, do início ao fim.`,
    `Identidade visual e sonora — o conjunto de cores, fontes e clima de som que se repete no vídeo e dá a ele uma cara única.`,
    `Sincronização — alinhar o que se vê com o que se ouve, fazendo cortes, falas e legendas baterem com a batida da música.`,
    `Reaproveitamento — usar de novo, dentro do CapCut, materiais já criados em outras ferramentas, como a música, a voz e a arte de IA.`,
    `Coerência — a sensação de que todas as partes do vídeo conversam entre si e contam uma única história sobre o jogo.`,
  ],
  treinamento: `## O que o professor precisa saber

Você não precisa ser especialista em CapCut para dar esta aula. O segredo é que os alunos já dominam as peças: nas aulas anteriores eles cortaram, aplicaram efeitos, animaram textos e geraram legendas. Hoje o seu papel é o de diretor de montagem: ajudar cada um a decidir a ordem das cenas e a juntar tudo num projeto só. Antes da aula, abra o CapCut e crie um projeto novo de exemplo, jogando na linha do tempo dois ou três clipes, uma imagem de IA, um texto e uma faixa de música. Assim você mostra o resultado esperado em segundos.

Tenha clara a ideia de camadas: na linha do tempo, a faixa de baixo é o vídeo principal; acima dela ficam imagens e recortes; mais acima, os textos; e nas faixas de áudio ficam música e voz. O que está em cima aparece na frente. Esse é o conceito central da aula.

## Passo a passo da aula (ritmo 10/15/25/10)

Aquecimento (10 min): peça que cada aluno abra o CapCut e relembre, em voz alta, as quatro habilidades do mês: cortes com ritmo, efeitos e transições, textos animados e legendas. Pergunte: qual a história do seu vídeo, em uma frase? Isso prepara a montagem.

Conteúdo novo guiado (15 min): no projetor, abra um projeto novo. Clique em Novo projeto e depois em Importar para trazer os arquivos: clipes do jogo, imagens do DALL-E e do Nano Banana, música do Suno e voz do ElevenLabs. Arraste primeiro o vídeo principal para a faixa de baixo da linha do tempo. Mostre como empilhar: arraste uma imagem para cima do vídeo e ela cria uma nova camada. Adicione um texto pelo botão Texto, na barra superior, e mostre que ele vira mais uma camada. Leve a música para a faixa de áudio. Explique que a ordem da esquerda para a direita é a ordem em que as coisas aparecem, e que camadas de cima ficam na frente.

Mão na massa (25 min): cada aluno monta o próprio vídeo final. Roteiro sugerido: 1) colocar os clipes do jogo na ordem da história; 2) adicionar a música do Suno e ajustar o início; 3) encaixar a voz do ElevenLabs onde houver narração; 4) inserir imagens de IA e a arte da UI nas transições; 5) aplicar transições entre cenas usando o ícone de transição (o quadradinho entre dois clipes); 6) ativar as legendas automáticas em Legendas, Legendas automáticas; 7) conferir cores e fontes para manter a mesma identidade. Circule pela sala ajudando quem travar. Use o atalho de espaço para dar play e barra invertida para cortar (ou o ícone de tesoura).

Desafio e compartilhar (10 min): cada aluno toca 20 segundos do seu vídeo para um colega e recebe uma sugestão. Em seguida, salvam o projeto. Lembre que a exportação caprichada fica para a próxima aula.

## Como explicar de forma clara (linguagem para a idade)

Use a imagem de um sanduíche: a linha do tempo é o prato, o vídeo é o pão de baixo, as imagens e textos são os recheios empilhados, e o áudio é o tempero por baixo de tudo. Diga: o que está mais em cima na pilha, aparece na frente. Para a identidade, fale assim: se a sua arte é roxa e futurista, a fonte e as cores do vídeo também precisam ser. Reforce que ninguém vai criar nada novo hoje, só juntar o que já está pronto, como montar um quebra-cabeça.

## Erros comuns e como ajudar

O erro mais comum é a bagunça de camadas: o aluno joga tudo na mesma faixa e os elementos somem. Mostre como arrastar cada item para a sua própria camada. Outro erro é o áudio fora de sincronia: a voz não bate com a imagem; ajude a arrastar a faixa de voz alguns quadros para a esquerda ou direita. Há também quem encha o vídeo de transições diferentes em cada corte, quebrando a identidade; oriente a escolher uma ou duas transições e repeti-las. Por fim, muitos esquecem de salvar; lembre de salvar a cada poucos minutos.`,
  exercicios: [
    {
      titulo: `Importando e empilhando as camadas`,
      tipo: `prática na ferramenta`,
      tempo: `8 minutos`,
      guiaProfessor: `Garanta que cada aluno crie um projeto novo e traga ao menos um clipe, uma imagem de IA e uma faixa de música. Verifique se cada elemento foi para a sua própria camada.`,
      atividade: `Crie um projeto novo no CapCut. Importe um clipe do seu jogo, uma imagem do DALL-E ou Nano Banana e a música do Suno. Coloque o vídeo na faixa de baixo, a imagem na camada de cima e a música na faixa de áudio.`,
      gabarito: `Projeto com três camadas: vídeo na faixa principal embaixo, imagem na faixa superior aparecendo na frente do vídeo, e música na faixa de áudio. Ao dar play, vê-se o clipe com a imagem por cima e ouve-se a música.`,
    },
    {
      titulo: `Ordenando a história do vídeo`,
      tipo: `desafio`,
      tempo: `8 minutos`,
      guiaProfessor: `Peça que cada aluno descreva em uma frase a história do vídeo antes de arrastar os clipes. Confira se a ordem da esquerda para a direita conta um começo, meio e fim.`,
      atividade: `Organize seus clipes na linha do tempo na ordem que conte a história do seu jogo: abertura, demonstração da jogabilidade e encerramento. Ajuste a duração de cada corte para acompanhar a batida da música.`,
      gabarito: `Linha do tempo com clipes em sequência lógica (abertura, meio, fim), com cortes ajustados ao ritmo da música. O vídeo tem progressão clara e nenhum clipe solto fora de contexto.`,
    },
    {
      titulo: `Sincronizando voz e legendas em dupla`,
      tipo: `em dupla`,
      tempo: `10 minutos`,
      guiaProfessor: `Forme duplas. Um aluno arrasta a faixa de voz enquanto o colega assiste e avisa se a fala bate com a imagem. Depois trocam. Ative as legendas automáticas em Legendas, Legendas automáticas.`,
      atividade: `Em dupla, encaixe a voz do ElevenLabs no momento certo do vídeo de um dos projetos e gere as legendas automáticas. Conferiram juntos se a voz, a imagem e a legenda aparecem ao mesmo tempo. Depois, repitam no outro projeto.`,
      gabarito: `Faixa de voz alinhada à cena correspondente, legendas automáticas geradas e revisadas pela dupla, sem atraso perceptível entre o que se ouve, o que se vê e o texto na tela.`,
    },
    {
      titulo: `Roda de conversa: o que dá identidade`,
      tipo: `roda de conversa`,
      tempo: `7 minutos`,
      guiaProfessor: `Conduza uma roda rápida. Mostre dois trechos de exemplo, um com cores e fontes coerentes e outro bagunçado. Pergunte qual parece profissional e por quê. Anote as respostas no quadro.`,
      atividade: `Em roda, observem os vídeos dos colegas e apontem três elementos que dão identidade a um vídeo: cores, fontes e clima da música. Discutam o que mudariam para deixar cada vídeo mais coerente.`,
      gabarito: `A turma identifica que cores repetidas, a mesma fonte e um clima sonoro constante dão identidade. Cada aluno sai com pelo menos uma melhoria a aplicar no próprio vídeo para aumentar a coerência.`,
    },
    {
      titulo: `Projeto curto: versão final montada`,
      tipo: `projeto curto`,
      tempo: `12 minutos`,
      guiaProfessor: `Acompanhe cada aluno até ter um projeto completo de ponta a ponta. Não cobre exportação hoje, apenas a montagem salva. Use uma lista de conferência: cortes, transições, textos, legendas, música, voz, imagens e identidade.`,
      atividade: `Monte a versão final do seu vídeo profissional reunindo tudo: cortes no ritmo, transições com propósito, textos animados, legendas, música do Suno, voz do ElevenLabs e imagens de IA com a arte do jogo. Salve o projeto ao terminar.`,
      gabarito: `Projeto CapCut completo, do início ao fim, com todos os elementos integrados e identidade visual e sonora consistente. O vídeo está montado e salvo, pronto para os ajustes finais e a exportação na Aula 8.`,
    },
  ],
};
