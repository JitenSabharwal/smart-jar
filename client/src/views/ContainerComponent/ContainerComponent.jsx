import React from 'react'
// import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
// import { Hidden } from '@material-ui/core'
import Container from './components/container.jsx'
import FormDialog from './components/containerModel'
import DeleteFormDialog from './components/deleteContainerModal'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Fab from '@material-ui/core/Fab'
import AddIcon from '@material-ui/icons/Add'
import Remove from '@material-ui/icons/Remove'
import {addContainer, findContainer, deleteContainer} from '../../actions/index'

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
  fabAdd: {
    position: 'fixed',
    bottom: 5,
    right: 5,
  },
  fabRemove: {
    position: 'fixed',
    bottom: 5,
    right: 100,
  },
})

class ContainerComponent extends React.Component {
  state = {
    editing: false,
    formOpen: false,
    formDeleteOpen: false,
  };
  refill = (itemName) => {
    this.props.addContainer(itemName, 1000)
  }
  handleModal = (event, value) => {
    this.setState({formOpen: !this.state.formOpen})
    if (value && value.itemName && value.quantity) { this.props.addContainer(value) }
  }
  handleDeleteModal = (event, value) => {
    this.setState({formDeleteOpen: !this.state.formDeleteOpen})
    if (value && value.itemName) { this.props.deleteContainer(value) }
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
        <Fab color='secondary' className={classes.fabAdd} onClick={this.handleModal}>
          <AddIcon />
        </Fab>
        <Fab color='secondary' className={classes.fabRemove} onClick={this.handleDeleteModal}>
          <Remove />
        </Fab>
        <FormDialog open={this.state.formOpen} handleFormClose={this.handleModal} />
        <DeleteFormDialog open={this.state.formDeleteOpen} handleFormClose={this.handleDeleteModal} />
      </div>

    )
  }
}

ContainerComponent.propTypes = {
  classes: PropTypes.object,
  list: PropTypes.array,
  addContainer: PropTypes.func.isRequired,
  deleteContainer: PropTypes.func.isRequired,
}
const containerList = withStyles(styles)(ContainerComponent)

const mapStateToProps = (state) => {
  return {
    selected: !!state.container.selected && !!state.container.selected.name,
    list: state.container.list,
  }
}
export default connect(mapStateToProps, {addContainer, findContainer, deleteContainer})(containerList)
