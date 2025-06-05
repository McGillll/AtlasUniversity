import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 overflow-hidden to-blue-900 text-neutral-50 py-20">
          <img className='absolute inset-0 w-full h-full object-cover' src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
          <div className='w-screen h-full bg-blue-900/20 absolute inset-0'></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative text-center">
            <h1 className="font-viga text-4xl md:text-6xl font-bold mb-6">
              Welcome to <span className="text-blue-200">Atlas University</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
              Empowering minds, shaping futures. Discover your potential with world-class education and innovative learning experiences.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/enroll" 
                className="bg-neutral-50 text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-100 transition-colors duration-200 shadow-lg"
              >
                Enroll Now
              </Link>
              <Link 
                to="/courses" 
                className="border-2 border-neutral-50 text-neutral-50 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-neutral-50 hover:text-blue-900 transition-colors duration-200"
              >
                Explore Courses
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-viga text-3xl md:text-4xl font-bold text-neutral-950 mb-4">
              About Atlas University
            </h2>
            <p className="text-lg text-neutral-700 max-w-3xl mx-auto">
              For over 50 years, Atlas University has been a beacon of academic excellence, fostering innovation and critical thinking in students from around the world.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white rounded-lg shadow-lg">
              <div className="w-16 h-16 bg-blue-900 text-neutral-50 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <h3 className="font-viga text-xl font-bold text-neutral-950 mb-2">Excellence</h3>
              <p className="text-neutral-700">Committed to providing the highest quality education with rigorous academic standards.</p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-lg shadow-lg">
              <div className="w-16 h-16 bg-blue-900 text-neutral-50 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z"/>
                </svg>
              </div>
              <h3 className="font-viga text-xl font-bold text-neutral-950 mb-2">Community</h3>
              <p className="text-neutral-700">Building a diverse and inclusive community where every student can thrive and succeed.</p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-lg shadow-lg">
              <div className="w-16 h-16 bg-blue-900 text-neutral-50 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                </svg>
              </div>
              <h3 className="font-viga text-xl font-bold text-neutral-950 mb-2">Innovation</h3>
              <p className="text-neutral-700">Pioneering new approaches to learning and research that prepare students for the future.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Offered Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-viga text-3xl md:text-4xl font-bold text-neutral-950 mb-4">
              Our Courses
            </h2>
            <p className="text-lg text-neutral-700 max-w-3xl mx-auto">
              Choose from our wide range of programs designed to prepare you for success in your chosen field.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-neutral-50 rounded-lg p-6 hover:shadow-lg transition-shadow duration-200">
              <h3 className="font-viga text-xl font-bold text-neutral-950 mb-3">Computer Science</h3>
              <p className="text-neutral-700 mb-4">Master the fundamentals of programming, algorithms, and software development.</p>
              <div className="flex justify-between items-center">
                <span className="text-blue-900 font-semibold">4 Years</span>
                <Link to="/courses" className="text-blue-900 hover:text-blue-700 font-medium">Learn More →</Link>
              </div>
            </div>
            
            <div className="bg-neutral-50 rounded-lg p-6 hover:shadow-lg transition-shadow duration-200">
              <h3 className="font-viga text-xl font-bold text-neutral-950 mb-3">Business Administration</h3>
              <p className="text-neutral-700 mb-4">Develop leadership skills and business acumen for the modern economy.</p>
              <div className="flex justify-between items-center">
                <span className="text-blue-900 font-semibold">4 Years</span>
                <Link to="/courses" className="text-blue-900 hover:text-blue-700 font-medium">Learn More →</Link>
              </div>
            </div>
            
            <div className="bg-neutral-50 rounded-lg p-6 hover:shadow-lg transition-shadow duration-200">
              <h3 className="font-viga text-xl font-bold text-neutral-950 mb-3">Engineering</h3>
              <p className="text-neutral-700 mb-4">Solve complex problems with cutting-edge engineering principles and practices.</p>
              <div className="flex justify-between items-center">
                <span className="text-blue-900 font-semibold">4 Years</span>
                <Link to="/courses" className="text-blue-900 hover:text-blue-700 font-medium">Learn More →</Link>
              </div>
            </div>
            
            <div className="bg-neutral-50 rounded-lg p-6 hover:shadow-lg transition-shadow duration-200">
              <h3 className="font-viga text-xl font-bold text-neutral-950 mb-3">Medicine</h3>
              <p className="text-neutral-700 mb-4">Train to become a healthcare professional with comprehensive medical education.</p>
              <div className="flex justify-between items-center">
                <span className="text-blue-900 font-semibold">6 Years</span>
                <Link to="/courses" className="text-blue-900 hover:text-blue-700 font-medium">Learn More →</Link>
              </div>
            </div>
            
            <div className="bg-neutral-50 rounded-lg p-6 hover:shadow-lg transition-shadow duration-200">
              <h3 className="font-viga text-xl font-bold text-neutral-950 mb-3">Liberal Arts</h3>
              <p className="text-neutral-700 mb-4">Explore humanities, social sciences, and develop critical thinking skills.</p>
              <div className="flex justify-between items-center">
                <span className="text-blue-900 font-semibold">4 Years</span>
                <Link to="/courses" className="text-blue-900 hover:text-blue-700 font-medium">Learn More →</Link>
              </div>
            </div>
            
            <div className="bg-neutral-50 rounded-lg p-6 hover:shadow-lg transition-shadow duration-200">
              <h3 className="font-viga text-xl font-bold text-neutral-950 mb-3">Psychology</h3>
              <p className="text-neutral-700 mb-4">Understand human behavior and mental processes through scientific study.</p>
              <div className="flex justify-between items-center">
                <span className="text-blue-900 font-semibold">4 Years</span>
                <Link to="/courses" className="text-blue-900 hover:text-blue-700 font-medium">Learn More →</Link>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Link 
              to="/courses" 
              className="bg-blue-900 text-neutral-50 px-8 py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors duration-200"
            >
              View All Courses
            </Link>
          </div>
        </div>
      </section>

      {/* Latest News Section */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-viga text-3xl md:text-4xl font-bold text-neutral-950 mb-4">
              Latest News
            </h2>
            <p className="text-lg text-neutral-700 max-w-3xl mx-auto">
              Stay updated with the latest happenings, achievements, and announcements from Atlas University.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <article className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-200">
              <div className="h-48 bg-gradient-to-br from-blue-900 to-blue-700">
                <img className='w-full h-48 object-cover' src="https://images.unsplash.com/photo-1613155961736-d0782a58f170?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
              </div>
              <div className="p-6">
                <div className="text-sm text-blue-900 font-medium mb-2">December 15, 2024</div>
                <h3 className="font-viga text-xl font-bold text-neutral-950 mb-3">New Research Center Opens</h3>
                <p className="text-neutral-700 mb-4">Atlas University proudly announces the opening of our state-of-the-art Research and Innovation Center...</p>
                <Link to="/news" className="text-blue-900 hover:text-blue-700 font-medium">Read More →</Link>
              </div>
            </article>
            
            <article className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-200">
              <div className="h-48 bg-gradient-to-br from-blue-800 to-blue-600">
                <img className='w-full h-48 object-cover' src="https://images.unsplash.com/photo-1659080928170-b9924d616f04?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
              </div>
              <div className="p-6">
                <div className="text-sm text-blue-900 font-medium mb-2">December 10, 2024</div>
                <h3 className="font-viga text-xl font-bold text-neutral-950 mb-3">Student Achievement Awards</h3>
                <p className="text-neutral-700 mb-4">Congratulations to our outstanding students who received recognition for their exceptional academic performance...</p>
                <Link to="/news" className="text-blue-900 hover:text-blue-700 font-medium">Read More →</Link>
              </div>
            </article>
            
            <article className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-200">
              <div className="h-48 bg-gradient-to-br from-blue-700 to-blue-500">
                <img className='w-full h-48 object-cover' src="https://images.unsplash.com/photo-1733286793880-62078f463cf6?q=80&w=2066&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
              </div>
              <div className="p-6">
                <div className="text-sm text-blue-900 font-medium mb-2">December 5, 2024</div>
                <h3 className="font-viga text-xl font-bold text-neutral-950 mb-3">Spring 2025 Registration</h3>
                <p className="text-neutral-700 mb-4">Registration for Spring 2025 semester is now open. Don't miss the opportunity to enroll in your preferred courses...</p>
                <Link to="/news" className="text-blue-900 hover:text-blue-700 font-medium">Read More →</Link>
              </div>
            </article>
          </div>
          
          <div className="text-center mt-12">
            <Link 
              to="/news" 
              className="bg-blue-900 text-neutral-50 px-8 py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors duration-200"
            >
              View All News
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

