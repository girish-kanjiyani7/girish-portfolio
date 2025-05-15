'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Head from 'next/head';
import { ChevronDown } from 'lucide-react';

export default function Home() {
  const [expandedJob, setExpandedJob] = useState(null);
  const [expandedProject, setExpandedProject] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [formStatus, setFormStatus] = useState('');
  const [snapped, setSnapped] = useState(false);

  const handleSnap = () => {
    setSnapped(true);
    setTimeout(() => {
      document.body.style.overflow = 'hidden';
    }, 500);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const response = await fetch("https://formspree.io/f/xayrgeoj", {
      method: "POST",
      headers: { Accept: "application/json" },
      body: formData
    });
    const result = await response.json();
    if (result.ok || result.success) {
      setFormStatus("Your message has been sent successfully!");
      e.target.reset();
    } else {
      setFormStatus("Something went wrong. Please try again.");
    }
  };

  const jobs = [
    {
      title: "JMA Wireless",
      time: "Feb 2025 – May 2025",
      brief: "Built a scalable data analysis pipeline on AWS for processing 250K+ fan feedback logs and generating real-time sentiment insights.",
      points: [
        "Deployed serverless NLP pipeline with AWS Fargate + BERTopic",
        "Built ELT pipelines using Lambda, S3, Step Functions",
        "Architected CI/CD with GitHub Actions for model deployments"
      ]
    },
    {
      title: "Syracuse University",
      time: "Mar 2024 – Jun 2024",
      brief: "Led genomic data research analyzing 42.1 GB of data using R and Seurat, contributing to scientific discovery of 2 new genomic patterns.",
      points: [
        "Analyzed 42.1 GB genomic dataset, found 2 novel patterns",
        "Optimized cluster analysis using R and Seurat",
        "Integrated validation pipelines reducing errors by 25%"
      ]
    },
    {
      title: "WaytoWeb Pvt Ltd.",
      time: "Jan 2023 – May 2023",
      brief: "Developed backend systems for inventory tracking and optimized performance with SQL and CI/CD automation.",
      points: [
        "Reduced overstocking costs by 25% using forecast modeling",
        "Accelerated deployments by 50% via CI/CD pipeline",
        "Improved API response times by 45% with caching"
      ]
    }
  ];

  const allProjects = [
    {
      title: "LeetHub-3.0 - (Open Source)",
      brief: "Open source GitHub-integrated Chrome tool that saves LeetCode submissions with timestamped filenames for better version tracking.",
      details: ["SHA accuracy refactor", "Toggle-based filename versioning", "User adoption ~35%"]
      
    },
    {
      title: "YouTube Focus Mode",
      brief: "A Chrome extension that removes distractions from YouTube UI to improve productivity, used by beta testers weekly.",
      details: ["DOM manipulation engine", "Script optimization by 40%", "Beta tested with 50+ users"]
    },
    {
      title: "Gomoku-AI",
      brief: "An AI agent trained on real match data to play the board game Gomoku with 84% accuracy using deep CNNs.",
      details: ["6-layer CNN architecture", "75%+ win rate", "Python-based simulation engine"]
    },
    {
      title: "Inventory Distribution System",
      brief: "A Django-based platform for tracking 10K+ SKUs and automating real-time order and inventory management.",
      details: ["Automated order entry", "200+ custom reports", "30% order accuracy improvement"]
    }
  ];
  const technicalSkills = [
    {
      title: "Programming Languages",
      skills: ["Python", "JavaScript", "C++", "C", "R", "SQL"]
    },
    {
      title: "Web & Application Development",
      skills: ["Node.js", "React.js", "Django", "Flask", "FastAPI", "Chrome Extension APIs"]
    },
    {
      title: "Machine Learning & Data Science",
      skills: ["NumPy", "Pandas", "Seaborn", "Matplotlib", "Scikit-learn", "BERTopic", "UMAP", "SiEBERT", "Hugging Face", "AWS Comprehend"]
    },
    {
      title: "DevOps & Deployment",
      skills: ["Docker", "GitHub Actions", "AWS ECS", "AWS Lambda", "AWS Step Functions", "AWS CodePipeline", "Fargate", "Redis"]
    },
    {
      title: "Data Engineering & Databases",
      skills: ["MySQL", "MongoDB", "PostgreSQL", "ELT Pipelines", "SQL Triggers", "AWS S3"]
    },
    {
      title: "Cloud & Serverless Technologies",
      skills: ["AWS (Lambda, ECS, S3, Step Functions, CloudWatch)", "GitHub OAuth2"]
    },
    {
      title: "Data Visualization & Analysis",
      skills: ["Jupyter Notebook", "Google Colab", "MS Excel", "Seurat (R)", "Tidyverse"]
    },
    {
      title: "Version Control & Collaboration",
      skills: ["Git", "GitHub", "GitLab"]
    },
    {
      title: "Other Tools",
      skills: ["MATLAB", "PowerPoint", "Postman"]
    }
  ];
  

  const filteredProjects = allProjects.filter(p =>
    p.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    p.brief.toLowerCase().includes(searchTerm.toLowerCase())
  );

 
  return (
    <div>
      {snapped && (
        <div className="fixed inset-0 z-50 bg-black text-white flex flex-col justify-center items-center text-center px-6">
          <h1 className="text-4xl font-bold mb-2 animate-pulse">DR. DOOM will return!!</h1>
          <p className="text-sm text-gray-300">Refresh to go back to the main screen.</p>
        </div>
      )}

      <main className={`${snapped ? 'snap-dust pointer-events-none select-none' : ''} transition-all duration-500`}>

        {/* Hero Section */}
        <section className="text-center py-16 px-4 bg-gray-900 text-white">
          <h1 className="text-4xl font-bold">Girish Kanjiyani</h1>
          <p className="mt-2 text-lg">Software Developer | Data Analyst |</p>
          <div className="mt-4 flex flex-wrap justify-center gap-4">
            <a href="mailto:girish@example.com" className="text-blue-400 hover:underline">Email</a>
            <a href="https://linkedin.com/in/GirishKanjiyani" className="text-blue-400 hover:underline">LinkedIn</a>
            <a href="/resume.pdf" download className="text-blue-400 hover:underline">Download Resume</a>
          </div>
        </section>

        {/* About Section with Snap Trigger */}
        <section id="about" className="px-4 py-12 bg-gray-900 text-white text-center">
          <h2 className="text-2xl font-semibold mb-4">About Me</h2>
          <p className="text-3xl font-bold">
            <span className="cursor-pointer hover:text-red-500 transition-colors duration-200" onClick={handleSnap}>
              I am... IRONMAN 🫰
            </span>
          </p>
        </section>

       

 {/* Work Experience Section */}
 <section id="experience" className="px-4 py-12 bg-gray-900 text-white">
          <h2 className="text-2xl font-semibold mb-6 text-center">Work Experience</h2>
          <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {jobs.map((job, i) => (
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-gray-800 p-4 rounded-xl shadow-sm border border-gray-700 cursor-pointer"
                key={i}
                onClick={() => setExpandedJob(expandedJob === i ? null : i)}
              >
                <h3 className="text-lg font-semibold">{job.title}</h3>
                <p className="text-sm text-gray-400 mb-2">{job.time}</p>
                <p className="text-sm mb-2 text-gray-300">{job.brief}</p>
                {expandedJob !== i && (
                  <div className="text-xs text-gray-400 flex items-center gap-1">Click to expand <ChevronDown size={14} /></div>
                )}
                <AnimatePresence>
                  {expandedJob === i && (
                    <motion.ul
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="list-disc list-inside text-sm mt-2 space-y-1"
                    >
                      {job.points.map((p, idx) => <li key={idx}>{p}</li>)}
                    </motion.ul>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="px-4 py-12 bg-gray-900 text-white">
          <h2 className="text-2xl font-semibold mb-6 text-center">Projects</h2>
          <input
            type="text"
            placeholder="Search projects..."
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
            className="mb-6 w-full max-w-md mx-auto block p-2 border border-gray-700 rounded bg-gray-800 text-white placeholder:text-gray-400"
          />
          <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2">
            {filteredProjects.map((project, i) => (
              <motion.div
                whileHover={{ y: -4 }}
                className="p-4 bg-gray-800 rounded-lg shadow-sm border border-gray-700 cursor-pointer"
                key={i}
                onClick={() => setExpandedProject(expandedProject === i ? null : i)}
              >
                <h3 className="font-bold">{project.title}</h3>
                <p className="text-sm mt-1 text-gray-300">{project.brief}</p>
                {expandedProject !== i && (
                  <div className="text-xs text-gray-400 flex items-center gap-1 mt-1">Click to expand <ChevronDown size={14} /></div>
                )}
                <AnimatePresence>
                  {expandedProject === i && (
                    <motion.ul
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="list-disc list-inside text-sm mt-2 space-y-1"
                    >
                      {project.details.map((detail, idx) => <li key={idx}>{detail}</li>)}
                    </motion.ul>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="px-4 py-12 bg-gray-900 text-white">
          <h2 className="text-2xl font-semibold mb-6 text-center">🛠 Technical Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {technicalSkills.map((group, index) => (
              <div
                key={index}
                className="bg-gray-800 p-4 rounded-xl shadow-sm border border-gray-700"
              >
                <h3 className="font-semibold mb-2 text-white">{group.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <motion.span
                      whileHover={{ scale: 1.05 }}
                      className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm text-center shadow-sm"
                      key={skill}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>


        {/* Contact */}
        <section id="contact" className="px-4 py-12 text-center bg-white dark:bg-gray-800">
          <h2 className="text-2xl font-semibold mb-2">Contact</h2>
          <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-4 flex flex-col gap-4 text-left">
            <input name="name" type="text" placeholder="Your Name" className="p-2 border rounded dark:bg-gray-700" required />
            <input name="email" type="email" placeholder="Your Email" className="p-2 border rounded dark:bg-gray-700" required />
            <textarea name="message" placeholder="Your Message" className="p-2 border rounded dark:bg-gray-700" rows="4" required></textarea>
            <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Send Message</button>
          </form>
          {formStatus && <p className="mt-4 text-green-500 font-semibold">{formStatus}</p>}
        </section>
      </main>
    </div>
  );
}
