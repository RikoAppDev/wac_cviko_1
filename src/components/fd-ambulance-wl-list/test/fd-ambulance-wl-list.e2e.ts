import { newE2EPage } from '@stencil/core/testing';

describe('fd-ambulance-wl-list', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<fd-ambulance-wl-list></fd-ambulance-wl-list>');

    const element = await page.find('fd-ambulance-wl-list');
    expect(element).toHaveClass('hydrated');
  });
});
