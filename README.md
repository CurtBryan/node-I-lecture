## Node

- Student can create an index.js file
- Student can run a javascript file using node
- Student can run a javascript file using nodemon
- Student can describe that node is the V8 javascript engine
- Student can require and use other files in node

## Servers

- Student can describe the role of servers in a client-server model
- Student can identify the parts of code that listen to external requests

## NPM

- Student can npm init
- Student can npm install
- Student can npm install --save
- Student can describe the role of a package.json file
- Student can describe the purpose of the node_modules folder
- Student can .gitignore node_modules

## Express

- Student can install and require express
- Student can start a basic express server by creating an app and listening on a port
- Student can write the handler function with the correct parameters req, res and next
- Student can access url parameters on req.params
- Student can set up an endpoint path to expect multiple params
- Student can use req.query
- Student can send data back with res.send and res.json
- Student can set a status code with res.status

---

**_Node:_**

the v8 javascript engine that runs outside the browser

**npm:**

Node Package Manager. Allows us to get packages of code from a server.

**express:**

Framework for building servers.

**package.json:**

package.json is a config file for our application, it will have instructions on dependencies to download and how node should run your application.

**.gitignore:**

tells git what files to not push to github.
files/directories to be ignored

-node-modules
-.env (password file)
-anything you dont want on github

**server:**
its a computer or device that provides a service to another computer.

in general for us:
a webserver is a program that can handle incoming requests, and responds accordingly.

manages access to a centralized resource

todays centralized resource: `data.json`

**client:**
a computer program that accesses a service made available by a server.

server instruction:
mkdir server

touch index.js .gitignore

npm init -y

add node_modules => .gitignore

npm i express

declare app variable set = express()

declare port: 4000+

app.listen => port
