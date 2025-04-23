const fs = require('fs');
const path = require('path');
const readline = require('readline');

// 🎨 Доступные цвета на выбор
const toColorList = ['#00ff9d', '#a855f7', '#facc15', '#ffffff', '#3b82f6'];

// 📦 Целевые файлы
const files = [
  './components/navbar.tsx',
  './components/footer.tsx'
];

// 🔍 Ищем все классы вида [#hex] включая модификаторы (например /80)
const colorPattern = /(?<full>(?<!bg)(?<prefix>\w*[-:]?)\[#(?:[0-9a-fA-F]{3,8})\](\/\d{1,3})?)/g;

// 🧠 Выбор цвета
function askColorChoice() {
  console.log('🎨 Выбери цвет для замены:\n');
  toColorList.forEach((color, index) => {
    console.log(`  ${index + 1}. ${color}`);
  });

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  rl.question('\nВведи номер цвета: ', (answer) => {
    const index = parseInt(answer) - 1;
    if (!toColorList[index]) {
      console.log('❌ Неверный выбор.');
      rl.close();
      return;
    }

    const selectedColor = toColorList[index];
    console.log(`\n🚀 Заменяем цвета на: ${selectedColor} (кроме первого в <footer>)\n`);
    replaceColorsInFiles(selectedColor);
    rl.close();
  });
}

// 🧼 Замена цвета, пропуская 1-е вхождение в <footer>
function replaceColorsInFiles(toColor) {
  files.forEach(file => {
    if (!fs.existsSync(file)) {
      console.warn(`⚠ Файл не найден: ${file}`);
      return;
    }

    let content = fs.readFileSync(file, 'utf8');
    const lines = content.split('\n');
    let inFooter = false;
    let footerColorSkipped = false;

    const modifiedLines = lines.map((line) => {
        // Вошли в <footer>
        if (line.includes('<footer')) {
          inFooter = true;
          footerColorSkipped = false;
        }
      
        let modifiedLine = line;
      
        // Если в теге <footer> и есть цвет
        if (inFooter) {
          const matches = [...line.matchAll(/\[#(?:[0-9a-fA-F]{3,8})\](\/\d{1,3})?/g)];
          if (matches.length > 0) {
            // Пропускаем ТОЛЬКО первое вхождение, остальные заменяем
            let replacedCount = 0;
            modifiedLine = modifiedLine.replace(/\[#(?:[0-9a-fA-F]{3,8})\](\/\d{1,3})?/g, (match) => {
              if (!footerColorSkipped) {
                footerColorSkipped = true;
                return match; // оставить первый
              } else {
                return `[${toColor}]`; // заменить последующие
              }
            });
          }
          return modifiedLine;
        }
      
        // Все остальные строки — обычная замена
        return modifiedLine.replace(colorPattern, (_, full, prefix, suffix) => {
          return `${prefix}[${toColor}]${suffix || ''}`;
        });
      });
      

    fs.writeFileSync(file, modifiedLines.join('\n'), 'utf8');
    console.log(`✔ Цвета обновлены в ${file}`);
  });
}

// ▶ Запуск
askColorChoice();
