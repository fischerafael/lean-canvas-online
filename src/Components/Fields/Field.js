import React, {useState} from 'react'

function Field({name}) {

    const [item, setItem] = useState('')
    const [itens, setItens] = useState([])

    function addNewItem(e) {
        e.preventDefault()
        if (item != '') {
            setItens([...itens, item])
            setItem('')
        } else {
            alert('Preencha o campo antes de adicioná-lo.')
        }        
    }

    function removeItem(item) {
        setItens(itens.filter(remaining => remaining != item))
    }
    
    return (
        <div className="field">
            <div className="header">
                <p>{name}</p>
                <form>
                    <input 
                        type="text"
                        placeholder="Novo item"  
                        value={item}
                        onChange={e => setItem(e.target.value)}                        
                    />
                    <button onClick={addNewItem}>Adicionar</button>
                </form>                
            </div>            
            <div className="fields">
                <ul>
                    {itens.map(item => (
                        <li key={item}>
                            <p>{item}</p>                                
                            <button className="delete" onClick={() => {removeItem(item)}}>x</button>
                        </li>
                    ))}                                                                                                            
                </ul>
            </div>
        </div>
    )
}

export default Field
