import React from "react";
import Circle from "./Circle";
import Triangle from "./Triangle";
import Elipse from "./Elipse";
import Parellogram from "./Parellogram";
import Trapezoid from "./Trapezoid";
import Rhombus from "./Rhombus";

class App2 extends React.Component{
    render(){
        return(
            <div className="App2">
                <br/>
                <Circle r="5"/>
                <Triangle b="2" h="3"/>
                <Elipse a="2" b="3"/>
                <Parellogram b="2" h="2"/>
                <Trapezoid a="2" b="3" h="4" />
                <Rhombus d="2"/>
            </div>
        );
    }
}

export default App2;