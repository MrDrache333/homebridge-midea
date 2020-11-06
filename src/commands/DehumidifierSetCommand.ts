import SetCommand from '../SetCommand';
import { MideaDeviceType } from '../enums/MideaDeviceType';

export default class DehumidifierSetCommand extends SetCommand {
	
	constructor(device_type: MideaDeviceType = MideaDeviceType.Dehumidifier) {
		super(device_type);
	}
	
	get targetHumidity() {
		return this.data[0x07] & 127
	}

	set targetHumidity(value: number) {
		this.data[0x07] = value & 127
		this.data[0x08] = 0 & 15
	}

	get powerState() {
		return this.data[0x0b] & 0x01;
	}
	
	set powerState(state) {
		this.data[0x0b] &= ~0x01; // Clear the power bit
		this.data[0x0b] |= state ? 0x01 : 0;
	}

}