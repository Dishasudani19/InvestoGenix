// import React from 'react';
// import { Calendar, Clock } from 'lucide-react';

// const CurrentNews = () => {
//   return (
//     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
//       <h1 className="text-3xl font-bold text-gray-900 mb-8">Current Financial News</h1>
//       <p className="text-lg text-gray-600 mb-12">
//         Stay updated with the latest news and developments in the financial world.
//       </p>
      
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//         {/* News Article 1 */}
//         <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
//           <img 
//             className="h-48 w-full object-cover" 
//             src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
//             alt="Federal Reserve"
//           />
//           <div className="p-6">
//             <div className="flex items-center text-sm text-gray-500 mb-2">
//               <Calendar className="h-4 w-4 mr-1" />
//               <span>May 15, 2025</span>
//               <Clock className="h-4 w-4 ml-4 mr-1" />
//               <span>5 min read</span>
//             </div>
//             <h2 className="text-xl font-semibold mb-2">Federal Reserve Announces New Interest Rate Policy</h2>
//             <p className="text-gray-600 mb-4">
//               The Federal Reserve has announced a significant shift in its approach to managing inflation and interest rates, which could impact borrowers and investors.
//             </p>
//             <a href="#" className="text-indigo-600 font-medium hover:text-indigo-800">
//               Read more
//             </a>
//           </div>
//         </div>

//         {/* News Article 2 */}
//         <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
//           <img 
//             className="h-48 w-full object-cover" 
//             src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
//             alt="Stock Market"
//           />
//           <div className="p-6">
//             <div className="flex items-center text-sm text-gray-500 mb-2">
//               <Calendar className="h-4 w-4 mr-1" />
//               <span>May 14, 2025</span>
//               <Clock className="h-4 w-4 ml-4 mr-1" />
//               <span>4 min read</span>
//             </div>
//             <h2 className="text-xl font-semibold mb-2">Global Markets Reach New Highs Amid Economic Recovery</h2>
//             <p className="text-gray-600 mb-4">
//               Stock markets around the world have reached record highs as economic data suggests a stronger than expected recovery from recent challenges.
//             </p>
//             <a href="#" className="text-indigo-600 font-medium hover:text-indigo-800">
//               Read more
//             </a>
//           </div>
//         </div>

//         {/* News Article 3 */}
//         <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
//           <img 
//             className="h-48 w-full object-cover" 
//             src="https://images.unsplash.com/photo-1518186285589-2f7649de83e0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
//             alt="Real Estate"
//           />
//           <div className="p-6">
//             <div className="flex items-center text-sm text-gray-500 mb-2">
//               <Calendar className="h-4 w-4 mr-1" />
//               <span>May 12, 2025</span>
//               <Clock className="h-4 w-4 ml-4 mr-1" />
//               <span>6 min read</span>
//             </div>
//             <h2 className="text-xl font-semibold mb-2">Housing Market Shows Signs of Cooling After Record Growth</h2>
//             <p className="text-gray-600 mb-4">
//               After years of rapid price increases, the housing market is showing signs of stabilization with inventory rising and price growth slowing.
//             </p>
//             <a href="#" className="text-indigo-600 font-medium hover:text-indigo-800">
//               Read more
//             </a>
//           </div>
//         </div>

//         {/* News Article 4 */}
//         <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
//           <img 
//             className="h-48 w-full object-cover" 
//             src="https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
//             alt="Cryptocurrency"
//           />
//           <div className="p-6">
//             <div className="flex items-center text-sm text-gray-500 mb-2">
//               <Calendar className="h-4 w-4 mr-1" />
//               <span>May 10, 2025</span>
//               <Clock className="h-4 w-4 ml-4 mr-1" />
//               <span>3 min read</span>
//             </div>
//             <h2 className="text-xl font-semibold mb-2">Major Financial Institutions Adopt Cryptocurrency Services</h2>
//             <p className="text-gray-600 mb-4">
//               Several major banks and financial institutions have announced new cryptocurrency custody and trading services for their clients.
//             </p>
//             <a href="#" className="text-indigo-600 font-medium hover:text-indigo-800">
//               Read more
//             </a>
//           </div>
//         </div>

//         {/* News Article 5 */}
//         <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
//           <img 
//             className="h-48 w-full object-cover" 
//             src="https://images.unsplash.com/photo-1607944024060-0450380ddd33?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
//             alt="Retirement"
//           />
//           <div className="p-6">
//             <div className="flex items-center text-sm text-gray-500 mb-2">
//               <Calendar className="h-4 w-4 mr-1" />
//               <span>May 8, 2025</span>
//               <Clock className="h-4 w-4 ml-4 mr-1" />
//               <span>7 min read</span>
//             </div>
//             <h2 className="text-xl font-semibold mb-2">New Legislation Could Change Retirement Savings Rules</h2>
//             <p className="text-gray-600 mb-4">
//               Proposed legislation aims to expand retirement savings options and provide tax incentives for both employers and employees.
//             </p>
//             <a href="#" className="text-indigo-600 font-medium hover:text-indigo-800">
//               Read more
//             </a>
//           </div>
//         </div>

