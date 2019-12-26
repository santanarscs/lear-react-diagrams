import * as React from 'react';
import { TSFormNodeModel } from './TSFormNodeModel';
import { TSFormNodeWidget } from './TSFormNodeWidget';
import { AbstractReactFactory } from '@projectstorm/react-canvas-core';
import { DiagramEngine } from '@projectstorm/react-diagrams-core';

export class TSFormNodeFactory extends AbstractReactFactory<TSFormNodeModel, DiagramEngine> {
	constructor() {
		super('ts-form-node');
	}

	generateModel(initialConfig: any) {
		return new TSFormNodeModel();
	}

	generateReactWidget(event: any): JSX.Element {
		return <TSFormNodeWidget engine={this.engine as DiagramEngine} node={event.model} />;
	}
}
