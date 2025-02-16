


let show = document.getElementById('inputdata')
function buttonABC (xyz){
let a = ["Apple", "Ant", "Arrow"]
let b = ["Baloon", "Butterfly", "Bat"]
let c = ["Camel", "Cow", "Carrot"]
let d = ["Drum", "Dear", "Deval"]
let e = ["Empty", "Eat", "End"]
let f = ["Flag", "Fan", "Fresh"]
let g = ["Game", "Go", "Gate"]
let h = ["Hammer", "Help", "Helmet"]
let i = ["In", "Ink", "Ice-Cream"]
let j = ["Jump", "Joy", "Jeep"]
let k = ["Know", "Kite", "Keep"]
let l = ["Lemp", "Late", "Leaf"]
let m = ["Middle", "Map", "Minute"]
let n = ["Near", "Now", "Next"]
let o = ["Open", "Over", "One"]
let p = ["Pin", "Pocket", "Pen"]
let q = ["Queue", "Queen", "Quite"]
let r = ["Rose", "Right", "Read"]
let s = ["Seat", "Sit", "Stand"]
let t = ["Time", "Think", "Ten"]
let u = ["Up", "Umpire", "Use"]
let v = ["Vote", "Ven", "V"]
let w = ["Wait", "Win", "White"]
let x = ["Xray", "Now", "Near"]
let y = ["Year", "Yes", "Yalk"]
let z = ["Zoom", "Zip", "Zebra"]

let letters = {A:a , B:b,C:c , D:d , E:e , F:f , G:g , H:h , I:i , J:j , K:k , L:l , M:m ,N:n , O:o , P:p , Q:q , R:r, S:s , T:t, U:u ,V:v , W:w , X:x , Y:y, Z:z}

if (letters[xyz]){
    let random = letters[xyz]
    [Math.floor(Math.random()*
        letters[xyz].length)];
        show.value= random + "";
}
}

buttonABC("ok")