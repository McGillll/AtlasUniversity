import React from 'react';

const Courses = () => {
  const departments = [
    {
      name: "Computer Science",
      description: "Leading-edge technology and computing programs",
      courses: [
        {
          code: "CS 101",
          title: "Introduction to Programming",
          credits: 3,
          description: "Fundamentals of programming using Python. Covers variables, control structures, functions, and basic algorithms.",
          level: "Undergraduate"
        },
        {
          code: "CS 201",
          title: "Data Structures and Algorithms",
          credits: 4,
          description: "Study of fundamental data structures and algorithms. Analysis of time and space complexity.",
          level: "Undergraduate"
        },
        {
          code: "CS 301",
          title: "Database Management Systems",
          credits: 3,
          description: "Design and implementation of database systems. SQL, normalization, and transaction processing.",
          level: "Undergraduate"
        },
        {
          code: "CS 401",
          title: "Machine Learning",
          credits: 4,
          description: "Introduction to machine learning algorithms, neural networks, and AI applications.",
          level: "Graduate"
        }
      ]
    },
    {
      name: "Business Administration",
      description: "Comprehensive business and management education",
      courses: [
        {
          code: "BUS 101",
          title: "Introduction to Business",
          credits: 3,
          description: "Overview of business principles, organizational structures, and market dynamics.",
          level: "Undergraduate"
        },
        {
          code: "BUS 201",
          title: "Financial Accounting",
          credits: 3,
          description: "Principles of financial accounting, financial statements, and accounting cycles.",
          level: "Undergraduate"
        },
        {
          code: "BUS 301",
          title: "Marketing Management",
          credits: 3,
          description: "Strategic marketing concepts, consumer behavior, and digital marketing strategies.",
          level: "Undergraduate"
        },
        {
          code: "BUS 401",
          title: "Strategic Management",
          credits: 4,
          description: "Corporate strategy, competitive analysis, and strategic decision-making frameworks.",
          level: "Graduate"
        }
      ]
    },
    {
      name: "Engineering",
      description: "Innovative engineering solutions for tomorrow's challenges",
      courses: [
        {
          code: "ENG 101",
          title: "Engineering Fundamentals",
          credits: 4,
          description: "Introduction to engineering principles, problem-solving methods, and design thinking.",
          level: "Undergraduate"
        },
        {
          code: "ENG 201",
          title: "Circuit Analysis",
          credits: 4,
          description: "Analysis of electrical circuits, Ohm's law, Kirchhoff's laws, and AC/DC circuits.",
          level: "Undergraduate"
        },
        {
          code: "ENG 301",
          title: "Thermodynamics",
          credits: 3,
          description: "Laws of thermodynamics, heat engines, refrigeration cycles, and energy systems.",
          level: "Undergraduate"
        },
        {
          code: "ENG 401",
          title: "Advanced Materials Science",
          credits: 4,
          description: "Properties and applications of advanced materials in engineering systems.",
          level: "Graduate"
        }
      ]
    },
    {
      name: "Liberal Arts",
      description: "Broad-based education in humanities and social sciences",
      courses: [
        {
          code: "LA 101",
          title: "Critical Thinking and Writing",
          credits: 3,
          description: "Development of analytical thinking and effective written communication skills.",
          level: "Undergraduate"
        },
        {
          code: "LA 201",
          title: "World History",
          credits: 3,
          description: "Survey of major historical developments and their impact on modern society.",
          level: "Undergraduate"
        },
        {
          code: "LA 301",
          title: "Philosophy of Ethics",
          credits: 3,
          description: "Exploration of moral philosophy, ethical theories, and contemporary ethical issues.",
          level: "Undergraduate"
        },
        {
          code: "LA 401",
          title: "Research Methodology",
          credits: 4,
          description: "Advanced research methods in social sciences and humanities.",
          level: "Graduate"
        }
      ]
    },
    {
      name: "Sciences",
      description: "Rigorous scientific education and research opportunities",
      courses: [
        {
          code: "SCI 101",
          title: "General Chemistry",
          credits: 4,
          description: "Fundamental principles of chemistry including atomic structure, bonding, and reactions.",
          level: "Undergraduate"
        },
        {
          code: "SCI 201",
          title: "Physics I",
          credits: 4,
          description: "Classical mechanics, waves, and thermodynamics with laboratory component.",
          level: "Undergraduate"
        },
        {
          code: "SCI 301",
          title: "Organic Chemistry",
          credits: 4,
          description: "Structure, properties, and reactions of organic compounds.",
          level: "Undergraduate"
        },
        {
          code: "SCI 401",
          title: "Quantum Physics",
          credits: 4,
          description: "Principles of quantum mechanics and their applications in modern physics.",
          level: "Graduate"
        }
      ]
    },
    {
      name: "Health Sciences",
      description: "Comprehensive healthcare education and training",
      courses: [
        {
          code: "HS 101",
          title: "Human Anatomy",
          credits: 4,
          description: "Structure and organization of the human body systems.",
          level: "Undergraduate"
        },
        {
          code: "HS 201",
          title: "Medical Terminology",
          credits: 2,
          description: "Healthcare terminology, medical abbreviations, and clinical documentation.",
          level: "Undergraduate"
        },
        {
          code: "HS 301",
          title: "Pharmacology",
          credits: 3,
          description: "Drug actions, interactions, and therapeutic applications in healthcare.",
          level: "Undergraduate"
        },
        {
          code: "HS 401",
          title: "Healthcare Administration",
          credits: 4,
          description: "Management principles applied to healthcare organizations and systems.",
          level: "Graduate"
        }
      ]
    }
  ];

  const [selectedDepartment, setSelectedDepartment] = React.useState(null);
  const [filterLevel, setFilterLevel] = React.useState('All');

  const filteredCourses = selectedDepartment
    ? selectedDepartment.courses.filter(course => 
        filterLevel === 'All' || course.level === filterLevel
      )
    : [];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-neutral-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-viga text-4xl md:text-6xl font-bold mb-6">
            Academic <span className="text-blue-200">Programs</span>
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
            Explore our comprehensive range of courses across multiple disciplines.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Departments Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-lg p-6 sticky top-4">
                <h2 className="font-viga text-2xl font-bold text-neutral-950 mb-6">Departments</h2>
                <div className="space-y-2">
                  {departments.map((dept, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedDepartment(dept)}
                      className={`w-full text-left p-4 rounded-lg transition-all duration-300 ${
                        selectedDepartment?.name === dept.name
                          ? 'bg-blue-900 text-neutral-50'
                          : 'bg-neutral-100 hover:bg-neutral-200 text-neutral-950'
                      }`}
                    >
                      <h3 className="font-semibold text-lg mb-1">{dept.name}</h3>
                      <p className={`text-sm ${
                        selectedDepartment?.name === dept.name
                          ? 'text-blue-100'
                          : 'text-neutral-600'
                      }`}>
                        {dept.description}
                      </p>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Course Content */}
            <div className="lg:col-span-2">
              {!selectedDepartment ? (
                <div className="bg-white rounded-lg shadow-lg p-12 text-center">
                  <div className="w-24 h-24 bg-blue-900 text-neutral-50 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.75 2.524z"/>
                    </svg>
                  </div>
                  <h2 className="font-viga text-2xl font-bold text-neutral-950 mb-4">
                    Select a Department
                  </h2>
                  <p className="text-neutral-700 text-lg">
                    Choose a department from the sidebar to explore available courses and programs.
                  </p>
                </div>
              ) : (
                <div className="space-y-6">
                  {/* Department Header */}
                  <div className="bg-white rounded-lg shadow-lg p-6">
                    <h2 className="font-viga text-3xl font-bold text-neutral-950 mb-2">
                      {selectedDepartment.name}
                    </h2>
                    <p className="text-lg text-neutral-700 mb-4">
                      {selectedDepartment.description}
                    </p>
                    
                    {/* Level Filter */}
                    <div className="flex gap-2">
                      {['All', 'Undergraduate', 'Graduate'].map(level => (
                        <button
                          key={level}
                          onClick={() => setFilterLevel(level)}
                          className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                            filterLevel === level
                              ? 'bg-blue-900 text-neutral-50'
                              : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
                          }`}
                        >
                          {level}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Courses Grid */}
                  <div className="grid grid-cols-1 gap-6">
                    {filteredCourses.map((course, index) => (
                      <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
                          <div>
                            <h3 className="font-viga text-xl font-bold text-neutral-950 mb-1">
                              {course.code}: {course.title}
                            </h3>
                            <div className="flex items-center gap-4 text-sm text-neutral-600">
                              <span className="bg-blue-100 text-blue-900 px-2 py-1 rounded font-medium">
                                {course.credits} Credits
                              </span>
                              <span className={`px-2 py-1 rounded font-medium ${
                                course.level === 'Graduate'
                                  ? 'bg-purple-100 text-purple-900'
                                  : 'bg-green-100 text-green-900'
                              }`}>
                                {course.level}
                              </span>
                            </div>
                          </div>
                        </div>
                        <p className="text-neutral-700 leading-relaxed">
                          {course.description}
                        </p>
                      </div>
                    ))}
                  </div>

                  {filteredCourses.length === 0 && (
                    <div className="bg-white rounded-lg shadow-lg p-12 text-center">
                      <p className="text-neutral-700 text-lg">
                        No courses found for the selected filter.
                      </p>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-16 bg-blue-900 text-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-viga text-3xl font-bold mb-4">Academic Excellence</h2>
            <p className="text-xl text-blue-100">Our programs by the numbers</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">150+</div>
              <div className="text-blue-200">Total Courses</div>
            </div>
            
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">6</div>
              <div className="text-blue-200">Departments</div>
            </div>
            
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">25:1</div>
              <div className="text-blue-200">Student-Faculty Ratio</div>
            </div>
            
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">98%</div>
              <div className="text-blue-200">Course Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Courses;

