import "./main.css"
import "./scripts"
function About() {
    return (
        <section className="about" id="about">
            <h1 className="heading"><span>about</span> me</h1>

            <div className="row">
                <div className="info">
                    <h3><span>name: </span>Trần Văn Đức</h3>
                    <h3><span>age: </span>26</h3>
                    <h3><span>qualification: </span>Fpt - Aptech</h3>
                    <h3><span>post: </span>Web Developer</h3>
                    <h3><span>language: </span>Vietnamese, english</h3>
                    <a target="_blank" href="./files/Cv.pdf">
                        <button className="btn">Download CV <i className="fas fa-download"></i></button>
                    </a>
                </div>

                <div className="counter">
                    <div className="box">
                        <span>6</span>
                        <h3>Month of experience</h3>
                    </div>

                    <div className="box">
                        <span>0</span>
                        <h3>projects completed</h3>
                    </div>

                    <div className="box">
                        <span>...</span>
                        <h3>happy clients</h3>
                    </div>


                </div>

            </div>

        </section>
    )
}

export default About;