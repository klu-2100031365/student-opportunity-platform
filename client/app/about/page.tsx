'use client';

import { motion } from 'framer-motion';

export default function AboutPage() {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            {/* Header */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center mb-16"
            >
                <h1 className="text-4xl md:text-5xl font-bold text-text-heading mb-4">
                    About <span className="text-primary-blue">MORRIS CORP</span>
                </h1>
                <p className="text-xl text-text-body max-w-3xl mx-auto">
                    Building bridges between talent and opportunity
                </p>
            </motion.div>

            {/* About MORRIS CORP */}
            <motion.section
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="mb-16"
            >
                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 md:p-12">
                    <h2 className="text-3xl font-bold text-text-heading mb-6">Who We Are</h2>
                    <div className="space-y-4 text-lg text-text-body">
                        <p>
                            MORRIS CORP is a pioneering platform dedicated to connecting talented students with
                            verified job opportunities from leading companies. We work closely with colleges and
                            corporate partners to ensure every opportunity listed on our platform is genuine and valuable.
                        </p>
                        <p>
                            Our platform serves as a trusted intermediary, ensuring that students have access to
                            opportunities that match their skills and aspirations, while companies get access to
                            pre-vetted talent from top educational institutions.
                        </p>
                    </div>
                </div>
            </motion.section>

            {/* Why Colleges Partner */}
            <motion.section
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="mb-16"
            >
                <h2 className="text-3xl font-bold text-text-heading mb-8 text-center">
                    Why Colleges Partner With Us
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {[
                        {
                            title: 'Enhanced Placement Rates',
                            description: 'Increase student placement success through verified opportunities from reputable companies.',
                        },
                        {
                            title: 'Quality Assurance',
                            description: 'All opportunities are vetted to ensure they meet educational and professional standards.',
                        },
                        {
                            title: 'Student Success Tracking',
                            description: 'Monitor and track student applications and placements through our platform.',
                        },
                        {
                            title: 'Industry Connections',
                            description: 'Build stronger relationships with leading companies across various sectors.',
                        },
                    ].map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.6 }}
                            className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow"
                        >
                            <h3 className="text-xl font-bold text-primary-blue mb-3">{item.title}</h3>
                            <p className="text-text-body">{item.description}</p>
                        </motion.div>
                    ))}
                </div>
            </motion.section>

            {/* Why Companies Partner */}
            <motion.section
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="mb-16"
            >
                <h2 className="text-3xl font-bold text-text-heading mb-8 text-center">
                    Why Companies Partner With Us
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {[
                        {
                            title: 'Pre-Vetted Talent',
                            description: 'Access students from top colleges with verified academic credentials.',
                        },
                        {
                            title: 'Streamlined Hiring',
                            description: 'Simplified recruitment process with organized applications and candidate profiles.',
                        },
                        {
                            title: 'Campus Reach',
                            description: 'Direct access to fresh talent from multiple educational institutions.',
                        },
                    ].map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.6 }}
                            className="bg-dark-card text-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow"
                        >
                            <h3 className="text-xl font-bold text-primary-cyan mb-3">{item.title}</h3>
                            <p className="text-gray-300">{item.description}</p>
                        </motion.div>
                    ))}
                </div>
            </motion.section>

            {/* Benefits for Students */}
            <motion.section
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="mb-16"
            >
                <h2 className="text-3xl font-bold text-text-heading mb-8 text-center">
                    Benefits for Students
                </h2>
                <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-8 md:p-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {[
                            'Access to verified job opportunities',
                            'Direct applications to top companies',
                            'College-backed credibility',
                            'Transparent application process',
                            'Career guidance and support',
                            'Industry exposure and networking',
                        ].map((benefit, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.6 }}
                                className="flex items-start"
                            >
                                <svg
                                    className="w-6 h-6 text-primary-blue mr-3 flex-shrink-0 mt-1"
                                    fill="none"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path d="M5 13l4 4L19 7"></path>
                                </svg>
                                <span className="text-lg text-text-body">{benefit}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.section>
        </div>
    );
}
