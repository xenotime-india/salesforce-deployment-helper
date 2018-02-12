import React, { Component } from 'react';
import Button from 'material-ui/Button';
import { MenuItem } from 'material-ui/Menu';
import Select from 'material-ui/Select';
import Switch from 'material-ui/Switch';
import { DatePicker } from 'material-ui-pickers';
import {grey400} from 'material-ui/colors';
import Divider from 'material-ui/Divider';
import PageBase from './../PageBase';
import Selecter from '../Selecter';

const styles = {
    toggleDiv: {
        maxWidth: 300,
        marginTop: 40,
        marginBottom: 5
    },
    toggleLabel: {
        color: grey400,
        fontWeight: 100
    },
    buttons: {
        marginTop: 30,
        float: 'right'
    },
    saveButton: {
        marginLeft: 5
    }
};

const SidePanel = (props) => {
    return (
        <PageBase>
            <form>
                <Selecter objects={props.objects} selectedObject={props.selectedObject}
                                      setObject={props.setObject} floatingLabelText="Custom Object" />

                <Selecter objects={props.layouts} selectedObject={props.selectedLayout}
                          setObject={props.setLayout} floatingLabelText="Layout"/>
                <Select
                    floatingLabelText="City"
                    value=""
                    fullWidth={true}>
                    <MenuItem key={0} primaryText="London"/>
                    <MenuItem key={1} primaryText="Paris"/>
                    <MenuItem key={2} primaryText="Rome"/>
                </Select>

                <DatePicker
                    hintText="Expiration Date"
                    floatingLabelText="Expiration Date"
                    fullWidth={true}/>

                <div style={styles.toggleDiv}>
                    <Switch
                        label="Disabled"
                        labelStyle={styles.toggleLabel}
                    />
                </div>

                <Divider/>

                <div style={styles.buttons}>
                    <Button variant="raised" label="Cancel"/>

                    <Button variant="raised" label="Save"
                                  style={styles.saveButton}
                                  type="submit"
                                  primary={true}/>
                </div>
            </form>
        </PageBase>
    );
};

export default SidePanel;