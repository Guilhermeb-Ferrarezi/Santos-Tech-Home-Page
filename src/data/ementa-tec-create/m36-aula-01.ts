import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 1,
  titulo: "Lendo e Escrevendo Arquivos",
  semana: "Semana 1",
  duracao: "1 hora",
  objetivo: `Aprender a abrir, ler, escrever e salvar arquivos de texto em Python usando open(), read(), write() e o gerenciador de contexto with.`,
  descricao: `Até agora os alunos guardaram informações apenas dentro de variáveis, que existem só enquanto o programa está rodando. Quando o programa termina, tudo desaparece. Nesta aula eles dão um passo enorme: aprendem a salvar dados em arquivos no computador, de forma que a informação continue lá mesmo depois de fechar o Python. É a primeira vez que o código deles deixa uma marca permanente no mundo real.

O coração da aula é a função open(), que abre um arquivo, e os três modos principais de abertura: "r" para ler (read), "w" para escrever do zero (write) e "a" para acrescentar no final (append). Os alunos vão entender que cada modo tem um efeito diferente e que escolher o modo errado pode apagar um arquivo inteiro sem querer. Por isso a aula também trabalha o cuidado e a atenção ao programar.

Em seguida eles conhecem o gerenciador de contexto with open(...) as f:, que é a forma moderna e segura de trabalhar com arquivos. Ele fecha o arquivo automaticamente quando o bloco termina, evitando esquecimentos e erros. Vamos comparar a forma antiga (abrir e fechar na mão) com a forma com with para que o aluno entenda por que fechar arquivos importa.

Ao final, cada aluno terá criado, escrito, lido e modificado seus próprios arquivos .txt. É uma habilidade que será reaproveitada nas próximas aulas, quando trabalharmos com CSV, JSON e com o projeto final em Python. Sair desta aula sabendo ler e escrever arquivos é abrir a porta para programas que lembram das coisas.`,
  materiais: [
    `Computadores com Python 3 instalado (um por aluno)`,
    `Editor de código (VS Code, Thonny ou similar) já configurado`,
    `Projetor para o professor mostrar o código na tela grande`,
    `Pasta de trabalho criada na área de trabalho de cada aluno (ex.: pasta "aula_arquivos")`,
    `Arquivo de exemplo pronto chamado diario.txt com 2 ou 3 linhas de texto`,
    `Quadro branco ou slide com os três modos de abertura: r, w, a`,
  ],
  conceitosChave: [
    `Arquivo de texto — um documento salvo no computador (geralmente .txt) que guarda texto e continua existindo depois que o programa fecha.`,
    `open() — função do Python que abre um arquivo e devolve um objeto para ler ou escrever nele.`,
    `Modo de abertura — a letra que diz o que você vai fazer: "r" ler, "w" escrever do zero (apaga o que tinha), "a" acrescentar no final.`,
    `read() — método que lê e devolve todo o conteúdo do arquivo como um texto único.`,
    `write() — método que escreve um texto dentro do arquivo aberto para escrita.`,
    `with open(...) as f — gerenciador de contexto que abre o arquivo e o fecha sozinho ao terminar o bloco.`,
    `Fechar o arquivo — liberar o arquivo para o sistema; se não fechar, os dados podem não ser salvos de verdade.`,
  ],
  treinamento: `## O que o professor precisa saber

Você não precisa ser especialista em Python. Precisa entender três ideias e saber a ordem dos passos. Primeira ideia: um arquivo é como um caderno guardado na gaveta do computador; o programa pode abrir esse caderno, ler ou escrever, e depois guardar de volta. Segunda ideia: existe um modo de abertura para cada intenção. "r" lê, "w" escreve do zero (e isso apaga o conteúdo anterior, cuidado), "a" acrescenta no final sem apagar. Terceira ideia: a forma recomendada é usar with open(...) as f:, porque o Python fecha o arquivo sozinho ao final do bloco. Teste cada exemplo no seu computador antes da aula. Se aparecer FileNotFoundError, é porque o arquivo não existe na pasta certa ou está sendo lido antes de ser criado.

## Passo a passo da aula (ritmo 10/15/25/10)

Aquecimento (10 min): pergunte à turma onde ficam as fotos e os trabalhos deles depois que desligam o computador. Conduza até a resposta: ficam salvos em arquivos. Explique que hoje o programa deles vai aprender a salvar coisas. Abra a pasta de trabalho no projetor e mostre o arquivo diario.txt.

Conteúdo novo guiado (15 min): mostre, linha a linha, como escrever em um arquivo. Digite no projetor:

with open("notas.txt", "w") as f:
    f.write("Minha primeira linha salva em arquivo!")

Explique: open abre o arquivo notas.txt no modo "w" (escrever); o as f dá o apelido f ao arquivo; f.write escreve o texto; e quando o bloco indentado termina, o arquivo fecha sozinho. Rode e mostre o arquivo aparecendo na pasta. Agora mostre a leitura:

with open("notas.txt", "r") as f:
    conteudo = f.read()
print(conteudo)

Explique que "r" lê, read() devolve todo o texto, e print mostra na tela. Por fim, mostre o modo append:

with open("notas.txt", "a") as f:
    f.write("\\nUma segunda linha acrescentada.")

Destaque que "a" NÃO apaga, só adiciona no final, e que \\n pula uma linha.

Mão na massa (25 min): cada aluno cria um arquivo meu_diario.txt, escreve três frases sobre o dia, depois lê o arquivo e mostra na tela. Em seguida acrescenta mais uma frase usando o modo "a". Circule pela sala. Peça que abram o arquivo .txt na pasta para verem o resultado com os próprios olhos.

Desafio e compartilhar (10 min): proponha um pequeno bloco de notas que pergunta uma frase ao usuário com input() e a salva no arquivo. Quem terminar lê a frase salva em voz alta para a turma.

## Como explicar de forma clara (linguagem para a idade)

Use a imagem do caderno: open é abrir o caderno, write é escrever com a caneta, read é ler o que está escrito, e o with é o amigo organizado que fecha e guarda o caderno por você quando termina. Avise com humor que o modo "w" é o modo apagador: ele limpa a página antes de escrever, então usem com atenção. Já o "a" é o modo continuação, que escreve embaixo do que já existe. Repita que o computador só salva de verdade quando o arquivo é fechado, e que o with garante isso sem a gente precisar lembrar.

## Erros comuns e como ajudar

O erro mais comum é FileNotFoundError ao tentar ler um arquivo que ainda não existe; oriente a criar (modo "w") antes de ler (modo "r"). Outro erro frequente é esquecer os dois pontos no fim da linha do with ou esquecer a indentação das linhas de dentro do bloco; mostre que tudo que pertence ao with fica recuado. Alguns alunos vão usar "w" achando que estão acrescentando e vão apagar o texto anterior; reforce a diferença entre "w" e "a". Por fim, se o texto sair tudo grudado, lembre-os do \\n para pular linha.`,
  exercicios: [
    {
      titulo: `Escrevendo o primeiro arquivo`,
      tipo: `Prática guiada`,
      tempo: `5 min`,
      guiaProfessor: `Faça junto com a turma, no projetor. O objetivo é só ganhar confiança com open e write. Confira se o arquivo aparece na pasta de trabalho de cada um.`,
      atividade: `Crie um arquivo chamado ola.txt e escreva dentro dele a frase: Olá, este é meu primeiro arquivo em Python! Depois abra a pasta e confirme que o arquivo foi criado.`,
      gabarito: `with open("ola.txt", "w") as f:
    f.write("Olá, este é meu primeiro arquivo em Python!")

# Ao rodar, o arquivo ola.txt aparece na pasta com a frase dentro.`,
    },
    {
      titulo: `Lendo e mostrando o conteúdo`,
      tipo: `Prática individual`,
      tempo: `5 min`,
      guiaProfessor: `Cada aluno lê o arquivo criado no exercício anterior. Reforce que o modo é "r" e que read() devolve o texto, que precisa ser guardado numa variável para depois mostrar com print.`,
      atividade: `Abra o arquivo ola.txt no modo de leitura, guarde o conteúdo em uma variável chamada texto e mostre esse texto na tela com print.`,
      gabarito: `with open("ola.txt", "r") as f:
    texto = f.read()
print(texto)

# Saída na tela: Olá, este é meu primeiro arquivo em Python!`,
    },
    {
      titulo: `Acrescentando sem apagar`,
      tipo: `Prática individual`,
      tempo: `6 min`,
      guiaProfessor: `Aqui o aluno percebe a diferença entre "w" e "a". Peça que rodem, depois leiam o arquivo e confirmem que a linha antiga continua lá. Lembre do \\n para pular linha.`,
      atividade: `No arquivo ola.txt, acrescente uma segunda linha com a frase: Estou aprendendo a salvar arquivos. Use o modo correto para NÃO apagar a primeira linha. Depois leia o arquivo e mostre tudo na tela.`,
      gabarito: `with open("ola.txt", "a") as f:
    f.write("\\nEstou aprendendo a salvar arquivos.")

with open("ola.txt", "r") as f:
    print(f.read())

# Mostra as duas linhas, uma embaixo da outra.`,
    },
    {
      titulo: `Diário com várias frases`,
      tipo: `Desafio aplicado`,
      tempo: `8 min`,
      guiaProfessor: `O aluno escreve várias linhas de uma vez. Mostre que dá para chamar write várias vezes dentro do mesmo bloco with. Verifique se cada um usou \\n para separar as frases.`,
      atividade: `Crie um arquivo meu_diario.txt e escreva, em três linhas separadas, três coisas que você fez hoje. Em seguida leia o arquivo e mostre o diário completo na tela.`,
      gabarito: `with open("meu_diario.txt", "w") as f:
    f.write("Hoje eu vim para a aula de Python.\\n")
    f.write("Aprendi a salvar arquivos no computador.\\n")
    f.write("Achei muito legal ver o arquivo aparecer na pasta.\\n")

with open("meu_diario.txt", "r") as f:
    print(f.read())

# Mostra as três linhas do diário na tela.`,
    },
    {
      titulo: `Bloco de notas interativo`,
      tipo: `Desafio final`,
      tempo: `10 min`,
      guiaProfessor: `Junta input com escrita em arquivo no modo append. Os mais rápidos podem rodar o programa duas vezes para ver as anotações se acumulando. Se sobrar tempo, peça para lerem e mostrarem todas as notas salvas.`,
      atividade: `Faça um programa que pergunte ao usuário uma anotação com input() e salve essa anotação no arquivo bloco_notas.txt sem apagar as anteriores. No final, leia o arquivo e mostre todas as anotações na tela.`,
      gabarito: `nota = input("Digite sua anotação: ")

with open("bloco_notas.txt", "a") as f:
    f.write(nota + "\\n")

with open("bloco_notas.txt", "r") as f:
    print("Suas anotações até agora:")
    print(f.read())

# Cada vez que o programa roda, uma nova anotação é acrescentada
# e todas aparecem na tela, uma por linha.`,
    },
  ],
};
