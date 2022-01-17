export const DESKS = {
    0: { shape: [[0]], color: '0, 0, 0' },
    I: {
      shape: [['I']],
      color: '80, 227, 230',
    },
    J: { shape: [['J', 'J']]},
    L: {
      shape: [['L', 'L', 'L']],
      color: '223, 173, 36',
    },
    O: { shape: [['O', 'O'], ['O', 'O']], color: '223, 217, 36' },
    S: { shape: [['S', 'S', 'S'], ['S', 'S', 'S']], color: '48, 211, 56' },
  };
  
  export const randomTetromino = () => {
    const tetrominos = 'IJLOS';
    const randTetromino =
      tetrominos[Math.floor(Math.random() * tetrominos.length)];
    return DESKS[randTetromino];
  };