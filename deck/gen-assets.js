const sharp = require('sharp');
const path = require('path');

async function make(filename, svgContent) {
  await sharp(Buffer.from(svgContent)).png().toFile(path.join(__dirname, filename));
  console.log('Created:', filename);
}

async function main() {
  // Hero mesh gradient — cyan / blue / magenta / amber on near-white
  await make('hero-gradient.png', `<svg xmlns="http://www.w3.org/2000/svg" width="1440" height="810">
    <defs>
      <radialGradient id="g1" cx="20%" cy="30%" r="60%">
        <stop offset="0%" style="stop-color:#007cf0;stop-opacity:0.55"/>
        <stop offset="100%" style="stop-color:#fafafa;stop-opacity:0"/>
      </radialGradient>
      <radialGradient id="g2" cx="80%" cy="20%" r="55%">
        <stop offset="0%" style="stop-color:#7928ca;stop-opacity:0.45"/>
        <stop offset="100%" style="stop-color:#fafafa;stop-opacity:0"/>
      </radialGradient>
      <radialGradient id="g3" cx="65%" cy="80%" r="50%">
        <stop offset="0%" style="stop-color:#ff0080;stop-opacity:0.35"/>
        <stop offset="100%" style="stop-color:#fafafa;stop-opacity:0"/>
      </radialGradient>
      <radialGradient id="g4" cx="30%" cy="75%" r="45%">
        <stop offset="0%" style="stop-color:#00dfd8;stop-opacity:0.4"/>
        <stop offset="100%" style="stop-color:#fafafa;stop-opacity:0"/>
      </radialGradient>
      <radialGradient id="g5" cx="50%" cy="50%" r="40%">
        <stop offset="0%" style="stop-color:#f9cb28;stop-opacity:0.25"/>
        <stop offset="100%" style="stop-color:#fafafa;stop-opacity:0"/>
      </radialGradient>
    </defs>
    <rect width="100%" height="100%" fill="#fafafa"/>
    <rect width="100%" height="100%" fill="url(#g1)"/>
    <rect width="100%" height="100%" fill="url(#g2)"/>
    <rect width="100%" height="100%" fill="url(#g3)"/>
    <rect width="100%" height="100%" fill="url(#g4)"/>
    <rect width="100%" height="100%" fill="url(#g5)"/>
  </svg>`);

  // Dark band gradient — deep ink with subtle blue glow
  await make('dark-gradient.png', `<svg xmlns="http://www.w3.org/2000/svg" width="1440" height="810">
    <defs>
      <radialGradient id="dg1" cx="25%" cy="40%" r="55%">
        <stop offset="0%" style="stop-color:#007cf0;stop-opacity:0.2"/>
        <stop offset="100%" style="stop-color:#171717;stop-opacity:0"/>
      </radialGradient>
      <radialGradient id="dg2" cx="75%" cy="60%" r="50%">
        <stop offset="0%" style="stop-color:#7928ca;stop-opacity:0.18"/>
        <stop offset="100%" style="stop-color:#171717;stop-opacity:0"/>
      </radialGradient>
    </defs>
    <rect width="100%" height="100%" fill="#171717"/>
    <rect width="100%" height="100%" fill="url(#dg1)"/>
    <rect width="100%" height="100%" fill="url(#dg2)"/>
  </svg>`);

  // Accent band gradient — subtle mesh on canvas-soft
  await make('accent-gradient.png', `<svg xmlns="http://www.w3.org/2000/svg" width="1440" height="810">
    <defs>
      <radialGradient id="ag1" cx="15%" cy="50%" r="50%">
        <stop offset="0%" style="stop-color:#007cf0;stop-opacity:0.12"/>
        <stop offset="100%" style="stop-color:#fafafa;stop-opacity:0"/>
      </radialGradient>
      <radialGradient id="ag2" cx="85%" cy="50%" r="50%">
        <stop offset="0%" style="stop-color:#7928ca;stop-opacity:0.1"/>
        <stop offset="100%" style="stop-color:#fafafa;stop-opacity:0"/>
      </radialGradient>
    </defs>
    <rect width="100%" height="100%" fill="#fafafa"/>
    <rect width="100%" height="100%" fill="url(#ag1)"/>
    <rect width="100%" height="100%" fill="url(#ag2)"/>
  </svg>`);
}

main().catch(console.error);
