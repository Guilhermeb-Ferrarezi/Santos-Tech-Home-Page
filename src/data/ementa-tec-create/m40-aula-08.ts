import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 8,
  titulo: "Entrega da Experiência VR",
  semana: "Semana 4",
  duracao: "1 hora",
  objetivo: `Finalizar a experiência VR própria no Unity, gerar a build definitiva, documentar o projeto para o portfólio e apresentá-la aos colegas, que testam e dão retorno no headset, fechando a etapa 3/3 do mês.`,
  descricao: `Esta é a aula que encerra o mês inteiro de Realidade Virtual. Ao longo das sete aulas anteriores, cada aluno imaginou um mundo, escreveu o roteiro, configurou o projeto VR no Unity, montou o ambiente imersivo, programou as interações com as mãos em C#, testou no dispositivo e poliu a experiência com som imersivo. Agora chega o momento mais importante de todos: deixar a experiência oficialmente pronta, transformá-la em uma build definitiva que roda no headset e documentá-la para o portfólio. O entregável do mês é exatamente este — uma experiência VR própria, finalizada e apresentável.

O foco técnico da aula é a finalização em três partes. Primeiro, a build definitiva: o aluno usa o menu Build Settings do Unity para gerar o aplicativo final que será instalado no óculos, conferindo a cena correta e a plataforma certa. Segundo, a documentação para o portfólio: cada aluno escreve uma ficha curta do projeto (nome da experiência, ideia, o que dá para fazer dentro dela, tecnologias usadas) e captura uma imagem ou vídeo da experiência rodando, material que vai compor a vitrine pessoal de jogos. Terceiro, a organização e o backup: tudo guardado em uma pasta com nome claro, separando o material da etapa 3/3 para não se perder nada.

A aula termina com a parte mais especial: a sessão de apresentação. Cada aluno coloca os colegas dentro da sua experiência no headset, observa a reação de quem está jogando e recebe um retorno positivo e específico. Essa rodada de testes cruzados é o coração do encerramento, porque a Realidade Virtual só se prova de verdade quando outra pessoa entra no mundo que você criou. É a primeira vez que o projeto sai da cabeça do autor e vira experiência real para outra pessoa.

Como esta é a última aula do tema VR deste mês e o ano final da trilha, o professor deve garantir que NENHUM aluno termine sem a build gerada, a ficha do projeto escrita, uma captura salva e a pasta organizada com backup. Esse é o critério de sucesso do mês e uma peça importante do portfólio de jogos que fecha a trilha inteira.`,
  materiais: [
    `Computadores com o Unity instalado e o projeto VR de cada aluno já aberto, um por aluno`,
    `Óculos VR (headset) carregados, com cabo de conexão e a área de jogo demarcada, para gerar a build e testar`,
    `Projetor ou TV para a demonstração guiada do Build Settings e para a sessão de apresentação da turma`,
    `Uma pasta padrão criada em cada computador (por exemplo "Experiencia-VR-Etapa3") para receber a build e a documentação`,
    `Arquivo de exemplo já finalizado pelo professor (uma build pronta, uma ficha de projeto e uma captura) para mostrar o resultado esperado`,
    `Modelo de ficha do projeto (documento com os campos a preencher) impresso ou em arquivo, um por aluno`,
    `Pen drive ou pasta na rede para o backup da build e do material da turma`,
  ],
  conceitosChave: [
    `Build — o aplicativo final gerado pelo Unity a partir do projeto; é o que de fato roda dentro do óculos.`,
    `Build Settings — janela do Unity onde se escolhe a plataforma e as cenas que entram na build antes de gerá-la.`,
    `Plataforma de destino — o tipo de dispositivo para o qual a build é feita (por exemplo, Android para óculos autônomos).`,
    `Cena ativa — o arquivo de cena que será incluído na build; precisa estar na lista do Build Settings para aparecer no headset.`,
    `Documentação de portfólio — a ficha e as capturas que descrevem e mostram o projeto para quem não estava na aula.`,
    `Captura — imagem ou vídeo da experiência rodando, usado para apresentar o projeto fora do óculos.`,
    `Entregável — o resultado final combinado para o mês; aqui, a experiência VR própria pronta, com build, ficha e captura.`,
  ],
  treinamento: `## O que o professor precisa saber

Esta é uma aula de finalizar, gerar a build e apresentar, não de criar mecânica nova. A experiência do aluno já está pronta; o trabalho é transformá-la em um aplicativo que roda no óculos, documentá-la e organizar tudo. No Unity, a build é gerada pela janela File > Build Settings. Nela você confere duas coisas: a plataforma de destino (selecionada e marcada com "Switch Platform" se necessário) e a lista "Scenes In Build", onde a cena da experiência precisa aparecer marcada. Com isso pronto, o botão "Build" cria o arquivo do aplicativo na pasta escolhida. Antes da aula, faça você mesmo o caminho completo com um projeto de teste para conhecer cada botão. Você não precisa dominar o Unity: basta saber que o Build Settings fica no menu File, que a cena aberta entra na build pelo botão "Add Open Scenes", e que a pasta de destino e o padrão de nome (nome do aluno mais nome da experiência, sem espaços nem acentos, por exemplo "ana-floresta-vr") já devem estar combinados. Um pequeno trecho de C# de fechamento ajuda a deixar a experiência redonda: um script que mostra uma mensagem final quando o jogador termina.

## Passo a passo da aula (ritmo 10/15/25/10)

Aquecimento (10 min): peça que cada aluno abra o projeto VR e aperte Ctrl+S para salvar a cena. Faça a revisão: o que é uma build? Onde ela roda? Mostre no projetor o seu exemplo finalizado (a build, a ficha do projeto e a captura) e diga: "hoje cada um vai gerar estes três resultados e colocar o colega dentro da sua experiência."

Conteúdo novo guiado (15 min): no projetor, abra um projeto. Vá em File > Build Settings. Mostre a lista "Scenes In Build" e clique em "Add Open Scenes" para garantir que a cena ativa está marcada. Confira a plataforma de destino. Clique em "Build", escolha a pasta padrão, digite o nome combinado e confirme. Enquanto a build é gerada, apresente o script de fechamento abaixo, que mostra uma mensagem ao terminar a experiência (cole em um arquivo FimDaExperiencia.cs):

using UnityEngine;
public class FimDaExperiencia : MonoBehaviour
{
    public string mensagem = "Obrigado por jogar!";
    void OnTriggerEnter(Collider outro)
    {
        if (outro.CompareTag("Player"))
        {
            Debug.Log(string.Format("Fim: {0}", mensagem));
        }
    }
}

Explique cada parte: OnTriggerEnter dispara quando algo entra na zona final; CompareTag("Player") confere se foi o jogador; string.Format monta o texto sem usar interpolacao. Depois, abra a pasta no Windows para todos verem a build pronta.

## Como explicar de forma clara (linguagem para a idade)

Use comparações simples. Diga que a build é "embrulhar o seu mundo num pacote que o óculos consegue abrir". Explique que enquanto o projeto fica no Unity só você consegue mexer, mas a build é a versão que qualquer pessoa coloca e joga. Reforce que documentar para o portfólio é "deixar o seu trabalho contando a própria história" mesmo quando você não está por perto. Na sessão de apresentação, valorize a emoção de ver outra pessoa dentro do seu mundo: "essa experiência saiu da sua cabeça e agora é real para o seu colega." Comemore o fim do mês e o fechamento da trilha.

## Erros comuns e como ajudar

O erro mais comum é o aluno gerar a build com a cena errada ou sem cena na lista; lembre de clicar em "Add Open Scenes" com a cena certa aberta. Outro é esquecer de salvar a cena antes da build, perdendo o último ajuste; reforce o Ctrl+S no aquecimento. Muitos usam acentos, espaços ou nomes repetidos na pasta da build, o que confunde a instalação; padronize o nome. Alguns escolhem a pasta errada e depois não acham o aplicativo; sempre abra a pasta no Windows para confirmar. Há quem termine a build mas esqueça a ficha e a captura, deixando o portfólio incompleto; lembre que o entregável tem três partes. Na apresentação, ajuste a área de jogo e oriente quem observa a respeitar o espaço de quem está no headset. Por fim, garanta o backup: uma build só no computador da escola pode se perder.`,
  exercicios: [
    {
      titulo: `Salvar e conferir a cena`,
      tipo: `Prática na ferramenta`,
      tempo: `6 min`,
      guiaProfessor: `Conduza no projetor enquanto os alunos repetem. Mostre o Ctrl+S e como confirmar pelo nome da cena na aba superior do Unity que é a cena certa. Confirme que cada aluno tem a experiência final aberta antes de seguir para a build.`,
      atividade: `Abra o seu projeto VR, confira pelo nome na aba superior que é a cena da sua experiência final e salve com Ctrl+S. Confira no Hierarchy se os objetos principais (jogador, ambiente, interações) estão presentes.`,
      gabarito: `O aluno tem a cena final aberta e salva, sem alterações pendentes. No Hierarchy aparecem os objetos principais da experiência (o jogador VR, o ambiente e os objetos de interação). A cena está pronta para entrar na build.`,
    },
    {
      titulo: `Gerar a build definitiva`,
      tipo: `Prática na ferramenta`,
      tempo: `9 min`,
      guiaProfessor: `Reforce a ordem. Abra File > Build Settings com cada aluno. Confirme que clicaram em "Add Open Scenes" e que a cena aparece marcada na lista. Verifique a plataforma de destino antes de clicar em "Build" e a pasta padrão escolhida.`,
      atividade: `Vá em File > Build Settings. Clique em "Add Open Scenes" e confira se a sua cena aparece marcada na lista "Scenes In Build". Confira a plataforma de destino. Clique em "Build", escolha a pasta padrão e use o nome aluno-experiencia, sem acentos nem espaços.`,
      gabarito: `O aluno gerou o aplicativo final na pasta padrão. No Build Settings, a cena da experiência estava marcada em "Scenes In Build" e a plataforma de destino estava correta. O arquivo da build foi nomeado no formato aluno-experiencia, sem acentos nem espaços.`,
    },
    {
      titulo: `Script de fechamento em C#`,
      tipo: `Programação`,
      tempo: `10 min`,
      guiaProfessor: `Mostre que o script reage quando o jogador chega na zona final. Reforce o uso de string.Format no lugar de texto interpolado e que o objeto da zona final precisa de um Collider marcado como Is Trigger. Acompanhe a colagem do código e a leitura no Console.`,
      atividade: `Crie um script chamado FimDaExperiencia.cs e faça com que ele escreva no Console uma mensagem de fim quando o jogador entra na zona final. Use OnTriggerEnter e string.Format. Coloque o script no objeto da zona final, marque o Collider como Is Trigger e teste.`,
      gabarito: `using UnityEngine;
public class FimDaExperiencia : MonoBehaviour
{
    public string mensagem = "Obrigado por jogar!";
    void OnTriggerEnter(Collider outro)
    {
        if (outro.CompareTag("Player"))
        {
            Debug.Log(string.Format("Fim: {0}", mensagem));
        }
    }
}
Ao entrar na zona final com o jogador marcado com a tag Player, aparece no Console a mensagem de fim. O Collider da zona precisa estar com Is Trigger ativado para OnTriggerEnter funcionar.`,
    },
    {
      titulo: `Ficha do projeto e captura`,
      tipo: `Projeto curto`,
      tempo: `9 min`,
      guiaProfessor: `Este é o material de portfólio. Entregue o modelo de ficha e oriente o preenchimento curto e claro. Acompanhe a captura: uma imagem ou vídeo da experiência rodando (no Game view ou no próprio headset). Combine claramente que esta é a etapa 3/3 do projeto.`,
      atividade: `Preencha a ficha do seu projeto: nome da experiência, ideia em uma frase, o que dá para fazer dentro dela, tecnologias usadas (Unity, C#, VR). Depois faça uma captura da experiência rodando e salve a ficha e a captura na pasta padrão, junto da build.`,
      gabarito: `A ficha está completa quando traz o nome da experiência, a ideia em uma frase, o que o jogador faz dentro dela e as tecnologias (Unity, C#, VR). Há ao menos uma captura (imagem ou vídeo) da experiência rodando. Ficha e captura estão na pasta padrão, junto da build, fechando a documentação da etapa 3/3.`,
    },
    {
      titulo: `Sessão de apresentação no headset`,
      tipo: `Roda de conversa`,
      tempo: `10 min`,
      guiaProfessor: `Organize a sessão com a área de jogo demarcada e segurança garantida. Cada aluno coloca um colega dentro da sua experiência por cerca de um minuto. Modele a apresentação antes com o seu exemplo. Garanta um retorno positivo e específico e confirme o backup da build de cada aluno.`,
      atividade: `Apresente a sua experiência: coloque um colega no headset para jogar a sua build, conte em uma frase a ideia do mundo e observe a reação dele. Depois, ao testar a experiência de um colega, dê um retorno positivo e específico sobre algo que funcionou bem. Confirme o backup da sua build com o professor.`,
      gabarito: `Não há resposta única: a apresentação está completa quando o aluno coloca um colega para jogar a sua build no headset, explica a ideia do mundo, testa a experiência de outro colega e oferece um retorno positivo e específico. Com a build, a ficha, a captura, a pasta organizada e o backup confirmados, o entregável do mês — a experiência VR própria, etapa 3/3 — está concluído. O professor valida a participação e a entrega, não uma resposta certa.`,
    },
  ],
};
