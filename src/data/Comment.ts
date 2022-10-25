
export const getComments = async () => {
    return [
        {
            id: "1",
            body: "сайт гавно",
            username: "Pidor1",
            userId: "1",
            parentId: null,
            createdAt: "2021-08-16T23:00:33.010+02:00",
        },
        {
            id: "2",
            body: "ебал мать админа сайта",
            username: "Pidor2",
            userId: "2",
            parentId: null,
            createdAt: "2021-08-16T23:00:33.010+02:00",
        },
        {
            id: "3",
            body: "ебать мой хуй",
            username: "Pidor3",
            userId: "3",
            parentId: null,
            createdAt: "2021-08-16T23:00:33.010+02:00",
        },
        {
            id: "4",
            body: "чо сука раз на раз в мид на пуждах????",
            username: "Pidor4",
            userId: "4",
            parentId: "2",
            createdAt: "2021-08-16T23:00:33.010+02:00",
        },
        {
            id: "5",
            body: "купи грибы сука @админ",
            username: "Pidor5",
            userId: "5",
            parentId: "2",
            createdAt: "2021-08-16T23:00:33.010+02:00",
        }, {
            id: "6",
            body: "ебаааать я люблю редакс и тайскрипт ебаные (нет)",
            username: "Pidor2",
            userId: "2",
            parentId: "1",
            createdAt: "2021-08-16T23:00:33.010+02:00",
        },
    ];
};

export const createComment = async (text: any, parentId = null) => {
    return {
        id: Math.random().toString(36).substring(2, 9),
        body: text,
        parentId,
        userId: "6",
        username: "Валерий Жопорванов",
        createdAt: new Date().toISOString(),
    };
};

export const updateComment = async (text: any) => {
    return {text};
};

export const deleteComment = async () => {
    return {};
};