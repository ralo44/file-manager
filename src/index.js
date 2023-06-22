import process from "process";

const userName = process.argv[process.argv.length - 1].toString().slice(11);

const welcomeMessage = () => {
    console.log(`Welcome to the File Manager, ${userName}!`);
  };

  welcomeMessage();