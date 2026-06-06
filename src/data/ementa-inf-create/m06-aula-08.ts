import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 8,
  titulo: "Projeto final: formulário com respostas no Planilhas",
  semana: "Semana 4",
  duracao: "1 hora",
  objetivo: `Cada aluno finaliza o seu formulário do Google Forms, coleta respostas reais dos colegas e confirma que tudo chega organizado na planilha vinculada do Google Planilhas, fechando o entregável do mês.`,
  descricao: `Esta é a última aula do mês de Google Forms e o grande dia do projeto. Durante quatro semanas cada aluno aprendeu a criar o primeiro formulário, deixá-lo bonito, conhecer os tipos de pergunta, tornar perguntas obrigatórias e validar respostas, compartilhar para receber respostas, coletar e organizar o que chega e, por fim, ligar o Forms ao Google Planilhas. Hoje todo esse caminho vira um produto pronto: um formulário publicado, respondido de verdade pela turma e com as respostas aparecendo em tempo real numa planilha.

O foco da aula é CONSOLIDAR O ENTREGÁVEL, não criar coisas novas. O aluno revisa o próprio formulário com olhar de dono: confere o título, a descrição, as imagens e cores, testa se as perguntas obrigatórias estão marcadas e se as validações funcionam (por exemplo, um campo de e-mail que só aceita um e-mail válido). Depois ele abre a aba "Respostas", clica no ícone verde do Planilhas e garante que existe uma planilha vinculada. Com tudo pronto, a turma troca os links e cada um responde ao formulário dos colegas, gerando respostas reais para encher a planilha.

A grande sacada para adolescentes de 10 a 15 anos é a sensação de ter construído algo que funciona no mundo real, igual aos formulários que eles preenchem em sites, inscrições e pesquisas. Quando o aluno responde ao formulário de um colega e, segundos depois, vê a própria resposta aparecer como uma nova linha na planilha do dono, a ficha cai: ele entende que dado coletado é dado que pode ser organizado, contado e analisado. Esse é o elo entre o Forms (coleta) e o Planilhas (organização), que abre caminho para os próximos meses do curso.

O papel do professor hoje é de revisor e maestro da coleta. Você ajuda cada aluno a checar a lista de qualidade do formulário, garante que a planilha vinculada existe e está recebendo dados, organiza a rodada em que a turma responde aos formulários uns dos outros e conduz a apresentação final, em que cada aluno mostra a sua planilha cheia de respostas no projetor. O clima deve ser de entrega e orgulho: ninguém é avaliado pelo formulário mais bonito, e sim celebrado por ter um formulário funcionando com respostas reais organizadas no Planilhas.`,
  materiais: [
    `Computadores ligados, com o navegador aberto e cada aluno logado na sua Conta Google, com o formulário do mês já localizado em forms.google.com (um por aluno).`,
    `Projetor ou TV grande conectado ao computador do professor, testado antes da aula, para a apresentação final das planilhas de respostas.`,
    `Conexão com a internet estável, pois o Google Forms e o Google Planilhas funcionam online e salvam automaticamente na nuvem.`,
    `Um formulário modelo do professor, simples e já publicado, com a planilha de respostas vinculada, para demonstrar a revisão e a coleta na frente da turma.`,
    `Uma lista de verificação (checklist) impressa ou na tela com os itens de qualidade do formulário: título, descrição, perguntas obrigatórias, validação e planilha vinculada.`,
    `Lista com o nome de todos os alunos e a ordem de apresentação, para ninguém ficar de fora na hora de mostrar a planilha.`,
    `Os links dos formulários dos alunos reunidos num documento ou planilha compartilhada, para a turma trocar e responder aos formulários uns dos outros.`,
  ],
  conceitosChave: [
    `Formulário publicado — formulário pronto e compartilhado por um link, que outras pessoas podem abrir e responder de verdade.`,
    `Planilha vinculada — a planilha do Google Planilhas que recebe automaticamente cada resposta do formulário, criando uma nova linha por envio.`,
    `Aba Respostas — a seção do Forms onde aparecem todas as respostas recebidas, com resumo, por pergunta e individuais, além do botão para abrir a planilha.`,
    `Resposta obrigatória — pergunta marcada com o botão "Obrigatória" que impede o envio do formulário enquanto não for respondida.`,
    `Validação de resposta — regra que verifica se a resposta tem o formato certo (por exemplo, um e-mail válido ou só números) antes de aceitar o envio.`,
    `Linha de dados — cada resposta enviada vira uma linha na planilha, com a data e hora (carimbo) na primeira coluna e cada pergunta numa coluna.`,
    `Coleta real — receber respostas de pessoas de verdade (os colegas), e não respostas de teste, para encher a planilha com dados autênticos.`,
  ],
  treinamento: `## O que o professor precisa saber

Hoje você não ensina nenhum recurso novo: o mês inteiro de Google Forms já passou. A aula é de FINALIZAR, COLETAR e APRESENTAR. Seu trabalho é guiar cada aluno por uma revisão de qualidade, garantir que a planilha vinculada existe e recebe dados, organizar a rodada em que a turma responde aos formulários uns dos outros e conduzir a apresentação final. O segredo do dia é o clima de entrega: cada aluno termina com um formulário publicado e uma planilha cheia de respostas reais.

Tecnicamente, você precisa dominar três passos. Primeiro, REVISAR o formulário: abra o formulário em forms.google.com, confira o título no topo, clique no ícone de paleta (Personalizar tema) para checar cor e cabeçalho, clique em cada pergunta e veja se o botão "Obrigatória" (no canto inferior direito da pergunta) está ligado quando deve estar, e confira a validação nos três pontinhos da pergunta, em "Validação de resposta". Segundo, GARANTIR A PLANILHA: clique na aba "Respostas" (no topo, ao lado de "Perguntas"), clique no ícone verde do Planilhas (escrito "Vincular ao Planilhas" ou "Ver no Planilhas"); se ainda não houver planilha, escolha "Criar nova planilha" e confirme. Terceiro, TESTAR A COLETA: clique no botão "Enviar" (canto superior direito), aba do ícone de corrente (link), marque "Encurtar URL", copie o link e abra-o numa nova aba para responder como um aluno faria; ao enviar, volte à planilha e veja a nova linha aparecer. Treine isso antes da aula com o seu formulário modelo.

## Passo a passo da aula (ritmo 10/15/25/10)

1. Aquecimento e revisão (10 min). Reúna a turma e relembre o mês: "O que o nosso formulário precisa ter para ficar pronto?". Deixe falarem sobre título, perguntas obrigatórias, validação e planilha. Projete a lista de verificação e explique o combinado de hoje: revisar, coletar respostas dos colegas e apresentar a planilha.

2. Conteúdo guiado / demonstração (15 min). Abra o seu formulário modelo no projetor. Passe pela lista de verificação ao vivo: confira título e tema, mostre uma pergunta obrigatória e uma com validação. Clique na aba "Respostas" e no ícone verde do Planilhas para abrir a planilha vinculada. Volte ao formulário, clique em "Enviar", copie o link, abra numa nova aba, responda e mostre a turma a nova linha surgindo na planilha em tempo real.

3. Mão na massa / finalizar e coletar (25 min). Cada aluno revisa o próprio formulário com a lista de verificação, conserta o que faltar e confirma a planilha vinculada na aba "Respostas". Depois, abra o documento com os links da turma: cada aluno responde aos formulários de pelo menos três colegas. Circule pela sala ajudando a marcar obrigatórias, ajustar validações e confirmar que as respostas chegam na planilha.

4. Desafio e compartilhar (10 min). Chame os alunos pela lista. Cada um abre a sua planilha de respostas no projetor e mostra à turma: quantas respostas recebeu, o carimbo de data/hora na primeira coluna e uma resposta que achou interessante. Puxe os aplausos e feche o mês celebrando o entregável: formulário publicado com respostas organizadas no Planilhas.

## Como explicar de forma clara (linguagem para a idade)

Use a comparação com o mundo real: "Sabe quando você se inscreve num campeonato de games ou responde a uma pesquisa num site? É exatamente isso que vocês construíram." Chame o formulário de "máquina de coletar respostas" e a planilha de "caderno automático" que anota tudo sozinho. Diga que cada vez que alguém clica em "Enviar", nasce uma linha nova na planilha, como uma mensagem nova chegando no chat. Para a revisão, use a ideia de "modo dono": "Agora você não é quem cria, é quem confere se está tudo certinho antes de mostrar para o mundo." Comemore alto cada planilha que enche de respostas.

## Erros comuns e como ajudar

- Achar que a planilha não funciona porque está vazia: lembre que ela só recebe respostas enviadas depois do vínculo; peça para um colega responder e mostre a linha aparecer.
- Esquecer de clicar no ícone verde do Planilhas: vá juntos na aba "Respostas" e clique em "Vincular ao Planilhas" ou "Criar nova planilha".
- Responder ao próprio formulário em vez do dos colegas: oriente a usar o documento com os links da turma e responder a pelo menos três formulários de outras pessoas.
- Perguntas que deveriam ser obrigatórias e não estão: clique na pergunta e ligue o botão "Obrigatória" no canto inferior direito.
- Confundir a aba "Perguntas" com a aba "Respostas": mostre no topo que são duas abas diferentes e que a planilha mora dentro de "Respostas".`,
  exercicios: [
    {
      titulo: `Combinando o dia da entrega`,
      tipo: `Roda de conversa`,
      tempo: `8 min`,
      guiaProfessor: `Reúna a turma longe das telas e abra o dia com entusiasmo: hoje é o grande dia da entrega do mês. Projete a lista de verificação e leia item por item, pedindo que os alunos expliquem com as próprias palavras o que é cada um (título, perguntas obrigatórias, validação, planilha vinculada). Combine as regras da coleta: cada um vai responder com seriedade aos formulários dos colegas, sem respostas de brincadeira, para que as planilhas fiquem com dados reais e úteis.`,
      atividade: `1. Sente-se de frente para a tela com a lista de verificação projetada.
2. Diga um item que o seu formulário já tem (um título, uma pergunta obrigatória, uma imagem).
3. Explique com suas palavras o que é uma "planilha vinculada".
4. Combine com a turma: vou responder de verdade aos formulários dos colegas.`,
      gabarito: `Acertou quem participa da roda e demonstra entender pelo menos um item da lista de qualidade. Exemplos de respostas certas: "Planilha vinculada é onde as respostas aparecem sozinhas", "Pergunta obrigatória não deixa enviar sem responder", "Meu formulário já tem título e cores". Repetir o combinado de responder com seriedade também conta. Qualquer participação consciente é sucesso; o objetivo é deixar a turma alinhada sobre o que torna o formulário pronto para entregar.`,
    },
    {
      titulo: `Revisando o formulário com o modo dono`,
      tipo: `Prática no computador`,
      tempo: `12 min`,
      guiaProfessor: `Peça que cada aluno abra o seu formulário em forms.google.com e passe pela lista de verificação como se fosse o dono conferindo antes de publicar. Oriente a checar: título e descrição no topo; tema e cores no ícone de paleta (Personalizar tema); cada pergunta que deveria ser obrigatória com o botão "Obrigatória" ligado no canto inferior direito; e as validações nos três pontinhos da pergunta, em "Validação de resposta". Circule pela sala ajudando a ligar obrigatórias e a ajustar validações, uma pergunta de cada vez.`,
      atividade: `1. Abra o seu formulário em forms.google.com.
2. Confira o título e a descrição no topo e ajuste se precisar.
3. Clique em cada pergunta importante e ligue o botão "Obrigatória" (canto inferior direito).
4. Nos três pontinhos da pergunta, confira a "Validação de resposta" onde fizer sentido (por exemplo, e-mail ou número).`,
      gabarito: `Acertou quem revisa o próprio formulário e corrige pelo menos um item da lista. Exemplo de sucesso: o aluno percebe que a pergunta de nome não estava obrigatória, liga o botão "Obrigatória" e confere que o título está claro. Conferir que existe uma validação de e-mail ou número onde faz sentido é o ponto alto. Mesmo corrigir um único item já é sucesso; o objetivo é que o aluno saia com um formulário revisado e pronto para receber respostas reais.`,
    },
    {
      titulo: `Garantindo a planilha vinculada`,
      tipo: `Prática guiada no computador`,
      tempo: `10 min`,
      guiaProfessor: `Conduza a turma, passo a passo, até a aba "Respostas" (no topo, ao lado de "Perguntas"). Peça que todos cliquem no ícone verde do Planilhas; quem ainda não tiver planilha escolhe "Criar nova planilha" e confirma, quem já tiver clica em "Ver no Planilhas". Mostre que a planilha abre numa nova aba, com a primeira coluna de "Carimbo de data/hora" e uma coluna por pergunta. Para provar que está viva, peça que cada aluno responda ao próprio formulário uma vez (resposta de teste) e veja a linha aparecer; depois oriente a apagar essa linha de teste se quiser deixar só as respostas reais.`,
      atividade: `1. Abra o seu formulário e clique na aba "Respostas" no topo.
2. Clique no ícone verde do Planilhas; se aparecer, escolha "Criar nova planilha" e confirme.
3. Veja a planilha abrir, com "Carimbo de data/hora" na primeira coluna.
4. Faça uma resposta de teste no seu formulário e confira a nova linha surgindo na planilha.`,
      gabarito: `Acertou quem chega à planilha vinculada e confirma que ela recebe respostas. Exemplo de sucesso: o aluno clica na aba "Respostas", abre a planilha pelo ícone verde, envia uma resposta de teste e vê a linha com a data e hora aparecer. Reconhecer que a primeira coluna é o carimbo de data/hora e que cada pergunta vira uma coluna conta como domínio do conceito. Ter a planilha criada e recebendo ao menos uma linha já é sucesso; é a parte central do entregável do mês.`,
    },
    {
      titulo: `Coleta real: respondendo aos colegas`,
      tipo: `Desafio em dupla`,
      tempo: `18 min`,
      guiaProfessor: `Este é o ponto alto da coleta. Abra o documento ou a planilha com os links de todos os formulários da turma e projete-o. Organize em duplas ou trios para garantir que cada formulário receba respostas. Cada aluno deve responder, de verdade, aos formulários de pelo menos três colegas, clicando no link, preenchendo com cuidado e enviando. Peça que, ao terminar uma rodada, o dono do formulário abra a sua planilha e confira as novas linhas chegando. Circule incentivando respostas sérias e ajudando quem tiver link com problema ou formulário fechado para respostas.`,
      atividade: `1. Abra o documento com os links dos formulários da turma.
2. Clique no link de um colega, responda com seriedade e clique em "Enviar".
3. Repita com pelo menos mais dois colegas (no mínimo três formulários no total).
4. Abra a sua própria planilha e confira as respostas dos colegas aparecendo em novas linhas.`,
      gabarito: `Acertou quem responde a pelo menos três formulários de colegas e confirma respostas chegando na própria planilha. Exemplo de sucesso: o aluno responde aos formulários de três colegas, volta à sua planilha e vê três ou mais linhas novas, cada uma com data, hora e as respostas preenchidas. Mesmo quem conseguir responder a dois formulários e ver as linhas chegando demonstra o aprendizado. O objetivo é encher as planilhas com dados reais da turma, fechando o ciclo de coletar e organizar.`,
    },
    {
      titulo: `Apresentando a minha planilha de respostas`,
      tipo: `Projeto curto e apresentação`,
      tempo: `12 min`,
      guiaProfessor: `Feche o mês com a apresentação final. Chame os alunos um a um pela lista. Cada um abre a sua planilha de respostas no projetor e conta à turma: quantas respostas recebeu, mostra o carimbo de data/hora na primeira coluna, aponta como cada pergunta virou uma coluna e destaca uma resposta que achou interessante ou engraçada. Ajude quem travar com perguntas simples ("Quantas linhas você tem?", "Qual coluna é a do nome?"). Puxe aplausos a cada apresentação e nunca compare formulários; celebre que cada um tem um entregável funcionando.`,
      atividade: `1. Espere o professor chamar o seu nome e abra a sua planilha de respostas no projetor.
2. Diga quantas respostas você recebeu (quantas linhas tem a planilha).
3. Mostre a coluna do carimbo de data/hora e a coluna de uma pergunta.
4. Destaque uma resposta que você achou interessante e receba os aplausos da turma.`,
      gabarito: `Acertou todo aluno que apresenta a sua planilha cheia de respostas e explica pelo menos um elemento dela. Exemplo de sucesso: o aluno abre a planilha, diz "recebi cinco respostas", aponta a coluna do carimbo de data/hora e lê uma resposta que gostou. Saber que cada linha é uma resposta e cada coluna é uma pergunta conta como domínio do entregável. Independentemente do número de respostas, apresentar a planilha vinculada funcionando é sucesso; é a entrega final do mês de Google Forms.`,
    },
  ],
};
