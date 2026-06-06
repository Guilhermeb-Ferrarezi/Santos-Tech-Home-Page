import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 6,
  titulo: "Instalando Bibliotecas Externas",
  semana: "Semana 3",
  duracao: "1 hora",
  objetivo: `Aprender a instalar uma biblioteca externa com o pip e usá-la para criar um pequeno programa funcional, lendo a documentação básica da biblioteca.`,
  descricao: `Até agora os alunos usaram só o que vem dentro do Python: comandos próprios da linguagem e, na aula anterior, as bibliotecas que já vêm instaladas (a "biblioteca padrão", como random, datetime e math). Nesta aula eles descobrem que existe um mundo enorme de código pronto feito por outras pessoas, espalhado pela internet, esperando para ser baixado e usado. Esse código pronto se chama biblioteca externa (ou pacote), e a ferramenta que baixa e instala esses pacotes se chama pip.

A grande ideia é simples e poderosa: você não precisa programar tudo do zero. Quer transformar texto em letras gigantes de ASCII art? Alguém já fez e publicou a biblioteca pyfiglet. Quer pegar informações de um site pela internet? Existe a biblioteca requests. Em vez de reinventar a roda, o programador instala a biblioteca, lê como ela funciona e a encaixa no próprio programa. É exatamente assim que profissionais trabalham todos os dias.

Para instalar, usamos um comando no terminal: pip install seguido do nome da biblioteca. O pip vai até a internet, baixa o pacote de um repositório oficial chamado PyPI e o deixa pronto para ser importado com import, igualzinho às bibliotecas padrão. Depois de instalada, a biblioteca vira mais uma "caixa de ferramentas" disponível no computador.

A outra metade da aula é aprender a ler documentação. Toda biblioteca séria vem com uma página que explica o que ela faz e mostra exemplos de uso. O aluno não precisa entender tudo: precisa achar o exemplo mais simples, copiar, rodar e depois modificar para o seu próprio gosto. Saber "garimpar" um exemplo na documentação é uma habilidade que vale para a vida inteira de quem programa. Ao final, cada aluno terá instalado a sua primeira biblioteca externa e a usado num programa que roda de verdade.`,
  materiais: [
    `Computadores (até 10) com Python instalado e com acesso ao terminal (Prompt de Comando no Windows ou Terminal no Mac)`,
    `Editor de código instalado (VS Code recomendado) com um arquivo de exemplo já criado em cada máquina`,
    `Conexão de internet funcionando em todas as máquinas (o pip baixa os pacotes da internet)`,
    `Projetor ou TV para o professor demonstrar o terminal e a página de documentação`,
    `Navegador aberto na página oficial da biblioteca pyfiglet no site PyPI (pypi.org/project/pyfiglet)`,
    `Arquivo de exemplo pronto: um programa curto em branco chamado banner.py para os alunos preencherem`,
    `Folha impressa de "comandos de emergência" do pip (pip install, pip list) para os alunos consultarem`,
  ],
  conceitosChave: [
    `Biblioteca externa — pacote de código pronto, feito por outras pessoas, que não vem com o Python e precisa ser baixado da internet antes de usar.`,
    `pip — o programa que baixa e instala bibliotecas externas no seu computador; você o usa pelo terminal, não dentro do código.`,
    `Terminal — a janela de texto onde digitamos comandos para o computador, como o pip install; é diferente do editor onde escrevemos o programa.`,
    `PyPI — o grande repositório oficial na internet de onde o pip baixa os pacotes (o nome se lê "pai-pi-ai").`,
    `pip install — o comando que manda o pip baixar e instalar uma biblioteca; escreve-se "pip install" seguido do nome do pacote.`,
    `Documentação — a página que explica o que a biblioteca faz e mostra exemplos de como usá-la; é o "manual de instruções" do código.`,
    `import — a palavra do Python que liga uma biblioteca já instalada ao seu programa, deixando as ferramentas dela prontas para uso.`,
  ],
  treinamento: `## O que o professor precisa saber

Você precisa entender uma separação que confunde muita gente: existe o EDITOR (onde escrevemos o programa, como o VS Code) e existe o TERMINAL (uma janela de texto onde digitamos comandos para o computador). O pip mora no terminal, não no editor. Instalar uma biblioteca é uma coisa que se faz UMA vez no terminal; usar a biblioteca é coisa do código, feita com import.

O comando central da aula é: pip install pyfiglet. Ao rodar, o pip vai à internet, baixa o pacote do site PyPI e instala. Aparecem várias linhas e, no fim, algo como "Successfully installed pyfiglet". Pronto, a biblioteca está disponível. Para conferir o que já está instalado, use pip list, que lista todos os pacotes.

A biblioteca pyfiglet transforma texto comum em letras enormes feitas de símbolos (ASCII art) — é visual, divertido e perfeito para a idade. Antes da aula, abra o terminal e rode você mesmo: pip install pyfiglet. Depois teste o programa de exemplo abaixo para garantir que tudo funciona na sua máquina. Se o comando "pip" não for reconhecido, tente "python -m pip install pyfiglet" no Windows; guarde esse truque, porque vai precisar dele.

## Passo a passo da aula (ritmo 10/15/25/10, com o código exato)

1. Aquecimento e revisão (10 min): Relembre a aula passada: "vocês usaram bibliotecas que JÁ vinham com o Python, como random e math. Mas e se a ferramenta que eu quero não vier junto?". Mostre no projetor o site PyPI e diga: "este é um armário gigante de código pronto, feito por gente do mundo todo, de graça".

2. Conteúdo novo guiado (15 min): No projetor, abra o terminal e digite, explicando cada palavra: pip install pyfiglet. Diga: "pip é o entregador, install é o pedido, pyfiglet é o nome do pacote". Espere o "Successfully installed". Depois abra o editor no arquivo banner.py e escreva, linha a linha, este programa exato:

import pyfiglet
texto = pyfiglet.figlet_format("Oi")
print(texto)

Explique: a linha 1 traz a biblioteca para dentro do programa; a linha 2 chama a função figlet_format, que recebe um texto entre aspas e devolve a versão gigante; a linha 3 mostra na tela. Rode e mostre as letras gigantes aparecendo.

3. Mão na massa (25 min): Cada aluno abre o terminal, roda pip install pyfiglet e digita o mesmo programa no banner.py, trocando "OI" pelo próprio nome. Depois, mande abrir a documentação no PyPI e achar como mudar a fonte (existe um parâmetro font). O código com fonte fica assim:

import pyfiglet
texto = pyfiglet.figlet_format("Ana", font="slant")
print(texto)

Circule garantindo que todos viram a instalação dar certo e o programa rodar.

4. Desafio e compartilhar (10 min): Desafie cada aluno a fazer um "banner de boas-vindas" com o próprio nome e uma fonte diferente, escolhida na documentação. Cada um mostra a tela à turma. Pergunte: "qual fonte ficou mais legal?".

## Como explicar de forma clara (linguagem para a idade)

Use a imagem da loja de aplicativos: "instalar uma biblioteca é como baixar um app no celular. O pip é a lojinha; você pede o app pelo nome e ele baixa". Reforce a separação terminal x editor com uma analogia: "o terminal é onde você dá ordens diretas ao computador, tipo um controle remoto; o editor é o caderno onde você escreve o programa". Sobre a documentação, diga: "é o manual do brinquedo. Ninguém lê o manual inteiro; a gente vai direto na parte que ensina a montar". Mostre que copiar um exemplo da documentação e mudar para o seu gosto NÃO é trapaça, é exatamente o que programadores fazem.

## Erros comuns e como ajudar

O erro mais comum é tentar rodar pip install DENTRO do editor ou dentro do código Python: lembre que pip é comando de terminal. Outro clássico é "pip não é reconhecido" no Windows; ensine a alternativa python -m pip install pyfiglet. Há quem instale a biblioteca mas esqueça o import pyfiglet no topo do arquivo, e dá erro de "não definido"; mostre que instalar e importar são dois passos. Erros de digitação no nome (pyfiglett, pifiglet) fazem o pip reclamar que não achou o pacote; confira a grafia na página do PyPI. Por fim, alguns esquecem as aspas no texto dentro de figlet_format: lembre que todo texto em Python vai entre aspas.`,
  exercicios: [
    {
      titulo: `Meu Primeiro pip install`,
      tipo: `Prática na ferramenta`,
      tempo: `8 min`,
      guiaProfessor: `Garanta que cada aluno abra o TERMINAL (não o editor). Acompanhe a digitação do comando e espere todos verem a mensagem de sucesso. Se em alguma máquina o "pip" não funcionar, mostre a alternativa com python -m pip. O objetivo é todos terem a biblioteca instalada de fato.`,
      atividade: `Abra o terminal e digite o comando para instalar a biblioteca pyfiglet. Espere aparecer a mensagem de sucesso. Depois digite pip list e procure o nome pyfiglet na lista que aparecer.`,
      gabarito: `O comando correto é: pip install pyfiglet (ou, no Windows, python -m pip install pyfiglet). Acertou quem viu a mensagem "Successfully installed pyfiglet" e encontrou o nome pyfiglet ao rodar pip list.`,
    },
    {
      titulo: `Letras Gigantes do Meu Nome`,
      tipo: `Prática na ferramenta`,
      tempo: `10 min`,
      guiaProfessor: `Com a biblioteca já instalada, ajude cada aluno a escrever o programa no editor. Reforce os três passos: importar, criar o texto gigante e imprimir. O ponto de atenção é o import no topo e as aspas no nome. Mande rodar e ver as letras gigantes aparecerem no terminal.`,
      atividade: `No arquivo banner.py, escreva um programa que transforme o seu nome em letras gigantes usando o pyfiglet e mostre o resultado na tela. Rode o programa e veja o seu nome gigante.`,
      gabarito: `Solução (trocando o nome): import pyfiglet / texto = pyfiglet.figlet_format("Ana") / print(texto). Acertou quem importou a biblioteca, usou figlet_format com o próprio nome entre aspas e viu o nome impresso em letras grandes ao rodar.`,
    },
    {
      titulo: `Garimpando na Documentação`,
      tipo: `Pesquisa guiada`,
      tempo: `10 min`,
      guiaProfessor: `Abra com a turma a página do pyfiglet no PyPI. Mostre como achar o trecho que fala em "font". O desafio é eles localizarem na documentação como mudar a fonte e aplicarem no próprio programa. Não dê a resposta de cara: deixe procurarem e ajude apenas quem travar.`,
      atividade: `Abra a página da biblioteca pyfiglet no site PyPI e procure como trocar a fonte das letras. Depois mude o seu programa para usar uma fonte diferente, por exemplo a fonte chamada slant. Rode e veja a diferença.`,
      gabarito: `Solução: import pyfiglet / texto = pyfiglet.figlet_format("Ana", font="slant") / print(texto). Acertou quem encontrou na documentação o parâmetro font, o usou dentro de figlet_format e viu a fonte mudar na tela.`,
    },
    {
      titulo: `O Erro Caçado`,
      tipo: `Depuração`,
      tempo: `10 min`,
      guiaProfessor: `Mostre no projetor um programa COM erro de propósito: falta o import. Peça que os alunos descubram por que dá erro e como consertar. Isso fixa a ideia de que instalar (pip) e importar (import) são dois passos diferentes. Conduza a turma a ler a mensagem de erro do Python, não a adivinhar.`,
      atividade: `Olhe este programa que está dando erro e descubra o que falta para ele funcionar: a primeira linha é texto = pyfiglet.figlet_format("Oi") e a segunda é print(texto). Conserte e rode.`,
      gabarito: `Faltava a linha de importação no topo. Solução corrigida: import pyfiglet / texto = pyfiglet.figlet_format("Oi") / print(texto). Acertou quem percebeu que o programa usava pyfiglet sem antes ter feito import pyfiglet e adicionou essa linha no começo.`,
    },
    {
      titulo: `Banner de Boas-Vindas`,
      tipo: `Projeto curto`,
      tempo: `12 min`,
      guiaProfessor: `Peça um programa que junte tudo: instalar (já feito), importar, perguntar algo ao usuário e gerar o banner gigante. Use input para deixar interativo. Cada aluno escolhe uma fonte na documentação. Ao final, cada um mostra o banner rodando para a turma e diz qual fonte usou.`,
      atividade: `Crie um programa que pergunte o nome da pessoa, transforme esse nome em letras gigantes com uma fonte da sua escolha e mostre o banner de boas-vindas na tela. Apresente o resultado para a turma.`,
      gabarito: `Solução: import pyfiglet / nome = input("Qual e o seu nome? ") / banner = pyfiglet.figlet_format(nome, font="big") / print(banner). Acertou quem importou a biblioteca, leu o nome com input, gerou o banner com figlet_format usando uma fonte escolhida e o exibiu com print. A fonte pode variar conforme a escolha do aluno.`,
    },
  ],
};
