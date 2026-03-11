<template>
  <metainfo></metainfo>
  <div class="sheet" style="display: flex; flex-direction: column">
    <section class="row">
      <aside><h1>Benjamin Pilgrim</h1></aside>
      <links />
    </section>
    <section>
      <div class="row">
        <aside>Feb 2024 - Present</aside>
        <main>
          <header>
            <b><a href="https://risqcapital.com">RISQ Capital</a></b> - Senior DevOps Engineer
          </header>
          <ul>
            <li>
              Developed a custom
              <abbr title="Continuous Integration / Continuous Delivery">CI/CD</abbr> framework for
              fast, reproducible local and GitHub Actions builds and deployments, underpinned by
              open-source libraries including
              <a class="repo-pill" href="https://github.com/risqcapital/pyhcl2"
                >pyhcl2 <icon brand name="github"
              /></a>
              and
              <a class="repo-pill" href="https://github.com/risqcapital/pyagnostics"
                >pyagnostics <icon brand name="github"
              /></a>.
            </li>
            <li>
              Delivered a custom <abbr title="Amazon Web Services">AWS</abbr> landing zone in
              Terraform with multi-account patterns for tenant and environment isolation, security,
              and compliance controls.
            </li>
            <li>
              Designed <abbr title="Identity and Access Management">IAM</abbr> architecture for
              humans, workloads, pipelines, and cloud and co-located on-premises instances,
              enforcing least privilege through
              <abbr title="Attribute-Based Access Control">ABAC</abbr>,
              <abbr title="OpenID Connect">OIDC</abbr>, and permission boundaries.
            </li>
            <li>
              Rebuilt information security policies, documentation, and
              <abbr title="Information Security Management System">ISMS</abbr> to achieve audit
              readiness against a regulated external framework.
            </li>
            <li>
              Architected a global hybrid network using Cloud WAN,
              <abbr title="IP Address Manager">IPAM</abbr>,
              <abbr title="Virtual Private Network">VPN</abbr>, and Route 53, connecting cloud
              and co-located environments.
            </li>
            <li>
              Defined reusable Terraform modules and deployment patterns for golden-path building
              blocks, including ephemeral batch and scheduled workloads, and custom
              <abbr title="Systems Manager">SSM</abbr>-based deployments for long-running,
              systemd-managed trading systems.
            </li>
            <li>
              Built a data platform for batch and streaming time-series market data, with
              metadata-driven integrity and retry handling.
            </li>
            <li>
              Reduced monthly <abbr title="Amazon Web Services">AWS</abbr> spend by 10% through
              targeted infrastructure and workload cost optimisation.
            </li>
          </ul>
        </main>
      </div>
      <div class="row">
        <aside>Mar 2022 - Nov 2023</aside>
        <main>
          <header>
            <b><a href="https://www.mmtdigital.co.uk/">MMT Digital</a></b> - Cloud Systems Engineer
          </header>
          <header>
            <b><a href="https://careers.vodafone.co.uk/digital-consumer">Vodafone</a></b> - Senior
            DevOps Engineer <span style="opacity: 0.75">(via MMT Digital)</span>
          </header>
          <ul>
            <li>
              Shortlisted as a finalist for
              <a
                href="https://event.computing.co.uk/digitaltechnologyleaderswards2023/en/page/2023-finalists"
                >Young Digital Professional of the Year</a
              >
              in the 2023 Computing Digital Technology Leaders Awards.
            </li>
            <li>
              Contributed to strategy for a global Internal Developer Platform, improving
              developer efficiency and reducing time to market.
            </li>
            <li>
              Selected for focused specialist sprints to unblock strategic platform issues,
              including onboarding the first client team and feeding implementation insights back
              to downstream teams.
            </li>
            <li>
              Designed and led development of control-plane
              <abbr title="Application Programming Interfaces">APIs</abbr> for the platform,
              built on serverless <abbr title="Amazon Web Services">AWS</abbr> services including
              Lambda, API Gateway, Step Functions, DynamoDB, and S3.
            </li>
            <li>
              Led the design and development of an Azure DevOps-based
              <abbr title="Continuous Integration / Continuous Delivery / Continuous Testing"
                >CI/CD/CT</abbr
              >
              framework for standardised multi-environment service delivery.
            </li>
            <li>
              Developed a <abbr title="Command-Line Interface">CLI</abbr> tool and web interface
              for parameterised service templates, enabling teams to scaffold new services with
              baseline <abbr title="Continuous Integration / Continuous Delivery">CI/CD</abbr>,
              infrastructure, and code in minutes rather than days.
            </li>
            <li>
              Maintained widely adopted internal Terraform modules for
              <abbr title="Amazon Web Services">AWS</abbr> infrastructure, improving
              documentation, test coverage, and usability for downstream teams.
            </li>
            <li>
              Guided my team to improve code quality and reliability through automated testing,
              linting, formatting and type-checking in
              <abbr title="Continuous Integration">CI</abbr>.
            </li>
            <li>
              Mentored junior and mid-level engineers through pair programming and code reviews,
              helping to improve their technical skills and confidence.
            </li>
          </ul>
        </main>
      </div>
      <div class="row">
        <aside>Jul 2019 - Mar 2022</aside>
        <main>
          <header>
            <b><a href="https://www.htk.co.uk/">HTK</a></b> - Software Engineer
          </header>
          <ul>
            <li>
              Java backend engineer on an event-driven multi-tenant loyalty and marketing
              automation <abbr title="Software as a Service">SaaS</abbr> platform.
            </li>
            <li>
              Developed a real-time transaction and promotion rules engine using Spring Boot,
              Kafka, Storm and DocumentDB.
            </li>
            <li>
              Developed third-party integrations and
              <abbr title="Extract, Transform, Load">ETL</abbr> pipelines for customer transaction
              data, including <abbr title="Point of Sale">POS</abbr> systems.
            </li>
            <li>
              Developed a multi-account <abbr title="Amazon Web Services">AWS</abbr> landing zone
              proof of concept in Terraform for a greenfield data lakehouse platform.
            </li>
            <li>
              Integrated Vue.js into a legacy Java Server Pages environment to enable incremental
              frontend modernisation.
            </li>
            <li>
              Designed and built frontend pages and components, including a nested condition builder
              with a 'drag-and-drop' interface.
            </li>
          </ul>
        </main>
      </div>
      <div class="row">
        <aside>2016 - 2019</aside>
        <main>
          <header>
            <b><a href="https://www.liverpool.ac.uk/">University of Liverpool</a></b>
            - BSc (Hons) Computer Science (First Class)
          </header>
        </main>
      </div>
    </section>
  </div>
