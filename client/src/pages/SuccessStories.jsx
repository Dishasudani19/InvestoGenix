import React from 'react';

const SuccessStories = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Success Stories</h1>
      <p className="text-lg text-gray-600 mb-12">
        Read inspiring stories from our community members who have achieved their financial goals.
      </p>
      
      <div className="space-y-12">
        {/* Success Story 1 */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <div className="md:flex">
            <div className="md:flex-shrink-0">
              <img 
                className="h-48 w-full object-cover md:w-48" 
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
                alt="Sarah Johnson"
              />
            </div>
            <div className="p-8">
              <div className="uppercase tracking-wide text-sm text-indigo-600 font-semibold">Early Retirement</div>
              <h2 className="mt-1 text-xl font-semibold text-gray-900">Sarah Johnson: Retired at 45</h2>
              <p className="mt-2 text-gray-600">
                After following our retirement planning course and implementing a strategic investment plan, Sarah was able to retire 15 years earlier than she had originally planned. Her portfolio now generates enough passive income to support her lifestyle and travel dreams.
              </p>
              <div className="mt-4">
                <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-green-100 text-green-800">
                  Retirement Planning
                </span>
                <span className="ml-3 inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                  Investment Strategy
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Success Story 2 */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <div className="md:flex">
            <div className="md:flex-shrink-0">
              <img 
                className="h-48 w-full object-cover md:w-48" 
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
                alt="Michael Chen"
              />
            </div>
            <div className="p-8">
              <div className="uppercase tracking-wide text-sm text-indigo-600 font-semibold">Debt Freedom</div>
              <h2 className="mt-1 text-xl font-semibold text-gray-900">Michael Chen: Debt-Free in 2 Years</h2>
              <p className="mt-2 text-gray-600">
                Using our budgeting tools and debt reduction strategies, Michael was able to pay off $45,000 in student loans and credit card debt in just 24 months. He created a strict budget, increased his income with side hustles, and prioritized high-interest debt first.
              </p>
              <div className="mt-4">
                <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-red-100 text-red-800">
                  Debt Reduction
                </span>
                <span className="ml-3 inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-yellow-100 text-yellow-800">
                  Budgeting
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Success Story 3 */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <div className="md:flex">
            <div className="md:flex-shrink-0">
              <img 
                className="h-48 w-full object-cover md:w-48" 
                src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
                alt="Jennifer Taylor"
              />
            </div>
            <div className="p-8">
              <div className="uppercase tracking-wide text-sm text-indigo-600 font-semibold">Crypto Success</div>
              <h2 className="mt-1 text-xl font-semibold text-gray-900">Jennifer Taylor: 10x Return on Crypto Investments</h2>
              <p className="mt-2 text-gray-600">
                After taking our Cryptocurrency 101 course, Jennifer developed a diversified crypto portfolio strategy. By understanding blockchain fundamentals and market cycles, she achieved a 10x return on her initial investment over three years.
              </p>
              <div className="mt-4">
                <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-purple-100 text-purple-800">
                  Cryptocurrency
                </span>
                <span className="ml-3 inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800">
                  Blockchain
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Success Story 4 */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <div className="md:flex">
            <div className="md:flex-shrink-0">
              <img 
                className="h-48 w-full object-cover md:w-48" 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
                alt="David Rodriguez"
              />
            </div>
            <div className="p-8">
              <div className="uppercase tracking-wide text-sm text-indigo-600 font-semibold">Business Success</div>
              <h2 className="mt-1 text-xl font-semibold text-gray-900">David Rodriguez: From Employee to Entrepreneur</h2>
              <p className="mt-2 text-gray-600">
                David used our financial planning resources to build a 6-month emergency fund before leaving his corporate job. He then launched his own business, which now generates twice his previous income and allows him to work on his own terms.
              </p>
              <div className="mt-4">
                <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-green-100 text-green-800">
                  Entrepreneurship
                </span>
                <span className="ml-3 inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                  Financial Planning
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessStories;