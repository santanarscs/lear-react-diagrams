import React from 'react';
type ModalProps = {
	children: any;
};

function Modal({ children }: ModalProps) {
	return (
		<div className="modal-custom">
			<div className="modal-custom-content">{children}</div>
		</div>
	);
}
// Modal.propTypes = {
// 	children: PropTypes.oneOfType([ PropTypes.element, PropTypes.arrayOf(PropTypes.element) ]).isRequired
// };
export default Modal;
