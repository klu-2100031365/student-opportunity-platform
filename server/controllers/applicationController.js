const Application = require('../models/Application');

// Submit job application
const submitApplication = async (req, res) => {
    try {
        const { fullName, email, phone, college, degree, message, jobId, jobTitle } = req.body;

        // Validate required fields
        if (!fullName || !email || !phone || !college || !degree || !jobId || !jobTitle) {
            return res.status(400).json({
                success: false,
                message: 'Please provide all required fields'
            });
        }

        // Create new application
        const application = await Application.create({
            fullName,
            email,
            phone,
            college,
            degree,
            message: message || '',
            jobId,
            jobTitle
        });

        res.status(201).json({
            success: true,
            message: 'Thank you for applying. Our team will contact you if your profile matches the opportunity.',
            data: application
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error submitting application',
            error: error.message
        });
    }
};

module.exports = {
    submitApplication
};
