import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  const skills = {
    'Programming Languages': ['Java', 'Python', 'C++', 'Kotlin', 'C#', 'JavaScript', 'TypeScript'],
    'Frameworks & Libraries': ['Flutter', 'SpringBoot', 'Angular', 'React', 'Node.js', 'Express'],
    'Cloud & Infrastructure': ['AWS Services', 'AWS CDK', 'Docker', 'Kubernetes', 'CI/CD'],
    'Databases': ['PostgreSQL', 'MySQL', 'MongoDB', 'DynamoDB', 'Redis'],
    'Other Technologies': ['System Design', 'OAuth', 'REST APIs', 'GraphQL', 'Machine Learning']
  };

  const experiences = [
    {
      title: 'Software Development Engineer II',
      company: 'AWS, Amazon',
      period: '2024 - Present',
      highlights: [
        'Led the development of AWS Q data connectors, achieving 99.9% data retrieval accuracy across multiple sources',
        'Implemented real-time data synchronization reducing latency by 60% and improving user experience',
        'Designed scalable architecture handling 1M+ daily requests with <100ms response time',
        'Mentored 3 junior developers and conducted 20+ technical interviews for the team'
      ]
    },
    {
      title: 'Software Development Engineer',
      company: 'Amazon',
      period: '2022 - 2024',
      highlights: [
        'Developed Amazon Dash Cart features used by 50,000+ customers monthly across 15+ stores',
        'Architected Maps and Search feature reducing product finding time by 40%',
        'Optimized map rendering performance resulting in 70% faster zoom operations',
        'Implemented real-time navigation system with 95% accuracy in product location'
      ]
    },
    {
      title: 'Software Development Engineer',
      company: 'Amazon',
      period: '2022 - 2022',
      highlights: [
        'Built labor automation service reducing manual task assignment time by 65%',
        'Implemented ML-based task distribution algorithm improving efficiency by 45%',
        'Developed REST APIs handling 500K+ daily requests with 99.9% uptime'
      ]
    },
    {
      title: 'Lead Developer (Freelance)',
      company: 'Edukaizen',
      period: '2020 - 2022',
      highlights: [
        'Led a team of 5 developers in building Karnataka\'s land registration portal serving 100K+ users',
        'Implemented secure document verification system processing 10K+ documents daily',
        'Reduced registration processing time by 70% through automated workflows'
      ]
    }
  ];

  const education = {
    degree: 'B.E. in Information Science',
    school: 'NMIT, Bangalore',
    period: '2018 – 2022',
    achievements: [
      'First Class with Distinction',
      'Published research paper in Springer',
      'Led college technical team of 20+ members'
    ]
  };

  const publications = [
    {
      title: 'Traffic Density Calculation Using PEGASIS and Traffic Light Control Using STLSD Algorithm',
      publisher: 'Springer',
      doi: '10.1007/978-981-16-9605-3_42',
      link: 'https://link.springer.com/chapter/10.1007/978-981-16-9605-3_42',
      impact: 'Achieved 30% reduction in average traffic wait times in simulation'
    }
  ];

  const certificates = [
    {
      name: 'AWS Technical Essentials',
      issuer: 'Amazon',
      year: '2022',
      skills: ['AWS Core Services', 'Cloud Architecture', 'Security Best Practices']
    },
    {
      name: 'Game Design and Development',
      issuer: 'University of Michigan',
      year: '2021',
      skills: ['Unity', 'Game Physics', 'User Experience']
    },
    {
      name: 'Bits and Bytes of Computer Networking',
      issuer: 'Google',
      year: '2020',
      skills: ['Network Protocols', 'Security', 'Troubleshooting']
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto pt-20"
    >
      <h2 className="text-3xl font-bold mb-8 flex items-center">
        <span className="text-secondary font-mono mr-2">01.</span>
        About Me
      </h2>
      
      <div className="space-y-12">
        {/* Professional Summary */}
        <section>
          <p className="text-textSecondary text-lg mb-6">
            Results-driven Software Development Engineer II at AWS with expertise in building scalable cloud solutions 
            and innovative retail technologies. Proven track record of delivering high-impact projects that serve 
            millions of users while maintaining exceptional performance metrics.
          </p>
        </section>

        {/* Professional Experience */}
        <section>
          <h3 className="text-2xl font-bold mb-6 text-textPrimary">Professional Experience</h3>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="mb-6">
                <h4 className="text-xl font-bold text-textPrimary flex flex-wrap items-baseline">
                  <span>{exp.title}</span>
                  <span className="text-secondary mx-2">@</span>
                  <span>{exp.company}</span>
                  <span className="text-textSecondary text-sm ml-2 font-mono">
                    {exp.period}
                  </span>
                </h4>
                <ul className="mt-2 space-y-2">
                  {exp.highlights.map((highlight, i) => (
                    <li key={i} className="flex items-start text-textSecondary">
                      <span className="text-secondary mr-2 mt-1">▹</span>
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Skills */}
        <section>
          <h3 className="text-2xl font-bold mb-6 text-textPrimary">Technical Skills</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category} className="bg-primary/10 p-4 rounded-lg">
                <h4 className="text-lg font-bold text-secondary mb-2">{category}</h4>
                <ul className="space-y-1">
                  {items.map((skill) => (
                    <li key={skill} className="flex items-center text-textSecondary">
                      <span className="text-secondary mr-2">▹</span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Education */}
        <section>
          <h3 className="text-2xl font-bold mb-6 text-textPrimary">Education</h3>
          <div className="bg-primary/10 p-4 rounded-lg">
            <h4 className="text-xl font-bold text-textPrimary">
              {education.degree}
              <span className="text-secondary text-sm ml-2 font-mono">
                {education.period}
              </span>
            </h4>
            <p className="text-textSecondary mb-2">{education.school}</p>
            <ul className="space-y-1">
              {education.achievements.map((achievement, index) => (
                <li key={index} className="flex items-center text-textSecondary">
                  <span className="text-secondary mr-2">▹</span>
                  {achievement}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Publications */}
        <section>
          <h3 className="text-2xl font-bold mb-6 text-textPrimary">Publications</h3>
          {publications.map((pub, index) => (
            <div key={index} className="bg-primary/10 p-4 rounded-lg">
              <h4 className="text-lg font-bold text-textPrimary mb-2">{pub.title}</h4>
              <p className="text-textSecondary mb-2">{pub.publisher}</p>
              <p className="text-textSecondary mb-2">{pub.impact}</p>
              <a 
                href={pub.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary hover:underline"
              >
                DOI: {pub.doi}
              </a>
            </div>
          ))}
        </section>

        {/* Certificates */}
        <section>
          <h3 className="text-2xl font-bold mb-6 text-textPrimary">Certificates</h3>
          <div className="grid md:grid-cols-2 gap-4">
            {certificates.map((cert, index) => (
              <div key={index} className="bg-primary/10 p-4 rounded-lg">
                <h4 className="text-lg font-bold text-textPrimary mb-1">{cert.name}</h4>
                <p className="text-textSecondary">
                  {cert.issuer}
                  <span className="text-secondary ml-2">{cert.year}</span>
                </p>
                <ul className="mt-2">
                  {cert.skills.map((skill, i) => (
                    <li key={i} className="text-sm text-textSecondary">• {skill}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      </div>
    </motion.div>
  );
};

export default About;
