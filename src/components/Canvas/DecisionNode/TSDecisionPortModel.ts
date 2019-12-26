import { LinkModel, PortModel, DefaultLinkModel, PortModelAlignment } from '@projectstorm/react-diagrams';

export class TSDecisionPortModel extends PortModel {
	constructor(alignment: PortModelAlignment) {
		super({
			type: 'ts-decision-node',
			name: alignment,
			alignment: alignment
		});
	}

	createLinkModel(): LinkModel {
		return new DefaultLinkModel();
	}
}
