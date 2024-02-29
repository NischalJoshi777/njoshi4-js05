"use strict";
/*    JavaScript 7th Edition
      Chapter 5
      Project 05-02

      Project to move images between a photo bucket and photo list.
      Author: Nischal Joshi
      Date: 02/28/2024

      Filename: project05-02.js
*/

let images  = document.querySelectorAll("p#photo_bucket img");
let photoBucket = document.getElementById("photo_bucket");
let photoList = document.getElementById('photo_list');

for(let i = 0; i <images.length; i++){
      images[i].onclick = function (){
            if(images[i].parentElement.id === "photo_bucket"){
                  let newItem = document.createElement('li');
                  newItem.appendChild(this);
                  photoList.appendChild(newItem);

            } else {
                  var oldItem = this.parentElement;
                  photoBucket.appendChild(this);
                  oldItem.parentElement.removeChild(oldItem);
            }
      }
}

