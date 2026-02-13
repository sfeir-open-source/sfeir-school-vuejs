import axios from 'axios';
import { PeopleService } from './people';

vi.mock('axios', () => ({
  default: {
    get: vi.fn(),
  },
}));

const mockedAxios = vi.mocked(axios, true);

describe('PeopleService', () => {
  beforeEach(() => {
    vi.stubEnv('VITE_BASE_API', 'http://example.test/api');
    mockedAxios.get.mockReset();
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
});
