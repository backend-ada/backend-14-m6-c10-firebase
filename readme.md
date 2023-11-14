<h1 align="center"> A SEGUIR CON ¡FIREBASE!</h1>
<h4 align="center"> Mejorando nuestro proyecto </h4>

En el último ejercicio, vimos cómo realizar las configuraciones básicas de **Firebase** y cómo manipular la **Firestore Database**:

-   Configuramos la conexión principal de **Firebase** con la herramienta _firebase-admin sdk_.
-   Probamos la conexión.
-   Creamos y obtuvimos los primeros documentos y colecciones.

<h4 align="center"> Nuevas funcionalidades </h4>

Los endpoints que tenemos programados hasta ahora son:

-   GET '/products' --> Obtener todos los productos.
-   POST '/products' --> Crear nuevo producto.

En esta oportunidad vamos a extender la funcionalidad de nuestra API, agregándole endpoints para completar todo el proceso de CRUD:

-   GET '/products' --> A este endpoints, tenemos que agregarle la posibilidad de usar Query Params para filtrar nuestras búsquedas y obtener resultados más minuciosos. Como por ejemplo, filtrar por categoría.
-   PATCH '/products/:id' --> Modifica los datos de un producto cuyo ID sea el indicado en la URI.
-   DELETE '/products/:id' --> Elimina un producto cuyo ID sea el indicado en la URI.

Además:

-   Agregar a la entidad 'Product', el atributo _'category'_ cuyos valores pueden ser **SOLAMENTE**: _'beauty'_, _'gaming'_, _'sports'_ y _'electronics'_. Todos en formato **string**.
-   Todos los datos ingresantes tienen que estar validados con ZOD.
-   Iniciar la APP de Express en un módulo dedicado.
-   Manejar los errores referentes a rutas mal indicadas o que apuntan a recursos inexistentes haciendo uso del router de Express. Investigar en la documentación de Express cómo hacer para manejar los errores que ocurren al usar un método no permitido a una ruta particular, es decir, si quiero hacer un **PUT** a _'/products'_ la API me debería responder con un código de estado 405 **METHOD NOT ALLOWED**.
-   Armar una colección en Postman con todas las solicitudes bien catalogadas y descriptas, cosa de ir dándole forma a la documentación.
-   TESTEAR BIEN LA API A CADA NUEVA MODIFICACIÓN QUE LE HACEMOS!
