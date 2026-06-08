import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 8,
  titulo: "Entrega e Demonstração do Sistema",
  semana: "Semana 4",
  duracao: "1 hora",
  objetivo: `Finalizar, testar e salvar o mini-sistema do Excel com VBA e apresentá-lo para a turma mostrando o cadastro, os botões e os avisos de erro funcionando.`,
  descricao: `Esta é a última aula do mês e o momento de fechar com chave de ouro o entregável: a planilha automatizada (mini-sistema). Durante quatro semanas, cada aluno conectou macros, criou botões, desenhou a tela, programou o cadastro em VBA, aprendeu a lidar com erros e blindou o sistema contra dados inválidos. Agora chegou a hora de juntar tudo, dar os últimos ajustes e mostrar com orgulho o que foi construído.

O foco do dia é prático e celebrativo. Primeiro, cada aluno testa o sistema completo do começo ao fim, como se fosse um usuário de verdade: cadastra registros, clica nos botões, força os avisos de erro de propósito para conferir se a proteção funciona e corrige os últimos detalhes que aparecerem. Em seguida, salva o arquivo no formato correto, a Pasta de Trabalho Habilitada para Macros (.xlsm), porque um arquivo .xlsx comum apaga todo o código VBA.

Depois vem a parte mais especial: a demonstração. Cada aluno apresenta o sistema para a turma em poucos minutos, contando o que ele faz, mostrando o cadastro funcionando, os botões em ação e um aviso de erro aparecendo na hora certa. Apresentar reforça a confiança, treina a comunicação técnica e fecha o ciclo do projeto.

Para o professor, mesmo iniciante em Excel e VBA, o roteiro é tranquilo: nesta aula não há código novo. O papel é organizar os testes, garantir que todos salvem em .xlsm, conduzir as apresentações de forma acolhedora e ajudar quem ainda tiver algum botão ou validação com problema. É uma aula de consolidação, não de novidade.`,
  materiais: [
    `Computadores com Excel instalado e a aba Desenvolvedor habilitada, com o Editor VBA acessível (Alt + F11)`,
    `Projetor ou TV para as apresentações dos alunos`,
    `O arquivo do mini-sistema de cada aluno, salvo das aulas anteriores (cadastro, botões e validações já construídos)`,
    `Um arquivo de exemplo do professor, já finalizado e salvo em .xlsm, como referência`,
    `Uma checklist de testes impressa ou no projetor (cadastrar, listar, limpar, forçar erro, salvar)`,
    `Pendrive ou pasta na rede/nuvem para backup dos arquivos finais`,
    `Cronômetro ou relógio visível para controlar o tempo das apresentações`,
  ],
  conceitosChave: [
    `Mini-sistema — conjunto de planilha, botões e código VBA que trabalham juntos para fazer uma tarefa, como um cadastro.`,
    `Pasta de Trabalho Habilitada para Macros (.xlsm) — formato de arquivo do Excel que guarda o código VBA; o .xlsx comum apaga as macros.`,
    `Teste de ponta a ponta — experimentar o sistema inteiro, do início ao fim, como um usuário real faria, para encontrar problemas.`,
    `Validação — verificação que o código faz nos dados digitados para impedir cadastros errados, mostrando um aviso quando algo está incorreto.`,
    `Demonstração — apresentação curta em que o aluno mostra o sistema funcionando e explica o que cada parte faz.`,
    `Backup — cópia de segurança do arquivo, guardada em outro lugar, para não perder o trabalho.`,
    `Caso de teste — situação específica que escolhemos testar de propósito, como deixar um campo vazio para ver se o aviso de erro aparece.`,
  ],
  treinamento: `## O que o professor precisa saber

Boa notícia: nesta aula não há código novo. Tudo o que os alunos precisam já foi construído nas sete aulas anteriores. Seu papel é conduzir três coisas: o teste final do sistema, o salvamento no formato correto (.xlsm) e as apresentações. Dois pontos merecem atenção especial. Primeiro, o formato do arquivo: se o aluno salvar como .xlsx comum, o Excel apaga todo o código VBA sem avisar direito. O formato certo é Pasta de Trabalho Habilitada para Macros, com extensão .xlsm. Segundo, ao abrir um .xlsm o Excel mostra uma faixa amarela de segurança pedindo para Habilitar Conteúdo; é só clicar nesse botão para as macros funcionarem. Tenha o seu arquivo de exemplo já finalizado para mostrar o resultado esperado.

## Passo a passo da aula (ritmo 10/15/25/10)

Aquecimento (10 min): peça que todos abram o arquivo do mini-sistema. Quem vir a faixa amarela deve clicar em Habilitar Conteúdo. Faça uma revisão rápida e oral: o que cada botão faz? O que o sistema mostra quando alguém erra um dado? Projete a checklist de testes do dia.

Conteúdo guiado (15 min): mostre no projetor, com o seu arquivo, como fazer um teste de ponta a ponta. Cadastre um registro válido e clique no botão Cadastrar; veja a linha aparecer. Clique no botão Limpar. Agora faça de propósito um teste de erro: deixe um campo vazio ou digite letras onde deveria ter número e clique em Cadastrar; o aviso de erro deve aparecer. Em seguida, ensine a salvar: menu Arquivo, Salvar Como, e no campo Tipo escolha Pasta de Trabalho Habilitada para Macros do Excel (.xlsm). Confirme que a extensão ficou .xlsm.

Mão na massa (25 min): cada aluno roda a checklist no próprio sistema, marcando o que funciona e anotando o que precisa de ajuste. Eles cadastram registros, clicam em todos os botões, forçam pelo menos dois avisos de erro e corrigem os últimos detalhes (um botão sem nome, uma cor, uma mensagem mal escrita). Ao terminar, todos salvam em .xlsm e fazem um backup no pendrive ou na nuvem. Circule pela sala ajudando quem travar.

Desafio e compartilhar (10 min): comecem as apresentações. Cada aluno tem cerca de um minuto e meio para mostrar o sistema no projetor: diz o nome do projeto, cadastra um registro ao vivo, mostra um botão e provoca um aviso de erro de propósito. A turma aplaude cada apresentação.

## Como explicar de forma clara (linguagem para a idade)

Use a ideia de entregar um produto pronto. Diga: imagine que você é a pessoa que vai usar este sistema todo dia; teste como ela testaria. Para o formato do arquivo, use uma imagem forte: o .xlsm é uma caixa que guarda o seu robô (o código); se você salvar como .xlsx, a caixa joga o robô fora. Para os testes de erro, fale que um bom programador tenta quebrar o próprio sistema de propósito, antes que outra pessoa quebre por acidente. E lembre que apresentar não é se exibir, é contar com orgulho o que você criou.

## Erros comuns e como ajudar

O erro mais frequente é salvar em .xlsx e perder o código; oriente sempre a conferir se a extensão é .xlsm. Outro caso: o aluno abre o arquivo e os botões não funcionam, geralmente porque esqueceu de clicar em Habilitar Conteúdo na faixa amarela. Alguns vão descobrir bugs só agora, na hora do teste; acolha isso como algo normal e ajude a corrigir com calma. Na apresentação, haverá nervosismo; combine antes um roteirinho de três frases para o aluno se sentir seguro. E reforce o backup: ninguém deve sair da aula sem uma cópia guardada do arquivo final.`,
  exercicios: [
    {
      titulo: `Rodando a checklist de testes`,
      tipo: `Prática na ferramenta`,
      tempo: `12 minutos`,
      guiaProfessor: `Projete a checklist e acompanhe cada aluno passar por todos os itens. Insista nos testes de erro, que costumam ser pulados. Confirme que cada um marcou o que funciona e anotou o que precisa de ajuste.`,
      atividade: `Abra seu mini-sistema (clique em Habilitar Conteúdo se a faixa amarela aparecer) e percorra a checklist: 1) cadastre um registro válido e clique em Cadastrar; 2) clique no botão Limpar; 3) cadastre mais dois registros; 4) deixe um campo vazio e clique em Cadastrar para ver o aviso de erro; 5) digite letras onde deveria ter número e tente cadastrar. Marque cada item como funcionando ou com problema.`,
      gabarito: `Checklist concluída com todos os itens marcados. O esperado: os registros válidos entram na lista, o botão Limpar esvazia os campos, e nos dois testes de erro aparece o aviso de validação impedindo o cadastro errado. Itens com problema ficam anotados para correção no próximo exercício.`,
    },
    {
      titulo: `Salvando como .xlsm e fazendo backup`,
      tipo: `Prática na ferramenta`,
      tempo: `8 minutos`,
      guiaProfessor: `Demonstre no projetor o caminho Arquivo, Salvar Como, campo Tipo. Confira aluno por aluno se a extensão final é mesmo .xlsm. Garanta que todos copiem o arquivo para o pendrive ou a nuvem antes de seguir.`,
      atividade: `Salve seu sistema no formato certo: clique em Arquivo, depois Salvar Como; no campo Tipo, escolha Pasta de Trabalho Habilitada para Macros do Excel (.xlsm) e salve. Feche e abra o arquivo de novo para conferir se os botões ainda funcionam. Por fim, copie o arquivo para o pendrive ou para a pasta na nuvem (backup).`,
      gabarito: `Arquivo salvo com extensão .xlsm. Ao reabrir, a faixa amarela aparece e, após Habilitar Conteúdo, os botões funcionam normalmente, provando que o código VBA foi preservado. Uma cópia de segurança existe no pendrive ou na nuvem.`,
    },
    {
      titulo: `Caça aos últimos detalhes (em dupla)`,
      tipo: `Em dupla`,
      tempo: `12 minutos`,
      guiaProfessor: `Forme duplas. Cada aluno testa o sistema do colega como se fosse um usuário novo, sem dicas. Oriente a anotar achados de forma gentil. Depois invertem. Ajude a corrigir os ajustes simples encontrados.`,
      atividade: `Troque de computador com o colega. Use o sistema dele do zero, tentando quebrá-lo de propósito: campos vazios, números negativos, textos muito longos, clicar nos botões fora de ordem. Anote três coisas a melhorar (um aviso confuso, um botão sem nome, uma cor difícil de ler). Depois inverta e deixe o colega testar o seu. Cada um corrige pelo menos um item apontado.`,
      gabarito: `Cada dupla produz uma lista de três melhorias por sistema e aplica ao menos uma correção em cada. Exemplos válidos: renomear um botão de Button1 para Cadastrar, melhorar o texto de um aviso de erro, ajustar a cor de uma célula ou impedir um número negativo no cadastro.`,
    },
    {
      titulo: `Demonstração de 90 segundos`,
      tipo: `Projeto curto`,
      tempo: `18 minutos`,
      guiaProfessor: `Combine um roteiro de três frases para cada aluno e controle o tempo no relógio. Conduza com energia positiva e puxe os aplausos. Anote um elogio específico para cada apresentação ao final.`,
      atividade: `Prepare e apresente seu sistema para a turma no projetor, em cerca de 90 segundos. Roteiro sugerido: 1) diga o nome do projeto e para que ele serve; 2) cadastre um registro ao vivo e mostre um botão funcionando; 3) provoque de propósito um aviso de erro para mostrar que o sistema é protegido. Termine dizendo a parte de que você mais se orgulha.`,
      gabarito: `Apresentação completa dentro do tempo, com os três pontos do roteiro: nome e função do sistema, cadastro e botão funcionando ao vivo, e um aviso de erro disparado de propósito. Demonstra que o entregável do mês, a planilha automatizada, está pronto e funcionando.`,
    },
    {
      titulo: `Roda de conversa: o que aprendi neste mês`,
      tipo: `Roda de conversa`,
      tempo: `10 minutos`,
      guiaProfessor: `Faça um círculo e dê a vez a cada aluno. Conduza com perguntas abertas e valorize toda resposta. Conecte as falas à jornada do mês, de conectar macros até a entrega final. Encerre celebrando o primeiro código de verdade da turma.`,
      atividade: `Em roda, cada um responde em poucas frases: qual foi a parte mais difícil de construir o mini-sistema? Qual foi a mais divertida? Onde, na vida real, você usaria um sistema de cadastro como esse? Se tivesse mais uma semana, o que você acrescentaria ao seu sistema?`,
      gabarito: `Não há resposta certa ou errada; o objetivo é a reflexão. Respostas ricas costumam citar a lógica do VBA como o desafio maior, ver os botões funcionando como o ponto alto, usos reais como cadastro de alunos, jogos ou estoque de uma lojinha, e ideias de melhoria como busca, totais automáticos ou um botão de excluir.`,
    },
  ],
};
