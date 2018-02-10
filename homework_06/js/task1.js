window.onload = function() {
  var side1 = Number(prompt("Enter first side of trangle"));
  var side2 = Number(prompt("Enter second side of trangle"));
  var side3 = Number(prompt("Enter third side of trangle"));
  var p = (side1 + side2 + side3) / 2;
  var area = Math.sqrt(p * (p - side1) * (p - side2) * (p - side3));
  var area = area.toFixed(2) * 1;

  if (Math.sign(side1) > 0 && Math.sign(side2) > 0 && Math.sign(side3) > 0) {
    if (
      side2 + side3 < side1 ||
      side1 + side3 < side2 ||
      side1 + side2 < side3
    ) {
      console.log("Incorrect input of one of triangle sides");
    } else if (side1 == side2 && side1 == side3 && side2 == side3) {
      console.log(
        " Type of triangle is Equilateral triangle and square is " + area
      );
    } else if (
      (side2 == side3 && side2 != side1) ||
      (side1 == side3 && side1 != side2) ||
      (side1 == side2 && side1 != side3)
    ) {
      console.log("Type of triangle is Isosceles triangle and square is " + area);
    } else if (
      side1 * side1 == side2 * side2 + side3 * side3 ||
      side2 * side2 == side1 * side1 + side3 * side3 ||
      side3 * side3 == side1 * side1 + side2 * side2
    ) {
      console.log("Type of triangle is Right triangle and square is " + area);
    } else if (side1 != side2 && side1 != side3 && side2 != side3) {
      console.log("Type of triangle is Scalene triangle and square is " + area);
    }
  } else {
    console.log("Incorrect data");
  }
};
