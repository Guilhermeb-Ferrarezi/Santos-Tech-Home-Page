import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 8,
  titulo: "Entrega final e certificado do Ano 1",
  semana: "Semana 4",
  duracao: "1 hora",
  objetivo: `Concluir na prática uma rotina completa de manutenção do PC — limpeza, atualizações e backup —, apresentar o resultado para a turma e encerrar o Ano 1 com a revisão das conquistas e a entrega do certificado.`,
  descricao: `Esta é a última aula do Ano 1, e ela tem peso de formatura. Durante o mês a turma viajou pelo planeta no Google Earth, traçou rotas no Google Maps, guardou e compartilhou arquivos no Google Drive e aprendeu o básico de manutenção do PC. Hoje todo esse aprendizado se transforma em um entregável concreto: cada aluno executa, do começo ao fim, uma rotina de manutenção que deixa o computador mais limpo, mais seguro e com os arquivos importantes protegidos na nuvem.

O coração da aula é uma sequência de três cuidados que todo computador precisa receber de tempos em tempos. Primeiro a limpeza, que apaga arquivos temporários e a lixeira para liberar espaço. Depois as atualizações, que verificam se o sistema e os programas estão na versão mais nova e mais protegida. Por fim o backup, que copia as pastas que o aluno não pode perder para o Google Drive, a nuvem pessoal que ele já domina. Ao terminar, cada um terá uma máquina cuidada e uma cópia de segurança guardada longe do HD.

Mais do que clicar nos botões certos, o objetivo é fixar uma rotina que o aluno levará para a vida. Manutenção não é mágica nem coisa de técnico misterioso: é um hábito simples e repetível, como escovar os dentes. Por isso a aula pede que cada aluno apresente o que fez, explicando em voz alta os três passos que executou. Quem explica para os outros aprende em dobro e leva o conhecimento para casa.

O encerramento é a celebração do ano inteiro. A turma faz uma viagem rápida pelas conquistas dos doze meses — dos fundamentos do computador às quatro inteligências artificiais, do Office ao Google Workspace, dos mapas à nuvem — e cada aluno recebe o certificado do Ano 1. É o momento de reconhecer o esforço, valorizar o crescimento e plantar a vontade de continuar aprendendo no Ano 2.`,
  materiais: [
    `Computadores com acesso ao sistema (Windows com Configurações e Limpeza de Disco), ao Google Drive e ao navegador, um por aluno`,
    `Projetor ou tela grande para o professor demonstrar a rotina de manutenção e para os alunos apresentarem`,
    `Contas Google ativas em cada computador, com espaço livre no Google Drive para o backup`,
    `Pasta de exemplo com arquivos do aluno (trabalhos do ano) para servir de alvo do backup`,
    `Lista de checagem da manutenção, impressa ou projetada (limpeza, atualizações e backup)`,
    `Conexão estável com a internet (necessária para verificar atualizações e enviar o backup à nuvem)`,
    `Certificados do Ano 1 impressos, com o nome de cada aluno, para a entrega no fim da aula`,
  ],
  conceitosChave: [
    `Manutenção do PC — rotina de cuidados periódicos que mantém o computador limpo, atualizado e seguro, feita de tempos em tempos.`,
    `Limpeza de disco — etapa que apaga arquivos temporários e esvazia a lixeira para liberar espaço e deixar a máquina mais leve.`,
    `Atualização — verificação que instala as versões mais novas do sistema e dos programas, corrigindo falhas e fechando brechas de segurança.`,
    `Backup — cópia de segurança dos arquivos importantes guardada em outro lugar, como o Google Drive, para não perder nada se o computador falhar.`,
    `Nuvem — espaço de armazenamento na internet (como o Google Drive) que guarda os arquivos longe do HD e permite acessá-los de qualquer aparelho.`,
    `Rotina — hábito repetível de fazer sempre os mesmos passos, na mesma ordem, para que nada importante seja esquecido.`,
    `Certificado — documento que reconhece a conclusão do Ano 1 e registra as conquistas do aluno no curso.`,
  ],
  treinamento: `## O que o professor precisa saber

Hoje você não apresenta ferramenta nova: você junta a manutenção do PC com o Google Drive que a turma já viu no mês. Chegue antes e faça a rotina inteira uma vez na sua máquina para não hesitar na frente dos alunos. São três paradas. A primeira é a Limpeza de Disco do Windows: clique no menu Iniciar, digite "Limpeza de Disco", abra o programa, escolha o disco C: e marque "Arquivos temporários" e "Lixeira"; depois clique em OK e em "Excluir arquivos". A segunda é a atualização: abra Configurações (tecla Windows + I), vá em "Windows Update" e clique em "Verificar se há atualizações". A terceira é o backup no Drive: abra o navegador em drive.google.com, clique em "+ Novo" e depois em "Upload de pasta", selecionando a pasta de arquivos do aluno. Se a escola usa o app Google Drive para computador, o backup pode ser só arrastar a pasta para dentro da pasta do Drive. Teste o caminho que a sua sala tem. Tenha os certificados impressos e em ordem antes de começar.

## Passo a passo da aula (ritmo 10/15/25/10)

Aquecimento (10 min). Projete a tela e comemore: "Hoje vocês fecham o Ano 1!" Pergunte o que um computador precisa para durar bem. Relembre rapidamente o Drive como nuvem pessoal, mostrando drive.google.com no projetor. Apresente os três cuidados do dia: limpar, atualizar e fazer backup.

Conteúdo novo guiado (15 min). Faça a rotina na tela, passo a passo. Abra a Limpeza de Disco pelo Iniciar, escolha o disco C:, marque "Arquivos temporários" e "Lixeira" e clique em OK. Em seguida abra Configurações com Windows + I, vá em Windows Update e clique em "Verificar se há atualizações". Por fim, em drive.google.com, clique em "+ Novo" e "Upload de pasta" para enviar a pasta de exemplo. Mostre a barra de progresso e a marca de concluído.

Mão na massa (25 min). Cada aluno executa a rotina completa na própria máquina, seguindo a lista de checagem: 1) Limpeza de Disco no C:, marcando temporários e lixeira; 2) Windows Update, verificando atualizações; 3) backup da sua pasta de arquivos para o Drive. Circule pela sala ajudando quem travar e confira cada item da lista junto com o aluno.

Desafio e compartilhar (10 min). Alguns alunos vêm à frente e explicam, em um minuto, os três passos que fizeram e por que cada um importa. Faça a viagem pelas conquistas do ano e entregue o certificado do Ano 1 a cada aluno, com uma palavra de reconhecimento.

## Como explicar de forma clara (linguagem para a idade)

Use comparações do dia a dia. Diga que manutenção do PC é como cuidar de uma bicicleta: de vez em quando você limpa, aperta e lubrifica para ela não enferrujar. A limpeza de disco é como esvaziar a mochila de papéis que não servem mais, para sobrar espaço. A atualização é como tomar a vacina mais nova: protege contra problemas que já foram descobertos. E o backup é a foto de segurança: se o computador sumir, a cópia continua guardada na nuvem. Repita que tudo isso é um hábito simples, como escovar os dentes, e não coisa de gênio da informática.

## Erros comuns e como ajudar

O erro mais comum é o aluno marcar caixas demais na Limpeza de Disco, incluindo itens que não conhece; oriente a marcar só "Arquivos temporários" e "Lixeira". Outro tropeço é achar que "Windows Update verificando" travou: explique que demora e que basta esperar a mensagem aparecer. No backup, muitos confundem "Upload de arquivo" com "Upload de pasta" e enviam só um arquivo solto; mostre a diferença e peça a opção de pasta. Há quem feche o navegador antes de o upload terminar e perca a cópia; peça que esperem a barra de progresso chegar ao fim. Por último, alguns ficam ansiosos achando que vão "estragar o computador"; tranquilize dizendo que limpar temporários e atualizar é totalmente seguro e que você está ali para conferir cada passo.`,
  exercicios: [
    {
      titulo: `Mochila leve: limpeza de disco`,
      tipo: `prática na ferramenta`,
      tempo: `6 minutos`,
      guiaProfessor: `Mostre no projetor como abrir a Limpeza de Disco pelo menu Iniciar (digitando "Limpeza de Disco") e escolher o disco C:. Reforce que só se marca "Arquivos temporários" e "Lixeira". Confira a tela de cada aluno antes de ele clicar em Excluir.`,
      atividade: `Abra a Limpeza de Disco pelo menu Iniciar, escolha o disco C:, marque apenas "Arquivos temporários" e "Lixeira", clique em OK e confirme em "Excluir arquivos". Anote quanto espaço foi liberado, se aparecer.`,
      gabarito: `O aluno abre a Limpeza de Disco, seleciona o disco C:, marca somente as caixas "Arquivos temporários" e "Lixeira" (sem marcar itens desconhecidos), confirma a exclusão e a limpeza termina sem erro. O espaço liberado pode ser anotado; o computador continua funcionando normalmente.`,
    },
    {
      titulo: `Vacina do computador: atualizações`,
      tipo: `prática na ferramenta`,
      tempo: `7 minutos`,
      guiaProfessor: `Demonstre o atalho Windows + I para abrir as Configurações e o caminho até "Windows Update". Avise que a verificação pode demorar e que isso é normal. Peça que ninguém reinicie a máquina sem chamar você.`,
      atividade: `Abra as Configurações (tecla Windows + I), entre em "Windows Update" e clique em "Verificar se há atualizações". Espere a verificação terminar e escreva o que apareceu: já está atualizado ou há atualizações para instalar?`,
      gabarito: `O aluno acessa Configurações > Windows Update, clica em "Verificar se há atualizações" e aguarda a verificação concluir. Ele relata corretamente o resultado mostrado na tela — "Você está em dia" ou a lista de atualizações disponíveis — e não reinicia o computador sem autorização.`,
    },
    {
      titulo: `Cópia de segurança na nuvem`,
      tipo: `desafio`,
      tempo: `10 minutos`,
      guiaProfessor: `Mostre o caminho no Google Drive: drive.google.com, botão "+ Novo" e depois "Upload de pasta". Reforce a diferença entre "Upload de arquivo" e "Upload de pasta". Lembre que é preciso esperar a barra de progresso chegar ao fim antes de fechar.`,
      atividade: `Em drive.google.com, clique em "+ Novo" e depois em "Upload de pasta". Selecione a sua pasta de arquivos do ano e envie tudo para o Drive. Espere a barra de progresso terminar e confirme que a pasta apareceu na lista do Drive.`,
      gabarito: `O aluno usa "+ Novo" > "Upload de pasta" (e não upload de arquivo solto), seleciona a pasta correta e aguarda o upload concluir até a marca de concluído. Ao final, a pasta com os arquivos aparece na lista do Google Drive, comprovando que o backup foi feito na nuvem.`,
    },
    {
      titulo: `Dupla de manutenção completa`,
      tipo: `em dupla`,
      tempo: `12 minutos`,
      guiaProfessor: `Forme duplas. Um aluno executa a rotina enquanto o outro confere a lista de checagem em voz alta; depois trocam de papel. Use a lista projetada (limpeza, atualizações, backup) para guiar. Confira cada item marcado.`,
      atividade: `Em dupla, façam a rotina completa de manutenção, um conferindo o outro pela lista de checagem: 1) Limpeza de Disco no C:; 2) Windows Update verificado; 3) backup da pasta no Drive. Marquem cada item da lista só depois de confirmarem juntos. Depois troquem os papéis.`,
      gabarito: `A dupla executa os três passos na ordem correta e marca cada item da lista de checagem apenas após conferir junto: limpeza feita, atualizações verificadas e backup concluído no Drive. Os dois alunos conseguem explicar o que cada etapa faz; ao trocar de papel, o segundo aluno também completa a rotina.`,
    },
    {
      titulo: `Vitrine do Ano 1 e certificado`,
      tipo: `projeto curto e roda de conversa`,
      tempo: `15 minutos`,
      guiaProfessor: `Conduza as apresentações no projetor, com cerca de um minuto por aluno que se voluntariar. Depois reúna a turma em roda para a viagem pelas conquistas do ano e faça a entrega dos certificados, valorizando cada aluno pelo nome.`,
      atividade: `Apresente para a turma a manutenção que você fez: explique em um minuto os três passos (limpeza, atualização e backup) e por que cada um importa. Na roda de conversa, cite uma coisa que você aprendeu no Ano 1 que mais gostou. Ao final, receba o seu certificado.`,
      gabarito: `O aluno apresenta a rotina de manutenção concluída, nomeando os três passos (limpeza, atualização e backup) e explicando para que servem com palavras próprias. Na roda, cita um aprendizado real do ano — por exemplo: usar inteligências artificiais, planilhas, mapas ou a nuvem. Todos recebem o certificado do Ano 1. Qualquer reflexão coerente e respeitosa é válida.`,
    },
  ],
};
