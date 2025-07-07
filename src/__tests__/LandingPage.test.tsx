/// <reference types="vitest/globals" />
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import LandingPage from '../components/LandingPage';
import '@testing-library/jest-dom/vitest';

describe('LandingPage', () => {
  it('renders greeting', () => {
    render(<LandingPage />);
    expect(screen.getByText(/Hi, my name is/i)).toBeInTheDocument();
  });
});
