function ver_formLogin(){
    var x = document.getElementById("form_login");

    if      (x.style.display = "none") {x.style.display = "block"}
}
function cerrar_formLogin(){
    document.getElementById("form_login").style.display = "none"
}
function abrir_app(){
    document.getElementById("form_login").style.display = "none"
    document.getElementById("btn_volver").style.display = "block"
    document.getElementById("btn_login").style.display = "none"
    document.getElementById("contenedor").style.display = "none"
    
    var x = document.getElementById("cont_trabajo") 
    if(x.style.display = "none") {
        x.style.display = "block"}

        var n = document.getElementById("username").value;
            document.getElementById("usuario_actual").innerHTML = "User: " + n
}
function abrir_tclientes(){
    var x = document.getElementById("tclientes")
    var y = document.getElementById("tvehiculos")
    var z = document.getElementById("tservicios")
    var a = document.getElementById("formServicios")
    var b = document.getElementById("adminclientes")
    var c = document.getElementById("adminvehiculos")
    var r = document.getElementById("adminoperarios")
    var s = document.getElementById("admintservicios")
    var t = document.getElementById("informes")

    if(x.style.display = "none") {
        x.style.display = "block"}
        if(y.style.display = "block") {
            y.style.display = "none"}
            if(z.style.display = "block") {
                z.style.display = "none"}
                if(a.style.display = "block") {
                    a.style.display = "none"}
                    if(b.style.display = "block") {
                        b.style.display = "none"}  
                        if(c.style.display = "block") {
                            c.style.display = "none"}
                            if(r.style.display = "block") {
                                r.style.display = "none"}
                                if(s.style.display = "block") {
                                    s.style.display = "none"} 
                                    if(t.style.display = "block") {
                                        t.style.display = "none"}   
}
function cerrar_tclientes(){
    document.getElementById("tclientes").style.display = "none"
}
function abrir_tvehiculos(){
    var x = document.getElementById("tvehiculos")
    var y = document.getElementById("tclientes")
    var z = document.getElementById("tservicios")
    var a = document.getElementById("formServicios")
    var b = document.getElementById("adminclientes")
    var c = document.getElementById("adminvehiculos")
    var r = document.getElementById("adminoperarios")
    var s = document.getElementById("admintservicios")
    var t = document.getElementById("informes")

    if(x.style.display = "none") {
        x.style.display = "block"}
        if(y.style.display = "block") {
            y.style.display = "none"} 
            if(z.style.display = "block") {
                z.style.display = "none"}
                if(a.style.display = "block") {
                    a.style.display = "none"}
                    if(b.style.display = "block") {
                        b.style.display = "none"} 
                        if(c.style.display = "block") {
                            c.style.display = "none"}
                            if(r.style.display = "block") {
                                r.style.display = "none"} 
                                if(s.style.display = "block") {
                                    s.style.display = "none"}
                                    if(t.style.display = "block") {
                                        t.style.display = "none"}
}
function cerrar_tvehiculos(){
    document.getElementById("tvehiculos").style.display = "none"
}
function abrir_tservicios(){
    var x = document.getElementById("tservicios")
    var y = document.getElementById("tclientes")
    var z = document.getElementById("tvehiculos")
    var a = document.getElementById("formServicios")
    var b = document.getElementById("adminclientes")
    var c = document.getElementById("adminvehiculos")
    var r = document.getElementById("adminoperarios")
    var s = document.getElementById("admintservicios")
    var t = document.getElementById("informes")

    if(x.style.display = "none") {
        x.style.display = "block"}
        if(y.style.display = "block") {
            y.style.display = "none"} 
            if(z.style.display = "block") {
                z.style.display = "none"} 
                if(a.style.display = "block") {
                    a.style.display = "none"}
                    if(b.style.display = "block") {
                        b.style.display = "none"} 
                        if(c.style.display = "block") {
                            c.style.display = "none"}
                            if(r.style.display = "block") {
                                r.style.display = "none"} 
                                if(s.style.display = "block") {
                                    s.style.display = "none"}
                                    if(t.style.display = "block") {
                                        t.style.display = "none"}
}
function cerrar_tservicios(){
    document.getElementById("tservicios").style.display = "none"
}
function abrir_formServicios(){
    var x = document.getElementById("formServicios")
    var y = document.getElementById("tclientes")
    var z = document.getElementById("tvehiculos")
    var a = document.getElementById("tservicios")
    var b = document.getElementById("adminclientes")
    var c = document.getElementById("adminvehiculos")
    var r = document.getElementById("adminoperarios")
    var s = document.getElementById("admintservicios")
    var t = document.getElementById("informes")

    if(x.style.display = "none") {
        x.style.display = "block"}
        if(y.style.display = "block") {
            y.style.display = "none"} 
            if(z.style.display = "block") {
                z.style.display = "none"} 
                if(a.style.display = "block") {
                    a.style.display = "none"}
                    if(b.style.display = "block") {
                        b.style.display = "none"}
                        if(c.style.display = "block") {
                            c.style.display = "none"} 
                            if(r.style.display = "block") {
                                r.style.display = "none"}
                                if(s.style.display = "block") {
                                    s.style.display = "none"}  
                                    if(t.style.display = "block") {
                                        t.style.display = "none"}
}
function cerrar_formServicios(){
    document.getElementById("formServicios").style.display = "none"
}
function abrir_adminclientes(){
    var x = document.getElementById("adminclientes")
    var y = document.getElementById("tclientes")
    var z = document.getElementById("tvehiculos")
    var a = document.getElementById("tservicios")
    var b = document.getElementById("formServicios")
    var c = document.getElementById("adminvehiculos")
    var r = document.getElementById("adminoperarios")
    var s = document.getElementById("admintservicios")
    var t = document.getElementById("informes")

    if(x.style.display = "none") {
        x.style.display = "block"}
        if(y.style.display = "block") {
            y.style.display = "none"} 
            if(z.style.display = "block") {
                z.style.display = "none"} 
                if(a.style.display = "block") {
                    a.style.display = "none"} 
                    if(b.style.display = "block") {
                        b.style.display = "none"}
                        if(c.style.display = "block") {
                            c.style.display = "none"} 
                            if(r.style.display = "block") {
                                r.style.display = "none"}
                                if(s.style.display = "block") {
                                    s.style.display = "none"} 
                                    if(t.style.display = "block") {
                                        t.style.display = "none"}
}
function cerrar_adminclientes(){
    document.getElementById("adminclientes").style.display = "none"
}
function abrir_adminvehiculos(){
    var x = document.getElementById("adminvehiculos")
    var y = document.getElementById("tclientes")
    var z = document.getElementById("tvehiculos")
    var a = document.getElementById("tservicios")
    var b = document.getElementById("formServicios")
    var c = document.getElementById("adminclientes")
    var r = document.getElementById("adminoperarios")
    var s = document.getElementById("admintservicios")
    var t = document.getElementById("informes")

    if(x.style.display = "none") {
        x.style.display = "block"}
        if(y.style.display = "block") {
            y.style.display = "none"} 
            if(z.style.display = "block") {
                z.style.display = "none"} 
                if(a.style.display = "block") {
                    a.style.display = "none"} 
                    if(b.style.display = "block") {
                        b.style.display = "none"}
                        if(c.style.display = "block") {
                            c.style.display = "none"} 
                            if(r.style.display = "block") {
                                r.style.display = "none"}
                                if(s.style.display = "block") {
                                    s.style.display = "none"} 
                                    if(t.style.display = "block") {
                                        t.style.display = "none"}
}
function cerrar_adminvehiculos(){
    document.getElementById("adminvehiculos").style.display = "none"
}
function abrir_adminoperarios(){
    var x = document.getElementById("adminoperarios")
    var y = document.getElementById("tclientes")
    var z = document.getElementById("tvehiculos")
    var a = document.getElementById("tservicios")
    var b = document.getElementById("formServicios")
    var c = document.getElementById("adminclientes")
    var r = document.getElementById("adminvehiculos")
    var s = document.getElementById("admintservicios")
    var t = document.getElementById("informes")

    if(x.style.display = "none") {
        x.style.display = "block"}
        if(y.style.display = "block") {
            y.style.display = "none"} 
            if(z.style.display = "block") {
                z.style.display = "none"} 
                if(a.style.display = "block") {
                    a.style.display = "none"} 
                    if(b.style.display = "block") {
                        b.style.display = "none"}
                        if(c.style.display = "block") {
                            c.style.display = "none"} 
                            if(r.style.display = "block") {
                                r.style.display = "none"}
                                if(s.style.display = "block") {
                                    s.style.display = "none"}
                                    if(t.style.display = "block") {
                                        t.style.display = "none"}
}
function cerrar_adminoperarios(){
    document.getElementById("adminoperarios").style.display = "none"
}
function abrir_admintservicios(){
    var x = document.getElementById("admintservicios")
    var y = document.getElementById("tclientes")
    var z = document.getElementById("tvehiculos")
    var a = document.getElementById("tservicios")
    var b = document.getElementById("formServicios")
    var c = document.getElementById("adminclientes")
    var r = document.getElementById("adminvehiculos")
    var s = document.getElementById("adminoperarios")
    var t = document.getElementById("informes")

    if(x.style.display = "none") {
        x.style.display = "block"}
        if(y.style.display = "block") {
            y.style.display = "none"} 
            if(z.style.display = "block") {
                z.style.display = "none"} 
                if(a.style.display = "block") {
                    a.style.display = "none"} 
                    if(b.style.display = "block") {
                        b.style.display = "none"}
                        if(c.style.display = "block") {
                            c.style.display = "none"} 
                            if(r.style.display = "block") {
                                r.style.display = "none"}
                                if(s.style.display = "block") {
                                    s.style.display = "none"}
                                    if(t.style.display = "block") {
                                        t.style.display = "none"}
}
function cerrar_admintservicios(){
    document.getElementById("admintservicios").style.display = "none"
}
function abrir_informes(){
    var x = document.getElementById("informes")
    var y = document.getElementById("tclientes")
    var z = document.getElementById("tvehiculos")
    var a = document.getElementById("tservicios")
    var b = document.getElementById("formServicios")
    var c = document.getElementById("adminclientes")
    var r = document.getElementById("adminvehiculos")
    var s = document.getElementById("adminoperarios")
    var t = document.getElementById("admintservicios")

    if(x.style.display = "none") {
        x.style.display = "block"}
        if(y.style.display = "block") {
            y.style.display = "none"} 
            if(z.style.display = "block") {
                z.style.display = "none"} 
                if(a.style.display = "block") {
                    a.style.display = "none"} 
                    if(b.style.display = "block") {
                        b.style.display = "none"}
                        if(c.style.display = "block") {
                            c.style.display = "none"} 
                            if(r.style.display = "block") {
                                r.style.display = "none"}
                                if(s.style.display = "block") {
                                    s.style.display = "none"}
                                    if(t.style.display = "block") {
                                        t.style.display = "none"}
}
function cerrar_informes(){
    document.getElementById("informes").style.display = "none"
}


