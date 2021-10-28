const container = document.querySelector('.container');
const addBook = document.querySelector('#addBook');
const cancel = document.querySelector('#cancel');
const submit = document.querySelector('#submit');

const title = document.querySelector('#title');
const author = document.querySelector('#author');
const pages = document.querySelector('#pages');
const finishedReading = document.querySelector('#finishedReading');

class Book {
    constructor (title, author, pages, read) {
        this.title = title
        this.author = author
        this.pages = pages
        this.read = read
    }

    
}

let myLibrary = [];
const index = 0;

const newBook = document.querySelector('#newBook');
newBook.style.visibility = 'hidden';
addBook.addEventListener('click', function() {
    if (newBook.style.visibility === 'hidden') {
        newBook.style.visibility = 'visible';
    } else {
        newBook.style.visibility = 'hidden';
    }
});
cancel.addEventListener('click', function() {
    newBook.style.visibility = 'hidden';
});

function createCard(book) {
    let eachBook = document.createElement('div')
    eachBook.classList.add('eachBook');
    container.appendChild(eachBook);

    let ttl = document.createElement('p');
    ttl.classList.add('eachInfo');
    ttl.textContent = `"${book.title}"`;
    eachBook.appendChild(ttl);

    let ath = document.createElement('p');
    ath.classList.add('eachInfo');
    ath.textContent = `${book.author}`;
    eachBook.appendChild(ath);

    let pg = document.createElement('p');
    pg.classList.add('eachInfo');
    pg.textContent = `${book.pages} pages`;
    eachBook.appendChild(pg);

    let rd = document.createElement('p');
    rd.classList.add('eachInfo');
    if (book.read === true) {
        rd.textContent = 'Read';
        rd.setAttribute('id', 'finished');
        rd.addEventListener('click', function() {
            if (rd.textContent === 'Read') {
                rd.setAttribute('id', 'unfinished');
                rd.innerHTML = 'Not Read';
                book.read = false;
            } else {
                rd.setAttribute('id', 'finished');
                rd.innerHTML = 'Read';
                book.read = true;
            }
        });
    } else {
        rd.textContent = 'Not Read';
        rd.setAttribute('id', 'unfinished');
        rd.addEventListener('click', function() {
            if (rd.textContent === 'Read') {
                rd.setAttribute('id', 'unfinished');
                rd.innerHTML = 'Not Read';
                book.read = false;
            } else {
                rd.setAttribute('id', 'finished');
                rd.innerHTML = 'Read'
                book.read = true;
            }
        });
    };
    eachBook.appendChild(rd);

    let remove = document.createElement('p');
    remove.classList.add('remove');
    remove.textContent = 'Remove';
    remove.addEventListener('click', function() {
        eachBook.remove();
        index = myLibrary.indexOf(book);
        myLibrary.splice(index, 1);
        console.log(myLibrary);
    })
    eachBook.appendChild(remove);
};

let myBook;

submit.addEventListener('click', function() {
    let bookTitle = title.value;
    let bookAuthor = author.value;
    let bookPages = pages.value;
    let readingFinished = finishedReading.checked;

    if (readingFinished) {
        myBook = new Book(bookTitle, bookAuthor, Number(bookPages), true)
        myLibrary.push(myBook);
        // myLibrarySet = [...new Set(myLibrary)];
        createCard(myBook);
    } else {
        myBook = new Book(bookTitle, bookAuthor, Number(bookPages), false)
        myLibrary.push(myBook);
        createCard(myBook);
    };

    newBook.style.visibility = 'hidden';
})