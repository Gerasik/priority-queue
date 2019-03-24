const MaxHeap = require('./max-heap.js');

class PriorityQueue {
	constructor(maxSize = 30) {
		this.heap = new MaxHeap;
		this.maxSize = maxSize;
	}

	push(data, priority) {
		if (this.maxSize == this.heap.size()) throw new Error('Heap has max size');
		this.heap.push(data,priority);
	}

	shift() {
		if(this.heap.isEmpty()) throw new Error('Error!');
		return this.heap.pop();
	}

	size() {
		return this.heap.size();
	}

	isEmpty() {
		return this.heap.isEmpty() ? true : false;
	}
}

module.exports = PriorityQueue;
