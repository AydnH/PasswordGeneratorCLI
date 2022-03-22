const fs = require('fs');
const path = require('path');
const os = require('os');

const savePasswords = (passwords) => {
    fs.open(path.join(__dirname, '../', 'passwords.txt'), 'a', 100, (e, id) => {
        fs.write(id, passwords + os.EOL, null, 'utf-8', () => {
            fs.close(id, () => {
                // console.log(`passwords saved to passwords.txt`);
            })
        })
    })
}

module.exports = savePasswords;