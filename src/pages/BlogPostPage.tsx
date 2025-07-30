import React from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { blogPosts } from '../data/blogPosts';
import NotFoundPage from './NotFoundPage';

const BlogPostPage = () => {
  const { id } = useParams();
  const post = blogPosts.find(post => post.id === id);

  if (!post) {
    return <NotFoundPage />;
  }

  return (
    <div className="pt-24 pb-16 bg-cream">
      <div className="container-custom max-w-4xl">
        <motion.article
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="relative h-[400px] mb-8 rounded-lg overflow-hidden">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="flex items-center text-sm text-gray-500 mb-4">
              <span>{post.date}</span>
              <span className="mx-2">•</span>
              <span>{post.author}</span>
            </div>

            <h1 className="text-4xl font-serif text-sage mb-6">{post.title}</h1>

            <div className="prose prose-lg max-w-none">
              {post.content.split('\n\n').map((paragraph, index) => (
                <p key={index} className="mb-4">
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-gray-200">
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-sage/10 text-sage px-3 py-1 rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.article>
      </div>
    </div>
  );
};

export default BlogPostPage;