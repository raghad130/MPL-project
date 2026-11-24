const express = require('express');
const router = express.Router();


router.get('/about', (req, res) => {

    const pageData = {
        title: 'About Our Project',
        currentPage: 'about',
        projectTitle: 'Charity Clinics Booking ',
        problemContext: 'Residents struggle to find nearby verified local clinics.',
        projectDescription: 'A web application that connects residents with local resources and allows users to submit and track visit requests.',
        teamMembers: [
            { name: 'Raghad Jehad', id: '202420290' },
            { name: 'tamara jamous', id: '202220348 ' },
            { name:'omar ali mezel',id:'202411491 '},
            {name:'seif azzam alsadi',id:'202420318' }
        
        ]};

    res.render('about', pageData);
});

module.exports = router;