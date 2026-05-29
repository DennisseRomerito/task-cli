# task-cli

Un gestor de tareas, completo, para usarlo desde la terminal

## 1. Pasos para inicializar la estructura y proyecto

## 1.1. Inicializar nuestro proyecto

```shell
# Inicializar con wizard
npm init
```


## 1.2. Instalar typescript

```shell
# Agregarlo como dependencia de desarrollo
npm install -D typescript
```

## COMENTARIOS
"strict": true, // para que no use any
"rootDir": "./src" //  
outDir dónde queremos que viva la compilación, donde se crean acrhivos .js. Se generan toda lo compilación de archivos .ts a .js
se puede ejecutar código js con node ./dist/index.js
y para ts es npx tsx ./src/index.ts
npx - Forma de usar paquetes sin instalarlo en nuestro proyecto
tsx paquete que nos permite ejecutar archivos ts