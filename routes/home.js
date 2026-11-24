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



// Booking guide page
router.get('/booking-guide', (req, res) => {
  const steps = [
    {
      stepNumber: 1,
      title: 'Browse Available Clinics',
      description: 'Visit the Clinics page to check specialties and see which charity clinics are currently accepting visits.'
    },
    {
      stepNumber: 2,
      title: 'Review Clinic Details',
      description: 'Click View Details on your chosen clinic to confirm its specialty, hours, and visit availability.'
    },
    {
      stepNumber: 3,
      title: 'Plan Your Visit in Advance',
      description: 'Arrive during your scheduled window with any required documents to reduce waiting room crowding.'
    }
  ];

  res.render('booking-guide', {
    title: 'Booking Guide - Charity Clinics Booking',
    heading: 'How to Plan Your Clinic Visit',
    steps: steps
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