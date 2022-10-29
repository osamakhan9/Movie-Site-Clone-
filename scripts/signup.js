function page(n,c,e,p){
    this.name=n;
    this.contact=c;
    this.email=e;
    this.password = p;
}

function pro(event){
event.preventDefault();
let form = document.getElementById("sig")
let name = form.name.value;
let contact = form.contact.value;
let email = form.email.value;
let password = form.password.value;

console.log(name,contact,email,password)
let s1= new page(name,contact,email,password)
let bit = JSON.parse(localStorage.getItem('data'))||[]
bit.push(s1)

window.location.reload();


let flag = true;
if(name = "" || contact=="" || email =="" || password==""){
    alert("Enter Required Data")
    flag=false;
}
if(flag){
    alert("Signup Successful")
    localStorage.setItem("data",JSON.stringify(bit))
    window.location.href="login.html"
}

}