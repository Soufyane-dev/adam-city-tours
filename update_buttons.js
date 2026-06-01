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
  content = content.replace(/bg-\[#FCD34D\](?=.*hover)/g, 'bg-[#0F3568]');
  content = content.replace(/hover:bg-\[#FACC15\]/g, 'hover:bg-[#082A52]');
  content = content.replace(/shadow-\[#FACC15\]/g, 'shadow-[#0F3568]');

  // specific to buttons with bg-#FCD34D that don't have hover on the same line? 
  // Let's just do all bg-[#FCD34D] because they're mostly buttons. Wait, there are little dots. 
  // Let's specifically target hover:bg-[#FACC15] and anything around it
  
  // Specific to buttons
  if(file.includes('Navbar.tsx') || file.includes('ContactForm.tsx') || file.includes('[id]/page.tsx')) {
    content = content.replace(/bg-\[#FCD34D\]/g, 'bg-[#0F3568]');
  }

  // Dark blue buttons
  content = content.replace(/bg-\[#1E40AF\](?=.*?hover)/g, 'bg-[#0F3568]');
  content = content.replace(/hover:bg-\[#2563EB\]/g, 'hover:bg-[#082A52]');
  content = content.replace(/shadow-\[#2563EB\]/g, 'shadow-[#0F3568]');
  
  // In TourCard.tsx specific button
  if(file.includes('TourCard.tsx')) {
    content = content.replace(/bg-\[#1E40AF\]/g, 'bg-[#0F3568]');
  }
  
  // app/page.tsx specific button "Explore All Tours" and "View All Tours"
  if(file.includes('page.tsx')) {
    content = content.replace(/border-\[#1E40AF\]/g, 'border-[#0F3568]');
    content = content.replace(/text-\[#1E40AF\] dark:text-\[#3D7AB8\] hover:bg-\[#1E40AF\] dark:hover:bg-\[#3D7AB8\]/g, 'text-[#0F3568] dark:text-[#0F3568] hover:bg-[#0F3568] dark:hover:bg-[#0F3568]');
    content = content.replace(/border-\[#3D7AB8\]/g, 'border-[#0F3568]');
    content = content.replace(/shadow-\[#1E40AF\]/g, 'shadow-[#0F3568]');
    // also the explore button
    content = content.replace(/bg-\[#1E40AF\] hover:bg-\[#2563EB\]/g, 'bg-[#0F3568] hover:bg-[#082A52]');
  }

  fs.writeFileSync(p, content, 'utf8');
});
console.log('Buttons updated');
