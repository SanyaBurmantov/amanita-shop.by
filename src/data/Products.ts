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
import imageToAdd14 from '../assets/shop/Candy.png'
import imageToAdd15 from '../assets/shop/Cookie.png'

import imageMoreCaleaZacatechichi1 from '../assets/sliderMore/caleaZacatechichi/caleaZacatechichi1.jpg'
import imageMoreCaleaZacatechichi2 from '../assets/sliderMore/caleaZacatechichi/caleaZacatechichi2.jpg'
import imageMoreCaleaZacatechichi3 from '../assets/sliderMore/caleaZacatechichi/caleaZacatechichi3.jpg'
import imageMoreCaleaZacatechichi4 from '../assets/sliderMore/caleaZacatechichi/caleaZacatechichi4.jpg'
import imageMoreCaleaZacatechichi5 from '../assets/sliderMore/caleaZacatechichi/caleaZacatechichi5.jpg'

import imageMoreHericiumErinaceus1 from '../assets/sliderMore/HericiumErinaceus/HericiumErinaceus1.jpg'
import imageMoreHericiumErinaceus2 from '../assets/sliderMore/HericiumErinaceus/HericiumErinaceus2.jpg'
import imageMoreHericiumErinaceus3 from '../assets/sliderMore/HericiumErinaceus/HericiumErinaceus3.jpg'
import imageMoreHericiumErinaceus4 from '../assets/sliderMore/HericiumErinaceus/HericiumErinaceus4.jpg'
import imageMoreHericiumErinaceus5 from '../assets/sliderMore/HericiumErinaceus/HericiumErinaceus5.jpg'

import imageMoreCordyceps1 from '../assets/sliderMore/Cordyceps/Cordyceps1.jpg'
import imageMoreCordyceps2 from '../assets/sliderMore/Cordyceps/Cordyceps2.jpg'
import imageMoreCordyceps3 from '../assets/sliderMore/Cordyceps/Cordyceps3.jpg'
import imageMoreCordyceps4 from '../assets/sliderMore/Cordyceps/Cordyceps4.jpg'
import imageMoreCordyceps5 from '../assets/sliderMore/Cordyceps/Cordyceps5.jpg'

