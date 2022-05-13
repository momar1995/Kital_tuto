Angular:


ng new produit-commande-app

Do you want to enforce stricter type checking and stricter bundle budgets in the workspace? y

Would you like to add Angular routing? y

Which stylesheet format would you like to use? CSS


Installer bootstrap (dernière version) et jquery dans le projet:

npm install bootstrap jquery @types/jquery --save


les déclarer dans le fichier angular.json :

...
 
"styles": [
  "src/styles.css",
  "node_modules/bootstrap/dist/css/bootstrap.min.css"
],
"scripts": [
  "node_modules/jquery/dist/jquery.min.js",
  "node_modules/bootstrap/dist/js/bootstrap.min.js"
]
 
...


Déclarer le type "jquery" dans tsconfig.app.json dans le tableau "types"