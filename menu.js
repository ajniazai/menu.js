class resturantMenu {
    constructor(name, position) {
        this.name = name;
        this.position =position;
    }
    describe() {
        return `${this.name} plays ${this.position}.`;

    }
}
class Food {
    constructor(name) {
        this.name = name;
        this.food = [];
    }
addFood(food) {
    if (food instanceof food) {
        this.food.push(food);
    } else {
        throw new Error(`You can only add an instance of food. Argument is not a food: ${food}`);
    }
}
describe() {
    return `${this.name} has ${this.food.length} food.`;
}
}
class Menu {
    constructor() {
        this.food = [];
        this.selectedFood = null;
    }
    start() {
        let selection = this.showMainOptions();
        while (selection != 0) {
            switch (selection) {
                case '1' :
                  this.creatMenu();
                  break;
                case '2' :
                  this.viewMenu();
                  break;
                case '3':
                  this.deleteMenu();
                   break;
                case '4':
                  this.displayMenu;
                   break;
                default:
                    selection = 0;

            }
            selection = this.showMainOptions();
        }
        alert('Goodbye!');
    }

    showFoodMenuOptions(menuInfo) {
        return prompt(`
        0) exit
        1) creat new food
        2) view food
        3) delete food
        4) display all food
        `);
    }

    showMainOptions(menuInfo) {
        return prompt(`
        0) back
        1) create menu
        2) delete menu
        --------------------
        ${menuInfo}
        `);
    }

    displayFood() {
        let foodString = '';
        for (let i = 0; i < this.food.length; i++) {
            foodString += i  + ') ' + this.food[i].name + '\n';
        }
        alert(foodString);
    
    }
    creatMenu() {
        let name = promopt('Enter name for new food');
        this.food.push(new Food(name));

        }
        viewMenu() {
            let index = promopt('Enter the index of the team you wish to view');
            if (index > -1 && index < this.food.length) {
                this.selectedTeam = this.food[index];
                let description = 'Menu Name: ' + this.selectedTeam.name + '\n';

                for (let i = 0; i < this.selectedTeam.menu.length; i++) {
                    description += i + ') ' + this.selectedTeam.menu[i].name + ' - ' + this.selectedTeam.menu[i].position + '\n';
                }

                let selection = this.showMainOptions(description);
                switch (selection) {
                    case '1' :
                        this.creatMenu();
                        break;
                    case '2':
                        this.deleteMenu();
                }
            }
        }
    }
    let menu = new Menu();
    menu.start();