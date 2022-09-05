# TestVagrantAssignment


Prerequisites are : VScode & npm installed on local machine. And even install different browsers like chrome safari or firefox on the machine. 

To clone this repo use below command in the git bash terminal. Make sure you open the git bash in the folder of your choice where 
you want to clone the repo.
    git clone "give the url for cloning over here"

Once the project is cloned, do install the dependencies. For installing dependencies follow below steps.
    Open the project in VScode. Open terminal & in command line of terminal type bellow command 
    npm install 
    This will add a new folder node-modules to the root. 

Now check the codecept.conf file. It is the runner file where all configurations for test execution are given. 

The folder structure is following POM model with BDD cucumber framework. Features files are in src/features folder, step files
in src/steps, page files in src/pages & Json body with details of players is placed in src/testdata folder. 

Kindly note i am using Macbook air m1 & version of npm is 8.3.1 & of VScode is 1.71.0
The framework designed should be able to execute automated tests under normal circumstances & and usual expected manner, where the control flow of execution will be moving from feature files to steps & steps to pages. 

I tried executing the feature file RCB.feature, which was having it steps implementation defined in RCBsteps.ts. 
The RCBsteps.ts was importing the class defined in RCBPage.ts & using the methods of the class inside each of its steps defination. 
The individual methods defined within the class in page file are having the main logic for verification of wicketkeeper & foreign players test cases. This methods are using JSON body in src/testdata folder as testdata.
But for this execution i faced below error. 
And hence i have directly added the code logic by tweaking it a little bit in RCBsteps file itself.
Kindly follow the comments in RCBsteps.ts itself to run the scripts in usual manner. 

****** Error on the terminal pasted below *******

Could not include object Step Definition from /Users/vaishnaviloke/Automation/src/steps/RCBsteps.ts from module '/Users/vaishnaviloke/Automation/src/steps/RCBsteps.ts'
Cannot use import statement outside a module
/Users/vaishnaviloke/Automation/src/steps/RCBsteps.ts:1
import { RCBTeamValidation } from "../pages/RCBPage";
^^^^^^

SyntaxError: Cannot use import statement outside a module
    at compileFunction (<anonymous>)
    at Object.compileFunction (node:vm:352:18)
    at wrapSafe (node:internal/modules/cjs/loader:1032:15)
    at Module._compile (node:internal/modules/cjs/loader:1067:27)
    at Object.Module._extensions..js (node:internal/modules/cjs/loader:1155:10)
    at Module.load (node:internal/modules/cjs/loader:981:32)
    at Function.Module._load (node:internal/modules/cjs/loader:822:12)
    at Module.require (node:internal/modules/cjs/loader:1005:19)
    at require (node:internal/modules/cjs/helpers:102:18)
    at loadSupportObject (/Users/vaishnaviloke/Automation/node_modules/codeceptjs/lib/container.js:338:17)

Error: 
    at loadSupportObject (/Users/vaishnaviloke/Automation/node_modules/codeceptjs/lib/container.js:385:11)
    at /Users/vaishnaviloke/Automation/node_modules/codeceptjs/lib/container.js:323:9
    at Array.forEach (<anonymous>)
    at loadGherkinSteps (/Users/vaishnaviloke/Automation/node_modules/codeceptjs/lib/container.js:322:29)
    at Function.create (/Users/vaishnaviloke/Automation/node_modules/codeceptjs/lib/container.js:48:25)
    at Codecept.init (/Users/vaishnaviloke/Automation/node_modules/codeceptjs/lib/codecept.js:56:15)
    at module.exports (/Users/vaishnaviloke/Automation/node_modules/codeceptjs/lib/command/run.js:24:14)
    at Command.<anonymous> (/Users/vaishnaviloke/Automation/node_modules/codeceptjs/bin/codecept.js:9:11)
    at Command.listener (/Users/vaishnaviloke/Automation/node_modules/commander/index.js:315:8)

****** Error on the terminal pasted above *******

