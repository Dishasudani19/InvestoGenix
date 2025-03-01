// import React from 'react';

// const SuccessStories = () => {
//   return (
//     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
//       <h1 className="text-3xl font-bold text-gray-900 mb-8">Success Stories</h1>
//       <p className="text-lg text-gray-600 mb-12">
//         Read inspiring stories from our community members who have achieved their financial goals.
//       </p>
      
//       <div className="space-y-12">
//         {/* Success Story 1 */}
//         <div className="bg-white rounded-xl shadow-md overflow-hidden">
//           <div className="md:flex">
//             <div className="md:flex-shrink-0">
//               <img 
//                 className="h-48 w-full object-cover md:w-48" 
//                 src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
//                 alt="Sarah Johnson"
//               />
//             </div>
//             <div className="p-8">
//               <div className="uppercase tracking-wide text-sm text-indigo-600 font-semibold">Early Retirement</div>
//               <h2 className="mt-1 text-xl font-semibold text-gray-900">Sarah Johnson: Retired at 45</h2>
//               <p className="mt-2 text-gray-600">
//                 After following our retirement planning course and implementing a strategic investment plan, Sarah was able to retire 15 years earlier than she had originally planned. Her portfolio now generates enough passive income to support her lifestyle and travel dreams.
//               </p>
//               <div className="mt-4">
//                 <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-green-100 text-green-800">
//                   Retirement Planning
//                 </span>
//                 <span className="ml-3 inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
//                   Investment Strategy
//                 </span>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Success Story 2 */}
//         <div className="bg-white rounded-xl shadow-md overflow-hidden">
//           <div className="md:flex">
//             <div className="md:flex-shrink-0">
//               <img 
//                 className="h-48 w-full object-cover md:w-48" 
//                 src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
//                 alt="Michael Chen"
//               />
//             </div>
//             <div className="p-8">
//               <div className="uppercase tracking-wide text-sm text-indigo-600 font-semibold">Debt Freedom</div>
//               <h2 className="mt-1 text-xl font-semibold text-gray-900">Michael Chen: Debt-Free in 2 Years</h2>
//               <p className="mt-2 text-gray-600">
//                 Using our budgeting tools and debt reduction strategies, Michael was able to pay off $45,000 in student loans and credit card debt in just 24 months. He created a strict budget, increased his income with side hustles, and prioritized high-interest debt first.
//               </p>
//               <div className="mt-4">
//                 <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-red-100 text-red-800">
//                   Debt Reduction
//                 </span>
//                 <span className="ml-3 inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-yellow-100 text-yellow-800">
//                   Budgeting
//                 </span>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Success Story 3 */}
//         <div className="bg-white rounded-xl shadow-md overflow-hidden">
//           <div className="md:flex">
//             <div className="md:flex-shrink-0">
//               <img 
//                 className="h-48 w-full object-cover md:w-48" 
//                 src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
//                 alt="Jennifer Taylor"
//               />
//             </div>
//             <div className="p-8">
//               <div className="uppercase tracking-wide text-sm text-indigo-600 font-semibold">Crypto Success</div>
//               <h2 className="mt-1 text-xl font-semibold text-gray-900">Jennifer Taylor: 10x Return on Crypto Investments</h2>
//               <p className="mt-2 text-gray-600">
//                 After taking our Cryptocurrency 101 course, Jennifer developed a diversified crypto portfolio strategy. By understanding blockchain fundamentals and market cycles, she achieved a 10x return on her initial investment over three years.
//               </p>
//               <div className="mt-4">
//                 <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-purple-100 text-purple-800">
//                   Cryptocurrency
//                 </span>
//                 <span className="ml-3 inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800">
//                   Blockchain
//                 </span>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Success Story 4 */}
//         <div className="bg-white rounded-xl shadow-md overflow-hidden">
//           <div className="md:flex">
//             <div className="md:flex-shrink-0">
//               <img 
//                 className="h-48 w-full object-cover md:w-48" 
//                 src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
//                 alt="David Rodriguez"
//               />
//             </div>
//             <div className="p-8">
//               <div className="uppercase tracking-wide text-sm text-indigo-600 font-semibold">Business Success</div>
//               <h2 className="mt-1 text-xl font-semibold text-gray-900">David Rodriguez: From Employee to Entrepreneur</h2>
//               <p className="mt-2 text-gray-600">
//                 David used our financial planning resources to build a 6-month emergency fund before leaving his corporate job. He then launched his own business, which now generates twice his previous income and allows him to work on his own terms.
//               </p>
//               <div className="mt-4">
//                 <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-green-100 text-green-800">
//                   Entrepreneurship
//                 </span>
//                 <span className="ml-3 inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
//                   Financial Planning
//                 </span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SuccessStories;

// import React from 'react';

// const SuccessStories = () => {
//   return (
//     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
//       <h1 className="text-3xl font-bold text-gray-900 mb-8">Success Stories</h1>
//       <p className="text-lg text-gray-600 mb-12">
//         Read inspiring stories from our community members who have achieved their financial goals.
//       </p>
      
