const styles = theme => ({
    paper: {
        ...theme.mixins.gutters(),
        paddingTop: theme.spacing.unit * 2,
        paddingBottom: theme.spacing.unit * 2,
        position: "absolute",
        top: "50%",
        left: "50%",
        marginRight: "-50%",
        transform: "translate(-50%, -50%)",
        minWidth: "650px",
    },
    button: {
        float: "right",
        margin: theme.spacing.unit,
        marginTop: "20px"
    },
    logo: {
        marginTop: "2px"
    },
    answer: {
        margin: "15px 5px 5px 10px"
    },
    answerTypography: {
        fontSize: "17px",
        display: "inline-block"
    }
});


export default styles;