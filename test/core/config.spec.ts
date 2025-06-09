import { createConfigStore } from '../../src/core/config';
import { ConfigStore } from '@fp8/simple-config';
import { ConfigData } from '../../src/dto/config.dto';

describe('createConfigStore', () => {
    it('should create a ConfigStore instance with ConfigData', () => {
        const configStore = createConfigStore();
        expect(configStore).toBeInstanceOf(ConfigStore);

        const configData = configStore.data;
        expect(configData).toBeInstanceOf(ConfigData);

        // The name is sourced from the etc/utest/config.json file
        expect(configData.name).toEqual('typescript-start-utest');
    });
});