//       <div className="space-y-12">
//         {/* Success Story 1 */}
//         <div className="bg-white rounded-xl shadow-md overflow-hidden">
//           <div className="md:flex">
//             <div className="md:flex-shrink-0">
//               <img 
//                 className="h-48 w-full object-cover md:w-48" 
//                 src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
//                 alt="Sarah Johnson"
//               />
//             </div>
//             <div className="p-8">
//               <div className="uppercase tracking-wide text-sm text-indigo-600 font-semibold">Early Retirement</div>
//               <h2 className="mt-1 text-xl font-semibold text-gray-900">Sarah Johnson: Retired at 45</h2>
//               <p className="mt-2 text-gray-600">
//                 After following our retirement planning course and implementing a strategic investment plan, Sarah was able to retire 15 years earlier than she had originally planned. Her portfolio now generates enough passive income to support her lifestyle and travel dreams.
//               </p>
//               <div className="mt-4">
//                 <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-green-100 text-green-800">
//                   Retirement Planning
//                 </span>
//                 <span className="ml-3 inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
//                   Investment Strategy
//                 </span>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Success Story 2 */}
//         <div className="bg-white rounded-xl shadow-md overflow-hidden">
//           <div className="md:flex">
//             <div className="md:flex-shrink-0">
//               <img 
//                 className="h-48 w-full object-cover md:w-48" 
//                 src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
//                 alt="Michael Chen"
//               />
//             </div>
//             <div className="p-8">
//               <div className="uppercase tracking-wide text-sm text-indigo-600 font-semibold">Debt Freedom</div>
//               <h2 className="mt-1 text-xl font-semibold text-gray-900">Michael Chen: Debt-Free in 2 Years</h2>
//               <p className="mt-2 text-gray-600">
//                 Using our budgeting tools and debt reduction strategies, Michael was able to pay off $45,000 in student loans and credit card debt in just 24 months. He created a strict budget, increased his income with side hustles, and prioritized high-interest debt first.
//               </p>
//               <div className="mt-4">
//                 <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-red-100 text-red-800">
//                   Debt Reduction
//                 </span>
//                 <span className="ml-3 inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-yellow-100 text-yellow-800">
//                   Budgeting
//                 </span>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Success Story 3 */}
//         <div className="bg-white rounded-xl shadow-md overflow-hidden">
//           <div className="md:flex">
//             <div className="md:flex-shrink-0">
//               <img 
//                 className="h-48 w-full object-cover md:w-48" 
//                 src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
//                 alt="Jennifer Taylor"
//               />
//             </div>
//             <div className="p-8">
//               <div className="uppercase tracking-wide text-sm text-indigo-600 font-semibold">Crypto Success</div>
//               <h2 className="mt-1 text-xl font-semibold text-gray-900">Jennifer Taylor: 10x Return on Crypto Investments</h2>
//               <p className="mt-2 text-gray-600">
//                 After taking our Cryptocurrency 101 course, Jennifer developed a diversified crypto portfolio strategy. By understanding blockchain fundamentals and market cycles, she achieved a 10x return on her initial investment over three years.
//               </p>
//               <div className="mt-4">
//                 <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-purple-100 text-purple-800">
//                   Cryptocurrency
//                 </span>
//                 <span className="ml-3 inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800">
//                   Blockchain
//                 </span>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Success Story 4 */}
//         <div className="bg-white rounded-xl shadow-md overflow-hidden">
//           <div className="md:flex">
//             <div className="md:flex-shrink-0">
//               <img 
//                 className="h-48 w-full object-cover md:w-48" 
//                 src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
//                 alt="David Rodriguez"
//               />
//             </div>
//             <div className="p-8">
//               <div className="uppercase tracking-wide text-sm text-indigo-600 font-semibold">Business Success</div>
//               <h2 className="mt-1 text-xl font-semibold text-gray-900">David Rodriguez: From Employee to Entrepreneur</h2>
//               <p className="mt-2 text-gray-600">
//                 David used our financial planning resources to build a 6-month emergency fund before leaving his corporate job. He then launched his own business, which now generates twice his previous income and allows him to work on his own terms.
//               </p>
//               <div className="mt-4">
//                 <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-green-100 text-green-800">
//                   Entrepreneurship
//                 </span>
//                 <span className="ml-3 inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
//                   Financial Planning
//                 </span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SuccessStories;

import React from 'react';

