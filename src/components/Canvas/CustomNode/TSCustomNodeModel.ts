import { NodeModel, DefaultPortModel } from '@projectstorm/react-diagrams';
import { BaseModelOptions } from '@projectstorm/react-canvas-core';
import { Component } from 'react';

export interface TSCustomNodeModelOptions extends BaseModelOptions {
	color?: string;
	name?: string;
	icon?: Component | any;
}

export class TSCustomNodeModel extends NodeModel {
	color: string;
	name: string;
	icon: Component;

	constructor(options: TSCustomNodeModelOptions = {}) {
		super({
			...options,
			type: 'ts-custom-node'
		});
		this.color = options.color || 'red';
		this.name = options.name || '';
		this.icon = options.icon || null;

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
