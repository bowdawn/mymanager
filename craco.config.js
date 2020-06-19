const CracoLessPlugin = require('craco-less');
const lessToJS = require('less-vars-to-js');
const fs = require('fs');
const path = require('path');

//By default, create-react-app will open a new browser tab every time it starts.
//This can be really annoying, especially if you set up the nodemon watcher.
//You can disable this behavior with an environment variable: BROWSER=none.
// Uncomment/comment code line below at developers preference

// process.env.BROWSER = 'none';

const colors = lessToJS(
  fs.readFileSync(
    path.resolve(__dirname, './src/assets/constants/colors.less'),
    'utf8'
  )
);

const globalVarTypes = Object.keys(colors)
  .map((key) => {
    let camelCaseKey = key
      .split('@')
      .join('')
      .split('-')
      .map((keyword, index) => {
        if (index !== 0) {
          return keyword.charAt(0).toUpperCase() + keyword.slice(1);
        } else {
          return keyword;
        }
      })
      .join('');
    return `declare var ${camelCaseKey}: string;\n`;
  })
  .join('');

fs.writeFileSync(
  path.resolve(__dirname, './src/@types/globals.d.ts'),
  globalVarTypes,
  'utf8'
);

const colorInit = Object.entries(colors)
  .map((item) => {
    let key = item[0];
    let value = item[1];
    let camelCaseKey = key
      .split('@')
      .join('')
      .split('-')
      .map((keyword, index) => {
        if (index !== 0) {
          return keyword.charAt(0).toUpperCase() + keyword.slice(1);
        } else {
          return keyword;
        }
      })
      .join('');
    return `(global as any)["${camelCaseKey}"] = "${value}";\n`;
  })
  .join('');

fs.writeFileSync(
  path.resolve(__dirname, './src/assets/constants/colors.ts'),
  '//Auto Generated File: do not touch \n' + colorInit + 'export {};',
  'utf8'
);

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: colors,
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
