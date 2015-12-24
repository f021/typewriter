'use strict';

let portrait = 
`
              ______
            /    ' ' '      \\
           /  =     =     \\
           |  o    O      |
           |     l    :      |
            \\   ---  :     /
             \\_____  / 

`;


const example = {
  arr: [],
  pointer: 0,
  len: 10
}


const arr = (state) => ({

  insert(chunk) {
    state.arr.splice(state.pointer, 0, ...chunk);
    state.pointer += chunk.length;
    this.type();
  },

  del(len = 1) {
    state.arr.splice(state.poiner, len);
    state.pointer -= len;
    this.type();
  },

  home() { state.pointer = 0; },

  end() { state.pointer = state.arr.length; },

  left(step = 1) { state.pointer -= step; },

  right(step = 1) { state.pointer += step; },

  up() { state.pointer -= state.len; },

  down() { state.pointer += state.len; },

  type() {
    document.querySelector('#test').innerText = `${state.arr.join('').slice(0, state.pointer)}|${state.arr.join('').slice(state.pointer)}`;
    console.log(state.pointer);
  }

});

let b = arr(example);
for(let a of "alexa i love you") {
  console.log(a);
}

module.exports =  { arr, example, b };