import * as React from 'react';
import { TSStepNodeModel } from './TSStepNodeModel';
import { TSStepNodeWidget } from './TSStepNodeWidget';
import { AbstractReactFactory } from '@projectstorm/react-canvas-core';
import { DiagramEngine } from '@projectstorm/react-diagrams-core';

export class TSStepNodeFactory extends AbstractReactFactory<TSStepNodeModel, DiagramEngine> {
	constructor() {
		super('ts-step-node');
	}

	generateModel(initialConfig: any) {
		return new TSStepNodeModel();
	}

	generateReactWidget(event: any): JSX.Element {
		return <TSStepNodeWidget engine={this.engine as DiagramEngine} node={event.model} />;
	}
}
