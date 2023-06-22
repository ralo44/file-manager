import readline from "readline";

export class App {
    constructor(rootDir) {
        this.currentDir = rootDir;
        // this.rootDir = rootDir;
    }
    async start() {
        this.currentDirectory();
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout,
          });
          rl.on("line", async (command) => {
            if (command === ".exit" ) {
                process.exit();
            }
        })
    }
    currentDirectory() {
        console.log(`You are currently in ${this.currentDir}`);
      }
}