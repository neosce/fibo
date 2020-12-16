const dotenv = require('dotenv');
dotenv.config({path: './config.env'});

const app = require('./app');

async function startServer() {
    const port = process.env.PORT || 3500;

    app.listen(port, () => {
        console.log(`App running on port: ${port}`)
    });
}

startServer().catch(err => console.log(err));
