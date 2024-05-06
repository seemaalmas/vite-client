import React from 'react';

class ErrorBoundry extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            hasError: false
        }
    }

    static getDerivedStatefromError(){
        return {hasError: true}
    }


    componentDidCatch(error, errorInfo){
        console.log(error, errorInfo);
    }
    render(){
        if(this.state.hasError){
            return <div>Something went wrong.....</div>
        } 
        return this.props.children;
    }
}

export default ErrorBoundry;