import React from 'react'; // 是最核心的库，主要用于用于定义和构建组件；
import Product from '@components/Product';


function ProductList({data}) {
    const isReleased = new Date() <= new Date("2199-01-01");
    if (!isReleased) {
        return (<div>新产品发布日期：2199-01-01，请耐心等待</div>)
    }

    let content;
    if (data.length > 0) {
        content = (
            <div style={{display: 'grid', justifyItems: 'center', rowGap: "3rem"}}>
                <div style={{display: 'flex', justifyContent: 'center'}}>
                    <h1 style={{
                        fontWeight: "800", backgroundImage: "url('src/assets/lines.png')", backgroundPosition: "center",
                    }}>上新品，各个添新意</h1>
                </div>
                {/*必须使用map*/}
                {data.map((item) => (<Product {...item} key={item.title}/>))}
            </div>
        )
    } else {
        content = (
            <div>没有新品</div>
        )
    }

    // 单根节点原则
    return content;
}

export default ProductList;
