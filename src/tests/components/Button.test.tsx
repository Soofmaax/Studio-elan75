import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Button from '../../components/ui/Button';

describe('Button', () => {
  it('renders with default props', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByRole('button')).toHaveTextContent('Click me');
  });

  it('applies variant styles correctly', () => {
    const { rerender } = render(<Button variant="primary">Primary</Button>);
    expect(screen.getByRole('button')).toHaveClass('bg-sage');

    rerender(<Button variant="secondary">Secondary</Button>);
    expect(screen.getByRole('button')).toHaveClass('bg-lavender');

    rerender(<Button variant="outline">Outline</Button>);
    expect(screen.getByRole('button')).toHaveClass('border-sage');
  });

  it('applies size styles correctly', () => {
    const { rerender } = render(<Button size="sm">Small</Button>);
    expect(screen.getByRole('button')).toHaveClass('text-sm');

    rerender(<Button size="md">Medium</Button>);
    expect(screen.getByRole('button')).toHaveClass('text-base');

    rerender(<Button size="lg">Large</Button>);
    expect(screen.getByRole('button')).toHaveClass('text-lg');
  });

  it('handles click events', async () => {
    const handleClick = vi.fn();
    render(<Button onClick={handleClick}>Click me</Button>);
    
    await userEvent.click(screen.getByRole('button'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('shows loading state correctly', () => {
    render(<Button isLoading>Submit</Button>);
    expect(screen.getByRole('button')).toBeDisabled();
    expect(screen.getByRole('button')).toHaveClass('relative', 'text-transparent');
  });

  it('renders with icons', () => {
    const TestIcon = () => <span data-testid="test-icon">icon</span>;
    
    const { rerender } = render(
      <Button leftIcon={<TestIcon />}>With Left Icon</Button>
    );
    expect(screen.getByTestId('test-icon')).toBeInTheDocument();
    
    rerender(<Button rightIcon={<TestIcon />}>With Right Icon</Button>);
    expect(screen.getByTestId('test-icon')).toBeInTheDocument();
  });

  it('applies full width style when specified', () => {
    render(<Button isFullWidth>Full Width</Button>);
    expect(screen.getByRole('button')).toHaveClass('w-full');
  });
});