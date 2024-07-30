import "./main.css"
import "./scripts"
function Home(){
    return (
        <section className="home" id="home">
            <h3>hi there !</h3>
            <h1>i'm <span>Trần Văn Đức</span></h1>
            <p>And I am a web application and software developer currently living in Vietnam. I have completed courses
                in C,
                HTML, CSS, and JavaScript. I am pursuing an international programmer training program at FPT Aptech,
                with my
                main focus and inspiration being web development. I am both motivated and goal-oriented, continuously
                experimenting with new technologies and techniques. I am very passionate about web development and
                strive to
                improve myself as a developer as well as contribute to the development community at large.</p>
            <a href="#about">
                <button className="btn">About Me <i className="fas fa-user"></i></button>
            </a>

        </section>
    )
}
export default Home; 