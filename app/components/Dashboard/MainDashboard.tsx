import React from 'react';
import { Bar, Line, Doughnut } from 'react-chartjs-2';
import MentalHealthTable from './MentalHealthTable';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import Header from '../layout/Header';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

export default function MainDashboard() {
  // Sample data for various metrics
  const screeningData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'TB Screening',
        data: [65, 59, 80, 81, 56, 55],
        backgroundColor: '#FF6B6B',
      },
      {
        label: 'STI Screening',
        data: [45, 49, 60, 71, 46, 45],
        backgroundColor: '#4ECDC4',
      },
    ],
  };

  const condomDistribution = {
    labels: ['Male Condoms', 'Female Condoms', 'Lubricants', 'Safe Sex Kits'],
    datasets: [
      {
        data: [1200, 800, 600, 400],
        backgroundColor: ['#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4'],
      },
    ],
  };

  const artPrepData = {
    labels: ['18-24', '25-30', '31-35', '36-40', '40+'],
    datasets: [
      {
        label: 'PrEP Users',
        data: [120, 190, 150, 90, 50],
        borderColor: '#FF6B6B',
        backgroundColor: 'rgba(255, 107, 107, 0.5)',
      },
      {
        label: 'ART Patients',
        data: [100, 150, 120, 80, 40],
        borderColor: '#4ECDC4',
        backgroundColor: 'rgba(78, 205, 196, 0.5)',
      },
    ],
  };

  const ageDistribution = {
    labels: ['18-20', '21-24', '25-29', '30-34', '35+'],
    datasets: [
      {
        label: 'Age Distribution',
        data: [250, 420, 330, 180, 120],
        backgroundColor: [
          '#FF6B6B',
          '#4ECDC4',
          '#45B7D1',
          '#96CEB4',
          '#FFEAA7',
        ],
      },
    ],
  };

  return (
    <div className="min-h-screen bg-gray-50">
 
      
      <div className="p-6">
        {/* Dashboard Header */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800">Health Services Analytics</h2>
          <p className="text-gray-600">Comprehensive overview of youth health services and metrics</p>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <h3 className="text-gray-500 text-sm font-medium">Median Age</h3>
            <p className="text-2xl font-bold text-gray-800">24.5</p>
            <span className="text-gray-500 text-sm">Years</span>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <h3 className="text-gray-500 text-sm font-medium">Monthly Visits</h3>
            <p className="text-2xl font-bold text-gray-800">856</p>
            <span className="text-green-500 text-sm">↑ 12% increase</span>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <h3 className="text-gray-500 text-sm font-medium">PrEP Coverage</h3>
            <p className="text-2xl font-bold text-gray-800">78%</p>
            <span className="text-green-500 text-sm">↑ 5% increase</span>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <h3 className="text-gray-500 text-sm font-medium">STI Treatment Rate</h3>
            <p className="text-2xl font-bold text-gray-800">92%</p>
            <span className="text-green-500 text-sm">↑ 3% increase</span>
          </div>
        </div>

        {/* Charts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <h2 className="text-xl font-semibold mb-4">Screening Tests Overview</h2>
            <Bar 
              data={screeningData}
              options={{
                responsive: true,
                plugins: {
                  legend: {
                    position: 'bottom' as const,
                  },
                },
              }}
            />
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <h2 className="text-xl font-semibold mb-4">PrEP & ART Distribution by Age</h2>
            <Line 
              data={artPrepData}
              options={{
                responsive: true,
                plugins: {
                  legend: {
                    position: 'bottom' as const,
                  },
                },
              }}
            />
          </div>
        </div>

        {/* Bottom Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <h2 className="text-xl font-semibold mb-4">Condom & Safe Sex Kit Distribution</h2>
            <Doughnut 
              data={condomDistribution}
              options={{
                responsive: true,
                plugins: {
                  legend: {
                    position: 'bottom' as const,
                  },
                },
              }}
            />
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <h2 className="text-xl font-semibold mb-4">Age Distribution</h2>
            <Bar
              data={ageDistribution}
              options={{
                responsive: true,
                plugins: {
                  legend: {
                    display: false,
                  },
                },
              }}
            />
          </div>
        </div>

        {/* Additional Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <h3 className="text-xl font-semibold mb-4">STI Statistics</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Treatment Success Rate</span>
                <span className="font-semibold text-green-500">92%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Follow-up Rate</span>
                <span className="font-semibold text-blue-500">85%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Partner Notification</span>
                <span className="font-semibold text-orange-500">78%</span>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <h3 className="text-xl font-semibold mb-4">PrEP Metrics</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Adherence Rate</span>
                <span className="font-semibold text-green-500">88%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Retention Rate</span>
                <span className="font-semibold text-blue-500">82%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">New Enrollments</span>
                <span className="font-semibold text-orange-500">+45</span>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <h3 className="text-xl font-semibold mb-4">Campus Attendance</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Daily Average</span>
                <span className="font-semibold text-green-500">125</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Peak Hours</span>
                <span className="font-semibold text-blue-500">10AM-2PM</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Return Rate</span>
                <span className="font-semibold text-orange-500">76%</span>
              </div>
            </div>
          </div>
        </div>

        {/* Mental Health Statistics Table */}
        <div className="mt-8">
          <MentalHealthTable />
        </div>
      </div>
    </div>
  );
}
