import getTags from './get-tags'

describe('getTags', () => {
  it('should get unique tags from posts', () => {
    const posts = [
      { name: 'a post', tags: ['arquitectura', 'patron', 'testing'] },
      { name: 'a post 1', tags: ['planeacion', 'agil'] },
      { name: 'a post 2', tags: ['agil', 'requerimientos'] },
      { name: 'a post 3', tags: ['agil', 'equipo', 'codigo'] },
      { name: 'a post 4', tags: ['codigo', 'objetos', 'diseño'] },
      {
        name: 'a post 5',
        tags: ['patron', 'practica', 'proceso', 'debug', 'codigo']
      },
      { name: 'a post 6', tags: ['diseño', 'patron', 'testing'] },
      { name: 'a post 7', tags: ['analisis', 'diseño', 'objetos'] },
      { name: 'a post 8', tags: ['practica', 'testing'] },
      {
        name: 'a post 9',
        tags: ['arquitectura', 'codigo', 'testing', 'formas-de-ver']
      },
      { name: 'a post 10', tags: ['proceso', 'agil', 'formas-de-ver'] }
    ]

    const expected = [
      'arquitectura',
      'patron',
      'testing',
      'planeacion',
      'agil',
      'requerimientos',
      'equipo',
      'codigo',
      'objetos',
      'diseño',
      'practica',
      'proceso',
      'debug',
      'analisis',
      'formas-de-ver'
    ]

    expect(getTags(posts)).toEqual(expect.arrayContaining(expected))
    expect(getTags(posts)).toHaveLength(expected.length)
  })
})
