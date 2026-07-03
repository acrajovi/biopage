export interface TranslationDict {
  nav_home: string;
  nav_about: string;
  nav_process: string;
  nav_services: string;
  nav_portfolio: string;
  nav_products: string;
  nav_apps: string;
  nav_faq: string;
  nav_contact: string;
  hero_badge: string;
  hero_title: string;
  hero_subtitle: string;
  hero_location: string;
  btn_quote: string;
  btn_services: string;
  stat_years: string;
  stat_projects: string;
  stat_support: string;
  about_tag: string;
  about_title: string;
  about_desc: string;
  about_feat1_title: string;
  about_feat1_desc: string;
  about_feat2_title: string;
  about_feat2_desc: string;
  about_feat3_title: string;
  about_feat3_desc: string;
  process_tag: string;
  process_title: string;
  process_subtitle: string;
  process_step1_title: string;
  process_step1_desc: string;
  process_step2_title: string;
  process_step2_desc: string;
  process_step3_title: string;
  process_step3_desc: string;
  process_step4_title: string;
  process_step4_desc: string;
  services_tag: string;
  services_title: string;
  services_subtitle: string;
  services_sys_title: string;
  services_sys_desc: string;
  services_sys_li1: string;
  services_sys_li2: string;
  services_sys_li3: string;
  services_web_title: string;
  services_web_desc: string;
  services_web_li1: string;
  services_web_li2: string;
  services_web_li3: string;
  services_app_title: string;
  services_app_desc: string;
  services_app_li1: string;
  services_app_li2: string;
  services_app_li3: string;
  services_sup_title: string;
  services_sup_desc: string;
  services_sup_li1: string;
  services_sup_li2: string;
  services_sup_li3: string;
  services_cctv_title: string;
  services_cctv_desc: string;
  services_cctv_li1: string;
  services_cctv_li2: string;
  services_cctv_li3: string;
  portfolio_tag: string;
  portfolio_title: string;
  portfolio_subtitle: string;
  port_filter_all: string;
  port_filter_web: string;
  port_filter_sys: string;
  port_sys_badge: string;
  port_web_badge: string;
  port_p1_desc: string;
  port_p1_link: string;
  port_p2_desc: string;
  port_p2_link: string;
  port_p3_desc: string;
  port_p3_link: string;
  tech_tag: string;
  tech_title: string;
  tech_subtitle: string;
  prod_tag: string;
  prod_title: string;
  prod_subtitle: string;
  prod_card_title: string;
  prod_card_desc: string;
  prod_li1: string;
  prod_li2: string;
  prod_li3: string;
  prod_li4: string;
  prod_li5: string;
  prod_btn: string;
  faq_tag: string;
  faq_title: string;
  faq_subtitle: string;
  faq_q1: string;
  faq_a1: string;
  faq_q2: string;
  faq_a2: string;
  faq_q3: string;
  faq_a3: string;
  faq_q4: string;
  faq_a4: string;
  contact_tag: string;
  contact_title: string;
  contact_phone: string;
  contact_loc: string;
  contact_form_name: string;
  contact_form_email: string;
  contact_form_msg: string;
  contact_form_btn: string;
  footer_desc: string;
  footer_links: string;
  footer_services: string;
  footer_rights: string;
  float_call: string;
  float_wa: string;
}

export type SupportedLanguages = 'es' | 'en' | 'pt';

