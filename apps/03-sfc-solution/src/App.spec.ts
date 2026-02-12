import { render, screen } from '@testing-library/vue';
import App from './App.vue';

describe('App.vue', () => {
  it('renders the component without errors', () => {
    render(App);
    expect(screen.getByRole('banner')).toBeInTheDocument();
  });

  it('displays the SFEIR logo with correct attributes', () => {
    render(App);

    const logo = screen.getByAltText('sfeir-people-logo');
    expect(logo).toBeInTheDocument();
    expect(logo).toHaveAttribute('width', '150');
    expect(logo).toHaveAttribute('height', '60');
    expect(logo.tagName.toLowerCase()).toBe('img');
  });

  it('displays the HOME navigation link', () => {
    render(App);
    expect(screen.getByText('HOME')).toBeInTheDocument();
  });

  it('displays the PEOPLE navigation link', () => {
    render(App);
    expect(screen.getByText('PEOPLE')).toBeInTheDocument();
  });

  it('renders navigation links inside header-container-links', () => {
    const { container } = render(App);

    const linksContainer = container.querySelector('.header-container-links');
    expect(linksContainer).toBeInTheDocument();
    expect(linksContainer).toHaveTextContent('HOME');
    expect(linksContainer).toHaveTextContent('PEOPLE');
  });
});
