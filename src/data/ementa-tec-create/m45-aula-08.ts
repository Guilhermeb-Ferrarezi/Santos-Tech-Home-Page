import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 8,
  titulo: "Entrega: Pacote de Assets Pronto",
  semana: "Semana 4",
  duracao: "1 hora",
  objetivo: `Finalizar, validar e organizar dentro da Unreal o pacote completo de assets criados no Maya, corrigindo problemas de importação e documentando o kit com ajuda do Claude para o portfólio.`,
  descricao: `Esta é a última aula do mês e o fechamento do entregável: um pacote de assets profissional, modelado no Maya e pronto para uso na Unreal Engine. Ao longo das semanas o aluno aprendeu o pipeline do Maya para a Unreal, modelou com polígonos sob controle, construiu um personagem e um cenário, abriu UVs, criou materiais, pintou texturas PBR e exportou tudo em FBX. Agora chega a hora de juntar essas peças em um kit coeso, conferir se cada modelo chega inteiro na Unreal e deixar a entrega organizada e documentada.

O foco desta aula não é criar coisas novas, é consolidar. Consolidar significa reunir o personagem, o cenário e os materiais em uma pasta de projeto da Unreal com nomes claros e estrutura previsível, validar cada asset (escala correta, normais apontando para fora, UVs sem sobreposição, materiais aplicados) e corrigir os problemas que sempre aparecem na importação: modelo gigante ou minúsculo, faces escuras, textura faltando, pivot fora do lugar. Um pacote só está pronto quando outra pessoa consegue abrir, entender e usar sem precisar perguntar nada.

A documentação é a parte que transforma um amontoado de arquivos em um produto de portfólio. O aluno escreve um README do kit: o que tem dentro, como cada asset foi feito, a escala usada, a contagem de polígonos e como importar na Unreal. O Claude entra como assistente de escrita e de revisão técnica: o aluno descreve seu kit e pede ao Claude para revisar a clareza e sugerir o que faltou documentar, sem inventar dados que o aluno não forneceu.

O fechamento é uma vitrine. Cada aluno abre a Unreal no projetor, arrasta seu pacote de assets para a cena, mostra o personagem e o cenário montados e lê um trecho do README. Assim o entregável oficial do mês, o pacote de assets pronto para a Unreal, é validado e celebrado diante da turma, deixando o aluno com mais uma peça sólida no portfólio da trilha.`,
  materiais: [
    `Computadores com Autodesk Maya e Unreal Engine instalados, e os arquivos do aluno (FBX do personagem, FBX do cenário e as texturas PBR) gerados nas aulas anteriores`,
    `Projetor para a demonstração da validação na Unreal e para a roda de apresentações dos pacotes`,
    `Acesso ao Claude como assistente de escrita e revisão técnica, para ajudar a documentar o README do kit`,
    `Arquivo de exemplo: um pacote de assets modelo já organizado (pasta Meshes, pasta Textures, pasta Materials) com README preenchido, para os alunos copiarem a estrutura`,
    `Folha impressa de checklist de validação (escala, normais, UVs, texturas aplicadas, nomes padronizados) para cada aluno conferir antes de entregar`,
    `Pasta de rede compartilhada ou padrão de nomes definido antes da aula, para padronizar onde e como cada kit será entregue`,
  ],
  conceitosChave: [
    `Pacote de assets — conjunto organizado de modelos, materiais e texturas, com estrutura de pastas e nomes padronizados, pronto para ser usado em um projeto.`,
    `Validar — conferir que cada asset chega correto na Unreal: escala certa, normais para fora, UVs sem sobreposição e materiais aplicados.`,
    `Importar — trazer um arquivo FBX do Maya para dentro da Unreal, transformando-o em um Static Mesh ou Skeletal Mesh utilizável na engine.`,
    `Escala — o tamanho do modelo em relação ao mundo da Unreal; uma unidade da Unreal equivale a um centímetro, por isso a escala de exportação precisa bater.`,
    `Normais — a direção para a qual cada face aponta; se invertidas, a face fica escura ou some, e o modelo parece com buracos.`,
    `README — arquivo de texto que documenta o kit: o que tem dentro, como foi feito, escala, contagem de polígonos e como importar.`,
    `Portfólio — coleção organizada dos projetos do aluno, que funciona como cartão de visitas de quem trabalha com tecnologia e games.`,
  ],
  treinamento: `## O que o professor precisa saber

Mesmo sem dominar Maya nem Unreal, você conduz esta aula porque nada novo é modelado: o aluno apenas reúne, confere e documenta o que já fez. Sua tarefa é guiar a validação na Unreal e a escrita do README. Antes da aula, faça o teste completo com o pacote de exemplo: crie um projeto da Unreal, arraste os FBX para o Content Browser, observe a janela de importação e confirme que o personagem e o cenário aparecem no tamanho certo, com texturas. Tenha o checklist de validação em mãos. Guarde estes quatro problemas clássicos, pois quase todo aluno encontra um deles: escala errada (modelo gigante ou minúsculo), normais invertidas (faces escuras), textura faltando (modelo cinza) e pivot fora do lugar (modelo não gira no próprio centro). Lembre que o Claude é assistente: o aluno escreve o README e pede revisão, nunca delega a escrita inteira.

## Passo a passo da aula (ritmo 10/15/25/10)

Aquecimento e revisão (10 min): retome o mês inteiro. Pergunte: "O que já temos no nosso kit?" Conduza a resposta passando por pipeline, modelagem, personagem, cenário, UVs, materiais, texturas PBR e exportação em FBX. No projetor, abra a pasta do kit de exemplo e mostre a estrutura: Meshes, Textures, Materials e o README.

Conteúdo novo guiado (15 min): demonstre a validação na Unreal. No Content Browser, clique em "Import" (ou arraste o FBX para a janela). Na caixa de importação, confira "Import Uniform Scale" igual a 1.0, mantenha "Generate Missing Collision" marcado e clique em "Import All". Dê duplo clique no Static Mesh para abrir o editor e verifique o tamanho com a grade. Se as faces estiverem escuras, mostre como ativar "Normals" no menu de visualização para diagnosticar. Arraste o material e a textura para o slot do modelo. Em seguida, abra o README de exemplo e explique cada seção.

Mão na massa (25 min): cada aluno monta a pasta do kit com a estrutura padrão, importa seus FBX na Unreal e roda o checklist de validação item a item, corrigindo o que estiver errado. Depois escreve o README do kit. Quem terminar pede ao Claude para revisar, com um pedido claro como: revise a clareza deste README do meu pacote de assets e aponte o que faltou documentar, sem inventar números. Circule conferindo escala, normais, texturas e nomes.

Desafio e compartilhar (10 min): roda de apresentações no projetor. Cada aluno abre a Unreal, arrasta o kit para uma cena vazia, posiciona o personagem no cenário, mostra que tudo aparece com textura e na escala certa, lê um trecho do README e conta o maior problema de importação que resolveu. Celebre o fechamento do entregável do mês.

## Como explicar de forma clara (linguagem para a idade)

Use a imagem da caixa de Lego: "um pacote de assets é como uma caixa de Lego organizada; cada peça tem seu lugar, e quem abre consegue montar sem instruções complicadas". Para validar, diga: "antes de entregar um produto, a gente testa se funciona; importar na Unreal é o teste real do seu modelo". Sobre escala, compare: "na Unreal, um centímetro de verdade é uma unidade; se você exportou em metro, seu personagem vira um gigante". Sobre normais: "cada face tem um lado da frente e um de trás; se virar pro lado errado, a face fica preta ou some, igual a uma camiseta vestida do avesso". Reforce o Claude como revisor: "você é o autor do kit; o Claude é o revisor que aponta o que você esqueceu de explicar".

## Erros comuns e como ajudar

O erro mais comum é a escala: o aluno exportou em centímetros errados e o modelo chega gigante ou minúsculo. Oriente conferir "Import Uniform Scale" e, no Maya, a unidade do projeto antes de reexportar. Normais invertidas deixam faces escuras; no Maya, peça para usar Mesh Display e o comando Conform/Reverse, depois reexportar. Textura faltando deixa o modelo cinza; verifique se as imagens estão na pasta Textures e se o material aponta para o arquivo certo. Pivot fora do centro faz o modelo girar torto; no Maya, ajuste o pivot e zere as transformações (Freeze Transformations) antes de exportar. Por fim, há quem entregue nomes bagunçados como "final2_ok_verdadeiro"; exija nomes claros e padronizados, como SM_Personagem ou SM_Cenario, e a estrutura de pastas combinada.`,
  exercicios: [
    {
      titulo: `Montando a estrutura do pacote`,
      tipo: `prática na ferramenta`,
      tempo: `7 minutos`,
      guiaProfessor: `Mostre no projetor a estrutura padrão de pastas do kit de exemplo. Acompanhe cada aluno criando as pastas e movendo os arquivos certos para cada uma. Reforce nomes padronizados, sem acentos nem espaços, usando prefixos como SM_ para Static Mesh e T_ para texturas.`,
      atividade: `Crie a pasta do seu kit com três subpastas: Meshes, Textures e Materials. Coloque os FBX em Meshes, as imagens de textura em Textures e renomeie tudo com nomes claros e padronizados (por exemplo SM_Personagem, SM_Cenario, T_Personagem_BaseColor). Nada de espaços nem acentos nos nomes de arquivo.`,
      gabarito: `A pasta tem as três subpastas com cada arquivo no lugar certo: FBX em Meshes, imagens em Textures. Os nomes seguem um padrão com prefixo e sem espaços nem acentos, por exemplo SM_Personagem.fbx, SM_Cenario.fbx, T_Personagem_BaseColor.png. Sinal de acerto: olhando só os nomes, dá para saber o que é cada arquivo.`,
    },
    {
      titulo: `Importando os assets na Unreal`,
      tipo: `prática na ferramenta`,
      tempo: `10 minutos`,
      guiaProfessor: `Acompanhe a janela de importação na tela de cada aluno. Garanta que "Import Uniform Scale" esteja em 1.0 e que o aluno clique em "Import All". Depois oriente abrir cada Static Mesh com duplo clique para conferir o tamanho na grade da viewport.`,
      atividade: `Na Unreal, abra o Content Browser e clique em "Import". Selecione seus FBX da pasta Meshes. Na caixa de importação, deixe "Import Uniform Scale" em 1.0 e clique em "Import All". Dê duplo clique em cada modelo para abrir o editor e confira o tamanho usando a grade.`,
      gabarito: `Os FBX viram Static Meshes no Content Browser e abrem sem erro no editor de mesh. O personagem e o cenário aparecem em escala coerente com a grade (nem gigantes nem minúsculos). Sinal de acerto: o aluno consegue dizer a altura aproximada do personagem comparando com a grade da viewport.`,
    },
    {
      titulo: `Rodando o checklist de validação`,
      tipo: `validação técnica`,
      tempo: `12 minutos`,
      guiaProfessor: `Distribua o checklist e percorra item a item com a turma. Ensine a diagnosticar normais (faces escuras), texturas faltando (modelo cinza) e UVs estranhas (textura esticada). Quando achar um problema, oriente a correção no Maya e a reexportação do FBX.`,
      atividade: `Use o checklist de validação no seu kit dentro da Unreal: 1) escala correta na grade; 2) faces claras, sem normais invertidas; 3) textura aparecendo, sem partes cinza; 4) UVs sem esticamento estranho; 5) nomes padronizados. Marque cada item e anote o que precisou corrigir.`,
      gabarito: `Exemplo de checklist preenchido: "1) escala OK; 2) corrigi duas faces escuras com Reverse no Maya e reexportei; 3) textura faltava porque o caminho estava errado, reapliquei; 4) UVs OK; 5) renomeei SM_cenario_final para SM_Cenario". Bom resultado: os cinco itens conferidos, com ao menos uma correção real descrita.`,
    },
    {
      titulo: `Documentando o kit com o Claude`,
      tipo: `uso de assistente de IA`,
      tempo: `13 minutos`,
      guiaProfessor: `Reforce que o aluno primeiro escreve o README com seus próprios dados (escala, contagem de polígonos, lista de assets) e só depois pede revisão ao Claude. Ensine a fazer um pedido claro e a recusar sugestões que inventem números. O aluno mantém a autoria.`,
      atividade: `Escreva o README do seu kit com estes campos: nome do pacote, lista de assets, escala usada, contagem aproximada de polígonos por modelo, texturas incluídas e como importar na Unreal. Depois cole no Claude com o pedido: "Revise a clareza deste README e aponte o que faltou documentar, sem inventar números". Atualize o que fizer sentido.`,
      gabarito: `O aluno apresenta o README antes e depois e explica ao menos duas melhorias aceitas (por exemplo "adicionei a versão da Unreal" ou "deixei o passo a passo de importação mais claro") e uma sugestão recusada por pedir um dado que ele não tinha. Bom resultado: o README cobre os seis campos, fica mais claro e continua com os números reais do aluno.`,
    },
    {
      titulo: `Entrega do pacote e vitrine na Unreal`,
      tipo: `projeto curto`,
      tempo: `13 minutos`,
      guiaProfessor: `Esta atividade consolida o entregável do mês. Confira no kit de cada aluno: estrutura de pastas, FBX importados, checklist completo, README revisado e nomes padronizados. Abra a cena de teste e veja personagem e cenário montados. Conduza a roda no projetor e marque a entrega.`,
      atividade: `Finalize a entrega do seu pacote de assets: estrutura de pastas, FBX validados na Unreal, checklist completo, README revisado e nomes padronizados. Numa cena vazia da Unreal, arraste o cenário e posicione o personagem nele, conferindo escala e texturas. Depois apresente para a turma: mostre a cena montada, leia um trecho do README e conte o maior problema de importação que resolveu.`,
      gabarito: `O kit entregue tem a estrutura de pastas, os modelos validados na Unreal aparecendo com textura e na escala certa, o checklist marcado, o README revisado e nomes padronizados. Na cena de teste, personagem e cenário aparecem montados e coerentes. Na apresentação o aluno mostra a cena, lê um trecho do README e cita um problema resolvido (por exemplo normais invertidas corrigidas). Essa entrega é o entregável oficial do mês, fechando o pacote de assets pronto para a Unreal.`,
    },
  ],
};
