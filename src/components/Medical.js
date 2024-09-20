import React, { useState, useCallback, useEffect } from 'react';
import "../style/medical.css";
import debounce from 'lodash.debounce';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import substancesData from './substancesData';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error("Error caught by ErrorBoundary:", error);
  }

  render() {
    const { t } = this.props; // Ensure t is passed as a prop
    if (this.state.hasError) {
      return (
        <div className="error-boundary">
          <h1>{t('something_went_wrong')}</h1>
          <p>{t('try_again_later')}</p>
        </div>
      );
    }

    return this.props.children;
  }
}

function Medical() {
  const { t } = useTranslation();
  const navigate = useNavigate(); // Initialize useNavigate
  const [substance, setSubstance] = useState('Caffeine');
  const [results, setResults] = useState([]);
  const [error, setError] = useState(null);
  const [suggestions, setSuggestions] = useState([]);

  const search = useCallback(
    debounce((query) => {
      try {
        const searchResults = substancesData.filter(substanceData =>
          substanceData.name.toLowerCase().includes(query.toLowerCase()) ||
          substanceData.category.toLowerCase().includes(query.toLowerCase())
        );

        setResults(searchResults);
        setError(null);

        const filteredSuggestions = substancesData
          .filter(substanceData =>
            substanceData.name.toLowerCase().includes(query.toLowerCase())
          )
          .slice(0, 3);

        setSuggestions(filteredSuggestions);
      } catch (err) {
        setError(t('error'));
        console.error(err);
      }
    }, 300),
    [t]
  );

  useEffect(() => {
    search(substance); // Trigger search on mount with the default value
  }, [search, substance]);

  const handleSearch = () => {
    search(substance);
  };

  const handleInputChange = (e) => {
    setSubstance(e.target.value);
    search(e.target.value);
  };

  const handleSuggestionClick = (suggestion) => {
    setSubstance(suggestion.name);
    search(suggestion.name);
    setSuggestions([]);
  };

  const handleImage = () => {
    navigate('/image'); // Navigate to the /image route
  };

  return (
    <ErrorBoundary t={t}>
      <div className="container bg-white">
        <div className="banner-main">
          <h2>#HonestVictory</h2>
        </div>
        <div className="medical-container">
          <h1>{t('Substance Checker')}</h1>
          <div className="search-section">
            <input
              type="text"
              placeholder={t('search_placeholder')}
              value={substance}
              onChange={handleInputChange}
            />
            <button onClick={handleSearch}>{t('search_button')}</button>
            <button onClick={handleImage} className='image_import'>Import</button>
          </div>
          {suggestions.length > 0 && (
            <ul className="suggestions-list">
              {suggestions.map((suggestion, index) => (
                <li className='list' key={index} onClick={() => handleSuggestionClick(suggestion)}>
                  {suggestion.name}
                </li>
              ))}
            </ul>
          )}
          <div className="results-section">
            {error && <p className="error-message">{error}</p>}
            {results.length > 0 ? (
              <ul>
                {results.map((result, index) => (
                  <li key={index}>
                    <strong>{t('substance')}</strong> - {result.name}<br />
                    <strong>{t('category')}</strong> - {result.category}<br />
                    <strong>{t('status')}</strong> - {result.status}<br />
                    <strong>{t('description')}</strong> - {result.description}<br />
                  </li>
                ))}
              </ul>
            ) : (
              <p>{t('no_results')}</p>
            )}
          </div>
        </div>
      </div>
    </ErrorBoundary>
  );
}

export default Medical;
