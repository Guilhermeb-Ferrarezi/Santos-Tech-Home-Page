import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 2,
  titulo: "Mecânicas e Regras do Jogo",
  semana: "Semana 1",
  duracao: "1 hora",
  objetivo: `Implementar no Unity, com scripts em C#, mecânicas que dão regras ao jogo — pulo, coleta de itens, vidas e pontuação — usando variáveis e condições, e testar cada uma na cena.`,
  descricao: `Na aula passada o aluno deu vida ao personagem com scripts de movimento. Agora damos o próximo passo: transformar aquele boneco que anda em um jogo de verdade, com objetivos, recompensas e consequências. É disso que tratam as mecânicas e as regras. Uma mecânica é uma ação que o jogo permite (pular, coletar uma moeda); uma regra é o que acontece por causa daquela ação (ganhar um ponto, perder uma vida, vencer a fase). Sem regras, andar pela tela não é jogar; é só passear.

O coração técnico da aula são as variáveis e as condições. Uma variável é uma caixinha onde o jogo guarda um número ou uma informação que muda com o tempo, como a pontuação atual ou quantas vidas ainda restam. Uma condição é uma pergunta que o jogo faz a si mesmo o tempo todo, do tipo "as vidas chegaram a zero?". Dependendo da resposta, o jogo faz uma coisa ou outra. Quando o aluno junta variáveis e condições, ele para de só mover bonecos e começa a escrever as leis do próprio universo.

Nesta aula o foco recai em quatro mecânicas clássicas e muito reaproveitáveis: o pulo, a coleta de itens, o sistema de vidas e a contagem de pontos. Elas aparecem em quase todo jogo de plataforma e de ação, e dominá-las dá ao aluno um repertório que ele vai remixar no resto do mês para montar o jogo final. O professor vai guiar o código exato de cada mecânica, explicando linha a linha o que faz o quê, para que ninguém apenas copie sem entender.

Como este é o ano final da trilha, a meta não é só repetir o que o professor mostra. Cada aluno deve implementar pelo menos duas mecânicas próprias e testá-las na cena, observando se o comportamento bate com a intenção. Esse ciclo de criar, rodar e ajustar é exatamente o trabalho de quem faz games de verdade, e o Claude pode entrar como assistente para tirar dúvidas de sintaxe e sugerir melhorias enquanto o aluno mantém o comando das decisões.`,
  materiais: [
    `Computadores com Unity instalado e o projeto do jogo do mês já aberto, com C# configurado em um editor como o Visual Studio ou o VS Code (um por aluno)`,
    `Projetor ou TV grande para o professor mostrar a Hierarchy, o Inspector e o código na frente da turma`,
    `Cena de exemplo da Aula 1, com o personagem que já se movimenta, pronta para receber as novas mecânicas`,
    `Pacote de assets simples para itens coletáveis (por exemplo uma moeda ou uma estrela) e alguns prefabs de plataforma`,
    `Arquivo de exemplo com os scripts Coletavel.cs e GerenciadorJogo.cs prontos, para consulta caso algum aluno precise de apoio`,
    `Ficha impressa com os nomes exatos de componentes e métodos usados na aula (Rigidbody, Collider, OnTriggerEnter, Update) para servir de cola de sintaxe`,
    `Acesso ao Claude como assistente, para os alunos tirarem dúvidas de sintaxe em C# durante a mão na massa`,
  ],
  conceitosChave: [
    `Mecânica — uma ação que o jogo permite ao jogador, como pular, coletar ou atacar.`,
    `Regra — o que o jogo decide fazer por causa de uma ação, como ganhar ponto ou perder vida.`,
    `Variável — uma caixinha com nome que guarda um valor que pode mudar, como a pontuação ou o número de vidas.`,
    `Condição (if) — uma pergunta de sim ou não que o código faz para escolher o que executar em seguida.`,
    `Trigger (gatilho) — um Collider marcado como Is Trigger que detecta encostões sem empurrar, ideal para itens coletáveis.`,
    `Tag — uma etiqueta de texto colada em um objeto para o código reconhecer com quem ele encostou.`,
    `Gerenciador de jogo (Game Manager) — um script central que guarda o placar e as vidas e cuida das regras gerais da partida.`,
  ],
  treinamento: `## O que o professor precisa saber

Esta aula constrói sobre a Aula 1, então a cena já tem um personagem que se move. As mecânicas novas dependem de três ideias do Unity: variáveis públicas, que aparecem no Inspector para ajustar sem mexer no código; o método Update, que roda a cada quadro e é onde se lê o teclado; e os triggers de colisão, que disparam o método OnTriggerEnter quando um objeto encosta em outro marcado como Is Trigger. Para o pulo, usamos o componente Rigidbody, que dá física ao personagem; chamamos AddForce para empurrá-lo para cima. Para coletar, criamos um item com Collider marcado como Is Trigger e uma Tag chamada Coletavel. Para o placar e as vidas, criamos um objeto vazio na Hierarchy chamado GameManager e anexamos a ele um script central. Faça o caminho inteiro uma vez antes da aula. Lembre que em C# usamos concatenação com mais para montar textos, por exemplo "Pontos: " mais pontos, sem strings interpoladas.

## Passo a passo da aula (ritmo 10/15/25/10, com o código exato)

Aquecimento (10 min): retome a cena da Aula 1 e peça que um aluno mostre o personagem andando. Pergunte: "andar já é um jogo?". Conduza até a diferença entre mecânica (a ação) e regra (a consequência). Liste no quadro as quatro mecânicas de hoje: pular, coletar, vidas e pontos.

Conteúdo novo guiado (15 min): no projetor, abra o script de movimento e adicione o pulo. Mostre o código exato dentro do Update:

if (Input.GetKeyDown(KeyCode.Space) && estaNoChao) { rb.AddForce(Vector3.up * forcaPulo, ForceMode.Impulse); estaNoChao = false; }

Explique que rb é o Rigidbody, forcaPulo é uma variável pública (public float forcaPulo = 5f) e estaNoChao é um bool que evita pulo duplo. Depois crie o GameManager: clique com o botão direito na Hierarchy, GameObject vazio, nomeie GameManager e anexe o script GerenciadorJogo com este conteúdo:

public class GerenciadorJogo : MonoBehaviour { public int pontos = 0; public int vidas = 3; public void GanharPontos(int valor) { pontos = pontos + valor; Debug.Log("Pontos: " + pontos); } public void PerderVida() { vidas = vidas - 1; if (vidas <= 0) { Debug.Log("Fim de jogo"); } } }

Mão na massa (25 min): cada aluno cria um item coletável. Passos: arraste a moeda para a cena, adicione um Collider, marque Is Trigger no Inspector, crie a Tag Coletavel e atribua ao item. Anexe o script Coletavel.cs ao personagem:

void OnTriggerEnter(Collider outro) { if (outro.CompareTag("Coletavel")) { gm.GanharPontos(10); Destroy(outro.gameObject); } }

Aqui gm é uma referência ao GerenciadorJogo (public GerenciadorJogo gm), arrastada no Inspector. Cada aluno roda a cena, pula, encosta na moeda e confere no Console a mensagem de pontos subindo. Em seguida, implementa pelo menos duas mecânicas próprias, por exemplo um item que tira vida ou uma moeda que vale mais pontos.

Desafio e compartilhar (10 min): desafie a turma a criar uma regra de vitória, como "ao juntar 50 pontos, mostrar a mensagem Você venceu no Console". Feche com dois ou três alunos mostrando suas mecânicas próprias rodando no projetor.

## Como explicar de forma clara (linguagem para a idade)

Compare variável a um cofrinho com etiqueta: a etiqueta é o nome (pontos) e dentro fica o número, que cresce quando você ganha. Compare a condição if a um segurança na porta que só deixa passar se a resposta for sim. Diga que o trigger é como um sensor de presença de loja: ele percebe que alguém passou sem empurrar a pessoa. Sempre que falar um termo em inglês, traduza logo: trigger é gatilho, tag é etiqueta. Mostre o jogo rodando depois de cada pedacinho de código para o aluno ver a causa e o efeito na hora.

## Erros comuns e como ajudar

O erro mais frequente é esquecer de marcar Is Trigger no Collider, e então a coleta nunca dispara; mostre a caixinha no Inspector. Outro é digitar a Tag diferente do texto usado no CompareTag, com letra trocada ou espaço; reforce que precisa ser idêntica. Muitos esquecem de arrastar o GerenciadorJogo para o campo gm no Inspector e tomam erro de referência nula; ensine a olhar a mensagem do Console e a preencher o campo. Há quem coloque o pulo fora do Update e o teclado não responda. Por fim, alguns tentam strings interpoladas; oriente a juntar texto com o sinal de mais, como "Pontos: " mais pontos.`,
  exercicios: [
    {
      titulo: `Ligando o pulo`,
      tipo: `prática na ferramenta`,
      tempo: `8 minutos`,
      guiaProfessor: `Confirme que o personagem já tem um Rigidbody antes de começar. Mostre no projetor onde fica o Update e onde adicionar a variável pública forcaPulo. Circule conferindo que a barra de espaço faz o personagem subir.`,
      atividade: `No script de movimento, crie a variável public float forcaPulo = 5f e, dentro do Update, faça o personagem pular quando a barra de espaço for pressionada, usando AddForce para empurrá-lo para cima. Rode a cena e teste o pulo.`,
      gabarito: `O código dentro do Update fica assim: if (Input.GetKeyDown(KeyCode.Space)) { rb.AddForce(Vector3.up * forcaPulo, ForceMode.Impulse); }. Com a variável public float forcaPulo = 5f declarada e o Rigidbody guardado em rb, ao apertar a barra de espaço o personagem sobe na cena.`,
    },
    {
      titulo: `Etiquetando o item coletável`,
      tipo: `prática na ferramenta`,
      tempo: `8 minutos`,
      guiaProfessor: `Mostre no Inspector onde marcar Is Trigger e onde criar e atribuir uma Tag. Reforce que o nome da Tag tem de ser idêntico ao que o código vai usar. Confira item a item.`,
      atividade: `Arraste a moeda para a cena, garanta que ela tem um Collider, marque a caixinha Is Trigger no Inspector e crie a Tag chamada Coletavel, atribuindo-a à moeda.`,
      gabarito: `A moeda na cena tem um Collider com a opção Is Trigger marcada no Inspector, e no campo Tag aparece Coletavel, escrita exatamente assim. Com isso o item está pronto para ser detectado por um trigger sem empurrar o personagem.`,
    },
    {
      titulo: `Coletando e contando pontos`,
      tipo: `prática na ferramenta`,
      tempo: `12 minutos`,
      guiaProfessor: `Garanta que o GameManager já existe na Hierarchy com o script GerenciadorJogo. Ajude a arrastar a referência gm no Inspector. Verifique no Console se a mensagem de pontos aparece ao encostar na moeda.`,
      atividade: `Anexe ao personagem um script com o método OnTriggerEnter. Quando ele encostar em um objeto com a Tag Coletavel, chame gm.GanharPontos(10) e destrua a moeda. Rode a cena, colete a moeda e veja a pontuação subir no Console.`,
      gabarito: `O método correto é: void OnTriggerEnter(Collider outro) { if (outro.CompareTag("Coletavel")) { gm.GanharPontos(10); Destroy(outro.gameObject); } }, com public GerenciadorJogo gm declarado e a referência arrastada no Inspector. Ao encostar na moeda, ela some e o Console mostra a mensagem "Pontos: " seguida do total, como Pontos: 10.`,
    },
    {
      titulo: `Sistema de vidas com condição`,
      tipo: `desafio`,
      tempo: `12 minutos`,
      guiaProfessor: `Reforce a ideia de condição: o if que pergunta se as vidas chegaram a zero. Sugira criar um item ou uma zona perigosa com Tag própria que chame PerderVida. Confira que o fim de jogo só aparece quando as vidas zeram.`,
      atividade: `No GerenciadorJogo, use o método PerderVida para diminuir uma vida e, com uma condição, mostrar "Fim de jogo" no Console quando as vidas chegarem a zero. Crie um objeto perigoso com uma Tag própria que chame esse método ao encostar no personagem. Teste perdendo as vidas uma a uma.`,
      gabarito: `O método fica: public void PerderVida() { vidas = vidas - 1; if (vidas <= 0) { Debug.Log("Fim de jogo"); } }, partindo de public int vidas = 3. O objeto perigoso usa um OnTriggerEnter que checa a Tag e chama gm.PerderVida(). Ao encostar três vezes, as vidas vão de 3 para 0 e o Console mostra Fim de jogo apenas na terceira vez.`,
    },
    {
      titulo: `Duas mecânicas próprias e regra de vitória`,
      tipo: `projeto autoral`,
      tempo: `15 minutos`,
      guiaProfessor: `Estimule a autoria: cada aluno deve inventar pelo menos duas mecânicas que não foram dadas prontas. Oriente o uso do Claude para dúvidas de sintaxe, mas peça que o aluno explique cada linha. Deixe dois ou três compartilharem no projetor.`,
      atividade: `Crie pelo menos duas mecânicas próprias, por exemplo uma moeda especial que vale mais pontos e um item que devolve uma vida. Adicione também uma regra de vitória que mostre "Você venceu" no Console ao atingir 50 pontos. Teste cada mecânica na cena.`,
      gabarito: `Uma solução válida cria uma moeda especial com Tag ColetavelOuro que chama gm.GanharPontos(50) e um item de vida com Tag Vida que faz vidas = vidas + 1. A regra de vitória entra no GanharPontos: public void GanharPontos(int valor) { pontos = pontos + valor; if (pontos >= 50) { Debug.Log("Você venceu"); } }. Cada mecânica roda na cena com o comportamento esperado, e o aluno consegue explicar o que cada linha faz.`,
    },
  ],
};
