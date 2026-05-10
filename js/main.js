const year = document.getElementById("year");
const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.getElementById("navLinks");
const languageButtons = document.querySelectorAll("[data-lang]");

const translations = {
  es: {
    "meta.title": "Flamax Media | Paginas web, redes sociales y publicidad",
    "meta.description": "Flamax Media crea paginas web estaticas y dinamicas, gestiona redes sociales, disena carteles publicitarios y promociona eventos.",
    "meta.services.title": "Flamax Media | Servicios",
    "meta.services.description": "Servicios de Flamax Media: paginas web, redes sociales, carteles publicitarios y promocion de eventos.",
    "meta.method.title": "Flamax Media | Metodo",
    "meta.method.description": "Metodo de trabajo de Flamax Media para ordenar, disenar y promocionar proyectos digitales.",
    "meta.portfolio.title": "Flamax Media | Proyectos",
    "meta.portfolio.description": "Proyectos de Flamax Media y trabajos de referencia.",
    "meta.company.title": "Flamax Media | Empresa",
    "meta.company.description": "Flamax Media es la empresa de Flaviu Maxim Capalnas para soluciones digitales, promocion y publicidad.",
    "meta.contact.title": "Flamax Media | Contacto",
    "meta.contact.description": "Contacta con Flamax Media por WhatsApp o email para crear tu web, redes sociales o promocion.",
    "nav.services": "Servicios",
    "nav.method": "Metodo",
    "nav.portfolios": "Proyectos",
    "nav.company": "Empresa",
    "nav.contact": "Hablemos",
    "nav.label": "Navegacion principal",
    "nav.menu": "Abrir menu",
    "nav.language": "Elegir idioma",
    "hero.kicker": "Webs, redes y publicidad para proyectos que necesitan moverse",
    "hero.title": "Tu idea no necesita mas ruido. Necesita presencia, diseno y ejecucion.",
    "hero.lead": "Creamos paginas web, llevamos redes sociales, disenamos carteles y promocionamos eventos con una estrategia clara: que la gente entienda lo que haces y quiera dar el siguiente paso.",
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
    "services.postersText": "Disenos para ofertas, anuncios, eventos, campanas y material promocional.",
    "services.eventsTitle": "Eventos con visibilidad",
    "services.eventsText": "Promocionamos eventos y proyectos especiales con contenido, redes y landing pages.",
    "method.kicker": "Nuestra forma de hacerlo",
    "method.title": "Primero ordenamos. Luego disenamos. Despues lo movemos.",
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
    "footer.rights": "Todos los derechos reservados."
  },
  en: {
    "meta.title": "Flamax Media | Websites, social media and advertising",
    "meta.description": "Flamax Media creates static and dynamic websites, manages social media, designs advertising posters and promotes events.",
    "meta.services.title": "Flamax Media | Services",
    "meta.services.description": "Flamax Media services: websites, social media, advertising posters and event promotion.",
    "meta.method.title": "Flamax Media | Method",
    "meta.method.description": "Flamax Media's working method to organize, design and promote digital projects.",
    "meta.portfolio.title": "Flamax Media | Projects",
    "meta.portfolio.description": "Flamax Media projects and reference work.",
    "meta.company.title": "Flamax Media | Company",
    "meta.company.description": "Flamax Media is Flaviu Maxim Capalnas' company for digital solutions, promotion and advertising.",
    "meta.contact.title": "Flamax Media | Contact",
    "meta.contact.description": "Contact Flamax Media by WhatsApp or email to create your website, social media or promotion.",
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
    "footer.rights": "All rights reserved."
  }
};

year.textContent = new Date().getFullYear();

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
