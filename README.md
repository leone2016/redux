<img src="https://ngrx.io/assets/images/badge.svg" width="50%" >

## Documentation 

[Doc - EN ](https://redux.js.org/)

[Doc - ES ](https://es.redux.js.org/)


# REDUX lifecycle

![NgRx lifecycle](https://ngrx.io/generated/images/guide/store/state-management-lifecycle.png
 )

# Install

[NgRx - store](https://ngrx.io/guide/store/install)

# Sección 2 Introducción 



**¿Qué es Redux?**

es un patron para el manejo de la información 
* Cuál es el estado de la aplicación?
* Cómo cambió la información ?
* Quién cambió alguna variable?
* Comó se encuentra determinada variable?
> ideas principales: m e m o r i z a r 

* Toda la data de la aplicación, se encuentra en una estructura previamente DEFINIDA
* Toda la información se encontrará almacenada en un único lugar llamado **STORE**
* El store **JAMAS** se modifica de forma directa
* Interacciones de usuario y/o código, dispara acciones que describe qué sucedió
* El valor actual de la información de la aplicación se llama estado - **STATE**
* Un nuevo estadp es creado, en base a la comunicación del viejo estado y una acción por una función llamada **REDUCER** 

¿Para qué sirve?

Que son las:

**Acciones** 
una acción es la única fuente de información que se envía por interacciones de usuario o del mismo programa.
Por lo general se busca que las acciones sean lo más simple posibles, las acciones únicamente tienen
dos propiedades lo que es el **type** que nos describe qué es lo que quiere hacer o cuál es la acción que
debe realizar y el **payload** que es opcional ya que no siempre nosotros vamos a tener que mandar información para realizar alguna acción.

**Reducers** no es más que una simple función que recibe únicamente dos argumentos y otra condición es que siempre debe de retornar un Estado que es el Estado.

    * OldState: Es el estado actual de la aplicación tal cual como se encuentra en este momento el Estado podría ser
                
                algo como lo que estamos viendo en pantalla que tiene un filtro para mostrar todas las tareas pendientes
                
                o las completadas o lo que sea y tiene una lista de todos o una lista de tareas que hacer.
                
                Y entre ellas debemos salvar el mundo y vencer a Thanos.
    * action La acción es un objeto plano que indica que hay que hacer como por ejemplo el que están viendo en pantalla
             
             el cual tiene por objetivo completar la tarea cuya posición índex sea el 1 o sea vencer a Thanos.
             
             Lo queremos convertir en Truc porque estamos diciéndole que es completar tarea.
             
             Como mencioné anteriormente las acciones buscan ser lo más simples posibles.
             
             Hay que tratar de no tener mucha lógica hay para que tengamos que trabajar lo menos posible.
             
             Una vez el reduce toma el viejo Estado y la acción produciría un nuevo Estado como el que están viendo
             
             ustedes en pantalla en el cual ya tiene la tarea completada de vencer a Thanos dentro Hablemos ahora

**State** 

          Hay ciertas reglas que el Estado debe tener como por ejemplo 
          
          * el state de sólo lectura 
          
          * nunca se mutará el estado de forma directa.
          
          * Hay funciones que están prohibidas de javascript como por ejemplo el Push o la manipulación directa del objeto
          
          Todos los objetos en JavaScript son pasados por referencia y si se modifica un objeto aunque ustedes hagan igual aciones y crean nuevas variables.
          
          Siempre se mantiene la referencia al objeto original y eso es lo que estamos tratando de prevenir que
          
          el Estado sea inmutable y que únicamente creemos nuevos estados.

**Store** 

El store es un objeto que tiene las siguientes responsabilidades.
          
Contiene el estado actual de la aplicación permite la lectura del Estado vía web, permite crear
          
un nuevo Estado cuando nosotros llamamos la función **Dispatch** y le mandamos una acción.
          
Permite notificar los cambios vía subscribe 
