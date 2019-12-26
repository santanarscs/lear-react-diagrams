import { NodeModel, DefaultPortModel } from '@projectstorm/react-diagrams';
import { BaseModelOptions } from '@projectstorm/react-canvas-core';

export interface TSStartNodeModelOptions extends BaseModelOptions {
	color?: string;
	name?: string;
}

export class TSStartNodeModel extends NodeModel {
	color: string;
	name: string;

	constructor(options: TSStartNodeModelOptions = {}) {
		super({
			...options,
			type: 'ts-start-node'
		});
		this.color = options.color || 'green';
		this.name = options.name || '';
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
