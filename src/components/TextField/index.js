import './TextField.css'
const TextField = (props)=>{
    const aoDigitar = (event) =>{
        props.inputAlterado(event.target.value)
    }
    return(
        <div className="text-field">
            <label>{props.label}</label>
            <input value={props.value} onChange={aoDigitar} required={props.mandatory} type='text' placeholder={props.placeholder}/>
        </div>
    )
}

export default TextField