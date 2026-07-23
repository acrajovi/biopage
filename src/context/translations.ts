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
  legal_privacy_title: string;
  legal_privacy_p1: string;
  legal_privacy_h2_1: string;
  legal_privacy_p2: string;
  legal_privacy_p3: string;
  legal_privacy_li1: string;
  legal_privacy_li2: string;
  legal_privacy_li3: string;
  legal_privacy_h2_2: string;
  legal_privacy_p4: string;
  legal_privacy_h2_3: string;
  legal_privacy_p5: string;
  legal_privacy_h2_4: string;
  legal_privacy_p6: string;
  legal_terms_title: string;
  legal_terms_p1: string;
  legal_terms_p2: string;
  legal_terms_p3: string;
  legal_terms_h2_1: string;
  legal_terms_p4: string;
  legal_terms_p5: string;
  legal_terms_h2_2: string;
  legal_terms_p6: string;
  legal_terms_li1: string;
  legal_terms_li2: string;
  legal_terms_li3: string;
  legal_terms_li4: string;
  legal_terms_h2_3: string;
  legal_terms_p7: string;
  legal_terms_h2_4: string;
  legal_terms_p8: string;
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
    port_p2_desc: "Aplicación Web Progresiva (PWA) de consulta y validación rápida de RUC con base de datos unificada de contribuyentes de Paraguay.",
    port_p2_link: "Visitar sitio",
    port_p3_desc: "Aplicación Web Progresiva (PWA) para técnicos y usuarios para calcular la capacidad ideal de climatización en ambientes domésticos u oficinas.",
    port_p3_link: "Visitar sitio",
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
    float_wa: "WhatsApp",
    legal_privacy_title: "Política de Privacidad",
    legal_privacy_p1: "En BIO Soluciones Tecnológicas (accesible desde bio.com.py), una de nuestras principales prioridades es la privacidad de nuestros visitantes. Este documento de Política de Privacidad contiene los tipos de información que son recogidos y registrados por BIO Soluciones Tecnológicas y cómo los utilizamos.",
    legal_privacy_h2_1: "Uso de Cookies y Proveedores de Terceros (Google AdSense)",
    legal_privacy_p2: "Utilizamos proveedores externos, incluido Google, para publicar anuncios en nuestro sitio web. Google, como proveedor asociado, utiliza cookies (conocidas como cookies de DART) para publicar anuncios basados en las visitas anteriores de los usuarios a nuestro sitio web u otros sitios en Internet.",
    legal_privacy_p3: "Los usuarios pueden optar por inhabilitar el uso de las cookies de DART visitando la política de privacidad de la red de anuncios y contenido de Google en la siguiente URL:",
    legal_privacy_li1: "Los proveedores de terceros, incluido Google, utilizan cookies para publicar anuncios basándose en las visitas anteriores de un usuario a su sitio web o a otros sitios web.",
    legal_privacy_li2: "El uso de cookies de publicidad permite a Google y a sus socios publicar anuncios basados en las visitas que los usuarios realizan a sus sitios y/o a otros sitios de Internet.",
    legal_privacy_li3: "Los usuarios pueden inhabilitar la publicidad personalizada. Para ello, deberán acceder a",
    legal_privacy_h2_2: "Archivos de Registro (Log Files)",
    legal_privacy_p4: "BIO Soluciones Tecnológicas sigue un procedimiento estándar de uso de archivos de registro. Estos archivos registran a los visitantes cuando visitan sitios web. La información recopilada incluye direcciones de protocolo de Internet (IP), tipo de navegador, proveedor de servicios de Internet (ISP), fecha y hora, páginas de referencia/salida y posiblemente el número de clics. Estos no están vinculados a ninguna información que sea personalmente identificable.",
    legal_privacy_h2_3: "Consentimiento",
    legal_privacy_p5: "Al utilizar nuestro sitio web, usted acepta por la presente nuestra Política de Privacidad y está de acuerdo con sus Términos y Condiciones.",
    legal_privacy_h2_4: "Contacto",
    legal_privacy_p6: "Si tiene preguntas adicionales o requiere más información sobre nuestra Política de Privacidad, no dude en contactarnos a través de jacosta@bio.com.py.",
    legal_terms_title: "Términos y Condiciones",
    legal_terms_p1: "¡Bienvenido a BIO Soluciones Tecnológicas!",
    legal_terms_p2: "Estos términos y condiciones describen las reglas y regulaciones para el uso del sitio web de BIO Soluciones Tecnológicas, ubicado en bio.com.py.",
    legal_terms_p3: "Al acceder a este sitio web, asumimos que acepta estos términos y condiciones. No continúe utilizando BIO Soluciones Tecnológicas si no está de acuerdo en aceptar todos los términos y condiciones indicados en esta página.",
    legal_terms_h2_1: "Cookies",
    legal_terms_p4: "Empleamos el uso de cookies. Al acceder a BIO Soluciones Tecnológicas, usted aceptó utilizar cookies de acuerdo con la Política de Privacidad de BIO Soluciones Tecnológicas.",
    legal_terms_p5: "La mayoría de los sitios web interactivos utilizan cookies para permitirnos recuperar los detalles del usuario en cada visita. Las cookies son utilizadas por nuestro sitio web para habilitar la funcionalidad de ciertas áreas y hacer que sea más fácil para las personas que lo visitan. Algunos de nuestros socios afiliados/publicitarios (como Google AdSense) también pueden usar cookies.",
    legal_terms_h2_2: "Licencia",
    legal_terms_p6: "A menos que se indique lo contrario, BIO Soluciones Tecnológicas y/o sus licenciantes poseen los derechos de propiedad intelectual de todo el material en BIO Soluciones Tecnológicas. Todos los derechos de propiedad intelectual están reservados. Puede acceder a esto desde BIO Soluciones Tecnológicas para su uso personal sujeto a las restricciones establecidas en estos términos y condiciones.",
    legal_terms_li1: "No debe republicar material de BIO Soluciones Tecnológicas",
    legal_terms_li2: "No debe vender, alquilar o sublicenciar material de BIO Soluciones Tecnológicas",
    legal_terms_li3: "No debe reproducir, duplicar o copiar material de BIO Soluciones Tecnológicas",
    legal_terms_li4: "No debe redistribuir el contenido de BIO Soluciones Tecnológicas",
    legal_terms_h2_3: "Responsabilidad del Contenido",
    legal_terms_p7: "No seremos responsables de ningún contenido que aparezca en su sitio web o en sitios enlazados. Usted acepta protegernos y defendernos contra todas las reclamaciones que se presenten en su sitio web.",
    legal_terms_h2_4: "Reserva de Derechos",
    legal_terms_p8: "Nos reservamos el derecho de solicitar que elimine todos los enlaces o cualquier enlace en particular a nuestro sitio web. Usted aprueba eliminar de inmediato todos los enlaces a nuestro sitio web cuando se lo solicitemos. También nos reservamos el derecho de modificar estos términos y condiciones y su política de enlaces en cualquier momento."
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
    port_p2_desc: "Progressive Web App (PWA) for fast RUC query and validation with a unified taxpayer database in Paraguay.",
    port_p2_link: "Visit site",
    port_p3_desc: "Progressive Web App (PWA) for technicians and users to calculate the ideal HVAC capacity in homes or offices.",
    port_p3_link: "Visit site",
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
    float_wa: "WhatsApp",
    legal_privacy_title: "Privacy Policy",
    legal_privacy_p1: "At BIO Soluciones Tecnológicas (accessible from bio.com.py), one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by BIO Soluciones Tecnológicas and how we use it.",
    legal_privacy_h2_1: "Use of Cookies and Third-Party Providers (Google AdSense)",
    legal_privacy_p2: "We use third-party providers, including Google, to serve ads on our website. Google, as a third-party vendor, uses cookies (known as DART cookies) to serve ads based on users' prior visits to our website or other websites on the Internet.",
    legal_privacy_p3: "Users may opt out of the use of the DART cookie by visiting the Google ad and content network privacy policy at the following URL:",
    legal_privacy_li1: "Third party vendors, including Google, use cookies to serve ads based on a user's prior visits to your website or other websites.",
    legal_privacy_li2: "Google's use of advertising cookies enables it and its partners to serve ads to your users based on their visit to your sites and/or other sites on the Internet.",
    legal_privacy_li3: "Users may opt out of personalized advertising by visiting",
    legal_privacy_h2_2: "Log Files",
    legal_privacy_p4: "BIO Soluciones Tecnológicas follows a standard procedure of using log files. These files log visitors when they visit websites. The information collected includes internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. These are not linked to any information that is personally identifiable.",
    legal_privacy_h2_3: "Consent",
    legal_privacy_p5: "By using our website, you hereby consent to our Privacy Policy and agree to its Terms and Conditions.",
    legal_privacy_h2_4: "Contact",
    legal_privacy_p6: "If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us at jacosta@bio.com.py.",
    legal_terms_title: "Terms and Conditions",
    legal_terms_p1: "Welcome to BIO Soluciones Tecnológicas!",
    legal_terms_p2: "These terms and conditions outline the rules and regulations for the use of BIO Soluciones Tecnológicas's Website, located at bio.com.py.",
    legal_terms_p3: "By accessing this website we assume you accept these terms and conditions. Do not continue to use BIO Soluciones Tecnológicas if you do not agree to take all of the terms and conditions stated on this page.",
    legal_terms_h2_1: "Cookies",
    legal_terms_p4: "We employ the use of cookies. By accessing BIO Soluciones Tecnológicas, you agreed to use cookies in agreement with the BIO Soluciones Tecnológicas's Privacy Policy.",
    legal_terms_p5: "Most interactive websites use cookies to let us retrieve the user's details for each visit. Cookies are used by our website to enable the functionality of certain areas to make it easier for people visiting our website. Some of our affiliate/advertising partners (like Google AdSense) may also use cookies.",
    legal_terms_h2_2: "License",
    legal_terms_p6: "Unless otherwise stated, BIO Soluciones Tecnológicas and/or its licensors own the intellectual property rights for all material on BIO Soluciones Tecnológicas. All intellectual property rights are reserved. You may access this from BIO Soluciones Tecnológicas for your own personal use subjected to restrictions set in these terms and conditions.",
    legal_terms_li1: "You must not republish material from BIO Soluciones Tecnológicas",
    legal_terms_li2: "You must not sell, rent or sub-license material from BIO Soluciones Tecnológicas",
    legal_terms_li3: "You must not reproduce, duplicate or copy material from BIO Soluciones Tecnológicas",
    legal_terms_li4: "You must not redistribute content from BIO Soluciones Tecnológicas",
    legal_terms_h2_3: "Content Liability",
    legal_terms_p7: "We shall not be hold responsible for any content that appears on your Website. You agree to protect and defend us against all claims that is rising on your Website.",
    legal_terms_h2_4: "Reservation of Rights",
    legal_terms_p8: "We reserve the right to request that you remove all links or any particular link to our Website. You approve to immediately remove all links to our Website upon request. We also reserve the right to amen these terms and conditions and it's linking policy at any time."
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
    port_p2_desc: "Aplicativo Web Progressivo (PWA) de consulta e validação rápida de RUC com banco de dados unificado de contribuintes do Paraguai.",
    port_p2_link: "Visitar site",
    port_p3_desc: "Aplicativo Web Progressivo (PWA) para técnicos e usuários calcularem a capacidade ideal de climatização em ambientes domésticos ou escritórios.",
    port_p3_link: "Visitar site",
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
    float_wa: "WhatsApp",
    legal_privacy_title: "Política de Privacidade",
    legal_privacy_p1: "Na BIO Soluciones Tecnológicas (acessível por bio.com.py), uma das nossas principais prioridades é a privacidade dos nossos visitantes. Este documento de Política de Privacidade contém os tipos de informações coletadas e registradas pela BIO Soluciones Tecnológicas e como as utilizamos.",
    legal_privacy_h2_1: "Uso de Cookies e Provedores de Terceiros (Google AdSense)",
    legal_privacy_p2: "Utilizamos provedores terceirizados, incluindo o Google, para veicular anúncios em nosso site. O Google, como fornecedor terceirizado, usa cookies (conhecidos como cookies DART) para veicular anúncios com base em visitas anteriores dos usuários ao nosso site ou a outros sites na Internet.",
    legal_privacy_p3: "Os usuários podem optar por não usar o cookie DART visitando a política de privacidade da rede de conteúdo e anúncios do Google no seguinte URL:",
    legal_privacy_li1: "Fornecedores terceirizados, incluindo o Google, usam cookies para veicular anúncios com base nas visitas anteriores de um usuário ao seu site ou a outros sites.",
    legal_privacy_li2: "O uso de cookies de publicidade pelo Google permite que ele e seus parceiros veiculem anúncios para seus usuários com base em visitas aos seus sites e/ou outros sites na Internet.",
    legal_privacy_li3: "Os usuários podem desativar a publicidade personalizada acessando o",
    legal_privacy_h2_2: "Arquivos de Log (Log Files)",
    legal_privacy_p4: "A BIO Soluciones Tecnológicas segue um procedimento padrão de uso de arquivos de log. Esses arquivos registram os visitantes quando eles visitam sites. As informações coletadas incluem endereços de protocolo da Internet (IP), tipo de navegador, provedor de serviços de Internet (ISP), carimbo de data e hora, páginas de referência/saída e possivelmente o número de cliques. Eles não estão vinculados a nenhuma informação que seja pessoalmente identificável.",
    legal_privacy_h2_3: "Consentimento",
    legal_privacy_p5: "Ao usar nosso site, você concorda com nossa Política de Privacidade e com seus Termos e Condições.",
    legal_privacy_h2_4: "Contato",
    legal_privacy_p6: "Se você tiver dúvidas adicionais ou precisar de mais informações sobre nossa Política de Privacidade, não hesite em nos contatar pelo e-mail jacosta@bio.com.py.",
    legal_terms_title: "Termos e Condições",
    legal_terms_p1: "Bem-vindo à BIO Soluciones Tecnológicas!",
    legal_terms_p2: "Estes termos e condições descrevem as regras e regulamentos para o uso do Site da BIO Soluciones Tecnológicas, localizado em bio.com.py.",
    legal_terms_p3: "Ao acessar este site, presumimos que você aceita estes termos e condições. Não continue a usar a BIO Soluciones Tecnológicas se não concordar em aceitar todos os termos e condições indicados nesta página.",
    legal_terms_h2_1: "Cookies",
    legal_terms_p4: "Nós utilizamos cookies. Ao acessar a BIO Soluciones Tecnológicas, você concordou em usar cookies de acordo com a Política de Privacidade da BIO Soluciones Tecnológicas.",
    legal_terms_p5: "A maioria dos sites interativos usa cookies para nos permitir recuperar os detalhes do usuário a cada visita. Os cookies são usados pelo nosso site para permitir a funcionalidade de certas áreas e facilitar a vida das pessoas que o visitam. Alguns de nossos afiliados/parceiros de publicidade (como o Google AdSense) também podem usar cookies.",
    legal_terms_h2_2: "Licença",
    legal_terms_p6: "A menos que indicado de outra forma, a BIO Soluciones Tecnológicas e/ou seus licenciadores possuem os direitos de propriedade intelectual de todo o material na BIO Soluciones Tecnológicas. Todos os direitos de propriedade intelectual são reservados. Você pode acessar isso da BIO Soluciones Tecnológicas para seu uso pessoal, sujeito às restrições definidas nestes termos e condições.",
    legal_terms_li1: "Você não deve republicar material da BIO Soluciones Tecnológicas",
    legal_terms_li2: "Você não deve vender, alugar ou sublicenciar material da BIO Soluciones Tecnológicas",
    legal_terms_li3: "Você não deve reproduzir, duplicar ou copiar material da BIO Soluciones Tecnológicas",
    legal_terms_li4: "Você não deve redistribuir conteúdo da BIO Soluciones Tecnológicas",
    legal_terms_h2_3: "Responsabilidade pelo Conteúdo",
    legal_terms_p7: "Não seremos responsáveis por nenhum conteúdo que apareça em seu Site. Você concorda em nos proteger e nos defender contra todas as reivindicações que surgirem em seu Site.",
    legal_terms_h2_4: "Reserva de Direitos",
    legal_terms_p8: "Reservamo-nos o direito de solicitar que você remova todos os links ou qualquer link específico para o nosso Site. Você aprova a remoção imediata de todos os links para nosso Site, mediante solicitação. Também nos reservamos o direito de alterar estes termos e condições e sua política de links a qualquer momento."
  }
};
