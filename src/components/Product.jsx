// import ipad_pro_image from "../assets/images/store-card-ipad-pro.jpeg"
import ipad_pro_image from "~img/store-card-ipad-pro.jpeg"

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


function Product(props) {
    const imgStyle = {
        height: "auto",
        width: "100%",
        borderRadius: "0.5rem",
    };
    return (
        <StyledProductContainer scale={1.05} transition="0.5s">
            <img style={imgStyle} src={ipad_pro_image} alt="iPad Pro" />
            <div className={styles.productTextContainer}>
                <div className={styles["product-title"]}>{props.title}</div>
                <div className={styles["product-detail"]}>{props.detail}</div>
            </div>
        </StyledProductContainer>
    );
}

// 导出供外部使用
export default Product;