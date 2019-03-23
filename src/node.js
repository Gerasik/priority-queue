class Node {
	constructor(data, priority) {
		this.data 		= data;
		this.priority	= priority;
		this.left  		= null;
		this.right 		= null;
		this.parent 	= null;
	}

	appendChild(node) {
		if (this.left == null){
			this.left = node;
			node.parent = this;
		}else if(this.right == null){
			this.right = node;
			node.parent = this;
		}
	}

	removeChild(node) {
		if (this.left === node){
			node.parent = null;
			this.left = null;
		} else if (this.right === node){
			node.parent = null;
			this.right = null;
		} else {
			throw new error('Passed node is not a child');
		}
	}

	remove() {
		if(this.parent != null){
			this.parent.removeChild(this);
		}
	}

	swapWithParent() {
		if(this.parent !== null){
			let child = this;
			let parent = this.parent;
			let grandparent = this.parent.parent;
			let grandsonLeft = (this.left === null) ? null : child.left;
			let grandsonRight = (this.right === null) ? null : child.right;
			
			if(grandsonLeft !== null){
				child.removeChild(grandsonLeft);
			} 

			if(grandsonRight !== null){
				child.removeChild(grandsonRight);
			}

			if(parent.left === child){
				let rightBrother = parent.right !== null ? parent.right : null;
				child.appendChild(parent);
				if(rightBrother !== null){
					parent.removeChild(rightBrother);
					child.appendChild(rightBrother);
				} 
				parent.removeChild(child);
			}

			if(parent.right === child){
				let leftBrother = parent.left !== null ? parent.left : null;
				if(leftBrother !== null){
					parent.removeChild(leftBrother);
					child.appendChild(leftBrother);
				} 
				child.appendChild(parent);
				parent.removeChild(child);
			}

			if(grandparent !== null){
				grandparent.removeChild(parent);
				parent.parent = child;
				grandparent.appendChild(child)
			} 

			if(grandsonLeft !== null){
				parent.appendChild(grandsonLeft);
			}

			if(grandsonRight !== null){
				parent.appendChild(grandsonRight);
			} 
			
		}
	}
}

module.exports = Node;
