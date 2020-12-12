const DataStudents =
    [
        [
            "s1",
            {
                "name": "Alice",
                "mention": "",
                "notes": [11, 12, 18],
                "average": null,
                "url": "http://lorempixel.com/100/100/cats/1"
            }
        ],
        [
            "s2",
            {
                "name": "Alan",
                "mention": "",
                "notes": [10, 14.5, 11],
                "average": null,
                "url": "http://lorempixel.com/100/100/cats/2"
            }
        ],
        [
            "s3",
            {
                "name": "Bernard",
                "mention": "",
                "notes": [11, 9, 9],
                "average": null,
                "url": "http://lorempixel.com/100/100/cats/2"
            }
        ],
        [
            "s4",
            {
                "name": "Naoudi",
                "mention": "",
                "notes": [14.5, 19, 18],
                "average": null,
                "url": "http://lorempixel.com/100/100/cats/3"
            }
        ],
        [
            "s5",
            {
                "name": "Fenley",
                "mention": "",
                "notes": [9, 7, 11],
                "average": null,
                "url": "http://lorempixel.com/100/100/cats/4"
            }
        ],
        [
            "s6",
            {
                "name": "Shere Khan",
                "mention": "",
                "notes": [],
                "average": null,
                "url": "http://lorempixel.com/100/100/cats/4"
            }
        ]
    ];

const DataStMap = new Map(DataStudents);
const DECIMAL = 100;

const average = notes => {
    if (notes.length === 0) return null;

    return Math.floor((notes.reduce((acc, curr) => curr + acc, 0) / notes.length) * DECIMAL) / DECIMAL;
}

// 1. 
for (const [id, student] of DataStMap) {
    const { notes } = student;
    const avg = average(notes);
    student.average = avg;

    if (avg >= 17) { student.mention = 'TB'; continue; }
    if (avg >= 14) { student.mention = 'B'; continue; }
    if (avg >= 12) { student.mention = 'AB'; continue; }
    if (avg >= 10) student.mention = 'P';

}

console.log(DataStMap);

// 2. Mention

