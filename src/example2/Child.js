import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { domOnlyProps, fakeApi } from '../util';

class Child extends Component {
    submitForm = form => {
            
        //send the values to the server:
        fakeApi.submit(form)
            .then(result => {
                // do something with successful submit
                console.log('Submitted form with values', form);
            })
            .catch(error => { 
                //do something with an error from the server,
                //ie return redux errors { field1: 'some error for field1', field2: 'some error for field2' }
            });
    }
    
    render() {
        this.props.submitRef(this.props.handleSubmit(this.submitForm));
        return (
            <div>
                <div>field1: <input {...domOnlyProps(this.props.fields.field1)} /></div>
                <div>field2: <input {...domOnlyProps(this.props.fields.field2)} /></div>
            </div>
        );
    }
}

export default reduxForm({
    form: 'submit-from-parent-2',
    fields: [
        'field1',
        'field2'
    ],
    validate: form => {
        console.log('Form validation happened', form);
        //do form validation, return errors
        //ie return redux errors { field1: 'some error for field1', field2: 'some error for field2' }
        return { };
    },
    onSubmit: () => { }
})(Child)
