function Book(title, author, pages, haveRead){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.haveRead = haveRead;
}

Book.prototype.bookInfo = function(){
    console.log(`Title: ${this.title}, Author: ${this.author}, ${this.pages} pages, ${this.haveRead} I have read`);
}

let mistborn = new Book('mistborn', 'sanderson', 456, 'yes');

mistborn.bookInfo()