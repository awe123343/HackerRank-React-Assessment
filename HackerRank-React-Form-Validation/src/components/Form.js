import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isEmailValid: false,
            isNameValid: false,
            isPhoneValid: false,
            isUrlValid: false,
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleVerify = this.handleVerify.bind(this);
    }

    handleVerify(e) {
        e.preventDefault();
        const isValid = Object.values(this.state).every((e) => e);
        this.props.isFormValid(isValid);
    }

    handleChange = (name) => (e) => {
        e.preventDefault();

        const { value } = e.target;
        if (name === 'name') {
            this.setState({ isNameValid: /^[a-zA-Z]{3,30}$/.test(value) });
        } else if (name === 'email') {
            this.setState({
                isEmailValid: /^[\w-\.]+@([\w-]+\.)+[\w-]+$/.test(value),
            });
        } else if (name === 'phone') {
            this.setState({
                isPhoneValid:
                    value &&
                    value.length === 10 &&
                    value[0] != '0' &&
                    value[0] != '1',
            });
        } else if (name === 'blog-url') {
            const isUrl = (str) => {
                try {
                    new URL(str);
                    return true;
                } catch (e) {
                    return false;
                }
            };
            this.setState({
                isUrlValid: isUrl(value),
            });
        }
    };

    render() {
        return (
            <div className="row">
                <h1 className="text-center">Form Validation</h1>
                <form>
                    <h3>Name:</h3>
                    <input
                        className="name"
                        placeholder="Name"
                        type="text"
                        name="name"
                        noValidate
                        onChange={this.handleChange('name')}
                    />

                    <h3>Email:</h3>
                    <input
                        className="email"
                        placeholder="Email"
                        type="email"
                        name="email"
                        noValidate
                        onChange={this.handleChange('email')}
                    />

                    <h3>Phone:</h3>
                    <input
                        className="phone"
                        placeholder="Phone"
                        type="text"
                        name="phone"
                        noValidate
                        onChange={this.handleChange('phone')}
                    />

                    <h3>Blog URL:</h3>
                    <input
                        className="url"
                        placeholder="Blog URL"
                        type="text"
                        name="blog-url"
                        noValidate
                        onChange={this.handleChange('blog-url')}
                    />

                    <div className="small-6 small-centered text-center columns">
                        <a
                            href="#"
                            className="button success expand round text-center"
                            onClick={this.handleVerify}
                        >
                            Verify
                        </a>
                    </div>
                </form>
            </div>
        );
    }
}

export default Form;
