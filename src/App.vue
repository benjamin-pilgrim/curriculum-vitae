<template>
  <metainfo />
  <div class="sheet sheet-content">
    <section class="row">
      <aside><h1>Benjamin Pilgrim</h1></aside>
      <links />
    </section>
    <section>
      <role-block>
        <template #date>Feb 2024 - Present</template>
        <template #header>
          <header>
            <b><a href="https://risqcapital.com">RISQ Capital</a></b> - Senior DevOps Engineer
          </header>
        </template>
        <ul>
          <li>
            Developed a custom
            <acronym title="Continuous Integration / Continuous Delivery">CI/CD</acronym>
            framework for fast, reproducible local and GitHub Actions builds and deployments,
            underpinned by open-source libraries.
            <repo-link href="https://github.com/risqcapital/pyhcl2">pyhcl2</repo-link>
            <repo-link href="https://github.com/risqcapital/pyagnostics">pyagnostics</repo-link>
          </li>
          <li>
            Delivered a custom <acronym title="Amazon Web Services">AWS</acronym> landing zone in
            Terraform with multi-account patterns for tenant and environment isolation, security,
            and compliance controls.
          </li>
          <li>
            Designed <acronym title="Identity and Access Management">IAM</acronym> architecture for
            humans, workloads, pipelines, and cloud and co-located on-premises instances, enforcing
            least privilege through <acronym title="Attribute-Based Access Control">ABAC</acronym>,
            <acronym title="OpenID Connect">OIDC</acronym>, and permission boundaries.
          </li>
          <li>
            Rebuilt information security policies, documentation, and
            <acronym title="Information Security Management System">ISMS</acronym> to achieve audit
            readiness against a regulated external framework.
          </li>
          <li>
            Architected a global hybrid network using Cloud WAN,
            <acronym title="IP Address Manager">IPAM</acronym>,
            <acronym title="Virtual Private Network">VPN</acronym>, and Route 53, connecting cloud
            and co-located environments.
          </li>
          <li>
            Defined reusable Terraform modules and deployment patterns for golden-path building
            blocks, including ephemeral batch and scheduled workloads, and custom
            <acronym title="Systems Manager">SSM</acronym>-based deployments for long-running,
            systemd-managed trading systems.
          </li>
          <li>
            Built a data platform for batch and streaming time-series market data, with
            metadata-driven integrity and retry handling.
          </li>
          <li>
            Reduced monthly <acronym title="Amazon Web Services">AWS</acronym> spend by 10% through
            targeted infrastructure and workload cost optimisation.
          </li>
        </ul>
      </role-block>
      <role-block>
        <template #date>Mar 2022 - Nov 2023</template>
        <template #header>
          <header>
            <b><a href="https://www.mmtdigital.co.uk/">MMT Digital</a></b> - Cloud Systems Engineer
          </header>
          <header>
            <b><a href="https://careers.vodafone.co.uk/digital-consumer">Vodafone</a></b> - Senior
            DevOps Engineer <span class="muted">(via MMT Digital)</span>
          </header>
        </template>
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
            Contributed to strategy for a global Internal Developer Platform, improving developer
            efficiency and reducing time to market.
          </li>
          <li>
            Selected for focused specialist sprints to unblock strategic platform issues, including
            onboarding the first client team and feeding implementation insights back to downstream
            teams.
          </li>
          <li>
            Designed and led development of control-plane
            <acronym title="Application Programming Interfaces">APIs</acronym> for the platform,
            built on serverless <acronym title="Amazon Web Services">AWS</acronym> services
            including Lambda, API Gateway, Step Functions, DynamoDB, and S3.
          </li>
          <li>
            Led the design and development of an Azure DevOps-based
            <acronym title="Continuous Integration / Continuous Delivery / Continuous Testing"
              >CI/CD/CT</acronym
            >
            framework for standardised multi-environment service delivery.
          </li>
          <li>
            Developed a <acronym title="Command-Line Interface">CLI</acronym> tool and web interface
            for parameterised service templates, enabling teams to scaffold new services with
            baseline <acronym title="Continuous Integration / Continuous Delivery">CI/CD</acronym>,
            infrastructure, and code in minutes rather than days.
          </li>
          <li>
            Maintained widely adopted internal Terraform modules for
            <acronym title="Amazon Web Services">AWS</acronym> infrastructure, improving
            documentation, test coverage, and usability for downstream teams.
          </li>
          <li>
            Guided my team to improve code quality and reliability through automated testing,
            linting, formatting and type-checking in
            <acronym title="Continuous Integration">CI</acronym>.
          </li>
          <li>
            Mentored junior and mid-level engineers through pair programming and code reviews,
            helping to improve their technical skills and confidence.
          </li>
        </ul>
      </role-block>
      <role-block>
        <template #date>Jul 2019 - Mar 2022</template>
        <template #header>
          <header>
            <b><a href="https://www.htk.co.uk/">HTK</a></b> - Software Engineer
          </header>
        </template>
        <ul>
          <li>
            Java backend engineer on an event-driven multi-tenant loyalty and marketing automation
            <acronym title="Software as a Service">SaaS</acronym> platform.
          </li>
          <li>
            Developed a real-time transaction and promotion rules engine using Spring Boot, Kafka,
            Storm and DocumentDB.
          </li>
          <li>
            Developed third-party integrations and
            <acronym title="Extract, Transform, Load">ETL</acronym> pipelines for customer
            transaction data, including <acronym title="Point of Sale">POS</acronym> systems.
          </li>
          <li>
            Developed a multi-account <acronym title="Amazon Web Services">AWS</acronym> landing
            zone proof of concept in Terraform for a greenfield data lakehouse platform.
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
      </role-block>
      <role-block>
        <template #date>2016 - 2019</template>
        <template #header>
          <header>
            <b><a href="https://www.liverpool.ac.uk/">University of Liverpool</a></b>
            - BSc (Hons) Computer Science (First Class)
          </header>
        </template>
      </role-block>
    </section>
  </div>
