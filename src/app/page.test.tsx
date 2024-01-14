import Page from '@/app/page';

import { redirect } from 'next/navigation';

// Mocking redirect function
jest.mock('next/navigation', () => ({
  redirect: jest.fn(),
}));

describe('Home Component', () => {
  it('redirects to /groups', () => {
    // Render Home component (though it does not have a visual output)
    Page();
    // Expect redirect to have been called with '/groups'
    expect(redirect).toHaveBeenCalledWith('/groups');
  });
});
