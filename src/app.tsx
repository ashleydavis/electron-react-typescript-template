
import * as React from 'react';
import { Header } from './ui/header';
import { Env, IEnv } from './services/env';
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

