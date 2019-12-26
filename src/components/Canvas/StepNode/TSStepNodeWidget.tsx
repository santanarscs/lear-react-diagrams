import * as React from 'react';
import { DiagramEngine, PortWidget } from '@projectstorm/react-diagrams-core';
import { TSStepNodeModel } from './TSStepNodeModel';
import { FaUsers } from 'react-icons/fa';
export interface TSStepNodeWidgetProps {
	node: TSStepNodeModel;
	engine: DiagramEngine;
}

export interface TSStepNodeWidgetState {}

export class TSStepNodeWidget extends React.Component<TSStepNodeWidgetProps, TSStepNodeWidgetState> {
	constructor(props: TSStepNodeWidgetProps) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<div className="form-node">
				<PortWidget engine={this.props.engine} port={this.props.node.getPort('in') || undefined} />
				<div className="form-node-color" style={{ backgroundColor: this.props.node.color }}>
					<FaUsers color="#FFF" size="25" />
				</div>
				<PortWidget engine={this.props.engine} port={this.props.node.getPort('out') || undefined} />
			</div>
		);
	}
}
