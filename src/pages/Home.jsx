// 导入数据，默认小写
import {NEW_ARRIVALS_LIST, OFFER_LIST} from "@/assets/data";
import ProductList from "@/components/ProductList";
import NewArrival from "@/components/NewArrival";
import Offer from "@/components/Offer.jsx";
import withSoldOut from "../HOCs/withSoldOut.jsx";
import withBanner from "../HOCs/withBanner.jsx";
import ImageHero from "../components/ImageHero";

// const NewArrivalWithSoldOutCheck = withSoldOut(NewArrival) // 添加售罄检查
const NewArrivalWithSoldOutCheck = withSoldOut((props) => {
    const {title} = props;
    return (<NewArrival {...props} title={"商品" + title}/>)
})

const NewArrivalWithBannerAndSoldOut = withBanner(NewArrivalWithSoldOutCheck, "手慢🈚️！")

const OfferWithSoldOutCheck = withSoldOut(Offer)

function Home() {
    // 单根节点原则
    return (<div>
        <ImageHero/>
        <ProductList
            title={"上新品，各个添新意。"}
            datalength={NEW_ARRIVALS_LIST.length}
        >
            {NEW_ARRIVALS_LIST.map((item) => (
                <NewArrivalWithBannerAndSoldOut key={item.title} {...item} scale={1.05}/>
            ))}
        </ProductList>

        <ProductList
            title={"限时折扣，买到就是赚到。"}
            datalength={OFFER_LIST.length}
        >
            {OFFER_LIST.map((item) => (
                <OfferWithSoldOutCheck key={item.title} {...item} />
            ))}
        </ProductList>
    </div>)
}


export default Home;
