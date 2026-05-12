const year = document.getElementById("year");
const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.getElementById("navLinks");
const languageButtons = document.querySelectorAll("[data-lang]");

const translations = {
  es: {
    "meta.title": "Flamax Media | Paginas web y marketing digital en Logroño",
    "meta.description": "Flamax Media crea paginas web, gestiona redes sociales y diseña publicidad para negocios, proyectos y eventos en Logroño, La Rioja.",
    "meta.services.title": "Servicios de marketing digital en Logroño | Flamax Media",
    "meta.services.description": "Servicios de marketing digital en Logroño: paginas web, redes sociales, carteles publicitarios y promocion de eventos con Flamax Media.",
    "meta.method.title": "Metodo de trabajo para proyectos digitales | Flamax Media",
    "meta.method.description": "Conoce el metodo de Flamax Media: ordenamos el mensaje, diseñamos las piezas necesarias y promocionamos tu proyecto digital.",
    "meta.portfolio.title": "Proyectos y trabajos web | Flamax Media",
    "meta.portfolio.description": "Explora proyectos de Flamax Media: presencia online, portfolios, identidad digital y trabajos de referencia para negocios y proyectos culturales.",
    "meta.company.title": "Empresa de soluciones digitales en Logroño | Flamax Media",
    "meta.company.description": "Flamax Media es una empresa de soluciones digitales en Logroño para paginas web, redes sociales, promocion, publicidad y eventos.",
    "meta.contact.title": "Contacto en Logroño para web, redes y publicidad | Flamax Media",
    "meta.contact.description": "Contacta con Flamax Media en Logroño por WhatsApp o email para crear tu pagina web, gestionar redes sociales o promocionar tu negocio.",
    "nav.services": "Servicios",
    "nav.method": "Metodo",
    "nav.portfolios": "Proyectos",
    "nav.company": "Empresa",
    "nav.contact": "Hablemos",
    "nav.label": "Navegacion principal",
    "nav.menu": "Abrir menu",
    "nav.language": "Elegir idioma",
    "hero.kicker": "Webs, redes y publicidad para proyectos que necesitan moverse",
    "hero.title": "Tu idea no necesita mas ruido. Necesita presencia, diseño y ejecucion.",
    "hero.lead": "Creamos paginas web, llevamos redes sociales, diseñamos carteles y promocionamos eventos con una estrategia clara: que la gente entienda lo que haces y quiera dar el siguiente paso.",
    "hero.cta": "Hablemos de tu proyecto",
    "hero.portfolios": "Ver trabajos",
    "hero.summaryLabel": "Resumen de Flamax Media",
    "hero.orbitWeb": "Web",
    "hero.orbitSocial": "Redes",
    "hero.orbitAds": "Publicidad",
    "hero.orbitEvents": "Eventos",
    "hero.signalLabel": "Plan rapido",
    "hero.signalTitle": "De idea a presencia digital",
    "hero.signalText": "Definimos el mensaje, creamos las piezas y activamos los canales necesarios.",
    "ticker.web": "Paginas web",
    "ticker.social": "Redes sociales",
    "ticker.posters": "Carteles publicitarios",
    "ticker.events": "Promocion de eventos",
    "ticker.ideas": "Ideas digitales",
    "seo.kicker": "Marketing digital en Logroño",
    "seo.title": "Paginas web, redes sociales y publicidad para negocios de La Rioja.",
    "seo.text": "Flamax Media ayuda a negocios, marcas personales, eventos y proyectos culturales a tener una presencia digital clara: una web que explique bien lo que ofrecen, redes sociales con contenido coherente y piezas visuales preparadas para promocionar.",
    "seo.label": "Especialidades de marketing digital",
    "seo.webTitle": "Paginas web para negocios",
    "seo.webText": "Creamos webs estaticas y dinamicas para presentar servicios, captar contactos y mostrar confianza desde el primer vistazo.",
    "seo.socialTitle": "Gestion de redes sociales",
    "seo.socialText": "Ordenamos el mensaje, preparamos contenido y mantenemos una imagen constante para que tu proyecto sea reconocible.",
    "seo.localTitle": "Servicio desde La Rioja",
    "seo.localText": "Trabajamos desde Logroño para clientes de La Rioja y proyectos online en España.",
    "faq.kicker": "Preguntas frecuentes",
    "faq.title": "Antes de empezar un proyecto digital.",
    "faq.servicesQuestion": "Que servicios ofrece Flamax Media?",
    "faq.servicesAnswer": "Creamos paginas web, gestionamos redes sociales, diseñamos carteles publicitarios y promocionamos eventos.",
    "faq.areaQuestion": "Trabajais solo en Logroño?",
    "faq.areaAnswer": "Trabajamos desde Logroño, La Rioja, pero tambien atendemos proyectos online en toda España.",
    "faq.contactQuestion": "Como puedo pedir presupuesto?",
    "faq.contactAnswer": "Puedes escribir por WhatsApp o email explicando que necesitas, en que punto esta tu proyecto y que objetivo quieres conseguir.",
    "services.label": "Servicios principales",
    "services.kicker": "Marketing que se entiende",
    "services.title": "Hacemos lo que tu proyecto necesita para verse profesional y vender mejor.",
    "services.intro": "Sin complicarlo: analizamos lo que tienes, ordenamos lo que quieres comunicar y construimos los soportes digitales y visuales que te faltan.",
    "services.webTitle": "Paginas web que trabajan",
    "services.webText": "Webs estaticas y dinamicas para negocios, servicios, portfolios, eventos y proyectos personales.",
    "services.askWeb": "Pedir web",
    "services.socialTitle": "Redes con sentido",
    "services.socialText": "Creamos perfiles, preparamos contenido y mantenemos una imagen clara y constante.",
    "services.postersTitle": "Carteles y piezas visuales",
    "services.postersText": "Diseños para ofertas, anuncios, eventos, campanas y material promocional.",
    "services.eventsTitle": "Eventos con visibilidad",
    "services.eventsText": "Promocionamos eventos y proyectos especiales con contenido, redes y landing pages.",
    "services.detailLabel": "Servicios digitales en detalle",
    "services.detailWebTitle": "Diseño web para negocios y proyectos",
    "services.detailWebText": "Creamos paginas web para explicar servicios, mostrar trabajos, recibir contactos y dar una imagen profesional a negocios locales, marcas personales y eventos.",
    "services.detailSocialTitle": "Contenido y redes sociales",
    "services.detailSocialText": "Preparamos perfiles, publicaciones y piezas visuales para que tu comunicacion sea clara, reconocible y facil de mantener.",
    "services.detailLocalTitle": "Marketing digital desde Logroño",
    "services.detailLocalText": "Atendemos proyectos en Logroño, La Rioja y online en España, con servicios adaptados a cada fase del negocio.",
    "method.kicker": "Nuestra forma de hacerlo",
    "method.title": "Primero ordenamos. Luego diseñamos. Despues lo movemos.",
    "method.step1Title": "Mensaje",
    "method.step1Text": "Aclaramos que vendes, a quien y que accion quieres conseguir.",
    "method.step2Title": "Piezas",
    "method.step2Text": "Creamos web, redes, carteles o contenido con una misma direccion visual.",
    "method.step3Title": "Impulso",
    "method.step3Text": "Activamos la promocion para que el proyecto llegue a las personas adecuadas.",
    "portfolio.kicker": "Trabajos",
    "portfolio.title": "Proyectos con presencia propia, no plantillas sin alma.",
    "portfolio.transylvaniaTag": "Proyecto cultural",
    "portfolio.transylvaniaTitle": "Sueno de Transilvania",
    "portfolio.transylvaniaText": "Un proyecto creado por Flaviu Maxim Capalnas con identidad, relato y presencia online.",
    "portfolio.dreamTag": "Proyecto web",
    "portfolio.dreamText": "Portfolio y presencia digital para mostrar servicios, actividad profesional y confianza.",
    "company.kicker": "Flamax Media",
    "company.title": "Una empresa pequena para proyectos que quieren empezar fuerte.",
    "company.text": "Flamax Media es la empresa de Flaviu Maxim Capalnas, creador de Sueno de Transilvania. Trabajamos en soluciones digitales, promocion, redes sociales, paginas web y material publicitario para personas, negocios y eventos.",
    "contact.kicker": "El siguiente paso",
    "contact.title": "Tienes una idea, un negocio o un evento. Nosotros le damos forma digital.",
    "contact.whatsapp": "Escribir por WhatsApp",
    "contact.infoLabel": "Datos de contacto",
    "contact.locationLabel": "Ubicacion",
    "contact.location": "Logroño, La Rioja",
    "contact.areaLabel": "Zona de trabajo",
    "contact.area": "La Rioja y proyectos online en España",
    "contact.phoneLabel": "Telefono",
    "footer.rights": "Todos los derechos reservados.",
    "footer.location": "Logroño, La Rioja"
  },
  en: {
    "meta.title": "Flamax Media | Websites and digital marketing in Logroño",
    "meta.description": "Flamax Media creates websites, manages social media and designs advertising for businesses, projects and events in Logroño, La Rioja.",
    "meta.services.title": "Digital marketing services in Logroño | Flamax Media",
    "meta.services.description": "Digital marketing services in Logroño: websites, social media, advertising posters and event promotion with Flamax Media.",
    "meta.method.title": "Working method for digital projects | Flamax Media",
    "meta.method.description": "Learn Flamax Media's method: we organize the message, design the assets and promote your digital project.",
    "meta.portfolio.title": "Projects and web work | Flamax Media",
    "meta.portfolio.description": "Explore Flamax Media projects: online presence, portfolios, digital identity and reference work for businesses and cultural projects.",
    "meta.company.title": "Digital solutions company in Logroño | Flamax Media",
    "meta.company.description": "Flamax Media is a digital solutions company in Logroño for websites, social media, promotion, advertising and events.",
    "meta.contact.title": "Contact in Logroño for websites, social media and advertising | Flamax Media",
    "meta.contact.description": "Contact Flamax Media in Logroño by WhatsApp or email to create your website, manage social media or promote your business.",
    "nav.services": "Services",
    "nav.method": "Method",
    "nav.portfolios": "Projects",
    "nav.company": "Company",
    "nav.contact": "Let's talk",
    "nav.label": "Main navigation",
    "nav.menu": "Open menu",
    "nav.language": "Choose language",
    "hero.kicker": "Websites, social media and advertising for projects that need momentum",
    "hero.title": "Your idea does not need more noise. It needs presence, design and execution.",
    "hero.lead": "We create websites, manage social media, design posters and promote events with a clear strategy: help people understand what you do and want to take the next step.",
    "hero.cta": "Let's talk about your project",
    "hero.portfolios": "View work",
    "hero.summaryLabel": "Flamax Media summary",
    "hero.orbitWeb": "Web",
    "hero.orbitSocial": "Social",
    "hero.orbitAds": "Ads",
    "hero.orbitEvents": "Events",
    "hero.signalLabel": "Fast plan",
    "hero.signalTitle": "From idea to digital presence",
    "hero.signalText": "We define the message, create the assets and activate the channels you need.",
    "ticker.web": "Websites",
    "ticker.social": "Social media",
    "ticker.posters": "Advertising posters",
    "ticker.events": "Event promotion",
    "ticker.ideas": "Digital ideas",
    "seo.kicker": "Digital marketing in Logroño",
    "seo.title": "Websites, social media and advertising for businesses in La Rioja.",
    "seo.text": "Flamax Media helps businesses, personal brands, events and cultural projects build a clear digital presence: a website that explains what they offer, coherent social media content and visual assets ready for promotion.",
    "seo.label": "Digital marketing specialties",
    "seo.webTitle": "Websites for businesses",
    "seo.webText": "We create static and dynamic websites to present services, capture contacts and build trust from the first visit.",
    "seo.socialTitle": "Social media management",
    "seo.socialText": "We organize the message, prepare content and keep a consistent image so your project is recognizable.",
    "seo.localTitle": "Service from La Rioja",
    "seo.localText": "We work from Logroño for clients in La Rioja and online projects across Spain.",
    "faq.kicker": "Frequently asked questions",
    "faq.title": "Before starting a digital project.",
    "faq.servicesQuestion": "What services does Flamax Media offer?",
    "faq.servicesAnswer": "We create websites, manage social media, design advertising posters and promote events.",
    "faq.areaQuestion": "Do you only work in Logroño?",
    "faq.areaAnswer": "We work from Logroño, La Rioja, and also handle online projects across Spain.",
    "faq.contactQuestion": "How can I request a quote?",
    "faq.contactAnswer": "You can write by WhatsApp or email explaining what you need, where your project is now and what goal you want to achieve.",
    "services.label": "Main services",
    "services.kicker": "Marketing that makes sense",
    "services.title": "We build what your project needs to look professional and sell better.",
    "services.intro": "No overcomplication: we analyze what you have, organize what you want to say and build the digital and visual assets you are missing.",
    "services.webTitle": "Websites that work",
    "services.webText": "Static and dynamic websites for businesses, services, portfolios, events and personal projects.",
    "services.askWeb": "Request a website",
    "services.socialTitle": "Social media with purpose",
    "services.socialText": "We create profiles, prepare content and keep your image clear and consistent.",
    "services.postersTitle": "Posters and visual assets",
    "services.postersText": "Designs for offers, announcements, events, campaigns and promotional material.",
    "services.eventsTitle": "Events with visibility",
    "services.eventsText": "We promote events and special projects with content, social media and landing pages.",
    "services.detailLabel": "Digital services in detail",
    "services.detailWebTitle": "Web design for businesses and projects",
    "services.detailWebText": "We create websites to explain services, show work, receive contacts and give a professional image to local businesses, personal brands and events.",
    "services.detailSocialTitle": "Content and social media",
    "services.detailSocialText": "We prepare profiles, posts and visual assets so your communication is clear, recognizable and easy to maintain.",
    "services.detailLocalTitle": "Digital marketing from Logroño",
    "services.detailLocalText": "We handle projects in Logroño, La Rioja and online across Spain, with services adapted to each stage of the business.",
    "method.kicker": "How we work",
    "method.title": "First we organize. Then we design. After that, we push it.",
    "method.step1Title": "Message",
    "method.step1Text": "We clarify what you sell, who it is for and which action you want to drive.",
    "method.step2Title": "Assets",
    "method.step2Text": "We create websites, social media, posters or content with one visual direction.",
    "method.step3Title": "Momentum",
    "method.step3Text": "We activate promotion so the project reaches the right people.",
    "portfolio.kicker": "Work",
    "portfolio.title": "Projects with their own presence, not soulless templates.",
    "portfolio.transylvaniaTag": "Cultural project",
    "portfolio.transylvaniaTitle": "Sueno de Transilvania",
    "portfolio.transylvaniaText": "A project created by Flaviu Maxim Capalnas with identity, story and online presence.",
    "portfolio.dreamTag": "Web project",
    "portfolio.dreamText": "Portfolio and digital presence to show services, professional activity and trust.",
    "company.kicker": "Flamax Media",
    "company.title": "A small company for projects that want to start strong.",
    "company.text": "Flamax Media is the company of Flaviu Maxim Capalnas, creator of Sueno de Transilvania. We work on digital solutions, promotion, social media, websites and advertising material for people, businesses and events.",
    "contact.kicker": "The next step",
    "contact.title": "You have an idea, a business or an event. We give it digital shape.",
    "contact.whatsapp": "Write on WhatsApp",
    "contact.infoLabel": "Contact details",
    "contact.locationLabel": "Location",
    "contact.location": "Logroño, La Rioja",
    "contact.areaLabel": "Service area",
    "contact.area": "La Rioja and online projects across Spain",
    "contact.phoneLabel": "Phone",
    "footer.rights": "All rights reserved.",
    "footer.location": "Logroño, La Rioja"
  }
};

