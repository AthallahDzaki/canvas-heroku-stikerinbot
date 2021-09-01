const { createCanvas, loadImage } = require('canvas');
const { drawImageWithTint } = require('./../lib/Canvas');

async function draw(avatarurl) {
    const base = await loadImage("https://raw.githubusercontent.com/bot-clones/xiao/master/assets/images/to-be-continued.png");
    const data = await loadImage(avatarurl);
    const canvas = createCanvas(data.width, data.height);
    const ctx = canvas.getContext('2d');
    drawImageWithTint(ctx, data, '#704214', 0, 0, data.width, data.height);
    const ratio = base.width / base.height;
    const width = canvas.width / 2;
    const height = Math.round(width / ratio);
    ctx.drawImage(base, 0, canvas.height - height, width, height);
    const attachment = canvas.toBuffer();
    return attachment;
}
  
  module.exports = draw;