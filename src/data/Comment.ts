export const getComments = async () => {
    return [
        {
            id: "1",
            body: 'сайт гавно',
            username: 'Pidor1',
            userId: "1",
            parentId: null,
            Data: '2022-10-18T09:41:36.975Z'
        }, {
            id: "2",
            body: 'мать ебал',
            username: 'Pidor2',
            userId: "2",
            parentId: null,
            Data: '2022-10-18T09:41:36.975Z'
        }, {
            id: "3",
            body: 'чо сука раз на раз в мид на пуждах????',
            username: 'Pidor3',
            userId: "3",
            parentId: null,
            Data: '2022-10-18T09:41:36.975Z'
        },
        {
            id: "4",
            body: 'М 18 пошлый',
            username: 'Pidor4',
            userId: "4",
            parentId: "1",
            Data: '2022-10-18T09:41:36.975Z'
        },
        {
            id: "5",
            body: 'шмары минск от 20р +375(33)366 01 93',
            username: 'Pidor5',
            userId: "5",
            parentId: "2",
            Data: '2022-10-18T09:41:36.975Z'
        }
    ]
}

export const createComment = async (text: string, parentId=null) => {
    return {
        id: Math.random().toString(36).substring(2, 9),
        body: text,
        parentId,
        userId: '8',
        username: 'Валерий Жопорванов',
        Data: new Date().toISOString()
    }
}

export const updateComment = async (text: string) => {
    return {text};
};

export const deleteComment = async (commentId: string) => {
    return {};
};