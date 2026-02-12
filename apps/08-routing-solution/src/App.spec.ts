import { render, screen } from '@testing-library/vue';
import App from './App.vue';

const renderApp = () =>
  render(App, {
    global: {
      stubs: {
        'a-page-header': {
          template: '<div class="ant-page-header"><slot></slot></div>',
        },
        RouterView: {
          template: '<div data-testid="router-view"></div>',
        },
      },
    },
  });

describe('App.vue', () => {
  it('renders the component without errors', () => {
    renderApp();
    expect(screen.getByRole('banner')).toBeInTheDocument();
  });

  it('displays the SFEIR logo with correct attributes', () => {
    renderApp();

    const logo = screen.getByAltText('sfeir-people-logo');
    expect(logo).toBeInTheDocument();
    expect(logo).toHaveAttribute('width', '150');
    expect(logo).toHaveAttribute('height', '60');
    expect(logo.tagName.toLowerCase()).toBe('img');
  });

  it('displays the HOME navigation link', () => {
    renderApp();
    expect(screen.getByText('HOME')).toBeInTheDocument();
  });

  it('displays the PEOPLE navigation link', () => {
    renderApp();
    expect(screen.getByText('PEOPLE')).toBeInTheDocument();
  });

  it('renders navigation links inside header-container-links', () => {
    const { container } = renderApp();

    const linksContainer = container.querySelector('.header-container-links');
    expect(linksContainer).toBeInTheDocument();
    expect(linksContainer).toHaveTextContent('HOME');
    expect(linksContainer).toHaveTextContent('PEOPLE');
  });
});
