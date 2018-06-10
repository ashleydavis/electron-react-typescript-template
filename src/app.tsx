
import * as React from 'react';

export class App extends React.Component<{}> {

    msg: string = "Hello React";
    
    render () {
        return <h1>{this.msg}</h1>;
    }
}

