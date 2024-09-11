const resources = {
    en: {
        translation: {
            "Hero Welcome": "Greetings!",
            "Hero description": "My name is Ilya Bulava and i am...<ul><li>Indie game developer 🎮</li><li>Certified programmer 💻</li><li>Aspiring composer 🎵</li><li>Pixel Artist 🎨</li></ul>",

            "Section Projects": "My best projects:",
            "Section Music": "Music that I've made:",
            "Other Projects": "Other projects",

            "Contact": "Contact me",
            "Footer-Copyright": "© 2018-2034 Mace Dev (prev.: Mace Studios). All rights reserved."
        }
    },
    ru: {
        translation: {
            "Hero Welcome": "Привет!",
            "Hero description": "Меня зовут Илья Булава и я...<ul><li><i class=\"bi bi-controller\"></i> Инди разработчик игр </li><li><i class=\"bi bi-code-slash\"></i> Дипломированный программист </li><li><i class=\"bi bi-music-note-list\"></i> Начинающий <a target=\"_blank\" href=\"https://youtube.com/playlist?list=PLax8LqpZxaCgwlsobQ6Yx-P-wP2PMGFCQ&si=9KVATVSow4IrW_Ql\">композитор</a> </li><li><i class=\"bi bi-palette\"></i> Художник в пиксель-арте </li></ul>",

            "Section Projects": "Мои лучшие проекты:",
            "Section Music": "Музыка, которую я написал:",
            "Other Projects": "Другие проекты",

            "Contact": "Связаться со мной",
            "Footer-Copyright": "© 2018-2034 Mace Dev (ранее: Mace Studios). Все права защищены."
        }
    }
};

i18next.use(i18nextBrowserLanguageDetector).init({
    resources,
    fallbackLng: 'en',
    debug: false
}, function(err, t) {
    if (err) return console.error(err);
    updateContent();
});

function updateContent() {
    document.getElementById('hero-heading').innerText = i18next.t('Hero Welcome');
    document.getElementById('hero-me-desc').innerHTML = i18next.t('Hero description');
    document.getElementById('Section-Projects').innerText = i18next.t('Section Projects');
    document.getElementById('Section-Music').innerText = i18next.t('Section Music');
    document.getElementById('Section-OtherProjects').innerText = i18next.t('Other Projects');
    document.getElementById('Section-Contact').innerText = i18next.t('Contact');
    document.getElementById('Footer-Copyright').innerText = i18next.t('Footer-Copyright');
}