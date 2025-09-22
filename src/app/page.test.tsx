import { screen } from '@testing-library/react';

import * as testUtils from '@/app/utils/testUtils';
import TestComponent from '@/app/page';

const componentType = 'page';
const componentName = 'Home';

describe(componentType, () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });

  describe(componentName, () => {
    const props = {};

    it('renders a heading', async () => {
      testUtils.renderWithProviders(<TestComponent {...props} />);

      const heading = screen.getByRole('heading', { name: /solace advocates/i });
      expect(heading).toBeInTheDocument();
    });
  });
});
