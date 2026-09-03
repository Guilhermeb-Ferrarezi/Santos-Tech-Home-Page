import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/legal-page";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/privacidade")({
  component: PrivacidadePage,
  head: () =>
    pageMeta({
      title: "Política de Privacidade — Santos Tech",
      description:
        "Como a Santos Tech coleta, usa e protege os dados pessoais de alunos, responsáveis e visitantes, em conformidade com a LGPD (Lei nº 13.709/2018).",
      path: "/privacidade",
    }),
});

function PrivacidadePage() {
  return (
    <LegalPage
      title="Política de Privacidade"
      subtitle="Como tratamos os dados pessoais de alunos, responsáveis e visitantes, em conformidade com a Lei Geral de Proteção de Dados (LGPD — Lei nº 13.709/2018)."
      updatedAt="3 de setembro de 2026"
    >
      <h2>1. Quem somos</h2>
      <p>
        Esta Política de Privacidade descreve como a <strong>Santos Tech</strong>{" "}
        (<strong>R. L. DOS SANTOS GAMES</strong>, inscrita no CNPJ sob o nº{" "}
        <strong>37.565.993/0001-59</strong>, com sede na Av. Nove de Julho, 1992, Jardim
        América, Ribeirão Preto/SP, CEP <strong>14020-170</strong>), doravante
        "Santos Tech", "nós" ou "Escola", trata os dados pessoais coletados por
        meio de suas atividades educacionais presenciais e de seus canais
        digitais (site, área do aluno e checkout de pagamento).
      </p>
      <p>
        Atuamos como <strong>controladora</strong> dos dados pessoais, nos
        termos da LGPD. Levamos a sua privacidade a sério — especialmente a de
        crianças e adolescentes, nosso principal público.
      </p>

      <h2>2. Quais dados coletamos</h2>
      <h3>2.1. Dados de responsáveis e alunos adultos</h3>
      <ul>
        <li><strong>Identificação:</strong> nome completo, CPF ou CNPJ, data de nascimento.</li>
        <li><strong>Contato:</strong> e-mail, telefone/WhatsApp, endereço.</li>
        <li><strong>Dados de pagamento:</strong> informações necessárias para gerar cobranças via Pix (nome, CPF do pagador). <strong>Não armazenamos dados de cartão de crédito</strong> — pagamentos são processados por nosso parceiro de pagamentos.</li>
        <li><strong>Dados acadêmicos:</strong> matrícula, turma, curso, frequência e evolução nas atividades.</li>
      </ul>
      <h3>2.2. Dados de crianças e adolescentes (menores de 18 anos)</h3>
      <ul>
        <li>Nome, data de nascimento e idade do aluno.</li>
        <li>Informações pedagógicas (turma, progresso, projetos criados em aula).</li>
        <li>Eventualmente, imagens (fotos/vídeos) de atividades, <strong>somente</strong> mediante autorização específica do responsável.</li>
      </ul>
      <h3>2.3. Dados de navegação</h3>
      <ul>
        <li>Endereço IP, tipo de dispositivo e navegador, páginas visitadas e cookies (ver seção 7).</li>
      </ul>

      <h2>3. Como e por que usamos seus dados</h2>
      <p>Tratamos dados pessoais para as seguintes finalidades, sempre amparados em uma base legal da LGPD:</p>
      <ul>
        <li><strong>Executar a matrícula e prestar o serviço educacional</strong> (execução de contrato — art. 7º, V).</li>
        <li><strong>Processar pagamentos e emitir cobranças</strong> (execução de contrato e obrigação legal/fiscal — art. 7º, V e II).</li>
        <li><strong>Comunicar</strong> avisos sobre aulas, financeiro e suporte (execução de contrato e legítimo interesse — art. 7º, IX).</li>
        <li><strong>Cumprir obrigações legais e regulatórias</strong> (art. 7º, II).</li>
        <li><strong>Enviar comunicações de marketing</strong> sobre cursos e novidades (consentimento — art. 7º, I; você pode revogar a qualquer momento).</li>
        <li><strong>Melhorar nossos serviços e a segurança</strong> dos sistemas (legítimo interesse — art. 7º, IX).</li>
      </ul>

      <h2>4. Tratamento de dados de crianças e adolescentes</h2>
      <p>
        O tratamento de dados de crianças (até 12 anos incompletos) e
        adolescentes é realizado sempre em seu <strong>melhor interesse</strong>{" "}
        e, quando exigido pelo art. 14 da LGPD, mediante{" "}
        <strong>consentimento específico e destacado dado por pelo menos um dos
        pais ou responsável legal</strong>. Não condicionamos a participação do
        menor em atividades ao fornecimento de dados além dos estritamente
        necessários. O responsável pode, a qualquer momento, solicitar a
        revisão ou exclusão desses dados pelos canais da seção 11.
      </p>

      <h2>5. Com quem compartilhamos</h2>
      <p>Não vendemos seus dados. Compartilhamos apenas o necessário com:</p>
      <ul>
        <li><strong>Processador de pagamentos</strong> (parceiro responsável pela cobrança via Pix), para concluir transações.</li>
        <li><strong>Provedores de tecnologia</strong> (hospedagem, e-mail e infraestrutura) que atuam como operadores, sob contrato e dever de sigilo.</li>
        <li><strong>Autoridades públicas</strong>, quando houver obrigação legal, ordem judicial ou requisição regulatória.</li>
      </ul>
      <p>
        Alguns provedores podem armazenar dados fora do Brasil. Nesses casos,
        adotamos salvaguardas para garantir proteção compatível com a LGPD
        (art. 33).
      </p>

      <h2>6. Por quanto tempo guardamos</h2>
      <p>
        Mantemos os dados pelo tempo necessário às finalidades acima e ao
        cumprimento de obrigações legais (por exemplo, fiscais e contratuais).
        Encerrado esse prazo, os dados são eliminados ou anonimizados, salvo
        hipóteses de guarda obrigatória previstas em lei.
      </p>

      <h2>7. Cookies</h2>
      <p>
        Na sua primeira visita, mostramos um aviso pedindo{" "}
        <strong>consentimento para os cookies de análise</strong>. Enquanto você
        não aceita, <strong>nenhum cookie de análise é gravado</strong> no seu
        navegador e nada é enviado para a nossa ferramenta de estatísticas.
      </p>
      <ul>
        <li>
          <strong>Essenciais (sempre ativos):</strong> mantêm o site funcionando
          e guardam a sua própria escolha sobre cookies, para não perguntarmos de
          novo a cada visita. Não identificam você.
        </li>
        <li>
          <strong>Análise (opcionais, dependem do seu aceite):</strong> usamos o{" "}
          <strong>PostHog</strong> para saber quais páginas são mais visitadas,
          o tipo de dispositivo e de onde a visita veio. Serve apenas para
          melhorar o site.
        </li>
      </ul>
      <p>
        <strong>
          Não vendemos dados, não fazemos remarketing e não montamos perfil
          publicitário
        </strong>{" "}
        — não há pixel de rede de anúncios neste site.
      </p>
      <p>
        No aviso você pode <strong>aceitar</strong> ou abrir{" "}
        <strong>“Gerenciar”</strong>, onde cada categoria tem um controle
        próprio (os essenciais ficam sempre ativos) e há um botão de{" "}
        <strong>“Recusar tudo”</strong>. Nenhum controle opcional vem marcado, e
        fechar ou ignorar o aviso <strong>não</strong> equivale a aceitar.
      </p>
      <p>
        Você pode <strong>mudar ou revogar</strong> a sua escolha a qualquer
        momento pelo link <strong>“Cookies”</strong> no rodapé do site, sem
        qualquer prejuízo. Ao revogar, apagamos os identificadores de análise
        guardados no seu navegador. Também é possível gerenciar cookies nas
        configurações do navegador; desabilitar os essenciais pode afetar
        funcionalidades.
      </p>

      <h2>8. Segurança</h2>
      <p>
        Adotamos medidas técnicas e administrativas para proteger seus dados
        contra acessos não autorizados, perda ou alteração — como controle de
        acesso, criptografia em trânsito e boas práticas de desenvolvimento. Em
        caso de incidente de segurança relevante, comunicaremos os titulares e a
        Autoridade Nacional de Proteção de Dados (ANPD) conforme a lei.
      </p>

      <h2>9. Seus direitos</h2>
      <p>Como titular, você (ou o responsável legal, no caso de menores) pode, a qualquer momento:</p>
      <ul>
        <li>Confirmar a existência de tratamento e acessar seus dados;</li>
        <li>Corrigir dados incompletos, inexatos ou desatualizados;</li>
        <li>Solicitar anonimização, bloqueio ou eliminação de dados desnecessários;</li>
        <li>Solicitar a portabilidade dos dados;</li>
        <li>Revogar o consentimento e se opor a tratamentos;</li>
        <li>Ser informado sobre o compartilhamento dos seus dados.</li>
      </ul>

      <h2>10. Como exercer seus direitos / Encarregado (DPO)</h2>
      <p>
        Para exercer qualquer direito ou tirar dúvidas sobre esta Política, fale
        com o nosso Encarregado pelo Tratamento de Dados (DPO):
      </p>
      <ul>
        <li><strong>Encarregado (DPO):</strong> Rodrigo Santos</li>
        <li><strong>E-mail:</strong> <a href="mailto:ceo@santos-tech.com">ceo@santos-tech.com</a></li>
        <li><strong>Atendimento geral:</strong> <a href="mailto:contato@santos-tech.com">contato@santos-tech.com</a> · (16) 99257-8710</li>
        <li><strong>Endereço:</strong> Av. Nove de Julho, 1992 — Jardim América, Ribeirão Preto/SP.</li>
      </ul>
      <p>
        Responderemos às solicitações nos prazos previstos na LGPD. Você também
        pode peticionar à ANPD, caso entenda que seus direitos não foram
        atendidos.
      </p>

      <h2>11. Alterações desta Política</h2>
      <p>
        Podemos atualizar esta Política periodicamente. A versão vigente estará
        sempre disponível nesta página, com a data da última atualização. Mudanças
        relevantes serão comunicadas pelos nossos canais.
      </p>
    </LegalPage>
  );
}
