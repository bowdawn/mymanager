const CracoLessPlugin = require('craco-less');
const lessToJS = require('less-vars-to-js');
const fs = require('fs');
const path = require('path');

//By default, create-react-app will open a new browser tab every time it starts.
//This can be really annoying, especially if you set up the nodemon watcher.
//You can disable this behavior with an environment variable: BROWSER=none.
// Uncomment/comment code line below at developers preference

// process.env.BROWSER = 'none';

//Step 1: parse the less files to js object
const colors = lessToJS(
  fs.readFileSync(
    path.resolve(__dirname, './src/assets/constants/colors.less'),
    'utf8'
  )
);
const globals = lessToJS(
  fs.readFileSync(
    path.resolve(__dirname, './src/assets/constants/globals.less'),
    'utf8'
  )
);

//Step 2: parse the objecT keys into type declarations (if using Typescript)
const colorVarTypes = Object.keys(colors)
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

const globalVarTypes = Object.keys(globals)
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

//Step3: write parsed type declartations into files
fs.writeFileSync(
  path.resolve(__dirname, './src/assets/@types/colors.d.ts'),
  '//Auto Generated File: do not touch \n' + colorVarTypes,
  'utf8'
);

fs.writeFileSync(
  path.resolve(__dirname, './src/assets/@types/globals.d.ts'),
  '//Auto Generated File: do not touch \n' + globalVarTypes,
  'utf8'
);

//Step4: parse js Objects into global variable declarations including Type as any to avoid Typescript conflict
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

const globalInit = Object.entries(globals)
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

//Step5: write global variable declarations in files
fs.writeFileSync(
  path.resolve(__dirname, './src/assets/constants/colors.ts'),
  '//Auto Generated File: do not touch \n' + colorInit + 'export {};',
  'utf8'
);
fs.writeFileSync(
  path.resolve(__dirname, './src/assets/constants/globals.ts'),
  '//Auto Generated File: do not touch \n' + globalInit + 'export {};',
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
