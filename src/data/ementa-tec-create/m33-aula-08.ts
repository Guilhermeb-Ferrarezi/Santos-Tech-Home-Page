import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 8,
  titulo: "Site Interativo Pronto: Entrega e Apresentação",
  semana: "Semana 4",
  duracao: "1 hora",
  objetivo: `Finalizar, testar e apresentar à turma o site interativo completo em JavaScript, consolidando o entregável do mês.`,
  descricao: `Esta é a aula que fecha o mês de JavaScript intermediário. Durante quatro semanas os alunos aprenderam a tomar decisões no código com if/else, a repetir tarefas com loops, a capturar dados em formulários, a responder ao usuário com eventos e validação, a manipular a página em tempo real e a organizar tudo em funções. Agora chegou o momento de juntar essas peças, fazer um teste final de todas as funcionalidades e apresentar o site interativo pronto, que é o entregável do mês.

Apresentar um projeto é uma habilidade tão importante quanto programá-lo. Em empresas de tecnologia, equipes fazem uma demonstração, em inglês chamada demo, ao final de cada ciclo de trabalho. Nessa demonstração, mostram o que o produto faz, contam quais problemas resolveram e ouvem o retorno dos colegas. Nesta aula o aluno faz exatamente isso: roda um roteiro de testes para garantir que cada botão, formulário e mensagem funciona, corrige os últimos detalhes e então mostra seu site em funcionamento para a turma.

Esta aula também é a etapa 4 de 5 do projeto do ano. O aluno já criou um jogo no Roblox Studio com Lua e assets do Maya, já imprimiu personagens em 3D e está agora concluindo o site completo, que ganhou interatividade com JavaScript neste mês. Em seguida virá a etapa de Python. Por isso a apresentação de hoje não é só um encerramento: é uma ponte que mostra como o site evoluiu de páginas estáticas para uma experiência que reage ao usuário.

O clima da aula deve ser de celebração e capricho. Não é dia de começar funcionalidades novas, e sim de finalizar, testar e apresentar. O professor conduz como um líder de demonstração: ajuda cada aluno a rodar o teste final, a corrigir o que aparecer e a falar com clareza e orgulho sobre o que construiu.`,
  materiais: [
    `Computadores com editor de código (VS Code) e navegador atualizado, um por aluno`,
    `Projetor ou TV conectada para a demonstração coletiva da turma`,
    `Arquivos do projeto de cada aluno: index.html, style.css e script.js`,
    `Arquivo de exemplo do professor com um site interativo finalizado, para servir de referência`,
    `Roteiro de testes impresso ou no quadro, com a lista de funcionalidades a conferir`,
    `Cronômetro visível para controlar o tempo de cada apresentação`,
  ],
  conceitosChave: [
    `Entregável — versão final e funcionando do projeto, pronta para ser apresentada e usada.`,
    `Teste final — conferência de todas as funcionalidades, uma por uma, para garantir que nada está quebrado.`,
    `Roteiro de testes — lista de passos que descreve o que clicar e o que deve acontecer em cada caso.`,
    `Demonstração (demo) — apresentação curta em que o autor mostra o projeto funcionando e explica o que faz.`,
    `Console — painel do navegador, aberto com F12, que mostra erros e mensagens do JavaScript.`,
    `Retorno (feedback) — comentário dos colegas com um elogio específico e uma sugestão de melhoria.`,
    `Versão final — arquivo salvo e organizado que representa o projeto concluído do mês.`,
  ],
  treinamento: `## O que o professor precisa saber

Esta aula é de finalização, não de criação. O objetivo é que cada aluno teste e apresente o site interativo construído ao longo do mês. Você precisa dominar três ações simples no navegador e no editor. Primeiro, abrir o site: clique com o botão direito no arquivo index.html e escolha abrir no navegador, ou use a extensão Live Server no VS Code. Segundo, abrir o console: pressione F12 e vá na aba Console; ali aparecem os erros em vermelho. Terceiro, ler um erro: o console mostra o nome do arquivo e o número da linha onde o problema está. Antes da aula, abra o seu site de exemplo, pressione F12 e confira que o console está limpo, sem mensagens em vermelho. Assim você chega seguro para ajudar. Lembre que o entregável do mês é o site interativo pronto, então o capricho no teste final importa.

## Passo a passo da aula (ritmo 10/15/25/10)

Aquecimento e revisão (10 min): peça que cada aluno abra seu projeto no editor e no navegador. Pergunte qual funcionalidade tem mais orgulho. Mostre no projetor o seu site de exemplo finalizado, para que todos vejam o nível de acabamento esperado.

Conteúdo novo guiado (15 min): com o projetor ligado, ensine o teste final. Abra o site, pressione F12 e mostre o console limpo. Apresente um roteiro de testes simples e diga em voz alta cada passo enquanto executa. Por exemplo, mostre como conferir uma mensagem na tela com este trecho:

var nome = document.getElementById("campoNome").value;
if (nome === "") {
  alert("Por favor, digite seu nome.");
} else {
  document.getElementById("saida").textContent = "Bem-vindo, " + nome;
}

Explique que cada linha do roteiro tem uma ação e um resultado esperado. Mostre também como ler um erro no console: clique no nome do arquivo e na linha indicada para ir direto ao problema.

Mão na massa (25 min): cada aluno roda o roteiro de testes no próprio site, conferindo botões, formulários, validações e mensagens. Anota o que falhou, corrige no editor, salva e testa de novo. Circule pela sala olhando o console de cada um e ajudando a interpretar os erros em vermelho.

Desafio e compartilhar (10 min): cada aluno faz a demonstração no projetor por cerca de um minuto, mostrando o site funcionando e contando qual parte foi mais difícil. A turma dá um elogio específico e uma sugestão a cada apresentação.

## Como explicar de forma clara (linguagem para a idade)

Use a ideia de um teste de qualidade, como o de um brinquedo antes de chegar à loja: "Antes de mostrar, a gente testa tudo para nada quebrar na frente da turma." Compare o roteiro de testes a uma lista de checagem de astronauta: cada item é conferido antes de decolar. Diga que o console é o painel secreto do navegador: "Aperta F12 e ele te conta onde está o erro, igual a um detetive." Sobre o erro em vermelho, tranquilize: "Erro não é fracasso, é uma pista do que ajustar." Reforce que apresentar bem é uma habilidade profissional e que falar do próprio trabalho com segurança vale tanto quanto o código.

## Erros comuns e como ajudar

O erro mais frequente é não abrir o console e não perceber que algo está quebrado; oriente sempre o F12 antes de testar. Outro erro é confundir comparação com atribuição, usando um só sinal de igual em vez de dois ou três; mostre que a comparação precisa de === e a atribuição de um só sinal. Muitos esquecem de salvar o arquivo antes de testar e acham que a correção não funcionou; reforce o hábito de salvar e recarregar a página. Há quem erre o nome do id no getElementById, o que faz a função retornar nulo; peça para conferir letra por letra entre o HTML e o JavaScript. Por fim, alguns travam na hora de apresentar; combine uma frase pronta, como "Esse é o meu site e essa é a parte que mais gostei de programar", para destravar a fala.`,
  exercicios: [
    {
      titulo: `Abra o console e confira o site`,
      tipo: `prática na ferramenta`,
      tempo: `6 min`,
      guiaProfessor: `Conduza no projetor enquanto os alunos repetem. Garanta que todos consigam abrir a aba Console e identificar se há erros em vermelho.`,
      atividade: `Abra seu site no navegador, pressione F12, vá na aba Console e verifique se aparece alguma mensagem em vermelho. Anote quantos erros encontrou.`,
      gabarito: `O aluno abre o console e relata o estado dele. Se o console estiver limpo, não há erros e o site pode seguir para o teste. Se houver mensagens em vermelho, o aluno anota o nome do arquivo e a linha indicada para corrigir em seguida.`,
    },
    {
      titulo: `Rode o roteiro de testes`,
      tipo: `prática guiada`,
      tempo: `8 min`,
      guiaProfessor: `Entregue ou projete um roteiro com três a cinco passos. Peça que o aluno escreva ao lado de cada passo se passou ou falhou.`,
      atividade: `Siga o roteiro de testes do seu site: para cada funcionalidade, faça a ação e confira se o resultado esperado acontece. Marque cada item como passou ou falhou.`,
      gabarito: `O aluno produz uma lista preenchida, por exemplo: clicar no botão enviar mostra a mensagem (passou); deixar o campo vazio exibe o aviso (passou); digitar o nome troca o texto na tela (falhou). Os itens marcados como falhou viram a lista de correções.`,
    },
    {
      titulo: `Conserte o campo que não valida`,
      tipo: `desafio`,
      tempo: `10 min`,
      guiaProfessor: `Aponte ou simule um formulário que aceita o campo vazio sem avisar. Deixe o aluno descobrir a causa antes de dar a dica sobre o if e a comparação.`,
      atividade: `O formulário está deixando enviar mesmo com o campo de nome vazio. Conserte para que apareça um aviso quando o campo estiver em branco.`,
      gabarito: `A correção usa uma condição que compara o valor com texto vazio:

var nome = document.getElementById("campoNome").value;
if (nome === "") {
  alert("Por favor, digite seu nome.");
} else {
  document.getElementById("saida").textContent = "Bem-vindo, " + nome;
}

O conserto está certo quando o aviso aparece com o campo vazio e a mensagem de boas-vindas aparece com o nome preenchido.`,
    },
    {
      titulo: `Roda de demonstração`,
      tipo: `roda de conversa`,
      tempo: `8 min`,
      guiaProfessor: `Conduza a conversa garantindo que cada aluno fale. Estimule elogios específicos e sugestões concretas, e não apenas um genérico ficou bom.`,
      atividade: `Em roda, cada aluno mostra uma funcionalidade do seu site e explica como a programou. Os colegas dão um elogio específico e uma sugestão de melhoria.`,
      gabarito: `Não há resposta única. Espera-se que o aluno explique a lógica com termos como evento, condição, função ou mensagem na tela, e que os colegas apontem algo concreto, como a clareza do aviso de erro ou a beleza da troca de texto ao clicar.`,
    },
    {
      titulo: `Entregue o site interativo pronto`,
      tipo: `projeto curto`,
      tempo: `12 min`,
      guiaProfessor: `Este é o fechamento do entregável. Acompanhe o teste final, a organização dos arquivos e ajude quem travar na apresentação com uma frase pronta.`,
      atividade: `Faça o teste final do site inteiro, corrija os últimos detalhes, salve os arquivos organizados e apresente o site funcionando para a turma em até um minuto.`,
      gabarito: `O aluno entrega um site com pelo menos um formulário com validação, um evento de clique funcionando e uma mensagem que muda na tela, com o console sem erros em vermelho, e apresenta dizendo o nome do site e a parte de que mais se orgulha. Isso conclui a etapa 4 de 5 do projeto do ano.`,
    },
  ],
};
