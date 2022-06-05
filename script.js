
// const title = document.getElementsByClassName('titleInput')[0].value;
const title = document.getElementById('title');
const author = document.getElementById('author');
const pages = document.getElementById('pages');
const haveRead = document.getElementById('read')
const submit = document.getElementsByClassName('submitInput')[0];
const addBookButton = document.getElementById("addBook");
const form = document.getElementById("form");
const initDescription = document.getElementById('initDescription');
const container = document.getElementById('container');

function Book(title, author, pages, haveRead){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.haveRead = haveRead;
}

Book.prototype.bookInfo = function(){
    return `${this.title},${this.author},${this.pages},${this.haveRead}`;
}

// let book1 = new Book('mistborn', 'sanderson', 400, 'yes');

function bringUpForm(){
    addBookButton.addEventListener('click', function(){
        initDescription.className = "hideDescription";
        form.classList.toggle('hideForm');
        console.log(myLibrary)
    });
    
}

// SUBMIT BUTTON ON FORM 
function addBookToLibrary(){
    // add book.
    submit.addEventListener('click', function(){
        myLibrary = [];
        // create new Book object from user input
        myLibrary.push(new Book(title.value, author.value, pages.value, haveRead.value).bookInfo())
        form.className = "hideForm";
        console.log(myLibrary);
        
        displayBooks();
    })
}

function displayBooks(){
    myLibrary.forEach(element => {
        // let newDiv = document.createElement('div');
        // newDiv.classList.add('card');
        // newDiv.textContent = `Title: ${title.value} Author: ${author.value} Pages: ${pages.value}`
        // container.appendChild(newDiv);
        
        let newDiv = document.createElement('div');
        newDiv.classList.add('card');
        container.appendChild(newDiv);
        
        let nameContainer = document.createElement('div');
        nameContainer.classList.add('bookNameContainer');
        newDiv.appendChild(nameContainer);
        
        let nameParent = document.createElement('p');
        nameParent.classList.add('bookNameParent');
        nameParent.textContent = 'Title:';
        nameContainer.appendChild(nameParent);
        
        let nameChild = document.createElement('p');
        nameChild.classList.add('bookNameChild');
        nameChild.textContent = title.value;
        nameContainer.appendChild(nameChild);
        
        function makeHr(){
            let hr = document.createElement('hr');
            newDiv.appendChild(hr);
        }
        
        makeHr();
        // ***********************************

        let authorContainer = document.createElement('div');
        authorContainer.classList.add('authorNameContainer');
        newDiv.appendChild(authorContainer);
        
        let authorParent = document.createElement('p');
        authorParent.classList.add('authorNameParent');
        authorParent.textContent = 'Author:';
        authorContainer.appendChild(authorParent);
        
        let authorChild = document.createElement('p');
        authorChild.classList.add('authorNameChild');
        authorChild.textContent = author.value;
        authorContainer.appendChild(authorChild);

        makeHr();
        // ***********************************

        let pagesContainer = document.createElement('div');
        pagesContainer.classList.add('pagesNameContainer');
        newDiv.appendChild(pagesContainer);
        
        let pagesParent = document.createElement('p');
        pagesParent.classList.add('pagesNameParent');
        pagesParent.textContent = 'Pages:';
        pagesContainer.appendChild(pagesParent);
        
        let pagesChild = document.createElement('p');
        pagesChild.classList.add('pagesNameChild');
        pagesChild.textContent = pages.value;
        pagesContainer.appendChild(pagesChild);

        makeHr();

        //********************************* */

        let readContainer = document.createElement('div')
        readContainer.classList.add('readContainer');
        newDiv.appendChild(readContainer);
        
        let readLabel = document.createElement('label');
        readLabel.setAttribute('for', read);
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
        
    })
}

bringUpForm();
addBookToLibrary();
displayBooks()


