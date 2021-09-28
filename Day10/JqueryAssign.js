$(document).ready(function(){
    $("#hideBtn").click(function(){
        let btnName = $("#hideBtn").val()
        if(btnName == "Hide Images"){
            $("#img1").hide(2000)
            $("#img2").hide(4000)
            $("#img3").hide(6000,() => $("#hideBtn").val("Show Images"))
            
        }else{
            $("#img1").show(2000)
            $("#img2").show(4000)
            $("#img3").show(6000, ()=> $("#hideBtn").val("Hide Images"))
            
        }
    })

    $("#fadeBtn").click(function(){
        let opacityVal = $("#opacityInp").val()
        console.log(opacityVal)
        $("#img4").fadeTo(1000,opacityVal)
        $("#img5").fadeTo(1000,opacityVal)
        $("#img6").fadeTo(1000,opacityVal)
    })
})