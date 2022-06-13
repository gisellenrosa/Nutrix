let nextButton = document.getElementById('next-button');
let meals = document.getElementsByClassName('meal-option')
let counter = 1;

let mealsJSON = [
    {
        "id": 0,
        "title": "Panqueca proteica flexível",
        "macros": {
            "proteins": "22g",
            "carbohydrates": "48g",
            "fats": "4g",
            "calories": "316kcal"
        },
        "ingredients": [
            {
                "id": 0,
                "name": "Aveia",
                "quantity": "50g"
            },
            {
                "id": 1,
                "name": "Banana",
                "quantity": "70 - 90g"
            },
            {
                "id": 2,
                "name": "Clara de ovo",
                "quantity": "4"
            },
            {
                "id": 3,
                "name": "Canela",
                "quantity": "A gosto"
            },
            {
                "id": 4,
                "name": "Bicabornato de sódio",
                "quantity": "1 Colher"
            },
            {
                "id": 5,
                "name": "Whey Protein",
                "quantity": "Opcional"
            }
        ]
    },
    {
        "id": 1,
        "title": "Mingau Proteico (Quente)",
        "macros": {
            "proteins": "46g",
            "carbohydrates": "76g",
            "fats": "17g",
            "calories": "640kcal"
        },
        "ingredients": [
            {
                "id": 0,
                "name": "Aveia",
                "quantity": "60g"
            },
            {
                "id": 1,
                "name": "Pasta de amendoim",
                "quantity": "24g"
            },
            {
                "id": 2,
                "name": "Banana",
                "quantity": "80g"
            },
            {
                "id": 3,
                "name": "Maçã",
                "quantity": "100g"
            },
            {
                "id": 4,
                "name": "Cacau em pó",
                "quantity": "5-10g"
            },
            {
                "id": 5,
                "name": "Whey protein",
                "quantity": "1 scoop"
            },
            {
                "id": 6,
                "name": "Clara de ovo",
                "quantity": "1g"
            },
            {
                "id": 7,
                "name": "Adoçante",
                "quantity": "Opcional"
            }
        ]
    },
    {
        "id": 2,
        "title": "Sorvete Proteico",
        "macros": {
            "proteins": "28g",
            "carbohydrates": "45g",
            "fats": "2g",
            "calories": "310kcal"
        },
        "ingredients": [
            {
                "id": 0,
                "name": "Banana Congelada",
                "quantity": "150-200g"
            },
            {
                "id": 1,
                "name": "Whey ou Caseína",
                "quantity": "1/2 scoop"
            },
            {
                "id": 2,
                "name": "Queijo Cottage",
                "quantity": "60g"
            },
            {
                "id": 3,
                "name": "Leite",
                "quantity": "A gosto"
            },
            {
                "id": 4,
                "name": "Adoçante",
                "quantity": "Opcional"
            },
            {
                "id": 5,
                "name": "Cacau em pó",
                "quantity": "Opcional"
            },
            {
                "id": 6,
                "name": "Morango Congelado",
                "quantity": "Opcional"
            }

        ]
    },
    {
        "id": 3,
        "title": "Mingau Gelado",
        "macros": {
            "proteins": "44g",
            "carbohydrates": "59g",
            "fats": "10g",
            "calories": "520kcal"
        },
        "ingredients": [
            {
                "id": 0,
                "name": "Aveia Integral",
                "quantity": "60g"
            },
            {
                "id": 1,
                "name": "Banana / Maçã",
                "quantity": "100g"
            },
            {
                "id": 2,
                "name": "Canela em pó",
                "quantity": "5-10g"
            },
            {
                "id": 3,
                "name": "Iogurte grego",
                "quantity": "1"
            },
            {
                "id": 4,
                "name": "Caseína em pó",
                "quantity": "1 scoop"
            },
            {
                "id": 5,
                "name": "Pasta de Amendoin",
                "quantity": "16 g"
            }
        ]
    },
    {
        "id": 4,
        "title": "Cookie Proteico",
        "macros": {
            "proteins": "44g",
            "carbohydrates": "48g",
            "fats": "18g",
            "calories": "530kcal"
        },
        "ingredients": [
            {
                "id": 0,
                "name": "Aveia",
                "quantity": "50g"
            },
            {
                "id": 1,
                "name": "Pasta de Amendoin",
                "quantity": "20g"
            },
            {
                "id": 2,
                "name": "Ovo",
                "quantity": "1"
            },
            {
                "id": 3,
                "name": "Whey",
                "quantity": "1 scoop"
            },
            {
                "id": 4,
                "name": "Canela",
                "quantity": "Opcional"
            }
        ]
    },
    {
        "id": 5,
        "title": "Bolinho de Microondas",
        "macros": {
            "proteins": "30g",
            "carbohydrates": "2g",
            "fats": "1g",
            "calories": "120 - 146kcal"
        },
        "ingredients": [
            {
                "id": 0,
                "name": "Whey ou Caseína",
                "quantity": "1 scoop"
            },
            {
                "id": 1,
                "name": "Clara de ovo",
                "quantity": "1"
            },
            {
                "id": 2,
                "name": "Água",
                "quantity": "1 Colher"
            },
            {
                "id": 3,
                "name": "Canela em pó",
                "quantity": "A gosto"
            },
            {
                "id": 4,
                "name": "Pasta de Amendoin",
                "quantity": "Opcional"
            },
            {
                "id": 5,
                "name": "Banana",
                "quantity": "Opcional"
            }
        ]
    },
    {
        "id": 6,
        "title": "Hambúrguer de Atum",
        "macros": {
            "proteins": "50g",
            "carbohydrates": "34g",
            "fats": "5g",
            "calories": "385kcal"
        },
        "ingredients": [
            {
                "id": 0,
                "name": "Atum enlatado em água",
                "quantity": "120g"
            },
            {
                "id": 1,
                "name": "Aveia",
                "quantity": "50g"
            },
            {
                "id": 2,
                "name": "Ovo",
                "quantity": "1"
            },
            {
                "id": 3,
                "name": "Sal e tempeiros",
                "quantity": "A gosto"
            }
        ]
    },
    {
        "id": 7,
        "title": "Cheeseburger",
        "macros": {
            "proteins": "51g",
            "carbohydrates": "26g",
            "fats": "4g",
            "calories": "425kcal"
        },
        "ingredients": [
            {
                "id": 0,
                "name": "Carne de Patinho Moída",
                "quantity": "200g"
            },
            {
                "id": 1,
                "name": "Queijo Light Cheddar",
                "quantity": "1 fatia"
            },
            {
                "id": 2,
                "name": "Pão de hamburguer integral",
                "quantity": "1"
            },
            {
                "id": 3,
                "name": "Alface, Tomate, Ketchup, Mostarda",
                "quantity": "Opcional"
            },
            {
                "id": 4,
                "name": "Ovo frito",
                "quantity": "1"
            },
            {
                "id": 5,
                "name": "Pasta de Amendoin",
                "quantity": "16 g"
            }
        ]
    },
    {
        "id": 8,
        "title": "Sanduíche de Frango proteico",
        "macros": {
            "proteins": "53g",
            "carbohydrates": "36g",
            "fats": "10g",
            "calories": "446kcal"
        },
        "ingredients": [
            {
                "id": 0,
                "name": "Pão Integral",
                "quantity": "2 fatias"
            },
            {
                "id": 1,
                "name": "Frango Grelhado",
                "quantity": "100-150g"
            },
            {
                "id": 2,
                "name": "Fatias de Tomate e Alface",
                "quantity": "1"
            },
            {
                "id": 3,
                "name": "Mostarda Dijon",
                "quantity": "A gosto"
            },
            {
                "id": 4,
                "name": "Pimenta Chipotle",
                "quantity": "A gosto"
            }
        ]
    },
    {
        "id": 9,
        "title": "Macarrão proteico e hipercalórico",
        "macros": {
            "proteins": "68g",
            "carbohydrates": "75g",
            "fats": "18g",
            "calories": "734kcal"
        },
        "ingredients": [
            {
                "id": 0,
                "name": "Macarrão Integral Spaguetti",
                "quantity": "100g"
            },
            {
                "id": 1,
                "name": "Frango Grelhado",
                "quantity": "200g"
            },
            {
                "id": 2,
                "name": "Creme de Ricota Light",
                "quantity": "50g"
            },
            {
                "id": 3,
                "name": "Legumes e Verduras",
                "quantity": "A gosto"
            },
            {
                "id": 4,
                "name": "Ovo inteiro",
                "quantity": "1"
            }
        ]
    },
    {
        "id": 10,
        "title": "Salgado proteico",
        "macros": {
            "proteins": "32g",
            "carbohydrates": "2g",
            "fats": "8g",
            "calories": "208kcal"
        },
        "ingredients": [
            {
                "id": 0,
                "name": "Frango Desfiado",
                "quantity": "100g"
            },
            {
                "id": 1,
                "name": "Couve flor cozida",
                "quantity": "50g"
            },
            {
                "id": 2,
                "name": "1 gema de ovo",
                "quantity": "1"
            },
            {
                "id": 3,
                "name": "Queijo Cottage",
                "quantity": "50g"
            },
            {
                "id": 4,
                "name": "Tomate picado",
                "quantity": "A gosto"
            }



        ]
    }
]

