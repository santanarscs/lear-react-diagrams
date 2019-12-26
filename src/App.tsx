import React, { Fragment, useEffect, useState } from 'react';
import createEngine, { DiagramModel, DefaultNodeFactory } from '@projectstorm/react-diagrams';

import { CanvasWidget } from '@projectstorm/react-canvas-core';
import { FaUsers, FaCog, FaClipboardList, FaCheck } from 'react-icons/fa';
import './App.css';
import { TSCustomNodeFactory } from './components/Canvas/CustomNode/TSCustomNodeFactory';
import { TSFormNodeFactory } from './components/Canvas/FormNode/TSFormNodeFactory';
import { TSFormNodeModel } from './components/Canvas/FormNode/TSFormNodeModel';
import { TSStartNodeFactory } from './components/Canvas/StartNode/TSStartNodeFactory';
import { TSStartNodeModel } from './components/Canvas/StartNode/TSStartNodeModel';
import { TSEndNodeFactory } from './components/Canvas/EndNode/TSEndNodeFactory';
import { TSEndNodeModel } from './components/Canvas/EndNode/TSEndNodeModel';
import { TSStepNodeFactory } from './components/Canvas/StepNode/TSStepNodeFactory';
import { TSStepNodeModel } from './components/Canvas/StepNode/TSStepNodeModel';
import { TSDecisionNodeFactory } from './components/Canvas/DecisionNode/TSDecisionNodeFactory';
import { TSDecisionNodeModel } from './components/Canvas/DecisionNode/TSDecisionNodeModel';

interface Diagram {
	id: number;
}

export default function App() {
	const [ diagrams, setDiagrams ] = useState<any>([]);
	const [ diagram, setDiagram ] = useState<any>({});
	const engine = createEngine();
	engine.getNodeFactories().registerFactory(new DefaultNodeFactory());
	engine.getNodeFactories().registerFactory(new TSCustomNodeFactory());
	engine.getNodeFactories().registerFactory(new TSFormNodeFactory());
	engine.getNodeFactories().registerFactory(new TSStartNodeFactory());
	engine.getNodeFactories().registerFactory(new TSEndNodeFactory());
	engine.getNodeFactories().registerFactory(new TSStepNodeFactory());

	engine.getNodeFactories().registerFactory(new TSDecisionNodeFactory());

	const model = new DiagramModel();
	engine.setModel(model);

	useEffect(() => {
		const startNode = new TSStartNodeModel({
			name: 'Início',
			color: '#2ecc71'
		});
		startNode.setPosition(100, 300);
		const endNode = new TSEndNodeModel({
			name: 'Término',
			color: '#e74c3c'
		});
		endNode.setPosition(500, 300);
		model.addAll(startNode, endNode);
	}, []);

	function handleAddNodeStep() {
		const node = new TSStepNodeModel({ color: '#3498db' });
		node.setPosition(100, 100);
		model.addNode(node);
		engine.repaintCanvas();
	}
	function handleAddNodeDecision() {
		const node = new TSDecisionNodeModel({ color: '#9b59b6' });
		node.setPosition(100, 100);
		model.addNode(node);
		engine.repaintCanvas();
	}
	function handleAddNodeForm() {
		const node = new TSFormNodeModel({ color: '#e67e22' });
		node.setPosition(100, 100);
		model.addNode(node);
		engine.repaintCanvas();
	}
	function handleSaveDiagram() {
		alert('save diagram');
	}
	return (
		<Fragment>
			<nav className="menu">
				<ul>
					<li>
						<a onClick={() => handleAddNodeStep()}>
							<FaUsers color="#FFF" size="25" />
						</a>
					</li>
					<li>
						<a onClick={() => handleAddNodeDecision()}>
							<FaCog color="#FFF" size="25" />
						</a>
					</li>
					<li>
						<a onClick={() => handleAddNodeForm()}>
							<FaClipboardList color="#FFF" size="25" />
						</a>
					</li>
				</ul>
				<div className="separator" />
				<ul>
					<li>
						<a href="#" onClick={() => handleSaveDiagram()}>
							<FaCheck color="#FFF" size="25" />
						</a>
					</li>
				</ul>
			</nav>
			<CanvasWidget className="srd-demo-canvas" engine={engine} />
		</Fragment>
	);
}
