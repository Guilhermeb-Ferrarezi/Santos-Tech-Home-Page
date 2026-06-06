import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 7,
  titulo: "Imprimindo de Verdade",
  semana: "Semana 4",
  duracao: "1 hora",
  objetivo: `Enviar os arquivos da turma para a Bambu Lab e acompanhar ao vivo as primeiras camadas da impressão, vendo o modelo digital virar peça física.`,
  descricao: `Chegou o momento mais esperado do mês: a impressão de verdade. Nas aulas anteriores a turma aprendeu a abrir o Bambu Studio, ajustar a peça na placa, fatiar e adicionar suportes. Agora cada arquivo preparado vira um objeto físico saindo da impressora Bambu Lab diante dos olhos de todos. Esta é uma aula de observação ativa: o aluno não fica parado, ele acompanha, anota e entende o que acontece em cada etapa do processo.

O coração da aula está nas primeiras camadas. É nelas que a impressão dá certo ou dá errado. O professor mostra como o arquivo sai do Bambu Studio e chega na impressora pela rede (Wi-Fi) ou por cartão microSD, como a máquina aquece o bico e a mesa, calibra sozinha e começa a depositar o filamento. A turma observa a aderência na primeira camada, percebe se o material está grudando bem na placa e vê o objeto crescer camada por camada, de baixo para cima.

Como uma impressão completa pode levar muito tempo, a estratégia é imprimir peças pequenas e rápidas, começar a maior logo no início da aula e usar as peças já prontas das aulas anteriores como exemplo. O aluno também aprende a ler a tela do Bambu Studio e do Bambu Handy enquanto a máquina trabalha: tempo restante, camada atual, temperatura do bico e da mesa.

Ao final, cada estudante registra o que observou e leva no olhar a transformação do digital em físico. Esta aula prepara o terreno para a Aula 8, quando a peça já fria será retirada, limpa e levada para casa. Aqui o foco é puramente acompanhar a mágica acontecendo ao vivo, com segurança e atenção.`,
  materiais: [
    `Computadores com o Bambu Studio instalado e aberto, com os arquivos fatiados das aulas anteriores`,
    `Impressora Bambu Lab ligada, calibrada, com filamento PLA carregado e placa de impressão limpa`,
    `Projetor ou TV para exibir a tela do Bambu Studio e o painel de impressão para toda a turma`,
    `Conexão Wi-Fi funcionando e/ou cartão microSD para enviar os arquivos à impressora`,
    `Celular ou tablet com o aplicativo Bambu Handy para acompanhar a impressão pela câmera`,
    `Folha de observação impressa (tempo restante, camada atual, temperatura) e canetas`,
    `Óculos de proteção e luva térmica perto da impressora, apenas para uso do professor`,
  ],
  conceitosChave: [
    `Enviar para impressão (Print) — botão do Bambu Studio que manda o arquivo fatiado direto para a impressora pela rede.`,
    `Primeira camada — a camada inicial depositada na placa; é a mais importante, pois define se a peça vai grudar e dar certo.`,
    `Aderência — a forma como o filamento derretido cola na placa de impressão; sem boa aderência, a peça se solta e a impressão falha.`,
    `Bico (nozzle) — a ponta quente por onde sai o filamento derretido; aquece a cerca de 200 graus para o PLA.`,
    `Mesa aquecida (heatbed) — a placa que esquenta para ajudar a peça a grudar e não soltar durante a impressão.`,
    `Bambu Handy — aplicativo de celular que mostra a impressão ao vivo pela câmera e exibe o progresso da peça.`,
    `Camada por camada — a impressora monta o objeto em fatias finas empilhadas, de baixo para cima, até formar a peça inteira.`,
  ],
  treinamento: `## O que o professor precisa saber

Esta aula é prática e visual, mas exige preparo antes da turma chegar. Ligue a impressora Bambu Lab, confira se há filamento PLA carregado e se a placa de impressão está limpa (sem restos de peças antigas). Abra o Bambu Studio em um computador conectado à mesma rede Wi-Fi da impressora. Tenha à mão dois ou três arquivos já fatiados nas aulas anteriores: escolha peças pequenas e rápidas (15 a 30 minutos) para que algo termine durante a aula. Você não precisa ser especialista: precisa saber clicar em Print, ler o painel e manter a segurança. Nunca deixe alunos tocarem o bico quente nem a mesa aquecida.

## Passo a passo da aula (ritmo 10/15/25/10)

Aquecimento (10 min): retome a Aula 6. Pergunte: o que é fatiar? Para que servem os suportes? Mostre no projetor uma peça já pronta da turma e diga que hoje o arquivo vai virar objeto de verdade. Distribua a folha de observação.

Conteúdo novo guiado (15 min): no Bambu Studio, abra um projeto fatiado. Mostre o botão azul Print Plate no canto superior direito. Clique nele: abre a janela Send print job. Aponte a impressora na lista Device, confirme o filamento e clique em Print. No painel Device (aba superior Device), mostre a câmera ao vivo, a temperatura do Nozzle e do Bed e o tempo restante. Explique cada número apontando na tela projetada.

Mão na massa (25 min): inicie a impressão da peça principal logo no começo deste bloco. A turma observa as primeiras camadas: a impressora calibra, o bico aquece (cerca de 200 graus), a mesa aquece (cerca de 60 graus) e começa a depositar o filamento. Peça que cada aluno preencha a folha anotando temperatura do bico, da mesa, camada atual e tempo restante, lendo no painel Device. Abra o Bambu Handy no celular e passe entre as duplas para que todos vejam o crescimento da peça pela câmera. Comente a aderência da primeira camada: ela está grudando reta e firme?

Desafio e compartilhar (10 min): cada aluno diz em uma frase o que mais chamou a atenção ao ver o digital virar físico. Se uma peça pequena terminar, mostre-a ainda na placa (sem tocar, ainda quente) e celebre.

## Como explicar de forma clara (linguagem para a idade)

Use a imagem de um confeiteiro fazendo um bolo com bico de confeitar: a impressora desenha com plástico derretido, uma linha de cada vez. Diga que a peça nasce de baixo para cima, como empilhar folhas de papel muito finas até virar um livro. Explique que a primeira camada é como a base de uma casa: se a base não gruda firme, a casa inteira desaba. Compare a temperatura do bico com uma chapa de lanchonete bem quente, por isso ninguém encosta. Mostre que a tela do computador e o celular são como um painel de carro: dá para ver tudo acontecendo sem precisar tocar na máquina.

## Erros comuns e como ajudar

O erro mais comum é a impressora não aparecer na lista Device: confira se computador e impressora estão na mesma rede Wi-Fi; se não, use o cartão microSD (botão Export plate sliced file e leve à impressora). Outro erro é a primeira camada não grudar (o filamento enrola atrás do bico): pare a impressão, limpe a placa e recomece; geralmente a placa estava com gordura ou poeira. Alunos tendem a querer tocar a peça quente por curiosidade: reforce a regra de segurança e mantenha distância. Se o tempo de impressão assustar, lembre que basta começar a maior no início e usar as prontas como exemplo. Se a turma dispersar durante a espera, dê a folha de observação como missão ativa.`,
  exercicios: [
    {
      titulo: `Lendo o Painel da Impressora`,
      tipo: `prática na ferramenta`,
      tempo: `8 minutos`,
      guiaProfessor: `Projete o painel Device do Bambu Studio com a impressão em andamento. Peça que cada aluno localize na tela os quatro números pedidos e anote na folha de observação. Caminhe conferindo se estão lendo o campo certo.`,
      atividade: `No painel Device do Bambu Studio, encontre e anote: a temperatura do bico (Nozzle), a temperatura da mesa (Bed), a camada atual e o tempo restante da impressão.`,
      gabarito: `O aluno deve apontar corretamente: temperatura do bico próxima de 200 graus, temperatura da mesa próxima de 60 graus, o número da camada exibido no painel e o tempo restante mostrado em horas e minutos. Valores variam conforme a peça; o importante é que ele localize cada campo certo na tela.`,
    },
    {
      titulo: `Caça à Primeira Camada`,
      tipo: `desafio`,
      tempo: `7 minutos`,
      guiaProfessor: `Logo no início da impressão, chame a atenção da turma para a primeira camada. Desafie cada aluno a observar a aderência. Use o Bambu Handy ou a câmera projetada para que todos vejam de perto.`,
      atividade: `Observe a primeira camada sendo depositada e responda: as linhas de filamento estão grudando retas e firmes na placa, ou estão soltando e enrolando? Escreva o que você viu.`,
      gabarito: `Resposta esperada: as linhas devem estar retas, coladas e bem juntas na placa, sinal de boa aderência. Se estiverem soltando, enrolando ou formando bolinhas, há problema de aderência e a impressão precisaria ser parada e recomeçada com a placa limpa. Aceita-se qualquer descrição correta do que o aluno observou.`,
    },
    {
      titulo: `Enviando o Arquivo em Dupla`,
      tipo: `em dupla`,
      tempo: `10 minutos`,
      guiaProfessor: `Forme duplas. Cada dupla abre um arquivo já fatiado e percorre o caminho até o botão Print, sem necessariamente iniciar uma nova impressão (para não sobrecarregar a máquina). Um aluno narra os passos, o outro clica. Confira o caminho com cada dupla.`,
      atividade: `Em dupla, abra um projeto fatiado no Bambu Studio. Encontrem o botão Print Plate, abram a janela Send print job, selecionem a impressora correta na lista Device e expliquem um ao outro qual seria o próximo clique para iniciar a impressão.`,
      gabarito: `Caminho correto: abrir o projeto fatiado, clicar em Print Plate (canto superior direito), na janela Send print job escolher a impressora certa em Device, conferir o filamento e clicar em Print para enviar. A dupla deve nomear corretamente o botão Print Plate e a janela Send print job.`,
    },
    {
      titulo: `Roda de Conversa: Digital Vira Físico`,
      tipo: `roda de conversa`,
      tempo: `8 minutos`,
      guiaProfessor: `Sente a turma em roda diante da impressora trabalhando. Conduza a conversa com perguntas abertas. Garanta que todos falem ao menos uma frase. Valorize cada observação, não há resposta errada nesta troca.`,
      atividade: `Em roda, cada um responde: qual foi o momento mais surpreendente ao ver o modelo digital virar peça física? O que você imaginou diferente antes de ver a impressora funcionando ao vivo?`,
      gabarito: `Não há resposta única. Espera-se que os alunos citem observações reais, como ver o objeto crescer camada por camada, perceber o cheiro do PLA aquecido, notar o movimento do bico ou o tempo que leva. O professor confirma o aprendizado quando o aluno relaciona o arquivo do Bambu Studio com o objeto saindo da máquina.`,
    },
    {
      titulo: `Diário da Minha Impressão`,
      tipo: `projeto curto`,
      tempo: `12 minutos`,
      guiaProfessor: `Esta é a atividade de fechamento. Cada aluno produz um pequeno registro escrito da impressão que acompanhou. Oriente a usar os dados da folha de observação e o que viu na tela e na câmera. Recolha os diários para retomar na Aula 8.`,
      atividade: `Escreva um diário curto (5 a 8 linhas) da sua impressão: nome da peça, temperatura do bico e da mesa, quanto tempo levou ou estava previsto, como estava a aderência da primeira camada e uma frase sobre o que você sentiu ao ver o objeto crescer.`,
      gabarito: `Diário completo deve conter: nome da peça, temperatura do bico (cerca de 200 graus), temperatura da mesa (cerca de 60 graus), tempo de impressão observado ou previsto, avaliação da aderência da primeira camada (boa ou com problema) e uma frase pessoal. Considera-se correto quando o aluno usa dados reais que coletou e descreve a transformação do digital em físico com suas palavras.`,
    },
  ],
};
