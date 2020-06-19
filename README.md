# CypressAutomation

# Create project from scratch

1. Download Node.js (www.nodejs.org).
2. Download VSC (Visual studio code - code.visualstudio.com, for MacOS you also need to download Xcode from Apple store).
3. Create a remote repository on GitHub.
4. Cmd+Shift+P in VSC -> type ‘clone’ -> paste your gitHub repository link, select folder where you will keep your project on your machine.
5. Run in terminal ‘npm init’ command to generate package.json.
6. Run in terminal ‘npm install cypress —save-dev’.
7. Add all files in your local project to git (git add. Or git add _name of the file_) and commit them: ‘git commit -m “message text”’. Don't forget to save your changes in files before commiting (Cmd+S).
8. To run Cypress in your project you can use the next command: ‘node_modules/.bin/cypress open’. After you will see in your project folder 'cypress' with examples.
9. Create a test1.js file in cypress/integration/examples/.
10. Install Prettier: npm install --save-dev --save-exact prettier.
11. Create in root folder '.prettierrc.json' file and paste into it the next settings:
    {
    "semi": true,
    "singleQuote": true,
    "trailingComma": "all",
    "printWidth": 90
    }
12. To use the Prettier we have just installed from VSCode we need to install the Prettier VSCode extension:

Launch VS Code Quick Open (Ctrl+P)
Run the following command

'ext install esbenp.prettier-vscode'

13. To format ALL source files at once using Prettier CLI add the next script to your package.json file:
    "scripts": {
    "format": "prettier --write 'projectA/_.js' 'projectB/_.js'"
    }
    To run the command write in your terminal: npm run format

14. To avoid commiting not nice code install husky + lint-staged (copy and run the next command in terminal):

npm i -D husky lint-staged

15. Install ESLint: npm i -D eslint eslint-config-prettier

16. Add to your project '.eslintrc.json' file and insert into it:

{
"env": {
"es6": true
},
"extends": ["eslint:recommended", "prettier"]
}

17. To integrate ESLint in VSCode open Command Pallette with Command + P

and run

ext install dbaeumer.vscode-eslint

18. Install ESLint Prettier config and plugin to run prettier from ESLint:

npm i -D eslint-config-prettier eslint-plugin-prettier

19. To run ESLint use npm run eslint --fix **file name**

20. To use Use Prettier + ESLint + Cypress:

npm i -D eslint-plugin-cypress

21. Then extends .eslintrc.json settings:

{
"env": {
"cypress/globals": true
},
"extends": [
"eslint:recommended",
"plugin:prettier/recommended",
"plugin:cypress/recommended"
],
"plugins": ["cypress"]
}
