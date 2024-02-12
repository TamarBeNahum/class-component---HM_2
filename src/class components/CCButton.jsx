import { Component } from "react";

export default class CCButton extends Component {

    constructor(props) {
        super(props);

        this.state = {
            color: ""
        };
    }

    colorChange = (e) => {
        let strColor = e.target.innerText.toLowerCase();
        //console.log(strColor);
        this.setState({ color: strColor });
    }

    render() {

        let colors = ['red','blue','green','yellow','orange','aqua','pink','white'];

        let btnsColors = colors.map((color_name, index) =>
            <button
            key={index}
            className="button"
            onClick={this.colorChange}>
                
                {color_name}
                
            </button>
            
        );
  
        return (
            <div
                style={{ backgroundColor: this.state.color }}
                className="btnComp" >
                {btnsColors}
                
            </div>
        );
    }
}