import React, { useState } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';
import SignupModal from './components/SignupModal';
import ThankYouPopup from './components/ThankYouPopup';
import './styles/global.css'; 

function App() {
  const [isSignupModalOpen, setIsSignupModalOpen] = useState(false);
  const [isThankYouPopupOpen, setIsThankYouPopupOpen] = useState(false);

  const handleOpenSignupModal = () => {
    setIsSignupModalOpen(true);
  };

  const handleCloseSignupModal = () => {
    setIsSignupModalOpen(false);
  };

  const handleSubmitSignupForm = (formData) => {
    
    console.log('Form Submitted:', formData);
    setIsSignupModalOpen(false); 
    setIsThankYouPopupOpen(true); 
  };

  const handleCloseThankYouPopup = () => {
    setIsThankYouPopupOpen(false);
  };

  return (
    <div className="App">
      <Header />
      <HeroSection onGetStartedClick={handleOpenSignupModal} />
      <Features />
      <Testimonials />
      <CallToAction onGetStartedClick={handleOpenSignupModal} />
      <Footer />

      {isSignupModalOpen && (
        <SignupModal
          onClose={handleCloseSignupModal}
          onSubmit={handleSubmitSignupForm}
        />
      )}

      {isThankYouPopupOpen && (
        <ThankYouPopup onClose={handleCloseThankYouPopup} />
      )}
    </div>
  );
}

export default App;