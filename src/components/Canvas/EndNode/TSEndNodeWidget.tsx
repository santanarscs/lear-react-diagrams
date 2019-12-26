import * as React from 'react';
import { DiagramEngine, PortWidget } from '@projectstorm/react-diagrams-core';
import { TSEndNodeModel } from './TSEndNodeModel';
import { FaStop } from 'react-icons/fa';
export interface TSEndNodeWidgetProps {
	node: TSEndNodeModel;
	engine: DiagramEngine;
}

export interface TSEndNodeWidgetState {}

export class TSEndNodeWidget extends React.Component<TSEndNodeWidgetProps, TSEndNodeWidgetState> {
	constructor(props: TSEndNodeWidgetProps) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<div className="end-node">
				<PortWidget engine={this.props.engine} port={this.props.node.getPort('in') || undefined} />
				<div className="end-node-color" style={{ backgroundColor: this.props.node.color }}>
					<FaStop color="#FFF" size="25" />
				</div>
			</div>
		);
	}
}
