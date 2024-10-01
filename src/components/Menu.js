import React, { useState } from 'react';
import { FaUser, FaChartLine, FaBook, FaCog, FaQuestionCircle, FaMap } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next'; 
import '../style/Menu.css';

const Menu = () => {
  const [activeCard, setActiveCard] = useState(null);
  const navigate = useNavigate();
  const { t } = useTranslation(); 
  
  const handleCardClick = (cardId, route) => {
    setActiveCard(activeCard === cardId ? null : cardId);
    
    if (route.startsWith('http')) {
      window.location.href = route; 
    } else if (route) {
      navigate(route); 
    }
  };

  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <h1>{t('menu.title')}</h1> 
      </header>
      <div className="dashboard-content">
        <div className="dashboard-card" onClick={() => handleCardClick('personalInfo', '/dashboard')}>
          <FaUser className="dashboard-icon" />
          <h2>{t('menu.personalInformation')}</h2> 
          <p>{t('menu.personalInformationDescription')}</p>
        </div>

        <div className="dashboard-card" onClick={() => handleCardClick('quiz', '/dashboard')}>
          <FaChartLine className="dashboard-icon" />
          <h2>{t('menu.quizActivity')}</h2>  
          <p>{t('menu.quizActivityDescription')}</p>  
        </div>

        <div className="dashboard-card" onClick={() => handleCardClick('rules', '/rules')}>
          <FaBook className="dashboard-icon" />
          <h2>{t('menu.antiDopingRules')}</h2> 
          <p>{t('menu.antiDopingRulesDescription')}</p>  
        </div>

        <div className="dashboard-card" onClick={() => handleCardClick('map', 'https://g-map-snowy.vercel.app/')}>
          <FaMap className="dashboard-icon" />
          <h2>{t('menu.map')}</h2> 
          <p>{t('menu.mapDescription')}</p>  
        </div>

        <div className="dashboard-card" onClick={() => handleCardClick('settings', '/settings')}>
          <FaCog className="dashboard-icon" />
          <h2>{t('menu.settings')}</h2>  
          <p>{t('menu.settingsDescription')}</p>  
        </div>

        <div className="dashboard-card" onClick={() => handleCardClick('support', '/support')}>
          <FaQuestionCircle className="dashboard-icon" />
          <h2>{t('menu.helpAndSupport')}</h2>  
          <p>{t('menu.helpAndSupportDescription')}</p> 
        </div>
      </div>
    </div>
  );
};

export default Menu;