export const translations: Record<SupportedLanguages, TranslationDict> = {
  es: {
    nav_home: "Inicio",
    nav_about: "Nosotros",
    nav_process: "Proceso",
    nav_services: "Servicios",
    nav_portfolio: "Proyectos",
    nav_products: "Productos",
    nav_apps: "Apps",
    nav_faq: "FAQ",
    nav_contact: "Contacto",
    hero_badge: "Soluciones Tecnológicas en Paraguay",
    hero_title: "Impulsamos tu negocio con",
    hero_subtitle: "Desarrollo de sistemas, páginas web, aplicaciones móviles, soporte técnico y CCTV.",
    hero_location: "From Paraguay",
    btn_quote: "Cotizar Proyecto",
    btn_services: "Ver Servicios",
    stat_years: "Años",
    stat_projects: "Proyectos",
    stat_support: "Soporte",
    about_tag: "Sobre Nosotros",
    about_title: "Somos una startup de tecnología",
    about_desc: "Nos dedicamos a la innovación y al desarrollo de soluciones integrales en aplicaciones web y sistemas.",
    about_feat1_title: "Creativos",
    about_feat1_desc: "Combinamos habilidades e ideas para crear soluciones orientadas al usuario.",
    about_feat2_title: "Profesionales",
    about_feat2_desc: "Equipo apasionado por la tecnología.",
    about_feat3_title: "Equipo",
    about_feat3_desc: "Siempre actualizándose con las últimas tendencias.",
    process_tag: "¿Cómo trabajamos?",
    process_title: "Nuestro Proceso",
    process_subtitle: "Así transformamos tu idea en realidad",
    process_step1_title: "Planificación",
    process_step1_desc: "Analizamos tus necesidades y definimos objetivos",
    process_step2_title: "Diseño",
    process_step2_desc: "Creamos prototipos adaptados a tu identidad",
    process_step3_title: "Desarrollo",
    process_step3_desc: "Implementamos con las mejores tecnologías",
    process_step4_title: "Lanzamiento",
    process_step4_desc: "Deployamos y optimizamos para tu negocio",
    services_tag: "Servicios",
    services_title: "¿Qué podemos hacer por ti?",
    services_subtitle: "Soluciones tecnológicas completas",
    services_sys_title: "Sistemas de Gestión",
    services_sys_desc: "Sistemas a medida para empresas. Ventas, inventario, facturación electrónica.",
    services_sys_li1: "Control de sucursales",
    services_sys_li2: "Facturación electrónica",
    services_sys_li3: "Reportes en tiempo real",
    services_web_title: "Páginas Web",
    services_web_desc: "Sitios web modernos, seguros y adaptables.",
    services_web_li1: "Sitios institucionales",
    services_web_li2: "Tiendas online",
    services_web_li3: "Optimización SEO",
    services_app_title: "Aplicaciones Móviles",
    services_app_desc: "Apps para Android y iOS.",
    services_app_li1: "Desarrollo nativo e híbrido",
    services_app_li2: "Publicación en tiendas (App Store / Play Store)",
    services_app_li3: "Integración de APIs y bases de datos",
    services_sup_title: "Soporte Técnico",
    services_sup_desc: "Asistencia 24/7, mantenimiento.",
    services_sup_li1: "Monitoreo remoto",
    services_sup_li2: "Backup automatizado",
    services_sup_li3: "Recuperación de datos",
    services_cctv_title: "CCTV",
    services_cctv_desc: "Sistemas de videovigilancia.",
    services_cctv_li1: "Cámaras IP",
    services_cctv_li2: "Grabación inteligente",
    services_cctv_li3: "Acceso remoto",
    portfolio_tag: "Portafolio",
    portfolio_title: "Nuestros Proyectos",
    portfolio_subtitle: "Soluciones tecnológicas que impulsan y facilitan el día a día",
    port_filter_all: "Todos",
    port_filter_web: "Web",
    port_filter_sys: "Sistemas",
    port_sys_badge: "Sistema",
    port_web_badge: "Web",
    port_p1_desc: "Sistema ERP completo de facturación electrónica y gestión comercial optimizado para comercios en Paraguay.",
    port_p1_link: "Ver más detalles",
    port_p2_desc: "Plataforma de consulta y validación rápida de RUC con base de datos unificada de contribuyentes de Paraguay.",
    port_p2_link: "Visitar sitio",
    port_p3_desc: "Aplicación para técnicos y usuarios para calcular la capacidad ideal de climatización en ambientes domésticos u oficinas.",
    port_p3_link: "Probar aplicación",
    tech_tag: "Tecnologías",
    tech_title: "Nuestro Stack Tecnológico",
    tech_subtitle: "Utilizamos herramientas modernas para garantizar escalabilidad, seguridad y velocidad",
    prod_tag: "Producto Destacado",
    prod_title: "BIOSHOP",
    prod_subtitle: "Gestión inteligente para tu negocio",
    prod_card_title: "Control total de tu negocio",
    prod_card_desc: "BIOSHOP es nuestra solución integral. Gestiona ventas, inventario, clientes y facturación electrónica.",
    prod_li1: "Control de tienda y sucursales",
    prod_li2: "Reportes automáticos",
    prod_li3: "Facturación electrónica",
    prod_li4: "Acceso desde web y app",
    prod_li5: "Soporte constante",
    prod_btn: "Solicitar Demo",
    faq_tag: "Soporte",
    faq_title: "Preguntas Frecuentes",
    faq_subtitle: "Todo lo que necesitas saber sobre nuestras soluciones y procesos de trabajo",
    faq_q1: "¿Qué tipo de soporte técnico ofrecen post-entrega?",
    faq_a1: "Ofrecemos soporte técnico 24/7 para incidencias críticas, mantenimiento de servidores, backups semanales automáticos y actualizaciones del sistema incluidas en nuestros planes de mantenimiento mensual.",
    faq_q2: "¿El sistema BIOSHOP incluye facturación electrónica de SIFEN?",
    faq_a2: "Sí, BIOSHOP está totalmente homologado e integrado con el sistema SIFEN de la SET para la emisión inmediata de Facturas Electrónicas (DE) y notas de crédito de manera automatizada.",
    faq_q3: "¿Cuánto tiempo toma desarrollar una página web a medida?",
    faq_a3: "Una página web corporativa promedio se desarrolla en un periodo de 3 a 5 semanas. Proyectos más complejos como plataformas de e-commerce a medida o aplicaciones web personalizadas pueden demorar de 6 a 12 semanas.",
    faq_q4: "¿Cómo cotizan los proyectos de desarrollo?",
    faq_a4: "Realizamos una reunión inicial gratuita de relevamiento de requisitos. Luego, nuestro equipo elabora un documento de alcance y una cotización formal detallando los hitos de entrega y formas de pago.",
    contact_tag: "Contacto",
    contact_title: "Hablemos de tu proyecto",
    contact_phone: "Teléfono / Llamadas",
    contact_loc: "Ubicación",
    contact_form_name: "Nombre",
    contact_form_email: "Email",
    contact_form_msg: "Mensaje",
    contact_form_btn: "Enviar Mensaje",
    footer_desc: "Soluciones tecnológicas integrales para tu negocio en Paraguay.",
    footer_links: "Enlaces",
    footer_services: "Servicios",
    footer_rights: "BIO Soluciones Tecnológicas. Todos los derechos reservados.",
    float_call: "Llámanos",
    float_wa: "WhatsApp"
  },
  en: {
    nav_home: "Home",
    nav_about: "About Us",
    nav_process: "Process",
    nav_services: "Services",
    nav_portfolio: "Projects",
    nav_products: "Products",
    nav_apps: "Apps",
    nav_faq: "FAQ",
    nav_contact: "Contact",
    hero_badge: "Technology Solutions in Paraguay",
    hero_title: "We boost your business with",
    hero_subtitle: "Software development, web design, mobile apps, tech support, and CCTV.",
    hero_location: "From Paraguay",
    btn_quote: "Get a Quote",
    btn_services: "View Services",
    stat_years: "Years",
    stat_projects: "Projects",
    stat_support: "Support",
    about_tag: "About Us",
    about_title: "We are a technology startup",
    about_desc: "We are dedicated to innovation and the development of comprehensive web and system solutions.",
    about_feat1_title: "Creative",
    about_feat1_desc: "We combine skills and ideas to create user-oriented solutions.",
    about_feat2_title: "Professional",
    about_feat2_desc: "A team passionate about technology.",
    about_feat3_title: "Team",
    about_feat3_desc: "Always keeping up with the latest trends.",
    process_tag: "How we work?",
    process_title: "Our Process",
    process_subtitle: "This is how we turn your idea into reality",
    process_step1_title: "Planning",
    process_step1_desc: "We analyze your needs and define objectives",
    process_step2_title: "Design",
    process_step2_desc: "We create prototypes tailored to your brand",
    process_step3_title: "Development",
    process_step3_desc: "We implement using the best technologies",
    process_step4_title: "Launch",
    process_step4_desc: "We deploy and optimize for your business",
    services_tag: "Services",
    services_title: "What can we do for you?",
    services_subtitle: "Complete technological solutions",
    services_sys_title: "Management Systems",
    services_sys_desc: "Custom systems for businesses. Sales, inventory, electronic invoicing.",
    services_sys_li1: "Branch control",
    services_sys_li2: "Electronic invoicing",
    services_sys_li3: "Real-time reports",
    services_web_title: "Web Pages",
    services_web_desc: "Modern, secure, and responsive websites.",
    services_web_li1: "Corporate sites",
    services_web_li2: "Online stores",
    services_web_li3: "SEO Optimization",
    services_app_title: "Mobile Applications",
    services_app_desc: "Apps for Android and iOS.",
    services_app_li1: "Native and hybrid development",
    services_app_li2: "Store publishing (App Store / Play Store)",
    services_app_li3: "API and database integration",
    services_sup_title: "Tech Support",
    services_sup_desc: "24/7 assistance, maintenance.",
    services_sup_li1: "Remote monitoring",
    services_sup_li2: "Automated backups",
    services_sup_li3: "Data recovery",
    services_cctv_title: "CCTV",
    services_cctv_desc: "Video surveillance systems.",
    services_cctv_li1: "IP Cameras",
    services_cctv_li2: "Smart recording",
    services_cctv_li3: "Remote access",
    portfolio_tag: "Portfolio",
    portfolio_title: "Our Projects",
    portfolio_subtitle: "Technological solutions that drive and ease everyday tasks",
    port_filter_all: "All",
    port_filter_web: "Web",
    port_filter_sys: "Systems",
    port_sys_badge: "System",
    port_web_badge: "Web",
    port_p1_desc: "Complete ERP system for electronic invoicing and commercial management optimized for businesses in Paraguay.",
    port_p1_link: "View more details",
    port_p2_desc: "Fast RUC query and validation platform with a unified taxpayer database in Paraguay.",
    port_p2_link: "Visit site",
    port_p3_desc: "Application for technicians and users to calculate the ideal HVAC capacity in homes or offices.",
    port_p3_link: "Try application",
    tech_tag: "Technologies",
    tech_title: "Our Tech Stack",
    tech_subtitle: "We use modern tools to ensure scalability, security, and speed",
    prod_tag: "Featured Product",
    prod_title: "BIOSHOP",
    prod_subtitle: "Smart management for your business",
    prod_card_title: "Total control of your business",
    prod_card_desc: "BIOSHOP is our comprehensive solution. Manage sales, inventory, customers, and electronic invoicing.",
    prod_li1: "Store and branch control",
    prod_li2: "Automated reports",
    prod_li3: "Electronic invoicing",
    prod_li4: "Web and app access",
    prod_li5: "Constant support",
    prod_btn: "Request a Demo",
    faq_tag: "Support",
    faq_title: "Frequently Asked Questions",
    faq_subtitle: "Everything you need to know about our solutions and workflows",
    faq_q1: "What kind of post-delivery tech support do you offer?",
    faq_a1: "We offer 24/7 tech support for critical incidents, server maintenance, automatic weekly backups, and system updates included in our monthly maintenance plans.",
    faq_q2: "Does the BIOSHOP system include SIFEN electronic invoicing?",
    faq_a2: "Yes, BIOSHOP is fully certified and integrated with the SET's SIFEN system for immediate and automated issuance of Electronic Invoices (DE) and credit notes.",
    faq_q3: "How long does it take to develop a custom website?",
    faq_a3: "An average corporate website is developed in 3 to 5 weeks. More complex projects like custom e-commerce platforms or web apps can take 6 to 12 weeks.",
    faq_q4: "How do you quote development projects?",
    faq_a4: "We hold a free initial requirements-gathering meeting. Then, our team drafts a scope document and a formal quote detailing delivery milestones and payment methods.",
    contact_tag: "Contact",
    contact_title: "Let's talk about your project",
    contact_phone: "Phone / Calls",
    contact_loc: "Location",
    contact_form_name: "Name",
    contact_form_email: "Email",
    contact_form_msg: "Message",
    contact_form_btn: "Send Message",
    footer_desc: "Comprehensive technology solutions for your business in Paraguay.",
    footer_links: "Links",
    footer_services: "Services",
    footer_rights: "BIO Soluciones Tecnológicas. All rights reserved.",
    float_call: "Call us",
    float_wa: "WhatsApp"
  },
  pt: {
    nav_home: "Início",
    nav_about: "Sobre Nós",
    nav_process: "Processo",
    nav_services: "Serviços",
    nav_portfolio: "Projetos",
    nav_products: "Produtos",
    nav_apps: "Apps",
    nav_faq: "FAQ",
    nav_contact: "Contato",
    hero_badge: "Soluções Tecnológicas no Paraguai",
    hero_title: "Impulsionamos o seu negócio com",
    hero_subtitle: "Desenvolvimento de sistemas, sites, aplicativos móveis, suporte técnico e CFTV.",
    hero_location: "From Paraguay",
    btn_quote: "Orçar Projeto",
    btn_services: "Ver Serviços",
    stat_years: "Anos",
    stat_projects: "Projetos",
    stat_support: "Suporte",
    about_tag: "Sobre Nós",
    about_title: "Somos una startup de tecnologia",
    about_desc: "Dedicamo-nos à inovação e ao desenvolvimento de soluções completas em aplicativos web e sistemas.",
    about_feat1_title: "Criativos",
    about_feat1_desc: "Combinamos habilidades e ideias para criar soluções focadas no usuário.",
    about_feat2_title: "Profissionais",
    about_feat2_desc: "Equipe apaixonada por tecnologia.",
    about_feat3_title: "Equipe",
    about_feat3_desc: "Sempre atualizada com as últimas tendências.",
    process_tag: "Como trabalhamos?",
    process_title: "Nosso Processo",
    process_subtitle: "Assim transformamos sua ideia em realidade",
    process_step1_title: "Planejamento",
    process_step1_desc: "Analisamos suas necessidades e definimos objetivos",
    process_step2_title: "Design",
    process_step2_desc: "Criamos protótipos adaptados à sua identidade",
    process_step3_title: "Desenvolvimento",
    process_step3_desc: "Implementamos com as melhores tecnologias",
    process_step4_title: "Lançamento",
    process_step4_desc: "Fazemos o deploy e otimizamos para o seu negócio",
    services_tag: "Serviços",
    services_title: "O que podemos fazer por você?",
    services_subtitle: "Soluções tecnológicas completas",
    services_sys_title: "Sistemas de Gestão",
    services_sys_desc: "Sistemas sob medida para empresas. Vendas, estoque, faturamento eletrônico.",
    services_sys_li1: "Controle de filiais",
    services_sys_li2: "Faturamento eletrônico",
    services_sys_li3: "Relatórios em tempo real",
    services_web_title: "Sites",
    services_web_desc: "Sites modernos, seguros e responsivos.",
    services_web_li1: "Sites institucionais",
    services_web_li2: "Lojas virtuais",
    services_web_li3: "Otimização SEO",
    services_app_title: "Aplicativos Móveis",
    services_app_desc: "Apps para Android e iOS.",
    services_app_li1: "Desenvolvimento nativo e híbrido",
    services_app_li2: "Publicação nas lojas (App Store / Play Store)",
    services_app_li3: "Integração de APIs e bancos de dados",
    services_sup_title: "Suporte Técnico",
    services_sup_desc: "Assistência 24/7, manutenção.",
    services_sup_li1: "Monitoramento remoto",
    services_sup_li2: "Backup automatizado",
    services_sup_li3: "Recuperação de dados",
    services_cctv_title: "CFTV",
    services_cctv_desc: "Sistemas de videomonitoramento.",
    services_cctv_li1: "Câmeras IP",
    services_cctv_li2: "Gravação inteligente",
    services_cctv_li3: "Acesso remoto",
    portfolio_tag: "Portfólio",
    portfolio_title: "Nossos Projetos",
    portfolio_subtitle: "Soluções tecnológicas que impulsionam e facilitam o dia a dia",
    port_filter_all: "Todos",
    port_filter_web: "Web",
    port_filter_sys: "Sistemas",
    port_sys_badge: "Sistema",
    port_web_badge: "Web",
    port_p1_desc: "Sistema ERP completo de faturamento eletrônico e gestão comercial otimizado para comércios no Paraguai.",
    port_p1_link: "Ver mais detalhes",
    port_p2_desc: "Plataforma de consulta e validação rápida de RUC com banco de dados unificado de contribuintes do Paraguai.",
    port_p2_link: "Visitar site",
    port_p3_desc: "Aplicativo para técnicos e usuários calcularem a capacidade ideal de climatização em ambientes domésticos ou escritórios.",
    port_p3_link: "Testar aplicativo",
    tech_tag: "Tecnologias",
    tech_title: "Nosso Tech Stack",
    tech_subtitle: "Utilizamos ferramentas modernas para garantir escalabilidade, segurança e velocidade",
    prod_tag: "Produto em Destaque",
    prod_title: "BIOSHOP",
    prod_subtitle: "Gestão inteligente para o seu negócio",
    prod_card_title: "Controle total do seu negócio",
    prod_card_desc: "BIOSHOP é nossa solução integral. Gerencia vendas, estoque, clientes e faturamento eletrônico.",
    prod_li1: "Controle de loja e filiais",
    prod_li2: "Relatórios automáticos",
    prod_li3: "Faturamento eletrônico",
    prod_li4: "Acesso via web e app",
    prod_li5: "Suporte constante",
    prod_btn: "Solicitar Demo",
    faq_tag: "Suporte",
    faq_title: "Perguntas Frequentes",
    faq_subtitle: "Tudo o que você precisa saber sobre nossas soluções e processos de trabalho",
    faq_q1: "Que tipo de suporte técnico oferecem pós-entrega?",
    faq_a1: "Oferecemos suporte técnico 24/7 para incidentes críticos, manutenção de servidores, backups semanais automáticos e atualizações do sistema incluídas em nossos planos de manutenção mensal.",
    faq_q2: "O sistema BIOSHOP inclui faturamento eletrônico do SIFEN?",
    faq_a2: "Sim, o BIOSHOP está totalmente homologado e integrado com o sistema SIFEN da SET para a emissão imediata de Notas Fiscais Eletrônicas (DE) e notas de crédito de forma automatizada.",
    faq_q3: "Quanto tempo leva para desenvolver um site sob medida?",
    faq_a3: "Um site corporativo médio é desenvolvido num período de 3 a 5 semanas. Projetos mais complexos, como plataformas de e-commerce sob medida ou aplicativos web, podem demorar de 6 a 12 semanas.",
    faq_q4: "Como fazem o orçamento dos projetos de desenvolvimento?",
    faq_a4: "Realizamos uma reunião inicial gratuita de levantamento de requisitos. Em seguida, nossa equipe elabora um documento de escopo e um orçamento formal detalhando os prazos de entrega e formas de pagamento.",
    contact_tag: "Contato",
    contact_title: "Vamos falar sobre seu projeto",
    contact_phone: "Telefone / Ligações",
    contact_loc: "Localização",
    contact_form_name: "Nome",
    contact_form_email: "E-mail",
    contact_form_msg: "Mensagem",
    contact_form_btn: "Enviar Mensagem",
    footer_desc: "Soluções tecnológicas completas para o seu negócio no Paraguai.",
    footer_links: "Links",
    footer_services: "Serviços",
    footer_rights: "BIO Soluções Tecnológicas. Todos os direitos reservados.",
    float_call: "Ligue para nós",
    float_wa: "WhatsApp"
  }
};
