
const AdmZip = require("adm-zip");

module.exports.handler = async () => {
  try {
    const zip = new AdmZip('src/invoice.zip');
    const outputDir = `src/data-files`;
    zip.extractAllTo(outputDir);

    console.log(`Extracted to "${outputDir}" successfully`);
    console.log("extract zip")
  } catch (err) {
    console.log(err);
  }
};

