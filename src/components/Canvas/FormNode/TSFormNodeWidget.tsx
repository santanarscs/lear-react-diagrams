import * as React from 'react';
import { DiagramEngine, PortWidget } from '@projectstorm/react-diagrams-core';
import { TSFormNodeModel } from './TSFormNodeModel';
import Modal from '../../Modal';
import { FaClipboardList } from 'react-icons/fa';
export interface TSFormNodeWidgetProps {
	node: TSFormNodeModel;
	engine: DiagramEngine;
}

export interface TSFormNodeWidgetState {
	openModal: boolean;
}

export class TSFormNodeWidget extends React.Component<TSFormNodeWidgetProps, TSFormNodeWidgetState> {
	constructor(props: TSFormNodeWidgetProps) {
		super(props);
		this.state = {
			openModal: false
		};
	}

	handleChangeStateModal() {
		this.setState({ ...this.state, openModal: this.state.openModal ? false : true });
	}

	render() {
		return (
			<React.Fragment>
				<div className="form-node" onDoubleClick={() => this.handleChangeStateModal()}>
					<PortWidget engine={this.props.engine} port={this.props.node.getPort('in') || undefined} />
					<div className="form-node-color" style={{ backgroundColor: this.props.node.color }}>
						<FaClipboardList color="#FFF" size="25" />
					</div>
					<PortWidget engine={this.props.engine} port={this.props.node.getPort('out') || undefined} />
				</div>
				{this.state.openModal && (
					<Modal>
						<h1>Relacionar Formulario</h1>{' '}
						<a href="#" onClick={() => this.handleChangeStateModal()}>
							Fechar
						</a>
					</Modal>
				)}
			</React.Fragment>
		);
	}
}
