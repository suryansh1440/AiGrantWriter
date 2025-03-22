import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { FaGavel, FaArrowRight, FaCheck, FaRocket, FaLightbulb, FaChartLine, FaShieldAlt, FaClock, FaUsers, FaExclamationCircle } from 'react-icons/fa';
import { GoogleGenerativeAI } from '@google/generative-ai';


const Home = () => {
  const navigate = useNavigate();
  const formRef = useRef(null);
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

      const prompt = `As an expert grant writer, generate a comprehensive and professional grant proposal based on the following information:

Organization: ${formData.organization}
Grant Type: ${formData.grantType}
Amount Requested: ${formData.amount}
Deadline: ${formData.deadline}
Project Description: ${formData.description}

Please provide a detailed grant proposal in JSON format with the following structure. Make all content specific, detailed, and professionally written:

{
  "organizationName": "Organization name",
  "projectTitle": "Create a compelling title that reflects the project's goals",
  "amount": "Format the requested amount with proper currency notation",
  "deadline": "Format the deadline as a proper date",
  "executiveSummary": "Write a compelling 2-3 paragraph executive summary that highlights the project's significance, goals, and expected impact",
  "projectDescription": "Expand the provided description into a detailed 3-4 paragraph explanation of the project, its necessity, and its implementation",
  "objectives": [
    "List 4-6 specific, measurable, achievable, relevant, and time-bound (SMART) objectives"
  ],
  "methodology": "Provide a detailed 2-3 paragraph description of the project's implementation methodology, including specific steps, approaches, and tools",
  "timeline": {
    "Phase 1 (Months X-Y)": "Detailed description of phase activities and milestones",
    "Phase 2 (Months X-Y)": "Detailed description of phase activities and milestones",
    "Phase 3 (Months X-Y)": "Detailed description of phase activities and milestones"
  },
  "budgetBreakdown": {
    "personnel": "Detailed cost with justification",
    "equipment": "Detailed cost with justification",
    "materials": "Detailed cost with justification",
    "travel": "Detailed cost with justification",
    "contractual": "Detailed cost with justification",
    "other": "Detailed cost with justification",
    "indirect": "Detailed cost with justification"
  },
  "evaluationPlan": "Describe specific metrics, methods, and tools that will be used to measure project success and impact",
  "sustainability": "Explain how the project will be sustained beyond the grant period, including future funding sources and long-term impact",
  "teamQualifications": "Provide detailed information about key team members, their qualifications, and their roles in the project",
  "partnerships": "List and describe key partnerships and collaborations, including their roles and contributions",
  "impactStatement": "Write a compelling statement about the project's expected outcomes and its broader impact on the community or field",
  "risks": [
    "List potential risks and mitigation strategies"
  ],
  "innovationStatement": "Describe what makes this project innovative and how it advances the field",
  "communityEngagement": "Explain how the project will engage with and benefit the community",
  "previousSuccess": "Highlight relevant past successes and experience that support this proposal",
  "dataManagement": "Describe how project data will be collected, stored, and analyzed",
  "compliance": "Address relevant regulatory compliance and ethical considerations"
}

Ensure all content is:
1. Specific and detailed
2. Professional and well-written
3. Aligned with grant writing best practices
4. Realistic and achievable
5. Compelling to potential funders

Make the proposal compelling, professional, and aligned with best practices for grant writing. Use concrete examples, specific metrics, and clear language.`;

      const result = await model.generateContent(prompt);
      const response = await result.response;
      const text = response.text();
      
      // Clean the response text and parse JSON
      const cleanText = text.replace(/```json\n?|\n?```/g, '').trim();
      console.log('Cleaned API Response:', cleanText);
      
      const grantProposal = JSON.parse(cleanText);

      // Store the grant proposal in localStorage for the display page
      localStorage.setItem('currentGrantProposal', JSON.stringify(grantProposal));
      
      // Navigate to the grant display page
      navigate('/grant-display/temp');
    } catch (err) {
      setError('Failed to generate grant proposal. Please try again.');
      console.error('Error generating grant:', err);
    } finally {
      setLoading(false);
    }
  };

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: 'smooth' });
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
                onClick={scrollToForm}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-[#FF6B00] px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors duration-200 shadow-lg hover:shadow-xl"
              >
                Generate Grant Proposal
              </motion.button>
              <motion.button
                onClick={() => navigate('/pricing')}
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
      <section ref={formRef} className="py-24 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-gray-100/25 bg-[size:20px_20px]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto"
          >
            <div className="text-center mb-12">
              <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="inline-block p-3 bg-orange-100 rounded-2xl mb-4"
              >
                <FaGavel className="text-4xl text-[#FF6B00]" />
              </motion.div>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Generate Your Grant Proposal
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Fill in the details below and let our AI-powered system create a professional grant proposal tailored to your needs.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
              <div className="p-8">
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 }}
                    >
                      <label className="block text-gray-700 font-semibold mb-2">
                        Organization Name
                      </label>
                      <input
                        type="text"
                        name="organization"
                        value={formData.organization}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#FF6B00] focus:border-transparent transition-all duration-200 bg-gray-50"
                        placeholder="Enter your organization name"
                        required
                      />
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 }}
                    >
                      <label className="block text-gray-700 font-semibold mb-2">
                        Grant Type
                      </label>
                      <input
                        type="text"
                        name="grantType"
                        value={formData.grantType}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#FF6B00] focus:border-transparent transition-all duration-200 bg-gray-50"
                        placeholder="e.g., Research, Education, Community"
                        required
                      />
                    </motion.div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 }}
                    >
                      <label className="block text-gray-700 font-semibold mb-2">
                        Grant Amount
                      </label>
                      <div className="relative">
                        <span className="absolute left-4 top-3 text-gray-500">$</span>
                        <input
                          type="text"
                          name="amount"
                          value={formData.amount}
                          onChange={handleInputChange}
                          className="w-full pl-8 pr-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#FF6B00] focus:border-transparent transition-all duration-200 bg-gray-50"
                          placeholder="Enter amount"
                          required
                        />
                      </div>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 }}
                    >
                      <label className="block text-gray-700 font-semibold mb-2">
                        Deadline
                      </label>
                      <div className="relative">
                        <input
                          type="date"
                          name="deadline"
                          value={formData.deadline}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#FF6B00] focus:border-transparent transition-all duration-200 bg-gray-50 cursor-pointer [&::-webkit-calendar-picker-indicator]:opacity-0 [&::-webkit-calendar-picker-indicator]:w-full [&::-webkit-calendar-picker-indicator]:absolute [&::-webkit-calendar-picker-indicator]:top-0 [&::-webkit-calendar-picker-indicator]:left-0 [&::-webkit-calendar-picker-indicator]:h-full"
                          required
                        />
                      </div>
                      <p className="mt-1 text-sm text-gray-500">Click to select date</p>
                    </motion.div>
                  </div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                  >
                    <label className="block text-gray-700 font-semibold mb-2">
                      Project Description
                    </label>
                    <textarea
                      name="description"
                      value={formData.description}
                      onChange={handleInputChange}
                      rows="6"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#FF6B00] focus:border-transparent transition-all duration-200 bg-gray-50"
                      placeholder="Provide a detailed description of your project..."
                      required
                    />
                  </motion.div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    disabled={loading}
                    className="w-full bg-gradient-to-r from-[#FF6B00] to-[#FF8533] text-white py-4 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {loading ? (
                      <>
                        <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white"></div>
                        <span>Generating Proposal...</span>
                      </>
                    ) : (
                      <>
                        <span>Generate Proposal</span>
                        <FaArrowRight className="ml-2" />
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
                    <div className="flex items-center space-x-3">
                      <div className="flex-shrink-0">
                        <FaExclamationCircle className="h-5 w-5 text-red-400" />
                      </div>
                      <h3 className="text-sm font-medium text-red-800">
                        {error}
                      </h3>
                    </div>
                  </motion.div>
                )}
              </div>

              <div className="px-8 py-6 bg-gray-50 border-t border-gray-100">
                <div className="flex items-center justify-between text-sm text-gray-600">
                  <div className="flex items-center space-x-2">
                    <FaShieldAlt className="text-[#FF6B00]" />
                    <span>Your data is secure and encrypted</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <FaClock className="text-[#FF6B00]" />
                    <span>Average generation time: 2 minutes</span>
                  </div>
                </div>
              </div>
            </div>
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
