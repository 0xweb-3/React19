import React from 'react'; // 是最核心的库，主要用于用于定义和构建组件；
import Product from '@components/Product';


function ProductList({data}) {
    // 单根节点原则
    return (<div style={{
        display: 'grid', justifyItems: 'center', rowGap: "3rem"
    }}>
        <div style={{display: 'flex', justifyContent: 'center'}}>
            <h1 style={{
                fontWeight: "800", backgroundImage: "url('src/assets/lines.png')", backgroundPosition: "center",
            }}>上新品，各个添新意</h1>
        </div>
        {/*必须使用map*/}
        {data.map((item) => (<Product {...item} key={item.title} />))}
    </div>)
}

export default ProductList;
