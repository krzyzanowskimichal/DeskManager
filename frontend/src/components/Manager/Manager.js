import Stage from "../Stage/Stage"
import { createStage } from "../../AppHelpers"
import { useState } from "react"
import { Plan } from "../Plan/Plan"
const Manager = () => {

    const [stage, setStage] = useState(createStage())


    return (
    <div>
        <Plan/>
    </div>
    )
}

export default Manager