// 主程序入口
// 引入核心库
import React from 'react'; // 是最核心的库，主要用于用于定义和构建组件；
// react-dom/client: 是React 18以后才引入的APl,专门用来创建 React应用的入口。
import ReactDOM from 'react-dom/client'; // 负责将 React 组件渲染到页面上，就是把你写好的组件“挂”到网页上的某个位置；

// import NewArrival from './components/NewArrival';
import Product from '@components/NewArrival';

import "./main.css" // 引入css文件

// 导入数据，默认小写
import {NEW_ARRIVALS_LIST, OFFER_LIST} from "@/assets/data";
import ProductList from "./components/ProductList";
import NewArrival from "./components/NewArrival";
import Offer from "./components/Offer.jsx";


// 一个简单的组件
// 什么是组件
//你可以简单理解为一个“自定义的页面小模块”。它本质上就是一个函数，function,
// 它会返回一段结构，这段结构看起来像 HTML,实际上是React的一种特殊语法，叫做JSX。
// 所以，这也就是为什么我们的main 文件叫做 main.js
// function App() { // 组件名首字母得大写
//     return <h1>Hello, world!</h1>;
// }

function App() {
    // 单根节点原则
    return (<div>
        <ProductList
            title={"上新品，各个添新意。"}
            datalength={NEW_ARRIVALS_LIST.length}
        >
            {NEW_ARRIVALS_LIST.map((item) => (
                <NewArrival key={item.title} {...item} scale={1.05}/>
            ))}
        </ProductList>

        <ProductList
            title={"限时折扣，买到就是赚到。"}
            datalength={OFFER_LIST.length}
        >
            {OFFER_LIST.map((item) => (
                <Offer key={item.title} {...item} />
            ))}
        </ProductList>
    </div>)
}


// JSX 是JavaScript 的语法扩展，它让我们可以在 JavaScript 里直接写出类似HTML的结构

// 将组件渲染进去
const root = document.getElementById('root'); // 获取id 为root的DOM元素
const rootElement = ReactDOM.createRoot(root); //创建一个React根元素
// rootElement.render(<App/>); // 渲染App组件到根元素

// 开发环境用严格模式
rootElement.render(<React.StrictMode>
    {/*严格模式，帮助我们发现潜在问题*/}
    {/*React.StrictMode 是一个工具，用于帮助我们发现潜在的问题*/}
    {/*它不会渲染任何UI,只会激活额外的检查和警告*/}
    {/*它可以帮助我们发现不安全的生命周期方法、过时的API等问题*/}
    {/*在开发模式下，它会额外渲染一次组件，以帮助我们发现副作用*/}
    {/*在生产模式下，它不会额外渲染一次组件*/}
    {/*它不会影响生产模式下的性能*/}
    {/*它不会影响组件的行为*/}
    {/*它不会影响组件的性能*/}
    {/*它不会影响组件的生命周期*/}
    {/*它不会影响组件的状态*/}
    {/*它不会影响组件的属性*/}
    {/*它不会影响组件的事件*/}
    {/*它不会影响组件的上下文*/}
    <App/>
</React.StrictMode>)
