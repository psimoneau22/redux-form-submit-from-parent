import React, { Component } from 'react';
import Child from './Child';

export default class Parent extends Component {
    
    handleClick = e => this.child.submit(e);
    
    render() {
        return (
            <div>
                <p>
                    Example submtting a redux form from an event fired by a parent component.

                    Open the browser console and observe the logs
                </p>
                <button onClick={this.handleClick}>Submit from Parent</button>
                <Child ref={e => this.child = e} />
            </div>
        );
    }
}