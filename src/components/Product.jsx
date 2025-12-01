// import ipad_pro_image from "../assets/images/store-card-ipad-pro.jpeg"
// import ipad_pro_image from "~img/store-card-ipad-pro.jpeg"

import styles from "./Product.module.css"
import styled from "styled-components";

const StyledProductTextContainer = styled.div`
    position: absolute;
    top: 1.5rem;
    padding-left: 1.5rem;
    padding-top: 2rem;
    color: ${(props) => props.$textColor || "white"};
    font-family: "Roboto", "Helvetica", "Arial", sans-serif;
`;

const StyledProductContainer = styled.div`
    max-width: 28rem;
    position: relative;
    // 时间控制也可以 
    transition: transform ${props => props.$transition || "0.1s"} ease-in-out;

    &:hover {
        transform: scale(${(props) => props.$scale || 1});
        cursor: pointer;
    }
`;

// 参数进行了es6的解包， scale设置默认值，
function Product({image, title, detail, scale = 1.05, onProduct, textColor}) {
    const imgStyle = {
        height: "auto",
        width: "100%",
        borderRadius: "0.5rem",
    };
    return (
        <StyledProductContainer $scale={scale} $transition="0.5s" onClick={() => {
            onProduct("title")
        }}>
            <img style={imgStyle} src={image} alt="iPad Pro"/>
            <div className={styles.productTextContainer}>
                {/*加$ 表示属性不会传递到dom中*/}
                <StyledProductTextContainer $textColor={textColor}>
                    <div className={styles["product-title"]}>{title}</div>
                    <div className={styles["product-detail"]}>{detail}</div>
                </StyledProductTextContainer>
            </div>
        </StyledProductContainer>
    );
}

// 导出供外部使用
export default Product;