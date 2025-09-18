import '@testing-library/jest-dom';

// Mock next/font/google
jest.mock('next/font/google', () => ({
  Inter: () => ({
    className: 'mock-inter',
    style: { fontFamily: 'Inter, sans-serif' },
  }),
}));
