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
		if (this.root === null){
			return ;
		}
		let detachedRoot  = this.detachRoot();
		this.restoreRootFromLastInsertedNode(detachedRoot);
		this.shiftNodeDown(this.root);
		return detachedRoot.data;
		
	}

	detachRoot() {
		if (this.root == this.parentNodes[0]) {
			this.parentNodes.shift()
		}
		let thisRoot = this.root;
		this.root = null;
		return thisRoot;
	}

	restoreRootFromLastInsertedNode(detached) {
		if (this.parentNodes.length != 0){
			let newRoot = this.parentNodes[this.parentNodes.length-1];
			this.root = newRoot;
			this.parentNodes.pop();
			if(newRoot.parent !== detached) {
				if(this.parentNodes.indexOf(newRoot.parent) < 0){
					this.parentNodes.unshift(newRoot.parent);
				}			
			}
			if(newRoot.parent !== null){
				newRoot.parent.removeChild(newRoot);
			}		
			if (detached.left  != null) {newRoot.appendChild(detached.left);}
			if (detached.right != null) {newRoot.appendChild(detached.right);}
			if( newRoot.left === null || newRoot.right === null){
				this.parentNodes.unshift(newRoot);
			}
		}
	}

	size() {
		if(this.root == null){
			return 0
		} else {
			function nodeLength (node){
				let count = 1
				if (node.left  !=  null){ count += nodeLength (node.left)};
				if (node.right !=  null){ count += nodeLength (node.right)};
				return count;
			}
			return nodeLength(this.root)
		}
	}

	isEmpty() {
		if(this.size() != 0 ){
			return false;
		}
		return true; 
	}

	clear() {
		this.root = null;
		this.parentNodes = [];
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
		if (node.parent == null) {
			this.root = node;
			return;
		}
		if (node.priority > node.parent.priority) {

			let nodeIndex = this.parentNodes.indexOf(node);
			let	nodeParentIndex = this.parentNodes.indexOf(node.parent);
			if (this.root == node.parent){
				this.root = node;
			}
			if (nodeIndex >= 0){
				this.parentNodes[nodeIndex] = node.parent;
			}	;
			if (nodeParentIndex >= 0){
				this.parentNodes[nodeParentIndex] = node;
			}	;

			node.swapWithParent();
			this.shiftNodeUp(node);
		}
	}

	shiftNodeDown(node) {
		if (node == null) return;
		let nodeSon;
		if(node.left === null && node.right === null){
			return;
		} else if(node.right === null && node.left !== null){
			nodeSon = node.left;
		} else if(node.left === null && node.right !== null){
			nodeSon = node.right;
		} else if(node.right.priority > node.left.priority){
			nodeSon = node.right;
		} else if(node.left.priority >= node.right.priority ){
			nodeSon = node.left
		}

		if (node.priority < nodeSon.priority){
			let nodeIndex = this.parentNodes.indexOf(node);
			let	nodeParentIndex = this.parentNodes.indexOf(nodeSon);

			if (nodeIndex >= 0){
				this.parentNodes[nodeIndex] = nodeSon;
			}
			if (nodeParentIndex >= 0){
				this.parentNodes[nodeParentIndex] = node;
			}
			nodeSon.swapWithParent();
			if (node === this.root){
				this.root = nodeSon;
			}
			this.shiftNodeDown(node);
		}
	}
}

module.exports = MaxHeap;
