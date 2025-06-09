import { IsString } from 'class-validator';

export class ConfigData {
  @IsString()
  name!: string;
}
