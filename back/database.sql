
create TABLE books(
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    author VARCHAR(255) NOT NULL,
    image BYTEA,
    description TEXT,
     mimetype VARCHAR(50),
     filename VARCHAR(255) ,
     path VARCHAR(255),
     size INTEGER,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
