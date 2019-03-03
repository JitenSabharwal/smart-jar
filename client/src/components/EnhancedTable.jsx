import React from 'react'
import PropTypes from 'prop-types'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TablePagination from '@material-ui/core/TablePagination'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
// import Checkbox from '@material-ui/core/Checkbox'
import EnhancedTableHead from './EnhancedTableHead.jsx'
import EnhancedTableToolbar from './EnhancedTableToolbar.jsx'
// import Avatar from '@material-ui/core/Avatar'

// Helpers
import {getSorting} from '../helpers/util'

/**
 * Component return a table for given set of
 *  rowHeads and data for the rows
 * Comonent is selectable table
 */
class EnhancedTable extends React.Component {
  state = {
    order: 'asc',
    orderBy: this.props.orderBy || '',
    selected: [],
    data: this.props.data || [],
    page: 0,
    rowsPerPage: this.props.rowsPerPage || 10,
  };

  handleRequestSort = (event, property) => {
    // TO handle sorting when the table heads are clicked
    const orderBy = property
    let order = 'desc'

    if (this.state.orderBy === property && this.state.order === 'desc') {
      order = 'asc'
    }

    this.setState({ order, orderBy })
  };

  handleSelectAllClick = (event, checked) => {
    // Handleselect all function
    if (checked) {
      this.setState(state => ({ selected: state.data.map(n => n.id) }))
    } else {
      this.setState({ selected: [] })
    }
    const {length} = this.state.selected
    if (length) {
      this.props.handleSelect(this.state.selected[length - 1])
    }
  };

  handleClick = (event, id) => {
    // TO handle click on the table row
    const { selected } = this.state
    const selectedIndex = selected.indexOf(id)
    let newSelected = []
    if (selectedIndex === -1) {
      newSelected = [id]
    } else if (selectedIndex === 0) {
      newSelected = []
    }
    this.setState({ selected: newSelected })
    // Calling the parent event handler to change the user form data
    if (newSelected.length) {
      this.props.handleSelect(id)
    } else {
      this.props.handleSelect('')
    }
  };

  handleChangePage = (event, page) => {
    this.setState({ page })
  };

  handleChangeRowsPerPage = event => {
    this.setState({ rowsPerPage: event.target.value })
  };

  handleDeleteClick = event => {
    this.handleSelectAllClick()
    this.props.handleDelete(event)
  }

  isSelected = id => this.state.selected.indexOf(id) !== -1;

  render () {
    const { classes, tableName } = this.props
    const { data, order, orderBy, selected, rowsPerPage, page } = this.state
    const emptyRows = rowsPerPage - Math.min(rowsPerPage, data.length - page * rowsPerPage)

    return (
      <Paper className={classes.root}>
        <EnhancedTableToolbar selected={selected} numSelected={selected.length} tableName={tableName} handleDelete={this.handleDeleteClick} />
        <div className={classes.tableWrapper}>
          <Table className={classes.table} aria-labelledby='tableTitle'>
            <EnhancedTableHead
              rows={this.props.rowHeads}
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={this.handleSelectAllClick}
              onRequestSort={this.handleRequestSort}
              rowCount={data.length}
            />
            <TableBody>
              {this.props.data
                .sort(getSorting(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map(n => {
                  const isSelected = this.isSelected(n._id)
                  if (!n.firstName) {
                    return (<div>No  data</div>)
                  }
                  return (
                    <TableRow
                      hover
                      onClick={event => this.handleClick(event, n._id)}
                      role='checkbox'
                      aria-checked={isSelected}
                      tabIndex={-1}
                      key={n._id}
                      selected={isSelected}
                    >
                      {/* <TableCell padding='checkbox'>
                        <Checkbox checked={isSelected} />
                      </TableCell>
                      <TableCell component='th' scope='row' padding='none' >
                        {n.firstName && n.firstName.length > 30 ? n.firstName.substring(0, 25) + '... ' : n.firstName || ''}
                      </TableCell>
                      <TableCell padding='none'>{n.lastName}</TableCell>
                      <TableCell padding='none'>{n.hobbies}</TableCell>
                      <TableCell padding='none'>{n.birthDate}</TableCell>
                      <TableCell scope='row' padding='none'>
                        <Avatar alt='Remy Sharp' src={n.profilePic} />
                      </TableCell> */}
                    </TableRow>
                  )
                })}
              {emptyRows > 0 && (
                <TableRow style={{ height: 49 * emptyRows }}>
                  <TableCell colSpan={4} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
        <TablePagination
          component='div'
          count={data.length}
          rowsPerPage={rowsPerPage}
          page={page}
          backIconButtonProps={{
            'aria-label': 'Previous Page',
          }}
          nextIconButtonProps={{
            'aria-label': 'Next Page',
          }}
          onChangePage={this.handleChangePage}
          onChangeRowsPerPage={this.handleChangeRowsPerPage}
        />
      </Paper>
    )
  }
}

EnhancedTable.propTypes = {
  classes: PropTypes.object,
  data: PropTypes.array.isRequired,
  handleDelete: PropTypes.func.isRequired,
  orderBy: PropTypes.string.isRequired,
  rowHeads: PropTypes.array.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
  tableName: PropTypes.string,
  handleSelect: PropTypes.func,

}

export default EnhancedTable
