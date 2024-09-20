import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
} from "chart.js";
import { useTranslation } from "react-i18next";
import "../style/dashboard.css";

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale
);

const mockUserData = {
  name: "Navdeep Kumar",
  email: "navdeepkumar@gmail.com",
  completedQuizzes: 15,
  totalPoints: 320,
  badges: [
    {
      id: 1,
      name: "Speedster",
      description: "Completed a quiz in under 5 minutes",
      earnedDate: "2023-06-12",
      imageUrl: "/Images/240_F_805101226_YdtfzCIgPsC2pkRoIUG5bN6nUOojJqOX.jpg",
    },
    {
      id: 2,
      name: "Perfect Score",
      description: "Scored 100% on a quiz",
      earnedDate: "2023-07-01",
      imageUrl: "/Images/depositphotos_59501623-stock-illustration-an-archery-board.jpg",
    },
    {
      id: 3,
      name: "Consistent Performer",
      description: "Completed quizzes for 7 consecutive days",
      earnedDate: "2023-08-20",
      imageUrl: "/Images/Target_logo.png",
    },
  ],
};

const mockProgressData = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"],
  datasets: [
    {
      label: "Total Points",
      data: [50, 60, 80, 100, 140, 180, 220, 270, 320],
      borderColor: "rgb(54, 162, 235)",
      backgroundColor: "rgba(54, 162, 235, 0.2)",
      borderWidth: 2,
      tension: 0.1,
    },
  ],
};

export default function AthleteDashboard() {
  const { t } = useTranslation();
  const [profilePhoto, setProfilePhoto] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfilePhoto(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="bg-white shadow-lg rounded-xl p-8">
        <h1 className="text-3l font-extrabold mb-6 text-cyan-550 text-center bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-blue-600">
          {t("dashboard.title")}
        </h1>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {/* Personal Information */}
          <div className="bg-gray-50 p-6 rounded-lg shadow-md col-span-1 personal-info-container">
            <h3 className="text-2xl font-semibold mb-4 text-gray-700 text-center">
              {t("dashboard.personalInformation")}
            </h3>

            {/* Photo Upload Section */}
            <div className="personal-info-photo">
              {profilePhoto ? (
                <img
                  src={profilePhoto}
                  alt="Profile"
                />
              ) : (
                <img
                  src="/Images/businessman-in-suit-head-vector-icon.jpg"
                  alt="Placeholder"
                />
              )}
            </div>
            <input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className="mb-4"
            />

            <div className="personal-info-details">
              <p className="text-lg mb-2">
                <strong>{t("dashboard.name")}:</strong> {mockUserData.name}
              </p>
              <p className="text-lg mb-2">
                <strong>{t("dashboard.email")}:</strong> {mockUserData.email}
              </p>
              <p className="text-lg mb-2">
                <strong>{t("dashboard.completedQuizzes")}:</strong>{" "}
                {mockUserData.completedQuizzes}
              </p>
              <p className="text-lg mb-2">
                <strong>{t("dashboard.totalPoints")}:</strong>{" "}
                {mockUserData.totalPoints}
              </p>
            </div>
          </div>

          {/* Progress Graph */}
          <div className="bg-gray-50 p-6 rounded-lg shadow-md col-span-2 chart-container">
            <h3 className="text-2xl font-semibold text-center mb-4 text-gray-700">
              {t("Dashboard Progress")}
            </h3>
            <div className="chart-wrapper">
              <Line
                data={mockProgressData}
                options={{ responsive: true, maintainAspectRatio: false }}
              />
            </div>
          </div>
        </div>

        {/* Badges Section */}
        <div className="bg-gray-50 p-6 rounded-lg shadow-md mb-8">
          <h3 className="text-3xl text-center text-underline font-semibold mb-4 text-cyan-600 text-bold">
            {t("Badges")}
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 abc  ">
            {mockUserData.badges.map((badge) => (
              <div
                key={badge.id}
                className="bg-white p-4 rounded-lg shadow-md text-center"
              >
                <img
                  src={badge.imageUrl}
                  alt={`${badge.name} badge`}
                  className="w-20 h-20 mx-auto mb-4"
                />
                <h4 className="text-lg font-bold text-blue-600 mb-2">
                  {badge.name}
                </h4>
                <p className="text-gray-600">{badge.description}</p>
                <p className="text-sm text-gray-400 mt-2">
                  {t("earned on ")}: {badge.earnedDate}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Updates */}
        <div className="bg-gray-50 p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold mb-4 text-gray-700">
            {t("dashboard.recentUpdates")}
          </h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="text-blue-600 hover:underline">
                {t("dashboard.update1")}
              </a>
            </li>
            <li>
              <a href="#" className="text-blue-600 hover:underline">
                {t("dashboard.update2")}
              </a>
            </li>
            <li>
              <a href="#" className="text-blue-600 hover:underline">
                {t("dashboard.update3")}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
