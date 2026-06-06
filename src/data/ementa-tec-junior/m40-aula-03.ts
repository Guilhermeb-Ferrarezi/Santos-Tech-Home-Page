import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 3,
  titulo: "O Que São Materiais?",
  semana: "Semana 2",
  duracao: "1 hora",
  objetivo: `Entender o que é um material no Blender e aplicar a primeira cor no item 3D que está sendo criado para a loja.`,
  descricao: `Até agora, na trilha deste mês, as crianças aprenderam a abrir o Blender e começaram a modelar o formato do seu item. Mas tem uma coisa que todo mundo percebe na hora: o modelo aparece cinza, sem graça, parecendo feito de pedra. Nesta aula a gente resolve esse mistério. A pergunta da aula é simples: por que o meu item está cinza e como deixo ele colorido? A resposta é uma palavra nova e poderosa: material.

Um material é a "roupa" do modelo 3D. O formato (a malha, que em inglês chamam de mesh) é como o corpo de um boneco, e o material é a roupa que veste esse corpo. O mesmo formato pode ser vermelho, azul, brilhante como metal ou fosco como madeira, dependendo do material que a gente coloca nele. Trocar o material não muda o formato nem um pouquinho: muda só a aparência, a cor e o acabamento. É como pintar um carrinho de brinquedo sem mexer no formato dele.

No Blender, os materiais ficam guardados em um painel especial, representado por um ícone de bolinha xadrez (uma esfera vermelha e branca). Quando a criança clica nesse ícone, abre o lugar onde nasce a cor. Ela vai criar um material novo, dar um nome e escolher a cor de base (Base Color). Na hora em que liga o modo de visualização certo, a cor aparece na tela e dá aquele "uau". Esse é o coração da aula: o momento em que o item cinza ganha vida e fica do jeito da criança.

Esta aula prepara o terreno para a próxima, em que vamos caprichar nas cores e no acabamento. Hoje o objetivo é só um, bem claro: cada criança sai da sala com o seu item já com a primeira cor aplicada. Nada de cinza no fim da aula. A ideia é que elas entendam o conceito de material e ganhem confiança de mexer no painel sozinhas, sabendo onde clicar.`,
  materiais: [
    `Computadores (um por criança) com o Blender já aberto e o item da Aula 2 carregado`,
    `Projetor ou TV para o professor mostrar a tela do Blender passo a passo`,
    `Dois exemplos prontos pelo professor: o mesmo formato em cinza e o mesmo formato já colorido, para comparar`,
    `Um objeto de verdade da sala (uma maçã de plástico, um carrinho) e uma folha de papel da mesma cor, para a analogia de "roupa do objeto"`,
    `Cartão impresso com o caminho dos cliques: ícone da bolinha xadrez, botão Novo, Cor de Base (Base Color)`,
    `Cartões coloridos (vermelho, azul, verde, amarelo) para as crianças escolherem a cor antes de aplicar`,
    `Fichas com o nome do item para a criança escrever o nome do material que vai criar`,
  ],
  conceitosChave: [
    `Material — é a roupa do modelo 3D; muda a cor e o acabamento, mas não muda o formato.`,
    `Malha (mesh) — é o formato do modelo, o corpo do boneco que vai vestir a roupa.`,
    `Cinza padrão — a cor sem graça que o Blender coloca quando o objeto ainda não tem material nenhum.`,
    `Cor de Base (Base Color) — a cor principal do material; é a primeira cor que a gente escolhe.`,
    `Painel de Materiais — a aba com ícone de bolinha xadrez (esfera vermelha e branca) onde a cor nasce.`,
    `Botão Novo (New) — o botão que cria um material do zero para colocar no objeto.`,
    `Visualização com Material (Material Preview) — o modo que faz a cor aparecer de verdade na tela.`,
  ],
  treinamento: `## O que o professor precisa saber

Você não precisa ser especialista em Blender. Precisa entender só uma ideia: o formato e o material são coisas separadas. O formato é a malha (o "corpo"); o material é a "roupa" (cor e acabamento). Quando um objeto não tem material, o Blender mostra ele cinza. Nosso trabalho hoje é tirar esse cinza aplicando a primeira cor. Antes da aula, abra o Blender com um cubo simples e treine o caminho três vezes: clique no objeto, vá ao ícone de bolinha xadrez (chamado Material Properties, fica na coluna de abas à direita), clique em Novo (New), abra a Cor de Base (Base Color) e escolha uma cor. Por último, no canto superior direito da janela 3D (a Viewport), troque o modo de sombreamento para Material Preview (a terceira bolinha). É essa troca que faz a cor aparecer.

## Passo a passo da aula (ritmo 10/15/25/10)

Aquecimento (10 min): mostre no projetor o item cinza e pergunte: "Por que ele está sem cor?". Ouça os palpites. Levante a maçã de plástico e a folha colorida e diga que o formato é uma coisa e a cor é outra. Apresente a palavra do dia: material.

Conteúdo novo guiado (15 min): compartilhe sua tela. Clique uma vez no objeto (ele fica com a borda laranja, ou seja, selecionado). Na coluna de abas à direita, aponte o ícone da bolinha xadrez vermelha e branca e clique nele. Mostre o botão Novo (New) e clique: aparece um material chamado "Material". Mostre a barrinha Cor de Base (Base Color), clique nela e abra a roda de cores. Escolha um vermelho bem forte. Aqui as crianças ainda não veem mudar: explique que falta "ligar a luz". Vá ao canto superior direito da Viewport e clique na terceira esferinha (Material Preview). A cor aparece. Faça um "uau" junto com a turma.

Mão na massa (25 min): cada criança repete no seu item. Passe de mesa em mesa. Verifique três coisas: o objeto está selecionado (borda laranja), o material foi criado com o botão Novo, e o modo Material Preview está ligado. Peça que cada uma escolha a cor que combina com o item dela e dê um nome ao material (clicando duas vezes no nome "Material" e digitando, por exemplo, "VermelhoEspada"). Mande salvar com Ctrl+S.

Desafio e compartilhar (10 min): desafio "troca-troca": cada criança muda a cor do material duas vezes e percebe que o formato continua igual. Depois, uma volta rápida: cada um mostra o item colorido na tela e diz a cor e o nome do material.

## Como explicar para crianças

Use a analogia da roupa o tempo todo: "O formato é o corpo, o material é a roupa. Trocar a roupa não muda o corpo." Outra analogia boa é pintura: "É como pintar um carrinho de madeira; o carrinho continua igual, só fica colorido." Para o modo Material Preview, diga que é "ligar a luz da cor": sem ele, a cor está lá escondida, a gente só não enxerga ainda.

## Erros comuns e como ajudar

O erro mais comum é a criança esquecer de selecionar o objeto: sem a borda laranja, o painel fica sem o botão Novo. Peça para clicar uma vez no item. Outro erro: aplicar a cor mas continuar no modo cinza (Solid), achando que não funcionou; lembre de trocar para Material Preview no canto da Viewport. Tem também quem clique em Novo várias vezes e crie vários materiais: mostre que basta um. E quem confunde mover a câmera com pintar: relembre que a cor está no painel da bolinha xadrez, não na tela 3D. Se a cor sair muito clarinha, mostre como arrastar o ponto na roda de cores para uma área mais viva.`,
  exercicios: [
    {
      titulo: `Roupa ou corpo?`,
      tipo: `Aquecimento oral`,
      tempo: `5 min`,
      guiaProfessor: `Faça em roda, sem computador. Mostre objetos da sala e pergunte o que é formato e o que é cor. O objetivo é firmar a ideia de que material é a "roupa" e não muda o formato.`,
      atividade: `O professor pergunta: "Se eu pintar este carrinho de azul, o formato dele muda?" e "O que é a roupa do modelo no Blender: o formato ou a cor?". Cada criança responde uma.`,
      gabarito: `O formato não muda quando a gente pinta; só a aparência muda. A "roupa" do modelo é a cor e o acabamento, ou seja, o material. O formato é a malha (mesh).`,
    },
    {
      titulo: `Achando a bolinha xadrez`,
      tipo: `Prática guiada`,
      tempo: `8 min`,
      guiaProfessor: `Acompanhe pela tela compartilhada. Garanta que todos selecionem o objeto (borda laranja) antes de procurar o ícone. Confirme criança por criança que o painel de Materiais abriu.`,
      atividade: `Selecione o seu item com um clique. Na coluna de abas à direita, encontre o ícone da bolinha xadrez vermelha e branca e clique nele. Levante a mão quando o painel de Materiais abrir.`,
      gabarito: `Primeiro clica-se no objeto até a borda ficar laranja. Depois clica-se no ícone de esfera xadrez (Material Properties), na coluna de abas à direita. O painel de Materiais aparece, mostrando o botão Novo (New).`,
    },
    {
      titulo: `Minha primeira cor`,
      tipo: `Mão na massa`,
      tempo: `12 min`,
      guiaProfessor: `Este é o coração da aula. Verifique os três passos: material criado com Novo, cor escolhida na Cor de Base e modo Material Preview ligado. Ninguém termina com o item cinza.`,
      atividade: `No painel de Materiais, clique em Novo. Clique na barrinha Cor de Base (Base Color) e escolha a cor que combina com o seu item. No canto superior direito da janela 3D, clique na terceira esferinha (Material Preview) para a cor aparecer.`,
      gabarito: `Clica-se em Novo para criar o material. Em Cor de Base (Base Color) escolhe-se a cor. Para ver, troca-se o sombreamento da Viewport para Material Preview (terceira esfera, no canto superior direito). O item aparece colorido, sem cinza.`,
    },
    {
      titulo: `Batizando o material`,
      tipo: `Prática com escrita`,
      tempo: `7 min`,
      guiaProfessor: `Mostre que dar nome ajuda a se organizar. Ajude a clicar duas vezes no nome "Material" para editar. Aceite nomes simples, sem espaços, ligados à cor ou ao item.`,
      atividade: `No painel de Materiais, clique duas vezes em cima do nome "Material" e digite um nome novo para a sua cor, juntando a cor e o item. Por exemplo: "VermelhoEspada" ou "AzulCapacete". Depois salve com Ctrl+S.`,
      gabarito: `Clica-se duas vezes no nome "Material", apaga-se e digita-se um nome próprio, como "VermelhoEspada". Um bom nome diz a cor e o item, sem espaços. Salvar com Ctrl+S guarda o trabalho.`,
    },
    {
      titulo: `Troca-troca: o formato não muda`,
      tipo: `Desafio e descoberta`,
      tempo: `8 min`,
      guiaProfessor: `Desafio final que prova o conceito. Peça para trocar a cor duas vezes e observar o formato. Conduza a conclusão: o material muda só a aparência; a malha continua igual. Encerre com cada um mostrando o item.`,
      atividade: `Mude a Cor de Base do seu material duas vezes seguidas. Olhe bem o formato do item enquanto troca a cor. Responda em voz alta: o formato mudou ou ficou igual? Depois mostre o seu item colorido para a turma.`,
      gabarito: `Trocando a cor de base, o item muda de cor mas o formato continua exatamente o mesmo. Isso prova que o material muda só a aparência (cor e acabamento), e não a malha. O formato e o material são coisas separadas.`,
    },
  ],
};
