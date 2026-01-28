const fakeJobs = require('../data/fakeJobs');

// Get all jobs
const getJobs = async (req, res) => {
    try {
        // Return fake jobs for now
        // Later, when MongoDB is connected, use: const jobs = await Job.find({ isActive: true });
        res.status(200).json({
            success: true,
            count: fakeJobs.length,
            data: fakeJobs
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error fetching jobs',
            error: error.message
        });
    }
};

module.exports = {
    getJobs
};
