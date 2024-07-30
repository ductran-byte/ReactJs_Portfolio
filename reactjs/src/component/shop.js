import "./main.css";
import "./scripts";
import myImage from "../img/pokemon_video_game-wallpaper-1920x1080.jpg";

function Shop() {
    return (
        <section className="portfolio" id="portfolio">
            <h1 className="heading">cửa hàng <span>của tôi</span></h1>

            <div className="box-container">
                {/* Thêm nút vào mỗi phần tử box */}
                <div className="box">
                    <img src={myImage} alt="Project1"/>
                    <button className="image-button">Xem thêm</button>
                </div>
                {/* ... (Các phần tử box còn lại tương tự) ... */}
            </div>
            <div className="box-container">
                {/* Thêm nút vào mỗi phần tử box */}
                <div className="box">
                    <img src={myImage} alt="Project1"/>
                    <button className="image-button">Xem thêm</button>
                </div>
                {/* ... (Các phần tử box còn lại tương tự) ... */}
            </div>
            <div className="box-container">
                {/* Thêm nút vào mỗi phần tử box */}
                <div className="box">
                    <img src={myImage} alt="Project1"/>
                    <button className="image-button">Xem thêm</button>
                </div>
                {/* ... (Các phần tử box còn lại tương tự) ... */}
            </div>
            <div className="box-container">
                {/* Thêm nút vào mỗi phần tử box */}
                <div className="box">
                    <img src={myImage} alt="Project1"/>
                    <button className="image-button">Xem thêm</button>
                </div>
                {/* ... (Các phần tử box còn lại tương tự) ... */}
            </div>
        </section>
    );
}

export default Shop;
