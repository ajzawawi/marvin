import React from 'react';
import { bindActionCreators } from 'redux';
import { setCalendar } from '../actions/index.js';
import { connect } from 'react-redux';
import Search from '../containers/Search.js';


class EventsPage extends React.Component{
  constructor (props) {
    super(props);
  }


  render (){
    return(
      <div className="top">
        <div className="text-xs-center midnight-blue">
          <div className="row">
            <div className="col-md-5 text-xs-right">
              <img className="marvin-img marvin-rotate" src="styles/marvin_color.png" />
            </div>

            <div className="col-md-5 marvin-intro">
            <div className="row">
              <h2 className="marvin-headline">Marvin</h2>
              <p className="lead">Your Intuitive Personal Butler</p>
              <p>Outsource all the hard work to Marvin who will help you organize your life and find fun things to do - minus the trouble of planning.</p>
            </div>

             <div className="row text-xs-center">
              <Search />
            </div>


            </div>


          </div>



        </div>

      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    events: state.events,
    user: state.user
  };
};

function mapDispatchToProps (dispatch) {
  return bindActionCreators({
    setCalendar: setCalendar
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(EventsPage);