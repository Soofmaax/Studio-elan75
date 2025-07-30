import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ReservationPage from '../../pages/ReservationPage';
import { BrowserRouter } from 'react-router-dom';

describe('ReservationPage', () => {
  const renderComponent = () => {
    return render(
      <BrowserRouter>
        <ReservationPage />
      </BrowserRouter>
    );
  };

  it('should show validation errors for empty form submission', async () => {
    renderComponent();
    
    const submitButton = screen.getByText(/confirmer la réservation/i);
    await userEvent.click(submitButton);

    expect(await screen.findByText(/veuillez sélectionner un cours/i)).toBeInTheDocument();
    expect(await screen.findByText(/veuillez sélectionner une date/i)).toBeInTheDocument();
    expect(await screen.findByText(/veuillez entrer votre nom/i)).toBeInTheDocument();
  });

  it('should handle successful form submission', async () => {
    renderComponent();
    
    await userEvent.selectOptions(
      screen.getByLabelText(/type de cours/i),
      'prenatal'
    );
    
    await userEvent.type(
      screen.getByLabelText(/date/i),
      '2025-12-31'
    );
    
    await userEvent.selectOptions(
      screen.getByLabelText(/horaire/i),
      'morning'
    );
    
    await userEvent.type(
      screen.getByLabelText(/nom complet/i),
      'Test User'
    );
    
    await userEvent.type(
      screen.getByLabelText(/email/i),
      'test@example.com'
    );
    
    await userEvent.type(
      screen.getByLabelText(/téléphone/i),
      '0123456789'
    );

    const submitButton = screen.getByText(/confirmer la réservation/i);
    await userEvent.click(submitButton);

    await waitFor(() => {
      expect(screen.getByText(/merci test user/i)).toBeInTheDocument();
    });
  });
});