function convert(){



    console.log("Starting...")

    let lang = $("#language").val()

    let tabs = 0;
    let dowhile = 0;

    if(lang != "null"){
        let code = $("#input").val()

                
        // code = code.replace(/ = /g," <- ")


        console.log(code)


        let res = "ALGORITMO\n\n"


        if(lang == "c"){

            console.log("Converting C to Portugol")

            let arr = code.split("\n")

            console.log(arr.length)

            for(let i = 0; i < arr.length; i++){



                arr[i] = $.trim(arr[i])

                if(!arr[i].includes("for")){
                    arr[i] = arr[i].replace(/;/,"")
                }

                //ATRIBUITIONS



                 //LOOKING FOR ENDINGS
                if(arr[i].includes("}")){
                    tabs--


                    if(tabs != 0 ){
                        res += "\n"
                        for(let j = 0; j < tabs; j++){
                            res += "\t"
                        }
                        
                        res += "FIM"
                    }
                    

                    console.log("Less one Tab")             
                    
                }

                //LOOKING FOR VARIABLES ON THE CODE

                console.log("Reading line",i)

                if(arr[i].startsWith("int") 
                && !arr[i].endsWith("){") 
                && !arr[i].endsWith(")")
                && !arr[i].endsWith(") {")

                ){

                    for(let j = 0; j < tabs; j++){
                        res += "\t"
                    }
                    res += "DECLARE "+arr[i].substr(4)+" NUMERICO\n";
                                       

                }

                if(arr[i].startsWith("float")
                && !arr[i].endsWith("){") 
                && !arr[i].endsWith(")")
                && !arr[i].endsWith(") {")

                                          
                ){
                    for(let j = 0; j < tabs; j++){
                        res += "\t"
                    }
                    res += "DECLARE "+arr[i].substr(6)+" NUMERICO\n";

                    

                }

                if(arr[i].startsWith("complex")
                && !arr[i].endsWith("){") 
                && !arr[i].endsWith(")")
                && !arr[i].endsWith(") {")

                                          
                ){
                    for(let j = 0; j < tabs; j++){
                        res += "\t"
                    }
                    res += "DECLARE "+arr[i].substr(8)+" NUMERICO\n";

                    

                }

                if(arr[i].startsWith("double")
                && !arr[i].endsWith("){") 
                && !arr[i].endsWith(")")
                && !arr[i].endsWith(") {")                        

               
                ){

                    for(let j = 0; j < tabs; j++){
                        res += "\t"
                    }
                    res += "DECLARE "+arr[i].substr(7)+" NUMERICO\n";

                    

                }

                if(arr[i].startsWith("char")
                && !arr[i].endsWith("){") 
                && !arr[i].endsWith(")")     
                && !arr[i].endsWith(") {")                        

               
                ){
                    for(let j = 0; j < tabs; j++){
                        res += "\t"
                    }
                    res += "DECLARE "+arr[i].substr(4)+" LITERAL\n";

                    

                }

                //LOOKING FOR INPUTS AND OUTPUTS COMMANDS
                if(arr[i].includes("printf")){

                    let str = arr[i]+";"
                    str = str.replace("printf","")
                    str = str.replace("(","")
                    str = str.replace(");","")
                    str = str.replace("%d","")
                    str = str.replace("%f","")
                    str = str.replace("%s","")
                    str = str.replace("%c","")
                    str = str.replace('"",',"")
                    str = str.replace('"" ,',"")


                    






                    
                    
                    res += "\n"
                    for(let j = 0; j < tabs; j++){
                        res += "\t"
                    }
                    res += "ESCREVA "+str;
                    
                }

                if(arr[i].includes("scanf") 
                ){

                    let str = arr[i]+";"
                    str = str.replace("scanf","")
                    str = str.replace(");","")
                    str = str.replace("(","")

                    str = str.replace(/&/g,"")

                    
                    let variables = str.split(",");









                    res += "\n"
                    for(let j = 0; j < tabs; j++){
                        res += "\t"
                    }
                    res += "LEIA "

                    for(let j = 1; j < variables.length; j++){


                        if(variables.length-1 == j){
                                res += variables[j] + "\n"

                        }else{
                                res += variables[j] + ", "

                        }
                    }

                }

                

                //LOOKING FOR \n
                if(arr[i] == "\n"){
        
                    
                    res += "\n"
                }

                

                //LOOKING FOR CONDITIONALS ON THE CODE

                if(arr[i].includes("else")){
                    res += "\n"

                    for(let j = 0; j < tabs; j++){
                        res += "\t"
                    }
                    res += "SENÃO\n "


                    

                    
                    

                }

                if(arr[i].includes("for")){
                    
                    res += "\n\n"

                    let line = arr[i]
                    line  = line.replace(")","")
                    line  = line.replace("{","")
                    line  = line.replace("for","")
                    line  = line.replace("(","")
                    line  = line.replace("}","")
                    line  = line.replace("int","")
                    line  = line.replace("double","")
                    line  = line.replace("float","")
                    line  = line.replace("char","")
                    line  = line.replace("complex","")
                    line  = line.replace(/long/g,"")

                    let loop  = line.split(";");

                    loop[1] = loop[1].replace("<"," ")
                    loop[1] = loop[1].replace("!="," ")
                    loop[1] = loop[1].replace("=="," ")
                    loop[1] = loop[1].replace(">"," ")
                    loop[1] = loop[1].replace("<="," ")
                    loop[1] = loop[1].replace(">="," ")
                    loop[1] = loop[1].replace(loop[0].split(" ")[0] == " " ? loop[0].split(" ")[0] : loop[0].split(" ")[1],"")







                    
                    
                    

                    console.log(loop)








                    for(let j = 0; j < tabs; j++){
                        res += "\t"
                    }
                    
                    res += "PARA "+loop[0]+" ATÉ "+loop[1]+" FAÇA\n"


                    

                    
                    

                }

                if(arr[i].includes("if")){
                    let condition  = arr[i].replace(/ /g,"")
                    condition  = condition.replace(")","")
                    condition  = condition.replace("{","")
                    condition  = condition.replace("if","")
                    condition  = condition.replace("(","")
                    condition  = condition.replace("=="," = ")
                    condition  = condition.replace("else","")
                    condition  = condition.replace("}","")




                    res += "\n"

                    for(let j = 0; j < tabs; j++){
                        res += "\t"
                    }
                    res += "SE "+condition+" ENTAO\n"
                    

                    console.log(condition)

                    

                    
                    

                }         
                
                if(arr[i].includes("do")){
                    

                    res += "\n"

                    for(let j = 0; j < tabs; j++){
                        res += "\t"
                    }
                    res += "REPITA \n"

                    dowhile++;
                    


                    

                    
                    

                }         

                if(arr[i].includes("while")){
                    let condition  = arr[i].replace(/ /g,"")
                    condition  = condition.replace(")","")
                    condition  = condition.replace("{","")
                    condition  = condition.replace("(","")
                    condition  = condition.replace("while","")
                    condition  = condition.replace("}","")
                    condition  = condition.replace("<-<-","==")


                    res += "\n"

                    for(let j = 0; j < tabs; j++){
                        res += "\t"
                    }

                    if(dowhile == 0){
                        condition  = condition.replace("=="," = ")
                        



                        res += "ENQUANTO "+condition+" FAÇA\n"


                    }else{
                        condition  = condition.replace("=="," != ")
                        condition  = condition.replace("<="," > ")
                        condition  = condition.replace("<"," >= ")
                        condition  = condition.replace("<="," > ")
                        condition  = condition.replace("!="," = ")
                        condition  = condition.replace(">"," <= ")
                        condition  = condition.replace(">="," < ")




                        res += "ATÉ "+condition+"\n"


                        dowhile--


                    }                   
                    

                    console.log(condition)

                    

                    
                    

                }         
                
                //LOOKING FOR FOR {
                if(arr[i].includes("{")){
                    if(tabs != 0 ){
                        for(let j = 0; j < tabs; j++){
                            res += "\t"
                        }

                        res += "INÍCIO"
                    }
                    

                    tabs++


                }
                
                //LOOKING FOR ATRIBUITIONS
                if((arr[i].includes("=") 
                || arr[i].includes("+=")
                || arr[i].includes("-=")
                || arr[i].includes("*=")
                || arr[i].includes("/=")) 
                && !arr[i].includes("for")
                && !arr[i].includes("int")
                && !arr[i].includes("double")
                && !arr[i].includes("char")
                && !arr[i].includes("long")
                && !arr[i].includes("float")
                && !arr[i].includes("complex")
                && !arr[i].includes("if")
                && !arr[i].includes("while")







                 
                ){
                    res += "\n"
                    for(let j = 0; j < tabs; j++){
                        res += "\t"
                    }
                    res += arr[i] +"\n";
                }

                //LOOKING FOR ATRIBUITIONS
                if(arr[i].includes("break")             
                ){
                    res += "\n"
                    for(let j = 0; j < tabs; j++){
                        res += "\t"
                    }
                    res += "PARE" +"\n";
                }
                


            }

            res += "\n\n\nFIM_ALGORITMO."
            


            
        }else if(lang == "cpp"){
            console.log("Converting CPP to Portugol")

        }

        $("#output").val(res)

        console.log("Done!")
    }else{
        alert("Select a language")
    }

}

var textareas = document.getElementsByTagName('textarea');
var count = textareas.length;
for(var i=0;i<count;i++){
    textareas[i].onkeydown = function(e){
        if(e.keyCode==9 || e.which==9){
            e.preventDefault();
            var s = this.selectionStart;
            this.value = this.value.substring(0,this.selectionStart) + "\t" + this.value.substring(this.selectionEnd);
            this.selectionEnd = s+1; 
        }
    }
}