import React from 'react'

function Alert(props) {
    
  return (
    props.alert && <div>
       <div className={`alert alert-${props.alert.text} alert-dismissible fade show`} role="alert">
  <strong>{props.alert.text}</strong> {props.alert.massage}
 
</div>
    </div>
  )
}

export default Alert
