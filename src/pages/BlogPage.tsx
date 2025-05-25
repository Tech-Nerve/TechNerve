import { useState } from 'react';
import { Calendar, Clock, Tag, User } from 'lucide-react';
import Section from '../components/ui/Section';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';

type BlogCategory = 'all' | 'development' | 'design' | 'business' | 'technology';

const BlogPage = () => {
  const [activeCategory, setActiveCategory] = useState<BlogCategory>('all');
  
  const blogPosts = [
    {
      id: 1,
      title: 'The Future of Web Development: What to Expect in 2025',
      excerpt: 'Explore the emerging trends and technologies that will shape web development in the coming years, from AI integration to advanced UI frameworks.',
      image: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      date: 'May 15, 2024',
      author: 'Alex Johnson',
      readTime: '7 min read',
      categories: ['development', 'technology']
    },
    {
      id: 2,
      title: 'Designing for Accessibility: Best Practices for Inclusive UX',
      excerpt: 'Learn how to create digital experiences that are accessible to all users, regardless of abilities or disabilities.',
      image: 'https://images.pexels.com/photos/196645/pexels-photo-196645.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      date: 'April 28, 2024',
      author: 'Michael Rivera',
      readTime: '5 min read',
      categories: ['design', 'development']
    },
    {
      id: 3,
      title: 'How Small Businesses Can Leverage AI Tools',
      excerpt: 'Discover practical applications of artificial intelligence that can help small businesses automate processes and gain competitive advantages.',
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      date: 'April 12, 2024',
      author: 'Alex Johnson',
      readTime: '6 min read',
      categories: ['technology', 'business']
    },
    {
      id: 4,
      title: 'The Rise of Progressive Web Apps: Benefits and Implementation',
      excerpt: 'Explore how PWAs are changing the web landscape and how your business can benefit from this technology.',
      image: 'https://images.pexels.com/photos/270360/pexels-photo-270360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      date: 'March 30, 2024',
      author: 'Michael Rivera',
      readTime: '8 min read',
      categories: ['development', 'technology']
    },
    {
      id: 5,
      title: 'Building a Strong Tech Brand: Strategies for Startups',
      excerpt: 'Learn effective branding strategies specifically tailored for tech startups looking to establish themselves in competitive markets.',
      image: 'https://images.pexels.com/photos/6224/hands-people-woman-working.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      date: 'March 15, 2024',
      author: 'Michael Rivera',
      readTime: '5 min read',
      categories: ['business', 'design']
    },
    {
      id: 6,
      title: 'The State of Mobile App Development in 2024',
      excerpt: 'An overview of current trends, tools, and best practices in mobile app development for both iOS and Android platforms.',
      image: 'https://images.pexels.com/photos/39284/macbook-apple-imac-computer-39284.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      date: 'February 28, 2024',
      author: 'Alex Johnson',
      readTime: '6 min read',
      categories: ['development', 'technology']
    }
  ];

  const filteredPosts = blogPosts.filter(post => 
    activeCategory === 'all' || post.categories.includes(activeCategory)
  );
  
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-28 bg-gradient-to-br from-primary-800 to-primary-600 text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Tech Insights</h1>
            <p className="text-xl text-gray-100">
              Stay updated with the latest trends, tips, and insights from our tech experts.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <Section>
        {/* Category Filters */}
        <div className="flex justify-center mb-12 overflow-x-auto pb-2">
          <div className="inline-flex bg-gray-100 dark:bg-gray-800 p-1 rounded-lg">
            {[
              { id: 'all', label: 'All Posts' },
              { id: 'development', label: 'Development' },
              { id: 'design', label: 'Design' },
              { id: 'technology', label: 'Technology' },
              { id: 'business', label: 'Business' }
            ].map((category) => (
              <button
                key={category.id}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors whitespace-nowrap ${
                  activeCategory === category.id
                    ? 'bg-white dark:bg-gray-700 shadow-sm'
                    : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'
                }`}
                onClick={() => setActiveCategory(category.id as BlogCategory)}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>

        {/* Featured Post */}
        {filteredPosts.length > 0 && (
          <div className="mb-12">
            <Card className="overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
                <div className="lg:col-span-3 h-64 lg:h-auto">
                  <img 
                    src={filteredPosts[0].image} 
                    alt={filteredPosts[0].title} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="lg:col-span-2 p-6 flex flex-col">
                  <div className="flex items-center space-x-4 mb-3 text-sm text-gray-500 dark:text-gray-400">
                    <div className="flex items-center">
                      <Calendar size={16} className="mr-1" />
                      <span>{filteredPosts[0].date}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock size={16} className="mr-1" />
                      <span>{filteredPosts[0].readTime}</span>
                    </div>
                  </div>
                  <h2 className="text-2xl font-bold mb-3">{filteredPosts[0].title}</h2>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 flex-grow">
                    {filteredPosts[0].excerpt}
                  </p>
                  <div className="flex items-center mb-4">
                    <User size={16} className="mr-2 text-gray-500" />
                    <span className="text-gray-600 dark:text-gray-300">{filteredPosts[0].author}</span>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {filteredPosts[0].categories.map((cat) => (
                      <span 
                        key={cat}
                        className="inline-flex items-center text-xs bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded-full"
                      >
                        <Tag size={12} className="mr-1" />
                        {cat.charAt(0).toUpperCase() + cat.slice(1)}
                      </span>
                    ))}
                  </div>
                  <Button href={`/blog/${filteredPosts[0].id}`}>
                    Read More
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        )}

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.slice(1).map((post) => (
            <Card 
              key={post.id}
              className="overflow-hidden flex flex-col h-full"
            >
              <div className="relative h-48">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center space-x-4 mb-3 text-sm text-gray-500 dark:text-gray-400">
                  <div className="flex items-center">
                    <Calendar size={14} className="mr-1" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock size={14} className="mr-1" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 flex-grow">
                  {post.excerpt}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.categories.map((cat) => (
                    <span 
                      key={cat}
                      className="inline-flex items-center text-xs bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded-full"
                    >
                      <Tag size={12} className="mr-1" />
                      {cat.charAt(0).toUpperCase() + cat.slice(1)}
                    </span>
                  ))}
                </div>
                <div className="flex items-center mb-4">
                  <User size={16} className="mr-2 text-gray-500" />
                  <span className="text-gray-600 dark:text-gray-300">{post.author}</span>
                </div>
                <Button 
                  href={`/blog/${post.id}`} 
                  variant="outline"
                  className="mt-auto"
                >
                  Read Article
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* If no posts match the filter */}
        {filteredPosts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 dark:text-gray-400">No articles found in this category.</p>
            <Button 
              variant="outline" 
              className="mt-4"
              onClick={() => setActiveCategory('all')}
            >
              View All Articles
            </Button>
          </div>
        )}

        {/* Newsletter Signup */}
        <div className="mt-16 bg-gray-100 dark:bg-gray-800 rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">Stay Updated</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-xl mx-auto">
            Subscribe to our newsletter to receive the latest articles, tech news, and company updates.
          </p>
          <form className="max-w-md mx-auto flex flex-col sm:flex-row gap-3">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="flex-grow px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-primary-500 bg-white dark:bg-gray-900" 
              required
            />
            <Button type="submit">
              Subscribe
            </Button>
          </form>
        </div>
      </Section>
    </>
  );
};

export default BlogPage;