import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 6,
  titulo: "Colocando o site no ar",
  semana: "Semana 3",
  duracao: "1 hora",
  objetivo: `Publicar o site na hospedagem, conectar o domínio registrado e abrir o endereço no navegador, corrigindo caminhos de arquivos e links quebrados até a página carregar certinho.`,
  descricao: `Esta é a aula em que o site sai do computador do aluno e vai para a internet de verdade. Até agora a turma criou as páginas (HTML, CSS e JavaScript), aprendeu sobre banco de dados, escolheu um nome e registrou o domínio. Faltava só uma coisa: colocar tudo isso em um servidor que fica ligado o tempo todo, para que qualquer pessoa, em qualquer lugar, consiga abrir o site. Hoje fazemos exatamente isso.

Publicar um site é, no fundo, copiar os arquivos do seu computador para um computador da empresa de hospedagem. Esse computador especial, sempre ligado e conectado à internet, é o servidor. Quando alguém digita o endereço do site, o servidor entrega os arquivos para o navegador da pessoa. O aluno vai aprender a enviar (fazer o upload) dos arquivos para a pasta certa do servidor e, depois, a apontar o domínio que ele registrou para essa hospedagem, como quem coloca uma plaquinha com o endereço na frente da casa.

Quando o site entra no ar pela primeira vez, é comum aparecerem dois tipos de problema: caminhos de arquivos errados e links quebrados. No computador do aluno tudo funcionava, mas no servidor a pasta das imagens pode estar em outro lugar, ou o nome do arquivo principal pode estar errado. O navegador tem uma forma educada de avisar: o famoso erro 404, que quer dizer "não achei essa página". Aprender a ler esses avisos e a consertar os endereços dentre as páginas faz parte central da aula.

O foco do mês é colocar o site no ar, e o entregável é "seu site online pra todo mundo". Esta aula é o coração desse objetivo: ao final, cada aluno terá enviado seus arquivos, conectado o domínio e aberto o próprio site digitando o endereço no navegador. Pequenos ajustes finos, testes mais profundos e proteção ficam para as próximas aulas (7 e 8); hoje a meta é simples e poderosa: ver o site funcionando no ar.`,
  materiais: [
    `Computadores com acesso à internet, navegador atualizado e um editor de código instalado (um por aluno)`,
    `Conta de hospedagem já criada para cada aluno, com login e senha anotados, e o painel de controle acessível (cPanel ou painel equivalente)`,
    `Domínio já registrado na Aula 4, com o endereço anotado em um papel ou slide`,
    `Pasta do projeto pronta no computador do aluno, com index.html, a pasta css, a pasta js e a pasta imagens`,
    `Projetor ou TV para o professor mostrar o passo a passo do upload e da conexão do domínio em tela grande`,
    `Arquivo de exemplo simples (um site mínimo com index.html, style.css e uma imagem) para o professor demonstrar o processo do zero`,
    `Lista impressa com os dados de cada aluno: usuário da hospedagem, nome do domínio e o caminho da pasta de publicação (geralmente public_html)`,
  ],
  conceitosChave: [
    `Servidor — computador da empresa de hospedagem que fica sempre ligado e entrega o seu site para quem digita o endereço.`,
    `Upload — enviar os arquivos do seu computador para o servidor, ou seja, copiar de cá para lá.`,
    `public_html — a pasta especial do servidor onde os arquivos do site devem ficar para aparecerem no ar.`,
    `Domínio — o nome amigável do site (como meusite.com.br) que as pessoas digitam no navegador.`,
    `Apontar o domínio — dizer ao domínio em qual hospedagem ele deve buscar os arquivos do site.`,
    `index.html — o arquivo de entrada do site; é a página que o servidor mostra primeiro quando alguém abre o endereço.`,
    `Link quebrado (erro 404) — quando o navegador procura um arquivo ou página e não encontra, porque o caminho está errado ou o arquivo não foi enviado.`,
  ],
  treinamento: `## O que o professor precisa saber

Você não precisa ser especialista em servidores. Precisa entender uma ideia central: publicar um site é copiar os arquivos do computador do aluno para uma pasta do servidor chamada public_html. Quem faz essa cópia é o Gerenciador de Arquivos do painel de hospedagem (no cPanel, o item se chama "File Manager" ou "Gerenciador de Arquivos"). Decore esse caminho: entrar no painel, abrir o Gerenciador de Arquivos, entrar na pasta public_html e usar o botão "Upload" para enviar os arquivos. A segunda ideia é o domínio: ele precisa "apontar" para a hospedagem. Na maioria dos casos a empresa já entrega domínio e hospedagem ligados; quando não, basta confirmar no painel que o domínio está conectado àquela conta. Antes da aula, faça o processo inteiro uma vez com o site de exemplo, do upload até abrir no navegador, para ganhar confiança.

## Passo a passo da aula (ritmo 10/15/25/10, com o código exato)

10 min, aquecimento e revisão. Pergunte: "Onde está o seu site agora?" Conduza até a resposta: só no computador dele. Mostre na tela grande a pasta do projeto e diga que hoje ela vai viajar para o servidor. Confira rápido com a turma se todos têm a pasta com index.html.

15 min, conteúdo novo guiado. Abra o painel da hospedagem no projetor. Mostre o login, depois clique em "Gerenciador de Arquivos". Entre na pasta public_html. Clique no botão "Upload" e envie o index.html do site de exemplo. Reforce que o arquivo principal precisa se chamar exatamente index.html, tudo minúsculo. Mostre que, dentro do HTML, os caminhos devem ser relativos. Escreva o exemplo certo na tela: para o CSS, a linha no cabeçalho é <link rel="stylesheet" href="css/style.css">. Para uma imagem, a linha é <img src="imagens/logo.png" alt="Logo do site">. Para um link entre páginas, é <a href="contato.html">Contato</a>. Explique que href="css/style.css" significa "a pasta css que está do lado deste arquivo", e que começar com barra ou com C: quebra no servidor. Por fim, abra uma aba e digite o domínio do exemplo para mostrar o site no ar.

25 min, mão na massa. Cada aluno entra no próprio painel, abre o Gerenciador de Arquivos, entra em public_html e faz o upload de toda a pasta do projeto: index.html e as pastas css, js e imagens. Quem tiver opção de enviar um arquivo .zip e depois "Extract" pode usar para subir tudo de uma vez. Em seguida, cada aluno digita o próprio domínio no navegador e vê o que acontece. Circule pela sala ajudando quem vir página em branco, erro 404 ou imagem que não aparece.

10 min, desafio e compartilhar. Peça que cada aluno encontre e conserte pelo menos um link quebrado ou uma imagem que não carregou, ajustando o caminho no arquivo e enviando de novo. Faça uma rodada: cada aluno mostra ao colega do lado o site aberto pelo endereço real.

## Como explicar de forma clara (linguagem para a idade)

Use a comparação da mudança de casa. Diga: "Seu site morava no seu computador. Hoje ele se muda para uma casa nova, o servidor, que fica de portas abertas o tempo todo." O domínio é a plaquinha com o endereço na frente da casa; o public_html é a sala onde as visitas entram. Para o erro 404, diga: "É o servidor falando: procurei essa página e não achei." Para caminhos, use a ideia de "do lado": css/style.css quer dizer "a pasta css que está do lado do index". Sempre que possível, abra o site real no projetor para a turma sentir que é de verdade.

## Erros comuns e como ajudar

O erro mais comum é subir os arquivos no lugar errado, fora de public_html; o site não aparece. Confira sempre se eles estão dentro dessa pasta. O segundo é o arquivo principal com nome errado, como Index.html ou pagina.html; ensine que precisa ser index.html minúsculo. O terceiro é o caminho da imagem ou do CSS começar com C: ou com barra; mostre que no servidor só funcionam caminhos relativos, do lado do arquivo. Imagem que não aparece quase sempre é nome trocado, com maiúscula onde devia ser minúscula, pois o servidor diferencia Logo.png de logo.png. Por fim, se o domínio ainda mostrar página de "em construção", pode ser que ele esteja apontando para outra hospedagem; confirme no painel que o domínio está ligado àquela conta.`,
  exercicios: [
    {
      titulo: `Enviando o primeiro arquivo`,
      tipo: `prática na ferramenta`,
      tempo: `8 minutos`,
      guiaProfessor: `Garanta que cada aluno esteja logado no painel da hospedagem antes de começar. Reforce o caminho: Gerenciador de Arquivos, pasta public_html, botão Upload.`,
      atividade: `Entre no painel da sua hospedagem, abra o Gerenciador de Arquivos, entre na pasta public_html e envie o seu arquivo index.html. Depois digite o seu domínio no navegador e veja se a página abre.`,
      gabarito: `Ao abrir o domínio, deve aparecer o conteúdo do index.html no navegador. Caminho correto: painel da hospedagem, "Gerenciador de Arquivos", entrar em public_html, botão "Upload", escolher o index.html. Se aparecer página em branco ou erro, o arquivo provavelmente foi enviado fora de public_html ou com nome diferente de index.html.`,
    },
    {
      titulo: `Caminho certo, caminho errado`,
      tipo: `análise de código`,
      tempo: `9 minutos`,
      guiaProfessor: `Mostre as três linhas no projetor. Peça que os alunos apontem qual quebra no servidor e por quê. Lembre que caminhos com C: ou barra no começo não funcionam online.`,
      atividade: `Olhe estas três linhas e diga qual delas vai quebrar quando o site estiver no servidor, e como consertar: linha A: <img src="imagens/foto.png" alt="Foto">; linha B: <img src="C:/Users/aluno/imagens/foto.png" alt="Foto">; linha C: <link rel="stylesheet" href="css/style.css">.`,
      gabarito: `A linha que quebra é a B, porque usa um caminho do computador do aluno (C:/Users/...), que não existe no servidor. As linhas A e C estão certas, pois usam caminhos relativos, do lado do arquivo. Conserto da B: trocar por <img src="imagens/foto.png" alt="Foto">, garantindo que a imagem esteja na pasta imagens enviada para o servidor.`,
    },
    {
      titulo: `Subindo o site inteiro`,
      tipo: `prática na ferramenta`,
      tempo: `12 minutos`,
      guiaProfessor: `Oriente o upload de toda a pasta do projeto. Se o painel aceitar .zip, mostre como enviar o zip e usar "Extract". Circule conferindo se index, css, js e imagens estão dentro de public_html.`,
      atividade: `Envie para a pasta public_html o seu site completo: o index.html e as pastas css, js e imagens. Depois abra o seu domínio no navegador e confira se a página aparece com as cores do CSS e as imagens.`,
      gabarito: `O site deve abrir pelo domínio mostrando o texto, as cores do CSS e as imagens. Estrutura correta dentro de public_html: index.html, pasta css com style.css, pasta js com o script e pasta imagens com as figuras. Se o texto aparece mas sem cor, o caminho do CSS está errado; se a imagem não aparece, o nome ou a pasta da imagem está trocada.`,
    },
    {
      titulo: `Caça ao link quebrado`,
      tipo: `depuração`,
      tempo: `13 minutos`,
      guiaProfessor: `Ensine a reconhecer o erro 404 e a ler a mensagem do navegador. Mostre como achar o link errado no arquivo, corrigir o caminho e enviar de novo o arquivo alterado.`,
      atividade: `No seu site no ar, clique em todos os links do menu. Encontre pelo menos um que dê erro 404 ou que não leve a lugar nenhum. Corrija o caminho no arquivo, salve, envie o arquivo de novo para o servidor e teste outra vez até funcionar.`,
      gabarito: `O link deve passar a abrir a página certa, sem erro 404. Exemplo de conserto: se o menu tinha <a href="Contato.html">Contato</a> mas o arquivo se chama contato.html, troca-se para <a href="contato.html">Contato</a> e reenvia-se o index. O aluno deve enviar de novo o arquivo corrigido para o servidor; só salvar no computador não muda o site no ar.`,
    },
    {
      titulo: `Meu site no ar pelo endereço real`,
      tipo: `projeto curto`,
      tempo: `15 minutos`,
      guiaProfessor: `Verifique que o domínio de cada aluno está apontando para a hospedagem certa. Acompanhe o teste final em um aparelho diferente, como o celular, para mostrar que está acessível de qualquer lugar.`,
      atividade: `Confira que o seu domínio abre o seu site, e não uma página de "em construção". Abra o endereço em outra aba e, se der, no celular ou no computador do colega. Anote em uma frase o seu endereço completo e mostre o site funcionando para o professor.`,
      gabarito: `Ao digitar o domínio (por exemplo, meusite.com.br) em qualquer aparelho com internet, deve abrir o site do aluno, com a página inicial carregada. Se aparecer "em construção", o domínio está apontando para outra hospedagem e precisa ser conectado à conta certa no painel. A frase anotada deve trazer o endereço completo, começando por o nome do domínio do aluno.`,
    },
  ],
};
