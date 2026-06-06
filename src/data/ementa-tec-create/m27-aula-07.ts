import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 7,
  titulo: "Revisão e Ajustes Finais",
  semana: "Semana 4",
  duracao: "1 hora",
  objetivo: `Fazer uma revisão completa de todos os novos assets — conferindo materiais, escala, número de polígonos e nomes dos arquivos — corrigir os últimos problemas e organizar a pasta de exportação para que nada falte na entrega.`,
  descricao: `Esta é a aula da reta final do mês. O aluno já planejou, modelou, aplicou materiais, deu acabamento e aprendeu a otimizar e exportar os novos assets 3D no Maya. Agora chega o momento que todo profissional conhece: a revisão final. Antes de dizer que um trabalho está pronto, é preciso voltar nele com calma e conferir item por item, como um inspetor de qualidade. É exatamente isso que faremos aqui, usando uma checklist clara para não esquecer nada.

A revisão de hoje olha para quatro pontos principais de cada asset. Primeiro, os materiais: cada modelo precisa ter um material aplicado e nomeado, sem aquele cinza padrão do Maya sobrando por engano. Segundo, a escala: todos os objetos devem estar no tamanho coerente uns com os outros e com as transformações congeladas (Freeze Transformations), para o Roblox não receber valores estranhos. Terceiro, a contagem de polígonos: o aluno confere no Heads Up Display se o modelo está leve o bastante para um jogo. Quarto, os nomes dos arquivos e dos objetos: nomes claros, sem espaços nem acentos, seguindo um padrão combinado pela turma.

A grande ideia desta aula é que organização é parte do trabalho, não um detalhe opcional. Um asset lindo com nome bagunçado, escala errada ou material faltando vira dor de cabeça na hora de usar no jogo. Por isso o aluno aprende a montar uma pasta de exportação limpa, com todos os arquivos .fbx ou .obj no lugar certo, nomes consistentes e nada faltando. Essa pasta é o pacote de entrega do mês.

Ao final da aula, cada aluno terá passado todos os seus novos assets por uma checklist de qualidade, corrigido os problemas encontrados e deixado a pasta de exportação pronta e organizada. É o ensaio geral antes da entrega oficial da próxima aula, e ensina um hábito que vale para games, sites e qualquer projeto de tecnologia: revisar antes de entregar.`,
  materiais: [
    `Computadores com o Maya instalado e aberto, um por aluno`,
    `Projetor ou TV para o professor demonstrar a checklist e a organização da pasta na tela`,
    `Arquivo de exemplo de cada aluno: todos os novos assets do mês salvos das aulas anteriores (formato .mb)`,
    `Arquivo de exemplo do professor com uma pasta de exportação já organizada e nomeada corretamente, para mostrar o resultado-alvo`,
    `Checklist de revisão impressa para cada aluno (materiais, escala, polígonos, nomes)`,
    `Mouse com três botões para cada aluno (essencial para navegar e selecionar no Maya)`,
    `Folha de atalhos da turma com os comandos da aula (Freeze Transformations, Heads Up Display, Rename, Export Selection)`,
  ],
  conceitosChave: [
    `Revisão final — passo de conferir todo o trabalho item por item antes de entregar, garantindo que nada esteja errado ou faltando.`,
    `Checklist — lista de itens a verificar, marcando cada um conforme é conferido, para não esquecer nenhum ponto importante.`,
    `Freeze Transformations — comando do Maya que zera posição, rotação e escala do objeto, deixando os valores limpos para exportar.`,
    `Contagem de polígonos — número de faces que formam o modelo; quanto menor, mais leve o asset roda no jogo.`,
    `Convenção de nomes — padrão combinado para nomear arquivos e objetos, sem espaços nem acentos, para evitar erros no Roblox.`,
    `Pasta de exportação — pasta única e organizada onde ficam todos os arquivos prontos para entrega, sem nada solto ou repetido.`,
    `Entregável — o resultado final que o aluno precisa apresentar: neste mês, os novos assets prontos e organizados.`,
  ],
  treinamento: `## O que o professor precisa saber

Esta aula não tem ferramenta nova: é dia de revisar e organizar. Você vai guiar a turma por uma checklist de quatro pontos para cada asset. Materiais: selecione o objeto, abra o Hypershade (Windows > Rendering Editors > Hypershade) ou o Attribute Editor e confirme que há um material aplicado e com nome claro. Escala: com o objeto selecionado, use Modify > Freeze Transformations para zerar os valores e confira o tamanho no Channel Box. Polígonos: ative o contador em Display > Heads Up Display > Poly Count para ver o total de faces na tela. Nomes: renomeie objetos no Outliner com duplo clique e arquivos seguindo um padrão sem espaços nem acentos, como personagem_robo_v1. Antes da aula, abra o seu exemplo e percorra a checklist uma vez para ter os menus na ponta dos dedos. Garanta que todos salvaram os assets das aulas anteriores.

## Passo a passo da aula

10 min — Aquecimento e revisão. Abra um asset de exemplo no projetor e pergunte: "Como sabemos que um trabalho está pronto de verdade?" Conduza para a ideia de checklist. Peça que cada aluno abra seus arquivos do mês (File > Open Scene). Entregue a checklist impressa.

15 min — Conteúdo novo guiado. Demonstre a checklist no projetor, devagar, item por item. (1) Materiais: selecione o objeto, abra o Attribute Editor e mostre o material aplicado; renomeie-o para algo claro como mat_metal. (2) Escala: selecione tudo e use Modify > Freeze Transformations; mostre no Channel Box que Translate ficou 0, Rotate ficou 0 e Scale ficou 1. (3) Polígonos: ative Display > Heads Up Display > Poly Count e mostre o número de faces no canto da tela. (4) Nomes: no Outliner, dê duplo clique e renomeie objetos sem espaços nem acentos. Escreva no quadro o padrão da turma, por exemplo asset_nome_v1.

25 min — Mão na massa. Cada aluno percorre a checklist em TODOS os seus assets e marca cada item. Roteiro na lousa: 1) conferir material aplicado e nomeado; 2) Freeze Transformations e checar escala; 3) ver Poly Count; 4) renomear objetos e arquivos no padrão. Ao terminar, exporta cada asset com File > Export Selection para uma pasta única chamada entrega_assets. Circule pela sala conferindo. Lembre do Ctrl+S a cada poucos minutos.

10 min — Desafio e compartilhar. Lance o desafio: "Abra sua pasta entrega_assets e confira que cada asset tem exatamente um arquivo, com nome no padrão e sem repetições." Depois cada aluno mostra a pasta organizada e diz qual problema corrigiu na revisão.

## Como explicar de forma clara

Use a imagem do inspetor de qualidade: "Antes de a fábrica enviar um brinquedo, alguém confere se está perfeito. Hoje você é esse inspetor do seu próprio trabalho." Compare a checklist a uma lista de compras: você marca cada item para não esquecer nada. Para os nomes, diga que o computador é como uma pessoa muito organizada que se confunde com espaços e acentos, então escrevemos personagem_robo em vez de "personagem robô". Para a escala, fale que Freeze Transformations é "zerar o cronômetro" para começar limpo. Use sempre "material", "tamanho", "número de faces" e "nome" antes dos termos técnicos.

## Erros comuns e como ajudar

O erro mais comum é esquecer de aplicar material em algum objeto e deixar o cinza padrão — oriente a clicar em cada peça e conferir no Attribute Editor. Outro: renomear o arquivo mas esquecer o objeto dentro do Maya (ou o contrário); peça para checar os dois. Muitos usam espaços ou acentos nos nomes; reforce o padrão do quadro. Alguns esquecem o Freeze Transformations e exportam com escala estranha; passe verificando o Channel Box. Vários exportam para pastas diferentes e perdem arquivos; insista numa pasta única entrega_assets. Por fim, lembre o Ctrl+S em voz alta a cada rodada pela sala.`,
  exercicios: [
    {
      titulo: `Caça ao material faltando`,
      tipo: `Prática na ferramenta`,
      tempo: `8 min`,
      guiaProfessor: `Aquecimento individual focado no primeiro item da checklist. Demonstre uma vez como ver o material no Attribute Editor. Verifique se cada aluno consegue identificar um objeto sem material (cinza padrão) e aplicar um material nomeado.`,
      atividade: `Selecione cada peça dos seus assets, abra o Attribute Editor e confira se há um material aplicado. Se algum objeto estiver com o cinza padrão, aplique um material e renomeie-o de forma clara, como mat_madeira.`,
      gabarito: `Todos os objetos devem ter um material aplicado e com nome claro, sem nenhum cinza padrão sobrando. Acertou quem percorreu peça por peça e nomeou os materiais; se restou algo cinza, oriente a selecionar essa peça e aplicar um material antes de seguir.`,
    },
    {
      titulo: `Zerando a escala`,
      tipo: `Prática na ferramenta`,
      tempo: `8 min`,
      guiaProfessor: `Foco no item escala da checklist. Mostre o Channel Box antes e depois do Freeze Transformations para o aluno ver os valores mudarem. Reforce que o objetivo é deixar Translate e Rotate em 0 e Scale em 1.`,
      atividade: `Selecione todos os seus assets e vá em Modify > Freeze Transformations. Depois confira no Channel Box se Translate ficou 0, Rotate ficou 0 e Scale ficou 1.`,
      gabarito: `Após o Freeze, o Channel Box deve mostrar Translate X Y Z em 0, Rotate X Y Z em 0 e Scale X Y Z em 1. Acertou quem zerou os valores em todos os objetos; se algum continuar com escala diferente de 1, o aluno não selecionou aquela peça — oriente a selecionar e repetir.`,
    },
    {
      titulo: `Contando as faces`,
      tipo: `Desafio`,
      tempo: `12 min`,
      guiaProfessor: `Item polígonos da checklist. Mostre como ativar o Poly Count e onde ler o número na tela. Combine com a turma um teto razoável de faces por asset e ajude quem estiver muito acima a localizar a peça mais pesada.`,
      atividade: `Ative Display > Heads Up Display > Poly Count. Anote o número total de faces de cada asset. Se algum estiver acima do limite combinado pela turma, identifique a peça mais pesada e veja o que pode ser simplificado.`,
      gabarito: `Cada aluno deve registrar a contagem de faces de cada asset e comparar com o limite da turma. Acertou quem leu o número no Poly Count e apontou a peça mais pesada quando o asset passou do limite; quem não achou o contador deve reativar em Display > Heads Up Display > Poly Count.`,
    },
    {
      titulo: `Nomes em ordem, a dois`,
      tipo: `Em dupla`,
      tempo: `12 min`,
      guiaProfessor: `Trabalho colaborativo no item nomes. Forme duplas: um confere os nomes do colega como um revisor externo. Reforce o padrão sem espaços nem acentos. Estimule feedback gentil e específico, apontando exatamente qual nome corrigir.`,
      atividade: `Em dupla, abram a pasta e o Outliner um do outro. Cada um confere os nomes dos objetos e arquivos do colega: devem seguir o padrão combinado (como asset_nome_v1), sem espaços nem acentos. Anotem juntos o que precisa ser renomeado e corrijam.`,
      gabarito: `Ao final, todos os objetos e arquivos das duas duplas seguem o padrão da turma, sem espaços nem acentos e sem nomes repetidos. Acertou a dupla que encontrou e corrigiu pelo menos um nome fora do padrão; sinal de acerto é o colega conseguir apontar qual nome estava errado e por quê.`,
    },
    {
      titulo: `Pasta de entrega pronta`,
      tipo: `Projeto curto`,
      tempo: `20 min`,
      guiaProfessor: `Síntese da aula. Cada aluno finaliza a checklist completa e monta a pasta de exportação. Reforce o uso de File > Export Selection para uma pasta única chamada entrega_assets. Reserve os últimos minutos para a apresentação, em que cada um mostra a pasta organizada e diz qual problema corrigiu. Lembre de salvar.`,
      atividade: `Percorra a checklist completa (materiais, escala, polígonos e nomes) em todos os seus assets, corrigindo o que faltar. Depois use File > Export Selection para salvar cada asset, no formato combinado (.fbx ou .obj), dentro de uma única pasta chamada entrega_assets. Confira que não falta nem sobra nada e apresente a pasta para a turma.`,
      gabarito: `A pasta entrega_assets deve conter exatamente um arquivo por asset, no formato combinado, com nomes no padrão, sem espaços, acentos ou repetições, e todos os assets devem ter passado pelos quatro itens da checklist. Acertou quem entrega a pasta limpa e organizada e sabe dizer qual problema corrigiu na revisão; se faltar ou sobrar arquivo, oriente a reexportar para a pasta única antes de fechar.`,
    },
  ],
};
