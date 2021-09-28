$(document).ready(function(){
    $("#in").click(function(){
        $("#image").width($("#image").width()+50);
        $("#image").height($("#image").height()+50);
    });

    $("#out").click(function(){
        $("#image").width($("#image").width()-50);
        $("#image").height($("#image").height()-50);
    });

    let imgArr = [
        "https://www.bing.com/th?id=OIP.1YM53mG10H_U25iPjop83QHaEo&w=218&h=136&c=8&rs=1&qlt=90&o=6&dpr=1.25&pid=3.1&rm=2",
        "https://www.bing.com/th?id=OIP.X_65uIJkSF8bJl_zyU4twgHaEo&w=219&h=136&c=8&rs=1&qlt=90&o=6&dpr=1.25&pid=3.1&rm=2",
        "https://www.bing.com/th?id=OIP.0VtFarqAxKUjzx9tMdzn6AHaFj&w=167&h=133&c=8&rs=1&qlt=90&o=6&dpr=1.25&pid=3.1&rm=2",
        "https://www.bing.com/th?id=OIP.UYV_bihup-y039M8_Dk0KQHaFP&w=177&h=133&c=8&rs=1&qlt=90&o=6&dpr=1.25&pid=3.1&rm=2",
        "https://www.bing.com/th?id=OIP.jpLd-_FFm5nktmj6TtNtHAHaFj&w=189&h=137&c=8&rs=1&qlt=90&o=6&dpr=1.25&pid=3.1&rm=2"
    ]
    $("#image1").attr("src",imgArr[0])

    // $("#right").click(function(){
        
    //     for(let i=0;i<imgArr.length;i++){
    //         $("#image1").slideUp(2000,function(){
    //             $("#image1").attr("src",imgArr[i])
    //         })
    //         $("#image1").slideDown(2000)
    //         if(i == (imgArr.length - 1)){
    //             $("#right").attr("disabled",true)
    //         }
    //     }
    //     $("#right").attr("disabled",false)
    // });
    let slideIndex=1;
    $("#left").attr("disabled",true) 
    for (let i = slideIndex; i < imgArr.length; i++) {
        $("#right").click(function(){
            $("#image1").slideUp(1000,function(){
                 $("#image1").attr("src",imgArr[slideIndex++])
                 $("#left").attr("disabled",false)
            })
            $("#image1").slideDown(1000)
            if(slideIndex == (imgArr.length -1)){
                $("#right").attr("disabled",true)
            }
        })
        break;
    }
    
    // for (let i = slideIndex; i >= 1; i--) {
        
        
        $("#left").click(function(){
            console.log(slideIndex)
            $("#image1").slideUp(1000,function(){
                 $("#image1").attr("src",imgArr[(--slideIndex)-1])
                 $("#right").attr("disabled",false)
                 if(slideIndex == 1){
                    $("#left").attr("disabled",true)
                }
            })
            $("#image1").slideDown(1000)
            if(slideIndex == 1){
                $("#left").attr("disabled",true)
            }
        })
    //    break;
    //    }
});