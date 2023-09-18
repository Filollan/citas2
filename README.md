--- CREAR PROYECTO REACT --
Para crear un proyecto en React debemos hacer uso del comando _npm create vite@latest_
Esto nos solicitará ingresar la configuración del proyecto, es decir, el nombre, el framework y el lenguaje que se usará.

Posteriormente debemos hacer un cd al nombre del proyecto, npm install y por último npm run dev

-- INSTALAR Y CONFIGURAR TAILWINDCSS --
Para instalar tailwind hacemo uso del comando _npm i tailwindcss autoprefixer postcss_

Posteriormente escribimos en el terminal el comando _npx tailwindcss init -p_

Esto nos generará el archivo tailwind.config.css
Ahí actualizaremos el contenido del arreglo content por _content: ["index.html", "./src/\*\*/_.jsx"]\*

Por último en el index.css reemplazamos todo el contenido por
@tailwind base;
@tailwind components;
@tailwind utilities;