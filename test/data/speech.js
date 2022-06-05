module.exports = [
  [
    {
      type: 'speech',
      author: [{ family: 'Eskew', given: 'Mike' }],
      issued: { 'date-parts': [[2004, 12, 30]] },
      title: 'Economic Isolationism Isn\'t an Option',
      'event-title': 'Executive Speeches',
      'event-place': 'Washington, D.C.'
    },
    `{{cite speech
 | last1    = Eskew
 | first1   = Mike
 | date     = 2004-12-30
 | title    = Economic Isolationism Isn't an Option
 | event    = Executive Speeches
 | location = Washington, D.C.
}}`
  ],
  [
    {
      type: 'speech',
      author: [{ literal: 'First Last' }],
      issued: { 'date-parts': [[2000, 4, 1]] },
      accessed: { 'date-parts': [[2006, 10, 12]] },
      title: 'Title',
      URL: 'http://www.example.org',
      'event-place': 'Location'
    },
    '{{cite speech |author1=First Last |date=2000-04-01 |access-date=2006-10-12 |title=Title |url=http://www.example.org |location=Location}}'
  ],
  [
    {
      type: 'speech',
      author: [{ family: 'Last', given: 'First' }],
      issued: { 'date-parts': [[2000, 4, 1]] },
      title: 'Title',
      'event-title': 'Event',
      'event-place': 'Location'
    },
    '{{cite speech |last1=Last |first1=First |date=2000-04-01 |title=Title |event=Event |location=Location}}'
  ]
]
