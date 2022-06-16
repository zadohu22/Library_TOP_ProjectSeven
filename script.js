let library = [];
const title = document.getElementById('title');
const author = document.getElementById('author');
const pages = document.getElementById('pages');
const checkbox = document.getElementById('read')
const submit = document.getElementById('submitInput')
const addBookButton = document.getElementById("addBook");
const form = document.getElementById("form");
const initDescription = document.getElementById('initDescription');
const container = document.getElementById('container');
const haveRead = document.getElementById('read')



function Book(title, author, pages, haveRead){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.haveRead = haveRead;
    // let isRead = function(){
    //     if(haveRead === 'yes'){
    //         this.haveRead = 'have read';
    //     }else{
    //         this.haveRead = 'not read yet';
    //     }
    // }
};

Book.prototype.bookInfo = function(){
    return `${this.title}, ${this.author}, ${this.pages}, ${this.haveRead}`
};

(function () {
    addBookButton.addEventListener('click', () => { 
        form.classList.toggle('hideForm');
        clearFormData();  
        initDescription.classList.add('hideDescription');
    });
})();

function clearFormData(){
    title.value = '';
    author.value = '';
    pages.value = '';
    checkbox.checked = false;
}

const addBookToLibrary = () => {
    submit.addEventListener('click', () => {
        // log user input when submit is clicked.
        let userInputTitle = title.value;
        let userInputAuthor = author.value;
        let userInputPages = pages.value;
        let statusOfCheckbox = () => {
            return (checkbox.checked ?  true : false);
        }
        // create new Book from user input. 
        let newBook = new Book(userInputTitle, userInputAuthor, userInputPages, statusOfCheckbox());
        let newBookInfo = newBook.bookInfo();
        console.log(newBook);
        console.log(newBookInfo)
        // push new Book object to the library array
        library.push(newBook);
        console.log(library);
        // remove form when submit is clicked.
        form.classList.toggle('hideForm');
        
        // Remove previous array data so that the current array is always being updated
        if(document.querySelectorAll('#container .card').length > 0){
            let cards = document.querySelectorAll('.card');
            cards.forEach(e => e.remove());
            
        }
        populateDomWithBookInfo();
        
    })
}

function populateDomWithBookInfo(){
    library.forEach((e, i) => {
    
        let newCard = document.createElement('div');
        newCard.classList.add('card');
        container.appendChild(newCard);
        newCard.id = "cardDiv";
        newCard.setAttribute('data-index', i);
        
        
        let nameContainer = document.createElement('div');
        nameContainer. classList.add('bookNameContainer');
        newCard.appendChild(nameContainer);
        
        let nameParent = document.createElement('p');
        nameParent.classList.add('bookNameParent');
        nameParent.textContent = 'Title:';
        nameContainer.appendChild(nameParent);
        
        let nameChild = document.createElement('p');
        nameChild.classList.add('bookNameChild');
        nameChild.textContent = e.title;
        nameContainer.appendChild(nameChild);
        
        function makeHr(){
            let hr = document.createElement('hr');
            newCard.appendChild(hr);
        }
        
        makeHr();

        let authorContainer = document.createElement('div');
        authorContainer.classList.add('bookAuthorContainer');
        newCard.appendChild(authorContainer);
        
        let authorParent = document.createElement('p');
        authorParent.classList.add('bookauthorParent');
        authorParent.textContent = 'Author:';
        authorContainer.appendChild(authorParent);
        
        let authorChild = document.createElement('p');
        authorChild.classList.add('bookauthorChild');
        authorChild.textContent = e.author;
        authorContainer.appendChild(authorChild);
        
        makeHr();

        let pagesContainer = document.createElement('div');
        pagesContainer.classList.add('pagesNameContainer');
        newCard.appendChild(pagesContainer);
        
        let pagesParent = document.createElement('p');
        pagesParent.classList.add('pagesNameParent');
        pagesParent.classList.add('bookTitle');
        pagesParent.textContent = 'Pages:';
        pagesContainer.appendChild(pagesParent);
        
        let pagesChild = document.createElement('p');
        pagesChild.classList.add('pagesNameChild');
        pagesChild.textContent = e.pages;
        pagesContainer.appendChild(pagesChild);

        makeHr();

        let readContainer = document.createElement('div')
        readContainer.classList.add('readContainer');
        newCard.appendChild(readContainer);
        
        let readLabel = document.createElement('label');
        readLabel.setAttribute('for', read);
        readLabel.classList.add('bookTitle');
        readLabel.classList.add('readLabel');
        readLabel.textContent = 'Read?';
        readContainer.appendChild(readLabel);

        let readCheckBox = document.createElement('input');
        readCheckBox.setAttribute('type', 'checkbox');
        readCheckBox.setAttribute('name', 'read');
        if(haveRead.checked){
            readCheckBox.setAttribute('checked', 'checked');
        }
        readCheckBox.classList.add('read');
        readContainer.appendChild(readCheckBox);

        makeHr();

        let removeButton = document.createElement('button');
        removeButton.classList.add('remove');
        removeButton.textContent = "Remove";
        removeButton.id = 'remove';
        newCard.appendChild(removeButton);
        let allRemoveButtons = document.querySelectorAll('.remove');
        allRemoveButtons.forEach((e, i) => {
            removeButton.addEventListener('click', function(){
                let arrIndex = parseInt(cardDiv.dataset.index);
                let indexRemove = newCard.dataset.index;
                library.splice(arrIndex, 1);
                // removeElements(document.querySelector(`[data-index = '${indexRemove}']`));
                let test = document.querySelector(`[data-index = '${indexRemove}']`);
                test.remove();
                console.log(arrIndex)
                console.log(library)
        })
    })
    })
}

// function removeCard(){
//     let removeButton = document.getElementById('remove');
//     removeButton.addEventListener('click', function(){
//         let arrIndex = parseInt(cardDiv.dataset.index);
//         let indexRemove = newCard.dataset.index;
//         library.splice(arrIndex, 1);
//         // removeElements(document.querySelector(`[data-index = '${indexRemove}']`));
//         let test = document.querySelector(`[data-index = '${indexRemove}']`);
//         test.remove();
//         console.log(arrIndex)
//         console.log(library)
//         // populateDomWithBookInfo();
//     })
// }

addBookToLibrary();