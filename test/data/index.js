module.exports = {
  'AV media': require('./av_media.js'),
  book: require('./book.js'),
  conference: require('./conference.js'),
  encyclopedia: require('./encyclopedia.js'),
  episode: require('./episode.js'),
  interview: require('./interview.js'),
  journal: require('./journal.js'),
  map: require('./map.js'),
  news: require('./news.js'),
  report: require('./report.js'),
  serial: require('./serial.js'),
  speech: require('./speech.js'),
  '': [
    [
      {
        author: [{
          given: 'First',
          'dropping-particle': 'de',
          'non-dropping-particle': 'La',
          family: 'Last',
          suffix: 'Jr.'
        }],
        title: 'All sorts of name particles'
      },
      `{{Citation
 | last1  = La Last
 | first1 = First de, Jr.
 | title  = All sorts of name particles
}}`
    ],
    [
      {
        issued: { 'date-parts': [[2020], [2022]] },
        'original-date': { 'date-parts': [[2021, 1], [2022, 2]] },
        accessed: { 'date-parts': [[2021, 1, 1], [2022, 2, 2]] },
        title: 'Date ranges'
      },
      `{{Citation
 | date        = 2020 – 2022
 | orig-date   = January 2021 – February 2022
 | access-date = 1 January 2021 – 2 February 2022
 | title       = Date ranges
}}`
    ],
    [
      {
        custom: {
          S2ID: 'foo',
          SWHID: 'bar'
        },
        title: 'Custom identifiers'
      },
      `{{Citation
 | title = Custom identifiers
 | s2cid = foo
 | id    = bar
}}`
    ],
    [
      {
        medium: 'DVD',
        title: 'Medium only'
      },
      `{{Citation
 | title = Medium only
 | type  = DVD
}}`
    ],
    [
      {
        issue: 1,
        'volume-title': 'Special first issue',
        title: 'Issue number and issue title'
      },
      `{{Citation
 | title = Issue number and issue title
 | issue = 1, ''Special first issue''
}}`
    ]
  ]
}
