const express = require ('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 5005;

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://127.0.0.1:27017/ecommer',{
    useNewUrlParser:true,
    useUnifiedTopology:true,
});

const productRoutes = require('./Routes/productRoutes');
app.use('/api/products',productRoutes);

app.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
});