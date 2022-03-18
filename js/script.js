//  reference: https://github.com/Samuel-Abusa/Alpaca-Generator

const menu = document.getElementById('menu__toggle')

const configElements = Array.from(document.querySelectorAll('.alpaca__configurator-elements'))
const styleElements = Array.from(document.querySelectorAll('.alpaca__configurator-style'))
const styleElementsHairArray = Array.from(document.querySelectorAll('.alpaca__configurator-style-hair'))
const styleElementsEarsArray = Array.from(document.querySelectorAll('.alpaca__configurator-style-ears'))
const styleElementsEyesArray = Array.from(document.querySelectorAll('.alpaca__configurator-style-eyes'))
const styleElementsMouthArray = Array.from(document.querySelectorAll('.alpaca__configurator-style-mouth'))
const styleElementsNeckArray = Array.from(document.querySelectorAll('.alpaca__configurator-style-neck'))
const styleElementsLegArray = Array.from(document.querySelectorAll('.alpaca__configurator-style-leg'))
const styleElementsAccessoriesArray = Array.from(document.querySelectorAll('.alpaca__configurator-style-accessories'))
const styleElementsBackgroundArray = Array.from(document.querySelectorAll('.alpaca__configurator-style-background'))


// Бургер-меню. Запрет на скролл при активном меню
menu.addEventListener('click', () =>  document.body.classList.toggle('noScroll'))

//Открываем параметры стиля только для нажатой кнопки
const styleActivator = (e) => {
    // Каждому элементу скрываем параметры стилей
    styleElements.forEach(j => j.classList.add('hidden'))
    // Показываем параметры стиля определенного индекса (нажатой кнопки)
    styleElements[e].classList.remove('hidden')
}

// Делаем "активный" стиль кнопки конфигуратора при нажатии
const configButtonActivator = (e) => {
    // Снимаем "активность" со всех кнопок    
    configElements.forEach(j => j.classList.remove('button--active'))
    // Активируем кнопку по индексу массива
    configElements[e].classList.add('button--active')
}

// Делаем "активный" стиль кнопки стилизации при нажатии
const styleButtonActivator = (e, styleButtonArray) => {
    // Снимаем "активность" со всех кнопок  
    styleButtonArray.forEach(j => j.classList.remove('button--active'))
    // Активируем кнопку по индексу массива
    styleButtonArray[e].classList.add('button--active')
}

// Listeners для кнопок конфигуратора элементов

for (let i = 0; i < configElements.length; i++) {
    configElements[i].addEventListener('click', () => {
        // Открываем и скрываем стили
        styleActivator(i)
        // Стилизуем
        styleButtonActivator(i, configElements)
    })
}

// Стилизуем кнопки стилей и активируем соответствующий элемент на картинке
for (let i = 0; i < styleElementsHairArray.length; i++) {
    styleElementsHairArray[i].addEventListener('click', () => {
        // Стилизуем
        styleButtonActivator(i, styleElementsHairArray)
    })
}

for (let i = 0; i < styleElementsEarsArray.length; i++) {
    styleElementsEarsArray[i].addEventListener('click', () => {
        // Стилизуем
        styleButtonActivator(i, styleElementsEarsArray)
    })
}
for (let i = 0; i < styleElementsEyesArray.length; i++) {
    styleElementsEyesArray[i].addEventListener('click', () => {
        // Стилизуем
        styleButtonActivator(i, styleElementsEyesArray)
    })
}
for (let i = 0; i < styleElementsMouthArray.length; i++) {
    styleElementsMouthArray[i].addEventListener('click', () => {
        // Стилизуем
        styleButtonActivator(i, styleElementsMouthArray)
    })
}
for (let i = 0; i < styleElementsNeckArray.length; i++) {
    styleElementsNeckArray[i].addEventListener('click', () => {
        // Стилизуем
        styleButtonActivator(i, styleElementsNeckArray)
    })
}
for (let i = 0; i < styleElementsLegArray.length; i++) {
    styleElementsLegArray[i].addEventListener('click', () => {
        // Стилизуем
        styleButtonActivator(i, styleElementsLegArray)
    })
}
for (let i = 0; i < styleElementsAccessoriesArray.length; i++) {
    styleElementsAccessoriesArray[i].addEventListener('click', () => {
        // Стилизуем
        styleButtonActivator(i, styleElementsAccessoriesArray)
    })
}
for (let i = 0; i < styleElementsBackgroundArray.length; i++) {
    styleElementsBackgroundArray[i].addEventListener('click', () => {
        // Стилизуем
        styleButtonActivator(i, styleElementsBackgroundArray)
    })
}
