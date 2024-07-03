const resources = {
    en: {
        translation: {
            "Hero Welcome": "Greetings!",
            "Hero description2": "My name is Ilya Bulava<br>I am an indie game developer, pixel artist, programmer and aspiring musician ",

            "Hero description": "My name is Ilya Bulava<br>I am an indie game developer, pixel artist, programmer and aspiring musician ",

            "My Awesome Projects": "My Best Projects",
            "Other Projects": "Other Projects",
            "Contact": "Contact me",
            "Footer-Copyright": "© 2018-2034 Mace Studios. All rights reserved."
        }
    },
    ru: {
        translation: {
            "Hero Welcome": "Привет!",
            "Hero description2": "Меня зовут Илья Булава<br>Я инди разработчик игр, пиксельный художник,<br>дипломированный программист и начинающий музыкант",

            "Hero description": "Меня зовут Илья Булава<ul><li>Инди разработчик игр</li><li>Дипломированный программист</li><li>Начинающий музыкант</li><li>Пиксельный художник</li></ul>",

            "Section Projects": "Мои Лучшие Проекты",
            "Other Projects": "Другие Проекты",
            "Contact": "Связаться со мной",
            "Footer-Copyright": "© 2018-2034 Mace Studios. Все права защищены."
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
    document.getElementById('Section-OtherProjects').innerText = i18next.t('Other Projects');
    document.getElementById('Section-Contact').innerText = i18next.t('Contact');
    document.getElementById('Footer-Copyright').innerText = i18next.t('Footer-Copyright');
}