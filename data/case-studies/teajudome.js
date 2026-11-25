const META_FIELD_CONFIG = [
  { key: "period", labelKey: "period" },
  { key: "role", labelKey: "role" },
  { key: "category", labelKey: "category" },
  {
    key: "pressLinks",
    labelKey: "press",
    linkList: true,
    wide: true,
  },
  { key: "stack", labelKey: "stack", array: true, wide: true },
];

const STACK = [
  "PHP 7",
  "Laravel 5.8",
  "Vue.js",
  "Vuex",
  "Mapbox GL JS",
  "MySQL",
  "Docker",
  "PWA (Service Workers)",
  "OneSignal",
  "Sass",
];

const FIGURES = [
  {
    src: "/images/projects/teajudome/hero-map.jpg",
    alt: "TeAjudo.me map view across Brazil",
    captionKey: "heroMap",
  },
  {
    src: "/images/projects/teajudome/mapbox-feature.png",
    alt: "Mapbox official feature on Medium",
    captionKey: "mapboxFeature",
  },
];

export const teajudome = {
  id: "teajudome",
  slug: "teajudome",
  template: "full-stack",
  breadcrumbs: ["Full Stack", "PWA", "Mapbox"],
  metaFieldConfig: META_FIELD_CONFIG,
  content: {
    en: {
      title: "TeAjudo.me",
      heroDescription:
        "Geolocation-Based Mutual Aid & Local Commerce Platform",
      metaLabels: {
        heading: "Project metadata",
        period: "Period",
        role: "Role",
        category: "Category",
        press: "Press highlight",
        stack: "Stack",
      },
      meta: {
        period: "Mar – May 2020",
        role: "Creator, Architect & Full Stack Developer",
        category: "Full Stack Web & PWA",
        pressLinks: [
          {
            label: "Mapbox — Creativity and Compassion in COVID-19 (Medium)",
            href: "https://medium.com/mapbox/creativity-and-compassion-in-covid-19-ed3c0fd54c5d",
          },
          {
            label: "Mapbox on X",
            href: "https://x.com/Mapbox/status/1250150593596993536",
          },
        ],
        stack: STACK,
      },
      figures: FIGURES.map((f) => ({
        ...f,
        alt:
          f.captionKey === "heroMap"
            ? "Main map capture showing TeAjudo.me activity across Brazil"
            : "Screenshot from the official Mapbox Medium feature",
        caption:
          f.captionKey === "heroMap"
            ? "Primary map view — categorized pins and nationwide reach during the first weeks of lockdown."
            : "Official Mapbox community impact story featuring TeAjudo.me.",
      })),
      sections: {
        problem: {
          title: "Context & problem",
          body: "At the onset of COVID-19 lockdowns in March 2020, vulnerable and quarantined individuals needed help with essential errands and mental health support, while small neighborhood businesses struggled to reach local buyers. The engineering goal was to ship a lightweight, mobile-first web app within days—installable without app store friction and centered on hyper-local proximity.",
        },
        architecture: {
          title: "Architecture & technical decisions",
          decisions: [
            {
              title: "Back-end & geographic data layer (Laravel 5.8 + MySQL)",
              body: "Built a RESTful API and authentication layer in Laravel 5.8 backed by a complete relational dataset of Brazilian states and municipalities (UfTableSeeder / CityTableSeeder).",
            },
            {
              title: "Map-first interface & proximity filtering (Vue.js + Vuex + Mapbox GL)",
              body: "Engineered a reactive SPA with modular Vuex state management (markers, movimento) rendering custom pins by category (help requests, volunteers, volunteer psychologists, local businesses) alongside a list view with radius filters (10 km, 50 km, 100 km) and delivery flags.",
            },
            {
              title: "Low-friction onboarding & direct contact",
              body: "Designed a sub-5-minute registration flow with interactive pin-drop positioning and one-tap contact via WhatsApp, phone, or email.",
            },
            {
              title: "PWA, web push & i18n",
              body: "Configured manifest.json and service-worker.js for direct browser installation, OneSignal push notifications, and localization in Portuguese, English, and Spanish.",
            },
            {
              title: "Containerized setup",
              body: "Standardized environments with Docker (app.docker, web.docker, docker-compose.yml).",
            },
          ],
        },
        impact: {
          title: "Impact & external validation",
          items: [
            {
              title: "Nationwide adoption",
              body: "Reached 250+ active volunteers across Brazil and ~300 entries spanning help requests, volunteers (including psychologists offering free online counseling), and small local merchants.",
            },
            {
              title: "Mapbox sponsorship",
              body: "Highlighted by Mapbox’s community impact team in Creativity and Compassion in COVID-19 and granted an unlimited premium plan for map rendering and geocoding at zero API cost.",
            },
          ],
        },
        tradeoffs: {
          title: "Engineering trade-offs & modernization path",
          items: [
            {
              title: "2020 trade-off (speed to impact)",
              body: "Under emergency conditions, prioritized rapid deployment and mobile usability over heavy architectural layering, keeping endpoints pragmatic in Laravel 5.8.",
            },
            {
              title: "Modernization path",
              body: "Scaling this platform long-term would involve extracting controller logic into typed Service/Action classes and DTOs, replacing application-level distance filtering with native spatial indexes (MySQL Spatial or PostGIS), offloading OneSignal push dispatches to async queues (Laravel Queues / Horizon), and adding automated test coverage with PHPUnit/Pest.",
            },
          ],
        },
      },
      footerCallout: {
        label: "External feature",
        href: "https://medium.com/mapbox/creativity-and-compassion-in-covid-19-ed3c0fd54c5d",
        cta: "Read on Mapbox Medium",
        body: "Official Mapbox story on how TeAjudo.me combined geospatial tooling with community impact during COVID-19.",
      },
    },
    pt: {
      title: "TeAjudo.me",
      heroDescription:
        "Plataforma Geolocalizada de Apoio Comunitário e Comércio Local",
      metaLabels: {
        heading: "Metadados do projeto",
        period: "Período",
        role: "Papel",
        category: "Categoria",
        press: "Destaque / imprensa",
        stack: "Stack",
      },
      meta: {
        period: "Mar – Mai 2020",
        role: "Criador, Arquiteto & Desenvolvedor Full Stack",
        category: "Full Stack Web & PWA",
        pressLinks: [
          {
            label:
              "Mapbox — Creativity and Compassion in COVID-19 (Medium)",
            href: "https://medium.com/mapbox/creativity-and-compassion-in-covid-19-ed3c0fd54c5d",
          },
          {
            label: "Mapbox no X",
            href: "https://x.com/Mapbox/status/1250150593596993536",
          },
        ],
        stack: STACK,
      },
      figures: FIGURES.map((f) => ({
        ...f,
        alt:
          f.captionKey === "heroMap"
            ? "Captura principal do mapa TeAjudo.me no Brasil"
            : "Recorte da matéria oficial da Mapbox no Medium",
        caption:
          f.captionKey === "heroMap"
            ? "Visão principal do mapa — pinos por categoria e alcance nacional nas primeiras semanas do isolamento."
            : "Matéria oficial do time de impacto comunitário da Mapbox.",
      })),
      sections: {
        problem: {
          title: "Contexto e problema",
          body: "No início do isolamento social em março de 2020, grupos de risco precisavam de apoio para compras essenciais, farmácia e suporte psicológico, enquanto pequenos comerciantes de bairro perderam fluxo de clientes. O desafio técnico era colocar no ar, em poucos dias, uma aplicação leve, instalável em celulares de entrada sem depender de lojas de aplicativos e centrada em proximidade geográfica.",
        },
        architecture: {
          title: "Arquitetura e decisões técnicas",
          decisions: [
            {
              title: "Back-end e dados geográficos (Laravel 5.8 + MySQL)",
              body: "API RESTful e autenticação em Laravel 5.8 com base relacional completa de estados e municípios brasileiros (UfTableSeeder / CityTableSeeder) para normalização de localização.",
            },
            {
              title: "Interface map-first e filtros de proximidade (Vue.js + Vuex + Mapbox GL)",
              body: "SPA reativa com estado modular (markers, movimento) renderizando marcadores por categoria (pedidos de ajuda, voluntários, psicólogos voluntários e pequenos negócios) e visão alternativa em lista com filtros por raio de distância (10 km, 50 km, 100 km) e disponibilidade de entrega.",
            },
            {
              title: "Onboarding rápido e contato direto",
              body: "Cadastro em menos de 5 minutos com ajuste manual de pino no mapa e contato em um clique via WhatsApp, telefone ou e-mail, eliminando intermediários.",
            },
            {
              title: "PWA, web push e internacionalização",
              body: "Configuração de manifest.json e service-worker.js para instalação direta no navegador móvel, notificações push via OneSignal e suporte em Português, Inglês e Espanhol.",
            },
            {
              title: "Infraestrutura",
              body: "Ambiente containerizado com Docker (app.docker, web.docker, docker-compose.yml).",
            },
          ],
        },
        impact: {
          title: "Impacto e validação externa",
          items: [
            {
              title: "Alcance nacional",
              body: "Mais de 250 voluntários ativos pelo Brasil e ~300 registros entre pedidos de ajuda, voluntários (incluindo psicólogos com atendimento gratuito) e pequenos comércios locais.",
            },
            {
              title: "Patrocínio da Mapbox",
              body: "Selecionado pela equipe de impacto comunitário da Mapbox, publicado no blog oficial (Creativity and Compassion in COVID-19) e patrocinado com plano premium ilimitado de mapas e geocodificação.",
            },
          ],
        },
        tradeoffs: {
          title: "Trade-offs de engenharia e evolução arquitetural",
          items: [
            {
              title: "Trade-off de 2020 (time-to-market)",
              body: "Em cenário de emergência sanitária, priorizei velocidade de entrega e estabilidade mobile (PWA + Mapbox) mantendo endpoints diretos nos controllers do Laravel 5.8.",
            },
            {
              title: "Como eu arquitetaria hoje",
              body: "Extrairia regras de negócio para Service/Action classes com DTOs tipados, substituiria filtros de distância em memória por índices espaciais nativos (MySQL Spatial ou PostGIS), moveria disparos do OneSignal para filas assíncronas (Laravel Queues / Horizon) e cobriria os fluxos críticos com testes automatizados em PHPUnit/Pest.",
            },
          ],
        },
      },
      footerCallout: {
        label: "Destaque externo",
        href: "https://medium.com/mapbox/creativity-and-compassion-in-covid-19-ed3c0fd54c5d",
        cta: "Ler no Medium da Mapbox",
        body: "Matéria oficial da Mapbox sobre como o TeAjudo.me uniu mapas e impacto comunitário durante a COVID-19.",
      },
    },
  },
};