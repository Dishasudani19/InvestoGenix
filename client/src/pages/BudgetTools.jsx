import React, { useState } from 'react';
import { Calculator, PieChart, TrendingUp, DollarSign, CreditCard, Home, ShoppingBag, Coffee } from 'lucide-react';

const BudgetTools = () => {
  // State for the budget calculator
  const [income, setIncome] = useState(5000);
  const [expenses, setExpenses] = useState({
    housing: 1500,
    food: 600,
    transportation: 400,
    utilities: 300,
    entertainment: 200,
    other: 500
  });
  
  // Calculate totals and savings
  const totalExpenses = Object.values(expenses).reduce((sum, expense) => sum + expense, 0);
  const savings = income - totalExpenses;
  const savingsRate = (savings / income) * 100;
  
  // Calculate expense percentages for the chart
  const expensePercentages = {};
  Object.keys(expenses).forEach(category => {
    expensePercentages[category] = ((expenses[category] / totalExpenses) * 100).toFixed(1);
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Budget Tools</h1>
      <p className="text-lg text-gray-600 mb-12">
        Use our interactive financial tools to plan your budget, track expenses, and achieve your financial goals.
      </p>
      
      {/* Budget Calculator */}
      <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
        <div className="flex items-center mb-6">
          <Calculator className="h-8 w-8 text-indigo-600 mr-3" />
          <h2 className="text-2xl font-bold text-gray-900">Budget Calculator</h2>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Income Section */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-semibold mb-4">Monthly Income</h3>
            <div className="mb-4">
              <label htmlFor="income" className="block text-sm font-medium text-gray-700 mb-1">
                Total After-Tax Income
              </label>
              <div className="relative mt-1 rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <span className="text-gray-500 sm:text-sm">$</span>
                </div>
                <input
                  type="number"
                  id="income"
                  value={income}
                  onChange={(e) => setIncome(Number(e.target.value))}
                  className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md"
                  placeholder="0.00"
                />
              </div>
            </div>
          </div>
          
          {/* Expenses Section */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-semibold mb-4">Monthly Expenses</h3>
            {Object.keys(expenses).map((category) => (
              <div className="mb-4" key={category}>
                <label htmlFor={category} className="block text-sm font-medium text-gray-700 mb-1 capitalize">
                  {category}
                </label>
                <div className="relative mt-1 rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <span className="text-gray-500 sm:text-sm">$</span>
                  </div>
                  <input
                    type="number"
                    id={category}
                    value={expenses[category]}
                    onChange={(e) => setExpenses({...expenses, [category]: Number(e.target.value)})}
                    className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md"
                    placeholder="0.00"
                  />
                </div>
              </div>
            ))}
          </div>
          
          {/* Results Section */}
          <div className="lg:col-span-1 bg-gray-50 p-6 rounded-xl">
            <h3 className="text-lg font-semibold mb-4">Budget Summary</h3>
            
            <div className="mb-4">
              <div className="flex justify-between mb-2">
                <span className="text-gray-600">Total Income:</span>
                <span className="font-medium">${income.toLocaleString()}</span>
              </div>
              <div className="flex justify-between mb-2">
                <span className="text-gray-600">Total Expenses:</span>
                <span className="font-medium">${totalExpenses.toLocaleString()}</span>
              </div>
              <div className="border-t border-gray-200 my-2"></div>
              <div className="flex justify-between mb-2">
                <span className="text-gray-600">Monthly Savings:</span>
                <span className={`font-bold ${savings >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                  ${savings.toLocaleString()}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Savings Rate:</span>
                <span className={`font-bold ${savingsRate >= 20 ? 'text-green-600' : savingsRate >= 10 ? 'text-yellow-600' : 'text-red-600'}`}>
                  {savingsRate.toFixed(1)}%
                </span>
              </div>
            </div>
            
            <div className="mt-6">
              <h4 className="text-sm font-medium text-gray-700 mb-3">Expense Breakdown</h4>
              {Object.keys(expenses).map((category) => (
                <div className="mb-2" key={category}>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="capitalize">{category}</span>
                    <span>{expensePercentages[category]}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-indigo-600 h-2 rounded-full" 
                      style={{ width: `${expensePercentages[category]}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Financial Calculators */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">Financial Calculators</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <div className="bg-indigo-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
              <Home className="h-8 w-8 text-indigo-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Mortgage Calculator</h3>
            <p className="text-gray-600 mb-4">
              Calculate your monthly mortgage payments based on loan amount, interest rate, and term.
            </p>
            <button className="w-full bg-indigo-600 text-white py-2 rounded-lg font-medium hover:bg-indigo-700 transition-colors">
              Calculate Mortgage
            </button>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <div className="bg-indigo-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
              <TrendingUp className="h-8 w-8 text-indigo-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Investment Calculator</h3>
            <p className="text-gray-600 mb-4">
              Project your investment growth over time with different contribution amounts and rates of return.
            </p>
            <button className="w-full bg-indigo-600 text-white py-2 rounded-lg font-medium hover:bg-indigo-700 transition-colors">
              Calculate Returns
            </button>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <div className="bg-indigo-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
              <CreditCard className="h-8 w-8 text-indigo-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Debt Payoff Calculator</h3>
            <p className="text-gray-600 mb-4">
              Create a plan to pay off credit cards and other debts using different strategies.
            </p>
            <button className="w-full bg-indigo-600 text-white py-2 rounded-lg font-medium hover:bg-indigo-700 transition-colors">
              Plan Debt Payoff
            </button>
          </div>
        </div>
      </div>
      
      {/* Budgeting Tips */}
      <div className="bg-indigo-50 rounded-xl p-8 mb-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Budgeting Tips</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex items-center mb-4">
              <div className="bg-indigo-100 p-2 rounded-full mr-3">
                <DollarSign className="h-5 w-5 text-indigo-600" />
              </div>
              <h3 className="text-lg font-semibold">50/30/20 Rule</h3>
            </div>
            <p className="text-gray-600">
              Allocate 50% of your income to needs, 30% to wants, and 20% to savings and debt repayment. This simple framework helps maintain balance in your financial life.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex items-center mb-4">
              <div className="bg-indigo-100 p-2 rounded-full mr-3">
                <ShoppingBag className="h-5 w-5 text-indigo-600" />
              </div>
              <h3 className="text-lg font-semibold">Track Every Expense</h3>
            </div>
            <p className="text-gray-600">
              Use apps or spreadsheets to monitor all spending. Awareness of where your money goes is the first step to taking control of your finances.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex items-center mb-4">
              <div className="bg-indigo-100 p-2 rounded-full mr-3">
                <Coffee className="h-5 w-5 text-indigo-600" />
              </div>
              <h3 className="text-lg font-semibold">Cut Small Expenses</h3>
            </div>
            <p className="text-gray-600">
              Small daily purchases add up quickly. Reducing or eliminating minor expenses like daily coffee shop visits can free up significant money for savings.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex items-center mb-4">
              <div className="bg-indigo-100 p-2 rounded-full mr-3">
                <PieChart className="h-5 w-5 text-indigo-600" />
              </div>
              <h3 className="text-lg font-semibold">Automate Savings</h3>
            </div>
            <p className="text-gray-600">
              Set up automatic transfers to savings accounts on payday. What you don't see in your checking account, you won't be tempted to spend.
            </p>
          </div>
        </div>
      </div>
      
      {/* Budget Templates */}
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-8">Budget Templates</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <img 
              src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
              alt="Basic Budget Template" 
              className="h-48 w-full object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Basic Budget Template</h3>
              <p className="text-gray-600 mb-4">
                A simple, easy-to-use budget template for beginners. Track income, expenses, and savings with minimal effort.
              </p>
              <button className="w-full bg-indigo-600 text-white py-2 rounded-lg font-medium hover:bg-indigo-700 transition-colors">
                Download Template
              </button>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <img 
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
              alt="Detailed Household Budget" 
              className="h-48 w-full object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Detailed Household Budget</h3>
              <p className="text-gray-600 mb-4">
                Comprehensive budget template for families with multiple income sources and detailed expense categories.
              </p>
              <button className="w-full bg-indigo-600 text-white py-2 rounded-lg font-medium hover:bg-indigo-700 transition-colors">
                Download Template
              </button>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <img 
              src="https://images.unsplash.com/photo-1579621970795-87facc2f976d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
              alt="Debt Reduction Planner" 
              className="h-48 w-full object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Debt Reduction Planner</h3>
              <p className="text-gray-600 mb-4">
                Specialized template focused on debt payoff strategies, including snowball and avalanche methods.
              </p>
              <button className="w-full bg-indigo-600 text-white py-2 rounded-lg font-medium hover:bg-indigo-700 transition-colors">
                Download Template
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BudgetTools;