class OnCommand extends Command {
    constructor(tv) {
        super();
        this.tv = tv;
    }

    execute() {
        this.tv.on();
    }

    undo() {
        this.tv.off();
    }
}