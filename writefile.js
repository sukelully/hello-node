const fs = require('node:fs');

function writeFile() {

    const content = 'Some content!';

    fs.writeFile('/Users/luke/dev/odin-project/node/hello-node/test.txt', content, (err) => {
        if (err) {
            console.error(err);
        } else {
            console.log('File written succesfully');
        }
    });
}

function appendFile() {
    const content = '\nSome more content.';

    fs.appendFile('./test.txt', content, err => {
        if (err) {
            console.error(err);
        } else {
            console.log('Content appended successfully');
        }
    })
}

module.exports = { writeFile, appendFile };
