import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 8,
  titulo: "Entrega do Projeto e Certificado do Ano 3",
  semana: "Semana 4",
  duracao: "1 hora",
  objetivo: `Cada aluno finaliza, testa e apresenta o seu projeto em Python, entrega a versão final e recebe o certificado do Ano 3, celebrando o fim da trilha avançada de games e tecnologia.`,
  descricao: `Esta é a última aula do Ano 3 e o fechamento de toda a trilha avançada. Ao longo do ano, cada aluno criou um jogo completo no Roblox Studio com Lua e modelos 3D do Maya, imprimiu os personagens em 3D no Bambu Studio, construiu um site completo com HTML, CSS, JavaScript, banco de dados, domínio e hospedagem, e neste último mês mergulhou em Python intermediário: leitura e escrita de arquivos, dados em CSV e JSON, funções próprias, módulos e bibliotecas. Hoje todo esse percurso se transforma em uma entrega final e em uma apresentação com orgulho.

A aula não traz nenhum conteúdo técnico novo. O projeto em Python já foi planejado na aula passada (Aula 7) e os alunos vêm trabalhando nele. O foco de hoje é triplo: finalizar o código que ainda falta, testar o programa para garantir que ele roda sem erros e apresentar o resultado para a turma. É a hora de juntar as peças, deixar o programa apresentável e contar a história de como ele funciona.

O papel do professor é de mestre de cerimônias e técnico de apoio. Você ajuda quem está com um erro de última hora, conduz a ordem das apresentações, garante que cada programa seja salvo e executado pelo menos uma vez na frente da turma e cuida do clima de celebração. Ninguém é avaliado pela complexidade do código; cada aluno é celebrado por ter um programa em Python que funciona e que ele consegue explicar com as próprias palavras.

O ponto alto da aula é a entrega do certificado do Ano 3, que marca a conclusão da trilha avançada de games e tecnologia. É o momento de olhar para trás e perceber o salto: de alguém que estava começando a quem agora cria jogos, imprime personagens em 3D, publica um site na internet e escreve programas em Python. A aula termina com a foto da turma, os aplausos e a comemoração de tudo o que foi construído no ano.`,
  materiais: [
    `Computadores com Python instalado (versão 3) e um editor de código, como o Thonny ou o VS Code, com os projetos dos alunos salvos.`,
    `Projetor ou TV grande, testado antes da aula, para a turma assistir cada programa rodando com nitidez.`,
    `Arquivos de exemplo que os projetos usam (como dados.csv ou dados.json) na mesma pasta de cada projeto, para os programas não quebrarem por falta de arquivo.`,
    `Pen drive ou pasta na nuvem para cada aluno guardar a versão final do projeto e levar para casa.`,
    `Lista com a ordem de apresentação dos alunos e um roteiro curto de apresentação impresso ou no projetor.`,
    `Certificados do Ano 3 impressos e assinados, um por aluno, com o nome conferido letra por letra antes da aula.`,
    `Câmera ou celular carregado para a foto da turma e, se possível, um lanche para a confraternização final.`,
  ],
  conceitosChave: [
    `Entrega final — a versão concluída do projeto, salva e pronta para mostrar, que encerra o trabalho do mês.`,
    `Teste — rodar o programa de propósito para ver se ele funciona sem erros antes de apresentar.`,
    `Bug — um erro no programa que faz ele parar ou se comportar de um jeito errado, e que precisa ser corrigido.`,
    `Apresentação (demo) — a fala curta em que você roda o programa e explica, em poucas palavras, o que ele faz.`,
    `Portfólio — o conjunto de tudo que você criou no ano (jogo, impressões 3D, site e programa em Python), que prova o que você sabe fazer.`,
    `Certificado do Ano 3 — o documento que comprova que você concluiu o terceiro ano e a trilha avançada de games e tecnologia.`,
    `Versão final — a cópia oficial e salva do código, sem mudanças pela metade, que será entregue e guardada.`,
  ],
  treinamento: `## O que o professor precisa saber

Hoje você não ensina nenhum recurso novo de Python. A aula é de FINALIZAÇÃO, TESTE, APRESENTAÇÃO e CELEBRAÇÃO. O projeto já foi planejado na Aula 7 e cada aluno vem construindo o seu. Seu trabalho é ajudar a fechar o que falta, garantir que cada programa rode sem erro e conduzir um pequeno evento de apresentações, terminando com a entrega do certificado do Ano 3. O clima é festivo e acolhedor: ninguém é avaliado por código complicado, e sim celebrado por ter um programa que funciona.

Tecnicamente, você só precisa saber salvar e rodar um programa em Python. No editor (Thonny ou VS Code), salve o arquivo com Ctrl+S. Para rodar, no Thonny clique no botão verde de play ou pressione F5; no VS Code use o botão de play no canto superior direito ou pressione F5. O programa executa e a saída aparece na área de terminal embaixo. Se aparecer um texto vermelho, é um erro: a última linha do erro costuma dizer o que aconteceu. Teste isso antes da aula e confira o projetor.

Para mostrar uma mensagem na tela em Python, lembre os alunos de usar a função print. Para juntar texto com um valor, oriente a usar a vírgula dentro do print, assim:

print("Pontos:", pontos)

Evite ensinar interpolação com chaves; a forma com vírgula já resolve e é mais simples de explicar.

## Passo a passo da aula (ritmo 10/15/25/10, com o código exato)

10 min - Aquecimento e revisão: Reúna a turma e pergunte: "O que o seu programa faz?". Cada aluno responde em uma frase. Mostre no projetor como salvar (Ctrl+S) e rodar (F5) um programa de exemplo simples, para todos relembrarem. Use este exemplo no quadro:

nome = "Santos Tech"
print("Bem-vindo ao projeto de", nome)

Salve, rode e mostre a saída aparecendo no terminal.

15 min - Conteúdo novo guiado: Apresente o roteiro de finalização em 3 passos no projetor: (1) Terminar o código que falta; (2) Testar rodando do começo ao fim e corrigir erros; (3) Apresentar. Mostre como ler um erro: rode de propósito um print escrito errado, como prnt("oi"), veja a mensagem vermelha e corrija para print("oi"). Diga que ler a última linha do erro é o primeiro passo para resolver.

25 min - Mão na massa: Cada aluno finaliza o seu projeto, salva com Ctrl+S e roda com F5 pelo menos uma vez sem erro. Circule pela sala ajudando a fechar funções, conferindo se os arquivos de exemplo (como dados.csv) estão na pasta certa e ajudando a ler mensagens de erro. Peça que cada um deixe o programa pronto para apresentar e salve uma cópia no pen drive ou na nuvem.

10 min - Desafio e compartilhar: Chame os alunos um a um pela lista. Cada um roda o programa no projetor e explica em poucas frases o que ele faz. Depois das apresentações, entregue o certificado do Ano 3, tire a foto da turma e comemore com uma grande salva de palmas.

## Como explicar de forma clara (linguagem para a idade)

Para adolescentes, trate a entrega como o lançamento de um produto: "Hoje você não é só quem programou; é quem apresenta o seu lançamento." Compare testar a um teste de jogo: "Antes de mostrar para todos, você joga sozinho para achar os bugs." Para ler erros, use a ideia de detetive: "O texto vermelho é uma pista; a última linha quase sempre diz onde está o problema." Lembre que salvar é como guardar o save de um jogo: "Sem salvar, o seu progresso some." Demonstre você primeiro, fale frases curtas e valorize todo programa que roda, mesmo que seja simples.

## Erros comuns e como ajudar

- Esquecer de salvar antes de rodar: oriente o hábito de apertar Ctrl+S antes de cada F5.
- Programa não acha o arquivo (erro de FileNotFoundError): confira se o dados.csv ou dados.json está na mesma pasta do programa e com o nome exato.
- Erro de indentação (IndentationError): mostre que os espaços no começo das linhas dentro de funções e laços precisam estar alinhados.
- Travar no nervosismo da apresentação: ofereça apresentar em dupla ou só rodar o programa enquanto você narra.
- Querer adicionar uma função nova na última hora e quebrar tudo: oriente a salvar uma versão que funciona primeiro e só depois tentar algo extra.`,
  exercicios: [
    {
      titulo: `Salvar e rodar o seu projeto`,
      tipo: `Prática na ferramenta`,
      tempo: `7 min`,
      guiaProfessor: `Garanta que cada aluno consiga salvar o projeto com Ctrl+S e rodá-lo com F5. Circule conferindo se a saída aparece no terminal e ajude quem vir texto vermelho a ler a última linha do erro. O objetivo é ter, no fim, todo programa rodando ao menos uma vez.`,
      atividade: `1. Abra o seu projeto em Python no editor (Thonny ou VS Code).
2. Salve o arquivo com Ctrl+S.
3. Rode o programa com F5 (ou o botão de play).
4. Observe a saída no terminal embaixo e confira se não apareceu texto vermelho de erro.`,
      gabarito: `Acertou quem salva e roda o programa, vendo a saída aparecer no terminal sem erro. Exemplo de sucesso: o aluno aperta Ctrl+S, depois F5, e o resultado do programa aparece na área de baixo. Se aparecer texto vermelho, o aluno deve ler a última linha do erro e pedir ajuda. O objetivo é ter o programa rodando ao menos uma vez.`,
    },
    {
      titulo: `Achar e corrigir um bug`,
      tipo: `Prática na ferramenta`,
      tempo: `8 min`,
      guiaProfessor: `Ensine a ler erros usando um exemplo simples e seguro. Peça que o aluno escreva um print errado de propósito, rode, leia a mensagem vermelha e corrija. Reforce que a última linha do erro é a pista principal. Depois, peça que apliquem isso ao próprio projeto, caso tenham algum erro.`,
      atividade: `1. Em um arquivo novo, digite a linha errada: prnt("teste").
2. Rode com F5 e leia o texto vermelho que aparecer.
3. Corrija a palavra para print("teste") e rode de novo.
4. Confira se agora aparece a palavra teste no terminal, sem erro.`,
      gabarito: `Acertou quem corrige a linha de prnt("teste") para print("teste") e vê a palavra teste aparecer no terminal sem texto vermelho. O erro original é um NameError, porque prnt não existe. O aluno mostra que aprendeu a ler a mensagem e arrumar o código. O objetivo é praticar achar e corrigir um bug simples.`,
    },
    {
      titulo: `Mensagem final do programa`,
      tipo: `Projeto curto`,
      tempo: `8 min`,
      guiaProfessor: `Peça que cada aluno acrescente ao final do projeto uma mensagem de encerramento que mostre algo importante do programa, usando print com vírgula para juntar texto e valor. Ajude a escolher uma variável que já exista no projeto. Reforce o uso da vírgula dentro do print para não complicar.`,
      atividade: `1. No final do seu projeto, crie uma variável, por exemplo: total = 10.
2. Escreva uma mensagem de encerramento usando print com vírgula:
   print("Fim do programa. Total:", total)
3. Salve com Ctrl+S e rode com F5.
4. Confira se a mensagem com o valor aparece no terminal.`,
      gabarito: `Acertou quem mostra uma mensagem final juntando texto e valor com vírgula dentro do print. Solução de exemplo:

total = 10
print("Fim do programa. Total:", total)

A saída esperada no terminal é: Fim do programa. Total: 10. O objetivo é deixar o programa com um encerramento claro e praticar o print com vírgula.`,
    },
    {
      titulo: `Apresentar o projeto para a turma`,
      tipo: `Desafio`,
      tempo: `20 min`,
      guiaProfessor: `Este é o ponto alto da entrega. Chame os alunos um a um pela lista, como apresentador: "Com vocês, o projeto da Ana!". Ajude cada um a rodar o programa no projetor com F5. Peça que expliquem em poucas frases o que o programa faz e mostrem ele funcionando. Quem estiver tímido pode apresentar em dupla ou só rodar enquanto você narra. Puxe os aplausos ao fim de cada um e nunca aponte erros diante da plateia.`,
      atividade: `1. Espere o professor chamar o seu nome e vá até a frente.
2. Rode o seu projeto no projetor apertando F5.
3. Explique em poucas frases o que o programa faz e mostre ele funcionando.
4. Receba os aplausos da turma.`,
      gabarito: `Acertou todo aluno que apresenta o seu projeto em qualquer nível: sozinho, em dupla, com fala longa ou uma só frase. Exemplo de sucesso: o aluno roda o programa, ele funciona no projetor e o aluno diz algo como "meu programa lê um arquivo e mostra os dados na tela". Não há nota nem resposta errada; o objetivo é a coragem de apresentar e mostrar o programa rodando. Cada participação merece a mesma celebração.`,
    },
    {
      titulo: `Certificado do Ano 3, foto e celebração`,
      tipo: `Roda de conversa`,
      tempo: `10 min`,
      guiaProfessor: `Feche o Ano 3 com chave de ouro. Reúna a turma em roda e conduza uma conversa rápida: cada aluno diz uma coisa de que mais se orgulha no ano, lembrando do jogo no Roblox, dos personagens impressos em 3D, do site publicado e do programa em Python. Em seguida, chame um a um para receber o certificado do Ano 3, parabenizando pelo nome, sem deixar ninguém de fora. Junte a turma para a foto e relembre, animado, todo o percurso. Encerre com uma grande salva de palmas.`,
      atividade: `1. Na roda, diga uma coisa que você aprendeu ou de que mais se orgulha neste ano.
2. Quando o professor chamar o seu nome, vá receber o seu certificado do Ano 3.
3. Junte-se à turma para a foto de encerramento.
4. Bata uma grande palma por você, pelos colegas e pela jornada do ano inteiro.`,
      gabarito: `Acertou quem participa da roda dizendo algo que aprendeu e recebe o certificado junto da celebração. Exemplos de respostas certas: "Fiz um jogo no Roblox com Lua", "Imprimi o meu personagem em 3D", "Publiquei o meu site na internet", "Criei um programa em Python que funciona". Qualquer participação, até uma frase curta ou um sorriso na foto, conta como sucesso. O objetivo é encerrar o Ano 3 celebrando o crescimento de cada aluno e a conclusão da trilha avançada de games e tecnologia.`,
    },
  ],
};
