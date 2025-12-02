import styles from './withSoldOut.module.css';

function withSoldOut(WrappedComponent) {
    // 返回一个新的组件函数
    return ({soldOut, ...props}) => {
        return soldOut ? <div className={styles.grayOverlay}><WrappedComponent {...props} /></div> : (
            <WrappedComponent {...props} />)
    };
}

// 通常以withXXX开头，表示带有某种功能

export default withSoldOut;