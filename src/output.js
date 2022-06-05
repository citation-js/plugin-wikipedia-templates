import { convert } from './mapping.js'

function formatTemplate (entry, { format = 'vertical' }) {
  const { type, parameters } = convert(entry)
  const template = type ? `cite ${type}` : 'Citation'

  if (format === 'horizontal') {
    const body = parameters.map(([field, value]) => `|${field}=${value}`).join(' ')
    return `{{${template} ${body}}}`
  }

  const longestField = parameters.reduce((max, [field]) => Math.max(max, field.length), -Infinity)
  const body = parameters.map(([field, value]) => ` | ${field.padEnd(longestField, ' ')} = ${value}`).join('\n')
  return `{{${template}
${body}
}}`
}

export default {
  wikipediaTemplate (csl, options = {}) {
    return csl.map(entry => formatTemplate(entry, options)).join('\n\n')
  }
}
