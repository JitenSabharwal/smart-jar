import React from 'react'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
import PropTypes from 'prop-types'

export default class DeleteFormDialog extends React.Component {
  state = {
    itemName: '',
  }
  handleChange = (event) => {
    this.setState({[event.target.name]: event.target.value})
  }
  render () {
    return (
      <Dialog
        open={this.props.open}
        onClose={this.props.handleFormClose}
        aria-labelledby='form-dialog-title'
        >
        <DialogTitle id='form-dialog-title'>Add / Change Item Quantity</DialogTitle>
        <DialogContent>
          <DialogContentText>
              To update or add new item in list enter the name and value in gm(max value 1000).
          </DialogContentText>
          <TextField
            autoFocus
            margin='dense'
            id='itemName'
            name='itemName'
            label='Item Name'
            type='text'
            onChange={this.handleChange}
            fullWidth
            />
        </DialogContent>
        <DialogActions>
          <Button onClick={(event) => this.props.handleFormClose(event)} color='secondary'>
              Cancel
          </Button>
          <Button
            disabled={!(this.state.itemName)}
            onClick={(event) => this.props.handleFormClose(event, {
            itemName: this.state.itemName,
            })} color='primary'>
              Delete Container
          </Button>
        </DialogActions>
      </Dialog>
    )
  }
}

DeleteFormDialog.propTypes = {
  open: PropTypes.bool.isRequired,
  handleFormClose: PropTypes.func.isRequired,
}
