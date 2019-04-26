function sing(callback){
  console.log('la la la la');
  if (callback instanceof Function) {
    callback();
  }

}

function meow() {
  console.log("meow meow");
}



sing();
sing(meow);
