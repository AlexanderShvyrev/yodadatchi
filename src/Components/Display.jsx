import React from "react";

    const Display = ({
    eat,
    play,
    sleep,
    work,
    meal,
    handleEat,
    handlePlay,
    handleSleep,
    handleWork,
    img,
    
    }) => {
    return (
        <div className="container-sm">
        <div className="row justify-content-center">
        <div className="card-group">
            {/* Start of card 1 */}
            <div  className="card mx-1 bg-success">

            <div className="col">
            <img
                width="auto"
                height="150px"
                src="https://media1.giphy.com/media/Mdj8GNWKrvH3FzLbWV/200w.webp?cid=ecf05e479228e3736f95b93e816f8921a3567ce8859090b8&rid=200w.webp"
                className="card-img-top"
                alt="eat"
            />
            <div className="card-body">
                <h5 className="card-title">Eat</h5>
                <p className="card-text lead text-muted">
                {" "}
                Master Baby Yoda eats his yummy meals....or are they?!
                </p>
                <hr/>
                <button onClick={handleEat} className="btn btn-primary">
                Eat, baby Yoda
                </button>
            </div>
            </div>
            </div>
        

            {/* Start of Card 2 */}
            <div className="card mx-1 bg-success">
            <div className="col">
                <img
                width="auto"
                height="150px"
                src="https://media1.giphy.com/media/Ken6Yg5n7bYStW4JYB/200w.webp?cid=ecf05e479228e3736f95b93e816f8921a3567ce8859090b8&rid=200w.webp"
                className="card-img-top"
                alt="sleep"
                />
                <div className="card-body">
                <h5 className="card-title">Sleep</h5>
                <p className="card-text lead text-muted">
                    Master baby Yoda needs rest in order to properly refuel.
                </p>
                <hr/>
                <button onClick={handleSleep} className="btn btn-primary">
                    Go to sleeeepppp
                </button>
                </div>
            </div>
            </div>

            {/* Start of Card 3 */}
            <div className="card mx-1 bg-success">
            <div className="col">
                <img
                width="auto"
                height="150px"
                src="https://media.giphy.com/media/kI2hsMDS4zjK7Fbif8/giphy.gif"
                className="card-img-top"
                alt="work"
                />
                <div className="card-body">
                <h5 className="card-title">Work</h5>
                <p className="card-text lead text-muted">
                    Master baby Yoda is always ready to lend a hand.
                </p>
                <hr/>
                <button onClick={handleWork} className="btn btn-primary">
                    Work that Yoda bod
                </button>
                </div>
            </div>
            </div>

            {/*Start of Card 4 */}
            <div className="card mx-1 bg-success">

            <div className="col">
                <img
                width="auto"
                height="150px"
                src="https://media3.giphy.com/media/H3x6vmjuvJ4fxIQDko/giphy.webp?cid=ecf05e47fbcc2efcb16dbbcf66ddb43a6b631235f6189888&rid=giphy.webp"
                className="card-img-top"
                alt="play"
                />
                <div className="card-body">
                <h5 className="card-title">Play</h5>
                <p className="card-text lead text-muted">
                    Sometimes baby Yoda likes to mess around like a true baby".
                </p>
                <hr/>
                <button onClick={handlePlay} className="btn btn-primary">
                    Play, baby Yoda
                </button>
                </div>
            </div>
            </div>
            </div>
        
            </div>
            </div>
        
        
    );
    };

    export default Display;
