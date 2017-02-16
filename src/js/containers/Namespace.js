import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router'

import { loadDatasets } from '../actions/dataset';
import { selectionTypes, select, deselect } from '../actions/selection';
import { showSidebar, hideSidebar } from '../actions/layout';

import { treeNodes, treeConnections, selectDatasetTree, selectDatasetByAddress } from '../selectors/dataset';

import ForceGraph from '../components/ForceGraph'
import InteractiveForceGraph from '../components/InteractiveForceGraph'
import ForceGraphNode from '../components/ForceGraphNode'
import ForceGraphLink from '../components/ForceGraphLink'
import DatasetSummary from '../components/DatasetSummary'

class Namespace extends Component {
	constructor(props) {
		super(props);

		[
			'handleSelectNode',
			'handleDeselect',
			'renderDatasetInfo'
		].forEach(m => this[m] = this[m].bind(this));
	}

	componentWillMount() {
		this.props.loadDatasets();
	}

	handleSelectNode(e, node) {
		// browserHistory.push("/" + node.address.replace(/\./gi, "/"));
		e.stopPropagation();
		this.props.showSidebar();
		this.props.select(selectionTypes.DATASET, node.address);
	}

	handleDeselect(e) {
		this.props.deselect();
		this.props.hideSidebar();
	}

	renderDatasetInfo() {
		const {dataset, layout} = this.props;
		const sidebar = layout.sidebar;

		if (!dataset) {
			return undefined;
		}

		return (
			<div style={{ 
				position: "absolute",
				width : sidebar.w,
				height : sidebar.h,
				top : sidebar.t,
				left : sidebar.l,
			}}>
				<DatasetSummary dataset={dataset} />
			</div>
		);
	}

	render() {
		const { nodes, connections, layout, dataset } = this.props;

		function nodeForAddress(adr) {
			return nodes.find((n) => n.address === adr);
		}

		return (
			<div className="namespace" onClick={this.handleDeselect}>
				<InteractiveForceGraph
					labelOffset={{ 
						x : ({ radius = 10}) => 17, 
						y : ({ radius = 10 }) => 6
					}}
					onSelectNode={this.handleSelectNode}
					selectedNode={ dataset ? nodeForAddress(dataset.address) : undefined }
					simulationOptions={{ height: layout.main.h, width: layout.main.w, animate : true, strength : { charge : -1000 } }}>
					{nodes.map((node, i) => {
					  return (<ForceGraphNode key={`node-${i}`} node={node} fill="#C3E88D" labelClass="label" labelStyle={{ fontSize : 14, fill : "#C3E88D" }} />);
					})}
				  {connections.map((c, i) => {
				  	return (<ForceGraphLink key={`link-${i}`} link={c} />);
				  })}
				</InteractiveForceGraph>
				{this.renderDatasetInfo()}
			</div>
		);
	}
}

Namespace.propTypes = {
}

Namespace.defaultProps = {
	
}

function mapStateToProps(state, ownProps) {
	const tree = selectDatasetTree(state);

	let dataset;
	if (state.selection.type == selectionTypes.DATASET) {
		dataset = selectDatasetByAddress(state, state.selection.value)
	}

	return {
		nodes : treeNodes(tree),
		dataset,
		connections : treeConnections(tree),
		layout : state.layout,
	}
}

export default connect(mapStateToProps, {
	loadDatasets,
	select,
	deselect,
	showSidebar,
	hideSidebar
})(Namespace);