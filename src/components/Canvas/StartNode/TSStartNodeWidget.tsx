import * as React from 'react';
import { DiagramEngine, PortWidget } from '@projectstorm/react-diagrams-core';
import { TSStartNodeModel } from './TSStartNodeModel';
import { FaPlay } from 'react-icons/fa';
export interface TSStartNodeWidgetProps {
	node: TSStartNodeModel;
	engine: DiagramEngine;
}

export interface TSStartNodeWidgetState {}

export class TSStartNodeWidget extends React.Component<TSStartNodeWidgetProps, TSStartNodeWidgetState> {
	constructor(props: TSStartNodeWidgetProps) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<div className="start-node">
				<div className="start-node-color" style={{ backgroundColor: this.props.node.color }}>
					<FaPlay color="#FFF" size="25" />
				</div>
				<PortWidget engine={this.props.engine} port={this.props.node.getPort('out') || undefined} />
			</div>
		);
	}
}
