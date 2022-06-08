let myLibrary = [];

const title = document.getElementById('title');
const author = document.getElementById('author');
const pages = document.getElementById('pages');
const haveRead = document.getElementById('read')
const submit = document.getElementsByClassName('submitInput')[0];
const addBookButton = document.getElementById("addBook");
const form = document.getElementById("form");
const initDescription = document.getElementById('initDescription');
const container = document.getElementById('container');
const removeButton = document.getElementById('remove');




function Book(title, author, pages, haveRead){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.haveRead = haveRead;
}

Book.prototype.bookInfo = function(){
    return `${this.title},${this.author},${this.pages},${this.haveRead}`;
}


// THE + BUTTON, TO ADD NEW BOOK
function bringUpForm(){
    addBookButton.addEventListener('click', function(){
        removePreviousFormData();
        initDescription.className = "hideDescription";
        form.classList.toggle('hideForm');
        console.log(myLibrary)

        
    });
    
}

function removePreviousFormData(){
    title.value = '';
    author.value = '';
    pages.value = '';
    haveRead.removeAttribute('checked');
    
}

function displayBooks(){ 
    if(!(title.value == '' && author.value == '')){
        

        let newDiv = document.createElement('div');
        newDiv.classList.add('card');
        newDiv.id = "cardDiv";
        container.appendChild(newDiv);

        let nameContainer = document.createElement('div');
        nameContainer.classList.add('bookNameContainer');
        newDiv.appendChild(nameContainer);
        
        let nameParent = document.createElement('p');
        nameParent.classList.add('bookNameParent');
        nameParent.classList.add('bookTitle');
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
        authorParent.classList.add('bookTitle');
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
        pagesParent.classList.add('bookTitle');
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
        newDiv.appendChild(removeButton);
        for(let i=0; i < myLibrary.length; i++){
            removeButton.setAttribute('data-index', i);
        }
        
        
    }
}


// SUBMIT BUTTON ON FORM 
function addBookToLibrary(){
    // add book.
    submit.addEventListener('click', function(){
        
    
        let newBook = (new Book(title.value, author.value, pages.value, haveRead.value));
        
        if(!(title.value == '' && author.value == '')){
        myLibrary.push(newBook);
        }
        form.className = "hideForm";
        // console.log(myLibrary)
        // console.log(this)
        // setDataAttribute();
        displayBooks();
        
        
        
    })
}


    console.log(myLibrary)
    
        
        // display element on page
        

function setDataAttribute(){
    myLibrary.forEach(function(element, index){
        element.setAttribute('data-index', index);
    })
}


function remove(){
    removeButton.addEventListener('click', function(){
        
    })
}
bringUpForm();
addBookToLibrary();
// displayBooks();



