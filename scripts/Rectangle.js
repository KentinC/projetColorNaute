// creation rectangles with their CSS attribute
function Rectangle(id) {
  this.id = id;
  this.obj = document.createElement("div");
  this.obj.setAttribute("class", "asteroid");
  this.obj.setAttribute("id", this.id);
  this.obj.setAttribute("style", "width:" + widthRect() + "px;height:25px;border-color:" + colorBase() + ";border-size:5px;border-style:solid;display:inline-block;margin-left:" + marginLeft() + "px;position:absolute;border-radius: 50%;top:500px;transition: 1s, linear;");
}

// determination of their color
function colorBase() {
  let hasard = Math.floor(Math.random() * 4);
  switch (hasard) {
  case 0:
    color = '#e67e22';
    break;

  case 1:
    color = '#3498db';
    break;

  case 2:
    color = '#2ecc71';
    break;

  case 3:
    color = '#9b59b6';
    break;

  default:
    color = '#b90c0c';
    break;
  }
  return color;
}

// determination of their width including first part of levels

function widthRect() {
  if (points <= 50) {
    width = (30 * (Math.ceil(Math.random() * 20)));
    return width;
  } else if (points <= 150) {
    width = (30 * (Math.ceil(Math.random() * 15)));
    level = 2;
    return width;
  } else if ( points <= 250) {
    width = (30 * (Math.ceil(Math.random() * 10)));
    level = 3;
    return width;
  } else {
    width = (30 * (Math.ceil(Math.random() * 5)));
    level = 4;
    return width;
  }

}

// determination of their margin (left)
function marginLeft() {
  mLeft = (30 * (Math.floor(Math.random() * (Math.abs(600 - width) / 30))));
  return mLeft;
}
