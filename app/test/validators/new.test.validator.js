const ajv = require('ajv/lib/ajv')()

const testSchema = {
  type: 'object',
  title: 'testSchema',
  required: ['testTitle', 'position'],
  properties: {
    position: {
      type: 'number',
      minimum: 0
    },
    testTitle: {
      type: 'string'
    },
    required: true
  },
  additionalProperties: false
}

module.exports = ajv.compile(testSchema)
