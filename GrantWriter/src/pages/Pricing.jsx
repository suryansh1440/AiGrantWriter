import React from 'react';
import { motion } from 'framer-motion';
import { FaGavel, FaCheck, FaTimes } from 'react-icons/fa';

const Pricing = () => {
  const pricingTiers = [
    {
      name: 'Starter',
      icon: FaGavel,
      price: '$29',
      period: 'per month',
      description: 'Perfect for small organizations and individual grant writers',
      features: [
        'Up to 5 grant proposals per month',
        'Basic AI-powered writing assistance',
        'Standard templates',
        'Email support',
        'Basic analytics',
      ],
      cta: 'Get Started',
      popular: false,
    },
    {
      name: 'Professional',
      icon: FaGavel,
      price: '$79',
      period: 'per month',
      description: 'Ideal for growing organizations with multiple grant writers',
      features: [
        'Unlimited grant proposals',
        'Advanced AI-powered writing assistance',
        'Premium templates',
        'Priority email support',
        'Advanced analytics',
        'Team collaboration',
        'Custom branding',
      ],
      cta: 'Start Free Trial',
      popular: true,
    },
    {
      name: 'Enterprise',
      icon: FaGavel,
      price: 'Custom',
      period: 'contact us',
      description: 'For large organizations with complex grant writing needs',
      features: [
        'Everything in Professional',
        'Dedicated account manager',
        'Custom AI training',
        'API access',
        'SLA guarantees',
        'On-site training',
        'Custom integrations',
      ],
      cta: 'Contact Sales',
      popular: false,
    },
  ];

  const faqs = [
    {
      question: "Can I change my plan later?",
      answer: "Yes, you can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards, PayPal, and bank transfers for annual plans."
    },
    {
      question: "Is there a free trial?",
      answer: "Yes, all plans include a 14-day free trial. No credit card required to start."
    },
    {
      question: "What is your refund policy?",
      answer: "We offer a 30-day money-back guarantee if you're not satisfied with our service."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header Section */}
      <section className="relative overflow-hidden py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-text-primary mb-6">
              Simple, Transparent Pricing
            </h1>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              Choose the plan that best fits your organization's needs. All plans include a 14-day free trial.
            </p>
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
                className={`relative bg-white rounded-lg shadow-lg overflow-hidden ${
                  tier.popular ? 'ring-2 ring-primary' : ''
                }`}
              >
                {tier.popular && (
                  <div className="absolute top-0 right-0 bg-primary text-white px-4 py-1 text-sm font-semibold rounded-bl-lg">
                    Most Popular
                  </div>
                )}
                <div className="p-8">
                  <tier.icon className="text-3xl text-primary mb-4" />
                  <h3 className="text-2xl font-bold text-text-primary mb-2">
                    {tier.name}
                  </h3>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-text-primary">
                      {tier.price}
                    </span>
                    <span className="text-text-secondary">/{tier.period}</span>
                  </div>
                  <p className="text-text-secondary mb-8">
                    {tier.description}
                  </p>
                  <ul className="space-y-4 mb-8">
                    {tier.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <FaCheck className="text-primary mr-3" />
                        <span className="text-text-secondary">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors duration-200 ${
                      tier.popular
                        ? 'bg-primary text-white hover:bg-primary-hover'
                        : 'bg-secondary text-white hover:bg-secondary-hover'
                    }`}
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
      <section className="py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Find answers to common questions about our pricing and plans.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-lg"
              >
                <h3 className="text-xl font-semibold text-text-primary mb-2">
                  {faq.question}
                </h3>
                <p className="text-text-secondary">
                  {faq.answer}
                </p>
              </motion.div>
            ))}
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
              Ready to Get Started?
            </h2>
            <p className="text-text-secondary mb-8 max-w-2xl mx-auto">
              Start your 14-day free trial today. No credit card required.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-primary text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary-hover transition-colors duration-200"
            >
              Start Free Trial
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Pricing; 