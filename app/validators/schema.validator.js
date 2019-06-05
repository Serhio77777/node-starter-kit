module.exports = (schema, data) => {
  const valid = schema(data)
  return valid ? true : schema.errors
}
