const styles = theme => ({
    paper: {
        overflow: "scroll",
        ...theme.mixins.gutters(),
        paddingTop: theme.spacing.unit * 2,
        paddingBottom: "70px",
        position: "absolute",
        top: "50%",
        left: "50%",
        marginRight: "-50%",
        transform: "translate(-50%, -50%)",
        width: "70%",
        height: "60%",
    },
    btnNext: {
        margin: theme.spacing.unit,
        marginTop: "20px",
        position: "absolute",
        bottom: 20,
        right: 20,
    },
    btnPrev: {
        margin: theme.spacing.unit,
        marginTop: "20px",
        position: "absolute",
        bottom: 20,
        right: 100,
    },
    btnSubmit: {
        margin: theme.spacing.unit,
        marginTop: "20px",
        position: "absolute",
        bottom: 20,
        right: 20,
    },
    logo: {
        marginTop: "2px"
    },
    answerContainer : {
    },
    answer: {
        margin: "15px 5px 5px 10px",
    },
    answerTypography: {
        fontSize: "17px",
        display: "inline-block"
    }
});


export default styles;