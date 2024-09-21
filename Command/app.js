import TV from './tv.js';
import OnCommand from './onCommand.js';
import OffCommand from './offCommand.js';
import RemoteControl from './remoteControl.js';

const tv = new TV();
const onCommand = new OnCommand(tv);
const offCommand = new OffCommand(tv);
const remote = new RemoteControl();

remote.setCommand(onCommand);
remote.pressButton(); // Output: TV is ON
remote.pressUndo();   // Output: TV is OFF

remote.setCommand(offCommand);
remote.pressButton(); // Output: TV is OFF
remote.pressUndo();   // Output: TV is ON