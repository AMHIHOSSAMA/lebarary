const form = document.getElementById('form');

const titre = document.getElementById('titre');
const author = document.getElementById('Auteur');
const Prix = document.getElementById('Prix');
const date = document.getElementById('Date');
const select = document.getElementById('pet-select');
const books = document.getElementById('book-type');

form.addEventListener('submit',(e) => {
    e.preventDefault();

    checkInputs();
})


function checkInputs() {
    const titreValue = titre.value.trim();
    const authorValue = author.value.trim();
    const emailValue = Prix.value.trim();
    const dateValue = date.value.trim();
    const selectValue = select.value.trim();
    const booksValue = books.value.trim();

}