import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 8,
  titulo: "No ar: publicando seu site",
  semana: "Semana 4",
  duracao: "1 hora",
  objetivo: `Colocar a página HTML e CSS do aluno na internet usando uma hospedagem gratuita, acessá-la por um link real no celular e apresentá-la para a turma, fechando o entregável do mês.`,
  descricao: `Esta é a aula que transforma o trabalho do mês em algo de verdade. Durante quatro semanas o aluno aprendeu como a web funciona, escreveu suas primeiras tags, adicionou imagens e links, deu cor e estilo com CSS e organizou o layout da página. Até agora, porém, tudo isso vivia apenas no computador da escola: o site existia, mas só o próprio aluno conseguia ver. Hoje isso muda. Publicar significa enviar os arquivos para um servidor na internet e receber um endereço público — um link que qualquer pessoa, em qualquer lugar do mundo, pode abrir.

Para isso usaremos uma ferramenta de hospedagem gratuita. Existem várias boas opções para iniciantes, e a mais simples para uma aula como esta é o Netlify Drop: o aluno arrasta a pasta do site para uma página no navegador e, em segundos, recebe um endereço pronto. Não é preciso instalar nada nem digitar comandos. O conceito por trás é o mesmo de qualquer publicação na web: os arquivos saem do computador (local) e vão para um servidor (na nuvem), que passa a entregá-los para quem acessar o link.

O momento mais marcante da aula acontece quando o aluno pega o próprio celular, digita o endereço e vê a página que ele criou aparecer na tela do telefone. É a prova concreta de que aquilo virou um site de verdade, acessível fora da escola. Aproveitamos para conversar sobre algo importante: tudo o que vai para a internet fica público, então o site não deve conter informações pessoais sensíveis como endereço de casa, telefone ou senha.

A aula termina com uma apresentação. Cada aluno compartilha o link com a turma, mostra a página no projetor e conta uma escolha de design que fez — uma cor, uma fonte, uma imagem. É a celebração de um mês inteiro de trabalho e a primeira vez que cada um pode dizer, com orgulho, que tem um site no ar.`,
  materiais: [
    `Computadores com a pasta completa do site de cada aluno (o arquivo index.html, o arquivo de CSS e a pasta de imagens) e um editor de código instalado, caso seja preciso ajustar algo de última hora`,
    `Navegador atualizado (Chrome, Edge ou Firefox) em cada computador para acessar a ferramenta de hospedagem`,
    `Projetor para o professor demonstrar a publicação ao vivo e para os alunos apresentarem suas páginas no fim`,
    `Conexão de internet estável (a publicação envia arquivos para a nuvem)`,
    `Celular do aluno ou alguns aparelhos de reserva da escola para testar o site pelo endereço real`,
    `Pasta de exemplo "site-pronto" com um index.html simples, para o professor treinar o passo a passo antes da aula e para usar como reserva`,
    `Folha impressa "Meu site no ar" com espaço para o aluno anotar o link gerado e marcar um checklist final`,
  ],
  conceitosChave: [
    `Publicar (deploy) — enviar os arquivos do site do computador para um servidor na internet, de modo que outras pessoas consigam acessá-los.`,
    `Hospedagem — serviço que guarda os arquivos do seu site e os entrega para quem abrir o endereço; aqui usamos uma opção gratuita.`,
    `Servidor — computador sempre ligado, na nuvem, que recebe os arquivos e os mostra a quem acessa o link.`,
    `URL (endereço) — o link público do site, como meu-site.netlify.app, que se digita no navegador para abrir a página.`,
    `Local x na nuvem — local é o que está só no seu computador; na nuvem é o que está num servidor da internet, acessível de qualquer lugar.`,
    `index.html — o arquivo principal de um site; o servidor o abre automaticamente quando alguém acessa o endereço, sem precisar digitar o nome dele.`,
    `Conteúdo público — tudo o que é publicado na web fica visível para qualquer pessoa, por isso não se colocam dados pessoais sensíveis no site.`,
  ],
  treinamento: `## O que o professor precisa saber

Você não precisa ser especialista em servidores. A ferramenta desta aula, o Netlify Drop, foi feita para ser simples: arrasta-se uma pasta para o navegador e o site fica no ar em segundos, sem instalar programas nem digitar comandos. Antes da aula, faça você mesmo o teste com a pasta de exemplo "site-pronto" para chegar tranquilo. Há um detalhe que evita 90 por cento dos problemas: o arquivo principal precisa se chamar exatamente index.html (tudo minúsculo), porque é esse nome que o servidor procura ao abrir o endereço. Confira também que o site está numa pasta única contendo o index.html, o arquivo de CSS e a pasta de imagens — é essa pasta inteira que será arrastada, e não apenas um arquivo solto.

## Passo a passo da aula

Aquecimento e revisão (10 min): pergunte à turma "quem, fora desta sala, já viu o seu site?". A resposta vai ser "ninguém", e isso abre o tema do dia. Explique com uma frase a diferença entre local e na nuvem. No projetor, abra a pasta de um site e mostre os três pedaços: o index.html, o CSS e a pasta de imagens.

Conteúdo novo guiado (15 min): demonstre a publicação ao vivo com a pasta de exemplo. Confirme que o arquivo principal se chama index.html. Se precisar criar ou conferir, mostre a estrutura mínima de uma página:

    <!DOCTYPE html>
    <html lang="pt-br">
      <head>
        <meta charset="UTF-8">
        <title>Meu primeiro site</title>
        <link rel="stylesheet" href="estilo.css">
      </head>
      <body>
        <h1>Bem-vindo ao meu site!</h1>
        <p>Esta página esta no ar.</p>
      </body>
    </html>

Aponte a linha do link rel stylesheet: ela conecta o HTML ao arquivo de estilo. Agora abra netlify.com/drop no navegador, arraste a pasta inteira para a área indicada e mostre o endereço aparecer. Clique no link e veja a página abrir.

Mão na massa (25 min): cada aluno publica o próprio site. O roteiro: 1) conferir que o arquivo principal é index.html; 2) abrir netlify.com/drop; 3) arrastar a pasta do site; 4) esperar o endereço; 5) abrir o link no navegador; 6) anotar o endereço na folha "Meu site no ar". Circule resolvendo dúvidas e celebrando cada link que aparece.

Desafio e compartilhar (10 min): cada aluno digita o próprio endereço no celular e confirma que a página abre fora da escola. Depois, dois ou três voluntários mostram a página no projetor e contam uma escolha de design que fizeram.

## Como explicar de forma clara

Use comparações do dia a dia. Publicar é "mandar a sua redação para a banca de jornal": antes só você lia no caderno; agora qualquer um compra e lê. O servidor é "uma loja que nunca fecha", sempre pronta a entregar o site a quem chega. O endereço (URL) é "o endereço da casa": sem ele, ninguém encontra você. E o index.html é "a porta da frente": quando alguém chega ao endereço, é por ela que entra primeiro. Para o cuidado com dados, diga: "a internet é uma praça cheia de gente; não grite na praça o número da sua casa".

## Erros comuns e como ajudar

Arquivo com nome errado: se o principal não se chama index.html, o link mostra uma lista de arquivos ou um erro. Renomeie para index.html, tudo minúsculo, e publique de novo. Arrastar só um arquivo em vez da pasta inteira: o CSS e as imagens somem; oriente a arrastar a pasta completa. Caminho de imagem ou de CSS errado: a página abre sem cor ou sem foto porque o href ou o src aponta para um lugar que não existe na pasta; confira se os nomes batem exatamente, com maiúsculas e minúsculas. Esquecer de anotar o endereço: peça que registrem o link na folha assim que ele aparece. E, na pressa, o aluno publicar e não testar: reforce sempre abrir o próprio link antes de comemorar.`,
  exercicios: [
    {
      titulo: `Local ou na nuvem?`,
      tipo: `Quiz rápido`,
      tempo: `6 min`,
      guiaProfessor: `Use este aquecimento para fixar a diferença central da aula antes da prática. Leia cada situação em voz alta e peça que a turma responda "local" ou "na nuvem". Aproveite as respostas erradas para reexplicar com a comparação da redação no caderno (local) e na banca de jornal (na nuvem).`,
      atividade: `Para cada frase, diga se ela descreve algo LOCAL (só no seu computador) ou NA NUVEM (na internet, acessível por um link): 1) "O site está aberto no editor de código da escola." 2) "Mandei o endereço para a minha mãe e ela abriu no celular dela em casa." 3) "Só eu consigo ver a página." 4) "Qualquer pessoa do mundo abre pelo link."`,
      gabarito: `1) Local. 2) Na nuvem. 3) Local. 4) Na nuvem. O aluno acerta quando entende que "local" é o que vive só no computador dele e "na nuvem" é o que está num servidor da internet, acessível por um endereço público de qualquer lugar.`,
    },
    {
      titulo: `Conferindo o index.html`,
      tipo: `Prática na ferramenta`,
      tempo: `8 min`,
      guiaProfessor: `Este é o passo que evita a maioria dos erros na publicação. Mostre no projetor onde aparece o nome do arquivo e como renomear no editor ou no explorador de arquivos. Verifique aluno por aluno antes de liberar a publicação, pois um nome errado faz o site não abrir.`,
      atividade: `Abra a pasta do seu site e confira o nome do arquivo principal. Ele precisa estar escrito exatamente assim: index.html, tudo em letras minúsculas. Se estiver diferente (por exemplo Index.html, página.html ou index.HTML), renomeie para index.html. Confira também que a pasta tem o arquivo de CSS e a pasta de imagens dentro dela.`,
      gabarito: `O aluno acertou quando a pasta do site contém um arquivo chamado exatamente index.html (minúsculo), junto com o arquivo de CSS e a pasta de imagens. Nomes como Index.html ou página.html devem ser corrigidos, pois o servidor procura justamente por index.html ao abrir o endereço.`,
    },
    {
      titulo: `Publicando com o Netlify Drop`,
      tipo: `Prática na ferramenta`,
      tempo: `12 min`,
      guiaProfessor: `Conduza junto com a turma, projetando os passos. Espere todos abrirem netlify.com/drop antes de mandar arrastar. Reforce que se arrasta a PASTA inteira, não um arquivo solto. Comemore cada endereço que aparece e garanta que cada aluno anote o link na folha "Meu site no ar".`,
      atividade: `Publique o seu site seguindo os passos: 1) abra o navegador e vá em netlify.com/drop; 2) arraste a PASTA inteira do seu site para a área indicada na página; 3) espere alguns segundos até aparecer um endereço, algo como meu-site-feliz.netlify.app; 4) clique no endereço e confira a sua página abrindo; 5) anote o endereço na folha "Meu site no ar".`,
      gabarito: `Sucesso quando a página gera um endereço terminado em .netlify.app, o link abre o site do aluno com texto, cores e imagens corretos, e o endereço fica anotado na folha. Se abrir sem cor ou imagem, o caminho do CSS ou da imagem está errado; se mostrar uma lista de arquivos, o principal não se chama index.html.`,
    },
    {
      titulo: `Testando no celular`,
      tipo: `Desafio`,
      tempo: `10 min`,
      guiaProfessor: `Este é o momento mais emocionante da aula. Tenha alguns aparelhos de reserva para quem não trouxe celular. Oriente a digitar o endereço com atenção, letra por letra. Aproveite para abrir a conversa sobre conteúdo público: pergunte se há algum dado pessoal sensível na página que seria melhor tirar.`,
      atividade: `Pegue o celular e digite no navegador o endereço do seu site, exatamente como você anotou. Confira que a página abre no telefone, fora do computador da escola. Em seguida, olhe a sua página com olhos de visitante: existe algum dado pessoal que não deveria estar público (telefone, endereço de casa, senha)? Se houver, anote para remover.`,
      gabarito: `Concluído quando o site abre corretamente no celular pelo endereço real, provando que está acessível fora da escola, e o aluno identifica que dados pessoais sensíveis não devem ficar públicos. Se a página não abrir, geralmente é erro de digitação do endereço — confira letra por letra e tente de novo.`,
    },
    {
      titulo: `Meu site no ar: a apresentação`,
      tipo: `Roda de apresentação`,
      tempo: `14 min`,
      guiaProfessor: `Esta é a entrega que fecha o mês. Projete a página de cada voluntário e peça que compartilhe o link com a turma. Conduza pedindo a cada um que conte uma escolha de design e um desafio que superou no mês. Valorize a conquista: é o primeiro site no ar de cada aluno. Garanta que todos os links foram anotados e estão funcionando.`,
      atividade: `Compartilhe o endereço do seu site com a turma e apresente a sua página no projetor. Conte para os colegas: 1) uma escolha de design que você fez (uma cor, uma fonte, uma imagem) e por quê; 2) uma parte que deu trabalho durante o mês e como você resolveu. No fim, abra o link de um colega e mande para ele um elogio sobre algo que você gostou na página dele.`,
      gabarito: `Concluído quando o aluno apresenta a página aberta pelo link real, explica pelo menos uma escolha de design com justificativa e relata um desafio superado no mês. O entregável "Sua primeira página no ar" está cumprido quando o site abre por um endereço público, funciona no celular e foi compartilhado com a turma.`,
    },
  ],
};
