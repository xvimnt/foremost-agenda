import Item from "./Item";

const notes = [
    {
        title: "my first note",
        body: "Lions are depicted on vases dating to about 2600 before present that were excavated near Lake Urmia.[16] In Iranian mythology, the lion is a symbol of courage and monarchy. It is portrayed standing beside the kings in artifacts and sitting on the graves of knights.",
        date: "16/02/1998"
    },
    {
        title: "my second note",
        body: "The lion (Panthera leo) is a large cat of the genus Panthera native to Africa and India. It has a muscular, broad-chested body; short, rounded head; round ears; and a hairy tuft at the end of its tail. It is sexually dimorphic; adult male lions are larger than females and have a prominent mane.",
        date: "16/03/1998"
    },
    {
        title: "my third note",
        body: "Cultural depictions of lions are known in countries of Afro-Eurasia. The lion has been an important symbol to humans for tens of thousands of years. The earliest graphic representations feature lions as organized hunters with great strength, strategies, and skills.",
        date: "16/02/2022"
    },
    {
        title: "my fourth note",
        body: "The earliest tomb paintings in Ancient Egypt, at Nekhen, c. 3500 BC, classified as Naqada, possibly Gerzeh, culture include images of lions, including an image of a human (or deity) flanked by two lions in an upright posture.",
        date: "26/02/1998"
    },
]

export default function ItemList({ note }) {
    return (
        <div class="list-group">
            {notes.map(note => {
                return <Item key={note.title} note={note}></Item>
            })}
        </div>
    );
}

