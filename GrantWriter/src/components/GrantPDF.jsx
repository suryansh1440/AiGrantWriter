import React from 'react';

const generatePDF = (grantData) => {
  // Create a new window
  const printWindow = window.open('', '_blank');
  
  // Create the HTML content
  const content = `
    <!DOCTYPE html>
    <html>
      <head>
        <title>${grantData.title}</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            padding: 40px;
            max-width: 800px;
            margin: 0 auto;
          }
          h1 {
            color: #FF6B00;
            border-bottom: 2px solid #FF6B00;
            padding-bottom: 10px;
            margin-bottom: 30px;
          }
          h2 {
            color: #333;
            margin-top: 20px;
          }
          .section {
            margin-bottom: 20px;
          }
          .grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 20px;
            margin-top: 10px;
          }
          .budget-item {
            background: #f5f5f5;
            padding: 15px;
            border-radius: 5px;
          }
          ul {
            list-style-type: disc;
            margin-left: 20px;
          }
        </style>
      </head>
      <body>
        <h1>${grantData.title}</h1>
        
        <div class="section">
          <h2>Organization</h2>
          <p>${grantData.organization}</p>
        </div>

        <div class="section">
          <h2>Amount</h2>
          <p>${grantData.amount}</p>
        </div>

        <div class="section">
          <h2>Deadline</h2>
          <p>${grantData.deadline}</p>
        </div>

        <div class="section">
          <h2>Description</h2>
          <p>${grantData.description}</p>
        </div>

        <div class="section">
          <h2>Objectives</h2>
          <ul>
            ${grantData.objectives.map(objective => `<li>${objective}</li>`).join('')}
          </ul>
        </div>

        <div class="section">
          <h2>Budget Breakdown</h2>
          <div class="grid">
            ${Object.entries(grantData.budget)
              .map(([category, amount]) => `
                <div class="budget-item">
                  <strong>${category.charAt(0).toUpperCase() + category.slice(1)}:</strong>
                  <p>${amount}</p>
                </div>
              `).join('')}
          </div>
        </div>
      </body>
    </html>
  `;

  // Write the content to the new window
  printWindow.document.write(content);
  printWindow.document.close();

  // Wait for the content to load
  printWindow.onload = () => {
    // Print the document
    printWindow.print();
    // Close the window after printing
    printWindow.onafterprint = () => {
      printWindow.close();
    };
  };
};

const GrantPDF = ({ grantData }) => {
  if (!grantData) return null;
  
  // Generate and trigger the PDF
  generatePDF(grantData);
  return null;
};

export default GrantPDF;