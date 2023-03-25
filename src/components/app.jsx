import React from "react";

import SignupForm from "./signup_form";

class App extends React.Component {
    render() {
        console.log("pofile- ", this.props);
        return (
            <div className="">
                <SignupForm />
            </div>
        );
    }
}

export default App;
