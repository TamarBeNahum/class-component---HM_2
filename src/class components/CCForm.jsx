import { Component } from "react";

export default class CCForm extends Component {

    constructor(props) {
        super(props);

        this.state = {
            fNameMessage: "",
            lNameMessage: "",
            SATScoreMessage: "",
            passMessage: ""
        };
    }

    handleOnFocus = (val) => {
        if (val == "First name")
            this.setState({ fNameMessage: "Please enter your " + val });
        if (val == "Last name")
            this.setState({ lNameMessage: "Please enter your " + val });
        if (val == "S.A.T Score")
            this.setState({ passMessage: "", SATScoreMessage: "Please enter your " + val });

    }
    handleOnBlur = () => {
        this.setState({ fNameMessage: "", lNameMessage: "" });
    }

    handleOnBlurSAT = (e) => {
        let score = e.target.value;
        if (e.target.value > 555)
            this.setState({ passMessage: "You have been accepted for college!" });
        else if (e.target.value == "")
            this.setState({ passMessage: "" }); 
        else {
            this.setState({ passMessage: "You were not accepted, try next year :(" });
        }
        this.setState({ SATScoreMessage: "" });
    }
    render() {
        return (
            <>
                <form>
                    <div style={{ color: "red", height: "20px" }}> {this.state.fNameMessage} </div>
                    <div>
                        <label> First name: </label>
                        <input
                            type="text"
                            onFocus={() => this.handleOnFocus("First name")}
                            onBlur={this.handleOnBlur}
                        />
                    </div>
                    <div style={{ color: "red", height: "20px" }}> {this.state.lNameMessage} </div>
                    <div>
                        <label> Last name: </label>
                        <input
                            type="text"
                            onFocus={() => this.handleOnFocus("Last name")}
                            onBlur={this.handleOnBlur}
                        />
                    </div>
                    <div style={{ color: "red", height: "20px" }}> {this.state.SATScoreMessage} </div>
                    <div>
                        <label> S.A.T Score </label>
                        <input
                            type="number" min={0} max={800}
                            onFocus={() => this.handleOnFocus("S.A.T Score")}
                            onBlur={this.handleOnBlurSAT}
                        />
                    </div>
                    <div style={{ color: "blue", height: "20px" }}> {this.state.passMessage} </div>
                </form>
            </>


        );
    }
}