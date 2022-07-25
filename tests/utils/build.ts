import path from 'path';
import process from 'process';
import getPort from 'get-port';
import Browser, { Page } from './browser';
import Service from '../../packages/ice/src/Service';
import build from '../../packages/ice/src/commands/build';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

interface SetupBrowser {
  (options: {
    example: string;
    outputDir?: string;
    defaultHtml?: string;
    disableJS?: boolean;
  }): Promise<ReturnValue>;
}

interface ReturnValue {
  page: Page;
  browser: Browser;
}

// get builtIn plugins
export const buildFixture = async function(example: string) {
  const rootDir = path.join(__dirname, `../../examples/${example}`);
  process.env.DISABLE_FS_CACHE = 'true';
  const service = new Service({ rootDir, command: 'build', commandArgs: {} });
  await service.start();
  await build(service);
}

export const setupBrowser: SetupBrowser = async (options) => {
  const { example, outputDir = 'build', defaultHtml = 'index.html', disableJS = true } = options;
  const rootDir = path.join(__dirname, `../../examples/${example}`);
  const port = await getPort();
  const browser = new Browser({ cwd: path.join(rootDir, outputDir), port });
  await browser.start();
  console.log()
  // when preview html generate by build, the path will not match the router info, so hydrate will not found the route component
  const page = await browser.page(`http://127.0.0.1:${port}/${defaultHtml}`, disableJS);
  return {
    browser,
    page,
  }
}
