import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 8,
  titulo: "Exportando o Voxel Pronto",
  semana: "Semana 4",
  duracao: "1 hora",
  objetivo: `Exportar o modelo voxel no formato .obj correto para impressão 3D, salvar o projeto organizado e apresentar o entregável do mês para a turma.`,
  descricao: `Esta é a aula que fecha o primeiro mês do curso. Durante quatro semanas, cada aluno construiu, pintou e detalhou um personagem em voxels dentro do MagicaVoxel. Agora chega o momento mais importante de todos: transformar esse trabalho em um arquivo que o computador da impressora 3D consegue ler e fabricar de verdade. O entregável do mês é exatamente isto: um modelo voxel pronto para impressão, exportado no formato correto.

O foco da aula é o processo de exportação. O MagicaVoxel salva o trabalho em dois lugares diferentes: o arquivo do projeto (.vox), que guarda os voxels editáveis para continuar mexendo depois, e o arquivo de exportação (.obj), que é a "fotografia tridimensional" do modelo usada pela impressora. Os alunos vão aprender a diferença entre salvar e exportar, vão gerar o .obj pela tela de exportação do MagicaVoxel e vão organizar tudo em uma pasta com nome claro, para não perder o trabalho.

Além da parte técnica, a aula tem um momento de celebração e de apresentação. Cada aluno mostra o modelo finalizado para a turma, conta uma escolha que fez (uma cor, um detalhe, uma forma) e recebe um retorno positivo dos colegas. Esse fechamento dá sentido a todo o esforço do mês e prepara o aluno para o próximo passo da trilha, quando os modelos serão fatiados e impressos de verdade.

Como esta é a última aula do tema voxel, o professor deve garantir que NENHUM aluno termine a aula sem o arquivo .obj salvo e a pasta organizada. Esse é o critério de sucesso do mês inteiro.`,
  materiais: [
    `Computadores com o MagicaVoxel instalado e o projeto do personagem de cada aluno já aberto`,
    `Projetor para a demonstração guiada da tela de exportação e para a apresentação dos modelos`,
    `Uma pasta padrão criada em cada computador (por exemplo "Modelos-Voxel-Prontos") para receber os arquivos`,
    `Arquivo de exemplo .obj já exportado pelo professor, para mostrar como fica o resultado final`,
    `Impressora 3D ligada (ou foto/vídeo dela) para mostrar o destino real do arquivo, quando disponível`,
    `Pen drive ou pasta na rede para o backup dos arquivos finalizados da turma`,
  ],
  conceitosChave: [
    `Exportar — gerar um arquivo novo, em outro formato, para usar o modelo fora do MagicaVoxel (por exemplo na impressora).`,
    `Salvar — guardar o projeto editável (.vox) para continuar mexendo nos voxels mais tarde.`,
    `.vox — formato do projeto do MagicaVoxel, que mantém cada voxel editável e a paleta de cores.`,
    `.obj — formato de modelo 3D universal, lido por fatiadores e impressoras 3D; é o entregável do mês.`,
    `Malha (mesh) — a "casca" de triângulos que envolve os voxels e forma a superfície que a impressora entende.`,
    `Entregável — o resultado final combinado para o mês; aqui, o modelo voxel exportado e pronto para imprimir.`,
    `Backup — uma cópia de segurança do arquivo, guardada em outro lugar para não se perder.`,
  ],
  treinamento: `## O que o professor precisa saber

Nesta aula você vai conduzir a exportação. O MagicaVoxel separa duas ações que parecem iguais, mas não são. "Salvar" (atalho Ctrl+S) guarda o projeto no formato .vox, com os voxels editáveis. "Exportar" gera um arquivo .obj, que é uma malha de triângulos pronta para a impressora, mas não dá mais para mexer voxel por voxel. O aluno precisa entregar o .obj, mas também deve manter o .vox guardado. Antes da aula, exporte você mesmo um modelo de teste para conhecer a tela e os botões. Tenha uma pasta de destino criada em cada máquina e o nome do arquivo combinado: nome do aluno mais o nome do personagem, sem espaços nem acentos no nome do arquivo (por exemplo "ana-dragao").

## Passo a passo da aula (10/15/25/10)

Aquecimento (10 min): peça que cada aluno abra o projeto do personagem. Faça uma revisão rápida: o que é salvar e o que é exportar? Mostre no projetor o arquivo .obj de exemplo e diga: "hoje cada um vai gerar este tipo de arquivo, que a impressora lê."

Conteúdo novo guiado (15 min): no projetor, abra um modelo no MagicaVoxel. Primeiro salve com Ctrl+S no formato .vox. Depois, no canto inferior direito da tela, localize o painel de exportação ("Export"). Clique no botão "obj". Aparece a janela para escolher a pasta e o nome. Escolha a pasta padrão, digite o nome combinado e confirme. Mostre que o MagicaVoxel cria dois ou três arquivos juntos (o .obj, o .mtl com as cores e uma imagem de textura .png) e explique que os três devem ficar na mesma pasta. Abra a pasta no Windows para todos verem os arquivos aparecendo.

Mão na massa (25 min): cada aluno faz o mesmo no seu computador. Roteiro na lousa: 1) salvar com Ctrl+S; 2) clicar em "obj" no painel Export; 3) escolher a pasta padrão; 4) digitar o nome (aluno-personagem); 5) confirmar; 6) abrir a pasta e conferir os três arquivos. Circule pela sala conferindo um por um. Quando um aluno terminar, peça que faça o backup no pen drive ou na pasta da rede.

Desafio e compartilhar (10 min): cada aluno mostra o modelo no MagicaVoxel para a turma, diz o nome do personagem e conta uma escolha que fez. A turma dá um retorno positivo. Feche dizendo que o entregável do mês está pronto e que, na trilha, esses arquivos virarão peças impressas.

## Como explicar de forma clara (linguagem para a idade)

Use uma comparação simples: "O .vox é o caderno de desenho onde você ainda pode apagar e mudar. O .obj é a foto pronta que você manda para a gráfica imprimir." Diga que exportar é "traduzir" o modelo para a língua que a impressora entende. Reforce que salvar não é a mesma coisa que exportar: é preciso fazer os dois. Comemore o fim do mês: "Vocês saíram do zero e criaram um personagem 3D de verdade."

## Erros comuns e como ajudar

O erro mais comum é o aluno apenas salvar (.vox) e achar que terminou; lembre que o entregável é o .obj. Outro erro é usar acentos, espaços ou nomes repetidos no arquivo, o que confunde na hora de imprimir; padronize o nome. Alguns alunos escolhem uma pasta errada e depois não acham o arquivo; sempre abra a pasta no Windows para confirmar. Há quem mova só o .obj e esqueça o .mtl e a .png, perdendo as cores; ensine a copiar os três juntos. Por fim, garanta o backup: um arquivo só no computador da escola pode se perder.`,
  exercicios: [
    {
      titulo: `Salvar e exportar: a diferença na prática`,
      tipo: `prática na ferramenta`,
      tempo: `8 minutos`,
      guiaProfessor: `Conduza passo a passo no projetor enquanto os alunos repetem. Confirme que cada um realmente clicou em Ctrl+S antes de exportar. Verifique se o painel Export está visível no canto inferior direito.`,
      atividade: `Abra o seu projeto. Primeiro salve o arquivo com Ctrl+S. Depois, no painel Export, clique no botão "obj" e gere o arquivo. Anote no caderno: qual ação criou o arquivo .vox e qual criou o .obj?`,
      gabarito: `Ctrl+S cria/atualiza o arquivo do projeto editável (.vox). O botão "obj" no painel Export gera o arquivo .obj para impressão. São duas ações diferentes e ambas precisam ser feitas: salvar guarda o trabalho editável, exportar gera o entregável.`,
    },
    {
      titulo: `Encontrando os três arquivos`,
      tipo: `desafio`,
      tempo: `7 minutos`,
      guiaProfessor: `Peça que abram a pasta de destino no Windows. Ajude quem não achar a pasta a refazer a exportação escolhendo a pasta padrão. Reforce que os três arquivos andam juntos.`,
      atividade: `Abra a pasta onde você exportou o modelo. Liste os arquivos que apareceram com o nome do seu personagem e descubra para que serve cada um.`,
      gabarito: `Aparecem três arquivos: o .obj (a malha/forma 3D do modelo), o .mtl (as informações de material e cores) e uma imagem .png (a textura com as cores da paleta). Os três devem ficar sempre na mesma pasta para o modelo manter as cores.`,
    },
    {
      titulo: `Conferência em dupla antes de entregar`,
      tipo: `em dupla`,
      tempo: `8 minutos`,
      guiaProfessor: `Forme duplas. Dê uma lista de verificação simples na lousa. Circule ouvindo as conferências e intervenha só quando a dupla travar. O objetivo é que um aluno valide o trabalho do outro.`,
      atividade: `Troque de computador com o colega. Confira o modelo dele usando a lista: 1) existe o arquivo .obj? 2) o nome está no padrão aluno-personagem, sem acentos nem espaços? 3) os três arquivos estão na mesma pasta? 4) o projeto .vox também foi salvo? Aponte para o colega o que estiver faltando.`,
      gabarito: `A conferência está correta quando a dupla confirma os quatro itens: o .obj existe, o nome segue o padrão combinado sem acentos nem espaços, os três arquivos (.obj, .mtl, .png) estão juntos e o .vox foi salvo. Qualquer item faltando deve ser corrigido antes de seguir.`,
    },
    {
      titulo: `Apresentação do meu personagem`,
      tipo: `roda de conversa`,
      tempo: `9 minutos`,
      guiaProfessor: `Organize uma roda. Cada aluno fala por cerca de um minuto. Garanta que a turma dê um retorno positivo e específico. Modele a fala antes, mostrando o seu modelo de exemplo.`,
      atividade: `Mostre o seu modelo finalizado para a turma. Diga o nome do personagem, conte uma escolha que você fez (uma cor, uma forma ou um detalhe) e explique por que gostou do resultado. Depois, diga um elogio para o modelo de um colega.`,
      gabarito: `Não há resposta única: a apresentação está completa quando o aluno mostra o modelo, nomeia o personagem, justifica pelo menos uma escolha de design e oferece um retorno positivo e específico a um colega. O professor valida a participação, não uma resposta certa.`,
    },
    {
      titulo: `Pacote final pronto para imprimir`,
      tipo: `projeto curto`,
      tempo: `8 minutos`,
      guiaProfessor: `Este é o fechamento do mês e não pode falhar. Acompanhe aluno por aluno até cada um concluir o backup. Nenhum aluno deve terminar a aula sem o pacote completo guardado em dois lugares.`,
      atividade: `Monte o pacote final do entregável do mês: garanta que os três arquivos de exportação e o projeto .vox estejam na pasta com o nome correto. Copie a pasta inteira para o pen drive ou a pasta da rede como backup. Confirme com o professor que o pacote está completo.`,
      gabarito: `O pacote final está correto quando contém os três arquivos de exportação (.obj, .mtl, .png) mais o projeto .vox, todos na mesma pasta com nome padronizado, e uma cópia de segurança (backup) gravada em outro local. Com isso, o entregável do mês — o modelo voxel pronto para impressão — está concluído.`,
    },
  ],
};
