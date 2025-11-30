// import ipad_pro_image from "../assets/images/store-card-ipad-pro.jpeg"
// import ipad_pro_image from "~img/store-card-ipad-pro.jpeg"

import styles from "./Product.module.css"
import styled from "styled-components";

const StyledProductContainer = styled.div`
    max-width: 28rem;
    position: relative;
    // 时间控制也可以 
    transition: transform ${props => props.transition || "0.1s"} ease-in-out;

    &:hover {
        transform: scale(${(props) => props.scale || 1});
        cursor: pointer;
    }
`;


// 参数进行了es6的解包， scale设置默认值，
function Product({image, title, detail, scale = 1.05, onProduct}) {
    const imgStyle = {
        height: "auto",
        width: "100%",
        borderRadius: "0.5rem",
    };
    return (
        <StyledProductContainer scale={scale} transition="0.5s" onClick={()=>{onProduct("title")}}>
            <img style={imgStyle} src={image} alt="iPad Pro"/>
            <div className={styles.productTextContainer}>
                <div className={styles["product-title"]}>{title}</div>
                <div className={styles["product-detail"]}>{detail}</div>
            </div>
        </StyledProductContainer>
    );
}

// 导出供外部使用
export default Product;