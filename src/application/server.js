import { App } from './app.js';
import { SERVER_UTILS } from './shared/utils.js';

const app = new App();
const PORT = SERVER_UTILS.PORT;

await app.start(PORT);