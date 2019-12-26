import { NodeModel, DefaultPortModel } from '@projectstorm/react-diagrams';
import { BaseModelOptions } from '@projectstorm/react-canvas-core';

export interface TSEndNodeModelOptions extends BaseModelOptions {
	color?: string;
	name?: string;
}

export class TSEndNodeModel extends NodeModel {
	color: string;
	name: string;

	constructor(options: TSEndNodeModelOptions = {}) {
		super({
			...options,
			type: 'ts-end-node'
		});
		this.color = options.color || 'green';
		this.name = options.name || '';
		this.addPort(
			new DefaultPortModel({
				in: true,
				name: 'in'
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
