import { createOAuthURL, refreshAuthorization } from '../src/auth';
import { sharedTestClient } from './global-setup';

describe('refresh token tests', () => {
  test('tokens received', async () => {
    return refreshAuthorization(
      process.env.BUNGIE_REFRESH_TOKEN!,
      {
        client_id: process.env.BUNGIE_CLIENT_ID!,
        client_secret: process.env.BUNGIE_CLIENT_SECRET!
      },
      sharedTestClient.http
    ).then(tokenResponse => {
      expect(tokenResponse).toHaveProperty('access_token');
      expect(tokenResponse).toHaveProperty('expires_in');
      expect(tokenResponse).toHaveProperty('membership_id');
      expect(tokenResponse).toHaveProperty('refresh_expires_in');
      expect(tokenResponse).toHaveProperty('refresh_token');
    });
  });
});

describe('create oauth url tests', () => {
  test('contains all properties', () => {
    const url = createOAuthURL({
      client_id: '12841',
      reauth: true,
      redirect_uri: 'https://www.google.com',
      state: '17246719941'
    });

    expect(url.searchParams).toMatchObject(
      new URLSearchParams({
        client_id: '12841',
        response_type: 'code',
        state: '17246719941',
        reauth: 'true',
        redirect_uri: 'https://www.google.com'
      })
    );
  });

  test('contains only provided properties', () => {
    const url = createOAuthURL({
      client_id: '12841',
      state: '17246719941'
    });

    expect(url.searchParams).toMatchObject(
      new URLSearchParams({
        client_id: '12841',
        response_type: 'code',
        state: '17246719941'
      })
    );
  });

  test('errors on missing client id', () => {
    const create = () =>
      createOAuthURL({
        client_id: ''
      });
    expect(create).toThrowError('Missing client_id in query');
  });
});
