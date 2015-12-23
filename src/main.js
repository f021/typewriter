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


document.querySelector('pre').textContent = portrait;


const addChar = (state) => ({
  add(char) { return state }
});


module.exports =  { addChar };