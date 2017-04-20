# Node.js Debug Application

## Start debug mode
    Node.js will start debugger module and listening on port 5858 to receive debug command
        
    $ node --debug app.js      
    $ node --debug-brk app.js     # enter debug mode and break




## Debug in Chrome
    
### Install node-inspector
    $ npm install -g node-inspector

### Start node-inspector
    $ node-inspector

### Start app.js with debug mode
    $ node --inspect --debug-brk errorcode.js   

### Open the url in Chrome for debugging.

## Debug in VS Code
    Node Debug 2 is build-in extension of VS code.
    Add debug configuration in VS code
    * Click "debug" button -> Add Configuration -> select Node.js
        {
            "type": "node",
            "request": "attach",
            "name": "Attach to Port",
            "address": "localhost",
            "port": 9229
        }


    Start app in debug mode
    $ node --inspect --debug-brk errorcode.js

    Start VS code debugger with config "attach"