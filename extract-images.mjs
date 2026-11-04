/**
 * Extrai as imagens base64 do HTML original e salva como arquivos WebP/JPEG em public/images/.
 *
 * Uso:
 *   node extract-images.mjs /caminho/para/presell-v3.html
 */
import fs from 'fs';
import path from 'path';

const htmlPath = process.argv[2];
if (!htmlPath) {
  console.error('Uso: node extract-images.mjs <caminho-do-html>');
  process.exit(1);
}

const html = fs.readFileSync(htmlPath, 'utf8');
const outDir = path.join(import.meta.dirname, 'public', 'images', 'sofa-chesterfield');
fs.mkdirSync(outDir, { recursive: true });

// Extrai todos os src="data:image/..." do HTML
const regex = /src="(data:image\/(webp|jpeg|png);base64,([^"]+))"/g;
let match;
let count = 0;
const nomes = ['01-frontal', '02-ambiente', '03-medidas', '04-materiais', '05-couro', '06-traseira'];

while ((match = regex.exec(html)) !== null) {
  const mime = match[2];
  const b64 = match[3];
  const ext = mime === 'png' ? 'png' : mime === 'webp' ? 'webp' : 'jpg';
  const nome = nomes[count] ?? `img-${count + 1}`;
  const outPath = path.join(outDir, `${nome}.${ext}`);
  fs.writeFileSync(outPath, Buffer.from(b64, 'base64'));
  console.log(`✓ ${outPath} (${Math.round(b64.length * 0.75 / 1024)} KB)`);
  count++;
}

if (count === 0) {
  console.log('Nenhuma imagem base64 encontrada. Verifique o HTML.');
} else {
  console.log(`\n${count} imagem(ns) extraída(s) para ${outDir}`);
  console.log('\nSe as extensões forem .jpg ou .png, atualize src/data/produto.ts para usar o mesmo extension.');
}
