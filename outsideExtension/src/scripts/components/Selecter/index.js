import React, { Component } from 'react';
import { MenuItem } from 'material-ui/Menu';
import Select from 'material-ui/Select';

export default class Selector extends Component {

    handleChange(event, index, value) {
        // this.setState({ lang: value });
        this.props.setObject(value);
    }

    selectItem(key, object) {
        return (<MenuItem key={key} value={object} primaryText={object} />);
    }

    selectItemsMap() {
        return this.props.objects.map((object, i) => this.selectItem(i, object));
    }

    render() {
        return (<SelectField
            floatingLabelText={this.props.floatingLabelText}
            value={this.props.selectedObject}
            onChange={this.handleChange.bind(this)}>
            { this.selectItemsMap() }
        </SelectField>);
    }

}

