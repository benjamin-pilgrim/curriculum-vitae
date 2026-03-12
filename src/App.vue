<template>
  <metainfo />
  <div class="sheet sheet-content">
    <section class="row header">
      <aside><h1>Benjamin Pilgrim</h1></aside>
      <links/>
    </section>
    <section>
      <role-block>
        <template #date>Feb 2024 - Present</template>
        <template #header>
          <b><a href="https://www.risqcapital.com/">RISQ Research</a></b>
          <span>Senior DevOps Engineer</span>
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
            Delivered a custom <acronym title="Amazon Web Services">AWS</acronym> Well-Architected
            landing zone, leveraging account isolation boundaries for security and compliance
            controls using Terraform and AWS Organizations.
          </li>
          <li>
            Designed <acronym title="Identity and Access Management">IAM</acronym> architecture for
            humans, workloads, pipelines, and cloud and co-located on-premises instances, enforcing
            least privilege through <acronym title="Attribute-Based Access Control">ABAC</acronym>,
            <acronym title="OpenID Connect">OIDC</acronym>, and permission boundaries.
          </li>
          <li>
            Planned, implemented and administered RISQ Group's Information Security Management
            System, to compy with external standards within a regulated industry.
          </li>
          <li>
            Architected RISQ's global hybrid network using Cloud WAN,
            <acronym title="IP Address Manager">IPAM</acronym>,
            <acronym title="Virtual Private Network">VPN</acronym>s, and Route 53 for DNS,
            connecting cloud and co-located environments.
          </li>
          <li>
            Defined reusable Terraform modules implementing consistent patterns for golden-path
            building blocks. These include short-lived scheduled and event-driven workloads managed
            through Step Functions and <acronym title="Elastic Container Service">ECS</acronym>, as
            well as stateful persistent low-latency trading systems run as systemd services,
            deployed via custom <acronym title="Systems Manager">SSM</acronym> associations.
          </li>
          <li>
            Built a data platform for batch and streaming time-series market data, with
            metadata-driven integrity and retry handling.
          </li>
          <li>
            Designed and developed a customer facing gaming web application using React and Convex
            under tight timelines.

            <!--            come back to this, seems underselling-->
          </li>
          <li>
            Saved £20,000+ in <acronym title="Amazon Web Services">AWS</acronym> spend through
            infrastructure and workload cost optimisation.
          </li>
          <li>
            Designed and supervised
            <Acronym title="Extract, Transform, Load">ETL</Acronym> pipelines managing weekly
            transactions worth over £6,000,000 with human-in-the-loop approval.
          </li>
        </ul>
      </role-block>
      <role-block>
        <template #date>Mar 2022 - Nov 2023</template>
        <template #header>
          <b><a href="https://www.mmtdigital.co.uk/">MMT Digital</a></b>
          <span>Cloud Systems Engineer</span>
          <b><a href="https://careers.vodafone.co.uk/digital-consumer">Vodafone</a></b>
          <span>Senior DevOps Engineer</span>
        </template>
        <ul>
          <li>
            One of nine finalists for
            <a
              href="https://web.archive.org/web/20231210083101/https://event.computing.co.uk/digitaltechnologyleaderswards2023/en/page/2023-finalists"
              >Young Digital Professional of the Year</a
            >
            in the 2023 Computing Digital Technology Leaders Awards.
          </li>
          <li>
            Contributed to strategy for a global Internal Developer Platform, improving developer
            efficiency and reducing time to market.

            <!--            Review-->
          </li>
          <li>
            Drafted into hand-selected specialist team of experts to resolve key strategic blockers.
          </li>
          <li>
            Led development of control-plane interfaces for the platform, built on serverless
            technologies.
          </li>
          <li>
            Collaboratively worked, leading design, prototype and development of an Azure DevOps
            Pipelines framework for standardised multi-environment service delivery.
          </li>
          <li>
            Reduced time to first deployment for new services by 95%+, enabling teams to provision
            new services with secure-by-design pipeline definitions, infrastructure, and baseline
            application code through development of a parameterised repository templating framework.
          </li>
          <li>
            Maintained globally adopted Terraform modules for
            <acronym title="Amazon Web Services">AWS</acronym> components, including API Gateway and
            static site hosting, driving efficiency through reuse.
          </li>
          <li>
            Delivered improvements in code quality and reliability through leading my team's
            adoption of automated testing, linting, formatting and type-checking.
          </li>
          <li>
            Mentored multiple junior and mid-level engineers through pair programming and code
            reviews, helping to improve their technical skills and confidence.
          </li>
        </ul>
      </role-block>
      <role-block>
        <template #date>Jul 2019 - Mar 2022</template>
        <template #header>
          <b><a href="https://www.htk.co.uk/">HTK</a></b>
          <span>Software Engineer</span>
        </template>
        <ul>
          <li>
            Contributed as a backend engineer to multiple projects built in Java using Spring Boot,
            Kafka, Storm and DocumentDB. These included a real-time transaction and promotion rules
            engine and a multi-tenant loyalty and marketing automation platform.
          </li>
          <li>
            Developed third-party integrations and
            <acronym title="Extract, Transform, Load">ETL</acronym> pipelines for customer
            transaction data, including <acronym title="Point of Sale">POS</acronym> systems.
          </li>
          <li>
            Delivered a multi-account <acronym title="Amazon Web Services">AWS</acronym> landing
            zone proof-of-concept in Terraform for a greenfield data lake-house platform, expanding
            my skill-set into AWS and cloud technologies.
          </li>
          <li>
            Integrated Vue.js into a legacy Java/Jakarta Server Faces environment to enable
            incremental frontend modernisation.
          </li>
        </ul>
      </role-block>
      <role-block>
        <template #header>
          <b>Consulting &<br />Personal Projects</b>
        </template>
        <ul>
          <li>
            Consulted on cloud architecture for a
            <Acronym title="Anti-money laundering">AML</Acronym> transaction monitoring platform.
          </li>
          <li>Developed a cross-platform mobile app in React Native for gamified task tracking.</li>
          <li>
            Built open-source components for managing VYoS routers at scale.
            <repo-link href="https://github.com/TGNThump/terraform-provider-vyos"
              >terraform-provider-vyos</repo-link
            >
          </li>
        </ul>
      </role-block>
      <role-block>
        <template #header>
          <b><a href="https://www.liverpool.ac.uk/">University of Liverpool</a></b>
        </template>
        <ul>
          <li>BSc (Hons) Computer Science (First Class)</li>
        </ul>
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

.row:not(.header) {
  margin-bottom: 1em;
}

.row {
  display: grid;
  grid-template-columns: 27% auto;
}

//section:last-of-type > .row:not(:last-child) main {
//  padding-bottom: 1em;
//}

aside,
main {
  padding: 0 15px 0 15px;

  > * {
    padding-bottom: 0.5em;
  }
}

//.sheet-content > .row:first-child aside,
//.sheet-content > .row:first-child main {
//  padding-top: $header-gap;
//}

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
  padding: 1.8rem 0;
  line-height: 2.15rem;
  font-size: 1.8rem;
}

ul {
  margin: 0;
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