</template>

<script>
import { useMeta } from 'vue-meta'
import Acronym from './components/Acronym.vue'
import Links from './components/Links.vue'
import RepoLink from './components/RepoLink.vue'
import RoleBlock from './components/RoleBlock.vue'

export default {
  components: { Acronym, Links, RepoLink, RoleBlock },
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
$header-gap: 22px;

@import 'normalize.css/normalize.css';
@import url('https://fonts.googleapis.com/css2?family=Manrope:wght@600&family=Montserrat&display=swap');
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

.sheet-content {
  display: flex;
  flex-direction: column;
  background: linear-gradient(to right, #3a446e 0, #3a446e 27%, #ffffff 27%, #ffffff 100%);
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
  gap: 0.28em;
  vertical-align: baseline;
  margin: 0 0.12em 0 0;
  padding: 0.01em 0.28em;
  border: 1px solid rgba(58, 68, 110, 0.1);
  border-radius: 999px;
  background: rgba(58, 68, 110, 0.02);
  color: inherit;
  font-size: 0.88em;
  white-space: nowrap;
}

.repo-pill > i {
  font-size: 0.76em;
  line-height: 1;
  color: #2b3559;
  opacity: 1;
}

.muted {
  opacity: 0.75;
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

section:last-of-type > .row:not(:last-child) main {
  padding-bottom: 0.16em;
}

aside,
main {
  padding: 0.6em 1em 0 15px;

  > * {
    padding-bottom: 0.5em;
  }
}

.sheet-content > .row:first-child aside,
.sheet-content > .row:first-child main {
  padding-top: $header-gap;
}

aside {
  background: transparent;
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
  font-family: 'Manrope', sans-serif;
  padding-top: 0;
  padding-bottom: $header-gap;
  line-height: 2.15rem;
  font-size: 2rem;
  letter-spacing: -0.02em;
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
  margin: 0 15px 0 8px;
  padding: 0;
  list-style: none;
}

li {
  padding-left: 0;
  margin-bottom: 6px;
}

main > header b {
  font-weight: 600;
  color: inherit;
}
</style>
