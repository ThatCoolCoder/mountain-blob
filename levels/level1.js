// Like json but loaded as js

const level1 = {
    fallOffHeight : 300,
    backgroundType : 'image',
    backgroundTexture : wrk.GameEngine.Texture.fromUrl('assets/background2.png'),
    playerStartPosition : wrk.v(-285, -450),
    environmentItems : [
        {
            type : 'rockWall',
            position : wrk.v(0, 25),
            size : wrk.v(300, 50),
            direction : 'up'
        },
        {
            type : 'rockWall',
            position : wrk.v(300, 25),
            size : wrk.v(300, 50),
            direction : 'up'
        },
        {
            type : 'rockWall',
            position : wrk.v(600, 25),
            size : wrk.v(300, 50),
            direction : 'up'
        },
        {
            type : 'rockWall',
            position : wrk.v(900, 25),
            size : wrk.v(300, 50),
            direction : 'up'
        },
        {
            type : 'rockWall',
            position : wrk.v(1200, 25),
            size : wrk.v(300, 50),
            direction : 'up'
        },
        {
            type : 'rockWall',
            position : wrk.v(1500, 25),
            size : wrk.v(300, 50),
            direction : 'up'
        },
        {
            type : 'wall',
            position : wrk.v(375, -50),
            size : wrk.v(50, 100),
            direction : 'right'
        },
        {
            type : 'wall',
            position : wrk.v(725, -100),
            size : wrk.v(50, 200),
            direction : 'right'
        },
        {
            type : 'wall',
            position : wrk.v(900, -175),
            size : wrk.v(300, 50),
            direction : 'up'
        },
        {
            type : 'wall',
            position : wrk.v(1275, -175),
            size : wrk.v(150, 50),
            direction : 'up'
        },
        {
            type : 'wall',
            position : wrk.v(1400, -125),
            size : wrk.v(100, 50),
            direction : 'up'
        },
        {
            type : 'wall',
            position : wrk.v(1500, -75),
            size : wrk.v(100, 50),
            direction : 'up'
        },
        {
            type : 'wall',
            position : wrk.v(1600, -25),
            size : wrk.v(100, 50),
            direction : 'up'
        },
        {
            type : 'wall',
            position : wrk.v(-800, -275),
            size : wrk.v(300, 50),
            direction : 'up'
        },
        {
            type : 'rockWall',
            position : wrk.v(-450, -275),
            size : wrk.v(300, 50),
            direction : 'up'
        },
        {
            type : 'wall',
            position : wrk.v(-825, -325),
            size : wrk.v(250, 50),
            direction : 'up'
        },
        {
            type : 'rockWall',
            position : wrk.v(-475, -325),
            size : wrk.v(250, 50),
            direction : 'up'
        },
        {
            type : 'wall',
            position : wrk.v(-850, -375),
            size : wrk.v(200, 50),
            direction : 'up'
        },
        {
            type : 'rockWall',
            position : wrk.v(-500, -375),
            size : wrk.v(200, 50),
            direction : 'up'
        },
        {
            type : 'wall',
            position : wrk.v(-875, -425),
            size : wrk.v(150, 50),
            direction : 'up'
        },
        {
            type : 'rockWall',
            position : wrk.v(-525, -425),
            size : wrk.v(150, 50),
            direction : 'up'
        },
        {
            type : 'wall',
            position : wrk.v(-900, -475),
            size : wrk.v(100, 50),
            direction : 'up'
        },
        {
            type : 'rockWall',
            position : wrk.v(-550, -475),
            size : wrk.v(100, 50),
            direction : 'up'
        },
        {
            type : 'wall',
            position : wrk.v(-925, -525),
            size : wrk.v(50, 50),
            direction : 'up'
        },
        {
            type : 'rockWall',
            position : wrk.v(-575, -525),
            size : wrk.v(50, 50),
            direction : 'up'
        },
        {
            type : 'levelEnd',
            position : wrk.v(-220, -441),
            direction : 'up'
        },
        {
            type : 'spike',
            position : wrk.v(288, -12),
            direction : 'up'
        },

    ]
}