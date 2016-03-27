import React, {Component} from 'react';
import Container from '../../shared/Container';
import Heading from '../../shared/Heading';
import Code from '../../shared/Code';
import SimpleUploadEditor from './SimpleUploadEditor';
import NavBar from '../../shared/NavBar';
import Separator from '../../shared/Separator';

export default class App extends Component {
    render() {
        return (
            <div>
                <NavBar />
                <Separator />
                <Container>
                    <Heading level={ 2 }>Image uploading</Heading>
                </Container>
                <Container>
                    <Heading level={ 2 }>Simple Example</Heading>
                    <SimpleUploadEditor />
                </Container>
            </div>
        );
    }
}
