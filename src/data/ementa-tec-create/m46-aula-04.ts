import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 4,
  titulo: "Importando e ajustando assets na cena",
  semana: "Semana 2",
  duracao: "1 hora",
  objetivo: `Importar os modelos FBX feitos no Maya para o Content Browser da Unreal, corrigir os problemas comuns de escala, materiais e colisão, criar materiais simples na engine e posicionar os modelos dentro da cena que será o entregável do mês.`,
  descricao: `Na aula passada o aluno preparou os modelos no Maya e exportou cada um deles no formato FBX, que é a "caixa de transporte" capaz de levar a geometria de um programa para o outro. Hoje essa caixa chega na Unreal Engine. A grande ideia da aula é simples de dizer e divertida de fazer: trazer os modelos do Maya para dentro do projeto da Unreal, perceber que quase sempre alguma coisa vem torta no caminho, e aprender a consertar com calma. Importar não é só clicar em um botão e pronto; é checar a escala, conferir o material e garantir que o objeto tem colisão para não ser atravessado.

O lugar onde tudo isso acontece é o Content Browser, a janela na parte de baixo do editor que funciona como uma estante de prateleiras do projeto. É lá que ficam guardados os modelos, as texturas e os materiais. Quando o aluno arrasta um arquivo FBX para dentro de uma pasta do Content Browser, a Unreal abre uma janela de importação com várias opções. Nesta aula o professor mostra quais opções realmente importam para um iniciante e ensina a deixar as outras como estão, para não assustar a turma com dezenas de caixinhas.

Depois de importar, vêm os três problemas clássicos que todo artista enfrenta. O primeiro é a escala: o modelo aparece gigante ou minúsculo, porque Maya e Unreal medem o mundo em unidades diferentes. O segundo é o material perdido: o objeto chega cinza, sem cor, porque o material do Maya nem sempre viaja junto. O terceiro é a colisão: sem ela, o personagem atravessa o objeto como se fosse fantasma. Para cada problema existe um conserto direto, e o aluno vai praticar os três.

A segunda parte da aula é mais criativa. Em vez de só corrigir, o aluno cria do zero um material simples dentro da Unreal usando o Material Editor, escolhe uma cor base e aplica esse material no modelo importado. Ao final, cada aluno terá pelo menos um modelo do Maya importado, com escala certa, material aplicado e colisão funcionando, já posicionado na cena que será entregue no fim do mês. É o momento em que o trabalho de modelagem ganha vida dentro do mundo do jogo.`,
  materiais: [
    `Computadores com Unreal Engine instalada e configurada com projeto C++, um por aluno`,
    `Projetor ou TV para o professor demonstrar o editor da Unreal e o Content Browser em tela grande`,
    `Arquivos de exemplo: dois modelos no formato FBX exportados do Maya (por exemplo, uma caixa e uma coluna) para quem ainda não tem os próprios prontos`,
    `Projeto da Unreal do mês já aberto, com a cena vazia que será o entregável, para os alunos posicionarem os modelos`,
    `Quadro branco para desenhar a diferença entre malha visível e colisão invisível`,
    `Mouse com scroll para facilitar a navegação na janela Viewport da Unreal`,
    `Folha impressa com o resumo dos três problemas de importação (escala, material, colisão) e como resolver cada um`,
  ],
  conceitosChave: [
    `Content Browser — a janela na parte de baixo do editor que guarda todos os arquivos do projeto, como uma estante de prateleiras com modelos, texturas e materiais.`,
    `FBX — formato de arquivo que transporta a geometria de um modelo do Maya para a Unreal, levando junto a forma e, quando dá certo, o material.`,
    `Static Mesh — o nome que a Unreal dá a um modelo 3D parado que foi importado, como uma caixa, uma parede ou uma coluna.`,
    `Escala (Import Uniform Scale) — o ajuste de tamanho na importação, necessário porque Maya e Unreal medem o mundo em unidades diferentes e o modelo pode chegar grande ou pequeno demais.`,
    `Material — a "tinta" do objeto, que define a cor e o brilho da superfície; quando ele se perde na importação, o objeto chega cinza.`,
    `Material Editor — a janela onde o aluno cria um material novo ligando blocos (nós) para definir cor e brilho da superfície.`,
    `Colisão (Collision) — a forma invisível que envolve o modelo e impede o personagem de atravessá-lo; sem ela, o objeto vira fantasma.`,
  ],
  treinamento: `## O que o professor precisa saber

O Content Browser é a estante do projeto, a janela larga na parte de baixo do editor da Unreal. É nele que os modelos importados ficam guardados. Importar um FBX é arrastar o arquivo do Maya para uma pasta dentro dessa janela; a Unreal então abre a janela FBX Import Options. Para um iniciante, três opções bastam: deixe "Import Uniform Scale" começando em 1.0 (mude depois se o modelo vier grande ou pequeno), mantenha "Generate Missing Collision" marcado e clique em "Import All". O modelo importado vira um Static Mesh, que é como a Unreal chama um modelo parado.

Existem três problemas clássicos. Escala: Maya e Unreal medem o mundo de forma diferente, então o modelo pode chegar gigante ou minúsculo; o conserto é mudar o Import Uniform Scale (por exemplo, 0.1 se vier grande, ou reimportar) ou ajustar a escala no painel Details depois. Material perdido: o objeto chega cinza porque o material do Maya nem sempre viaja junto; o conserto é criar um material na Unreal e aplicá-lo. Colisão: sem ela o personagem atravessa o objeto; o conserto é abrir o Static Mesh com dois cliques e usar o menu Collision para adicionar uma caixa simples (Add Box Simplified Collision). Antes da aula, importe um dos FBX de exemplo e teste os três consertos.

## Passo a passo da aula

Aquecimento (10 min): retome a aula passada perguntando o que é um arquivo FBX e por que ele serve de ponte entre Maya e Unreal. No projetor, mostre a janela Content Browser e explique que ela é a estante do projeto. Crie uma pasta nova clicando com o botão direito dentro dela e escolhendo New Folder, com o nome Modelos.

Conteúdo novo guiado (15 min): arraste um FBX de exemplo para a pasta Modelos. Na janela FBX Import Options, aponte os três campos importantes (Import Uniform Scale, Generate Missing Collision, Import All) e clique em Import All. Arraste o Static Mesh do Content Browser para a Viewport e mostre que ele aparece gigante. Selecione-o, vá ao painel Details à direita e ajuste a Scale (por exemplo, 0.1 em cada eixo) até o tamanho ficar certo. Em seguida, mostre o objeto cinza e diga que falta material. Crie um material: botão direito no Content Browser, Material, nome MeuMaterial. Dê dois cliques para abrir o Material Editor e, no nó principal, defina a cor: clique com o botão direito no fundo, adicione um nó Constant3Vector (atalho: tecla 3 e clique), escolha uma cor e ligue a saída dele no pino Base Color. Salve e arraste o material sobre o objeto na Viewport. Por fim, dê dois cliques no Static Mesh, abra o menu Collision e escolha Add Box Simplified Collision para o objeto deixar de ser atravessado.

Mão na massa (25 min): cada aluno importa seu próprio FBX (ou o de exemplo) para a pasta Modelos, ajusta a escala no Details, cria um material com cor própria e aplica no modelo, adiciona colisão de caixa e posiciona o objeto na cena do mês. Circule pela sala conferindo escala, cor e colisão um por um.

Desafio e compartilhar (10 min): quem terminar importa um segundo modelo e cria um segundo material com outra cor, montando uma pequena composição na cena. Dois alunos mostram na tela a importação corrigida com escala, material e colisão funcionando.

## Como explicar de forma clara

Diga que importar é como receber uma encomenda pelo correio: o pacote (o FBX) chega, mas às vezes vem amassado e a gente precisa arrumar. A escala é o tamanho do brinquedo que saiu da caixa grande demais; a gente só "encolhe" mudando o número da escala. O material é a tinta do objeto: quando ele chega cinza, é porque a tinta ficou para trás no Maya, então pintamos de novo aqui na Unreal. A colisão é um "corpo invisível" em volta do modelo, igual a uma caixa de vidro que ninguém vê mas que segura o personagem; sem ela, o objeto vira fantasma e todo mundo atravessa.

## Erros comuns e como ajudar

Erro 1: o modelo não aparece na Viewport porque ficou minúsculo ou enorme; ajuste o Import Uniform Scale na hora de importar ou a Scale no painel Details. Erro 2: o objeto continua cinza; lembre que criar o material não basta, é preciso arrastar o material sobre o objeto para aplicar. Erro 3: o personagem atravessa o modelo; abra o Static Mesh com dois cliques e adicione Add Box Simplified Collision no menu Collision. Erro 4: o aluno solta o FBX fora de uma pasta e o arquivo se perde; oriente sempre soltar dentro da pasta Modelos. Erro 5: a cor não muda no Material Editor porque o nó de cor não foi ligado no pino Base Color; confira o fio entre o nó e o pino. Erro 6: o aluno esquece de salvar o material ou o nível; reforce o botão Save no editor e o Save Current Level.`,
  exercicios: [
    {
      titulo: `O que é a estante do projeto?`,
      tipo: `roda de conversa`,
      tempo: `6 min`,
      guiaProfessor: `No projetor, abra o Content Browser e mostre as pastas. Conduza a turma a comparar essa janela com uma estante e a explicar onde os modelos importados vão parar, antes de dar a resposta.`,
      atividade: `Olhando a janela que o professor mostra na tela, diga em voz alta como ela se chama, para que ela serve e o que acontece quando você arrasta um arquivo FBX para dentro de uma pasta dela.`,
      gabarito: `A janela é o Content Browser, a estante de arquivos do projeto, onde ficam modelos, texturas e materiais. Ao arrastar um FBX para uma pasta, a Unreal abre a janela de importação e, ao confirmar, o modelo vira um Static Mesh guardado naquela pasta. Acerta quem nomeia o Content Browser e explica que ele guarda os arquivos e recebe os modelos importados.`,
    },
    {
      titulo: `Importando o primeiro modelo`,
      tipo: `prática na ferramenta`,
      tempo: `8 min`,
      guiaProfessor: `Acompanhe cada aluno. Mostre o caminho: criar a pasta Modelos com o botão direito (New Folder), arrastar o FBX para dentro dela e, na janela FBX Import Options, clicar em Import All. Reforce que o resultado é um Static Mesh.`,
      atividade: `Crie uma pasta chamada Modelos no Content Browser. Arraste um arquivo FBX (o seu ou o de exemplo) para dentro dela e, na janela de importação que abrir, clique em Import All. Confira que apareceu um novo Static Mesh dentro da pasta.`,
      gabarito: `O aluno deve ter uma pasta Modelos contendo um Static Mesh importado. Caminho correto: botão direito no Content Browser, New Folder, nome Modelos; arrastar o FBX para a pasta; na janela FBX Import Options clicar em Import All. Acerta quem termina com o modelo aparecendo como Static Mesh dentro da pasta Modelos.`,
    },
    {
      titulo: `Qual é o problema?`,
      tipo: `exercício no papel`,
      tempo: `7 min`,
      guiaProfessor: `Relembre no quadro os três problemas (escala, material perdido, colisão) e o conserto de cada um. Leia cada situação em voz alta antes de os alunos escreverem a resposta.`,
      atividade: `Para cada situação, escreva no papel qual é o problema (ESCALA, MATERIAL ou COLISAO) e como consertar: 1) o modelo aparece gigante na cena; 2) o personagem atravessa a caixa como fantasma; 3) o objeto chegou cinza, sem cor; 4) o modelo aparece tão pequeno que mal dá para ver.`,
      gabarito: `1) ESCALA, conserto: mudar o Import Uniform Scale ou a Scale no painel Details para diminuir. 2) COLISAO, conserto: abrir o Static Mesh e usar Add Box Simplified Collision no menu Collision. 3) MATERIAL, conserto: criar um material na Unreal e arrastá-lo sobre o objeto. 4) ESCALA, conserto: aumentar a escala no Details ou reimportar com outro Import Uniform Scale. Acerta quem identifica o problema certo e cita o conserto correspondente.`,
    },
    {
      titulo: `Criando e aplicando um material`,
      tipo: `prática na ferramenta`,
      tempo: `12 min`,
      guiaProfessor: `Ajude os alunos a criar o material (botão direito no Content Browser, Material), abrir o Material Editor com dois cliques, adicionar o nó de cor (Constant3Vector, atalho tecla 3) e ligar a saída no pino Base Color. Lembre de salvar e de arrastar o material sobre o objeto.`,
      atividade: `Crie um material novo no Content Browser e abra-o com dois cliques. No Material Editor, adicione um nó de cor, escolha uma cor que você gostar e ligue esse nó no pino Base Color. Salve o material e arraste-o sobre o seu modelo na Viewport para aplicá-lo.`,
      gabarito: `Passo a passo da solução: 1) botão direito no Content Browser, Material, dar um nome (por exemplo MeuMaterial); 2) dois cliques para abrir o Material Editor; 3) adicionar um nó Constant3Vector (atalho tecla 3 e clique no fundo), escolher a cor; 4) ligar a saída do nó no pino Base Color do nó principal; 5) clicar em Save; 6) arrastar o material do Content Browser sobre o modelo na Viewport. Acerta quem termina com o modelo deixando de ser cinza e ganhando a cor escolhida.`,
    },
    {
      titulo: `Modelo pronto na cena do mês`,
      tipo: `desafio`,
      tempo: `12 min`,
      guiaProfessor: `Este é o desafio que junta tudo. Garanta que cada aluno tenha o modelo com escala certa, material aplicado e colisão. Para a colisão, mostre Add Box Simplified Collision no editor do Static Mesh. Oriente a posicionar o objeto na cena entregável e a salvar o nível.`,
      atividade: `Pegue um modelo importado e deixe-o completo na cena do mês: ajuste a escala no painel Details até o tamanho ficar certo, aplique o seu material, adicione colisão de caixa pelo editor do Static Mesh e posicione o objeto em um bom lugar da cena. Por fim, salve o nível.`,
      gabarito: `Checklist da solução: escala ajustada no painel Details (Scale com valores que deixam o objeto no tamanho certo, por exemplo 0.1 em cada eixo se ele veio grande); material criado e arrastado sobre o objeto, que perde o cinza; colisão adicionada abrindo o Static Mesh com dois cliques e usando Collision, Add Box Simplified Collision; objeto posicionado na cena e nível salvo com Save Current Level. Acerta quem entrega o modelo com escala correta, cor aplicada, colisão funcionando (o personagem não atravessa) e a cena salva.`,
    },
  ],
};
