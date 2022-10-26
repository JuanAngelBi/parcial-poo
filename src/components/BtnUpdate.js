import { useContext, useState } from "react"
import context from "../context/Context"

export default function BtnUpdate(props) {

    const {getItems,updateItem} = useContext(context)


    const [text,setText] = useState("")
    const [input,setInput] = useState({
        "descripcion":props.descripcion,
        "existenciasIniciales":props.existenciasIniciales

    })

    const handleChange = ({target:{name,value}}) => setInput({...input,[name]:value})

    const handleUpdate = async(e) =>{
        e.preventDefault()
        try {
            await updateItem(props.id,input.descripcion,input.existenciasIniciales)
            getItems()
        } catch (error) {
            setText(error)
            console.log(error)
        }
    }

    return (
        <>
            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target={"#modalActualizarExistencia"+props.id}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil" viewBox="0 0 16 16">
  <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"/>
</svg>
            </button>

            <div className="modal fade" id={"modalActualizarExistencia"+props.id} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Modal actualizar</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form onSubmit={handleUpdate}>
                                <input className="form-control my-2" name="descripcion" onChange={handleChange} defaultValue = {props.descripcion} placeholder="Descripcion"></input>
                                <input className="form-control my-2" name="existenciasIniciales" onChange={handleChange} defaultValue = {props.existenciasIniciales} placeholder="Existencias iniciales"></input>
                                <button className="btn btn-secondary" onClick={handleUpdate} type="submit">Actualizar</button>
                            </form>
                        </div>
                        <div className="modal-footer text center">
                            <h6>{text}</h6>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}