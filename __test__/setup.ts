import * as dotenv from 'dotenv';
import { getAccessTokenFromRefreshToken } from '../src/util/tokens';
import { client } from './index';

const setUp = async () => {
  dotenv.config();
  const tokens = await getAccessTokenFromRefreshToken(process.env.NEWO_BUNGIE_REFRESH!);
  client.login(tokens.access.value);
};

export default setUp;
