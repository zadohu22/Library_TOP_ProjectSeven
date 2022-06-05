let arr = [];
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
let showBook = false;
function displayBooks(){
    myLibrary.forEach(element => {
        
        // if either title or author is empty, don't insert div 
        // it title is empty but author is not, do. 
        // else if author is empty but title is not, still do 
        // else is they're both empty, do not. 
        
            // showBook = false;
        if(!(title.value == '' && author.value == '')){
            // showBook = true;

            let newDiv = document.createElement('div');
            newDiv.classList.add('card');
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
            
        }
    })

}

// SUBMIT BUTTON ON FORM 
function addBookToLibrary(){
    // add book.
    submit.addEventListener('click', function(){
        myLibrary = [];
        // create new Book object from user input
        myLibrary.push(new Book(title.value, author.value, pages.value, haveRead.value).bookInfo());
        
        if(!(title.value == '' && author.value == '')){
            arr.push(new Book(title.value, author.value, pages.value, haveRead.value).bookInfo());
        }
        console.log(arr)
        form.className = "hideForm";
        console.log(myLibrary);
        displayBooks();
    })
}

function remove(){
    removeButton.addEventListener('click', function(){

    })
}

bringUpForm();
addBookToLibrary();
displayBooks()


