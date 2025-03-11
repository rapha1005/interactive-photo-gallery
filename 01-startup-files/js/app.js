const $items = document.querySelectorAll('.photo-item')
const $searchInput = document.querySelector('.search-input')
const $lightbox = document.querySelector('.lightbox')
const $lightboxImg = document.querySelector('.lightbox-image')
const $lightboxCloseButton = document.querySelector('.close-lightbox')
const $arrowLeft = document.querySelector('.arrow-left')
const $arrowRight = document.querySelector('.arrow-right')

let lightBoxState

function searchItem(search) {
    $items.forEach(element => {
        const item = element.querySelector('a img')
        if (item.title.includes(search)) {
            element.classList.remove('hidden')
        } else {
            element.classList.add('hidden')
        }
    });
}


function lightBox(change) {

    change === "+" ? lightBoxState++ : lightBoxState--
    $lightboxImg.src = `./img/${lightBoxState}.jpg`

}


$searchInput.addEventListener('input', function () {
    searchItem($searchInput.value)
})

$lightboxCloseButton.addEventListener('click', () => {
    $lightbox.classList.add('hidden')
})

$arrowLeft.addEventListener('click', () => {
    if (lightBoxState === 1) {
        lightBoxState = 13
    }
    lightBox("-")
})

document.addEventListener('keydown', (e) => {
    if (e.key === "ArrowLeft") {
        if (lightBoxState === 1) {
            lightBoxState = 13
        }
        lightBox("-")
    }
})

$arrowRight.addEventListener('click', () => {
    if (lightBoxState === 12) {
        lightBoxState = 0
    }
    lightBox('+')
})

document.addEventListener('keydown', (e) => {
    if (e.key === "ArrowRight") {
        if (lightBoxState === 12) {
            lightBoxState = 0
        }
        lightBox('+')
    }
})


$items.forEach(item => {
    item.addEventListener('click', function (e) {
        e.preventDefault()
        $lightbox.classList.remove('hidden')
        $lightboxImg.src = e.target.src.replace('thumbnails/', '')
        lightBoxState = e.target.dataset.pos
    })
})


