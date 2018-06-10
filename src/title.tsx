import * as React from 'react';
import { IEnv } from './env';
import { Inject } from 'react.di';

export class Title extends React.Component {

    @Inject("IEnv")
    env?: IEnv;

    render () {
        return <h1>{this.env!.title}</h1>;
    }
}

