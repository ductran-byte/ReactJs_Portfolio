import "./main.css"
import "./scripts"
function Education() {
    return (
        <section className="education" id="education">

            <h1 className="heading">my <span>education</span></h1>

            <div className="box-container">

                <div className="box">
                    <i className="fas fa-graduation-cap"></i>
                    <span>2016</span>
                    <h3>Graduated from Secondary School</h3>
                    <h4>Tao Son School</h4>
                    <p>I successfully completed all credits without any mistakes and achieved an A+ grade.</p>
                </div>

                <div className="box">
                    <i className="fas fa-graduation-cap"></i>
                    <span>2017</span>
                    <h3>higher secondary school certificate</h3>
                    <h4>Trung Học Phổ Thông Anh Sơn 2</h4>
                    <p>I graduated from Anh Son 2 High School, having successfully completed all subjects and credits
                        available
                        at the school, and achieved an average grade of 7.8.</p>
                </div>

                <div className="box">
                    <i className="fas fa-graduation-cap"></i>
                    <span>2021</span>
                    <h3>Bachelor of Law at</h3>
                    <h4>School of Law - Vietnam National University, Hanoi</h4>
                    <p>I graduated with a Good Degree from the School of Law - Vietnam National University, Hanoi. I
                        successfully completed all credits without any mistakes and achieved a B+ grade.</p>
                </div>


            </div>

        </section>
    )
}

export default Education;