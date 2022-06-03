let myLibrary = [];
const title = document.getElementsByClassName('titleInput')[0].value;
const author = document.getElementsByClassName('authorInput')[0].value;
const pages = document.getElementsByClassName('pagesInput')[0].value;
const haveRead = document.getElementsByClassName('readInput')[0].value;
const submit = document.getElementsByClassName('submitInput')[0];
const addBookButton = document.getElementById("addBook");
const form = document.getElementById("form");
const initDescription = document.getElementById('initDescription');


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
    });
    
}


function addBookToLibrary(){
    // add book.
    submit.addEventListener('click', function(){
        // create new Book object from user input
        let book1 = new Book(title, author, pages, haveRead);
        // console.log(book1)
        let object = book1.bookInfo();
        myLibrary.push(object);
        form.className = "hideForm";
        console.log(myLibrary);
        console.log(typeof myLibrary[0])
    })
}

function displayBooks(){
    myLibrary.forEach(element => {
        //is a string, convert to array at ,
        //let newArray = element.split
        // use nth child 1 for array[0]
        // etc....

        /* that won't work, i'd have to create every element for every iteration
            for example:
            createElement div with class card
            create p class bookNameParent
            p.textContent = Title:
            append p to div.card
            create p.bookNameChild
            bookNameChild.textContent = newArray[0]
            append p to div.card
            create hr
            append hr to div.card

            and do over and over every time 

        */

            //there has to be a better way. quitting for now, tackle tomorrow. 
    })
}

bringUpForm();
addBookToLibrary();

// function createDivs(){
//     const cardContainer = document.createElement('div');
// }

// function displayBooks(){
//     myLibrary.forEach(element => )
// }