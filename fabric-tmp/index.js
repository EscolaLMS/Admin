/*
const fs = require('fs');
const fabric = require('fabric').fabric;
const out = fs.createWriteStream(__dirname + '/helloworld.pdf');

const PDFDocument = require('pdfkit');
const SVGtoPDF = require('svg-to-pdfkit');

const canvas = new fabric.Canvas(null, { width: 1600, height: 1200 });
const data = require('./paper.json');

canvas.loadFromJSON(data, () => {
  const svg = canvas.toSVG();
  const doc = new PDFDocument({
    layout: 'landscape',
    size: 'A4',
  });
  SVGtoPDF(doc, canvas.toSVG());
  doc.pipe(out);
  doc.end();

  fs.writeFileSync(__dirname + '/helloworld.svg', canvas.toSVG());
});
*/
