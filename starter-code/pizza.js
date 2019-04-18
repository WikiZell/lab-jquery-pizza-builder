// Write your Pizza Builder JavaScript in this file.
document.addEventListener("DOMContentLoaded", function(event) {

    var PizzaHandler = function(){
        this.prices = {
            "cheesePizza" : 10,
            "Pepperonni" : 1,
            "Mushrooms" : 1,
            "Green-peppers" : 1,
            "White-sauce" : 3,
            "Gluten-free-crust": 5

        }
        this.order = {
            "cheesePizza" : 10,
            "Pepperonni" : 0,
            "Mushrooms" : 0,
            "Green-peppers" : 0,
            "White-sauce" : 0,
            "Gluten-free-crust": 0
        }   
 
        $("button").click(function(event){
            // $(this).text() clicked , do something
            $(event.currentTarget).toggleClass("active")
            switch ($(event.currentTarget).text()) {
                case "Pepperonni":
                    $(".pep").toggle("pep");                    
                    break;
                case "Mushrooms":
                $(".mushroom").toggle("mushroom");                      
                    break;
                case "Green peppers":
                $(".green-pepper").toggle("green-pepper");                        
                    break;
                case "White sauce":
                //sauce-white
                $(".sauce-white").toggle("sauce-white");                        
                    break;

                case "Gluten-free crust":
                $(".crust").toggleClass("crust-gluten-free");
                    break;
            
                default:
                    break;                        
            }
            this.updatePrice();             
        }.bind(this))      

        this.updatePrice = function(){            
            //var ingredient = $(element).text();
           // this.prices[ingredient]
           $(".btn").each((function( i,v ) {                                
                if( $(v).hasClass( "active" ) === true  ){
                    //Ingredient wanted --> Add to object order
                    //index $(v).text()
                    let indexOrder = $(v).text().split(' ').join('-');
                    //Get Price from price object
                    let price = this.prices[indexOrder];
                    //Put price in order object
                    this.order[indexOrder] = price                                      
                } else{
                    //index $(v).text()
                    let indexOrder = $(v).text().split(' ').join('-');
                    //Price will be ZERO
                    let price = 0;
                    //Put price in order object
                    this.order[indexOrder] = price
                }// end if                
            }).bind(this)) // end foreach            
           this.getOrder();
        } //End Update Price

        this.getOrder = function (){
            //Sum object order and change total price
            var total = Object.keys(this.order).reduce((sum,key)=>sum+parseFloat(this.order[key]||0),0);
            $("strong").text("$"+total);
        }   
    }
    var myPizza = new PizzaHandler();
})







