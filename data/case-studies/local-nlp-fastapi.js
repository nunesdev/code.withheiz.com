const CODE_SNIPPET = `@asynccontextmanager
async def lifespan(app: FastAPI):
    app.state.nlp = NLPRuntime.load()
    try:
        yield
    finally:
        app.state.nlp = None

@app.post("/processar_texto", response_model=SentimentResponse)
def processar_texto(payload: TextRequest):
  if app.state.nlp is None:
      raise HTTPException(status_code=503, detail="Model unavailable")
  if not payload.texto.strip():
      raise HTTPException(status_code=400, detail="Empty text")
  encoding = tokenizer(
      payload.texto,
      truncation=True,
      max_length=512,
      return_tensors="pt",
  )
  # texto_original preserved; inference uses truncated tokens only`;

const META_FIELD_CONFIG = [
  { key: "context", labelKey: "context" },
  { key: "stack", labelKey: "stack", array: true },
  { key: "model", labelKey: "model" },
  { key: "inferenceCost", labelKey: "inferenceCost" },
];

export const localNlpFastapi = {
  id: "local-nlp-fastapi",
  slug: "local-nlp-fastapi",
  template: "ml-engineering",
  breadcrumbs: ["ML Engineering", "FastAPI", "NLP"],
  githubUrl:
    "https://github.com/nunesdev/data-science/tree/main/local-nlp-fastapi",
  metaFieldConfig: META_FIELD_CONFIG,
  content: {
    en: {
      title: "Local NLP Sentiment API & Data Pipeline",
      heroDescription:
        "End-to-end ML engineering pipeline serving a multilingual BERT sentiment model 100% locally on CPU via FastAPI, with incremental scraping, strict Pydantic contracts, and reproducible latency benchmarks.",
      metaLabels: {
        heading: "Project metadata",
        context: "Context",
        stack: "Stack",
        model: "Model",
        inferenceCost: "Inference cost",
      },
      originNote: {
        label: "Origin",
        body: "Applied project from B.Sc. in Data Science & AI (INFNET), refactored into a standalone architecture.",
      },
      meta: {
        context:
          "ConectaFood — NGO screening & food redistribution platform aligned with UN SDG 2 (Zero Hunger) and SDG 12 (Responsible Consumption).",
        stack: [
          "Python",
          "FastAPI",
          "Hugging Face Transformers",
          "PyTorch",
          "Pydantic",
          "Streamlit",
          "BeautifulSoup",
        ],
        model: "nlptown/bert-base-multilingual-uncased-sentiment (~670 MB local cache)",
        inferenceCost: "$0 — 100% local CPU execution, zero paid cloud API calls",
      },
      sections: {
        problem: {
          title: "Problem & engineering goal",
          body: "NGO descriptions collected from public directories are unstructured free-text in Portuguese. Manually triaging dozens of organizations to identify clear, high-impact narratives does not scale. The goal was to build a decoupled, zero-cost NLP serving architecture capable of scoring Portuguese text on a 1–5 star scale locally on CPU, with predictable latency and production-grade API contracts.",
        },
        architecture: {
          title: "Architecture & data flow",
          flowSteps: [
            "Observatório do 3º Setor",
            "BeautifulSoup scraper (append + dedupe)",
            "data/projetos_sociais.csv",
            "FastAPI (lifespan + locks + BERT)",
            "Streamlit UI (HTTP/JSON + CSV fallback)",
          ],
          decisions: [
            {
              title: "Incremental ingestion",
              body: "Consolidated scraping into BeautifulSoup with URL normalization and composite-key deduplication (name|site) so re-runs never overwrite API-created records.",
            },
            {
              title: "Decoupled serving",
              body: "FastAPI loads the Transformer once at startup (lifespan) and protects both CPU inference and CSV writes with threading.Lock.",
            },
            {
              title: "Lightweight UI",
              body: "The Streamlit multi-page app never imports torch or transformers; it consumes GET /ongs, POST /ongs, and POST /processar_texto via HTTP, with an offline CSV fallback for the analytics dashboard.",
            },
          ],
        },
        modelComparison: {
          title: "Model selection trade-offs",
          columns: ["Dimension", "Chosen (BERT multilingual)", "Discarded (DistilBERT SST-2)"],
          rows: [
            {
              dimension: "Language",
              chosen: "Multilingual including PT-BR",
              discarded: "English-only (degrades on PT without translation)",
            },
            {
              dimension: "Granularity",
              chosen: "1–5 stars (useful for ranking/triage)",
              discarded: "Binary (positive / negative)",
            },
            {
              dimension: "Disk footprint",
              chosen: "~670 MB",
              discarded: "~260 MB",
            },
          ],
        },
        benchmark: {
          title: "CPU benchmark results",
          intro:
            "Measured on macOS ARM64, 8 logical cores, CPU device=-1, 1 warmup + 3 runs per sample.",
          kpis: [
            {
              value: "103.19 ms",
              label: "Global mean latency",
              hint: "68 ms – 177 ms",
            },
            {
              value: "707.9 MB",
              label: "Peak RSS RAM",
              hint: "~392.3 MB delta over 315.6 MB baseline",
            },
            {
              value: "1.13 s",
              label: "Warm cache model load",
            },
          ],
          tableCaption: "Per-sample latency",
          samples: [
            {
              name: "Associação Antialcoólica de SP",
              chars: "148",
              latency: "68.06 ms",
              score: "4 stars (0.57)",
            },
            {
              name: "Projeto Eu Acredito",
              chars: "240",
              latency: "69.49 ms",
              score: "5 stars (0.50)",
            },
            {
              name: "Consulado da Mulher",
              chars: "277",
              latency: "87.40 ms",
              score: "4 stars (0.49)",
            },
            {
              name: "Desaparecidos do Brasil",
              chars: "345",
              latency: "114.45 ms",
              score: "4 stars (0.47)",
            },
            {
              name: "Organização Bem-Animal (OBA!)",
              chars: "494",
              latency: "176.53 ms",
              score: "4 stars (0.54)",
            },
          ],
        },
        engineering: {
          title: "Engineering highlights",
          code: CODE_SNIPPET,
          caption:
            "lifespan warm-load, explicit HTTP error mapping (422 / 400 / 503), and max_length=512 truncation while preserving texto_original.",
        },
        limitations: {
          title: "Known limitations & next steps",
          items: [
            "Domain shift: the model was fine-tuned on product reviews; factual institutional NGO descriptions scored 4–5 stars with moderate confidence (0.47–0.57).",
            "Token limit: inputs exceeding 512 tokens are truncated at inference time.",
          ],
          nextStepsTitle: "Next steps",
          nextSteps: [
            "Migrate CSV persistence to PostgreSQL.",
            "Add async batch scoring for the full dataset.",
            "Integrate geolocation/maps for donor–NGO proximity matching.",
          ],
        },
      },
      footerCallout: {
        label: "Repository",
        cta: "View source code on GitHub",
        body: "Explore the FastAPI service, Streamlit UI, scraper, and benchmark scripts in the project repository.",
      },
    },
    pt: {
      title: "API de NLP Local e Pipeline de Dados",
      heroDescription:
        "Pipeline end-to-end de engenharia de ML servindo um modelo BERT multilíngue 100% local em CPU com FastAPI, coleta incremental, contratos Pydantic e benchmark reprodutível de latência.",
      metaLabels: {
        heading: "Metadados do projeto",
        context: "Contexto",
        stack: "Stack",
        model: "Modelo",
        inferenceCost: "Custo de inferência",
      },
      originNote: {
        label: "Origem",
        body: "Projeto aplicado no Bacharelado em Ciência de Dados e IA (INFNET), refatorado como arquitetura standalone.",
      },
      meta: {
        context:
          "ConectaFood — plataforma de triagem de ONGs e redistribuição de alimentos alinhada aos ODS 2 (Fome Zero) e 12 (Consumo Responsável).",
        stack: [
          "Python",
          "FastAPI",
          "Hugging Face Transformers",
          "PyTorch",
          "Pydantic",
          "Streamlit",
          "BeautifulSoup",
        ],
        model:
          "nlptown/bert-base-multilingual-uncased-sentiment (~670 MB em cache local)",
        inferenceCost:
          "R$ 0 — execução 100% local em CPU, sem chamadas pagas a APIs de nuvem",
      },
      sections: {
        problem: {
          title: "Problema e objetivo de engenharia",
          body: "Descrições de ONGs coletadas de diretórios públicos são textos livres não estruturados em português. Fazer a triagem manual de dezenas de organizações não escala. O objetivo foi construir uma arquitetura desacoplada de inferência NLP com custo zero de API, capaz de classificar textos em português numa escala de 1 a 5 estrelas localmente em CPU, com latência previsível e contratos de API rigorosos.",
        },
        architecture: {
          title: "Arquitetura e fluxo de dados",
          flowSteps: [
            "Observatório do 3º Setor",
            "Scraper BeautifulSoup (append + dedupe)",
            "data/projetos_sociais.csv",
            "FastAPI (lifespan + locks + BERT)",
            "UI Streamlit (HTTP/JSON + fallback CSV)",
          ],
          decisions: [
            {
              title: "Ingestão incremental",
              body: "Scraping consolidado com BeautifulSoup, normalização de URL e deduplicação por chave composta (name|site) para que reexecuções não sobrescrevam registros criados via API.",
            },
            {
              title: "Serviço desacoplado",
              body: "FastAPI carrega o Transformer uma vez no startup (lifespan) e protege inferência em CPU e gravações no CSV com threading.Lock.",
            },
            {
              title: "UI leve",
              body: "O app multi-página Streamlit não importa torch nem transformers; consome GET /ongs, POST /ongs e POST /processar_texto via HTTP, com fallback offline em CSV para o dashboard.",
            },
          ],
        },
        modelComparison: {
          title: "Trade-offs na escolha do modelo",
          columns: ["Dimensão", "Escolhido (BERT multilíngue)", "Descartado (DistilBERT SST-2)"],
          rows: [
            {
              dimension: "Idioma",
              chosen: "Multilíngue incluindo PT-BR",
              discarded: "Somente inglês (degrada em PT sem tradução)",
            },
            {
              dimension: "Granularidade",
              chosen: "1–5 estrelas (útil para ranking/triagem)",
              discarded: "Binário (positivo / negativo)",
            },
            {
              dimension: "Footprint em disco",
              chosen: "~670 MB",
              discarded: "~260 MB",
            },
          ],
        },
        benchmark: {
          title: "Resultados de benchmark em CPU",
          intro:
            "Medido em macOS ARM64, 8 núcleos lógicos, CPU device=-1, 1 warmup + 3 execuções por amostra.",
          kpis: [
            {
              value: "103,19 ms",
              label: "Latência média global",
              hint: "68 ms – 177 ms",
            },
            {
              value: "707,9 MB",
              label: "Pico de RAM (RSS)",
              hint: "~392,3 MB acima do baseline de 315,6 MB",
            },
            {
              value: "1,13 s",
              label: "Carregamento com cache quente",
            },
          ],
          tableCaption: "Latência por amostra",
          samples: [
            {
              name: "Associação Antialcoólica de SP",
              chars: "148",
              latency: "68,06 ms",
              score: "4 estrelas (0,57)",
            },
            {
              name: "Projeto Eu Acredito",
              chars: "240",
              latency: "69,49 ms",
              score: "5 estrelas (0,50)",
            },
            {
              name: "Consulado da Mulher",
              chars: "277",
              latency: "87,40 ms",
              score: "4 estrelas (0,49)",
            },
            {
              name: "Desaparecidos do Brasil",
              chars: "345",
              latency: "114,45 ms",
              score: "4 estrelas (0,47)",
            },
            {
              name: "Organização Bem-Animal (OBA!)",
              chars: "494",
              latency: "176,53 ms",
              score: "4 estrelas (0,54)",
            },
          ],
        },
        engineering: {
          title: "Destaques de engenharia",
          code: CODE_SNIPPET,
          caption:
            "Warm-load no lifespan, mapeamento explícito de erros HTTP (422 / 400 / 503) e truncation max_length=512 preservando texto_original.",
        },
        limitations: {
          title: "Limitações conhecidas e próximos passos",
          items: [
            "Domain shift: o modelo foi fine-tuned em reviews de produtos; descrições institucionais factuais pontuaram 4–5 estrelas com confiança moderada (0,47–0,57).",
            "Limite de tokens: entradas acima de 512 tokens são truncadas na inferência.",
          ],
          nextStepsTitle: "Próximos passos",
          nextSteps: [
            "Migrar persistência CSV para PostgreSQL.",
            "Adicionar scoring assíncrono em lote para o dataset completo.",
            "Integrar geolocalização/mapas para matching de proximidade doador–ONG.",
          ],
        },
      },
      footerCallout: {
        label: "Repositório",
        cta: "Ver código-fonte no GitHub",
        body: "Explore o serviço FastAPI, a UI Streamlit, o scraper e os scripts de benchmark no repositório do projeto.",
      },
    },
  },
};