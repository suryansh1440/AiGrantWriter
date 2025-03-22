import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGavel, FaCheck, FaTimes, FaChevronDown, FaRocket, FaCrown, FaBuilding } from 'react-icons/fa';

const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(false);
  const [expandedFaq, setExpandedFaq] = useState(null);

  const pricingTiers = [
    {
      name: 'Starter',
      icon: FaRocket,
      monthlyPrice: '$29',
      annualPrice: '$290',
      period: 'per month',
      description: 'Perfect for small organizations and individual grant writers',
      features: [
        { text: 'Up to 5 grant proposals per month', included: true },
        { text: 'Basic AI-powered writing assistance', included: true },
        { text: 'Standard templates', included: true },
        { text: 'Email support', included: true },
        { text: 'Basic analytics', included: true },
        { text: 'Team collaboration', included: false },
        { text: 'Custom branding', included: false },
        { text: 'API access', included: false },
      ],
      cta: 'Get Started',
      popular: false,
      color: 'from-blue-500 to-blue-600',
      hoverColor: 'hover:from-blue-600 hover:to-blue-700',
    },
    {
      name: 'Professional',
      icon: FaCrown,
      monthlyPrice: '$79',
      annualPrice: '$790',
      period: 'per month',
      description: 'Ideal for growing organizations with multiple grant writers',
      features: [
        { text: 'Unlimited grant proposals', included: true },
        { text: 'Advanced AI-powered writing assistance', included: true },
        { text: 'Premium templates', included: true },
        { text: 'Priority email support', included: true },
        { text: 'Advanced analytics', included: true },
        { text: 'Team collaboration', included: true },
        { text: 'Custom branding', included: true },
        { text: 'API access', included: false },
      ],
      cta: 'Start Free Trial',
      popular: true,
      color: 'from-[#FF6B00] to-[#FF8533]',
      hoverColor: 'hover:from-[#FF8533] hover:to-[#FFA366]',
    },
    {
      name: 'Enterprise',
      icon: FaBuilding,
      monthlyPrice: 'Custom',
      annualPrice: 'Custom',
      period: 'contact us',
      description: 'For large organizations with complex grant writing needs',
      features: [
        { text: 'Everything in Professional', included: true },
        { text: 'Dedicated account manager', included: true },
        { text: 'Custom AI training', included: true },
        { text: 'API access', included: true },
        { text: 'SLA guarantees', included: true },
        { text: 'On-site training', included: true },
        { text: 'Custom integrations', included: true },
        { text: 'White-label solution', included: true },
      ],
      cta: 'Contact Sales',
      popular: false,
      color: 'from-purple-500 to-purple-600',
      hoverColor: 'hover:from-purple-600 hover:to-purple-700',
    },
  ];

  const faqs = [
    {
      question: "Can I change my plan later?",
      answer: "Yes, you can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle. We make it easy to adjust your subscription as your needs change."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards (Visa, MasterCard, American Express, Discover), PayPal, and bank transfers for annual plans. All payments are processed securely through our payment partners."
    },
    {
      question: "Is there a free trial?",
      answer: "Yes, all plans include a 14-day free trial. No credit card is required to start. You'll have full access to all features during the trial period to help you make an informed decision."
    },
    {
      question: "What is your refund policy?",
      answer: "We offer a 30-day money-back guarantee if you're not satisfied with our service. Simply contact our support team within 30 days of your purchase, and we'll process your refund with no questions asked."
    },
    {
      question: "Do you offer discounts for nonprofits?",
      answer: "Yes! We offer special pricing for registered nonprofit organizations. Contact our sales team with your nonprofit documentation to learn more about our discount program."
    },
    {
      question: "Can I use GrantWriter in my country?",
      answer: "GrantWriter is available worldwide! Our platform supports multiple currencies and languages. However, some features may vary by region due to local regulations and requirements."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      {/* Header Section */}
      <section className="relative overflow-hidden py-24">
        <div className="absolute inset-0 bg-grid-gray-100/25 bg-[size:20px_20px]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Simple, <span className="bg-gradient-to-r from-[#FF6B00] to-[#FFA366] bg-clip-text text-transparent">Transparent</span> Pricing
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
              Choose the plan that best fits your organization's needs. All plans include a 14-day free trial.
            </p>

            {/* Billing Toggle */}
            <div className="flex items-center justify-center space-x-4">
              <span className={`text-lg ${!isAnnual ? 'text-gray-900 font-semibold' : 'text-gray-500'}`}>Monthly</span>
              <button
                onClick={() => setIsAnnual(!isAnnual)}
                className={`relative w-16 h-8 rounded-full transition-colors duration-300 focus:outline-none ${
                  isAnnual ? 'bg-[#FF6B00]' : 'bg-gray-300'
                }`}
              >
                <div
                  className={`absolute w-6 h-6 bg-white rounded-full top-1 transition-transform duration-300 ${
                    isAnnual ? 'transform translate-x-9' : 'translate-x-1'
                  }`}
                />
              </button>
              <span className={`text-lg ${isAnnual ? 'text-gray-900 font-semibold' : 'text-gray-500'}`}>
                Annual
                <span className="ml-2 text-sm bg-green-100 text-green-700 px-2 py-1 rounded-full">
                  Save 20%
                </span>
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingTiers.map((tier, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className={`relative bg-white rounded-2xl shadow-xl overflow-hidden transform hover:-translate-y-1 transition-all duration-300 ${
                  tier.popular ? 'ring-2 ring-[#FF6B00]' : ''
                }`}
              >
                {tier.popular && (
                  <div className="absolute top-0 right-0 bg-gradient-to-r from-[#FF6B00] to-[#FF8533] text-white px-4 py-1 text-sm font-semibold rounded-bl-lg">
                    Most Popular
                  </div>
                )}
                <div className="p-8">
                  <div className={`inline-block p-3 rounded-xl bg-gradient-to-br ${tier.color} mb-6`}>
                    <tier.icon className="text-2xl text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {tier.name}
                  </h3>
                  <div className="mb-6">
                    <div className="flex items-baseline">
                      <span className="text-5xl font-bold text-gray-900">
                        {isAnnual ? tier.annualPrice : tier.monthlyPrice}
                      </span>
                      <span className="ml-2 text-gray-500">/{tier.period}</span>
                    </div>
                    {isAnnual && tier.monthlyPrice !== 'Custom' && (
                      <p className="text-sm text-green-600 mt-2">
                        Save {parseInt(tier.monthlyPrice.slice(1)) * 2.4} per year
                      </p>
                    )}
                  </div>
                  <p className="text-gray-600 mb-8">
                    {tier.description}
                  </p>
                  <ul className="space-y-4 mb-8">
                    {tier.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        {feature.included ? (
                          <FaCheck className="text-green-500 mr-3" />
                        ) : (
                          <FaTimes className="text-gray-300 mr-3" />
                        )}
                        <span className={feature.included ? 'text-gray-700' : 'text-gray-400'}>
                          {feature.text}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`w-full py-4 px-6 rounded-xl font-semibold text-white shadow-lg transition-all duration-300 bg-gradient-to-r ${tier.color} ${tier.hoverColor}`}
                  >
                    {tier.cta}
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Find answers to common questions about our pricing and plans. Can't find what you're looking for? Contact our support team.
            </p>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="border border-gray-200 rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                  className="w-full px-6 py-4 text-left bg-white hover:bg-gray-50 transition-colors duration-200 flex items-center justify-between"
                >
                  <h3 className="text-lg font-semibold text-gray-900">
                    {faq.question}
                  </h3>
                  <FaChevronDown
                    className={`text-gray-400 transition-transform duration-300 ${
                      expandedFaq === index ? 'transform rotate-180' : ''
                    }`}
                  />
                </button>
                <AnimatePresence>
                  {expandedFaq === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="border-t border-gray-200"
                    >
                      <p className="px-6 py-4 text-gray-600">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#FF6B00] via-[#FF8533] to-[#FFA366]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Grant Writing?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Join thousands of organizations that are already using GrantWriter to create winning proposals.
              Start your 14-day free trial today. No credit card required.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-[#FF6B00] px-8 py-4 rounded-xl text-lg font-semibold hover:bg-gray-100 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Start Free Trial
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-white/10 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Schedule Demo
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Pricing; 