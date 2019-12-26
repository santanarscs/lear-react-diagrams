import * as React from 'react';
import { TSEndNodeModel } from './TSEndNodeModel';
import { TSEndNodeWidget } from './TSEndNodeWidget';
import { AbstractReactFactory } from '@projectstorm/react-canvas-core';
import { DiagramEngine } from '@projectstorm/react-diagrams-core';

export class TSEndNodeFactory extends AbstractReactFactory<TSEndNodeModel, DiagramEngine> {
	constructor() {
		super('ts-end-node');
	}

	generateModel(initialConfig: any) {
		return new TSEndNodeModel();
	}

	generateReactWidget(event: any): JSX.Element {
		return <TSEndNodeWidget engine={this.engine as DiagramEngine} node={event.model} />;
	}
}
