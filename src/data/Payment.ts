import {IPayment} from "../types";


export const payment: IPayment[] = [
    {
        id: 0,
        image: 'https://sun9-20.userapi.com/impg/GDgkfybsGkLGmd7WDhXzDji7JEsUBc-LrXs9Tg/-mfuEEtPHmY.jpg?size=1536x2048&quality=96&sign=a0fd2c6eab669f914576fd72926391f8&type=album',
        location: "Доставка по Минску",
        subtitle: 'До подъезда',
        delivery: '5 BYN',
        payment: 'Наличными курьеру'
    }, {
        id: 1,
        image: 'https://sun9-20.userapi.com/impg/GDgkfybsGkLGmd7WDhXzDji7JEsUBc-LrXs9Tg/-mfuEEtPHmY.jpg?size=1536x2048&quality=96&sign=a0fd2c6eab669f914576fd72926391f8&type=album',
        location: "Доставка по Беларуси",
        subtitle: 'Отправка "Белпочта" или "Европочта" наложенным платёжом',
        delivery: '5-6 BYN',
        payment: 'На почте при получении'
    }, {
        id: 2,
        image: 'https://sun9-20.userapi.com/impg/GDgkfybsGkLGmd7WDhXzDji7JEsUBc-LrXs9Tg/-mfuEEtPHmY.jpg?size=1536x2048&quality=96&sign=a0fd2c6eab669f914576fd72926391f8&type=album',
        location: "Доставка по всему миру",
        subtitle: 'По предоплате',
        delivery: 'Договорная',
        payment: 'На почте при получении'
    }
]