import { render } from '@testing-library/react';

import TestComponent from './Table.tsx';

const componentName = 'Table';
const componentType = 'common';

describe(componentType, () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });

  describe(componentName, () => {
    const props = {
      records: [
        { id: 1, name: 'Test' },
        { id: 2, name: 'Example' },
      ],
    };

    it('renders without crashing', async () => {
      render(<TestComponent {...props} />);
    });
  });
});
