// Get the SVG container
const svgContainer = document.getElementById('mySvg');

// Loop through each item in the array and create a path element
pathDataArray.forEach((pathData) => {
    // Create link for SVG element
    const aElement = document.createElementNS('http://www.w3.org/2000/svg', 'a');
    aElement.setAttribute('href', pathData.path.url);
    aElement.setAttribute('data-location', pathData.path.content); // Set data-location

    // Create a new path element
    const pathElement = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    pathElement.setAttribute('d', pathData.path.d);
    pathElement.setAttribute('fill', pathData.path.fill);
    pathElement.setAttribute('transform', pathData.path.transform);

    pathElement.setAttribute('data-tooltip', pathData.path.datatooltip);//single value tooltip

    // <...double value combine tooltip....>  //
    // const tooltipname = pathData.text.content; // First tooltip value
    // const tooltipcount = pathData.path.count; // Second tooltip value
    // const combinedTooltip = `${tooltipname} : ${tooltipcount }`;
    // pathElement.setAttribute('data-tooltip', combinedTooltip);



    // Append path to the <a> tag
    aElement.appendChild(pathElement);

    // Create and append the text element
    const textElement = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    textElement.setAttribute('transform', pathData.path.texttransform);
    textElement.setAttribute('class', 'text');
    textElement.setAttribute('data-tooltip', pathData.path.datatooltip);

    textElement.textContent = pathData.path.content;

    // Append text to the <a> tag
    aElement.appendChild(textElement);

    // Append the <a> tag to the SVG container
    svgContainer.appendChild(aElement);
});
//  data path end


// tooltip function start
const tooltip = document.getElementById('tooltip');

document.querySelectorAll('[data-tooltip]').forEach(elem => {
    elem.addEventListener('mouseover', (event) => {
        tooltip.textContent = event.target.getAttribute('data-tooltip');
        tooltip.style.display = 'block';
    });

    elem.addEventListener('mousemove', (event) => {
        // Position the tooltip slightly offset from the cursor
        tooltip.style.left = `${event.pageX + 10}px`;
        tooltip.style.top = `${event.pageY + 10}px`;
    });

    elem.addEventListener('mouseout', () => {
        tooltip.style.display = 'none';
    });
});
// tooltip function enc
