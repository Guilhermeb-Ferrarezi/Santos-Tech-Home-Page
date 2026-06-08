import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 7,
  titulo: "Manutenção do PC: instalar e formatar",
  semana: "Semana 4",
  duracao: "1 hora",
  objetivo: `Compreender o que é formatar e instalar um sistema operacional, fazer backup na nuvem antes e acompanhar com segurança o passo a passo de uma instalação.`,
  descricao: `Manutenção do PC é o conjunto de cuidados que mantêm o computador rápido, seguro e funcionando bem. Nesta aula o aluno descobre o que significa "formatar" (apagar tudo e deixar o disco limpo) e "instalar um sistema operacional" (colocar o Windows de volta no computador). São palavras que assustam quem nunca ouviu, mas a ideia é simples: às vezes o computador fica tão cheio de problemas que vale a pena recomeçar do zero, como arrumar um quarto bagunçado tirando tudo e guardando de novo com calma.

Antes de qualquer coisa, o aluno aprende a regra de ouro: formatar apaga TODOS os arquivos do disco. Por isso o primeiro passo nunca é formatar, e sim fazer o backup. Aqui entra o Google Drive que ele já conhece do mês: fotos, trabalhos e documentos vão para a nuvem e ficam salvos mesmo que o computador seja zerado. Essa conexão entre "nuvem" e "manutenção" mostra por que aprendemos o Drive antes.

Em seguida, a aula apresenta de forma guiada o que é um pen drive de instalação (também chamado de pen drive bootável): um pen drive especial que carrega o instalador do Windows e permite ligar o computador por ele em vez do disco interno. O aluno também entende a diferença entre instalar, atualizar e desinstalar programas no dia a dia, que é a manutenção mais comum e que ele pode fazer sozinho em casa.

Como esta é uma aula introdutória e de segurança, ninguém vai realmente formatar a máquina da escola. O professor demonstra o processo passo a passo (telas reais ou imagens), e os alunos praticam as partes seguras: backup no Drive, instalar e atualizar programas, e montar uma lista de verificação ("checklist") do que conferir antes de formatar. O objetivo é tirar o medo e ensinar responsabilidade.`,
  materiais: [
    `Computadores com Windows, Google Drive (drive.google.com) e Google Chrome instalados e abertos`,
    `Projetor ou TV para o professor demonstrar as telas de instalação do Windows`,
    `Conta Google ativa para cada aluno (a mesma usada nas aulas de Drive)`,
    `Um pen drive de instalação do Windows já pronto, só para mostrar (não usar nas máquinas da escola)`,
    `Imagens ou vídeo curto das telas de instalação do Windows (slides preparados pelo professor)`,
    `Arquivos de exemplo para backup (uma pasta com fotos e documentos fictícios no computador)`,
    `Modelo de "checklist antes de formatar" impresso ou em um Documento Google compartilhado`,
  ],
  conceitosChave: [
    `Formatar — apagar todos os arquivos do disco para deixá-lo limpo, como esvaziar uma gaveta por completo.`,
    `Sistema operacional — o programa principal que faz o computador funcionar (ex.: Windows); sem ele a máquina não liga direito.`,
    `Instalar — colocar um programa ou o sistema no computador para poder usá-lo.`,
    `Atualizar — trocar um programa pela versão mais nova, com correções e melhorias de segurança.`,
    `Backup — uma cópia de segurança dos seus arquivos guardada em outro lugar, como o Google Drive.`,
    `Pen drive de instalação (bootável) — um pen drive especial que liga o computador e instala o sistema operacional.`,
    `Boot — o processo de ligar o computador e escolher de onde ele vai iniciar (disco interno ou pen drive).`,
  ],
  treinamento: `## O que o professor precisa saber

Você não precisa ser técnico para dar esta aula. O objetivo é introdutório: tirar o medo das palavras "formatar" e "instalar" e ensinar a regra mais importante, que é fazer backup antes. Deixe claro, logo no começo, que ninguém vai formatar os computadores da escola hoje. Você vai DEMONSTRAR no projetor (com imagens ou um vídeo curto) e os alunos vão PRATICAR só as partes seguras: backup no Drive, instalar e atualizar programas, e montar um checklist. Antes da aula, tenha um pen drive de instalação pronto só para mostrar, e prepare slides com as telas do Windows (idioma, "Instalar agora", escolha do disco, barra de progresso).

## Passo a passo da aula

10 min — Aquecimento e revisão. Pergunte: "O que vocês fariam se o computador ficasse muito lento e cheio de vírus?". Anote ideias no quadro. Explique a metáfora do quarto bagunçado: às vezes vale tirar tudo e recomeçar. Apresente as três palavras do dia: formatar, instalar, backup. Revise rapidamente o Google Drive das aulas anteriores.

15 min — Conteúdo novo guiado. No projetor, mostre o pen drive de instalação e explique o que é "boot" (ligar o computador escolhendo de onde iniciar). Passe pelas telas do Windows nos slides: escolher idioma, clicar em "Instalar agora", escolher o disco e esperar a barra de progresso. Repita a frase de ouro: "Formatar apaga TUDO, por isso o backup vem primeiro". Mostre também, no Windows real, onde se instala e atualiza um programa: na Microsoft Store, clique em "Biblioteca" e depois em "Obter atualizações"; e como desinstalar em Configurações > Aplicativos > Aplicativos instalados.

25 min — Mão na massa. Cada aluno faz o backup de uma pasta de exemplo no Google Drive: abra drive.google.com, clique em "Novo" > "Upload de pasta", escolha a pasta de exemplo e confirme. Mostre o ícone de check verde que indica upload concluído. Depois, peça que instalem ou atualizem um programa simples pela Microsoft Store (você escolhe um gratuito e seguro). Por fim, em duplas, eles preenchem um "checklist antes de formatar" em um Documento Google.

10 min — Desafio e compartilhar. Lance o desafio: "Em 3 passos, o que você faria ANTES de formatar?". Cada dupla lê seu checklist em voz alta. Reforce que backup é sempre o passo 1.

## Como explicar de forma clara

Use comparações do dia a dia. Formatar é como apagar o quadro inteiro da sala para começar uma aula nova. Backup é tirar foto do quadro antes de apagar, para não perder nada. O sistema operacional é o "chefe" do computador, que manda em todos os programas. Pen drive de instalação é como uma chave que abre o computador por fora. Evite termos difíceis sem explicar; sempre que usar uma palavra nova, dê o exemplo logo em seguida. Repita a regra de ouro várias vezes: "backup primeiro, formatar depois".

## Erros comuns e como ajudar

O erro mais perigoso é querer formatar sem backup; corrija na hora e transforme em lema da turma. Muitos alunos confundem "instalar" com "atualizar": instalar é colocar algo novo, atualizar é melhorar o que já existe. Outro tropeço é confundir "desinstalar" (tirar um programa) com "apagar um arquivo". No upload do Drive, alguns escolhem "Upload de arquivo" em vez de "Upload de pasta" e só mandam um item; mostre a diferença e onde fica o check verde de concluído. Há quem ache que o pen drive de instalação é só um pen drive comum; explique que ele foi preparado de forma especial. Por fim, tranquilize os mais ansiosos: nesta aula ninguém formata de verdade, estamos aprendendo a fazer com segurança.`,
  exercicios: [
    {
      titulo: `Backup na nuvem antes de tudo`,
      tipo: `Prática na ferramenta`,
      tempo: `8 minutos`,
      guiaProfessor: `Garanta que cada aluno está logado no Google Drive e tem a pasta de exemplo no computador. Mostre o caminho no projetor antes de soltar a turma.`,
      atividade: `Abra o Google Drive (drive.google.com), clique em "Novo" e depois em "Upload de pasta". Escolha a pasta de exemplo do seu computador e faça o upload. Espere aparecer o sinal de concluído.`,
      gabarito: `O aluno acessa o Drive, usa "Novo" > "Upload de pasta", seleciona a pasta de exemplo e aguarda o ícone de check verde indicando upload concluído. A pasta aparece dentro do "Meu Drive".`,
    },
    {
      titulo: `Instalar ou atualizar um programa`,
      tipo: `Prática na ferramenta`,
      tempo: `8 minutos`,
      guiaProfessor: `Escolha um aplicativo gratuito e seguro na Microsoft Store. Demonstre primeiro no projetor onde ficam os botões "Obter" e "Atualizar".`,
      atividade: `Abra a Microsoft Store no Windows. Procure o aplicativo indicado pelo professor e clique em "Obter" para instalar. Depois vá em "Biblioteca" e clique em "Obter atualizações" para atualizar os programas.`,
      gabarito: `O aluno abre a Microsoft Store, instala o aplicativo indicado pelo botão "Obter" e, em "Biblioteca", usa "Obter atualizações". Ele explica que instalar é colocar algo novo e atualizar é melhorar o que já existe.`,
    },
    {
      titulo: `Caça aos termos da manutenção`,
      tipo: `Desafio`,
      tempo: `7 minutos`,
      guiaProfessor: `Escreva no quadro situações curtas e peça que a turma diga qual termo combina: formatar, instalar, atualizar, backup ou pen drive de instalação. Confira em voz alta.`,
      atividade: `Para cada situação, escreva o termo certo: 1) o computador está cheio de problemas e quero zerar tudo; 2) quero salvar minhas fotos antes de zerar; 3) quero colocar um jogo novo; 4) o programa pediu uma versão mais nova; 5) preciso ligar o computador para reinstalar o Windows.`,
      gabarito: `1) formatar; 2) backup; 3) instalar; 4) atualizar; 5) pen drive de instalação (boot pelo pen drive).`,
    },
    {
      titulo: `Checklist antes de formatar (em dupla)`,
      tipo: `Em dupla`,
      tempo: `10 minutos`,
      guiaProfessor: `Entregue um Documento Google compartilhado ou o modelo impresso. Circule pelas duplas garantindo que o backup apareça como passo 1. Peça que ordenem as etapas.`,
      atividade: `Em dupla, montem uma lista de verificação com o que fazer ANTES de formatar um computador. Coloquem os passos em ordem e expliquem por que o backup é o primeiro de todos.`,
      gabarito: `Exemplo de ordem correta: 1) fazer backup dos arquivos no Google Drive; 2) anotar os programas que precisarei reinstalar; 3) salvar senhas importantes; 4) garantir o pen drive de instalação pronto; 5) só então formatar. O backup é o passo 1 porque formatar apaga tudo.`,
    },
    {
      titulo: `Plano de manutenção do meu PC`,
      tipo: `Projeto curto + roda de conversa`,
      tempo: `12 minutos`,
      guiaProfessor: `Peça um plano simples em um Documento Google. Depois abra uma roda de conversa: cada aluno compartilha um cuidado que vai adotar em casa. Reforce a regra de ouro do backup.`,
      atividade: `Crie um pequeno plano para cuidar do seu computador em casa: liste 3 cuidados de manutenção (ex.: atualizar programas, fazer backup no Drive, desinstalar o que não uso). Na roda de conversa, conte qual cuidado você acha mais importante e por quê.`,
      gabarito: `O aluno entrega um plano com pelo menos 3 cuidados válidos, como: fazer backup no Google Drive com frequência, manter os programas atualizados pela Microsoft Store, desinstalar aplicativos que não usa e evitar formatar sem backup. Na roda, justifica sua escolha com clareza, citando segurança ou desempenho.`,
    },
  ],
};
