const pptxgen = require('pptxgenjs');
const html2pptx = require('./html2pptx.js');
const path = require('path');

const SLIDES_DIR = path.join(__dirname, 'slides');
const OUT = path.join(__dirname, 'Food-Decision-Sprint-Discovery-Readout.pptx');

const slides = [
  's01-cover.html',
  's02-process.html',
  's03-participants.html',
  's04-problem.html',
  's05-findings.html',
  's06-opptree.html',
  's07-persona.html',
  's08-journey.html',
  's09-hypotheses.html',
  's10-nextsteps.html',
];

async function build() {
  const pptx = new pptxgen();
  pptx.layout = 'LAYOUT_16x9';
  pptx.author = 'Food Decision Sprint';
  pptx.title = 'Food Decision Sprint — Discovery Readout';

  for (const file of slides) {
    const htmlPath = path.join(SLIDES_DIR, file);
    await html2pptx(htmlPath, pptx);
    console.log('✓', file);
  }

  await pptx.writeFile({ fileName: OUT });
  console.log('\nSaved:', OUT);
}

build().catch(err => { console.error(err); process.exit(1); });
