import React from 'react';
import { motion } from 'framer-motion';
import { FaGavel, FaLightbulb, FaUsers, FaChartLine } from 'react-icons/fa';

const About = () => {
  const features = [
    {
      icon: FaGavel,
      title: 'AI-Powered Grant Writing',
      description: 'Our advanced AI algorithms help you craft compelling grant proposals that stand out to funders.',
    },
    {
      icon: FaLightbulb,
      title: 'Smart Suggestions',
      description: 'Get intelligent recommendations for improving your proposal based on successful grant applications.',
    },
    {
      icon: FaUsers,
      title: 'Collaborative Platform',
      description: 'Work seamlessly with your team members in real-time on grant proposals.',
    },
    {
      icon: FaChartLine,
      title: 'Success Analytics',
      description: 'Track your grant application success rate and identify areas for improvement.',
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-text-primary mb-6">
              About GrantWriter
            </h1>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              We're on a mission to revolutionize grant writing by making it accessible, efficient, and successful for organizations of all sizes.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold text-white mb-6">
                Our Mission
              </h2>
              <p className="text-gray-300 mb-6">
                At GrantWriter, we believe that every organization with a worthy cause deserves access to funding. Our mission is to democratize grant writing by leveraging artificial intelligence to help organizations create compelling proposals that resonate with funders.
              </p>
              <p className="text-gray-300">
                We combine cutting-edge AI technology with human expertise to provide a comprehensive solution that streamlines the grant writing process while maintaining the personal touch that makes proposals successful.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
                <img
                  src="/images/mission.jpg"
                  alt="Our Mission"
                  className="object-cover w-full h-full"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-text-primary mb-4">
              Why Choose GrantWriter?
            </h2>
            <p className="text-text-secondary max-w-2xl mx-auto">
              Our platform combines powerful features with intuitive design to help you succeed in grant writing.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-lg"
              >
                <feature.icon className="text-3xl text-primary mb-4" />
                <h3 className="text-xl font-semibold text-text-primary mb-2">
                  {feature.title}
                </h3>
                <p className="text-text-secondary">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
                <img
                  src="/images/story.jpg"
                  alt="Our Story"
                  className="object-cover w-full h-full"
                />
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold text-white mb-6">
                Our Story
              </h2>
              <p className="text-gray-300 mb-6">
                GrantWriter was founded by a team of grant writing professionals and AI experts who recognized the challenges organizations face in securing funding. We saw firsthand how time-consuming and complex the grant writing process can be, and we knew there had to be a better way.
              </p>
              <p className="text-gray-300">
                Today, we're proud to serve thousands of organizations across the globe, helping them secure the funding they need to make a difference in their communities.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-text-primary mb-6">
              Join Us in Making a Difference
            </h2>
            <p className="text-text-secondary mb-8 max-w-2xl mx-auto">
              Start using GrantWriter today and transform your grant writing process.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-primary text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary-hover transition-colors duration-200"
            >
              Get Started Free
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About; 