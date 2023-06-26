import fs from 'fs/promises';
export async function showList(currentDir) {
    try {
        const rowFile = await fs.readdir(currentDir, { withFileTypes: true });
        const result = [];
        rowFile
            .sort((a, b) => a.isFile() - b.isFile())
            .filter((f) => !f.isSymbolicLink())
            .forEach((f) => {
                result.push(`${f.name}: ${f.isFile() ? "file" : "directory"} `);
            });
        console.table(result);
    } catch (error) {
        console.log('error');
    }
}