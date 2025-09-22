import { render } from '@testing-library/react';

import TestComponent from './SearchInput.tsx';

const componentName = 'SearchInput';
const componentType = 'common';

describe(componentType, () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });

  describe(componentName, () => {
    const props = {
      handleSearchChange: jest.fn(),
      handleResetClick: jest.fn(),
      searchTerm: 'test',
    };

    it('renders without crashing', async () => {
      render(<TestComponent {...props} />);
    });
  });
});
