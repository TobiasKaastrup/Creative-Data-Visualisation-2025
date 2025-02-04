var arrData = [10, 40, 80, 100];
var colors = ["#f66345", "#e7ab35", "#1197fd", "#7e35c7"];
var h = 600
var w = 600

function setX(d){
    return d * 4
}


d3.select('svg')
  .attr("width",w)
  .attr("height",h)
  .selectAll('circle')
  .data(arrData)
  .join('circle')
  .attr('cx', setX) //using a predefined function
  .attr('cy', h/2)
  .attr('r', d => 10+d) //anonymous arrow function with one param
  .style('fill', (d, i) => colors[i]); //two params in using the i is equivalent to arrData.indexOf(d)