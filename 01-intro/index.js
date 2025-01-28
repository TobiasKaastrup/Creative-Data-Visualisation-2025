var svg = d3.select("svg")
						.attr("width",500)
						.attr("height",500);

var circles = d3.selectAll("circle")
    .attr("r", Math.floor(Math.random()*100));
