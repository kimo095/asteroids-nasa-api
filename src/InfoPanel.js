import React from "react";

import 'bootstrap/dist/css/bootstrap.min.css';
import "./InfoPanel.css";

import {connect} from "react-redux";

const InfoPanel = (props) => {

	let errorText = (props.errorFetchingNEOs) ? "Error fetching NEO list" : null;
	let hideDisplay = (props.errorFetchingNEOs) ? null : "display-none";

	return (
		<>
		
			<div className={"text-center alert alert-danger " + hideDisplay}>
				{errorText}
			</div>
		</>
	);
}

const mapStateToProps = state => {
	return {
		errorFetchingNEOs : state.errorFetchNEOS,
	}
}

const InfoPanelLogic = connect(mapStateToProps, null) (InfoPanel);

export default InfoPanelLogic;