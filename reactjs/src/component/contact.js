import "./main.css";
import "./scripts";

function Contact() {
    return (
        <section className="contact" id="contact">
            <h1 className="heading"><span>contact</span> me</h1>
            <div className="row">
                <div className="content">
                    <h3 className="title">contact info</h3>
                    <div className="info">
                        <h3>
                            <a href="mailto:Ductran.byte@gmail.com" style={{ textTransform: "none", color: "#fff" }}>
                                <i className="fas fa-envelope"></i> Ductran.byte@gmail.com
                            </a>
                        </h3>
                        <h3>
                            <a href="tel:+84931353598" style={{ textTransform: "none", color: "#fff" }}>
                                <i className="fas fa-phone-alt"></i> +84931353598
                            </a>
                        </h3>
                        <h3><i className="fas fa-map-marker-alt"></i> Ha Noi, VietNam</h3>
                    </div>
                </div>

                <form action="#" method="post">
                    <input type="text" name="name" className="box" placeholder="Name" />
                    <input type="text" name="email" className="box" placeholder="Email" />
                    <input type="text" name="project" className="box" placeholder="Project" />
                    <textarea name="" id="" cols="30" rows="10" className="box message" placeholder="message"></textarea>
                    <button type="submit" className="btn"> send <i className="fas fa-paper-plane"></i></button>
                </form>
            </div>
        </section>
    );
}

export default Contact;

