# FonetAPI

## Comandos previos
Si tiene instalado de manera correcto NodeJS, utilizar:
```
npm i
```
Esto necesario para instalar las dependencias del proyecto

## Importante
Es necesario crear el archivo .env en la ruta del proyecto y colocar la variable FONET_URL como en el archivo .env.example y en la variable del archivo .env colocar la url global de la prueba tecnica

## CLI
### Registro
Creacion de perfil con el correo, utilizar npm register y seguidamente el correo asociado
```
npm register cesardarizaleta@gmail.com
```

### Verificacion Token
Verificar el token con la key y secret que nos retorna el registro
```
npm run verify-token key secret
```
en el apartado de key colocaras la key devuelta en el register y el secret igualmente

### Estadisticas Finales
Visualizar las estadisticas finales que proporciona una vez completada la prueba
```
npm run stats tempToken phone testerName projectURL
```
En las variables colocas:
- tempToken: El token anteriormente retornado
- Phone: Numero personal
- TesterName: Nombre del Tester
- ProjectURL = Url del repositorio

## Dependencias
Utilice:
- Axios
- Buffer
- Dotenv

Axios para que la creacion de las peticiones sea mas facil manejarlas, buffer para la encryptacion del token de autenticacion y
por ultimo dotenv para cargar las variables de entorno, esta ultima no es tan necesario pero por temas de seguridad siempre es bueno utilizar y 
mas cuando por ejemplo este proyecto es publico