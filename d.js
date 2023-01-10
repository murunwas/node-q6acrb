const fs = require('fs');
const https = require('https');

// URL of the image
const url =
  'https://github.com/open-xml-templating/docxtemplater/raw/master/examples/tag-example.docx';

https.get(url, (res) => {
  // Image will be stored at this path
  const path = `${__dirname}/example.docx`;
  const filePath = fs.createWriteStream(path);
  res.pipe(filePath);
  filePath.on('finish', () => {
    filePath.close();
    console.log('Download Completed');
  });
});
