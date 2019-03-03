import {MAX_LENGTH, NAME_REGEX} from '../constants'
// Sync Validaton handles validation for required and pattern fields
export default function (values) {
  const errors = {}
  const requiredFields = [
    'firstName',
    'birthDate',
  ]
  const nameFields = [
    'firstName',
    'lastName',
  ]
  requiredFields.forEach(field => {
    if (!values[field]) {
      errors[field] = 'This Field is Required'
    }
  })
  nameFields.forEach(field => {
    const str = values[field]
    if (str) { Object.assign(errors, nameValidation(str, field)) }
  })
  return errors
}
/**
 *
 * @param {string} str
 * @param {string} field
 */
function nameValidation (str, field) {
  const errors = {}
  if (str.length > MAX_LENGTH) {
    errors[field] = `Length should be less than ${MAX_LENGTH}`
  } else if (!NAME_REGEX.test(str)) {
    errors[field] = 'Name should contain atleast 2 letter'
  }
  return errors
}
