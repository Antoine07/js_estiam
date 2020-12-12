const dragons = {
    names: [
        { id: 1, name: "Apalala", element : "fire" },
        { id: 2, name: "Balaur", element : "water" },
        { id: 3, name: "Bolla" },
        { id: 4, name: "Drogon", elemnt : "fire" },
        { id: 5, name: "Katla" },
        { id: 6, name: "Saphira" },
        { id: 7, name: "Thorn", elemnt : "water" }
    ],
    count: 3,
}

const relationships =  [
    { id: 1, relations : [2, 3] },
    { id: 2, relations : [1] },
    { id: 3, relations : [1, 2, 7] },
    { id: 4, relations : [2, 6] },
    { id: 5, relations : [2,3,4,5] },

]

const forces =  [
    { id: 1, notes : [12, 13, 19, 11] },
    { id: 2, notes : [11, 15, 17, 9] },
    { id: 3, notes : [20, 11, 12, 7] },
    { id: 4, notes : [18, 12, 10, 17] },
    { id: 5, notes : [11, 11, 9, 5] },
    { id: 6, notes : [13, 10, 9, 15] },
    { id: 7, notes : [11, 10, 19, 15] },

]

export { dragons, relationships, forces };