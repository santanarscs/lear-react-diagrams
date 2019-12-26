import { NodeModel, DefaultPortModel } from '@projectstorm/react-diagrams';
import { BaseModelOptions } from '@projectstorm/react-canvas-core';

export interface TSStepNodeModelOptions extends BaseModelOptions {
	color?: string;
	name?: string;
}

export class TSStepNodeModel extends NodeModel {
	color: string;
	name: string;

	constructor(options: TSStepNodeModelOptions = {}) {
		super({
			...options,
			type: 'ts-step-node'
		});
		this.color = options.color || 'green';
		this.name = options.name || '';
		this.addPort(
			new DefaultPortModel({
				in: true,
				name: 'in'
			})
		);
		this.addPort(
			new DefaultPortModel({
				in: false,
				name: 'out'
			})
		);
	}

	serialize() {
		return {
			...super.serialize(),
			color: this.color
		};
	}

	deserialize(event: any): void {
		super.deserialize(event);
		this.color = event.data.color;
	}
}
