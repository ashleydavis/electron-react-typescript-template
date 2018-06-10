import { Injectable, Inject } from 'react.di';

export interface IEnv {

    title: string;

}

@Injectable
export class Env implements IEnv {

    title: string = "Hello React!!";
}