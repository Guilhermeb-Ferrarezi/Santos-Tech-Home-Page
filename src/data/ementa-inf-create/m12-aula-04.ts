import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 4,
  titulo: "Traçando rotas e descobrindo lugares",
  semana: "Semana 2",
  duracao: "1 hora",
  objetivo: `Planejar uma rota real do trajeto casa-escola no Google Maps, comparando tempo e distância a pé, de carro e de transporte público, e salvar lugares favoritos pelo caminho.`,
  descricao: `Na aula passada os alunos conheceram o Google Maps como um guia de bolso: aprenderam a buscar endereços, ler o mapa e usar a barra de pesquisa. Agora damos o próximo passo, que é o coração do aplicativo no dia a dia: traçar rotas. Quase todo mundo já viu um adulto usar o Maps para chegar a algum lugar, mas poucos adolescentes sabem que o aplicativo também compara meios de transporte, mostra o tempo de cada um e permite guardar lugares para voltar depois.

O foco desta aula é a comparação inteligente de trajetos. O aluno vai descobrir que o mesmo caminho pode levar 12 minutos de carro, 35 minutos a pé e 25 minutos de ônibus, e que cada opção tem vantagens. Trabalhamos com um exemplo que toca a vida de todos eles: o trajeto da própria casa até a Santos Tech. Esse contexto real deixa a atividade concreta e faz o aluno perceber que a ferramenta resolve um problema que ele tem de verdade.

Além de calcular rotas, a aula trata de salvar lugares favoritos. O Maps permite marcar pontos com estrelinhas e listas (Favoritos, Quero ir, Marcados), e isso ensina organização digital, um tema que volta forte na próxima aula sobre o Google Drive. Pelo caminho da rota, o aluno também explora pontos de interesse, como padarias, praças, papelarias e pontos de ônibus, percebendo que o mapa é cheio de informação útil.

Esta é uma aula prática: cada aluno fica no computador com o Google Maps aberto no navegador, e o professor conduz pelo projetor. Ao final, todos terão planejado um trajeto real, comparado meios de transporte e salvo pelo menos um lugar favorito, fechando a Semana 2 do mês de mapas, nuvem e manutenção.`,
  materiais: [
    `Computadores com navegador (Chrome) e Google Maps aberto em maps.google.com, um por aluno`,
    `Conta Google de cada aluno conectada no navegador (para salvar lugares e listas)`,
    `Projetor ou tela grande com o computador do professor exibindo o Google Maps`,
    `Endereço completo da escola Santos Tech anotado no quadro para todos copiarem`,
    `Lista de endereços de exemplo (caso algum aluno prefira não usar o próprio) impressa ou no quadro`,
    `Folha de registro "Comparação de rotas" para anotar tempo e distância de cada meio de transporte`,
    `Conexão de internet estável (o cálculo de rotas e o trânsito ao vivo dependem da rede)`,
  ],
  conceitosChave: [
    `Rota — caminho que o Maps calcula entre um ponto de partida e um destino, mostrado como uma linha azul no mapa.`,
    `Meio de transporte — opção de como fazer o trajeto (carro, a pé, transporte público ou bicicleta), representada por ícones no topo da rota.`,
    `Tempo estimado — previsão de quanto a viagem vai durar, que pode mudar com o trânsito do momento.`,
    `Distância — quantos quilômetros ou metros o trajeto tem, número que muda conforme o caminho escolhido.`,
    `Ponto de interesse — lugar marcado no mapa, como padaria, praça ou farmácia, que aparece com ícone e pode ser clicado.`,
    `Lugar favorito — ponto que você salva com uma estrela ou em uma lista para encontrar rápido depois, sem precisar pesquisar de novo.`,
    `Trânsito ao vivo — cores na via (verde, amarelo ou vermelho) que indicam se o caminho está livre ou congestionado naquele instante.`,
  ],
  treinamento: `## O que o professor precisa saber

Você não precisa ser especialista em Google Maps. Basta dominar três ações antes da aula: traçar uma rota, trocar o meio de transporte e salvar um lugar. Abra maps.google.com no Chrome, faça login na sua conta Google e teste o trajeto da sua casa até a escola uma vez. Isso já te dá segurança total. O botão central é o "Rotas" (ícone de uma seta azul dentro de um losango), que aparece quando você pesquisa um lugar ou clica com o botão direito num ponto do mapa. Lembre os alunos de estarem logados na conta Google, senão o recurso de salvar favoritos não funciona.

## Passo a passo da aula

Aquecimento (10 min): retome a aula anterior. Pergunte: "como vocês buscaram um endereço no Maps?". Peça que cada aluno digite o endereço da escola na barra de pesquisa do Maps e aperte Enter. Confirme que todos veem o marcador vermelho da escola na tela.

Conteúdo novo guiado (15 min): com o marcador da escola na tela, clique no botão azul "Rotas". O Maps abre dois campos: "Ponto de partida" e "Destino". Coloque a escola no destino e, no partida, digite o endereço de uma casa de exemplo (use um endereço seu ou fictício no projetor). Aparece a linha azul da rota. Mostre os ícones no topo: carro, transporte público, a pé e bicicleta. Clique em cada um e leia em voz alta o tempo e a distância que mudam. Depois mostre como salvar: clique no nome de um lugar, depois no botão "Salvar" (ícone de estrela ou bandeirinha) e escolha a lista "Favoritos".

Mão na massa (25 min): cada aluno traça a rota da própria casa até a Santos Tech. Passo a passo no quadro: 1) pesquise a escola; 2) clique em "Rotas"; 3) digite seu endereço no "Ponto de partida"; 4) anote na folha o tempo e a distância de carro; 5) clique no boneco (a pé) e anote; 6) clique no ônibus (transporte público) e anote. Em seguida, peça que cada um encontre um ponto de interesse no caminho (uma padaria, uma praça) e salve esse lugar como favorito.

Desafio e compartilhar (10 min): cada aluno diz em voz alta qual meio de transporte é o mais rápido no seu trajeto e por quantos minutos ele ganha do segundo lugar. Quem quiser mostra no projetor o lugar favorito que salvou.

## Como explicar de forma clara

Use a imagem do "guia que conhece a cidade". Diga: "o Maps é como um amigo que já andou por toda a cidade e te conta qual caminho é mais rápido hoje". Para o tempo estimado, explique que o número muda porque o trânsito muda, igual a quando chove e a rua enche de carros. Para distância e tempo serem diferentes, dê o exemplo: "um caminho pode ser mais curto em quilômetros, mas cheio de semáforos, então demora mais". Evite termos técnicos; fale em "linha azul", "bonequinho de andar a pé" e "estrelinha de salvar".

## Erros comuns e como ajudar

O erro mais frequente é o aluno digitar partida e destino trocados, e estranhar a rota. Mostre o botão de setas (duas setas em círculo) que inverte os dois pontos. Outro erro é não estar logado na conta Google: aí o botão "Salvar" pede login e o aluno trava. Confirme o login no início. Alguns alunos pesquisam só o nome da rua sem o número e o Maps marca o lugar errado; oriente a sempre incluir número e cidade. Há quem confunda o ícone de transporte público com o de bicicleta; aponte que o ônibus tem desenho de veículo e a bicicleta tem duas rodas. Por fim, se algum aluno não quiser expor o próprio endereço, ofereça um endereço de exemplo da lista, respeitando a privacidade.`,
  exercicios: [
    {
      titulo: `Minha primeira rota`,
      tipo: `Prática na ferramenta`,
      tempo: `8 minutos`,
      guiaProfessor: `Garanta que todos estão logados na conta Google e veem o marcador da escola. Circule pela sala conferindo se a linha azul apareceu na tela de cada aluno. Reforce o botão "Rotas" e o campo "Ponto de partida".`,
      atividade: `Pesquise o endereço da Santos Tech no Google Maps, clique no botão azul "Rotas" e digite o endereço da sua casa (ou um da lista de exemplo) no campo "Ponto de partida". Espere a linha azul aparecer no mapa.`,
      gabarito: `O aluno consegue exibir uma linha azul ligando a casa à escola, com o tempo e a distância mostrados acima do mapa. Se a rota não aparecer, verifique se o endereço de partida tem número e cidade.`,
    },
    {
      titulo: `Comparando os três caminhos`,
      tipo: `Desafio individual`,
      tempo: `10 minutos`,
      guiaProfessor: `Distribua a folha "Comparação de rotas". Lembre os alunos de clicarem nos ícones de carro, a pé e ônibus, um de cada vez, e de anotarem o número antes de trocar. Confira se as anotações fazem sentido (a pé costuma demorar mais que de carro).`,
      atividade: `Usando a rota da casa até a escola, clique nos ícones de carro, a pé (bonequinho) e transporte público (ônibus). Para cada um, anote na folha o tempo estimado e a distância. No final, marque com um círculo o meio de transporte mais rápido.`,
      gabarito: `Tabela preenchida com três tempos e três distâncias diferentes. Exemplo válido: carro 12 min / 5 km, a pé 48 min / 4 km, ônibus 30 min / 6 km. O meio mais rápido (geralmente o carro) deve estar circulado. Distâncias podem variar porque cada meio usa caminhos diferentes.`,
    },
    {
      titulo: `Salvando o lugar favorito`,
      tipo: `Prática em dupla`,
      tempo: `10 minutos`,
      guiaProfessor: `Forme duplas. Mostre de novo no projetor o botão "Salvar" (estrela) e a lista "Favoritos". Ajude quem não encontrar pontos de interesse a clicar nos ícones coloridos que aparecem no caminho. Confirme que a estrela ficou preenchida após salvar.`,
      atividade: `Em dupla, olhem a rota de um dos dois e encontrem um ponto de interesse no caminho (uma padaria, praça, farmácia ou ponto de ônibus). Cliquem no nome do lugar, depois no botão "Salvar" e escolham a lista "Favoritos". Repitam para a rota do colega.`,
      gabarito: `Cada aluno tem ao menos um lugar salvo na lista "Favoritos" (estrela amarela preenchida no mapa). Para conferir, abra o menu lateral, clique em "Salvos" e veja o lugar listado em "Favoritos".`,
    },
    {
      titulo: `Roda de conversa: qual caminho escolher?`,
      tipo: `Roda de conversa`,
      tempo: `12 minutos`,
      guiaProfessor: `Conduza a discussão fazendo perguntas abertas. Aceite respostas diferentes e mostre que a "melhor" rota depende do contexto (chuva, pressa, dinheiro). Anote no quadro os critérios que os alunos citarem para fechar a ideia de decisão consciente.`,
      atividade: `Sentados em roda, cada aluno responde: qual meio de transporte você escolheria para ir à escola e por quê? Pensem em tempo, dinheiro, chuva e saúde. Discutam se o caminho mais rápido é sempre o melhor.`,
      gabarito: `Não há resposta única. Espera-se que o aluno justifique a escolha com pelo menos um critério (tempo, custo, clima ou exercício físico). Exemplo de boa resposta: "Eu iria a pé quando não está chovendo, porque faço exercício e não gasto passagem, mas de ônibus na chuva."`,
    },
    {
      titulo: `Projeto: meu roteiro do fim de semana`,
      tipo: `Projeto curto`,
      tempo: `15 minutos`,
      guiaProfessor: `Esta é a atividade mais difícil: o aluno cria uma rota com mais de um destino. Mostre no projetor como adicionar parada clicando em "Adicionar destino" (sinal de mais) dentro do painel de rotas. Ajude a ordenar as paradas e a salvar cada lugar.`,
      atividade: `Monte um roteiro de passeio com a sua casa como partida e dois lugares como paradas (por exemplo: uma praça e uma lanchonete). Use o "Adicionar destino" para incluir a segunda parada, anote o tempo total a pé e salve os dois lugares como favoritos.`,
      gabarito: `O aluno apresenta uma rota com três pontos (casa, parada 1 e parada 2), o tempo total somado exibido pelo Maps e os dois lugares salvos em "Favoritos". Exemplo: casa → praça (10 min) → lanchonete (5 min), total de 15 min a pé, ambos os lugares com estrela preenchida.`,
    },
  ],
};
