import './List.css'

export const List = (props) =>{

    return(
        <div className='list'>
            <label>{props.label}</label>
            <select value={props.value} onChange={event => props.inputAlterado(event.target.value)} required={props.mandatory}>
                <option value=""></option>
                {props.itens.map(item =><option key={item} value={item}>{item}</option>)}
            </select>
        </div>
    )
}
