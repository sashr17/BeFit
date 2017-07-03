import React, {
    Component
} from 'react';
import $ from 'jquery';

class Story extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            story: props.details
        };
    }

    componentDidMount () {
        $('.icon-right-arrow').show();
        $('.icon-down-arrow').hide();
        $('.storyDtlContainer').hide();
    }

    displayContent (evt) {
        const CONTEXT = evt.currentTarget;
        $(CONTEXT).hide();
        $(CONTEXT).siblings('.icon-down-arrow').show();
        $(CONTEXT).parent().siblings('.storyDtlContainer').slideDown();
    }

    hideContent (evt) {
        const CONTEXT = evt.currentTarget;
        $(CONTEXT).hide();
        $(CONTEXT).siblings('.icon-right-arrow').show();
        $(CONTEXT).parent().siblings('.storyDtlContainer').slideUp();
    }

    render() {
        return (
            <li className="list-group-item storyContainer" id="this.state.story.id">
                <div className='media'>
                    <div className="media-left">

                    </div>
                    <div className="media-body">
                        <h4 className="media-heading">{this.state.story.name}</h4>
                        <div className="">Priority: {this.state.story.priority}</div>
                        <div className="caption">{this.state.story.desc}</div>
                        <div className="pull-right expander">
                            <span className="fa fa-2x fa-caret-right icon-arrows icon-right-arrow" aria-hidden="true" onClick={this.displayContent}></span>
                            <span className="fa fa-2x fa-caret-down icon-arrows icon-down-arrow" aria-hidden="true" onClick={this.hideContent}></span>
                        </div>
                        <div className="storyDtlContainer clearfix">
                            <div className="storyItem functional_Dtl">
                                <h5 className="heading">Functional Details</h5>
                                {(this.state.story.functional_Dtl.desc && this.state.story.functional_Dtl.desc.length > 0) ? (
                                    <p> 
                                        {this.state.story.functional_Dtl.desc.map((list, index) =>
                                            <span key={'fd'+index}>{list}</span>
                                        )}
                                    </p>
                                ) : ('')}
                                
                                {(this.state.story.functional_Dtl.inputFields && this.state.story.functional_Dtl.inputFields.length > 0) ? 
                                    (<ul>Input Fields: 
                                        {this.state.story.functional_Dtl.inputFields.map((item, i) =>                                        
                                            <li key={'fdi'+i}>{item.title}, Type: {item.desc}
                                                {item.type == 'dropDownList' && item.listItems.length > 0 ? (
                                                    <ul className="secondaryList">
                                                        {item.listItems.map((list, index) =>
                                                            <li key={'fddl'+index}>{list.desc}</li>
                                                        )}
                                                    </ul>
                                                ) : ('')}
                                            </li>
                                        )}
                                    </ul>) : ''}
                            </div>
                            
                            {this.state.story.validation_rules ? (
                                <div className="storyItem validation_rules">
                                    <h5 className="heading">Validation Rules</h5>
                                    <ul> 
                                        {(this.state.story.validation_rules.items && this.state.story.validation_rules.items.length > 0) ? (
                                            this.state.story.validation_rules.items.map((item, i) =>
                                                <li key={'vritems'+i}>
                                                <span>
                                                    Input Field: {item.title}, {item.isRequired ? 'Mandatory' : ''}, {item.desc}
                                                </span>
                                                </li>
                                            )
                                        ) : ('')}
                                    </ul>
                                    <ul> 
                                        {(this.state.story.validation_rules.desc && this.state.story.validation_rules.desc.length > 0) ? (
                                            this.state.story.validation_rules.desc.map((item, i) =>
                                                <li key={'vrdesc'+i}>
                                                    <span>{item}</span>
                                                </li>
                                            )
                                        ) : ('')}
                                    </ul>
                                </div>
                            ) : ('')}

                            <div className="storyItem acceptance_criteria">
                                <h5 className="heading">{this.state.story.acceptance_criteria.title}</h5>
                                <ul>
                                    {this.state.story.acceptance_criteria.items.map((item, index) =>
                                    <li key={'ac'+index}>{item}</li>
                                    )}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </li>
        );
    }
}

export default Story;