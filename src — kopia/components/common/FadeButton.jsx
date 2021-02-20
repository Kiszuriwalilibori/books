import * as React from 'react';

const FadeButton =(props)=>{
    return(
    // <Fade in = {props.visible}> 
    <button className ={props.cls} onClick ={props.fn}>{props.text}</button>
    // </Fade>
    )}

export default React.memo(FadeButton);