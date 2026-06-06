import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 4,
  titulo: "Descrevendo cena por cena",
  semana: "Semana 2",
  duracao: "1 hora",
  objetivo: `Transformar cada momento do roteiro em uma descrição detalhada de cenário, personagem, ação e clima, e validar uma dessas cenas gerando um clipe de teste no Sora.`,
  descricao: `Nas aulas anteriores os alunos descobriram o Sora, aprenderam quais comandos geram bons clipes e escreveram a ideia central do vídeo num roteiro. Agora chega a hora de descer ao detalhe: pegar cada momento do roteiro e transformá-lo em uma descrição de cena rica e precisa. Quanto mais clara é a descrição, mais perto o Sora chega da imagem que o aluno imaginou na cabeça.

A grande sacada desta aula é ensinar que uma boa descrição de cena tem quatro partes: o cenário (onde a cena acontece), o personagem (quem aparece e como é), a ação (o que está acontecendo) e o clima (a sensação, a luz, as cores, o sentimento). Quando o aluno descreve essas quatro camadas em uma frase só, o prompt vira um pedido completo, e o Sora tem muito mais informação para trabalhar. Sem isso, o vídeo sai genérico, parado ou diferente do que se queria.

Os alunos vão pegar o roteiro já escrito e quebrá-lo em cenas. Para cada cena, eles preenchem um quadro com as quatro partes (cenário, personagem, ação e clima) e depois juntam tudo em um único prompt bem escrito. É um exercício de observação e de capricho: aprender a enxergar uma cena por dentro e colocar em palavras exatas. Aqui entra também a ideia de plano (o quão perto ou longe a câmera está) e de luz (dia, noite, pôr do sol), que mudam completamente o resultado.

Ao final, cada aluno terá as descrições de várias cenas prontas no papel e na tela, e vai escolher uma delas para gerar um clipe de teste no Sora. Esse teste serve para validar: a descrição funcionou? O vídeo ficou parecido com o imaginado? Se sim, ótimo; se não, o aluno aprende a ajustar a descrição. Não é para gerar tudo agora (isso é a próxima aula): é para testar uma cena e confirmar que a forma de descrever está no caminho certo.`,
  materiais: [
    `Computadores com acesso ao ChatGPT com Sora (geração de vídeo por IA), um por aluno, com login feito antes da aula`,
    `Conta no ChatGPT (plano com Sora liberado) já testada para garantir que a geração de vídeo aparece`,
    `Projetor ou TV para o professor mostrar a tela e demonstrar onde clicar no Sora`,
    `Roteiro do vídeo de cada aluno (feito na Aula 3), impresso ou aberto em um documento`,
    `Quadro de descrição de cena impresso (colunas: cenário, personagem, ação e clima), um por aluno`,
    `Pasta com exemplos de descrições de cena prontas (uma boa e uma fraca) para comparar`,
    `Fones de ouvido para cada aluno conferir o clipe gerado sem atrapalhar a turma`,
  ],
  conceitosChave: [
    `Descrição de cena — o texto detalhado que conta tudo o que deve aparecer em um momento do vídeo.`,
    `Cenário — o lugar onde a cena acontece (uma floresta, uma cidade à noite, um quarto bagunçado).`,
    `Personagem — quem aparece na cena e como é (idade, roupa, jeito, expressão do rosto).`,
    `Ação — o que está acontecendo na cena, o movimento ou a atividade que o personagem faz.`,
    `Clima — a sensação que a cena passa, formada pela luz, pelas cores e pelo sentimento (alegre, tenso, calmo).`,
    `Plano — o quão perto ou longe a câmera está do que mostra (plano aberto, plano fechado, close).`,
    `Clipe de teste — um vídeo curto gerado só para checar se a descrição da cena funcionou no Sora.`,
  ],
  treinamento: `## O que o professor precisa saber

Você não precisa dominar o Sora. O que importa nesta aula é uma ideia simples: uma boa descrição de cena tem quatro partes — cenário, personagem, ação e clima. O Sora fica dentro do ChatGPT: na tela do ChatGPT existe a opção do Sora (no menu de criação ou no app Sora). O fluxo é sempre o mesmo: escrever a descrição na caixa de texto (o campo de prompt), apertar enviar e esperar o vídeo aparecer. Cada geração demora alguns minutos. O foco do dia é a qualidade da descrição escrita, não a quantidade de vídeos. Teste o seu acesso antes da aula para confirmar que o botão de gerar vídeo aparece.

## Passo a passo da aula

Aquecimento (10 min): Retome o roteiro da Aula 3. Mostre no projetor duas descrições de cena: uma fraca ("um cachorro correndo") e uma rica ("um cachorro caramelo correndo por uma praia ao pôr do sol, com a água respingando, em clima alegre e luz dourada"). Pergunte à turma qual delas o Sora vai entender melhor e por quê. Conduza para as quatro partes: cenário, personagem, ação e clima.

Conteúdo novo guiado (15 min): No projetor, mostre o quadro de descrição de cena com as quatro colunas. Pegue uma cena do roteiro de exemplo e preencha junto com a turma: primeiro o cenário, depois o personagem, depois a ação e por fim o clima. Junte as quatro partes em uma frase só. Acrescente plano e luz ("plano aberto, luz de fim de tarde"). Abra o ChatGPT, vá até o Sora, cole a descrição na caixa de prompt e clique em gerar para mostrar como o teste funciona.

Mão na massa (25 min): Cada aluno quebra o próprio roteiro em cenas e preenche o quadro das quatro partes para pelo menos três cenas. Depois junta cada quadro em uma frase de prompt. Quando tiver as descrições prontas, escolhe a cena favorita, abre o Sora dentro do ChatGPT, cola a descrição e gera um clipe de teste. Circule pela sala lendo as descrições e ajudando a deixá-las mais completas.

Desafio + compartilhar (10 min): Cada aluno mostra ao colega do lado a descrição que gerou e o clipe de teste, e diz se o vídeo ficou parecido com o imaginado. Dois ou três voluntários mostram no projetor e a turma sugere uma melhora na descrição.

## Como explicar de forma clara

Use a comparação de "montar um pedido completo". Diga que descrever uma cena é como pedir um lanche: se você só fala "um lanche", vem qualquer coisa; se você fala o pão, o recheio, o molho e o ponto, vem do jeito que você quer. As quatro partes da cena são esse detalhamento. Fale uma de cada vez e aponte na tela. Use as perguntas mágicas: Onde? (cenário), Quem? (personagem), O quê? (ação), Que clima? (sensação e luz). Repita que capricho na descrição é o que faz o vídeo ficar bom. Mostre antes de mandar fazer e leia descrições em voz alta para a turma ouvir como soa uma cena bem contada.

## Erros comuns e como ajudar

O erro mais comum é a descrição curta demais, do tipo "uma cidade". Peça para o aluno responder as quatro perguntas mágicas e a frase cresce sozinha. Outro erro é colocar várias ações numa cena só ("ele corre, voa, luta e dorme"); oriente uma ação principal por cena. Alguns esquecem o clima e a luz, e o vídeo sai sem graça; lembre de sempre dizer a sensação e a hora do dia. Há quem queira gerar todas as cenas agora; explique que hoje é só um clipe de teste para validar a descrição. Por fim, muitos confundem detalhe com texto longo e confuso; ensine que detalhe é ser claro, não escrever um parágrafo gigante. Se o vídeo sair diferente, mostre que o caminho é ajustar a descrição, não brigar com a ferramenta.`,
  exercicios: [
    {
      titulo: `As quatro partes de uma cena`,
      tipo: `prática na ferramenta`,
      tempo: `6 minutos`,
      guiaProfessor: `Entregue o quadro com as quatro colunas. Confira se cada coluna foi preenchida e ajude quem deixou o clima ou a luz em branco.`,
      atividade: `Escolha uma cena do seu roteiro e preencha o quadro com as quatro partes: cenário, personagem, ação e clima. Use as perguntas Onde, Quem, O quê e Que clima.`,
      gabarito: `O quadro tem as quatro colunas preenchidas com informações claras. Exemplo: cenário (uma sala de fliperama à noite), personagem (uma garota de jaqueta vermelha), ação (jogando concentrada em uma máquina), clima (animado, luzes coloridas piscando).`,
    },
    {
      titulo: `Juntando tudo num prompt`,
      tipo: `prática na ferramenta`,
      tempo: `6 minutos`,
      guiaProfessor: `Mostre como transformar as quatro colunas em uma frase só. Incentive acrescentar o plano e a luz. Leia algumas em voz alta para a turma.`,
      atividade: `Transforme o quadro da cena anterior em uma única frase de descrição, juntando as quatro partes e acrescentando o plano (aberto ou fechado) e a luz.`,
      gabarito: `Uma frase única e clara que une as quatro partes mais o plano e a luz. Exemplo: "Plano aberto de uma garota de jaqueta vermelha jogando concentrada em uma máquina de fliperama à noite, com luzes coloridas piscando, clima animado e brilho neon."`,
    },
    {
      titulo: `Gerando o clipe de teste`,
      tipo: `desafio`,
      tempo: `7 minutos`,
      guiaProfessor: `Acompanhe o acesso ao Sora dentro do ChatGPT. Lembre que a geração demora alguns minutos e que é só um teste para validar a descrição.`,
      atividade: `Escolha a sua melhor descrição de cena, abra o Sora no ChatGPT, cole a descrição na caixa de prompt e gere um clipe de teste. Compare o vídeo com o que você imaginou.`,
      gabarito: `O aluno gerou um clipe a partir da própria descrição e consegue dizer se o vídeo ficou parecido com o imaginado, apontando ao menos um detalhe que combinou e um que poderia melhorar na descrição.`,
    },
    {
      titulo: `Detetives de descrição`,
      tipo: `em dupla`,
      tempo: `5 minutos`,
      guiaProfessor: `Forme duplas. Oriente cada aluno a procurar nas quatro partes qual está faltando ou fraca na descrição do colega, sem julgar a pessoa.`,
      atividade: `Troque a descrição de uma cena com o colega. Cada um lê a do outro e aponta qual das quatro partes (cenário, personagem, ação ou clima) está faltando ou poderia ficar mais rica. Depois melhorem juntos.`,
      gabarito: `A dupla identificou ao menos uma parte fraca em cada descrição e reescreveu a frase deixando-a mais completa, com as quatro partes presentes e bem detalhadas.`,
    },
    {
      titulo: `Roda de conversa: o que faz uma cena boa`,
      tipo: `roda de conversa`,
      tempo: `4 minutos`,
      guiaProfessor: `Reúna a turma em roda e conduza com perguntas abertas. Anote no quadro as descobertas para retomar nas próximas aulas de geração de clipes.`,
      atividade: `Em roda, cada aluno diz uma regra que aprendeu hoje sobre descrever cenas (por exemplo, sempre dizer o clima, ou uma ação principal por cena).`,
      gabarito: `A turma levanta ao menos quatro ideias válidas, como: usar as quatro partes (cenário, personagem, ação e clima), dizer a luz e a hora do dia, manter uma ação principal por cena e ser claro em vez de escrever um texto enorme.`,
    },
  ],
};
