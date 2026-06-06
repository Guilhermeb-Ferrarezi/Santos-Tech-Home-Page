import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 4,
  titulo: "Perguntas obrigatórias e validação",
  semana: "Semana 2",
  duracao: "1 hora",
  objetivo: `Aprender a tornar perguntas obrigatórias e configurar validação de respostas no Google Forms para garantir que os dados recebidos sejam corretos e completos.`,
  descricao: `Até agora os alunos já sabem criar um formulário, deixá-lo bonito e escolher os tipos de pergunta. Nesta aula damos um passo importante: garantir a qualidade das respostas. Não adianta ter um formulário lindo se as pessoas deixam campos em branco ou escrevem qualquer coisa onde deveria ir um número de telefone. É aqui que entram dois recursos poderosos do Google Forms: as perguntas obrigatórias e a validação de respostas.

Uma pergunta obrigatória é aquela que a pessoa precisa responder antes de enviar o formulário. Se ela tentar enviar sem preencher, o Forms mostra um aviso em vermelho e não deixa continuar. Já a validação de respostas é uma regra que verifica se o que foi digitado tem o formato certo: por exemplo, aceitar apenas números, apenas um e-mail válido, ou limitar a quantidade de caracteres. Quando a resposta não passa na regra, aparece uma mensagem de erro que nós mesmos podemos escrever.

Nesta aula os alunos vão praticar tudo isso na ferramenta. Eles vão ativar o botão de obrigatório, criar uma pergunta que só aceita números, outra que exige e-mail válido, uma com limite de caracteres e ainda vão experimentar a pergunta de upload de arquivo, em que a pessoa anexa um documento ou imagem. Para fechar, vão testar os próprios formulários como se fossem usuários, descobrindo na prática quando as mensagens de erro aparecem.

O grande aprendizado é que um bom formulário não confia cegamente em quem responde: ele orienta, corrige e protege os dados. Essa é uma habilidade real usada em inscrições, pesquisas e cadastros de verdade que os alunos veem todos os dias na internet.`,
  materiais: [
    `Computadores com navegador e Google Forms aberto (forms.google.com), um por aluno`,
    `Conta Google ativa para cada aluno (login feito antes da aula)`,
    `Projetor ou tela grande para o professor demonstrar cada passo`,
    `Formulário modelo já criado pelo professor, chamado "Inscrição na Gincana", para usar de exemplo`,
    `Arquivo de exemplo para upload (uma imagem ou um PDF pequeno) salvo no computador de cada aluno`,
    `Lista de regras de validação impressa ou no projetor (número, e-mail, limite de caracteres)`,
    `Celular ou segundo dispositivo opcional para testar o formulário como visitante`,
  ],
  conceitosChave: [
    `Pergunta obrigatória — pergunta que precisa ser respondida antes de enviar o formulário; quem deixa em branco recebe um aviso e não consegue continuar.`,
    `Validação de respostas — regra que verifica se a resposta tem o formato correto, como aceitar apenas números ou apenas um e-mail válido.`,
    `Mensagem de erro personalizada — texto que nós escrevemos para explicar ao usuário o que ele errou, por exemplo "Digite apenas números".`,
    `Limite de caracteres — regra de validação que controla o tamanho do texto, definindo um mínimo ou um máximo de letras permitidas.`,
    `Upload de arquivo — tipo de pergunta em que a pessoa anexa um documento ou imagem do computador como resposta.`,
    `Asterisco vermelho — sinal (*) que o Google Forms mostra ao lado das perguntas obrigatórias para avisar que elas precisam ser preenchidas.`,
    `Expressão regular — regra avançada de validação que descreve um padrão exato que a resposta deve seguir; usada com cuidado, apenas para mostrar o recurso.`,
  ],
  treinamento: `## O que o professor precisa saber

Antes da aula, abra o Google Forms (forms.google.com) e crie um formulário de teste chamado "Inscrição na Gincana". Você precisa conhecer dois recursos. O primeiro é o botão "Obrigatória", que fica no canto inferior direito de cada pergunta, ao lado do ícone de copiar e da lixeira. Ao ativá-lo, um asterisco vermelho aparece no título da pergunta. O segundo é a "Validação de resposta": clique nos três pontinhos (⋮) no canto inferior direito da pergunta e escolha "Validação de resposta". Surge uma linha nova com menus suspensos: o primeiro define o tipo (Número, Texto, Comprimento ou Expressão regular), o segundo a condição, depois o valor e, por fim, a mensagem de erro. A validação só aparece em perguntas de "Resposta curta" e "Parágrafo". Teste tudo antes para não travar na frente da turma.

## Passo a passo da aula

Aquecimento (10 min): retome a aula anterior perguntando quais tipos de pergunta existem. Mostre no projetor o formulário "Inscrição na Gincana" e pergunte: "O que acontece se alguém deixar o nome em branco?". Conduza para a ideia de que precisamos obrigar e conferir respostas.

Conteúdo novo guiado (15 min): no projetor, clique numa pergunta de nome e ative o botão "Obrigatória"; mostre o asterisco vermelho. Depois crie uma pergunta "Resposta curta" chamada "Idade", clique nos três pontinhos (⋮), escolha "Validação de resposta", selecione "Número" e "É um número", e escreva a mensagem "Digite apenas números". Repita com "E-mail": valide com "Texto" e "Endereço de e-mail". Por fim, mostre o limite usando "Comprimento" e "Número máximo de caracteres". Apresente também a pergunta de "Envio de arquivo", explicando que ela só funciona com conta Google.

Mão na massa (25 min): cada aluno cria, no próprio formulário, quatro perguntas: nome (obrigatória), idade (só número), e-mail (e-mail válido) e um campo com limite de caracteres. Em seguida adicionam uma pergunta de upload de arquivo. Circule pela sala ajudando individualmente.

Desafio e compartilhar (10 min): peça que cada aluno abra a "Visualização" (ícone de olho, no topo) e tente enviar o formulário errado de propósito para ver as mensagens de erro. Quem conseguir, mostra para a turma a mensagem que escreveu.

## Como explicar de forma clara

Use comparações do dia a dia. Diga que uma pergunta obrigatória é como o cinto de segurança do carro: o carro avisa e não deixa andar tranquilo sem ele. A validação é como o porteiro de uma festa que só deixa entrar quem está na lista: se você digita letras onde só pode número, o porteiro barra. Explique que a mensagem de erro é o recado gentil do porteiro dizendo o motivo. Mostre exemplos reais: o campo de idade no cadastro de um joguinho, ou o e-mail que eles digitam para criar conta no celular. Sempre faça o passo no projetor primeiro e só depois solte a turma para repetir.

## Erros comuns e como ajudar

O erro mais comum é o aluno procurar a validação numa pergunta de "Múltipla escolha", onde ela não existe; lembre que validação só aparece em "Resposta curta" e "Parágrafo". Outro erro é confundir "Obrigatória" com validação: são coisas diferentes, uma exige resposta, a outra confere o formato. Muitos esquecem de escrever a mensagem de erro e ficam com um aviso genérico; incentive sempre escrever um texto claro. Na pergunta de upload, alguns travam porque não estão logados na conta Google; confira o login antes. Por fim, há quem coloque limite de caracteres muito pequeno e não consiga digitar nada: oriente a testar valores razoáveis.`,
  exercicios: [
    {
      titulo: `Ativando o asterisco vermelho`,
      tipo: `prática na ferramenta`,
      tempo: `5 min`,
      guiaProfessor: `Demonstre no projetor antes. Verifique se cada aluno encontrou o botão "Obrigatória" no canto inferior direito da pergunta e se o asterisco vermelho apareceu no título.`,
      atividade: `No seu formulário, crie uma pergunta de "Resposta curta" chamada "Nome completo". Ative o botão "Obrigatória" e confira se o asterisco vermelho (*) apareceu ao lado do título da pergunta.`,
      gabarito: `A pergunta "Nome completo" deve ter o botão "Obrigatória" ligado (azul) e exibir um asterisco vermelho ao lado do título. Ao tentar enviar o formulário sem preencher esse campo, o Forms mostra o aviso "Esta é uma pergunta obrigatória".`,
    },
    {
      titulo: `Só números são bem-vindos`,
      tipo: `prática na ferramenta`,
      tempo: `7 min`,
      guiaProfessor: `Lembre os alunos de que a validação só aparece em "Resposta curta". Mostre o caminho pelos três pontinhos (⋮). Ajude quem não achar a opção "Validação de resposta".`,
      atividade: `Crie a pergunta "Idade" como "Resposta curta". Clique nos três pontinhos (⋮), escolha "Validação de resposta", selecione "Número" e "É um número" e escreva a mensagem de erro "Digite apenas números, por favor".`,
      gabarito: `A pergunta "Idade" deve ter validação do tipo "Número" com a condição "É um número" e a mensagem de erro personalizada. Ao digitar letras, como "doze", o formulário exibe a mensagem "Digite apenas números, por favor" e não deixa enviar.`,
    },
    {
      titulo: `E-mail válido e limite de letras`,
      tipo: `desafio`,
      tempo: `8 min`,
      guiaProfessor: `Acompanhe os dois passos: a validação de e-mail (tipo "Texto" + "Endereço de e-mail") e o limite (tipo "Comprimento" + "Número máximo de caracteres"). Confira se os alunos testaram cada uma.`,
      atividade: `Crie uma pergunta "E-mail" validada como endereço de e-mail. Depois crie "Apelido" com validação de "Comprimento", "Número máximo de caracteres", valor 15, e mensagem "Use no máximo 15 letras".`,
      gabarito: `A pergunta "E-mail" deve recusar textos sem "@" (ex.: "joao.com") e aceitar "joao@email.com". A pergunta "Apelido" deve recusar textos com mais de 15 caracteres, mostrando a mensagem "Use no máximo 15 letras". Ambas as validações precisam estar visíveis na edição.`,
    },
    {
      titulo: `Caça aos erros em dupla`,
      tipo: `em dupla`,
      tempo: `8 min`,
      guiaProfessor: `Forme duplas. Cada aluno abre o próprio formulário na "Visualização" (ícone de olho, no topo da tela) e o colega tenta quebrá-lo. Estimule que anotem quais mensagens de erro apareceram.`,
      atividade: `Troque de lugar com o colega. Abra o formulário dele na "Visualização" e tente enviá-lo de propósito com erros: deixe o nome em branco, escreva letras na idade e um e-mail sem "@". Anote todas as mensagens de erro que aparecerem.`,
      gabarito: `A dupla deve registrar pelo menos três bloqueios: o aviso de pergunta obrigatória no nome em branco, a mensagem "Digite apenas números" na idade com letras, e o aviso de e-mail inválido. Se algum erro não foi barrado, a validação correspondente está faltando e precisa ser corrigida.`,
    },
    {
      titulo: `Formulário de envio de trabalho`,
      tipo: `projeto curto`,
      tempo: `12 min`,
      guiaProfessor: `Este exercício junta tudo. Confirme que os alunos estão logados na conta Google, pois o "Envio de arquivo" exige isso. Verifique cada formulário usando a "Visualização" e ajude com o arquivo de exemplo salvo no computador.`,
      atividade: `Monte um formulário chamado "Entrega de Trabalho" com: "Nome" (obrigatória), "E-mail" (validado como e-mail), "Número da turma" (só número) e uma pergunta de "Envio de arquivo" obrigatória pedindo o trabalho. Teste enviando o arquivo de exemplo.`,
      gabarito: `O formulário deve ter as quatro perguntas: "Nome" obrigatória, "E-mail" com validação de endereço de e-mail, "Número da turma" com validação de número e "Envio de arquivo" obrigatória. No teste pela "Visualização", o formulário só deve permitir o envio quando todos os campos estiverem corretos e o arquivo de exemplo for anexado com sucesso.`,
    },
  ],
};
