import { ConfigStore } from '@fp8/simple-config';
import { ConfigData } from '../dto/config.dto';

export function createConfigStore(): ConfigStore<ConfigData> {
  return new ConfigStore(ConfigData);
}
