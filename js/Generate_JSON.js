
Data = [{
    "1":{"pCAT":"Cake","subCAT":"Chocolate Base","data":["CHOCOLATE SYRUP CAKE","BLACK FOREST CAKE","CHOCOLATE TRUFFEL CAKE","DUTCH CHOCOLATE CAKE","GANACHE CAKE","CHOCOLATE CHEESE CAKE"],"extraToken":["base"]},
    "2":{"pCAT":"Cake","subCAT":"Vanilla Base","data":["PINEAPPLE CAKE","BUTTER SCOTCH CAKE","STRAWBERRY CAKE"],"extraToken":["base"]},
    "3":{"pCAT":"Cake","subCAT":"Flavoured Specials","data":["PINACOLADA(TENDER COCONUT) CAKE", "RASMALAI CAKE", "KULFI FALOODA CAKE", "BLUE BERRY CAKE", "PAAN CAKE", "MANGO CAKE", "ORANGE CAKE", "PAANI PURI CAKE", "MERRY BERRY CAKE", "GULAB JAMUN CAKE", "HONEY CAKE CAKE", "ZEBRA MARVEL CAKE", "RED VELVET CAKE", "TIGER CREAM CAKE", "DATE CAKE (SPECIALITY)", "PLUM CAKE (SPECIALITY)", "MARBLE CAKE", "WINE CAKE", "SPONGE CAKE", "MIX FRUIT CAKE", "TROOTY FROOTY CAKE"]},
    "4":{"pCAT":"Cake","subCAT":"Designer","data":["CHRISTMAS CAKE", "CARWHEEL CAKE", "DOLL CAKE", "MARBLE CAKE"]}
},
{
    "1":{"pCAT":"Cake Sides","data":["CAKE POPS","CAKESICAL","BROWNIE","TEA TIME CAKE","TROOTY FROOTY BREAD","PLUM CAKE","MUFFINS","CUP CAKES","BAKE DONUT","FRIED DONUT","CINNAMON ROLL","SWEET BREAD"]}
},
{
    "1":{"pCAT":"Bakery","subCAT":"Breads","data":["BREAD", "LADI PAV", "BROWN BREAD", "GARLIC BREAD", "BRAIDED BREAD", "PIZZA BASE", "WHOLE WHEAT PIZZA BASE", "BURGER BUN", "WHOLE WHEAT BURGER BUN"]},
    "2":{"pCAT":"Bakery","subCAT":"Snacks","data":["STUFFED GARLIC BREAD", "PIZZA", "VEGIEE CHESSE", "PANEERY CHEESE", "SOYA CHEESE", "FOCCASIA", "STUFFED BRAIDED BREAD"]}
}
];


function download(filename, text) {
    var element = document.createElement('a');
    element.style.display = 'none';
    document.body.appendChild(element);

    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);
    element.click();

    document.body.removeChild(element);
  }

function getJSONData(data,mode,beautify){
    if(mode==1){
    for(let DataObj of data) 
        for(let [fileIndex,MainObj] of Object.entries(DataObj)){
            parentCAT = MainObj["pCAT"]
            subCAT = MainObj["subCAT"]
            Data_Array = MainObj["data"]
            extraToken = undefined

            try { if(MainObj["extraToken"].length) extraToken = MainObj["extraToken"] } catch (error) {}
            

            JSON_ARRAY = []

            for(item of Data_Array){
                obj = {}
                obj["category"] = parentCAT;
                obj["tokens"] = []
                if(subCAT){
                    obj["sub_category"] = subCAT;
                    obj["tokens"].push(obj["sub_category"]);
                }
        
                obj["value"] = item;
                obj["tokens"] = item.split(' ');
                obj["tokens"].push(obj["category"]);

                if(extraToken)
                obj["tokens"] = obj["tokens"].concat(extraToken);

                JSON_ARRAY.push(obj);
            }
        Data = beautify ? JSON.stringify(JSON_ARRAY,null, 4) : JSON.stringify(JSON_ARRAY);

        download(parentCAT+"_cat"+fileIndex+".json", Data);
         }
    }
    else if(mode==2){
        JSON_ARRAY = []

        for(let DataObj of data) 
        for(let [fileIndex,MainObj] of Object.entries(DataObj)){
            parentCAT = MainObj["pCAT"]
            subCAT = MainObj["subCAT"]
            Data_Array = MainObj["data"]
       
            for(item of Data_Array){
                obj = {}
                if(subCAT)
                    obj["data"] = {"sub_category":subCAT,"parent_category":parentCAT}
                else
                    obj["data"] = {"sub_category":parentCAT,"parent_category":parentCAT}
                obj["value"] = item;
                JSON_ARRAY.push(obj);
            }
            
         }
         Data = beautify ? JSON.stringify(JSON_ARRAY,null, 4) : JSON.stringify(JSON_ARRAY);

         download("SEARCH_AUTOCOMPLETE_DATA.js", "var AUTOCOMPLETE_DATA="+Data);
    }

}


function gcc(cat_str,download_=true){
    arr=[]
    for(obj of AUTOCOMPLETE_DATA){
        if(obj["data"]["sub_category"]==cat_str){
            val = obj["value"].charAt(0).toUpperCase()+obj["value"].slice(1).toLowerCase();
            arr.push(val);
        }
    }

    if(download_)
    download("product items.txt",JSON.stringify(arr,null, 4));
    else{
        temp = document.createElement("div");
        for(item of arr){
            div = document.createElement("div");
            div.classList.add("item");
            div.innerText = item;
            temp.appendChild(div);
        }
        console.log(temp)
    }
}


function dataLOL(){
    JSON_ARRAY = []

    for(let DataObj of Data) 
        for(let [fileIndex,MainObj] of Object.entries(DataObj)){
            parentCAT = MainObj["pCAT"]
            Data_Array = MainObj["data"]

            if(MainObj['subCAT'])
            subCAT = MainObj["subCAT"]

            for(item of Data_Array){
                obj = {}
                obj["category"] = parentCAT;
                item_title = item.charAt(0).toUpperCase()+item.slice(1).toLowerCase();
                obj["title"] = item_title;
                item = item.trim();
                var item_id = item.replaceAll(" ","-");

                console.log(item_id)

                if(parentCAT=="Cake" && !item.includes('CAKE'))
                    item_id+="-cake";


                obj["id"] = (parentCAT.substring(0,3)+'-'+(subCAT?subCAT.substring(0,3)+'-':"")+item_id).toLowerCase();


                JSON_ARRAY.push(obj);
            }
    }
    Data__ = false ? JSON.stringify(JSON_ARRAY,null, 4) : JSON.stringify(JSON_ARRAY);
    download("category.json", Data__);
}
