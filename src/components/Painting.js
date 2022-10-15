// import Q11 from "./Error";
// console.log(Q11);

// const Painting = function ({ url = 'Q11', title, name, profileUrl, price, }) {
//     return (
//         <div>
//             <img src={url} alt={title} width="480" />
//             <h2>{title}</h2>
//             <p>
//                 Автор: <a href={profileUrl}>{name}</a>
//             </p>
//             <p>Цена: {price} грн</p>
//             <p>Описание</p>
//             <button type="button">Добавить в корзину</button>
//         </div>
//     );
// };

const Painting = function ({ data }) {
    return (
        <ul>
            {data.map(item => {
                return (
                    <li key={item.id}>
                        <img src={item.url} alt={item.title} width="480" />
                        <h2>{item.title}</h2>
                        <p>
                            Автор: <a href={item.profileUrl}>{item.name}</a>
                        </p>
                        <p>Цена: {item.price} грн</p>
                        <p>Описание</p>
                        <button type="button">Добавить в корзину</button>
                    </li>
                )
            })}
        </ul>
    );
};

export default Painting;