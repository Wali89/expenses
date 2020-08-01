class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { error: null, errorInfo: null };

        if (this.props.showError === false) {
            this.state.error = null;
            this.state.errorInfo = null;
        }
    }

    componentDidCatch = (error, info) => {
        console.log("error did catch");
        this.setState({ error: error, errorInfo: info });
    }

    render() {
        if (this.state.errorInfo) {
            return (
                <div style={{ backgroundColor: '#ffcc99', color: 'white', width: '500px', height: '60px' }}>
                    An Error Occurred !
                </div>
            );
        }
        else {
            return this.props.children;
        }
    }
}