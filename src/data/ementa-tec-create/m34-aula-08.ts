import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 8,
  titulo: "Seu site no ar para todo mundo",
  semana: "Semana 4",
  duracao: "1 hora",
  objetivo: `Finalizar a publicação do site, confirmar que o domínio aponta para a hospedagem com o banco de dados ativo e apresentar o site online completo para a turma compartilhando o link real.`,
  descricao: `Esta é a aula que coroa o mês inteiro. Durante quatro semanas o aluno entendeu o que é um banco de dados, aprendeu a guardar e consultar dados, escolheu e registrou um nome para o site, descobriu o que é hospedar, colocou o site no ar e, na aula passada, testou, ajustou e protegeu tudo. Hoje não se cria nada novo: o trabalho é fechar as últimas pontas, conferir que cada peça conversa com a outra e, principalmente, mostrar para a turma o resultado funcionando de verdade, acessível por um endereço que qualquer pessoa pode digitar no navegador.

Colocar um site no ar para todo mundo é diferente de testá-lo no próprio computador. No computador, o site abre com um endereço local que só funciona ali. No ar, o site mora em um servidor de hospedagem, ligado dia e noite, e responde quando alguém digita o domínio. Para isso dar certo, três peças precisam estar combinadas: o domínio (o nome), a hospedagem (a casa onde os arquivos moram) e o banco de dados (a memória que guarda as informações). Quando o aluno digita o próprio domínio no celular de um colega e o site aparece, fica claro que essas três peças finalmente se encaixaram.

O coração da aula é a checagem final e a apresentação. A checagem final é uma lista de verificação: o domínio abre o site certo? As páginas carregam? O formulário salva no banco? Os dados aparecem quando são consultados? Cada item conferido é uma garantia de que o visitante terá uma boa experiência. Depois vem o momento mais esperado: cada aluno projeta o próprio site, digita o link real na frente da turma e mostra o que construiu, explicando em poucas frases o que o site faz e o que mais gostou de criar.

Ao fim desta aula, o entregável do mês está pronto: um site online, com domínio próprio, hospedado e com banco de dados ativo, acessível para qualquer pessoa do mundo. É o encerramento de uma jornada que começou com uma pergunta simples, o que é um banco de dados, e termina com um produto real no ar. Celebre essa conquista: poucos adolescentes podem dizer que têm um site de verdade publicado com o próprio nome de domínio.`,
  materiais: [
    `Computadores com banco de dados, domínio e hospedagem já configurados, editor de código e navegador abertos, um por aluno`,
    `Projetor ou TV para cada aluno apresentar o próprio site digitando o link real na tela grande`,
    `Celular ou tablet (do professor ou dos alunos) para testar o domínio numa rede diferente da do computador`,
    `Folha impressa de checklist de publicação final (domínio, páginas, formulário, banco) para conferir item a item`,
    `Arquivo de exemplo com um site simples já publicado e funcionando, para servir de referência durante a checagem`,
    `Quadro branco ou bloco de notas digital para anotar os links reais de todos os alunos e montar a galeria da turma`,
  ],
  conceitosChave: [
    `Publicação — ato de deixar o site disponível no ar, em um servidor ligado o tempo todo, para que qualquer pessoa o acesse pela internet.`,
    `Domínio — o nome do site, como meusite.com.br, que a pessoa digita no navegador para chegar até as suas páginas.`,
    `Hospedagem — o serviço que guarda os arquivos do site em um servidor sempre ligado e os entrega quando alguém pede.`,
    `Banco de dados ativo — a memória do site funcionando online, salvando e devolvendo informações enquanto o site está no ar.`,
    `DNS — o sistema que liga o nome do domínio ao endereço do servidor, como uma lista telefônica que descobre onde o site mora.`,
    `Checklist de publicação — lista de verificação usada para confirmar, item por item, que tudo funciona antes de mostrar o site ao público.`,
    `Link real — o endereço completo e definitivo do site no ar, que pode ser compartilhado com qualquer pessoa.`,
  ],
  treinamento: `## O que o professor precisa saber

Esta é uma aula de fechamento e celebração, não de conteúdo novo. O site do aluno já foi publicado na aula passada; hoje o trabalho é confirmar que tudo funciona junto e apresentar. Antes da aula, abra o seu domínio de exemplo no navegador e teste o caminho completo: a página inicial carrega, o menu leva às outras páginas, o formulário envia e o dado aparece quando consultado. Faça esse mesmo teste no celular, usando a rede de dados em vez do Wi-Fi da escola, porque assim você prova que o site está mesmo no ar para o mundo, e não só na rede local. Você não precisa ser especialista: basta saber abrir um endereço, recarregar a página com F5 e olhar se a informação enviada por um formulário reaparece na tela. Se um domínio recém-registrado ainda não abrir, lembre que a propagação de DNS pode levar algumas horas; tenha um plano B, como o endereço temporário da hospedagem.

## Passo a passo da aula (ritmo 10/15/25/10)

Aquecimento (10 min): peça que cada aluno abra o navegador e digite o próprio domínio. Cada um confirma em voz alta: "Meu site abriu pelo nome real?". Quem ainda vê erro levanta a mão e você anota para ajudar no momento da mão na massa. No quadro, comece a lista com o link real de quem já abriu.

Conteúdo novo guiado (15 min): no projetor, mostre a checagem final usando o site de exemplo. Abra o domínio, navegue por todas as páginas, envie o formulário e prove que o dado foi salvo consultando-o em seguida. Mostre que o JavaScript que envia o formulário monta a mensagem sem chaves de interpolação, por concatenação. Exemplo de como avisar o usuário após salvar:

var nome = document.getElementById("nome").value;
alert("Obrigado, " + nome + "! Seus dados foram salvos.");

Explique linha a linha: a primeira pega o que a pessoa digitou no campo; a segunda mostra um aviso juntando o texto fixo com o nome digitado, usando o sinal de mais para colar os pedaços. Repita o teste no celular para provar que está no ar de verdade.

Mão na massa (25 min): cada aluno percorre o próprio checklist de publicação, conferindo domínio, páginas, formulário e banco. Quem encontrar um problema corrige com a sua ajuda: link quebrado, formulário que não salva ou página que não carrega. Circule pela sala. Quem terminar cedo testa o site do colega no próprio computador, como um visitante de verdade, e avisa o dono de qualquer detalhe estranho.

Desafio e compartilhar (10 min): cada aluno projeta o próprio site, digita o link real na frente da turma e apresenta em até um minuto o que o site faz e o que mais gostou de criar. Feche a aula lendo a galeria de links no quadro e parabenizando a turma pelo site no ar.

## Como explicar de forma clara (linguagem para a idade)

Compare a publicação com a inauguração de uma loja. Durante o mês a loja ficou em obras, fechada para o público; hoje a porta abre e qualquer pessoa pode entrar pelo endereço da rua, que é o domínio. Diga que a hospedagem é o prédio sempre aberto onde a loja funciona e que o banco de dados é o caderno onde a loja anota os pedidos dos clientes. Sobre o teste no celular, use a frase: "Se abre no celular pela internet, e não só aqui, é porque está mesmo no ar para o mundo." Trate a apresentação como um lançamento: o aluno é o criador mostrando o produto, e digitar o link na frente de todos é a prova de que aquilo existe de verdade.

## Erros comuns e como ajudar

O erro mais comum é o domínio ainda não abrir por causa da propagação de DNS; explique que pode demorar e use o endereço temporário da hospedagem para a apresentação. Outro é o formulário não salvar no banco; confira se o site no ar usa os dados de conexão da hospedagem, e não os do computador local. Há quem teste só a página inicial e esqueça o resto; insista no checklist inteiro. Muitos confundem o site no computador com o site no ar; mostre que o endereço local só funciona na máquina deles. Alguns travam ao apresentar; combine antes uma frase simples, como "Este é o meu site, ele faz tal coisa". Por fim, há quem ache que mexer mais melhora; oriente a não alterar nada que já funciona perto da hora de mostrar.`,
  exercicios: [
    {
      titulo: `Abra pelo nome real`,
      tipo: `Prática na ferramenta`,
      tempo: `6 min`,
      guiaProfessor: `Garanta que cada aluno digite o domínio completo, sem erro de digitação. Se o domínio recém-registrado não abrir, oriente a usar o endereço temporário da hospedagem e explique a propagação de DNS.`,
      atividade: `Abra o navegador e digite o seu domínio completo, por exemplo meusite.com.br. Confirme que a página inicial do seu site aparece. Recarregue com F5 para garantir. Anote no checklist se abriu pelo nome real ou se precisou usar o endereço temporário.`,
      gabarito: `O aluno acessa o próprio site pelo domínio real e a página inicial carrega corretamente. Caso o DNS ainda esteja propagando, o aluno registra isso no checklist e usa o endereço temporário da hospedagem como alternativa, entendendo que é uma situação normal e passageira.`,
    },
    {
      titulo: `Checklist de publicação`,
      tipo: `Prática na ferramenta`,
      tempo: `10 min`,
      guiaProfessor: `Entregue a folha de checklist e acompanhe item por item. Reforce que devem testar o caminho completo: páginas, links do menu, envio do formulário e consulta do dado salvo.`,
      atividade: `Percorra o seu checklist de publicação no site no ar: confira se cada página abre, se os links do menu funcionam, se o formulário envia e se o dado enviado aparece quando você o consulta. Marque cada item como certo ou com problema.`,
      gabarito: `O checklist está totalmente preenchido. O aluno confirmou que as páginas carregam, os links do menu levam aos lugares certos, o formulário salva no banco e o dado salvo reaparece ao ser consultado. Itens com problema ficam marcados para correção.`,
    },
    {
      titulo: `Teste no celular`,
      tipo: `Em dupla`,
      tempo: `10 min`,
      guiaProfessor: `Oriente as duplas a testar o site usando a internet do celular, e não o Wi-Fi da escola, para provar que está no ar para fora da rede local. Combine o uso responsável dos aparelhos.`,
      atividade: `Em dupla, abra o site do colega no celular, usando a internet de dados do celular, e não o Wi-Fi da escola. Navegue pelas páginas e envie um teste no formulário. Diga ao dono se tudo funcionou ou se algo apareceu errado na tela pequena.`,
      gabarito: `Cada dupla acessa os dois sites pelo celular em uma rede diferente da do computador, comprovando que estão de fato no ar para o mundo. Os alunos relatam ao menos uma observação por site, como uma página que demorou ou um texto cortado na tela menor, e o dono anota o que precisa ajustar.`,
    },
    {
      titulo: `Mensagem de confirmação`,
      tipo: `Desafio`,
      tempo: `9 min`,
      guiaProfessor: `Mostre onde fica o JavaScript do formulário. Reforce que a mensagem deve ser montada por concatenação com o sinal de mais, juntando texto fixo e o valor digitado, sem usar interpolação com chaves.`,
      atividade: `No JavaScript do seu formulário, adicione uma mensagem de agradecimento que aparece depois de enviar, usando o nome digitado pelo visitante. Monte a frase juntando texto e variável com o sinal de mais. Teste no site no ar e veja a mensagem aparecer.`,
      gabarito: `O aluno escreve um código que pega o nome do campo e mostra um aviso por concatenação, por exemplo:
var nome = document.getElementById("nome").value;
alert("Obrigado, " + nome + "! Seus dados foram salvos.");
Ao enviar o formulário no site publicado, a mensagem aparece com o nome digitado, e a frase foi montada com o sinal de mais, sem interpolação com chaves.`,
    },
    {
      titulo: `Lançamento do meu site`,
      tipo: `Apresentação`,
      tempo: `10 min`,
      guiaProfessor: `Organize a fila de apresentações e projete cada site. Combine antes uma frase simples de abertura para os mais tímidos. Anote no quadro o link real de cada aluno para montar a galeria da turma.`,
      atividade: `Projete o seu site, digite o link real na frente da turma e apresente em até um minuto: diga o nome do site, o que ele faz e o que você mais gostou de criar. Convide um colega a abrir o seu site no computador dele.`,
      gabarito: `Cada aluno apresenta o site no ar digitando o link real, que abre corretamente no projetor. A fala cobre o nome do site, sua função e um ponto preferido da criação, usando termos do mês como domínio, hospedagem e banco de dados. Ao fim, a turma tem uma galeria com os links reais de todos os sites publicados, fechando o entregável do mês.`,
    },
  ],
};
