class RemoteControl {
    setCommand(command) {
        this.command = command;
    }

    pressButton() {
        this.command.execute();
    }

    pressUndo() {
        this.command.undo();
    }
}