var fs = require('fs');
var path = require('path');
var chalk = require('chalk');

const TUTORIAL_PATH = 'src/tutorial';
const TUTORIAL_BUILD_PATH = 'src/tutorial/build';
const MARKDOWN_FILE_EXTENSION = 'md';

function checkBuildFolderExist(){
    if (!fs.existsSync(TUTORIAL_BUILD_PATH)) {
        console.log(chalk.magenta(`Creating build directory`));
        fs.mkdirSync(TUTORIAL_BUILD_PATH);
    }
}

function cleanBuildFolder(){
    console.log(chalk.yellow(`Cleaning up build directory`));
    fs.readdir(TUTORIAL_BUILD_PATH, function (err, items) {
        items.forEach(function(file) {
            var filePath = path.join(TUTORIAL_BUILD_PATH, file);
            fs.unlink(filePath, function(err) {
                if (err) {
                    console.log(chalk.red(`Error when deleting file %s`), filePath);
                    throw new Error(err);
                }
            })
        })
    });
}


function createJSFilesFromMarkdown(){
    console.log(chalk.green(`Building tutorial files from markdowns`));
    fs.readdir(TUTORIAL_PATH, function(err, items) {
        items.forEach(function(file) {
            var filePath = path.join(TUTORIAL_PATH, file);
            fs.stat(filePath, function(err, stats) {
                if (stats.isFile() && isFileOfExtension(file, MARKDOWN_FILE_EXTENSION)) {
                    fs.readFile(filePath, 'utf-8', function(err, data) {
                        const newFileName = getFileNameWithoutExtension(file) + '.js';
                        const newFilePath = path.join(TUTORIAL_BUILD_PATH, newFileName);
                        const dataToWrite = `export default \` ${data.replace(/`/g, '\\\`')} \``;
                        fs.writeFile(newFilePath, dataToWrite, function(err) {
                            if (err) {
                                console.log(chalk.red(`Error writing file  - %s`), newFilePath);
                                throw new Error(err);
                            }
                        })
                    })
                }
            })
        })
    });
}

function getFileNameWithoutExtension(filename) {
    return filename.split('.').slice(0, -1).join('.');
}

function isFileOfExtension(filename, extension) {
    return filename.split('.').slice(-1)[0] === extension;
}

checkBuildFolderExist();
cleanBuildFolder();
createJSFilesFromMarkdown();

