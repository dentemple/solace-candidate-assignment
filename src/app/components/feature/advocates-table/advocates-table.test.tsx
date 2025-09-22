import { render } from '@testing-library/react';

import TestComponent from './AdvocatesTable.tsx';
import * as testUtils from '@/app/utils/testUtils';

const componentName = 'AdvocatesTable';
const componentType = 'feature';

describe(componentType, () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });

  describe(componentName, () => {
    const props = {};

    it('renders without crashing', async () => {
      testUtils.renderWithProviders(<TestComponent {...props} />);
    });
  });
});
