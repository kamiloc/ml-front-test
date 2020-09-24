## Test Práctico - Frontend
El proyecto se compone de dos sub-proyectos: cliente y servidor, cada uno es un proyecto independiente de Node *create-react-app* y *express-js* respectivamente, para correr el proyecto completo siga estas breves instrucciones:

### Instalación
Se debe instalar dependencias `$ npm install` ó `$ yarn` en cada uno de los sub-proyectos.

### Construcción del cliente
Dentro del proyecto `~/client/` correr el comando *build* usando `$ npm run build` ó `$ yarn build`. Este comando consutruye el cliente usando los scripts de *create-react-app* y luego crea el directorio `~/server/public/`.

### Servidor completo
Dentro del proyecto `~/server/` correr el script *start* usando `$ npm run start` ó `$ yarn start`. Esto pondra en marcar el servidor local el cuál estará disponible en [http://localhost:8000](http://localhost:8000) recibiendo las peticiones en el *path* `/api` y sirviendo el cliente.

> Autor: Cristian Barreto - 2020