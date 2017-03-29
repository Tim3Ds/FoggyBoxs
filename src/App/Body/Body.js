import React from 'react';
import dotbox from './300px-Dots-and-boxes.png';
import './body.css';


class Body extends React.Component{
    render(){
        return(
            <div>
                <img className="image" src={dotbox} className="image" alt="logo" />
                <div className="home-constraint"></div>
                <div className="content">
                    <h1>History</h1>
                    Dots and Boxes was originaly a pencil-and-paper game for two players 
                    (sometimes more). It was first published in the 19th century by 
                    Édouard Lucas, who called it la pipopipette.It has gone by many other 
                    names, including the game of dots, boxes, dot to dot grid,and pigs in 
                    a pen.
                    <h1>Game Play</h1>
                    Starting with an empty grid of dots, two players take turns adding a 
                    single horizontal or vertical line between two unjoined adjacent dots. 
                    The player who completes the fourth side of a 1×1 box earns one point 
                    and takes another turn. (A point is typically recorded by placing a 
                    mark that identifies the player in the box, such as an initial). The 
                    game ends when no more lines can be placed. The winner is the player 
                    with the most points. The board may be of any size. When short on time, 
                    a 2×2 board (a square of 9 dots) is good for beginners. A 5×5 is good 
                    for experts. The diagram on the right shows a game being played on the 
                    2×2 board. The second player (B) plays the mirror image of the first 
                    player's move, hoping to divide the board into two pieces and tie the 
                    game. But the first player (A) makes a sacrifice at move 7 and B accepts 
                    the sacrifice, getting one box. However, B must now add another line, 
                    and connects the center dot to the center-right dot, causing the 
                    remaining boxes to be joined together in a chain (shown at the end of 
                    move 8). With A's next move, player A gets them all and wins 3–1.
                    <p>
                        <a href='https://en.wikipedia.org/wiki/Dots_and_Boxes'>wiki link</a>
                    </p>
                </div>
                        
            </div>
        )
    }
}
export default Body;