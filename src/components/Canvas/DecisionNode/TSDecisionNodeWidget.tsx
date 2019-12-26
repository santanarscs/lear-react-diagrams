import * as React from 'react';
import { DiagramEngine, PortWidget } from '@projectstorm/react-diagrams-core';
import { TSDecisionNodeModel } from './TSDecisionNodeModel';
import { FaCog } from 'react-icons/fa';
export interface TSDecisionNodeWidgetProps {
	node: TSDecisionNodeModel;
	engine: DiagramEngine;
}

export interface TSDecisionNodeWidgetState {}

export class TSDecisionNodeWidget extends React.Component<TSDecisionNodeWidgetProps, TSDecisionNodeWidgetState> {
	constructor(props: TSDecisionNodeWidgetProps) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<div className="decision-node">
				<PortWidget engine={this.props.engine} port={this.props.node.getPort('in') || undefined} />
				<div className="decision-node-color" style={{ backgroundColor: this.props.node.color }}>
					<FaCog color="#FFF" size="25" />
				</div>
				<PortWidget engine={this.props.engine} port={this.props.node.getPort('out') || undefined} />
			</div>
		);
	}
}
