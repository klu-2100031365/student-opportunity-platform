'use client';

import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import Button from '@/components/Button';

export default function HomePage() {
  const router = useRouter();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="py-20 md:py-32 text-center"
      >
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-4xl md:text-6xl font-bold text-text-heading mb-6 text-balance"
        >
          Where Talent Meets{' '}
          <span className="text-primary-blue">Real Opportunities</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-xl md:text-2xl text-text-body mb-12 max-w-3xl mx-auto"
        >
          Opportunities backed by colleges and companies.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <Button onClick={() => router.push('/listings')}>
            View Opportunities
          </Button>
        </motion.div>
      </motion.section>

      {/* About Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="py-16 max-w-4xl mx-auto"
      >
        <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-8 md:p-12 shadow-lg">
          <h2 className="text-3xl md:text-4xl font-bold text-text-heading mb-6 text-center">
            About MORRIS CORP
          </h2>

          <div className="space-y-4 text-lg text-text-body leading-relaxed">
            <p>
              MORRIS CORP is a trusted platform that bridges the gap between talented students
              and meaningful career opportunities. We partner with leading colleges and companies
              to ensure every opportunity is verified and valuable.
            </p>

            <p>
              Our mission is to empower students with access to genuine job opportunities that
              align with their skills and aspirations. We believe in creating a transparent
              ecosystem where talent meets opportunity.
            </p>

            <p>
              Whether you're a fresh graduate or a final-year student, MORRIS CORP provides
              a platform where your potential is recognized and rewarded by top companies
              across various industries.
            </p>
          </div>

          <div className="mt-8 text-center">
            <Button onClick={() => router.push('/about')} variant="secondary">
              Learn More About Us
            </Button>
          </div>
        </div>
      </motion.section>

      {/* Stats Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="py-16"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { number: '50+', label: 'Partner Companies' },
            { number: '100+', label: 'College Partnerships' },
            { number: '1000+', label: 'Students Placed' },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="text-center p-8 bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow"
            >
              <div className="text-4xl md:text-5xl font-bold text-primary-blue mb-2">
                {stat.number}
              </div>
              <div className="text-lg text-text-body">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </div>
  );
}
