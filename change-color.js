const fs = require('fs');
const path = require('path');
const readline = require('readline');

// 🎨 Цветовые темы
const toColor = {
  "green": ['#00ff9d', '#00ff9d]/10', '#00ff9d]/20', '#00ff9d]/5', '#00ff9d]/80', 'rgba(0,255,157,0.3)', 'rgba(0,255,157,0.5)'],
  "blue": ['#4f9eff', '#4f9eff]/10', '#4f9eff]/20', '#4f9eff]/5', '#4f9eff]/80', 'rgba(79,158,255,0.3)', 'rgba(79,158,255,0.5)'],
  "purple": ['#a855f7', '#a855f7]/10', '#a855f7]/20', '#a855f7]/5', '#a855f7]/80', 'rgba(168,85,247,0.3)', 'rgba(168,85,247,0.5)'],
  "yellow": ['#facc15', '#facc15]/10', '#facc15]/20', '#facc15]/5', '#facc15]/80', 'rgba(250,204,21,0.3)', 'rgba(250,204,21,0.5)'],
  "white": ['#ffffff', '#ffffff]/10', '#ffffff]/20', '#ffffff]/5', '#ffffff]/80', 'rgba(255,255,255,0.3)', 'rgba(255,255,255,0.5)']
};

const themeKeys = Object.keys(toColor);
const extensions = ['.tsx', '.ts', '.js', '.jsx', '.css', '.scss'];
const directories = ['./app', './components'];

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log('🎨 Доступные темы:');
themeKeys.forEach((key, index) => {
  console.log(`  ${index + 1}. ${key}`);
});

rl.question('\nВыбери ТЕКУЩУЮ тему (номер): ', (fromIndex) => {
  rl.question('Выбери НОВУЮ тему (номер): ', (toIndex) => {
    const fromColorKey = themeKeys[parseInt(fromIndex) - 1];
    const toColorKey = themeKeys[parseInt(toIndex) - 1];

    if (!fromColorKey || !toColorKey) {
      console.error('❌ Неверный выбор темы');
      rl.close();
      return;
    }

    const from = toColor[fromColorKey];
    const to = toColor[toColorKey];

    if (!from || !to || from.length !== to.length) {
      console.error('❌ Темы несовместимы или не найдены.');
      rl.close();
      return;
    }

    const replacements = from.map((color, i) => ({
      pattern: new RegExp(color.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'gi'),
      replacement: to[i]
    }));

    console.log(`\n🔁 Заменяем тему "${fromColorKey}" на "${toColorKey}"...\n`);

    directories.forEach(dir => walkDir(dir, replacements));
    rl.close();
  });
});

// 🔧 Замена в файле
function replaceInFile(filePath, replacements) {
  if (!fs.existsSync(filePath)) return;

  let content = fs.readFileSync(filePath, 'utf8');
  let modified = false;

  replacements.forEach(({ pattern, replacement }) => {
    if (pattern.test(content)) {
      content = content.replace(pattern, replacement);
      modified = true;
    }
  });

  if (modified) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`✔ Обновлено: ${filePath}`);
  }
}

// 🔁 Рекурсивный обход
function walkDir(dir, replacements) {
  fs.readdirSync(dir).forEach(file => {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      if (!['node_modules', '.git', '.next'].includes(file)) {
        walkDir(fullPath, replacements);
      }
    } else if (extensions.includes(path.extname(file))) {
      replaceInFile(fullPath, replacements);
    }
  });
}
