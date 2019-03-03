const {Schema, model} = require('mongoose')
const ContainerSchema = new Schema({
  itemName: {type: String, required: true, max: 100},
  quantity: Number,
  timestamp: {type: Date, required: true},
}, {collection: 'containers'})

module.exports = model('containers', ContainerSchema, 'containers')
