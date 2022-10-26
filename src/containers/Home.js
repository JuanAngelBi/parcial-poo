import ModalAdd from "../components/ModalAdd";
import Table from "../components/Table";
import TableEntradas from "../components/TablaEntradas";
import ModalAddExistencia from "../components/ModalAddExistencia";
import TableSalida from "../components/TablaSalida";
import ModalAddSalida from "../components/ModalAddSalida";
export default function Home() {


    return (
        <>
            <div className="bg-black text-center">
                <h2 className="text-white">Inventario de Productos</h2>
                <ModalAdd></ModalAdd>
                <Table></Table>
                <h2 className="text-white">Entradas</h2>
                <ModalAddExistencia></ModalAddExistencia>
                <TableEntradas></TableEntradas>
                <h2 className="text-white">Salidas</h2>
                <ModalAddSalida></ModalAddSalida>
                <TableSalida></TableSalida>
            </div>
        </>
    )
}