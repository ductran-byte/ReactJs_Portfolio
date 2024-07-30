import "./main.css"
import "./scripts"
import  myImage from "../img/scroll-top-img.png";
function Back(){
    return(
        <>
        <a href="#home" class="top">
            <img src={myImage} alt="scroll top img"/>
        </a>
        </>
    )
}
export default Back;
