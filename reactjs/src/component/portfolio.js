import "./main.css"
import "./scripts"
import myImage from "../img/pokemon_video_game-wallpaper-1920x1080.jpg";
function Portfolio(){
    return (
        <section class="portfolio" id="portfolio">

            <h1 class="heading">my <span>portfolio</span></h1>

            <div class="box-container">
                <div class="box">
                    <img src={myImage} alt="Project1"/>
                </div>
                <div class="box">
                    <img src={myImage} alt="Project2"/>
                </div>
                <div class="box">
                    <img src={myImage} alt="Project3"/>
                </div>
                <div class="box">
                    <img src={myImage} alt="Project4"/>
                </div>
                <div class="box">
                    <img src={myImage} alt="Project5"/>
                </div>
            </div>
        </section>
    )
}

export default Portfolio;