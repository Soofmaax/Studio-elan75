import React, { Component, ErrorInfo, ReactNode } from 'react';
import Button from './ui/Button';
import { useMaintenanceStore } from '../stores/maintenanceStore';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
    
    // Set maintenance mode if there's a critical error
    if (error.message.includes('critical') || error.message.includes('render')) {
      useMaintenanceStore.getState().setMaintenanceMode(true);
    }
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-cream">
          <div className="container-custom text-center py-20">
            <h1 className="text-3xl font-serif text-sage mb-6">Une erreur est survenue</h1>
            <p className="text-lg mb-8 max-w-lg mx-auto">
              Nous nous excusons pour ce désagrément. Notre équipe a été notifiée et travaille à résoudre le problème.
            </p>
            <Button 
              variant="primary" 
              size="lg"
              onClick={() => window.location.reload()}
            >
              Rafraîchir la page
            </Button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;