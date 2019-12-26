import * as React from 'react';
import { TSStartNodeModel } from './TSStartNodeModel';
import { TSStartNodeWidget } from './TSStartNodeWidget';
import { AbstractReactFactory } from '@projectstorm/react-canvas-core';
import { DiagramEngine } from '@projectstorm/react-diagrams-core';

export class TSStartNodeFactory extends AbstractReactFactory<TSStartNodeModel, DiagramEngine> {
	constructor() {
		super('ts-start-node');
	}

	generateModel(initialConfig: any) {
		return new TSStartNodeModel();
	}

	generateReactWidget(event: any): JSX.Element {
		return <TSStartNodeWidget engine={this.engine as DiagramEngine} node={event.model} />;
	}
}
