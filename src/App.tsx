import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Toaster } from 'react-hot-toast';
import { GoogleOAuthProvider } from '@react-oauth/google';
import Layout from './layout/Layout';
import ErrorBoundary from './components/ErrorBoundary';
import MaintenanceRedirect from './components/MaintenanceRedirect';
import HomePage from './pages/HomePage';
import CoursesPage from './pages/CoursesPage';
import CourseDetailPage from './pages/CourseDetailPage';
import InstructorsPage from './pages/InstructorsPage';
import InstructorDetailPage from './pages/InstructorDetailPage';
import PricingPage from './pages/PricingPage';
import BlogPage from './pages/BlogPage';
import BlogPostPage from './pages/BlogPostPage';
import ContactPage from './pages/ContactPage';
import ReservationPage from './pages/ReservationPage';
import AccountPage from './pages/AccountPage';
import SuccessPage from './pages/SuccessPage';
import CanceledPage from './pages/CanceledPage';
import LegalPage from './pages/LegalPage';
import PrivacyPage from './pages/PrivacyPage';
import TermsPage from './pages/TermsPage';
import MaintenancePage from './pages/MaintenancePage';
import NotFoundPage from './pages/NotFoundPage';
import CookieBanner from './components/common/CookieBanner';
import ChatBot from './components/chat/ChatBot';
import { apiConfig } from './config/apis';

function App() {
  return (
    <HelmetProvider>
      <GoogleOAuthProvider clientId={apiConfig.google.calendar.clientId}>
        <ErrorBoundary>
          <Router>
            <MaintenanceRedirect />
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route index element={<HomePage />} />
                <Route path="cours" element={<CoursesPage />} />
                <Route path="cours/:id" element={<CourseDetailPage />} />
                <Route path="instructeurs" element={<InstructorsPage />} />
                <Route path="instructeurs/:id" element={<InstructorDetailPage />} />
                <Route path="tarifs" element={<PricingPage />} />
                <Route path="blog" element={<BlogPage />} />
                <Route path="blog/:id" element={<BlogPostPage />} />
                <Route path="contact" element={<ContactPage />} />
                <Route path="reservation" element={<ReservationPage />} />
                <Route path="compte" element={<AccountPage />} />
                <Route path="success" element={<SuccessPage />} />
                <Route path="canceled" element={<CanceledPage />} />
                <Route path="mentions-legales" element={<LegalPage />} />
                <Route path="conditions-generales" element={<TermsPage />} />
                <Route path="politique-de-confidentialite" element={<PrivacyPage />} />
                <Route path="maintenance" element={<MaintenancePage />} />
                <Route path="*" element={<NotFoundPage />} />
              </Route>
            </Routes>
            <Toaster position="top-center" />
            <CookieBanner />
            <ChatBot />
          </Router>
        </ErrorBoundary>
      </GoogleOAuthProvider>
    </HelmetProvider>
  );
}

export default App;