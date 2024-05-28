import 'dotenv/config';
import { get } from 'env-var';

export const envs = {
  NODE_DOCKER_PORT: get('NODE_DOCKER_PORT').required().asPortNumber(),
  API_PREFIX: get('DEFAULT_API_PREFIX').default('/api/v1').asString(),
  NODE_ENV: get('NODE_ENV').default('development').asString()
};