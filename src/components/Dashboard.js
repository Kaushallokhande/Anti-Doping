import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, LineElement, PointElement, CategoryScale, LinearScale } from 'chart.js';
import { useTranslation } from 'react-i18next';

ChartJS.register(Title, Tooltip, Legend, LineElement, PointElement, CategoryScale, LinearScale);

const mockUserData = {
  name: "John Doe",
  email: "john.doe@example.com",
  completedQuizzes: 5,
  totalPoints: 120,
};

const mockQuizActivity = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
  datasets: [
    {
      label: 'Quizzes Completed',
      data: [2, 3, 4, 2, 5, 4, 6],
      borderColor: 'rgb(75, 192, 192)',
      backgroundColor: 'rgba(75, 192, 192, 0.2)',
      borderWidth: 2,
      tension: 0.1
    },
  ],
};

export default function Dashboard() {
  const { t } = useTranslation();

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <div className="bg-white shadow-lg rounded-xl p-8">
        <h2 className="text-3xl font-extrabold mb-6 text-gray-800">{t('dashboard.title')}</h2>
        
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {/* Personal Information */}
          <div className="bg-gray-50 p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-4 text-gray-700">{t('dashboard.personalInformation')}</h3>
            <p className="text-lg"><strong>{t('dashboard.name')}:</strong> {mockUserData.name}</p>
            <p className="text-lg"><strong>{t('dashboard.email')}:</strong> {mockUserData.email}</p>
            <p className="text-lg"><strong>{t('dashboard.completedQuizzes')}:</strong> {mockUserData.completedQuizzes}</p>
            <p className="text-lg"><strong>{t('dashboard.totalPoints')}:</strong> {mockUserData.totalPoints}</p>
          </div>

          {/* Quiz Activity Chart */}
          <div className="bg-gray-50 p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-4 text-gray-700">{t('dashboard.quizActivity')}</h3>
            <div className="h-64">
              <Line data={mockQuizActivity} options={{ responsive: true, maintainAspectRatio: false }} />
            </div>
          </div>
        </div>

        {/* Recent Updates */}
        <div className="bg-gray-50 p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold mb-4 text-gray-700">{t('dashboard.recentUpdates')}</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="text-blue-600 hover:underline">{t('dashboard.update1')}</a>
            </li>
            <li>
              <a href="#" className="text-blue-600 hover:underline">{t('dashboard.update2')}</a>
            </li>
            <li>
              <a href="#" className="text-blue-600 hover:underline">{t('dashboard.update3')}</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
