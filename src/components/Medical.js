import React, { useState, useCallback, useEffect } from 'react';
import "../style/medical.css";
import debounce from 'lodash.debounce';
import { useTranslation } from 'react-i18next';

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
    if (this.state.hasError) {
      return (
        <div className="error-boundary">
          <h1>{this.props.t('something_went_wrong')}</h1>
          <p>{this.props.t('try_again_later')}</p>
        </div>
      );
    }

    return this.props.children;
  }
}

function Medical() {
  const { t } = useTranslation();
  const [substance, setSubstance] = useState('Caffeine'); // Default search query
  const [results, setResults] = useState([]);
  const [error, setError] = useState(null);
  const [suggestions, setSuggestions] = useState([]);

  const substancesData = [
    { name: "Caffeine", status: "Allowed", category: "Stimulants", description: "A stimulant that improves endurance and alertness, commonly found in coffee, tea, and energy drinks. Widely used by athletes for its ergogenic effects." },
    { name: "Anabolic Steroids", status: "Prohibited", category: "Steroids", description: "Used to increase muscle mass and strength, but banned in sports due to unfair advantage and severe health risks." },
    { name: "Erythropoietin (EPO)", status: "Prohibited", category: "Peptide Hormones", description: "Enhances endurance by increasing red blood cell production, banned due to its association with blood doping." },
    { name: "Salbutamol", status: "Allowed", category: "Beta-2 Agonists", description: "A bronchodilator used to treat asthma, allowed in limited doses but monitored for potential performance enhancement." },
    { name: "Cortisone", status: "Allowed with Restrictions", category: "Glucocorticoids", description: "Reduces inflammation, often used to treat injuries. Restricted in-competition due to potential masking of other drugs." },
    { name: "Methadone", status: "Prohibited in-competition", category: "Opioids", description: "Used for pain management, banned in-competition due to its sedative effects and potential for abuse." },
    { name: "Modafinil", status: "Prohibited", category: "Stimulants", description: "Used to treat sleep disorders, but banned for its ability to enhance focus and cognitive function in sports." },
    { name: "Hydrochlorothiazide", status: "Allowed with Restrictions", category: "Diuretics", description: "Used to manage hypertension and fluid retention, restricted due to its potential as a masking agent for doping." },
    { name: "Methylphenidate", status: "Prohibited in-competition", category: "Stimulants", description: "Treats ADHD, but banned in sports due to its ability to enhance focus and alertness." },
    { name: "Tamoxifen", status: "Prohibited in-competition", category: "Anti-Estrogens", description: "Used in breast cancer treatment, banned for its potential to block estrogen effects and for its role in post-steroid cycle recovery." },
    { name: "Human Growth Hormone (hGH)", status: "Prohibited", category: "Peptide Hormones", description: "Promotes muscle growth and recovery, banned due to its performance-enhancing effects." },
    { name: "Pseudoephedrine", status: "Allowed with Restrictions", category: "Stimulants", description: "A decongestant that can increase alertness, allowed with limits to prevent stimulant abuse." },
    { name: "Clenbuterol", status: "Prohibited", category: "Beta-2 Agonists", description: "Used for weight loss and muscle building, banned due to its performance-enhancing properties." },
    { name: "Benzodiazepines", status: "Allowed with Restrictions", category: "Anti-Anxiety", description: "Treats anxiety and insomnia, restricted due to potential sedative effects in competition." },
    { name: "Ghrelin", status: "Prohibited", category: "Peptide Hormones", description: "A hormone that stimulates appetite, banned for its potential to alter body composition and recovery." },
    { name: "Morphine", status: "Prohibited in-competition", category: "Opioids", description: "A powerful pain-relieving medication derived from opium, used in the treatment of severe pain." },
    { name: "Levodopa", status: "Allowed", category: "Dopamine Precursors", description: "Used to manage Parkinson's disease, increases dopamine levels, and can affect motor performance in sports." },
    { name: "Heroin", status: "Prohibited", category: "Opioids", description: "An illegal opioid derived from morphine, known for its potent euphoric effects." },
    { name: "Cocaine", status: "Prohibited", category: "Stimulants", description: "An illegal stimulant that can enhance alertness and performance, but banned due to severe health risks and ethical concerns." },
    { name: "Amphetamines", status: "Prohibited", category: "Stimulants", description: "Powerful stimulants that increase focus and endurance, banned due to the risk of addiction and severe health effects." },
    { name: "Creatine", status: "Allowed", category: "Supplements", description: "A popular supplement that enhances strength and power output, widely used in strength sports and allowed in competition." },
    { name: "Beta-Alanine", status: "Allowed", category: "Supplements", description: "Increases muscle endurance, commonly used in sports requiring short bursts of power, such as sprinting and weightlifting." },
    { name: "Ibuprofen", status: "Allowed", category: "Non-Steroidal Anti-Inflammatories (NSAIDs)", description: "Used to reduce pain and inflammation, allowed in competition but should be used with caution to avoid masking injury." },
    { name: "Melatonin", status: "Allowed", category: "Supplements", description: "A hormone that regulates sleep-wake cycles, commonly used by athletes to manage jet lag and improve sleep quality." },
    { name: "Nandrolone", status: "Prohibited", category: "Steroids", description: "An anabolic steroid that enhances muscle growth, banned for its performance-enhancing effects." },
    { name: "Propranolol", status: "Prohibited in-competition", category: "Beta Blockers", description: "Used to manage anxiety and heart conditions, banned in precision sports like shooting due to its calming effects." },
    { name: "Ephedrine", status: "Prohibited", category: "Stimulants", description: "A stimulant that increases alertness and energy, banned due to its potential for abuse and serious health risks." },
    { name: "Nandrolone", status: "Prohibited", category: "Steroids", description: "An anabolic steroid that enhances muscle mass and strength, banned for its severe health risks and performance-enhancing effects." },
    { name: "Tribulus Terrestris", status: "Allowed", category: "Supplements", description: "A herbal supplement claimed to boost testosterone levels, used for its potential benefits in strength sports." },
    { name: "Whey Protein", status: "Allowed", category: "Supplements", description: "A popular protein supplement used to support muscle recovery and growth, widely used by athletes across various sports." },
    { name: "Ritalin", status: "Prohibited in-competition", category: "Stimulants", description: "Used to treat ADHD, banned in competition due to its stimulant effects on focus and alertness." },
    { name: "Ostarine", status: "Prohibited", category: "Selective Androgen Receptor Modulators (SARMs)", description: "Enhances muscle growth and fat loss, banned for its performance-enhancing effects and potential health risks." },
    { name: "Higenamine", status: "Prohibited", category: "Stimulants", description: "Found in some pre-workout supplements, banned due to its stimulant effects that can enhance performance." },
    { name: "Meldonium", status: "Prohibited", category: "Metabolic Modulators", description: "Enhances endurance by improving oxygen uptake, banned due to its performance-enhancing properties." },
    { name: "Colostrum", status: "Allowed", category: "Supplements", description: "A supplement derived from cow’s milk, used to boost immune function and recovery, allowed in sports." },
    { name: "Aminoglutethimide", status: "Prohibited", category: "Aromatase Inhibitors", description: "Used to block estrogen production, banned for its potential to mask steroid use." },
    { name: "Glycerol", status: "Prohibited in-competition", category: "Hyperhydrating Agents", description: "Used to enhance hydration and endurance, banned in competition due to its potential as a masking agent." },
    { name: "Spironolactone", status: "Prohibited", category: "Diuretics", description: "A diuretic used to treat fluid retention, banned for its potential to mask other banned substances." },
    { name: "Isoprenaline", status: "Prohibited", category: "Beta-2 Agonists", description: "A bronchodilator with stimulant effects, banned due to its potential performance-enhancing properties." },
    { name: "Arimistane", status: "Prohibited", category: "Aromatase Inhibitors", description: "Reduces estrogen levels, banned for its use in post-steroid cycle therapy to maintain muscle mass." },
    { name: "Synephrine", status: "Prohibited", category: "Stimulants", description: "Found in bitter orange extract, used for fat loss and energy, banned for its stimulant effects." },
    { name: "L-Carnitine", status: "Allowed", category: "Supplements", description: "A supplement used to improve fat metabolism and endurance, allowed in sports and commonly used in endurance sports." },
    { name: "Arginine", status: "Allowed", category: "Supplements", description: "An amino acid used to improve blood flow and endurance, widely used in pre-workout supplements for its ergogenic effects." },
    { name: "DHEA", status: "Prohibited", category: "Prohormones", description: "A precursor to testosterone, banned for its potential to enhance muscle mass and strength." },
    { name: "HGH Fragment 176-191", status: "Prohibited", category: "Peptide Hormones", description: "A fragment of Human Growth Hormone used for fat loss and muscle growth, banned for its performance-enhancing effects." },
    { name: "Forskolin", status: "Allowed", category: "Supplements", description: "A herbal supplement used to increase testosterone levels, allowed in sports but with limited evidence of effectiveness." },
    { name: "Phenylethylamine (PEA)", status: "Prohibited", category: "Stimulants", description: "A natural stimulant that can improve mood and focus, banned due to its stimulant properties." },
    { name: "Yohimbine", status: "Prohibited", category: "Stimulants", description: "Used for fat loss and increased energy, banned due to its stimulant effects and potential health risks." },
    { name: "Melanotan II", status: "Prohibited", category: "Peptide Hormones", description: "A peptide used to darken skin and increase libido, banned for its unregulated and potentially harmful effects." },
    { name: "DMAA (1,3-dimethylamylamine)", status: "Prohibited", category: "Stimulants", description: "A powerful stimulant once found in pre-workout supplements, banned for its severe health risks and potential for abuse." },
    { name: "Vitamin D", status: "Allowed", category: "Supplements", description: "Essential for bone health and immune function, widely used by athletes to support overall health and performance." },
    { name: "BCAAs", status: "Allowed", category: "Supplements", description: "Branched-chain amino acids used to support muscle recovery and reduce fatigue, widely used in endurance and strength sports." },
    { name: "Zinc", status: "Allowed", category: "Supplements", description: "An essential mineral that supports immune function and recovery, commonly used by athletes to maintain overall health." },
    { name: "Ashwagandha", status: "Allowed", category: "Supplements", description: "A herbal supplement used to reduce stress and improve endurance, allowed in sports and popular among endurance athletes." },
    { name: "Vitamin C", status: "Allowed", category: "Supplements", description: "Supports immune function and recovery, widely used by athletes to maintain overall health." },
    { name: "Paracetamol", status: "Allowed", category: "Analgesics", description: "A commonly used analgesic and antipyretic for pain relief and fever reduction. Widely accepted in sports for managing minor injuries or pain without performance enhancement effects." },
    { name: "Beta-Glucan", status: "Allowed", category: "Supplements", description: "A fiber supplement that supports immune function and endurance, allowed in sports and commonly used by endurance athletes." }
  ];

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

  return (
    <ErrorBoundary t={t}>
      <div className="container">
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
