const styles = theme => ({
    paper: {
        overflowX: "hidden",
        ...theme.mixins.gutters(),
        paddingTop: theme.spacing(2),
        paddingBottom: "70px",
        position: "absolute",
        top: "50%",
        left: "50%",
        marginRight: "-50%",
        transform: "translate(-50%, -50%)",
        width: "70%",
        height: "80%",
    },
    btnNext: {
        margin: theme.spacing(),
        marginTop: "20px",
        position: "absolute",
        right: 20,
    },
    btnPrev: {
        margin: theme.spacing(),
        marginTop: "20px",
        position: "absolute",
        right: 100,
    },
    btnSubmit: {
        margin: theme.spacing(),
        marginTop: "20px",
        position: "absolute",
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
        fontSize: "15px",
        display: "inline-block"
    },
    questionParagraph: {
        font: "-webkit-control",
        fontWeight: "bold",
        fontSize: "17px",
        marginTop: "20px",
        marginBottom: "0px",
        overflow: "auto"
    }
});


export default styles;