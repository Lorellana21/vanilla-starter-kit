# vanilla-starter-kit

## Getting started

En un mundo frontend dominado actualmente por los tres frameworks: *React*, *Angular* y *Vue*; es importante no perder las bases y ver que nada es magia y que todo se puede hacer con **VanillaJS**.

En este kit he montado el entorno necesario para comenzar un
proyecto sin frameworks, utilizando únicamente alguna librería como **Jest** para realizar el testing, junto con su soporte de **babel** y la librería que permite pruebas con DOM.

A fin de que este proyecto sea una SPA y para realizar todas las operaciones necesarias para su puesta en producción como minificado, tener refresco automático en desarrollo y otras tareas,
he incluido **webpack** como dependencia de desarrollo del proyecto.

Y para que todo el equipo de desarrollo haga uso de una misma guía de estilo, he incluido un *Linter de código*, pudiendo ejecutar `npm run lint` para descubrir las violaciones en las reglas de estilo y con el
modificador --fix solucionarlas de forma automática.

También he añadido al proyecto la dependencia de **husky**, la cual permite establecer una serie de hooks de Git que sirven para verificar que los mensajes de commit cumplen con el standard de *Conventional Commits*.

Con estos pasos ya tengo preparado el proyecto para poder implementar la solución que necesito. En caso de estar trabajando con Visual Studio Code, es altamente recomendable incluir la extensión de **Jest Runner** para poder ejecutar cualquier *test case* o *test suite* de forma aislada al resto.

En los últimos tiempos cuando hablamos de tests E2E en aplicaciones web, no podemos dejar de hablar de **Cypress** que se está convirtiendo en el estándar de facto, sustituyendo a Selenium en muchos proyectos a nivel empresarial. Es el momento de instalar la dependencia de Cypress en el proyecto.


Con Cypress también haré uso del API de **testing library**, tras instalar la dependencia. Además, Cypress realizará el cálculo de la cobertura y se mergeará con la cobertura de Jest.