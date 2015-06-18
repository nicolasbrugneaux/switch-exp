/* jshint esnext: true */
import { expect } from 'chai';
import _switch from '../../src/switch-exp';

describe( 'switch tests', () =>
{
    it( 'take a first value', () =>
    {
        const a = 'test';
        const b = _switch( a )
            .case( 'test' )
                .then( 'value1' )
            .case( 'not-test' )
                .then( 'value2' )
            .default( 'defaultValue' );

        expect( b ).to.equal( 'value1' );
    } );

    it( 'take a second value', () =>
    {
        const a = 'test';
        const b = _switch( a )
            .case( 'not-test' )
                .then( 'value1' )
            .case( 'test' )
                .then( 'value2' )
            .default( 'defaultValue' );

        expect( b ).to.equal( 'value2' );
    } );

    it( 'take a default value', () =>
    {
        const a = 'anything else';
        const b = _switch( a )
            .case( 'not-test' )
                .then( 'value1' )
            .case( 'test' )
                .then( 'value2' )
            .default( 'defaultValue' );

        expect( b ).to.equal( 'defaultValue' );
    } );
} );
