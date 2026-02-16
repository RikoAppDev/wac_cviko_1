import { newSpecPage } from '@stencil/core/testing';
import { FdAmbulanceWlList } from '../fd-ambulance-wl-list';

describe('fd-ambulance-wl-list', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [FdAmbulanceWlList],
      html: `<fd-ambulance-wl-list></fd-ambulance-wl-list>`,
    });

    const wlList = page.rootInstance as FdAmbulanceWlList;
    const expectedPatients = wlList?.waitingPatients?.length

    const items = page.root.shadowRoot.querySelectorAll("md-list-item");
    expect(items.length).toEqual(expectedPatients);
  });
});
