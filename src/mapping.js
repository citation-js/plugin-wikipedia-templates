import { util } from '@citation-js/core'
import { format as formatDate } from '@citation-js/date'
import { format as formatName } from '@citation-js/name'

const TYPE_MAPPING = {
  article: 'journal',
  'article-journal': 'journal',
  'article-magazine': 'magazine',
  'article-newspaper': 'news',
  // bill: '',
  book: 'book',
  broadcast: 'serial',
  chapter: 'book',
  // classic: '',
  // collection: '',
  dataset: 'web',
  // document: '',
  entry: 'encyclopedia',
  'entry-dictionary': 'encyclopedia',
  'entry-encyclopedia': 'encyclopedia',
  // event: '',
  figure: 'AV media',
  graphic: 'AV media',
  // hearing: '',
  interview: 'interview',
  // legal_case: '',
  // legislation: '',
  // manuscript: '',
  map: 'map',
  motion_picture: 'AV media',
  // musical_score: '',
  // pamphlet: '',
  'paper-conference': 'conference',
  // patent: '',
  // performance: '',
  periodical: 'magazine',
  // personal_communication: '',
  post: 'web',
  'post-weblog': 'web',
  // regulation: '',
  report: 'report',
  // review: '',
  // 'review-book': '',
  software: 'web',
  song: 'AV media',
  speech: 'speech',
  standard: 'techreport',
  thesis: 'thesis',
  // treaty: '',
  webpage: 'web'
}

function getType (entry) {
  if (entry.type === 'broadcast' && entry['container-title']) {
    return 'episode'
  }

  return TYPE_MAPPING[entry.type]
}

function formatNameParts (name) {
  if (!name.family) {
    return [undefined, undefined, name.literal]
  }

  let last = name.family
  if (name['non-dropping-particle']) {
    last = name['non-dropping-particle'] + ' ' + last
  }

  let first = name.given
  if (first && name['dropping-particle']) {
    first += ' ' + name['dropping-particle']
  }
  if (first && name.suffix) {
    first += ', ' + name.suffix
  }

  return [last, first, undefined]
}

const MONTHS = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
]

const CONTRIBUTORS = [
  'chair',
  'compiler',
  'composer',
  'contributor',
  'curator',
  'director',
  'executive-producer',
  'guest',
  'host',
  'illustrator',
  'narrator',
  'organizer',
  'performer',
  'producer',
  'recipient',
  'script-writer',
  'series-creator'
]

const CONVERTERS = {
  NAMES: {
    toSource (names) {
      const output = [[], [], []]
      for (const name of names) {
        formatNameParts(name).forEach((part, index) => output[index].push(part))
      }
      return output
    }
  },
  FLAT_NAMES: {
    toSource (names) {
      return names.map(name => formatName(name, /* reversed */ false))
    }
  },
  FLAT_NAMES_WITH_ROLES: {
    toSource () {
      const names = []
      for (const role of CONTRIBUTORS) {
        if (Array.isArray(this[role])) {
          for (const name of this[role]) {
            const formattedName = formatName(name, /* reversed */ true)
            const formattedRole = role.replace(/[_-]/g, ' ')
            names.push(`${formattedName} (${formattedRole})`)
          }
        }
      }
      if (names.length) {
        return names.join('; ')
      }
    }
  },
  DATE: {
    toSource (date) {
      if (date['date-parts'] && date['date-parts'].length === 2) {
        const [start, end] = date['date-parts']
        const output = []
        if (start[2]) {
          output.push(start[2])
        } else if (start[1]) {
          output.push(MONTHS[start[1] - 1])
        } else {
          output.push(start[0])
        }

        if (start[2] && start[1] !== end[1]) {
          output.push(MONTHS[start[1] - 1])
        }
        if (start[1] && start[0] !== end[0]) {
          output.push(start[0])
        }

        output.push('\u2013')

        if (end[2]) {
          output.push(end[2])
        }
        if (end[1]) {
          output.push(MONTHS[end[1] - 1])
        }
        output.push(end[0])

        return output.join(' ')
      } else if (date['date-parts'] && date['date-parts'][0] && date['date-parts'][0].length === 2) {
        const [year, month] = date['date-parts'][0]
        return MONTHS[month - 1] + ' ' + year
      }
      return formatDate(date)
    }
  },
  TITLE: {
    toSource (title) {
      return title.replace(/<\/?(i|b|sup|sub|span [^>]+])>/g, '')
    }
  },
  GENRE: {
    toSource (genre, medium) {
      return genre || medium
    }
  },
  ISSUE: {
    toSource (issue, title) {
      return issue && title ? `${issue}, ''${title}''` : issue
    }
  },
  PAGE: {
    toSource (page) {
      return page.includes('-') ? [undefined, page] : [page, undefined]
    }
  },
  IDENTIFIERS: {
    toSource (custom) {
      return [custom.S2ID, custom.SWHID]
    }
  }
}

