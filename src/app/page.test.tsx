import { render, screen, act, waitFor } from '@testing-library/react';
import { fireEvent } from '@testing-library/dom';

import TestComponent from '../app/page';

const componentType = 'page';
const componentName = 'Home';

describe(componentType, () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });

  describe(componentName, () => {
    const props = {};

    it('renders a heading', async () => {
      act(() => {
        render(<TestComponent {...props} />);
      });

      // Test synchronous elements first
      const heading = screen.getByRole('heading', { name: /solace advocates/i });
      expect(heading).toBeInTheDocument();

      // Wait for async operations to complete
      await waitFor(() => {
        expect(screen.getByText('John')).toBeInTheDocument();
      });
    });

    it('should fetch advocates from the API', async () => {
      act(() => {
        render(<TestComponent {...props} />);
      });

      await waitFor(() => {
        expect(global.fetch).toHaveBeenCalledWith('/api/advocates');
      });
    });

    it('should display a list of advocates', async () => {
      act(() => {
        render(<TestComponent {...props} />);
      });

      await waitFor(() => {
        // First advocate from the mock data
        expect(screen.getAllByText('John').length).toBeGreaterThan(0);
        expect(screen.getAllByText('Doe').length).toBeGreaterThan(0);
        expect(screen.getAllByText('New York').length).toBeGreaterThan(0);
        expect(screen.getAllByText('MD').length).toBeGreaterThan(0);
        expect(screen.getAllByText('10').length).toBeGreaterThan(0);
        expect(screen.getAllByText('5551234567').length).toBeGreaterThan(0);
      });
    });

    it('should display search interface elements', async () => {
      act(() => {
        render(<TestComponent {...props} />);
      });

      await waitFor(() => {
        expect(screen.getByRole('textbox')).toBeInTheDocument();
        expect(screen.getByRole('button', { name: /reset search/i })).toBeInTheDocument();
        // Get the element with the id = 'search-term'
        expect(screen.getByText('Searching for:')).toBeInTheDocument();
      });
    });

    xit('should populate the search term when user types in the search box', async () => {
      act(() => {
        render(<TestComponent {...props} />);
      });

      await waitFor(() => {
        expect(screen.getByText('John')).toBeInTheDocument();
      });

      const input = screen.getByRole('textbox');

      fireEvent.change(input, { target: { value: 'Steve' } });

      await waitFor(() => {
        const searchTermDisplay = document.getElementById('search-term');
        expect(searchTermDisplay).toHaveTextContent('Steve');
      });
    });

    xit('should reset the search results when the reset button is clicked', async () => {
      act(() => {
        render(<TestComponent {...props} />);
      });

      await waitFor(() => {
        expect(screen.getByText('John')).toBeInTheDocument();
      });

      const input = screen.getByRole('textbox');

      fireEvent.change(input, { target: { value: 'Steve' } });

      await waitFor(() => {
        const searchTermDisplay = document.getElementById('search-term');
        expect(searchTermDisplay).toHaveTextContent('Steve');
      });

      const button = screen.getByRole('button', { name: /reset search/i });
      fireEvent.click(button);

      await waitFor(() => {
        const searchTermDisplay = document.getElementById('search-term');
        expect(searchTermDisplay).toHaveTextContent('');
        // Ensure that the full list is displayed again
        expect(screen.getByText('John')).toBeInTheDocument();
      });
    });
  });
});