//         {/* News Article 6 */}
//         <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
//           <img 
//             className="h-48 w-full object-cover" 
//             src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
//             alt="Financial Technology"
//           />
//           <div className="p-6">
//             <div className="flex items-center text-sm text-gray-500 mb-2">
//               <Calendar className="h-4 w-4 mr-1" />
//               <span>May 5, 2025</span>
//               <Clock className="h-4 w-4 ml-4 mr-1" />
//               <span>5 min read</span>
//             </div>
//             <h2 className="text-xl font-semibold mb-2">Fintech Innovations Reshaping Personal Finance Management</h2>
//             <p className="text-gray-600 mb-4">
//               New financial technology solutions are making it easier for consumers to manage budgets, invest, and plan for financial goals.
//             </p>
//             <a href="#" className="text-indigo-600 font-medium hover:text-indigo-800">
//               Read more
//             </a>
//           </div>
//         </div>
//       </div>

//       <div className="mt-12 flex justify-center">
//         <button className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors">
//           Load More News
//         </button>
//       </div>
//     </div>
//   );
// };

// export default CurrentNews;


// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { Calendar, Clock } from 'lucide-react';

// const CurrentNews = () => {
//   const [news, setNews] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchNews = async () => {
//       try {
//         const response = await axios.get(
//           'https://newsapi.org/v2/top-headlines?apiKey=c83afa70861142bca95abc856fc48b5a&q=stock'
//         );
//         setNews(response.data.articles);
//         setLoading(false);
//       } catch (error) {
//         setError('Error fetching news data');
//         setLoading(false);
//       }
//     };

//     fetchNews();
//   }, []);

//   if (loading) {
//     return <div className="text-center text-gray-600">Loading news...</div>;
//   }

//   if (error) {
//     return <div className="text-center text-red-600">{error}</div>;
//   }

//   return (
//     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
//       <h1 className="text-3xl font-bold text-gray-900 mb-8">Current Financial News</h1>
//       <p className="text-lg text-gray-600 mb-12">
//         Stay updated with the latest news and developments in the financial world.
//       </p>

//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//         {news.map((article, index) => (
//           <div
//             key={index}
//             className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
//           >
//             {article.urlToImage && (
//               <img
//                 className="h-48 w-full object-cover"
//                 src={article.urlToImage}
//                 alt={article.title}
//               />
//             )}
//             <div className="p-6">
//               <div className="flex items-center text-sm text-gray-500 mb-2">
//                 <Calendar className="h-4 w-4 mr-1" />
//                 <span>{new Date(article.publishedAt).toLocaleDateString()}</span>
//                 <Clock className="h-4 w-4 ml-4 mr-1" />
//                 <span>3 min read</span> {/* Assuming a constant read time */}
//               </div>
//               <h2 className="text-xl font-semibold mb-2">{article.title}</h2>
//               <p className="text-gray-600 mb-4">{article.description}</p>
//               <a
//                 href={article.url}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-indigo-600 font-medium hover:text-indigo-800"
//               >
//                 Read more
//               </a>
//             </div>
//           </div>
//         ))}
//       </div>

//       <div className="mt-12 flex justify-center">
//         <button className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors">
//           Load More News
//         </button>
//       </div>
//     </div>
//   );
// };

// export default CurrentNews;

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Calendar, Clock } from 'lucide-react';
import '../assets/css/currentnews.css'; // Import the CSS file

const CurrentNews = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [category, setCategory] = useState('stock');

  const fetchNews = async (category) => {
    try {
      const response = await axios.get(
        `https://newsapi.org/v2/top-headlines?apiKey=c83afa70861142bca95abc856fc48b5a&q=${category}`
        // `http://api.mediastack.com/v1/news?access_key=ec4bf60b73c561ae74efea0e6534822b&keywords=stock&countries=us,gb,de`
      );
      setNews(response.data.articles);
      setLoading(false);
    } catch (error) {
      setError('Error fetching news data');
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNews(category);
  }, [category]);

  if (loading) {
    return <div className="loading-message">Loading news...</div>;
  }

  if (error) {
    return <div className="error-message">{error}</div>;
  }

  return (
    <div className="news-container">
      <h1>Current Financial News</h1>
      <p className="description">
        Stay updated with the latest news and developments in the financial world.
      </p>

      <div className="category-filters">
        <button
          onClick={() => setCategory('stock')}
          className={`category-button ${
            category === 'stock' ? 'category-button-active' : 'category-button-inactive'
          }`}
        >
          Stock News
        </button>
        <button
          onClick={() => setCategory('crypto')}
          className={`category-button ${
            category === 'crypto' ? 'category-button-active' : 'category-button-inactive'
          }`}
        >
          Crypto News
        </button>
        <button
          onClick={() => setCategory('gold')}
          className={`category-button ${
            category === 'gold' ? 'category-button-active' : 'category-button-inactive'
          }`}
        >
          Gold News
        </button>
      </div>

      <div className="news-grid">
        {news.map((article, index) => (
          <div key={index} className="news-card">
            {article.urlToImage && (
              <img
                className="news-image"
                src={article.urlToImage}
                alt={article.title}
              />
            )}
            <div className="card-content">
              <div className="card-meta">
                <Calendar className="meta-icon" />
                <span>{new Date(article.publishedAt).toLocaleDateString()}</span>
                <span className="meta-divider"></span>
                <Clock className="meta-icon" />
                <span>3 min read</span>
              </div>
              <h2 className="card-title">{article.title}</h2>
              <p className="card-description">{article.description}</p>
              <a
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="read-more"
              >
                Read more
              </a>
            </div>
          </div>
        ))}
      </div>

      <div className="load-more-container">
        <button className="load-more-button">
          Load More News
        </button>
      </div>
    </div>
  );
};

export default CurrentNews;