//  reference: https://github.com/Samuel-Abusa/Alpaca-Generator

const menu = document.getElementById('menu__toggle')
const hair = document.querySelector('.alpaca__configurator-elements-hair')
const ears = document.querySelector('.alpaca__configurator-elements-ears')
const eyes = document.querySelector('.alpaca__configurator-elements-eyes')
const mouth = document.querySelector('.alpaca__configurator-elements-mouth')
const neck = document.querySelector('.alpaca__configurator-elements-neck')
const leg = document.querySelector('.alpaca__configurator-elements-leg')
const accessories = document.querySelector('.alpaca__configurator-elements-accessories')
const background = document.querySelector('.alpaca__configurator-elements-background')

const hairStyle = document.querySelector('.alpaca__configurator-style--hair')
const earsStyle = document.querySelector('.alpaca__configurator-style--ears')
const eyesStyle = document.querySelector('.alpaca__configurator-style--eyes')
const mouthStyle = document.querySelector('.alpaca__configurator-style--mouth')
const neckStyle = document.querySelector('.alpaca__configurator-style--neck')
const legStyle = document.querySelector('.alpaca__configurator-style--leg')
const accessoriesStyle = document.querySelector('.alpaca__configurator-style--accessories')
const backgroundStyle = document.querySelector('.alpaca__configurator-style--background')

const configElements = document.querySelector('.alpaca__configurator-elements')
const styleElements = document.querySelectorAll('.alpaca__configurator-style')



// Бургер-меню. Запрет на скролл при активном меню
menu.addEventListener('click', () =>  document.body.classList.toggle('noScroll'))

//Открываем параметры стиля только для нажатой кнопки
const styleActivator = (e) => {
    // Создаем массив из коллекции класса .alpaca__configurator-style
    array = Array.from(styleElements)
    // Каждому элементу скрываем параметры стилей
    array.forEach(j => j.classList.add('hidden'))
    // Показываем параметры стиля определенного индекса (нажатой кнопки)
    array[e].classList.remove('hidden')
}

// Делаем "активный" стиль кнопки при нажатии
const buttonActivator = (e) => {
    // Наполняем массив кнопками из коллекции дочерних элементов класса .alpaca__configurator-elements
    let array = []
    for (let node of configElements.childNodes) {
        if (node.nodeName != '#text') {
            array.push(node)
        }
    }
    // Снимаем "активность" со всех кнопок
    array.forEach(j => j.classList.remove('button--active'))
    // Активируем кнопку по индексу массива
    array[e].classList.add('button--active')
}

// Listeners для кнопок конфигуратора элементов
hair.addEventListener('click', () => {
    // Открываем и скрываем стили
    styleActivator(0)
    // Стилизуем
    buttonActivator(0)
})
ears.addEventListener('click', () => {
    // Открываем и скрываем стили
    styleActivator(1)
    // Стилизуем
    buttonActivator(1)
})
eyes.addEventListener('click', () => {
    // Открываем и скрываем стили
    styleActivator(2)
    // Стилизуем
    buttonActivator(2)
})
mouth.addEventListener('click', () => {
    // Открываем и скрываем стили
    styleActivator(3)
    // Стилизуем
    buttonActivator(3)
})
neck.addEventListener('click', () => {
    // Открываем и скрываем стили
    styleActivator(4)
    // Стилизуем
    buttonActivator(4)
})
leg.addEventListener('click', () => {
    // Открываем и скрываем стили
    styleActivator(5)
    // Стилизуем
    buttonActivator(5)
})
accessories.addEventListener('click', () => {
    // Открываем и скрываем стили
    styleActivator(6)
    // Стилизуем
    buttonActivator(6)
})
background.addEventListener('click', () => {
    // Открываем и скрываем стили
    styleActivator(7)
    // Стилизуем
    buttonActivator(7)
})



