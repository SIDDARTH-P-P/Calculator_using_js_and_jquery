let input = $("#input")[0];
let one = () =>input.value = input.value + "1";
let two = () =>input.value = input.value+ "2";
let three = () => input.value = input.value + "3";
let  four = () =>input.value = input.value + "4";
let five = () =>input.value = input.value + "5";
let six = () => input.value = input.value + "6";
let seven = () => input.value = input.value + "7";
let eight = ()  => input.value = input.value + "8";
let nine = ()  => input.value = input.value + "9";
let zero = ()=> input.value = input.value + "0";
let add = ()=> input.value = input.value + "+";
let sub = ()=> input.value = input.value + "-";
let div = () => input.value = input.value + "/";
let mul = () => input.value = input.value + "*";
let clr = () => input.value = null;

let res = () => {
    let out = eval(input.value)
    input.value = out;
}
let back = () =>{
    let back = input.value.split('')
    back.pop()
    input.value = back.join('')
}

$("span").css({
    borderRadius:"50%"
})
$("#clr").css({
    paddingLeft:"10px",
    paddingRight:"20px"
})
$("input").css({
    marginLeft:"20px",
})
$("div").css({
    color: "red",
    border:"solid",
    paddingTop:"30px",
})

let body = $("#body")
body.css({
    display: "flex",
    alignItems:"center",
    justifyContent: "center",
    height: "97vh",
    width: "99vw",
})
