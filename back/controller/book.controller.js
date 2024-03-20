const db = require('../db');
const fs = require('fs');
const util = require('util');
const readFile = util.promisify(fs.readFile); // Зробити fs.readFile, який повертає проміс
const unlinkAsync = util.promisify(fs.unlink);
// const knex = require('knex');
// // Create database object
// const pg = knex(
//     {
//         client: 'pg',
//         connection: {
//             user: 'postgres',
//             host: 'localhost',
//             database: 'node_postgres',
//             password: '!9ex/zL-@GzZa!W',
//             port: 5432,
//         },
//
//     }
// );
class BookController {

    async createBook(req, res) {
        try {
            const { title, author, description } = req.body;
            let imageBuffer = null;

            // Перевіряємо, чи файл був завантажений
            if (req.file) {
                // Читання файлу і його конвертація в буфер
                imageBuffer = await readFile(req.file.path);

                // Видалення тимчасового файлу після завантаження
                await unlinkAsync(req.file.path);
            }

            // Вставка даних книги та зображення в БД
            const newBook = await db.query(
                'INSERT INTO books (title, author, description, image) VALUES ($1, $2, $3, $4) RETURNING *',
                [title, author, description, imageBuffer]
            );

            res.json(newBook.rows[0]);
            return newBook.rows[0]?.id;
        } catch (e) {
            console.error(e);
            res.status(500).send('Server error');
        }
    }

    async getBooks(req, res) {
        try {
            const { rows } = await db.query('SELECT id, title, author, description, image FROM books');
            const booksWithImages = rows?.map(book => {
                if (book.image) {
                    // Конвертація BLOB зображення у рядок base64
                    const imageBase64 = Buffer.from(book.image).toString('base64');
                    // Припускаючи, що всі зображення у форматі PNG. Якщо формат може бути різним,
                    // вам потрібно також зберігати і відправляти інформацію про MIME-тип
                    book.image = `data:image/png;base64,${imageBase64}`;
                }
                return book;
            });
            res.json(booksWithImages);
            return booksWithImages;
        } catch (e) {
            console.error(e);
            res.status(500).send('Server error');
        }
    }


    async getOneBook(req, res) {
        try {
            const id = req.params.id;
            const book = await db.query('SELECT id, title, author, description, image FROM books WHERE id = $1', [id]);
            if (book.rows.length > 0) {
                let bookData = book.rows[0];
                if (bookData.image) {
                    // Конвертація BLOB зображення у рядок base64
                    const imageBase64 = Buffer.from(bookData.image).toString('base64');
                    bookData.image = `data:image/png;base64,${imageBase64}`;
                }
                res.json(bookData);
                return bookData
            } else {
                res.status(404).send('Книга не знайдена');
                res.json(book.rows[0]);
                return book.rows[0];
            }
        } catch (e) {
            res.status(500).send('Server error');
            console.error(e);
        }
    }


      async updateBook(req, res) {
        try {
            const {title, author,  description} = req.body;
            const id = req.params.id;
            const book = await db.query('UPDATE books SET title = $1, author = $2, description = $3 WHERE id = $4 RETURNING *', [title, author, description, id]);
            res.json(book.rows[0]);
        }catch (e) {
            throw new Error(e);
        }
      }
    async deleteBook(req, res) {
        try {
            const id = req.params.id;
            const book = await db.query('DELETE FROM books WHERE id = $1', [id]);
            res.json(book.rows[0]);
        }catch (e) {
            throw new Error(e);
        }


    }

}
module.exports = new BookController();

