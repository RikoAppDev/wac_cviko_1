import { newSpecPage } from '@stencil/core/testing';
import { FdAmbulanceWlList } from '../fd-ambulance-wl-list';

describe('fd-ambulance-wl-list', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [FdAmbulanceWlList],
      html: `<fd-ambulance-wl-list></fd-ambulance-wl-list>`,
    });
    expect(page.root).toEqualHtml(`
      <fd-ambulance-wl-list>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </fd-ambulance-wl-list>
    `);
  });
});
