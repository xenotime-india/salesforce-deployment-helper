import React from 'react';
import ReactDOM from 'react-dom';
import { createMuiTheme, MuiThemeProvider } from 'material-ui/styles';
import './../styles/style.css';
import Container from './container';
import DashboardPage from './DashboardPage';
import { fetchCustomObjects, fetchPageLayout } from "./api";
import {showError} from "./util/helper";
import Loader from './components/Loader';
import red from 'material-ui/colors/red';

const muiTheme = createMuiTheme({
    palette: {
        borderColor: '#d52b1e',
        primary: '#d52b1e',
    }
});

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showLoading: false,
        };
    }

    componentDidMount() {

    }

    render() {
        return (
            <MuiThemeProvider theme={muiTheme}>
                <Container>
                    { this.state.showLoading && <Loader/> }
                    <DashboardPage/>
                </Container>
            </MuiThemeProvider>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);
/*
class app {
    constructor() {
        console.log("Ready for API fun!");
        this.customObjects = [];
        this.init();
    }

    init() {
        new Promise((resolve, reject) => {
            jQuery("body").load("https://xenotime-india.github.io/vf-page-builder/outsideExtension/build/template.html", function () {
                resolve();
            });
        })
        .then(() => {
            //showLoading();
            return connection.metadata.list([{type: 'CustomObject', folder: null}], apiVersion);
        })
        .then((metadata) => {
            this.customObjects = metadata.map(function (item) {
                return item.fullName;
            });
            console.log(this.customObjects);
        })
        .catch(showError);
    }
}

jQuery("link[rel='stylesheet']").remove();
jQuery('body').html('');
new app();*/
