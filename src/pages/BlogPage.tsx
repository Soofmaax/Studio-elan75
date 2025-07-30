import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { blogPosts } from '../data/blogPosts';
import SEO from '../components/common/SEO';

const BlogPage = () => {
  return (
    <>
      <SEO 
        title="Blog - Conseils bien-être et yoga"
        description="Découvrez nos articles sur le yoga, le bien-être et la méditation. Des conseils pratiques pour améliorer votre pratique et votre quotidien."
      />
      <div className="pt-24 pb-16 bg-cream dark:bg-cream-dark">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="section-title after:mx-auto dark:text-white">Blog</h1>
            <p className="text-lg max-w-2xl mx-auto dark:text-gray-300">
              Découvrez nos articles sur le yoga, le bien-être et la méditation.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transform hover:scale-[1.02] transition-transform duration-300"
              >
                <div className="relative h-48">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                    <div className="p-4">
                      <div className="flex items-center text-sm text-gray-300 mb-2">
                        <span>{post.date}</span>
                        <span className="mx-2">•</span>
                        <span>{post.author}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h2 className="text-xl font-serif text-sage dark:text-sage-dark mb-3">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="text-sm px-3 py-1 rounded-full bg-sage/10 dark:bg-sage-dark/10 text-sage dark:text-sage-dark"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Link
                    to={`/blog/${post.id}`}
                    className="inline-flex items-center text-sage dark:text-sage-dark font-medium hover:text-sage-dark dark:hover:text-sage transition-colors"
                  >
                    Lire la suite
                    <svg
                      className="ml-2 w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogPage;