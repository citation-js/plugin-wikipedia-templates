module.exports = [
  [
    {
      type: 'book',
      title: 'Mysterious Book'
    },
    '{{cite book |title=Mysterious Book}}'
  ],
  [
    {
      type: 'book',
      title: 'Mysterious Book',
      issued: { 'date-parts': [[1901]] }
    },
    '{{cite book |date=1901 |title=Mysterious Book}}'
  ],
  [
    {
      type: 'book',
      author: [{ family: 'Bloggs', given: 'Joe' }],
      issued: { 'date-parts': [[1974]] },
      title: 'Book of Bloggs'
    },
    '{{cite book |last1=Bloggs |first1=Joe |date=1974 |title=Book of Bloggs}}'
  ],
  [
    {
      type: 'book',
      author: [
        { family: 'Bloggs', given: 'Joe' },
        { family: 'Bloggs', given: 'Fred' }
      ],
      issued: { 'date-parts': [[1974]] },
      title: 'Book of Bloggs'
    },
    '{{cite book |last1=Bloggs |last2=Bloggs |first1=Joe |first2=Fred |date=1974 |title=Book of Bloggs}}'
  ],
  [
    {
      type: 'book',
      author: [{ family: 'Bloggs', given: 'Joe' }],
      issued: { 'date-parts': [[1974]] },
      accessed: { 'date-parts': [[2006, 2, 17]] },
      title: 'Book of Bloggs',
      edition: '1st',
      URL: 'https://en.wikipedia.org/'
    },
    '{{cite book |last1=Bloggs |first1=Joe |date=1974 |access-date=2006-02-17 |title=Book of Bloggs |url=https://en.wikipedia.org/ |edition=1st}}'
  ],
  [
    {
      type: 'chapter',
      author: [{ family: 'Bloggs', given: 'Fred' }],
      editor: [{ family: 'Doe', given: 'John' }],
      issued: { 'date-parts': [[2001, 1, 1]] },
      title: 'Chapter 2: The History of the Bloggs Family',
      'container-title': 'Big Compilation Book with Many Chapters and Distinct Chapter Authors',
      publisher: 'Book Publishers',
      page: '100-110',
      ISBN: ''
    },
    '{{cite book |last1=Bloggs |first1=Fred |editor-last1=Doe |editor-first1=John |date=2001-01-01 |title=Big Compilation Book with Many Chapters and Distinct Chapter Authors |chapter=Chapter 2: The History of the Bloggs Family |publisher=Book Publishers |pages=100-110 |isbn=}}'
  ],
  [
    {
      type: 'chapter',
      author: [
        { family: 'Bloggs', given: 'Joe' },
        { family: 'Egg', given: 'Fred' }
      ],
      editor: [{ family: 'Doe', given: 'John' }],
      issued: { 'date-parts': [[2001, 1, 1]] },
      'original-date': { 'date-parts': [[1986]] },
      title: 'Chapter 6: Getting There',
      'container-title': 'Big Book with Many Chapters and Two Co-authors',
      publisher: 'Book Publishers',
      page: '100-110'
    },
    '{{cite book |last1=Bloggs |last2=Egg |first1=Joe |first2=Fred |editor-last1=Doe |editor-first1=John |date=2001-01-01 |orig-date=1986 |title=Big Book with Many Chapters and Two Co-authors |chapter=Chapter 6: Getting There |publisher=Book Publishers |pages=100-110}}'
  ],
  [
    {
      type: 'book',
      author: [
        { family: 'Bloggs', given: 'Joe' },
        { family: 'Smith', given: 'John' },
        { family: 'Smythe', given: 'Jim' }
      ],
      title: 'A Thousand Acres',
      edition: '2nd'
    },
    '{{cite book |last1=Bloggs |last2=Smith |last3=Smythe |first1=Joe |first2=John |first3=Jim |title=A Thousand Acres |edition=2nd}}'
  ],
  [
    {
      type: 'book',
      author: [
        { family: 'Playfair', given: 'I. S. O.' },
        { family: 'Stitt', given: 'G. M. S.' },
        { family: 'Molony', given: 'C. J. C.' },
        { family: 'Toomer', given: 'S. E.' }
      ],
      editor: [{ family: 'Butler', given: 'J. R. M.' }],
      issued: { 'date-parts': [[2007]] },
      'original-date': { 'date-parts': [[1954]] },
      title: 'Mediterranean and Middle East. Volume I: The Early Successes Against Italy (to May 1941)',
      'collection-title': 'History of the Second World War, United Kingdom Military Series',
      publisher: 'Naval & Military Press',
      'publisher-place': 'Uckfield, East Sussex',
      ISBN: '1-845740-65-3'
    },
    '{{cite book |last1=Playfair |last2=Stitt |last3=Molony |last4=Toomer |first1=I. S. O. |first2=G. M. S. |first3=C. J. C. |first4=S. E. |editor-last1=Butler |editor-first1=J. R. M. |date=2007 |orig-date=1954 |title=Mediterranean and Middle East. Volume I: The Early Successes Against Italy (to May 1941) |series=History of the Second World War, United Kingdom Military Series |publisher=Naval & Military Press |location=Uckfield, East Sussex |isbn=1-845740-65-3}}'
  ],
  [
    {
      type: 'book',
      author: [
        { family: 'Cordell', given: 'Bruce R.' },
        { family: 'Grubb', given: 'Jeff' },
        { family: 'Noonan', given: 'David' }
      ],
      issued: { 'date-parts': [[2001, 9]] },
      title: 'Manual of the Planes',
      publisher: 'Wizards of the Coast',
      'publisher-place': 'Renton, Washington',
      edition: '3rd',
      page: '134-137',
      ISBN: '0-7869-1850-0'
    },
    '{{cite book |last1=Cordell |last2=Grubb |last3=Noonan |first1=Bruce R. |first2=Jeff |first3=David |date=September 2001 |title=Manual of the Planes |edition=3rd |publisher=Wizards of the Coast |location=Renton, Washington |pages=134-137 |isbn=0-7869-1850-0}}'
  ],
  [
    {
      type: 'book',
      author: [{ family: 'Bloggs', given: 'Jean' }],
      issued: { 'date-parts': [[1974]] },
      accessed: { 'date-parts': [[2006, 2, 17]] },
      title: 'Book of Bloggs',
      'original-title': 'Livre de Bloggs',
      language: 'French',
      edition: '1st',
      URL: 'https://en.wikipedia.org/'
    },
    '{{cite book |last1=Bloggs |first1=Jean |date=1974 |access-date=2006-02-17 |trans-title=Book of Bloggs |title=Livre de Bloggs |url=https://en.wikipedia.org/ |language=French |edition=1st}}'
  ],
  [
    {
      type: 'book',
      author: [{ family: 'Mumford', given: 'David' }],
      issued: { 'date-parts': [[1999]] },
      title: 'The Red Book of Varieties and Schemes: Includes the Michigan Lectures (1974) on Curves and Their Jacobians',
      publisher: 'Springer-Verlag',
      edition: '2nd',
      DOI: '10.1007/b62130',
      ISBN: '354063293X'
    },
    '{{cite book |last1=Mumford |first1=David |date=1999 |title=The Red Book of Varieties and Schemes: Includes the Michigan Lectures (1974) on Curves and Their Jacobians |edition=2nd |publisher=Springer-Verlag |doi=10.1007/b62130 |isbn=354063293X}}'
  ]
]
