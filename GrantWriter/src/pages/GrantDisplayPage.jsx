import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FiEdit2, FiDownload, FiSave, FiX } from 'react-icons/fi';
import GrantPDF from '../components/GrantPDF';

const GrantDisplayPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);
  const [grantData, setGrantData] = useState({
    title: "Sample Grant Proposal",
    organization: "Example Organization",
    amount: "$50,000",
    deadline: "2024-12-31",
    description: "This is a detailed description of the grant proposal...",
    objectives: [
      "Objective 1",
      "Objective 2",
      "Objective 3"
    ],
    budget: {
      personnel: "$20,000",
      equipment: "$15,000",
      materials: "$10,000",
      other: "$5,000"
    }
  });

  useEffect(() => {
    // Load grant data from localStorage
    const savedGrant = localStorage.getItem('currentGrantProposal');
    if (savedGrant) {
      try {
        const parsedGrant = JSON.parse(savedGrant);
        // Transform the AI-generated data to match our display format
        setGrantData({
          title: parsedGrant.projectTitle || "Grant Proposal",
          organization: parsedGrant.organizationName || "",
          amount: parsedGrant.amount || "$0",
          deadline: parsedGrant.deadline || "",
          description: parsedGrant.projectDescription || "",
          objectives: parsedGrant.objectives || [],
          budget: {
            personnel: "To be determined",
            equipment: "To be determined",
            materials: "To be determined",
            other: "To be determined"
          }
        });
      } catch (error) {
        console.error('Error parsing grant data:', error);
        // If there's an error, redirect back to home
        navigate('/');
      }
    }
  }, [navigate]);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    setIsEditing(false);
    // Save the updated grant data back to localStorage
    localStorage.setItem('currentGrantProposal', JSON.stringify(grantData));
  };

  const handleCancel = () => {
    setIsEditing(false);
    // Reload the original data from localStorage
    const savedGrant = localStorage.getItem('currentGrantProposal');
    if (savedGrant) {
      const parsedGrant = JSON.parse(savedGrant);
      setGrantData({
        title: parsedGrant.projectTitle || "Grant Proposal",
        organization: parsedGrant.organizationName || "",
        amount: parsedGrant.amount || "$0",
        deadline: parsedGrant.deadline || "",
        description: parsedGrant.projectDescription || "",
        objectives: parsedGrant.objectives || [],
        budget: {
          personnel: "To be determined",
          equipment: "To be determined",
          materials: "To be determined",
          other: "To be determined"
        }
      });
    }
  };

  const handleDownload = () => {
    try {
      const blob = GrantPDF({ grantData });
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `${grantData.title.replace(/\s+/g, '_')}.pdf`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Error generating PDF:', error);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900">{grantData.title}</h1>
        <div className="flex space-x-4">
          {!isEditing ? (
            <>
              <button
                onClick={handleEdit}
                className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                <FiEdit2 className="mr-2" />
                Edit
              </button>
              <button
                onClick={handleDownload}
                className="flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
              >
                <FiDownload className="mr-2" />
                Download PDF
              </button>
            </>
          ) : (
            <>
              <button
                onClick={handleSave}
                className="flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
              >
                <FiSave className="mr-2" />
                Save
              </button>
              <button
                onClick={handleCancel}
                className="flex items-center px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
              >
                <FiX className="mr-2" />
                Cancel
              </button>
            </>
          )}
        </div>
      </div>

      {/* Grant Details */}
      <div className="bg-white rounded-lg shadow-lg p-6 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Organization</h2>
            {isEditing ? (
              <input
                type="text"
                value={grantData.organization}
                onChange={(e) => setGrantData({ ...grantData, organization: e.target.value })}
                className="w-full p-2 border rounded-lg"
              />
            ) : (
              <p className="text-gray-600">{grantData.organization}</p>
            )}
          </div>
          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Amount</h2>
            {isEditing ? (
              <input
                type="text"
                value={grantData.amount}
                onChange={(e) => setGrantData({ ...grantData, amount: e.target.value })}
                className="w-full p-2 border rounded-lg"
              />
            ) : (
              <p className="text-gray-600">{grantData.amount}</p>
            )}
          </div>
          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Deadline</h2>
            {isEditing ? (
              <input
                type="date"
                value={grantData.deadline}
                onChange={(e) => setGrantData({ ...grantData, deadline: e.target.value })}
                className="w-full p-2 border rounded-lg"
              />
            ) : (
              <p className="text-gray-600">{grantData.deadline}</p>
            )}
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Description</h2>
          {isEditing ? (
            <textarea
              value={grantData.description}
              onChange={(e) => setGrantData({ ...grantData, description: e.target.value })}
              className="w-full p-2 border rounded-lg h-32"
            />
          ) : (
            <p className="text-gray-600">{grantData.description}</p>
          )}
        </div>

        <div>
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Objectives</h2>
          {isEditing ? (
            <div className="space-y-2">
              {grantData.objectives.map((objective, index) => (
                <input
                  key={index}
                  type="text"
                  value={objective}
                  onChange={(e) => {
                    const newObjectives = [...grantData.objectives];
                    newObjectives[index] = e.target.value;
                    setGrantData({ ...grantData, objectives: newObjectives });
                  }}
                  className="w-full p-2 border rounded-lg"
                />
              ))}
            </div>
          ) : (
            <ul className="list-disc list-inside text-gray-600">
              {grantData.objectives.map((objective, index) => (
                <li key={index}>{objective}</li>
              ))}
            </ul>
          )}
        </div>

        <div>
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Budget Breakdown</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {Object.entries(grantData.budget).map(([category, amount]) => (
              <div key={category} className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-medium text-gray-800 capitalize">{category}</h3>
                {isEditing ? (
                  <input
                    type="text"
                    value={amount}
                    onChange={(e) => {
                      setGrantData({
                        ...grantData,
                        budget: { ...grantData.budget, [category]: e.target.value }
                      });
                    }}
                    className="w-full p-2 border rounded-lg mt-1"
                  />
                ) : (
                  <p className="text-gray-600 mt-1">{amount}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GrantDisplayPage; 