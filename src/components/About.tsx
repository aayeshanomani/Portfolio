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

  // Helper to wrap numbers in highlight span
  const highlightNumbers = (text: string) => {
    return text.replace(/(\d+[\d,.]*\+?|\d+%|\d+\.\d+%?|\d+M\+?|\d+K\+?)/g, '<span class="highlight-number">$1</span>');
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto pt-20 bg-nomad-background text-nomad-highlight font-heading"
    >
      <h2 className="text-3xl font-bold mb-8 flex items-center">
        <span className="text-nomad-accent font-mono mr-2">01.</span>
        About Me
      </h2>
      
      <div className="space-y-12">
        {/* Professional Summary */}
        <section>
          <p className="text-nomad-highlight text-lg mb-6">
            Results-driven Software Development Engineer II at AWS with expertise in building scalable cloud solutions 
            and innovative retail technologies. Proven track record of delivering high-impact projects that serve 
            millions of users while maintaining exceptional performance metrics.
          </p>
        </section>

        {/* Professional Experience */}
        <section>
          <h3 className="text-2xl font-bold mb-6 text-nomad-highlight">Professional Experience</h3>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="bg-nomad-primary/80 p-6 rounded-xl shadow-glow">
                <h4 className="text-xl font-bold text-nomad-highlight mb-1">
                  <span className="text-nomad-accent font-mono mr-2">{exp.title}</span>
                  <span className="text-nomad-highlight mx-2">@</span>
                  <span className="text-nomad-highlight">{exp.company}</span>
                  <span className="text-nomad-accent text-sm ml-2 font-mono">
                    <span dangerouslySetInnerHTML={{ __html: highlightNumbers(exp.period) }} />
                  </span>
                </h4>
                <ul className="mt-2 space-y-2">
                  {exp.highlights.map((highlight, i) => (
                    <li key={i} className="flex items-start text-nomad-highlight">
                      <span className="text-nomad-accent mr-2 mt-1">▹</span>
                      <span dangerouslySetInnerHTML={{ __html: highlightNumbers(highlight) }} />
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Skills */}
        <section>
          <h3 className="text-2xl font-bold mb-6 text-nomad-highlight">Technical Skills</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category} className="bg-nomad-primary/60 p-4 rounded-lg">
                <h4 className="text-lg font-bold text-nomad-accent mb-2">{category}</h4>
                <ul className="space-y-1">
                  {items.map((skill) => (
                    <li key={skill} className="flex items-center text-nomad-highlight">
                      <span className="text-nomad-accent mr-2">▹</span>
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
          <h3 className="text-2xl font-bold mb-6 text-nomad-highlight">Education</h3>
          <div className="bg-nomad-primary/60 p-4 rounded-lg">
            <h4 className="text-xl font-bold text-nomad-highlight">
              {education.degree}
              <span className="text-nomad-accent text-sm ml-2 font-mono">
                <span dangerouslySetInnerHTML={{ __html: highlightNumbers(education.period) }} />
              </span>
            </h4>
            <p className="text-nomad-highlight mb-2">{education.school}</p>
            <ul className="space-y-1">
              {education.achievements.map((achievement, index) => (
                <li key={index} className="flex items-center text-nomad-highlight">
                  <span className="text-nomad-accent mr-2">▹</span>
                  <span dangerouslySetInnerHTML={{ __html: highlightNumbers(achievement) }} />
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Publications */}
        <section>
          <h3 className="text-2xl font-bold mb-6 text-nomad-highlight">Publications</h3>
          {publications.map((pub, index) => (
            <div key={index} className="bg-nomad-primary/60 p-4 rounded-lg">
              <h4 className="text-lg font-bold text-nomad-highlight mb-2">{pub.title}</h4>
              <p className="text-nomad-highlight mb-2">{pub.publisher}</p>
              <p className="text-nomad-highlight mb-2">
                <span dangerouslySetInnerHTML={{ __html: highlightNumbers(pub.impact) }} />
              </p>
              <a 
                href={pub.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-nomad-accent hover:underline"
              >
                DOI: {pub.doi}
              </a>
            </div>
          ))}
        </section>

        {/* Certificates */}
        <section>
          <h3 className="text-2xl font-bold mb-6 text-nomad-highlight">Certificates</h3>
          <div className="grid md:grid-cols-2 gap-4">
            {certificates.map((cert, index) => (
              <div key={index} className="bg-nomad-primary/60 p-4 rounded-lg">
                <h4 className="text-lg font-bold text-nomad-highlight mb-1">{cert.name}</h4>
                <p className="text-nomad-highlight">
                  {cert.issuer}
                  <span className="text-nomad-accent ml-2">
                    <span dangerouslySetInnerHTML={{ __html: highlightNumbers(cert.year) }} />
                  </span>
                </p>
                <ul className="mt-2">
                  {cert.skills.map((skill, i) => (
                    <li key={i} className="text-sm text-nomad-highlight">• {skill}</li>
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
