
import * as React from 'react';

export interface ITitleProps {
    title: string;
}

export class Title extends React.Component<ITitleProps> {

    render () {
        return <h1>{this.props.title}</h1>;
    }
}

