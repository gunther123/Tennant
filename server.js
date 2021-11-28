//Require all node modules
const path = require('path');
const routes = require('./controllers/');
const exphbs = require('express-handlebars');
const sequelize = require('./config/connection');
const hbs = exphbs.create({});
const express = require('express');

//Middleware setup
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// connection to db
sequelize.sync({ force: false }).then(() => {
    //Start server
    app.listen(PORT, () => {
        console.log(`App listening on port ${PORT}!`);
    })
});