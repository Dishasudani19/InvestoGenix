import React, { useState } from 'react';
import '../assets/css/profile.css';

const Profile= () => {
  const [formData, setFormData] = useState({
    fullName: '',
    age: '',
    occupation: '',
    annualIncome: '',
    monthlyExpenses: '',
    savingsAmount: '',
    investmentExperience: 'beginner',
    riskTolerance: 50,
    financialGoals: '',
    hasEmergencyFund: false,
    hasDebts: false,
    interestedTopics: [],
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSliderChange = (e) => {
    setFormData({
      ...formData,
      riskTolerance: parseInt(e.target.value),
    });
  };

  const handleSwitchChange = (name) => {
    setFormData({
      ...formData,
      [name]: !formData[name],
    });
  };

  const handleSelectChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted profile data:', formData);
    // Here you would typically send the data to your backend API
    alert('Profile updated successfully! Your personalized financial plan is being prepared.');
  };

  const financialTopics = [
    'Investing Basics',
    'Retirement Planning',
    'Debt Management',
    'Tax Planning',
    'Real Estate',
    'Stock Market',
    'Cryptocurrency',
    'Budgeting',
  ];

  const handleTopicToggle = (topic) => {
    const updatedTopics = formData.interestedTopics.includes(topic)
      ? formData.interestedTopics.filter(t => t !== topic)
      : [...formData.interestedTopics, topic];
    
    setFormData({
      ...formData,
      interestedTopics: updatedTopics,
    });
  };

  // Get risk tolerance label based on the slider value
  const getRiskToleranceLabel = () => {
    if (formData.riskTolerance < 30) return 'Conservative';
    if (formData.riskTolerance < 70) return 'Moderate';
    return 'Aggressive';
  };

  return (
    <div className="financial-profile-container">
      <div className="profile-header">
        <div className="profile-icon">
        <i className='fas fa-user-clock'></i>
        </div>
        <div>
          <h1>Financial Profile</h1>
          <p>Complete your profile to receive personalized financial advice and learning resources</p>
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="cards-grid">
          {/* Personal Information Card */}
          <div className="card">
            <div className="card-header">
              <h2> <i className='fas fa-user-tie mr-4'></i>  Personal Information</h2>
              <p>Tell us about yourself</p>
            </div>
            <div className="card-content">
              <div className="form-group">
                <label htmlFor="fullName">Full Name</label>
                <input
                  id="fullName"
                  name="fullName"
                  placeholder="John Doe"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  required
                  className="form-input"
                />
              </div>
              <div className="form-group">
                <label htmlFor="age">Age</label>
                <input
                  id="age"
                  name="age"
                  type="number"
                  placeholder="30"
                  value={formData.age}
                  onChange={handleInputChange}
                  required
                  className="form-input"
                />
              </div>
              <div className="form-group">
                <label htmlFor="occupation">Occupation</label>
                <input
                  id="occupation"
                  name="occupation"
                  placeholder="Software Engineer"
                  value={formData.occupation}
                  onChange={handleInputChange}
                  required
                  className="form-input"
                />
              </div>
            </div>
          </div>

          {/* Financial Status Card */}
          <div className="card">
            <div className="card-header">
              <h2>💰 Financial Status</h2>
              <p>Your current financial picture</p>
            </div>
            <div className="card-content">
              <div className="form-group">
                <label htmlFor="annualIncome">Annual Income ($)</label>
                <input
                  id="annualIncome"
                  name="annualIncome"
                  type="number"
                  placeholder="75000"
                  value={formData.annualIncome}
                  onChange={handleInputChange}
                  required
                  className="form-input"
                />
              </div>
              <div className="form-group">
                <label htmlFor="monthlyExpenses">Monthly Expenses ($)</label>
                <input
                  id="monthlyExpenses"
                  name="monthlyExpenses"
                  type="number"
                  placeholder="3000"
                  value={formData.monthlyExpenses}
                  onChange={handleInputChange}
                  required
                  className="form-input"
                />
              </div>
              <div className="form-group">
                <label htmlFor="savingsAmount">Current Savings ($)</label>
                <input
                  id="savingsAmount"
                  name="savingsAmount"
                  type="number"
                  placeholder="20000"
                  value={formData.savingsAmount}
                  onChange={handleInputChange}
                  required
                  className="form-input"
                />
              </div>
            </div>
          </div>

          {/* Investment Profile Card */}
          <div className="card">
            <div className="card-header">
              <h2>📊 Investment Profile</h2>
              <p>Your investment style and preferences</p>
            </div>
            <div className="card-content">
              <div className="form-group">
                <label htmlFor="investmentExperience">Investment Experience</label>
                <select 
                  id="investmentExperience"
                  name="investmentExperience"
                  value={formData.investmentExperience}
                  onChange={handleSelectChange}
                  className="form-select"
                >
                  <option value="beginner">Beginner</option>
                  <option value="intermediate">Intermediate</option>
                  <option value="advanced">Advanced</option>
                </select>
              </div>
              <div className="form-group">
                <div className="slider-header">
                  <label>Risk Tolerance</label>
                  <span className="risk-label">{getRiskToleranceLabel()}</span>
                </div>
                <input 
                  type="range"
                  min="0"
                  max="100"
                  step="1"
                  value={formData.riskTolerance}
                  onChange={handleSliderChange}
                  className="form-slider"
                />
                <div className="slider-labels">
                  <span>Low Risk</span>
                  <span>High Risk</span>
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="financialGoals">Financial Goals</label>
                <input
                  id="financialGoals"
                  name="financialGoals"
                  placeholder="Retirement, buying a house, education..."
                  value={formData.financialGoals}
                  onChange={handleInputChange}
                  className="form-input"
                />
              </div>
            </div>
          </div>

          {/* Learning Interests Card */}
          <div className="card">
            <div className="card-header">
              <h2>📚 Learning Interests</h2>
              <p>Topics you want to learn about</p>
            </div>
            <div className="card-content">
              <div className="topics-grid">
                {financialTopics.map((topic) => (
                  <div key={topic} className="topic-item">
                    <input
                      type="checkbox"
                      id={`topic-${topic}`}
                      checked={formData.interestedTopics.includes(topic)}
                      onChange={() => handleTopicToggle(topic)}
                      className="topic-checkbox"
                    />
                    <label htmlFor={`topic-${topic}`}>{topic}</label>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Financial Situation Card */}
          <div className="card wide-card">
            <div className="card-header">
              <h2>🛡️ Financial Situation</h2>
              <p>Additional information to tailor our advice</p>
            </div>
            <div className="card-content">
              <div className="situational-grid">
                <div className="situation-item">
                  <input
                    type="checkbox"
                    id="hasEmergencyFund"
                    checked={formData.hasEmergencyFund}
                    onChange={() => handleSwitchChange('hasEmergencyFund')}
                    className="situation-checkbox"
                  />
                  <label htmlFor="hasEmergencyFund">I have an emergency fund (3-6 months expenses)</label>
                </div>
                <div className="situation-item">
                  <input
                    type="checkbox"
                    id="hasDebts"
                    checked={formData.hasDebts}
                    onChange={() => handleSwitchChange('hasDebts')}
                    className="situation-checkbox"
                  />
                  <label htmlFor="hasDebts">I have outstanding debts (excluding mortgage)</label>
                </div>
              </div>
            </div>
            <div className="card-footer">
              <button type="submit" className="submit-button">
                Save Profile & Get Personalized Advice
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Profile;