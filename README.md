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
        $ node --debug app.js   

    ### Open //127.0.0.1:8080/?port=5858 in Chrome and debug in Chrome DevTools

    Node.js Debugger use V8-Debug Protocol, Chrome DevTools use Chrome Debugging Protocol, node-inspector translate between them.

    Chrome Canary support v8_inspector and debug Node.js directly
        
## Debug in VS Code

