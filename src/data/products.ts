import xboxSeriesXImg from '../assets/images/xbox-series-x.png';
import xboxSeriesSImg from '../assets/images/xbox-series-s.png';
import playstation5Img from '../assets/images/playstation-5.png';
import xboxOneXImg from '../assets/images/xbox-one-x.png';
import playstation4Pro from '../assets/images/ps4-pro.png';

const products = [
    {
        id: 0,
        name: "Xbox Series X",
        description: "O console mais poderoso já feito.",
        quantity: 5,
        height: 52,
        width: 25,
        length: 18,
        code: Math.floor(Math.random() * (999999999999 - 100000000000)) + 100000000000,
        category: [
            "Console",
            "Games"
        ],
        amount: 4699.00,
        acquisitionDate: "2021-05-26",
        image: xboxSeriesXImg,
    },
    {
        id: 1,
        name: "Xbox Series S",
        description: "O irmão menor do Series X, ideal para quem quer entrar na nova geração sem pagar muito.",
        quantity: 8,
        height: 34,
        width: 21,
        length: 9,
        code: Math.floor(Math.random() * (999999999999 - 100000000000)) + 100000000000,
        category: [
            "Console",
            "Games"
        ],
        amount: 2799.00,
        acquisitionDate: "2021-05-26",
        image: xboxSeriesSImg,
    },
    {
        id: 2,
        name: "Playstation 5",
        description: "O console com SSD mais rápido do mercado.",
        quantity: 2,
        height: 52,
        width: 25,
        length: 18,
        code: Math.floor(Math.random() * (999999999999 - 100000000000)) + 100000000000,
        category: [
            "Console",
            "Games"
        ],
        amount: 4899.00,
        acquisitionDate: "2021-05-26",
        image: playstation5Img,
    },
    {
        id: 3,
        name: "Xbox One X",
        description: "Aprimoração do Xbox One, jogue os jogos do seu Xbox One em 4k e com melhor desempenho.",
        quantity: 2,
        height: 34,
        width: 21,
        length: 9,
        code: Math.floor(Math.random() * (999999999999 - 100000000000)) + 100000000000,
        category: [
            "Console",
            "Games"
        ],
        amount: 3199.00,
        acquisitionDate: "2021-05-26",
        image: xboxOneXImg,
    },
    {
        id: 4,
        name: "Playstation 4 Pro",
        description: "Aprimração do Playstation 4, jogue os jogos do seu Playstation 4 em 4k e com melhor desempenho.",
        quantity: 2,
        height: 52,
        width: 25,
        length: 18,
        code: Math.floor(Math.random() * (999999999999 - 100000000000)) + 100000000000,
        category: [
            "Console",
            "Games"
        ],
        amount: 3299.00,
        acquisitionDate: "2021-05-26",
        image: playstation4Pro,
    },
]

export default products;