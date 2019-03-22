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
		if (this.left == node){
			node.parent = null;
			this.left = null;
		} else if (this.right == node){
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
		if(this.parent != null){
			
			let oldThisLeft = this.left;
			let oldThisRight = this.right;
			let oldParent = this.parent;
			let oldParPar = this.parent.parent;

			if (this.parent.parent != null){ /*.parent.parent */
				if(oldParPar.left == oldParent){
					oldParPar.left = this;
				}else if (oldParPar.right == oldParent){
					oldParPar.right = this;
				}

				this.parent = oldParPar;
			}
			if (oldParent.left == this){
				this.left = oldParent;
				this.left.parent = this;
				this.right = this.left.right;
				if(this.right != null){this.right.parent = this};
				this.left.left = oldThisLeft;
				this.left.rigth = oldThisRight;
				if(this.left.left != null) {this.left.left.parent = this.right;}
				if(this.left.rigth != null){this.left.rigth.parent = this.right;}
			}else if (oldParent.right == this){
				this.right = oldParent;
				this.right.parent = this;				
				this.left = this.right.left;
				if(this.left != null){this.left.parent = this};
				this.right.left = oldThisLeft;
				this.right.rigth = oldThisRight;
				if(this.left.left != null) {this.right.left.parent = this.right;}
				if(this.left.rigth != null){this.right.rigth.parent = this.right;}
			}
		}
	}
}

module.exports = Node;