const SuccessStories = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Success Stories</h1>
      <p className="text-lg text-gray-600 mb-12">
        Discover inspiring stories of individuals who became millionaires through smart investments in shares, gold, and cryptocurrency, with a focus on success stories from India.
      </p>

      <div className="space-y-12">
        {/* Success Story 1 */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <div className="md:flex">
            <div className="md:flex-shrink-0">
              <img
                className="h-48 w-full object-cover md:w-48"
                src="https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q="
                alt="Rakesh Jhunjhunwala"
              />
            </div>
            <div className="p-8">
              <div className="uppercase tracking-wide text-sm text-indigo-600 font-semibold">Stock Market Legend</div>
              <h2 className="mt-1 text-xl font-semibold text-gray-900">Rakesh Jhunjhunwala: The Big Bull of India</h2>
              <p className="mt-2 text-gray-600">
                Rakesh Jhunjhunwala, often referred to as India's Warren Buffett, started with just $100 and turned it into billions through astute stock market investments. His long-term investment strategies and keen eye for potential have made him a legendary figure in the Indian stock market.
              </p>
              <div className="mt-4">
                <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-green-100 text-green-800">
                  Stock Market
                </span>
                <span className="ml-3 inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                  Long-Term Investing
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
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
                alt="Azim Premji"
              />
            </div>
            <div className="p-8">
              <div className="uppercase tracking-wide text-sm text-indigo-600 font-semibold">Tech Investment Tycoon</div>
              <h2 className="mt-1 text-xl font-semibold text-gray-900">Azim Premji: Tech Investment Success</h2>
              <p className="mt-2 text-gray-600">
                Azim Premji, the founder of Wipro, has made significant investments in the tech sector. His strategic investments in emerging technologies and startups have contributed to his immense wealth and influence in the Indian tech industry.
              </p>
              <div className="mt-4">
                <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-purple-100 text-purple-800">
                  Tech Investment
                </span>
                <span className="ml-3 inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-gray-100 text-gray-800">
                  Startup Funding
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
                src="https://images.unsplash.com/photo-1606868306217-dbf5046868d2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
                alt="Anand Mahindra"
              />
            </div>
            <div className="p-8">
              <div className="uppercase tracking-wide text-sm text-indigo-600 font-semibold">Diversified Investment Success</div>
              <h2 className="mt-1 text-xl font-semibold text-gray-900">Anand Mahindra: Diversified Portfolio</h2>
              <p className="mt-2 text-gray-600">
                Anand Mahindra, Chairman of the Mahindra Group, has built a diversified investment portfolio spanning various sectors. His investments in sustainable technologies and innovative startups have yielded substantial returns and solidified his position as a leading Indian investor.
              </p>
              <div className="mt-4">
                <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-green-100 text-green-800">
                  Diversification
                </span>
                <span className="ml-3 inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                  Sustainable Investing
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
                src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
                alt="Radhakishan Damani"
              />
            </div>
            <div className="p-8">
              <div className="uppercase tracking-wide text-sm text-indigo-600 font-semibold">Retail Investment Guru</div>
              <h2 className="mt-1 text-xl font-semibold text-gray-900">Radhakishan Damani: Retail Tycoon</h2>
              <p className="mt-2 text-gray-600">
                Radhakishan Damani, the founder of DMart, has made significant investments in the retail sector. His strategic approach to expanding DMart across India has turned him into a billionaire and a prominent figure in the Indian retail industry.
              </p>
              <div className="mt-4">
                <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-teal-100 text-teal-800">
                  Retail Investment
                </span>
                <span className="ml-3 inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-gray-100 text-gray-800">
                  Strategic Expansion
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Success Story 5 */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <div className="md:flex">
            <div className="md:flex-shrink-0">
              <img
                className="h-48 w-full object-cover md:w-48"
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
                alt="Mukesh Ambani"
              />
            </div>
            <div className="p-8">
              <div className="uppercase tracking-wide text-sm text-indigo-600 font-semibold">Energy and Telecom Tycoon</div>
              <h2 className="mt-1 text-xl font-semibold text-gray-900">Mukesh Ambani: Reliance Industries</h2>
              <p className="mt-2 text-gray-600">
                Mukesh Ambani, Chairman of Reliance Industries, has made strategic investments in the energy and telecom sectors. His visionary leadership has transformed Reliance into one of the world's most valuable companies, making him one of the wealthiest individuals globally.
              </p>
              <div className="mt-4">
                <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-purple-100 text-purple-800">
                  Energy Investment
                </span>
                <span className="ml-3 inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-gray-100 text-gray-800">
                  Telecom Growth
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Success Story 6 */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <div className="md:flex">
            <div className="md:flex-shrink-0">
              <img
                className="h-48 w-full object-cover md:w-48"
                src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
                alt="Nithin Kamath"
              />
            </div>
            <div className="p-8">
              <div className="uppercase tracking-wide text-sm text-indigo-600 font-semibold">Fintech Pioneer</div>
              <h2 className="mt-1 text-xl font-semibold text-gray-900">Nithin Kamath: Zerodha Success Story</h2>
              <p className="mt-2 text-gray-600">
                Nithin Kamath, the founder of Zerodha, revolutionized the Indian stockbroking industry by introducing low-cost trading platforms. His innovative approach has made Zerodha one of the largest stockbrokers in India, contributing to his significant wealth.
              </p>
              <div className="mt-4">
                <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-green-100 text-green-800">
                  Fintech
                </span>
                <span className="ml-3 inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                  Stockbroking
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
