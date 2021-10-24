const container = document.querySelector('.container');
const addBook = document.querySelector('#addBook');
const cancel = document.querySelector('#cancel');
const submit = document.querySelector('#submit');

const title = document.querySelector('#title');
const author = document.querySelector('#author');
const pages = document.querySelector('#pages');
const finishedReading = document.querySelector('#finishedReading');

function Book (title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
};

const Hobbit = new Book('The Hobbit', 'J.R.R. Tolkien', 295, true);

let myLibrary = [Hobbit];

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

function addToLibrary(book) {
    for (let i = 0; i < book.length; i++) {
        let eachBook = document.createElement('div')
        eachBook.classList.add('eachBook');
        container.appendChild(eachBook);

        let ttl = document.createElement('p');
        ttl.classList.add('eachInfo');
        ttl.textContent = `"${book[i].title}"`;
        eachBook.appendChild(ttl);

        let ath = document.createElement('p');
        ath.classList.add('eachInfo');
        ath.textContent = `${book[i].author}`;
        eachBook.appendChild(ath);

        let pg = document.createElement('p');
        pg.classList.add('eachInfo');
        pg.textContent = `${book[i].pages} pages`;
        eachBook.appendChild(pg);

        let rd = document.createElement('p');
        rd.classList.add('eachInfo');
        if (book[i].read === true) {
            rd.textContent = 'Read';
            rd.setAttribute('id', 'finished');
        } else {
            rd.textContent = 'Not Read';
            rd.setAttribute('id', 'unfinished');
        };
        eachBook.appendChild(rd);

        let remove = document.createElement('p');
        remove.classList.add('remove');
        remove.textContent = 'Remove';
        eachBook.appendChild(remove);
    }
};


submit.addEventListener('click', function() {
    let bookTitle = title.value;
    let bookAuthor = author.value;
    let bookPages = pages.value;
    let readingFinished = finishedReading.checked;

    if (readingFinished) {
        myLibrary.push(new Book(bookTitle, bookAuthor, Number(bookPages), true));
        // myLibrarySet = [...new Set(myLibrary)];
        addToLibrary(myLibrary);
    } else {
        myLibrary.push(new Book(bookTitle, bookAuthor, Number(bookPages), false));
        addToLibrary(myLibrary);
    };

    newBook.style.visibility = 'hidden';
})