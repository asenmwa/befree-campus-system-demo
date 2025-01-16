import React, { useState } from 'react';
import * as XLSX from 'xlsx';

interface CaseData {
  id: number;
  category: string;
  gender: 'Male' | 'Female';
  ageRanges: {
    '12-14': number;
    '15-17': number;
    '18-20': number;
    '21-23': number;
    '24-26': number;
    '27-29': number;
    '30-33': number;
    '34': number;
  };
}

const sampleData: CaseData[] = [
  // Violence and Abuse Cases
  {
    id: 1,
    category: "Sexual Violence (Molestation)",
    gender: "Female",
    ageRanges: { '12-14': 2, '15-17': 1, '18-20': 0, '21-23': 0, '24-26': 0, '27-29': 0, '30-33': 0, '34': 0 }
  },
  {
    id: 1,
    category: "Sexual Violence (Molestation)",
    gender: "Male",
    ageRanges: { '12-14': 1, '15-17': 0, '18-20': 0, '21-23': 0, '24-26': 0, '27-29': 0, '30-33': 0, '34': 0 }
  },
  {
    id: 2,
    category: "DV (Physical Abuse)",
    gender: "Female",
    ageRanges: { '12-14': 1, '15-17': 2, '18-20': 1, '21-23': 0, '24-26': 0, '27-29': 0, '30-33': 0, '34': 0 }
  },
  {
    id: 2,
    category: "DV (Physical Abuse)",
    gender: "Male",
    ageRanges: { '12-14': 0, '15-17': 1, '18-20': 0, '21-23': 0, '24-26': 0, '27-29': 0, '30-33': 0, '34': 0 }
  },
  {
    id: 3,
    category: "DV (Psychological) Abuse",
    gender: "Female",
    ageRanges: { '12-14': 2, '15-17': 3, '18-20': 1, '21-23': 0, '24-26': 0, '27-29': 0, '30-33': 0, '34': 0 }
  },
  {
    id: 3,
    category: "DV (Psychological) Abuse",
    gender: "Male",
    ageRanges: { '12-14': 1, '15-17': 1, '18-20': 0, '21-23': 0, '24-26': 0, '27-29': 0, '30-33': 0, '34': 0 }
  },
  // Family and Relationship Issues
  {
    id: 8,
    category: "Marital Problems",
    gender: "Female",
    ageRanges: { '12-14': 0, '15-17': 0, '18-20': 2, '21-23': 3, '24-26': 1, '27-29': 1, '30-33': 0, '34': 0 }
  },
  {
    id: 8,
    category: "Marital Problems",
    gender: "Male",
    ageRanges: { '12-14': 0, '15-17': 0, '18-20': 1, '21-23': 2, '24-26': 1, '27-29': 0, '30-33': 0, '34': 0 }
  },
  // Substance Abuse
  {
    id: 10,
    category: "Drug misuse / abuse",
    gender: "Female",
    ageRanges: { '12-14': 0, '15-17': 2, '18-20': 3, '21-23': 1, '24-26': 0, '27-29': 0, '30-33': 0, '34': 0 }
  },
  {
    id: 10,
    category: "Drug misuse / abuse",
    gender: "Male",
    ageRanges: { '12-14': 1, '15-17': 3, '18-20': 4, '21-23': 2, '24-26': 1, '27-29': 0, '30-33': 0, '34': 0 }
  },
  {
    id: 11,
    category: "Alcohol misuse/abuse",
    gender: "Female",
    ageRanges: { '12-14': 0, '15-17': 1, '18-20': 2, '21-23': 1, '24-26': 0, '27-29': 0, '30-33': 0, '34': 0 }
  },
  {
    id: 11,
    category: "Alcohol misuse/abuse",
    gender: "Male",
    ageRanges: { '12-14': 1, '15-17': 2, '18-20': 3, '21-23': 2, '24-26': 1, '27-29': 0, '30-33': 0, '34': 0 }
  }
];

export default function MentalHealthTable() {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [region, setRegion] = useState('');
  const [caregiver, setCaregiver] = useState('');
  const exportToExcel = () => {
    // Add report metadata
    const reportMetadata = [
      { 'Report Details': 'Value' },
      { 'Reporting Period': `${startDate} to ${endDate}` },
      { 'Region': region },
      { 'Caregiver': caregiver },
      { 'Report Generated': new Date().toLocaleString() },
      {},  // Empty row for spacing
    ];

    // Transform case data for Excel
    const caseData = sampleData.map(item => ({
      'ID': item.id,
      'Category': item.category,
      'Gender': item.gender,
      '12-14': item.ageRanges['12-14'],
      '15-17': item.ageRanges['15-17'],
      '18-20': item.ageRanges['18-20'],
      '21-23': item.ageRanges['21-23'],
      '24-26': item.ageRanges['24-26'],
      '27-29': item.ageRanges['27-29'],
      '30-33': item.ageRanges['30-33'],
      '34+': item.ageRanges['34']
    }));

    // Create worksheet
    // Create worksheet with metadata and case data
    const ws = XLSX.utils.json_to_sheet(reportMetadata);
    XLSX.utils.sheet_add_json(ws, caseData, { origin: 'A7' });
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Mental Health Stats");
    
    // Save file
    XLSX.writeFile(wb, "mental_health_statistics.xlsx");
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
      <div className="space-y-4 mb-6">
        <h2 className="text-xl font-semibold">Case Report Statistics</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Start Date</label>
            <input
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700">End Date</label>
            <input
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700">Region</label>
            <input
              type="text"
              value={region}
              onChange={(e) => setRegion(e.target.value)}
              placeholder="Enter region"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700">Caregiver</label>
            <input
              type="text"
              value={caregiver}
              onChange={(e) => setCaregiver(e.target.value)}
              placeholder="Enter caregiver name"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
          </div>
        </div>

        <div className="flex justify-end">
          <button
            onClick={exportToExcel}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
          >
            Export to Excel
          </button>
        </div>
      </div>
      
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Gender</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">12-14</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">15-17</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">18-20</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">21-23</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">24-26</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">27-29</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">30-33</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">34+</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {sampleData.map((item, index) => (
              <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{item.category}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{item.gender}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{item.ageRanges['12-14']}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{item.ageRanges['15-17']}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{item.ageRanges['18-20']}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{item.ageRanges['21-23']}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{item.ageRanges['24-26']}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{item.ageRanges['27-29']}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{item.ageRanges['30-33']}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{item.ageRanges['34']}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
