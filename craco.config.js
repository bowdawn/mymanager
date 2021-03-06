const CracoLessPlugin = require('craco-less');
const lessToJS = require('less-vars-to-js');
const fs = require('fs');
const path = require('path');

//By default, create-react-app will open a new browser tab every time it starts.
//This can be really annoying, especially if you set up the nodemon watcher.
//You can disable this behavior with an environment variable: BROWSER=none.
// Uncomment/comment code line below at developers preference

// process.env.BROWSER = 'none';

//custom helper method 1: takes object and parses it into file contents that declares all types to strings.
const parseTypeDeclarations = (object) => {
  return Object.keys(object)
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
};

//custom helper method 2: takes object and parses it into file contents that initializes all values as strings.
const parseVariableDeclarations = (object) => {
  return Object.entries(object)
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
};

//custom helper method 3: Allows less variables to be accessed in Typescript files
const globalizeLessFile = (
  lessFilePath,
  TypeDeclarationPath,
  VariableDeclarationPath
) => {
  //Step 1: parse the less files to js object
  const deserializedObject = lessToJS(
    fs.readFileSync(path.resolve(__dirname, lessFilePath), 'utf8')
  );
  //Step 2: parse the objecT keys into type declarations (if using Typescript)
  const objectTypes = parseTypeDeclarations(deserializedObject);
  //Step3: write parsed type declartations into files
  fs.writeFileSync(
    path.resolve(__dirname, TypeDeclarationPath),
    '//Auto Generated File: do not touch \n' + objectTypes,
    'utf8'
  );
  //Step4: parse js Objects into global variable declarations including Type as any to avoid Typescript conflict
  const objectInit = parseVariableDeclarations(deserializedObject);
  //Step5: write global variable declarations in files
  fs.writeFileSync(
    path.resolve(__dirname, VariableDeclarationPath),
    '//Auto Generated File: do not touch \n' + objectInit + 'export {};',
    'utf8'
  );
};

// to add a new globalized Less File accessible in Typescript that refreshes on edit,
// edit the package.json start script
// by add the lessfilepath to the list of files that nodemon watches.
const path1 = './src/assets/less/style/colors.less';
const path2 = './src/assets/@types/colors.d.ts';
const path3 = './src/assets/constants/global/colors.ts';
globalizeLessFile(path1, path2, path3);

const path4 = './src/assets/less/style/globals.less';
const path5 = './src/assets/@types/globals.d.ts';
const path6 = './src/assets/constants/global/globals.ts';
globalizeLessFile(path4, path5, path6);

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {},
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