function generateTreeNumbers(maxPossbilities) {
    let mealIdsRandom;

    do {
        mealIdsRandom = [];
        for (let i = 1; i <= 3; i++) {
            mealIdsRandom.push(Math.floor(Math.random() * maxPossbilities))
        }
    } while (
        mealIdsRandom[0] === mealIdsRandom[1] ||
        mealIdsRandom[1] === mealIdsRandom[2] ||
        mealIdsRandom[2] === mealIdsRandom[0]
    )

    return mealIdsRandom

}

function pick3Meals() {
    const maxPossbilities = mealsJSON.length

    let threeMeals = generateTreeNumbers(maxPossbilities)

    for (let i = 1; i <= 3; i++) {

        let meal = mealsJSON[threeMeals[i - 1]]
        document.getElementById("meal-" + i + "-title").innerHTML = meal.title;
        document.getElementById("meal-" + i + "-carbohydrate").innerHTML = meal.macros.carbohydrates;
        document.getElementById("meal-" + i + "-protein").innerHTML = meal.macros.proteins;
        document.getElementById("meal-" + i + "-fat").innerHTML = meal.macros.fats;
        document.getElementById("meal-" + i + "-calories").innerHTML = meal.macros.calories;


        for (let y = 0; y <= meal.ingredients.length - 1; y++) {
            const modalTitle = document.createElement("div")
            const modalH2 = document.createElement("h2")
            const modalP = document.createElement("p")

            const modalContentH2 = document.createTextNode(meal.ingredients[y].name)
            const modalContentP = document.createTextNode(meal.ingredients[y].quantity)


            modalH2.appendChild(modalContentH2)
            modalP.appendChild(modalContentP)


            modalTitle.appendChild(modalH2)
            modalTitle.appendChild(modalP)

            modalTitle.classList.add('modal-title')


            document.getElementById("modal-" + i + "-makings").appendChild(modalTitle)
        }
    }
}

