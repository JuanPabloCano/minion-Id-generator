import fs from 'fs';

export class ReadCommanderLambdaStringService {
  async execute() {
    try {
      return await fs.promises.readFile('src/application/shared/lambda_string/CommanderLambdaString', 'utf8');
    } catch (e) {
      throw new Error(e.message);
    }
  }
}