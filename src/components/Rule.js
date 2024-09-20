import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import "../style/newrules.css";
import Test from "./test";

const RulesAndRegulations = () => {
  const { t } = useTranslation();
  const [filter, setFilter] = useState({
    athleteType: "",
    age: "",
    gender: "",
    position: "",
    testing: "",
    geography: "",
  });

  const [filteredData, setFilteredData] = useState(null);

  const data = {
    Basketball: [
      "Rule 1: No illegal substances.",
      "Rule 2: Mandatory anti-doping education programs.",
      "Rule 3: Random testing during the season.",
      "Rule 4: Players must report any therapeutic use exemptions (TUEs).",
    ],
    Soccer: [
      "Rule 1: Strict penalties for doping violations.",
      "Rule 2: Regular and surprise doping tests.",
      "Rule 3: Mandatory educational workshops on anti-doping.",
      "Rule 4: Players are responsible for ensuring any substances they use are not banned.",
    ],
    Tennis: [
      "Rule 1: Random and out-of-competition drug testing.",
      "Rule 2: Therapeutic Use Exemptions (TUEs) must be filed for approved medications.",
      "Rule 3: Strict anti-doping rules for junior and senior players.",
      "Rule 4: Players must report any changes in their health status or medication.",
    ],
  };

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
    applyFilter(newFilter);
  };

  const applyFilter = (filter) => {
    const { athleteType, age, gender, position, testing, geography } = filter;

    const filtered = Object.entries(data).filter(([key, items]) => {
      const isAthleteTypeMatch = athleteType ? key === athleteType : true;
      const isAgeMatch = age === "adult"; // Only "adult" is allowed
      const isGenderMatch = gender === "male"; // Only "male" is allowed
      const isPositionMatch = position === "forward"; // Only "forward" is allowed
      const isTestingMatch = testing; // Include any selected testing criteria
      const isGeographyMatch = geography; // Include any selected geography criteria

      return (
        isAthleteTypeMatch &&
        isAgeMatch &&
        isGenderMatch &&
        isPositionMatch &&
        isTestingMatch &&
        isGeographyMatch
      );
    });

    setFilteredData(filtered);
  };
  return (
    <>
      <h2 className="pt-10 text-center font-bold">
        Basic Rules And Regulations
      </h2>
      <div className="rules-container mx-auto  px-4 py-8 rules-flex-container">
        <div className="rules-filter-box">
          <Test filter={filter} onFilterChange={handleFilterChange} />
        </div>
        <div className="rules-rules-section">
          {/* Render filtered data */}
          {filteredData ? (
            filteredData.map(([title, items]) => (
              <section key={title} className="rules-section mb-8">
                <h2 className="rules-h2 text-2xl font-semibold mb-4">
                  {title}
                </h2>
                <ul className="rules-ul list-disc pl-5 mb-4">
                  {items.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </section>
            ))
          ) : (
            <>
            
                <div className="my-1"></div>

                <section className="rules-section mb-8">
                  <h2 className="rules-h2 text-2xl font-semibold mb-4">
                    {t("rulesAndRegulations.prohibitedSubstances.title")}
                  </h2>
                  <p className="rules-p text-lg mb-4">
                    {t("rulesAndRegulations.prohibitedSubstances.description")}
                  </p>
                  <ul className="rules-ul list-disc pl-5 mb-4">
                    {t("rulesAndRegulations.prohibitedSubstances.items", {
                      returnObjects: true,
                    }).map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                  <p className="rules-p text-lg">
                    {t("rulesAndRegulations.prohibitedSubstances.final")}
                  </p>
                </section>

                <section className="rules-section mb-8">
                  <h2 className="rules-h2 text-2xl font-semibold mb-4">
                    {t("rulesAndRegulations.testingProcedures.title")}
                  </h2>
                  <p className="rules-p text-lg">
                    {t("rulesAndRegulations.testingProcedures.description")}
                  </p>
                  <ul className="rules-ul list-disc pl-5 mb-4">
                    {t("rulesAndRegulations.testingProcedures.items", {
                      returnObjects: true,
                    }).map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                  <p className="rules-p text-lg">
                    {t("rulesAndRegulations.testingProcedures.final")}
                  </p>
                </section>

                <section className="rules-section mb-8">
                  <h2 className="rules-h2 text-2xl font-semibold mb-4">
                    {t("rulesAndRegulations.consequences.title")}
                  </h2>
                  <p className="rules-p text-lg">
                    {t("rulesAndRegulations.consequences.description")}
                  </p>
                  <ul className="rules-ul list-disc pl-5 mb-4">
                    {t("rulesAndRegulations.consequences.items", {
                      returnObjects: true,
                    }).map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                  <p className="rules-p text-lg">
                    {t("rulesAndRegulations.consequences.final")}
                  </p>
                </section>

                <section className="rules-section mb-8">
                  <h2 className="rules-h2 text-2xl font-semibold mb-4">
                    {t("rulesAndRegulations.rightsResponsibilities.title")}
                  </h2>
                  <p className="rules-p text-lg">
                    {t(
                      "rulesAndRegulations.rightsResponsibilities.description"
                    )}
                  </p>
                  <ul className="rules-ul list-disc pl-5 mb-4">
                    {t("rulesAndRegulations.rightsResponsibilities.items", {
                      returnObjects: true,
                    }).map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                  <p className="rules-p text-lg">
                    {t("rulesAndRegulations.rightsResponsibilities.final")}
                  </p>
                </section>

                <section className="rules-section">
                  <h2 className="rules-h2 text-2xl font-semibold mb-4">
                    {t("rulesAndRegulations.educationalResources.title")}
                  </h2>
                  <p className="rules-p text-lg">
                    {t("rulesAndRegulations.educationalResources.description")}
                  </p>
                  <ul className="rules-ul list-disc pl-5 mb-4">
                    {t("rulesAndRegulations.educationalResources.items", {
                      returnObjects: true,
                    }).map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                  <p className="rules-p text-lg">
                    {t("rulesAndRegulations.educationalResources.final")}
                  </p>
                </section>
            
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default RulesAndRegulations;
