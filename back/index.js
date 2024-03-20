const express = require('express');
const PORT = 3030;
const cors = require('cors');

const bookRoutes = require('./routes/book.routes');
const app = express();
// app.use(cors({ origin: 'http://localhost:3001' }));

// app.use(express.json());



app.use(express.json());
app.use(cors());
app.use('/api', bookRoutes);



// app.listen(PORT, () => {
//   console.log(`Server is running on PORT ${PORT}`);
// })



const startServer = async () => {
  try {

      app.listen(PORT, () => {
          console.log(`Server started on port ${PORT}`);
      });
     
  } catch (error) {
      console.log(error);
      throw new Error(error);
  }
};
startServer();