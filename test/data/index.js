export default {
  'AV media': (await import('./av_media.js')).default,
  book: (await import('./book.js')).default,
  conference: (await import('./conference.js')).default,
  encyclopedia: (await import('./encyclopedia.js')).default,
  episode: (await import('./episode.js')).default,
  interview: (await import('./interview.js')).default,
  journal: (await import('./journal.js')).default,
  map: (await import('./map.js')).default,
  news: (await import('./news.js')).default,
  report: (await import('./report.js')).default,
  serial: (await import('./serial.js')).default,
  speech: (await import('./speech.js')).default,
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
