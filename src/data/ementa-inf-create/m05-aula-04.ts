import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 4,
  titulo: "Colaborar ao vivo com a turma",
  semana: "Semana 2",
  duracao: "1 hora",
  objetivo: `Compartilhar uma planilha do Google por link, definir quem pode ver ou editar e trabalhar em dupla ao mesmo tempo, usando comentários e histórico de versões.`,
  descricao: `Nesta aula a turma descobre o verdadeiro superpoder do Google Planilhas: a colaboração em tempo real. Diferente do Excel instalado no computador, uma planilha na nuvem pode ser aberta por várias pessoas ao mesmo tempo, e cada uma vê o que a outra está digitando no exato momento em que acontece. Os alunos vão ver o cursor colorido do colega andando pela tela, com o nome dele aparecendo do lado, e isso costuma gerar muita empolgação.

O coração da aula é o botão "Compartilhar", aquele botão azul no canto superior direito. A partir dele o aluno aprende a gerar um link e a escolher o nível de acesso de quem recebe esse link: somente leitura (Leitor), permissão de sugerir mudanças (Comentarista) ou liberdade total para alterar (Editor). Entender essa diferença é essencial para a segurança e a organização de qualquer trabalho em grupo.

Além de compartilhar, a aula apresenta duas ferramentas que tornam a colaboração organizada e segura. A primeira são os comentários: o aluno seleciona uma célula, deixa um recado escrito e pode até marcar um colega para que ele receba um aviso. A segunda é o histórico de versões, uma espécie de máquina do tempo que mostra tudo o que mudou na planilha, quem mudou e quando, permitindo voltar atrás se algo der errado.

Ao final, cada dupla deve conseguir editar a mesma planilha ao mesmo tempo, trocar comentários e consultar o histórico. Essa experiência prepara o terreno para a Aula 5, quando os dados organizados em equipe começarão a virar gráficos.`,
  materiais: [
    `Computadores (um por aluno) com navegador atualizado e o Google Planilhas aberto`,
    `Conta Google ativa para cada aluno, com login feito antes do início da aula`,
    `Projetor ou tela grande para o professor demonstrar cada passo ao vivo`,
    `Arquivo de exemplo "Lista de filmes da turma" já criado no Google Drive do professor`,
    `Planilha pessoal de cada aluno, salva nas aulas anteriores deste mês`,
    `Acesso à internet estável (a colaboração ao vivo depende totalmente da conexão)`,
    `Lista com os e-mails dos alunos, para facilitar o compartilhamento por nome`,
  ],
  conceitosChave: [
    `Compartilhar — abrir uma planilha para outras pessoas acessarem, por link ou por e-mail.`,
    `Permissão de acesso — o nível que define o que a pessoa pode fazer: ver, comentar ou editar.`,
    `Leitor — quem só consegue olhar a planilha, sem alterar nada.`,
    `Editor — quem pode digitar, apagar e mudar qualquer coisa na planilha.`,
    `Comentário — um recado escrito preso a uma célula, usado para conversar sem alterar os dados.`,
    `Cursor colaborativo — o retângulo colorido com o nome do colega que mostra onde ele está editando.`,
    `Histórico de versões — o registro de todas as mudanças, que permite voltar a um estado anterior.`,
  ],
  treinamento: `## O que o professor precisa saber

A grande novidade aqui é que tudo acontece "ao vivo". Antes da aula, faça um teste em casa: abra uma planilha, clique em "Compartilhar" (botão azul, canto superior direito) e veja as três permissões. Tenha a planilha de exemplo "Lista de filmes da turma" pronta no seu Drive. Combine de antemão quem vai formar cada dupla, porque a parte central da aula depende disso. Se a internet da escola for instável, avise os alunos que pode haver um pequeno atraso até o cursor do colega aparecer; isso é normal.

## Passo a passo da aula (ritmo 10/15/25/10)

Aquecimento (10 min): retome a aula anterior perguntando quais funções a turma já conhece (=SOMA, =MÉDIA). Em seguida, abra sua planilha no projetor e faça a pergunta provocadora: "E se duas pessoas pudessem escrever aqui ao mesmo tempo?". Peça para todos abrirem a própria planilha pessoal do mês.

Conteúdo novo guiado (15 min): no projetor, clique no botão azul "Compartilhar". Mostre a janela que abre. Em "Acesso geral", clique onde está escrito "Restrito" e troque para "Qualquer pessoa com o link". Ao lado, clique na seta e mostre as três opções: Leitor, Comentarista e Editor. Clique em "Copiar link". Depois ensine os comentários: clique com o botão direito numa célula, escolha "Comentar", digite um recado e clique em "Comentar" de novo. Por fim, abra o menu "Arquivo" no topo, depois "Histórico de versões" e "Ver histórico de versões"; mostre a lista de datas à direita.

Mão na massa (25 min): cada aluno escolhe uma dupla. O aluno A clica em "Compartilhar", coloca o e-mail do aluno B, define a permissão como "Editor" e clica em "Enviar". O aluno B abre a planilha pela notificação ou pelo link. Agora os dois editam ao mesmo tempo: peça que adicionem juntos cinco filmes favoritos na "Lista de filmes da turma". Cada um deve observar o cursor colorido do outro andando. Em seguida, o aluno B seleciona uma célula e deixa um comentário fazendo uma pergunta ("Esse filme é de terror?"); o aluno A responde no mesmo comentário. Para terminar, peça que abram juntos o histórico de versões e identifiquem quem digitou o quê.

Desafio e compartilhar (10 min): proponha que cada dupla apague de propósito uma linha e depois use o histórico de versões para restaurar a planilha. Reúna a turma e pergunte: "O que foi mais legal? O que deu errado?".

## Como explicar de forma clara (linguagem para a idade)

Compare a planilha na nuvem a um jogo on-line: "Vocês já jogaram um game em que veem o personagem do amigo se mexendo na mesma tela? Aqui é igual, mas com números e palavras". Para as permissões, use a imagem de uma festa: o Leitor é o convidado que só olha, o Editor é o amigo que ajuda a arrumar tudo. Diga que o link é como o endereço da casa: quem tem o endereço consegue chegar, por isso só se entrega para quem confiamos.

## Erros comuns e como ajudar

O erro mais frequente é compartilhar como "Leitor" e depois reclamar que o colega não consegue editar; mostre como trocar a permissão clicando no nome da pessoa dentro de "Compartilhar". Outro erro é o aluno esperar o cursor do colega aparecer imediatamente: explique que pode levar alguns segundos. Muitos confundem "comentar" com "editar a célula"; reforce que o comentário fica numa caixinha lateral e não muda o número. Alguns esquecem de digitar o e-mail certo e o convite não chega; tenha a lista de e-mails à mão. Por fim, se alguém apagar dados sem querer, lembre que o histórico de versões salva o dia.`,
  exercicios: [
    {
      titulo: `Gerando o primeiro link de compartilhamento`,
      tipo: `Prática na ferramenta`,
      tempo: `5 min`,
      guiaProfessor: `Circule pela sala conferindo se cada aluno encontrou o botão azul "Compartilhar". O ponto crítico é trocar "Restrito" por "Qualquer pessoa com o link".`,
      atividade: `Na sua planilha pessoal, clique no botão azul "Compartilhar". Em "Acesso geral", troque "Restrito" para "Qualquer pessoa com o link" e deixe a permissão como "Leitor". Clique em "Copiar link" e cole o link numa célula vazia da própria planilha.`,
      gabarito: `O aluno deve gerar um link iniciado por https://docs.google.com/spreadsheets/ e colá-lo numa célula. O acesso geral precisa estar como "Qualquer pessoa com o link" e a permissão como "Leitor". Verificação: peça que o aluno mostre a célula com o link e confirme a permissão na janela de compartilhamento.`,
    },
    {
      titulo: `Escolhendo a permissão certa`,
      tipo: `Desafio`,
      tempo: `5 min`,
      guiaProfessor: `Esse exercício testa a compreensão das três permissões. Não é mexer na ferramenta, é raciocinar. Corrija oralmente logo depois.`,
      atividade: `Para cada situação, escreva qual permissão você daria: Leitor, Comentarista ou Editor. 1) Um colega vai ajudar a digitar os dados. 2) A professora só quer conferir sua planilha. 3) Um amigo quer sugerir correções sem mudar nada.`,
      gabarito: `1) Editor (precisa digitar e alterar). 2) Leitor (só confere, não mexe). 3) Comentarista (sugere e comenta sem editar os dados). Aceite explicações com palavras próprias, desde que a permissão escolhida esteja correta.`,
    },
    {
      titulo: `Editando juntos ao mesmo tempo`,
      tipo: `Em dupla`,
      tempo: `8 min`,
      guiaProfessor: `Garanta que o aluno A defina o aluno B como "Editor" antes de enviar. Aponte os cursores coloridos na tela para que todos percebam o tempo real.`,
      atividade: `Em dupla, o aluno A compartilha a "Lista de filmes da turma" com o aluno B usando o e-mail dele e a permissão "Editor". O aluno B abre a planilha. Juntos, adicionem cinco filmes favoritos, cada um digitando em linhas diferentes ao mesmo tempo. Observem o cursor colorido do colega.`,
      gabarito: `A planilha deve conter cinco filmes novos, com contribuições dos dois alunos. O aluno B precisa aparecer como "Editor" na lista de pessoas com acesso, e ambos devem relatar ter visto o cursor colorido do colega se movendo. Verificação: confira a lista de filmes e a lista de acessos.`,
    },
    {
      titulo: `Conversando pelos comentários`,
      tipo: `Roda de conversa`,
      tempo: `7 min`,
      guiaProfessor: `Reforce a diferença entre comentar e editar. Depois, abra a roda perguntando como os comentários ajudam um trabalho em grupo sem bagunçar os dados.`,
      atividade: `O aluno B seleciona uma célula com o nome de um filme, clica com o botão direito, escolhe "Comentar" e escreve uma pergunta sobre o filme. O aluno A responde dentro do mesmo comentário. Depois, na roda de conversa, cada dupla conta uma vantagem de usar comentários em vez de apagar e reescrever.`,
      gabarito: `Deve existir um comentário com pelo menos uma pergunta e uma resposta numa célula da planilha. Na roda, espera-se respostas como: "o comentário não apaga o dado", "dá para conversar sem bagunçar a planilha" ou "todos veem a dúvida". Aceite ideias equivalentes ditas com as palavras dos alunos.`,
    },
    {
      titulo: `Máquina do tempo: restaurar uma versão`,
      tipo: `Projeto curto`,
      tempo: `10 min`,
      guiaProfessor: `Este é o ponto alto. Acompanhe o caminho Arquivo > Histórico de versões > Ver histórico de versões. Tranquilize quem se assustar ao apagar a linha: o histórico recupera tudo.`,
      atividade: `Em dupla, apaguem de propósito uma linha inteira da "Lista de filmes da turma". Depois, abram o menu "Arquivo", escolham "Histórico de versões" e "Ver histórico de versões". Encontrem a versão anterior, antes do apagamento, e cliquem em "Restaurar esta versão". Confiram se a linha apagada voltou.`,
      gabarito: `A linha apagada deve reaparecer após a restauração da versão anterior. O caminho correto é Arquivo > Histórico de versões > Ver histórico de versões > selecionar a versão antiga > Restaurar esta versão. Verificação: confirme que a "Lista de filmes da turma" voltou ao estado completo e que a dupla identificou no painel direito quem fez cada alteração.`,
    },
  ],
};
