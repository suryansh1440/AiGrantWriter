import React from 'react';
import jsPDF from 'jspdf';
import 'jspdf-autotable';

const generatePDF = (grantData) => {
  const doc = new jsPDF();
  
  // Add title
  doc.setFontSize(24);
  doc.text(grantData.title, 20, 20);
  doc.setFontSize(12);
  
  // Add organization
  doc.text('Organization:', 20, 40);
  doc.text(grantData.organization, 20, 50);
  
  // Add amount
  doc.text('Amount:', 20, 60);
  doc.text(grantData.amount, 20, 70);
  
  // Add deadline
  doc.text('Deadline:', 20, 80);
  doc.text(grantData.deadline, 20, 90);
  
  // Add description
  doc.text('Description:', 20, 100);
  const splitDescription = doc.splitTextToSize(grantData.description, 170);
  doc.text(splitDescription, 20, 110);
  
  // Add objectives
  doc.text('Objectives:', 20, 130);
  grantData.objectives.forEach((objective, index) => {
    const y = 140 + (index * 10);
    doc.text(`• ${objective}`, 20, y);
  });
  
  // Add budget breakdown
  const budgetY = 140 + (grantData.objectives.length * 10) + 20;
  doc.text('Budget Breakdown:', 20, budgetY);
  
  const budgetData = Object.entries(grantData.budget).map(([category, amount]) => [
    category.charAt(0).toUpperCase() + category.slice(1),
    amount
  ]);
  
  doc.autoTable({
    startY: budgetY + 10,
    head: [['Category', 'Amount']],
    body: budgetData,
    theme: 'grid',
    headStyles: { fillColor: [255, 107, 0] },
    styles: { fontSize: 10 },
    margin: { left: 20 }
  });
  
  return doc;
};

const GrantPDF = ({ grantData }) => {
  if (!grantData) return null;
  
  const doc = generatePDF(grantData);
  return doc.output('blob');
};

export default GrantPDF;