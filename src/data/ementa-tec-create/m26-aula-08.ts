import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 8,
  titulo: "Jogo Tomando Forma: Playtest",
  semana: "Semana 4",
  duracao: "1 hora",
  objetivo: `Fechar a Etapa 2 do projeto realizando um playtest entre colegas, corrigindo bugs e ajustando cenário e scripts conforme o feedback, para apresentar o jogo em andamento.`,
  descricao: `Esta é a última aula do mês e ela amarra tudo o que a turma construiu até aqui: o cenário da Aula 2, os modelos 3D vindos do Maya (Aulas 3 e 4), os primeiros scripts em Lua (Aulas 5 e 6) e a junção de tudo na Aula 7. Hoje o aluno não vai começar nada novo: vai testar, consertar e mostrar. Esse momento se chama playtest, que é quando uma pessoa joga o jogo de outra para descobrir o que funciona e o que precisa melhorar.

O playtest é uma das partes mais importantes da criação de games profissionais. Nenhum estúdio lança um jogo sem testá-lo muitas vezes. A ideia é simples: quem fez o jogo já sabe onde clicar e como tudo funciona, então não enxerga os problemas. Um colega que nunca jogou vai esbarrar nos erros de verdade, vai se perder, vai cair de uma plataforma que não deveria existir. Por isso o feedback de um colega vale ouro: ele mostra o jogo pelos olhos de quem chega pela primeira vez.

Na prática, os alunos vão trocar de cadeira: cada um joga o protótipo do colega por alguns minutos, anota o que achou usando um roteiro simples (o que gostou, o que travou, o que confundiu) e devolve o feedback de forma gentil. Depois, cada autor volta ao próprio jogo e usa a janela Output do Roblox Studio para encontrar erros nos scripts, corrige o que der tempo, ajusta o cenário e melhora um detalhe. A aula termina com uma rodada de apresentações curtas, em que cada aluno mostra o jogo tomando forma e conta uma coisa que melhorou graças ao playtest.

O entregável do mês é o "Jogo tomando forma": um protótipo jogável, com cenário montado, modelos 3D no lugar e ao menos um script funcionando. Não precisa estar pronto nem perfeito. Precisa rodar, ser jogável do início ao fim de uma pequena parte e mostrar a identidade do projeto. O professor deve reforçar que errar e consertar faz parte e que um bug encontrado hoje é um problema a menos no futuro.`,
  materiais: [
    `Computadores com Roblox Studio instalado e os projetos de cada aluno salvos (um por aluno)`,
    `Projetor ou TV para o professor demonstrar a janela Output e conduzir as apresentações`,
    `Editor de código embutido do Roblox Studio (Script Editor) para consertar os scripts em Lua`,
    `Roteiro de playtest impresso ou em slide (campos: o que gostei, o que travou, o que me confundiu, uma sugestão)`,
    `Arquivo de exemplo com um bug proposital para o professor demonstrar como ler o erro na janela Output`,
    `Cronômetro ou timer na tela grande para controlar os tempos de teste e de troca`,
    `Quadro ou folha para anotar a lista de bugs e melhorias da turma`,
  ],
  conceitosChave: [
    `Playtest — momento em que outra pessoa joga o seu jogo para descobrir o que funciona e o que precisa melhorar.`,
    `Bug — um erro no jogo que faz algo funcionar errado ou parar de funcionar.`,
    `Feedback — comentário gentil e útil que um colega dá depois de jogar, dizendo o que gostou e o que pode melhorar.`,
    `Janela Output — painel do Roblox Studio onde aparecem as mensagens de erro e os textos do print, ajudando a achar bugs.`,
    `Protótipo — versão inicial e jogável do jogo, ainda não pronta, feita para testar ideias.`,
    `Refinamento — pequenos ajustes finais no cenário e nos scripts para deixar o jogo melhor.`,
    `Iteração — repetir o ciclo de testar, corrigir e testar de novo até o jogo ficar bom.`,
  ],
  treinamento: `## O que o professor precisa saber

Você não precisa dominar Lua para conduzir esta aula. O coração de hoje é organizar três coisas: o teste entre colegas, a leitura de erros e a apresentação. A ferramenta-chave é a janela Output do Roblox Studio. Ela fica no menu superior em View e depois Output. Quando um script tem erro, aparece uma linha vermelha nessa janela com o nome do script e o número da linha. Esse número é o tesouro: ele diz exatamente onde olhar. Antes da aula, abra um projeto, digite de propósito uma linha errada como print("ola" e rode, para ver a mensagem vermelha aparecer. Assim você reconhece o formato do erro na hora de ajudar.

Lembre também o botão Play (ou a tecla F5) para testar e o Stop (Shift+F5) para parar. Tenha em mãos o roteiro de playtest com quatro campos simples, porque ele dá foco ao colega que está testando.

## Passo a passo da aula (ritmo 10/15/25/10)

10 min, aquecimento e revisão. Pergunte: por que os estúdios testam tanto os jogos antes de lançar? Conduza até a ideia de que quem fez não enxerga os próprios erros. Mostre na tela grande a janela Output e diga que hoje ela será a melhor amiga da turma. Relembre que tudo das aulas anteriores já está no projeto e que hoje é dia de testar e melhorar.

15 min, conteúdo novo guiado. Abra um projeto com um bug proposital. Clique em Play. Mostre o erro vermelho na janela Output e leia em voz alta: nome do script e número da linha. Vá até a linha indicada e corrija. Ensine também o print como ferramenta de detetive. Digite no script uma linha de teste para conferir se o código chegou ali:

print("o script comecou")

Explique que, se esse texto aparecer na janela Output, é porque a parte de cima do script rodou; se não aparecer, o problema está antes. Mostre o roteiro de playtest e combine as regras: jogar com calma, anotar nos quatro campos e dar feedback gentil.

25 min, mão na massa. Faça o rodízio. Cada aluno senta no computador do colega e joga o protótipo por cerca de 5 minutos, anotando no roteiro. Toque o timer e peça a troca de volta. Agora cada autor lê o feedback recebido, abre a janela Output, encontra os erros e corrige um ou dois bugs. Em seguida ajusta o cenário (uma plataforma fora do lugar, uma cor) e melhora um detalhe do script. Circule pela sala ajudando a ler os erros vermelhos. Reforce: salvem com frequência usando Ctrl+S.

10 min, desafio e compartilhar. Cada aluno faz uma apresentação de 1 minuto: mostra o jogo rodando e conta uma coisa que melhorou graças ao playtest do colega. Encerre dizendo que a Etapa 2 de 5 está concluída e que o protótipo já tem forma.

## Como explicar de forma clara (linguagem para a idade)

Use a imagem do detetive. Diga: o erro deixou uma pista vermelha na janela Output, com o endereço (o número da linha); vamos seguir a pista. Para o playtest, diga: você é o testador secreto do jogo do colega, sua missão é achar o que trava sem estragar a brincadeira. Ensine a dar feedback no formato sanduíche: primeiro algo bom, depois o problema, depois uma sugestão. Por exemplo: gostei do cenário, mas caí num buraco aqui, talvez colocar uma parede ajude. Combine que ninguém ri do bug do outro, porque bug é normal e até os jogos famosos têm.

## Erros comuns e como ajudar

O erro mais comum é o aluno ignorar a janela Output e ficar adivinhando. Sempre o leve de volta a ela e leia juntos o número da linha. Outro problema é querer consertar tudo de uma vez; oriente a escolher só um ou dois bugs nesta hora. Muitos esquecem de salvar e perdem o ajuste: combine salvar a cada conserto com Ctrl+S. No feedback, alguns só dizem está ruim; ensine a ser específico, dizendo o que e onde. Por fim, se o jogo nem inicia, verifique se o aluno clicou em Stop antes de editar, pois testar e editar ao mesmo tempo confunde o Studio.`,
  exercicios: [
    {
      titulo: `Caça ao erro na janela Output`,
      tipo: `prática na ferramenta`,
      tempo: `8 minutos`,
      guiaProfessor: `Use o arquivo de exemplo com um bug proposital. Garanta que cada aluno abra a janela Output pelo menu View antes de clicar em Play. Leia com a turma o nome do script e o número da linha que aparecem em vermelho.`,
      atividade: `Abra o projeto de exemplo, abra a janela Output (menu View, depois Output) e clique em Play. Encontre a linha vermelha de erro, anote o número da linha que aparece e diga ao professor em qual linha está o problema.`,
      gabarito: `O aluno deve abrir a janela Output, rodar o jogo e localizar a mensagem vermelha. A resposta esperada é apontar o número exato da linha indicado na mensagem de erro (por exemplo, a linha citada após o nome do script). O acerto está em saber que a mensagem vermelha mostra o script e o número da linha onde está o bug, e não em adivinhar.`,
    },
    {
      titulo: `O print detetive`,
      tipo: `prática na ferramenta`,
      tempo: `10 minutos`,
      guiaProfessor: `Mostre que o print serve para conferir se o código chegou a um ponto. Peça que coloquem a linha de teste no começo do script e confiram se o texto aparece na janela Output ao rodar.`,
      atividade: `No seu script principal, escreva no começo uma linha que mostre uma mensagem na janela Output para você saber que o script começou a rodar. Rode o jogo e confira se a mensagem aparece.`,
      gabarito: `A solução é adicionar a linha abaixo no início do script:

print("o script comecou")

Ao clicar em Play, o texto o script comecou deve aparecer na janela Output. Se aparecer, a parte de cima do script rodou. Se não aparecer, o erro está antes dessa linha ou o script não foi acionado, e o aluno deve investigar a partir daí.`,
    },
    {
      titulo: `Jogando o jogo do colega`,
      tipo: `em dupla`,
      tempo: `12 minutos`,
      guiaProfessor: `Organize o rodízio com o timer. Entregue o roteiro de playtest com os quatro campos. Reforce o feedback gentil no formato sanduíche: algo bom, o problema, uma sugestão.`,
      atividade: `Sente no computador de um colega e jogue o protótipo dele por alguns minutos. Preencha o roteiro de playtest: o que gostei, o que travou, o que me confundiu e uma sugestão. Depois entregue o roteiro ao autor explicando seus comentários com gentileza.`,
      gabarito: `Não há resposta única, mas o roteiro deve estar preenchido nos quatro campos com observações específicas. Exemplo de bom feedback: gostei das cores do cenário; travei porque caí num buraco perto da ponte; me confundi sem saber para onde ir; sugestão: colocar uma seta ou parede. Feedback fraco a melhorar: está legal ou está ruim, sem dizer o que e onde. O professor valoriza comentários específicos e gentis.`,
    },
    {
      titulo: `Corrigindo um bug de verdade`,
      tipo: `desafio`,
      tempo: `12 minutos`,
      guiaProfessor: `Cada aluno escolhe um bug do feedback recebido. Leve-os a usar a janela Output para localizar erros de script. Lembre de testar com Play, parar com Stop antes de editar e salvar com Ctrl+S a cada conserto.`,
      atividade: `Escolha um bug que o colega encontrou no seu jogo. Use a janela Output e o feedback para descobrir a causa, conserte no cenário ou no script, teste de novo com Play e salve com Ctrl+S. Diga ao professor qual bug você corrigiu.`,
      gabarito: `O resultado esperado é o bug deixar de acontecer ao testar de novo. O caminho correto inclui ler a pista na janela Output (quando for erro de script) ou ajustar o cenário (quando for plataforma ou objeto fora do lugar), parar o teste com Stop antes de editar, rodar de novo com Play para confirmar e salvar com Ctrl+S. Exemplos válidos: tapar um buraco com uma plataforma, corrigir a linha errada apontada pelo erro vermelho, reposicionar um modelo que estava no ar.`,
    },
    {
      titulo: `Apresentando o jogo tomando forma`,
      tipo: `apresentação`,
      tempo: `12 minutos`,
      guiaProfessor: `Conduza apresentações de 1 minuto por aluno com o jogo rodando na tela. Peça que cada um cite uma melhoria feita graças ao playtest. Encerre marcando que a Etapa 2 de 5 do projeto está concluída.`,
      atividade: `Apresente seu jogo em andamento para a turma por cerca de 1 minuto. Mostre o jogo rodando, conte uma coisa que você melhorou graças ao feedback do colega e diga o que ainda quer fazer nas próximas etapas.`,
      gabarito: `A apresentação está completa quando o aluno mostra o protótipo rodando, cita pelo menos uma melhoria concreta feita após o playtest e indica um próximo passo. Exemplo válido: meu jogo agora tem uma parede que impede a queda, corrigi porque a colega caiu no buraco; depois quero adicionar pontos. O foco não é o jogo estar pronto, e sim demonstrar que o protótipo está jogável e que o feedback gerou uma melhoria real, fechando a Etapa 2 de 5.`,
    },
  ],
};
