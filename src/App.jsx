import PropType from "prop-types"
import Painting from "./components/Painting";
import data from "./components/data";



export default function App() {
    return (
        <>
            {[1, 2, 3, 4, 5,].map((el, index) => (
                <div key={index}>{el}</div>))}

            {data.map(data => (<Painting
                key={data.id}
                url={data.url}
                title={data.title}
                price={data.price}
                tag={data.author.tag}
                name={data.author.name}
                profileUrl={data.author.url}
            />))}

            {/* <Painting
                url={data[0].url}
                title={data[0].title}
                price={data[0].price}
                tag={data[0].author.tag}
                name={data[0].author.name}
                profileUrl={data[0].author.url}
            />*/}

            {/* <Painting
                data={data} /> */}
        </>
    );
};

data.PropType = {

}