
import * as React from 'react';
import { Header } from './header';
import { Env, IEnv } from './env';
import { Module } from 'react.di';

@Module({
    providers: [
        { provide: "IEnv", useClass: Env},
    ]
})
export class App extends React.Component<{}> {

    render () {
        return <Header />;
    }
}

