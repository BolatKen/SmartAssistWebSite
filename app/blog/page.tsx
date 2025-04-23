"use client"

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Input } from '@/components/ui/input'
import { Search } from 'lucide-react'

const posts = [
  {
    title: "The Future of AI in Business Automation",
    excerpt: "Discover how artificial intelligence is revolutionizing business processes and what it means for your company's future.",
    date: "March 15, 2025",
    tags: ["AI", "Automation", "Future of Work"],
    image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    title: "5 Ways to Improve Customer Service with AI",
    excerpt: "Learn how AI-powered tools can help you deliver better customer service and increase satisfaction rates.",
    date: "March 10, 2025",
    tags: ["Customer Service", "AI", "Best Practices"],
    image: "https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    title: "Understanding Machine Learning in Business",
    excerpt: "A comprehensive guide to how machine learning can be applied to solve common business challenges.",
    date: "March 5, 2025",
    tags: ["Machine Learning", "Business", "Technology"],
    image: "https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  }
]

export default function Blog() {
  return (
    <div className="min-h-screen pt-24 pb-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-space-grotesk font-bold mb-4">
            Latest Insights
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-8">
            Explore the latest trends and insights in AI, automation, and business technology.
          </p>
          <div className="max-w-md mx-auto relative">
            <Input
              placeholder="Search articles..."
              className="bg-[#2b2f38]/30 border-[#2b2f38] focus:border-[#4f9eff] text-white placeholder:text-gray-500 pl-10"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-[#2b2f38]/30 backdrop-blur-lg rounded-xl overflow-hidden border border-[#2b2f38] hover:border-[#4f9eff]/50 transition-all duration-300"
            >
              <Link href="/blog/post-slug" className="block">
                <div className="relative h-48">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map(tag => (
                      <span
                        key={tag}
                        className="text-xs font-medium bg-[#4f9eff]/10 text-[#4f9eff] px-2 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h2 className="text-xl font-bold mb-2 hover:text-[#4f9eff] transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-gray-400 mb-4">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-400">{post.date}</span>
                    <span className="text-[#4f9eff] font-medium">Read more →</span>
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </motion.div>
    </div>
  )
}