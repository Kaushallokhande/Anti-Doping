import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import '../style/QuizSection.css';

const questions = {
  en: {
    easy: [
      { id: 1, question: "What is doping?", options: ["Use of banned substances", "Regular exercise", "Healthy diet", "All of the above"], answer: "Use of banned substances" },
      { id: 2, question: "Which substance is commonly banned in sports?", options: ["Caffeine", "Creatine", "Anabolic steroids", "Vitamin C"], answer: "Anabolic steroids" },
      { id: 3, question: "What does WADA stand for?", options: ["World Anti-Doping Agency", "World Athletic Doping Association", "World Association for Doping", "World Anti-Doping Alliance"], answer: "World Anti-Doping Agency" },
      { id: 4, question: "What is a common effect of using banned substances?", options: ["Improved performance", "Increased energy", "Health benefits", "None"], answer: "Improved performance" },
      { id: 5, question: "What is the main reason for banning certain substances?", options: ["Health risks", "Economic impact", "Cultural reasons", "Popularity"], answer: "Health risks" },
      { id: 6, question: "Which of the following is a banned substance?", options: ["Caffeine", "Marijuana", "Protein powder", "Vitamin supplements"], answer: "Marijuana" },
      { id: 7, question: "Which organization ensures the enforcement of anti-doping rules?", options: ["FIFA", "WADA", "IOC", "UN"], answer: "WADA" },
      { id: 8, question: "What type of test is commonly used to detect doping?", options: ["Blood test", "X-ray", "MRI", "Ultrasound"], answer: "Blood test" },
      { id: 9, question: "What is one consequence of doping in sports?", options: ["Increased visibility", "Increased sponsorship", "Disqualification", "Enhanced fan following"], answer: "Disqualification" },
      { id: 10, question: "What is the role of an athlete’s biological passport?", options: ["Track training progress", "Monitor health parameters", "Detect doping violations", "Enhance performance"], answer: "Detect doping violations" }
    ],
    medium: [
      { id: 11, question: "Which organization oversees anti-doping globally?", options: ["WADA", "FIFA", "IOC", "NCAA"], answer: "WADA" },
      { id: 12, question: "What is the primary purpose of anti-doping regulations?", options: ["Ensure fair competition", "Increase ticket sales", "Promote national pride", "Encourage athlete endorsements"], answer: "Ensure fair competition" },
      { id: 13, question: "What kind of substances are typically banned?", options: ["Performance-enhancing drugs", "Vitamins", "Mineral supplements", "Painkillers"], answer: "Performance-enhancing drugs" },
      { id: 14, question: "Which type of doping is considered most harmful?", options: ["Chemical doping", "Gene doping", "Physical doping", "Nutritional doping"], answer: "Gene doping" },
      { id: 15, question: "What is a common method for testing athletes for doping?", options: ["Urine analysis", "Blood pressure test", "Heart rate monitoring", "Vision test"], answer: "Urine analysis" },
      { id: 16, question: "What does the term 'masking agent' refer to?", options: ["A drug that hides the presence of banned substances", "A tool used to measure drug levels", "A supplement used for recovery", "A type of training equipment"], answer: "A drug that hides the presence of banned substances" },
      { id: 17, question: "Which of the following is a responsibility of WADA?", options: ["Developing anti-doping codes", "Managing sports events", "Organizing athlete training", "Promoting sports media"], answer: "Developing anti-doping codes" },
      { id: 18, question: "What does the World Anti-Doping Code aim to harmonize?", options: ["Anti-doping rules and regulations", "Athlete training programs", "Sports equipment standards", "Event scheduling"], answer: "Anti-doping rules and regulations" },
      { id: 19, question: "Which of the following is not a common method of doping?", options: ["Blood transfusion", "Use of steroids", "Gene therapy", "High-altitude training"], answer: "High-altitude training" },
      { id: 20, question: "What is the main function of anti-doping organizations?", options: ["Enforce sports regulations", "Provide athlete sponsorships", "Ensure fair play in sports", "Organize competitions"], answer: "Ensure fair play in sports" }
    ],
    hard: [
      { id: 21, question: "What is the primary purpose of the World Anti-Doping Code?", options: ["Promote fair competition", "Increase funding", "Provide medical research", "Encourage national teams"], answer: "Promote fair competition" },
      { id: 22, question: "Which of the following is a form of gene doping?", options: ["Gene editing", "Steroid use", "Blood doping", "Drug masking"], answer: "Gene editing" },
      { id: 23, question: "What is the consequence for an athlete found guilty of doping under the World Anti-Doping Code?", options: ["Lifetime ban", "Suspension", "Warning", "Fines"], answer: "Suspension" },
      { id: 24, question: "How is the biological passport used to detect doping?", options: ["By tracking changes in biological markers", "By testing for specific drugs", "By analyzing genetic material", "By monitoring athlete behavior"], answer: "By tracking changes in biological markers" },
      { id: 25, question: "Which of the following is a challenge in anti-doping efforts?", options: ["Keeping up with new doping methods", "Ensuring athlete compliance", "Managing sports events", "Increasing funding for anti-doping"], answer: "Keeping up with new doping methods" },
      { id: 26, question: "What type of drug is commonly used as a masking agent?", options: ["Diuretics", "Analgesics", "Antibiotics", "Antihistamines"], answer: "Diuretics" },
      { id: 27, question: "Which major sporting event has its own anti-doping regulations?", options: ["The Olympics", "The World Cup", "The Tour de France", "The Super Bowl"], answer: "The Olympics" },
      { id: 28, question: "What is the role of the Athlete Biological Passport in doping control?", options: ["To detect long-term effects of doping", "To monitor training progress", "To assess injury recovery", "To validate athlete credentials"], answer: "To detect long-term effects of doping" },
      { id: 29, question: "Which banned substance is often used to improve endurance?", options: ["Erythropoietin (EPO)", "Testosterone", "Human Growth Hormone (HGH)", "Caffeine"], answer: "Erythropoietin (EPO)" },
      { id: 30, question: "What international body oversees the World Anti-Doping Code?", options: ["The World Anti-Doping Agency (WADA)", "The International Olympic Committee (IOC)", "The International Association of Athletics Federations (IAAF)", "The United Nations (UN)"], answer: "The World Anti-Doping Agency (WADA)" }
    ],
  },
  hi: {
    easy: [
      { id: 1, question: "डोपिंग क्या है?", options: ["प्रतिबंधित पदार्थों का उपयोग", "नियमित व्यायाम", "स्वस्थ आहार", "उपरोक्त सभी"], answer: "प्रतिबंधित पदार्थों का उपयोग" },
      { id: 2, question: "कौन सा पदार्थ खेलों में सामान्यतः प्रतिबंधित होता है?", options: ["कैफीन", "क्रिएटिन", "एनेाबॉलिक स्टेरॉयड", "विटामिन C"], answer: "एनेाबॉलिक स्टेरॉयड" },
      { id: 3, question: "WADA का क्या मतलब है?", options: ["विश्व एंटी-डोपिंग एजेंसी", "विश्व एथलेटिक डोपिंग एसोसिएशन", "विश्व डोपिंग संघ", "विश्व एंटी-डोपिंग अलायंस"], answer: "विश्व एंटी-डोपिंग एजेंसी" },
      { id: 4, question: "प्रतिबंधित पदार्थों का उपयोग करने का एक सामान्य प्रभाव क्या है?", options: ["सुधरी हुई प्रदर्शन", "बढ़ी हुई ऊर्जा", "स्वास्थ्य लाभ", "कोई नहीं"], answer: "सुधरी हुई प्रदर्शन" },
      { id: 5, question: "कुछ पदार्थों को प्रतिबंधित करने का मुख्य कारण क्या है?", options: ["स्वास्थ्य जोखिम", "आर्थिक प्रभाव", "सांस्कृतिक कारण", "लोकप्रियता"], answer: "स्वास्थ्य जोखिम" },
      { id: 6, question: "निम्नलिखित में से कौन सा एक प्रतिबंधित पदार्थ है?", options: ["कैफीन", "मारिजुआना", "प्रोटीन पाउडर", "विटामिन सप्लीमेंट्स"], answer: "मारिजुआना" },
      { id: 7, question: "कौन सा संगठन एंटी-डोपिंग नियमों को लागू करता है?", options: ["FIFA", "WADA", "IOC", "UN"], answer: "WADA" },
      { id: 8, question: "डोपिंग का पता लगाने के लिए कौन सा परीक्षण सामान्यतः उपयोग किया जाता है?", options: ["खून का परीक्षण", "X-ray", "MRI", "अल्ट्रासाउंड"], answer: "खून का परीक्षण" },
      { id: 9, question: "खेलों में डोपिंग का एक परिणाम क्या है?", options: ["बढ़ी हुई दृश्यता", "बढ़ी हुई प्रायोजन", "अयोग्यता", "सुधरी हुई फैन फॉलोइंग"], answer: "अयोग्यता" },
      { id: 10, question: "खिलाड़ी की जैविक पासपोर्ट की भूमिका क्या है?", options: ["प्रशिक्षण की प्रगति को ट्रैक करें", "स्वास्थ्य मानकों की निगरानी करें", "डोपिंग उल्लंघनों का पता लगाएं", "प्रदर्शन को बढ़ाएं"], answer: "डोपिंग उल्लंघनों का पता लगाएं" }
    ],
    medium: [
      { id: 11, question: "कौन सा संगठन विश्व स्तर पर एंटी-डोपिंग का पर्यवेक्षण करता है?", options: ["WADA", "FIFA", "IOC", "NCAA"], answer: "WADA" },
      { id: 12, question: "एंटी-डोपिंग नियमों का प्राथमिक उद्देश्य क्या है?", options: ["निष्पक्ष प्रतियोगिता सुनिश्चित करना", "टिकट बिक्री बढ़ाना", "राष्ट्रीय गर्व को बढ़ावा देना", "खिलाड़ी के समर्थन को प्रोत्साहित करना"], answer: "निष्पक्ष प्रतियोगिता सुनिश्चित करना" },
      { id: 13, question: "आमतौर पर कौन से पदार्थ प्रतिबंधित होते हैं?", options: ["प्रदर्शन बढ़ाने वाली दवाएँ", "विटामिन", "खनिज सप्लीमेंट्स", "पेनकिलर"], answer: "प्रदर्शन बढ़ाने वाली दवाएँ" },
      { id: 14, question: "कौन सा प्रकार का डोपिंग सबसे हानिकारक माना जाता है?", options: ["रासायनिक डोपिंग", "जीन डोपिंग", "शारीरिक डोपिंग", "पोषण डोपिंग"], answer: "जीन डोपिंग" },
      { id: 15, question: "एथलीटों के लिए डोपिंग की जाँच करने की एक सामान्य विधि क्या है?", options: ["मूत्र विश्लेषण", "रक्तचाप परीक्षण", "दिल की धड़कन की निगरानी", "दृष्टि परीक्षण"], answer: "मूत्र विश्लेषण" },
      { id: 16, question: "'मास्किंग एजेंट' का क्या मतलब है?", options: ["एक दवा जो प्रतिबंधित पदार्थों की उपस्थिति को छुपाती है", "एक उपकरण जो दवा के स्तर को मापता है", "एक सप्लीमेंट जिसका उपयोग रिकवरी के लिए किया जाता है", "एक प्रकार की प्रशिक्षण उपकरण"], answer: "एक दवा जो प्रतिबंधित पदार्थों की उपस्थिति को छुपाती है" },
      { id: 17, question: "WADA की एक जिम्मेदारी क्या है?", options: ["एंटी-डोपिंग कोड का विकास", "खेल आयोजनों का प्रबंधन", "खिलाड़ी प्रशिक्षण का आयोजन", "खेल मीडिया को बढ़ावा देना"], answer: "एंटी-डोपिंग कोड का विकास" },
      { id: 18, question: "विश्व एंटी-डोपिंग कोड का उद्देश्य क्या है?", options: ["एंटी-डोपिंग नियमों और विनियमों को एकसार करना", "खिलाड़ी प्रशिक्षण कार्यक्रम", "खेल उपकरण मानक", "इवेंट शेड्यूलिंग"], answer: "एंटी-डोपिंग नियमों और विनियमों को एकसार करना" },
      { id: 19, question: "निम्नलिखित में से कौन सी सामान्य डोपिंग विधि नहीं है?", options: ["रक्त का संचरण", "स्टेरॉयड का उपयोग", "जीन थेरेपी", "उच्च-ऊंचाई प्रशिक्षण"], answer: "उच्च-ऊंचाई प्रशिक्षण" },
      { id: 20, question: "एंटी-डोपिंग संगठनों का मुख्य कार्य क्या है?", options: ["खेल नियमों को लागू करना", "खिलाड़ी प्रायोजन प्रदान करना", "खेल में निष्पक्षता सुनिश्चित करना", "प्रतियोगिताओं का आयोजन"], answer: "खेल में निष्पक्षता सुनिश्चित करना" }
    ],
    hard: [
      { id: 21, question: "विश्व एंटी-डोपिंग कोड का प्राथमिक उद्देश्य क्या है?", options: ["निष्पक्ष प्रतियोगिता को बढ़ावा देना", "फंडिंग बढ़ाना", "चिकित्सा अनुसंधान प्रदान करना", "राष्ट्रीय टीमों को प्रोत्साहित करना"], answer: "निष्पक्ष प्रतियोगिता को बढ़ावा देना" },
      { id: 22, question: "निम्नलिखित में से कौन सा जीन डोपिंग का एक रूप है?", options: ["जीन संपादन", "स्टेरॉयड का उपयोग", "रक्त डोपिंग", "दवा मास्किंग"], answer: "जीन संपादन" },
      { id: 23, question: "विश्व एंटी-डोपिंग कोड के तहत डोपिंग का दोषी पाए गए एथलीट के लिए क्या परिणाम है?", options: ["जीवनकाल की प्रतिबंध", "निलंबन", "चेतावनी", "जुर्माना"], answer: "निलंबन" },
      { id: 24, question: "जैविक पासपोर्ट का उपयोग डोपिंग का पता लगाने के लिए कैसे किया जाता है?", options: ["जैविक मार्करों में परिवर्तन को ट्रैक करके", "विशिष्ट दवाओं का परीक्षण करके", "जीन सामग्री का विश्लेषण करके", "एथलीट व्यवहार की निगरानी करके"], answer: "जैविक मार्करों में परिवर्तन को ट्रैक करके" },
      { id: 25, question: "एंटी-डोपिंग प्रयासों में एक चुनौती क्या है?", options: ["नए डोपिंग तरीकों के साथ तालमेल बनाए रखना", "एथलीट अनुपालन को सुनिश्चित करना", "खेल आयोजनों का प्रबंधन", "एंटी-डोपिंग के लिए फंडिंग बढ़ाना"], answer: "नए डोपिंग तरीकों के साथ तालमेल बनाए रखना" },
      { id: 26, question: "मास्किंग एजेंट के रूप में सामान्यतः उपयोग किए जाने वाली दवा कौन सी है?", options: ["डाययुरेटिक्स", "एनाल्जेसिक्स", "एंटीबायोटिक्स", "एंटीहिस्टामाइन"], answer: "डाययुरेटिक्स" },
      { id: 27, question: "कौन सा प्रमुख खेल आयोजन अपने एंटी-डोपिंग नियमों के साथ होता है?", options: ["ओलंपिक", "विश्व कप", "टूर डी फ्रांस", "सुपर बाउल"], answer: "ओलंपिक" },
      { id: 28, question: "डोपिंग नियंत्रण में एथलीट जैविक पासपोर्ट की भूमिका क्या है?", options: ["डोपिंग के दीर्घकालिक प्रभावों का पता लगाना", "प्रशिक्षण प्रगति की निगरानी करना", "चोट की रिकवरी का मूल्यांकन करना", "एथलीट प्रमाण पत्रों की पुष्टि करना"], answer: "डोपिंग के दीर्घकालिक प्रभावों का पता लगाना" },
      { id: 29, question: "कौन सा प्रतिबंधित पदार्थ आमतौर पर सहनशीलता को सुधारने के लिए उपयोग किया जाता है?", options: ["एरीथ्रोपोइटिन (EPO)", "टेस्टोस्टेरोन", "मानव वृद्धि हार्मोन (HGH)", "कैफीन"], answer: "एरीथ्रोपोइटिन (EPO)" },
      { id: 30, question: "विश्व एंटी-डोपिंग कोड की निगरानी कौन सा अंतरराष्ट्रीय निकाय करता है?", options: ["विश्व एंटी-डोपिंग एजेंसी (WADA)", "अंतर्राष्ट्रीय ओलंपिक समिति (IOC)", "अंतर्राष्ट्रीय एथलेटिक्स महासंघ (IAAF)", "संयुक्त राष्ट्र (UN)"], answer: "विश्व एंटी-डोपिंग एजेंसी (WADA)" }
    ]
  },
};

