const {
    exec
} = require('child_process');

const {
    promisify
} = require('util');

const execPromise = promisify(exec);


(async () => {

    let {stdout} = await execPromise(`echo */`);

    console.log( stdout.replace('\n','').split(' '));


})();