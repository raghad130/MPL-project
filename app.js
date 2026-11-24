const express = require('express');
const path = require('path');

const app = express();
const PORT = 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

const indexRoutes = require('./routes/home');
const clinicRoutes = require('./routes/clinics');
const aboutRoutes = require('./routes/about');


app.use('/', indexRoutes);
app.use('/clinics', clinicRoutes);
app.use('/', aboutRoutes);

app.use((req, res) => {
  res.status(404).render('404', {
     title: '404 - Page Not Found',
    message: 'The page you requested could not be found.'
   });
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});