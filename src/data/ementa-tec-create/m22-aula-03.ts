import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 3,
  titulo: "Criando os Itens do Jogo",
  semana: "Semana 2",
  duracao: "1 hora",
  objetivo: `Modelar 2 ou 3 itens colecionáveis do jogo (moeda, chave, poção ou arma) no Maya, usando formas simples e duplicação para criar peças que o jogador vai pegar na fase.`,
  descricao: `Nesta aula o aluno sai do personagem principal e começa a criar os itens menores que dão graça ao jogo: moedas para juntar, chaves para abrir portas, poções para recuperar vida e armas para usar na fase. São objetos pequenos, mas importantes, porque é com eles que o jogador interage o tempo todo. Na Aula 2 a turma modelou o personagem, que é uma peça grande e detalhada; hoje a lógica é o contrário: itens precisam ser rápidos de modelar, fáceis de reconhecer e leves para o jogo rodar bem.

O grande conceito desta aula é a modelagem rápida com formas básicas. Em vez de esculpir cada item do zero, o aluno parte de uma forma primitiva (cilindro, cubo, esfera) e faz poucos ajustes para chegar ao objeto desejado. Uma moeda é só um cilindro bem achatado; uma poção é uma esfera com um cilindro fino em cima; uma chave é um cubo esticado com alguns detalhes. A ideia é que cada item nasça em poucos minutos, deixando tempo para criar dois ou três deles na mesma aula.

O segundo conceito central é a duplicação. Em muitos jogos, o mesmo item aparece dezenas de vezes na fase: imagine vinte moedas iguais espalhadas pelo cenário. O aluno modela a moeda uma única vez e depois usa o comando de duplicar para multiplicá-la, em vez de modelar cada cópia. Isso economiza tempo, mantém os itens idênticos e ensina uma forma de pensar muito usada na indústria de games: criar um modelo base e reaproveitá-lo.

O foco do mês é modelar os assets 3D, e o entregável é o conjunto de assets do jogo. Tudo o que for criado hoje vai compor a fase montada na Aula 4 e ganhará cor e textura nas aulas seguintes. Por isso o professor deve insistir em duas coisas: itens simples e bem reconhecíveis (uma moeda tem que parecer uma moeda à primeira vista) e o hábito de salvar o arquivo com nome claro, para que nada se perca até a entrega final.`,
  materiais: [
    `Computadores com o Autodesk Maya instalado e funcionando (um por aluno)`,
    `Projetor ou TV para o professor demonstrar os passos do Maya em tela grande`,
    `Arquivo de exemplo .mb ou .ma com uma cena vazia e, ao lado, o personagem da Aula 2 já modelado para comparar escala`,
    `Imagens de referência impressas ou em slide de moedas, chaves, poções e armas em estilo de jogo (low poly, simples)`,
    `Mouse com botão de rolagem (scroll) para facilitar dar zoom e girar a câmera na cena 3D`,
    `Folha simples de planejamento para o aluno escolher quais 2 ou 3 itens vai criar antes de começar`,
  ],
  conceitosChave: [
    `Item colecionável — objeto pequeno que o jogador pega na fase, como moeda, chave, poção ou arma.`,
    `Forma primitiva — formas básicas prontas do Maya (cubo, esfera, cilindro, cone) que servem de ponto de partida para qualquer modelo.`,
    `Modelagem rápida — criar um objeto reconhecível com poucos ajustes, sem se preocupar com detalhes complexos.`,
    `Duplicar (Duplicate) — comando que cria cópias idênticas de um objeto, útil quando o mesmo item aparece várias vezes na fase.`,
    `Escala (Scale) — ferramenta que estica ou achata um objeto; é o que transforma um cilindro normal em uma moeda fininha.`,
    `Pivô (pivot) — o ponto central de um objeto que serve de referência para mover, girar e duplicar.`,
    `Outliner — painel lateral do Maya que lista todos os objetos da cena com nome, ajudando a organizar moedas, chaves e poções.`,
  ],
  treinamento: `## O que o professor precisa saber

Você não precisa dominar o Maya para dar esta aula. Precisa entender uma ideia central: itens de jogo nascem de formas simples. Uma moeda é um cilindro achatado, uma poção é uma esfera com um gargalo, uma chave é um cubo esticado. Decore três comandos que resolvem quase tudo: criar uma primitiva no menu superior "Create", depois "Polygon Primitives" (Cylinder, Sphere, Cube); usar as ferramentas de Mover (tecla W), Girar (tecla E) e Escala (tecla R); e duplicar com o atalho Ctrl+D. Antes da aula, abra o Maya e crie uma moeda do zero: insira um cilindro, aperte R para escalar e achate-o no eixo vertical (a setinha verde). Em cinco minutos de ensaio você ganha confiança para guiar a turma.

## Passo a passo da aula (ritmo 10/15/25/10)

10 min, aquecimento e revisão. Mostre na tela grande o personagem da Aula 2 e pergunte: "O que mais existe num jogo além do personagem?" Conduza até a resposta: moedas, chaves, poções, armas. Mostre as imagens de referência e peça que cada aluno escolha na folha os 2 ou 3 itens que vai criar hoje.

15 min, conteúdo novo guiado. No Maya, vá no menu superior "Create", "Polygon Primitives", "Cylinder". Aparece um cilindro na cena. Aperte a tecla R (Escala) e puxe a setinha verde para baixo até o cilindro virar uma moeda achatada. Pronto: o primeiro item. Agora mostre a duplicação: com a moeda selecionada, use Ctrl+D e arraste a cópia para o lado com a tecla W. Faça três moedas iguais em segundos. Por fim, crie uma esfera ("Sphere") e ponha um cilindro fino em cima para virar uma poção, mostrando que combinar duas formas já cria um item novo.

25 min, mão na massa. Cada aluno modela seus 2 ou 3 itens escolhidos, partindo sempre de uma primitiva e ajustando com Escala (R), Mover (W) e Girar (E). Peça que dupliquem pelo menos um item (Ctrl+D) para simular vários colecionáveis. Circule pela sala. Reforce o uso do Outliner para nomear cada objeto (clique duplo no nome) como "moeda", "chave", "pocao". Lembre todos de salvar o arquivo com o próprio nome.

10 min, desafio e compartilhar. Lance o desafio: criar mais um item combinando duas formas (por exemplo, uma chave com cabo redondo e haste reta). Depois, cada aluno gira a câmera (segure Alt e arraste com o botão esquerdo) e mostra seus itens ao colega do lado, dizendo o que cada um faz no jogo.

## Como explicar de forma clara (linguagem para a idade)

Use comparações diretas. Diga: "Toda moeda do mundo começou como um cilindro; a gente só amassou ele." Para a duplicação: "Em vez de desenhar vinte moedas na mão, a gente faz uma e o computador fotocopia o resto." Para escala: "A tecla R é o esticador e o amassador: serve para deixar fino, gordo, alto ou baixo." Sempre ligue ao jogo do aluno: "Esse item dá vida, moeda ou poder? Como o jogador vai reconhecer ele de longe?" Evite encher de termos técnicos; fale "forma", "cópia" e "esticar" antes de dizer "primitiva", "duplicate" e "escala".

## Erros comuns e como ajudar

O erro mais comum é o aluno fazer itens grandes demais, do tamanho do personagem; lembre que moeda é pequena e mostre a comparação de escala na cena. Outro erro é escalar no eixo errado e o objeto virar uma forma estranha; ensine a usar só a setinha da cor certa (verde para cima e baixo). Muitos esquecem de selecionar o objeto antes de duplicar e nada acontece; oriente a clicar no item primeiro. Há quem duplique e deixe as cópias exatamente no mesmo lugar, parecendo que sumiram; explique que é preciso mover a cópia com W. Por fim, muitos não nomeiam os objetos no Outliner e depois se perdem; crie o hábito de nomear cada item assim que ele nasce.`,
  exercicios: [
    {
      titulo: `Sua primeira moeda`,
      tipo: `prática na ferramenta`,
      tempo: `7 minutos`,
      guiaProfessor: `Garanta que todos cheguem juntos ao cilindro pelo menu "Create". Mostre que a escala vertical usa a setinha verde. Confira a forma achatada antes de seguir.`,
      atividade: `Crie um cilindro pelo menu "Create", "Polygon Primitives", "Cylinder". Aperte a tecla R para escalar e puxe a setinha verde para baixo até virar uma moeda bem fininha. Mostre o resultado ao professor.`,
      gabarito: `O aluno deve ter um cilindro achatado que parece uma moeda. Caminho correto: "Create" > "Polygon Primitives" > "Cylinder"; depois tecla R e arrastar a setinha verde (eixo vertical) para baixo. Se o objeto ficou esticado ou torto, provavelmente foi puxada a setinha errada; basta desfazer com Ctrl+Z e usar a verde.`,
    },
    {
      titulo: `Multiplicando moedas com duplicação`,
      tipo: `desafio`,
      tempo: `9 minutos`,
      guiaProfessor: `Reforce que é preciso selecionar a moeda antes de duplicar. Mostre Ctrl+D e, em seguida, mover a cópia com W para que ela não fique escondida sobre a original.`,
      atividade: `Pegue a moeda que você criou. Selecione ela, aperte Ctrl+D para duplicar e mova a cópia para o lado com a tecla W. Repita até ter pelo menos cinco moedas iguais enfileiradas.`,
      gabarito: `O aluno deve ter cinco moedas idênticas e separadas na cena. Caminho: selecionar a moeda, Ctrl+D, depois W para mover. Erro comum: as cópias ficam empilhadas no mesmo ponto e parecem uma só; basta mover cada cópia para o lado. As moedas devem ser idênticas, provando que a duplicação reaproveita o modelo base.`,
    },
    {
      titulo: `Poção em dupla: combinando formas`,
      tipo: `em dupla`,
      tempo: `11 minutos`,
      guiaProfessor: `Forme duplas. Um aluno cria a esfera (corpo) e o outro o cilindro fino (gargalo). Ajudem-se a posicionar o gargalo em cima da esfera usando W. Reforce nomear as peças no Outliner.`,
      atividade: `Em dupla, criem uma poção. Um faz uma esfera ("Sphere") para o corpo e o outro um cilindro fino ("Cylinder") para o gargalo em cima. Posicionem o gargalo no topo da esfera com a tecla W e nomeiem as peças no Outliner como "pocao".`,
      gabarito: `A dupla deve ter uma esfera com um cilindro fino encaixado no topo, formando uma poção reconhecível. Caminho: criar "Sphere" e "Cylinder" pelo menu "Create", escalar o cilindro fino com R e movê-lo para o topo com W. As peças devem aparecer nomeadas no Outliner. Mostra que combinar duas formas simples cria um item novo.`,
    },
    {
      titulo: `Roda de conversa: o que cada item faz no jogo`,
      tipo: `roda de conversa`,
      tempo: `12 minutos`,
      guiaProfessor: `Conduza sem julgar. Pergunte como o jogador reconhece cada item de longe e qual a função dele (pontos, vida, acesso, ataque). Anote no quadro as palavras que surgirem (recompensa, poder, segredo).`,
      atividade: `Em roda, cada aluno mostra um item que criou e responde: o que esse item faz no jogo e como o jogador percebe de longe que é uma moeda, chave, poção ou arma? Ouçam os colegas e deem uma sugestão amigável para cada um.`,
      gabarito: `Não há resposta única, mas a justificativa deve ligar a forma do item à sua função no jogo. Exemplos válidos: "A moeda é redonda e dourada, então o jogador sabe que vale pontos"; "A chave tem dentes, então serve para abrir portas." Respostas a melhorar: "É só um objeto", sem função clara. O professor reforça que um item bom é reconhecido à primeira vista.`,
    },
    {
      titulo: `Mini projeto: kit de itens da fase`,
      tipo: `projeto curto`,
      tempo: `15 minutos`,
      guiaProfessor: `Garanta que cada aluno tenha 2 ou 3 itens distintos e que pelo menos um esteja duplicado. Confira a escala em relação ao personagem da Aula 2 e o nome de cada objeto no Outliner. Lembre todos de salvar com o próprio nome.`,
      atividade: `Monte o kit de itens do seu jogo: crie 2 ou 3 itens diferentes (por exemplo, moeda, chave e poção), todos a partir de formas simples. Duplique pelo menos um deles para ter várias cópias na fase. Nomeie cada objeto no Outliner e salve o arquivo com o seu nome para usar na Aula 4.`,
      gabarito: `O arquivo deve conter 2 ou 3 itens reconhecíveis, com tamanho coerente em relação ao personagem, pelo menos um item duplicado e todos nomeados no Outliner. Caminho: criar primitivas pelo menu "Create", ajustar com R, W e E, duplicar com Ctrl+D e salvar com nome claro. Se algum item estiver gigante ou sem nome, peça para corrigir a escala e renomear antes de encerrar.`,
    },
  ],
};
