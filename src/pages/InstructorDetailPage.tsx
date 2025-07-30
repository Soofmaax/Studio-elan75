import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { instructors } from '../data/instructors';
import Button from '../components/ui/Button';
import NotFoundPage from './NotFoundPage';
import SEO from '../components/common/SEO';
import { ArrowLeft, Calendar, Clock, Instagram, Linkedin, Youtube, Quote } from 'lucide-react';

const InstructorDetailPage = () => {
  const { id } = useParams();
  const instructor = instructors.find(i => i.id === id);

  if (!instructor) {
    return <NotFoundPage />;
  }

  return (
    <>
      <SEO 
        title={`${instructor.name} - Instructeur de yoga`}
        description={`Découvrez le profil et le parcours de ${instructor.name}, instructeur de yoga au Studio Élan spécialisé en ${instructor.specialties.join(', ')}.`}
        image={instructor.image}
      />
      <div className="pt-24 pb-16 bg-cream dark:bg-cream-dark">
        <div className="container-custom">
          <Link 
            to="/instructeurs"
            className="inline-flex items-center text-sage dark:text-sage-dark hover:text-sage-dark dark:hover:text-sage mb-8 transition-colors"
          >
            <ArrowLeft className="mr-2" size={20} />
            Retour aux instructeurs
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Hero Section */}
            <div className="relative h-[400px] rounded-xl overflow-hidden mb-12">
              <img
                src={instructor.image}
                alt={instructor.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent">
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <h1 className="text-4xl md:text-5xl font-serif text-white mb-4">
                    {instructor.name}
                  </h1>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {instructor.specialties.map((specialty, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm text-white text-sm"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-8">
                {/* Bio and Approach */}
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl p-8">
                  <div className="prose prose-lg dark:prose-invert max-w-none">
                    <h2>À propos</h2>
                    <p>{instructor.bio}</p>
                    
                    <h2>Approche pédagogique</h2>
                    <p>{instructor.approach}</p>
                    
                    <h2>Parcours</h2>
                    <p>{instructor.background}</p>
                  </div>
                </div>

                {/* Certifications */}
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl p-8">
                  <h2 className="text-2xl font-serif text-sage dark:text-sage-dark mb-6">
                    Formation et Certifications
                  </h2>
                  <div className="grid gap-4">
                    {instructor.certifications.map((cert, idx) => (
                      <div 
                        key={idx}
                        className="flex items-start p-4 rounded-lg bg-sage/5 dark:bg-sage-dark/5"
                      >
                        <div className="w-2 h-2 mt-2 rounded-full bg-sage dark:bg-sage-dark mr-4" />
                        <span className="text-gray-700 dark:text-gray-300">{cert}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Testimonials */}
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl p-8">
                  <h2 className="text-2xl font-serif text-sage dark:text-sage-dark mb-6">
                    Témoignages
                  </h2>
                  <div className="grid gap-6">
                    {instructor.testimonials.map((testimonial, idx) => (
                      <div 
                        key={idx}
                        className="relative p-6 rounded-lg bg-sage/5 dark:bg-sage-dark/5"
                      >
                        <Quote className="absolute top-4 left-4 text-sage/20 dark:text-sage-dark/20" size={24} />
                        <blockquote className="pl-8 italic text-gray-700 dark:text-gray-300 mb-4">
                          "{testimonial.text}"
                        </blockquote>
                        <div className="pl-8">
                          <p className="font-medium text-sage dark:text-sage-dark">
                            {testimonial.author}
                          </p>
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                            {testimonial.role}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Articles */}
                {instructor.articles.length > 0 && (
                  <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl p-8">
                    <h2 className="text-2xl font-serif text-sage dark:text-sage-dark mb-6">
                      Articles
                    </h2>
                    <div className="grid gap-4">
                      {instructor.articles.map((article, idx) => (
                        <Link
                          key={idx}
                          to={article.link}
                          className="p-4 rounded-lg bg-sage/5 dark:bg-sage-dark/5 hover:bg-sage/10 dark:hover:bg-sage-dark/10 transition-colors"
                        >
                          <h3 className="text-lg font-medium text-sage dark:text-sage-dark">
                            {article.title}
                          </h3>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Sidebar */}
              <div className="space-y-8">
                {/* Quick Actions */}
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl p-8">
                  <h3 className="text-xl font-serif text-sage dark:text-sage-dark mb-6">
                    Réserver un cours
                  </h3>
                  <div className="space-y-4">
                    <Link to="/reservation">
                      <Button variant="primary" size="lg" isFullWidth>
                        Réserver maintenant
                      </Button>
                    </Link>
                    <Link to="/tarifs">
                      <Button variant="outline" size="lg" isFullWidth>
                        Voir les tarifs
                      </Button>
                    </Link>
                  </div>
                </div>

                {/* Schedule */}
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl p-8">
                  <div className="flex items-center mb-6">
                    <Calendar className="w-5 h-5 text-sage dark:text-sage-dark mr-2" />
                    <h3 className="text-xl font-serif text-sage dark:text-sage-dark">
                      Horaires des cours
                    </h3>
                  </div>
                  <div className="space-y-3">
                    {instructor.schedule.map((slot, idx) => (
                      <div 
                        key={idx}
                        className="flex justify-between items-center p-3 rounded-lg bg-sage/5 dark:bg-sage-dark/5"
                      >
                        <span className="font-medium">{slot.day}</span>
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 text-sage dark:text-sage-dark mr-2" />
                          <span>{slot.time} ({slot.duration}min)</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Social Links */}
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl p-8">
                  <h3 className="text-xl font-serif text-sage dark:text-sage-dark mb-6">
                    Suivre {instructor.name.split(' ')[0]}
                  </h3>
                  <div className="flex space-x-4">
                    {instructor.socials.instagram && (
                      <a
                        href={instructor.socials.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 rounded-lg bg-sage/5 dark:bg-sage-dark/5 text-sage dark:text-sage-dark hover:bg-sage/10 dark:hover:bg-sage-dark/10 transition-colors"
                        aria-label="Instagram"
                      >
                        <Instagram size={24} />
                      </a>
                    )}
                    {instructor.socials.linkedin && (
                      <a
                        href={instructor.socials.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 rounded-lg bg-sage/5 dark:bg-sage-dark/5 text-sage dark:text-sage-dark hover:bg-sage/10 dark:hover:bg-sage-dark/10 transition-colors"
                        aria-label="LinkedIn"
                      >
                        <Linkedin size={24} />
                      </a>
                    )}
                    {instructor.socials.youtube && (
                      <a
                        href={instructor.socials.youtube}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 rounded-lg bg-sage/5 dark:bg-sage-dark/5 text-sage dark:text-sage-dark hover:bg-sage/10 dark:hover:bg-sage-dark/10 transition-colors"
                        aria-label="YouTube"
                      >
                        <Youtube size={24} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default InstructorDetailPage;