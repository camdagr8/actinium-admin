
/**
 * -----------------------------------------------------------------------------
 * Imports
 * -----------------------------------------------------------------------------
 */
import React from 'react';


/**
 * -----------------------------------------------------------------------------
 * Functional Component: LinearIcon
 * -----------------------------------------------------------------------------
 */
const LinearIcon = (props) => {
    if (typeof props['name'] !== 'undefined') {
        let classes = `lnr-${props.name} ${props.className}`;
        return (<i className={classes} style={props.style} />);
    } else {
        return null;
    }
};

export default LinearIcon;
