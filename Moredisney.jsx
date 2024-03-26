import Button from "./Button"
import './css/more.css'

const More = ()=>{
    return(
        <>
            <div className="emp">
                <h2>More from Disney</h2>
                <div className="spag">
                    <h3>Sign up to hear from disney news ad more</h3>
                    <Button brand="JOIN THE FAMILY" className="mybutton"/>
                </div>
            </div>
        </>
    )
}

export default More