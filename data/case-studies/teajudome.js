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
  "PHP",
  "Laravel 5.8",
  "Vue.js",
  "Vuex",
  "Mapbox GL JS",
  "MySQL",
  "Docker",
  "PWA (Service Workers)",
  "OneSignal",
  "Hotjar",
  "Sass",
];

const PRESS_MEDIUM =
  "https://medium.com/mapbox/creativity-and-compassion-in-covid-19-ed3c0fd54c5d";

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
        period: "Mar 2020 – Mar 2021",
        role: "Creator, Architect & Full Stack Developer",
        category: "Full Stack Web & PWA",
        pressLinks: [
          {
            label: "Mapbox — Creativity and Compassion in COVID-19 (Medium)",
            href: PRESS_MEDIUM,
          },
          {
            label: "Mapbox on X",
            href: "https://x.com/Mapbox/status/1250150593596993536",
          },
        ],
        stack: STACK,
      },
      heroFigure: {
        src: "/images/projects/teajudome/hero-map-br.jpg",
        alt: "TeAjudo.me nationwide map view and Mapbox sponsorship",
        caption:
          "National production map — category pins, volunteer density, and Mapbox-backed geospatial layer.",
      },
      galleryFigures: [
        {
          src: "/images/projects/teajudome/fao-wfp-meeting.jpg",
          alt: "FAO and WFP technical session",
          caption:
            "Technical session with Valessio Brito and specialists linked to FAO and WFP.",
        },
        {
          src: "/images/projects/teajudome/mobile-map-sp.png",
          alt: "Greater São Paulo production mobile map",
          caption:
            "Production mobile map in Greater São Paulo (124+ volunteers and 70+ small businesses).",
        },
        {
          src: "/images/projects/teajudome/mapbox-feature.png",
          alt: "Mapbox official blog feature",
          caption:
            "Featured on Mapbox's official blog (Creativity and Compassion in COVID-19).",
        },
        {
          src: "/images/projects/teajudome/hotjar-heatmap.png",
          alt: "Hotjar tap heatmap",
          caption:
            "Hotjar tap heatmap uncovering dead clicks on non-interactive elements to guide UX improvements.",
        },
        {
          src: "/images/projects/teajudome/mobile-list-filters.png",
          alt: "Mobile list with radius and delivery filters",
          caption:
            "Mobile-first list view with radius filters (10–100 km) and delivery options.",
        },
      ],
      sections: {
        problem: {
          title: "Context & problem",
          body: "At the onset of COVID-19 lockdowns in March 2020, vulnerable individuals needed help with essential errands and mental health support, while small neighborhood producers and merchants lost local foot traffic. The engineering challenge was to ship a lightweight, mobile-first PWA within days—installable without app store friction and built around hyper-local proximity.",
        },
        architecture: {
          title: "Architecture, technical decisions & data-driven UX",
          decisions: [
            {
              title: "Back-end & geographic data layer (Laravel 5.8 + MySQL)",
              body: "Built a RESTful API and authentication layer in Laravel 5.8 backed by a relational dataset of Brazilian states and municipalities (UfTableSeeder / CityTableSeeder).",
            },
            {
              title: "Map-first interface & proximity filtering (Vue.js + Vuex + Mapbox GL)",
              body: "Engineered a reactive SPA with modular Vuex state (markers, movimento) rendering custom pins by category alongside a mobile list view with radius filters (10 km, 50 km, 100 km), delivery flags, and business categories.",
            },
            {
              title: "UX telemetry with Hotjar heatmaps",
              body: "Tracked tap/click heatmaps (heavily mobile-driven) that uncovered dead clicks on non-interactive elements—such as users tapping top summary counters expecting list/filter actions—guiding targeted touch-target and navigation improvements.",
            },
            {
              title: "Low-friction onboarding & direct contact",
              body: "Designed a sub-5-minute registration flow with interactive pin-drop positioning and one-tap contact via WhatsApp, phone, or email.",
            },
            {
              title: "PWA, web push & i18n",
              body: "Configured manifest.json and service-worker.js for browser installation, OneSignal push notifications, and localization in Portuguese, English, and Spanish.",
            },
            {
              title: "Campaign engine & transparency",
              body: "Added modular campaign support (Movimento 117 — #AmorEmMovimento) and a public transparency page documenting food-basket deliveries.",
            },
            {
              title: "Containerized setup",
              body: "Standardized environments with Docker (app.docker, web.docker, docker-compose.yml).",
            },
          ],
        },
        impact: {
          title: "Impact, external validation & technical demonstration",
          items: [
            {
              title: "Production reach",
              body: "Operated for 12 months (March 2020 to March 2021), reaching 250+ active volunteers nationwide and 124+ volunteers alongside 70+ small local businesses in Greater São Paulo alone.",
            },
            {
              title: "Mapbox sponsorship",
              body: "Featured by Mapbox’s community impact team in Creativity and Compassion in COVID-19 and granted an unlimited premium plan for map rendering and geocoding.",
            },
            {
              title: "Technical demonstration for FAO/WFP specialists",
              body: "In April 2020, invited by Valessio Brito (free-software specialist and current president of Instituto iCAT), demonstrated the platform's architecture in a technical session with specialists and advisors linked to FAO and WFP—including Albaneide Peixinho and Cezar Alvarez—to explore adapting the codebase for small agricultural producers; a meaningful validation for an independent project, though not rolled out as workflows evolved over the following weeks.",
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
        href: PRESS_MEDIUM,
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
        period: "Mar 2020 – Mar 2021",
        role: "Criador, Arquiteto & Desenvolvedor Full Stack",
        category: "Full Stack Web & PWA",
        pressLinks: [
          {
            label:
              "Mapbox — Creativity and Compassion in COVID-19 (Medium)",
            href: PRESS_MEDIUM,
          },
          {
            label: "Mapbox no X",
            href: "https://x.com/Mapbox/status/1250150593596993536",
          },
        ],
        stack: STACK,
      },
      heroFigure: {
        src: "/images/projects/teajudome/hero-map-br.jpg",
        alt: "Visão nacional do mapa TeAjudo.me e patrocínio Mapbox",
        caption:
          "Mapa nacional em produção — pinos por categoria, densidade de voluntários e camada Mapbox.",
      },
      galleryFigures: [
        {
          src: "/images/projects/teajudome/fao-wfp-meeting.jpg",
          alt: "Reunião com especialistas FAO e WFP",
          caption:
            "Reunião técnica com Valessio Brito e especialistas ligados à FAO e ao WFP.",
        },
        {
          src: "/images/projects/teajudome/mobile-map-sp.png",
          alt: "Mapa mobile na Grande São Paulo",
          caption:
            "Mapa mobile em produção na Grande São Paulo (124+ voluntários e 70+ pequenos negócios).",
        },
        {
          src: "/images/projects/teajudome/mapbox-feature.png",
          alt: "Destaque no blog da Mapbox",
          caption:
            "Destaque no blog oficial da Mapbox (Creativity and Compassion in COVID-19).",
        },
        {
          src: "/images/projects/teajudome/hotjar-heatmap.png",
          alt: "Mapa de calor Hotjar",
          caption:
            "Mapa de calor de toques no Hotjar identificando cliques em elementos não interativos para melhoria de UX.",
        },
        {
          src: "/images/projects/teajudome/mobile-list-filters.png",
          alt: "Listagem mobile com filtros",
          caption:
            "Visão em lista mobile-first com filtros por raio de distância (10–100 km) e entrega.",
        },
      ],
      sections: {
        problem: {
          title: "Contexto e problema",
          body: "Em março de 2020, o isolamento social impediu grupos de risco de realizar tarefas essenciais (compras, farmácia, apoio psicológico), enquanto pequenos produtores e comércios de bairro perderam canais de venda. O desafio foi lançar em poucos dias uma plataforma leve, instalável via navegador (PWA) sem atrito de lojas de aplicativos e centrada em proximidade geográfica.",
        },
        architecture: {
          title: "Arquitetura, decisões técnicas e iteração por dados",
          decisions: [
            {
              title: "Back-end e dados geográficos (Laravel 5.8 + MySQL)",
              body: "API RESTful e autenticação em Laravel 5.8 com base relacional de estados e municípios brasileiros (UfTableSeeder / CityTableSeeder).",
            },
            {
              title: "Interface map-first e filtros de proximidade (Vue.js + Vuex + Mapbox GL)",
              body: "SPA reativa com módulos Vuex (markers, movimento) renderizando marcadores por categoria e visão mobile em lista com filtro por raio (10 km, 50 km, 100 km), entrega e ramo de atividade.",
            },
            {
              title: "Telemetria de UX com Hotjar (mapas de calor)",
              body: "Instrumentação de mapas de calor de cliques/toques (predominantemente mobile) que revelou dead clicks em elementos não interativos — como usuários tocando nos contadores do topo esperando abrir filtros ou listagens — guiando ajustes de navegação e áreas de toque.",
            },
            {
              title: "Onboarding rápido e contato direto",
              body: "Cadastro em menos de 5 minutos com ajuste manual de pino no mapa e contato direto via WhatsApp, telefone ou e-mail.",
            },
            {
              title: "PWA, web push e internacionalização",
              body: "manifest.json e service-worker.js para instalação direta no celular, notificações push via OneSignal e suporte em Português, Inglês e Espanhol.",
            },
            {
              title: "Campanhas e transparência",
              body: "Suporte modular a campanhas parceiras (Movimento 117 — #AmorEmMovimento) e página pública de prestação de contas.",
            },
            {
              title: "Infraestrutura",
              body: "Ambiente containerizado com Docker (app.docker, web.docker, docker-compose.yml).",
            },
          ],
        },
        impact: {
          title: "Impacto, validação externa e articulação técnica",
          items: [
            {
              title: "Adoção em produção",
              body: "Operou no ar por 12 meses (março de 2020 a março de 2021), superando 250 voluntários ativos pelo Brasil e reunindo mais de 124 voluntários e 70 pequenos negócios mapeados apenas no recorte da Grande São Paulo.",
            },
            {
              title: "Patrocínio oficial da Mapbox",
              body: "Selecionado pela equipe de impacto comunitário da Mapbox, publicado no blog oficial (Creativity and Compassion in COVID-19) e patrocinado com plano premium ilimitado de mapas e geocodificação.",
            },
            {
              title: "Demonstração técnica para especialistas FAO/WFP",
              body: "Em abril de 2020, a convite de Valessio Brito (especialista em Software Livre e atual presidente do Instituto iCAT), apresentei a arquitetura do sistema em reunião técnica com especialistas e consultores ligados à FAO e ao WFP (incluindo Albaneide Peixinho e Cezar Alvarez) para discutir o possível reaproveitamento do código-base no apoio a pequenos produtores — validação relevante para um projeto independente, embora não tenha avançado para implantação diante da rápida evolução do cenário nos meses seguintes.",
            },
          ],
        },
        tradeoffs: {
          title: "Trade-offs de engenharia e evolução arquitetural",
          items: [
            {
              title: "Trade-off de 2020 (velocidade de entrega)",
              body: "Em cenário de emergência sanitária, priorizei time-to-market e estabilidade mobile (PWA + Mapbox), mantendo endpoints diretos nos controllers do Laravel 5.8.",
            },
            {
              title: "Como eu arquitetaria hoje",
              body: "Isolaria regras de negócio em Service/Action classes com DTOs tipados, substituiria filtros de distância em memória por índices espaciais nativos (MySQL Spatial ou PostGIS), moveria notificações OneSignal para filas assíncronas (Laravel Queues / Horizon) e cobriria os fluxos críticos com testes automatizados em PHPUnit/Pest.",
            },
          ],
        },
      },
      footerCallout: {
        label: "Destaque externo",
        href: PRESS_MEDIUM,
        cta: "Ler no Medium da Mapbox",
        body: "Matéria oficial da Mapbox sobre como o TeAjudo.me uniu mapas e impacto comunitário durante a COVID-19.",
      },
    },
  },
};