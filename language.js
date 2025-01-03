// Load the language resources from JSON files
const loadResources = async () => {
    const en = await fetch('languages/en.json').then(response => response.json());
    const ru = await fetch('languages/ru.json').then(response => response.json());

    return {
        en: { translation: en },
        ru: { translation: ru }
    };
};


loadResources().then(resources => {
    i18next.use(i18nextBrowserLanguageDetector).init({
        resources,
        fallbackLng: 'en',
        debug: false
    }, function(err, t) {
        if (err) return console.error(err);
        updateContent();
    });
});


function setElementText(id, text, isHTML = false) {
    try {
        const element = document.getElementById(id);
        if (element) {
            if (isHTML) {
                element.innerHTML = text;
            } else {
                element.innerText = text;
            }
        } else {
            console.warn(`Элемент с id '${id}' не найден.`);
        }
    } catch (error) {
        console.error(`Ошибка при установке текста для '${id}':`, error);
    }
}


function updateContent() {
    setElementText('Hero-Heading', i18next.t('Hero Welcome'));
    setElementText('Hero-Desc', i18next.t('Hero Description'), true);
    

    setElementText('Section-Projects', i18next.t('Section Projects'));
    setElementText('Section-Music', i18next.t('Section Music'));

    setElementText('Section-OtherProjects', i18next.t('Other Projects'));
    setElementText('Section-OtherProjects-NewSmall', i18next.t('Other Projects New Small'));

    setElementText('Section-OtherProjects-Old', i18next.t('Other Projects Old'));
    setElementText('Old-Proj-Warn', i18next.t('Old Proj Warn'));
    setElementText('Old-Proj-ToggleButton', '<i class="bi bi-eye"></i> ' + i18next.t('Old Proj ToggleButton Show'), true);
    

    setElementText('Game-CUG-Desc', i18next.t('Game-CUG-Desc'));
    setElementText('Game-DF-Desc', i18next.t('Game-DF-Desc'));
    setElementText('Game-NSN-Desc', i18next.t('Game-NSN-Desc'));
    setElementText('Game-Dem-Name', i18next.t('Game-Dem-Name'));
    setElementText('Game-Dem-Desc', i18next.t('Game-Dem-Desc'));
    setElementText('Game-Cards-Name', i18next.t('Game-Cards-Name'));
    setElementText('Game-Cards-Desc', i18next.t('Game-Cards-Desc'));


    setElementText('Section-Contact', i18next.t('Contact'));
    setElementText('Footer-Copyright', i18next.t('Footer Copyright'), true);
}