import axios from 'axios';
import { PeopleService } from './people';

vi.mock('axios', () => ({
  default: {
    get: vi.fn(),
    delete: vi.fn(),
    post: vi.fn(),
  },
}));

const mockedAxios = vi.mocked(axios, true);

describe('PeopleService', () => {
  beforeEach(() => {
    vi.stubEnv('VITE_BASE_API', 'http://example.test/api');
    mockedAxios.get.mockReset();
    mockedAxios.delete.mockReset();
    mockedAxios.post.mockReset();
  });

  afterEach(() => {
    vi.unstubAllEnvs();
  });

  it('fetches the people list from the expected endpoint', async () => {
    const service = new PeopleService();
    const response = { data: [] };
    mockedAxios.get.mockResolvedValue(response);

    const result = await service.getPeople();

    expect(mockedAxios.get).toHaveBeenCalledWith('http://example.test/api/peoples');
    expect(result).toBe(response);
  });

  it('fetches a random person from the expected endpoint', async () => {
    const service = new PeopleService();
    const response = { data: { id: 1 } };
    mockedAxios.get.mockResolvedValue(response);

    const result = await service.getRandomPerson();

    expect(mockedAxios.get).toHaveBeenCalledWith('http://example.test/api/peoples/random');
    expect(result).toBe(response);
  });

  it('deletes a person with the expected endpoint', async () => {
    const service = new PeopleService();
    const response = { data: [] };
    mockedAxios.delete.mockResolvedValue(response);

    const result = await service.deletePerson('person-2');

    expect(mockedAxios.delete).toHaveBeenCalledWith('http://example.test/api/peoples/person-2');
    expect(result).toBe(response);
  });

  it('creates a person with the expected endpoint and payload', async () => {
    const service = new PeopleService();
    const personFormPayload = {
      id: '',
      photo: 'https://randomuser.me/api/portraits/lego/6.jpg',
      firstname: 'Ada',
      lastname: 'Lovelace',
      email: 'ada@example.test',
      phone: '0102030405',
    };
    const response = { data: { id: 'person-3' } };
    mockedAxios.post.mockResolvedValue(response);

    const result = await service.postPerson(personFormPayload);

    expect(mockedAxios.post).toHaveBeenCalledWith('http://example.test/api/peoples', personFormPayload);
    expect(result).toBe(response);
  });
});
