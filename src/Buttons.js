import React from 'react';





function Buttons (props) {
     return(
<button
 id ={props.id} 
 onClick = {props.onClick}
>
  {props.name}
  </button>

)
}
export default Buttons;


