import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { FaGavel, FaArrowRight, FaCheck, FaRocket, FaLightbulb, FaChartLine, FaShieldAlt, FaClock, FaUsers } from 'react-icons/fa';
import { GoogleGenerativeAI } from '@google/generative-ai';


const Home = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    organization: '',
    grantType: '',
    amount: '',
    deadline: '',
    description: '',
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_KEY);
      const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

      const prompt = `Generate a detailed grant proposal based on the following information:
Organization: ${formData.organization}
Grant Type: ${formData.grantType}
Amount: ${formData.amount}
Deadline: ${formData.deadline}
Project Description: ${formData.description}

Please provide a comprehensive grant proposal in JSON format with the following structure:
{
  "organizationName": "Organization name",
  "projectTitle": "Project title",
  "executiveSummary": "Brief summary of the project",
  "projectDescription": "Detailed project description",
  "objectives": ["List of specific objectives"],
  "methodology": "Project methodology and approach",
  "timeline": "Project timeline and milestones",
  "budgetBreakdown": "Detailed budget breakdown",
  "evaluationPlan": "Project evaluation and success metrics",
  "sustainability": "Project sustainability plan",
  "teamQualifications": "Team qualifications and experience",
  "partnerships": "Key partnerships and collaborations",
  "impactStatement": "Expected impact and outcomes"
}

Make the proposal compelling, professional, and aligned with best practices for grant writing.`;

      const result = await model.generateContent(prompt);
      const response = await result.response;
      const text = response.text();
      
      // Clean the response text and parse JSON
      const cleanText = text.replace(/```json\n?|\n?```/g, '').trim();
      const grantProposal = JSON.parse(cleanText);

      // Store the grant proposal in localStorage for the display page
      localStorage.setItem('currentGrantProposal', JSON.stringify(grantProposal));
      
      // Navigate to the grant display page with a temporary ID
      navigate('/grant-display/temp');
    } catch (err) {
      setError('Failed to generate grant proposal. Please try again.');
      console.error('Error generating grant:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#FF6B00] via-[#FF8533] to-[#FFA366]">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:60px_60px]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-block mb-8"
            >
              <FaGavel className="text-6xl text-white drop-shadow-lg" />
            </motion.div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
              Transform Your Grant Writing with AI
            </h1>
            <p className="text-xl text-white/90 mb-12 max-w-3xl mx-auto drop-shadow-md">
              Leverage the power of artificial intelligence to create compelling grant proposals that stand out and get funded.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-[#FF6B00] px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors duration-200 shadow-lg hover:shadow-xl"
              >
                Generate Grant Proposal
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white/10 transition-colors duration-200 shadow-lg hover:shadow-xl"
              >
                View Pricing
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: FaUsers, label: 'Active Users', value: '10K+' },
              { icon: FaClock, label: 'Time Saved', value: '500hrs+' },
              { icon: FaShieldAlt, label: 'Success Rate', value: '95%' },
              { icon: FaGavel, label: 'Grants Won', value: '1K+' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <stat.icon className="text-4xl text-[#FF6B00] mx-auto mb-4" />
                <div className="text-3xl font-bold text-secondary mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-secondary mb-4">
              Why Choose GrantWriter?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our AI-powered platform helps you create professional grant proposals in minutes, not hours.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                title: 'AI-Powered Writing',
                description: 'Advanced AI algorithms help you craft compelling narratives that resonate with funders.',
                icon: FaRocket,
              },
              {
                title: 'Smart Templates',
                description: 'Pre-built templates for various grant types that you can customize to your needs.',
                icon: FaLightbulb,
              },
              {
                title: 'Real-time Feedback',
                description: "Get instant feedback on your proposal's strengths and areas for improvement.",
                icon: FaChartLine,
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-white p-8 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="bg-[#FF6B00]/10 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                  <feature.icon className="text-3xl text-[#FF6B00]" />
                </div>
                <h3 className="text-2xl font-semibold text-secondary mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto bg-gradient-to-br from-gray-50 to-white p-8 rounded-xl shadow-xl border border-gray-100"
          >
            <h2 className="text-3xl font-bold text-secondary text-center mb-8">
              Generate Your Grant Proposal
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Organization Name
                </label>
                <input
                  type="text"
                  name="organization"
                  value={formData.organization}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#FF6B00] focus:border-transparent transition-all duration-200"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Grant Type
                </label>
                <input
                  type="text"
                  name="grantType"
                  value={formData.grantType}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#FF6B00] focus:border-transparent transition-all duration-200"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Grant Amount
                </label>
                <input
                  type="text"
                  name="amount"
                  value={formData.amount}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#FF6B00] focus:border-transparent transition-all duration-200"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Deadline
                </label>
                <input
                  type="date"
                  name="deadline"
                  value={formData.deadline}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#FF6B00] focus:border-transparent transition-all duration-200"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Project Description
                </label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  rows="4"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#FF6B00] focus:border-transparent transition-all duration-200"
                  required
                />
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={loading}
                className="w-full bg-[#FF6B00] text-white py-4 rounded-lg font-semibold hover:bg-[#FF8533] transition-all duration-200 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl"
              >
                {loading ? (
                  <>
                    <span className="animate-spin">⚡</span>
                    <span>Generating...</span>
                  </>
                ) : (
                  <>
                    <span>Generate Proposal</span>
                    <FaArrowRight />
                  </>
                )}
              </motion.button>
            </form>

            {error && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-8 p-6 bg-red-50 rounded-lg border border-red-200"
              >
                <h3 className="text-xl font-semibold text-red-800 mb-4">
                  {error}
                </h3>
              </motion.div>
            )}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-[#FF6B00] via-[#FF8533] to-[#FFA366]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6 drop-shadow-lg">
              Ready to Transform Your Grant Writing?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto drop-shadow-md">
              Join thousands of organizations that are already using GrantWriter to create winning proposals.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-[#FF6B00] px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Start Free Trial
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
