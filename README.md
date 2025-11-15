# Hernandez-Sanchez-Steven-Trabajo-Clase6
firebase

pasos
terminal
cd "lugar de la carpeta"
npx create-react-app "apellidosnombreclase#"
Y
cd apellidosnombreclase#
# Firebase
npm install -g firebase-tools
firebase login
firebase init hosting, luego se sigue estos pasos
--------------------------------------------
Entramos en el cmd como administrador y seguimos estos pasos
-------------------------------------------------
√ Are you ready to proceed? Yes

=== Project Setup

First, let's associate this project directory with a Firebase project.
You can create multiple project aliases by running firebase use --add,

√ Please select an option: Use an existing project
√ Select a default Firebase project for this directory: hernandez-sanchez (hernandez-sanchez)

=== Hosting Setup

Your public directory is the folder (relative to your project directory) that
will contain Hosting assets to be uploaded with firebase deploy. If you
have a build process for your assets, use your build's output directory.

√ What do you want to use as your public directory? build
√ Configure as a single-page app (rewrite all urls to /index.html)? Yes
√ Set up automatic builds and deploys with GitHub? No
+  Wrote build/index.html

+  Wrote configuration info to firebase.json
+  Wrote project information to .firebaserc

+  Firebase initialization complete!
-------------------------------------------------

firebase deploy  
para que se pueda ver este mensaje
(Firebase Hosting Setup Complete
You're seeing this because you've successfully setup Firebase Hosting. Now it's time to go build something extraordinary!)
luego le damos 
npm start y ya podemos usar el formulario 
