import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiDownload, FiEye, FiFileText, FiMail, FiPhone, FiMapPin } from 'react-icons/fi';

const Resume = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });



  const contactInfo = {
    email: 'sarveshvjagtap@gmail.com',
    phone: '732-762-0126',
    location: '900 Kirby Dr, Lantana, TX 76226'
  };

  const education = {
    school: 'GUYER HIGH SCHOOL – DENTON, TX',
    gpa: 'Weighted GPA: 4.27 (Honors/AP) | Class Rank: Top 22%',
    classRank: 'Will complete 13 total AP courses & 10 Honors Classes',
    sat: 'SAT: 1350; 1380 Superscore (700 Math, 680 Reading/Writing)'
  };

  const skills = [
    'Languages: JavaScript, C#, Python',
    'Web Frameworks: React, Tailwind CSS, HTML/CSS',
    'Software/Tools: Electron, Git, VS Code, Docker, Adobe Photoshop, Figma',
    'Concepts: AI/ML model training, Web & Desktop App Development, Problem-solving, Database Storage'
  ];

  const experience = [
    {
      title: 'ParkPoint',
      role: 'Founder & Developer',
      period: '2024–Present',
      description: 'Designing solar-powered parking puck system with real-time sensor tracking.',
      achievements: [
        'Building React/Tailwind/Electron mock app for spot detection & live updates'
      ]
    },
    {
      title: 'Obscura Studio',
      role: 'Developer',
      period: '2025–Present',
      description: 'Creating full-featured open-source alternative to Adobe Lightroom.',
      achievements: [
        'Integrated AI tools, batch editing, and custom UI themes'
      ]
    }
  ];

  const activities = [
    {
      title: 'Student Council',
      role: 'Member',
      period: '2025–Present',
      description: 'Initiated mentorship program pairing seniors with freshmen based on career pathways.'
    },
    {
      title: 'Green Team',
      role: 'President',
      period: '2025–Present',
      description: 'Leading school sustainability campaigns & awareness projects.'
    }
  ];

     return (
     <section id="resume" className="section-padding bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="container-max">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-center mb-4"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-navy-800 dark:text-white mb-4">
              Resume
            </h2>
            <div className="w-20 h-1 bg-mint-500 rounded-full mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Professional summary of my academic achievements, experience, and skills
            </p>
          </motion.div>

          

                     {/* Resume Content */}
           <motion.div
             initial={{ opacity: 0, y: 30 }}
             animate={inView ? { opacity: 1, y: 0 } : {}}
             transition={{ delay: 0.6, duration: 0.8 }}
             className="max-w-4xl mx-auto"
           >
             <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg overflow-hidden transition-colors duration-300">
                                 {/* Header */}
                 <div className="bg-gradient-to-r from-navy-600 to-navy-800 text-white p-8">
                   <h1 className="text-3xl font-bold mb-2">SARVESH JAGTAP</h1>
                   <p className="text-xl text-navy-100 mb-4">HIGH SCHOOL SENIOR | ASPIRING SOFTWARE ENGINEER & AI DEVELOPER</p>
                   <p className="text-navy-100 mb-4">Rising senior with a 4.27 GPA and a 1380 SAT superscore. Founder of a solar-powered parking system and an open-source photo editor. Proficient in React, Tailwind, and Electron with a passion for software engineering and AI.</p>
                   <div className="flex flex-wrap gap-4 text-sm">
                     <div className="flex items-center gap-2">
                       <FiMail className="w-4 h-4" />
                       <span>{contactInfo.email}</span>
                     </div>
                     <div className="flex items-center gap-2">
                       <FiPhone className="w-4 h-4" />
                       <span>{contactInfo.phone}</span>
                     </div>
                     <div className="flex items-center gap-2">
                       <FiMapPin className="w-4 h-4" />
                       <span>{contactInfo.location}</span>
                     </div>
                   </div>
                 </div>

                                 <div className="p-8 space-y-6">
                   {/* Education */}
                   <div>
                     <h2 className="text-2xl font-bold text-navy-800 dark:text-white mb-4 border-b-2 border-mint-500 pb-2">
                       EDUCATION
                     </h2>
                     <div className="space-y-2">
                       <div className="flex justify-between items-start">
                         <div>
                           <h3 className="font-semibold text-lg text-navy-800 dark:text-white">{education.school}</h3>
                         </div>
                       </div>
                       <div className="space-y-1">
                         <p className="text-gray-700 dark:text-gray-300">{education.gpa}</p>
                         <p className="text-gray-700 dark:text-gray-300">{education.classRank}</p>
                         <p className="text-gray-700 dark:text-gray-300">{education.sat}</p>
                       </div>
                     </div>
                   </div>

                   {/* Skills */}
                   <div>
                     <h2 className="text-2xl font-bold text-navy-800 dark:text-white mb-4 border-b-2 border-mint-500 pb-2">
                       SKILLS
                     </h2>
                     <div className="space-y-2">
                       {skills.map((skill, index) => (
                         <div key={index} className="text-gray-700 dark:text-gray-300">
                           {skill}
                         </div>
                       ))}
                     </div>
                   </div>

                   {/* Experience */}
                   <div>
                     <h2 className="text-2xl font-bold text-navy-800 dark:text-white mb-4 border-b-2 border-mint-500 pb-2">
                       EXPERIENCE
                     </h2>
                     <div className="space-y-6">
                       <div>
                         <h3 className="font-semibold text-lg text-navy-800 dark:text-white mb-3">PROJECTS</h3>
                         <div className="space-y-4">
                           {experience.map((exp, index) => (
                             <div key={index} className="border-l-4 border-mint-500 pl-4">
                               <div className="flex justify-between items-start mb-2">
                                 <div>
                                   <h4 className="font-semibold text-navy-800 dark:text-white">{exp.title} – {exp.role}</h4>
                                 </div>
                                 <span className="text-sm text-gray-500 dark:text-gray-400">({exp.period})</span>
                               </div>
                               <p className="text-gray-700 dark:text-gray-300 mb-2">{exp.description}</p>
                               <ul className="space-y-1">
                                 {exp.achievements.map((achievement, aIndex) => (
                                   <li key={aIndex} className="flex items-start gap-2 text-gray-700 dark:text-gray-300">
                                     <div className="w-1.5 h-1.5 bg-mint-500 rounded-full mt-2 flex-shrink-0"></div>
                                     <span className="text-sm">{achievement}</span>
                                   </li>
                                 ))}
                               </ul>
                             </div>
                           ))}
                         </div>
                       </div>
                       
                       <div>
                         <h3 className="font-semibold text-lg text-navy-800 dark:text-white mb-3">CLUBS/ORGANIZATIONS</h3>
                         <div className="space-y-4">
                           {activities.map((activity, index) => (
                             <div key={index} className="border-l-4 border-mint-500 pl-4">
                               <div className="flex justify-between items-start mb-2">
                                 <div>
                                   <h4 className="font-semibold text-navy-800 dark:text-white">{activity.title} – {activity.role}</h4>
                                 </div>
                                 <span className="text-sm text-gray-500 dark:text-gray-400">({activity.period})</span>
                               </div>
                               <p className="text-gray-700 dark:text-gray-300">{activity.description}</p>
                             </div>
                           ))}
                         </div>
                       </div>
                     </div>
                   </div>

                   {/* Awards & Certifications */}
                   <div>
                     <h2 className="text-2xl font-bold text-navy-800 dark:text-white mb-4 border-b-2 border-mint-500 pb-2">
                       AWARDS & CERTIFICATIONS
                     </h2>
                     <div className="grid sm:grid-cols-2 gap-6">
                       <div>
                         <h3 className="font-semibold text-navy-800 dark:text-white mb-2">AWARDS</h3>
                         <ul className="space-y-1">
                           <li className="text-gray-700 dark:text-gray-300">• Black Belt in Taekwondo (2022)</li>
                           <li className="text-gray-700 dark:text-gray-300">• 3rd Place – Dictionary UIL Competition (2022)</li>
                         </ul>
                       </div>
                       <div>
                         <h3 className="font-semibold text-navy-800 dark:text-white mb-2">CERTIFICATIONS</h3>
                         <ul className="space-y-1">
                           <li className="text-gray-700 dark:text-gray-300">• Inspirit AI Certificate (2024)</li>
                           <li className="text-gray-700 dark:text-gray-300">• Cybersecurity Certifications (in progress)</li>
                         </ul>
                       </div>
                     </div>
                   </div>

                   {/* Contact */}
                   <div>
                     <h2 className="text-2xl font-bold text-navy-800 dark:text-white mb-4 border-b-2 border-mint-500 pb-2">
                       CONTACT
                     </h2>
                     <div className="space-y-1">
                       <p className="text-gray-700 dark:text-gray-300">{contactInfo.email}</p>
                       <p className="text-gray-700 dark:text-gray-300">{contactInfo.phone}</p>
                       <p className="text-gray-700 dark:text-gray-300">{contactInfo.location}</p>
                     </div>
                   </div>
                 </div>
               </div>
             </motion.div>
           </motion.div>
         </div>
       </section>
  );
};

export default Resume; 