
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
    let classes = `lnr-${props.name} ${props.className}`;
    return (<i className={classes} style={props.style} />);
};

export default LinearIcon;
