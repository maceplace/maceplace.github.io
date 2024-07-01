const resources = {
    en: {
        translation: {
            "Hero Welcome": "Greetings!",
            "Hero description": "My name is Ilya Bulava<br>I am an indie game developer, pixel artist, aspiring musician, and programmer",
            "My Awesome Projects": "My Best Projects",
            "Other Projects": "My Other Projects",
            "Contact": "Contact me",
            "Footer-Copyright": "© 2018-2034 Mace Studios. All rights reserved."
        }
    },
    ru: {
        translation: {
            "Hero Welcome": "Привет!",
            "Hero description": "Меня зовут Илья Булава<br>Я инди разработчик игр, пиксельный художник,<br>начинающий музыкант и программист",
            "Section Projects": "Мои Лучшие Проекты",
            "Other Projects": "Мои Другие Проекты",
            "Contact": "Связаться со мной",
            "Footer-Copyright": "© 2018-2034 Mace Studios. Все права защищены."
        }
    }
};

i18next.use(i18nextBrowserLanguageDetector).init({
    resources,
    fallbackLng: 'en',
    debug: true
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