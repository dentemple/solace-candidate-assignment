# Template/Starter code for Jest Unit Tests

## Notes

- `_COMPONENT_NAME_` refers to the actual definition name of component (or file name if anonymous)
- `_COMPONENT_TYPE_` refers to the organizational category (such as "atom", "molecule", etc. under Atomic Design)

## Simple smoke test

```tsx
import { render } from '@testing-library/react';

import TestComponent from './_COMPONENT_NAME_.tsx';

const componentName = '_COMPONENT_NAME_';
const componentType = '_COMPONENT_TYPE_';

describe(componentType, () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });

  describe(componentName, () => {
    const props = {};

    it('renders without crashing', async () => {
      render(<TestComponent {...props} />);
    });
  });
});
```