function mealSelection() {

    for (let i = 0; i < meals.length; i++) {
        meals[i].addEventListener("click", function () {
            let current = document.getElementsByClassName("active");

            if (current.length > 0) {
                current[0].className = current[0].className.replace(" active", "");
            }
            this.className += " active";
        });
    }
}

function mealSelectorMaker() {
    let totalCounter = document.getElementById('counter')
    let totalMeals = localStorage.getItem("selectedMealsPerDay")
    let contentCounter;
    let counterMealProgress = localStorage.getItem("counterMealProgress")
    

    if(counter === 1) {
        contentCounter = document.createTextNode(1 + '/' + totalMeals)
        totalCounter.appendChild(contentCounter)
    } else {
        contentCounter = document.createTextNode(counterMealProgress + '/' + totalMeals)
        totalCounter.replaceChildren(contentCounter)
    }

    pick3Meals();
}

function mealsSaver() {
    let mealsSelected = document.getElementsByClassName("active");

    let mealTitle = mealsSelected[0].getElementsByTagName("h1")[0].innerText

    localStorage.setItem("Meal-" + counter, mealTitle)
}

mealSelection();
mealSelectorMaker();



nextButton.onclick = function () {

    let counterMealProgress = localStorage.getItem("counterMealProgress")
    let totalMeals = localStorage.getItem("selectedMealsPerDay")
    let current = document.getElementsByClassName("active");

    

    if(current.length === 0) {
        alert('Selecione pelo menos uma refeição!')
    } else {
        mealsSaver();
        if(counterMealProgress === totalMeals) {

            counter = 1;
            localStorage.setItem("counterMealProgress", 1)
            window.location = '../finalpage';
        } else {

            counter++
            localStorage.setItem("counterMealProgress", counter)
            current[0].className = current[0].className.replace(" active", "");
            mealSelectorMaker()
        }
    }
}