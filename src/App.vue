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
              Spearheaded delivery of a DevOps Strategy focused around five key initiatives;
              Foundational Infrastructure, Platform Engineering, Release Engineering, Security &
              Compliance and Reliability Engineering
            </li>
            <li>
              Developed a custom well-architected multi-account AWS Landing Zone
            </li>
            <li>
              Ensured people, pipelines and machines can securely access AWS APIs in a
              least-privileged manner using IAM, Identity Center, Systems Manager and Cognito
            </li>
            <li>
              Designed and implemented a global hybrid network built around AWS Cloud WAN,
              connecting VPCs in multiple regions, as well as co-located networks
            </li>
            <li>
              Facilitated rapid iteration and repeatable delivery through development of a
              python-based CI/CD/CT framework that can be ran locally for rapid development iteration
              and in GitHub Actions for safe production deployments
            </li>
            <li>
              Utilised AWS Systems Manager to provision and manage long-running tasks in
              performance-critical systems, on EC2 and managed hybrid instances and standardised
              architecture for scheduled and event driven tasks using containers, EventBridge, Step
              Functions and ECS
            </li>
            <li>Reduced monthly AWS spend by 10% through targeted cost optimizations</li>
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
              in the 2023 Computing Digital Technology Leaders Awards
            </li>
            <li>
              Helped to define and implement a strategy for a global Internal Developer Platform,
              driving efficiency while reducing time-to-market for new functionality
            </li>
            <li>
              Participated in small rapid delivery sprints of key engineers selected to mitigate
              strategic blockers, including integrating and onboarding the first client team,
              demonstrating value to the wider business and providing feedback to downstream
              development teams
            </li>
            <li>
              Designed and lead development of control plane APIs for the platform, leveraging
              serverless technologies like AWS Lambda, API Gateway, Step Functions, DynamoDB and S3
            </li>
            <li>
              Lead the design and development of an Azure Devops based CI/CD/CT framework, enabling
              teams to build and deploy services to multiple environments with minimal configuration
            </li>
            <li>
              Developed a CLI tool and web interface for parameterised service templates, enabling
              deployment of new services, complete with baseline CI/CD, infrastructure and code in
              minutes rather than days
            </li>
            <li>
              Maintained widely adopted internal Terraform modules for AWS infrastructure, ensuring
              they are well-documented, tested and easy to use for downstream teams
            </li>
            <li>
              Guided my team to improve code quality and reliability through automated testing,
              linting, formatting and type-checking at CI time
            </li>
            <li>
              Mentored junior and mid level engineers through pair programming and code reviews,
              helping to improve their technical skills and confidence
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
              Worked as a Java <b>backend engineer</b> on an
              <b>event-driven multi-tenant</b> loyalty and marketing automation <b>SaaS</b> platform
            </li>
            <li>
              Developed a real-time transaction and promotion rules engine using Spring Boot,
              <b>Kafka</b>, Storm and DocumentDB
            </li>
            <li>
              Wrote T-<b>SQL</b> migration scripts and helped maintain schemas and stored procedures
              for Microsoft SQL Server databases
            </li>
            <li>
              Integrated with third party platforms, including PoS systems, and designed and
              developed <b>ETL pipelines</b>
              for ingesting customer transaction data
            </li>
            <li>
              Developed a proof-of-concept <b>multi-account AWS landing zone</b> using
              <b>Terraform</b> for a greenfield data lake-house platform
            </li>
            <li>
              Integrated VueJS framework into a legacy Java Server Pages environment to enable
              <b>incremental adoption</b> of modern frontend technologies
            </li>
            <li>
              Designed and built frontend pages and components, including a nested condition builder
              with a 'drag-n-drop' interface
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

export default {
  components: { Links },
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
