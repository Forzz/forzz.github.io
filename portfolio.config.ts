// ╔══════════════════════════════════════════════════════════════╗
// ║          PORTFOLIO CONFIG — правь только этот файл          ║
// ║  Все тексты: { ru: "...", en: "..." }                       ║
// ╚══════════════════════════════════════════════════════════════╝

const config = {
  // ─── SEO ────────────────────────────────────────────────────
  seo: {
    title: {
      ru: "Максим Баннов — Systems Analyst",
      en: "Maxim Bannov — Systems Analyst",
    },
    description: {
      ru: "Портфолио Максима Баннова — Systems Analyst. Проектирование масштабируемых систем, сбор требований, документирование, архитектура, API и сопровождение задач до продакшена.",
      en: "Portfolio of Maxim Bannov — Systems Analyst. Scalable systems design, requirements gathering, documentation, architecture, API contracting and end-to-end task delivery.",
    },
    url: "", // замени после деплоя
    ogImage: "/og.png",
  },

  // ─── Личная информация ───────────────────────────────────────
  personal: {
    name: "Максим Баннов",
    nameEn: "Maxim Bannov",
    title: {
      ru: "Systems Analyst",
      en: "Systems Analyst",
    },
    bio: {
      ru: "Проектирую масштабируемые системы, люблю разбираться в новых технологиях, структурировать требования и превращать их в понятные спецификации и рабочие решения. Веду задачи от проектирования до запуска в прод.",
      en: "I design scalable systems, enjoy diving into new technologies, structuring requirements and turning them into clear specifications and working solutions. I manage tasks end-to-end from design to production.",
    },
    location: "Russia, Moscow",
    email: "bannmaxx2000@yandex.ru",
  },

  // ─── Соцсети (порядок = порядок на сайте) ───────────────────
  social: [
    { label: "Telegram", href: "https://t.me/MaximBannov" },
    { label: "GitHub", href: "https://github.com/Forzz" },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/maxim-bannov-978353115/",
    },
  ],

  // ─── Навигация ───────────────────────────────────────────────
  nav: [
    { label: { ru: "О себе", en: "About" }, href: "#hero" },
    { label: { ru: "Навыки", en: "Skills" }, href: "#skills" },
    { label: { ru: "Опыт", en: "Experience" }, href: "#experience" },
    { label: { ru: "Контакты", en: "Contacts" }, href: "#contacts" },
  ],

  // ─── UI / Системные строки ───────────────────────────────────
  ui: {
    menuLabel: { ru: "Меню", en: "Menu" },
    themeLight: { ru: "Светлая тема", en: "Light theme" },
    themeDark: { ru: "Тёмная тема", en: "Dark theme" },
    backToTop: { ru: "Наверх", en: "Back to top" },
  },

  // ─── Hero секция ────────────────────────────────────────────
  hero: {
    greeting: { ru: "Привет, меня зовут", en: "Hi, my name is" },
    specializationLabel: { ru: "Специализация", en: "Specialization" },
    stackLabel: { ru: "Стек", en: "Stack" },
    cta: { label: { ru: "Связаться", en: "Contact me" }, href: "#contacts" },
    secondary: {
      label: { ru: "Мой опыт", en: "My experience" },
      href: "#experience",
    },

    // Бейдж "Открыт к предложениям" (true/false)
    openToWork: true,
    openToWorkLabel: { ru: "Открыт к предложениям", en: "Open to work" },

    // Счётчики под bio
    // value — строка (числа с суффиксом анимируются: "2+"; текст — статично)
    counters: [
      { value: "2+", label: { ru: "года в IT", en: "years in IT" } },
      { value: "Mobile", label: { ru: "iOS / Android", en: "iOS / Android" } },
      {
        value: "End-to-end",
        label: {
          ru: "от требований до релиза",
          en: "from requirements to production",
        },
      },
    ],

    // Три домена экспертизы в правой карточке Hero
    expertise: [
      {
        title: { ru: "Системный анализ", en: "System Analysis" },
        sub: { ru: "Бизнес и технический", en: "Business & Technical" },
      },
      {
        title: { ru: "Mobile SDUI", en: "Mobile SDUI" },
        sub: {
          ru: "Экраны, UI-компоненты и логика флоу",
          en: "Screens, UI components & flow logic",
        },
      },
      {
        title: { ru: "Проектирование API", en: "API Design" },
        sub: { ru: "Контракты и интеграции", en: "Contracts & integrations" },
      },
    ],
  },

  // ─── Навыки ──────────────────────────────────────────────────
  // color — Tailwind-классы тега (light + dark), намеренно сниженная насыщенность
  skills: {
    sectionTitle: { ru: "Навыки", en: "Skills" },
    sectionIndex: "02",
    categories: [
      {
        title: { ru: "Системный анализ", en: "Systems Analysis" },
        dotColor: "bg-blue-500 dark:bg-blue-400",
        items: [
          {
            name: { ru: "Сбор требований", en: "Requirements Gathering" },
            color: "bg-blue-500/8 text-blue-600 dark:text-blue-400",
          },
          {
            name: {
              ru: "Use cases / User stories",
              en: "Use Cases / User Stories",
            },
            color: "bg-blue-500/8 text-blue-600 dark:text-blue-400",
          },
          {
            name: { ru: "Моделирование данных", en: "Data Modeling" },
            color: "bg-blue-500/8 text-blue-600 dark:text-blue-400",
          },
          {
            name: { ru: "Проработка edge-cases", en: "Edge Case Analysis" },
            color: "bg-blue-500/8 text-blue-600 dark:text-blue-400",
          },
          {
            name: {
              ru: "Декомпозиция и оценка",
              en: "Decomposition & Estimation",
            },
            color: "bg-blue-500/8 text-blue-600 dark:text-blue-400",
          },
        ],
      },
      {
        title: {
          ru: "Архитектура и проектирование",
          en: "Architecture & Systems Design",
        },
        dotColor: "bg-indigo-500 dark:bg-indigo-400",
        items: [
          {
            name: {
              ru: "Проектирование масштабируемых систем",
              en: "Scalable Systems Design",
            },
            color: "bg-indigo-500/8 text-indigo-600 dark:text-indigo-400",
          },
          {
            name: {
              ru: "Архитектурные решения",
              en: "Architectural Decision Making",
            },
            color: "bg-indigo-500/8 text-indigo-600 dark:text-indigo-400",
          },
          {
            name: {
              ru: "Интеграции между системами",
              en: "System Integrations",
            },
            color: "bg-indigo-500/8 text-indigo-600 dark:text-indigo-400",
          },
          {
            name: { ru: "Контрактирование API", en: "API Contracting" },
            color: "bg-indigo-500/8 text-indigo-600 dark:text-indigo-400",
          },
          {
            name: {
              ru: "Версионирование контрактов",
              en: "Contract Versioning",
            },
            color: "bg-indigo-500/8 text-indigo-600 dark:text-indigo-400",
          },
        ],
      },
      {
        title: { ru: "Server-Driven UI", en: "Server-Driven UI" },
        dotColor: "bg-cyan-500 dark:bg-cyan-400",
        items: [
          {
            name: {
              ru: "Архитектура SDUI",
              en: "SDUI Architecture",
            },
            color: "bg-cyan-500/10 text-cyan-600 dark:text-cyan-400",
          },
          {
            name: {
              ru: "UI компоненты",
              en: "Component Constructor",
            },
            color: "bg-cyan-500/10 text-cyan-600 dark:text-cyan-400",
          },
          {
            name: { ru: "Динамическая логика UI", en: "Dynamic UI Logic" },
            color: "bg-cyan-500/10 text-cyan-600 dark:text-cyan-400",
          },
          {
            name: {
              ru: "Управление состояниями флоу",
              en: "Flow State Management",
            },
            color: "bg-cyan-500/10 text-cyan-600 dark:text-cyan-400",
          },
          {
            name: {
              ru: "Совместимость iOS / Android",
              en: "iOS / Android Compatibility",
            },
            color: "bg-cyan-500/10 text-cyan-600 dark:text-cyan-400",
          },
        ],
      },
      {
        title: { ru: "API и инструменты", en: "API & Tools" },
        dotColor: "bg-emerald-500 dark:bg-emerald-400",
        items: [
          {
            name: { ru: "REST API", en: "REST API" },
            color: "bg-emerald-500/8 text-emerald-600 dark:text-emerald-400",
          },
          {
            name: { ru: "Postman", en: "Postman" },
            color: "bg-emerald-500/8 text-emerald-600 dark:text-emerald-400",
          },
          {
            name: { ru: "Swagger", en: "Swagger" },
            color: "bg-emerald-500/8 text-emerald-600 dark:text-emerald-400",
          },
          {
            name: { ru: "Confluence", en: "Confluence" },
            color: "bg-emerald-500/8 text-emerald-600 dark:text-emerald-400",
          },
          {
            name: { ru: "Jira", en: "Jira" },
            color: "bg-emerald-500/8 text-emerald-600 dark:text-emerald-400",
          },
          {
            name: {
              ru: "Code Review / Code Analysis",
              en: "Code Review / Code Analysis",
            },
            color: "bg-emerald-500/8 text-emerald-600 dark:text-emerald-400",
          },
          {
            name: {
              ru: "Анализ логов",
              en: "Log Analysis",
            },
            color: "bg-emerald-500/8 text-emerald-600 dark:text-emerald-400",
          },
        ],
      },
      {
        title: { ru: "Документация и сдача", en: "Documentation & Delivery" },
        dotColor: "bg-amber-500 dark:bg-amber-400",
        items: [
          {
            name: {
              ru: "Документирование требований",
              en: "Requirements Documentation",
            },
            color: "bg-amber-500/6 text-amber-600 dark:text-amber-400",
          },
          {
            name: {
              ru: "Ведение задач end-to-end",
              en: "End-to-end Task Management",
            },
            color: "bg-amber-500/6 text-amber-600 dark:text-amber-400",
          },
          {
            name: {
              ru: "Поддержка релиза / прод",
              en: "Release Support & Production Launch",
            },
            color: "bg-amber-500/6 text-amber-600 dark:text-amber-400",
          },
          {
            name: {
              ru: "Синхронизация dev & QA",
              en: "Dev & QA Synchronization",
            },
            color: "bg-amber-500/6 text-amber-600 dark:text-amber-400",
          },
          {
            name: {
              ru: "Улучшение командных процессов",
              en: "Team process improvement",
            },
            color: "bg-amber-500/6 text-amber-600 dark:text-amber-400",
          }
        ],
      },
    ],
  },

  // ─── Опыт и образование ──────────────────────────────────────
  // work-items: summary (опционально) + bullets (опционально)
  // education-items: только title / company / period
  // current: true — текущая позиция (управляет dot + isCurrent логикой)
  // period всегда { ru, en } — локализует месяцы и "наст. вр." / "Present"
  experience: {
    sectionTitle: { ru: "Опыт", en: "Experience" },
    sectionIndex: "03",
    items: [
      {
        type: "work",
        current: true,
        title: "Systems Analyst",
        company: "Sravni.ru",
        period: {
          ru: "Сентябрь 2024 — настоящее время",
          en: "Sep 2024 — Present",
        },
        summary: {
          ru: "Mobile SDUI-платформа и финансовый кредитный продукт",
          en: "Mobile SDUI platform & financial credit product",
        },
        bullets: {
          ru: [
            "Проектирование мобильных SDUI-конфигураций для iOS и Android (экраны, компоненты, флоу)",
            "Проработка бизнес-сценариев и требований, edge-case анализ",
            "Контрактирование REST API совместно с backend-командой",
            "Документирование решений (Confluence), ведение задач в Jira",
            "Координация разработки, QA и product на этапе реализации",
            "End-to-end сопровождение задач до продакшена",
          ],
          en: [
            "Design of mobile SDUI configurations for iOS and Android (screens, components, flows)",
            "Business scenario analysis and requirements refinement, edge-case analysis",
            "REST API contract design in collaboration with backend team",
            "Documentation in Confluence, task tracking in Jira",
            "Coordination with development, QA and product teams",
            "End-to-end delivery to production",
          ],
        },
      },
      {
        type: "work",
        title: "Trainee Systems Analyst",
        company: "Sravni.ru",
        period: { ru: "Июнь 2024 — Август 2024", en: "Jun 2024 — Aug 2024" },
        bullets: {
          ru: [
            "Участие в подготовке функциональных спецификаций",
            "Поддержка команды в анализе требований",
            "Погружение в процессы разработки и системного анализа",
          ],
          en: [
            "Participation in functional specification preparation",
            "Support in requirements analysis",
            "Immersion into development and system analysis processes",
          ],
        },
      },
      {
        type: "work",
        title: "Android Developer",
        company: "22Byte",
        period: { ru: "Июнь 2023 — Октябрь 2023", en: "Jun 2023 — Oct 2023" },
        bullets: {
          ru: [
            "Разработка мобильных приложений по макетам Figma (Kotlin, Android SDK)",
            "Работа с UI и архитектурой экранов",
            "Участие в code review и взаимодействие с командой разработки",
          ],
          en: [
            "Mobile application development based on Figma designs (Kotlin, Android SDK)",
            "Work with UI and screen architecture",
            "Participation in code review and team collaboration",
          ],
        },
      },
      {
        type: "education",
        title: {
          ru: "Магистратура — Программная инженерия",
          en: "Master of Engineering (MEng), Computer Software Engineering",
        },
        company: {
          ru: "РТУ МИРЭА",
          en: "MIREA — Russian Technological University",
        },
        period: { ru: "Сентябрь 2023 — Июль 2025", en: "Sep 2023 — Jul 2025" },
      },
      {
        type: "education",
        title: {
          ru: "Бакалавр — Программная инженерия",
          en: "Bachelor of Engineering (BE), Computer Software Engineering",
        },
        company: {
          ru: "РТУ МИРЭА",
          en: "MIREA — Russian Technological University",
        },
        period: { ru: "Сентябрь 2019 — Июнь 2023", en: "Sep 2019 — Jun 2023" },
      },
    ],
  },

  // ─── Контакты ────────────────────────────────────────────────
  contacts: {
    sectionTitle: { ru: "Контакты", en: "Contacts" },
    sectionIndex: "04",
    heading: { ru: "Контакты", en: "Get in Touch" },
    description: {
      ru: "Если хотите обсудить проект или задать вопрос — пишите в Telegram или на почту.",
      en: "Feel free to reach out if you want to discuss a project or have any questions — write me on Telegram or email.",
    },
    emailLabel: { ru: "Почта", en: "Email" },
    copiedLabel: { ru: "Скопировано!", en: "Copied!" },
  },

  // ─── Footer ──────────────────────────────────────────────────
  footer: {
    // Фамилия Имя — в порядке, принятом для каждого языка
    name: { ru: "Максим Баннов", en: "Maxim Bannov" },
  },
} as const;

export default config;
