import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import classNames from 'classnames'
import ExpansionPanel from '@material-ui/core/ExpansionPanel'
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails'
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary'
import ExpansionPanelActions from '@material-ui/core/ExpansionPanelActions'
import Typography from '@material-ui/core/Typography'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
// import Chip from '@material-ui/core/Chip'
import Button from '@material-ui/core/Button'
import Divider from '@material-ui/core/Divider'
import ContainerTable from './containerTable.jsx'
import amber from '@material-ui/core/colors/amber'
const styles = theme => ({
  root: {
    width: '100%',
  },
  warning: {
    color: amber[700],
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
  icon: {
    verticalAlign: 'bottom',
    height: 20,
    width: 20,
  },
  details: {
    alignItems: 'center',
  },
  column: {
    flexBasis: '33.33%',
  },
  helper: {
    borderLeft: `2px solid ${theme.palette.divider}`,
    padding: `${theme.spacing.unit}px ${theme.spacing.unit * 2}px`,
  },
  link: {
    color: theme.palette.primary.main,
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline',
    },
  },
})

function DetailedExpansionPanel (props) {
  const { classes, item, refill } = props
  const {itemName, details} = item || {}
  const finalDetail = details[0]
  const variant = finalDetail.quantity < 700 ? 'warning' : 'root'
  const text = variant === 'warning' ? 'Please refill the container' : 'Enough Quantity in the container'
  return (
    <div className={classes.root}>
      <ExpansionPanel>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <div className={classes.column}>
            <Typography className={classNames(classes[variant], classes.heading)}>{itemName}</Typography>
          </div>
          <div className={classes.column}>
            <Typography className={classes.secondaryHeading}>{finalDetail.quantity}gm</Typography>
          </div>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails className={classes.details}>
          <div className={classes.column} >
            <ContainerTable data={details} />
          </div>
          <div className={classNames(classes.column, classes.helper)}>
            <Typography variant='caption' className={classes[variant]}>
              {text}
            </Typography>
          </div>
        </ExpansionPanelDetails>
        <Divider />
        <ExpansionPanelActions>
          <Button size='small' color='primary' onClick={() => refill(itemName)} disabled={variant !== 'warning'}>
            Refill
          </Button>
        </ExpansionPanelActions>
      </ExpansionPanel>
    </div>
  )
}

DetailedExpansionPanel.propTypes = {
  classes: PropTypes.object.isRequired,
  item: PropTypes.object.isRequired,
  refill: PropTypes.func.isRequired,
}

export default withStyles(styles)(DetailedExpansionPanel)
