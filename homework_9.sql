CREATE TABLE library (
    id INT(11) NOT NULL AUTO_INCREMENT,
    name VARCHAR(80) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE books (
    id INT(11) NOT NULL AUTO_INCREMENT,
    name VARCHAR(80) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE libraryBook (
    id INT(11) NOT NULL AUTO_INCREMENT,
    libraryID INT(11) NOT NULL,
    bookID INT(11) NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (libraryID) REFERENCES library(id),
    FOREIGN KEY (bookID) REFERENCES books(id)
);

INSERT INTO library (name) VALUES ('Central Library');
INSERT INTO library (name) VALUES ('Westside Library');

INSERT INTO books (name) VALUES ('The Great Gatsby');
INSERT INTO books (name) VALUES ('Moby Dick');
INSERT INTO books (name) VALUES ('To Kill a Mockingbird');

INSERT INTO libraryBook (libraryID, bookID) VALUES (1, 1);
INSERT INTO libraryBook (libraryID, bookID) VALUES (1, 2);
INSERT INTO libraryBook (libraryID, bookID) VALUES (2, 3);

SELECT * FROM library WHERE id = 1;

SELECT * FROM books WHERE name LIKE '%Mockingbird%';

SELECT * FROM books ORDER BY name ASC;

SELECT books.name AS book_name, library.name AS library_name
FROM books
JOIN libraryBook ON books.id = libraryBook.bookID
JOIN library ON library.id = libraryBook.libraryID;

UPDATE books SET name = 'The Catcher in the Rye' WHERE id = 2;

DELETE FROM books WHERE id = 3;
