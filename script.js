/* converted code so that cards are being built from the actual object array
    -- finally got remove button working, but it's only working on the first card.
*/

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
// const removeButton = document.getElementById('remove');
let i=0;



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
    
    
    // myLibrary.forEach(function(object, index){
        
        if(!(title.value == '' && author.value == '')){
            for (i; i < myLibrary.length; i++){
                if(!(title.value == '' && author.value == '')){
                    

                    let newDiv = document.createElement('div');
                    newDiv.classList.add('card');
                    newDiv.id = "cardDiv";
                    container.appendChild(newDiv);
                    let cardDiv = document.getElementById('cardDiv')
                    for(let i=0; i < myLibrary.length; i++){
                        cardDiv.setAttribute('data-index', i);
                    }

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
                    nameChild.textContent = myLibrary[i].title;
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
                    authorChild.textContent = myLibrary[i].author;
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
                    pagesChild.textContent = myLibrary[i].pages;
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
                    
                    
                   
                    remove();
                    
                }
            }
            
        }
}

// let removeButton = document.getElementById('remove');
//     removeButton.addEventListener('click', function(){
//         let arrIndex = parseInt(removeButton.dataset.index);
//         myLibrary.splice(arrIndex, 1);
//     })

// SUBMIT BUTTON ON FORM 
function addBookToLibrary(){
    // add book.
    submit.addEventListener('click', function(){
        
    
        let newBook = (new Book(title.value, author.value, pages.value, haveRead.value));
        
        if(!(title.value == '' && author.value == '')){
        myLibrary.push(newBook);
        displayBooks();
        i = i++;
        }
        form.className = "hideForm";
        // console.log(myLibrary)
        // console.log(this)
        // setDataAttribute();
           
    })
}

    console.log(myLibrary)
    
        
        // display element on page
        

function setDataAttribute(){
    myLibrary.forEach(function(element, index){
        element.setAttribute('data-index', index);
    })
}

function removeElements(node){
    while (node.firstChild) {
        node.removeChild(node.lastChild);
    }
}

function remove(){
    let removeButton = document.getElementById('remove');
    removeButton.addEventListener('click', function(){
        let arrIndex = parseInt(cardDiv.dataset.index);
        let indexRemove = cardDiv.dataset.index;
        myLibrary.splice(arrIndex, 1);
        // removeElements(document.querySelector(`[data-index = '${indexRemove}']`));
        let test = document.querySelector(`[data-index = '${indexRemove}']`);
        test.remove();
        // console.log(document.querySelector(`[data-index = '${indexRemove}']`));
        // `[data-index = '${indexRemove}']`
    })
}
bringUpForm();
addBookToLibrary();
// remove();
// displayBooks();




