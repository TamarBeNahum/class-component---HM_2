import { Component } from "react";

export default class CCTable extends Component {

    constructor(props) {
        super(props);

        this.state = {
            width: "100%"
        };
    }

    table_1_Click = () => {
        this.setState({ width: "50%" });
    }
    table_2_Click = () => {
        this.setState({ width: "100%" });
    }

    render() {
        return (
            <>
                <table
                    style={{ width: this.state.width }}
                    onClick={this.table_1_Click}
                    onDoubleClick={this.table_2_Click}
                >
                    <tbody>

                        <tr>
                            <td>

                            </td>
                            <td>

                            </td>
                            <td>

                            </td>
                        </tr>
                        <tr>
                            <td>

                            </td>
                            <td>

                            </td>
                            <td>

                            </td>
                        </tr>
                    </tbody>
                </table>
            </>


        );
    }
}