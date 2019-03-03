import React from 'react'
import { TextField } from '@material-ui/core'

/**
 * Function creates atest input component
 * @param {object} props
 */
const CustomTextField = ({
  input,
  label,
  meta: { touched, error },
  ...custom
}) => {
  return (
    <TextField
      label={label}
      helperText={touched && error}
      fullWidth
      error={touched && error && error.length > 0}
      {...input}
      {...custom}
    />
  )
}
export default CustomTextField
