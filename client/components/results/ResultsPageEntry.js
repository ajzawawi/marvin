import React from 'react';
import FontAwesome from 'react-fontawesome';
import { Link } from 'react-router';

export default class ResultsPageEntry extends React.Component {

  constructor(props){
    super(props);
  }

  convertDate(time){
    var date = new Date(Date.parse(time));
    return date.toString();
  }



  render(){
    var description = this.props.event.description.text;
    var time =  this.convertDate(this.props.event.start.local);

    return (
    <div className='row event-container'>


    <div className="col-md-5 event-img">
      <img className="img-fluid" src={this.props.event.logo != null ? this.props.event.logo.url : '#'} />
    </div>

    <div className="col-md-7">
    <div className="event-result">
      <div className="row">
      <a className="event-result-headline" href={this.props.event.url}>{this.props.event.name.text}</a>
      <p>{time}</p>
      </div>

      <div className="row">
        <FontAwesome name='plus' size='1x' />
        <Link to={{ pathname: '/calendar/new', query: {id: `${this.props.event.id}`} }} >Add to Calendar</Link>
      </div>
    </div>
    </div>

    </div>
    )
  }

}


