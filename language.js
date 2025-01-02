const resources = {
    en: {
        translation: {
            // Header idk
            "Hero Welcome": "Hello!",

            // Hero desc
            "Hero description": "My name is Ilya Bulava and I... <ul>" +
            "<li><i class=\"bi bi-controller\"></i> Create <a target=\"_blank\" href=\"https://bulava.itch.io/\">videogames</a> </li>" +
            // "<li><i class=\"bi bi-code-slash\"></i> Certified programmer </li>" +        (IT'S "TO BE ADDED" OKAY?? I ACTUALLY HAVE A CERTIFICATE)
            "<li><i class=\"bi bi-music-note-list\"></i> Write <a target=\"_blank\" href=\"https://youtube.com/playlist?list=PLax8LqpZxaCgwlsobQ6Yx-P-wP2PMGFCQ\">music</a> </li>"+
            "<li><i class=\"bi bi-palette\"></i> Draw in <a target=\"_blank\" href=\"arts\">pixel-art</a> </li>"+
            "<li><i class=\"bi bi-globe2\"></i> Make <a target=\"_blank\" href=\"https://macestudios.ru/\">websites</a> </li>"+
            "</ul>",

            // Sections
            "Section Projects": "My projects",
            "Section Music": "My music",
            "Other Projects": "Other projects",

            "Other Projects New Small": "New small projects",
            "Other Projects Old": "Old projects",

            // Footer
            "Contact": "Contact me",
            "Footer-Copyright": "<i class=\"bi bi-c-circle\"></i> 2018-2038 Mace Dev (prev.: Mace Studios). All rights reserved."
        }
    },
    ru: {
        translation: {
            // Header idk
            "Hero Welcome": "Привет!",

            // Hero desc
            "Hero description": "Меня зовут Илья Булава и я... <ul>" +
            "<li><i class=\"bi bi-controller\"></i> Создаю <a target=\"_blank\" href=\"https://bulava.itch.io/\">видеоигры</a> </li>" +
            // "<li><i class=\"bi bi-code-slash\"></i> Дипломированный программист </li>" +           (ДА У МЕНЯ ЕСТЬ ДИПЛОМ ПОТОМ СКРИНЫ ДОБАВЛЮ ОК????)
            "<li><i class=\"bi bi-music-note-list\"></i> Пишу <a target=\"_blank\" href=\"https://youtube.com/playlist?list=PLax8LqpZxaCgwlsobQ6Yx-P-wP2PMGFCQ\">музыку</a> </li>"+
            "<li><i class=\"bi bi-palette\"></i> Рисую в <a target=\"_blank\" href=\"arts\">пиксель-арте</a> </li>"+
            "<li><i class=\"bi bi-globe2\"></i> Делаю <a target=\"_blank\" href=\"https://macestudios.ru/\">сайты</a> </li>"+
            "</ul>",

            // Sections
            "Section Projects": "Мои проекты",
            "Section Music": "Моя музыка",
            "Other Projects": "Другие проекты",

            "Other Projects New Small": "Новые маленькие проекты",
            "Other Projects Old": "Старые проекты",

            // Footer
            "Contact": "Связаться со мной",
            "Footer-Copyright": "<i class=\"bi bi-c-circle\"></i> 2018-2038 Mace Dev (ранее: Mace Studios). Все права защищены."
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
    document.getElementById('herodesc').innerHTML = i18next.t('Hero description');

    document.getElementById('Section-Projects').innerText = i18next.t('Section Projects');
    document.getElementById('Section-Music').innerText = i18next.t('Section Music');
    document.getElementById('Section-OtherProjects').innerText = i18next.t('Other Projects');
    document.getElementById('Section-OtherProjects-NewSmall').innerText = i18next.t('Other Projects New Small');
    document.getElementById('Section-OtherProjects-Old').innerText = i18next.t('Other Projects Old');

    document.getElementById('Section-Contact').innerText = i18next.t('Contact');
    document.getElementById('Footer-Copyright').innerText = i18next.t('Footer-Copyright');
}