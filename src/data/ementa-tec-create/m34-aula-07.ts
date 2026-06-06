import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 7,
  titulo: "Testar, ajustar e proteger",
  semana: "Semana 4",
  duracao: "1 hora",
  objetivo: `Fazer uma revisão completa do site que já está online, testando o banco de dados em produção, conferindo a página no celular e no computador e aplicando ajustes finais de segurança e desempenho antes do lançamento.`,
  descricao: `Nesta aula o site dos alunos já está no ar, com domínio próprio e hospedagem funcionando. Agora chega o momento mais importante antes do lançamento oficial: testar tudo com calma, com olhos de detetive. Um site pode parecer pronto na tela do programador e quebrar na mão de outra pessoa, num celular diferente ou quando muitos visitantes acessam ao mesmo tempo. Por isso, hoje os alunos vão agir como testadores profissionais, procurando o que está errado de propósito.

A revisão tem três frentes. A primeira é o banco de dados em produção: o aluno acessa o site real, preenche o formulário, envia os dados e confere se eles foram realmente gravados no banco e se voltam corretamente na consulta. É diferente de testar no computador de casa, porque agora os dados viajam pela internet de verdade. A segunda frente é a experiência em telas diferentes: o mesmo site precisa ficar bonito e funcionar tanto no computador grande quanto na tela estreita do celular. A terceira frente é segurança e desempenho: bloquear campos vazios, evitar textos perigosos enviados pelo formulário, garantir que o cadeado de segurança (HTTPS) está ativo e deixar a página rápida para abrir.

O professor não precisa ser especialista. A aula é um roteiro de verificação, como uma lista de checagem de piloto antes de decolar. Cada item é simples: abrir, testar, anotar o que falhou e corrigir. Os ajustes de código são pequenos e diretos, focados em validação de formulário, mensagens de erro amigáveis e checagem do HTTPS.

Ao final, cada aluno terá uma lista de verificação preenchida, pelo menos um problema encontrado e corrigido, o site testado no celular e no computador, e as proteções básicas aplicadas. Isso prepara diretamente a Aula 8, o lançamento do site para todo mundo, com a tranquilidade de quem já testou e ajustou tudo antes.`,
  materiais: [
    `Computadores com acesso ao painel da hospedagem, ao banco de dados e ao site já publicado com domínio próprio`,
    `Editor de código (VS Code ou similar) com o projeto do site aberto para os ajustes finais`,
    `Navegador de internet atualizado, com as ferramentas de desenvolvedor disponíveis (tecla F12)`,
    `Celular de cada aluno ou o modo de tela estreita do navegador para testar a versão móvel`,
    `Projetor ou TV para o professor demonstrar os testes e os ajustes no código`,
    `Lista de verificação impressa (checklist) com os itens de banco de dados, telas, segurança e velocidade`,
    `Arquivo de exemplo com um formulário de contato simples para os ajustes de validação`,
  ],
  conceitosChave: [
    `Produção — o site de verdade, no ar e com domínio próprio, que qualquer pessoa pode acessar pela internet; é diferente do teste feito só no seu computador.`,
    `Teste — abrir o site e usá-lo de propósito para descobrir o que está quebrado antes que o visitante descubra.`,
    `Responsivo — quando o site se ajusta sozinho para ficar bem tanto na tela grande do computador quanto na tela estreita do celular.`,
    `Validação — checar os dados do formulário antes de enviar, recusando campos vazios ou textos inválidos.`,
    `HTTPS — o cadeado de segurança do navegador que embaralha os dados entre o visitante e o site, protegendo as informações.`,
    `Desempenho — o quanto a página é rápida para carregar; quanto mais leve, melhor a experiência de quem visita.`,
    `Checklist — lista de itens a conferir, marcada um a um, para não esquecer nenhum teste importante.`,
  ],
  treinamento: `## O que o professor precisa saber

Hoje você guia uma revisão, não ensina uma ferramenta nova. Tudo o que os alunos precisam já foi construído nas aulas anteriores: site no ar, domínio e banco de dados funcionando. Sua função é conduzir uma lista de checagem e ajudar nos pequenos ajustes de código. Você não precisa ser especialista em segurança; basta seguir os passos abaixo.

Antes da aula, abra o site de cada turma no seu navegador e confira o cadeado ao lado do endereço. Se aparecer o cadeado fechado, o HTTPS está ativo. Clique nele para ver a mensagem de conexão segura. Aprenda a abrir o modo celular: pressione a tecla F12 para abrir as ferramentas de desenvolvedor e clique no ícone de celular e tablet no topo do painel; a tela do site vira estreita, como num telefone. Esses dois gestos (ver o cadeado e ligar o modo celular) são o coração da aula.

## Passo a passo da aula (ritmo 10/15/25/10)

10 min - Aquecimento e revisão: Pergunte à turma: "Como você descobre se o seu site está mesmo funcionando para outra pessoa?" Anote as ideias no quadro. Mostre, no projetor, o site de exemplo aberto, aponte o cadeado de segurança e diga que hoje todos serão testadores.

15 min - Conteúdo novo guiado: Apresente a checklist em quatro partes: banco de dados, telas, segurança e velocidade. Mostre como validar um formulário. No projetor, escreva o código de validação em JavaScript, linha a linha:

const nome = document.getElementById("nome").value;
if (nome === "") {
  alert("Por favor, preencha o seu nome.");
}

Explique: a primeira linha pega o que a pessoa digitou no campo de nome; o if compara com texto vazio (duas aspas sem nada dentro); se estiver vazio, o alert mostra um aviso e o envio para. Isso evita salvar dados em branco no banco.

25 min - Mão na massa: Cada aluno percorre a checklist no próprio site. Primeiro envia o formulário em produção e confere no banco se o registro chegou. Depois abre o modo celular (tecla F12, ícone de celular) e vê se tudo cabe na tela estreita. Em seguida adiciona a validação de campo vazio no JavaScript. Por fim, confere o cadeado HTTPS. Circule anotando os problemas que cada um encontrar.

10 min - Desafio e compartilhar: Cada aluno mostra um problema que encontrou e como corrigiu. Feche pedindo que dois voluntários apresentem o site no celular e no computador lado a lado no projetor.

## Como explicar de forma clara (linguagem para a idade)

Use a imagem do piloto de avião: "Antes de decolar, o piloto não confia na sorte, ele passa por uma lista item por item. Hoje vocês são pilotos do próprio site." Para responsivo, diga: "Seu site é como água, ele toma o formato do copo, seja o copo grande do computador ou o copinho do celular." Para validação, fale: "É como um porteiro do formulário: se o campo está vazio, ele não deixa passar." Para o HTTPS, mostre o cadeado e diga: "Cadeado fechado quer dizer que ninguém no meio do caminho consegue ler o que a pessoa enviou."

## Erros comuns e como ajudar

O erro mais comum é testar só no próprio computador e achar que está tudo certo; insista em testar o site real, com o domínio, e no celular. Outro é esquecer as aspas vazias na comparação do if; mostre que são duas aspas juntas, sem espaço. Alguns escrevem o id errado no getElementById; peça que confiram o nome exato do campo no HTML. Há quem confunda recarregar a página com publicar a correção; lembre-os de salvar e enviar o arquivo para a hospedagem antes de testar de novo. Por fim, muitos ignoram o cadeado; faça cada aluno clicar nele e confirmar a mensagem de conexão segura.`,
  exercicios: [
    {
      titulo: `Testar o banco de dados em produção`,
      tipo: `prática na ferramenta`,
      tempo: `8 min`,
      guiaProfessor: `Confirme que cada aluno usa o site real (com o domínio), e não o arquivo local. Acompanhe se o registro enviado aparece na tabela do banco de dados.`,
      atividade: `Abra o seu site pelo domínio próprio, preencha o formulário com um nome de teste e envie. Depois abra o painel do banco de dados e confira se o novo registro foi gravado.`,
      gabarito: `O aluno acerta quando o registro de teste enviado pelo site online aparece na tabela do banco de dados, com o mesmo texto que ele digitou. Se nada aparecer, deve verificar se enviou pelo domínio e se o formulário aponta para o endereço correto de gravação.`,
    },
    {
      titulo: `Conferir o site no celular`,
      tipo: `prática na ferramenta`,
      tempo: `8 min`,
      guiaProfessor: `Mostre como abrir o modo celular com a tecla F12 e o ícone de celular. Ajude quem tiver texto cortado ou botões fora da tela a anotar o problema na checklist.`,
      atividade: `Abra o seu site e ligue o modo celular (tecla F12, depois o ícone de celular e tablet). Veja se o texto cabe na tela, se as imagens não estouram a largura e se os botões dá para tocar com o dedo.`,
      gabarito: `A verificação está correta quando o aluno consegue ver o site na tela estreita e anota pelo menos um ponto sobre o que cabe ou não cabe. Site responsivo correto: nenhum texto cortado, nenhuma barra de rolagem na horizontal e botões grandes o suficiente para o toque.`,
    },
    {
      titulo: `Validar campo vazio no formulário`,
      tipo: `código`,
      tempo: `12 min`,
      guiaProfessor: `Conduza a digitação linha a linha. Reforce as duas aspas vazias na comparação e confira se o id usado é o mesmo do campo no HTML. Peça que testem enviando o formulário vazio.`,
      atividade: `Adicione no seu JavaScript uma checagem que mostra um aviso quando o campo de nome estiver vazio. Teste enviando o formulário em branco e veja se o aviso aparece.`,
      gabarito: `Solução esperada:

const nome = document.getElementById("nome").value;
if (nome === "") {
  alert("Por favor, preencha o seu nome.");
}

Funciona quando, ao enviar o formulário com o campo de nome vazio, o aviso aparece e os dados em branco não são salvos. Se o campo estiver preenchido, o envio segue normalmente.`,
    },
    {
      titulo: `Conferir o cadeado de segurança (HTTPS)`,
      tipo: `desafio`,
      tempo: `8 min`,
      guiaProfessor: `Faça cada aluno clicar no cadeado ao lado do endereço e ler a mensagem. Se aparecer "não seguro", oriente a procurar a opção de HTTPS ou SSL no painel da hospedagem.`,
      atividade: `Abra o seu site e olhe ao lado do endereço. Clique no cadeado e leia a mensagem. Anote se a conexão está segura e troque o endereço de http para https para ver o que muda.`,
      gabarito: `O desafio é cumprido quando o aluno confirma o cadeado fechado e a mensagem de conexão segura ao acessar com https. O endereço correto começa com https. Se aparecer aviso de "não seguro", o aluno deve registrar que precisa ativar o HTTPS no painel da hospedagem.`,
    },
    {
      titulo: `Checklist final e correção de um problema`,
      tipo: `projeto curto`,
      tempo: `12 min`,
      guiaProfessor: `Entregue a checklist com os quatro grupos: banco de dados, telas, segurança e velocidade. Garanta que cada aluno escolha um problema real, corrija e teste de novo após publicar.`,
      atividade: `Preencha a checklist marcando cada item testado. Escolha um problema que você encontrou, corrija no código ou no painel, publique a correção e teste novamente para confirmar que resolveu.`,
      gabarito: `O trabalho está completo quando a checklist tem os quatro grupos conferidos e o aluno descreve um problema, a correção feita e o novo teste. Exemplo aceito: "O nome vazio era salvo no banco; adicionei a validação no JavaScript; testei com o campo vazio e agora aparece o aviso e nada é salvo."`,
    },
  ],
};
