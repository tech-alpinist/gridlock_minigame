const image = {
  background: 'background',
  star: 'star',
  round: 'round',
  result: 'result',
  buttons: 'buttons',
  blocks: 'blocks',
  hands: 'hands',
  starFill: 'starFill'
} as const;

const atlas = {
  flares: 'flares'
} as const;

const json = {
  flares: 'flaresJSON'
} as const;

const scene = {
  boot: 'boot',
  main: 'main',
  map: 'map',
  result: 'result',
  tutorial: 'tutorial',
} as const;

const rotation = [
  // type_1
  [
    [ [0,50], [50,50], [100,50], [100,100] ],
    [ [50,0], [50,50], [50,100], [0,100] ],
    [ [0,0], [0,50], [50,50], [100, 50] ],
    [ [50,0], [100,0], [50, 50], [50, 100] ],
  ],
  // type_2
  [
    [ [0,100], [0,50], [50,50], [100,50] ],
    [ [0,0], [50,0], [50,50], [50,100] ],
    [ [0, 50], [50,50], [100, 50], [100,0] ],
    [ [50,0], [50,50], [50,100], [100, 100] ],
  ],
  // type_3
  [
    [ [0,0], [0,50], [50, 50], [50, 100] ],
    [ [0,50], [50,50], [50,0], [100, 0] ],
  ],
  // type_4
  [
    [ [0,100], [0,50], [50,50], [50,0] ],
    [ [0,0], [50,0], [50,50], [100,50] ],
  ],
  // type_5
  [
    [ [0,0] ]
  ],
  // type_6
  [
    [ [0,0], [50,0], [0,50], [50,50] ],    
  ],
  // type_7
  [
    [ [0,50], [50,50], [100,50], [50,0] ],
    [ [50,0], [50,50], [50,100], [100,50] ],
    [ [0, 50], [50,50], [100, 50], [50,100] ],
    [ [0,50], [50,0], [50,50], [50, 100] ],
  ],
  // type_8
  [
    [ [0,50], [50,50], [100,50], [150,50] ],
    [ [50,0], [50,50], [50,100], [50,150] ],
  ],
  // type_9
  [
    [ [0,0], [50,0], [100,0], [0,50], [50,50], [100,50] ],
    [ [0,0], [50,0], [0,50], [50,50], [0,100], [50,100] ],
  ],
] as const;

const block = {
  type_1: 0,
  type_2: 1,
  type_3: 2,
  type_4: 3,
  type_5: 4,
  type_6: 5,
  type_7: 6,
  type_8: 7,
  type_9: 8,
}

