import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FiEdit2, FiDownload, FiSave, FiX, FiCalendar, FiDollarSign, FiUsers, FiTarget, FiClipboard, FiBarChart2, FiCheckCircle, FiClock } from 'react-icons/fi';
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
    executiveSummary: "A comprehensive summary of the project and its goals...",
    objectives: [
      "Objective 1",
      "Objective 2",
      "Objective 3"
    ],
    methodology: "Detailed methodology and approach for implementing the project...",
    timeline: {
      "Phase 1 (Months 1-3)": "Initial setup and planning",
      "Phase 2 (Months 4-6)": "Implementation and development",
      "Phase 3 (Months 7-8)": "Testing and deployment"
    },
    evaluationPlan: "Plan for evaluating project success and measuring outcomes...",
    sustainability: "Strategy for ensuring project sustainability beyond grant period...",
    teamQualifications: "Details about team members and their qualifications...",
    partnerships: "Key partnerships and collaborations for project implementation...",
    impactStatement: "Expected impact and outcomes of the project...",
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
          executiveSummary: parsedGrant.executiveSummary || "",
          objectives: parsedGrant.objectives || [],
          methodology: parsedGrant.methodology || "",
          timeline: typeof parsedGrant.timeline === 'string' 
            ? { "Project Timeline": parsedGrant.timeline }
            : parsedGrant.timeline || { "Project Timeline": "No timeline provided" },
          evaluationPlan: parsedGrant.evaluationPlan || "",
          sustainability: parsedGrant.sustainability || "",
          teamQualifications: parsedGrant.teamQualifications || "",
          partnerships: parsedGrant.partnerships || "",
          impactStatement: parsedGrant.impactStatement || "",
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
        executiveSummary: parsedGrant.executiveSummary || "",
        objectives: parsedGrant.objectives || [],
        methodology: parsedGrant.methodology || "",
        timeline: typeof parsedGrant.timeline === 'string' 
          ? { "Project Timeline": parsedGrant.timeline }
          : parsedGrant.timeline || { "Project Timeline": "No timeline provided" },
        evaluationPlan: parsedGrant.evaluationPlan || "",
        sustainability: parsedGrant.sustainability || "",
        teamQualifications: parsedGrant.teamQualifications || "",
        partnerships: parsedGrant.partnerships || "",
        impactStatement: parsedGrant.impactStatement || "",
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
      // Create and trigger the PDF generation
      <GrantPDF grantData={grantData} />;
    } catch (error) {
      console.error('Error generating PDF:', error);
    }
  };

  const renderEditableField = (label, value, onChange, type = "text", multiline = false) => (
    <div className="mb-6">
      <h2 className="text-xl font-semibold text-gray-800 mb-2 flex items-center">
        {label}
      </h2>
      {isEditing ? (
        multiline ? (
          <textarea
            value={value}
            onChange={onChange}
            className="w-full p-3 border rounded-lg min-h-[150px] focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        ) : (
          <input
            type={type}
            value={value}
            onChange={onChange}
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        )
      ) : (
        <p className="text-gray-600 whitespace-pre-wrap">{value}</p>
      )}
    </div>
  );

  const renderTimeline = () => (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
        <FiClock className="mr-2 text-blue-600" />
        Project Timeline
      </h2>
      {isEditing ? (
        <div className="space-y-4">
          {Object.entries(grantData.timeline).map(([phase, description], index) => (
            <div key={index} className="space-y-2">
              <input
                type="text"
                value={phase}
                onChange={(e) => {
                  const newTimeline = { ...grantData.timeline };
                  const oldPhase = Object.keys(grantData.timeline)[index];
                  delete newTimeline[oldPhase];
                  newTimeline[e.target.value] = description;
                  setGrantData({ ...grantData, timeline: newTimeline });
                }}
                className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent font-medium"
              />
              <textarea
                value={description}
                onChange={(e) => {
                  const newTimeline = { ...grantData.timeline };
                  newTimeline[phase] = e.target.value;
                  setGrantData({ ...grantData, timeline: newTimeline });
                }}
                className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                rows="3"
              />
            </div>
          ))}
        </div>
      ) : (
        <div className="space-y-6">
          {Object.entries(grantData.timeline).map(([phase, description], index) => (
            <div key={index} className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold text-gray-800 mb-2">{phase}</h3>
              <p className="text-gray-600">{description}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );

  return (
    <div className="max-w-5xl mx-auto p-6">
      {/* Header Section */}
      <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-4xl font-bold text-gray-900">{grantData.title}</h1>
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg">
            <FiUsers className="text-2xl text-blue-600" />
            <div>
              <p className="text-sm text-gray-600">Organization</p>
              <p className="font-semibold">{grantData.organization}</p>
            </div>
          </div>
          <div className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg">
            <FiDollarSign className="text-2xl text-green-600" />
            <div>
              <p className="text-sm text-gray-600">Amount</p>
              <p className="font-semibold">{grantData.amount}</p>
            </div>
          </div>
          <div className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg">
            <FiCalendar className="text-2xl text-orange-600" />
            <div>
              <p className="text-sm text-gray-600">Deadline</p>
              <p className="font-semibold">{grantData.deadline}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="space-y-8">
        {/* Executive Summary */}
        {renderEditableField(
          "Executive Summary",
          grantData.executiveSummary,
          (e) => setGrantData({ ...grantData, executiveSummary: e.target.value }),
          "text",
          true
        )}

        {/* Project Description */}
        {renderEditableField(
          "Project Description",
          grantData.description,
          (e) => setGrantData({ ...grantData, description: e.target.value }),
          "text",
          true
        )}

        {/* Objectives */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
            <FiTarget className="mr-2 text-blue-600" />
            Project Objectives
          </h2>
          {isEditing ? (
            <div className="space-y-3">
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
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              ))}
            </div>
          ) : (
            <ul className="space-y-3">
              {grantData.objectives.map((objective, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <FiCheckCircle className="text-green-500 mt-1" />
                  <span className="text-gray-600">{objective}</span>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Methodology */}
        {renderEditableField(
          "Methodology",
          grantData.methodology,
          (e) => setGrantData({ ...grantData, methodology: e.target.value }),
          "text",
          true
        )}

        {/* Timeline */}
        {renderTimeline()}

        {/* Evaluation Plan */}
        {renderEditableField(
          "Evaluation Plan",
          grantData.evaluationPlan,
          (e) => setGrantData({ ...grantData, evaluationPlan: e.target.value }),
          "text",
          true
        )}

        {/* Sustainability */}
        {renderEditableField(
          "Sustainability Plan",
          grantData.sustainability,
          (e) => setGrantData({ ...grantData, sustainability: e.target.value }),
          "text",
          true
        )}

        {/* Team Qualifications */}
        {renderEditableField(
          "Team Qualifications",
          grantData.teamQualifications,
          (e) => setGrantData({ ...grantData, teamQualifications: e.target.value }),
          "text",
          true
        )}

        {/* Partnerships */}
        {renderEditableField(
          "Partnerships",
          grantData.partnerships,
          (e) => setGrantData({ ...grantData, partnerships: e.target.value }),
          "text",
          true
        )}

        {/* Impact Statement */}
        {renderEditableField(
          "Impact Statement",
          grantData.impactStatement,
          (e) => setGrantData({ ...grantData, impactStatement: e.target.value }),
          "text",
          true
        )}

        {/* Budget Breakdown */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
            <FiBarChart2 className="mr-2 text-green-600" />
            Budget Breakdown
          </h2>
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
                    className="w-full p-2 border rounded-lg mt-1 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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