import React, { useState } from 'react';
import { AdditionalInfo } from '../components/EnrollNow/AdditionalInfo';
import { Header } from '../components/EnrollNow/Header';

const EnrollNow = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    dateOfBirth: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    program: '',
    semester: '',
    previousEducation: '',
    gpa: '',
    essay: ''
  });

  const totalSteps = 4;
  
  const steps = [
    { id: 1, title: 'Personal Information', icon: '👤' },
    { id: 2, title: 'Address Information', icon: '🏠' },
    { id: 3, title: 'Academic Information', icon: '🎓' },
    { id: 4, title: 'Personal Statement', icon: '📝' }
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const validateStep = (step) => {
    switch (step) {
      case 1:
        return formData.firstName && formData.lastName && formData.email && formData.phone && formData.dateOfBirth;
      case 2:
        return formData.address && formData.city && formData.state && formData.zipCode;
      case 3:
        return formData.program && formData.semester && formData.previousEducation;
      case 4:
        return formData.essay && formData.essay.length >= 100;
      default:
        return false;
    }
  };

  const nextStep = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(currentStep + 1);
    } else {
      alert('Please fill in all required fields before proceeding.');
    }
  };

  const prevStep = () => {
    setCurrentStep(currentStep - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateStep(4)) {
      // Handle form submission here
      console.log('Form submitted:', formData);
      alert('Application submitted successfully! We will contact you soon.');
      // Reset form
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        dateOfBirth: '',
        address: '',
        city: '',
        state: '',
        zipCode: '',
        program: '',
        semester: '',
        previousEducation: '',
        gpa: '',
        essay: ''
      });
      setCurrentStep(1);
    } else {
      alert('Please complete all required fields.');
    }
  };

  return (
    <div className="min-h-screen bg-neutral-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <Header />

        {/* Progress Indicator */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            {steps.map((step, index) => (
              <div key={step.id} className="flex-1 flex items-center">
                <div className="flex flex-col items-center relative">
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center text-lg font-bold transition-colors duration-200 ${
                      currentStep >= step.id
                        ? 'bg-blue-900 text-neutral-50'
                        : 'bg-neutral-200 text-neutral-600'
                    }`}
                  >
                    {currentStep > step.id ? '✓' : step.icon}
                  </div>
                  <span
                    className={`mt-2 text-sm font-medium text-center transition-colors duration-200 ${
                      currentStep >= step.id
                        ? 'text-blue-900'
                        : 'text-neutral-600'
                    }`}
                  >
                    {step.title}
                  </span>
                </div>
                {index < steps.length - 1 && (
                  <div
                    className={`flex-1 h-1 mx-4 transition-colors duration-200 ${
                      currentStep > step.id
                        ? 'bg-blue-900'
                        : 'bg-neutral-200'
                    }`}
                  ></div>
                )}
              </div>
            ))}
          </div>
          <div className="bg-neutral-200 rounded-full h-2">
            <div
              className="bg-blue-900 h-2 rounded-full transition-all duration-300 ease-out"
              style={{ width: `${(currentStep / totalSteps) * 100}%` }}
            ></div>
          </div>
        </div>

        {/* Application Form */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <form className="space-y-6">
            {/* Step 1: Personal Information */}
            {currentStep === 1 && (
              <div className="fade-in">
                <h2 className="font-viga text-2xl font-bold text-neutral-950 mb-6 pb-2 border-b border-neutral-200">
                  Personal Information
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-neutral-700 mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                      placeholder="Enter your first name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-neutral-700 mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                      placeholder="Enter your last name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                      placeholder="Enter your email address"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-neutral-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                      placeholder="Enter your phone number"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="dateOfBirth" className="block text-sm font-medium text-neutral-700 mb-2">
                      Date of Birth *
                    </label>
                    <input
                      type="date"
                      id="dateOfBirth"
                      name="dateOfBirth"
                      value={formData.dateOfBirth}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Step 2: Address Information */}
            {currentStep === 2 && (
              <div className="fade-in">
                <h2 className="font-viga text-2xl font-bold text-neutral-950 mb-6 pb-2 border-b border-neutral-200">
                  Address Information
                </h2>
                
                <div className="space-y-6">
                  <div>
                    <label htmlFor="address" className="block text-sm font-medium text-neutral-700 mb-2">
                      Street Address *
                    </label>
                    <input
                      type="text"
                      id="address"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                      placeholder="Enter your street address"
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                      <label htmlFor="city" className="block text-sm font-medium text-neutral-700 mb-2">
                        City *
                      </label>
                      <input
                        type="text"
                        id="city"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                        placeholder="Enter your city"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="state" className="block text-sm font-medium text-neutral-700 mb-2">
                        State *
                      </label>
                      <input
                        type="text"
                        id="state"
                        name="state"
                        value={formData.state}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                        placeholder="Enter your state"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="zipCode" className="block text-sm font-medium text-neutral-700 mb-2">
                        ZIP Code *
                      </label>
                      <input
                        type="text"
                        id="zipCode"
                        name="zipCode"
                        value={formData.zipCode}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                        placeholder="Enter your ZIP code"
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Step 3: Academic Information */}
            {currentStep === 3 && (
              <div className="fade-in">
                <h2 className="font-viga text-2xl font-bold text-neutral-950 mb-6 pb-2 border-b border-neutral-200">
                  Academic Information
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="program" className="block text-sm font-medium text-neutral-700 mb-2">
                      Desired Program *
                    </label>
                    <select
                      id="program"
                      name="program"
                      value={formData.program}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    >
                      <option value="">Select a program</option>
                      <option value="computer-science">Computer Science</option>
                      <option value="business-administration">Business Administration</option>
                      <option value="engineering">Engineering</option>
                      <option value="medicine">Medicine</option>
                      <option value="liberal-arts">Liberal Arts</option>
                      <option value="psychology">Psychology</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="semester" className="block text-sm font-medium text-neutral-700 mb-2">
                      Preferred Start Semester *
                    </label>
                    <select
                      id="semester"
                      name="semester"
                      value={formData.semester}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    >
                      <option value="">Select a semester</option>
                      <option value="spring-2025">Spring 2025</option>
                      <option value="fall-2025">Fall 2025</option>
                      <option value="spring-2026">Spring 2026</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="previousEducation" className="block text-sm font-medium text-neutral-700 mb-2">
                      Previous Education Level *
                    </label>
                    <select
                      id="previousEducation"
                      name="previousEducation"
                      value={formData.previousEducation}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    >
                      <option value="">Select education level</option>
                      <option value="high-school">High School</option>
                      <option value="associate">Associate Degree</option>
                      <option value="bachelor">Bachelor's Degree</option>
                      <option value="master">Master's Degree</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="gpa" className="block text-sm font-medium text-neutral-700 mb-2">
                      GPA (if applicable)
                    </label>
                    <input
                      type="number"
                      id="gpa"
                      name="gpa"
                      value={formData.gpa}
                      onChange={handleChange}
                      min="0"
                      max="4"
                      step="0.01"
                      className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                      placeholder="Enter your GPA (0.00 - 4.00)"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Step 4: Personal Statement */}
            {currentStep === 4 && (
              <div className="fade-in">
                <h2 className="font-viga text-2xl font-bold text-neutral-950 mb-6 pb-2 border-b border-neutral-200">
                  Personal Statement
                </h2>
                
                <div>
                  <label htmlFor="essay" className="block text-sm font-medium text-neutral-700 mb-2">
                    Why do you want to study at Atlas University? *
                  </label>
                  <textarea
                    id="essay"
                    name="essay"
                    value={formData.essay}
                    onChange={handleChange}
                    required
                    rows="8"
                    className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    placeholder="Please explain your motivation, goals, and what you hope to achieve at Atlas University (minimum 100 words)"
                  ></textarea>
                  <div className="mt-2 text-sm text-neutral-600">
                    Current length: {formData.essay.length} characters
                    {formData.essay.length < 100 && (
                      <span className="text-red-600 ml-2">
                        (Minimum 100 characters required)
                      </span>
                    )}
                  </div>
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-between pt-6 border-t border-neutral-200">
              <button
                type="button"
                onClick={prevStep}
                disabled={currentStep === 1}
                className={`px-6 py-3 rounded-lg font-semibold transition-colors duration-200 ${
                  currentStep === 1
                    ? 'bg-neutral-200 text-neutral-400 cursor-not-allowed'
                    : 'bg-neutral-600 text-neutral-50 hover:bg-neutral-700'
                }`}
              >
                ← Previous
              </button>
              
              <div className="text-center">
                <span className="text-sm text-neutral-600">
                  Step {currentStep} of {totalSteps}
                </span>
              </div>
              
              {currentStep < totalSteps ? (
                <button
                  type="button"
                  onClick={nextStep}
                  className="px-6 py-3 bg-blue-900 text-neutral-50 rounded-lg font-semibold hover:bg-blue-800 transition-colors duration-200"
                >
                  Next →
                </button>
              ) : (
                <button
                  type="button"
                  onClick={handleSubmit}
                  className="px-8 py-3 bg-green-600 text-neutral-50 rounded-lg font-semibold hover:bg-green-700 transition-colors duration-200 shadow-lg"
                >
                  Submit Application
                </button>
              )}
            </div>
            
            {currentStep === totalSteps && (
              <p className="text-sm text-neutral-600 mt-4 text-center">
                By submitting this application, you agree to our Terms of Service and Privacy Policy.
                <br />
                * Required fields
              </p>
            )}
          </form>
        </div>
        
        {/* Additional Information */}
            <AdditionalInfo />
      </div>
    </div>
  );
};

export default EnrollNow;

// CSS for fade-in animation
const style = document.createElement('style');
style.textContent = `
  .fade-in {
    animation: fadeIn 0.3s ease-in-out;
  }
  
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;
if (!document.head.querySelector('style[data-component="enroll-now"]')) {
  style.setAttribute('data-component', 'enroll-now');
  document.head.appendChild(style);
}

