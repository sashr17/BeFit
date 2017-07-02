import React, {
    Component
} from 'react';
import Defect from '../defect/Defect';

class Defects extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            defects: props.defects
        };
    }

    render() {
        return (
            <div className='col-sm-12 defectsContainer'>
                Defects : NA
              
            </div>
        );
    }
}

export default Defects;

/*<ul className="list-group">
    {this.state.defects.map((defect, index) =>
    <Defect key={index} details={defect} className="panel panel-default issue-panel"/>
    )}
</ul>*/