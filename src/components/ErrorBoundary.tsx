import React, { Component, type ReactNode } from 'react'


//To specify the type of my props in RCC in TS
// props that will receive the children - <ComponentA> and <ComponentB>
interface ErrorBoundaryProps {
    children:ReactNode
}
// To specify the type of my state in RCC in TS
interface ErrorBoundaryState {
    hasError:boolean
}

export default class ErrorBoundary extends Component<ErrorBoundaryProps,ErrorBoundaryState> {

    // In Class Component, we receive the props from the constructor
    //    ({user})
    constructor(props:ErrorBoundaryProps){
        super(props)
        
        // Declaring a state, hasError initial value at false
        // const [hasError,setHasError] = useState(false)
        this.state = {hasError:false}
    }

  // In class component you define the UI in the render method
    render() {
    
        // If there is an error (state)
        if (this.state.hasError){
            return (<div>Something when wrong</div>)
        }
        // Show the UI Accordingly
        return this.props.children;
  }

  // This also will be executed whenever there is an error
  // derived state means - variable that depends on the other state
  // Updating my state to true
  static getDerivedStateFromError():ErrorBoundaryState {
    return {hasError:true};
  }

  // Whenever there is an error caught from the children eg: ComponentA or ComponentB
  // This method will be called
  componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
      console.error('ErrorBoundary caught an error',error,errorInfo);
  }
}
