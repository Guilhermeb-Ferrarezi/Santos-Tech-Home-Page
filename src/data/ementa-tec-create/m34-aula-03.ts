import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 3,
  titulo: "Um nome para o seu site",
  semana: "Semana 2",
  duracao: "1 hora",
  objetivo: `Entender o que é um domínio e por que ele é o endereço do site na internet, pesquisar nomes disponíveis, comparar as extensões (.com e .com.br) e escolher o domínio ideal para o próprio projeto.`,
  descricao: `Nesta aula o aluno descobre que todo site precisa de um endereço para que as pessoas consigam encontrá-lo. Esse endereço é o domínio: um nome fácil de lembrar, como meujogo.com, que substitui aquela sequência difícil de números que os computadores usam de verdade para se achar na internet. Sem domínio, o site existe, mas ninguém consegue chegar até ele digitando algo simples no navegador.

Para entender por que o domínio é tão importante, vale a comparação com o endereço de uma casa. O domínio é como o nome da rua e o número da casa: é o que você fala para um amigo encontrar o lugar. Por trás desse nome bonito existe um número técnico chamado endereço IP (algo como 142.250.0.1), mas ninguém quer decorar números. O domínio foi inventado justamente para que a gente use palavras em vez de números. Quando alguém digita o nome no navegador, um sistema chamado DNS faz a tradução do nome para o número, e o site aparece.

Outra parte central da aula é a extensão do domínio, o pedacinho final do endereço, depois do ponto. As mais comuns são .com (usada no mundo inteiro, ótima para projetos e marcas) e .com.br (usada por sites do Brasil). Existem muitas outras, como .net, .org e .games, mas hoje o foco é escolher entre .com e .com.br e entender quando cada uma faz sentido. O aluno também aprende que cada domínio é único: se alguém já registrou meujogo.com, esse nome não está mais disponível, e será preciso pensar em uma variação ou em outra extensão.

Ao final da aula, cada aluno terá pesquisado a disponibilidade de pelo menos três nomes para o seu projeto, comparado as extensões e escolhido o domínio ideal, anotando a opção principal e duas reservas. Nada será comprado ainda: o registro de verdade acontece na próxima aula. Hoje o objetivo é decidir, com calma e critério, qual nome vai representar o site do aluno na internet.`,
  materiais: [
    `Computadores com acesso à internet e navegador atualizado, um por aluno, para pesquisar a disponibilidade dos domínios`,
    `Projetor ou TV para o professor demonstrar a busca de domínios em uma tela grande`,
    `Site de registro de domínios brasileiro (registro.br) e um internacional aberto para consulta de disponibilidade`,
    `Editor de código ou bloco de notas para cada aluno anotar a lista de nomes pesquisados`,
    `Arquivo de exemplo: folha "Meu domínio" com campos para 3 nomes, extensão escolhida e status (livre ou ocupado)`,
    `Quadro branco ou flip chart para desenhar a comparação entre endereço de casa e domínio`,
    `Lista impressa de boas práticas para escolher um bom nome (curto, fácil de soletrar, sem confusão)`,
  ],
  conceitosChave: [
    `Domínio — o endereço do site na internet em forma de nome fácil de lembrar, como meujogo.com.`,
    `Endereço IP — o número técnico que identifica um computador na internet, como 142.250.0.1, difícil de decorar.`,
    `DNS — o sistema que traduz o nome do domínio para o número (endereço IP) que o computador entende.`,
    `Extensão — o final do domínio, depois do ponto, como .com ou .com.br, que indica o tipo ou o país do site.`,
    `.com — extensão usada no mundo inteiro, boa para marcas e projetos que querem alcançar qualquer pessoa.`,
    `.com.br — extensão de sites do Brasil, registrada pelo registro.br, ideal para projetos com foco no público brasileiro.`,
    `Disponibilidade — situação de um domínio que ainda não foi registrado por ninguém e pode ser escolhido por você.`,
  ],
  treinamento: `## O que o professor precisa saber

Um domínio é o endereço do site em palavras, como meujogo.com. Os computadores se acham pela internet usando números chamados endereços IP (por exemplo 142.250.0.1), mas ninguém decora números. O domínio resolve isso: você digita um nome e um sistema chamado DNS traduz esse nome para o número certo. Cada domínio é único no mundo: se alguém já registrou um nome, ele não fica disponível para outra pessoa. A parte final, depois do ponto, é a extensão: .com serve para o mundo todo, e .com.br é para sites do Brasil (registrados no site registro.br). Você não precisa comprar nada hoje nem ser técnico; precisa mostrar como pesquisar se um nome está livre e como escolher um bom nome. Antes da aula, abra o registro.br e um site internacional de registro, e faça uma busca de teste para conhecer a tela.

## Passo a passo da aula

Aquecimento (10 min): pergunte à turma como eles acham um vídeo ou um jogo na internet. Mostre no projetor um site conhecido e aponte o endereço na barra do navegador. No quadro, desenhe uma casa e escreva ao lado "Rua das Flores, 100" e depois "meujogo.com": explique que os dois são endereços, um da casa, o outro do site.

Conteúdo novo guiado (15 min): explique a dupla nome e número. Diga que o computador usa um número como 142.250.0.1 (o endereço IP), mas a gente usa o nome porque é mais fácil, e o DNS faz a tradução. Agora demonstre a pesquisa de disponibilidade: abra o registro.br, digite um nome de teste como meujogo no campo de busca e mostre o resultado dizendo se está livre ou ocupado. Repita com .com em um site internacional. Compare na tela: .com (mundo) e .com.br (Brasil). Por fim, mostre como anotar a escolha em um arquivo simples. Abra o editor e escreva um comentário em HTML para registrar a decisão, sem código que execute nada:

<!-- Meu domínio -->
<!-- Opcao 1: meujogo.com -->
<!-- Opcao 2: meujogo.com.br -->
<!-- Opcao 3: jogodoaluno.com -->

Mão na massa (25 min): cada aluno escolhe um tema para o nome (o jogo, o site ou um apelido do projeto) e pesquisa pelo menos três nomes no registro.br e no site internacional, anotando para cada um se está livre ou ocupado e qual extensão pretende usar. Circule pela sala. Reforce as boas práticas: nome curto, fácil de soletrar, sem números confusos e sem hífens difíceis. Quem terminar testa variações (juntar duas palavras, trocar a extensão).

Desafio e compartilhar (10 min): cada aluno escolhe a opção principal e duas reservas e explica em uma frase por que escolheu aquela extensão. Dois ou três alunos apresentam a escolha no projetor em 30 segundos.

## Como explicar de forma clara

Use sempre a comparação do endereço: "o domínio é o endereço da sua casa na internet; é o que você fala para um amigo te encontrar". Diga que o número (IP) é como as coordenadas exatas do GPS, que ninguém decora, e o nome é o atalho que a gente lembra. O DNS é a "lista telefônica" que troca o nome pelo número. Para a extensão, diga: .com é para o mundo inteiro, .com.br é a placa que mostra que o site é do Brasil. Reforce que cada nome só pode ter um dono: por isso pesquisamos antes, como quem confere se o nome de usuário do jogo já está em uso.

## Erros comuns e como ajudar

Erro 1: o aluno acha que pode usar qualquer nome sem pesquisar; mostre que é preciso conferir a disponibilidade primeiro. Erro 2: escolhe um nome enorme ou cheio de números e hífens; peça para ler em voz alta e ver se é fácil de falar e digitar. Erro 3: confunde domínio com o nome do site dentro da página; explique que o domínio fica na barra de endereço do navegador. Erro 4: acha que .com.br e .com são a mesma coisa; mostre que um é Brasil e o outro é mundo, e que a disponibilidade pode ser diferente em cada um. Erro 5: tenta comprar agora; lembre que hoje só pesquisamos e decidimos, e a compra fica para a próxima aula. Erro 6: digita espaços ou acentos no nome do domínio; explique que domínios não usam espaço nem acento, só letras simples, números e hífen.`,
  exercicios: [
    {
      titulo: `Caça ao endereço`,
      tipo: `roda de conversa`,
      tempo: `6 min`,
      guiaProfessor: `Abra dois ou três sites conhecidos no projetor e peça que a turma leia em voz alta o endereço na barra do navegador. Conduza para que percebam o nome e a extensão.`,
      atividade: `Olhando a barra de endereço dos sites que o professor abrir, identifique em cada um qual é o nome do domínio e qual é a extensão (a parte depois do ponto). Diga em voz alta um exemplo de extensão que você viu.`,
      gabarito: `O aluno deve apontar o nome (por exemplo, "youtube" ou "google") e a extensão (por exemplo, ".com" ou ".com.br"). Acerta quem separa corretamente o nome da extensão e reconhece que a extensão é o pedaço final, depois do ponto. Não há um único site certo; o importante é identificar as duas partes.`,
    },
    {
      titulo: `Nome ou número?`,
      tipo: `exercício no papel`,
      tempo: `7 min`,
      guiaProfessor: `Explique de novo a dupla nome e número antes de começar. Garanta que cada aluno entenda que o domínio é o nome e o IP é o número, e que o DNS faz a ligação.`,
      atividade: `No papel, escreva quem é o domínio e quem é o endereço IP nesta dupla: meujogo.com e 142.250.0.1. Depois, escreva em uma frase o que o DNS faz quando você digita meujogo.com no navegador.`,
      gabarito: `Domínio: meujogo.com. Endereço IP: 142.250.0.1. O DNS traduz o nome meujogo.com para o número (endereço IP) 142.250.0.1, para que o computador encontre o site. Acerta quem separa corretamente nome e número e descreve a tradução do nome para o número feita pelo DNS.`,
    },
    {
      titulo: `Pesquisando se o nome está livre`,
      tipo: `prática na ferramenta`,
      tempo: `10 min`,
      guiaProfessor: `Acompanhe cada aluno na busca. Mostre onde digitar o nome e como ler o resultado (livre ou ocupado). Lembre que não devem comprar nada, apenas pesquisar.`,
      atividade: `Escolha um nome para o seu projeto e pesquise a disponibilidade dele no registro.br (para .com.br) e em um site internacional (para .com). Anote em uma folha: o nome, a extensão e se o resultado foi livre ou ocupado.`,
      gabarito: `A folha deve mostrar pelo menos um nome pesquisado, a extensão testada e o status (livre ou ocupado) para .com e .com.br. Acerta quem realiza a busca nos dois lugares e anota corretamente o resultado de cada um. Exemplo válido: "jogodoaluno.com.br — ocupado; jogodoaluno.com — livre".`,
    },
    {
      titulo: `Três nomes e a melhor escolha`,
      tipo: `desafio`,
      tempo: `10 min`,
      guiaProfessor: `Reforce as boas práticas: nome curto, fácil de soletrar, sem confusão. Ajude quem só achar nomes ocupados a criar variações juntando palavras ou trocando a extensão.`,
      atividade: `Pesquise três nomes diferentes para o seu projeto e registre cada um numa lista, marcando se está livre ou ocupado. Depois escolha a sua opção principal e justifique em uma frase por que esse nome é o melhor.`,
      gabarito: `A lista deve ter três nomes com o status de cada um e uma escolha principal justificada. A justificativa deve citar pelo menos um critério bom: nome curto, fácil de falar, fácil de digitar, combina com o projeto ou está disponível. Acerta quem apresenta os três nomes pesquisados e uma escolha coerente com esses critérios.`,
    },
    {
      titulo: `Decidindo a extensão do projeto`,
      tipo: `em dupla`,
      tempo: `8 min`,
      guiaProfessor: `Forme duplas. Cada aluno explica ao colega a extensão que escolheu e por quê. Garanta que cada um anote a opção principal e duas reservas para usar na próxima aula.`,
      atividade: `Em dupla, cada um apresenta ao colega o domínio escolhido e diz se vai usar .com ou .com.br e por quê. Depois, cada aluno anota no editor a opção principal e duas reservas, em comentários, assim: "<!-- Opcao 1 -->", "<!-- Opcao 2 -->" e "<!-- Opcao 3 -->".`,
      gabarito: `Cada aluno deve ter anotado três comentários: a opção principal e duas reservas, com a extensão definida em cada uma. A escolha de .com (mundo) ou .com.br (Brasil) deve vir com uma razão simples, como "quero alcançar gente de qualquer lugar" (.com) ou "meu site é focado no Brasil" (.com.br). Acerta a dupla que registra as três opções e justifica a extensão escolhida.`,
    },
  ],
};
