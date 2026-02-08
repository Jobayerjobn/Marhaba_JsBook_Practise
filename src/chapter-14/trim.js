const drink = '   water';
const liquid = 'water';
if(drink === liquid){
    console.log('pani hani dami jani');

}else{
    console.log('somudre pani dekhte valo, khaite kalo');

} //somudre pani dekhte valo, khaite kalo

const pani = '  water';
const torol = 'water';

if(pani.trim() === torol.trim()){
    console.log('pani hani  dami jani');
}else{
    console.log('somudre  pani dekhte vlo khaite kalo');
} //pani hani  dami jani

const num = "jobayer".trim();
console.log(num);

const message = '   ';

if(message === ' '){
    console.log("empty");

} // does not work

if(message.trim() === ' '){
    console.log("empty");

}else{
    console.log("message");
}