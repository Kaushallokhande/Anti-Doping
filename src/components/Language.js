import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

const languages = [
  { name: 'English', code: 'en' },
  { name: 'Hindi', code: 'hi' },
  { name: 'Punjabi', code: 'pa' },
  { name: 'Marathi', code: 'mr' },
  { name: 'Gujarati', code: 'gu' },
  { name: 'French', code: 'fr' },
  { name: 'Spanish', code: 'es' }, 
  { name: 'German', code: 'de' }  
];


const LanguageGrid = () => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    setSearchTerm(e.target.value.toLowerCase());
  };

  const filteredLanguages = languages.filter((language) =>
    language.name.toLowerCase().includes(searchTerm)
  );

  const handleClick = (language) => {
    localStorage.setItem('language', language.code);
    i18n.changeLanguage(language.code);
    navigate('/');
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">
        {t('select_language')}
      </h1>
      <input
        type="text"
        placeholder={t('search_language')}
        className="mb-6 p-2 w-full rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        onChange={handleSearch}
      />
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {filteredLanguages.length > 0 ? (
          filteredLanguages.map((language, index) => (
            <div
              key={index}
              className="p-6 bg-gradient-to-r from-blue-400 to-blue-600 text-white rounded-lg text-center cursor-pointer shadow-lg transform hover:scale-105 transition-transform duration-200"
              onClick={() => handleClick(language)}
            >
              {language.name}
            </div>
          ))
        ) : (
          <div className="col-span-full text-center text-gray-500">
            {t('no_languages_found')}
          </div>
        )}
      </div>
    </div>
  );
};

export default LanguageGrid;
