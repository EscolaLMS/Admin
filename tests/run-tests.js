/* eslint-disable @typescript-eslint/no-var-requires */
const { spawn } = require('child_process');
const { kill } = require('cross-port-killer');

const env = { ...process.env, BROWSER: 'none', TEST: 'true', UMI_UI: 'none', PROGRESS: 'none' };
let once = false;

console.log('Starting development server for e2e tests...');

const startServer = spawn(/^win/.test(process.platform) ? 'npm.cmd' : 'npm', ['run', 'dev'], {
  env,
});

startServer.stdout.on('data', (data) => {
  const output = data.toString();
  console.log(output);

  // Adjust based on actual Umi log output
  if (!once && output.includes('Local:')) {
    once = true;
    console.log('Development server is ready, running tests...');

    const testCmd = spawn(
      /^win/.test(process.platform) ? 'npm.cmd' : 'npm',
      ['run', 'playwright'],
      {
        stdio: 'inherit',
      },
    );

    testCmd.on('exit', (code) => {
      console.log('Tests completed, exit code:', code);
      kill(process.env.PORT || 8000).then(() => {
        process.kill(startServer.pid, 'SIGTERM');
        process.exit(code);
      });
    });
  }
});

startServer.stderr.on('data', (data) => console.error(data.toString()));

startServer.on('exit', () => {
  console.log('Server exited unexpectedly.');
  kill(process.env.PORT || 8000);
});
