import React, {
    Component
} from 'react';

class Defect extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            defect: props.details
        };
    }

    render() {
        return (
            <div className='col-sm-12 defectContainer'>
             
            </div>
        );
    }
}

export default Defect;