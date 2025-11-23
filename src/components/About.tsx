import React from 'react';
import { Brain, Code, Database, Zap } from 'lucide-react';

const About = () => {
  const skills = [
    { name: 'Artificial Intelligence', level: 90, icon: Brain },
    { name: 'Web Development', level: 85, icon: Code },
    { name: 'Data Analysis', level: 80, icon: Database },
    { name: 'Problem Solving', level: 95, icon: Zap },
  ];

  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About Me
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Passionate about leveraging technology to solve complex problems
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="prose prose-lg prose-invert">
              <p className="text-gray-300 leading-relaxed">
                I enjoy solving real-world problems using AI and machine learning. 
                Currently pursuing my Bachelor's in Computer Science at <span className="text-blue-400 font-semibold">MNR University</span>, 
                I'm passionate about exploring the intersection of artificial intelligence and web development.
              </p>
              <p className="text-gray-300 leading-relaxed">
                When I'm not coding or training models, you'll find me playing cricket, 
                experimenting with new recipes in the kitchen, or watching anime. 
                I believe in continuous learning and staying curious about emerging technologies.
              </p>
              <p className="text-gray-300 leading-relaxed">
                My goal is to build AI systems that make a meaningful impact on people's lives, 
                combining technical expertise with creative problem-solving.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white mb-8">Skills & Expertise</h3>
            {skills.map((skill, index) => {
              const IconComponent = skill.icon;
              return (
                <div key={index} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <IconComponent size={20} className="text-blue-400" />
                      <span className="text-white font-medium">{skill.name}</span>
                    </div>
                    <span className="text-gray-400 text-sm">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;