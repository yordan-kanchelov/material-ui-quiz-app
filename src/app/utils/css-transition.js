import React from "react";
import { CSSTransitionGroup } from "react-transition-group";

export default elem => {
    return (
        <CSSTransitionGroup
            transitionName="mainApp"
            transitionAppear={true}
            transitionEnterTimeout={500}
            transitionAppearTimeout={500}
            transitionLeave={false}
            transitionLeaveTimeout={500}
        >
            {elem}
        </CSSTransitionGroup>
    );
};
