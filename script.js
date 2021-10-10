let myLibrary = [];

const cardArea = document.getElementById('card-area');
const addBookBtn = document.querySelector('.new-book button');
const modal = document.getElementById('modal-box');
const closeBtn = document.getElementsByClassName('close')[0];
const form = document.getElementById('book-add'); 
const formSubmit = document.getElementById('form-submit');


function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
}

function addBooktoLibrary(userInput) {
    myLibrary.push(userInput);
}

function displayBook(library) {
    cardArea.innerHTML="";
    library.forEach(element => {
        let div = document.createElement('div');
        div.classList.add(`card`); //in the line below i first used this.title but it will only access the one u called
        div.innerHTML = `<p>${element.title}</p> 
        <p>${element.author}</p>
        <p>${element.pages}</p>
        <div class="read">
            <input type="checkbox" ${element.read} id="read"><label for="read">Read</label>
        </div>
        <div>
            <button>Remove</button>
            <button>Edit</button>
        </div>`;
        cardArea.appendChild(div);
    });
}

formSubmit.addEventListener('click', () => {
    let title = document.getElementById('title').value;
    let author = document.getElementById('author').value;
    let pages = document.getElementById('pages').value;
    let read = document.getElementById('read').value;
    console.log(read);
    let userInput = new Book(`${title}`,`${author}`,`${pages}`, 'checked');
    addBooktoLibrary(userInput);
    displayBook(myLibrary);
    form.reset();
    modal.style.display = "none";
})





addBookBtn.onclick = ()=> {
    modal.style.display = "block";
}

closeBtn.onclick = function() {
    modal.style.display = "none";
}

window.onclick = (e)=> {
    if(e.target==modal){
        modal.style.display = "none";
    }
}