import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';  
import { withRouter } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import AppBar from '../../_components/appbar';
import Nav from '../../_components/nav'; 
import "./home.scss";
import { listActions } from '../../_actions';
const drawerWidth = 240;

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  appFrame: {
    zIndex: 1,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
    width: '100%',
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
  },
  'appBar-left': {
    marginLeft: drawerWidth,
  },
  'appBar-right': {
    marginRight: drawerWidth,
  },
  drawerPaper: {
    position: 'relative',
    width: drawerWidth,
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3,
  },
});


class Home extends Component {
  constructor(props){
      super(props);
      this.state = {
        data: ''
      }
  }
  submitPage = event =>{
      const { data } = this.state;
      const { dispatch } = this.props;
      dispatch(listActions.getData(1));
  }

   render() {
     const { classes } = this.props;
      var me = this;
      return (
        <div>
          <ul className="list">
          { function () {
            return me.props.listData.data.result && me.props.listData.data.result.aggregationList.map(function (item) {
                return <li className="item">
                      <div className="img"><img src={item.originalImageUrl}/></div>
                      <dl className="detail">
                        <dt className="site">{item.simpleDesc} </dt>
                        <dt><span className="city">上海</span><span className="sort">5A景区</span></dt>
                        <dt><span className="score">4.7分</span><span className="sold">{item.expCountStr}</span></dt>
                        <dt><span className="tag"></span></dt>
                      </dl>
                    </li>
            })
          }()}
           
          </ul>
          <button value="" onClick={(event)=>{this.submitPage()}}>分页</button>
        </div>
      );
   }
}
  
Home.propTypes = {
      classes: PropTypes.object.isRequired,
};
    
  
function mapStateToProps(state) {
    return state;
}


const connectedHomePage = withRouter(connect(mapStateToProps, null, null, {
    pure: false
})(withStyles(styles)(Home)));

export { connectedHomePage as Home };
  