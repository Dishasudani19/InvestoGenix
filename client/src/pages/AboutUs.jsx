import React from 'react';
import { Info, Users, Globe, ArrowRight } from 'lucide-react';

const AboutUs = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 ">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">About Us</h1>
      <p className="text-lg text-gray-600 mb-12">
        Welcome to Investogenix. We are dedicated to empowering individuals with financial education and investment strategies.
      </p>

      {/* Mission Section */}
      <div className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-xl text-white p-8 mb-12">
        <div className="md:flex items-center">
          <div className="md:w-2/3 mb-6 md:mb-0 md:pr-8">
            <h2 className="text-2xl font-bold mb-4 text-blue-300">Our Mission</h2>
            <p className="text-lg mb-6 text-blue-200">
              Our mission is to provide accessible and comprehensive financial education to help individuals make informed investment decisions. We strive to demystify the world of finance and empower our users to achieve financial independence.
            </p>
          </div>
          <div className="md:w-1/3">
            <img
              src="https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              alt="Mission"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">Our Core Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-md">
            <div className="bg-indigo-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
              <Info className="h-8 w-8 text-indigo-600" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Education</h3>
            <p className="text-gray-600">
              We believe in the power of knowledge to transform lives. Our educational resources are designed to be accessible and actionable.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md">
            <div className="bg-indigo-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
              <Users className="h-8 w-8 text-indigo-600" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Community</h3>
            <p className="text-gray-600">
              We foster a supportive community where individuals can learn, share, and grow together.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md">
            <div className="bg-indigo-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
              <Globe className="h-8 w-8 text-indigo-600" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Innovation</h3>
            <p className="text-gray-600">
              We continuously innovate to provide cutting-edge tools and resources that meet the evolving needs of our users.
            </p>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">Meet Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <img
              className="h-48 w-full object-cover"
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              alt="Team Member 1"
            />
            <div className="p-6">
              <h3 className="text-lg font-semibold mb-2">John Doe</h3>
              <p className="text-gray-600 mb-4">Founder & CEO</p>
              <p className="text-gray-600 mb-4">John leads the vision and strategy at Investogenix, driving innovation in financial education.</p>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <img
              className="h-48 w-full object-cover"
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              alt="Team Member 2"
            />
            <div className="p-6">
              <h3 className="text-lg font-semibold mb-2">Jane Smith</h3>
              <p className="text-gray-600 mb-4">Chief Education Officer</p>
              <p className="text-gray-600 mb-4">Jane oversees the development of educational content, ensuring it is engaging and informative.</p>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <img
              className="h-48 w-full object-cover"
              src="https://images.unsplash.com/photo-1506794778202-cad84938f9d1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              alt="Team Member 3"
            />
            <div className="p-6">
              <h3 className="text-lg font-semibold mb-2">Emily Johnson</h3>
              <p className="text-gray-600 mb-4">Community Manager</p>
              <p className="text-gray-600 mb-4">Emily fosters our community, facilitating meaningful connections and supporting our members.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Join Us Section */}
      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-lg mb-16">
        <div className="flex">
          <div className="flex-shrink-0">
            <Info className="h-6 w-6 text-yellow-600" />
          </div>
          <div className="ml-3">
            <h3 className="text-lg font-medium text-yellow-800">Join Our Community</h3>
            <p className="mt-2 text-yellow-700">
              Become a part of our growing community and stay updated with the latest in financial education and investment strategies.
            </p>
            <a href="#" className="text-indigo-600 font-medium flex items-center hover:text-indigo-800 mt-4">
              Join Now <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
