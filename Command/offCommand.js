class OffCommand extends Command {
    constructor(tv) {
        super();
        this.tv = tv;
    }

    execute() {
        this.tv.off();
    }

    undo() {
        this.tv.on();
    }
}
