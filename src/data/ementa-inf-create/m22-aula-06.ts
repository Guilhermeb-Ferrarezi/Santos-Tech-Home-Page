import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 6,
  titulo: "Blindando o Sistema",
  semana: "Semana 3",
  duracao: "1 hora",
  objetivo: `Proteger o mini-sistema do Excel contra erros, validando campos obrigatórios antes de salvar e mostrando avisos amigáveis ao usuário.`,
  descricao: `Nas aulas anteriores o aluno conectou as macros, criou um botão que dispara o cadastro e construiu o código VBA que grava os dados na planilha. Agora chegou a hora de blindar esse sistema. Blindar significa deixar o sistema forte o suficiente para que ele não quebre quando alguém digita algo errado, esquece de preencher um campo ou aperta o botão sem querer. Todo programa de verdade precisa disso: ele tem que prever o erro humano antes que o erro aconteça.

Nesta aula o aluno aprende a validar os campos obrigatórios. Validar é conferir, antes de salvar, se tudo que precisa estar preenchido realmente está. Se o nome estiver vazio ou a idade não for um número, o código não grava nada e mostra um aviso amigável explicando o que faltou. Isso muda completamente a sensação de usar o sistema: em vez de uma tela de erro assustadora, o usuário recebe uma mensagem gentil que ajuda a corrigir.

A grande virada pedagógica é a postura do aluno: ele vai testar de propósito. Em vez de só preencher tudo certinho, ele vai deixar campos em branco, digitar letras onde deveria ter número e apertar o botão repetidas vezes para descobrir onde o sistema quebra. Cada falha encontrada é uma vitória, porque vira uma oportunidade de ajustar o código. Essa mentalidade de procurar o erro de propósito é exatamente o que profissionais chamam de testar o software.

Ao final, o aluno terá um cadastro que recusa entradas erradas com elegância e só salva quando os dados estão completos e corretos. É um passo enorme: o sistema deixa de ser um experimento frágil e passa a ser uma ferramenta confiável, pronta para receber os retoques finais nas próximas aulas.`,
  materiais: [
    `Computadores com Microsoft Excel instalado e o Editor do VBA disponível (atalho Alt + F11)`,
    `Aba Desenvolvedor habilitada no Excel de cada máquina (Arquivo, Opções, Personalizar Faixa de Opções)`,
    `Arquivo de exemplo da Aula 4 e 5: a planilha "MiniSistema.xlsm" com o cadastro funcionando e o botão de salvar`,
    `Projetor ou TV para o professor mostrar o Editor do VBA e a planilha em tempo real`,
    `Folha impressa com a lista de testes do tipo "deixe o nome vazio", "digite letra na idade", "aperte sem preencher"`,
    `Bloco de notas ou caderno para o aluno anotar cada erro que encontrar e como resolveu`,
  ],
  conceitosChave: [
    `Validação — conferir se os dados estão corretos e completos antes de salvar; é o porteiro que decide quem entra na planilha.`,
    `Campo obrigatório — informação que o usuário é obrigado a preencher; sem ela, o sistema não deixa salvar.`,
    `MsgBox — comando do VBA que abre uma janelinha de aviso na tela para conversar com o usuário.`,
    `Condição (If) — instrução que faz o código decidir entre dois caminhos; "se o nome estiver vazio, então avise".`,
    `Exit Sub — comando que faz a macro parar na hora, impedindo que o código continue e salve dados errados.`,
    `IsNumeric — função do VBA que responde verdadeiro ou falso para a pergunta "isto é um número?".`,
    `Teste — usar o sistema de propósito com dados errados para descobrir onde ele quebra antes do usuário descobrir.`,
  ],
  treinamento: `## O que o professor precisa saber

Você não precisa dominar VBA para dar esta aula. Precisa entender apenas três ideias. A primeira é o If: ele faz o código pensar "SE acontecer isso, ENTÃO faça aquilo". A segunda é o MsgBox: um comando que abre uma janelinha de aviso, igual àquelas mensagens que aparecem nos programas. A terceira é o Exit Sub: um comando que manda a macro parar imediatamente, antes de salvar qualquer coisa errada. Combinando os três, o sistema vira um porteiro: confere os dados, avisa se algo está errado e só deixa salvar quando está tudo certo. Abra a planilha da Aula 5 e teste o código antes da aula, para chegar confiante.

## Passo a passo da aula

Aquecimento (10 min): abra o "MiniSistema.xlsm" no projetor. Convide um aluno a salvar um cadastro deixando o nome em branco de propósito. O sistema vai salvar uma linha vazia ou dar erro. Pergunte: "Isso é problema?". Conduza a turma a perceber que um sistema de verdade não pode deixar isso acontecer. Anuncie: hoje vamos blindar.

Conteúdo novo guiado (15 min): abra o Editor do VBA com Alt + F11. Localize a macro do botão salvar (dê dois cliques no Módulo na lista à esquerda). Mostre, linha a linha, a primeira validação. Logo no começo da macro, antes do código que grava os dados, digite junto com a turma:

If Range("B2").Value = "" Then
    MsgBox "Por favor, preencha o nome antes de salvar.", vbExclamation, "Campo obrigatório"
    Range("B2").Select
    Exit Sub
End If

Explique cada parte: o If pergunta se a célula do nome está vazia; o MsgBox mostra o aviso amigável; o Range Select leva o cursor de volta ao campo que faltou; o Exit Sub para tudo. Volte ao Excel (Alt + F11) e teste salvando sem nome: a janelinha aparece. Comemore.

Mão na massa (25 min): os alunos repetem essa validação para o campo nome em suas próprias planilhas e criam uma segunda para a idade. Para a idade, ensine a função IsNumeric:

If Not IsNumeric(Range("B3").Value) Then
    MsgBox "A idade deve ser um número.", vbExclamation, "Dado inválido"
    Range("B3").Select
    Exit Sub
End If

Circule pela sala. Cada aluno deve testar de propósito: nome vazio, idade com letras, tudo vazio. A meta é o sistema nunca mais quebrar, só mostrar avisos.

Desafio e compartilhar (10 min): proponha um terceiro campo obrigatório à escolha do aluno e peça que cada um demonstre uma entrada errada sendo barrada. Comemore os avisos amigáveis.

## Como explicar de forma clara

Use a imagem do porteiro de festa: ele confere a lista na porta e só deixa entrar quem está nela. O If é o porteiro olhando a lista; o MsgBox é ele dizendo educadamente "desculpe, faltou seu nome"; o Exit Sub é ele fechando a porta com gentileza. Reforce que um bom aviso não grita com o usuário, ele ajuda. Compare uma mensagem rude ("ERRO 404") com uma amigável ("Faltou preencher o nome") e pergunte qual deixa a pessoa mais tranquila.

## Erros comuns e como ajudar

O aluno esquece o End If e o código acusa erro: mostre que todo If que quebra linha precisa terminar com End If. Outro erro frequente é colocar a validação depois do código que salva, então o sistema valida tarde demais; explique que o porteiro fica na porta, no começo da macro. Aspas trocadas por aspas curvas (do Word) também quebram tudo: digitem direto no VBA, nunca copiem de outro lugar. Por fim, se o aluno comparar a célula errada (B2 em vez de B3), o aviso aparece na hora errada; peça que confiram qual célula guarda cada campo antes de validar.`,
  exercicios: [
    {
      titulo: `Barrando o nome vazio`,
      tipo: `prática na ferramenta`,
      tempo: `10 minutos`,
      guiaProfessor: `Garanta que cada aluno tenha a macro do botão salvar aberta no Editor do VBA (Alt + F11). Acompanhe a digitação da validação linha a linha e confira se o bloco termina com End If. Lembre que a validação vai logo no início da macro, antes do código que grava os dados.`,
      atividade: `Na sua planilha, adicione no começo da macro de salvar uma validação que impeça o salvamento quando o campo do nome (célula B2) estiver vazio. Mostre uma mensagem amigável e teste apertando o botão sem digitar o nome.`,
      gabarito: `If Range("B2").Value = "" Then
    MsgBox "Por favor, preencha o nome antes de salvar.", vbExclamation, "Campo obrigatório"
    Range("B2").Select
    Exit Sub
End If
Ao salvar sem nome, a janelinha aparece, o cursor volta para B2 e nada é gravado. Com o nome preenchido, o cadastro salva normalmente.`,
    },
    {
      titulo: `A idade só aceita número`,
      tipo: `prática na ferramenta`,
      tempo: `10 minutos`,
      guiaProfessor: `Apresente a função IsNumeric como uma pergunta de sim ou não: "isto é um número?". Explique que o Not inverte a resposta, então o aviso aparece quando NÃO é número. Verifique se o aluno está validando a célula certa da idade (B3) e não a do nome.`,
      atividade: `Crie uma segunda validação que impeça o salvamento quando a idade (célula B3) não for um número. Teste digitando letras no campo idade e veja o aviso aparecer.`,
      gabarito: `If Not IsNumeric(Range("B3").Value) Then
    MsgBox "A idade deve ser um número.", vbExclamation, "Dado inválido"
    Range("B3").Select
    Exit Sub
End If
Digitando "abc" na idade, o aviso surge e nada é salvo. Digitando 12, o sistema aceita e grava normalmente.`,
    },
    {
      titulo: `Caçadores de bugs em dupla`,
      tipo: `em dupla`,
      tempo: `12 minutos`,
      guiaProfessor: `Forme duplas e entregue a folha com a lista de testes. Um aluno tenta quebrar o sistema do colega digitando entradas erradas; o outro anota o que aconteceu e corrige se algum erro passar. Reforce que encontrar uma falha é motivo de comemoração, não de vergonha.`,
      atividade: `Em dupla, troquem de computador. Tente quebrar o sistema do colega: deixe o nome vazio, ponha letras na idade, aperte o botão com tudo em branco, digite só espaços. Anotem cada teste e marquem se o sistema barrou ou deixou passar. Corrijam juntos qualquer falha encontrada.`,
      gabarito: `Tabela de testes preenchida, por exemplo: nome vazio = barrado (correto); idade com letra = barrado (correto); tudo em branco = barrado pela primeira validação (correto); só espaços no nome = pode passar se a validação só checar vazio. A dupla identifica essa brecha dos espaços e ajusta usando If Trim(Range("B2").Value) = "" Then para remover espaços antes de comparar.`,
    },
    {
      titulo: `Mensagens que ajudam de verdade`,
      tipo: `roda de conversa`,
      tempo: `10 minutos`,
      guiaProfessor: `Conduza a turma a comparar mensagens rudes e amigáveis. Escreva no quadro dois exemplos e pergunte qual ajuda mais o usuário. O objetivo é o aluno perceber que o tom e a clareza do aviso fazem parte da qualidade do sistema, não são detalhe.`,
      atividade: `Em roda, discutam: o que faz uma mensagem de aviso ser boa? Comparem "ERRO!" com "Faltou preencher o nome, tente de novo". Cada aluno propõe em voz alta uma melhoria para uma das mensagens do próprio sistema e explica por que ficou melhor.`,
      gabarito: `A turma conclui que uma boa mensagem é clara (diz o que faltou), gentil (não grita nem culpa) e útil (diz como resolver). Exemplo de melhoria aceitável: trocar "Dado inválido" por "A idade deve ser um número, como 12. Tente novamente.". Não há resposta única; vale qualquer melhoria que torne o aviso mais claro e amigável.`,
    },
    {
      titulo: `Sistema à prova de tudo`,
      tipo: `projeto curto`,
      tempo: `15 minutos`,
      guiaProfessor: `Este é o exercício mais difícil e fecha a aula. O aluno escolhe um terceiro campo obrigatório e cria a validação sozinho, juntando tudo que aprendeu. Apoie quem travar lembrando da estrutura If, MsgBox, Select, Exit Sub, End If. Peça uma demonstração final de cada aluno barrando uma entrada errada.`,
      atividade: `Escolha um terceiro campo do seu cadastro (por exemplo a turma na célula B4) e crie a validação dele sozinho. Garanta que o sistema barre nome vazio, idade não numérica e o seu novo campo vazio. Faça uma demonstração mostrando o sistema recusando uma entrada errada para cada validação.`,
      gabarito: `If Range("B4").Value = "" Then
    MsgBox "Por favor, preencha a turma antes de salvar.", vbExclamation, "Campo obrigatório"
    Range("B4").Select
    Exit Sub
End If
O sistema agora barra os três campos: nome vazio, idade com letras e turma vazia, sempre com aviso amigável e sem gravar dados errados. Só salva quando os três estão preenchidos corretamente. A demonstração mostra cada validação funcionando.`,
    },
  ],
};
