// Main JavaScript File

// Data objects to work with
var people = [
  {name:'Edgar', favColor:'Green'},
  {name:'Rashmi', favColor:'Blue'},
  {name:'Amelia', favColor:'#000000'},
];

var people2 = [
  {name:'Edgar', favColor:'Green'},
  {name:'Amelia', favColor:'#000000'},
];

// You'll have to wait for you page to load to assign events to the elements created in your index.html file
$(function() {
  // Create a varaible myDiv by selecting the element with id my-div (this is already created for you).
  var myDiv = d3.select('#my-div');

  // Create a variable `paragraphs` by selecting all  `p` elements in  `myDiv`, and binding you data  `people` to it.
  var paragraphs = myDiv.selectAll('<p>').data(people);

  // Make sure to specify the `name` attribute as an identifying characteristic in your data-join.
  paragraphs.attr('name', function(d) {return: d.name});


  // Add a paragraph to the div for each person in your dataset following instructions in the index.html file
  paragraphs.enter();
            .append('<p>')
            .attr('name', function(d) {return: d.name});
            .style('color', function(d) {return: d.favColor});


  // Use `setTimeout` function to wait 3 seconds, then do the following
  setTimeout(function(){
    // Re-define your variable `paragraphs` by selecting all `p` elements in `myDiv`, and binding the data `people2` to it.
    paragraphs = myDiv.selectAll('<p>').data(people2);

    // Make sure to specify the `name` attribute as an identifying characteristic in your data-join.



    // Determine which people are no longer represented in the data (`exit`), and transition their opacity to 0 and remove them.
    paragraphs.exit().attr('opacity', '0');
    
  }, 3000);
});
