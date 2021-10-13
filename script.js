let myLibrary = [];

const cardArea = document.getElementById('card-area');
const addBookBtn = document.querySelector('.new-book button');
const modal = document.getElementById('modal-box');
const closeBtn = document.getElementsByClassName('close')[0];
const form = document.getElementById('book-add'); 
const formSubmit = document.getElementById('form-submit');
const inputTitle = document.getElementById('title');
const inputAuthor = document.getElementById('author');
const inputPages = document.getElementById('pages');


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
    for(let i=0; i<library.length; i++) {
        let div = document.createElement('div');
        div.classList.add(`card`); //in the line below i first used this.title but it will only access the one u called
        //let readStatus = isChecked(element.read);
        div.innerHTML = `<p>${library[i].title}</p> 
        <p >${library[i].author}</p>
        <p >${library[i].pages}</p>
        <div class="read">
            <input type="checkbox" ${library[i].read} id="completed"><label for="completed">Read</label>
        </div>
        <div>
            <button data-position="${i}" value = "removeit">Remove</button>
        </div>`;
        cardArea.appendChild(div);
    };
}

window.addEventListener('click',(e)=> {
    if(e.target.value == 'removeit') {
        let currIndex= e.target.dataset.position;
        myLibrary.splice(currIndex, 1); //delete particular array
        displayBook(myLibrary);
    }
})

function isChecked(ele) {
    if(ele == true) {
        return 'checked';
    }
    else return 'empity';
}

formSubmit.addEventListener('click', () => {
    let title = document.getElementById('title').value;
    let author = document.getElementById('author').value;
    let pages = document.getElementById('pages').value;
    let read = document.getElementById('read').checked;
    let readStatus = isChecked(read);
    //console.log(read)
    let userInput = new Book(`${title}`,`${author}`,`${pages}`, `${readStatus}`);
    addBooktoLibrary(userInput);
    displayBook(myLibrary);
    form.reset();
    formSubmit.setAttribute("disabled","");
    modal.style.display = "none";
})

document.addEventListener('keyup', ()=> {
    if(inputTitle.value && inputAuthor.value && inputPages.value) { //for form validation
        formSubmit.removeAttribute("disabled");
        }
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