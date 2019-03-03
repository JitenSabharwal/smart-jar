import React from 'react'
// import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
// import { Hidden } from '@material-ui/core'
import Container from './components/container.jsx'
import FormDialog from './components/containerModel'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Fab from '@material-ui/core/Fab'
import AddIcon from '@material-ui/icons/Add'
import {addContainer, findContainer} from '../../actions/index'

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    width: '100%',
  },
  control: {
    padding: theme.spacing.unit * 2,
  },
  fab: {
    position: 'fixed',
    bottom: 5,
    right: 5,
  },
})

class ContainerComponent extends React.Component {
  state = {
    editing: false,
    formOpen: false,
  };
  refill = (itemName) => {
    this.props.addContainer(itemName, 1000)
  }
  handleModal = (event, value) => {
    this.setState({formOpen: !this.state.formOpen})
    if (value && value.itemName && value.quantity) { this.props.addContainer(value) }
  }
  render () {
    const { list, classes } = this.props
    return (
      <div className={classes.root}>
        <Grid container spacing={16}>
          {
          list.map(l => {
          return (<Grid item md={12} sm={12} xs={12} key={l.itemName}>
            <Container item={l} refill={this.refill} />
          </Grid>)
          })
        }
        </Grid>
        <Fab color='secondary' className={classes.fab} onClick={this.handleModal}>
          <AddIcon />
        </Fab>
        <FormDialog open={this.state.formOpen} handleFormClose={this.handleModal} />
      </div>

    )
  }
}

ContainerComponent.propTypes = {
  classes: PropTypes.object,
  list: PropTypes.array,
  addContainer: PropTypes.func.isRequired,
}
const containerList = withStyles(styles)(ContainerComponent)

const mapStateToProps = (state) => {
  return {
    selected: !!state.container.selected && !!state.container.selected.name,
    list: state.container.list,
  }
}
export default connect(mapStateToProps, {addContainer, findContainer})(containerList)
