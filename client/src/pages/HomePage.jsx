import React from 'react';
import { TrendingUp, DollarSign, PieChart, BookOpen, Award, ArrowRight, ChevronRight } from 'lucide-react';

const HomePage = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-600 to-blue-500 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Master Your Finances</h1>
              <p className="text-xl mb-8">
                Learn, plan, and grow with our expert financial education resources and tools.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <button className="bg-white text-indigo-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Get Started
                </button>
                <button className="border border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-colors">
                  Learn More
                </button>
              </div>
            </div>
            <div className="md:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1579621970795-87facc2f976d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Financial Planning" 
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">Why Choose FinanceEdu?</h2>
            <p className="mt-4 text-xl text-gray-600">
              We provide comprehensive financial education for everyone.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-indigo-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                <BookOpen className="h-8 w-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Expert Content</h3>
              <p className="text-gray-600">
                Learn from industry experts with our curated educational content on all financial topics.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-indigo-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                <PieChart className="h-8 w-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Interactive Tools</h3>
              <p className="text-gray-600">
                Use our interactive calculators and planning tools to visualize your financial future.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-indigo-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                <TrendingUp className="h-8 w-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Market Insights</h3>
              <p className="text-gray-600">
                Stay updated with the latest market trends, cryptocurrency news, and blockchain developments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-16 bg-indigo-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-4xl font-bold text-indigo-600 mb-4">"</div>
          <blockquote className="text-2xl font-medium text-gray-800 mb-8">
            The best investment you can make is in your financial education. It's not about how much money you make, but how much money you keep.
          </blockquote>
          <div className="font-semibold text-gray-700">- Robert Kiyosaki</div>
        </div>
      </section>

      {/* Popular Courses Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Popular Courses</h2>
            <a href="#" className="text-indigo-600 font-medium flex items-center hover:text-indigo-800">
              View all courses <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1567427018141-0584cfcbf1b8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Investing Basics" 
                className="h-48 w-full object-cover"
              />
              <div className="p-6">
                <div className="flex items-center mb-2">
                  <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">Beginner</span>
                  <span className="ml-2 text-gray-500 text-sm">8 Modules</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Investing Basics</h3>
                <p className="text-gray-600 mb-4">
                  Learn the fundamentals of investing and build your first portfolio.
                </p>
                <a href="#" className="text-indigo-600 font-medium flex items-center hover:text-indigo-800">
                  Start learning <ChevronRight className="ml-1 h-4 w-4" />
                </a>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Cryptocurrency 101" 
                className="h-48 w-full object-cover"
              />
              <div className="p-6">
                <div className="flex items-center mb-2">
                  <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded-full">Intermediate</span>
                  <span className="ml-2 text-gray-500 text-sm">10 Modules</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Cryptocurrency 101</h3>
                <p className="text-gray-600 mb-4">
                  Understand blockchain technology and how to invest in cryptocurrencies.
                </p>
                <a href="#" className="text-indigo-600 font-medium flex items-center hover:text-indigo-800">
                  Start learning <ChevronRight className="ml-1 h-4 w-4" />
                </a>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Retirement Planning" 
                className="h-48 w-full object-cover"
              />
              <div className="p-6">
                <div className="flex items-center mb-2">
                  <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">Advanced</span>
                  <span className="ml-2 text-gray-500 text-sm">12 Modules</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Retirement Planning</h3>
                <p className="text-gray-600 mb-4">
                  Create a comprehensive retirement strategy for financial freedom.
                </p>
                <a href="#" className="text-indigo-600 font-medium flex items-center hover:text-indigo-800">
                  Start learning <ChevronRight className="ml-1 h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories Preview */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Success Stories</h2>
            <p className="mt-4 text-xl text-gray-600">
              See how our community members achieved their financial goals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="flex items-center mb-6">
                <img 
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80" 
                  alt="Sarah Johnson" 
                  className="h-16 w-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h3 className="text-lg font-semibold">Sarah Johnson</h3>
                  <p className="text-gray-600">Early Retirement at 45</p>
                </div>
              </div>
              <p className="text-gray-700 mb-4">
                "The retirement planning course completely changed my financial trajectory. I was able to optimize my investments and retire 15 years earlier than I had originally planned."
              </p>
              <a href="/success-stories" className="text-indigo-600 font-medium flex items-center hover:text-indigo-800">
                Read full story <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="flex items-center mb-6">
                <img 
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80" 
                  alt="Michael Chen" 
                  className="h-16 w-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h3 className="text-lg font-semibold">Michael Chen</h3>
                  <p className="text-gray-600">Debt-Free in 2 Years</p>
                </div>
              </div>
              <p className="text-gray-700 mb-4">
                "Using the budgeting tools and debt reduction strategies I learned here, I was able to pay off $45,000 in student loans and credit card debt in just 24 months."
              </p>
              <a href="/success-stories" className="text-indigo-600 font-medium flex items-center hover:text-indigo-800">
                Read full story <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-indigo-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
              <p className="text-xl text-indigo-100">
                Subscribe to our newsletter for the latest financial insights, market updates, and exclusive content.
              </p>
            </div>
            <div className="md:w-1/2">
              <form className="flex flex-col sm:flex-row gap-4">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="px-4 py-3 rounded-lg text-gray-900 flex-grow focus:outline-none focus:ring-2 focus:ring-indigo-300"
                />
                <button 
                  type="submit" 
                  className="bg-indigo-800 hover:bg-indigo-900 px-6 py-3 rounded-lg font-semibold transition-colors"
                >
                  Subscribe
                </button>
              </form>
              <p className="text-sm text-indigo-200 mt-3">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;