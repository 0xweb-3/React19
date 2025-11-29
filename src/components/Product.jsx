// import ipad_pro_image from "../assets/images/store-card-ipad-pro.jpeg"
import ipad_pro_image from "~img/store-card-ipad-pro.jpeg"

function Product() {
    return <div>
        <div>iPad pro</div>
        <div>产品说明</div>
        <img src={ipad_pro_image} alt="iPad pro"/>
    </div>;
}

// 导出供外部使用
export default Product;