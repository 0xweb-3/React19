// import ipad_pro_image from "../assets/images/store-card-ipad-pro.jpeg"
import ipad_pro_image from "~img/store-card-ipad-pro.jpeg"

function Product() {
    const imgStyle = {
        height: "auto",
        width: "100%",
        borderRadius: "0.5rem",
    }

    return <div style={{maxWidth: "28rem", position: "relative"}}>
        <img src={ipad_pro_image} alt="iPad pro" style={imgStyle}/>

        <div className="product-text-container">
            <div className="product-title">iPad pro</div>
            <div className="product-detail">产品说明</div>
        </div>
    </div>;
}

// 导出供外部使用
export default Product;