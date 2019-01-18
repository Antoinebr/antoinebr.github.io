const fs = require('fs');

const {
    exec
} = require('child_process');

const {
    promisify
} = require('util');

const execPromise = promisify(exec);


process.argv.splice(0, 2);

const [videoFile = false, whenVideoStart = false, howLong = false, folderName = false] = process.argv;

if (!videoFile) console.log(" Missing video file argument");
if (!whenVideoStart) console.log(" Missing whenVideoStart argument eg : 00:00:20");
if (!howLong) console.log(" Missing howLong argument eg : 00:00:05");
if (!folderName) console.log(" Missing folderName argument");


(async () => {


    // Create a folder 
    // copy the master files in this folder

    await execPromise(`cp -r master ${__dirname}/${folderName}`)

    // extract the frames 
    await execPromise(`ffmpeg -i ${videoFile} -ss ${whenVideoStart} -t ${howLong} -r 30/1 ${__dirname}/${folderName}/output%03d.jpg`)

    // list the frame in a json
    // ls output* > list.txt & node back.js > list.json 
    await execPromise(`cd ${__dirname}/${folderName} && ls output* > ${__dirname}/${folderName}/list.txt`);

    await execPromise(`node ${__dirname}/${folderName}/back.js > ${__dirname}/${folderName}/list.json`);


    console.log(`\nGolf swing successfully generated 👍 \n${__dirname}/${folderName} \n  `);

})()
.catch(e => console.log(`ERROR :( ${e}`));