import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 4,
  titulo: "Imagens e links que conectam",
  semana: "Semana 2",
  duracao: "1 hora",
  objetivo: `Aprender a inserir imagens, criar listas e construir links que levam a outras páginas e sites, montando o conteúdo completo da página pessoal do aluno.`,
  descricao: `Nesta aula os alunos dão um grande salto: a página deles deixa de ser só texto e ganha vida com fotos, listas organizadas e links que conectam a outros lugares da web. Até agora, nas aulas anteriores, eles aprenderam a estruturar texto com títulos e parágrafos. Hoje a página começa a se parecer de verdade com um site, com imagem em cima, uma lista de gostos e botões de navegação que funcionam ao clicar.

O coração da aula são três famílias de tags. A primeira é a tag de imagem, que mostra uma foto na tela e precisa de um endereço para encontrar o arquivo. A segunda são as listas, que servem para organizar coisas em itens, como uma lista de jogos favoritos ou de hobbies. A terceira, e mais mágica para a idade, são os links: pedaços de texto ou imagem em que se clica para ir a outra página, a outro site ou a uma rede social. É o momento em que o aluno entende, na prática, por que a web se chama "rede": tudo está ligado por links.

Esta aula é a continuação direta da página pessoal que cada aluno vem construindo no mês. Eles vão pegar a estrutura de texto já pronta e enriquecê-la, deixando-a com cara de página real. Ao final, cada aluno terá uma página com foto, uma lista dos seus interesses e ao menos um link clicável funcionando, tudo aberto e testado no navegador.

É importante manter o ritmo prático: o aluno deve estar com as mãos no teclado, escrevendo as tags, salvando o arquivo e atualizando o navegador para ver o resultado na hora. A emoção de ver a própria foto aparecer e o link levar a outro site é o que prende a turma. Estilo e cores ficam para a próxima aula; hoje o foco é o conteúdo completo e a navegação funcionando.`,
  materiais: [
    `Computadores com editor de código instalado (VS Code) e navegador, um por aluno`,
    `Projetor ou TV para o professor demonstrar o código e o resultado na tela`,
    `Arquivo da página pessoal de cada aluno (index.html) já iniciado nas aulas anteriores`,
    `Pasta de imagens de exemplo (fotos livres de direitos) e espaço para o aluno salvar a própria foto`,
    `Folha impressa de referência rápida com as tags img, ul, li e a (cola de consulta)`,
    `Conexão com a internet para testar links que levam a sites externos`,
  ],
  conceitosChave: [
    `Tag de imagem (img) — tag que mostra uma foto na página; não tem tag de fechamento e usa o atributo src para indicar o arquivo.`,
    `Atributo src — endereço (caminho) que diz ao navegador onde encontrar a imagem, podendo ser um arquivo local ou um link da internet.`,
    `Atributo alt — texto alternativo que descreve a imagem; aparece se a foto não carregar e ajuda quem usa leitor de tela.`,
    `Lista não ordenada (ul) — lista com marcadores (bolinhas), usada para itens sem ordem, como hobbies; cada item fica dentro de uma tag li.`,
    `Item de lista (li) — cada linha de uma lista; fica sempre dentro de uma ul ou ol.`,
    `Tag de link (a) — a chamada âncora; cria um texto ou imagem clicável que leva a outro lugar usando o atributo href.`,
    `Atributo href — endereço de destino do link; pode ser outra página do site, um site externo ou uma rede social.`,
  ],
  treinamento: `## O que o professor precisa saber

Você não precisa ser especialista em HTML para dar esta aula. Basta entender quatro tags. A tag de imagem se escreve com img e não tem fechamento: ela usa o atributo src (a fonte, ou seja, o caminho da foto) e o atributo alt (uma descrição da imagem). As listas têm duas peças: a tag ul cria a lista com marcadores e cada item vai dentro de uma tag li. Os links usam a tag a (de âncora), com o atributo href guardando o endereço de destino, e o texto clicável fica entre a abertura e o fechamento da tag.

Antes da aula, abra o VS Code com o arquivo index.html de exemplo, coloque uma imagem na mesma pasta e teste no navegador apertando o botão direito sobre o arquivo e escolhendo abrir, ou usando a extensão Live Server. Assim você não descobre os caminhos das imagens na frente da turma. Tenha uma foto pronta na pasta para demonstrar.

## Passo a passo da aula (ritmo 10/15/25/10, com o código exato)

10 min — Aquecimento e revisão: Pergunte "o que já temos na nossa página?" e relembre títulos e parágrafos. Abra um site real (um portfólio simples) e peça que apontem onde há imagens, listas e links. Diga que hoje a página deles vai ganhar isso tudo.

15 min — Conteúdo novo guiado: No projetor, mostre cada tag escrevendo no editor e salvando. Imagem:

  <img src="minha-foto.jpg" alt="Foto do meu personagem favorito">

Explique: img mostra a foto, src é o caminho do arquivo (precisa estar na mesma pasta), alt descreve a imagem. Lista:

  <ul>
    <li>Jogar Roblox</li>
    <li>Desenhar</li>
    <li>Andar de skate</li>
  </ul>

Explique: ul abre a lista, cada li é um item, e a lista fecha com a tag de fechamento. Link:

  <a href="https://www.roblox.com">Visite o Roblox</a>

Explique: a cria o link, href é para onde ele leva, e o texto entre as tags é o que aparece clicável. Salve e mostre tudo funcionando no navegador.

25 min — Mão na massa: Cada aluno abre o seu index.html e adiciona, nesta ordem: 1) uma imagem com a tag img logo abaixo do título; 2) uma lista com pelo menos três hobbies usando ul e li; 3) um link com a tag a para um site que gosta. Eles salvam e atualizam o navegador a cada passo. Circule pela sala conferindo os caminhos das imagens e se cada li está dentro da ul.

10 min — Desafio e compartilhar: Lance o desafio "transforme sua foto em um link", colocando a tag img dentro da tag a. Quem terminar mostra a página à turma e clica no próprio link para provar que funciona. Feche reforçando que links são o que ligam toda a web.

## Como explicar de forma clara (linguagem para a idade)

Use comparações simples. A imagem: "o src é como o endereço da casa da foto; se você escrever o endereço errado, o carteiro não acha e a imagem não aparece". O alt: "é a legenda que conta o que tem na foto, caso ela não carregue". A lista: "a ul é a cestinha e cada li é uma frutinha dentro dela". O link: "o href é o portal; o texto é a placa que diz para onde o portal leva". Sempre que algo não aparecer, peça que confiram o nome do arquivo letra por letra, porque o computador não perdoa um nome trocado.

## Erros comuns e como ajudar

O erro mais comum é a imagem não aparecer porque o nome no src está diferente do nome real do arquivo (maiúsculas, acentos ou espaços atrapalham); peça para conferir letra por letra e usar nomes simples e sem acento. Outro erro é colocar a foto em pasta diferente do HTML; oriente a deixar a imagem na mesma pasta no começo. Nas listas, alguns esquecem de fechar a ul ou colocam o li fora dela; mostre a estrutura aninhada. Nos links, é comum esquecer o "https://" no href, e então o link não funciona; reforce que todo endereço de site externo começa com isso. Por fim, alguns esquecem as aspas nos atributos; lembre que src, alt e href sempre levam o valor entre aspas.`,
  exercicios: [
    {
      titulo: `Minha primeira foto na página`,
      tipo: `prática guiada`,
      tempo: `7 minutos`,
      guiaProfessor: `Garanta que cada aluno tenha uma imagem salva na mesma pasta do index.html. Confira o nome do arquivo no src letra por letra. O objetivo é só fazer a imagem aparecer no navegador.`,
      atividade: `No seu index.html, logo abaixo do título principal, adicione uma imagem usando a tag img. Use uma foto que esteja na mesma pasta do arquivo. Não esqueça do texto alternativo no atributo alt. Salve e atualize o navegador para ver a foto aparecer.`,
      gabarito: `<img src="minha-foto.jpg" alt="Foto do meu personagem favorito">

O caminho no src deve ser exatamente igual ao nome do arquivo na pasta (mesmas letras, sem acento e sem espaço). A imagem aparece logo após o título quando o arquivo é salvo e o navegador é atualizado.`,
    },
    {
      titulo: `Lista dos meus hobbies`,
      tipo: `prática na ferramenta`,
      tempo: `8 minutos`,
      guiaProfessor: `Reforce a estrutura aninhada: a ul abre, cada li fica dentro, e a ul fecha. Circule conferindo se nenhum li ficou fora da lista. Peça pelo menos três itens.`,
      atividade: `Adicione na sua página uma lista com pelo menos três hobbies ou coisas que você gosta. Use a tag ul para a lista e uma tag li para cada item. Salve e veja os marcadores aparecerem no navegador.`,
      gabarito: `<ul>
  <li>Jogar Roblox</li>
  <li>Desenhar personagens</li>
  <li>Andar de skate</li>
</ul>

Cada item fica dentro de uma tag li, e todos ficam dentro da ul, que abre e fecha. No navegador aparecem bolinhas (marcadores) antes de cada item.`,
    },
    {
      titulo: `Um link para o meu site favorito`,
      tipo: `desafio`,
      tempo: `9 minutos`,
      guiaProfessor: `Lembre os alunos de começar o endereço com https:// para sites externos. Teste clicando no link junto com o aluno. Pergunte para onde o href está apontando.`,
      atividade: `Crie um link na sua página que leve a um site que você gosta, como o Roblox ou o YouTube. Use a tag a com o atributo href para o endereço e escreva um texto clicável entre as tags. Salve, atualize e clique para testar.`,
      gabarito: `<a href="https://www.roblox.com">Visite o Roblox</a>

O href guarda o endereço completo, começando com https://, e o texto entre a abertura e o fechamento da tag a é a parte clicável. Ao clicar, o navegador abre o site indicado.`,
    },
    {
      titulo: `Página completa em dupla`,
      tipo: `em dupla`,
      tempo: `12 minutos`,
      guiaProfessor: `Cada dupla revisa a página um do outro procurando os três elementos: imagem, lista e link. Peça que apontem um erro no código do colega e ajudem a corrigir. Valorize quem encontrar nomes de arquivo trocados ou tags não fechadas.`,
      atividade: `Em dupla, abram a página de cada um e confiram juntos se há: uma imagem que aparece, uma lista com três itens e um link que funciona ao clicar. Se algo não funcionar, encontrem o erro no código e corrijam juntos. No fim, cada página deve ter os três elementos funcionando.`,
      gabarito: `Uma página correta contém os três elementos funcionando, por exemplo:

<img src="minha-foto.jpg" alt="Minha foto">
<ul>
  <li>Jogar Roblox</li>
  <li>Desenhar</li>
  <li>Ler quadrinhos</li>
</ul>
<a href="https://www.youtube.com">Meu canal favorito</a>

Erros típicos a corrigir: nome do arquivo diferente no src, li fora da ul, ul sem fechar, href sem https:// e atributos sem aspas.`,
    },
    {
      titulo: `Transforme sua foto em um link`,
      tipo: `projeto curto`,
      tempo: `12 minutos`,
      guiaProfessor: `Este é o desafio mais difícil: colocar a tag img dentro da tag a, criando uma imagem clicável. Mostre a estrutura aninhada no projetor se alguém travar. Peça que testem clicando na própria foto.`,
      atividade: `Faça com que a sua foto vire um link: ao clicar nela, a pessoa vai para outro site ou para a sua rede social. Para isso, coloque a tag img dentro da tag a. Salve, atualize e clique na imagem para conferir que ela leva ao destino escolhido.`,
      gabarito: `<a href="https://www.roblox.com">
  <img src="minha-foto.jpg" alt="Clique para ir ao Roblox">
</a>

A tag a envolve a tag img. O href define o destino e a imagem inteira vira clicável. Ao clicar na foto, o navegador abre o endereço indicado no href.`,
    },
  ],
};
