import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 4,
  titulo: "Registrando o domínio",
  semana: "Semana 2",
  duracao: "1 hora",
  objetivo: `Levar cada aluno a registrar de verdade o domínio escolhido em um serviço de registro, preenchendo o cadastro, confirmando o nome e entendendo como funcionam a renovação anual e a propriedade do endereço.`,
  descricao: `Na aula passada o aluno aprendeu a escolher um bom nome para o site e a verificar se ele estava disponível. Hoje chega o momento mais empolgante dessa parte do projeto: transformar aquele nome em um endereço de verdade na internet. Registrar um domínio é como reservar a placa de uma casa. Enquanto ninguém registra, o nome fica solto e qualquer um pode pegar. Quando o aluno faz o registro, aquele endereço passa a ser dele pelo tempo que ele pagou, normalmente um ano, e mais ninguém no mundo pode usar o mesmo nome.

Um domínio é o endereço que as pessoas digitam no navegador para chegar ao site, por exemplo meusite.com.br. Ele é alugado, não comprado para sempre. Por isso existe a renovação: todo ano o dono precisa renovar para continuar com o endereço. Se esquecer de renovar, o domínio expira e volta a ficar livre para outra pessoa. É importante o aluno entender isso desde já, porque o domínio é a identidade do site na internet e perder esse nome significa perder o endereço que as pessoas já conhecem.

O registro acontece em um serviço de registro, também chamado de registrador. No Brasil, o serviço oficial para domínios terminados em .com.br é o Registro.br. Existem também registradores internacionais para domínios .com e outros. Nesta aula o professor conduz a turma por um passo a passo prático: pesquisar o nome, conferir o preço, criar uma conta, preencher os dados de cadastro e confirmar a reserva do nome. Como o registro de verdade envolve pagamento, a escola pode optar por registrar um único domínio real da turma, ou usar uma conta de demonstração para os alunos praticarem todos os passos até a tela final de pagamento.

Ao terminar a aula, cada aluno terá percorrido todo o caminho de registro e entenderá três ideias centrais: o domínio é alugado e precisa ser renovado, quem registra primeiro fica com o nome, e os dados do dono ficam guardados como prova de propriedade do endereço. Esse domínio será usado nas próximas aulas, quando o site for hospedado e finalmente colocado no ar.`,
  materiais: [
    `Computadores com acesso ao Banco de dados + Domínio + Hospedagem, um por aluno, com o navegador aberto`,
    `Navegador atualizado (Chrome, Edge ou Firefox) para acessar o site do serviço de registro`,
    `Projetor ou TV para o professor demonstrar cada tela do registrador passo a passo`,
    `Endereço do serviço de registro anotado no quadro (por exemplo, registro.br) e a lista de nomes que cada aluno escolheu na aula anterior`,
    `Arquivo de exemplo: uma ficha de cadastro impressa ou em tela com os campos que o aluno vai preencher (nome do responsável, e-mail, telefone, documento)`,
    `Arquivo de exemplo: uma captura de tela mostrando a mensagem de domínio disponível e a tela final de confirmação, para a turma saber o que esperar`,
    `Quadro branco ou flip chart para desenhar a ideia de aluguel e renovação do domínio`,
  ],
  conceitosChave: [
    `Domínio — o endereço que se digita no navegador para chegar ao site, como meusite.com.br.`,
    `Serviço de registro (registrador) — empresa autorizada a reservar domínios; no Brasil, o Registro.br cuida dos endereços terminados em .com.br.`,
    `Registro — ato de reservar o nome em seu próprio cadastro, garantindo que mais ninguém possa usá-lo.`,
    `Renovação — pagamento que se faz a cada período (em geral um ano) para continuar dono do domínio.`,
    `Expiração — quando o domínio não é renovado e volta a ficar livre para outra pessoa registrar.`,
    `Propriedade do domínio — os dados do dono que ficam guardados como prova de quem registrou o endereço.`,
    `Disponibilidade — situação em que o nome ainda não foi registrado por ninguém e pode ser reservado.`,
  ],
  treinamento: `## O que o professor precisa saber

Registrar um domínio é reservar um nome de endereço na internet dentro de um serviço de registro. No Brasil, o serviço oficial para .com.br é o Registro.br; para .com existem registradores internacionais. O professor não precisa ser técnico: precisa saber onde clicar e entender três ideias para explicar à turma. Primeira: o domínio é alugado, não comprado para sempre, e por isso precisa de renovação a cada ano. Segunda: quem registra primeiro fica com o nome, então a disponibilidade pode mudar de um dia para o outro. Terceira: os dados do cadastro são a prova de propriedade do endereço.

Decida antes da aula como a turma vai praticar. Registro de verdade envolve pagamento e dados reais de um responsável. Duas opções seguras: a escola registra um único domínio real da turma no projetor, e os alunos acompanham e praticam os passos até a tela de pagamento sem finalizar; ou usa uma conta de demonstração para cada aluno percorrer o cadastro completo. Combine isso com a coordenação antes da aula.

## Passo a passo da aula

Aquecimento (10 min): retome os nomes escolhidos na aula passada. No quadro desenhe uma casa com uma placa e escreva: domínio é a placa do site. Pergunte: o que acontece se ninguém pagar o aluguel da placa? Conduza até a ideia de renovação e expiração.

Conteúdo novo guiado (15 min): no projetor, abra o navegador e digite registro.br. Mostre a caixa de busca, digite um nome de exemplo e clique em pesquisar. Mostre a mensagem de disponível ou indisponível e o preço por ano. Em seguida, demonstre criar a conta: clique em Criar conta ou Entrar, escolha pessoa física, e preencha os campos do cadastro. Explique cada campo enquanto digita: nome do responsável, documento, e-mail e telefone. Mostre a tela de confirmação do nome e onde aparece o valor e o período de um ano. Pare na tela de pagamento e explique que é aqui que o registro se torna definitivo.

Mão na massa (25 min): cada aluno abre o site do registrador, pesquisa o próprio nome e confere a disponibilidade e o preço. Em seguida percorre o cadastro, preenchendo os campos com os dados combinados (reais, se for registro oficial da escola, ou de demonstração). Circule pela sala conferindo: o nome está escrito sem espaços e sem acentos, o e-mail está correto e a extensão escolhida (.com.br ou .com) é a mesma para todos. Quem chegar à tela de confirmação anota o nome do domínio e a data de renovação.

Desafio e compartilhar (10 min): peça que cada aluno descubra e anote em que dia do próximo ano o domínio precisará ser renovado e o que aconteceria se ninguém renovasse. Cada um mostra no projetor a tela de confirmação com o nome reservado e diz, em uma frase, por que o domínio é dele.

## Como explicar de forma clara

Use a imagem do aluguel: o domínio é como alugar a placa da sua casa na rua da internet. Você paga por um ano e a placa é sua; quando o ano acaba, você renova para continuar com ela. Se não renovar, a placa volta para a prateleira e outra pessoa pode pegar. Reforce que quem registra primeiro leva: por isso, se o nome está disponível hoje, pode não estar amanhã. Explique que o cadastro guarda quem é o dono, igual ao seu nome no contrato de aluguel, e é isso que prova que o endereço é seu.

## Erros comuns e como ajudar

Erro 1: o aluno digita o nome com espaço ou acento; lembre que domínio não aceita espaço nem acento, só letras, números e hífen. Erro 2: escolhe extensões diferentes (um .com, outro .com.br) e o preço e o processo mudam; combine uma extensão única para a turma. Erro 3: acha que registrou para sempre; reforce a renovação anual e a expiração. Erro 4: digita o e-mail errado no cadastro e não recebe a confirmação; peça para revisar o e-mail com calma. Erro 5: tenta finalizar o pagamento sem combinar com a escola; deixe claro onde parar. Erro 6: confunde domínio com hospedagem; explique que hoje só reservamos o nome, e colocar o site no ar é assunto das próximas aulas.`,
  exercicios: [
    {
      titulo: `Pesquisando se o nome está livre`,
      tipo: `prática na ferramenta`,
      tempo: `7 min`,
      guiaProfessor: `Garanta que todos abram o mesmo serviço de registro e usem a caixa de busca. Confira que digitam o nome sem espaços e sem acentos e que leem a mensagem de disponível ou indisponível.`,
      atividade: `Abra o navegador, acesse o site do serviço de registro indicado pelo professor e digite o nome que você escolheu na aula passada na caixa de busca. Clique em pesquisar e anote se o nome está disponível e qual é o preço por ano.`,
      gabarito: `O aluno chega a uma tela que mostra claramente se o nome está disponível ou já registrado, além do preço anual. O nome foi digitado sem espaços e sem acentos. Se a tela disser indisponível, o aluno deve testar uma variação do nome até encontrar uma opção livre.`,
    },
    {
      titulo: `Criando a conta no registrador`,
      tipo: `prática na ferramenta`,
      tempo: `8 min`,
      guiaProfessor: `Acompanhe a criação da conta. Confira o tipo pessoa física e a digitação correta do e-mail, que será usado para confirmações. Use a conta de demonstração se a escola tiver definido assim.`,
      atividade: `No site do serviço de registro, clique em Criar conta ou Entrar. Escolha pessoa física e preencha os campos do cadastro: nome do responsável, documento, e-mail e telefone. Confira o e-mail com atenção antes de avançar.`,
      gabarito: `A conta é criada com os dados combinados e o e-mail digitado corretamente. O aluno entende que esse cadastro guarda quem é o dono do domínio. Se o sistema reclamar de algum campo, ele revisa o dado apontado (em geral o e-mail ou o documento) e tenta de novo.`,
    },
    {
      titulo: `Confirmando o nome escolhido`,
      tipo: `desafio`,
      tempo: `8 min`,
      guiaProfessor: `Guie até a tela de confirmação do domínio. Mostre onde aparecem o nome, o valor e o período de um ano. Combine claramente onde a turma deve parar antes do pagamento.`,
      atividade: `Selecione o nome disponível e avance até a tela de confirmação do registro. Localize na tela o nome do domínio, o valor e o período de um ano. Anote essas três informações e pare na tela de pagamento, sem finalizar, a menos que o professor oriente o contrário.`,
      gabarito: `O aluno chega à tela de confirmação com o nome, o valor e o período de um ano visíveis e anotados. Ele para no ponto combinado, entendendo que o pagamento é o que torna o registro definitivo. As três informações anotadas devem estar corretas e iguais às mostradas na tela.`,
    },
    {
      titulo: `A conta da renovação em dupla`,
      tipo: `em dupla`,
      tempo: `10 min`,
      guiaProfessor: `Forme duplas. Um aluno explica a data de renovação, o outro confere. Reforce a diferença entre renovar e perder o domínio. Valorize respostas que citem a expiração.`,
      atividade: `Em dupla, descubram na tela de confirmação a data em que o domínio precisará ser renovado no próximo ano. Calculem quantos meses faltam até lá e escrevam, em uma frase, o que aconteceria com o endereço se ninguém renovasse na data.`,
      gabarito: `A dupla identifica corretamente a data de renovação (cerca de um ano após o registro) e calcula os meses que faltam. A frase deve dizer que, sem renovação, o domínio expira e volta a ficar livre para outra pessoa registrar. Respostas que esquecem a expiração devem ser completadas pelo professor.`,
    },
    {
      titulo: `Roda do domínio: por que é meu?`,
      tipo: `roda de conversa`,
      tempo: `7 min`,
      guiaProfessor: `Reúna a turma e projete duas ou três telas de confirmação. Conduza a conversa sobre propriedade, renovação e quem registra primeiro. Garanta que os três conceitos apareçam nas falas.`,
      atividade: `Em roda, cada aluno mostra sua tela de confirmação e responde três perguntas: por que esse domínio agora é seu, por que ele precisa ser renovado e o que acontece se alguém tentar registrar o mesmo nome depois de você. A turma comenta cada resposta.`,
      gabarito: `As respostas devem citar que o domínio é do aluno porque ele o registrou e seus dados ficam guardados como prova de propriedade, que a renovação anual mantém o endereço, e que quem registra primeiro fica com o nome, então ninguém mais consegue o mesmo endereço depois. Não há resposta única, mas os três conceitos (propriedade, renovação e prioridade de quem registra primeiro) devem aparecer.`,
    },
  ],
};
