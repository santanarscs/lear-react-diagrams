import styled from 'styled-components';

export const Container = styled.div`
	position: fixed;
	width: 100%;
	height: 100%;
	top: 0;
	left: 0;
	background: rgba(0, 0, 0, 0.5);
	display: flex;
	justify-content: center;
	align-items: center;
`;
export const Content = styled.div`
	background: #fff;
	border-radius: 5px;
	box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.2);
	padding: 10px 40px;
	width: 600px;
	h1 {
		font-size: 26px;
		font-weight: 500;
	}
`;
