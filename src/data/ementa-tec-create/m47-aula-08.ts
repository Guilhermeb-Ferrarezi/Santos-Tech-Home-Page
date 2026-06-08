import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 8,
  titulo: "Entrega dos Novos Assets no Portfólio",
  semana: "Semana 4",
  duracao: "1 hora",
  objetivo: `Consolidar o entregável do mês exportando todos os novos assets do Maya, importando-os na Unreal Engine, organizando a pasta do projeto e montando um quadro de apresentação com renders e screenshots in-game para o portfólio final da trilha.`,
  descricao: `Esta é a última aula do mês e o fechamento da etapa de modelagem 3D no Maya. Ao longo das semanas o aluno planejou novos itens, modelou com polígonos, adicionou detalhes, fez o acabamento e as UVs, entendeu a otimização para jogos e reduziu os polígonos antes de exportar em FBX. Agora chega o momento de juntar tudo: pegar cada asset finalizado e levá-lo até onde ele realmente vive, dentro de um jogo na Unreal Engine, deixando o conjunto pronto para ser mostrado no portfólio que encerra a trilha.

O foco desta aula é a entrega e a apresentação. Entregar significa que todos os arquivos FBX exportados na aula anterior são importados na Unreal, posicionados na cena e organizados em uma pasta limpa, com nomes claros e sem materiais quebrados. Apresentar significa transformar esse trabalho técnico em uma peça de portfólio: o aluno captura renders bonitos dos modelos e screenshots in-game mostrando os assets funcionando dentro do nível, e monta um quadro de apresentação que conta a história do conjunto.

O aluno aprende que um asset só está realmente pronto quando aparece bem dentro do jogo, não apenas na janela do Maya. Por isso a organização vira parte do ofício: nada de arquivo solto, nome confuso, textura faltando ou modelo gigante fora de escala. Cada item ganha seu lugar na pasta Content da Unreal, com convenção de nomes e uma pasta de Screenshots para o portfólio. O Claude entra como assistente de escrita, ajudando o aluno a revisar a legenda e a descrição técnica de cada asset, sem inventar o conteúdo por ele.

O fechamento é uma apresentação em roda. Cada aluno abre seu quadro de apresentação no projetor, mostra os renders dos modelos, exibe um screenshot do asset dentro da cena na Unreal e conta a maior dificuldade que superou na modelagem deste mês. Assim o entregável oficial, o conjunto de novos assets exportados, importados e documentados no portfólio, é consolidado e celebrado diante da turma.`,
  materiais: [
    `Computadores com Maya e Unreal Engine instalados, além dos arquivos FBX dos novos assets exportados na aula anterior`,
    `Pasta do projeto Unreal definida antes da aula, com uma subpasta Content/Assets criada para padronizar onde cada modelo será importado`,
    `Projetor para a demonstração da importação na Unreal e para a roda de apresentações dos alunos`,
    `Acesso ao Claude como assistente de escrita, para revisar as legendas e a descrição técnica de cada asset`,
    `Arquivo de exemplo: um quadro de apresentação modelo (render limpo, screenshot in-game, legenda e ficha técnica) para os alunos copiarem a estrutura`,
    `Folha impressa de checklist de entrega (FBX importado, escala correta, nomes padronizados, render, screenshot, legenda) para cada aluno conferir`,
    `Ferramenta de captura de tela do sistema e o atalho de High Resolution Screenshot da Unreal, para gerar imagens nítidas dos assets`,
  ],
  conceitosChave: [
    `Asset — qualquer peça pronta usada no jogo, como um modelo 3D, uma textura ou um som; aqui é cada item modelado no Maya.`,
    `FBX — formato de arquivo que carrega o modelo 3D, a malha e as UVs do Maya para a Unreal, servindo de ponte entre as ferramentas.`,
    `Importar — trazer um arquivo externo, como o FBX, para dentro do projeto da Unreal, transformando-o em um asset utilizável na engine.`,
    `Content Browser — o painel da Unreal onde ficam todos os assets do projeto, como um explorador de arquivos próprio da engine.`,
    `Convenção de nomes — regra combinada para nomear arquivos (por exemplo SM_ para Static Mesh), deixando a pasta organizada e fácil de entender.`,
    `Render — imagem caprichada do modelo, gerada para mostrar a qualidade do trabalho, usada como vitrine no portfólio.`,
    `Screenshot in-game — captura da tela com o asset funcionando dentro da cena do jogo, provando que ele realmente roda na engine.`,
  ],
  treinamento: `## O que o professor precisa saber

Mesmo sem dominar o Maya ou a Unreal, você conduz esta aula porque o trabalho pesado já foi feito: os assets foram modelados, otimizados e exportados em FBX na aula 7. Seu papel é guiar a importação e a montagem do portfólio. Na Unreal, importar é simples: abre-se o Content Browser, clica-se no botão Import (ou arrasta-se o FBX para dentro da pasta), confirma-se as opções e o modelo aparece como Static Mesh. Antes da aula, faça o teste completo: importe o FBX de exemplo, arraste-o para o nível, confirme que a escala parece certa e gere um High Resolution Screenshot. Tenha em mãos o quadro de apresentação modelo. Lembre que o Claude é assistente de escrita: o aluno escreve a legenda e a ficha técnica, e pede ao Claude para revisar clareza e ortografia, nunca para inventar o texto.

## Passo a passo da aula (ritmo 10/15/25/10)

Aquecimento e revisão (10 min): retome o mês inteiro. Pergunte: "O que cada um modelou e por que reduzimos os polígonos antes de exportar?" Conduza a resposta passando por planejamento, modelagem, detalhes, UVs, otimização e exportação em FBX. No projetor, abra a pasta com os FBX de exemplo. Diga que hoje vamos levar os assets para dentro do jogo e montar o portfólio.

Conteúdo novo guiado (15 min): demonstre a importação na Unreal. No Content Browser, abra a pasta Content/Assets e clique em Import. Selecione o FBX, confirme as opções de importação (mantenha Import Mesh marcado) e clique em Import All. O modelo aparece como Static Mesh; arraste-o para a janela do nível. Cheque a escala comparando com um objeto conhecido. Renomeie o asset com a convenção SM_NomeDoItem. Em seguida, com a câmera bem posicionada, gere uma imagem nítida pelo menu Window e a opção High Resolution Screenshot. Mostre o quadro de apresentação modelo e explique cada campo.

Mão na massa (25 min): cada aluno importa os próprios FBX para a pasta Content/Assets, posiciona os modelos na cena, ajusta a escala, renomeia com a convenção combinada e organiza tudo em uma pasta limpa. Depois captura ao menos um render e um screenshot in-game de cada asset e monta o quadro de apresentação no portfólio. Quem terminar pede ao Claude para revisar as legendas. Circule conferindo escala, nomes e materiais.

Desafio e compartilhar (10 min): roda de apresentações no projetor. Cada aluno abre o quadro de apresentação, mostra os renders, exibe um screenshot do asset dentro da cena e conta a maior dificuldade que superou na modelagem. Celebre o fechamento do conjunto de assets e da etapa.

## Como explicar de forma clara (linguagem para a idade)

Use a imagem da mudança de casa: "o asset morava no Maya; agora ele se muda para a Unreal, que é onde o jogo de verdade acontece". Para a organização, diga: "imagine procurar uma camiseta num quarto bagunçado; o nome certo no arquivo é a etiqueta da gaveta". Compare render e screenshot: "o render é a foto de estúdio do seu modelo, bonita e limpa; o screenshot in-game é a foto dele trabalhando, dentro do jogo". Reforce o Claude como revisor, não autor: "você é quem cria e descreve; o Claude é o editor que ajuda a deixar a legenda mais clara depois que você escreveu".

## Erros comuns e como ajudar

O erro mais comum é a escala errada: o asset aparece minúsculo ou gigante. Oriente comparar com um cubo ou personagem padrão e, se preciso, reexportar do Maya em centímetros. Outro clássico é a textura faltando, deixando o modelo cinza ou rosa; confira se o material foi atribuído e, no caso simples, aplique um material básico na Unreal. Muitos esquecem a convenção de nomes e deixam arquivos como import1; exija o padrão SM_NomeDoItem antes de seguir. Screenshots escuros ou tortos são comuns; peça boa iluminação na cena e uma câmera bem enquadrada antes de capturar. Por fim, há quem deixe a legenda vazia; exija ao menos duas frases dizendo o que é o asset e onde ele é usado no jogo.`,
  exercicios: [
    {
      titulo: `Importando o FBX na Unreal`,
      tipo: `prática na ferramenta`,
      tempo: `7 minutos`,
      guiaProfessor: `Acompanhe na tela de cada aluno o caminho na Unreal: abrir o Content Browser, entrar na pasta Content/Assets, clicar em Import, selecionar o FBX e confirmar com Import All. Confira que o modelo apareceu como Static Mesh e que nenhum aviso de erro grave foi mostrado.`,
      atividade: `Abra o Content Browser da Unreal, entre na pasta Content/Assets e clique em Import. Selecione o arquivo FBX que você exportou na aula passada, confirme as opções mantendo Import Mesh marcado e clique em Import All. Confira que o modelo apareceu na pasta como um Static Mesh.`,
      gabarito: `O FBX é importado e vira um Static Mesh visível na pasta Content/Assets. Sinal de acerto: ao dar duplo clique no asset, abre o editor de mesh mostrando o modelo, sem aviso de erro grave. Caso apareça aviso de smoothing groups, basta deixar a opção Import Normals ajustada e reimportar.`,
    },
    {
      titulo: `Posicionando na cena e ajustando a escala`,
      tipo: `prática na ferramenta`,
      tempo: `9 minutos`,
      guiaProfessor: `Mostre como arrastar o Static Mesh para a janela do nível e comparar o tamanho com um objeto conhecido, como o personagem padrão ou um cubo de 1 metro. Se o asset estiver muito fora de escala, oriente reexportar do Maya na unidade correta em vez de só esticar na Unreal.`,
      atividade: `Arraste o seu Static Mesh para a janela do nível. Compare o tamanho dele com um cubo ou com o personagem padrão. Se estiver muito pequeno ou muito grande, ajuste a escala ou anote para reexportar do Maya em centímetros. Deixe o asset apoiado no chão da cena.`,
      gabarito: `O asset aparece na cena em uma escala coerente com o cenário: uma cadeira do tamanho de uma cadeira, uma espada do tamanho de uma espada. Sinal de acerto: colocado ao lado do personagem padrão, a proporção faz sentido. Se precisou de escala muito diferente de 1, o certo é reexportar do Maya na unidade correta.`,
    },
    {
      titulo: `Organizando a pasta com convenção de nomes`,
      tipo: `organização de projeto`,
      tempo: `10 minutos`,
      guiaProfessor: `Reforce a regra de nomes combinada: SM_ para Static Mesh, M_ para material, T_ para textura. Confira que cada asset foi renomeado e movido para a pasta correta, sem arquivos soltos com nomes como import1. Uma pasta limpa é parte da nota de entrega.`,
      atividade: `Renomeie cada asset importado seguindo a convenção combinada: SM_NomeDoItem para os modelos, M_NomeDoItem para materiais e T_NomeDoItem para texturas. Organize todos na pasta Content/Assets, em subpastas por tipo se fizer sentido, e apague qualquer arquivo solto ou duplicado.`,
      gabarito: `Exemplo de pasta organizada: SM_Espada, SM_Escudo, SM_Bau, M_Metal, T_Metal_Base. Todos os assets seguem o padrão de prefixos, estão na pasta correta e não há arquivos com nomes genéricos como import1 ou cópias duplicadas. Sinal de acerto: outra pessoa abre a pasta e entende o que é cada arquivo só pelo nome.`,
    },
    {
      titulo: `Capturando render e screenshot in-game`,
      tipo: `produção de imagem`,
      tempo: `12 minutos`,
      guiaProfessor: `Ensine a posicionar bem a câmera e a iluminar a cena antes de capturar. Para o render, mostre o menu Window e a opção High Resolution Screenshot, que gera uma imagem nítida. Para o screenshot in-game, peça que o asset apareça dentro da cena jogável. Confira que as imagens estão claras e bem enquadradas.`,
      atividade: `Para cada asset, gere duas imagens. Primeiro um render limpo: posicione a câmera, ilumine bem e use Window e a opção High Resolution Screenshot. Depois um screenshot in-game: deixe o asset dentro da cena, entre no modo de jogo e capture a tela mostrando o modelo funcionando no nível.`,
      gabarito: `O aluno entrega, por asset, um render nítido com boa iluminação e enquadramento e um screenshot in-game mostrando o modelo dentro da cena. Sinal de acerto: as imagens não estão escuras, tortas nem cortadas, e dá para reconhecer claramente o que é o asset e onde ele aparece no jogo.`,
    },
    {
      titulo: `Montando o quadro de apresentação no portfólio`,
      tipo: `projeto curto`,
      tempo: `12 minutos`,
      guiaProfessor: `Esta atividade consolida o entregável do mês. Confira no quadro de cada aluno: render, screenshot in-game, legenda e ficha técnica de cada asset, além dos nomes padronizados. Reforce o Claude apenas como revisor das legendas. Conduza a roda no projetor e marque a entrega de cada aluno.`,
      atividade: `Monte o quadro de apresentação no portfólio reunindo, para cada asset, o render, o screenshot in-game, uma legenda com pelo menos duas frases (o que é e onde é usado) e uma ficha técnica com contagem de polígonos e tamanho da textura. Peça ao Claude para revisar as legendas com este pedido: "Revise a clareza e a ortografia destas legendas dos meus assets, sem mudar o sentido nem inventar dados." Depois apresente para a turma: mostre os renders, exiba um screenshot in-game e conte a maior dificuldade que superou na modelagem.`,
      gabarito: `Exemplo de entrada de quadro: "Asset: SM_Espada. Render e screenshot in-game incluídos. Legenda: espada curta de ferro usada pelo herói no início do jogo; foi modelada com baixa contagem de polígonos para rodar bem. Ficha técnica: 1.200 polígonos, textura 1024 por 1024, exportada em FBX do Maya." O quadro reúne todos os assets com render, screenshot, legenda de pelo menos duas frases e ficha técnica preenchida, com legendas revisadas pelo Claude mas escritas pelo aluno. Na apresentação o aluno mostra as imagens e cita uma dificuldade superada, como ajustar a escala na importação. Esse quadro é o entregável oficial do mês, fechando o conjunto de novos assets e a etapa.`,
    },
  ],
};
