const fs = require('fs');
const path = require('path');

const filesToUpdate = [
  'components/Navbar.tsx',
  'components/TourCard.tsx',
  'app/page.tsx',
  'app/tours/[id]/page.tsx',
  'components/ContactForm.tsx'
];

filesToUpdate.forEach(file => {
  const p = path.join(__dirname, file);
  if (!fs.existsSync(p)) return;
  let content = fs.readFileSync(p, 'utf8');

  // Navbar and other yellow buttons
  content = content.replace(/bg-\[#FCD34D\](?=.*hover)/g, 'bg-[#2E79C7]');
  content = content.replace(/hover:bg-\[#FACC15\]/g, 'hover:bg-[#2261A1]');
  content = content.replace(/shadow-\[#FACC15\]/g, 'shadow-[#2E79C7]');

  // specific to buttons with bg-#FCD34D that don't have hover on the same line? 
  // Let's just do all bg-[#FCD34D] because they're mostly buttons. Wait, there are little dots. 
  // Let's specifically target hover:bg-[#FACC15] and anything around it
  
  // Specific to buttons
  if(file.includes('Navbar.tsx') || file.includes('ContactForm.tsx') || file.includes('[id]/page.tsx')) {
    content = content.replace(/bg-\[#FCD34D\]/g, 'bg-[#2E79C7]');
  }

  // Dark blue buttons
  content = content.replace(/bg-\[#1E40AF\](?=.*?hover)/g, 'bg-[#2E79C7]');
  content = content.replace(/hover:bg-\[#2563EB\]/g, 'hover:bg-[#2261A1]');
  content = content.replace(/shadow-\[#2563EB\]/g, 'shadow-[#2E79C7]');
  
  // In TourCard.tsx specific button
  if(file.includes('TourCard.tsx')) {
    content = content.replace(/bg-\[#1E40AF\]/g, 'bg-[#2E79C7]');
  }
  
  // app/page.tsx specific button "Explore All Tours" and "View All Tours"
  if(file.includes('page.tsx')) {
    content = content.replace(/border-\[#1E40AF\]/g, 'border-[#2E79C7]');
    content = content.replace(/text-\[#1E40AF\] dark:text-\[#3B82F6\] hover:bg-\[#1E40AF\] dark:hover:bg-\[#3B82F6\]/g, 'text-[#2E79C7] dark:text-[#2E79C7] hover:bg-[#2E79C7] dark:hover:bg-[#2E79C7]');
    content = content.replace(/border-\[#3B82F6\]/g, 'border-[#2E79C7]');
    content = content.replace(/shadow-\[#1E40AF\]/g, 'shadow-[#2E79C7]');
    // also the explore button
    content = content.replace(/bg-\[#1E40AF\] hover:bg-\[#2563EB\]/g, 'bg-[#2E79C7] hover:bg-[#2261A1]');
  }

  fs.writeFileSync(p, content, 'utf8');
});
console.log('Buttons updated');
