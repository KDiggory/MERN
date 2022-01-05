#NPM node package manager

Allows us to package our projects and code into executable directories. 
Allows us to import in public packages published to the NPM repo

Packages are code bases that have been 'built' supplied with any code needed to run functions and any external dependencies. 

NPM website
https://www.npmjs.com/

hosts the NPM projects

cd into the appropriate directory in the bash shell.
'npm init' 
--> walks you through initialising an npm project
package name - cant have spaces
version
description - can be left blank
entry point - should be (index.js)
test command - can be left empty
git repo - can be left empty
keywords - can be left empty
author -can be left empty
license - ISC
is this ok? - yes

need to use npm install in the shell first before running the script.

Other commands and tips for node

NPM/ node scripts we can use --> can access by typing npm run <script name>

useful --> "start": "node index.js" --> this runs the script 

some named scripts can run without specifying run:
restart
start
stop
test 
just type npm start/stop etc


//USEFUL//
If you were to clone down a repo, it wouldnt have the node modules you need to install node modules for dependencies.
--> use npm install
It looks at the package.json and sees what needs to be installed. 

To remove packages
use npm remove <package name>
