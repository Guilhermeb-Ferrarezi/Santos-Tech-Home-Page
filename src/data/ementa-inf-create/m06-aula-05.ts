import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 5,
  titulo: "Compartilhando para receber respostas",
  semana: "Semana 3",
  duracao: "1 hora",
  objetivo: `Compartilhar um formulário do Google Forms gerando link, link encurtado, QR Code e envio por e-mail, ajustando quem pode responder para que os colegas consigam preencher de verdade.`,
  descricao: `Até agora os alunos construíram formulários bonitos, com vários tipos de pergunta, campos obrigatórios e validação. Mas um formulário só tem valor quando alguém responde a ele. Esta aula é a ponte entre criar e coletar: o aluno aprende a abrir o formulário para o público e a entregar esse formulário nas mãos das pessoas certas.

O Google Forms oferece várias formas de compartilhar a mesma pesquisa. O botão "Enviar" (canto superior direito) abre uma janela com três abas principais: enviar por e-mail, copiar o link e gerar o código para inserir em um site. Ao lado, há a opção de link encurtado, que deixa o endereço curtinho e fácil de digitar, e o QR Code, aquele quadradinho de pontos que a câmera do celular lê. Cada caminho serve a uma situação: link por mensagem, QR Code no telão da sala, e-mail para a turma toda.

Um ponto que costuma confundir é a diferença entre o link de responder e o link de editar. Quem recebe o link normal apenas responde e não enxerga as respostas dos outros nem mexe nas perguntas. Já o link de edição (ou o botão "Adicionar colaboradores") dá poder de mudar o formulário. Trocar um pelo outro é o erro clássico de quem está começando, e nesta aula o aluno aprende a nunca enviar o link errado.

Por fim, entram as configurações de quem pode responder. Na engrenagem de configurações existe a opção de limitar as respostas a pessoas da organização ou de coletar e-mails, e a opção de aceitar apenas uma resposta por pessoa. Entender esses ajustes é o que separa uma pesquisa aberta a qualquer um de um quiz controlado da turma. No fim da aula, cada aluno envia seu próprio formulário para os colegas e vê as primeiras respostas chegando.`,
  materiais: [
    `Computador para cada aluno com navegador (Chrome) e o Google Forms aberto na conta da escola`,
    `Projetor ou TV para o professor demonstrar cada passo na tela grande`,
    `Um formulário de exemplo já pronto de aulas anteriores (ex.: "Quiz de curiosidades da turma") para usar como base`,
    `Celular ou tablet com câmera para testar a leitura do QR Code (pode ser o do professor)`,
    `Conta Google da escola ativa para cada aluno, com permissão de enviar e-mail pelo Gmail`,
    `Acesso a um encurtador de link confiável (o próprio Forms já gera link curto; opcionalmente um site de QR Code)`,
    `Lista com os e-mails escolares dos colegas, para o envio de teste`,
  ],
  conceitosChave: [
    `Link de resposta — endereço que leva direto ao formulário para a pessoa responder, sem ver respostas nem editar perguntas.`,
    `Link de edição — endereço (ou convite de colaborador) que permite alterar as perguntas do formulário; só deve ir para quem ajuda a criar.`,
    `Link encurtado — versão curta e fácil de digitar do endereço do formulário, gerada pela opção "Encurtar URL".`,
    `QR Code — imagem quadrada de pontos que, ao ser lida pela câmera do celular, abre o formulário automaticamente.`,
    `Botão Enviar — botão no canto superior direito do Forms que abre as opções de compartilhamento (e-mail, link e código de incorporação).`,
    `Coletar e-mails — configuração que registra o e-mail de quem responde, útil para saber quem participou.`,
    `Uma resposta por pessoa — ajuste que impede que a mesma pessoa envie o formulário várias vezes (exige login na conta Google).`,
  ],
  treinamento: `## O que o professor precisa saber

Compartilhar um formulário no Google Forms é simples, mas tem armadilhas. Antes da aula, abra um formulário seu e localize três coisas: o botão "Enviar" (canto superior direito, ao lado da foto do perfil), a engrenagem de "Configurações" (aba no topo, ao lado de "Perguntas" e "Respostas") e o ícone de QR Code dentro da janela de envio. Teste você mesmo: copie o link, abra numa aba anônima e confirme que ele leva à tela de responder, não de editar. Esse teste é o coração da aula.

Lembre-se da regra de ouro: o link que aparece quando você clica em "Enviar" e depois no ícone de corrente é o link de RESPOSTA. O link da barra de endereço do navegador, com a palavra "edit" no fim, é o link de EDIÇÃO. Nunca mande o de "edit" para colegas.

## Passo a passo da aula

10 min — Aquecimento. Pergunte: "Vocês fizeram um formulário lindo. E agora, como a pessoa responde?" Mostre no projetor um formulário pronto e provoque: "Vou mandar o endereço aqui da barra de cima." Cole o link com "edit" numa aba anônima e mostre que ele NÃO deixa responder. Crie o suspense de que existe o jeito certo.

15 min — Conteúdo novo guiado. No projetor, clique em "Enviar" (canto superior direito). Mostre as três abas: o ícone de envelope (e-mail), o ícone de corrente (link) e o ícone "< >" (incorporar). Clique no ícone de corrente, marque a caixa "Encurtar URL" e mostre o link ficando curtinho. Copie. Depois, clique no ícone de QR Code (quadradinho de pontos), gere e baixe a imagem. Leia o QR com a câmera do celular no telão para a turma ver o formulário abrir. Por fim, abra a aba "Configurações", mostre "Coletar endereços de e-mail" e "Limitar a 1 resposta".

25 min — Mão na massa. Cada aluno abre o próprio formulário, clica em "Enviar", gera o link, marca "Encurtar URL" e cola num documento. Em seguida gera o QR Code e baixa a imagem. Depois vai em "Configurações" e liga "Limitar a 1 resposta". Circule pela sala conferindo que o link copiado é o de resposta (teste rápido em aba anônima).

10 min — Desafio e compartilhar. Em duplas, os alunos trocam links e respondem o formulário um do outro. Quem terminar envia o formulário por e-mail para mais um colega usando a aba de envelope. Encerre mostrando as primeiras respostas chegando na aba "Respostas".

## Como explicar de forma clara

Use a imagem de duas portas na mesma casa. A "porta da frente" é o link de resposta: quem entra preenche e vai embora, sem mexer em nada. A "porta dos fundos" é o link de edição: só a família entra, porque pode mover os móveis. Diga em voz alta: "Para os colegas, sempre a porta da frente."

Para o QR Code, compare com o cardápio do restaurante: a pessoa aponta a câmera e o formulário aparece, sem digitar nada. Para o link encurtado, diga que é como apelido: o nome completo é grande, o apelido é curto e fácil de chamar.

## Erros comuns e como ajudar

O erro número um é copiar o link da barra do navegador (com "edit") e mandar para todo mundo, que abre a tela de edição. Ensine sempre a usar o botão "Enviar" para pegar o link certo. O segundo erro é esquecer de marcar "Encurtar URL" e reclamar que o link é gigante. O terceiro é gerar o QR Code e não baixar a imagem, perdendo-a ao fechar a janela; mostre o botão "Baixar". O quarto é ligar "Limitar a 1 resposta" e depois não conseguir testar várias vezes na mesma conta; explique que isso é o esperado e que para testar basta usar uma aba anônima ou outra conta.`,
  exercicios: [
    {
      titulo: `Encontrando o botão certo`,
      tipo: `Prática na ferramenta`,
      tempo: `8 min`,
      guiaProfessor: `Garanta que todos abram o próprio formulário antes de começar. Caminhe pela sala apontando o botão "Enviar" no canto superior direito. O objetivo é apenas localizar e gerar o link de resposta, sem encurtar ainda.`,
      atividade: `Abra o seu formulário. Clique no botão "Enviar" (canto superior direito). Na janela que abrir, clique no ícone de corrente (link). Copie o link que aparecer e cole num documento em branco com o título "Meu link de resposta".`,
      gabarito: `O aluno deve ter um link copiado começando com "https://docs.google.com/forms/" e terminando com algo como "/viewform". Confirme que NÃO termina com "edit". Ao abrir esse link numa aba anônima, deve aparecer a tela de responder o formulário.`,
    },
    {
      titulo: `Link curto e QR Code`,
      tipo: `Desafio individual`,
      tempo: `10 min`,
      guiaProfessor: `Mostre primeiro no projetor a caixa "Encurtar URL" e o ícone de QR Code. Reforce o passo de BAIXAR a imagem do QR, pois é o que os alunos mais esquecem. Tenha um celular pronto para testar a leitura de um deles.`,
      atividade: `1. Volte ao botão "Enviar" e ao ícone de corrente. 2. Marque a caixa "Encurtar URL" e copie o link curto. 3. Clique no ícone de QR Code, gere o código e clique em "Baixar" para salvar a imagem. 4. Mostre o link curto e o arquivo do QR Code para o professor.`,
      gabarito: `O aluno apresenta um link curto (formato "forms.gle/..." em vez do endereço longo) e um arquivo de imagem do QR Code salvo no computador. Ao ler o QR Code com a câmera de um celular, o formulário deve abrir na tela de responder.`,
    },
    {
      titulo: `Porta da frente ou porta dos fundos?`,
      tipo: `Roda de conversa`,
      tempo: `10 min`,
      guiaProfessor: `Conduza a discussão usando a metáfora das duas portas. Mostre no projetor, lado a lado, um link com "edit" e um com "viewform". Peça que a turma diga qual mandar para um colega e por quê. Corrija qualquer confusão na hora.`,
      atividade: `Em roda, respondam juntos: (a) Qual é a diferença entre o link de responder e o link de editar? (b) O que acontece se eu mandar o link de editar para um colega? (c) Quando faz sentido dar o link de editar para alguém? Cada aluno dá um exemplo.`,
      gabarito: `Respostas esperadas: (a) o link de responder só deixa preencher; o de editar deixa mudar as perguntas. (b) o colega abriria o formulário no modo de edição e poderia estragar ou ver as respostas. (c) só faz sentido dar o link de editar para alguém que ajuda a montar o formulário (um colaborador, um colega de grupo, o professor).`,
    },
    {
      titulo: `Trocando formulários em dupla`,
      tipo: `Atividade em dupla`,
      tempo: `15 min`,
      guiaProfessor: `Forme duplas. Cada aluno envia o link curto para o par (por chat da escola, e-mail ou QR Code lido na tela). Verifique que ambos conseguem RESPONDER, não editar. Aproveite para mostrar as respostas surgindo na aba "Respostas".`,
      atividade: `Com o seu par: 1. Envie a ele o seu link de resposta (curto) ou mostre o QR Code na sua tela. 2. Responda o formulário do seu par. 3. Abra a aba "Respostas" do seu formulário e confirme que a resposta do par chegou. 4. Conte ao par uma coisa que você achou interessante na resposta dele.`,
      gabarito: `Cada aluno deve ver, na aba "Respostas" do próprio formulário, pelo menos uma resposta nova (a do par). Se a contagem de respostas no topo da aba subiu de 0 para 1 ou mais, a atividade deu certo. Nenhum dos dois deve ter conseguido editar o formulário do outro.`,
    },
    {
      titulo: `Lançando a pesquisa para a turma`,
      tipo: `Projeto curto`,
      tempo: `12 min`,
      guiaProfessor: `Este é o fechamento. Cada aluno escolhe um canal (e-mail pela aba de envelope, link curto colado num grupo ou QR Code no telão) e abre seu formulário para mais colegas. Antes de enviar, peça que confiram em "Configurações" se "Limitar a 1 resposta" está ligado, se fizer sentido para o tema.`,
      atividade: `1. Decida quem deve responder o seu formulário (a turma toda? só sua fila?). 2. Vá em "Configurações" e, se quiser uma resposta por pessoa, ligue "Limitar a 1 resposta". 3. Escolha como compartilhar: e-mail (ícone de envelope), link curto ou QR Code. 4. Envie para pelo menos três colegas. 5. Acompanhe a aba "Respostas" e anote quantas respostas chegaram até o fim da aula.`,
      gabarito: `O aluno consegue mostrar: a configuração escolhida (com ou sem limite de uma resposta, de forma coerente com o objetivo), o canal usado para compartilhar e, na aba "Respostas", pelo menos três respostas recebidas dos colegas. O número anotado deve bater com a contagem exibida no topo da aba "Respostas".`,
    },
  ],
};
