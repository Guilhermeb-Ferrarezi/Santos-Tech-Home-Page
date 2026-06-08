import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 3,
  titulo: "Do Maya para a Impressão",
  semana: "Semana 2",
  duracao: "1 hora",
  objetivo: `Exportar o modelo do personagem feito no Maya no formato certo (STL ou OBJ) e entender o que é uma malha fechada, preparando o arquivo para importar no Orca Slicer.`,
  descricao: `Nesta aula o aluno descobre a ponte entre dois mundos que até agora pareciam separados: a modelagem 3D no Maya e a impressão 3D no Orca Slicer. Até este ponto, o personagem só existia dentro do programa de modelagem, girando na tela. Agora ele precisa virar um arquivo que a impressora consiga entender. Esse arquivo é como uma "receita" que descreve a forma do modelo em milhares de pequenos triângulos.

O foco da aula é o ato de exportar. No Maya, exportar significa salvar o modelo em um formato universal, que outros programas conseguem abrir. Os dois formatos mais usados para impressão são o STL e o OBJ. O STL guarda só a forma (a malha), enquanto o OBJ pode guardar também cores e materiais. Para imprimir em uma cor só, o STL é mais do que suficiente, e por isso será o nosso formato principal.

O segundo grande conceito é a malha fechada, também chamada de "watertight" (à prova d'água). Um modelo só imprime bem quando sua superfície é totalmente fechada, sem buracos nem furos invisíveis, como se fosse um balão que segura ar por dentro. Se houver um buraco na malha, a impressora "se perde" e não sabe o que é dentro e o que é fora. O aluno vai aprender a enxergar esses problemas e a confirmar que seu personagem está pronto antes de tentar imprimir.

Ao final, cada aluno terá o próprio personagem exportado em STL, salvo numa pasta organizada, pronto para ser importado no Orca Slicer na próxima aula. É um momento importante: o trabalho de modelagem sai do Maya e dá o primeiro passo rumo ao objeto físico que eles vão levar para casa no fim do mês.`,
  materiais: [
    `Computadores com Maya instalado e com o Orca Slicer já aberto numa janela (um por aluno)`,
    `Projetor ou TV grande para o professor mostrar os menus do Maya passo a passo`,
    `Arquivo de Maya de exemplo com um personagem simples já modelado (.mb ou .ma), para quem não terminou o próprio`,
    `Um arquivo STL de exemplo já exportado, e um arquivo STL "com buraco" de propósito, para mostrar a diferença`,
    `Uma pasta combinada na área de trabalho ou no servidor, chamada "Modelos para imprimir", onde todos vão salvar`,
    `Folha impressa com o passo a passo da exportação (menu File, Export Selection, formato STL) colada na bancada`,
    `Impressora 3D ligada e visível na sala, como referência do destino final do arquivo`,
  ],
  conceitosChave: [
    `Exportar — salvar o modelo num formato universal (como STL ou OBJ) para que outros programas, como o Orca Slicer, consigam abrir.`,
    `Malha (mesh) — a "casca" do modelo formada por muitos triângulos ligados que descrevem a superfície do personagem.`,
    `Malha fechada (watertight) — uma malha sem buracos nem furos, que seguraria água por dentro; é a condição para imprimir bem.`,
    `STL — formato de arquivo que guarda só a forma do modelo, ideal para impressão em uma cor; é o nosso formato principal.`,
    `OBJ — outro formato de exportação que pode guardar cores e materiais além da forma; útil quando há textura.`,
    `Buraco (hole) — uma falha na malha onde faltam triângulos, deixando a superfície aberta e confundindo a impressora.`,
    `Triângulo (face) — a menor peça da malha; juntando milhares deles, formamos qualquer curva ou detalhe do personagem.`,
  ],
  treinamento: `## O que o professor precisa saber

Exportar do Maya é simples quando você sabe o caminho. Para gerar um STL, o Maya precisa do plugin de tradução já ativado. Vá em Windows, depois Settings/Preferences, depois Plug-in Manager e marque a caixa "Loaded" ao lado de um exportador de STL (no Maya costuma aparecer como "stlTranslator" ou similar). Se não houver STL, use OBJ, que sempre está disponível e também serve para impressão. O caminho de exportar é: selecione o personagem na cena, vá em File e escolha "Export Selection". Na janela que abre, no campo "Files of type", escolha STL (ou OBJexport). Dê um nome sem acentos nem espaços (por exemplo "heroi_joao") e salve na pasta combinada. "Export Selection" exporta só o que está selecionado, evitando exportar a grade ou a câmera sem querer.

Malha fechada significa que a superfície não tem buracos. No Maya você confere isso pelo menu Mesh, opção "Cleanup", ou olhando se não há bordas abertas. Para esta aula, basta uma checagem visual girando o modelo: se aparecer um "vazio" por onde se vê o interior, há um buraco. Não precisa dominar reparos avançados agora; o objetivo é o aluno reconhecer o problema e saber que precisa fechar antes de imprimir.

## Passo a passo da aula (ritmo 10/15/25/10)

Aquecimento (10 min): retome a semana anterior com perguntas. "Onde mora o nosso personagem hoje?" (no Maya). "Como a impressora vai conhecer ele?" Mostre no projetor o personagem girando no Maya e a impressora 3D ligada na sala, conectando os dois mundos. Peça que cada aluno abra o Maya e seu próprio personagem (ou o arquivo de exemplo).

Conteúdo novo guiado (15 min): no projetor, explique o que é uma malha mostrando o personagem em modo wireframe (tecla 4 para ver as linhas dos triângulos, tecla 5 para voltar ao sólido). Mostre o arquivo STL "com buraco" e o STL bom, girando os dois para a turma ver a diferença. Depois, ensine o caminho da exportação: clique no personagem para selecioná-lo, vá em File, "Export Selection", escolha STL em "Files of type", digite um nome sem acentos e salve na pasta "Modelos para imprimir".

Mão na massa (25 min): cada aluno seleciona seu personagem, confere girando que não há buracos visíveis e exporta em STL pela mesma sequência (File, Export Selection, STL, nome sem acento, pasta combinada). Em seguida, peça que abram a pasta no explorador de arquivos e confirmem que o arquivo .stl está lá. Circule pela sala conferindo nomes de arquivo e a seleção correta.

Desafio e compartilhar (10 min): desafie quem terminou a também exportar uma cópia em OBJ e comparar os dois arquivos na pasta. Encerre com uma rodada rápida: dois ou três alunos mostram no projetor o caminho do menu que usaram e dizem em voz alta o nome do arquivo que salvaram.

## Como explicar de forma clara (linguagem para a idade)

Use a comparação do balão de água. Diga que a malha do personagem é como a casca de um balão: se ela estiver inteira, segura água; se tiver um furinho, a água escapa. A impressora só imprime balões que seguram água. Explique que exportar é como "tirar uma foto da forma" e guardar num formato que qualquer programa entende, igual a um arquivo de música que toca em vários aparelhos. O STL guarda só o formato, como um molde de gelo; o OBJ pode guardar também as cores, como uma foto colorida. Sempre que falar uma palavra em inglês (export, mesh, watertight), diga logo o significado em português.

## Erros comuns e como ajudar

O erro mais comum é exportar a cena toda em vez de só o personagem; reforce sempre "selecione primeiro, depois Export Selection". Outro tropeço é usar acentos ou espaços no nome do arquivo, o que pode quebrar a importação no Orca Slicer; padronize nomes simples com letras e o underline. Alguns não acham o STL na lista de formatos: nesse caso, ative o plugin no Plug-in Manager ou use OBJ. Há quem salve em qualquer lugar e depois não encontre o arquivo; combine a pasta única e confira juntos. Por fim, se o aluno achar um buraco na malha, tranquilize: anote para corrigir no Maya e siga com o arquivo de exemplo, sem travar a aula.`,
  exercicios: [
    {
      titulo: `Vendo a malha por dentro`,
      tipo: `prática na ferramenta`,
      tempo: `7 minutos`,
      guiaProfessor: `Mostre antes no projetor as teclas 4 (wireframe) e 5 (sólido). Garanta que cada aluno consiga alternar e enxergar os triângulos da superfície do próprio personagem.`,
      atividade: `Abra seu personagem no Maya, aperte a tecla 4 para ver a malha em linhas (wireframe) e gire o modelo. Depois aperte a tecla 5 para voltar ao modo sólido. Observe quantos triângulos formam a casca.`,
      gabarito: `O aluno consegue alternar entre wireframe (linhas) e sólido com as teclas 4 e 5, e descreve a malha como uma casca feita de muitos triângulos ligados. Não há resposta única, mas ele deve reconhecer a malha como a superfície do modelo.`,
    },
    {
      titulo: `Exportando meu personagem em STL`,
      tipo: `prática na ferramenta`,
      tempo: `10 minutos`,
      guiaProfessor: `Acompanhe pelo projetor o caminho File, Export Selection, STL. Confira que cada aluno selecionou só o personagem e usou nome sem acentos, salvando na pasta combinada.`,
      atividade: `Selecione apenas o seu personagem na cena. Vá em File, escolha "Export Selection", em "Files of type" selecione STL, dê um nome sem acentos nem espaços (ex.: meu_heroi) e salve na pasta "Modelos para imprimir".`,
      gabarito: `Existe um arquivo .stl com nome simples (sem acentos nem espaços) dentro da pasta "Modelos para imprimir". O arquivo contém só o personagem, pois foi usado "Export Selection" com o modelo selecionado.`,
    },
    {
      titulo: `Caça ao buraco`,
      tipo: `desafio`,
      tempo: `8 minutos`,
      guiaProfessor: `Tenha à mão o STL bom e o STL "com buraco" de propósito. Deixe os alunos girarem os dois e descobrirem qual deles imprimiria bem, explicando o porquê.`,
      atividade: `Compare dois arquivos de exemplo girando cada um na tela: um tem a malha fechada e o outro tem um buraco. Descubra qual deles está pronto para imprimir e aponte onde está a falha no modelo com problema.`,
      gabarito: `O aluno identifica o modelo de malha fechada como o que está pronto para imprimir e localiza o buraco no outro, explicando que por ali a impressora "não saberia" o que é dentro ou fora. O modelo bom é o watertight.`,
    },
    {
      titulo: `Conferência em dupla`,
      tipo: `em dupla`,
      tempo: `8 minutos`,
      guiaProfessor: `Forme duplas e peça que cada aluno revise o arquivo do colega. Um confere o do outro pela lista de checagem em voz alta, depois trocam de papel.`,
      atividade: `Em dupla, confiram juntos o arquivo de cada um usando uma lista: 1) é STL? 2) o nome não tem acentos nem espaços? 3) está na pasta certa? 4) girando, a malha parece fechada, sem buracos? Marquem o que estiver certo.`,
      gabarito: `Cada dupla confirma os quatro itens da lista para os dois arquivos: formato STL, nome sem acentos nem espaços, salvo na pasta combinada e malha sem buracos visíveis. Qualquer item faltando é anotado para corrigir.`,
    },
    {
      titulo: `Roda de conversa: do Maya para a impressão`,
      tipo: `roda de conversa`,
      tempo: `7 minutos`,
      guiaProfessor: `Conduza com perguntas abertas e deixe dois ou três alunos mostrarem o caminho do menu no projetor. Valorize quem explicar a malha fechada com palavras próprias.`,
      atividade: `Em roda, cada aluno explica com suas palavras por que precisamos exportar o personagem do Maya, o que diferencia o STL do OBJ e o que é uma malha fechada. Conte também qual nome deu ao seu arquivo.`,
      gabarito: `Cada aluno explica que exportamos para que a impressora e o Orca Slicer entendam o modelo, que o STL guarda só a forma e o OBJ pode guardar cores, e que malha fechada é a superfície sem buracos (como um balão que segura água).`,
    },
  ],
};
