import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import Checkbox from '@material-ui/core/Checkbox';

class Filter extends Component {
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
    }

    onChange = (sortedBy) => {
        const { sorter } = this.props;
        sorter(sortedBy);
    };

    render() {
        const { sortedBy } = this.props;
        const isNameChecked = sortedBy === 'name';

        return (
            <div className="checkboxes">
                <Checkbox
                    checked={isNameChecked}
                    onClick={() => this.onChange('name')}
                    value="name"
                />
                <label>Name</label>
                <Checkbox
                    checked={!isNameChecked}
                    onClick={() => this.onChange('age')}
                    value="age"
                />
                <label>Age</label>
            </div>
        );
    }
}

export default Filter;
