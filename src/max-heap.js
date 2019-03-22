const Node = require('./node');

class MaxHeap {
	constructor() {
		this.root = null;
		this.parentNodes = [];
	}

	push(data, priority) {
		let node = new Node(data, priority);
		this.insertNode(node);
		this.shiftNodeUp(node);
	}

	pop() {
		
	}

	detachRoot() {
		
	}

	restoreRootFromLastInsertedNode(detached) {
		
	}

	size() {
		
	}

	isEmpty() {
		
	}

	clear() {
		
	}

	insertNode(node) {
		if (this.root == null) {
			this.root = node;
			this.parentNodes.push(node);
			return;
		}

		this.parentNodes[0].appendChild(node);
		this.parentNodes.push(node);

		if (this.parentNodes[0].left != null && this.parentNodes[0].right != null) {
			this.parentNodes.shift();
		}
	}

	shiftNodeUp(node) {
		// if (node.parent == null) {
		// 	this.root = node;
		// 	return;
		// }
		// if (node.priority > node.parent.priority){
		// 	let nodePosition = this.parentNodes.indexOf(node),
		// 		nodeParentPosition = this.parentNodes.indexOf(node.parent);
		// 		this.parentNodes[nodePosition] = node.parent;
		// 		this.parentNodes[nodeParentPosition] = node;
		// 	node.swapWithParent();
		// 	this.shiftNodeUp(node);
		// }
		if (node.parent == null) {
			this.root = node;
			return;
		}
		if (node.priority > node.parent.priority) {
			let [indexOfNode, indexOfParent] = [this.parentNodes.indexOf(node), 
				                                this.parentNodes.indexOf(node.parent)];
			if (~indexOfNode) this.parentNodes[indexOfNode] = node.parent;
			if (~indexOfParent) this.parentNodes[indexOfParent] = node;

			node.swapWithParent();
			this.shiftNodeUp(node);
		}
	}

	shiftNodeDown(node) {
		
	}
}

module.exports = MaxHeap;
