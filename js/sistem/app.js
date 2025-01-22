const cardList = document.querySelectorAll('.projects .card-wrapper');

cardList.forEach((card) => {
    card.querySelector('.card').addEventListener('click', () => {
        cardList.forEach((modal) => {
            modal.querySelector('.card-modal').classList.remove('card-modal--open')
        })
        card.querySelector('.card-modal').classList.add('card-modal--open')
    })

    card.querySelector('.card-modal').addEventListener('click', () => {

        card.querySelector('.card-modal').classList.remove('card-modal--open')
    })
})

