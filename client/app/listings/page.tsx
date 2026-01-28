'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { fetchJobs } from '@/lib/api';
import { Job } from '@/lib/types';
import Button from '@/components/Button';
import JobApplicationModal from '@/components/JobApplicationModal';

export default function ListingsPage() {
    const [jobs, setJobs] = useState<Job[]>([]);
    const [loading, setLoading] = useState(true);
    const [selectedJob, setSelectedJob] = useState<{ id: string; title: string } | null>(null);

    useEffect(() => {
        const loadJobs = async () => {
            try {
                const data = await fetchJobs();
                setJobs(data);
            } catch (error) {
                console.error('Failed to load jobs:', error);
            } finally {
                setLoading(false);
            }
        };

        loadJobs();
    }, []);

    const handleApply = (jobId: string, jobTitle: string) => {
        setSelectedJob({ id: jobId, title: jobTitle });
    };

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            {/* Header */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center mb-12"
            >
                <h1 className="text-4xl md:text-5xl font-bold text-text-heading mb-4">
                    Explore <span className="text-primary-blue">Opportunities</span>
                </h1>
                <p className="text-xl text-text-body max-w-2xl mx-auto">
                    Discover verified job opportunities from top companies partnered with leading colleges.
                </p>
            </motion.div>

            {/* Loading State */}
            {loading && (
                <div className="text-center py-20">
                    <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-primary-blue"></div>
                    <p className="mt-4 text-text-body">Loading opportunities...</p>
                </div>
            )}

            {/* Job Cards Grid */}
            {!loading && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {jobs.map((job, index) => (
                        <motion.div
                            key={job.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.6 }}
                            whileHover={{ y: -8, transition: { duration: 0.2 } }}
                            className="bg-dark-card text-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-shadow"
                        >
                            {/* Job Title */}
                            <h3 className="text-xl font-bold mb-3">{job.title}</h3>

                            {/* Location */}
                            <div className="flex items-center text-gray-300 mb-3">
                                <svg
                                    className="w-4 h-4 mr-2"
                                    fill="none"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                                    <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                </svg>
                                <span className="text-sm">{job.location}</span>
                            </div>

                            {/* Description */}
                            <p className="text-gray-300 text-sm mb-4 line-clamp-3">{job.description}</p>

                            {/* Requirements */}
                            {job.requirements && job.requirements.length > 0 && (
                                <div className="mb-4">
                                    <p className="text-xs text-gray-400 mb-2">Key Requirements:</p>
                                    <ul className="text-xs text-gray-300 space-y-1">
                                        {job.requirements.slice(0, 2).map((req, idx) => (
                                            <li key={idx} className="flex items-start">
                                                <span className="text-primary-cyan mr-2">•</span>
                                                <span>{req}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            {/* Apply Button */}
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => handleApply(job.id, job.title)}
                                className="w-full bg-primary-blue hover:bg-primary-cyan text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-300"
                            >
                                Apply Now
                            </motion.button>
                        </motion.div>
                    ))}
                </div>
            )}

            {/* Application Modal */}
            {selectedJob && (
                <JobApplicationModal
                    isOpen={!!selectedJob}
                    onClose={() => setSelectedJob(null)}
                    jobId={selectedJob.id}
                    jobTitle={selectedJob.title}
                />
            )}
        </div>
    );
}