year.textContent = new Date().getFullYear();

function animateMainTitles() {
  document.querySelectorAll(".word-animate[data-i18n]").forEach((title) => {
    const text = title.textContent.trim();
    title.setAttribute("aria-label", text);
    title.classList.add("is-word-animated");
    title.replaceChildren();

    text.split(/\s+/).forEach((word, index, words) => {
      const span = document.createElement("span");
      span.className = `title-word title-word-${(index % 4) + 1}`;
      span.style.setProperty("--word-index", index);
      span.setAttribute("aria-hidden", "true");
      span.textContent = word;
      title.appendChild(span);

      if (index < words.length - 1) {
        title.appendChild(document.createTextNode(" "));
      }
    });
  });
}

function setLanguage(lang) {
  const dictionary = translations[lang] || translations.es;

  document.documentElement.lang = lang;
  const titleKey = document.body.dataset.titleKey || "meta.title";
  const descriptionKey = document.body.dataset.descriptionKey || "meta.description";
  document.title = dictionary[titleKey] || dictionary["meta.title"];
  document.querySelector("meta[name='description']").setAttribute("content", dictionary[descriptionKey] || dictionary["meta.description"]);

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.getAttribute("data-i18n");
    element.textContent = dictionary[key];
  });

  document.querySelectorAll("[data-i18n-aria-label]").forEach((element) => {
    const key = element.getAttribute("data-i18n-aria-label");
    element.setAttribute("aria-label", dictionary[key]);
  });

  animateMainTitles();

  languageButtons.forEach((button) => {
    const isActive = button.dataset.lang === lang;
    button.classList.toggle("active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });

  localStorage.setItem("flamax-language", lang);
}

menuBtn.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  menuBtn.setAttribute("aria-expanded", String(isOpen));
});

navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuBtn.setAttribute("aria-expanded", "false");
  });
});

languageButtons.forEach((button) => {
  button.addEventListener("click", () => {
    setLanguage(button.dataset.lang);
  });
});

setLanguage(localStorage.getItem("flamax-language") || "es");
