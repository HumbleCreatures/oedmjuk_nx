import { render } from '@testing-library/react';

import OedmjukUi from './oedmjuk-ui';

describe('OedmjukUi', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<OedmjukUi />);
    expect(baseElement).toBeTruthy();
  });
});
