// import ipad_pro_image from "../assets/images/store-card-ipad-pro.jpeg"
import ipad_pro_image from "~img/store-card-ipad-pro.jpeg"

import styles from "./Product.module.css"
import styled from "styled-components";

const StyledProductContainer = styled.div`
  max-width: 28rem;
  position: relative;
  trasition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(${(props) => props.scale || 1});
    cursor: pointer;
  }
`;


function Product() {
    const imgStyle = {
        height: "auto",
        width: "100%",
        borderRadius: "0.5rem",
    };
    return (
        <StyledProductContainer scale={1.05}>  // 可以动态调整
            <img style={imgStyle} src={ipad_pro_image} alt="iPad Pro" />
            <div className={styles.productTextContainer}>
                <div className={styles["product-title"]}>iPad Pro</div>
                <div className={styles["product-detail"]}>磅礴的薄 RMB 8999 起</div>
            </div>
        </StyledProductContainer>
    );
}

// 导出供外部使用
export default Product;