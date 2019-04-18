// Write your Pizza Builder JavaScript in this file.
$( document ).ready(function() {

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
                    $(".sauce").toggleClass("sauce-white");                        
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
           $(".btn").each((function( i,v ) {
                 //parse innerHTML to object keys
                let indexOrder = $(v).text().split(' ').join('-');                     
                if( $(v).hasClass( "active" )){
                    let price = this.prices[indexOrder];
                    this.order[indexOrder] = price                                      
                } else{
                    let price = 0;
                    this.order[indexOrder] = price
                }           
            }).bind(this))         
           this.getOrderTotal();
        } 

        this.getOrderTotal = function (){
            var total = Object.keys(this.order).reduce((sum,key)=>
                sum+parseInt(this.order[key]||0)
            ,0);
            //Remove from html list
            Object.keys(this.order).forEach((value) => {
                // remove dashes and select first word
                if(value !== "cheesePizza" && this.order[value] === 0){
                    let liToRemove = value.split('-').join(' ').toLowerCase().split(" ")[0]
                    $('.panel ul > li:contains("'+liToRemove+'")').hide()
                }else{
                    let liToRemove = value.split('-').join(' ').toLowerCase().split(" ")[0]
                    $('.panel ul > li:contains("'+liToRemove+'")').show()
                }
            });
            $("strong").text("$"+total);
        }

        this.setDefault = function(){
            $(".crust").toggleClass("crust-gluten-free");
            $(".sauce").toggleClass("sauce-white");        
            $(".btn-sauce,.btn-crust").toggleClass("active");
            this.updatePrice();            
        }.bind(this)()
    }
    var myPizza = new PizzaHandler();
});







