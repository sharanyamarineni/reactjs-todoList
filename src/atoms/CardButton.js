import React from 'react'
import Button from "@material-ui/core/Button";

function CardButton(props) {
    return (
        <Button variant={props.variant} color={props.color} onClick={props.onClick}  disabled={props.disabled} style={props.style}>{props.children}</Button>
    );

}
export default CardButton;