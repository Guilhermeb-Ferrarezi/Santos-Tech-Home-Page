import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 2,
  titulo: "Um Botão, Várias Ações",
  semana: "Semana 1",
  duracao: "1 hora",
  objetivo: `Montar um fluxo automático no Excel em que um único botão executa várias macros em ordem (limpar, copiar e formatar) sem travar.`,
  descricao: `Na aula passada o aluno conheceu como conectar macros num só fluxo. Agora ele vai colocar isso em prática construindo um botão na planilha que, com um único clique, dispara uma sequência completa de ações. A ideia central é simples e poderosa: em vez de o usuário rodar três macros separadas (uma para limpar dados, outra para copiar valores e uma terceira para formatar), o programa faz tudo de uma vez, na ordem certa.

Para isso usamos o conceito de sub-rotinas. Cada tarefa vira uma pequena macro independente (uma Sub no VBA), com um nome claro como LimparDados, CopiarValores e FormatarTudo. Depois criamos uma macro "principal" que apenas chama essas três na sequência, usando o comando Call. É como uma receita: a macro principal é a lista de passos, e cada Sub é uma etapa pronta da receita. Essa organização deixa o código mais fácil de ler, de testar e de corrigir.

O botão entra como o "gatilho" visível na planilha. O aluno desenha um botão na guia Desenvolvedor e o conecta à macro principal. A partir daí, qualquer pessoa que abrir a planilha consegue rodar todo o fluxo sem saber programar: basta clicar. É a primeira vez que o aluno cria algo que parece um programa de verdade, com interface e automação juntos.

O grande objetivo prático da aula é fazer o fluxo rodar do início ao fim sem travar. Por isso reservamos tempo para testar, descobrir o que não funciona e ajustar a ordem das ações. Esse hábito de testar e corrigir é o coração da programação, e prepara o aluno para as próximas aulas sobre erros e blindagem do sistema.`,
  materiais: [
    `Computadores com Microsoft Excel instalado e a guia Desenvolvedor já habilitada (Arquivo, Opções, Personalizar Faixa de Opções, marcar Desenvolvedor)`,
    `Editor VBA acessível pelo atalho Alt + F11 em cada máquina`,
    `Projetor ou TV para o professor demonstrar os passos ao vivo`,
    `Arquivo de exemplo "Pedidos.xlsm" com uma aba de dados de origem e uma aba de destino vazia`,
    `Planilha modelo já salva no formato habilitado para macros (.xlsm)`,
    `Folha impressa com o nome das três sub-rotinas (LimparDados, CopiarValores, FormatarTudo) para o aluno consultar`,
    `Conta de usuário com permissão para salvar arquivos na máquina (sem necessidade de internet)`,
  ],
  conceitosChave: [
    `Sub-rotina — uma macro pequena e independente que faz uma única tarefa, como limpar ou copiar dados.`,
    `Macro principal — a sub-rotina que organiza o fluxo chamando as outras na ordem certa.`,
    `Call — comando do VBA que manda executar outra sub-rotina pelo nome dela.`,
    `Fluxo — a sequência completa de ações que acontece do início ao fim quando o botão é clicado.`,
    `Botão de formulário — o objeto clicável que o aluno desenha na planilha e conecta a uma macro.`,
    `Atribuir macro — a ação de ligar o botão à macro principal, para que o clique dispare o código.`,
    `Teste — rodar o fluxo de propósito para descobrir se algo trava ou sai fora de ordem e então corrigir.`,
  ],
  treinamento: `## O que o professor precisa saber

Você não precisa ser especialista em VBA para dar esta aula. O segredo é entender uma ideia: em vez de uma macro gigante, usamos três macros pequenas (sub-rotinas) e uma "macro chefe" que chama as outras em ordem. No VBA, cada macro começa com a palavra Sub e termina com End Sub. Para uma macro chamar a outra, usamos o comando Call seguido do nome dela. O botão na planilha é só um atalho visual: ao clicar, ele roda a macro chefe.

Antes da aula, abra o arquivo "Pedidos.xlsm", confira que a guia Desenvolvedor aparece na faixa de opções e teste o fluxo uma vez para garantir que funciona na sua máquina. Tenha as três sub-rotinas já digitadas em um arquivo de backup, caso algum aluno se perca.

## Passo a passo da aula (ritmo 10/15/25/10)

Aquecimento (10 min): Abra o arquivo no projetor. Pergunte: "Quantos cliques vocês dariam para limpar, copiar e formatar a mão?" Mostre a aba de dados bagunçada. Abra o editor VBA com Alt + F11 e relembre o que é uma Sub, lendo o código da aula passada.

Conteúdo novo guiado (15 min): No editor VBA, mostre as três sub-rotinas separadas. Em seguida, crie acima delas a macro principal e digite, linha a linha, explicando cada parte:

Sub RodarTudo()
    Call LimparDados
    Call CopiarValores
    Call FormatarTudo
End Sub

Explique: Sub RodarTudo() abre a macro chefe; cada linha Call chama uma sub-rotina pelo nome; End Sub fecha a macro. A ordem importa: primeiro limpa, depois copia, por último formata.

Mão na massa (25 min): Cada aluno digita a macro RodarTudo no seu arquivo. Depois, criam o botão: na guia Desenvolvedor, clique em Inserir, escolha o Botão (Controle de Formulário) e desenhe um retângulo na planilha. Na janela que abre, escolha a macro RodarTudo e clique em OK. Renomeie o botão com clique direito, Editar Texto, escrevendo "Atualizar Planilha". Por fim, clique no botão e veja o fluxo rodar. Peça que testem três vezes seguidas.

Desafio e compartilhar (10 min): Desafie a trocar a ordem das chamadas Call e observar o que muda. Cada dupla mostra seu botão funcionando no projetor e conta um erro que apareceu e como resolveu.

## Como explicar de forma clara

Use a comparação da receita de bolo: a macro principal é a lista de passos na ordem (bater, assar, decorar), e cada Sub é uma etapa pronta. Diga que o botão é como o botão de "ligar" do micro-ondas: por dentro acontece muita coisa, mas a pessoa só aperta um. Reforce que dar nomes claros às sub-rotinas é como etiquetar gavetas: facilita achar tudo depois.

## Erros comuns e como ajudar

O erro mais comum é o nome da Sub no Call sair diferente do nome real (CopiarValores escrito como CopiarValor). Mostre que o VBA é exigente com nomes e oriente a copiar exatamente. Outro tropeço é o aluno esquecer o End Sub, e o código fica vermelho ou dá erro de compilação. Se o botão não fizer nada, verifique se a macro RodarTudo foi mesmo selecionada ao criar o botão; se não, clique com o botão direito no botão, escolha Atribuir Macro e selecione de novo. Se aparecer aviso de macros desabilitadas ao abrir o arquivo, clique em Habilitar Conteúdo na barra amarela. Lembre os alunos de salvar sempre como .xlsm, ou as macros somem ao fechar.`,
  exercicios: [
    {
      titulo: `Chamando as sub-rotinas na ordem`,
      tipo: `prática na ferramenta`,
      tempo: `8 minutos`,
      guiaProfessor: `Confira se cada aluno digitou a macro principal com as três linhas Call na sequência correta. Circule pela sala olhando se os nomes batem com as sub-rotinas existentes.`,
      atividade: `Abra o editor VBA com Alt + F11 e crie a macro RodarTudo que chama, nesta ordem, LimparDados, CopiarValores e FormatarTudo usando o comando Call. Rode a macro pelo menu Executar e confira o resultado na planilha.`,
      gabarito: `Sub RodarTudo()
    Call LimparDados
    Call CopiarValores
    Call FormatarTudo
End Sub
A planilha deve limpar a aba de destino, copiar os valores da origem e aplicar a formatação, tudo de uma vez, sem mensagem de erro.`,
    },
    {
      titulo: `Criando e conectando o botão`,
      tipo: `desafio individual`,
      tempo: `10 minutos`,
      guiaProfessor: `Acompanhe o passo de Inserir, Controle de Formulário, Botão. O erro típico é selecionar a macro errada na janela. Verifique se o texto do botão foi renomeado.`,
      atividade: `Na guia Desenvolvedor, insira um Botão (Controle de Formulário), desenhe-o na planilha, atribua a macro RodarTudo e renomeie o botão para "Atualizar Planilha". Clique no botão e veja o fluxo rodar.`,
      gabarito: `O botão aparece na planilha com o texto "Atualizar Planilha". Ao clicar, o fluxo completo executa: limpa, copia e formata. Se nada acontecer, clique com o botão direito, escolha Atribuir Macro e selecione RodarTudo novamente.`,
    },
    {
      titulo: `Caça ao erro em dupla`,
      tipo: `em dupla`,
      tempo: `10 minutos`,
      guiaProfessor: `Prepare um arquivo com um erro proposital: um nome de Call escrito errado (por exemplo, CopiarValor sem o S). As duplas trocam de máquina para achar o problema. Oriente a ler a mensagem de erro do VBA.`,
      atividade: `Em dupla, abra o arquivo "PedidosComBug.xlsm" e rode a macro RodarTudo. Descubra por que o fluxo trava, corrija o nome errado no comando Call e faça o botão funcionar do início ao fim.`,
      gabarito: `O erro está na linha Call CopiarValor, que deveria ser Call CopiarValores (faltava o S). Depois de corrigir o nome para bater com a sub-rotina existente, a macro roda completa sem travar.`,
    },
    {
      titulo: `Por que a ordem importa`,
      tipo: `roda de conversa`,
      tempo: `7 minutos`,
      guiaProfessor: `Conduza a discussão pedindo que imaginem o resultado se formatar viesse antes de copiar. Aceite respostas variadas e mostre na prática trocando a ordem no projetor.`,
      atividade: `Em roda, discuta: o que aconteceria se a macro principal chamasse FormatarTudo antes de CopiarValores? E se LimparDados rodasse por último? Expliquem com suas palavras por que a sequência das chamadas Call faz diferença.`,
      gabarito: `Se formatar viesse antes de copiar, a formatação cairia em células ainda vazias e os dados novos poderiam entrar sem formato. Se limpar rodasse por último, ele apagaria os dados recém-copiados. A ordem certa garante que cada passo prepare o terreno para o próximo: limpar, depois copiar, por fim formatar.`,
    },
    {
      titulo: `Meu botão, meu mini-fluxo`,
      tipo: `projeto curto`,
      tempo: `15 minutos`,
      guiaProfessor: `Deixe o aluno criar uma quarta sub-rotina simples (por exemplo, que escreva a data de hoje numa célula) e adicioná-la ao fluxo. Ajude com o comando Range e com a função Date. Foque em o fluxo não travar.`,
      atividade: `Crie uma nova sub-rotina chamada CarimbarData que escreve a data de hoje em uma célula, e adicione a chamada dela ao final da macro RodarTudo. Conecte tudo ao botão e teste o fluxo completo até rodar sem travar.`,
      gabarito: `Sub CarimbarData()
    Range("E1").Value = Date
End Sub
E na macro principal, a nova linha entra no fim:
Sub RodarTudo()
    Call LimparDados
    Call CopiarValores
    Call FormatarTudo
    Call CarimbarData
End Sub
Ao clicar no botão, o fluxo limpa, copia, formata e escreve a data de hoje na célula E1, tudo sem erro.`,
    },
  ],
};
