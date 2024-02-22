const db = require('../db');
const fs = require('fs');
const util = require('util');
const readFile = util.promisify(fs.readFile); // Зробити fs.readFile, який повертає проміс
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
            const {title, author,  description} = req.body;
            const newBook = await db.query('INSERT INTO books (title, author, description) values ($1, $2, $3) RETURNING *', [title, author, description]);
            res.json(newBook.rows[0]);
            console.log('newBook', newBook.rows[0]);
            return newBook.rows[0]?.id;
        }catch (e) {
            throw new Error(e);
        }

    }



    async uploadImage(req, res) {
        try {
            let imageBuffer = null; // Ініціалізуємо змінну для буфера зображення як null

            // Перевіряємо, чи файл був завантажений
            if (req.file) {
                const { filename,  mimetype,  size,  path } = req.file;
                console.log('SDFSDFDSF',req.file)
                // const filepath = req.file.path;
                const { id } = req.params;

                // Читання файлу і його конвертація в буфер
                imageBuffer = await readFile(req.file.path);
                    console.log('imageBuffer', imageBuffer)
                // Видалення тимчасового файлу
                 await db.query('UPDATE books SET  image = $1, filename = $2, mimetype = $3, size = $4, path = $5 WHERE id = $6 RETURNING *', [ filename, filename,  mimetype,  size,  path,  id]);
                console.log(req.file);
                res.json('/image api')
                fs.unlinkSync(req.file.path);

            }

            // Вставка даних книги в БД, навіть якщо зображення не надано

        } catch (e) {
          throw new Error(e);
        }
    }
    async getBooks(req, res) {
        try {
            const books = await db.query('SELECT * FROM books');
            res.json(books.rows);
            return books.rows;
        }catch (e) {
            throw new Error(e);
        }


    }
    async getOneBook(req, res) {
          try {
                const id = req.params.id;
                const book = await db.query('SELECT * FROM books WHERE id = $1', [id]);
                res.json(book.rows[0]);
                return book.rows[0];
            }catch (e) {
                throw new Error(e);
            }

    }
      async updateBook(req, res) {
        try {
            const {id, title, author, image, description} = req.body;
            const book = await db.query('UPDATE books SET title = $1, author = $2, image = $3, description = $4 WHERE id = $5 RETURNING *', [title, author, image, description, id]);
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

