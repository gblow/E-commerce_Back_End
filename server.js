const express = require('express');
const sequelize = require('./config/connection');
const routes = require('./routes'); 

const app = express();
const PORT = process.env.PORT || 3001;

app.use(routes);

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log(`Server running on port ${PORT}.`));
});
