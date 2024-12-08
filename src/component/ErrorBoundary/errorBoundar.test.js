import React from 'react';
import { render, screen } from '@testing-library/react';
import ErrorBoundary from './errorBoundary';

describe('ErrorBoundary', () => {
  test('displays fallback UI when an error occurs', () => {
    const BuggyComponent = () => {
      throw new Error('Something went wrong!');
    };

    render(
      <ErrorBoundary fallback={<div>Error occurred!</div>}>
        <BuggyComponent />
      </ErrorBoundary>
    );

    expect(screen.getByText(/Something went wrong!/i)).toBeInTheDocument();
    expect(screen.queryByText('Error occurred!')).not.toBeInTheDocument();
  });

  test('renders children when no error occurs', () => {
    const WorkingComponent = () => <div>Everything is fine!</div>;

    render(
      <ErrorBoundary fallback={<div>Error occurred!</div>}>
        <WorkingComponent />
      </ErrorBoundary>
    );

    expect(screen.getByText('Everything is fine!')).toBeInTheDocument();
    expect(screen.queryByText('Error occurred!')).not.toBeInTheDocument();
  });
});