export const products: IProduct[] = [
    {
        _id: '1',
        imagePath: imageToAdd1,
        name: 'Мухомор красный',
        moreName: 'Калея закатечичи',
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
        more: [
            {
                id: 1,
                title: 'dddddddddddddddd',
                subtitle: 'xxxxxxxxxxxxxxxxxxxx\n          djfjdjfjjdffdj\n'
            },            {
                id: 2,
                title: 'dddddddddddddddd',
                subtitle: 'xxxxxxxxxxxxxxxxxxxx',
            },
        ],
        slider: [{
            id: 1,
            image: 'sssssssss',
        }]
    },
    {
        _id: '2',
        imagePath: imageToAdd2,
        name: 'Мухомор пантерный',
        moreName: 'Калея закатечичи',
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
        more: [
            {
                id: 1,
                title: 'dddddddddddddddd',
                subtitle: 'xxxxxxxxxxxxxxxxxxxx',
            },            {
                id: 2,
                title: 'dddddddddddddddd',
                subtitle: 'xxxxxxxxxxxxxxxxxxxx',
            },
        ],
        slider: [{
            id: 1,
            image: 'sssssssss',
        }]
    },
    {
        _id: '3',
        imagePath: imageToAdd3,
        name: 'Ежовик гребенчатый',
        moreName: 'Калея закатечичи',
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
        more: [
            {
                id: 1,
                title: 'dddddddddddddddd',
                subtitle: 'xxxxxxxxxxxxxxxxxxxx',
            },            {
                id: 2,
                title: 'dddddddddddddddd',
                subtitle: 'xxxxxxxxxxxxxxxxxxxx',
            },
        ],
        slider: [{
            id: 1,
            image: 'sssssssss',
        }]
    },
    {
        _id: '4',
        imagePath: imageToAdd4,
        name: 'Мухомор красный',
        moreName: 'Калея закатечичи',
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
        more: [
            {
                id: 1,
                title: 'dddddddddddddddd',
                subtitle: 'xxxxxxxxxxxxxxxxxxxx',
            },            {
                id: 2,
                title: 'dddddddddddddddd',
                subtitle: 'xxxxxxxxxxxxxxxxxxxx',
            },
        ],
        slider: [{
            id: 1,
            image: 'sssssssss',
        }]
    },
    {
        _id: '5',
        imagePath: imageToAdd5,
        name: 'AMANITA MIX',
        moreName: 'Калея закатечичи',
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
        more: [
            {
                id: 1,
                title: 'dddddddddddddddd',
                subtitle: 'xxxxxxxxxxxxxxxxxxxx',
            },            {
                id: 2,
                title: 'dddddddddddddddd',
                subtitle: 'xxxxxxxxxxxxxxxxxxxx',
            },
        ],
        slider: [{
            id: 1,
            image: 'sssssssss',
        }]
    },
    {
        _id: '6',
        imagePath: imageToAdd6,
        name: 'Мухомор пантерный',
        moreName: 'Калея закатечичи',
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
        more: [
            {
                id: 1,
                title: 'dddddddddddddddd',
                subtitle: 'xxxxxxxxxxxxxxxxxxxx',
            },            {
                id: 2,
                title: 'dddddddddddddddd',
                subtitle: 'xxxxxxxxxxxxxxxxxxxx',
            },
        ],
        slider: [{
            id: 1,
            image: 'sssssssss',
        }]
    },





    {
        _id: '7',
        imagePath: imageToAdd7,
        name: 'Зерномицелий ежовика',
        moreName: 'Ежовик гребенчатый',
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
        title: 'Зерномицелий ежовика на буром рисе сушеный, молотый, в растительных капсулах.',
        text: 'Ежевик (Ежовик) Гребенчатый — незаменимое средство для улучшения памяти и профилактики старческой деменции. Этот уникальный гриб эффективно используется в программах лечения болезни Альцгеймера и Паркинсона.\n' +
            '\n'+
            'Ежевик Гребенчатый прекрасно зарекомендовал себя, как обезболивающее средство при сотрясении головного мозга. Он уникален тем, что не только восстанавливает нервные окончания, но и налаживает все функции головного мозга.\n' +
            '\n'+
            'Также гриб Ежевик обладает противоопухолевым действием, мягко снижает сахар и холестерин крови. Ежевик Гребенчатый регулирует работу эндокринной системы и обладает успокаивающим эффектом. \n' +
            '\n'+
            'Этот замечательный целебный гриб нужен в повседневной жизни каждому человеку, начиная от студентов для лучшего запоминания информации при подготовке к сессии, до пожилых людей, у которых постепенно идёт угасание памяти и нарушение микроциркуляции в головном мозге.\n',
        type: 'Капсулы',
        more: [
            {
                id: 1,
                title: 'Важно!',
                subtitle: 'Употребление Ежовика противопоказано людям, имеющим любые заболевания печени, панкреатит, гастрит с повышенной кислотностью и прочие, при которых грибы следует исключить рациона, как например, в Диете №5.\n' +
                    'Кроме того, если у вас имеется аллергия на некоторые виды грибов, следует с большой осторожностью подходить к употреблению Ежовика.',
            },            {
                id: 2,
                title: 'Прекрасный ноотроп!',
                subtitle: 'Большe вceго cлавы пpинecли имeннo ноотрoпные эффeкты: улучшaeт память, скорocть обучeния, противоcтoяние рaзным зaбoлeвaниям мозгa.\n' +
                    'Ha втopoй план выxoдят прoтивоpaковыe и иммунные фишки.\n' +
                    '\n'+
                    'Одним из компонентов ежовика являются – эринацин и миелин. Благодаря им, увеличивается рост и обновление клеток головного мозга, активируется нейрогенез, формируются новые нейроны - образуются новые пути получения знаний. За счет этого увеличивается обучаемость, освоение новых навыков, улучшение памяти и рост творческого подъема.\n' +
                    '\n'+
                    'Отлично подходит для людей страдающих болезнью Альцгеймера, а так же пожилым людям для восполнения миелина.\n' +
                    '\n'+
                    'Данный гриб по праву можно назвать одним из лучших кирпичиков для нашего мозга, незаменимый помощник после черепно-мозговых травм, прекрасно помогает с такими серьезными диагнозами, как деменция.\n' +
                    '\n'+
                    'Шикарно приводит в порядок ЖКТ.\n',
            },{
                id: 3,
                title: 'Употребление Ежовика',
                subtitle: 'В качестве пищевой добавки принимать 2-3 капсулы  утром натощак и перед сном в течение 1—3 месяцев. Как долго принимать, каждый решает сам. Противопоказаний нет. Ведь грибы это полезный продукт.\n' +
                    'Можно принимать по мере необходимости, до исчезновения проблемы.'
            }
        ],
        slider: [
            {
                id: 1,
                image: imageMoreHericiumErinaceus1,
            },
            {
                id: 2,
                image: imageMoreHericiumErinaceus2,
            },{
                id: 3,
                image: imageMoreHericiumErinaceus3,
            },{
                id: 4,
                image: imageMoreHericiumErinaceus4,
            },{
                id: 5,
                image: imageMoreHericiumErinaceus5,
            }
        ]
    },

    {
        _id: '8',
        imagePath: imageToAdd8,
        name: 'Кордицепс военный',
        moreName: 'Кордицепс военный',
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
        title: 'Плодовые тела+мицелий на буром рисе сушеный, молотый, в растительных капсулах.',
        text: 'Кордицепс – это гриб, имеющий долгую историю использования в медицине. Он встречается в Гималаях на территории Тибета и Непала и в небольших областях на границе Индии и Китая, там, где высота достаточна для его роста. В Китае и Тибете он традиционно используется в качестве лекарства для улучшения репродуктивной функции, предотвращения усталости и замедления старения.',
        type: 'Капсулы',
        more: [
            {
                id: 1,
                title: 'Бад биодобавка кордицепс военный',
                subtitle: 'Согласно последним данным, наилучший путь использования  кордицепса – укрепление иммунитета, спортивное питание (повышение выносливости за счет увеличения потребления кислорода), улучшение когнитивных функций и работы половой сферы. Противораковая активность, поддержка в пожилом возрасте! Гриб прошел клинические испытания.\n' +
                    '\n'+
                    'Добавки и продукты, содержащие экстракт кордицепса, становятся все более популярными благодаря их многочисленным преимуществам для здоровья.\n' +
                    '\n'+
                    'Из более чем 400 обнаруженных видов кордицепса два стали предметом исследований в области здравоохранения.\n',
            },            {
                id: 2,
                title: '6 потенциальных преимуществ кордицепса, подтвержденных наукой:',
                subtitle: '1. Повышает выносливость при выполнении физических упражнений\n' +
                    '2. Антивозрастные свойства\n' +
                    '3. Потенциальные противоопухолевые эффекты\n' +
                    '4. Может помочь в лечении диабета 2 типа\n' +
                    '5. Возможные преимущества для здоровья сердца\n' +
                    '6. Может помочь в борьбе с воспалением\n' +
                    '\n'+
                    'Кроме того, наших читателей может в большей степени заинтересовать, что кордицепс также традиционно использовался для:\n' +
                    '\n'+
                    '- Снижения стресса;\n' +
                    '- Поддержания анаболизма и синтеза белка мышц;\n' +
                    '- Улучшения метаболизма глюкозы и чувствительности к инсулину;\n' +
                    '- Увеличения мужской силы;\n' +
                    '- Улучшения общего состояния здоровья.\n',
            },{
                id: 3,
                title: 'Уменьшение усталости и увеличение выносливости',
                subtitle: 'Было показано, что прием добавок кордицепса повышает физическую выносливость и снижает усталость. В одном двойном слепом исследовании с участием людей кордицепс значительно увеличивал потребление кислорода во время физических упражнений. Также было показано снижение базового уровня глюкозы и молочной кислоты.\n' +
                    '\n'+
                    'Ключевые преимущества:\n' +
                    '- Поддерживает рост мышц и пиковую силу;\n' +
                    '- Поддерживает восстановление и увеличение потребления кислорода;\n' +
                    '- Помогает увеличить максимальную выходную мощность;\n' +
                    '- Может увеличивать использование кислорода во время упражнений;\n' +
                    '- Восполняет электролиты.\n',
            },{
                id: 4,
                title: 'Противопоказания',
                subtitle: '- Индивидуальная непереносимость компонентов;\n' +
                    '- Беременность;\n' +
                    '- Кормление грудью.'
        },{
                id: 5,
                title: 'Как правильно пить Кордицепс',
                subtitle: 'В качестве пищевой добавки принимать 2-3 капсулы  в день. Можно принимать с пищей или отдельно, на пустой желудок или согласно рекомендациям врача.\n' +
                    'Курс длиться от  1 до 5 месяцев\n'
            }
        ],
        slider: [
            {
            id: 1,
            image: imageMoreCordyceps1,
        },
            {
                id: 2,
                image: imageMoreCordyceps2,
            },{
                id: 3,
                image: imageMoreCordyceps3,
            },{
                id: 4,
                image: imageMoreCordyceps4,
            },{
                id: 5,
                image: imageMoreCordyceps5,
            }]
    },






    {
        _id: '9',
        imagePath: imageToAdd9,
        name: 'Мухомор красный',
        moreName: 'Ежовик гребенчатый',
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
        form: 5,
        title: 'Мухоморы в вакуумной упаковке для длительного хранения и качественного применения. Мухоморы в вакууме не теряют своих свойств!',
        text: 'Собирались в чистых лесах Беларуси. Наш мухомор сохраняет максимальное количество полезных свойств. Сушка до 45 градусов. 2 месяца ферментации в вакууме без поступления воздуха. Капсулы делаются только из лучший шляпок мухомора.',
        type: 'Шляпки',
        more: [
            {
                id: 1,
                title: 'dddddddddddddddd',
                subtitle: 'xxxxxxxxxxxxxxxxxxxx',
            },            {
                id: 2,
                title: 'dddddddddddddddd',
                subtitle: 'xxxxxxxxxxxxxxxxxxxx',
            },
        ],
        slider: [{
            id: 1,
            image: 'sssssssss',
        }]
    },
    {
        _id: '10',
        imagePath: imageToAdd10,
        name: 'Мухомор красный',
        moreName: 'Ежовик гребенчатый',
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
        more: [
            {
                id: 1,
                title: 'dddddddddddddddd',
                subtitle: 'xxxxxxxxxxxxxxxxxxxx',
            },            {
                id: 2,
                title: 'dddddddddddddddd',
                subtitle: 'xxxxxxxxxxxxxxxxxxxx',
            },
        ],
        slider: [{
            id: 1,
            image: 'sssssssss',
        }]
    },






    {
        _id: '11',
        imagePath: imageToAdd11,
        name: 'Листья бога',
        moreName: 'Калея закатечичи',
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
        text: 'Калея Закатечичи — невысокий кустарник семейства Астровые, 1-1,5 м в высоту, распространена в Центральной Америке от Мексики до Коста-Рики. Калея имеет зазубренные по краям листья, 2-6 см в длину. Цветет белыми или желтоватыми цветами в плотных соцветиях. \n' +
            '\n'+
            '"Листья бога" - так называли Калею Закатечичи индейцы Чонталь, использовали для вхождения в осознанные сновидения. В настоящее время показано, что вытяжка из данного растения обладает транквилизирующими свойствами. Её употребление способствует также продуцированию ярких и осознанных сновидений и увеличению времени их вспоминаемости, то есть растение содержит вещества, обладающие психоактивными свойствами.',
        type: 'Чай',
        more: [
            {
                id: 1,
                title: 'Эффект растения',
                subtitle: 'Эйфорическое состояние. При этом проявляется такой эффект как Ясность ума, то есть, проще управлять своим вниманием, обостряется концентрация на определенных вещах.\n ' +
                    'Яркие осознанные сновидения-осознание себя во сне.',
            }, {
                id: 2,
                title: 'Лечебные свойства',
                subtitle: '- При большой концентрации проявляет транквилизируещее действие; \n' +
                    '- Очищает организм от паразитов; \n' +
                    '- Успокаивает, снимает стресс и нервное напряжение; \n' +
                    '- Регулирует работу желудочно-кишечного тракта; \n' +
                    '- Способствует ярким осознанным сновидениям. ',
            }, {
                id: 3,
                title: 'Поможет при',
                subtitle: '- Тревоге;\n' +
                    '- Стрессе;\n ' +
                    '- Спутанности сознания;\n' +
                    '- При проблемах с желудочно-кишечным трактом;\n' +
                    '- При чистке ЖКТ от паразитов;\n' +
                    '- Бессонице.\n',
            }, {
                id: 4,
                title: 'Противопоказания',
                subtitle: 'Особых противопоказаний не выявлено кроме людей у которых возможна аллергия на это растение. Если на протяжении 30 минут ничего не зачесалось, то аллергии можно не опасаться.',
            }, {
                id: 4,
                title: 'Способы употребления',
                subtitle: 'Употребляющий Калею Закатечичи заваривает чай (3-5 гр. в течение 15 минут) из сухих листьев растения и медленно выпивает горький отвар, ложится в тихом и спокойном месте, выкуривает сигарету из листьев этого же растения и засыпает.\n' +
                    'Сбить горький вкус можно добавив мёду. Иногда листья растения также кладутся под подушку. Перед сном можно покурить в трубке или сделать сигарету с сухими листьями и цветками растения, максимум можно выкурить 3 сигареты.',
            },
        ],
        slider: [
            {
            id: 1,
            image: imageMoreCaleaZacatechichi1,
        },
            {
            id: 2,
            image: imageMoreCaleaZacatechichi2,
        },{
            id: 3,
            image: imageMoreCaleaZacatechichi3,
        },{
            id: 4,
            image: imageMoreCaleaZacatechichi4,
        },{
            id: 5,
            image: imageMoreCaleaZacatechichi5,
        }]
    },









    {
        _id: '12',
        imagePath: imageToAdd12,
        name: 'Мазь Мухомора красного',
        moreName: 'Калея закатечичи',
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
        title: 'Мухоморная мазь. Мазь мухомора красного. На основе масла ГХИ.',
        text: 'Собирались в чистых лесах Беларуси. Наш мухомор сохраняет максимальное количество полезных свойств. Сушка до 45 градусов. 2 месяца ферментации в вакууме без поступления воздуха. Капсулы делаются только из лучший шляпок мухомора.',
        type: 'Прочее',
        more: [
            {
                id: 1,
                title: 'Что лечит мухоморная мазь:',
                subtitle: '1. Суставные заболевания (артрозы, артриты, полиартрит, псориатический артрит, остеохондроз), в онкологии при метастазировании в костную ткань.\n' +
                    '2. Труднозаживляемые раны и язвы (тромбофлебитные, раковые, свищи, пролежни, чирьи, фурункулы).\\n' +
                    '3. Кожные заболевания (дерматиты, микозы, пиодермия, псориаз, экзема, грибковые заболевания стоп и ногтевые поражения).\\n' +
                    '4. Варикозное заболевание вен, варикозные «сеточки», тромбофлебит.\\n' +
                    '5. Доброкачественные образования на коже (папилломы, липомы, бородавки).\\n',
            },            {
                id: 2,
                title: 'dddddddddddddddd',
                subtitle: 'xxxxxxxxxxxxxxxxxxxx',
            },
        ],
        slider: [{
            id: 1,
            image: 'sssssssss',
        }]
    },
    {
        _id: '13',
        imagePath: imageToAdd13,
        name: 'Настойка Мухомора красного',
        moreName: 'Калея закатечичи',
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
        more: [
            {
                id: 1,
                title: 'dddddddddddddddd',
                subtitle: 'xxxxxxxxxxxxxxxxxxxx',
            },            {
                id: 2,
                title: 'dddddddddddddddd',
                subtitle: 'xxxxxxxxxxxxxxxxxxxx',
            },
        ],
        slider: [{
            id: 1,
            image: 'sssssssss',
        }]
    }
    ,
    {
        _id: '14',
        imagePath: imageToAdd14,
        name: 'Конфеты',
        moreName: 'Конфеты',
        coefficient: [
            {
                id: 1,
                price: 1,
                coff: [
                    {
                        id: 1,
                        coefficient: 9
                    }, {
                        id: 2,
                        coefficient: 8
                    }, {
                        id: 3,
                        coefficient: 8
                    }
                ]
            }
        ],
        price: [
            {
                id: 1,
                count: 5,
            }, {
                id: 2,
                count: 10,
            }, {
                id: 3,
                count: 20,
            }],
        form: 7,
        title: 'Состав: Финик, миндаль, семена льна, кокосовая стружка, кунжутное масло пантерный мухомор 1г (24г)',
        text: 'Собирались в чистых лесах Беларуси. Наш мухомор сохраняет максимальное количество полезных свойств. Сушка до 45 градусов. 2 месяца ферментации в вакууме без поступления воздуха. Капсулы делаются только из лучший шляпок мухомора.',
        type: 'Прочее',
        more: [
            {
                id: 1,
                title: 'dddddddddddddddd',
                subtitle: 'xxxxxxxxxxxxxxxxxxxx',
            },            {
                id: 2,
                title: 'dddddddddddddddd',
                subtitle: 'xxxxxxxxxxxxxxxxxxxx',
            },
        ],
        slider: [{
            id: 1,
            image: 'sssssssss',
        }]
    } ,
    {
        _id: '15',
        imagePath: imageToAdd15,
        name: 'Печенье',
        moreName: 'Печенье',
        coefficient: [
            {
                id: 1,
                price: 1,
                coff: [
                    {
                        id: 1,
                        coefficient: 9
                    }, {
                        id: 2,
                        coefficient: 8
                    }, {
                        id: 3,
                        coefficient: 8
                    }
                ]
            }
        ],
        price: [
            {
                id: 1,
                count: 5,
            }, {
                id: 2,
                count: 10,
            }, {
                id: 3,
                count: 20,
            }],
        form: 7,
        title: 'Состав: Овсяная мука, овсяные хлопья, яйцо, оливковое масло, мед, льняная мука, пантерный мухомор 1г (32г)',
        text: 'Собирались в чистых лесах Беларуси. Наш мухомор сохраняет максимальное количество полезных свойств. Сушка до 45 градусов. 2 месяца ферментации в вакууме без поступления воздуха. Капсулы делаются только из лучший шляпок мухомора.',
        type: 'Прочее',
        more: [
            {
                id: 1,
                title: 'dddddddddddddddd',
                subtitle: 'xxxxxxxxxxxxxxxxxxxx',
            },            {
                id: 2,
                title: 'dddddddddddddddd',
                subtitle: 'xxxxxxxxxxxxxxxxxxxx',
            },
        ],
        slider: [{
            id: 1,
            image: 'sssssssss',
        }]
    }
]