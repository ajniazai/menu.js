


//Menu Mobile phones

//class Mobile phones
  //make
  //model

class Mobiles {
    constructor(make, model){
        this.make = make;
        this.model = model;
    }
    
}
//class Menu
class Menu{
    constructor(){
        //mobile phones array
        this.mobiles = [];
    }

  //see a menu
 
  //add mobiles
  //prompt for a make
  //prompt for a model
  //creat new mobile and push mobile into array
  addMobile(){
    let mobileMake = prompt("Enter mobile make");
    let mobileModel = prompt("Enter mobile model");
    this.mobiles.push(new Mobiles(mobileMake. mobileModel));
  }


  //delete moblie phones
  deleteMobiles(){
    let mobileIndex = prompt("Enter mobile index to Delete");
    this.mobiles.splice(mobileIndex, 1);
  }
  //view mobile phones
  viewMobiles(){
    let displayMobiles = '';
    for(let i = 0; i < this.mobiles.length; i++){
        displayMobiles += 
        `${i}) ${this.mobiles[i].make} ${this.mobiles[i].model}`
    }
   
    alert(`
    Mobile Inventory:
    -----------------------
    ${`displayMobiles`}
    `);
  }
  showMainMenu(){
    return prompt(`
    Main Menu:
    --------------
    0) Exit Menu
    1) Add Mobile
    2) Delete Mobile
    3) View all Mobile
    `);
  }
  //start the menu
  start (){
    let slection = this.showMainMenu();

    while(slection != 0){
        switch(slection){
            
            case "1" : this.addMobile();
            break;
            case "2" : this.deleteMobiles();
            break;
            case "3" : this.viewMobiles();
            break;
            default : Selection = 0;
        }
        Selection = this.showMainMenu();
    }
    alert("Exiting Menu...Good Bye!")
  }
}
  // instantiate the menu and invoke the start method

  let mobile1 = new Mobiles("Ipone", "ipone15");
  console.log(mobile1);
  
  let menu = new Menu();


menu.start();