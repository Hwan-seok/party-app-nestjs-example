import * as dotenv from 'dotenv';
import * as fs from 'fs';
import * as path from 'path';

export class ConfigService {
  private readonly envConfig: EnvConfig;

  constructor(filePath: string) {
    const dirName = path.dirname(__dirname);
    console.log('Running Env Is : ' + process.env.NODE_ENV);
    console.log('Running Dir Name is : ' + dirName);
    if (dirName.endsWith('modules')) {
      this.envConfig = dotenv.parse(
        fs.readFileSync(path.join(dirName, '../../env/') + filePath),
      );
    } else {
      this.envConfig = dotenv.parse(
        fs.readFileSync(path.join(dirName, '/env/') + filePath),
      );
    }

    console.log(this.envConfig);
  }

  get(key: string): string {
    return this.envConfig[key];
  }
}

export interface EnvConfig {
  [key: string]: string;
}
