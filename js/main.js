const year = document.getElementById("year");
const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.getElementById("navLinks");
const languageButtons = document.querySelectorAll("[data-lang]");

const translations = {
  es: {
    "meta.title": "Flamax Media | Paginas web, redes sociales y publicidad",
    "meta.description": "Flamax Media crea paginas web estaticas y dinamicas, gestiona redes sociales, disena carteles publicitarios y promociona eventos.",
    "nav.services": "Servicios",
    "nav.portfolios": "Portfolios",
    "nav.company": "Empresa",
    "nav.contact": "Contactar",
    "nav.label": "Navegacion principal",
    "nav.menu": "Abrir menu",
    "nav.language": "Elegir idioma",
    "hero.kicker": "Web, redes y publicidad",
    "hero.title": "Hacemos que tu proyecto tenga presencia online y visual.",
    "hero.lead": "Creamos paginas web estaticas y dinamicas, llevamos redes sociales, disenamos carteles publicitarios y promocionamos eventos. Tambien creamos redes y desarrollamos cualquier idea digital que nos pidas.",
    "hero.cta": "Pedir propuesta",
    "hero.portfolios": "Ver portfolios",
    "hero.summaryLabel": "Resumen de Flamax Media",
    "hero.card": "Paginas web, redes sociales, carteles y promocion de eventos.",
    "hero.item1": "Webs estaticas y dinamicas",
    "hero.item2": "Gestion y creacion de redes sociales",
    "hero.item3": "Carteles publicitarios y material promocional",
    "hero.item4": "Promocion de eventos y proyectos especiales",
    "services.kicker": "Servicios",
    "services.title": "Soluciones sencillas para negocios, eventos y proyectos.",
    "services.webTitle": "Paginas web",
    "services.webText": "Disenamos paginas estaticas y dinamicas para presentar negocios, servicios, eventos o proyectos personales.",
    "services.socialTitle": "Redes sociales",
    "services.socialText": "Creamos y llevamos redes sociales para que tu marca tenga actividad, imagen clara y comunicacion constante.",
    "services.postersTitle": "Carteles publicitarios",
    "services.postersText": "Preparamos carteles, piezas promocionales y material visual para ofertas, campanas y anuncios.",
    "services.eventsTitle": "Promocion de eventos",
    "services.eventsText": "Ayudamos a dar visibilidad a eventos, proyectos y negocios con contenido, redes y presencia online.",
    "portfolio.kicker": "Portfolios",
    "portfolio.title": "Algunos proyectos y trabajos de referencia.",
    "portfolio.transylvaniaTag": "Proyecto cultural",
    "portfolio.transylvaniaTitle": "Sueno de Transilvania",
    "portfolio.transylvaniaText": "Proyecto creado por Flaviu Maxim Capalnas.",
    "portfolio.dreamTag": "Proyecto web",
    "portfolio.dreamText": "Portfolio y presencia digital para mostrar servicios y actividad profesional.",
    "company.kicker": "Empresa",
    "company.title": "Flamax Media es la empresa de Flaviu Maxim Capalnas.",
    "company.text": "Flaviu Maxim Capalnas es el creador del proyecto Sueno de Transilvania y trabaja en soluciones digitales, promocion, redes sociales, paginas web y material publicitario para personas, negocios y eventos.",
    "contact.kicker": "Contacto",
    "contact.title": "Cuentanos que necesitas y buscamos la forma de hacerlo.",
    "contact.whatsapp": "WhatsApp",
    "footer.rights": "Todos los derechos reservados."
  },
  en: {
    "meta.title": "Flamax Media | Websites, social media and advertising",
    "meta.description": "Flamax Media creates static and dynamic websites, manages social media, designs advertising posters and promotes events.",
    "nav.services": "Services",
    "nav.portfolios": "Portfolios",
    "nav.company": "Company",
    "nav.contact": "Contact",
    "nav.label": "Main navigation",
    "nav.menu": "Open menu",
    "nav.language": "Choose language",
    "hero.kicker": "Web, social media and advertising",
    "hero.title": "We give your project a clear online and visual presence.",
    "hero.lead": "We create static and dynamic websites, manage social media, design advertising posters and promote events. We also create social channels and develop any digital idea you ask for.",
    "hero.cta": "Request proposal",
    "hero.portfolios": "View portfolios",
    "hero.summaryLabel": "Flamax Media summary",
    "hero.card": "Websites, social media, posters and event promotion.",
    "hero.item1": "Static and dynamic websites",
    "hero.item2": "Social media setup and management",
    "hero.item3": "Advertising posters and promotional material",
    "hero.item4": "Event promotion and special projects",
    "services.kicker": "Services",
    "services.title": "Simple solutions for businesses, events and projects.",
    "services.webTitle": "Websites",
    "services.webText": "We design static and dynamic websites for businesses, services, events and personal projects.",
    "services.socialTitle": "Social media",
    "services.socialText": "We create and manage social media so your brand has activity, a clear image and steady communication.",
    "services.postersTitle": "Advertising posters",
    "services.postersText": "We prepare posters, promotional pieces and visual material for offers, campaigns and announcements.",
    "services.eventsTitle": "Event promotion",
    "services.eventsText": "We help events, projects and businesses get visibility through content, social media and online presence.",
    "portfolio.kicker": "Portfolios",
    "portfolio.title": "Selected projects and reference work.",
    "portfolio.transylvaniaTag": "Cultural project",
    "portfolio.transylvaniaTitle": "Sueno de Transilvania",
    "portfolio.transylvaniaText": "Project created by Flaviu Maxim Capalnas.",
    "portfolio.dreamTag": "Web project",
    "portfolio.dreamText": "Portfolio and digital presence to show services and professional activity.",
    "company.kicker": "Company",
    "company.title": "Flamax Media is the company of Flaviu Maxim Capalnas.",
    "company.text": "Flaviu Maxim Capalnas is the creator of the Sueno de Transilvania project and works on digital solutions, promotion, social media, websites and advertising material for people, businesses and events.",
    "contact.kicker": "Contact",
    "contact.title": "Tell us what you need and we will find the way to build it.",
    "contact.whatsapp": "WhatsApp",
    "footer.rights": "All rights reserved."
  }
};

year.textContent = new Date().getFullYear();

function setLanguage(lang) {
  const dictionary = translations[lang] || translations.es;

  document.documentElement.lang = lang;
  document.title = dictionary["meta.title"];
  document.querySelector("meta[name='description']").setAttribute("content", dictionary["meta.description"]);

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
