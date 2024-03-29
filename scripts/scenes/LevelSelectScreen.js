class LevelSelectScreen extends wrk.GameEngine.Scene {
    levelsPerRow = 5;
    backButtonPos = wrk.v(95, 50);
    backButtonSize = wrk.v(150, 50);

    constructor() {
        super('level select screen');

        this.createBackground();
        this.createTitle();
        this.createBackButton();

        this.levelButtonHolder = new wrk.GameEngine.Entity('level button holder',
            wrk.v(0, 0), 0);
        this.addChild(this.levelButtonHolder);
    }
    
    createBackground() {
        var background = new wrk.GameEngine.DrawableEntity('title screen background',
            wrk.GameEngine.canvasSize, wrk.PI,
            wrk.GameEngine.Texture.fromUrl('assets/world/background.png'), wrk.GameEngine.canvasSize,
            wrk.v(1, 1));
        this.addChild(background);
    }

    createTitle() {
        var pos = wrk.v(wrk.GameEngine.canvasSize.x / 2, 50);
        var label = new wrk.GameEngine.Label('level select header', 'Select a level',
            pos, wrk.PI, config.headingTextFormat);
        this.addChild(label);
    }

    createBackButton() {
        var button = new wrk.GameEngine.Button('back button', this.backButtonPos,
            wrk.PI, this.backButtonSize,
            wrk.GameEngine.Texture.fromUrl('assets/ui/buttons/button3x1.png'),
            'Main menu', config.buttonTextFormat);
        button.mouseUpCallbacks.add(() => {
            fadeToScene(titleScreen);
        });
        this.addChild(button);
    }

    createLevelButtons() {

        var row = 0;
        var col = 1;
        var columnWidth = wrk.GameEngine.canvasSize.x / (this.levelsPerRow + 1);
        var topRowY = 150;
        var rowHeight = 75;

        // use a for loop to allow break
        for (var i = 0; i < levels.length; i ++) {
            var pos = wrk.v(col * columnWidth, row * rowHeight + topRowY);
            var isUnlocked = (i <= getHighestLevelUnlocked());
            var button = new LevelButton(i, isUnlocked, pos);
            this.levelButtonHolder.addChild(button);

            col += 1;
            if (col > this.levelsPerRow) {
                col = 1;
                row += 1;
            }
        }
    }

    select(pixiApp) {
        var inheritedFunc = wrk.GameEngine.Scene.prototype.select.bind(this);
        inheritedFunc(pixiApp);

        this.levelButtonHolder.removeChildren();
        this.createLevelButtons();
    }
}