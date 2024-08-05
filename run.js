const chalk = require('chalk');
const { spawn } = require('child_process');

console.log(chalk.green.bold('=== Panel Siap Digunakan ==='));
console.log(chalk.blue('Silakan upload bot mu di tab files :'));

const shell = spawn('bash', [], {
  stdio: ['inherit', 'inherit', 'inherit', 'ipc']
});

// Menangani event untuk shell
shell.on('spawn', () => {
  console.log(chalk.yellow('Shell telah dimulai. Anda dapat mulai memasukkan perintah.'));
});

shell.on('error', (err) => {
  console.error(chalk.red('Terjadi kesalahan saat memulai shell:'), err);
});

shell.on('exit', (code) => {
  console.log(chalk.magenta(`Shell exited with code ${code}`));
});
