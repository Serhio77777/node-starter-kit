const ajv = require('ajv/lib/ajv')()

const testSchema = {
  type: 'object',
  title: 'testSchema',
  required: ['testTitle'],
  properties: {
    position: {
      type: 'number',
      minimum: 0
    },
    testTitle: {
      type: 'string'
    }
  },
  additionalProperties: false
}

module.exports = ajv.compile(testSchema)
