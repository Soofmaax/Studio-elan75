import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { yogaClasses } from '../data/yogaClasses';
import Button from '../components/ui/Button';
import NotFoundPage from './NotFoundPage';

const CourseDetailPage = () => {
  const { id } = useParams();
  const yogaClass = yogaClasses.find(course => course.id === id);

  if (!yogaClass) {
    return <NotFoundPage />;
  }

  return (
    <div className="pt-24 pb-16 bg-cream">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="relative">
              <img
                src={yogaClass.image}
                alt={yogaClass.title}
                className="w-full h-[400px] object-cover rounded-lg shadow-lg"
              />
            </div>

            <div>
              <h1 className="section-title mb-6">{yogaClass.title}</h1>
              <p className="text-lg mb-6">{yogaClass.description}</p>

              <div className="mb-8">
                <h2 className="text-2xl font-serif text-sage mb-4">Bienfaits</h2>
                <ul className="space-y-2">
                  {yogaClass.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-center">
                      <span className="w-2 h-2 bg-sage rounded-full mr-3"></span>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-serif text-sage mb-4">Horaires</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {yogaClass.schedule.map((slot, index) => (
                    <div key={index} className="bg-white p-4 rounded-lg shadow-sm">
                      <p className="font-medium">{slot.day}</p>
                      <p>{slot.time} ({slot.duration} min)</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-serif text-sage mb-4">Instructeur</h2>
                <p className="text-lg">{yogaClass.instructor}</p>
              </div>

              <Link to="/reservation">
                <Button variant="primary" size="lg">
                  Réserver ce cours
                </Button>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CourseDetailPage;