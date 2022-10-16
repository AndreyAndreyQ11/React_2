import Painting from "./components/Painting";
import data from "./components/data";


export default function App() {
    return (
        <>
            {/* <Painting
                url={data[0].url}
                title={data[0].title}
                price={data[0].price}
                tag={data[0].author.tag}
                name={data[0].author.name}
                profileUrl={data[0].author.url}
            />
            <Painting
                url={data[1].url}
                title={data[1].title}
                price={data[1].price}
                tag={data[1].author.tag}
                name={data[1].author.name}
                profileUrl={data[1].author.url}
            /> */}
            {/* {data.map(data => {
                <Painting
                    key={data.key}
                    url={data.url}
                    title={data.title}
                    price={data.price}
                    tag={data.author.tag}
                    name={data.author.name}
                    profileUrl={data.author.url}
                />
            })} */}
            <Painting
                data={data} />
        </>
    );
};

// export default 5;