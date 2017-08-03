import React, { Component } from 'react';
import Child from './Child';

export default class Parent extends Component {
    
    handleClick = e => this.submit(e);
    
    render() {
        return (
            <div>
                <p>
                    Example submtting a redux form from an event fired by a parent component.

                    Open the browser console and observe the logs

                    This example's 'submit form funtion has access to the wrapped components instance methods/props/etc', I would prefer this method
                </p>
                <button onClick={this.handleClick}>Submit from Parent</button>
                <Child submitRef={submit => this.submit = submit} />
            </div>
        );
    }
}