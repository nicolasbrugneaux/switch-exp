# Switch expressions

Switch as an expression in Javascript, inspired by @FGRibreau's [https://github.com/FGRibreau/if-exp](https://github.com/FGRibreau/if-exp).

## Install

```
npm install switch-exp
```

## Usage

```js
import _switch from 'switch-exp';

const a = _switch( thing )
    .case( condition1 )
        .then( 'value1' )
    .case( condition2 )
        .then( 'value2' )
    .default( 'defaultValue' );
```
