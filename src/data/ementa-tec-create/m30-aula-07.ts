import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 7,
  titulo: "Reta final: ajustando sua página",
  semana: "Semana 4",
  duracao: "1 hora",
  objetivo: `Revisar a página inteira em HTML e CSS, corrigir erros de código e aplicar os ajustes finais de design para deixar o arquivo pronto para ser publicado.`,
  descricao: `Esta é a penúltima aula do mês de HTML e CSS, e funciona como uma grande revisão. Durante as semanas anteriores, cada aluno construiu uma página pessoal: começou entendendo como a web funciona, depois escreveu as primeiras tags de texto, adicionou imagens e links, deu cor e estilo com CSS e organizou o layout com espaços. Hoje nada de conteúdo totalmente novo: o objetivo é olhar a página inteira com calma, encontrar o que está quebrado e deixar tudo bonito e funcionando.

Revisar código é uma habilidade tão importante quanto escrever código. Profissionais passam boa parte do tempo lendo o que já fizeram, procurando uma tag que não foi fechada, um ponto e vírgula esquecido no CSS ou uma cor que ficou estranha. Nesta aula o aluno aprende a ser o próprio revisor: abre o arquivo no editor, abre a página no navegador ao lado e compara o que vê com o que queria. Quando algo está diferente do esperado, ele investiga a causa em vez de adivinhar.

A aula também prepara o terreno para a Aula 8, quando o site vai para o ar de verdade. Por isso, além de corrigir erros, os alunos fazem ajustes finais de design (alinhar, dar respiro, escolher cores que combinam) e deixam o arquivo organizado e salvo com o nome correto. Entender o que significa "publicar um site" é parte do encerramento: hoje a página fica pronta na máquina; na próxima aula ela ganha um endereço na internet.

O clima é de orgulho e capricho. Cada aluno termina a hora com uma página revisada, sem erros visíveis, com um visual caprichado e salva corretamente, sentindo que o trabalho do mês está quase no ar.`,
  materiais: [
    `Computadores com um editor de código instalado (VS Code) e a página HTML e CSS de cada aluno já começada nas aulas anteriores`,
    `Navegador de internet (Chrome ou Edge) para abrir e conferir a página ao vivo`,
    `Projetor ou TV para o professor mostrar a página de exemplo e os erros mais comuns`,
    `Arquivo de exemplo do professor: uma página "index.html" com alguns erros propositais para treinar a correção`,
    `Lista de verificação impressa (checklist) com os itens a conferir antes de publicar`,
    `Pasta organizada no computador com os arquivos do projeto (index.html e estilo.css)`,
  ],
  conceitosChave: [
    `Revisão de código — ato de ler com atenção o próprio código procurando erros e pontos a melhorar antes de entregar.`,
    `Tag fechada — toda tag de abertura precisa de uma de fechamento com barra; esquecer de fechar quebra o visual da página.`,
    `Erro de sintaxe — quando o código está escrito de um jeito que o navegador não entende, como faltar aspas, chaves ou ponto e vírgula.`,
    `Checklist — lista de itens a conferir um por um, para não esquecer nenhum detalhe importante antes de publicar.`,
    `Ferramenta de inspecionar — recurso do navegador (tecla F12) que mostra o código por trás da página e ajuda a achar problemas.`,
    `Publicar — colocar o site no ar, em um endereço da internet, para que outras pessoas possam acessar de qualquer lugar.`,
    `Salvar com o nome certo — a página principal de um site costuma se chamar index.html, porque é o arquivo que o navegador abre primeiro.`,
  ],
  treinamento: `## O que o professor precisa saber

Você não precisa ser especialista em HTML e CSS para dar esta aula. O seu papel hoje é o de um revisor que confere itens de uma lista, não o de alguém que escreve código novo. Tudo o que aparece aqui já foi visto pelos alunos nas semanas anteriores; vamos apenas olhar de novo e arrumar.

Antes da aula, abra o seu arquivo de exemplo "index.html" no editor e no navegador ao mesmo tempo, lado a lado. No VS Code, abra a pasta do projeto (menu File, depois Open Folder). Para ver a página, clique com o botão direito no arquivo "index.html" e escolha "Reveal in File Explorer", depois dê dois cliques nele para abrir no navegador. Sempre que mudar o código, salve com Ctrl+S e atualize o navegador com a tecla F5. Esse ciclo "salvar e atualizar" é o coração da aula.

Decore três erros campeões, porque eles aparecem o tempo todo: tag não fechada, aspas faltando e ponto e vírgula esquecido no CSS. Saber reconhecer esses três já resolve a maioria dos problemas da turma.

## Passo a passo da aula (ritmo 10/15/25/10)

10 min - Aquecimento e revisão: Mostre no projetor a sua página de exemplo com erros propositais. Pergunte: "O que está estranho aqui?" Deixe os alunos apontarem. Liste no quadro os tipos de erro que eles encontrarem. Isso ativa o olhar de revisor.

15 min - Conteúdo novo guiado: Corrija os erros do exemplo ao vivo, falando em voz alta o que faz. Mostre uma tag que faltou fechar e conserte. O correto é abrir e fechar, assim:
"<h1>Meu site</h1>"
Mostre um link sem aspas e conserte para:
"<a href=\\"sobre.html\\">Sobre</a>"
Mostre uma regra de CSS sem ponto e vírgula e conserte:
"h1 { color: blue; }"
Explique que cada regra termina com ponto e vírgula e que as chaves precisam abrir e fechar. Apresente a tecla F12 do navegador como a lupa que ajuda a achar erros.

25 min - Mão na massa: Cada aluno abre a própria página no editor e no navegador, lado a lado, e usa a checklist para revisar item por item. Eles procuram tags não fechadas, aspas e ponto e vírgula faltando, e conferem se imagens e links funcionam. Depois aplicam ajustes finais de design: alinhar o texto, dar respiro com espaços e revisar as cores. Circule pela sala ajudando a localizar a causa de cada problema, sempre pedindo que salvem com Ctrl+S e atualizem com F5.

10 min - Desafio e compartilhar: Desafie cada aluno a salvar a página principal com o nome "index.html" e a deixar a pasta do projeto organizada, pronta para publicar. Peça que dois voluntários mostrem a página revisada no projetor e contem um erro que encontraram e corrigiram.

## Como explicar de forma clara (linguagem para a idade)

Use a imagem do detetive: "Hoje vocês são detetives do próprio código, procurando pistas do que está quebrado." Compare uma tag não fechada com uma porta que ficou aberta: "Se você abre, precisa fechar, senão a casa toda fica bagunçada." Explique a checklist como a lista do mercado: "A gente confere item por item para não esquecer nada." Para a tecla F12, diga: "É a lupa de detetive que mostra o que está por trás da página." E lembre sempre do ciclo mágico: "Mudou o código? Salva com Ctrl+S e atualiza com F5 para ver."

## Erros comuns e como ajudar

O erro mais comum é o aluno mudar o código e achar que não funcionou, quando na verdade esqueceu de salvar ou de atualizar o navegador; pergunte sempre "salvou e atualizou?". Outro clássico é a tag de fechamento sem a barra; mostre a diferença e peça que confiram. No CSS, o esquecimento do ponto e vírgula faz a regra seguinte parar de funcionar; ensine a olhar a regra de cima quando a de baixo não pega. Alguns alunos apagam código por acidente; ensine o Ctrl+Z para desfazer. Por fim, há quem queira refazer tudo do zero por causa de um errinho; acalme e mostre que corrigir um detalhe é mais rápido e mais inteligente do que recomeçar.`,
  exercicios: [
    {
      titulo: `Caça ao erro na página de exemplo`,
      tipo: `revisão guiada`,
      tempo: `8 min`,
      guiaProfessor: `Use o arquivo de exemplo com erros propositais no projetor. Deixe os alunos apontarem o que está errado antes de você corrigir. Confirme cada achado em voz alta.`,
      atividade: `Olhe a página de exemplo no projetor e aponte tudo o que parece errado: tag que não fechou, link sem aspas ou cor estranha. Diga onde está cada problema.`,
      gabarito: `O aluno acerta ao identificar pelo menos dois erros reais, como uma tag de título sem fechamento e um atributo href sem aspas. Correção esperada do título: "<h1>Meu site</h1>". Correção esperada do link: "<a href=\\"sobre.html\\">Sobre</a>".`,
    },
    {
      titulo: `Fechar todas as tags`,
      tipo: `prática na ferramenta`,
      tempo: `9 min`,
      guiaProfessor: `Peça que percorram a própria página procurando tags de abertura sem o par de fechamento. Reforce que toda tag aberta precisa ser fechada com barra.`,
      atividade: `Na sua página, procure tags que você abriu mas não fechou. Conserte cada uma colocando a tag de fechamento com a barra. Salve com Ctrl+S e atualize o navegador com F5.`,
      gabarito: `Está correto quando cada elemento tem abertura e fechamento. Exemplos certos: "<p>Olá, esse é meu site.</p>" e "<ul><li>Item um</li><li>Item dois</li></ul>". Depois de salvar e atualizar, o texto deve aparecer normal, sem partes coladas ou sumidas.`,
    },
    {
      titulo: `Consertar o CSS quebrado`,
      tipo: `correção de código`,
      tempo: `10 min`,
      guiaProfessor: `Mostre uma regra de CSS sem ponto e vírgula e sem a chave de fechamento. Ensine a olhar a regra de cima quando a de baixo não funciona. Confira no navegador.`,
      atividade: `No seu arquivo de estilo, ache uma regra que não está pegando. Verifique se cada linha termina com ponto e vírgula e se as chaves abrem e fecham. Conserte, salve e atualize.`,
      gabarito: `A correção certa deixa a regra completa, assim: "h1 { color: blue; }" e "body { background-color: lightyellow; }". Cada propriedade termina com ponto e vírgula e o bloco tem chave de abrir e de fechar. No navegador, a cor deve aparecer como esperado.`,
    },
    {
      titulo: `Rodar a checklist final`,
      tipo: `desafio`,
      tempo: `8 min`,
      guiaProfessor: `Entregue a checklist impressa. Acompanhe os alunos marcando item por item. Confira especialmente se imagens aparecem e se os links levam ao lugar certo.`,
      atividade: `Pegue a checklist e confira cada item da sua página: tags fechadas, CSS sem erro, imagens aparecendo, links funcionando e cores combinando. Marque o que estiver certo e conserte o que faltar.`,
      gabarito: `O desafio é vencido quando todos os itens da checklist estão marcados como certos: nenhuma tag aberta sem fechar, nenhuma regra de CSS quebrada, todas as imagens visíveis, todos os links clicáveis e abrindo, e um visual organizado. A página deve carregar no navegador sem nada quebrado.`,
    },
    {
      titulo: `Salvar como index.html e organizar a pasta`,
      tipo: `projeto curto`,
      tempo: `10 min`,
      guiaProfessor: `Mostre como salvar a página principal com o nome index.html e como deixar os arquivos juntos na mesma pasta. Explique por que esse nome é especial. Conecte com a publicação da próxima aula.`,
      atividade: `Salve sua página principal com o nome "index.html". Deixe na mesma pasta o arquivo de estilo "estilo.css" e as imagens usadas. Abra a pasta e confira que está tudo organizado e pronto para publicar.`,
      gabarito: `O projeto está pronto quando a pasta contém "index.html", "estilo.css" e as imagens, todos no mesmo lugar. O arquivo principal precisa se chamar exatamente "index.html", porque é o que o navegador abre primeiro ao acessar o site. Ao abrir a pasta, todos os arquivos do projeto aparecem juntos e a página abre sem erros, ficando pronta para ir ao ar na Aula 8.`,
    },
  ],
};
