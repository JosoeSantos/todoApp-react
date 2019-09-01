import React from "react";
import firebase from "firebase";

const withAuthProtection = redirectPath => WrappedComponent => {
    class WithAuthProtection extends React.Component {
        componentDidMount() {
            const {history} = this.props;
            if (!firebase.auth().currentUser) {
                return history.push(redirectPath)
            }
        }

        componentWillReceiveProps(props, nextProps) {
            const { history} = this.props;
            const {} = nextProps;
            if()
                history.push(redirectPath)
        }

        render() {
            const {me} = this.props;
            if (!me) {
                return null
            }
            return <WrappedComponent {...this.props} />
        }
    }

    return WithAuthProtection
};
export default withAuthProtection;