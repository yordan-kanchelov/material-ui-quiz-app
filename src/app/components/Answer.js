import {React, Component} from "react";

import Typography from "@material-ui/core/Typography";


class Answer extends Component{
    state = {
        selected: false,
    }

    render() {
        return (
            <Typography component="p">
                {this.props.answer}
            </Typography>        
        )
    }
}


export default Answer
