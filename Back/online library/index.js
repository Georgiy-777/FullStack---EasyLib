const express = require('express');
const PORT = 3030;
const cors = require('cors');

const bookRoutes = require('./routes/book.routes');
const app = express();
app.use(cors({ origin: 'http://localhost:3000' }));

app.use(express.json());

app.use('/api', bookRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
})