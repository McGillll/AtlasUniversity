import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-neutral-50 py-20">
          <img className='absolute inset-0 w-full h-full object-cover' src="https://images.unsplash.com/photo-1492538368677-f6e0afe31dcc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
          <div className='w-screen h-full bg-blue-900/20 absolute inset-0'></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-viga text-4xl md:text-6xl font-bold mb-6">
            About <span className="text-blue-200">Atlas University</span>
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
            Shaping minds, building futures, and fostering innovation for over five decades.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h2 className="font-viga text-3xl font-bold text-neutral-950 mb-6">Our Mission</h2>
              <p className="text-lg text-neutral-700 leading-relaxed mb-6">
                Atlas University is committed to providing transformative education that empowers students to become innovative leaders, critical thinkers, and responsible global citizens. We strive to create an inclusive learning environment that fosters intellectual curiosity, ethical reasoning, and lifelong learning.
              </p>
              <p className="text-neutral-700">
                Through cutting-edge research, community engagement, and academic excellence, we prepare our graduates to address the complex challenges of the 21st century and make meaningful contributions to society.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h2 className="font-viga text-3xl font-bold text-neutral-950 mb-6">Our Vision</h2>
              <p className="text-lg text-neutral-700 leading-relaxed mb-6">
                To be a globally recognized institution of higher learning that leads in educational innovation, research excellence, and social impact. We envision a future where Atlas University graduates are at the forefront of positive change in their communities and industries.
              </p>
              <p className="text-neutral-700">
                We aspire to be a university where diverse perspectives are celebrated, where knowledge knows no boundaries, and where every student has the opportunity to reach their full potential.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* History */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-viga text-3xl md:text-4xl font-bold text-neutral-950 mb-4">
              Our History
            </h2>
            <p className="text-lg text-neutral-700 max-w-3xl mx-auto">
              A legacy of excellence spanning over five decades of educational innovation.
            </p>
          </div>
          
          <div className="space-y-12">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/2">
                <div className="h-64 bg-gradient-to-br from-blue-900 to-blue-700 rounded-lg">
                  <img className='h-full w-full object-cover rounded-lg' src="https://images.unsplash.com/photo-1711630105182-46bdffc31b45?q=80&w=1972&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                </div>
              </div>
              <div className="md:w-1/2">
                <h3 className="font-viga text-2xl font-bold text-neutral-950 mb-4">1970 - Foundation</h3>
                <p className="text-neutral-700 leading-relaxed">
                  Atlas University was founded in 1970 by a group of visionary educators who believed in the power of accessible, high-quality education. Starting with just 200 students and a handful of programs, the university was built on the principles of academic excellence, innovation, and community service.
                </p>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row-reverse items-center gap-8">
              <div className="md:w-1/2">
                <div className="relative h-64 bg-gradient-to-br from-blue-800 to-blue-600 rounded-lg">
                  <img className='relative grayscale h-full w-full object-cover rounded-lg' src="https://images.unsplash.com/photo-1678664522520-ad001061ff83?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                </div>
              </div>
              <div className="md:w-1/2">
                <h3 className="font-viga text-2xl font-bold text-neutral-950 mb-4">1990s - Expansion</h3>
                <p className="text-neutral-700 leading-relaxed">
                  The 1990s marked a period of significant growth for Atlas University. We expanded our academic offerings, opened new research facilities, and established partnerships with institutions worldwide. Our student body grew to over 5,000 students, and we began attracting internationally renowned faculty.
                </p>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/2">
                <div className="h-64 bg-gradient-to-br from-blue-700 to-blue-500 rounded-lg">
                  <img className='h-full w-full object-cover rounded-lg' src="https://images.unsplash.com/photo-1591123120675-6f7f1aae0e5b?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                </div>
              </div>
              <div className="md:w-1/2">
                <h3 className="font-viga text-2xl font-bold text-neutral-950 mb-4">Present Day</h3>
                <p className="text-neutral-700 leading-relaxed">
                  Today, Atlas University is home to over 15,000 students from 50+ countries. We offer cutting-edge programs across multiple disciplines, maintain state-of-the-art research facilities, and continue to push the boundaries of educational innovation while staying true to our founding values.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-viga text-3xl md:text-4xl font-bold text-neutral-950 mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-neutral-700 max-w-3xl mx-auto">
              These principles guide everything we do and shape the Atlas University experience.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-white rounded-lg shadow-lg">
              <div className="w-16 h-16 bg-blue-900 text-neutral-50 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <h3 className="font-viga text-xl font-bold text-neutral-950 mb-2">Excellence</h3>
              <p className="text-neutral-700">We pursue the highest standards in teaching, research, and service.</p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-lg shadow-lg">
              <div className="w-16 h-16 bg-blue-900 text-neutral-50 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M12 14l9-5-9-5-9 5 9 5z"/>
                  <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"/>
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"/>
                </svg>
              </div>
              <h3 className="font-viga text-xl font-bold text-neutral-950 mb-2">Integrity</h3>
              <p className="text-neutral-700">We act with honesty, transparency, and ethical responsibility.</p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-lg shadow-lg">
              <div className="w-16 h-16 bg-blue-900 text-neutral-50 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z"/>
                </svg>
              </div>
              <h3 className="font-viga text-xl font-bold text-neutral-950 mb-2">Diversity</h3>
              <p className="text-neutral-700">We celebrate and embrace diverse perspectives and backgrounds.</p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-lg shadow-lg">
              <div className="w-16 h-16 bg-blue-900 text-neutral-50 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                </svg>
              </div>
              <h3 className="font-viga text-xl font-bold text-neutral-950 mb-2">Innovation</h3>
              <p className="text-neutral-700">We foster creativity and embrace new ideas and technologies.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-viga text-3xl md:text-4xl font-bold text-neutral-950 mb-4">
              Leadership Team
            </h2>
            <p className="text-lg text-neutral-700 max-w-3xl mx-auto">
              Meet the dedicated leaders who guide Atlas University toward continued excellence.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <img src='https://images.unsplash.com/photo-1607990283143-e81e7a2c9349?q=80&w=2041&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='' className="object-cover w-32 h-32 bg-gradient-to-br from-blue-900 to-blue-700 rounded-full mx-auto mb-4"/>
              <h3 className="font-viga text-xl font-bold text-neutral-950 mb-1">Dr. Sarah Mitchell</h3>
              <p className="text-blue-900 font-medium mb-3">President & Chancellor</p>
              <p className="text-neutral-700">Leading Atlas University with 20+ years of experience in higher education administration and strategic planning.</p>
            </div>
            
            <div className="text-center">
              <img src='https://images.unsplash.com/photo-1622977318832-82321bdd509f?q=80&w=2103&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='' className="object-cover w-32 h-32 bg-gradient-to-br from-blue-900 to-blue-700 rounded-full mx-auto mb-4"/>
              <h3 className="font-viga text-xl font-bold text-neutral-950 mb-1">Dr. Michael Chen</h3>
              <p className="text-blue-900 font-medium mb-3">Vice President of Academic Affairs</p>
              <p className="text-neutral-700">Overseeing academic programs and curriculum development with a focus on innovation and student success.</p>
            </div>
            
            <div className="text-center">
              <img src='https://images.unsplash.com/photo-1513673054901-2b5f51551112?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='' className="object-cover w-32 h-32 bg-gradient-to-br from-blue-900 to-blue-700 rounded-full mx-auto mb-4"/>
              <h3 className="font-viga text-xl font-bold text-neutral-950 mb-1">Dr. Emily Rodriguez</h3>
              <p className="text-blue-900 font-medium mb-3">Dean of Student Affairs</p>
              <p className="text-neutral-700">Dedicated to creating an inclusive campus environment that supports student growth and well-being.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-blue-900 text-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-viga text-3xl md:text-4xl font-bold mb-4">
              By the Numbers
            </h2>
            <p className="text-xl text-blue-100">
              Our achievements speak for themselves
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">15,000+</div>
              <div className="text-blue-200">Students Enrolled</div>
            </div>
            
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">50+</div>
              <div className="text-blue-200">Countries Represented</div>
            </div>
            
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">95%</div>
              <div className="text-blue-200">Graduate Employment Rate</div>
            </div>
            
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">100+</div>
              <div className="text-blue-200">Research Projects</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

