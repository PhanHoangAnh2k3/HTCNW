function kiemtratamgiac(){
    var a = eval(prompt("Nhap canh a:"));
    var b = eval(prompt("Nhap canh b:"));
    var c = eval(prompt("Nhap canh c:"));
    if (a + b > c && a + c> b && b +c > a){
        document.getElementById("fKT").innerHTML = "La Tam  Giac";
        if( a == b && b == c && c == a)
            alert("Tam giác đều");
        else 
        if( a == b || c == a || b == c)
            alert("Tam  giác Cân");
        else 
            alert("Tam giác thường");
    }
    else alert("Không phải là tam giác");

}