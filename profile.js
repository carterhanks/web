console.log('Hello World!')

const favoriteColor = document.querySelector('#color')
const favoritePlace = document.querySelector('#place')
const favoriteRitual = document.querySelector('#ritual')

favoriteColor.addEventListener('click', () => {
    alert('My favorite color is any shade of Gray.')
})

favoritePlace.addEventListener('click', () => {
    alert('My favorite place is pretty much anywhere scenic, and especially in Utah.')
})

favoriteRitual.addEventListener('click', () => {
    alert('My favorite daily ritual is playing CoD with friends/Family.')
})