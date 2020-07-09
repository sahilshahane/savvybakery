

function download(filename, text) {
    var element = document.createElement('a');
    element.style.display = 'none';
    document.body.appendChild(element);

    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);
    element.click();

    document.body.removeChild(element);
  }

function getJSONData(data){

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

        download(parentCAT+"_CAT"+fileIndex+".json", JSON.stringify(JSON_ARRAY,null, 4));
        }
    
}

Data = [{
    "1":{"pCAT":"cakes","subCAT":"chocolate-base","data":["CHOCOLATE SYRUP CAKE","BLACK FOREST","CHOCOLATE TRUFFEL","DUTCH CHOCOLATE","GANACHE","CHOCOLATE CHEESE CAKE"],"extraToken":["base"]},
    "2":{"pCAT":"cakes","subCAT":"vanilla-base","data":["PINEAPPLE","BUTTER SCOTCH","STRAWBERRY"],"extraToken":["base"]},
    "3":{"pCAT":"cakes","subCAT":"flavoured-specials","data":["PINACOLADA(TENDER COCONUT)", "RASMALAI", "KULFI FALOODA", "BLUE BERRY", "PAAN", "MANGO", "ORANGE", "PAANI PURI", "MERRY BERRY", "GULAB JAMUN", "HONEY CAKE", "ZEBRA MARVEL", "RED VELVET", "TIGER CREAM CAKE", "DATE CAKE (SPECIALITY)", "PLUM CAKE (SPECIALITY)", "MARBLE", "WINE CAKE", "SPONGE", "MIX FRUIT CAKE", "TROOTY FROOTY CAKE"]},
    "4":{"pCAT":"cakes","subCAT":"designer","data":["CHRISTMAS CAKE", "CARWHEEL CAKE", "DOLL CAKE", "MARBLE"]}
},
{
    "1":{"pCAT":"cake_sides","data":["CAKE POPS","CAKESICAL","BROWNIE","TEA TIME CAKE","TROOTY FROOTY BREAD","PLUM CAKE","MUFFINS","CUP CAKES","BAKE DONUT","FRIED DONUT","CINNAMON ROLL","SWEET BREAD"]}
},
{
    "1":{"pCAT":"bakery","subCAT":"bread","data":["BREAD", "LADI PAV", "BROWN BREAD", "GARLIC BREAD", "BRAIDED BREAD", "PIZZA BASE", "WHOLE WHEAT PIZZA BASE", "BURGER BUN", "WHOLE WHEAT BURGER BUN"]},
    "2":{"pCAT":"bakery","subCAT":"snacks","data":["STUFFED GARLIC BREAD", "PIZZA", "VEGIEE CHESSE", "PANEERY CHEESE", "SOYA CHEESE", "FOCCASIA", "STUFFED BRAIDED BREAD"]}
}
]