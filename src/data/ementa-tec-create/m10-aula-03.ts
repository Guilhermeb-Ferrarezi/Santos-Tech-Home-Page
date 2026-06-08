import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 3,
  titulo: "Contando pontos: o sistema de score",
  semana: "Semana 2",
  duracao: "1 hora",
  objetivo: `Criar uma variável global de pontuação no Construct 3, somar pontos ao coletar itens ou derrotar obstáculos e exibir o score na tela com um objeto de texto que se atualiza em tempo real.`,
  descricao: `Nesta aula o aluno dá ao jogo a capacidade de "lembrar" de alguma coisa: quantos pontos o jogador já fez. Até agora o personagem se mexia e tinha animações, mas o jogo não guardava nenhum número. A partir de hoje, cada moeda coletada ou inimigo derrotado vai aumentar um placar que aparece bem na tela. Esse é o primeiro contato sério do aluno com a ideia de variável, o conceito mais importante de toda a programação.

Uma variável é como uma caixinha com um nome onde guardamos um valor que pode mudar durante o jogo. No Construct 3 existem variáveis de instância (presas a um objeto) e variáveis globais, que valem para o jogo inteiro e continuam existindo mesmo quando o personagem morre ou troca de fase. Para o placar, usamos uma variável global chamada "Pontos", que começa em zero e só cresce. O aluno aprende a criar essa variável no Event Sheet (a folha de eventos), o lugar onde toda a lógica do Construct 3 acontece.

Para o jogador enxergar a pontuação, não basta guardar o número: é preciso mostrá-lo. Para isso usamos o objeto Text, um texto que fica fixo na tela e pode ser atualizado a qualquer momento. A grande sacada é ligar o texto à variável: sempre que "Pontos" muda, o texto também muda. Fazemos isso com a ação "Set text" combinada com a expressão que junta a palavra "Score: " com o valor da variável. Como o jogo roda muitos quadros por segundo, atualizar o texto em todo frame faz o placar reagir na hora, sem atraso.

Ao final da aula, cada aluno terá um placar funcionando: ao encostar numa moeda (ou derrotar um obstáculo), o número sobe e aparece atualizado no canto da tela. Esse sistema será reaproveitado nas próximas aulas, quando entrarem as vidas, o game over e os inimigos. Contar pontos é a base de quase todo jogo, e dominar variáveis agora deixa o resto do mês muito mais fácil.`,
  materiais: [
    `Computadores com o Construct 3 aberto no navegador, um por aluno, com o projeto do jogo da aula anterior carregado`,
    `Projetor ou TV para o professor demonstrar a tela do Construct 3 (Layout e Event Sheet)`,
    `Arquivo de exemplo: projeto .c3p com personagem que anda e algumas moedas (sprites de item) já posicionadas`,
    `Arquivo de exemplo já pronto com o placar funcionando, para mostrar o resultado esperado`,
    `Sprite simples de moeda ou estrela (32x32 px) para quem ainda não tiver itens no cenário`,
    `Quadro branco ou flip chart para desenhar a ideia de "caixinha com nome" (variável)`,
  ],
  conceitosChave: [
    `Variável — uma caixinha com nome que guarda um valor que pode mudar durante o jogo (por exemplo, o número de pontos).`,
    `Variável global — variável que vale para o jogo inteiro e continua existindo mesmo quando objetos são destruídos ou a fase muda.`,
    `Event Sheet (folha de eventos) — a tela do Construct 3 onde montamos a lógica em blocos de condição e ação.`,
    `Objeto Text — um texto que aparece na tela do jogo e pode ser atualizado a qualquer momento durante a partida.`,
    `Set text (definir texto) — ação que troca o conteúdo do objeto Text por um valor novo, como o placar atualizado.`,
    `Expressão — a "conta" que escrevemos para juntar pedaços de informação, por exemplo unir a palavra Score com o número de pontos.`,
    `Colisão (On collision) — condição que dispara uma ação quando dois objetos se encostam, como o personagem tocando uma moeda.`,
  ],
  treinamento: `## O que o professor precisa saber

Toda a lógica do Construct 3 vive no Event Sheet (folha de eventos), uma aba ao lado do Layout (o cenário). Cada evento tem uma condição ("quando isso acontecer") e uma ação ("faça isso"). Variável é apenas uma caixinha com nome que guarda um número. A global "Pontos" vale para o jogo todo. Antes da aula, abra o projeto de exemplo e confirme três coisas: existe um personagem, existem moedas (ou um obstáculo) e há o objeto Text na tela. Saiba onde fica o botão verde "Add event" e onde se clica para criar uma variável global. Você não precisa ser programador; precisa mostrar onde clicar.

## Passo a passo da aula

Aquecimento (10 min): mostre o exemplo pronto rodando (botão Play, ícone de seta no canto superior direito). Colete moedas na frente da turma e mostre o número subindo. Pergunte: "como o jogo sabe quantas moedas eu peguei?". No quadro branco, desenhe uma caixinha escrita "Pontos = 0" e explique que vamos criar essa caixinha.

Conteúdo novo guiado (15 min): abra o Event Sheet. Para criar a variável, clique com o botão direito numa área vazia da folha e escolha "Add global variable" (ou use o menu Add). No campo Name escreva Pontos, deixe Type como Number e Initial value como 0; clique OK. Agora ensine a somar: clique em "Add event", escolha o objeto do personagem, condição "On collision with another object" e selecione a moeda. Na mesma linha, clique em "Add action", escolha System, ação "Add to variable", selecione Pontos e digite 1. Ainda na ação, adicione "Destroy" na moeda para ela sumir. Por fim, ligue o texto: clique em "Add action", escolha o objeto Text, ação "Set text", e na caixa de expressão escreva "Score: " & Pontos (com as aspas e o & ). Para o placar reagir na hora, crie um evento "Every tick" do System com a mesma ação Set text. Aperte Play e mostre o número subindo.

Mão na massa (25 min): cada aluno cria a global Pontos, faz a colisão somar 1, destrói a moeda e atualiza o Text. Circule pela sala. Confira que escreveram & e as aspas certinho na expressão. Quem terminar pode dar valores diferentes (moeda vale 1, estrela vale 5) usando "Add to variable" com números diferentes. Lembre de salvar (menu Menu > Save, ou Ctrl+S).

Desafio e compartilhar (10 min): proponha um item que vale 10 pontos e mude a cor do Text quando passar de 50 (ação Set color). Cada aluno mostra o placar subindo no projetor em 20 segundos.

## Como explicar de forma clara

Use a ideia da caixinha: "imagina uma caixa com a etiqueta Pontos; toda vez que você pega uma moeda, joga mais 1 dentro dela". O Text é o vidro da caixa que deixa a gente ver o número de fora. O & é a "cola" que junta a palavra Score com o número. Global quer dizer "vale para o jogo inteiro", diferente de coisas que pertencem só a um objeto. Reforce que "Add to variable" soma (não substitui): se já tem 3 e adiciona 1, fica 4. "Every tick" significa "em todo quadro do jogo", muitas vezes por segundo, por isso o placar parece atualizar instantaneamente.

## Erros comuns e como ajudar

Erro 1: o aluno cria a variável presa ao objeto em vez de global; lembre de usar "Add global variable" na área da folha. Erro 2: usa "Set value" em vez de "Add to variable" e o placar fica sempre 1; mostre a diferença entre somar e definir. Erro 3: esquece as aspas ou o & na expressão Set text e dá erro; escreva no quadro o modelo "Score: " & Pontos. Erro 4: a moeda não some porque esqueceu o Destroy, e o ponto sobe sem parar; confirme a ação na colisão. Erro 5: o texto não muda porque não há evento atualizando; garanta o Set text no Every tick ou logo após a colisão. Erro 6: o personagem não colide porque os objetos não têm o comportamento ou estão em camadas erradas; confirme que ambos existem no Layout e se encostam de verdade.`,
  exercicios: [
    {
      titulo: `Criando a caixinha de pontos`,
      tipo: `prática na ferramenta`,
      tempo: `8 min`,
      guiaProfessor: `Garanta que cada aluno abra o Event Sheet e crie a variável global antes de seguir. Confira o nome, o tipo Number e o valor inicial 0.`,
      atividade: `No Event Sheet, clique com o botão direito numa área vazia e escolha "Add global variable". Dê o nome Pontos, mantenha o tipo Number e o valor inicial 0. Clique em OK.`,
      gabarito: `No topo da folha de eventos aparece a linha "Pontos = 0" como variável global. O tipo é Number e o valor inicial é 0. Se a variável aparecer dentro de um objeto, o aluno criou uma variável de instância por engano e deve refazer como global.`,
    },
    {
      titulo: `Somando ponto ao coletar`,
      tipo: `prática na ferramenta`,
      tempo: `8 min`,
      guiaProfessor: `Acompanhe a criação do evento de colisão. Confira que usaram "Add to variable" (somar) e não "Set value", e que a moeda é destruída.`,
      atividade: `Crie um evento: clique em "Add event", escolha o personagem e a condição "On collision with another object" apontando para a moeda. Adicione a ação System "Add to variable" Pontos somando 1 e, na sequência, a ação "Destroy" na moeda.`,
      gabarito: `Ao encostar na moeda, a variável Pontos aumenta 1 e a moeda desaparece. Se o número não muda, falta a ação "Add to variable". Se a moeda não some, falta o "Destroy". Cada moeda coletada deve aumentar o placar em exatamente 1.`,
    },
    {
      titulo: `Mostrando o placar na tela`,
      tipo: `desafio`,
      tempo: `8 min`,
      guiaProfessor: `Ajude com a expressão. Escreva no quadro o modelo "Score: " & Pontos com aspas e &. Lembre de criar o Every tick para atualizar em tempo real.`,
      atividade: `Adicione um evento "Every tick" do System com a ação do objeto Text "Set text" usando a expressão "Score: " & Pontos. Aperte Play e colete moedas para ver o número subir na tela.`,
      gabarito: `O Text exibe "Score: 0" no início e o número aumenta a cada moeda coletada, atualizando em tempo real. Se aparecer erro, faltam as aspas ou o &. Se o texto não muda durante o jogo, falta o evento de atualização (Every tick ou Set text após a colisão).`,
    },
    {
      titulo: `Itens de valores diferentes em dupla`,
      tipo: `em dupla`,
      tempo: `10 min`,
      guiaProfessor: `Forme duplas. Um cria o item de 5 pontos, o outro testa se o placar soma certo. Depois trocam. Garanta o salvamento com Ctrl+S.`,
      atividade: `Em dupla, criem um segundo item (uma estrela) que vale 5 pontos: novo evento de colisão com "Add to variable" Pontos somando 5 e "Destroy" na estrela. Um colega joga e o outro confere se a moeda soma 1 e a estrela soma 5. Salvem o projeto.`,
      gabarito: `A moeda aumenta o placar em 1 e a estrela em 5, cada uma com seu próprio evento de colisão e seu Destroy. O projeto foi salvo. Se a estrela somar 1, a dupla repetiu o valor da moeda; se somar e não sumir, falta o Destroy na estrela.`,
    },
    {
      titulo: `Roda do placar: por que usar variável?`,
      tipo: `roda de conversa`,
      tempo: `6 min`,
      guiaProfessor: `Reúna a turma e projete 2 ou 3 jogos com o placar rodando. Conduza a conversa sobre variável global, somar pontos e atualizar o texto. Valorize as tentativas.`,
      atividade: `Em roda, cada aluno mostra seu placar funcionando e responde: o que a variável Pontos guarda, por que ela é global e como o número aparece atualizado na tela. A turma comenta o que achou de cada solução.`,
      gabarito: `As respostas devem citar que a variável Pontos guarda o número de pontos, que ser global significa valer para o jogo inteiro (não se perde quando um objeto é destruído) e que o objeto Text mostra o valor porque a ação Set text liga o texto à variável. Não há resposta única, mas os três conceitos (variável, global e atualização do texto) devem aparecer.`,
    },
  ],
};
