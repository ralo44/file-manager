import readline from "readline";
import { showList  } from "../src/operations/list.js";
import { up  } from "../src/operations/navigation.js";
import { arh, cpus, eol, getName, homedir  } from "../src/operations/os.js";


export class App {
    constructor(rootDir) {
        this.currentDir = rootDir;
        this.rootDir = rootDir;
    }
    async start() {
        this.currentDirectory();
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout,
          });
          rl.on('line', async (command) => {
            const totalCommand = command.split(' ');
            const firstCommand = totalCommand[0];
            const arg1 = totalCommand[1];
            const arg2 = totalCommand[2];
            if (firstCommand === '.exit' ) {
                process.exit();
            } else if (firstCommand === 'ls') {
                showList(this.currentDir);
            } else if (firstCommand === 'up') {
                this.currentDir = up(this.currentDir, this.rootDit);
            } else if (firstCommand === 'os' && arg1 === '--EOL') {
                eol();
            } else if (firstCommand === 'os' && arg1 === '--cpus') {
                cpus();
            } else if (firstCommand === 'os' && arg1 === '--architecture') {
                arh();
            } else if (firstCommand === 'os' && arg1 === '--homedir') {
                homedir();
            } else if (firstCommand === 'os' && arg1 === '--username') {
                getName();
            }else{
                console.log('Command not found.');
            }
        })
    }
    currentDirectory() {
        console.log(`You are currently in ${this.currentDir}`);
      }
}