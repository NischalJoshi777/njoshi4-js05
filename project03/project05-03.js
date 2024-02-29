"use strict";
/*    JavaScript 7th Edition
      Chapter 5
      Project 05-03

      Project to create a table of headings from an article
      Author: Nischal Joshi
      Date: 02/28/2024

      Filename: project05-03.js
*/

let sourceDoc = document.getElementById('source_doc');
let toc = document.getElementById('toc');
let headingCount = 1;

const heading = "H2";

for (let n = sourceDoc.firstElementChild; n !== null; n = n.nextElementSibling) {
      if (n.nodeName === heading) {
            const anchor = document.createElement('a');
            anchor.setAttribute('name', 'doclink' + headingCount);
            
            //inserts anchor before the first child of node
            n.insertBefore(anchor, n.firstChild);

            //creates a li element
            let listItem = document.createElement('li');
            //creates a link 
            let link = document.createElement('a');

            listItem.appendChild(link);
            //sets the textcontent as the text content of the respective node(h2 element)
            link.textContent = n.textContent;
            link.href = "#doclink" + headingCount;

            //appending the listItem to ul element (whose id is toc)
            toc.appendChild(listItem);
            
            //incrementing by 1 for each iteration
            headingCount++
      }
}