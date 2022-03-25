//  reference: https://github.com/Samuel-Abusa/Alpaca-Generator


const menu = document.getElementById('menu__toggle')

const alpacaImages = Array.from(document.querySelectorAll('.alpaca__img'))
const randomButton = document.getElementById('random')
const downloadButton = document.getElementById('download')
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

/*Объекты элементов для изменения картинки*/
const hair = ['img/hair/default.png', 'img/hair/curls.png', 'img/hair/short.png', 'img/hair/bang.png', 'img/hair/elegant.png', 'img/hair/quiff.png']
const ears = ['img/ears/default.png', 'img/ears/tilt-backward.png', 'img/ears/tilt-forward.png']
const eyes = ['img/eyes/default.png', 'img/eyes/angry.png', 'img/eyes/naughty.png', 'img/eyes/panda.png', 'img/eyes/smart.png', 'img/eyes/star.png']
const mouth = ['img/mouth/default.png', 'img/mouth/astonished.png', 'img/mouth/eating.png', 'img/mouth/laugh.png', 'img/mouth/tongue.png']
const neck = ['img/neck/default.png', 'img/neck/bend-backward.png', 'img/neck/bend-forward.png', 'img/neck/thick.png']
const leg = ['img/leg/default.png', 'img/leg/bubble-tea.png', 'img/leg/cookie.png', 'img/leg/game-console.png', 'img/leg/tilt-backward.png', 'img/leg/tilt-forward.png']
const accessories = ['img/accessories/default.png', 'img/accessories/flower.png', 'img/accessories/earings.png', 'img/accessories/headphone.png', 'img/accessories/glasses.png']
const background = ['img/background/blue50.png', 'img/background/blue60.png', 'img/background/blue70.png', 'img/background/darkblue30.png', 'img/background/darkblue50.png', 'img/background/darkblue70.png', 'img/background/green50.png', 'img/background/green60.png', 'img/background/green70.png', 'img/background/grey40.png', 'img/background/grey70.png', 'img/background/grey80.png', 'img/background/red50.png', 'img/background/red60.png', 'img/background/red70.png', 'img/background/yellow50.png', 'img/background/yellow60.png', 'img/background/yellow70.png']

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
    styleButtonArray.forEach(j => j.classList.remove('button-style--active'))
    styleButtonArray[e].classList.add('button-style--active')
}

// Listeners для кнопок конфигуратора элементов

for (let i = 0; i < configElements.length; i++) {
    configElements[i].addEventListener('click', () => {
        // Открываем и скрываем стили
        styleActivator(i)
        // Стилизуем
        configButtonActivator(i, configElements)
    })
}

// Стилизуем кнопки стилей и активируем соответствующий элемент на картинке
for (let i = 0; i < styleElementsHairArray.length; i++) {
    styleElementsHairArray[i].addEventListener('click', () => {
        styleButtonActivator(i, styleElementsHairArray)
        alpacaImages[2].src = hair[i]
    })
}

for (let i = 0; i < styleElementsEarsArray.length; i++) {
    styleElementsEarsArray[i].addEventListener('click', () => {
        styleButtonActivator(i, styleElementsEarsArray)
        alpacaImages[3].src = ears[i]
    })
}
for (let i = 0; i < styleElementsEyesArray.length; i++) {
    styleElementsEyesArray[i].addEventListener('click', () => {
        styleButtonActivator(i, styleElementsEyesArray)
        alpacaImages[5].src = eyes[i]
    })
}
for (let i = 0; i < styleElementsMouthArray.length; i++) {
    styleElementsMouthArray[i].addEventListener('click', () => {
        styleButtonActivator(i, styleElementsMouthArray)
        alpacaImages[8].src = mouth[i]
    })
}
for (let i = 0; i < styleElementsNeckArray.length; i++) {
    styleElementsNeckArray[i].addEventListener('click', () => {
        styleButtonActivator(i, styleElementsNeckArray)
        alpacaImages[4].src = neck[i]
    })
}
for (let i = 0; i < styleElementsLegArray.length; i++) {
    styleElementsLegArray[i].addEventListener('click', () => {
        styleButtonActivator(i, styleElementsLegArray)
        alpacaImages[7].src = leg[i]
    })
}
for (let i = 0; i < styleElementsAccessoriesArray.length; i++) {
    styleElementsAccessoriesArray[i].addEventListener('click', () => {
        styleButtonActivator(i, styleElementsAccessoriesArray)
        alpacaImages[1].src = accessories[i]
    })
}
for (let i = 0; i < styleElementsBackgroundArray.length; i++) {
    styleElementsBackgroundArray[i].addEventListener('click', () => {
        styleButtonActivator(i, styleElementsBackgroundArray)
        alpacaImages[0].src = background[i]
    })
}

// Кнопка рандома

randomButton.addEventListener('click', () => {
    // Генерируем рандомное число для каждого элемента
    const hairRand = Math.floor(Math.random() * hair.length)
    const earsRand = Math.floor(Math.random() * ears.length)
    const eyesRand = Math.floor(Math.random() * eyes.length)
    const mouthRand = Math.floor(Math.random() * mouth.length)
    const neckRand = Math.floor(Math.random() * neck.length)
    const legRand = Math.floor(Math.random() * leg.length)
    const accessoriesRand = Math.floor(Math.random() * accessories.length)
    const backgroundRand = Math.floor(Math.random() * background.length)
    // Присваиваем картинку на основе рандомного числа
    alpacaImages[2].src = hair[hairRand]
    alpacaImages[3].src = ears[earsRand]
    alpacaImages[5].src = eyes[eyesRand]
    alpacaImages[8].src = mouth[mouthRand]
    alpacaImages[4].src = neck[neckRand]
    alpacaImages[7].src = leg[legRand]
    alpacaImages[1].src = accessories[accessoriesRand]
    alpacaImages[0].src = background[backgroundRand]
    // Активируем соответствующую кнопку стиля
    styleButtonActivator(hairRand, styleElementsHairArray)
    styleButtonActivator(earsRand, styleElementsEarsArray)
    styleButtonActivator(eyesRand, styleElementsEyesArray)
    styleButtonActivator(mouthRand, styleElementsMouthArray)
    styleButtonActivator(neckRand, styleElementsNeckArray)
    styleButtonActivator(legRand, styleElementsLegArray)
    styleButtonActivator(accessoriesRand, styleElementsAccessoriesArray)
    styleButtonActivator(backgroundRand, styleElementsBackgroundArray)
})

// Кнопка сохранения

downloadButton.addEventListener('click', function () {

    if (navigator.userAgent.match('CriOS')) {
        // ? Тут реализация через выведение в отдельную картинку
        html2canvas(document.querySelector('.alpaca__container-img'))
        .then((canvas) => {
            let a = document.createElement('img');
            document.body.appendChild(a)
            a.classList.add('hidden')
            a.src = canvas.toDataURL('image/png')
            let src = a.src
            let newWindow = window.open('about:blank', 'new image')
            newWindow.document.write('<img src="' + src + '" alt="from old image" />')
            document.body.removeChild(a)
        });
    } else {
    // ? Тут реализация через скачивание
        html2canvas(document.querySelector('.alpaca__container-img'))
        .then((canvas) => {
            let a = document.createElement('a');
            a.href = canvas
                .toDataURL('image/png')
            a.download = 'Your alpaca.png';
            a.target = "_blank"
            setTimeout(() => a.click())
        });
    }

  });


