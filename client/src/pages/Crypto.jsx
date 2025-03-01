import React from 'react';
import { TrendingUp, DollarSign, Info, AlertCircle, ArrowRight } from 'lucide-react';

const Crypto = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Cryptocurrency Education</h1>
      <p className="text-lg text-gray-600 mb-12">
        Learn about cryptocurrencies, blockchain technology, and how to invest safely in digital assets.
      </p>
      
      {/* Intro Section */}
      <div className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-xl text-white p-8 mb-12">
        <div className="md:flex items-center">
          <div className="md:w-2/3 mb-6 md:mb-0 md:pr-8">
            <h2 className="text-2xl font-bold mb-4">New to Cryptocurrency?</h2>
            <p className="text-lg mb-6">
              Cryptocurrencies are digital or virtual currencies that use cryptography for security and operate on decentralized networks based on blockchain technology.
            </p>
            <button className="bg-white text-indigo-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Start Learning
            </button>
          </div>
          <div className="md:w-1/3">
            <img 
              src="https://images.unsplash.com/photo-1621761191319-c6fb62004040?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
              alt="Cryptocurrency" 
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
      
      {/* Key Concepts */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">Key Cryptocurrency Concepts</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-md">
            <div className="bg-indigo-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
              <DollarSign className="h-8 w-8 text-indigo-600" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Digital Currency</h3>
            <p className="text-gray-600">
              Cryptocurrencies are digital assets designed to work as a medium of exchange using cryptography to secure transactions.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-md">
            <div className="bg-indigo-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
              <TrendingUp className="h-8 w-8 text-indigo-600" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Market Volatility</h3>
            <p className="text-gray-600">
              Cryptocurrency markets are highly volatile with prices that can fluctuate dramatically in short periods of time.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-md">
            <div className="bg-indigo-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
              <Info className="h-8 w-8 text-indigo-600" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Decentralization</h3>
            <p className="text-gray-600">
              Most cryptocurrencies operate on decentralized networks using blockchain technology—a distributed ledger enforced by a network of computers.
            </p>
          </div>
        </div>
      </div>
      
      {/* Popular Cryptocurrencies */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">Popular Cryptocurrencies</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <div className="p-6">
              <div className="flex items-center mb-4">
                <div className="bg-orange-100 p-2 rounded-full mr-3">
                  <img 
                    src="https://cryptologos.cc/logos/bitcoin-btc-logo.svg?v=023" 
                    alt="Bitcoin" 
                    className="h-8 w-8"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Bitcoin (BTC)</h3>
                  <p className="text-gray-500 text-sm">The original cryptocurrency</p>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                Created in 2009, Bitcoin is the first and most widely recognized cryptocurrency.
              </p>
              <a href="#" className="text-indigo-600 font-medium hover:text-indigo-800">
                Learn more about Bitcoin
              </a>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <div className="p-6">
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 p-2 rounded-full mr-3">
                  <img 
                    src="https://cryptologos.cc/logos/ethereum-eth-logo.svg?v=023" 
                    alt="Ethereum" 
                    className="h-8 w-8"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Ethereum (ETH)</h3>
                  <p className="text-gray-500 text-sm">Programmable blockchain</p>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                Ethereum enables smart contracts and decentralized applications to be built and run without downtime.
              </p>
              <a href="#" className="text-indigo-600 font-medium hover:text-indigo-800">
                Learn more about Ethereum
              </a>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <div className="p-6">
              <div className="flex items-center mb-4">
                <div className="bg-green-100 p-2 rounded-full mr-3">
                  <img 
                    src="https://cryptologos.cc/logos/solana-sol-logo.svg?v=023" 
                    alt="Solana" 
                    className="h-8 w-8"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Solana (SOL)</h3>
                  <p className="text-gray-500 text-sm">High-performance blockchain</p>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                Solana is designed for speed with a unique proof-of-history consensus mechanism.
              </p>
              <a href="#" className="text-indigo-600 font-medium hover:text-indigo-800">
                Learn more about Solana
              </a>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <div className="p-6">
              <div className="flex items-center mb-4">
                <div className="bg-purple-100 p-2 rounded-full mr-3">
                  <img 
                    src="https://cryptologos.cc/logos/cardano-ada-logo.svg?v=023" 
                    alt="Cardano" 
                    className="h-8 w-8"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Cardano (ADA)</h3>
                  <p className="text-gray-500 text-sm">Research-based blockchain</p>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                Cardano is a proof-of-stake blockchain platform built with research-based methodology.
              </p>
              <a href="#" className="text-indigo-600 font-medium hover:text-indigo-800">
                Learn more about Cardano
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Risk Warning */}
      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-lg mb-16">
        <div className="flex">
          <div className="flex-shrink-0">
            <AlertCircle className="h-6 w-6 text-yellow-600" />
          </div>
          <div className="ml-3">
            <h3 className="text-lg font-medium text-yellow-800">Investment Risk Warning</h3>
            <p className="mt-2 text-yellow-700">
              Cryptocurrency investments are subject to high market risk. The value of your investments can go down as well as up, and you may get back less than you invest. Past performance is not a reliable indicator of future performance.
            </p>
          </div>
        </div>
      </div>
      
      {/* Learning Resources */}
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-8">Cryptocurrency Learning Resources</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold mb-4">Beginner's Guide to Crypto</h3>
            <p className="text-gray-600 mb-4">
              Our comprehensive guide covers everything from creating your first wallet to understanding blockchain technology.
            </p>
            <a href="#" className="text-indigo-600 font-medium flex items-center hover:text-indigo-800">
              Start the guide <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold mb-4">Crypto Investment Strategies</h3>
            <p className="text-gray-600 mb-4">
              Learn about different investment approaches, from long-term holding to trading strategies.
            </p>
            <a href="#" className="text-indigo-600 font-medium flex items-center hover:text-indigo-800">
              Explore strategies <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Crypto;