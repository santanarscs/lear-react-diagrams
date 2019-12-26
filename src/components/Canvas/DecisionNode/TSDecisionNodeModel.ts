import { NodeModel, DefaultPortModel } from '@projectstorm/react-diagrams';
import { BaseModelOptions } from '@projectstorm/react-canvas-core';

export interface TSDecisionNodeModelOptions extends BaseModelOptions {
	color?: string;
	name?: string;
}

export class TSDecisionNodeModel extends NodeModel {
	color: string;
	name: string;

	constructor(options: TSDecisionNodeModelOptions = {}) {
		super({
			...options,
			type: 'ts-decision-node'
		});
		this.color = options.color || 'red';
		this.name = options.name || '';

		// setup an in and out port
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
