

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

import imgError from "./Error.jpg";

const Painting = function ({ data }) {

    return (
        <ul>
            {data.map(item => {
                const { id, url = imgError, title, price, author: { name: name }, author: { url: profileUrl, } } = item;

                return (
                    <li key={id}>
                        <img src={url} alt={title} width="480" />
                        <h2>{title}</h2>
                        <p>
                            Автор: <a href={profileUrl}>{name}</a>
                        </p>
                        <p>Цена: {price} грн</p>
                        <p>Описание</p>
                        <button type="button">Добавить в корзину</button>
                    </li>
                )
            })}
        </ul>
    );
};

export default Painting;