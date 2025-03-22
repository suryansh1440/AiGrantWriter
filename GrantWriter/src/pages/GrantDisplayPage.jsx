import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FiEdit2, FiDownload, FiSave, FiX, FiCalendar, FiDollarSign, FiUsers, FiTarget, FiClipboard, FiBarChart2, FiCheckCircle, FiClock } from 'react-icons/fi';
import { generatePDF } from '../components/GrantPDF';

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
      travel: "$5,000",
      contractual: "$8,000",
      other: "$2,000",
      indirect: "$5,000"
    },
    risks: [
      {
        risk: "Risk 1",
        mitigation: "Mitigation strategy for risk 1"
      },
      {
        risk: "Risk 2",
        mitigation: "Mitigation strategy for risk 2"
      }
    ],
    innovationStatement: "Description of project innovation and field advancement...",
    communityEngagement: "Details of community engagement and benefits...",
    previousSuccess: "Relevant past successes and experience...",
    dataManagement: "Data collection, storage, and analysis approach...",
    compliance: "Regulatory compliance and ethical considerations..."
  });

  useEffect(() => {
    const savedGrant = localStorage.getItem('currentGrantProposal');
    console.log('Raw data from localStorage:', savedGrant);
    
    if (savedGrant) {
      try {
        const parsedGrant = JSON.parse(savedGrant);
        console.log('Parsed grant data:', parsedGrant);
        
        // Parse budget breakdown if it exists
        let budgetBreakdown = {
          personnel: "To be determined",
          equipment: "To be determined",
          materials: "To be determined",
          travel: "To be determined",
          contractual: "To be determined",
          other: "To be determined",
          indirect: "To be determined"
        };

        if (parsedGrant.budgetBreakdown) {
          try {
            const parsedBudget = typeof parsedGrant.budgetBreakdown === 'string' 
              ? JSON.parse(parsedGrant.budgetBreakdown)
              : parsedGrant.budgetBreakdown;
            
            console.log('Parsed budget data:', parsedBudget);
            
            budgetBreakdown = {
              personnel: parsedBudget.personnel || "To be determined",
              equipment: parsedBudget.equipment || "To be determined",
              materials: parsedBudget.materials || "To be determined",
              travel: parsedBudget.travel || "To be determined",
              contractual: parsedBudget.contractual || "To be determined",
              other: parsedBudget.other || "To be determined",
              indirect: parsedBudget.indirect || "To be determined"
            };
            
            console.log('Processed budget breakdown:', budgetBreakdown);
          } catch (e) {
            console.error('Budget parsing error:', e);
          }
        }

        // Format amount with proper currency formatting
        const formatAmount = (amount) => {
          if (!amount) return "$0";
          // Remove any existing currency symbols and commas
          const numericAmount = parseFloat(amount.replace(/[^0-9.-]+/g, ""));
          const formattedAmount = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
            minimumFractionDigits: 0,
            maximumFractionDigits: 0
          }).format(numericAmount);
          console.log('Amount formatting:', { original: amount, numeric: numericAmount, formatted: formattedAmount });
          return formattedAmount;
        };

        // Format date if it exists
        const formatDate = (dateString) => {
          if (!dateString) return "Not specified";
          try {
            const date = new Date(dateString);
            const formattedDate = date.toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            });
            console.log('Date formatting:', { original: dateString, formatted: formattedDate });
            return formattedDate;
          } catch (e) {
            console.error('Date formatting error:', e);
            return dateString;
          }
        };

        // Parse risks as objects if they exist
        const parsedRisks = parsedGrant.risks?.map(risk => {
          if (typeof risk === 'object' && risk !== null) {
            return risk;
          }
          return { risk: risk, mitigation: '' };
        }) || [];
        
        console.log('Processed risks:', parsedRisks);

        const processedData = {
          title: parsedGrant.projectTitle || "Grant Proposal",
          organization: parsedGrant.organizationName || "",
          amount: formatAmount(parsedGrant.amount),
          deadline: formatDate(parsedGrant.deadline),
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
          budget: budgetBreakdown,
          risks: parsedRisks,
          innovationStatement: parsedGrant.innovationStatement || "",
          communityEngagement: parsedGrant.communityEngagement || "",
          previousSuccess: parsedGrant.previousSuccess || "",
          dataManagement: parsedGrant.dataManagement || "",
          compliance: parsedGrant.compliance || ""
        };

        console.log('Final processed data:', processedData);
        setGrantData(processedData);
      } catch (error) {
        console.error('Error processing grant data:', error);
        navigate('/');
      }
    }
  }, [navigate]);

  const handleEdit = () => setIsEditing(true);
  const handleSave = () => {
    setIsEditing(false);
    localStorage.setItem('currentGrantProposal', JSON.stringify(grantData));
  };
  const handleCancel = () => {
    setIsEditing(false);
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
          personnel: "$0",
          equipment: "$0",
          materials: "$0",
          travel: "$0",
          contractual: "$0",
          other: "$0",
          indirect: "$0"
        },
        risks: [
          {
            risk: "Risk 1",
            mitigation: "Mitigation strategy for risk 1"
          },
          {
            risk: "Risk 2",
            mitigation: "Mitigation strategy for risk 2"
          }
        ],
        innovationStatement: "",
        communityEngagement: "",
        previousSuccess: "",
        dataManagement: "",
        compliance: ""
      });
    }
  };

  const handleDownload = () => {
    try {
      generatePDF(grantData);
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
    <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-all duration-300">
      <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center bg-gradient-to-r from-[#FF6B00] to-[#FFA366] bg-clip-text text-transparent">
        <FiClock className="mr-2 text-[#FF6B00]" />
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
                className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-[#FF6B00] focus:border-transparent font-medium bg-white shadow-sm hover:shadow-md transition-all duration-300"
              />
              <textarea
                value={description}
                onChange={(e) => {
                  const newTimeline = { ...grantData.timeline };
                  newTimeline[phase] = e.target.value;
                  setGrantData({ ...grantData, timeline: newTimeline });
                }}
                className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-[#FF6B00] focus:border-transparent bg-white shadow-sm hover:shadow-md transition-all duration-300"
                rows="3"
              />
            </div>
          ))}
        </div>
      ) : (
        <div className="space-y-6">
          {Object.entries(grantData.timeline).map(([phase, description], index) => (
            <div key={index} className="border-l-4 border-[#FF6B00] pl-4 hover:bg-orange-50 rounded-r-lg transition-all duration-300 p-3">
              <h3 className="font-semibold text-gray-900 mb-2">{phase}</h3>
              <p className="text-gray-700">{description}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );

  const renderRisks = () => (
    <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-all duration-300">
      <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center bg-gradient-to-r from-[#FF6B00] to-[#FFA366] bg-clip-text text-transparent">
        <FiTarget className="mr-2 text-[#FF6B00]" />
        Risks and Mitigation Strategies
      </h2>
      {isEditing ? (
        <div className="space-y-6">
          {grantData.risks.map((riskItem, index) => (
            <div key={index} className="space-y-2 bg-gray-50 p-4 rounded-lg">
              <input
                type="text"
                value={riskItem.risk || ''}
                onChange={(e) => {
                  const newRisks = [...grantData.risks];
                  newRisks[index] = {
                    ...newRisks[index],
                    risk: e.target.value
                  };
                  setGrantData({ ...grantData, risks: newRisks });
                }}
                placeholder="Risk"
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-[#FF6B00] focus:border-transparent bg-white shadow-sm hover:shadow-md transition-all duration-300"
              />
              <textarea
                value={riskItem.mitigation || ''}
                onChange={(e) => {
                  const newRisks = [...grantData.risks];
                  newRisks[index] = {
                    ...newRisks[index],
                    mitigation: e.target.value
                  };
                  setGrantData({ ...grantData, risks: newRisks });
                }}
                placeholder="Mitigation Strategy"
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-[#FF6B00] focus:border-transparent bg-white shadow-sm hover:shadow-md transition-all duration-300"
                rows="2"
              />
            </div>
          ))}
          <button
            onClick={() => {
              setGrantData({
                ...grantData,
                risks: [...grantData.risks, { risk: '', mitigation: '' }]
              });
            }}
            className="mt-4 px-4 py-2 bg-gradient-to-r from-[#FF6B00] to-[#FF8533] text-white rounded-lg hover:from-[#FF8533] hover:to-[#FFA366] transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105"
          >
            Add Risk
          </button>
        </div>
      ) : (
        <div className="space-y-6">
          {grantData.risks.map((riskItem, index) => (
            <div key={index} className="border-l-4 border-[#FF6B00] pl-4 hover:bg-orange-50 rounded-r-lg transition-all duration-300 p-3">
              <div className="flex items-start space-x-3">
                <FiCheckCircle className="text-[#FF6B00] mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900">{riskItem.risk}</h3>
                  <p className="text-gray-700 mt-1">{riskItem.mitigation}</p>
                </div>
              </div>
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
          <h1 className="text-4xl font-bold text-gray-900 bg-gradient-to-r from-[#FF6B00] to-[#FFA366] bg-clip-text text-transparent">{grantData.title}</h1>
          <div className="flex space-x-4">
            {!isEditing ? (
              <>
                <button
                  onClick={handleEdit}
                  className="flex items-center px-4 py-2 bg-gradient-to-r from-[#FF6B00] to-[#FF8533] text-white rounded-lg hover:from-[#FF8533] hover:to-[#FFA366] transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105"
                >
                  <FiEdit2 className="mr-2" />
                  Edit
                </button>
                <button
                  onClick={handleDownload}
                  className="flex items-center px-4 py-2 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-lg hover:from-green-600 hover:to-green-700 transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105"
                >
                  <FiDownload className="mr-2" />
                  Download PDF
                </button>
              </>
            ) : (
              <>
                <button
                  onClick={handleSave}
                  className="flex items-center px-4 py-2 bg-gradient-to-r from-[#FF6B00] to-[#FF8533] text-white rounded-lg hover:from-[#FF8533] hover:to-[#FFA366] transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105"
                >
                  <FiSave className="mr-2" />
                  Save
                </button>
                <button
                  onClick={handleCancel}
                  className="flex items-center px-4 py-2 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-lg hover:from-red-600 hover:to-red-700 transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105"
                >
                  <FiX className="mr-2" />
                  Cancel
                </button>
              </>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex items-center space-x-3 p-4 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
            <FiUsers className="text-2xl text-[#FF6B00]" />
            <div>
              <p className="text-sm text-gray-600 font-medium">Organization</p>
              <p className="font-semibold text-gray-900">{grantData.organization}</p>
            </div>
          </div>
          <div className="flex items-center space-x-3 p-4 bg-gradient-to-br from-green-50 to-green-100 rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
            <FiDollarSign className="text-2xl text-[#FF6B00]" />
            <div>
              <p className="text-sm text-gray-600 font-medium">Amount</p>
              <p className="font-semibold text-gray-900">{grantData.amount}</p>
            </div>
          </div>
          <div className="flex items-center space-x-3 p-4 bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
            <FiCalendar className="text-2xl text-[#FF6B00]" />
            <div>
              <p className="text-sm text-gray-600 font-medium">Deadline</p>
              <p className="font-semibold text-gray-900">{grantData.deadline}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="space-y-8">
        {/* Executive Summary */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-2 flex items-center bg-gradient-to-r from-[#FF6B00] to-[#FFA366] bg-clip-text text-transparent">
            Executive Summary
          </h2>
          {isEditing ? (
            <textarea
              value={grantData.executiveSummary}
              onChange={(e) => setGrantData({ ...grantData, executiveSummary: e.target.value })}
              className="w-full p-3 border rounded-lg min-h-[150px] focus:ring-2 focus:ring-[#FF6B00] focus:border-transparent bg-white shadow-sm hover:shadow-md transition-all duration-300"
            />
          ) : (
            <p className="text-gray-700 whitespace-pre-wrap bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-all duration-300">{grantData.executiveSummary}</p>
          )}
        </div>

        {/* Project Description */}
        {renderEditableField(
          "Project Description",
          grantData.description,
          (e) => setGrantData({ ...grantData, description: e.target.value }),
          "text",
          true
        )}

        {/* Objectives */}
        <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-all duration-300">
          <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center bg-gradient-to-r from-[#FF6B00] to-[#FFA366] bg-clip-text text-transparent">
            <FiTarget className="mr-2 text-[#FF6B00]" />
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
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-[#FF6B00] focus:border-transparent bg-white shadow-sm hover:shadow-md transition-all duration-300"
                />
              ))}
            </div>
          ) : (
            <ul className="space-y-3">
              {grantData.objectives.map((objective, index) => (
                <li key={index} className="flex items-start space-x-3 p-2 rounded-lg hover:bg-gray-50 transition-all duration-300">
                  <FiCheckCircle className="text-[#FF6B00] mt-1" />
                  <span className="text-gray-700">{objective}</span>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Methodology */}
        <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-all duration-300">
          <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center bg-gradient-to-r from-[#FF6B00] to-[#FFA366] bg-clip-text text-transparent">
            <FiClipboard className="mr-2 text-[#FF6B00]" />
            Methodology
          </h2>
          {isEditing ? (
            <textarea
              value={grantData.methodology}
              onChange={(e) => setGrantData({ ...grantData, methodology: e.target.value })}
              className="w-full p-3 border rounded-lg min-h-[150px] focus:ring-2 focus:ring-[#FF6B00] focus:border-transparent bg-white shadow-sm hover:shadow-md transition-all duration-300"
              rows="6"
            />
          ) : (
            <p className="text-gray-700 whitespace-pre-wrap bg-gray-50 p-4 rounded-lg">{grantData.methodology}</p>
          )}
        </div>

        {/* Timeline */}
        {renderTimeline()}

        {/* Evaluation Plan */}
        <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-all duration-300">
          <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center bg-gradient-to-r from-[#FF6B00] to-[#FFA366] bg-clip-text text-transparent">
            <FiBarChart2 className="mr-2 text-[#FF6B00]" />
            Evaluation Plan
          </h2>
          {isEditing ? (
            <textarea
              value={grantData.evaluationPlan}
              onChange={(e) => setGrantData({ ...grantData, evaluationPlan: e.target.value })}
              className="w-full p-3 border rounded-lg min-h-[150px] focus:ring-2 focus:ring-[#FF6B00] focus:border-transparent bg-white shadow-sm hover:shadow-md transition-all duration-300"
              rows="6"
            />
          ) : (
            <p className="text-gray-700 whitespace-pre-wrap bg-gray-50 p-4 rounded-lg">{grantData.evaluationPlan}</p>
          )}
        </div>

        {/* Sustainability */}
        <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-all duration-300">
          <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center bg-gradient-to-r from-[#FF6B00] to-[#FFA366] bg-clip-text text-transparent">
            <FiTarget className="mr-2 text-[#FF6B00]" />
            Sustainability Plan
          </h2>
          {isEditing ? (
            <textarea
              value={grantData.sustainability}
              onChange={(e) => setGrantData({ ...grantData, sustainability: e.target.value })}
              className="w-full p-3 border rounded-lg min-h-[150px] focus:ring-2 focus:ring-[#FF6B00] focus:border-transparent bg-white shadow-sm hover:shadow-md transition-all duration-300"
              rows="6"
            />
          ) : (
            <p className="text-gray-700 whitespace-pre-wrap bg-gray-50 p-4 rounded-lg">{grantData.sustainability}</p>
          )}
        </div>

        {/* Team Qualifications */}
        <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-all duration-300">
          <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center bg-gradient-to-r from-[#FF6B00] to-[#FFA366] bg-clip-text text-transparent">
            <FiUsers className="mr-2 text-[#FF6B00]" />
            Team Qualifications
          </h2>
          {isEditing ? (
            <textarea
              value={grantData.teamQualifications}
              onChange={(e) => setGrantData({ ...grantData, teamQualifications: e.target.value })}
              className="w-full p-3 border rounded-lg min-h-[150px] focus:ring-2 focus:ring-[#FF6B00] focus:border-transparent bg-white shadow-sm hover:shadow-md transition-all duration-300"
              rows="6"
            />
          ) : (
            <p className="text-gray-700 whitespace-pre-wrap bg-gray-50 p-4 rounded-lg">{grantData.teamQualifications}</p>
          )}
        </div>

        {/* Partnerships */}
        {renderEditableField(
          "Partnerships",
          grantData.partnerships,
          (e) => setGrantData({ ...grantData, partnerships: e.target.value }),
          "text",
          true
        )}

        {/* Impact Statement */}
        <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-all duration-300">
          <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center bg-gradient-to-r from-[#FF6B00] to-[#FFA366] bg-clip-text text-transparent">
            <FiTarget className="mr-2 text-[#FF6B00]" />
            Impact Statement
          </h2>
          {isEditing ? (
            <textarea
              value={grantData.impactStatement}
              onChange={(e) => setGrantData({ ...grantData, impactStatement: e.target.value })}
              className="w-full p-3 border rounded-lg min-h-[150px] focus:ring-2 focus:ring-[#FF6B00] focus:border-transparent bg-white shadow-sm hover:shadow-md transition-all duration-300"
              rows="6"
            />
          ) : (
            <p className="text-gray-700 whitespace-pre-wrap bg-gray-50 p-4 rounded-lg">{grantData.impactStatement}</p>
          )}
        </div>

        {/* Budget Breakdown */}
        <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-all duration-300">
          <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center bg-gradient-to-r from-[#FF6B00] to-[#FFA366] bg-clip-text text-transparent">
            <FiBarChart2 className="mr-2 text-[#FF6B00]" />
            Budget Breakdown
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {Object.entries(grantData.budget).map(([category, amount]) => (
              <div key={category} className="bg-gradient-to-br from-gray-50 to-gray-100 p-4 rounded-lg hover:shadow-md transition-all duration-300">
                <h3 className="font-medium text-gray-900 capitalize">{category}</h3>
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
                    className="w-full p-2 border rounded-lg mt-1 focus:ring-2 focus:ring-[#FF6B00] focus:border-transparent bg-white shadow-sm hover:shadow-md transition-all duration-300"
                  />
                ) : (
                  <p className="text-[#FF6B00] font-semibold mt-1">{amount}</p>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Innovation Statement */}
        {renderEditableField(
          "Innovation Statement",
          grantData.innovationStatement,
          (e) => setGrantData({ ...grantData, innovationStatement: e.target.value }),
          "text",
          true
        )}

        {/* Community Engagement */}
        {renderEditableField(
          "Community Engagement",
          grantData.communityEngagement,
          (e) => setGrantData({ ...grantData, communityEngagement: e.target.value }),
          "text",
          true
        )}

        {/* Previous Success */}
        {renderEditableField(
          "Previous Success",
          grantData.previousSuccess,
          (e) => setGrantData({ ...grantData, previousSuccess: e.target.value }),
          "text",
          true
        )}

        {/* Data Management */}
        {renderEditableField(
          "Data Management",
          grantData.dataManagement,
          (e) => setGrantData({ ...grantData, dataManagement: e.target.value }),
          "text",
          true
        )}

        {/* Compliance */}
        {renderEditableField(
          "Compliance",
          grantData.compliance,
          (e) => setGrantData({ ...grantData, compliance: e.target.value }),
          "text",
          true
        )}

        {/* Risks */}
        {renderRisks()}
      </div>
    </div>
  );
};

export default GrantDisplayPage; 