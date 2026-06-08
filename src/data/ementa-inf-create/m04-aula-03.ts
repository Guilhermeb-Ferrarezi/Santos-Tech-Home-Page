import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 3,
  titulo: "Digitando dados sem medo",
  semana: "Semana 2",
  duracao: "1 hora",
  objetivo: `Digitar textos, números e datas nas células do Excel, reconhecer a diferença entre eles e aprender a editar, apagar e corrigir dados usando Enter e Tab para andar pela tabela.`,
  descricao: `Nas duas primeiras aulas do mês os alunos exploraram o mapa da planilha e brincaram com linhas, colunas e abas. Eles já sabem onde tudo fica, mas ainda não preencheram a planilha com informações de verdade. É exatamente isso que esta aula entrega: a hora de digitar dados sem medo. O aluno vai escrever palavras, números e datas dentro das células e perceber que o Excel trata cada tipo de informação de um jeito diferente.

O coração da aula é entender que uma célula pode guardar três tipos básicos de conteúdo. O texto (como um nome) gruda na esquerda da célula. O número (como uma idade) gruda na direita, porque o Excel sabe que pode contar com ele depois. A data (como um aniversário) também fica à direita e o programa a reconhece automaticamente quando digitamos no formato certo, por exemplo 15/03/2012. Esse alinhamento automático é uma pista visual poderosa: se o aluno digita uma idade e ela fica à esquerda, algo deu errado na digitação.

Além de digitar, o aluno aprende a se movimentar e a corrigir. Apertar Enter desce uma célula; apertar Tab anda para a direita; clicar duas vezes numa célula (ou usar a tecla F2) entra no modo de edição para corrigir uma letra sem apagar tudo; e a tecla Delete limpa o conteúdo. Essas quatro ações tiram o medo de errar, porque o aluno descobre que nada na planilha é definitivo: tudo pode ser arrumado.

Para tornar o aprendizado concreto, a prática gira em torno de uma lista simples e divertida: os nomes e idades da própria turma. Cada aluno monta uma pequena tabela com colunas de Nome, Idade e Data de Nascimento. Esse exercício prepara o terreno para as próximas aulas, quando a tabela vai ganhar cores, bordas e fórmulas. Importante: aqui ainda não vamos calcular nem formatar com cores (isso é das aulas 4, 5 e 6). O foco é só inserir dados com confiança e corrigir sem trauma.`,
  materiais: [
    `Computadores com Microsoft Excel instalado e abertos numa planilha em branco, um por aluno`,
    `Conta Microsoft da escola já logada em cada computador, ou Excel ativado, antes de a aula começar`,
    `Projetor ou TV conectada ao computador do professor para demonstrar a digitação ao vivo`,
    `Planilha de exemplo pronta pelo professor com colunas Nome, Idade e Data de Nascimento já preenchidas, para mostrar o resultado esperado`,
    `Lista impressa com os nomes dos alunos da turma e um espaço para anotarem idade e data de nascimento antes de digitar`,
    `Cartaz ou slide com as teclas-chave da aula: Enter, Tab, F2, Delete e Esc`,
  ],
  conceitosChave: [
    `Tipo de dado — a categoria do que está dentro da célula: texto, número ou data; o Excel trata cada um de forma diferente.`,
    `Alinhamento automático — pista visual do Excel: texto encosta na esquerda da célula, número e data encostam na direita.`,
    `Data — informação de dia, mês e ano digitada no formato 15/03/2012; o Excel a reconhece e a alinha à direita.`,
    `Modo de edição — estado em que dá para corrigir parte do conteúdo da célula, acionado por duplo clique ou pela tecla F2.`,
    `Enter e Tab — Enter confirma e desce uma célula; Tab confirma e anda uma célula para a direita.`,
    `Delete — tecla que apaga o conteúdo da célula selecionada sem precisar entrar no modo de edição.`,
    `Esc — tecla que cancela a digitação atual e devolve a célula ao conteúdo que tinha antes, desfazendo o erro na hora.`,
  ],
  treinamento: `## O que o professor precisa saber

Tudo o que se digita numa planilha vai parar numa célula, o quadradinho onde uma coluna (letra) cruza com uma linha (número), como A1 ou B3. Quando você clica numa célula, ela ganha uma borda verde grossa: é a célula ativa. O conteúdo digitado também aparece na barra de fórmulas, a faixa branca larga logo acima da letra das colunas. Confirme uma digitação com Enter (desce) ou Tab (vai para a direita); se errar, aperte Esc para cancelar antes de confirmar.

O Excel adivinha o tipo de dado pelo que você digita e mostra isso pelo alinhamento. Texto vai para a esquerda; número e data vão para a direita. Datas precisam de barras: 15/03/2012 vira data, mas 15-03 ou 15.03 podem virar outra coisa. Se um número aparecer à esquerda, provavelmente entrou um espaço ou uma letra junto. Não vamos mexer em formatação de cores nem em fórmulas hoje; isso é assunto das próximas aulas.

## Passo a passo da aula (ritmo 10/15/25/10)

Aquecimento (10 min): peça que todos abram uma planilha em branco. Faça perguntas rápidas da aula anterior: "Como se chama o quadradinho A1?" e "Onde fica a aba?". Projete a sua tela, clique na célula A1 e mostre a borda verde e a barra de fórmulas. Distribua a lista impressa da turma.

Conteúdo novo guiado (15 min): no projetor, digite na A1 a palavra Nome e aperte Enter; mostre que o texto encostou na esquerda. Clique na B1, digite Idade, Tab; na C1 digite Data de Nascimento. Agora na A2 digite um nome e aperte Tab; na B2 digite um número (idade) e mostre que ele foi para a direita; na C2 digite uma data como 15/03/2012 e mostre que também foi para a direita. Em seguida ensine a corrigir: clique duas vezes numa célula (ou aperte F2) para entrar no modo de edição e troque uma letra; selecione outra célula e aperte Delete para apagar tudo; comece a digitar algo e aperte Esc para cancelar.

Mão na massa (25 min): cada aluno cria os cabeçalhos Nome, Idade e Data de Nascimento na linha 1 e preenche pelo menos cinco colegas da turma, usando a lista impressa. Oriente a usar Tab para andar na linha e Enter para pular para a próxima pessoa. Circule conferindo se os números estão à direita. Quem terminar, acrescenta mais colegas.

Desafio e compartilhar (10 min): peça que cada aluno propositalmente erre uma idade e corrija com F2, depois apague uma célula com Delete e digite de novo. Convide dois ou três a mostrar a tabela no projetor e explicar como perceberam, pelo alinhamento, que um dado estava do tipo certo.

## Como explicar de forma clara

Use a imagem do estojo: "Cada célula é um compartimento do estojo, e cada um pode guardar uma coisa só: uma palavra, um número ou uma data." Para o alinhamento, diga: "O Excel é organizado: palavra fica na parede da esquerda, número fica na parede da direita, porque número ele guarda para contar depois." Compare Enter e Tab a andar num tabuleiro: "Enter desce um degrau, Tab dá um passo para o lado." E tranquilize sobre o erro: "Errou? Esc é o botão de voltar atrás, e Delete é a borracha. Aqui ninguém estraga nada de verdade."

## Erros comuns e como ajudar

O erro mais comum é apagar a célula inteira só para trocar uma letra: mostre o duplo clique e o F2 para editar sem recomeçar. Muitos digitam a data com pontos ou traços (15.03 ou 15-03) e ela não vira data; oriente a usar sempre barras. Alguns colocam um espaço antes do número e ele vira texto, encostando na esquerda; ensine-os a olhar o alinhamento como sinal de alerta. Há quem aperte Enter no meio da palavra achando que apaga; explique que Enter só confirma e desce. Por fim, alguns confundem Delete com Backspace; combine que Delete limpa a célula selecionada de uma vez, sem precisar entrar nela.`,
  exercicios: [
    {
      titulo: `Texto, número e data lado a lado`,
      tipo: `prática na ferramenta`,
      tempo: `7 minutos`,
      guiaProfessor: `Aquecimento individual guiado. Projete a sua tela e digite junto com a turma no mesmo ritmo. Pause em cada célula e pergunte para que lado o conteúdo encostou. Confirme que todos perceberam a diferença de alinhamento antes de seguir.`,
      atividade: `Na célula A1 digite o seu nome e aperte Enter. Na A2 digite a sua idade e aperte Enter. Na A3 digite a sua data de nascimento no formato 15/03/2012 e aperte Enter. Observe para que lado da célula cada coisa foi.`,
      gabarito: `O nome (texto) deve ficar encostado na esquerda da célula A1. A idade (número) deve ficar à direita na A2. A data deve ficar à direita na A3, reconhecida como data pelo Excel. O sucesso é o aluno apontar corretamente que texto vai para a esquerda e que número e data vão para a direita.`,
    },
    {
      titulo: `Andando com Enter e Tab`,
      tipo: `desafio`,
      tempo: `9 minutos`,
      guiaProfessor: `Treina a movimentação pela tabela sem usar o mouse. Demonstre uma vez: Tab anda para o lado, Enter desce. Peça que guardem o mouse de lado por um momento para sentirem as teclas. Observe quem ainda clica célula por célula.`,
      atividade: `Crie os cabeçalhos na linha 1: na A1 digite Nome e aperte Tab; na B1 digite Idade e aperte Tab; na C1 digite Data e aperte Enter. Agora preencha a linha 2 com um colega de verdade, usando Tab para andar entre Nome, Idade e Data. Use só o teclado, sem clicar com o mouse.`,
      gabarito: `A linha 1 deve ter Nome em A1, Idade em B1 e Data em C1. A linha 2 deve ter o nome, a idade e a data de um colega preenchidos em A2, B2 e C2. O resultado correto é o aluno ter andado pela tabela usando apenas Tab e Enter, sem o mouse, com os números e a data alinhados à direita.`,
    },
    {
      titulo: `Conserta sem apagar tudo`,
      tipo: `prática na ferramenta`,
      tempo: `10 minutos`,
      guiaProfessor: `Foco em editar e corrigir. Demonstre os três caminhos no projetor: duplo clique, tecla F2 e tecla Delete, além do Esc para cancelar. Reforce a diferença entre editar parte do conteúdo e apagar a célula inteira. Tenha calma com quem tem medo de mexer.`,
      atividade: `Na sua tabela, escolha uma célula com um nome e dê um duplo clique nela (ou aperte F2) para entrar no modo de edição; troque apenas uma letra e aperte Enter. Depois clique numa célula de idade e aperte Delete para apagar tudo; digite a idade de novo. Por fim, comece a digitar algo numa célula vazia e aperte Esc para cancelar.`,
      gabarito: `O aluno deve conseguir: corrigir uma letra de um nome sem ter apagado o restante (usando duplo clique ou F2), apagar e redigitar uma idade com Delete, e cancelar uma digitação com Esc deixando a célula vazia. O sucesso é demonstrar os três comandos e explicar quando usar editar (F2) em vez de apagar tudo (Delete).`,
    },
    {
      titulo: `Caça ao dado errado`,
      tipo: `em dupla`,
      tempo: `12 minutos`,
      guiaProfessor: `Forme duplas. Cada aluno insere de propósito um erro de tipo de dado (uma idade com espaço ou letra, ou uma data com ponto) na própria tabela e o colega precisa achar pelo alinhamento. Reforce que a pista é o lado em que o conteúdo encostou. Circule estimulando a explicação em voz alta.`,
      atividade: `Em dupla, cada um digita na própria tabela um erro de propósito: por exemplo, uma idade com um espaço na frente (que vira texto e vai para a esquerda) ou uma data com ponto, como 15.03.2012, que não vira data. Troquem de computador, encontrem o dado errado olhando o alinhamento e corrijam-no usando F2 ou Delete.`,
      gabarito: `O colega deve identificar o dado errado porque ele está encostado no lado errado da célula: um número ou data que aparece à esquerda está como texto. A correção certa é tirar o espaço ou trocar os pontos por barras, deixando o número e a data alinhados à direita. O resultado válido é a tabela dos dois ficar com todos os tipos de dado corretos e bem alinhados.`,
    },
    {
      titulo: `A lista da nossa turma`,
      tipo: `projeto curto`,
      tempo: `15 minutos`,
      guiaProfessor: `Este é o entregável central da aula e a base da tabela que vai calcular no fim do mês. Use a lista impressa da turma. Circule garantindo cabeçalhos na linha 1, ao menos cinco colegas preenchidos e tipos de dado corretos. Não cobre cores nem fórmulas hoje; isso é das próximas aulas.`,
      atividade: `Monte a lista da nossa turma: na linha 1 crie os cabeçalhos Nome, Idade e Data de Nascimento (use Tab entre eles). Depois preencha pelo menos cinco colegas, um por linha, usando Tab para andar na linha e Enter para pular para a próxima pessoa. Confira ao final se as idades e as datas estão todas alinhadas à direita e corrija com F2 ou Delete o que estiver errado.`,
      gabarito: `O aluno deve apresentar uma tabela com os três cabeçalhos em A1, B1 e C1 e ao menos cinco linhas preenchidas com nome, idade e data de nascimento de colegas. Os nomes devem ficar à esquerda; as idades e as datas, à direita. Considere completo quando todos os dados estiverem digitados, com os tipos corretos e o aluno tiver corrigido eventuais erros de alinhamento. Exemplo válido: linha 1 com Nome, Idade, Data de Nascimento; linha 2 com Ana, 12, 04/07/2013; e mais quatro colegas abaixo, todos bem alinhados.`,
    },
  ],
};
