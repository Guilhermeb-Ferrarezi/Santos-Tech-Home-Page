import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/legal-page";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/termos")({
  component: TermosPage,
  head: () =>
    pageMeta({
      title: "Termos de Uso — Santos Tech",
      description:
        "Termos e condições de uso dos serviços educacionais e da plataforma digital da Santos Tech, escola de tecnologia em Ribeirão Preto.",
      path: "/termos",
    }),
});

function TermosPage() {
  return (
    <LegalPage
      title="Termos de Uso"
      subtitle="Condições para uso dos serviços educacionais e da plataforma digital da Santos Tech."
      updatedAt="17 de junho de 2026"
    >
      <h2>1. Aceitação</h2>
      <p>
        Ao se matricular, contratar nossos serviços ou utilizar nossos canais
        digitais (site, área do aluno e checkout de pagamento), você declara ter
        lido e concordado com estes Termos de Uso e com a nossa{" "}
        <a href="/privacidade">Política de Privacidade</a>. Caso a matrícula seja
        de menor de 18 anos, estes Termos são aceitos pelo <strong>responsável
        legal</strong>, que se declara ciente e responsável pelas obrigações aqui
        previstas.
      </p>

      <h2>2. Quem somos</h2>
      <p>
        A <strong>Santos Tech</strong> (<strong>R. L. DOS SANTOS GAMES</strong>, CNPJ{" "}
        <strong>37.565.993/0001-59</strong>, Av. Nove de Julho, 1992, Jardim América,
        Ribeirão Preto/SP) é uma escola presencial de tecnologia que oferece
        cursos para crianças e adolescentes (5 a 15 anos) e para adultos, além de
        uma plataforma digital de apoio e pagamento.
      </p>

      <h2>3. Matrícula e cadastro</h2>
      <ul>
        <li>As informações fornecidas no cadastro/matrícula devem ser verdadeiras, completas e atualizadas.</li>
        <li>O responsável é o único responsável pela guarda de suas credenciais de acesso à área do aluno e por toda atividade realizada com elas.</li>
        <li>A matrícula está sujeita à disponibilidade de vagas (turmas de até 10 alunos) e à confirmação pela Escola.</li>
      </ul>

      <h2>4. Serviços e aulas</h2>
      <ul>
        <li>Os cursos são <strong>presenciais</strong>, realizados na unidade da Escola, conforme calendário e horários combinados na matrícula.</li>
        <li>Faltas, reposições e remarcações seguem a política pedagógica vigente, comunicada no ato da matrícula.</li>
        <li>A Escola pode, mediante aviso, ajustar turmas, horários e conteúdo programático por razões operacionais ou pedagógicas, preservando a qualidade do serviço contratado.</li>
      </ul>

      <h2>5. Pagamentos</h2>
      <ul>
        <li>Os valores de matrícula e mensalidade são os informados no momento da contratação.</li>
        <li>Pagamentos podem ser realizados via <strong>Pix</strong> por meio do nosso checkout. A confirmação do pagamento é processada pelo provedor de pagamento e o status é atualizado automaticamente.</li>
        <li>A mensalidade vence na data acordada. O não pagamento pode acarretar suspensão do acesso às aulas e à plataforma, sem prejuízo da cobrança dos valores devidos e eventuais encargos previstos em contrato.</li>
        <li>Comprovantes e recibos são enviados por e-mail.</li>
      </ul>

      <h2>6. Cancelamento e reembolso</h2>
      <p>
        O cancelamento da matrícula pode ser solicitado pelos canais de
        atendimento. Eventuais reembolsos observam a legislação aplicável
        (incluindo o Código de Defesa do Consumidor) e as condições do contrato
        de prestação de serviços firmado na matrícula. Valores referentes a
        serviços já prestados não são reembolsáveis.
      </p>

      <h2>7. Uso da plataforma digital</h2>
      <ul>
        <li>A área do aluno e o checkout destinam-se exclusivamente ao acompanhamento e pagamento dos serviços contratados.</li>
        <li>É vedado usar a plataforma para fins ilícitos, tentar burlar mecanismos de segurança, acessar dados de terceiros ou prejudicar o funcionamento dos sistemas.</li>
        <li>Podemos suspender ou encerrar o acesso em caso de uso indevido ou violação destes Termos.</li>
      </ul>

      <h2>8. Propriedade intelectual</h2>
      <p>
        A marca "Santos Tech", o conteúdo didático, materiais, layouts, textos,
        logotipos e software são protegidos por direitos de propriedade
        intelectual e pertencem à Santos Tech ou a seus licenciadores. É proibida
        a reprodução, distribuição ou uso comercial sem autorização prévia e por
        escrito. Os <strong>projetos criados pelos alunos</strong> em aula
        pertencem aos próprios alunos.
      </p>

      <h2>9. Responsabilidades e limitações</h2>
      <ul>
        <li>A Escola compromete-se a prestar os serviços com diligência e qualidade, mas não se responsabiliza por indisponibilidades temporárias da plataforma decorrentes de manutenção, falhas de terceiros ou força maior.</li>
        <li>O responsável é responsável pela veracidade dos dados informados e pelo uso adequado dos serviços.</li>
      </ul>

      <h2>10. Privacidade</h2>
      <p>
        O tratamento de dados pessoais é regido pela nossa{" "}
        <a href="/privacidade">Política de Privacidade</a>, parte integrante
        destes Termos.
      </p>

      <h2>11. Alterações</h2>
      <p>
        Estes Termos podem ser atualizados a qualquer momento. A versão vigente
        estará sempre disponível nesta página, com a data da última atualização.
        O uso continuado dos serviços após mudanças relevantes implica concordância
        com a nova versão.
      </p>

      <h2>12. Lei aplicável e foro</h2>
      <p>
        Estes Termos são regidos pelas leis brasileiras. Fica eleito o foro da
        comarca de <strong>Ribeirão Preto/SP</strong> para dirimir quaisquer
        questões, com renúncia a qualquer outro, por mais privilegiado que seja,
        ressalvado o foro do consumidor previsto em lei.
      </p>

      <h2>13. Contato</h2>
      <ul>
        <li><strong>E-mail:</strong> <a href="mailto:contato@santos-tech.com">contato@santos-tech.com</a></li>
        <li><strong>WhatsApp:</strong> (16) 99257-8710</li>
        <li><strong>Endereço:</strong> Av. Nove de Julho, 1992 — Jardim América, Ribeirão Preto/SP.</li>
      </ul>
    </LegalPage>
  );
}
