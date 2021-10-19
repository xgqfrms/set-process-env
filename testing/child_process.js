const { spawn } = require('child_process');
// const ls = spawn('ls', ['-lh', '/usr']);
// const ls = spawn('ls', ['-al', '/etc/']);
const ls = spawn('ls', ['-al', '/etc/shells']);

ls.stdout.on('data', (data) => {
  console.log(`stdout: ${data}`);
});

ls.stderr.on('data', (data) => {
  console.error(`stderr: ${data}`);
});

ls.on('close', (code) => {
  console.log(`child process exited with code ${code}`);
});
