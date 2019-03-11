function alwaysHungry( arr ){
  var str = ""
  for ( var i = 0; i < arr.length; i++){
    if (arr[i] == "food"){
      str += "yummy "
    }
  }
  if (str == ""){
    str += "I'm hungry"
  }
  return str;
}

console.log(alwaysHungry(["hi", "yas", "food", "food", "ideas", "lol"]))
