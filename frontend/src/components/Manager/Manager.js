import Stage from "../Stage/Stage"
import { createStage } from "../../AppHelpers"

const Manager = () => {

    return (
    <div>
        <Stage stage={createStage()} />
    </div>
    )
}

export default Manager