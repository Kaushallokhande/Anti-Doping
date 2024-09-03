import React from "react";
import news1 from "../images/news1.avif";
import news2 from "../images/news2.jpg";
import news3 from "../images/news3.jpg";
import news4 from "../images/news4.avif";

const MainContent = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-center mb-6">
        <div className="text-2xl font-bold">Logo</div>
      </div>

      <div className="grid grid-cols-1 gap-6">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-semibold mb-2">
            Description about Anti-doping
          </h2>
          <p className="text-gray-700 mb-4">
            Anti-doping policies play a crucial role in maintaining the
            integrity of sports and ensuring a level playing field for all
            athletes. The latest news surrounding anti-doping efforts have had a
            positive impact on athletes, sportspersons, and the entire sports
            community. By keeping up with the latest developments, athletes are
            better informed about the substances they consume and the importance
            of clean sports. This heightened awareness not only protects their
            health but also reinforces their commitment to fair competition.
          </p>
          <p className="text-gray-700">
            For sportspersons, these updates provide crucial information about
            regulations, helping them to avoid accidental doping violations.
            Additionally, it boosts public confidence in sports, knowing that
            authorities are vigilantly monitoring and enforcing anti-doping
            rules. Overall, the dissemination of anti-doping news is vital for
            promoting a culture of honesty and dedication within the sporting
            world.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div>
            <h2 className="text-xl font-semibold mb-2">
              Key Points of Anti-doping
            </h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li className="hover:scale-105 hover:text-black transform transition duration-300 ease-in-out">
                Ensures fair competition
              </li>
              <li className="hover:scale-105 hover:text-black transform transition duration-300 ease-in-out">
                Protects athlete health
              </li>
              <li className="hover:scale-105 hover:text-black transform transition duration-300 ease-in-out">
                Reinforces ethical practices
              </li>
            </ul>
          </div>
          <div className="flex justify-center">
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li className="hover:scale-105 hover:text-black transform transition duration-300 ease-in-out">
                Promotes public confidence in sports
              </li>
              <li className="hover:scale-105 hover:text-black transform transition duration-300 ease-in-out">
                Prevents substance abuse
              </li>
              <li className="hover:scale-105 hover:text-black transform transition duration-300 ease-in-out">
                Encourages clean sports culture
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-4">Latest News</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <NewsItem
            imgSrc={news1}
            link="https://example.com/news1"
          />
          <NewsItem
            imgSrc={news2}
            link="https://example.com/news2"
          />
          <NewsItem
            imgSrc={news3}
            link="https://example.com/news3"
          />
          <NewsItem
            imgSrc={news4}
            link="https://example.com/news4"
          />
        </div>
      </div>
    </div>
  );
};

const NewsItem = ({ imgSrc, link }) => {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className="relative group overflow-hidden rounded-lg shadow-lg cursor-pointer">
      <img
        src={imgSrc}
        alt="News"
        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300 ease-in-out"
      />
    </a>
  );
};

export default MainContent;
