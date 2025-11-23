import React from 'react';
import { ExternalLink, Calendar, Users, Award } from 'lucide-react';

const Contributions = () => {
  const experiences = [
    {
      title: 'Student Intern',
      company: 'Scaler School of Technology',
      program: 'Young Innovators Internship Challenge',
      period: 'Current',
      description: 'Participating in an intensive learning program focused on advanced software development, AI systems, and industry best practices.',
      skills: ['AI/ML', 'Software Engineering', 'Problem Solving'],
      icon: Award,
    },
    {
      title: 'Paid Intern',
      company: 'Bollygrad Studioz',
      program: 'YouTube Channel Development',
      period: 'Current',
      description: 'Contributing to content strategy and technical development for a YouTube channel with over 9 million subscribers.',
      skills: ['Content Strategy', 'Analytics', 'Digital Marketing'],
      icon: Users,
    },
  ];

  const projects = [
    {
      title: 'AI Data Analysis Platform',
      description: 'Built a comprehensive platform for analyzing datasets using machine learning algorithms and visualization tools.',
      technologies: ['Python', 'TensorFlow', 'React', 'FastAPI'],
    },
    {
      title: 'Smart Web Applications',
      description: 'Developed responsive web applications with AI-powered features and modern user interfaces.',
      technologies: ['TypeScript', 'React', 'Node.js', 'PostgreSQL'],
    },
  ];

  return (
    <section id="contributions" className="py-20 bg-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Contributions
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Current internships and professional experiences
          </p>
        </div>

        <div className="space-y-12">
          <div>
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center">
              <Calendar className="mr-3 text-blue-400" size={24} />
              Current Positions
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              {experiences.map((experience, index) => {
                const IconComponent = experience.icon;
                return (
                  <div
                    key={index}
                    className="bg-gray-900 rounded-lg p-6 border border-gray-800 hover:border-blue-500 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <IconComponent size={24} className="text-blue-400" />
                        <div>
                          <h4 className="text-lg font-bold text-white">{experience.title}</h4>
                          <p className="text-blue-400 font-medium">{experience.company}</p>
                        </div>
                      </div>
                      <span className="text-sm text-gray-400 bg-gray-800 px-3 py-1 rounded-full">
                        {experience.period}
                      </span>
                    </div>
                    <p className="text-purple-400 font-medium mb-3">{experience.program}</p>
                    <p className="text-gray-300 mb-4 leading-relaxed">{experience.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {experience.skills.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="text-xs bg-blue-900/50 text-blue-300 px-2 py-1 rounded-full border border-blue-700/50"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center">
              <ExternalLink className="mr-3 text-purple-400" size={24} />
              Featured Projects
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="bg-gray-900 rounded-lg p-6 border border-gray-800 hover:border-purple-500 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/10"
                >
                  <h4 className="text-lg font-bold text-white mb-3">{project.title}</h4>
                  <p className="text-gray-300 mb-4 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="text-xs bg-purple-900/50 text-purple-300 px-2 py-1 rounded-full border border-purple-700/50"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contributions;