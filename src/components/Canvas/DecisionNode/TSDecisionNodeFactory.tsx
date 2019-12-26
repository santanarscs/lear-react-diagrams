import * as React from 'react';
import { TSDecisionNodeModel } from './TSDecisionNodeModel';
import { TSDecisionNodeWidget } from './TSDecisionNodeWidget';
import { AbstractReactFactory } from '@projectstorm/react-canvas-core';
import { DiagramEngine } from '@projectstorm/react-diagrams-core';

export class TSDecisionNodeFactory extends AbstractReactFactory<TSDecisionNodeModel, DiagramEngine> {
	constructor() {
		super('ts-decision-node');
	}

	generateModel(initialConfig: any) {
		return new TSDecisionNodeModel();
	}

	generateReactWidget(event: any): JSX.Element {
		return <TSDecisionNodeWidget engine={this.engine as DiagramEngine} node={event.model} />;
	}
}
