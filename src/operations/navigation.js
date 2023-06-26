import fs from "fs";
import { dirname } from "path";

export function up(path, currentDir) {
    try {
        if (path === currentDir) {
            console.log("Error: You are in the root folder");
            return path;
        } else {
            const result = dirname(path);
            console.log('here');
            return result;
        }
    } catch (error) {
        console.log(error);
    }
}
export function cd(path, currentDir) {
    try {
        checkFileExist(path, currentDir);
        if (fs.existsSync(file)) {
            return `${file}`;
        } else console.log("Error: No such file exists");
    } catch (error) {
        console.log(error);
    }
}