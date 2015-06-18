/* jshint esnext: true */
const switchExp = ( thing, value, resolved ) =>
{
    const _thisSwitch = switchExp.bind( null, thing );
    let _resolved = !!resolved;

    return {
        case( match )
        {

            return {
                then( newValue )
                {
                    let _value = value;

                    if ( match === thing )
                    {
                        _resolved = true;
                        _value = newValue;
                    }

                    return _thisSwitch( _value, _resolved );
                }
            };
        },
        default( defaultValue )
        {
            return _resolved ? value : defaultValue;
        }
    };
};

export default switchExp;
