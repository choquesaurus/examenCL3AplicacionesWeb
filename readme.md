# Aplicacionde consola

Este modulo listara el factorial de los n primeros números y creara una tablaa con esa lista factorial
## Tabla de opciones
* [Listar lista factorial](#Lista)
    - [limite de numeros](#LimitList)

- [Crear tabla](#Tabla)
    - [limite de numeros](#LimitTable) 

## Pre requisitos

- Se requiere conexión a internet
- Instalar dependencias ejecutando el siguiente comando en su terminal
    
```console
    $ npm install
```        
    
## Uso

Ejecuta desde tu terminal el siguiente comando para clonar :

via https

    $ git clone https://github.com/choquesaurus/examenCL3AplicacionesWeb.git

via ssh

    $ git clone git@github.com:choquesaurus/examenCL3AplicacionesWeb.git
    
## Lista


#### LimitList
Ejecuta desde tu terminal el siguiente comando para listar numeros factoriales indicando un limite.

Necesitas indicar explicitamente el limite con el alias `-l ` o la bandera `--limite` agregando el numero

```console
    $ node index.js listar -l 7

```
or

```console
    $ node index.js listar --limite 7

```
## Tabla

#### LimitTable
Ejecuta desde tu terminal el siguiente comando para guardar en un archivo excel la lista de numeros factoriales indicando un limite.

Necesitas indicar explicitamente el limite con el alias `-l ` o  la bandera `--limite` agregando el numero

```console
    $ node index.js crear -l 7

```
or

```console
    $ node index.js crear --limite 7

```


## Autor

- Daniel Choquecahuana [Mi portafolio](choquesaurus.com)

## Licencia

MIT
