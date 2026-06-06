import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 7,
  titulo: "Dando Vida a um Objeto com Código",
  semana: "Semana 4",
  duracao: "1 hora",
  objetivo: `A criança liga um Script a uma Part de verdade da cena e muda uma propriedade dela, como a cor ou o tamanho, descobrindo que o código pode transformar o mundo do jogo e não só escrever no Output.`,
  descricao: `Até agora, nas aulas anteriores, a turma usou o código de texto em Lua só para conversar com a tela: o comando print fazia aparecer palavras na janela Output, lá embaixo do Roblox Studio. Foi um ótimo começo, mas o código ainda não tinha "mãos" para tocar no mundo do jogo. Nesta aula isso muda: a criança vai escrever uma linha de código que pega um objeto de verdade da cena, uma Part (aquele bloco que ela já sabe criar), e muda alguma coisa nele, como a cor ou o tamanho. É o momento mágico em que o código sai da janelinha de texto e entra dentro do jogo.

O segredo desta aula é a palavra "propriedade". Toda Part tem propriedades: a cor dela, o tamanho dela, se ela é transparente ou não. Essas propriedades já existem no painel Properties, onde a criança costuma clicar e arrastar com o mouse para mudar a cor. A grande descoberta de hoje é que dá para mudar exatamente a mesma coisa escrevendo uma linha de código, sem tocar no mouse. O código vira um controle remoto do objeto. Quando o aluno aperta Play e vê o bloco mudar de cor sozinho, porque ele mandou, o brilho nos olhos é garantido.

Para o código achar a Part certa, ele precisa saber o nome dela. Por isso a aula liga duas ideias que a criança já conhece: o nome do objeto (na janela Explorer) e o código (no Script). O Script vai morar dentro da própria Part, como um cérebro dentro do bloco, e vai mandar nele. A criança aprende a guardar a Part numa variável (caixinha que ela já viu nas aulas 5 e 6) e depois mexer numa propriedade dessa caixinha.

No fim da hora, cada criança escolhe um objeto da cena e planeja qual reação quer programar nele na próxima aula. Não precisa terminar tudo hoje: o importante é entender que código muda o mundo e sair com uma ideia na cabeça. Essa aula é a ponte direta para a Entrega Final do mês, "Meu Objeto que Reage", que acontece na semana seguinte.`,
  materiais: [
    `Computadores (um por criança) com o Roblox Studio já aberto num lugar vazio (template Baseplate), pronto para receber uma Part e um Script`,
    `Projetor ou TV grande para o professor mostrar cada clique e cada linha de código na tela`,
    `Um exemplo pronto e salvo pelo professor: uma Part chamada Bloco com um Script dentro que muda a cor dela ao apertar Play`,
    `Cartão grande impresso com a linha de código modelo já pronta, colado perto de cada computador, para a criança copiar letra por letra`,
    `Lista impressa com a ordem dos passos: Criar Part, Renomear, Inserir Script, Escrever código, Apertar Play`,
    `Folhas de "Plano do meu objeto" com espaço para a criança desenhar o objeto e escrever qual reação quer programar`,
    `Adesivo ou estrelinha para premiar quem fizer o bloco mudar pela primeira vez`,
  ],
  conceitosChave: [
    `Part — o bloco de verdade da cena, aquele que a criança cria e vê no jogo; agora ele vai obedecer ao código.`,
    `Propriedade — uma característica do objeto, como a cor, o tamanho ou a transparência; é o que o código consegue mudar.`,
    `Script — o pedacinho de código que mora dentro da Part, como um cérebro que manda nela.`,
    `script.Parent — um jeito do código dizer "a Part onde eu moro"; é como apontar para a própria casa do Script.`,
    `Color3 — o jeito do Lua escrever uma cor usando três números (vermelho, verde e azul) de 0 a 255.`,
    `Vector3 — o jeito do Lua escrever um tamanho usando três números: largura, altura e profundidade.`,
    `Play — o botão que faz o jogo rodar; é quando o código acorda e muda o objeto de verdade.`,
  ],
  treinamento: `## O que o professor precisa saber

Você não precisa ser programador. Precisa apenas entender uma ideia: toda Part tem propriedades (Color, Size, Transparency) que aparecem no painel Properties, e o código em Lua consegue mexer nelas exatamente como o mouse mexe. A diferença é que com código a mudança acontece sozinha quando você aperta Play.

O caminho técnico é curto. Um Script precisa primeiro achar a Part. Como o Script vai morar dentro da própria Part, usamos script.Parent, que significa "o objeto pai do Script", ou seja, a Part que o segura. Guardamos isso numa variável para o código ficar limpo.

Para cor, o Lua usa Color3.fromRGB com três números de 0 a 255: vermelho, verde, azul. Cor3.fromRGB(255, 0, 0) é vermelho puro. Para tamanho, o Lua usa Vector3.new com três números: largura, altura e profundidade. O código completo de exemplo é:

local bloco = script.Parent
bloco.Color = Color3.fromRGB(255, 0, 0)

A primeira linha guarda a Part numa caixinha chamada bloco. A segunda manda a cor dela virar vermelha. Ao apertar Play, o bloco fica vermelho. Para mudar o tamanho, troque a segunda linha por: bloco.Size = Vector3.new(10, 10, 10). Decore só isso e você ensina a aula inteira.

## Passo a passo da aula (ritmo 10/15/25/10, onde clicar em Roblox + Lua)

Aquecimento (10 min): Relembre o print das aulas passadas mostrando o Output (menu View depois Output). Pergunte: "O print muda o bloco ou só escreve na tela?" Eles vão perceber que só escreve. Diga: "Hoje o código vai tocar no bloco de verdade." Mostre o exemplo pronto: aperte Play e o bloco fica vermelho. Espere o "uau".

Conteúdo novo guiado (15 min): Construa do zero na frente da turma, devagar. 1) Na barra de cima, aba Home, clique em Part para criar um bloco. 2) No painel Explorer (à direita), clique com o botão direito no nome Part, escolha Rename e digite Bloco. 3) Passe o mouse sobre Bloco no Explorer, clique no sinal de mais (+) e escolha Script. Uma janela de código abre e já vem com print("Hello world!"). 4) Apague essa linha e digite, falando cada caractere: local bloco = script.Parent depois bloco.Color = Color3.fromRGB(255, 0, 0). 5) Aperte Play (botão azul triangular no topo, aba Home ou Test). O bloco fica vermelho. 6) Aperte Stop (quadrado vermelho) para voltar.

Mão na massa (25 min): Cada criança repete os 5 passos no próprio computador, copiando do cartão. Passe de mesa em mesa. Quando todos conseguirem o vermelho, desafie a trocar os três números para inventar outra cor, ou trocar a linha da cor pela linha do tamanho (Vector3.new). Deixe testar à vontade com Play e Stop.

Desafio e compartilhar (10 min): Entregue a folha "Plano do meu objeto". Cada criança escolhe um objeto da cena (pode ser o bloco ou outra Part que ela criar) e desenha qual reação quer programar na próxima aula: ficar maior, mudar de cor, sumir. Alguns mostram o bloco mudando para a turma.

## Como explicar para crianças

Use a ideia de controle remoto: "O código é um controle remoto do bloco. Você aperta um botão escrevendo e o bloco obedece." Para propriedade, diga: "Cada bloco tem um cartão de identidade: a cor dele, o tamanho dele. O código mexe nesse cartão." Para script.Parent, aponte: "O Script mora dentro do bloco, então ele diz 'meu dono' e acha o bloco sozinho." Para a cor com números, diga: "São três potinhos de tinta: vermelho, verde e azul, de 0 até 255." Sempre mostre no projetor antes de pedir; nesta idade o olho ensina mais que a palavra.

## Erros comuns e como ajudar

Script no lugar errado: a criança insere o Script no Workspace e não dentro da Part, então script.Parent não acha o bloco. Confira no Explorer se o Script está embaixo do nome do bloco, recuado para a direita. Nome trocado: às vezes escrevem Color3.fromRGB com letras erradas ou esquecem os parênteses; o Output mostra erro em vermelho. Leia junto e conserte uma letra por vez. Esqueceram o ponto: bloco.Color precisa do ponto entre o nome da caixinha e a propriedade. Apertaram Play e nada mudou: confira se salvaram a linha (a janela do Script deve mostrar o código atual) e se a propriedade é Color e não color minúsculo. Frustração: lembre que errar e consertar faz parte, igual à aula da caça aos bugs.`,
  exercicios: [
    {
      titulo: `Achando o cartão de identidade do bloco`,
      tipo: `Observação guiada na ferramenta`,
      tempo: `7 minutos`,
      guiaProfessor: `Antes do código, mostre que a propriedade já existe no mouse. No projetor, clique numa Part e abra o painel Properties (menu View depois Properties). Encontre a linha Color e mude a cor clicando nela. Diga: "O código vai mexer aqui sozinho." Peça que cada criança ache a palavra Color e a palavra Size no painel.`,
      atividade: `Clique no seu bloco. No painel Properties, ache a linha que diz Color e a linha que diz Size. Mude a cor com o mouse clicando no quadradinho de cor. Depois conte para o professor onde fica a propriedade Color.`,
      gabarito: `A criança acertou quando aponta a linha Color no painel Properties e consegue mudar a cor do bloco com o mouse. O professor confirma vendo o bloco com cor nova e a criança nomeando as propriedades Color e Size.`,
    },
    {
      titulo: `Copiando a linha mágica`,
      tipo: `Prática na ferramenta`,
      tempo: `10 minutos`,
      guiaProfessor: `Guie os 5 passos da lousa: criar Part, renomear para Bloco no Explorer (botão direito depois Rename), inserir Script (sinal de mais depois Script), apagar o print que vem pronto e copiar do cartão as duas linhas. Construa a primeira junto e libere o resto. Passe nas mesas conferindo se o Script está dentro do bloco no Explorer.`,
      atividade: `Crie uma Part e renomeie para Bloco. Insira um Script dentro dela. Apague a linha que veio pronta e digite igual ao cartão: local bloco = script.Parent depois, na linha de baixo, bloco.Color = Color3.fromRGB(255, 0, 0). Aperte Play e veja o bloco ficar vermelho. Aperte Stop.`,
      gabarito: `Pronto quando, ao apertar Play, o bloco da criança fica vermelho. O código correto é: local bloco = script.Parent e bloco.Color = Color3.fromRGB(255, 0, 0). O Script deve aparecer no Explorer recuado embaixo do nome Bloco.`,
    },
    {
      titulo: `Inventando a minha cor`,
      tipo: `Experimentação na ferramenta`,
      tempo: `10 minutos`,
      guiaProfessor: `Agora a criança brinca com os três números da cor. Explique que são potinhos de tinta de 0 a 255: vermelho, verde e azul. Sugira testes: (0, 0, 255) dá azul, (0, 255, 0) dá verde, (255, 255, 0) dá amarelo. Deixe apertar Play e Stop quantas vezes quiser. Premie quem descobrir uma cor nova.`,
      atividade: `Na sua linha bloco.Color = Color3.fromRGB(255, 0, 0), troque os três números. Tente (0, 0, 255) e aperte Play: que cor ficou? Agora invente os seus números e descubra uma cor que você goste. Anote os três números da sua cor favorita.`,
      gabarito: `A criança acertou quando muda os números, aperta Play e o bloco aparece com uma cor diferente da vermelha. Exemplos: (0, 0, 255) fica azul, (0, 255, 0) fica verde, (255, 255, 0) fica amarelo. Qualquer combinação de três números entre 0 e 255 é válida.`,
    },
    {
      titulo: `Crescendo o bloco com código`,
      tipo: `Desafio na ferramenta`,
      tempo: `8 minutos`,
      guiaProfessor: `Mostre que a mesma ideia muda outra propriedade: o tamanho. No projetor, troque a linha da cor pela linha do tamanho usando Vector3.new com três números (largura, altura, profundidade). Explique que números maiores deixam o bloco gigante. Ajude quem confundir Color3 com Vector3, lembrando que cor usa fromRGB e tamanho usa new.`,
      atividade: `Embaixo da sua linha de cor, escreva uma linha nova: bloco.Size = Vector3.new(10, 10, 10). Aperte Play e veja o bloco crescer. Agora troque os números por (20, 5, 20) e aperte Play de novo. O que aconteceu com o formato do bloco?`,
      gabarito: `Pronto quando, ao apertar Play, o bloco muda de tamanho. Com Vector3.new(10, 10, 10) o bloco fica um cubo maior; com (20, 5, 20) ele fica largo e baixinho, como uma mesa. A criança deve perceber que cada número mexe num lado do bloco.`,
    },
    {
      titulo: `Plano do meu objeto que reage`,
      tipo: `Planejamento no papel e roda de conversa`,
      tempo: `10 minutos`,
      guiaProfessor: `Encerre conectando com a Entrega Final do mês. Entregue a folha "Plano do meu objeto". Cada criança escolhe um objeto da cena e decide uma reação para programar na próxima aula: mudar de cor, ficar maior ou sumir. Não precisa codar agora, só planejar. Faça uma roda para alguns contarem a ideia. Guarde os planos para a Aula 8.`,
      atividade: `Na folha, desenhe o objeto que você quer dar vida na próxima aula. Escreva qual propriedade você vai mudar (cor, tamanho ou transparência) e qual vai ser a reação dele. Depois conte para a turma: "Meu objeto vai ___ quando o jogo começar."`,
      gabarito: `Concluído quando a criança escolhe um objeto, nomeia uma propriedade que vai mudar (Color, Size ou Transparency) e descreve a reação em uma frase, por exemplo "meu objeto vai ficar azul" ou "meu objeto vai crescer". Todo aluno deve sair com um plano desenhado e escrito, pronto para a Entrega Final.`,
    },
  ],
};
