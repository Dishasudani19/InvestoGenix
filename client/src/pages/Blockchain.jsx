import React from 'react';
import { Database, Lock, Globe, Code, Server, ArrowRight } from 'lucide-react';

const Blockchain = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Blockchain Technology</h1>
      <p className="text-lg text-gray-600 mb-12">
        Understand the revolutionary technology behind cryptocurrencies and its applications beyond digital currencies.
      </p>
      
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-cyan-500 rounded-xl text-white p-8 mb-12">
        <div className="md:flex items-center">
          <div className="md:w-2/3 mb-6 md:mb-0 md:pr-8">
            <h2 className="text-2xl font-bold mb-4">What is Blockchain?</h2>
            <p className="text-lg mb-6">
              Blockchain is a distributed, decentralized, public ledger that records transactions across many computers so that any involved record cannot be altered retroactively, without the alteration of all subsequent blocks.
            </p>
            <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Explore Blockchain
            </button>
          </div>
          <div className="md:w-1/3">
            <img 
              src="https://images.unsplash.com/photo-1639762681057-408e52192e55?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
              alt="Blockchain Technology" 
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
      
      {/* Key Features */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">Key Features of Blockchain</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-md">
            <div className="bg-blue-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
              <Database className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Decentralization</h3>
            <p className="text-gray-600">
              Blockchain operates on a peer-to-peer network without the need for central authorities or intermediaries to validate transactions.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-md">
            <div className="bg-blue-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
              <Lock className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Security</h3>
            <p className="text-gray-600">
              Cryptographic principles ensure that once data is recorded in a block, it cannot be altered without changing all subsequent blocks and network consensus.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-md">
            <div className="bg-blue-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
              <Globe className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Transparency</h3>
            <p className="text-gray-600">
              All transactions on a public blockchain are visible to anyone with access to the network, creating an unprecedented level of transparency.
            </p>
          </div>
        </div>
      </div>
      
      {/* How Blockchain Works */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">How Blockchain Works</h2>
        <div className="bg-white p-8 rounded-xl shadow-md">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 p-4 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">1</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Transaction Request</h3>
              <p className="text-gray-600">
                A transaction is requested and authenticated using cryptographic keys.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-100 p-4 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">2</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Block Creation</h3>
              <p className="text-gray-600">
                The transaction is combined with others to create a new block of data.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-100 p-4 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">3</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Verification</h3>
              <p className="text-gray-600">
                The network verifies the transaction through consensus mechanisms like Proof of Work or Proof of Stake.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-100 p-4 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">4</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Block Addition</h3>
              <p className="text-gray-600">
                The verified block is added to the existing blockchain, creating a permanent and unalterable record.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Blockchain Applications */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">Applications Beyond Cryptocurrency</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="p-6">
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <Code className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold">Smart Contracts</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Self-executing contracts with the terms directly written into code. They automatically enforce and execute agreements when predetermined conditions are met.
              </p>
              <ul className="list-disc list-inside text-gray-600 mb-4">
                <li>Automated legal agreements</li>
                <li>Decentralized finance (DeFi) applications</li>
                <li>Supply chain management</li>
              </ul>
              <a href="#" className="text-blue-600 font-medium hover:text-blue-800">
                Learn more about smart contracts
              </a>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="p-6">
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <Server className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold">Supply Chain Tracking</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Blockchain provides transparent and immutable records of products as they move through the supply chain, from manufacturer to consumer.
              </p>
              <ul className="list-disc list-inside text-gray-600 mb-4">
                <li>Product authenticity verification</li>
                <li>Ethical sourcing confirmation</li>
                <li>Efficient inventory management</li>
              </ul>
              <a href="#" className="text-blue-600 font-medium hover:text-blue-800">
                Explore supply chain applications
              </a>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="p-6">
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <Lock className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold">Digital Identity</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Blockchain can provide secure, self-sovereign digital identities that give individuals control over their personal data.
              </p>
              <ul className="list-disc list-inside text-gray-600 mb-4">
                <li>Secure identity verification</li>
                <li>Privacy-preserving authentication</li>
                <li>Reduced identity theft</li>
              </ul>
              <a href="#" className="text-blue-600 font-medium hover:text-blue-800">
                Discover digital identity solutions
              </a>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="p-6">
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <Globe className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold">Voting Systems</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Blockchain can create transparent, tamper-proof voting systems that maintain voter privacy while ensuring accurate vote counting.
              </p>
              <ul className="list-disc list-inside text-gray-600 mb-4">
                <li>Increased election transparency</li>
                <li>Reduced fraud potential</li>
                <li>Improved accessibility</li>
              </ul>
              <a href="#" className="text-blue-600 font-medium hover:text-blue-800">
                Learn about blockchain voting
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Learning Resources */}
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-8">Blockchain Learning Resources</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold mb-4">Blockchain Fundamentals</h3>
            <p className="text-gray-600 mb-4">
              Our beginner-friendly course covers the core concepts of blockchain technology and its potential applications.
            </p>
            <a href="#" className="text-blue-600 font-medium flex items-center hover:text-blue-800">
              Start learning <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold mb-4">Smart Contract Development</h3>
            <p className="text-gray-600 mb-4">
              Learn how to write and deploy smart contracts on popular blockchain platforms like Ethereum.
            </p>
            <a href="#" className="text-blue-600 font-medium flex items-center hover:text-blue-800">
              Explore development <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold mb-4">Blockchain for Business</h3>
            <p className="text-gray-600 mb-4">
              Discover how blockchain technology can transform business operations and create new opportunities.
            </p>
            <a href="#" className="text-blue-600 font-medium flex items-center hover:text-blue-800">
              Learn business applications <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blockchain;