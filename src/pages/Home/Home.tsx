import { GiMagnifyingGlass } from "react-icons/gi"
import { BsArrowDownUp, BsFillGrid1X2Fill } from "react-icons/bs"
import { Card } from "../../components/CardHome/Card"
import styles from "./Home.module.scss"
import { useContext, useState } from "react"
import { MostrarFrutas, FrutaProps } from "../../contexts/MostrarFrutas"
import { SearchInput } from "../../components/SearchInput/SearchInput"
import { ModalOrdenar } from "../../components/ModalOrdenar/ModalOrdenar"

export default function Home() {

    const { fruits } = useContext(MostrarFrutas)
    const [toggleGrade, setToggleGrade] = useState(false)
    const [showModal, setShowModal] = useState(false)

    return (
        <main className={styles.main}>
            <SearchInput />
            <ModalOrdenar open={showModal} setShowModal={setShowModal} />
            <section>
                {fruits[0] ?
                    <>
                        <div>
                            <button onClick={() => { setShowModal(true) }}><BsArrowDownUp />ORDENAR</button>
                            <button onClick={()=>{setToggleGrade(!toggleGrade) }}><BsFillGrid1X2Fill />GRADE</button>
                        </div>
                        <div>
                            {fruits.map((fruta) => {
                                return <Card fruta={fruta} key={fruta.id} toggleGrade={toggleGrade}/>
                            })}
                        </div>
                    </>
                    : <p>Sem frutas!</p>

                }
            </section>

        </main>
    )
}