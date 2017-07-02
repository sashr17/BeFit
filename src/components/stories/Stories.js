import React, {
    Component
} from 'react';
import Story from '../story/Story';

class Stories extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            stories: props.stories
        };
    }

    render() {
        return (
            <div className='col-sm-12 storiesContainer'>
              <ul className="list-group">
                {this.state.stories.map((story, index) =>
                <Story key={index} details={story} className="panel panel-default issue-panel"/>
                )}
              </ul>
            </div>
        );
    }
}

export default Stories;