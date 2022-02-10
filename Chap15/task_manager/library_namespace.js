// create the myapp namespace and the nested namespace creator function
// let myapp = {};

// myapp.addNamespace = function (namespace) {
//   let currentName;
//   const parent = this;
//   const names = namespace.split(".");

//   for (const i in names) {
//     currentName = names[i];
//     parent[currentName] = parent[currentName] || {};
//     parent = parent[currentName];
//   }
//   return this;
// }.bind(myapp);

// add the nested namespaces the application will use
// myapp.addNamespace("tasklist").addNamespace("Task"); //chain any additional namespaces you need
