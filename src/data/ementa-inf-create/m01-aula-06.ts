import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 6,
  titulo: "Mover, organizar e renomear",
  semana: "Semana 3",
  duracao: "1 hora",
  objetivo: `Organizar arquivos movendo-os com o mouse, renomeando com nomes claros e usando a Lixeira com segurança, montando uma estrutura de pastas pronta para o entregável do mês.`,
  descricao: `Na aula passada o aluno aprendeu a salvar e copiar arquivos sem perder nada. Agora chega o momento de colocar ordem na casa: pegar os arquivos espalhados pela Área de Trabalho e pela pasta Downloads e guardá-los no lugar certo. Organizar não é só deixar bonito, é economizar tempo. Um computador organizado é como uma mochila arrumada: você encontra o caderno na hora, sem virar tudo de cabeça para baixo.

Nesta aula trabalhamos três habilidades que andam juntas. A primeira é mover arquivos, ou seja, tirar um arquivo de um lugar e colocá-lo em outro usando arrastar e soltar, ou os atalhos Recortar (Ctrl+X) e Colar (Ctrl+V). A diferença entre mover e copiar é importante: ao mover, o arquivo deixa de existir no lugar antigo e passa a existir só no novo; ao copiar, ele fica nos dois lugares. A segunda habilidade é renomear, trocando nomes confusos como "documento (3) cópia final FINAL" por nomes claros como "Trabalho-História-Egito". A terceira é usar a Lixeira com consciência, entendendo que apagar manda para a Lixeira (dá para recuperar), mas esvaziar a Lixeira apaga de verdade.

O grande projeto da aula é cada aluno montar a própria estrutura de pastas por matéria ou por projeto. Em vez de cem arquivos soltos, o aluno cria pastas como "Escola", "Jogos", "Fotos" e subpastas dentro delas, e move cada arquivo para o lugar certo. Ao final, o computador fica preparado para receber o entregável do mês, que é justamente organizar arquivos em pastas com capricho.

O professor deve reforçar a ideia de hábito: organizar uma vez é fácil, manter organizado é o desafio. Por isso a aula termina com uma rotina simples de arrumação que o aluno pode repetir em casa toda semana.`,
  materiais: [
    `Computadores com Windows aberto, um por aluno`,
    `Projetor ou TV para o professor demonstrar os passos na tela grande`,
    `Pasta de exemplo com 12 a 15 arquivos bagunçados (imagens, textos e um PDF) com nomes ruins, copiada para a Área de Trabalho de cada aluno antes da aula`,
    `Atalho da Lixeira visível na Área de Trabalho de cada máquina`,
    `Cartões impressos com nomes de matérias e projetos para o jogo de classificação`,
    `Cronômetro ou timer projetado para marcar as etapas da aula`,
    `Folha de checklist "Minha pasta arrumada" impressa, uma por aluno`,
  ],
  conceitosChave: [
    `Mover — tirar um arquivo de um lugar e colocá-lo em outro; ele some do lugar antigo e aparece só no novo.`,
    `Arrastar e soltar — segurar o arquivo com o botão esquerdo do mouse, levar até a pasta de destino e soltar.`,
    `Recortar — atalho Ctrl+X que prepara o arquivo para ser movido quando você colar com Ctrl+V.`,
    `Renomear — trocar o nome de um arquivo ou pasta por um nome mais claro, usando a tecla F2 ou clique direito.`,
    `Lixeira — pasta especial onde os arquivos apagados ficam guardados e podem ser recuperados antes de sumirem de vez.`,
    `Esvaziar a Lixeira — ação que apaga de verdade tudo que está na Lixeira, sem volta.`,
    `Estrutura de pastas — conjunto de pastas e subpastas organizadas por assunto, como gavetas dentro de armários.`,
  ],
  treinamento: `## O que o professor precisa saber

Mover é diferente de copiar. Ao arrastar com o botão esquerdo dentro do mesmo disco (por exemplo, do Desktop para Documentos), o Windows MOVE o arquivo. Se você arrasta para um pen drive (disco diferente), ele COPIA. Para garantir que vai mover, use Recortar (Ctrl+X) e Colar (Ctrl+V), ou segure Shift enquanto arrasta. Renomear tem um atalho ótimo: a tecla F2 abre o nome para edição. Nomes de arquivo não podem ter os caracteres barra, dois-pontos, asterisco, interrogação, aspas, menor que, maior que e barra vertical; o Windows avisa se o aluno tentar. A Lixeira guarda o que foi apagado do disco do computador, mas itens apagados de pen drive somem direto. Teste tudo na sua máquina antes da aula.

## Passo a passo da aula (ritmo 10/15/25/10)

10 min, aquecimento. Projete a pasta de exemplo bagunçada. Pergunte: "Quem acha esse computador organizado?" Mostre dois arquivos com nomes ruins e peça que a turma adivinhe o que tem dentro. Revise rápido a diferença entre mover e copiar feita na aula passada.

15 min, conteúdo novo guiado. No projetor, demonstre três coisas, devagar, todos parados olhando. Primeiro, criar pastas: clique direito numa área vazia, Novo, Pasta, e digite o nome (por exemplo, Escola). Crie também Jogos e Fotos. Segundo, mover: clique uma vez num arquivo de texto, segure o botão esquerdo, arraste para cima da pasta Escola até ela ficar destacada e solte. Mostre que o arquivo sumiu da Área de Trabalho e apareceu dentro de Escola. Mostre o caminho alternativo: clicar no arquivo, Ctrl+X, abrir a pasta, Ctrl+V. Terceiro, renomear: clique no arquivo, aperte F2, apague o nome velho e digite um claro, como Prova-Matematica, e tecle Enter. Por fim, apague um arquivo de teste com Delete, abra a Lixeira, mostre que ele está lá e use Restaurar para trazê-lo de volta.

25 min, mão na massa. Cada aluno cria sua própria estrutura: pelo menos três pastas principais e uma subpasta dentro de uma delas (por exemplo, Escola tem dentro História e Matematica). Depois move TODOS os arquivos da pasta de exemplo para a pasta certa, arrastando ou usando Ctrl+X e Ctrl+V. Em seguida renomeia pelo menos cinco arquivos com nomes claros, sem espaços problemáticos, usando hífen entre as palavras. Circule pela sala, elogie nomes bons e ajude quem travou. Quem terminar, organiza também a pasta Downloads de verdade.

10 min, desafio e compartilhar. Lance o desafio da Lixeira segura: peça que cada um apague um arquivo, depois recupere usando Restaurar, explicando para o colega ao lado o que aconteceu. Convide dois ou três alunos a projetar sua estrutura final e contar a lógica que usaram. Encerre com a rotina de arrumação semanal.

## Como explicar de forma clara (linguagem para a idade)

Compare pastas a gavetas e armários: a roupa não fica jogada no chão do quarto, cada peça tem seu lugar. Diga que mover é como tirar a meia da cama e guardar na gaveta certa, ela some de um lugar e aparece no outro. Copiar seria tirar uma foto da meia: você fica com a meia e com a foto. Explique a Lixeira como a lixeira de casa: enquanto o caminhão não passou, dá para pegar de volta; depois que esvaziou, foi embora. Sobre nomes, use a regra: "se um colega ler o nome, ele tem que adivinhar o que tem dentro".

## Erros comuns e como ajudar

O erro mais comum é soltar o arquivo no lugar errado, fora da pasta. Ensine a observar se a pasta fica azul (destacada) antes de soltar. Outro erro é dar dois cliques sem querer ao tentar renomear, abrindo o arquivo; mostre que F2 é mais seguro. Muitos esquecem de teclar Enter depois de digitar o nome novo. Alguns usam acentos e espaços demais; oriente nomes curtos com hífen. Há quem entre em pânico achando que apagou para sempre; lembre que está na Lixeira. E avise: nunca arrastem pastas do sistema, só os arquivos pessoais da pasta de exemplo.`,
  exercicios: [
    {
      titulo: `Arrasta e guarda`,
      tipo: `prática na ferramenta`,
      tempo: `8 minutos`,
      guiaProfessor: `Garanta que cada aluno já tenha a pasta de exemplo na Área de Trabalho. Demonstre uma vez no projetor antes de soltar a turma. Observe quem solta fora da pasta.`,
      atividade: `Crie três pastas na sua Área de Trabalho: Escola, Jogos e Fotos. Depois pegue três arquivos da pasta de exemplo e arraste cada um para a pasta certa, conforme o tipo de conteúdo.`,
      gabarito: `Existem três pastas novas (Escola, Jogos, Fotos) e três arquivos foram movidos para dentro delas, sumindo da Área de Trabalho. Espera-se imagens em Fotos, textos da escola em Escola e arquivos de jogo em Jogos. O professor confirma abrindo cada pasta.`,
    },
    {
      titulo: `Nomes que falam`,
      tipo: `prática na ferramenta`,
      tempo: `8 minutos`,
      guiaProfessor: `Reforce o uso da tecla F2. Mostre a regra do hífen entre palavras e lembre que acentos podem ser evitados em nomes de arquivo. Corrija nomes vagos no momento.`,
      atividade: `Escolha cinco arquivos e renomeie cada um com a tecla F2 para um nome claro, usando hífen no lugar de espaços. Exemplo: trocar "documento3" por "Trabalho-Ciencias-Plantas".`,
      gabarito: `Cinco arquivos foram renomeados com nomes descritivos e hífens, por exemplo Trabalho-Ciencias-Plantas, Foto-Aniversario, Prova-Matematica. Nenhum nome contém caracteres proibidos e cada nome indica claramente o conteúdo.`,
    },
    {
      titulo: `Lixeira segura em dupla`,
      tipo: `em dupla`,
      tempo: `10 minutos`,
      guiaProfessor: `Forme duplas. Peça que usem somente um arquivo de teste, nunca arquivos importantes. Acompanhe para ninguém esvaziar a Lixeira por engano. Reforce a opção Restaurar.`,
      atividade: `Em dupla, cada um apaga um arquivo de teste com a tecla Delete. Abram a Lixeira juntos, encontrem o arquivo e usem Restaurar para trazê-lo de volta. Depois expliquem um ao outro a diferença entre apagar e esvaziar a Lixeira.`,
      gabarito: `O arquivo apagado aparece na Lixeira e volta para o lugar de origem após clicar com o botão direito e escolher Restaurar. A dupla explica corretamente que apagar manda para a Lixeira (recuperável) e esvaziar apaga de vez (sem volta).`,
    },
    {
      titulo: `Montando o armário de pastas`,
      tipo: `projeto curto`,
      tempo: `18 minutos`,
      guiaProfessor: `Este é o coração da aula e prepara o entregável do mês. Exija ao menos uma subpasta. Circule validando a lógica de cada estrutura e ajude quem deixou arquivos soltos.`,
      atividade: `Monte sua estrutura completa: pelo menos três pastas principais e uma subpasta dentro de uma delas (por exemplo, Escola com as subpastas História e Matematica). Mova TODOS os arquivos da pasta de exemplo para o lugar certo e renomeie os que tiverem nomes ruins.`,
      gabarito: `O aluno tem três ou mais pastas principais e ao menos uma subpasta correta. A pasta de exemplo fica vazia porque todos os arquivos foram movidos. Os arquivos estão classificados por assunto e os nomes confusos foram corrigidos. Estrutura pronta para o entregável do mês.`,
    },
    {
      titulo: `Apresente sua organização`,
      tipo: `roda de conversa`,
      tempo: `10 minutos`,
      guiaProfessor: `Projete a tela de dois ou três voluntários. Faça perguntas que revelem a lógica usada. Feche apresentando a rotina semanal de arrumação para levar para casa.`,
      atividade: `Apresente para a turma a sua estrutura de pastas no projetor. Explique por que escolheu essas pastas e mostre um arquivo que você renomeou. Em seguida, proponha uma rotina de quando você vai arrumar seus arquivos em casa.`,
      gabarito: `O aluno mostra a estrutura, justifica a divisão por matéria ou projeto e exibe um arquivo renomeado com nome claro. Apresenta uma rotina concreta de arrumação, por exemplo "toda sexta-feira eu guardo os downloads da semana nas pastas certas".`,
    },
  ],
};
