import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 8,
  titulo: "Site bonito e completo: entrega final",
  semana: "Semana 4",
  duracao: "1 hora",
  objetivo: `Consolidar o entregável do mês: cada aluno finaliza seu site completo e responsivo, passa por um checklist de qualidade, testa no celular e no computador e apresenta o resultado para a turma.`,
  descricao: `Esta é a aula de fechamento do mês. Durante quatro semanas o aluno aprendeu o Box Model, organizou os blocos com Flexbox, deixou o layout responsivo com media queries, montou componentes reutilizáveis, construiu as seções da página e poliu o visual. Hoje tudo isso vira uma única entrega: um site bonito, completo e que funciona bem em qualquer tela. A palavra do dia é finalizar, e não começar coisas novas. O aluno não vai inventar novas seções, vai fechar com qualidade o que já existe.

O coração da aula é o checklist de qualidade. Em vez de olhar o site no impulso e achar que está pronto, o aluno passa por uma lista item a item, como um piloto antes de decolar. Ele confere se o título da aba faz sentido, se todas as imagens carregam, se os links funcionam, se o texto não estoura na largura do celular, se as cores seguem a mesma paleta e se o rodapé está no lugar. Esse hábito de revisar com método é uma das marcas de quem programa de verdade, e vale para sites, jogos e qualquer projeto.

Depois do checklist vem o teste em telas diferentes. O aluno aprende a abrir as Ferramentas do Desenvolvedor do navegador e a ligar o modo de dispositivo, simulando um celular ao lado do computador. Assim ele enxerga, lado a lado, se o site se adapta bem. Pequenos ajustes finais costumam aparecer aqui: um texto grande demais no celular, uma imagem que vaza, um espaçamento desigual. Corrigir esses detalhes é o que transforma um site "quase pronto" em um site entregável.

A aula termina com a apresentação para a turma. Cada aluno mostra o site no projetor, conta uma decisão de design que tomou e recebe um retorno gentil dos colegas. Apresentar é parte do trabalho de tecnologia: não basta construir, é preciso saber mostrar e explicar o que foi feito. Ao final, cada aluno sai com o entregável do mês concluído, testado e apresentado, fechando o ciclo de HTML e CSS intermediário com orgulho.`,
  materiais: [
    `Computadores com editor de código (VS Code) e navegador (Chrome ou Edge) instalados, um por aluno`,
    `Projetor ligado para o professor demonstrar e para as apresentações finais da turma`,
    `Site de cada aluno salvo em sua pasta pessoal, com os arquivos index.html e style.css das aulas anteriores`,
    `Folha impressa do checklist de qualidade do site (título da aba, imagens, links, responsividade, paleta, rodapé)`,
    `Arquivo de exemplo: um site finalizado pelo professor, para servir de referência de "pronto"`,
    `Celular ou tablet opcional para testar o site de verdade, além do modo de dispositivo do navegador`,
  ],
  conceitosChave: [
    `Entregável — versão final e completa do projeto, pronta para ser mostrada e avaliada.`,
    `Checklist de qualidade — lista de itens que você confere um a um para garantir que nada foi esquecido.`,
    `Ferramentas do Desenvolvedor — painel do navegador, aberto com a tecla F12, que ajuda a inspecionar e testar a página.`,
    `Modo de dispositivo — recurso do navegador que simula a tela de um celular para testar a responsividade.`,
    `Responsividade — capacidade do site de se adaptar bem a telas de tamanhos diferentes, do celular ao computador.`,
    `Título da aba — texto definido na tag title, que aparece na guia do navegador e identifica a página.`,
    `Revisão — etapa final de conferir, corrigir pequenos erros e polir antes de considerar o trabalho concluído.`,
  ],
  treinamento: `## O que o professor precisa saber

Hoje não se ensina conteúdo novo de CSS: a missão é finalizar, revisar e apresentar. Você vai guiar cada aluno a fechar o site com qualidade usando um checklist e a testar em celular e computador. Antes da aula, abra seu site de exemplo já pronto e deixe o checklist impresso na mesa de cada aluno. Se você é iniciante, decore três atalhos do navegador: a tecla F12 abre as Ferramentas do Desenvolvedor; dentro delas existe um ícone de celular e computador que liga o modo de dispositivo; e a tecla F5 recarrega a página depois de salvar o arquivo. No editor, lembre que salvar é Ctrl mais S, e que o site só atualiza no navegador depois de salvar e recarregar.

## Passo a passo da aula (ritmo 10/15/25/10)

Aquecimento (10 min): projete seu site de exemplo e pergunte à turma o que faz ele parecer "pronto de verdade". Conduza às respostas do checklist: título da aba, imagens carregando, links funcionando, texto que não vaza, paleta única. Mostre rapidamente o site de um mês atrás e o de hoje para o aluno sentir o quanto evoluiu.

Conteúdo novo guiado (15 min): demonstre o checklist no projetor, item a item, no seu site. Primeiro, confira o título da aba no HTML. Mostre a linha exata dentro do head e leia em voz alta:

<title>Meu Site Incrível</title>

Depois abra as Ferramentas do Desenvolvedor com F12, clique no ícone de modo de dispositivo e escolha um celular na lista do topo. Mostre o site encolhendo para a largura do celular e volte para o computador. Por fim, mostre um ajuste fino comum: um texto grande demais no celular. Abra o style.css e demonstre como reduzir o tamanho dentro de uma media query já existente, por exemplo:

@media (max-width: 600px) {
  h1 {
    font-size: 24px;
  }
}

Salve com Ctrl mais S e recarregue com F5 para a turma ver a mudança.

Mão na massa (25 min): cada aluno passa pelo checklist no próprio site, marcando cada item. Em seguida, abre o F12, liga o modo de dispositivo, testa no celular e no computador e corrige os pequenos problemas que aparecerem. Circule pela sala conferindo título da aba, imagens, links e responsividade. Reforce o ciclo: salvar, recarregar, conferir.

Desafio e compartilhar (10 min): cada aluno mostra o site no projetor, conta uma decisão de design que tomou e ouve um elogio e uma sugestão da turma. Feche celebrando o entregável do mês concluído.

## Como explicar de forma clara (linguagem para a idade)

Compare o checklist com a revisão de um foguete antes de decolar: ninguém aperta o botão sem conferir tudo. Diga que testar no celular é "se colocar no lugar do amigo que vai abrir o site no telefone". Explique o modo de dispositivo como uma lupa mágica que mostra como o site fica em telas pequenas, sem precisar de um celular de verdade. Para a apresentação, reforce que mostrar o trabalho é tão importante quanto fazer, e que todo mundo erra e melhora, por isso a turma dá sugestões gentis.

## Erros comuns e como ajudar

O erro mais comum é o aluno achar que está pronto sem usar o checklist; insista em conferir item a item, com o dedo na folha. Outro clássico é editar o arquivo e esquecer de salvar ou recarregar, e então achar que "não funcionou"; ensine o trio salvar, F5, conferir. Muitos esquecem de mudar o título da aba e deixam algo como Documento; mostre a tag title no head. Alguns descobrem imagens que não carregam por causa do nome errado do arquivo; confira maiúsculas, minúsculas e a pasta. No modo de dispositivo, há quem entre em pânico com o texto vazando; mostre que basta ajustar dentro da media query que já existe. Por fim, nas apresentações, oriente a turma a começar sempre por um elogio antes de qualquer sugestão.`,
  exercicios: [
    {
      titulo: `Conferindo o título da aba`,
      tipo: `Prática na ferramenta`,
      tempo: `6 minutos`,
      guiaProfessor: `Mostre onde fica a tag title dentro do head no index.html. Confira que cada aluno trocou o texto por um nome real do projeto e que a aba do navegador mudou depois de salvar e recarregar.`,
      atividade: `Abra seu index.html, encontre a tag title dentro do head e troque o texto por um nome que represente o seu site. Salve com Ctrl mais S e recarregue a página com F5 para ver a aba mudar.`,
      gabarito: `O aluno localiza e edita a linha dentro do head. Exemplo de solução:

<head>
  <meta charset="UTF-8">
  <title>Meu Portfólio de Games</title>
</head>

A guia do navegador passa a mostrar o novo título após salvar e recarregar.`,
    },
    {
      titulo: `Caça aos links e imagens`,
      tipo: `Desafio`,
      tempo: `7 minutos`,
      guiaProfessor: `Peça que o aluno clique em cada link do site e olhe cada imagem. Ajude a corrigir caminhos errados conferindo o nome exato do arquivo, com maiúsculas e minúsculas, e a pasta correta.`,
      atividade: `Percorra todo o seu site clicando em cada link e olhando cada imagem. Anote o que não funciona e corrija: links que não levam a lugar nenhum e imagens que não aparecem.`,
      gabarito: `Todos os links abrem o destino certo e todas as imagens carregam. Um conserto típico é corrigir o caminho da imagem, por exemplo trocar src="foto.png" por src="imagens/foto.png" quando o arquivo está dentro da pasta imagens, respeitando maiúsculas e minúsculas do nome.`,
    },
    {
      titulo: `Testando no celular`,
      tipo: `Prática na ferramenta`,
      tempo: `8 minutos`,
      guiaProfessor: `Mostre como abrir as Ferramentas do Desenvolvedor com F12 e ligar o modo de dispositivo. Confira que cada aluno comparou a tela de celular com a de computador e identificou ao menos um ponto a melhorar.`,
      atividade: `Abra as Ferramentas do Desenvolvedor com F12, ligue o modo de dispositivo e escolha um celular na lista. Compare o site no celular e no computador e anote um detalhe que precisa de ajuste.`,
      gabarito: `O aluno demonstra o site nos dois tamanhos de tela e descreve um problema concreto, como um título grande demais ou uma imagem que vaza no celular, identificando que o ajuste deve ser feito dentro de uma media query no style.css.`,
    },
    {
      titulo: `Dupla revisora`,
      tipo: `Em dupla`,
      tempo: `9 minutos`,
      guiaProfessor: `Forme duplas e peça que troquem de lugar. Cada um usa o checklist impresso para revisar o site do colega. Reforce que o retorno deve ser específico e começar por um ponto positivo.`,
      atividade: `Abra o site do seu colega e use o checklist de qualidade para apontar dois acertos e um ponto a melhorar. Depois, ouça o retorno sobre o seu site e anote o que vai corrigir.`,
      gabarito: `Cada dupla produz observações concretas ligadas ao checklist, por exemplo: título da aba correto e paleta única como acertos, e um texto que vaza no celular como ponto a corrigir. O aluno registra ao menos uma correção a aplicar.`,
    },
    {
      titulo: `Apresentação final do site`,
      tipo: `Projeto curto`,
      tempo: `12 minutos`,
      guiaProfessor: `Acompanhe cada aluno na rodada de apresentação no projetor. Garanta que todos passem pelo checklist completo antes de apresentar e que contem uma decisão de design. Conduza a turma a dar um elogio e uma sugestão por apresentação.`,
      atividade: `Finalize o checklist completo do seu site, faça o último teste no celular e no computador e apresente o resultado para a turma no projetor, contando uma decisão de design que você tomou.`,
      gabarito: `O site final passa em todos os itens do checklist: título da aba definido, imagens carregando, links funcionando, layout responsivo no celular e no computador, paleta única e rodapé no lugar. O aluno apresenta o entregável do mês concluído e explica ao menos uma escolha de design, como a cor principal ou a organização das seções.`,
    },
  ],
};
