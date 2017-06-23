import React, {
    Component
} from 'react';
import Issues from '../issues/Issues';
import './Home.css';

class Home extends Component {
    render() {
        return (
            <div className='home-component'>
                <Issues/>
            </div>
        );
    }
}

export default Home;