const FIELD_MAPPING = [
  // AUTHORS
  // =======
  {
    source: ['last', 'first', 'author'],
    target: 'author',
    convert: CONVERTERS.NAMES
  },
  {
    source: ['last', 'first', 'author'],
    target: 'container-author',
    convert: CONVERTERS.NAMES,
    when: { target: { author: false } }
  },
  {
    source: ['editor-last', 'editor-first', 'editor'],
    target: 'editor',
    convert: CONVERTERS.NAMES
  },
  {
    source: ['translator-last', 'translator-first', 'translator'],
    target: 'translator',
    convert: CONVERTERS.NAMES
  },
  {
    source: 'interviewer',
    target: 'interviewer',
    convert: CONVERTERS.FLAT_NAMES
  },
  {
    source: 'people',
    convert: CONVERTERS.FLAT_NAMES_WITH_ROLES
  },

  // DATES
  // =====
  {
    source: 'date',
    target: 'issued',
    convert: CONVERTERS.DATE
  },
  {
    source: 'orig-date',
    target: 'original-date',
    convert: CONVERTERS.DATE
  },
  {
    source: 'publication-date',
    target: 'available-date',
    convert: CONVERTERS.DATE
  },
  {
    source: 'access-date',
    target: 'accessed',
    convert: CONVERTERS.DATE
  },

  // TITLES
  // ======
  {
    source: 'title',
    target: 'title',
    convert: CONVERTERS.TITLE,
    when: {
      target: {
        type (type) { return type !== 'chapter' },
        'original-title': false
      }
    }
  },
  {
    source: 'work',
    target: 'container-title',
    convert: CONVERTERS.TITLE,
    when: {
      target: {
        type (type) { return !['broadcast', 'chapter'].includes(type) }
      }
    }
  },
  {
    source: 'series',
    target: 'container-title',
    convert: CONVERTERS.TITLE,
    when: {
      target: {
        type: 'broadcast'
      }
    }
  },
  {
    source: 'series',
    target: 'collection-title',
    convert: CONVERTERS.TITLE
  },
  // Translations
  {
    source: 'trans-title',
    target: 'title',
    convert: CONVERTERS.TITLE,
    when: {
      target: {
        'original-title': true
      }
    }
  },
  {
    source: 'title',
    target: 'original-title',
    convert: CONVERTERS.TITLE
  },
  // Chapters
  {
    source: 'title',
    target: 'container-title',
    convert: CONVERTERS.TITLE,
    when: {
      target: {
        type: 'chapter'
      }
    }
  },
  {
    source: 'chapter',
    target: 'title',
    convert: CONVERTERS.TITLE,
    when: {
      target: {
        type: 'chapter'
      }
    }
  },
  // Events
  {
    source: 'conference',
    target: 'event-title',
    when: { target: { type: 'paper-conference' } }
  },
  {
    source: 'event',
    target: 'event-title',
    when: { target: { type: 'speech' } }
  },

  // OTHER
  // =====
  {
    source: 'url',
    target: 'URL'
  },
  {
    source: 'department',
    target: 'section'
  },
  {
    source: 'type',
    target: ['genre', 'medium'],
    convert: CONVERTERS.GENRE
  },
  'language',
  'edition',
  'scale',
  {
    source: 'publisher',
    target: 'publisher',
    when: {
      target: {
        type (type) { return !['broadcast'].includes(type) }
      }
    }
  },
  {
    source: 'network',
    target: 'publisher',
    when: {
      target: {
        type: 'broadcast'
      }
    }
  },
  {
    source: 'location',
    target: 'publisher-place',
    when: {
      target: { 'event-place': false }
    }
  },
  {
    source: 'publication-place',
    target: 'publisher-place',
    when: {
      target: { 'event-place': true }
    }
  },
  {
    source: 'location',
    target: 'event-place'
  },
  'volume',
  {
    source: 'issue',
    target: ['issue', 'volume-title'],
    convert: CONVERTERS.ISSUE
  },
  'number',
  {
    source: ['page', 'pages'],
    target: 'page',
    convert: CONVERTERS.PAGE
  },
  {
    source: 'at',
    target: 'locator'
  },
  {
    source: 'doi',
    target: 'DOI'
  },
  {
    source: 'isbn',
    target: 'ISBN'
  },
  {
    source: 'issn',
    target: 'ISSN'
  },
  {
    source: 'pmc',
    target: 'PMCID'
  },
  {
    source: 'pmid',
    target: 'PMID'
  },
  {
    source: ['s2cid', 'id'],
    target: 'custom',
    convert: CONVERTERS.IDENTIFIERS
  }
]

const translator = new util.Translator(FIELD_MAPPING)

export function convert (entry) {
  const type = getType(entry)

  const parameters = []
  const data = translator.convertToSource(entry)
  for (const field in data) {
    if (Array.isArray(data[field])) {
      data[field].forEach((value, index) => {
        if (value === undefined) {
          return
        }
        parameters.push([field + (index + 1), value])
      })
    } else {
      parameters.push([field, data[field]])
    }
  }

  return { type, parameters }
}
