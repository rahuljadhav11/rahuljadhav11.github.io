import React, { useState, useEffect, useRef } from 'react';
import { MessageCircle, Play, Pause, Database, Cpu, BarChart3, Code, GitBranch, Zap, Bot, Send, User, Activity, TrendingUp, Server } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area, BarChart, Bar } from 'recharts';

const DataEngineeringPortfolio = () => {
  const [activeTab, setActiveTab] = useState('ai-stories');
  const [chatMessages, setChatMessages] = useState([
    { type: 'bot', content: 'Hi! I\'m your AI assistant. Ask me anything about my data engineering experience, projects, or skills!' }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isStreaming, setIsStreaming] = useState(false);
  const [streamingData, setStreamingData] = useState([]);
  const [pipelineStep, setPipelineStep] = useState(0);
  const [processedRecords, setProcessedRecords] = useState(0);
  const chatEndRef = useRef(null);

  // Comprehensive knowledge base with detailed information for recruiter interactions
  const knowledgeBase = {
    personal: {
      name: "Senior Software Engineer | Experienced Data Engineer | Full Stack Developer",
      experience: "7+ years total experience in SaaS products",
      current_role: "Senior Software Engineer at Blueshift.com working on AI-powered CDP platform",
      location: "Available for remote/hybrid work",
      availability: "Open to new opportunities",
      notice_period: "Standard 2 months notice period",
      about: "With 7+ years of experience building and scaling SaaS products, I specialize in data engineering solutions that drive customer engagement and business growth. Currently at Blueshift, I contribute to their AI-powered Customer Data Platform (CDP) that enables personalized marketing interactions across multiple channels. I began my career as a software engineer, but for the past 3 years, I've focused primarily on data engineering, developing expertise across the modern data stack. I architect and implement solutions using Apache Spark, Hadoop, and AWS cloud services, while managing complex data pipelines through messaging systems like Kafka, Pulsar, and NSQ. My experience spans ETL cluster management with Ambari and EMR, containerized deployments with Docker, and comprehensive system monitoring. Most of my backend work is in Ruby and Scala, especially for Spark jobs, though I can handle frontend development when needed. Recently, I've expanded into Generative AI and prompt engineering, exploring how cutting-edge AI can enhance data-driven marketing solutions.",
      career_goals: "Looking to take on more senior technical leadership roles in data engineering, with opportunities to mentor teams and drive architectural decisions for large-scale data platforms.",
      strengths: [
        "Strong problem-solving and analytical thinking",
        "Excellent communication and collaboration skills",
        "Quick learner with adaptability to new technologies",
        "Cost optimization and performance tuning expertise",
        "Cross-functional team leadership experience"
      ],
      motivation: "I'm passionate about building data solutions that directly impact business outcomes. I enjoy the challenge of optimizing complex systems and mentoring other engineers."
    },

    technical_skills: {
      primary: ["Apache Spark", "Apache Kafka", "AWS", "ETL Pipelines", "Big Data Analytics", "Spark Streaming", "Scala", "Ruby", "Python"],
      databases: ["PostgreSQL", "MySQL", "NoSQL", "Hive", "Cassandra", "Redis", "S3 Data Lake"],
      infrastructure: ["Docker", "EMR", "Lambda", "CloudWatch", "Ambari", "Airflow", "Nomad", "Resque", "Druid", "AWS Athena", "Apache Parquet"],
      messaging: ["Kafka", "Pulsar", "NSQ"],
      ai_ml: ["GenAI", "Prompt Engineering"],
      cloud: ["AWS (EC2, S3, EMR, Lambda, CloudWatch, ECS)", "Auto-scaling"],
      data_tools: ["Airflow", "Nomad", "Resque", "Druid", "AWS Athena", "Apache Parquet"],
      monitoring: ["CloudWatch", "Grafana", "DataDog"],
      programming: {
        expert: ["Scala", "Ruby", "Python", "SQL"],
        proficient: ["JavaScript", "Shell Scripting"],
        familiar: ["Elixir"]
      },
      years_experience: {
        "Apache Spark": "3+ years",
        "Apache Kafka": "3+ years", 
        "AWS": "4+ years",
        "Scala": "3+ years",
        "Ruby": "5+ years",
        "Python": "3+ years",
        "ETL/Data Pipelines": "3+ years"
      }
    },

    experience: {
      blueshift: {
        company: "Blueshift",
        title: "Senior Software Engineer",
        duration: "2021 - Present (3+ years)",
        location: "Remote/Hybrid",
        reporting: "Reports to Engineering Manager, collaborates with Principal Engineers",
        description: "Building scalable data pipelines for AI-powered Customer Data Platform processing millions of customer events daily through Kafka streams and Spark jobs.",
        technologies: ["Apache Spark", "Apache Kafka", "AWS", "ETL Pipelines", "Big Data Analytics", "Spark Streaming", "Scala", "Airflow", "Docker", "Nomad", "Resque", "Druid", "AWS Athena", "Apache Parquet"],
        responsibilities: [
          "Design and implement scalable data pipelines using Apache Spark and Scala to process customer engagement data across multiple marketing channels",
          "Build and maintain ETL processes on AWS infrastructure, managing data flow from ingestion to activation for personalized marketing campaigns",
          "Develop and optimize messaging queue systems using Kafka and Pulsar to handle real-time customer data streaming",
          "Monitor and troubleshoot data processing workflows using various monitoring tools to ensure platform reliability and performance",
          "Collaborate on GenAI and prompt engineering initiatives to enhance AI-driven customer personalization capabilities",
          "Optimize database queries and data processing jobs to improve platform performance and reduce processing time",
          "Work with Docker containerization for deployment and scaling of data engineering services",
          "Support frontend integration requirements to ensure seamless data delivery to marketing automation features",
          "Mentor junior engineers and conduct code reviews"
        ],
        achievements: [
          "Built real-time data streaming architecture processing millions of customer engagement events daily.",
          "Achieved 33% AWS cost reduction through strategic migration from on-premise Ambari clusters to AWS EMR, saving $50K+ annually",
          "Achieved 70% reduction in data processing time through Spark job optimisation.",
          "Built end-to-end automated data streaming pipelines with real-time analytics and comprehensive monitoring dashboards for tracking pipeline performance metrics.",
          "Enhanced customer catalog streaming pipeline architecture to achieve 99.9% uptime and implement fault-tolerant failover mechanisms during system outages.",
          "Built user insights analytics platform providing comprehensive reporting on customer orders, revenue trends, website visits, and user interactions to enable data-driven business decisions."
        ],
        challenges_solved: [
          "Resolved data loss issues in NSQ by migrating to Kafka.",
          "Replaced sidekiq with streaming jobs to improve data processing efficiency.",
          "Implemented efficient data partitioning strategies for improved query performance",
          "Built a data pipeline to ingest and process customer data from multiple sources into a unified data warehouse for analytics and reporting."
        ]
      },

      big_binary: {
        company: "BigBinary",
        title: "Full Stack Developer", 
        duration: "Feb 2021 - May 2021 (4 months)",
        location: "Remote",
        description: "Short-term engagement designing end-to-end referral management system connecting healthcare providers and patients",
        technologies: ["Ruby on Rails", "RESTful APIs", "PostgreSQL", "Microservices", "Sidekiq"],
        responsibilities: [
          "Full-Stack Developer for Healthcare Referral Network Platform connecting caregivers with patients",
          "Collaborated with healthcare stakeholders to translate workflow requirements into technical specifications",
          "Designed and implemented RESTful APIs to manage referral processes and user connections",
          "Developed testable, maintainable code following healthcare data handling best practices",
          "Built end-to-end features supporting the caregiver-patient referral workflow"
        ],
        achievements: [
          "Successfully delivered referral management system within tight timeline",
        ],
        reason_for_leaving: "Short-term contract completed successfully, transitioned to current role at Blueshift"
      },

      jost_software: {
        company: "Jost Software Solutions",
        title: "Software Engineer",
        duration: "June 2018 - Nov 2020 (2.5 years)",
        location: "On-site",
        description: "End-to-end feature development for media domain digital platform supporting ad-sales business operations",
        technologies: ["Ruby on Rails", "RESTful APIs", "PostgreSQL", "ReactJs", "Redux", "Microservices", "Cache Systems"],
        responsibilities: [
          "Full-Stack Software Engineer for Ad-Sales Digital Platform serving media and advertising industry",
          "Led end-to-end feature development for digital advertising platforms working with business stakeholders",
          "Designed and implemented RESTful APIs supporting core ad-sales functionality and third-party integrations",
          "Conducted proof-of-concept development to evaluate technical feasibility for complex business requirements",
          "Built responsive UI components and handled frontend-backend integration",
          "Performed system optimization including database query tuning, page load improvements, and caching strategies"
        ],
        achievements: [
          "Built comprehensive digital advertising platform streamlining ad-sales operations",
          "Improved database query performance by 30%",
          "Successfully delivered 15+ major features on schedule"
        ],
        reason_for_leaving: "Career growth opportunity and transition focus towards data engineering"
      }
    },

    education: {
      degree: "Bachelor of Technology in Information Technology",
      university: "Walchand College of Engineering, Sangli",
      graduation_year: "2018",
      relevant_courses: ["Data Structures", "Algorithms", "Database Systems", "Software Engineering"]
    },

    salary_expectations: {
      current_range: "Competitive with market standards",
      flexibility: "Open to discussing based on overall compensation package including equity, benefits, and growth opportunities",
      factors: ["Role responsibilities", "Company size and stage", "Equity component", "Remote work flexibility", "Learning opportunities", "Location"]
    },

    interview_scenarios: {
      system_design: "Experienced in designing large-scale distributed systems, real-time data processing architectures, and fault-tolerant pipelines",
      coding_challenges: "Strong in algorithms, data structures, and language-specific optimizations. Comfortable with live coding sessions",
      technical_deep_dive: "Can discuss architectural decisions, trade-offs, and performance optimizations from real projects"
    },

    common_questions: {
      why_looking: "I'm looking for opportunities to take on more senior technical leadership roles where I can drive architectural decisions and collaborate with engineering teams while working on challenging data problems at scale.",
      biggest_achievement: "Leading the AWS cost optimization initiative that saved $50K+ annually while improving system performance and reliability. This involved technical expertise, stakeholder management, and strategic planning.",
      biggest_challenge: "Migrating from on-premise Ambari clusters to AWS EMR while maintaining zero downtime. Required careful planning, incremental migration strategy, and extensive testing.",
      leadership_style: "I believe in collaborative leadership, mentoring through code reviews and pair programming, and making data-driven technical decisions. I focus on empowering team members while maintaining high code quality standards.",
      work_style: "I work well in both independent and collaborative environments. I believe in clear communication, documentation, and knowledge sharing. I'm comfortable with agile methodologies and cross-functional team collaboration."
    },

    red_flags_to_avoid: {
      negative_about_current_company: false,
      unrealistic_expectations: false,
      lack_of_preparation: false,
      poor_communication: false
    }
  };

  // Enhanced AI response generator with comprehensive recruiter question handling
  const generateAIResponse = (query) => {
    const lowerQuery = query.toLowerCase();
    
    // Salary and compensation questions
    if (lowerQuery.includes('salary') || lowerQuery.includes('compensation') || 
        lowerQuery.includes('pay') || lowerQuery.includes('money') || lowerQuery.includes('rate')) {
      return `Regarding compensation, I'm looking for ${knowledgeBase.salary_expectations.current_range}. I'm ${knowledgeBase.salary_expectations.flexibility}. Factors I consider include: ${knowledgeBase.salary_expectations.factors.join(', ')}.`;
    }
    
    // Why looking for new role / Why leaving
    if (lowerQuery.includes('why looking') || lowerQuery.includes('why leaving') || 
        lowerQuery.includes('new opportunity') || lowerQuery.includes('job change')) {
      return knowledgeBase.common_questions.why_looking;
    }
    
    // Availability and notice period
    if (lowerQuery.includes('availability') || lowerQuery.includes('start') || 
        lowerQuery.includes('notice') || lowerQuery.includes('when can you')) {
      return `I'm currently ${knowledgeBase.personal.availability}. My ${knowledgeBase.personal.notice_period}. I'm ${knowledgeBase.personal.visa_status}.`;
    }
    
    // Location and remote work
    if (lowerQuery.includes('location') || lowerQuery.includes('remote') || 
        lowerQuery.includes('relocate') || lowerQuery.includes('where are you')) {
      return `I'm ${knowledgeBase.personal.location}. I have extensive experience working remotely and am comfortable with distributed team collaboration.`;
    }
    
    // Strengths and skills
    if (lowerQuery.includes('strength') || lowerQuery.includes('skills') || 
        lowerQuery.includes('what are you good at') || lowerQuery.includes('expertise')) {
      return `My key strengths include: ${knowledgeBase.personal.strengths.join(', ')}. My technical expertise spans: ${knowledgeBase.technical_skills.primary.join(', ')}. ${knowledgeBase.personal.motivation}`;
    }
    
    // Biggest achievement
    if (lowerQuery.includes('achievement') || lowerQuery.includes('proud') || 
        lowerQuery.includes('accomplishment') || lowerQuery.includes('success')) {
      return knowledgeBase.common_questions.biggest_achievement;
    }
    
    // Biggest challenge
    if (lowerQuery.includes('challenge') || lowerQuery.includes('difficult') || 
        lowerQuery.includes('problem') || lowerQuery.includes('obstacle')) {
      return knowledgeBase.common_questions.biggest_challenge;
    }
    
    // Leadership and management
    if (lowerQuery.includes('leadership') || lowerQuery.includes('manage') || 
        lowerQuery.includes('team') || lowerQuery.includes('mentor')) {
      return `${knowledgeBase.common_questions.leadership_style} At Blueshift, I ${knowledgeBase.experience.blueshift.reporting} and regularly mentor junior engineers through code reviews and pair programming sessions.`;
    }
    
    // Career goals and future plans
    if (lowerQuery.includes('career') || lowerQuery.includes('future') || 
        lowerQuery.includes('goals') || lowerQuery.includes('ambition')) {
      return knowledgeBase.personal.career_goals;
    }
    
    // Learning and staying updated
    if (lowerQuery.includes('learn') || lowerQuery.includes('stay updated') || 
        lowerQuery.includes('technology') || lowerQuery.includes('growth')) {
      return knowledgeBase.common_questions.stay_updated;
    }
    
    // Work style and culture fit
    if (lowerQuery.includes('work style') || lowerQuery.includes('culture') || 
        lowerQuery.includes('team work') || lowerQuery.includes('collaboration')) {
      return knowledgeBase.common_questions.work_style;
    }
    
    // Experience with specific technologies
    if (lowerQuery.includes('kafka')) {
      return `I have ${knowledgeBase.technical_skills.years_experience['Apache Kafka']} of hands-on experience with Apache Kafka. At Blueshift, I develop and optimize messaging queue systems using Kafka and Pulsar to handle real-time customer data streaming processing millions of events daily.`;
    }
    
    if (lowerQuery.includes('spark')) {
      return `I have ${knowledgeBase.technical_skills.years_experience['Apache Spark']} of extensive experience with Apache Spark. I design and implement scalable data pipelines using Spark and Scala, achieving 70% reduction in data processing time through optimization techniques.`;
    }
    
    if (lowerQuery.includes('aws')) {
      return `I have ${knowledgeBase.technical_skills.years_experience['AWS']} of experience with AWS services including EC2, S3, EMR, Lambda, and CloudWatch. I led the migration from on-premise clusters to AWS EMR, achieving 33% cost reduction while improving performance.`;
    }
    
    if (lowerQuery.includes('scala')) {
      return `I have ${knowledgeBase.technical_skills.years_experience['Scala']} of professional experience with Scala, primarily for Apache Spark jobs and data processing pipelines. I'm comfortable with functional programming concepts and Scala ecosystem.`;
    }
    
    // Current role and company
    if (lowerQuery.includes('current role') || lowerQuery.includes('blueshift') || 
        lowerQuery.includes('what do you do')) {
      const currentRole = knowledgeBase.experience.blueshift;
      return `I'm currently a ${currentRole.title} at ${currentRole.company} for ${currentRole.duration}. ${currentRole.description} Key achievements include: ${currentRole.achievements.slice(0, 2).join('. ')}.`;
    }
    
    // Previous experience
    if (lowerQuery.includes('previous') || lowerQuery.includes('before') || 
        lowerQuery.includes('background') || lowerQuery.includes('history')) {
      return `I have ${knowledgeBase.personal.experience} across multiple companies. Before Blueshift, I worked at ${knowledgeBase.experience.jost_software.company} as a ${knowledgeBase.experience.jost_software.title} for ${knowledgeBase.experience.jost_software.duration}, focusing on ad-sales platforms. I also had a brief engagement at ${knowledgeBase.experience.big_binary.company} working on healthcare referral systems.`;
    }
    
    // Education
    if (lowerQuery.includes('education') || lowerQuery.includes('degree') || 
        lowerQuery.includes('university') || lowerQuery.includes('study')) {
      return `I have a ${knowledgeBase.education.degree} from ${knowledgeBase.education.university}, graduating in ${knowledgeBase.education.graduation_year}. I also hold certifications including: ${knowledgeBase.education.certifications.join(', ')}.`;
    }
    
    // Interview readiness
    if (lowerQuery.includes('interview') || lowerQuery.includes('technical') || 
        lowerQuery.includes('coding') || lowerQuery.includes('system design')) {
      return `I'm well-prepared for technical interviews. I'm ${knowledgeBase.interview_scenarios.system_design}. For coding challenges, I'm ${knowledgeBase.interview_scenarios.coding_challenges}.`;
    }
    
    // Projects and achievements
    if (lowerQuery.includes('project') || lowerQuery.includes('work') || 
        lowerQuery.includes('built') || lowerQuery.includes('example')) {
      const blueshift = knowledgeBase.experience.blueshift;
      return `At Blueshift, I've worked on: ${blueshift.achievements.slice(0, 3).join('; ')}. I've also contributed to projects involving ${blueshift.technologies.join(', ')}. Each project has taught me different aspects of scalable data engineering.`;
    }
    
    // Transition to data engineering
    if (lowerQuery.includes('transition') || lowerQuery.includes('career change') || 
        lowerQuery.includes('data engineer') || lowerQuery.includes('journey')) {
      return `I transitioned from full-stack development to data engineering over the past 3 years. This transition was driven by my passion for building scalable data solutions that directly impact business outcomes. I've developed expertise across the modern data stack while maintaining my full-stack capabilities.`;
    }
    
    // Technical depth questions
    if (lowerQuery.includes('etl') || lowerQuery.includes('pipeline') || 
        lowerQuery.includes('data processing')) {
      return `I specialize in building scalable ETL pipelines using Apache Spark, Kafka, and AWS services. I've architected solutions processing millions of events daily with 99.9% uptime. My approach focuses on fault tolerance, performance optimization, and cost efficiency.`;
    }
    
    // AI and GenAI
    if (lowerQuery.includes('ai') || lowerQuery.includes('genai') || 
        lowerQuery.includes('machine learning') || lowerQuery.includes('prompt')) {
      return `I'm actively exploring GenAI and prompt engineering applications in data engineering. At Blueshift, I collaborate on GenAI initiatives to enhance AI-driven customer personalization. I believe AI will transform how we build and optimize data pipelines.`;
    }
    
    // General experience question
    if (lowerQuery.includes('tell me about yourself') || lowerQuery.includes('introduce') || 
        lowerQuery.includes('overview') || lowerQuery.includes('summary')) {
      return `${knowledgeBase.personal.about} I'm ${knowledgeBase.personal.current_role}. ${knowledgeBase.personal.career_goals}`;
    }
    
    // Default response with helpful suggestions
    return `I'd be happy to help answer your questions! You can ask me about:
    
  📋 **Common Recruiter Questions:**
  - My current role and experience
  - Why I'm looking for new opportunities  
  - Salary expectations and availability
  - Technical skills and expertise levels
  - Biggest achievements and challenges
  - Leadership and team collaboration experience

  🛠️ **Technical Topics:**
  - Apache Spark, Kafka, AWS experience
  - Data engineering projects and pipelines
  - System design and architecture decisions
  - Performance optimization examples

  💼 **Career Information:**
  - Previous roles and transitions
  - Education and certifications
  - Career goals and growth plans
  - Work style and culture preferences

  What specific aspect would you like to know more about?`;
  };


  useEffect(() => {
    let interval;
    if (isStreaming) {
      interval = setInterval(() => {
        const newRecord = {
          timestamp: new Date().toLocaleTimeString(),
          events: Math.floor(Math.random() * 1000) + 500,
          processed: Math.floor(Math.random() * 950) + 480,
          latency: Math.floor(Math.random() * 20) + 5
        };
        setStreamingData(prev => [...prev.slice(-19), newRecord]);
        setProcessedRecords(prev => prev + newRecord.processed);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isStreaming]);

  // Pipeline step progression
  useEffect(() => {
    if (isStreaming) {
      const stepInterval = setInterval(() => {
        setPipelineStep(prev => (prev + 1) % 4);
      }, 2000);
      return () => clearInterval(stepInterval);
    }
  }, [isStreaming]);

  // Auto-scroll chat
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [chatMessages]);

  const handleChatSubmit = (e) => {
    if (!inputMessage.trim()) return;

    // Add user message
    setChatMessages(prev => [...prev, { type: 'user', content: inputMessage }]);

    // Generate AI response using enhanced knowledge base
    setTimeout(() => {
      const response = generateAIResponse(inputMessage);
      setChatMessages(prev => [...prev, { type: 'bot', content: response }]);
    }, 500);

    setInputMessage('');
  };

  const pipelineSteps = ['Ingestion', 'Processing', 'Transformation', 'Output'];
  const currentStep = pipelineSteps[pipelineStep];

  const sampleQuestions = [
    "What's your experience with Kafka?",
    "Tell me about your projects at Blueshift",
    "How did you transition to data engineering?",
    "What GenAI projects are you working on?",
    "Why are you looking for new opportunities?",
    "What's your biggest achievement?",
    "Tell me about your leadership experience",
    "What are your salary expectations?"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Header */}
      <header className="border-b border-slate-700 bg-slate-800/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Database className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-white">Data Engineering Portfolio</h1>
                <p className="text-sm text-slate-400">AI-Powered Interactive Experience</p>
              </div>
            </div>
            <div className="flex space-x-4">
              <button
                onClick={() => setActiveTab('ai-stories')}
                className={`px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors ${
                  activeTab === 'ai-stories' 
                    ? 'bg-blue-600 text-white' 
                    : 'text-slate-300 hover:text-white hover:bg-slate-700'
                }`}
              >
                <Bot className="w-4 h-4" />
                <span>AI Stories</span>
              </button>
              <button
                onClick={() => setActiveTab('live-demo')}
                className={`px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors ${
                  activeTab === 'live-demo' 
                    ? 'bg-purple-600 text-white' 
                    : 'text-slate-300 hover:text-white hover:bg-slate-700'
                }`}
              >
                <Activity className="w-4 h-4" />
                <span>Live Demo</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* AI Stories Tab */}
      {activeTab === 'ai-stories' && (
        <div className="max-w-6xl mx-auto px-4 py-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Chat Interface */}
            <div className="lg:col-span-2">
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700 h-[780px] flex flex-col">
                <div className="p-4 border-b border-slate-700">
                  <h3 className="text-lg font-semibold text-white flex items-center">
                    <MessageCircle className="w-5 h-5 mr-2 text-blue-400" />
                    Ask About My Experience
                  </h3>
                  <p className="text-sm text-slate-400">Chat with AI to explore my data engineering journey</p>
                </div>
                
                <div className="flex-1 overflow-y-auto p-4 space-y-4">
                  {chatMessages.map((msg, idx) => (
                    <div key={idx} className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                      <div className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                        msg.type === 'user' 
                          ? 'bg-blue-600 text-white' 
                          : 'bg-slate-700 text-slate-200'
                      }`}>
                        <div className="flex items-start space-x-2">
                          {msg.type === 'bot' && <Bot className="w-4 h-4 mt-0.5 text-blue-400" />}
                          {msg.type === 'user' && <User className="w-4 h-4 mt-0.5" />}
                          <p className="text-sm">{msg.content}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                  <div ref={chatEndRef} />
                </div>

                <div className="p-4 border-t border-slate-700">
                  <div className="flex space-x-2">
                    <input
                      type="text"
                      value={inputMessage}
                      onChange={(e) => setInputMessage(e.target.value)}
                      onKeyDown={(e) => e.key === 'Enter' && handleChatSubmit(e)}
                      placeholder="Ask about my skills, projects, or experience..."
                      className="flex-1 px-3 py-2 bg-slate-700 border border-slate-600 rounded-lg text-sm text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <button
                      onClick={handleChatSubmit}
                      className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
                    >
                      <Send className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Questions & Skills */}
            <div className="space-y-6">
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700 p-6">
                <h3 className="text-lg font-semibold text-white mb-4">Try These Questions</h3>
                <div className="space-y-2">
                  {sampleQuestions.map((question, idx) => (
                    <button
                      key={idx}
                      onClick={() => setInputMessage(question)}
                      className="w-full text-left p-3 text-sm text-slate-300 hover:text-white hover:bg-slate-700 rounded-lg transition-colors"
                    >
                      {question}
                    </button>
                  ))}
                </div>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700 p-6">
                <h3 className="text-lg font-semibold text-white mb-4">Tech Stack</h3>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { name: 'Apache Spark', icon: Zap },
                    { name: 'Apache Kafka', icon: GitBranch },
                    { name: 'AWS', icon: Server },
                    { name: 'Docker', icon: Database },
                    { name: 'Scala', icon: Code },
                    { name: 'GenAI', icon: Bot }
                  ].map((tech, idx) => (
                    <div key={idx} className="flex items-center space-x-2 p-2 bg-slate-700/50 rounded-lg">
                      <tech.icon className="w-4 h-4 text-blue-400" />
                      <span className="text-sm text-slate-300">{tech.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Live Demo Tab */}
      {activeTab === 'live-demo' && (
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="mb-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Real-Time Data Engineering Playground</h2>
            <p className="text-slate-400 mb-6">Experience live data processing pipelines in action</p>
            <button
              onClick={() => setIsStreaming(!isStreaming)}
              className={`px-6 py-3 rounded-lg flex items-center space-x-2 mx-auto transition-colors ${
                isStreaming 
                  ? 'bg-red-600 hover:bg-red-700 text-white' 
                  : 'bg-green-600 hover:bg-green-700 text-white'
              }`}
            >
              {isStreaming ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
              <span>{isStreaming ? 'Stop Pipeline' : 'Start Pipeline'}</span>
            </button>
          </div>

          {/* Pipeline Visualization */}
          <div className="grid lg:grid-cols-4 gap-6 mb-8">
            {pipelineSteps.map((step, idx) => (
              <div key={idx} className={`bg-slate-800/50 backdrop-blur-sm rounded-xl border p-6 transition-all ${
                pipelineStep === idx && isStreaming 
                  ? 'border-blue-500 shadow-lg shadow-blue-500/20' 
                  : 'border-slate-700'
              }`}>
                <div className="text-center">
                  <div className={`w-12 h-12 mx-auto mb-3 rounded-full flex items-center justify-center ${
                    pipelineStep === idx && isStreaming 
                      ? 'bg-blue-600 animate-pulse' 
                      : 'bg-slate-700'
                  }`}>
                    {idx === 0 && <Database className="w-6 h-6 text-white" />}
                    {idx === 1 && <Cpu className="w-6 h-6 text-white" />}
                    {idx === 2 && <GitBranch className="w-6 h-6 text-white" />}
                    {idx === 3 && <BarChart3 className="w-6 h-6 text-white" />}
                  </div>
                  <h3 className="font-semibold text-white">{step}</h3>
                  <p className="text-sm text-slate-400 mt-1">
                    {idx === 0 && 'Kafka Streams'}
                    {idx === 1 && 'Spark Processing'}
                    {idx === 2 && 'Data Transform'}
                    {idx === 3 && 'Analytics Ready'}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Real-time Metrics with Enhanced Data */}
          <div className="grid lg:grid-cols-3 gap-6">
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700 p-6">
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
                <TrendingUp className="w-5 h-5 mr-2 text-green-400" />
                Streaming Throughput
              </h3>
              <div className="h-48">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={streamingData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                    <XAxis dataKey="timestamp" stroke="#9CA3AF" fontSize={12} />
                    <YAxis stroke="#9CA3AF" fontSize={12} />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: '#1F2937', 
                        border: '1px solid #374151',
                        borderRadius: '8px',
                        color: '#F3F4F6'
                      }} 
                    />
                    <Area 
                      type="monotone" 
                      dataKey="events" 
                      stroke="#3B82F6" 
                      fill="#3B82F6" 
                      fillOpacity={0.2}
                      name="Events/sec"
                    />
                    <Area 
                      type="monotone" 
                      dataKey="processed" 
                      stroke="#10B981" 
                      fill="#10B981" 
                      fillOpacity={0.2}
                      name="Processed/sec"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700 p-6">
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
                <Activity className="w-5 h-5 mr-2 text-purple-400" />
                Processing Latency
              </h3>
              <div className="h-48">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={streamingData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                    <XAxis dataKey="timestamp" stroke="#9CA3AF" fontSize={12} />
                    <YAxis stroke="#9CA3AF" fontSize={12} />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: '#1F2937', 
                        border: '1px solid #374151',
                        borderRadius: '8px',
                        color: '#F3F4F6'
                      }} 
                    />
                    <Line 
                      type="monotone" 
                      dataKey="latency" 
                      stroke="#8B5CF6" 
                      strokeWidth={2}
                      name="Latency (ms)"
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700 p-6">
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
                <Server className="w-5 h-5 mr-2 text-orange-400" />
                System Resources
              </h3>
              <div className="h-48">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={streamingData.slice(-10)}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                    <XAxis dataKey="timestamp" stroke="#9CA3AF" fontSize={10} />
                    <YAxis stroke="#9CA3AF" fontSize={12} />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: '#1F2937', 
                        border: '1px solid #374151',
                        borderRadius: '8px',
                        color: '#F3F4F6'
                      }} 
                    />
                    <Bar dataKey="cpuUsage" fill="#F59E0B" name="CPU %" />
                    <Bar dataKey="memoryUsage" fill="#EF4444" name="Memory %" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>

          {/* Enhanced Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-8">
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700 p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-400">Total Processed</p>
                  <p className="text-2xl font-bold text-white">{processedRecords.toLocaleString()}</p>
                </div>
                <Database className="w-8 h-8 text-blue-400" />
              </div>
            </div>
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700 p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-400">Current Step</p>
                  <p className="text-2xl font-bold text-white">{currentStep}</p>
                </div>
                <Cpu className="w-8 h-8 text-green-400" />
              </div>
            </div>
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700 p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-400">Pipeline Status</p>
                  <p className="text-2xl font-bold text-white">{isStreaming ? 'Active' : 'Idle'}</p>
                </div>
                <Activity className={`w-8 h-8 ${isStreaming ? 'text-green-400' : 'text-slate-400'}`} />
              </div>
            </div>
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700 p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-400">Success Rate</p>
                  <p className="text-2xl font-bold text-white">
                    {streamingData.length > 0 ? 
                      Math.round((streamingData[streamingData.length - 1]?.processed / streamingData[streamingData.length - 1]?.events * 100) || 0) 
                      : 0}%
                  </p>
                </div>
                <TrendingUp className="w-8 h-8 text-green-400" />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DataEngineeringPortfolio;
