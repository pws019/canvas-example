var readlineSync = require('readline-sync');
var fs = require('fs');
var path = require('path');



const tips = (info) => {
  return readlineSync.question(info + ':\n' || '>\n');
}

const oneLevel = tips('please input chapter(eg:1-3)');
const twoLevel = tips('please input example title(eg:简单矩形的绘制)');
let CanvasSize = tips('please input canvas default size(default 600 * 600)');
console.log(CanvasSize);
if(CanvasSize.length === 0) {
  CanvasSize = [600, 600];
} else {
  const tmp = CanvasSize.replace('，', ',').split(',');
  if(tmp.length === 2) {
    CanvasSize = tmp;
  } else {
    CanvasSize = [600, 600];
  }
}
if(typeof CanvasSize !== 'object' || CanvasSize.length != 2) {
  console.log('输入格式错误，退出程序');
  return 0;
}

const chapterDirPath = path.resolve('./', oneLevel);
if(!fs.existsSync(chapterDirPath)) {
  fs.mkdirSync(chapterDirPath);
}
const titleDirPath = path.resolve('./', oneLevel, twoLevel);
if(!fs.existsSync(titleDirPath)) {
  fs.mkdirSync(titleDirPath);
}

const jsExsit = path.join(titleDirPath, 'index.js');
if(fs.existsSync(jsExsit)) {
  const rewrite = tips('file has exist, overwrite?(y/n)');
  if(rewrite !== 'y') return;
}

var htmlTpl = fs.readFileSync(path.resolve('./template.html'),{encoding: 'utf-8'});
var jsTpl = fs.readFileSync(path.resolve('./template.js'),{encoding: 'utf-8'});
const templateHtmlPath = path.join(titleDirPath, 'index.html');
const templateJsPath = path.join(titleDirPath, 'index.js')
fs.writeFile(templateHtmlPath, 
  htmlTpl.replace('<canvas_width>', CanvasSize[0])
    .replace('<canvas_height',CanvasSize[1])
  )

fs.writeFileSync(templateJsPath, jsTpl)