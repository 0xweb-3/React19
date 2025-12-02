const MainLayout = ({header, content, footer}) => {
    return (<div>
        {header ?? <h1>默认标题</h1>}
        {content ?? <p>默认内容</p>}
        {footer ?? <p>默认页脚</p>}
    </div>)
}

export default MainLayout;
// 这个组件是一个简单的布局组件，它接收三个 props:header、content 和 footer。
// 如果没有传入这些props,它会使用默认的标题、内容和页脚。
