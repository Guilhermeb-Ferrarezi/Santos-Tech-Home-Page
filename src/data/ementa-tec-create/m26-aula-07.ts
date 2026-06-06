import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 7,
  titulo: "Juntando Cenário, Assets e Código",
  semana: "Semana 4",
  duracao: "1 hora",
  objetivo: `Integrar em uma única experiência jogável o cenário, os modelos 3D vindos do Maya e os scripts em Lua, testando o jogo no modo Play e fazendo os primeiros ajustes de posicionamento e jogabilidade.`,
  descricao: `Esta é a aula em que tudo o que a turma construiu ao longo do mês finalmente se encontra. Até agora os alunos exploraram o Roblox Studio, montaram o cenário, trouxeram modelos 3D do Maya e escreveram seus primeiros scripts em Lua. Cada peça funcionava bem sozinha, mas um jogo de verdade só existe quando essas peças trabalham juntas. Hoje o objetivo é justamente esse: reunir cenário, assets e código em uma experiência única e, pela primeira vez, jogá-la de ponta a ponta.

A palavra-chave da aula é integração. Integrar significa fazer partes diferentes conversarem entre si: o personagem precisa pisar no chão do cenário sem cair no vazio, as moedas espalhadas pelo mapa precisam reagir ao toque do jogador por causa de um script, e a plataforma que o aluno modelou no Maya precisa estar no lugar certo para o pulo funcionar. Quando algo está fora do lugar ou um script não dispara, é na hora de jogar que o problema aparece. Por isso o modo Play é a estrela de hoje.

O Roblox Studio tem um botão chamado Play que coloca o professor (e depois cada aluno) dentro do próprio jogo, controlando o personagem como um jogador comum. Esse teste se chama playtest, ou seja, testar jogando. Durante o playtest o aluno observa: o personagem nasce no lugar certo? Dá para andar e pular sem atravessar o chão? As moedas somem ao serem tocadas? A porta abre quando deveria? Cada resposta "não" é uma pista de algo para ajustar, e ajustar faz parte do trabalho de quem cria jogos. Ninguém acerta tudo de primeira, nem os profissionais.

Para o professor iniciante, a boa notícia é que esta aula é mais sobre observar e corrigir do que sobre criar coisas novas. Não vamos escrever scripts grandes nem modelar nada; vamos arrumar o que já existe. Se ao final cada aluno tiver um jogo que abre no modo Play, deixa o personagem andar pelo cenário e faz pelo menos um script reagir (como recolher uma moeda), a aula cumpriu seu papel e o jogo do mês está realmente tomando forma.`,
  materiais: [
    `Computadores com o Roblox Studio instalado e o projeto do jogo de cada aluno já aberto antes da aula`,
    `Projetor ou TV ligado ao computador do professor, para mostrar cada clique e cada teste na tela grande`,
    `Arquivo de exemplo do professor: um jogo simples já montado com chão, uma plataforma, uma moeda com script e o ponto de nascimento (SpawnLocation)`,
    `Os modelos 3D importados do Maya e os scripts em Lua criados nas aulas anteriores do mês`,
    `Folha impressa com a lista de verificação do playtest (checklist) para os alunos seguirem ao testar`,
    `Quadro branco ou cartaz com a tabela de problemas: o que aconteceu, qual a causa provável e como corrigir`,
  ],
  conceitosChave: [
    `Integração — juntar partes diferentes do jogo (cenário, modelos 3D e scripts) para que funcionem como um todo único.`,
    `Modo Play — o botão do Roblox Studio que coloca você dentro do jogo para testá-lo como um jogador de verdade.`,
    `Playtest — testar o jogo jogando, observando o que funciona e o que precisa de ajuste.`,
    `SpawnLocation — o objeto que marca o ponto de nascimento, onde o personagem aparece quando o jogo começa.`,
    `Anchored — propriedade que prende uma peça no lugar; quando ligada, a peça não cai nem se mexe com a gravidade.`,
    `Collision (colisão) — a propriedade que faz uma peça ser sólida, impedindo o personagem de atravessá-la.`,
    `Output (janela de saída) — o painel do Studio que mostra mensagens e erros dos scripts enquanto o jogo roda.`,
  ],
  treinamento: `## O que o professor precisa saber

Você não precisa dominar o Roblox Studio para conduzir esta aula. O foco é testar e ajustar, não criar do zero. Antes da aula, abra o arquivo de exemplo e treine três coisas. Primeira: apertar o botão Play (fica no topo, na aba Home ou Test) para entrar no jogo e a tecla Esc, depois Stop, para sair. Segunda: clicar numa peça e olhar a janela Properties (Propriedades), achando duas caixinhas importantes, Anchored e CanCollide; Anchored prende a peça no ar e CanCollide faz a peça ser sólida. Terceira: abrir a janela Output em View, depois Output, onde aparecem os erros dos scripts em vermelho. Tenha à mão um script simples de moeda. Ele já existe do mês, mas deixe-o à vista para conferir. O script da moeda costuma ser parecido com este, e você pode lê-lo em voz alta sem medo:

local moeda = script.Parent
local function aoTocar(parte)
  local humano = parte.Parent:FindFirstChild("Humanoid")
  if humano then
    moeda:Destroy()
  end
end
moeda.Touched:Connect(aoTocar)

Leia assim: "moeda" é a peça onde o script está; quando algo encosta nela (Touched), checamos se quem encostou tem um Humanoid (ou seja, é um personagem); se tiver, a moeda some (Destroy). Esse é o tipo de script que vamos ver reagindo no playtest.

## Passo a passo da aula (ritmo 10/15/25/10, com o código exato)

10 min, aquecimento e revisão: pergunte à turma o que cada um já tem pronto: cenário, modelos do Maya e scripts. Diga a frase-chave: "Hoje as peças vão jogar juntas." Mostre rápido no projetor o jogo de exemplo fechado, ainda sem testar.

15 min, conteúdo novo guiado: no seu Studio, aperte Play e ande pelo cenário no projetor. Mostre o personagem nascendo no SpawnLocation, andando no chão e pulando na plataforma. Encoste numa moeda e mostre ela sumir. Saia com Stop. Agora ensine a investigar: clique no chão e mostre, em Properties, que Anchored está ligado (chão preso) e CanCollide ligado (chão sólido). Abra Output em View, depois Output, e explique que erros aparecem ali em vermelho.

25 min, mão na massa: cada aluno abre o próprio jogo e roda o playtest com o checklist. Roteiro na lousa: 1) apertar Play; 2) verificar se o personagem nasce no lugar certo (se não, posicionar o SpawnLocation no chão); 3) andar e pular conferindo se não atravessa o chão (se atravessar, ligar CanCollide); 4) conferir se peças do Maya estão flutuando ou caindo (ligar Anchored para prender); 5) tocar a moeda e ver se o script some com ela (se não, abrir Output e ler o erro). Circule pela sala ajudando em cada item.

10 min, desafio e compartilhar: lance o desafio "caça ao bug". Cada dupla testa o jogo do colega e anota na tabela um problema, a causa provável e a correção. Termine com dois ou três alunos mostrando no projetor um ajuste que fizeram funcionar.

## Como explicar de forma clara (linguagem para a idade)

Use comparações concretas. Diga que apertar Play é "entrar dentro do próprio desenho animado para passear nele". Compare integração com um time de futebol: cada jogador (cenário, modelo, script) é bom sozinho, mas o gol só sai quando todos jogam juntos. Explique Anchored como "colar a peça no ar com cola mágica" e CanCollide como "deixar a peça dura como parede". Chame o Output de "o telefone do jogo": é por ali que o jogo avisa quando algo deu errado. Repita sempre que achar um bug não é fracasso, é parte do trabalho: "Quem cria jogos passa metade do tempo testando e arrumando."

## Erros comuns e como ajudar

O personagem cai no vazio ao nascer: o SpawnLocation está fora do chão; peça para arrastá-lo até ficar em cima de uma peça sólida. O personagem atravessa o chão ou a plataforma: a propriedade CanCollide está desligada; mande ligar em Properties. Uma peça do Maya cai sozinha ao apertar Play: falta marcar Anchored; oriente a ligar para prendê-la. A moeda não some ao ser tocada: confira se o script está dentro da peça da moeda (deve ser filho dela) e abra o Output para ler o erro em vermelho. O aluno esquece de apertar Stop e tenta editar durante o teste: lembre que primeiro paramos com Stop, depois mexemos na cena. Por fim, quem terminar rápido pode ajustar a posição de mais peças ou ajudar um colega no playtest dele.`,
  exercicios: [
    {
      titulo: `O que já temos pronto?`,
      tipo: `roda de conversa`,
      tempo: `7 minutos`,
      guiaProfessor: `Use no aquecimento. Conduza uma conversa rápida para cada aluno listar em voz alta o cenário, os modelos do Maya e os scripts que já fez no mês. Anote no quadro as três categorias para mostrar que hoje elas vão se juntar. Aceite todas as respostas.`,
      atividade: `Diga em voz alta o que você já tem pronto no seu jogo: como está o cenário, quais modelos você trouxe do Maya e quais scripts em Lua você criou. Aponte uma coisa que você ainda não testou jogando.`,
      gabarito: `Não há uma única resposta certa, pois depende do projeto de cada aluno. Uma boa resposta cita as três partes do mês: cenário (chão, paredes, plataformas), modelos 3D do Maya (a peça que o aluno modelou) e scripts em Lua (por exemplo, o script da moeda). O essencial é o aluno reconhecer que essas partes ainda não foram testadas juntas no modo Play.`,
    },
    {
      titulo: `Primeiro playtest`,
      tipo: `prática na ferramenta`,
      tempo: `8 minutos`,
      guiaProfessor: `Mostre no projetor onde fica o botão Play e como sair com Stop. Garanta que cada aluno consiga entrar no próprio jogo, andar e sair. Passe de mesa em mesa confirmando que todos conseguiram entrar e voltar à edição.`,
      atividade: `Abra o seu jogo e aperte o botão Play. Ande com o personagem pelo cenário, tente pular e observe o que acontece. Depois aperte Stop para voltar a editar. Anote uma coisa que funcionou e uma que não funcionou.`,
      gabarito: `O procedimento é fixo: apertar Play (na aba Home ou Test) entra no jogo; Stop volta para a edição. As observações variam por projeto. Exemplo de resposta válida: "Funcionou andar pelo chão, mas o personagem atravessou a plataforma do Maya." O importante é o aluno conseguir entrar no modo Play, mexer no personagem e identificar pelo menos um ponto a ajustar.`,
    },
    {
      titulo: `Prendendo as peças no lugar`,
      tipo: `prática na ferramenta`,
      tempo: `12 minutos`,
      guiaProfessor: `Reforce a diferença entre Anchored (prende no ar) e CanCollide (deixa sólido). Mostre na janela Properties onde ficam as duas caixinhas. Circule conferindo se as peças do Maya pararam de cair e se o personagem deixou de atravessar o chão.`,
      atividade: `No modo de edição, clique em uma peça que estava caindo ou flutuando errado durante o teste. Na janela Properties, ligue a caixinha Anchored para prendê-la. Se o personagem atravessava o chão ou a plataforma, clique nela e ligue também a caixinha CanCollide. Teste de novo com Play.`,
      gabarito: `Passos: selecionar a peça; em Properties, marcar Anchored para prender a peça no lugar (ela para de cair com a gravidade); marcar CanCollide para torná-la sólida (o personagem deixa de atravessar). Resultado correto no playtest: as peças do Maya ficam paradas no lugar certo e o personagem anda e pula sobre o chão e a plataforma sem atravessar.`,
    },
    {
      titulo: `Fazendo o script reagir`,
      tipo: `desafio individual`,
      tempo: `13 minutos`,
      guiaProfessor: `Confira se o script da moeda está dentro da peça da moeda (como filho dela no Explorer). Ensine a abrir o Output em View, depois Output, para ler erros em vermelho. Ajude a interpretar mensagens simples, como nome de objeto digitado errado.`,
      atividade: `Teste se a sua moeda some ao ser tocada. Se não sumir, confira no Explorer se o script está dentro da peça da moeda e abra a janela Output (em View, depois Output) para ver se aparece algum erro em vermelho. Ajuste o que for preciso e teste de novo até a moeda sumir ao toque.`,
      gabarito: `O script da moeda deve ser filho da peça da moeda no Explorer e conter a lógica de toque. Um exemplo correto e completo é:

local moeda = script.Parent
local function aoTocar(parte)
  local humano = parte.Parent:FindFirstChild("Humanoid")
  if humano then
    moeda:Destroy()
  end
end
moeda.Touched:Connect(aoTocar)

Causas comuns de não funcionar: o script estar fora da peça (basta arrastá-lo para dentro da moeda no Explorer) ou um nome digitado errado, como "Humanid" no lugar de "Humanoid", que aparece no Output. Sucesso = ao encostar na moeda durante o Play, ela desaparece.`,
    },
    {
      titulo: `Caça ao bug em dupla`,
      tipo: `em dupla`,
      tempo: `10 minutos`,
      guiaProfessor: `Forme duplas e oriente a troca de computador. Entregue a tabela de problemas (o que aconteceu, causa provável, como corrigir). Premie a dupla que encontrar e ajudar a corrigir um problema. Encerre com dois ou três alunos mostrando um ajuste que funcionou.`,
      atividade: `Troque de lugar com um colega e jogue o jogo dele com o checklist. Encontre pelo menos um problema (peça caindo, personagem atravessando o chão, moeda que não some) e preencha a tabela: o que aconteceu, qual a causa provável e como corrigir. Ajude o colega a aplicar a correção e testem juntos.`,
      gabarito: `A dupla deve rodar o playtest do colega e registrar um problema real com sua causa e correção. Exemplos válidos: "Peça do Maya caiu ao apertar Play; causa: Anchored desligado; correção: ligar Anchored." Ou "Personagem atravessou a plataforma; causa: CanCollide desligado; correção: ligar CanCollide." Ou ainda "Moeda não sumiu; causa: script fora da peça; correção: arrastar o script para dentro da moeda." Sucesso = os dois jogos passam no checklist, abrindo no modo Play, deixando o personagem andar pelo cenário e com pelo menos um script reagindo corretamente.`,
    },
  ],
};
