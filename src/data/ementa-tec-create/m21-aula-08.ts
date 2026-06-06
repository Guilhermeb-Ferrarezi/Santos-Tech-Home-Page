import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 8,
  titulo: "Interface Pronta: Teste e Entrega",
  semana: "Semana 4",
  duracao: "1 hora",
  objetivo: `Consolidar o entregável do mês testando toda a interface no modo Play, corrigindo bugs de posição, clique e som, fazendo os ajustes finais de layout e apresentando a interface funcionando no jogo para a turma.`,
  descricao: `Esta é a aula de fechamento do mês. Durante as semanas anteriores o aluno trouxe a UI do Canva para o Roblox, importou as imagens, escreveu os primeiros códigos em Lua, fez os botões funcionarem de verdade e colocou som e voz da IA no menu. Agora ele não cria nada novo: vira testador e revisor do próprio trabalho. O objetivo é garantir que a interface inteira funcione sem erros e esteja bonita, porque é ela que será entregue e apresentada — é a etapa 2 de 5 do projeto do jogo.

Testar dentro do Roblox Studio significa usar o botão Play (atalho F5) para entrar no jogo como um jogador de verdade e clicar em tudo. O aluno percorre cada tela do menu, aperta cada botão, ouve cada som e observa se algo está fora do lugar. É comum descobrir agora problemas que não apareciam no modo de edição: um botão que não responde ao clique, um texto que sai da tela em telas menores, um som que não toca ou que toca duas vezes. Anotar cada bug encontrado, do jeito que um testador profissional faz, é parte central da aula.

Depois de listar os bugs, vem a correção. Cada tipo de problema tem um lugar para arrumar. Posição e tamanho se resolvem no painel Properties, com as propriedades Position e Size em Scale (para a interface se adaptar a qualquer tela). Cliques que não funcionam quase sempre estão num Script ligado ao evento MouseButton1Click do botão. Sons que não tocam costumam ser um SoundId vazio ou a propriedade Playing desligada. O aluno corrige, testa de novo com F5 e repete até a tela passar limpa.

Por fim, a entrega. Cada aluno faz os ajustes finais de layout — alinhar botões, igualar espaçamentos, conferir cores e fontes — salva o lugar (File > Save to Roblox ou Ctrl + S) e apresenta a interface rodando para a turma no projetor. Apresentar é treinar a comunicação e receber feedback dos colegas, fechando com orgulho a segunda etapa do projeto e deixando a base pronta para o mês seguinte, em que o jogo de fato ganhará vida.`,
  materiais: [
    `Computadores com o Roblox Studio instalado e cada aluno logado na sua conta Roblox, com o projeto (place) do mês já aberto e a UI montada`,
    `Projetor para o professor demonstrar o teste com Play (F5) e para os alunos apresentarem a interface funcionando no fim da aula`,
    `Place de exemplo "antes e depois", com uma interface cheia de bugs (botão sem clique, texto cortado, som mudo) e a mesma já corrigida`,
    `Folha impressa da "Lista de testes" (checklist): cada menu, cada botão, cada som, com colunas "passou" e "bug encontrado"`,
    `Mouse externo por aluno, que facilita clicar com precisão durante o teste, e fones de ouvido para conferir os sons sem bagunça na sala`,
    `Cronômetro ou timer no projetor para organizar a rodada de apresentações, dando o mesmo tempo a cada aluno`,
  ],
  conceitosChave: [
    `Play (F5) — botão do Roblox Studio que roda o jogo como um jogador de verdade; é onde se testa de fato a interface.`,
    `Bug — qualquer comportamento errado: botão que não clica, texto cortado, som que não toca ou que toca repetido.`,
    `Lista de testes (checklist) — tabela onde o aluno marca cada menu, botão e som como "passou" ou anota o bug encontrado.`,
    `Properties — painel à direita onde se ajustam Position e Size dos elementos da interface para corrigir posição e tamanho.`,
    `Scale — modo de medir Position e Size em frações da tela (de 0 a 1), que faz a interface se adaptar a qualquer tamanho de tela.`,
    `MouseButton1Click — o evento de clique do botão; quando o clique não funciona, o problema quase sempre está no Script ligado a ele.`,
    `Entregável — a interface completa e funcionando no jogo; é o resultado final do mês, a etapa 2 de 5 do projeto.`,
  ],
  treinamento: `## O que o professor precisa saber

Você não precisa ser um programador para conduzir esta aula. O foco é testar e arrumar, não criar do zero. Abra o place de exemplo e localize quatro coisas: o botão Play no topo (ícone de "play" azul, atalho F5) e o Stop ao lado (Shift + F5); a janela Explorer à direita, com a estrutura StarterGui > ScreenGui onde mora a interface; o painel Properties logo abaixo, onde aparecem Position e Size; e a janela Output (em View > Output), onde mensagens vermelhas avisam de erros no código. Saiba que Position e Size têm dois pares de números: Scale (frações da tela, de 0 a 1) e Offset (pixels). Para a interface se adaptar, usamos Scale. Esses são todos os controles que a aula precisa.

## Passo a passo da aula

Aquecimento e revisão (10 min): peça que cada aluno abra seu projeto e aperte Play (F5) uma vez, só para entrar no jogo e ver o menu aparecer. Pergunte: "Tem algo que já parece errado de cara?". No quadro, escreva a Lista de testes: menus, botões, sons, layout. Mostre o Stop (Shift + F5) para voltar a editar.

Conteúdo novo guiado (15 min): no projetor, demonstre o ciclo testar-anotar-corrigir.
1. Aperte F5, clique em cada botão e ouça cada som. Aponte um bug de propósito (um botão que não responde).
2. Aperte Shift + F5 para parar. No Explorer, selecione o botão; no painel Properties, mostre Position e Size em Scale. Corrija um texto cortado mudando o Size.
3. Para o clique, abra o Script dentro do botão (duplo clique no Explorer) e confira a linha do MouseButton1Click. Para o som, selecione o objeto Sound e confira SoundId (não pode estar vazio) e Playing.
4. Aperte F5 de novo e mostre o bug resolvido. Reforce: testou, anotou, corrigiu, testou de novo.

Mão na massa (25 min): cada aluno percorre a Lista de testes no próprio projeto, marcando "passou" ou anotando o bug, e corrige um a um. Circule pela sala, peça que rodem com F5 antes e depois de cada correção e lembrem de salvar (Ctrl + S). Foque primeiro em quem tem botão sem clique, que é o bug mais travante.

Desafio e compartilhar (10 min): cada aluno faz o último ajuste de layout (alinhar botões, igualar espaços) e apresenta a interface rodando no projetor por cerca de um minuto, mostrando um botão e um som funcionando. A turma aponta um ponto forte de cada apresentação.

## Como explicar de forma clara

Use comparações do dia a dia. Testar com Play é "abrir o jogo como qualquer pessoa que baixou ele" — você não vê os bastidores, só usa. A Lista de testes é "a checklist do piloto antes de decolar": passa por cada item para nada falhar no ar. Scale é "medir em pedaços da tela, não em centímetros", por isso o botão fica no lugar tanto no celular quanto no monitor grande. O evento de clique é "o botão da campainha ligado a um fio": se o fio (o Script) está solto, apertar não toca nada. E entregar é "mostrar o trabalho pronto", como um chef que serve o prato depois de provar.

## Erros comuns e como ajudar

O aluno corrige no modo Play e perde tudo: lembre que mudanças feitas durante o Play não são salvas — primeiro aperte Stop (Shift + F5), depois edite. O botão não clica: peça para abrir o Output (View > Output); uma linha vermelha geralmente diz qual linha do Script quebrou, normalmente um nome digitado errado. O texto sai da tela só em alguns computadores: o aluno usou Offset (pixels) em vez de Scale — troque para Scale. O som não toca: SoundId vazio ou Playing desligado, ou o som não está dentro do lugar certo no Explorer. O som toca duas vezes: provavelmente há dois objetos Sound ou o código manda tocar duas vezes. Por fim, reforce salvar com Ctrl + S após cada correção, porque nesta aula se mexe em muitas telas e é fácil perder trabalho.`,
  exercicios: [
    {
      titulo: `Primeira rodada de teste`,
      tipo: `Prática no computador`,
      tempo: `8 min`,
      guiaProfessor: `Conduza no projetor enquanto cada aluno repete no próprio projeto. O objetivo é só aprender o ciclo: apertar Play (F5), clicar em tudo e parar com Stop (Shift + F5). Confirme que todos sabem entrar e sair do modo Play antes de seguir; é a base de toda a aula.`,
      atividade: `Aperte Play (F5) no seu projeto e entre no jogo. Clique em todos os botões do menu e ouça os sons. Depois aperte Stop (Shift + F5) para voltar a editar. Na Lista de testes, marque "passou" no que funcionou.`,
      gabarito: `O aluno acertou se conseguiu entrar no jogo com F5, clicar em cada botão, voltar a editar com Shift + F5 e marcar pelo menos os itens que funcionaram na Lista de testes. Ele sabe diferenciar o modo de edição do modo de jogo.`,
    },
    {
      titulo: `Caçando e anotando bugs`,
      tipo: `Prática no computador`,
      tempo: `10 min`,
      guiaProfessor: `Mostre como anotar um bug de forma útil: o que estava fazendo, o que esperava e o que aconteceu. Abra a janela Output (View > Output) e explique que linhas vermelhas são pistas de erro. Cuide para que as anotações sejam específicas, não vagas como "está quebrado".`,
      atividade: `Rode o jogo com F5 e percorra toda a interface procurando problemas: botão que não responde, texto cortado, som mudo ou repetido. Para cada bug, anote na Lista de testes o que aconteceu e em qual tela. Encontre pelo menos dois bugs.`,
      gabarito: `Está correto quando o aluno listou pelo menos dois bugs com descrição clara (qual tela, qual botão ou som, o que deu errado) em vez de anotações vagas. Se ele encontrou erros no Output, sabe dizer que são pistas de problema no código.`,
    },
    {
      titulo: `Consertando posição e clique`,
      tipo: `Desafio`,
      tempo: `12 min`,
      guiaProfessor: `Este é o passo central. Mostre no Explorer como selecionar o elemento e, no Properties, ajustar Position e Size em Scale para o texto cortado. Para o clique, abra o Script (duplo clique) e confira a linha do MouseButton1Click. Reforce: corrigir só fora do Play, e testar de novo com F5.`,
      atividade: `Escolha dois bugs da sua lista: um de posição ou tamanho e um de clique. Corrija a posição no painel Properties usando Scale. Corrija o clique abrindo o Script do botão e conferindo o MouseButton1Click. Teste com F5 e marque "passou" quando resolver.`,
      gabarito: `Correto quando os dois bugs escolhidos foram resolvidos: o elemento que estava fora agora aparece inteiro na tela (ajustado em Scale) e o botão que não respondia agora reage ao clique. O aluno comprova rodando com F5 e mostrando antes e depois. O projeto está salvo com Ctrl + S.`,
    },
    {
      titulo: `Revisão cruzada em dupla`,
      tipo: `Em dupla`,
      tempo: `12 min`,
      guiaProfessor: `Forme duplas e peça que troquem de computador. Entregue uma Lista de testes em branco para cada um testar o projeto do colega. Reforce que apontar o que melhorar é ajuda, não crítica — todo estúdio testa o jogo com outras pessoas. Circule garantindo sugestões concretas e que cada aluno aplique ao menos uma.`,
      atividade: `Teste a interface do seu colega com F5, clicando em tudo e ouvindo os sons. Na Lista de testes dele, anote pelo menos dois bugs ou melhorias que você encontrou. Depois volte ao seu projeto e corrija pelo menos um problema que o colega apontou para você.`,
      gabarito: `Sucesso quando a dupla testou o projeto um do outro e anotou pelo menos duas observações concretas em cada lista, e cada aluno corrigiu ao menos um problema apontado pelo colega — comprovado rodando a interface corrigida com F5. Observações vagas como "tá ruim" devem ser refeitas com detalhe.`,
    },
    {
      titulo: `Interface pronta e apresentada`,
      tipo: `Projeto curto`,
      tempo: `18 min`,
      guiaProfessor: `Esta é a entrega final do mês. Reserve tempo para o ajuste de layout e depois para a rodada de apresentações no projetor, usando um cronômetro para dar o mesmo tempo a cada aluno. Explique que apresentar é mostrar o trabalho com orgulho e que a turma sempre aponta um ponto forte. Garanta que todos salvem antes de apresentar.`,
      atividade: `Faça os ajustes finais de layout: alinhe os botões, iguale os espaçamentos e confira cores e fontes. Rode o jogo com F5 e confirme que todos os menus, botões e sons funcionam. Salve o projeto (Ctrl + S). Depois apresente sua interface rodando no projetor, mostrando pelo menos um botão e um som funcionando.`,
      gabarito: `Concluído quando a interface roda sem bugs (todos os botões clicam, os textos aparecem inteiros e os sons tocam certo), o layout está alinhado, o projeto foi salvo e o aluno apresentou a interface funcionando no projetor demonstrando um botão e um som. Assim ele fecha a etapa 2 de 5 do projeto.`,
    },
  ],
};
