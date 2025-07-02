import React from 'react';
import avatar from '../assets/avatar.png'; 
const BlogsInsightsPage = () => {
  const blogPosts = [
    {
      id: 1,
      category: "Innovation",
      readTime: "5 min read",
      author: "Sarthak Mittal",
      date: "August 21, 2024",
      title: "Stop Ignoring These 7 Inspiring Innovations & How to Do It",
      description: "Discover the revolutionary innovations that are reshaping industries and learn how to implement them effectively.",
      bgColor: "bg-gradient-to-br from-red-200 to-pink-300"
    },
    {
      id: 2,
      category: "Management",
      readTime: "7 min read",
      author: "Sarthak Mittal",
      date: "Jun 10, 2024",
      title: "To carry out put into practice management",
      description: "Practical strategies for implementing management principles that drive results and foster organizational growth.",
      bgColor: "bg-gradient-to-br from-green-200 to-teal-300"
    },
    {
      id: 3,
      category: "Customer Success",
      readTime: "6 min read",
      author: "Sarthak Mittal",
      date: "Jul 15, 2024",
      title: "B involves handling over to Customer, Potential",
      description: "Master the art of customer handoffs and unlock the potential for lasting business relationships.",
      bgColor: "bg-gradient-to-br from-blue-200 to-purple-300"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4">
      {/* Black Chevron Fortress */}
    <div className="w-0 h-0 border-l-[80px] border-r-[80px] border-t-[50px] border-l-transparent border-r-transparent border-t-black mx-auto -mt-16 mb-12" />

    <div className="max-w-6xl mx-auto mt-25">

        
        {/* Header Section */}
        <div className="text-center mb-16">
          {/* Latest Insights Badge */}
          <div className="inline-block mb-6">
            <span className="bg-orange-100 text-orange-400 text-xs font-semibold px-4 py-2 rounded-full uppercase tracking-wide">
              LATEST INSIGHTS
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl lg:text-5xl font-bold text-[#D0A151] mb-4">
            My Blogs & Insights
          </h1>
          <div className="w-117 h-2 bg-[#D0A151] mx-auto mb-8"></div>
          
          {/* Description */}
          <p className="text-gray-700 text-lg max-w-2xl mx-auto leading-relaxed">
            Thought leadership articles and strategic insights to help you navigate the 
            complexities of modern business.
          </p>
        </div>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border-2 border-yellow-500 h-fit"
            >
              {/* Card Header with Gradient Background */}
              <div className={`${post.bgColor} h-45 relative p-3`}>
                <div className="flex justify-between items-start">
                  <span className="bg-white/90 text-gray-800 text-xs font-medium px-2 py-1 rounded-full">
                    {post.category}
                  </span>
                  <span className="bg-black/70 text-white text-xs px-2 py-1 rounded-full">
                    {post.readTime}
                  </span>
                </div>
              </div>

              {/* Card Content */}
              <div className="bg-black text-white p-4">
                {/* Author and Date */}
                <div className="flex items-center gap-3 text-xs text-gray-300 mb-3">
                  <div className="flex items-center gap-1">
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                    </svg>
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                    </svg>
                    <span>{post.date}</span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-[#D0A151] mb-2 leading-tight">
                  {post.title}
                </h3>

                {/* Description */}
                <p className="text-gray-300 text-xs leading-relaxed mb-3">
                  {post.description}
                </p>

                {/* Read More Link */}
                <button className="text-[#D0A151] hover:text-[#D0A151] text-xs font-semibold flex items-center gap-1 transition-colors duration-200">
                  Read More
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action Button */}
        <div className="text-center">
          <button className="border-2 border-[#D0A151] text-[#D0A151] hover:bg-[#D0A151] hover:text-white font-semibold py-3 px-8 rounded-full transition-all duration-200 shadow-lg hover:shadow-xl">
            Visit My Blog and Learn More About Entrepreneurship
          </button>
        </div>


              {/* Author Profile Strip - Fixed at Bottom Right */}
      <div className="ml-240 bottom-0 right-0 bg-black text-white rounded p-4 w-60 shadow-lg">
        <div className="flex items-center space-x-3">
          {/* Author Avatar */}
          <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
            <img 
              src={avatar}
              alt="Sarthak Mittal" 
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Author Info */}
          <div className="flex-1">
            <h3 className="text-white font-semibold text-sm mb-1">
              Sarthak Mittal
            </h3>
            <p className="text-gray-300 text-xs">
              Author
            </p>
          </div>
        </div>
      </div>

          

      </div>
    </div>
  );
};

export default BlogsInsightsPage;

