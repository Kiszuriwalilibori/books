function spacesCount (str){return str.includes(' ')? str.match(/ /ig).length:0;}

export default function getSummary(str){
  let x= str.replace("<p>","").replace("</p>","");
  return(spacesCount(x)>5)?
  x.split(' ').slice(0, 4).join(' ') +'...':x;
}
