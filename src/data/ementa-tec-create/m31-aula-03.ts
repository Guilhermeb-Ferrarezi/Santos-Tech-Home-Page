import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 3,
  titulo: "Telas de todos os tamanhos",
  semana: "Semana 2",
  duracao: "1 hora",
  objetivo: `Fazer o aluno entender o que é design responsivo e usar a meta viewport, unidades flexíveis e media queries para que o site funcione bem no celular e no computador.`,
  descricao: `Hoje os alunos vão descobrir um segredo importante da web: o mesmo site precisa funcionar em telas muito diferentes. Um celular tem uma tela estreita e em pé; um computador tem uma tela larga e deitada. Quando um site se adapta sozinho a esses tamanhos, dizemos que ele é "responsivo". Sem isso, um site bonito no computador pode virar uma bagunça no celular, com letras minúsculas e botões que ninguém consegue tocar.

Nas aulas anteriores os alunos aprenderam o Box Model (a caixa de cada elemento) e o Flexbox (para alinhar e distribuir os elementos). Agora eles vão dar o passo seguinte: em vez de medir tudo em pixels fixos, vão usar unidades flexíveis que crescem e encolhem com a tela. Vão conhecer a porcentagem, que mede em relação ao elemento de fora; o vw, que mede em relação à largura da janela; e o rem, que mede em relação ao tamanho de texto base da página.

A peça-chave da aula é a media query: um bloco de CSS que diz "quando a tela tiver até tal largura, use estas regras". Com ela o aluno consegue, por exemplo, deixar as colunas lado a lado no computador e empilhadas no celular. Antes de tudo isso funcionar, porém, existe uma linha mágica que precisa estar no HTML: a meta viewport. Sem ela, o celular finge ter uma tela larga e o site não se adapta.

Ao final da aula, o aluno terá um pequeno bloco de cartões que muda de layout conforme a largura da tela, e saberá usar a ferramenta de inspeção do navegador para testar como o site fica no celular sem precisar de um celular de verdade.`,
  materiais: [
    `Computadores com editor de código instalado (VS Code) e um navegador moderno (Chrome ou Edge)`,
    `Projetor ou TV para o professor mostrar o código e a ferramenta de inspeção`,
    `Arquivo de exemplo "cartoes.html" e "estilo.css" preparado antes da aula (sem media query ainda)`,
    `Um celular do professor (opcional) para comparar com o modo de inspeção do navegador`,
    `Quadro branco ou slide com a régua de unidades (px, porcentagem, vw, rem)`,
    `Cronômetro visível para controlar os blocos de tempo da aula`,
  ],
  conceitosChave: [
    `Design responsivo — quando o site muda sozinho para ficar bom em qualquer tamanho de tela, do celular ao computador.`,
    `Meta viewport — uma linha no HTML que avisa o celular para usar a largura real da tela, em vez de fingir ser um computador.`,
    `Porcentagem (%) — unidade que mede o tamanho em relação ao elemento que está em volta; 50% significa metade do espaço disponível.`,
    `vw (viewport width) — unidade que mede em relação à largura da janela; 1vw é igual a 1% da largura da tela.`,
    `rem — unidade que mede em relação ao tamanho de letra base da página; se a base é 16px, então 2rem é igual a 32px.`,
    `Media query — um bloco de CSS que só vale quando a tela tem um certo tamanho; é o que troca o layout entre celular e computador.`,
    `Breakpoint — a largura escolhida onde o layout muda (por exemplo, 600px), o ponto de virada entre celular e telas maiores.`,
  ],
  treinamento: `## O que o professor precisa saber

Você não precisa ser especialista. Guarde três ideias: (1) o celular precisa de uma linha especial no HTML chamada meta viewport, senão nada se adapta; (2) usar tamanhos flexíveis (porcentagem, vw, rem) deixa o site "esticável"; (3) a media query é um interruptor que liga regras de CSS só em certas larguras de tela. Tudo isso pode ser testado no próprio navegador, sem celular, abrindo a ferramenta de inspeção. No Chrome ou Edge, aperte F12 e clique no ícone de celular e tablet (chamado "Toggle device toolbar", ou aperte Ctrl mais Shift mais M). Isso simula uma tela pequena.

## Passo a passo da aula (ritmo 10/15/25/10)

Aquecimento (10 min): abra um site conhecido (por exemplo o do Google) no computador e depois ative o modo celular com F12 e Ctrl mais Shift mais M. Pergunte: "o que mudou de lugar?". Mostre que botões e textos se reorganizam. Explique que hoje eles vão fazer o mesmo com o site deles.

Conteúdo novo guiado (15 min): no projetor, mostre o arquivo HTML e adicione dentro do head a meta viewport. Digite com eles, linha a linha:

  <meta name="viewport" content="width=device-width, initial-scale=1.0">

Explique: "width=device-width" diz "use a largura real do aparelho" e "initial-scale=1.0" diz "não dê zoom automático". Depois mostre as unidades no CSS. Digite um cartão assim:

  .cartao {
    width: 90%;
    padding: 1rem;
    font-size: 1.2rem;
  }

Diga que 90% é "noventa por cento do espaço de fora", e 1rem é o tamanho base de texto. Por fim, apresente a media query, digitando no final do CSS:

  @media (max-width: 600px) {
    .lista {
      flex-direction: column;
    }
  }

Leia em voz alta: "quando a tela tiver no máximo 600 pixels de largura, empilhe a lista em coluna". Mostre no modo celular que os cartões passam a ficar um embaixo do outro.

Mão na massa (25 min): cada aluno abre o arquivo "cartoes.html" com três cartões lado a lado usando Flexbox (da aula passada). Tarefas, nesta ordem: (1) adicionar a meta viewport no head; (2) trocar a largura fixa dos cartões por uma flexível, como width: 30%; (3) escrever uma media query com max-width: 600px que mude flex-direction para column. A cada passo, peça que apertem F12 e Ctrl mais Shift mais M para ver o efeito no celular. Circule pela sala ajudando.

Desafio e compartilhar (10 min): peça um segundo breakpoint para tablet, por exemplo @media (max-width: 900px), deixando dois cartões por linha. Depois cada aluno mostra o site alternando entre o modo computador e o modo celular para a turma.

## Como explicar de forma clara (linguagem para a idade)

Use a metáfora da "roupa que estica": pixels fixos são como uma roupa de tamanho único, que aperta em uns e fica larga em outros; porcentagem e vw são como uma roupa elástica, que serve em vários corpos. A media query é o "porteiro" da festa: ele só deixa entrar certas regras quando a tela tem o tamanho certo. E a meta viewport é o "óculos" do celular: sem ela, o celular enxerga errado e acha que é um computador gigante.

## Erros comuns e como ajudar

O erro mais comum é esquecer a meta viewport: o site parece não responder. Mande conferir o head primeiro. Outro erro é escrever max-width sem a unidade px, ou esquecer as chaves da media query. Mostre que dentro do @media existe um seletor normal, com suas próprias chaves, como uma caixa dentro de outra. Alguns confundem % com vw: lembre que % depende do elemento de fora e vw depende da janela inteira. Por fim, se o aluno não vê mudança, peça para diminuir bem a janela do modo celular, abaixo de 600px, para passar do breakpoint.`,
  exercicios: [
    {
      titulo: `Caça ao viewport`,
      tipo: `Observação e marcação`,
      tempo: `5 min`,
      guiaProfessor: `Mostre dois arquivos HTML quase iguais, um com a meta viewport e outro sem. O aluno deve abrir os dois no modo celular (F12, depois Ctrl mais Shift mais M) e dizer qual se adapta. Reforce onde a linha fica: dentro do head.`,
      atividade: `Abra os dois arquivos no modo celular do navegador. Diga qual deles se ajusta à tela pequena e escreva, no caderno, a linha exata que faz a diferença e em que parte do HTML ela mora.`,
      gabarito: `O arquivo que se adapta é o que contém a meta viewport. A linha é: <meta name="viewport" content="width=device-width, initial-scale=1.0"> e ela fica dentro da tag <head> do HTML.`,
    },
    {
      titulo: `Trocando pixels por porcentagem`,
      tipo: `Edição de código`,
      tempo: `6 min`,
      guiaProfessor: `Dê um cartão com largura fixa em pixels. Peça que troquem por porcentagem e observem o cartão esticar ao mudar a largura da janela. Explique que % se mede pelo elemento de fora.`,
      atividade: `No CSS, a classe .cartao está com width: 300px. Troque por uma largura flexível de 80% e arraste a borda da janela do navegador para ver o cartão acompanhar o tamanho da tela.`,
      gabarito: `.cartao {
  width: 80%;
}`,
    },
    {
      titulo: `Minha primeira media query`,
      tipo: `Programação guiada`,
      tempo: `8 min`,
      guiaProfessor: `Os alunos já têm uma lista com Flexbox em linha (flex-direction: row). Peça que adicionem uma media query para empilhar no celular. Confira as chaves e a unidade px no max-width.`,
      atividade: `Escreva no final do arquivo CSS uma media query que, em telas de até 600px de largura, mude a classe .lista para ficar em coluna (um item embaixo do outro). Teste no modo celular.`,
      gabarito: `@media (max-width: 600px) {
  .lista {
    flex-direction: column;
  }
}`,
    },
    {
      titulo: `Texto que cresce com rem`,
      tipo: `Experimentação`,
      tempo: `7 min`,
      guiaProfessor: `Explique que rem depende do tamanho base de texto da página (normalmente 16px). Faça-os mudar a base no html e ver todos os textos em rem mudarem juntos. Ótimo momento para mostrar a relação 1rem igual a 16px.`,
      atividade: `No CSS, deixe o título com font-size: 2rem. Depois, na regra do html, mude o font-size base de 16px para 20px e observe o título crescer proporcionalmente. Anote quantos pixels passa a ter o título.`,
      gabarito: `html {
  font-size: 20px;
}
.titulo {
  font-size: 2rem;
}

Com a base em 20px, o título de 2rem passa a ter 40px (porque 2 vezes 20 é igual a 40).`,
    },
    {
      titulo: `Layout em três estágios`,
      tipo: `Desafio integrador`,
      tempo: `9 min`,
      guiaProfessor: `Aqui o aluno junta tudo: dois breakpoints. Computador mostra os cartões lado a lado; tablet mostra dois por linha; celular empilha. Verifique a ordem das media queries e o uso de flex-wrap. Aceite soluções com width em porcentagem que somem corretamente.`,
      atividade: `Faça a classe .lista mostrar três cartões lado a lado no computador, dois por linha em telas de até 900px e um por linha (empilhados) em telas de até 600px. Use Flexbox, flex-wrap e duas media queries. Teste nos três tamanhos no modo de inspeção.`,
      gabarito: `.lista {
  display: flex;
  flex-wrap: wrap;
}
.cartao {
  width: 32%;
}

@media (max-width: 900px) {
  .cartao {
    width: 48%;
  }
}

@media (max-width: 600px) {
  .lista {
    flex-direction: column;
  }
  .cartao {
    width: 100%;
  }
}`,
    },
  ],
};
