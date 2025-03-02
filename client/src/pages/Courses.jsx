import React from 'react';
import { BookOpen, TrendingUp, PieChart, DollarSign, ArrowRight } from 'lucide-react';

const Courses = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Recommended Courses</h1>
      <p className="text-lg text-gray-600 mb-12">
        Explore a variety of financial education courses available on third-party platforms.
      </p>

      <div className="space-y-12 ">
        {/* Course 1 */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <div className="md:flex">
            <div className="md:flex-shrink-0">
              <img
                className="h-48 w-full object-cover md:w-48"
                src="src/assets/Images/upgrad.png"
                alt="Financial Basics"
              />
            </div>
            <div className="p-8">
              <div className="uppercase tracking-wide text-sm text-indigo-600 font-semibold">Financial Education</div>
              <h2 className="mt-1 text-xl font-semibold text-gray-900">Financial Basics</h2>
              <p className="mt-2 text-gray-600">
                Learn the fundamentals of personal finance, including budgeting, saving, and basic investment strategies.
              </p>
              <div className="mt-4">
                <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-green-100 text-green-800">
                  Personal Finance
                </span>
                <span className="ml-3 inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                  Budgeting
                </span>
              </div>
              <a
                href="https://www.upgrad.com/certification-program-in-financial-modelling-and-analysis-lpv1/?utm_source=google&utm_medium=search&utm_campaign=Google_Search_LeadGen_FMA_PanIndia_25-34_LP&utm_content=finance_course&utm_term=finance%20course&gad_source=1&gclid=CjwKCAiAt4C-BhBcEiwA8Kp0CUHzJkaBH-Hx3NqbooluSLQ2wBtqlCVe9LfvWQQXnQMYjdhireqRYBoCEHoQAvD_BwE"
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-600 font-medium flex items-center hover:text-indigo-800 mt-4"
              >
                Learn more <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Course 2 */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <div className="md:flex">
            <div className="md:flex-shrink-0">
              <img
                className="h-48 w-full object-cover md:w-48"
                src="src/assets/Images/courseera.png"
                alt="Investment Strategies"
              />
            </div>
            <div className="p-8">
              <div className="uppercase tracking-wide text-sm text-indigo-600 font-semibold">Advanced Investing</div>
              <h2 className="mt-1 text-xl font-semibold text-gray-900">Investment Strategies</h2>
              <p className="mt-2 text-gray-600">
                Dive into advanced investment strategies, including stock market analysis, portfolio management, and risk assessment.
              </p>
              <div className="mt-4">
                <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-purple-100 text-purple-800">
                  Stock Market
                </span>
                <span className="ml-3 inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-gray-100 text-gray-800">
                  Portfolio Management
                </span>
              </div>
              <a
                href="https://www.coursera.org/courses?query=investment"
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-600 font-medium flex items-center hover:text-indigo-800 mt-4"
              >
                Learn more <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Course 3 */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <div className="md:flex">
            <div className="md:flex-shrink-0">
              <img
                className="h-48 w-full object-cover md:w-48"
                src="https://images.unsplash.com/photo-1606868306217-dbf5046868d2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
                alt="Cryptocurrency Mastery"
              />
            </div>
            <div className="p-8">
              <div className="uppercase tracking-wide text-sm text-indigo-600 font-semibold">Crypto Education</div>
              <h2 className="mt-1 text-xl font-semibold text-gray-900">Cryptocurrency Mastery</h2>
              <p className="mt-2 text-gray-600">
                Understand the world of cryptocurrencies, blockchain technology, and how to invest in digital assets safely and effectively.
              </p>
              <div className="mt-4">
                <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-purple-100 text-purple-800">
                  Cryptocurrency
                </span>
                <span className="ml-3 inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800">
                  Blockchain
                </span>
              </div>
              <a
                href="https://www.udemy.com/course/the-complete-cryptocurrency-course-more-than-5-courses-in-1/?utm_source=adwords&utm_medium=udemyads&utm_campaign=Search_Keyword_Gamma_NonP_la.EN_cc.India&campaigntype=Search&portfolio=India&language=EN&product=Course&test=&audience=Keyword&topic=Cryptocurrency&priority=Gamma&utm_content=deal4584&utm_term=_._ag_164462610441_._ad_696203281659_._kw_learn+crypto+trading_._de_c_._dm__._pl__._ti_kwd-390027191725_._li_9152112_._pd__._&matchtype=b&gad_source=1&gclid=EAIaIQobChMIsuqZ6NvoiwMVXcoWBR07US2NEAAYASAAEgJnRfD_BwE&couponCode=IND21PM"
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-600 font-medium flex items-center hover:text-indigo-800 mt-4"
              >
                Learn more <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Course 4 */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <div className="md:flex">
            <div className="md:flex-shrink-0">
              <img
                className="h-48 w-full object-cover md:w-48"
                src="src/assets/Images/udemy.png"
                alt="Retirement Planning"
              />
            </div>
            <div className="p-8">
              <div className="uppercase tracking-wide text-sm text-indigo-600 font-semibold">Retirement Planning</div>
              <h2 className="mt-1 text-xl font-semibold text-gray-900">Retirement Planning</h2>
              <p className="mt-2 text-gray-600">
                Create a comprehensive retirement plan that ensures financial security and freedom in your golden years.
              </p>
              <div className="mt-4">
                <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-teal-100 text-teal-800">
                  Retirement
                </span>
                <span className="ml-3 inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-gray-100 text-gray-800">
                  Financial Security
                </span>
              </div>
              <a
                href="https://www.udemy.com/topic/retirement-planning/?utm_source=adwords&utm_medium=udemyads&utm_campaign=Search_DSA_Beta_Prof_la.EN_cc.India&campaigntype=Search&portfolio=India&language=EN&product=Course&test=&audience=DSA&topic=&priority=Beta&utm_content=deal4584&utm_term=_._ag_160270535905_._ad_696202838355_._kw__._de_c_._dm__._pl__._ti_dsa-1677053929368_._li_9152112_._pd__._&matchtype=&gad_source=1&gclid=EAIaIQobChMIkaCCg9zoiwMVkaJmAh3XHTOoEAAYASAAEgKAJfD_BwE"
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-600 font-medium flex items-center hover:text-indigo-800 mt-4"
              >
                Learn more <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;
