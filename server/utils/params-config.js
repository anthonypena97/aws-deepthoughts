const { v4: uuidv4 } = require('uuid');
require('dotenv').config();

const params = (fileName) => {
  const myFile = fileName.originalname.split('');
  const fileType = myFile[myFile.length - 1];

  const imageParams = {
    // Replace the <My_Bucket_Name> with the name of your own S3 bucket
    Bucket: process.env.S3_BUCKET,
    Key: `${uuidv4()}.${fileType}`,
    Body: fileName.buffer,
    ACL: 'public-read' // allow read access to this file
  };

  return imageParams;
};

module.exports = params;