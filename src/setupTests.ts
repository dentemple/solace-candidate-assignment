import '@testing-library/jest-dom';
import { advocateData } from './db/seed/advocates.ts';

global.fetch = jest.fn(() =>
  Promise.resolve({
    ok: true,
    json: () => Promise.resolve({ data: advocateData }),
  }),
) as jest.Mock;

// Mock next/font/google
jest.mock('next/font/google', () => ({
  Inter: () => ({
    className: 'mock-inter',
    style: { fontFamily: 'Inter, sans-serif' },
  }),
}));
