import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaGavel, FaGoogle, FaGithub, FaEnvelope, FaLock, FaUser, FaBuilding } from 'react-icons/fa';
import { toast } from 'react-toastify';

const Signup = () => {
  const [formData, setFormData] = useState({
    name: '',
    organization: '',
    email: '',
    password: '',
    confirmPassword: '',
    agreeToTerms: false,
  });
  const [loading, setLoading] = useState(false);
  const [focusedField, setFocusedField] = useState(null);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      toast.error('Passwords do not match');
      return;
    }

    setLoading(true);
    try {
      // TODO: Implement signup logic
      await new Promise((resolve) => setTimeout(resolve, 1000));
      toast.success('Account created successfully!');
      // Redirect to login or dashboard
    } catch (error) {
      toast.error('Failed to create account. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleSocialSignup = (provider) => {
    // TODO: Implement social signup
    toast.info(`${provider} signup coming soon!`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100"
        >
          <div className="text-center mb-8">
            <Link to="/" className="inline-block group">
              <div className="flex items-center justify-center space-x-3 mb-6">
                <div className="bg-gradient-to-br from-[#FF6B00] to-[#FF8533] p-3 rounded-xl shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:scale-110">
                  <FaGavel className="text-3xl text-white" />
                </div>
                <span className="text-3xl font-bold bg-gradient-to-r from-[#FF6B00] to-[#FFA366] bg-clip-text text-transparent">
                  GrantWriter
                </span>
              </div>
            </Link>
            <h2 className="text-3xl font-bold text-gray-900 mb-3">
              Create your account
            </h2>
            <p className="text-gray-600">
              Already have an account?{' '}
              <Link
                to="/login"
                className="font-medium text-[#FF6B00] hover:text-[#FF8533] transition-colors duration-200"
              >
                Sign in
              </Link>
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className={`block text-sm font-medium mb-2 transition-colors duration-200 ${
                    focusedField === 'name' ? 'text-[#FF6B00]' : 'text-gray-700'
                  }`}
                >
                  Full Name
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FaUser className={`text-gray-400 ${
                      focusedField === 'name' ? 'text-[#FF6B00]' : ''
                    }`} />
                  </div>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    onFocus={() => setFocusedField('name')}
                    onBlur={() => setFocusedField(null)}
                    className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#FF6B00] focus:border-transparent transition-all duration-200"
                    placeholder="Enter your full name"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="organization"
                  className={`block text-sm font-medium mb-2 transition-colors duration-200 ${
                    focusedField === 'organization' ? 'text-[#FF6B00]' : 'text-gray-700'
                  }`}
                >
                  Organization
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FaBuilding className={`text-gray-400 ${
                      focusedField === 'organization' ? 'text-[#FF6B00]' : ''
                    }`} />
                  </div>
                  <input
                    id="organization"
                    name="organization"
                    type="text"
                    required
                    value={formData.organization}
                    onChange={handleInputChange}
                    onFocus={() => setFocusedField('organization')}
                    onBlur={() => setFocusedField(null)}
                    className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#FF6B00] focus:border-transparent transition-all duration-200"
                    placeholder="Enter your organization name"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="email"
                  className={`block text-sm font-medium mb-2 transition-colors duration-200 ${
                    focusedField === 'email' ? 'text-[#FF6B00]' : 'text-gray-700'
                  }`}
                >
                  Email address
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FaEnvelope className={`text-gray-400 ${
                      focusedField === 'email' ? 'text-[#FF6B00]' : ''
                    }`} />
                  </div>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    onFocus={() => setFocusedField('email')}
                    onBlur={() => setFocusedField(null)}
                    className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#FF6B00] focus:border-transparent transition-all duration-200"
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="password"
                  className={`block text-sm font-medium mb-2 transition-colors duration-200 ${
                    focusedField === 'password' ? 'text-[#FF6B00]' : 'text-gray-700'
                  }`}
                >
                  Password
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FaLock className={`text-gray-400 ${
                      focusedField === 'password' ? 'text-[#FF6B00]' : ''
                    }`} />
                  </div>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    required
                    value={formData.password}
                    onChange={handleInputChange}
                    onFocus={() => setFocusedField('password')}
                    onBlur={() => setFocusedField(null)}
                    className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#FF6B00] focus:border-transparent transition-all duration-200"
                    placeholder="Create a password"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="confirmPassword"
                  className={`block text-sm font-medium mb-2 transition-colors duration-200 ${
                    focusedField === 'confirmPassword' ? 'text-[#FF6B00]' : 'text-gray-700'
                  }`}
                >
                  Confirm Password
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FaLock className={`text-gray-400 ${
                      focusedField === 'confirmPassword' ? 'text-[#FF6B00]' : ''
                    }`} />
                  </div>
                  <input
                    id="confirmPassword"
                    name="confirmPassword"
                    type="password"
                    required
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    onFocus={() => setFocusedField('confirmPassword')}
                    onBlur={() => setFocusedField(null)}
                    className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#FF6B00] focus:border-transparent transition-all duration-200"
                    placeholder="Confirm your password"
                  />
                </div>
              </div>
            </div>

            <div className="flex items-center">
              <input
                id="agreeToTerms"
                name="agreeToTerms"
                type="checkbox"
                required
                checked={formData.agreeToTerms}
                onChange={handleInputChange}
                className="h-4 w-4 text-[#FF6B00] focus:ring-[#FF6B00] border-gray-300 rounded transition-colors duration-200"
              />
              <label htmlFor="agreeToTerms" className="ml-2 block text-sm text-gray-600">
                I agree to the{' '}
                <Link
                  to="/terms"
                  className="font-medium text-[#FF6B00] hover:text-[#FF8533] transition-colors duration-200"
                >
                  Terms of Service
                </Link>{' '}
                and{' '}
                <Link
                  to="/privacy"
                  className="font-medium text-[#FF6B00] hover:text-[#FF8533] transition-colors duration-200"
                >
                  Privacy Policy
                </Link>
              </label>
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-[#FF6B00] to-[#FF8533] text-white py-3 rounded-lg font-semibold transition-all duration-300 transform hover:shadow-lg disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
            >
              {loading ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                  <span>Creating account...</span>
                </>
              ) : (
                <span>Create Account</span>
              )}
            </motion.button>

            <div className="relative my-8">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-white text-gray-500">
                  Or sign up with
                </span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="button"
                onClick={() => handleSocialSignup('Google')}
                className="flex items-center justify-center px-4 py-3 border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-all duration-200 bg-white space-x-2"
              >
                <FaGoogle className="text-red-500" />
                <span className="text-gray-700">Google</span>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="button"
                onClick={() => handleSocialSignup('GitHub')}
                className="flex items-center justify-center px-4 py-3 border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-all duration-200 bg-white space-x-2"
              >
                <FaGithub className="text-gray-900" />
                <span className="text-gray-700">GitHub</span>
              </motion.button>
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default Signup; 