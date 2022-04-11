const express = require('express');
var cors = require('cors');
const config = require('config');
const mongoose = require('mongoose');

const app = express();

// TODO: delete middleware
app.use(cors())

app.use(express.json({ extended: true}))

app.use('/api/auth', require('./routes/auth.routes.js'));

const PORT = config.get('port') || 5050;

async function start(){
    try {
        await mongoose.connect(config.get('mongoUri'), {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

        app.listen(PORT, () => console.log(`App has been started on port ${PORT}...`));
    } catch (e) {
        console.log('Server error: ', e.message);
        process.exit(1);
    }
}

start();
