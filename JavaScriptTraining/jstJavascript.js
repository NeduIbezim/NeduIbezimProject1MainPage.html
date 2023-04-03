window.addEventListener("DOMContentLoaded", function () {
  var circles = document.querySelectorAll(".circle");
  circles.forEach(function (circle) {
    circle.style.backgroundColor = getRandomColor();
  });
});

function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  // for (var i = 0; i < 6; i++) {

  color += letters[Math.floor(Math.random() * 16)];
  color += letters[Math.floor(Math.random() * 16)];
  color += letters[Math.floor(Math.random() * 16)];
  // color += letters[Math.floor(Math.random() * 16)];
  // color += letters[Math.floor(Math.random() * 16)];
  // color += letters[Math.floor(Math.random() * 16)];
  //}
  return color;
}

// function setup() {
//   createCanvas(800, 800);
// }
// var letters = "0123456789ABCDEF";
// var color = "#";
// color += letters[Math.floor(Math.random() * 16)];

// function draw() {
//   background(1000);
//   noStroke(2);
//   fill(255, 0, 0);
//   ellipse(width / 2, height / 2, 200, 200);

//   circle.style.backgroundColor = color;
// }

//----------------------------------------------------------------------------
// let rectX = 0;
// let fr = Math.random(100) + 50 * 100; //starting FPS
// let clr;

// function setup() {
//   createCanvas(600, 400);
//   background(200);
//   frameRate(fr); // Attempt to refresh at starting FPS
//   clr = color(
//     Math.floor(Math.random() * 256),
//     Math.floor(Math.random() * 256),
//     Math.floor(Math.random() * 256)
//   );
// }

// function draw() {
//   background(200);
//   rectX += 1; // Move Rectangle

//   if (rectX >= width) {
//     let rng = Math.floor(Math.random() * 256);
//     let rng2 = Math.floor(Math.random() * 256);
//     let rng3 = Math.floor(Math.random() * 256);

//     // If you go off screen.
//     if (fr === 30) {
//       clr = color(0, 0, 255);
//       fr = Math.floor(Math.random(45, 50) + 2 * 185);
//       frameRate(fr); // make frameRate 10 FPS
//     } else {
//       clr = color(rng, rng2, rng3);
//       fr = Math.floor(Math.random(45, 50) + 2 * 185);
//       frameRate(fr); // make frameRate 30 FPS
//     }
//     rectX = 0;
//   }
//   fill(clr);
//   rect(rectX, 40, 50, 50);

// }

//--------------------------------------------------------------------
let rectX = [];
let rectY = [];
let rectSpeed = [];
let colors = [];
let numSquares = 20;
let fr = Math.random(100) + 50 * 100;
let clr;

function setup() {
  createCanvas(800, 400);
  background(200);
  frameRate(fr);
  // clr = color(
  //   Math.floor(Math.random() * 256),
  //   Math.floor(Math.random() * 256),
  //   Math.floor(Math.random() * 256)
  // );

  // initialize the x-coordinate and speed of each square
  for (let i = 0; i < numSquares; i++) {
    rectX.push(i * 100);
    rectY.push(i * 100);
    rectSpeed.push(Math.floor(Math.random() * 50) + 1); // speed between 1 and 5 pixels per frame
    colors.push(
      color(
        Math.floor(Math.random() * 256),
        Math.floor(Math.random() * 256),
        Math.floor(Math.random() * 256)
      )
    );
  }
}

function draw() {
  background(200);

  for (let i = 0; i < numSquares; i++) {
    rectX[i] += rectSpeed[i];

    if (rectX[i] >= width) {
      let rng = Math.floor(Math.random() * 256);
      let rng2 = Math.floor(Math.random() * 256);
      let rng3 = Math.floor(Math.random() * 256);
      colors[i] = color(
        Math.floor(Math.random() * 256),
        Math.floor(Math.random() * 256),
        Math.floor(Math.random() * 256)
      );

      // if the square goes off screen, reset its position and speed
      rectX[i] = 0;
      rectSpeed[i] = Math.floor(Math.random() * 5) + 1;

      // update the color and FPS based on a random value
      if (fr === 30) {
        // clr = color(0, 0, 255);
        fr = Math.floor(Math.random(45, 50) + 2 * 185);
        frameRate(fr); // make frameRate 10 FPS
      } else {
        // clr = color(rng, rng2, rng3);
        fr = Math.floor(Math.random(45, 50) + 2 * 185);
        frameRate(fr); // make frameRate 30 FPS
      }
    }

    let YCor = rectY[i];

    while (YCor > 400) {
      YCor = YCor - 1;
    }

    // draw the square
    fill(colors[i]);
    rect(rectX[i], Math.floor(Math.random() * 400), 50, 50);
  }
}

