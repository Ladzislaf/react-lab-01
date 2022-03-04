function Hello_world() {
    let day = new Date().getDate();
    let month = new Date().getMonth() + 1;
    let year = new Date().getFullYear();

    return (
        <div>
            <h1>Hello world!</h1>

            <h2>
                {day}.{month}.{year}
            </h2>
        </div>
    );
}

export default Hello_world;
