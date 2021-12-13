import React from 'react';

import classes from './Button.module.css';

const Button = (props) => {
  return (
    <buton
      className={classes.button}
      type={props.type || 'button'}
      onClick={props.onClick}
    >
      {props.children}
    </buton>
  );
};

export default Button;
