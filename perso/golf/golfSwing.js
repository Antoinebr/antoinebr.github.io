const mozjpeg = require('mozjpeg');

const moment = require('moment');

const fs = require('fs');
const fg = require('fast-glob');

const {
    exec,
    execFile
} = require('child_process');

const {
    promisify
} = require('util');

const execPromise = promisify(exec);

const execFilePromise = promisify(execFile);

process.argv.splice(0, 2);

const [videoFile = false, whenVideoStart = false, whenVideoEnd = false, folderName = false] = process.argv;

if (!videoFile) console.log(" Missing video file argument");
if (!whenVideoStart) console.log(" Missing whenVideoStart argument eg : 00:00:20");
if (!whenVideoEnd) console.log(" Missing whenVideoEnd argument eg : 00:00:25");
if (!folderName) console.log(" Missing folderName argument");


const howLong = moment.utc(moment(whenVideoEnd, 'HH:mm:ss').diff(moment(whenVideoStart, 'HH:mm:ss'))).format("HH:mm:ss");

(async () => {


    // Create a folder 
 

    // copy the master files in this folder
    await execPromise(`cp -r ${__dirname}/master ${__dirname}/${folderName}`)

    // extract the frames 
    // await execPromise(`ffmpeg -i ${videoFile} -ss ${whenVideoStart} -t ${howLong} -r 30/1 ${__dirname}/${folderName}/output%03d.jpg`)
    await execPromise(`ffmpeg -i ${videoFile} -ss ${whenVideoStart} -t ${howLong} ${__dirname}/${folderName}/output%03d.jpg`)

    // list the frame in a json
    await execPromise(`cd ${__dirname}/${folderName} && ls output* > ${__dirname}/${folderName}/list.txt`);

    await execPromise(`node ${__dirname}/${folderName}/back.js > ${__dirname}/${folderName}/list.json`);

    //await execFilePromise(mozjpeg, ['-outfile', `${__dirname}/${folderName}/output001.min.jpg`, `${__dirname}/${folderName}/output001.jpg`]);

    console.log(`\nGolf swing successfully generated 👍 \n${__dirname}/${folderName} \n  `);

  

    

})()
.catch(e => console.log(`ERROR :( ${e}`));