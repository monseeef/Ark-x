const fs = require("fs");

// Write Files Asyncronously
function writeFileAsync(filePath, content) {
  return new Promise((resolve, reject) => {
    fs.writeFile(filePath, content, "utf-8", (err) => {
      if (err) {
        reject(err.message);
      } else {
        console.log(`content writed succesfully`);
        resolve("content writed succesfully");
      }
    });
  });
}

module.exports = { writeFileAsync };