const QuizSection = () => {
  const { t, i18n } = useTranslation();
  const [currentLevel, setCurrentLevel] = useState('easy');
  const [quizQuestions, setQuizQuestions] = useState([]);
  const [userAnswers, setUserAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);
  const [score, setScore] = useState(0);

  useEffect(() => {
    setQuizQuestions(getRandomQuestions(currentLevel));
    setUserAnswers({});
    setShowResults(false);
  }, [currentLevel, i18n.language]);

  function getRandomQuestions(level) {
    const levelQuestions = questions[i18n.language][level];
    let shuffledQuestions = levelQuestions.sort(() => Math.random() - 0.5);
    return shuffledQuestions.slice(0, 5); 
  }

  const handleLevelChange = (level) => {
    setCurrentLevel(level);
  };

  const handleAnswerChange = (questionId, answer) => {
    setUserAnswers({
      ...userAnswers,
      [questionId]: answer,
    });
  };

  const handleSubmit = () => {
    let correctAnswers = 0;
    quizQuestions.forEach(question => {
      if (userAnswers[question.id] === question.answer) {
        correctAnswers++;
      }
    });
    setScore(correctAnswers);
    setShowResults(true);
  };

  return (
    <div className="quiz-section p-8">
      <div className="text-center mb-6">
        <h2 className="text-3xl font-bold mb-4">{t('quizTitle')}</h2>
        <p className="text-lg mb-4">{t('quizDescription')}</p>
        <div className="flex justify-center mb-4">
          <button
            onClick={() => handleLevelChange('easy')}
            className={`px-4 py-2 mx-2 rounded ${currentLevel === 'easy' ? 'bg-blue-600 text-white' : 'bg-blue-500 text-white'}`}
          >
            {t('easy')}
          </button>
          <button
            onClick={() => handleLevelChange('medium')}
            className={`px-4 py-2 mx-2 rounded ${currentLevel === 'medium' ? 'bg-green-600 text-white' : 'bg-green-500 text-white'}`}
          >
            {t('medium')}
          </button>
          <button
            onClick={() => handleLevelChange('hard')}
            className={`px-4 py-2 mx-2 rounded ${currentLevel === 'hard' ? 'bg-red-600 text-white' : 'bg-red-500 text-white'}`}
          >
            {t('hard')}
          </button>
        </div>
      </div>

      {showResults ? (
        <div className="text-center">
          <h3 className="text-2xl font-semibold mb-4">{t('resultsTitle')}</h3>
          <p className="text-xl mb-4">{t('resultsDescription', { score, total: quizQuestions.length })}</p>
          <button
            onClick={() => setShowResults(false)}
            className="px-4 py-2 bg-blue-500 text-white rounded"
          >
            {t('tryAgain')}
          </button>
        </div>
      ) : (
        <div className="quiz-questions">
          {quizQuestions.length > 0 ? (
            quizQuestions.map((question, index) => (
              <div key={question.id} className="question mb-4 p-4 border border-gray-300 rounded">
                <h3 className="text-xl font-semibold mb-2">{index + 1}. {question.question}</h3>
                <ul className="options list-disc pl-5">
                  {question.options.map((option, i) => (
                    <li key={i} className="mb-1">
                      <input
                        type="radio"
                        id={`q${question.id}o${i}`}
                        name={`q${question.id}`}
                        value={option}
                        checked={userAnswers[question.id] === option}
                        onChange={() => handleAnswerChange(question.id, option)}
                      />
                      <label htmlFor={`q${question.id}o${i}`} className="ml-2">{option}</label>
                    </li>
                  ))}
                </ul>
              </div>
            ))
          ) : (
            <p className="text-center">{t('loadingQuestions')}</p>
          )}
          <div className="text-center mt-6">
            <button
              onClick={handleSubmit}
              className="px-4 py-2 bg-blue-500 text-white rounded"
            >
              {t('submit')}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default QuizSection;