const map = [
  // round 1-1
  {
    scale: 1,
    position: [550, 250],
    row: 4,
    col: 4,
    grid: [
      1, 1, 1, 1,
      1, 1, 1, 1,
      1, 1, 1, 1,
      1, 1, 1, 1,
    ],
    blocks: [
      {
        color: 1,
        shape: block.type_1,
        position: [100, 100]
      },
      {
        color: 2,
        shape: block.type_7,
        position: [100, 450]
      },
      {
        color: 3,
        shape: block.type_8,
        position: [1000, 100]
      },
      {
        color: 4,
        shape: block.type_7,
        position: [1000, 400]
      },
    ]
  },
  // round 1-2
  {
    scale: 1,
    position: [550, 250],
    row: 4,
    col: 4,
    grid: [
      1, 1, 1, 1,
      1, 1, 1, 0,
      1, 1, 1, 0,
      1, 1, 1, 1,
    ],
    blocks: [
      {
        color: 4,
        shape: block.type_9,
        position: [100, 100]
      },
      {
        color: 5,
        shape: block.type_1,
        position: [100, 450]
      },
      {
        color: 2,
        shape: block.type_8,
        position: [1000, 250]
      },
    ]
  },
  // round 1-3
  {
    scale: 1,
    position: [550, 250],
    row: 4,
    col: 4,
    grid: [
      0, 1, 1, 1,
      1, 1, 1, 1,
      1, 1, 1, 1,
      1, 1, 1, 0,
    ],
    blocks: [
      {
        color: 2,
        shape: block.type_9,
        position: [100, 100]
      },
      {
        color: 4,
        shape: block.type_7,
        position: [100, 450]
      },
      {
        color: 6,
        shape: block.type_3,
        position: [1000, 250]
      },
    ]
  },
  // round 2-1
  {
    scale: 1,
    position: [550, 250],
    row: 4,
    col: 4,
    grid: [
      1, 1, 0, 0,
      1, 1, 0, 0,
      1, 1, 1, 1,
      1, 1, 1, 1,
    ],
    blocks: [
      {
        color: 3,
        shape: block.type_1,
        position: [100, 100]
      },
      {
        color: 3,
        shape: block.type_1,
        position: [100, 450]
      },
      {
        color: 5,
        shape: block.type_6,
        position: [1000, 250]
      },
    ]
  },
  // round 2-2
  {
    scale: 1,
    position: [550, 250],
    row: 4,
    col: 4,
    grid: [
      1, 1, 1, 1,
      1, 0, 0, 1,
      1, 0, 0, 1,
      1, 1, 1, 1,
    ],
    blocks: [
      {
        color: 1,
        shape: block.type_1,
        position: [100, 100]
      },
      {
        color: 2,
        shape: block.type_2,
        position: [100, 450]
      },
      {
        color: 3,
        shape: block.type_8,
        position: [1000, 250]
      },
    ]
  },
  // round 2-3
  {
    scale: 1,
    position: [550, 250],
    row: 4,
    col: 4,
    grid: [
      1, 1, 1, 1,
      0, 1, 1, 0,
      0, 1, 1, 0,
      1, 1, 1, 1,
    ],
    blocks: [
      {
        color: 1,
        shape: block.type_1,
        position: [100, 100]
      },
      {
        color: 2,
        shape: block.type_2,
        position: [100, 450]
      },
      {
        color: 3,
        shape: block.type_8,
        position: [1000, 250]
      },
    ]
  },
  // round 3-1
  {
    scale: 1,
    position: [550, 250],
    row: 4,
    col: 4,
    grid: [
      0, 0, 1, 0,
      1, 1, 1, 1,
      1, 1, 1, 1,
      1, 0, 1, 1,
    ],
    blocks: [
      {
        color: 2,
        shape: block.type_2,
        position: [100, 100]
      },
      {
        color: 3,
        shape: block.type_2,
        position: [100, 450]
      },
      {
        color: 5,
        shape: block.type_2,
        position: [1000, 250]
      },
    ]
  },
  // round 3-2
  {
    scale: 1,
    position: [550, 250],
    row: 4,
    col: 4,
    grid: [
      0, 0, 1, 0,
      1, 1, 1, 1,
      1, 1, 1, 1,
      1, 0, 1, 1,
    ],
    blocks: [
      {
        color: 1,
        shape: block.type_7,
        position: [100, 100]
      },
      {
        color: 1,
        shape: block.type_7,
        position: [100, 450]
      },
      {
        color: 4,
        shape: block.type_6,
        position: [1000, 250]
      },
    ]
  },
  // round 3-3
  {
    scale: 1,
    position: [550, 250],
    row: 4,
    col: 4,
    grid: [
      1, 1, 1, 1,
      1, 1, 1, 0,
      1, 1, 1, 0,
      1, 1, 1, 0,
    ],
    blocks: [
      {
        color: 2,
        shape: block.type_3,
        position: [100, 100]
      },
      {
        color: 3,
        shape: block.type_7,
        position: [100, 450]
      },
      {
        color: 3,
        shape: block.type_7,
        position: [1000, 100]
      },
      {
        color: 6,
        shape: block.type_5,
        position: [1000, 400]
      },
    ]
  },
  // round 4-1
   {
    scale: 1,
    position: [550, 250],
    row: 4,
    col: 4,
    grid: [
      1, 1, 1, 0,
      1, 1, 1, 1,
      1, 1, 1, 1,
      0, 1, 1, 1,
    ],
    blocks: [
      {
        color: 2,
        shape: block.type_9,
        position: [100, 100]
      },
      {
        color: 3,
        shape: block.type_1,
        position: [100, 450]
      },
      {
        color: 3,
        shape: block.type_7,
        position: [1000, 250]
      },
    ]
  },
  // round 4-2
  {
    scale: 1,
    position: [550, 250],
    row: 4,
    col: 4,
    grid: [
      0, 0, 1, 1,
      1, 1, 1, 1,
      1, 1, 1, 1,
      1, 1, 0, 0,
    ],
    blocks: [
      {
        color: 2,
        shape: block.type_1,
        position: [100, 100]
      },
      {
        color: 3,
        shape: block.type_1,
        position: [100, 450]
      },
      {
        color: 3,
        shape: block.type_4,
        position: [1000, 250]
      },
    ]
  },
  // round 4-3
  {
    scale: 1,
    position: [550, 250],
    row: 4,
    col: 4,
    grid: [
      1, 1, 1, 0,
      1, 1, 1, 1,
      1, 0, 1, 1,
      0, 0, 1, 1,
    ],
    blocks: [
      {
        color: 1,
        shape: block.type_7,
        position: [100, 100]
      },
      {
        color: 2,
        shape: block.type_3,
        position: [100, 450]
      },
      {
        color: 4,
        shape: block.type_6,
        position: [1000, 250]
      },
    ]
  },
  // round 5-1
  {
    scale: 1,
    position: [550, 250],
    row: 4,
    col: 4,
    grid: [
      0, 0, 1, 1,
      0, 1, 1, 1,
      1, 1, 1, 1,
      1, 1, 1, 0,
    ],
    blocks: [
      {
        color: 2,
        shape: block.type_1,
        position: [100, 100]
      },
      {
        color: 3,
        shape: block.type_2,
        position: [100, 450]
      },
      {
        color: 4,
        shape: block.type_4,
        position: [1000, 250]
      },
    ]
  },
  // round 5-2
  {
    scale: 1,
    position: [550, 250],
    row: 4,
    col: 4,
    grid: [
      0, 1, 1, 1,
      1, 1, 1, 0,
      1, 1, 1, 0,
      0, 1, 1, 1,
    ],
    blocks: [
      {
        color: 3,
        shape: block.type_2,
        position: [100, 100]
      },
      {
        color: 3,
        shape: block.type_2,
        position: [100, 450]
      },
      {
        color: 5,
        shape: block.type_3,
        position: [1000, 250]
      },
    ]
  },
  // round 5-3
  {
    scale: 1,
    position: [550, 250],
    row: 4,
    col: 4,
    grid: [
      0, 0, 1, 1,
      1, 1, 1, 1,
      1, 1, 1, 1,
      0, 0, 1, 1,
    ],
    blocks: [
      {
        color: 2,
        shape: block.type_2,
        position: [100, 100]
      },
      {
        color: 2,
        shape: block.type_2,
        position: [100, 450]
      },
      {
        color: 3,
        shape: block.type_4,
        position: [1000, 250]
      },
    ]
  },
  // round 6-1
  {
    scale: 1,
    position: [500, 200],
    row: 5,
    col: 5,
    grid: [
      0, 1, 1, 0, 0,
      1, 1, 1, 1, 0,
      1, 1, 1, 1, 1,
      1, 1, 1, 1, 1,
      1, 1, 1, 1, 0,
    ],
    blocks: [
      {
        color: 1,
        shape: block.type_6,
        position: [100, 100]
      },
      {
        color: 3,
        shape: block.type_7,
        position: [100, 450]
      },
      {
        color: 3,
        shape: block.type_7,
        position: [1000, 100]
      },
      {
        color: 3,
        shape: block.type_7,
        position: [1000, 400]
      },
      {
        color: 3,
        shape: block.type_7,
        position: [100, 300]
      }
    ]
  },
  // round 6-2
  {
    scale: 1,
    position: [500, 200],
    row: 5,
    col: 5,
    grid: [
      0, 0, 1, 1, 1,
      0, 0, 1, 1, 1,
      1, 1, 1, 1, 1,
      1, 1, 1, 0, 0,
      1, 1, 1, 0, 0,
    ],
    blocks: [
      {
        color: 1,
        shape: block.type_1,
        position: [100, 100]
      },
      {
        color: 2,
        shape: block.type_4,
        position: [100, 450]
      },
      {
        color: 3,
        shape: block.type_5,
        position: [1000, 100]
      },
      {
        color: 4,
        shape: block.type_2,
        position: [1000, 400]
      },
      {
        color: 5,
        shape: block.type_3,
        position: [100, 300]
      }
    ]
  },
  // round 6-3
  {
    scale: 1,
    position: [500, 200],
    row: 5,
    col: 5,
    grid: [
      0, 0, 1, 1, 0,
      0, 1, 1, 1, 1,
      1, 1, 1, 1, 1,
      1, 1, 1, 1, 0,
      0, 1, 1, 0, 0,
    ],
    blocks: [
      {
        color: 1,
        shape: block.type_6,
        position: [100, 100]
      },
      {
        color: 2,
        shape: block.type_4,
        position: [100, 450]
      },
      {
        color: 3,
        shape: block.type_5,
        position: [1000, 100]
      },
      {
        color: 1,
        shape: block.type_6,
        position: [1000, 400]
      },
      {
        color: 2,
        shape: block.type_4,
        position: [100, 300]
      }
    ]
  },
  // round 7-1
  {
    scale: 1,
    position: [500, 200],
    row: 5,
    col: 5,
    grid: [
      0, 1, 1, 1, 0,
      1, 1, 1, 1, 1,
      1, 1, 1, 1, 1,
      1, 1, 1, 1, 0,
      0, 1, 1, 1, 0,
    ],
    blocks: [
      {
        color: 1,
        shape: block.type_1,
        position: [100, 100]
      },
      {
        color: 2,
        shape: block.type_2,
        position: [100, 450]
      },
      {
        color: 3,
        shape: block.type_6,
        position: [1000, 100]
      },
      {
        color: 4,
        shape: block.type_3,
        position: [1000, 400]
      },
      {
        color: 5,
        shape: block.type_7,
        position: [100, 300]
      }
    ]
  },
  // round 7-2
  {
    scale: 1,
    position: [500, 200],
    row: 5,
    col: 5,
    grid: [
      0, 1, 1, 1, 1,
      1, 1, 1, 1, 1,
      1, 1, 1, 1, 1,
      1, 1, 1, 0, 0,
      1, 1, 1, 0, 0,
    ],
    blocks: [
      {
        color: 1,
        shape: block.type_8,
        position: [100, 100]
      },
      {
        color: 2,
        shape: block.type_6,
        position: [100, 200]
      },
      {
        color: 3,
        shape: block.type_2,
        position: [100, 400]
      },
      {
        color: 4,
        shape: block.type_3,
        position: [1000, 400]
      },
      {
        color: 5,
        shape: block.type_1,
        position: [1000, 100]
      }
    ]
  },
  // round 7-3
  {
    scale: 1,
    position: [500, 200],
    row: 5,
    col: 5,
    grid: [
      0, 0, 1, 1, 1,
      1, 1, 1, 1, 1,
      1, 1, 1, 1, 1,
      0, 1, 1, 1, 1,
      1, 1, 1, 1, 1,
    ],
    blocks: [
      {
        color: 1,
        shape: block.type_9,
        position: [100, 100]
      },
      {
        color: 2,
        shape: block.type_1,
        position: [100, 450]
      },
      {
        color: 3,
        shape: block.type_3,
        position: [1000, 100]
      },
      {
        color: 4,
        shape: block.type_4,
        position: [1000, 400]
      },
      {
        color: 5,
        shape: block.type_7,
        position: [100, 300]
      }
    ]
  },
  // round 8-1
  {
    scale: 1,
    position: [500, 200],
    row: 5,
    col: 5,
    grid: [
      1, 0, 0, 0, 1,
      1, 1, 1, 1, 1,
      1, 1, 1, 1, 0,
      1, 1, 1, 1, 1,
      1, 1, 1, 1, 1,
    ],
    blocks: [
      {
        color: 6,
        shape: block.type_1,
        position: [100, 100]
      },
      {
        color: 3,
        shape: block.type_4,
        position: [100, 450]
      },
      {
        color: 2,
        shape: block.type_2,
        position: [1000, 100]
      },
      {
        color: 4,
        shape: block.type_5,
        position: [1000, 450]
      },
      {
        color: 5,
        shape: block.type_7,
        position: [100, 300]
      },
      {
        color: 1,
        shape: block.type_6,
        position: [1000, 250]
      }
    ]
  },
  // round 8-2
  {
    scale: 1,
    position: [500, 200],
    row: 5,
    col: 5,
    grid: [
      0, 1, 1, 1, 0,
      0, 1, 1, 1, 0,
      1, 1, 1, 1, 1,
      0, 1, 1, 1, 0,
      1, 1, 1, 1, 1,
    ],
    blocks: [
      {
        color: 5,
        shape: block.type_9,
        position: [100, 100]
      },
      {
        color: 3,
        shape: block.type_2,
        position: [100, 450]
      },
      {
        color: 4,
        shape: block.type_5,
        position: [1000, 100]
      },
      {
        color: 2,
        shape: block.type_4,
        position: [1000, 400]
      },
      {
        color: 6,
        shape: block.type_7,
        position: [100, 300]
      }
    ]
  },
  // round 8-3
  {
    scale: 1,
    position: [500, 200],
    row: 5,
    col: 5,
    grid: [
      1, 1, 0, 1, 1,
      1, 1, 1, 1, 1,
      0, 1, 1, 1, 0,
      1, 1, 1, 1, 1,
      1, 1, 1, 1, 1,
    ],
    blocks: [
      {
        color: 1,
        shape: block.type_5,
        position: [100, 100]
      },
      {
        color: 1,
        shape: block.type_5,
        position: [100, 200]
      },
      {
        color: 2,
        shape: block.type_2,
        position: [100, 450]
      },
      {
        color: 5,
        shape: block.type_7,
        position: [100, 300]
      },
      {
        color: 3,
        shape: block.type_6,
        position: [1000, 100]
      },
      {
        color: 4,
        shape: block.type_8,
        position: [1000, 450]
      },
      {
        color: 1,
        shape: block.type_4,
        position: [1000, 300]
      },
    ]
  },
  // round 9-1
  {
    scale: 1,
    position: [450, 150],
    row: 7,
    col: 7,
    grid: [
      1, 0, 0, 1, 0, 0, 1,
      1, 0, 1, 1, 1, 0, 1,
      1, 1, 1, 1, 1, 1, 1,
      1, 1, 1, 1, 1, 1, 1,
      0, 1, 1, 1, 1, 1, 0,
      0, 0, 1, 1, 1, 0, 0,
      0, 0, 1, 1, 1, 0, 0,
    ],
    blocks: [
      {
        color: 1,
        shape: block.type_9,
        position: [100, 50]
      },
      {
        color: 2,
        shape: block.type_8,
        position: [100, 200]
      },
      {
        color: 2,
        shape: block.type_8,
        position: [100, 250]
      },
      {
        color: 4,
        shape: block.type_7,
        position: [100, 350]
      },
      {
        color: 4,
        shape: block.type_7,
        position: [100, 450]
      },
      {
        color: 1,
        shape: block.type_9,
        position: [1000, 100]
      },
      {
        color: 6,
        shape: block.type_2,
        position: [1000, 250]
      },
      {
        color: 3,
        shape: block.type_5,
        position: [1000, 450]
      },
    ]
  },
  // round 9-2
  {
    scale: 1,
    position: [450, 150],
    row: 7,
    col: 7,
    grid: [
      0, 1, 1, 1, 1, 1, 0,
      1, 1, 1, 1, 1, 1, 1,
      1, 1, 0, 1, 0, 1, 1,
      0, 1, 1, 1, 1, 1, 0,
      0, 1, 1, 1, 1, 1, 0,
      0, 1, 0, 0, 0, 1, 0,
      0, 1, 1, 1, 1, 1, 0,
    ],
    blocks: [
      {
        color: 1,
        shape: block.type_6,
        position: [100, 100]
      },
      {
        color: 2,
        shape: block.type_5,
        position: [250, 200]
      },
      {
        color: 3,
        shape: block.type_4,
        position: [100, 200]
      },
      {
        color: 4,
        shape: block.type_7,
        position: [250, 300]
      },
      {
        color: 5,
        shape: block.type_2,
        position: [100, 400]
      },
      {
        color: 3,
        shape: block.type_2,
        position: [1000, 100]
      },
      {
        color: 6,
        shape: block.type_3,
        position: [900, 200]
      },
      {
        color: 1,
        shape: block.type_8,
        position: [1000, 300]
      },
      {
        color: 5,
        shape: block.type_5,
        position: [850, 350]
      },
      {
        color: 5,
        shape: block.type_2,
        position: [900, 450]
      },
    ]
  },
  // round 9-3
  {
    scale: 1,
    position: [450, 150],
    row: 7,
    col: 7,
    grid: [
      0, 0, 1, 1, 1, 0, 0,
      0, 1, 1, 1, 1, 1, 0,
      1, 1, 1, 1, 1, 1, 1,
      0, 0, 1, 1, 1, 0, 0,
      0, 0, 1, 1, 1, 0, 0,
      0, 1, 1, 1, 1, 1, 0,
      1, 1, 1, 1, 1, 1, 1,
    ],
    blocks: [
      {
        color: 1,
        shape: block.type_1,
        position: [100, 100]
      },
      {
        color: 2,
        shape: block.type_3,
        position: [100, 200]
      },
      {
        color: 3,
        shape: block.type_6,
        position: [200, 250]
      },
      {
        color: 4,
        shape: block.type_7,
        position: [100, 350]
      },
      {
        color: 5,
        shape: block.type_7,
        position: [250, 450]
      },
      {
        color: 5,
        shape: block.type_1,
        position: [900, 100]
      },
      {
        color: 5,
        shape: block.type_5,
        position: [1000, 250]
      },
      {
        color: 5,
        shape: block.type_8,
        position: [900, 300]
      },
      {
        color: 5,
        shape: block.type_4,
        position: [950, 450]
      },
    ]
  },
  
] as const;

export const key = {
  image,
  scene,
  map,
  rotation,
  block,
  atlas,
  json
} as const;