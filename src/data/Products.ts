import {IProduct} from "../types";
import imageToAdd1 from '../assets/shop/AmanitaMuscariaPowder.png'
import imageToAdd2 from '../assets/shop/AmanitaPantherinaPowder.png'
import imageToAdd3 from '../assets/shop/HericiumErinaceusPowder.png'
import imageToAdd4 from '../assets/shop/AmanitaMuscariaCapsules.png'
import imageToAdd5 from '../assets/shop/AmanitaMixCapsules.png'
import imageToAdd6 from '../assets/shop/AmanitaPantherinaCapsules.png'
import imageToAdd7 from '../assets/shop/HericiumErinaceusCapsules.png'
import imageToAdd8 from '../assets/shop/CordycepsCapsules.png'
import imageToAdd9 from '../assets/shop/AmanitaMuscariaHats.png'
import imageToAdd10 from '../assets/shop/AmanitaMuscariaTea.png'
import imageToAdd11 from '../assets/shop/CaleaZacatechichiTea.png'
import imageToAdd12 from '../assets/shop/Ointment.png'
import imageToAdd13 from '../assets/shop/AmanitaMuscariaTincture.png'

export const products: IProduct[] = [
    {
        _id: '1',
        imagePath: imageToAdd1,
        name: 'Мухомор красный',
        coefficient: [
            {
                id: 1,
                price: 1,
                coff: [
                    {
                        id: 1,
                        coefficient: 1
                    }, {
                        id: 2,
                        coefficient: 1
                    }, {
                        id: 3,
                        coefficient: 1
                    }
                ]
            }
        ],
        price: [
            {
                id: 1,
                count: 30,
            }, {
                id: 2,
                count: 50,
            }, {
                id: 3,
                count: 100,
            }],
        form: 1,
        title: 'Помогает уснуть, укрепляет имунитет, снимает напряжение, увеличивает силу. Теперь в капсулах.',
        text: 'Собирались в чистых лесах Беларуси. Наш мухомор сохраняет максимальное количество полезных свойств. Сушка до 45 градусов. 2 месяца ферментации в вакууме без поступления воздуха. Капсулы делаются только из лучший шляпок мухомора.',
        type: 'Порошок',
    },
    {
        _id: '2',
        imagePath: imageToAdd2,
        name: 'Мухомор пантерный',
        coefficient: [
            {
                id: 1,
                price: 1,
                coff: [
                    {
                        id: 1,
                        coefficient: 3
                    }, {
                        id: 2,
                        coefficient: 3
                    }, {
                        id: 3,
                        coefficient: 3
                    }
                ]
            }
        ],
        price: [
            {
                id: 1,
                count: 10,
            }, {
                id: 2,
                count: 20,
            }, {
                id: 3,
                count: 50,
            }],
        form: 1,
        title: 'Повышает интеллектуальные способности. Природный ноотроп.',
        text: 'Собирались в чистых лесах Беларуси. Наш мухомор сохраняет максимальное количество полезных свойств. Сушка до 45 градусов. 2 месяца ферментации в вакууме без поступления воздуха. Капсулы делаются только из лучший шляпок мухомора.',
        type: 'Порошок',
    },
    {
        _id: '3',
        imagePath: imageToAdd3,
        name: 'Ежовик гребенчатый',
        coefficient: [
            {
                id: 1,
                price: 1,
                coff: [
                    {
                        id: 1,
                        coefficient: 0.3
                    }, {
                        id: 2,
                        coefficient: 0.3333333333333333
                    }, {
                        id: 3,
                        coefficient: 0.2857142857142857
                    }
                ]
            }
        ],
        price: [
            {
                id: 1,
                count: 100,
            }, {
                id: 2,
                count: 150,
            }, {
                id: 3,
                count: 350,
            }],
        form: 1,
        title: 'Мицелий(молотый)',
        text: 'Собирались в чистых лесах Беларуси. Наш мухомор сохраняет максимальное количество полезных свойств. Сушка до 45 градусов. 2 месяца ферментации в вакууме без поступления воздуха. Капсулы делаются только из лучший шляпок мухомора.',
        type: 'Порошок',
    },
    {
        _id: '4',
        imagePath: imageToAdd4,
        name: 'Мухомор красный',
        coefficient: [
            {
                id: 1,
                price: 0.35,
                coff: [
                    {
                        id: 1,
                        coefficient: 0.34
                    },
                    {
                        id: 2,
                        coefficient: 0.2540322580645161
                    }, {
                        id: 3,
                        coefficient: 0.209
                    }, {
                        id: 4,
                        coefficient: 0.21875
                    }
                ]
            },
            {
                id: 2,
                price: 0.5,
                coff: [
                    {
                        id: 1,
                        coefficient: 0.75
                    }, {
                        id: 2,
                        coefficient: 0.4838709677419355
                    }, {
                        id: 3,
                        coefficient: 0.45
                    }, {
                        id: 4,
                        coefficient: 0.4583333333333333
                    }
                ]
            }
        ],
        price: [
            {
                id: 1,
                count: 30,
            }, {
                id: 2,
                count: 62,

            }, {
                id: 3,
                count: 100,
            },
            {
                id: 4,
                count: 120,
            }
        ],
        form: 2,
        title: 'в веганских капсулах',
        text: 'Собирались в чистых лесах Беларуси. Наш мухомор сохраняет максимальное количество полезных свойств. Сушка до 45 градусов. 2 месяца ферментации в вакууме без поступления воздуха. Капсулы делаются только из лучший шляпок мухомора.',
        type: 'Капсулы',
    },
    {
        _id: '5',
        imagePath: imageToAdd5,
        name: 'AMANITA MIX',
        coefficient: [
            {
                id: 1,
                price: 1,
                coff: [
                    {
                        id: 1,
                        coefficient: 1.5
                    }, {
                        id: 2,
                        coefficient: 1.25
                    }, {
                        id: 3,
                        coefficient: 1.05
                    }
                ]
            }
        ],
        price: [
            {
                id: 1,
                count: 30,
            }, {
                id: 2,
                count: 60,

            }, {
                id: 3,
                count: 100,
            }
        ],
        form: 3,
        title: 'мухомора красного(75%)/пантерного(25%) 1/4',
        text: 'Собирались в чистых лесах Беларуси. Наш мухомор сохраняет максимальное количество полезных свойств. Сушка до 45 градусов. 2 месяца ферментации в вакууме без поступления воздуха. Капсулы делаются только из лучший шляпок мухомора.',
        type: 'Капсулы',
    },
    {
        _id: '6',
        imagePath: imageToAdd6,
        name: 'Мухомор пантерный',
        price: [
            {
                id: 1,
                count: 30,
            }, {
                id: 2,
                count: 60,

            }, {
                id: 3,
                count: 100,
            }
        ],
        coefficient: [
            {
                id: 1,
                price: 0.3,
                coff: [
                    {
                        id: 1,
                        coefficient: 0.4
                    },
                    {
                        id: 2,
                        coefficient: 0.4
                    }, {
                        id: 3,
                        coefficient: 0.36
                    },
                ]
            },
            {
                id: 2,
                price: 0.5,
                coff: [
                    {
                        id: 1,
                        coefficient: 1.083333333333333
                    }, {
                        id: 2,
                        coefficient: 1
                    }, {
                        id: 3,
                        coefficient: 0.9
                    }
                ]
            }
        ],
        form: 2,
        title: 'в веганских капсулах',
        text: 'Собирались в чистых лесах Беларуси. Наш мухомор сохраняет максимальное количество полезных свойств. Сушка до 45 градусов. 2 месяца ферментации в вакууме без поступления воздуха. Капсулы делаются только из лучший шляпок мухомора.',
        type: 'Капсулы',
    },
    {
        _id: '7',
        imagePath: imageToAdd7,
        name: 'Зерномицелий ежовика',
        coefficient: [
            {
                id: 1,
                price: 0.95,
                coff: [
                    {
                        id: 1,
                        coefficient: 0.6333333333333333
                    }, {
                        id: 2,
                        coefficient: 0.475
                    }
                ]
            }
        ],
        price: [
            {
                id: 1,
                count: 60,
            }, {
                id: 2,
                count: 100,
            }],
        form: 2,
        title: 'в веганских капсулах',
        text: 'Собирались в чистых лесах Беларуси. Наш мухомор сохраняет максимальное количество полезных свойств. Сушка до 45 градусов. 2 месяца ферментации в вакууме без поступления воздуха. Капсулы делаются только из лучший шляпок мухомора.',
        type: 'Капсулы',
    },
    {
        _id: '8',
        imagePath: imageToAdd8,
        name: 'Кордицепс военный',
        coefficient: [
            {
                id: 1,
                price: 0.95,
                coff: [
                    {
                        id: 1,
                        coefficient: 0.95
                    }, {
                        id: 2,
                        coefficient: 0.76
                    }, {
                        id: 3,
                        coefficient: 0.64125
                    }
                ]
            }
        ],
        price: [
            {
                id: 1,
                count: 50,
            }, {
                id: 2,
                count: 100,
            }, {
                id: 3,
                count: 200,
            }],
        form: 2,
        title: 'Гриб',
        text: 'Собирались в чистых лесах Беларуси. Наш мухомор сохраняет максимальное количество полезных свойств. Сушка до 45 градусов. 2 месяца ферментации в вакууме без поступления воздуха. Капсулы делаются только из лучший шляпок мухомора.',
        type: 'Капсулы',
    },
    {
        _id: '9',
        imagePath: imageToAdd9,
        name: 'Мухомор красный',
        coefficient: [
            {
                id: 1,
                price: 1,
                coff: [
                    {
                        id: 1,
                        coefficient: 1
                    }, {
                        id: 2,
                        coefficient: 0.8333333333333333
                    }, {
                        id: 3,
                        coefficient: 1
                    }
                ]
            }
        ],
        price: [
            {
                id: 1,
                count: 30,
            }, {
                id: 2,
                count: 60,
            }, {
                id: 3,
                count: 100,
            }],
        form: 5,
        title: 'Мухоморы в вакуумной упаковке для длительного хранения и качественного применения. Мухоморы в вакууме не теряют своих свойств!',
        text: 'Собирались в чистых лесах Беларуси. Наш мухомор сохраняет максимальное количество полезных свойств. Сушка до 45 градусов. 2 месяца ферментации в вакууме без поступления воздуха. Капсулы делаются только из лучший шляпок мухомора.',
        type: 'Шляпки',
    },
    {
        _id: '10',
        imagePath: imageToAdd10,
        name: 'Мухомор красный',
        coefficient: [
            {
                id: 1,
                price: 0.5,
                coff: [
                    {
                        id: 1,
                        coefficient: 0.4166666666666667
                    }, {
                        id: 2,
                        coefficient: 0.375
                    }, {
                        id: 3,
                        coefficient: 0.375
                    }
                ]
            }, {
                id: 2,
                price: 1,
                coff: [
                    {
                        id: 1,
                        coefficient: 1.5
                    }, {
                        id: 2,
                        coefficient: 1.333333333333333
                    }, {
                        id: 3,
                        coefficient: 1.2
                    }
                ]
            }
        ],
        price: [
            {
                id: 1,
                count: 30,
            }, {
                id: 2,
                count: 60,

            }, {
                id: 3,
                count: 100,
            }],
        form: 4,
        title: 'Чай из сухих мухоморов обладает полезными свойствами и вносит разнообразие в обычную чайную церемонию.',
        text: 'Собирались в чистых лесах Беларуси. Наш мухомор сохраняет максимальное количество полезных свойств. Сушка до 45 градусов. 2 месяца ферментации в вакууме без поступления воздуха. Капсулы делаются только из лучший шляпок мухомора.',
        type: 'Чай',
    },
    {
        _id: '11',
        imagePath: imageToAdd11,
        name: 'Листья бога',
        coefficient: [
            {
                id: 1,
                price: 1,
                coff: [
                    {
                        id: 1,
                        coefficient: 1.8
                    }, {
                        id: 2,
                        coefficient: 1.6
                    }, {
                        id: 3,
                        coefficient: 1.3
                    }
                ]
            }
        ],
        price: [
            {
                id: 1,
                count: 10,
            }, {
                id: 2,
                count: 20,
            }, {
                id: 3,
                count: 50,
            }],
        form: 5,
        title: 'Чай из растения Калея Закатечичи. Отличная возможность углубиться в свое бесконечное сознание.',
        text: 'Собирались в чистых лесах Беларуси. Наш мухомор сохраняет максимальное количество полезных свойств. Сушка до 45 градусов. 2 месяца ферментации в вакууме без поступления воздуха. Капсулы делаются только из лучший шляпок мухомора.',
        type: 'Чай',
    },
    {
        _id: '12',
        imagePath: imageToAdd12,
        name: 'Мазь Мухомора красного',
        coefficient: [
            {
                id: 1,
                price: 1,
                coff: [
                    {
                        id: 1,
                        coefficient: 0.7
                    }, {
                        id: 2,
                        coefficient: 0.7
                    }, {
                        id: 3,
                        coefficient: 0.62
                    }
                ]
            }
        ],
        price: [
            {
                id: 1,
                count: 30,
            }, {
                id: 2,
                count: 50,
            }, {
                id: 3,
                count: 100,
            }],
        form: 6,
        title: 'Мухоморная мазь. Мазь мухомора красного. На барсучем жиру(в составе барсучий жир, мухомор активированный шаманка, прополис, живица)',
        text: 'Собирались в чистых лесах Беларуси. Наш мухомор сохраняет максимальное количество полезных свойств. Сушка до 45 градусов. 2 месяца ферментации в вакууме без поступления воздуха. Капсулы делаются только из лучший шляпок мухомора.',
        type: 'Прочее',
    },
    {
        _id: '13',
        imagePath: imageToAdd13,
        name: 'Настойка Мухомора красного',
        coefficient: [
            {
                id: 1,
                price: 1,
                coff: [
                    {
                        id: 1,
                        coefficient: 0.6
                    }, {
                        id: 2,
                        coefficient: 0.4
                    }
                ]
            }
        ],
        price: [
            {
                id: 1,
                count: 50,
            }, {
                id: 2,
                count: 100,
            }],
        form: 6,
        title: 'На ферментированной вытяжке спирт 50%. Для наружного и внутреннего применения.',
        text: 'Собирались в чистых лесах Беларуси. Наш мухомор сохраняет максимальное количество полезных свойств. Сушка до 45 градусов. 2 месяца ферментации в вакууме без поступления воздуха. Капсулы делаются только из лучший шляпок мухомора.',
        type: 'Прочее',
    }
]