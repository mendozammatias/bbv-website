## Website SPA [![pipeline status](https://gitlab.com/BlackBoxVision/blackbox-vision.tech/website/badges/master/pipeline.svg)](https://gitlab.com/BlackBoxVision/blackbox-vision.tech/website/commits/master)

Repositorio con el código del sitio web de BlackBox Vision https://www.blackbox-vision.tech

### Correr el Proyecto

Para poder correr el proyecto tenés que hacer lo siguiente:

- `npm i`
- `npm start`

Si todo sale bien, debería levantarse un server en `https://localhost:8000`. Además de eso, se levantará una instancia de GraphiQL en `http://localhost:8000/___graphql`.

### Probar un Build Productivo

Para poder probar un build productivo del proyecto en forma local tenés que hacer lo siguiente:

- `npm i`
- `npm run build`
- `npm run serve`

Si todo sale bien, debería levantarse un server en `https://localhost:9000`. Este server va a levantar los archivos estáticos generados por `gatsby`.

### Plugins Útiles

Estos plugins pueden ayudar a mejorar la `DX`. Separamos los plugins por IDE:

- VS Code
- WebStorm
