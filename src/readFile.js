const fs = require('node:fs');

function readFile() {
  fs.readFile('/Users/luke/dev/odin-project/node/hello-node/test.txt', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
    } else {
      console.log(data);
      console.log('amend test');
    }
  });
}

module.exports = { readFile };
