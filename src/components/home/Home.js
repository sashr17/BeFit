import React, {
    Component
} from 'react';
import axios from 'axios';
import './Home.css';

class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            posts: []
        };
    }

    componentDidMount() {
        axios.get('https://api.myjson.com/bins/8phdd')
            .then(res => {
                const posts = res.data['Task-details'];
                this.setState({
                    posts
                });
            });
    }

    render() {
        return (
            <div className='home-component'>
                <h2> Basic Task fields </h2>
                <ul>
                {
                    this.state.posts.map((post, index) =>
                    <li key={index}>{post}</li>)
                }
                </ul>
            </div>
        );
    }
}

export default Home;
