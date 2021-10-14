//export const getQuote = () => fetch(process.env.REACT_APP_API).then((response) => response.json());
const getRandom = (max) => {
    return Math.floor(Math.random() * max);
}

export const getQuote = () => fetch(process.env.REACT_APP_API).then((response) => response.json()).then((data) => { return data[getRandom(data.length)] });