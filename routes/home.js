const express = require('express');
const router = express.Router();

//home page
router.get('/', (req, res) => {
  res.render('home', {
    title: 'Home - Charity Clinics Booking',
    heading: 'Charity Clinics Booking Platform',
    description: 'Plan clinic visits in advance to reduce crowding and waiting times.',
    showNotice: true
  });
});


//contact us page
router.get('/contactUs', (req, res) => {
  res.render('contactUs', {
    title: 'Contact Us - Charity Clinics Booking',
    heading: 'Clinic Support & Information'
  });
});

module.exports = router;