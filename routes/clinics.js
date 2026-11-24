const express = require('express');
const router = express.Router();

//data sample
const clinics = [
  { id: '1', name: 'Al-Amal Community Clinic', specialty: 'General Medicine', open: true },
  { id: '2', name: 'Hope Dental & Care Center', specialty: 'Dental Care', open: true },
  { id: '3', name: 'CareBridge Pediatric Clinic', specialty: 'Pediatrics', open: false }
];

//browse page
router.get('/', (req, res) => {
  res.render('clinics', {
    title: 'Clinics - Charity Clinics Booking',
    heading: 'Available Charity Clinics',
    clinics: clinics
  });
});

//specific clinic page
router.get('/:id', (req, res) => {
  const clinic = clinics.find((c) => c.id === req.params.id);

  if (!clinic) {
    return res.status(404).render('404', {
      title: 'Clinic Not Found',
      message: 'We could not find a clinic with that ID.'
    });
  }

  res.render('clinic-details', {
    title: `${clinic.name} - Charity Clinics Booking`,
    clinic: clinic
  });
});

module.exports = router;