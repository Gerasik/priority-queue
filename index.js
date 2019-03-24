const MaxHeap = require('./src/max-heap');

const h = new MaxHeap();
window.h = h;

// h.push(0,10);
// h.push(1,5);
// h.push(2,7);
// h.push(3,20);


// const Node = require('./src/node');

// const n = new Node();
// window.n = n;
// h.push(42, 15);
// h.push(14, 32);
// h.push(0, 0);
// h.push(14,14);
// h.push(13,13);
// h.push(16,16);
// h.push(12,12);



h.push(42, 15);
			h.push(15, 14);
			h.push(0, 16);
            h.push(100, 100);
            h.push(42, 15);