# Aplicacionde consola

Este modulo listara el factorial de los n primeros números y creara una tablaa con esa lista factorial

## Pre requisitos

- Se requiere conexión a internet

## Uso

Ejecuta desde tu terminal el siguiente comando :

via https

    $ git clone https://github.com/choquesaurus/examenCL3AplicacionesWeb.git

via ssh

    $ git clone git@github.com:choquesaurus/examenCL3AplicacionesWeb.git
    

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

## Opciones
- [Listar lista factorial](#lista)
    - [limite de numeros](#LimitList)

- [Crear tabla](#tabla)
    - [limite de numeros](#LimitTable) 

## Autor

- Daniel Choquecahuana [Mi portafolio](choquesaurus.com)

## Licencia

MIT
