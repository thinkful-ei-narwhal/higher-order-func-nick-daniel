'use strict';

// 1

function repeat(fn, n) {
  for (let i=0; i < n; i++) {
    fn();
  }
}

function hello() {
  console.log('Hello World');
}

function goodbye() {
  console.log('Goodbye World');
}

repeat(goodbye, 5);

// 2