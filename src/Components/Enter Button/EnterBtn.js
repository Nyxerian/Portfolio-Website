import { useHistory } from "react-router-dom"
import './EnterBtn.css'

export default function EnterBtn() {

    let history = useHistory()

    function handleClick() {
        history.push("/Home");
      }

    return(
        <button onClick={handleClick}>Enter</button>
    )
}