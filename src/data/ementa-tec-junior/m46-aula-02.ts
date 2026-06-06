import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 2,
  titulo: "Se isso, então aquilo: condições",
  semana: "Semana 1",
  duracao: "1 hora",
  objetivo: `Usar uma condição (if/then) dentro do evento da aula anterior para que a peça reaja só quando o jogador realmente toca nela.`,
  descricao: `Na aula passada as crianças aprenderam o evento: o jogo "percebe" quando algo acontece, como o jogador tocar numa peça. Mas um evento sozinho reage sempre, do mesmo jeito, sem pensar. Nesta aula damos um cérebro para o evento: a condição. A condição é a parte do código que decide. Ela olha para uma situação e pergunta "isso é verdade?". Se for verdade, faz uma coisa; se não for, não faz nada. É o famoso "se isso, então aquilo".

No Roblox, a peça (a Part) dispara o evento Touched quando qualquer coisa encosta nela. O problema é que "qualquer coisa" inclui outras peças, partes do cenário e até o chão. Por isso o evento sozinho não basta: precisamos de uma condição que confirme "quem encostou foi mesmo um jogador?". Só depois dessa confirmação é que mandamos a peça mudar de cor ou somar um ponto. Assim a peça para de reagir a qualquer coisa e passa a reagir só quando deve.

Em Lua, a condição se escreve com as palavrinhas if (se), then (então) e end (fim). Entre o if e o then fica a pergunta; entre o then e o end fica o que acontece quando a resposta é "sim". Nesta aula o professor vai mostrar, linha a linha, como encaixar esse if dentro do evento Touched para verificar se quem tocou é um personagem de jogador, usando o jeito clássico do Roblox de descobrir isso (procurar um Humanoid). Quando a condição é verdadeira, a peça reage; quando é falsa, fica quietinha.

O objetivo final é que cada criança combine evento mais condição numa regra completa e veja, com os próprios olhos, a diferença: a peça que antes piscava com qualquer coisa agora só responde ao toque do jogador. Esse é o tijolinho que vai sustentar as próximas aulas sobre pontos e regras do jogo.`,
  materiais: [
    `Computadores com o Roblox Studio aberto e um lugar (place) já salvo da aula 1, com o script do evento Touched funcionando`,
    `Projetor ou TV ligada no computador do professor para mostrar a tela do Studio para todos`,
    `Uma Part colorida já posicionada no chão de cada projeto (a "peça mágica" da aula anterior)`,
    `Exemplo pronto do professor: um script com if/then completo que muda a cor da peça só quando o jogador toca`,
    `Cartaz ou slide com as três palavras-chave em letras grandes: if (se), then (então), end (fim)`,
    `Folha impressa de apoio com o código modelo para as crianças consultarem enquanto digitam`,
    `Cronômetro ou timer visível para marcar os blocos de tempo da aula`,
  ],
  conceitosChave: [
    `Condição — é a parte do código que decide; ela faz uma pergunta e só age se a resposta for "sim".`,
    `if — palavrinha em inglês que quer dizer "se"; começa a pergunta da condição.`,
    `then — palavrinha que quer dizer "então"; vem depois da pergunta e abre o que vai acontecer.`,
    `end — palavrinha que quer dizer "fim"; fecha a condição, igual ao ponto final de uma frase.`,
    `Verdadeiro e falso — toda pergunta do computador só tem duas respostas: verdadeiro (sim) ou falso (não).`,
    `Humanoid — uma peça invisível dentro do corpo do jogador; achar ela é o jeito de saber "isso é um jogador".`,
    `FindFirstChild — comando que procura uma coisa dentro de outra; é como abrir a mochila e ver se a caneta está lá.`,
  ],
  treinamento: `## O que o professor precisa saber

Você não precisa ser programador. Precisa entender uma ideia só: a condição é uma pergunta de "sim ou não". No Roblox, o evento Touched já existe da aula passada e dispara quando algo encosta na peça. O detalhe é que ele dispara com qualquer coisa. A condição if resolve isso perguntando "quem tocou é um jogador?". O Roblox descobre isso assim: todo personagem de jogador tem dentro dele uma peça chamada Humanoid. Se a gente achar o Humanoid, é jogador; se não achar, é o cenário. As três palavras mágicas são if (se), then (então) e end (fim). Decore essas três e você ensina a aula inteira.

## Passo a passo da aula (ritmo 10/15/25/10)

10 min — Aquecimento e revisão. Abra o projeto no projetor. Toque na peça e mostre o evento da aula 1 funcionando (a peça reage). Pergunte: "ela reage só com o jogador ou com qualquer coisa?". Empurre uma outra Part contra ela para mostrar que reage com tudo. Plante o problema: "hoje vamos ensinar a peça a pensar".

15 min — Conteúdo novo guiado. No Explorer (painel à direita), clique na Part, depois no script dentro dela para abrir o editor de código. Mostre o evento Touched já existente. Agora digite, devagar e em voz alta, a condição dentro dele. O código fica assim, linha a linha:

script.Parent.Touched:Connect(function(outraParte)
  local humano = outraParte.Parent:FindFirstChild("Humanoid")
  if humano then
    script.Parent.BrickColor = BrickColor.new("Bright green")
  end
end)

Explique cada linha: a primeira é o evento (já conheciam). A segunda procura o Humanoid dentro de quem tocou e guarda numa caixinha chamada humano. A terceira é o if: "se achou o humano". A quarta é o then escondido no Roblox (basta o if e a linha de dentro) que pinta a peça de verde. A quinta é o end que fecha. Aperte Play e toque com o personagem: fica verde. Encoste outra Part: não acontece nada. Aí está a condição funcionando.

## Como explicar para crianças

Use a analogia do porteiro. O evento é a campainha tocando; a condição é o porteiro que olha pelo olho mágico antes de abrir. "Se for o amigo, então abre a porta. Se não for, deixa fechado." Outra analogia boa: a luz com sensor. "Se passar uma pessoa, então a luz acende." Mostre que o if é sempre uma pergunta de sim ou não, nunca um "mais ou menos". Faça as crianças falarem em voz alta o padrão batendo palma: "SE (palma) isso, ENTÃO (palma) aquilo". Antes de digitar, peça que cada uma diga a regra em português: "se o jogador tocar, então fica verde". Só depois traduzimos para o código.

## Erros comuns e como ajudar

O erro número um é esquecer o end. O script reclama com um risco vermelho. Ensine: "todo if precisa do seu fim, igual toda frase precisa de ponto". O segundo erro é confundir maiúsculas: Humanoid com H grande, BrickColor com B e C grandes. O Lua não perdoa: humanoid com h pequeno não funciona. Aponte para o cartaz com a grafia certa. O terceiro erro é colocar o if fora do evento, soltinho; mostre que ele mora dentro, com um espacinho à frente (a indentação). O quarto é escrever a cor errada: tem que ser um nome válido entre aspas, como "Bright green". Se nada acontecer ao testar, peça para a criança apertar Stop, ler o código com você devagar e procurar o end perdido. Comemore cada peça que fica verde só com o jogador: foi a primeira regra de verdade que ela criou.`,
  exercicios: [
    {
      titulo: `Fala a regra antes de programar`,
      tipo: `Oral, em dupla`,
      tempo: `5 minutos`,
      guiaProfessor: `Faça as crianças traduzirem situações para o padrão "se isso, então aquilo" só com a boca, sem mexer no computador. Bata palma no "se" e no "então" para fixar o ritmo. Aceite qualquer resposta que mantenha o formato.`,
      atividade: `Em dupla, transforme cada frase numa regra "se... então...": (1) a campainha tocou; (2) começou a chover; (3) o jogador encostou na peça mágica.`,
      gabarito: `Respostas possíveis: (1) "Se a campainha tocar, então eu abro a porta." (2) "Se começar a chover, então eu abro o guarda-chuva." (3) "Se o jogador encostar na peça, então ela muda de cor." O importante é manter o "se" na pergunta e o "então" na ação.`,
    },
    {
      titulo: `Caça-palavras do código`,
      tipo: `Leitura e marcação`,
      tempo: `5 minutos`,
      guiaProfessor: `Mostre o código modelo no projetor ou na folha impressa. Peça que cada criança aponte com o dedo as três palavras mágicas. Confira em voz alta com a turma.`,
      atividade: `Olhe o código da aula e encontre as três palavras da condição. Diga onde está o "se", onde fica a ação que acontece, e qual palavra fecha tudo no fim.`,
      gabarito: `A palavra que faz a pergunta é if (o "se"). A ação está na linha de dentro: script.Parent.BrickColor = BrickColor.new("Bright green") (pintar de verde). A palavra que fecha é end (o "fim"). Se a criança citar o then, vale também: ele é o "então".`,
    },
    {
      titulo: `Conserta o end perdido`,
      tipo: `Correção de bug`,
      tempo: `8 minutos`,
      guiaProfessor: `Prepare no projeto um script com o end faltando de propósito. Mostre o risco vermelho de erro. Deixe a criança descobrir o que falta antes de você contar. Reforce: "todo if precisa do seu fim".`,
      atividade: `Este código não funciona e aparece um aviso vermelho. Leia com atenção e descubra qual palavrinha está faltando para a condição ficar completa. Conserte e teste.`,
      gabarito: `Está faltando o end que fecha o if. O código certo precisa terminar a condição com end antes do end e do parêntese que fecham o evento. Depois de adicionar o end na linha certa, o aviso vermelho some e a peça volta a reagir.`,
    },
    {
      titulo: `Minha primeira condição completa`,
      tipo: `Mão na massa, individual`,
      tempo: `12 minutos`,
      guiaProfessor: `Cada criança abre o script da sua peça e digita a condição dentro do evento, consultando a folha de apoio. Circule pela sala. Cuide das maiúsculas de Humanoid e BrickColor. Mande apertar Play e tocar com o personagem; depois encostar outra Part para ver que não reage.`,
      atividade: `No seu projeto, escreva dentro do evento Touched uma condição que pinte a peça de verde só quando o jogador tocar. Teste com o personagem e teste empurrando outra peça.`,
      gabarito: `O código esperado é: script.Parent.Touched:Connect(function(outraParte) local humano = outraParte.Parent:FindFirstChild("Humanoid") if humano then script.Parent.BrickColor = BrickColor.new("Bright green") end end). Ao testar, a peça fica verde com o jogador e não muda quando outra Part encosta. Isso prova que a condição está funcionando.`,
    },
    {
      titulo: `Inventa a tua reação`,
      tipo: `Desafio criativo`,
      tempo: `10 minutos`,
      guiaProfessor: `Agora a criança troca a ação de dentro do if por outra de sua escolha, mantendo a condição "se for jogador". Sugira cores diferentes, deixar a peça transparente ou mudar o tamanho. O foco é que a ação continue dentro do if, entre o then e o end. Peça para mostrar para um colega no fim.`,
      atividade: `Mude o que acontece quando o jogador toca: escolha outra cor, deixe a peça meio transparente ou faça ela ficar maior. A condição "se for jogador" tem que continuar igual. Teste e mostre para um colega.`,
      gabarito: `Exemplos válidos, todos dentro do if humano then ... end: trocar a cor com script.Parent.BrickColor = BrickColor.new("Bright red"); deixar transparente com script.Parent.Transparency = 0.5; aumentar com script.Parent.Size = script.Parent.Size * 2. Está correto se a nova ação ficar entre o then e o end e a peça só reagir ao toque do jogador.`,
    },
  ],
};