//--------------------------------------------------------------------
// rectX = []; // array to store x-coordinate position of each square
// rectY = []; // y-coordinate position of each square
// rectSpeed = []; // array to store the speed of each square
// colors = [];
// numSquares = 20; // number of squares to create
// fr = Math.random(100) + 50 * 100; // starting FPS
// clr;

// function setup2() {
//   createCanvas(800, 400);
//   background(200);
//   frameRate(fr); // attempt to refresh at starting FPS
//   // clr = color(
//   //   Math.floor(Math.random() * 256),
//   //   Math.floor(Math.random() * 256),
//   //   Math.floor(Math.random() * 256)
//   // );

//   // initialize the x-coordinate and speed of each square
//   for (let i = 0; i < numSquares; i++) {
//     rectX.push(i * 100);
//     rectY.push(i * 100);
//     rectSpeed.push(Math.floor(Math.random() * 50) + 1); // speed between 1 and 5 pixels per frame
//     colors.push(
//       color(
//         Math.floor(Math.random() * 256),
//         Math.floor(Math.random() * 256),
//         Math.floor(Math.random() * 256)
//       )
//     );
//   }
// }

// function draw2() {
//   background(200);

//   for (let i = 0; i < numSquares; i++) {
//     // move the square
//     rectX[i] += rectSpeed[i];

//     // check if the square has gone off screen
//     if (rectX[i] >= width) {
//       let rng = Math.floor(Math.random() * 256);
//       let rng2 = Math.floor(Math.random() * 256);
//       let rng3 = Math.floor(Math.random() * 256);
//       colors[i] = color(rng, rng2, rng3);

//       // if the square goes off screen, reset its position and speed
//       rectX[i] = 0;
//       rectSpeed[i] = Math.floor(Math.random() * 5) + 1;

//       // update the color and FPS based on a random value
//       if (fr === 30) {
//         // clr = color(0, 0, 255);
//         fr = Math.floor(Math.random(45, 50) + 2 * 185);
//         frameRate(fr); // make frameRate 10 FPS
//       } else {
//         // clr = color(rng, rng2, rng3);
//         fr = Math.floor(Math.random(45, 50) + 2 * 185);
//         frameRate(fr); // make frameRate 30 FPS
//       }
//     }

//     let YCor = rectY[i];

//     while (YCor > 400) {
//       YCor = YCor - 1;
//     }

//     // draw the square
//     fill(colors[i]);
//     rect(rectX[i], Math.floor(Math.random() * 400), 50, 50);
//   }
// }

//----------------------------------------------------------------------------
// let rectX2 = 5;
// let fr2 = Math.random(100) + 50 * 100; //starting FPS
// let clr2;

// function setup() {
//   createCanvas(600, 400);
//   background(200);
//   frameRate(fr2); // Attempt to refresh at starting FPS
//   clr2 = color(
//     Math.floor(Math.random() * 256),
//     Math.floor(Math.random() * 256),
//     Math.floor(Math.random() * 256)
//   );
// }

// function draw() {
//   //background(200);
//   rectX2 += 1; // Move Rectangle

//   if (rectX2 >= width) {
//     let rng = Math.floor(Math.random() * 256);
//     let rng2 = Math.floor(Math.random() * 256);
//     let rng3 = Math.floor(Math.random() * 256);

//     // If you go off screen.
//     if (fr2 === 30) {
//       clr2 = color(0, 0, 255);
//       fr2 = Math.floor(Math.random(45, 50) + 2 * 185);
//       frameRate(fr2); // make frameRate 10 FPS
//     } else {
//       clr2 = color(rng, rng2, rng3);
//       fr2 = Math.floor(Math.random(45, 50) + 2 * 185);
//       frameRate(fr2); // make frameRate 30 FPS
//     }
//     rectX2 = 0;
//   }
//   fill(clr2);
//   rect(rectX2, 130, 90, 90);
// }
