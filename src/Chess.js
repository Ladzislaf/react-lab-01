import "./chess.css";

function Letters(props) {
    let cell = [];
    for (let i = 0; i < props.count; i++) {
        cell[i] = <div>{String.fromCharCode(97+i)}</div>;
    }
    return cell;
}

function Digits(props) {
    return <div className="nums">{props.num}</div>
}

function Chess() {
    let rows = [];
    // size of chess deck, changeable
    let x = 8, y = 8;

    for (let i = 1; i <= y; i++) {
        let cell = [];

        for (let j = 1; j <= x; j++) {
            if ((i + j) % 2 === 0) {
                cell[j] = <div className="black">{}</div>;
            } else {
                cell[j] = <div className="white">{}</div>;
            }
        }
        cell[0] = <Digits num={i}/>
        cell[x + 1] = <Digits num={i}/>

        rows[i] = <div>{cell}</div>;
    }

    rows[0] = <div className="letters"><Letters count={x}/></div>;
    rows[y + 1] = <div className="letters"><Letters count={x}/></div>;

    return (
        <div className="chess">
            {rows}
        </div>
    );
}

// TODO сделать нотации с помощью отдельных элементов и ответить: render(), jsx(babel)
// TODO сделать числа в другом порядке?

export default Chess;
