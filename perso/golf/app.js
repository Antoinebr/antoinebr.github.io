const fg = require('fast-glob');
const fs = require('fs');

const entries = fg.sync(['./*/'],{ onlyDirectories: true, deep: 0 }).filter( folder => folder.includes('swing') || folder.includes('driver') || folder.includes('hybrid')  );
    
fs.writeFileSync(__dirname+'/folderList.json',JSON.stringify(entries));