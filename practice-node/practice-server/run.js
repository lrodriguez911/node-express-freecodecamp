const room = [
    [' ', ' ', ' '],
    [' ', ' ', 'm'],
    [' ', ' ', '*']
  ]
  const room1 = [
      [' ', ' ', ' '],
      [' ', 'm', '*'],
      ['*', ' ', ' ']
    ]
    const room2 = [
      ['*', ' ', ' ', ' '],
      [' ', 'm', '*', ' '],
      [' ', ' ', ' ', ' '],
      [' ', ' ', ' ', '*']
    ]
  function canMouseEat(direction, game) {
      // ¡Gracias por jugar a AdventJS 2021! 🤗
      // ¡Nos vemos el año que viene! 👋
      // Por favor, comparte en las redes qué te ha parecido! 🚀
      let result = [];
      for (let i = 0; i < game.length ; i++) {
         result.push(direction === 'down' && game[i].indexOf('*') === game[i < game.length -1 ? i+1 : i ].indexOf('m') && game[i].indexOf('m') !== -1 ? true : 
          direction === 'right' && game[i].indexOf('m') + 1 === game[i].indexOf('*')  && game[i].indexOf('*') !== -1 && game[i].indexOf('m') !== -1 ? true :
          direction === 'left' && game[i].indexOf('m') - 1 === game[i].indexOf('*') && game[i].indexOf('*') !== -1  && game[i].indexOf('m') !== -1? true : 
          i > 0 && direction === 'up' && game[i].indexOf('*') === game[i-1].indexOf('m') && game[i].indexOf('*') !== -1  && game[i].indexOf('m') !== -1 ? true : false)
          //console.log(result)
      }
      return result.includes(true)
    }
  const foo ={
    bar(){
      console.log('hola')
    },
    name : 'al;be'
  }