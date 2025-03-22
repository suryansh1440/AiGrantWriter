import { jsPDF } from 'jspdf';
import autoTable from 'jspdf-autotable';

export const generatePDF = (grantData) => {
  try {
    // Validate input data
    if (!grantData) {
      throw new Error('Grant data is required');
    }

    // Validate required fields
    const requiredFields = ['title', 'organization', 'amount', 'deadline', 'executiveSummary', 'description'];
    for (const field of requiredFields) {
      if (!grantData[field]) {
        throw new Error(`Missing required field: ${field}`);
      }
    }

    // Create new PDF document
    const doc = new jsPDF();
    
    // Set document properties
    try {
      doc.setProperties({
        title: grantData.title,
        subject: 'Grant Proposal',
        author: grantData.organization,
        keywords: 'grant, proposal',
        creator: 'GrantWriter'
      });
    } catch (propError) {
      console.error('Error setting PDF properties:', propError);
      // Continue with PDF generation even if properties fail
    }

    // Helper function to add text with word wrap
    const addWrappedText = (text, x, y, maxWidth) => {
      try {
        if (!text) return 0;
        const lines = doc.splitTextToSize(text.toString(), maxWidth);
        doc.text(lines, x, y);
        return lines.length;
      } catch (textError) {
        console.error('Error adding wrapped text:', textError);
        return 0;
      }
    };

    // Add Header with title wrapping
    doc.setFontSize(24);
    doc.setTextColor(255, 107, 0); // #FF6B00
    const titleLines = doc.splitTextToSize(grantData.title, 170); // Wrap at 170 width
    doc.text(titleLines, 20, 20);
    
    // Calculate new Y position based on number of title lines
    let headerY = 20 + (titleLines.length * 10); // Add 10 points per line

    // Add Organization Info with adjusted spacing
    doc.setFontSize(12);
    doc.setTextColor(0, 0, 0);
    doc.text(`Organization: ${grantData.organization}`, 20, headerY + 15);
    doc.text(`Amount: ${grantData.amount}`, 20, headerY + 22);
    doc.text(`Deadline: ${grantData.deadline}`, 20, headerY + 29);

    let currentY = headerY + 40; // Adjust starting position for content

    // Add Executive Summary
    doc.setFontSize(16);
    doc.text('Executive Summary', 20, currentY);
    doc.setFontSize(12);
    currentY += 8;
    currentY += 5 * addWrappedText(grantData.executiveSummary, 20, currentY, 170);

    // Add Project Description
    currentY += 10;
    doc.setFontSize(16);
    doc.text('Project Description', 20, currentY);
    doc.setFontSize(12);
    currentY += 8;
    currentY += 5 * addWrappedText(grantData.description, 20, currentY, 170);

    // Add Objectives
    if (Array.isArray(grantData.objectives) && grantData.objectives.length > 0) {
      currentY += 10;
      doc.setFontSize(16);
      doc.text('Objectives', 20, currentY);
      doc.setFontSize(12);
      currentY += 8;
      grantData.objectives.forEach(objective => {
        if (objective) {
          doc.text('• ' + objective, 25, currentY);
          currentY += 7;
        }
      });
    }

    // Add Budget Breakdown
    if (grantData.budget && typeof grantData.budget === 'object') {
      currentY += 10;
      doc.setFontSize(16);
      doc.text('Budget Breakdown', 20, currentY);
      currentY += 8;

      try {
        // Create budget table
        const budgetData = Object.entries(grantData.budget)
          .filter(([category, amount]) => category && amount)
          .map(([category, amount]) => [
            category.charAt(0).toUpperCase() + category.slice(1),
            amount
          ]);

        autoTable(doc, {
          startY: currentY,
          head: [['Category', 'Amount']],
          body: budgetData,
          margin: { left: 20 },
          theme: 'striped',
          headStyles: { fillColor: [255, 107, 0] }
        });

        currentY = doc.lastAutoTable.finalY + 10;
      } catch (tableError) {
        console.error('Error creating budget table:', tableError);
        currentY += 10; // Skip space if table fails
      }
    }

    // Add Risks
    if (currentY > 250) {
      doc.addPage();
      currentY = 20;
    }

    if (Array.isArray(grantData.risks) && grantData.risks.length > 0) {
      doc.setFontSize(16);
      doc.text('Risks and Mitigation Strategies', 20, currentY);
      doc.setFontSize(12);
      currentY += 8;

      grantData.risks.forEach(riskItem => {
        if (riskItem && (riskItem.risk || riskItem.mitigation)) {
          // Set bold for risk
          doc.setFont('helvetica', 'bold');
          if (riskItem.risk) {
            currentY += 5 * addWrappedText(riskItem.risk, 25, currentY, 165);
          }
          // Set normal for mitigation
          doc.setFont('helvetica', 'normal');
          currentY += 5;
          if (riskItem.mitigation) {
            currentY += 5 * addWrappedText(riskItem.mitigation, 25, currentY, 165);
          }
          currentY += 7;
        }
      });
    }

    // Add Timeline
    if (currentY > 250) {
      doc.addPage();
      currentY = 20;
    }

    if (grantData.timeline && typeof grantData.timeline === 'object') {
      doc.setFontSize(16);
      doc.text('Project Timeline', 20, currentY);
      doc.setFontSize(12);
      currentY += 8;

      Object.entries(grantData.timeline).forEach(([phase, description]) => {
        if (phase && description) {
          doc.setFont('helvetica', 'bold');
          doc.text(phase, 25, currentY);
          currentY += 7;
          doc.setFont('helvetica', 'normal');
          currentY += 5 * addWrappedText(description, 25, currentY, 165);
          currentY += 7;
        }
      });
    }

    // Add Optional Sections with Validation
    const optionalSections = [
      { title: 'Methodology', content: grantData.methodology },
      { title: 'Evaluation Plan', content: grantData.evaluationPlan },
      { title: 'Sustainability Plan', content: grantData.sustainability },
      { title: 'Team Qualifications', content: grantData.teamQualifications },
      { title: 'Impact Statement', content: grantData.impactStatement }
    ];

    optionalSections.forEach(section => {
      if (section.content) {
        if (currentY > 250) {
          doc.addPage();
          currentY = 20;
        }

        doc.setFontSize(16);
        doc.text(section.title, 20, currentY);
        doc.setFontSize(12);
        currentY += 8;
        currentY += 5 * addWrappedText(section.content, 20, currentY, 170);
      }
    });

    // Save the PDF
    const safeTitle = grantData.title.replace(/[^a-zA-Z0-9]/g, '_');
    doc.save(`${safeTitle}_Proposal.pdf`);

  } catch (error) {
    console.error('Error generating PDF:', error);
    throw new Error(`Failed to generate PDF: ${error.message}`);
  }
};