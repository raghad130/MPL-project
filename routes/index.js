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

//about page
router.get('/about', (req, res) => {
  res.render('about', {
    title: 'About Us - Charity Clinics Booking',
    heading: 'Our Mission',
    description: 'Connecting patients with community and charity clinics smoothly.'
  });
});

//booking page
router.get('/booking-guide', (req, res) => {
  res.render('booking-guide', {
    title: 'Booking Guide - Charity Clinics Booking',
    heading: 'How Clinic Visits Work'
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