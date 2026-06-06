import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 7,
  titulo: "Hora de Imprimir!",
  semana: "Semana 4",
  duracao: "1 hora",
  objetivo: `Enviar o arquivo já fatiado para a impressora 3D da escola e acompanhar com segurança o início da impressão, observando as primeiras camadas ganharem forma.`,
  descricao: `Hoje é o grande dia: o arquivo que os alunos fatiaram na aula passada deixa o computador e vira plástico de verdade. Esta aula é sobre transferir o código G (arquivo .gcode ou .3mf que o Orca Slicer gera) para a impressora 3D da escola e ligar a impressão pela primeira vez. É um momento de empolgação, mas também de responsabilidade: a impressora tem partes quentes e peças que se movem, então a segurança vem antes de tudo.

O coração desta aula está nas primeiras camadas. A primeira camada é a mais importante de toda a impressão, porque é ela que gruda na mesa e segura a peça no lugar. Se ela não aderir bem, a peça solta no meio do caminho e vira um emaranhado de plástico que os alunos chamam carinhosamente de "ninho de espaguete". Por isso, os alunos vão aprender a olhar com atenção para essa primeira camada e reconhecer quando ela está boa ou quando algo deu errado.

Como cada turma tem até 10 alunos e a escola costuma ter uma ou poucas impressoras, esta aula funciona muito bem com o professor conduzindo uma impressão ao vivo no projetor enquanto os alunos preparam e validam seus próprios arquivos no Orca Slicer. Cada aluno deixa seu arquivo pronto e exportado, formando uma fila de impressão que continuará ao longo da semana. O importante é que todos entendam o caminho completo: do clique em "Fatiar" até o bico depositando a primeira linha de filamento.

Ao final, os alunos terão visto uma impressão começar de verdade, saberão como exportar o próprio arquivo corretamente e conhecerão as regras de segurança da bancada. Eles saem da aula ansiosos para a próxima, quando finalmente vão segurar o personagem impresso na mão.`,
  materiais: [
    `Computadores com Orca Slicer instalado e com o projeto fatiado da aula anterior aberto`,
    `Impressora 3D da escola ligada, calibrada e com filamento carregado`,
    `Projetor ou TV para o professor mostrar a impressora e a tela do Orca Slicer ao vivo`,
    `Cartão microSD ou cabo USB/rede para transferir o arquivo até a impressora`,
    `Arquivo de exemplo do personagem já fatiado (.3mf ou .gcode) para garantir uma impressão de demonstração`,
    `Espátula ou raspador e luva térmica para manuseio seguro da peça e da mesa quente`,
    `Cartaz ou slide com as regras de segurança da impressora 3D`,
  ],
  conceitosChave: [
    `Código G (G-code) — a lista de instruções que o Orca Slicer gera para dizer à impressora para onde mover o bico, quanto filamento soltar e em que temperatura.`,
    `Exportar — salvar o arquivo fatiado em um cartão ou enviá-lo pela rede para que a impressora consiga lê-lo.`,
    `Primeira camada — a camada inicial depositada sobre a mesa; é a que mais importa, pois segura toda a peça.`,
    `Aderência — a "cola" natural que prende o plástico à mesa aquecida; sem ela, a peça solta no meio da impressão.`,
    `Mesa aquecida — a base que esquenta para o filamento grudar melhor; fica quente e não pode ser tocada com a mão nua.`,
    `Pré-aquecimento — o tempo que a impressora leva para esquentar o bico e a mesa antes de começar a desenhar a peça.`,
    `Ninho de espaguete — apelido para a falha em que a peça solta e o bico imprime plástico no ar, formando uma bagunça.`,
  ],
  treinamento: `## O que o professor precisa saber

Você não precisa ser especialista em impressão 3D para dar esta aula, mas precisa ter feito ao menos um teste antes. Garanta que a impressora esteja calibrada, com filamento carregado e a mesa limpa. Tenha um arquivo de exemplo já fatiado pronto para iniciar a impressão de demonstração, caso algum aluno trave. O conceito central de hoje é simples: o Orca Slicer transforma o modelo em "código G", e esse arquivo precisa chegar até a impressora. Os três caminhos mais comuns são: salvar no cartão microSD, enviar pela rede (botão de impressão direta) ou copiar via USB. Saiba qual sua impressora usa e teste antes.

## Passo a passo da aula (ritmo 10/15/25/10)

Aquecimento (10 min): Pergunte à turma o que aconteceu na aula passada (eles fatiaram a peça e viram a prévia das camadas). Mostre no projetor a impressora ligada e apresente o cartaz de segurança: bico quente, mesa quente, partes que se movem, nunca colocar a mão dentro durante a impressão. Combine que só o professor encosta na máquina.

Conteúdo novo guiado (15 min): No Orca Slicer, com o projeto da aula anterior aberto, clique no botão "Fatiar placa" (Slice plate), no canto superior direito. Quando terminar, o botão muda para "Imprimir" ou "Exportar G-code". Mostre os dois caminhos: o botão "Exportar G-code para arquivo" (Export G-code) salva um .gcode no cartão; o botão "Imprimir" (Print) envia direto pela rede, se a impressora estiver conectada na aba "Dispositivo" (Device). Aponte o painel à direita com tempo estimado e gramas de filamento. Diga: "Esse número é quanto tempo a impressora vai trabalhar."

Mão na massa (25 min): Cada aluno abre seu próprio projeto, confere se a peça está apoiada na mesa e dentro da área cinza, clica em "Fatiar placa" e exporta o arquivo para o cartão (ou salva na pasta combinada). Enquanto isso, você inicia a impressão de demonstração no projetor: insira o cartão, escolha o arquivo no menu da impressora, confirme e acompanhe o pré-aquecimento. Quando a primeira camada começar, reúna a turma perto (a uma distância segura) para ver as primeiras linhas de filamento. Aponte: "Veja como o plástico está grudando na mesa. Isso é a aderência."

Desafio e compartilhar (10 min): Peça que cada aluno mostre na tela seu tempo estimado de impressão e diga em voz alta quantas horas e gramas. Faça a roda: "O que pode dar errado na primeira camada?" Anote as respostas. Combine a ordem da fila de impressão da semana.

## Como explicar de forma clara (linguagem para a idade)

Use comparações do dia a dia. Diga que a impressora é como uma "caneta de cola quente robô" que desenha camada por camada, de baixo para cima, como empilhar panquecas finas. Explique a primeira camada assim: "É o alicerce da casa. Se o chão não estiver firme, a casa inteira desaba." Para aderência, compare com adesivo: a mesa quente deixa o plástico molinho o bastante para colar. Sobre segurança, seja direto e sem drama: "O bico fica a mais de 200 graus, mais quente que uma chapa de fogão. Olhamos com os olhos, não com as mãos."

## Erros comuns e como ajudar

O erro mais frequente é o aluno tentar exportar sem antes clicar em "Fatiar placa" — o botão de exportar fica apagado. Mostre que primeiro fatia, depois exporta. Outro erro é a peça ter saído da área de impressão (fora do quadrado cinza); peça que arrastem de volta ao centro com a ferramenta "Mover" (atalho M). Alguns esquecem de selecionar a placa certa ou exportam com o filamento errado configurado — confira rapidamente. Na impressora, o erro clássico é a primeira camada não grudar; se isso acontecer na demonstração, transforme em aula: pause, mostre que a mesa pode estar suja ou o bico longe demais, e reinicie com calma. Nunca deixe os alunos tocarem na máquina em funcionamento.`,
  exercicios: [
    {
      titulo: `Exportando meu arquivo para a impressora`,
      tipo: `Prática na ferramenta`,
      tempo: `10 minutos`,
      guiaProfessor: `Acompanhe cada aluno abrir o projeto fatiado da aula anterior. Verifique se a peça está dentro da área cinza antes de exportar. Lembre-os de clicar primeiro em "Fatiar placa" e só depois em "Exportar G-code".`,
      atividade: `Abra seu projeto no Orca Slicer, clique em "Fatiar placa", depois em "Exportar G-code para arquivo" e salve o arquivo na pasta (ou cartão) indicada pelo professor.`,
      gabarito: `O aluno gera com sucesso um arquivo .gcode (ou .3mf) salvo no local combinado. O caminho correto é: Fatiar placa, aguardar a prévia aparecer, e então Exportar G-code. Sem fatiar primeiro, o botão de exportar fica apagado.`,
    },
    {
      titulo: `Detetive da primeira camada`,
      tipo: `Desafio de observação`,
      tempo: `8 minutos`,
      guiaProfessor: `Use a impressão de demonstração ao vivo no projetor. Reúna a turma a uma distância segura quando a primeira camada começar. Conduza o olhar dos alunos para as linhas grudando na mesa.`,
      atividade: `Observe a primeira camada da impressão de demonstração e responda: as linhas de plástico estão grudando bem na mesa ou estão se soltando? Como você sabe?`,
      gabarito: `Uma primeira camada boa mostra linhas lisas, bem coladas e grudadas umas nas outras, sem se enrolar. Se as linhas levantam, enrolam ou não grudam, a aderência está ruim. O aluno deve justificar olhando se o plástico está firme na mesa.`,
    },
    {
      titulo: `Guardiões da segurança`,
      tipo: `Atividade em dupla`,
      tempo: `8 minutos`,
      guiaProfessor: `Forme duplas. Cada dupla recebe o cartaz de segurança como referência. Circule e confira se citam o bico quente, a mesa quente e as partes móveis. Reforce que só o professor encosta na máquina.`,
      atividade: `Em dupla, criem uma lista com três regras de segurança da impressora 3D e expliquem por que cada uma é importante.`,
      gabarito: `Exemplos válidos: 1) Não tocar no bico nem na mesa, porque ficam muito quentes e queimam; 2) Não colocar a mão dentro durante a impressão, porque as partes se movem; 3) Só o professor opera a máquina, para evitar acidentes. Cada regra deve vir com uma justificativa clara.`,
    },
    {
      titulo: `Quanto tempo e quanto plástico?`,
      tipo: `Roda de conversa`,
      tempo: `7 minutos`,
      guiaProfessor: `Peça que cada aluno mostre na própria tela o painel à direita com o tempo estimado e os gramas de filamento. Anote os números num quadro para comparar as peças da turma.`,
      atividade: `Olhe o painel do Orca Slicer e diga em voz alta quanto tempo sua impressão vai levar e quantos gramas de filamento ela usa. Compare com a peça de um colega: qual demora mais? Por quê?`,
      gabarito: `O aluno localiza corretamente o tempo estimado e o peso em gramas no painel de informações após o fatiamento. Peças maiores, mais altas ou com mais preenchimento demoram mais e gastam mais filamento. A comparação deve relacionar tamanho/preenchimento ao tempo.`,
    },
    {
      titulo: `Planejando a fila de impressão da turma`,
      tipo: `Projeto curto`,
      tempo: `12 minutos`,
      guiaProfessor: `Ajude a turma a organizar a ordem das impressões da semana, já que há poucas impressoras. Use os tempos estimados como critério. Registre a lista num cartaz ou documento compartilhado.`,
      atividade: `Junto com a turma, montem uma fila de impressão da semana: listem os arquivos de todos, anotem o tempo de cada um e decidam uma ordem justa para imprimir, considerando quanto tempo cada peça leva.`,
      gabarito: `A fila final lista os nomes e arquivos dos alunos com seus tempos estimados e uma ordem combinada. Uma solução justa pode intercalar peças rápidas e lentas ou seguir ordem de finalização, garantindo que todos imprimam dentro da semana. O importante é justificar o critério da ordem.`,
    },
  ],
};
