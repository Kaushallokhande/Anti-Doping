import React from 'react';
import news1 from '../images/news1.avif';
import news2 from '../images/news2.jpg';
import news3 from '../images/news3.jpg';
import news4 from '../images/news4.avif';
import Bar from './Bar';
import { useTranslation } from 'react-i18next'; 

export default function Cta() {
  const { t } = useTranslation();

  const stories = [
    {
      title: t('cta.stories.highProfileDopingCases'),
      description: t('cta.stories.highProfileDopingCasesDescription'),
      href: 'https://www.history.com/news/doping-scandals-through-history-list',
    },
    {
      title: t('cta.stories.newAntiDopingPolicies'),
      description: t('cta.stories.newAntiDopingPoliciesDescription'),
      href: 'https://example.com/new-anti-doping-policies',
    },
    {
      title: t('cta.stories.researchAndDevelopments'),
      description: t('cta.stories.researchAndDevelopmentsDescription'),
      href: 'https://example.com/research-and-developments',
    },
    {
      title: t('cta.stories.educationalInitiatives'),
      description: t('cta.stories.educationalInitiativesDescription'),
      href: 'https://example.com/educational-initiatives',
    }
  ];

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-8 mx-auto">
        <div className="flex flex-col text-center w-full mb-6">
          <h1 className="sm:text-3xl text-2xl font-semibold title-font mb-4 text-gray-900">{t('cta.topStories')}</h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-700">
            {t('cta.topStoriesDescription')}
          </p>
        </div>


        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {stories.map((story, index) => (
            <div
              key={index}
              className="flex flex-col justify-between bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div>
                <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">{story.title}</h2>
                <p className="leading-relaxed text-base text-gray-700 mb-4">{story.description}</p>
              </div>
              <div className="mt-auto">
                <a href={story.href} className="text-indigo-500 inline-flex items-center cursor-pointer">
                  {t('cta.seeMore')}
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>

        <Bar />

        <div className="mt-10 text-gray-700 text-center">
          <h2 className="sm:text-3xl text-2xl font-semibold title-font mb-4 text-gray-900">{t('cta.antiDopingNews')}</h2>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-700">
            {t('cta.antiDopingNewsDescription')}
          </p>
        </div>


        <div className="mb-6 mt-6">
          <h2 className="text-xl font-semibold mb-2">{t('cta.latestNews')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <NewsItem imgSrc={news1} link="https://example.com/news1" />
            <NewsItem imgSrc={news2} link="https://example.com/news2" />
            <NewsItem imgSrc={news3} link="https://example.com/news3" />
            <NewsItem imgSrc={news4} link="https://example.com/news4" />
          </div>
        </div>

        <div className="text-center mt-4">
          <a href="/news" className="text-indigo-500 inline-flex items-center cursor-pointer font-medium">
            {t('cta.readMore')}
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-4 h-4 ml-2"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}

const NewsItem = ({ imgSrc, link }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="relative group overflow-hidden rounded-lg shadow-lg cursor-pointer transform transition-transform duration-300 ease-in-out hover:scale-105"
    >
      <img
        src={imgSrc}
        alt="News"
        className="w-full h-full object-cover transition-opacity duration-300 ease-in-out group-hover:opacity-90"
      />
    </a>
  );
};
