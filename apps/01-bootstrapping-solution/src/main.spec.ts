import { nextTick } from 'vue';

describe('01-bootstrapping-solution', () => {
  it('renders the name from setup into the in-DOM template', async () => {
    document.body.innerHTML = `
      <div id="app">
        <span>Hello {{ name }}</span>
      </div>
    `;

    await import('./main');
    await nextTick();

    expect(document.querySelector('#app')).toHaveTextContent('Hello SFEIR');
  });
});
