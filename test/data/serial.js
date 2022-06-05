module.exports = [
  [
    {
      type: 'broadcast',
      author: [
        { family: 'Nation', given: 'Terry' },
        { family: 'Maloney', given: 'David' },
        { family: 'Hinchcliffe', given: 'Philip' }
      ],
      issued: { 'date-parts': [[1975, 3, 8], [1975, 4, 12]] },
      title: 'Genesis of the Daleks',
      'collection-title': 'Doctor Who',
      publisher: 'BBC'
    },
    '{{cite serial |last1=Nation |last2=Maloney |last3=Hinchcliffe |first1=Terry |first2=David |first3=Philip |date=8 March – 12 April 1975 |title=Genesis of the Daleks |series=Doctor Who |network=BBC}}'
  ],
  [
    {
      type: 'broadcast',
      author: [
        { family: 'Stern', given: 'Howard' },
        { literal: 'Insane Clown Posse' }
      ],
      issued: { 'date-parts': [[2009, 9, 1]] },
      title: 'ICP on Howard Stern 9.1.09',
      'container-title': 'The Howard Stern Show',
      publisher: 'Sirius Satellite Radio',
      URL: 'http://www.insaneclownposse.com/media/interview/icp_howard_stern_090901.mp3'
    },
    // Note: the example belongs to Cite_serial but I do not see how this is a
    // serial as opposed to an episode
    '{{cite episode |last1=Stern |first1=Howard |author2=Insane Clown Posse |date=2009-09-01 |title=ICP on Howard Stern 9.1.09 |series=The Howard Stern Show |url=http://www.insaneclownposse.com/media/interview/icp_howard_stern_090901.mp3 |network=Sirius Satellite Radio}}'
  ]
]
