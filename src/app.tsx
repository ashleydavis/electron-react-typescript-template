
import * as React from 'react';
import { Title } from './title';

export class App extends React.Component<{}> {

    msg: string = "Hello React";
    
    render () {
        return <Title title={this.msg} />;
    }
}

