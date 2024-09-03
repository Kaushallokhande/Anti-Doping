import React from 'react';
import { useTranslation } from 'react-i18next';
import "../style/rule.css";

const RulesAndRegulations = () => {
    const { t } = useTranslation();
    
    return (
        <div className="container mx-auto px-4 py-8">
            <div className='my-10'></div>
            <h1 className="text-3xl font-bold mb-6">{t("rulesAndRegulations.title")}</h1>
            
            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">{t("rulesAndRegulations.prohibitedSubstances.title")}</h2>
                <p className="text-lg mb-4">{t("rulesAndRegulations.prohibitedSubstances.description")}</p>
                <ul className="list-disc pl-5 mb-4">
                    {t("rulesAndRegulations.prohibitedSubstances.items", { returnObjects: true }).map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
                <p className="text-lg">{t("rulesAndRegulations.prohibitedSubstances.final")}</p>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">{t("rulesAndRegulations.testingProcedures.title")}</h2>
                <p className="text-lg">{t("rulesAndRegulations.testingProcedures.description")}</p>
                <ul className="list-disc pl-5 mb-4">
                    {t("rulesAndRegulations.testingProcedures.items", { returnObjects: true }).map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
                <p className="text-lg">{t("rulesAndRegulations.testingProcedures.final")}</p>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">{t("rulesAndRegulations.consequences.title")}</h2>
                <p className="text-lg">{t("rulesAndRegulations.consequences.description")}</p>
                <ul className="list-disc pl-5 mb-4">
                    {t("rulesAndRegulations.consequences.items", { returnObjects: true }).map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
                <p className="text-lg">{t("rulesAndRegulations.consequences.final")}</p>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">{t("rulesAndRegulations.rightsResponsibilities.title")}</h2>
                <p className="text-lg">{t("rulesAndRegulations.rightsResponsibilities.description")}</p>
                <ul className="list-disc pl-5 mb-4">
                    {t("rulesAndRegulations.rightsResponsibilities.items", { returnObjects: true }).map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
                <p className="text-lg">{t("rulesAndRegulations.rightsResponsibilities.final")}</p>
            </section>

            <section>
                <h2 className="text-2xl font-semibold mb-4">{t("rulesAndRegulations.educationalResources.title")}</h2>
                <p className="text-lg">{t("rulesAndRegulations.educationalResources.description")}</p>
                <ul className="list-disc pl-5 mb-4">
                    {t("rulesAndRegulations.educationalResources.items", { returnObjects: true }).map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
                <p className="text-lg">{t("rulesAndRegulations.educationalResources.final")}</p>
            </section>
        </div>
    );
}

export default RulesAndRegulations;
