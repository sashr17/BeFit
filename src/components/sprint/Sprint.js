import React, {
    Component
} from 'react';
import axios from 'axios';
import Stories from '../stories/Stories';
import Defects from '../defects/Defects';

class Sprint extends Component {
    constructor(props) {
        super(props);

        this.state = {
            sprintDtl: {},
            loaded : false
        };
    }

    componentDidMount () {
        axios.get('https://api.myjson.com/bins/fi6en').then(res => {
            const sprintDtl = res.data;
            console.log('Sprint >> ', sprintDtl);
            this.setState({
                sprintDtl: sprintDtl,
                loaded : true
            });
        });
    }
    
    render() {
        return (
            <div className='row'>
                <div className="panel panel-primary"> 
                    <div className="panel-heading">
                        <h3>{this.state.sprintDtl.sprintName}</h3>
                        <small>{this.state.sprintDtl.sprintId} {this.state.sprintDtl.due}</small>
                    </div>
                    <div className="panel-body">
                        <div className="col-xs-12">
                            <h4>Stories : </h4>
                            {this.state.loaded && this.state.sprintDtl.stories.length > 0 ? (
                                <Stories stories={this.state.sprintDtl.stories}/>
                            ) : (
                            <span>NA</span>
                            )}
                        </div>                        
                    </div>
                    <div className="panel-body">
                        <div className="col-xs-12">
                            <h4>Defects : </h4>
                            {this.state.loaded && this.state.sprintDtl.defects.length > 0 ? (
                                <Defects defects={this.state.sprintDtl.defects}/>
                            ) : (
                            <span>NA</span>
                            )}
                        </div>
                    </div>
                    <div className="panel-footer">
                        <span>Comments : 
                            {this.state.loaded && this.state.sprintDtl.comments.length > 0 ? (
                            <div className="well">
                                {this.state.sprintDtl.comments.map((comment, index) =>
                                    <div>{comment}</div>
                                )}
                            </div>
                            ) : (
                            <span>NA</span>
                            )}
                        </span>
                    </div>
                </div>
            </div>
        );
    }
}

export default Sprint;