</template>

<script>
import { useMeta } from 'vue-meta'
import Links from './components/Links.vue'
import Icon from './components/Icon.vue'

export default {
  components: { Icon, Links },
  setup() {
    useMeta({
      title: 'Benjamin Pilgrim - Curriculum Vitae',
      bodyAttrs: {
        class: 'A4'
      }
    })
  },
  mounted() {
    this.$nextTick(() => document.body.dispatchEvent(new Event('view-ready')))
  }
}
</script>

<style lang="scss">
$primary: #3a446e;

@import 'normalize.css/normalize.css';
@import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');
@import 'paper-css/paper.css';

*,
*::after,
*::before {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

@page {
  size: A4;
}

body.A4 .sheet {
  height: 297mm !important;
}

body {
  @media print {
    zoom: 122.5%;
    background: white;
  }
  @media screen {
    background: #484349 !important;
  }
  font-family: 'Montserrat', sans-serif;
  font-size: 12px;
}

a,
a:hover {
  font-weight: inherit;
  color: inherit;
  text-decoration: none;
  font-style: normal;
}

abbr[title] {
  text-decoration: none;
  border-bottom: 0;
  cursor: inherit;
}

@media screen {
  abbr[title]:hover {
    cursor: help;
    text-decoration: underline dotted rgba(58, 68, 110, 0.35);
    text-underline-offset: 0.12em;
  }
}

.repo-pill,
.repo-pill:hover {
  display: inline-flex;
  align-items: center;
  gap: 0.35em;
  vertical-align: baseline;
  margin: 0 0.15em;
  padding: 0.02em 0.35em;
  border: 1px solid rgba(58, 68, 110, 0.14);
  border-radius: 999px;
  background: rgba(58, 68, 110, 0.03);
  color: inherit;
  font-size: 0.92em;
  white-space: nowrap;
}

.repo-pill > i {
  font-size: 0.82em;
  line-height: 1;
  opacity: 0.8;
}

.sheet,
section {
  display: flex;
  flex-direction: column;

  > *:last-child {
    flex-grow: 1;
  }
}

.row {
  display: grid;
  grid-template-columns: 27% auto;
}

aside,
main {
  padding: 0.7em 1em 0 15px;

  > * {
    padding-bottom: 0.6em;
  }
}

aside {
  background: #3a446e;
  color: #ffffff;
  text-align: right;
  padding-right: 1em;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-weight: normal;
  font-family: 'Roboto', sans-serif;
  padding: 0;
  margin: 0.2em 0 0;
}

h1 {
  padding-top: 0.4em;
  padding-bottom: 0.2em;
  line-height: 2.4rem;
  font-size: 2rem;
}

.tech-list {
  display: grid;
  list-style: none;
  grid-gap: 5px;
  grid-template-columns: repeat(6, 1fr);
  grid-auto-flow: dense;

  li {
    flex-shrink: 0;
    display: flex;
  }

  &.squares {
    padding-bottom: 10px;

    li::before {
      border-radius: 20%;
    }
  }

  li::before {
    display: block;
    content: ' ';
    background-color: var(--color);
    height: 0.9em;
    width: 0.9em;
    border-radius: 100%;
    margin: 0.1em 0.5em 0.1em 0.1em;
    float: left;
  }
}

ul {
  margin: 0 15px;
}

li {
  margin-bottom: 5px;
}
</style>
