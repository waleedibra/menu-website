// items
// get unique categories
// iterate over categories

const menu = [
    {
    "Category": "Signature cocktails",
    "Name": "Why Not?",
    "Price": 120,
    "Price in Euro (Euro\/TL = 17.5) as of july 12th 2022": 6.9,
    "briefdescription": "Bubble gum infused Gin, Safari, Malibu, batida De Coco, Lemon juice, vanilla syrup, burnt marshmallow",
    "img" : "images/cocktails/whynot.jpg"
    },

    {
    "Category": "Signature cocktails",
    "Name": "Caribbean Breeze",
    "Price": 120,
    "Price in Euro (Euro\/TL = 17.5) as of july 12th 2022": 6.9,
    "briefdescription": "Coffee beans infused rum, dark rum, triple sec, lemon juice, vanilla syrup, cinnamon and brown sugar rim",
    "img" : "images/cocktails/caribbeanbreeze.jpg"
    },
    {
    "Category": "Signature cocktails",
    "Name": "Espresson Martini",
    "Price": 120,
    "Price in Euro (Euro\/TL = 17.5) as of july 12th 2022": 6.9,
    "briefdescription": "Vodka, kahlua, smple syrup, espresso",
    "img" : "images/cocktails/espressomartini.jpg",
    },           
    {
     "Category": "Signature cocktails",
     "Name": "Aperol Sprizza",
     "Price": 120,
     "Price in Euro (Euro\/TL = 17.5) as of july 12th 2022": 6.9,
     "briefdescription": "Aperol, sparkling wine, splash of soda water",
     "img" : "images/cocktails/aprolspritzer.jpg"
    },
    {
        "Category": "Signature cocktails",
        "Name": "Negroni",
        "Price": 120,
        "Price in Euro (Euro\/TL = 17.5) as of july 12th 2022": 6.9,
        "briefdescription": "Campari, gordons gin, vermouth rosso",
        "img" : "images/cocktails/negroni.jpg"
       },
    {
     "Category": "Signature cocktails",
     "Name": "Bergamot melon",
     "Price": 120,
     "Price in Euro (Euro\/TL = 17.5) as of july 12th 2022": 6.9,
     "briefdescription": "Earl grey tea infused rum, melon liquor, elderflower syrup, lemon juice, Redbull yellow",
     "img" : "images/cocktails/bergamotmelon.jpg"
    },

    {
     "Category": "Signature cocktails",
     "Name": "Clouds of Mediterranean",
     "Price": 120,
     "Price in Euro (Euro\/TL = 17.5) as of july 12th 2022": 6.9,
     "briefdescription": "Skinos, lemon juice, vanilla syrup, egg White, angostura bitter",
     "img" : "images/cocktails/cloudsofmed.jpg"
    },


 
 
    {
     "Category": "Starters",
     "Name": "Creamy Mushroom",
     "Price": 80,
     "Price in Euro (Euro\/TL = 17.5) as of july 12th 2022": 4.6,
     "briefdescription": "Cooked  mushroom covered in creamy sauce.",
     "img" : "images/starters/starters.jpg"
    },
    {
     "Category": "Starters",
     "Name": "Traditional Ravioli",
     "Price": 75,
     "Price in Euro (Euro\/TL = 17.5) as of july 12th 2022": 4.3,
     "briefdescription": "Italian dumpling that's typically stuffed with ricotta, meat, cheese, and vegetables. The filling is then sealed between two thin layers of egg pasta dough and typically served with a delicious tomato or cream-based pasta sauce.",
     "img" : "images/starters/starters2.jpg"
    },
    {
     "Category": "Starters",
     "Name": "Pork Ribs ",
     "Price": 95,
     "Price in Euro (Euro\/TL = 17.5) as of july 12th 2022": 5.5,
     "briefdescription": "Fresh and tender pork ribs.",
     "img" : "images/starters/starters3.jpg"
    },
    {
     "Category": "Starters",
     "Name": "Spring Rolls ",
     "Price": 70,
     "Price in Euro (Euro\/TL = 17.5) as of july 12th 2022": 4,
     "briefdescription": "A chinese dish deep Fried wrapp stuffed with vegetables and rice.",
     "img" : "images/starters/starters4.jpg"
    },
    {
     "Category": "Starters",
     "Name": "Traditional Dolma ",
     "Price": 70,
     "Price in Euro (Euro\/TL = 17.5) as of july 12th 2022": 4,
     "briefdescription": "Traditional stuffed grape leaves or flowers",
     "img" : "images/starters/starters5.jpg"
    },
    {
        "Category": "Starters",
        "Name": "Prawn Cocktails",
        "Price": 90,
        "Price in Euro (Euro\/TL = 17.5) as of july 12th 2022": 5.2,
        "briefdescription": "Juicy and fresh shrimps.",
        "img" : "images/starters/starters6.jpg"

       },
       {
        "Category": "Starters",
        "Name": "Prawn Casserole",
        "Price": 100,
        "Price in Euro (Euro\/TL = 17.5) as of july 12th 2022": 5.7,
        "briefdescription": "Caserole with fresh and juicy shrimp creamy sauce and toped with oven baked cheddar cheese.",
        "img" : "images/starters/starters7.jpg"

       },
       {
        "Category": "Starters",
        "Name": "Calamari",
        "Price": 80,
        "Price in Euro (Euro\/TL = 17.5) as of july 12th 2022": 4.6,
        "briefdescription": "a golden crispy deep-fried dish of squid.",
        "img" : "images/starters/starters8.jpg"

       },
       {
        "Category": "Starters",
        "Name": "Soup of The Day",
        "Price": 70,
        "Price in Euro (Euro\/TL = 17.5) as of july 12th 2022": 4,
        "briefdescription": "Our special soup of the day which changes on a daily basis.",
        "img" : "images/starters/starters9.jpg"

       },
       {
        "Category": "Starters",
        "Name": "Bruschetta",
        "Price": 70,
        "Price in Euro (Euro\/TL = 17.5) as of july 12th 2022": 4,
        "briefdescription": "Grilled bread rubbed with garlic, topped with olive oil, fresh green coriander, cheese and tomatoes.",
        "img" : "images/starters/starters10.jpg"

       },    
    {
     "Category": "Dinner",
     "Name": "Salmon Fillet",
     "Price": 210,
     "Price in Euro (Euro\/TL = 17.5) as of july 12th 2022": 12,
     "briefdescription": "Grilled boneless salmon served with vegetables, chips,salads and rice.",
     "img" : "images/main-course-dinner/main-course-dinner.jpg"
    },
    {
     "Category": "Dinner",
     "Name": "Fillet Steak (150g)",
     "Price": 250,
     "Price in Euro (Euro\/TL = 17.5) as of july 12th 2022": 14.4,
     "briefdescription": "Beef steak boneless fillet served with vegetables, chips,salads and rice.",
     "img" : "images/main-course-dinner/main-course-dinner2.jpg"
    },
    {
     "Category": "Dinner",
     "Name": "Sirlioin Steak (300g)",
     "Price": 265,
     "Price in Euro (Euro\/TL = 17.5) as of july 12th 2022": 15.2,
     "briefdescription": "Boneless Fresh and juicy steak coocked to your liking served with vegetables, chips,salads and rice.",
     "img" : "images/main-course-dinner/main-course-dinner3.jpg"
    },
    {
     "Category": "Dinner",
     "Name": "Pork Chops (250g)",
     "Price": 220,
     "Price in Euro (Euro\/TL = 17.5) as of july 12th 2022": 12.6,
     "briefdescription": "a loin cut taken perpendicular to the spine of the pig. Fresh and juicy cut served with vegetables, chips,salads and rice.;",
     "img" : "images/main-course-dinner/main-course-dinner4.jpg"
     
     
    },
    {
     "Category": "Dinner",
     "Name": "Mousakka",
     "Price": 150,
     "Price in Euro (Euro\/TL = 17.5) as of july 12th 2022": 8.6,
     "briefdescription": "Oven baked greek dish stuffed with seasoned ground beef,vegetables,egg plant topped with cheddar cheese all served with vegetables,chips,salads and rice.",
     "img" : "images/main-course-dinner/main-course-dinner5.jpg"
    },
    {
     "Category": "Dinner",
     "Name": "Beef Stroganoff (250g)",
     "Price": 210,
     "Price in Euro (Euro\/TL = 17.5) as of july 12th 2022": 12,
     "briefdescription": "Beef Stroganoff is an originally Russian dish of sautéed pieces of beef,cream and mushrooms all served with vegetables,chips,salads and rice.",
     "img" : "images/main-course-dinner/main-course-dinner6.jpg"
    },
    {
        "Category": "Dinner",
        "Name": "Traditional Stuffed Chicken",
        "Price": 160,
        "Price in Euro (Euro\/TL = 17.5) as of july 12th 2022": 9.2,
        "briefdescription": "Stuffed chiken served with vegetables,chips,salads and rice.",
        "img" : "images/main-course-dinner/main-course-dinner7.jpg"

       },
       {
        "Category": "Dinner",
        "Name": "T-Bone Steak (450g)",
        "Price": 285,
        "Price in Euro (Euro\/TL = 17.5) as of july 12th 2022": 16.4,
        "briefdescription": "Juicey tender steak aged for 29 days served with vegetables,chips,salads and rice.",
        "img" : "images/main-course-dinner/main-course-dinner8.jpg"

    },
       {
        "Category": "Dinner",
        "Name": "Chicken Chops",
        "Price": 145,
        "Price in Euro (Euro\/TL = 17.5) as of july 12th 2022": 8.3,
        "briefdescription": "Fresh boneless cut of the most delicious and softest part of the chicken cooked with mushrooms and cream served with vegetables,chips,salads and rice.",
        "img" : "images/main-course-dinner/main-course-dinner9.jpg"

       },
       {
        "Category": "Dinner",
        "Name": "Calamari",
        "Price": 180,
        "Price in Euro (Euro\/TL = 17.5) as of july 12th 2022": 10.3,
        "briefdescription": "a golden crispy deep-fried dish of squid served with vegetables, chips,salads and rice.",
        "img" : "images/main-course-dinner/main-course-dinner10.jpg"

       },
       {
        "Category": "Dinner",
        "Name": "Sword Fish ",
        "Price": 190,
        "Price in Euro (Euro\/TL = 17.5) as of july 12th 2022": 10.9,
        "briefdescription": "Freshly cooked sword fish served with vegetables, chips,salads and rice.",
        "img" : "images/main-course-dinner/main-course-dinner11.jpg"
       },
       {
        "Category": "Dinner",
        "Name": "Fresh Red Sea Bream",
        "Price": 270,
        "Price in Euro (Euro\/TL = 17.5) as of july 12th 2022": 10.9,
        "briefdescription": "Freshly cooked Red Sea Bream served with vegetables, chips,salads and rice.",
        "img" : "images/main-course-lunch/main-course-lunch19.jpg",
       },  
       {
        "Category": "Dinner",
        "Name": "Pork Ribs ",
        "Price": 170,
        "Price in Euro (Euro\/TL = 17.5) as of july 12th 2022": 5.5,
        "briefdescription": "Fresh and tender pork ribs slowly oven baked served with vegetables, chips,salads and rice.",
        "img" : "images/starters/starters3.jpg"
       },
       
        
       

    {
     "Category": "Lunch",
     "Name": "Napolitana Spaghetti",
     "Price": 95,
     "Price in Euro (Euro\/TL = 17.5) as of july 12th 2022": 5.4,
     "briefdescription": "Japanese Yōshoku pasta dish. Consists of spaghetti, tomato ketchup or a tomato-based sauce, onion, button mushrooms,",
     "img" : "images/main-course-lunch/main-course-lunch.jpg"

    },
    {
     "Category": "Lunch",
     "Name": "Bolognese Spaghetti",
     "Price": 120,
     "Price in Euro (Euro\/TL = 17.5) as of july 12th 2022": 6.9,
     "briefdescription": "a dish consisting of spaghetti with a tomato and meat sauce.",
     "img" : "images/main-course-lunch/main-course-lunch2.jpg"
    },
    {
     "Category": "Lunch",
      "Name": "Sea Food Spaghetti",
      "Price": 135,
      "Price in Euro (Euro\/TL = 17.5) as of july 12th 2022": 7.7,
      "briefdescription": "a dish consisting of spaghetti with a sea food",
      "img" : "images/main-course-lunch/main-course-lunch3.jpg"

     },
    
    {
     "Category": "Lunch",
     "Name": "Mousakka",
     "Price": 150,
     "Price in Euro (Euro\/TL = 17.5) as of july 12th 2022": 8.6,
     "briefdescription": "Oven baked greek dish stuffed with seasoned ground beef,vegetables,egg plant topped with cheddar cheese all served with vegetables,chips,salads and rice.",
     "img" : "images/main-course-dinner/main-course-dinner5.jpg"
    },
    {
        "Category": "Lunch",
        "Name": "Corn Polo Spaghetti",
        "Price": 120,
        "Price in Euro (Euro\/TL = 17.5) as of july 12th 2022": 6.9,
        "briefdescription": "spaghetti with creamy mushroom chicken with corn on top. ",
        "img" : "images/main-course-lunch/main-course-lunch18.jpg",
       },     
       
    {
     "Category": "Lunch",
     "Name": "Chicken Dolma ",
     "Price": 160,
     "Price in Euro (Euro\/TL = 17.5) as of july 12th 2022": 9.1,
     "briefdescription": "Deep fried chicken breast with creamy mushroom sauce served with vegetables, chips,salads and rice.",
     "img" : "images/main-course-lunch/main-course-lunch5.jpg"
    },
    {
     "Category": "Lunch",
     "Name": "Chicken Steak ",
     "Price": 145,
     "Price in Euro (Euro\/TL = 17.5) as of july 12th 2022": 8.2,
     "briefdescription": "A renowned dish from American cuisine that involves chicken breasts marinated in flavourful spices and then sizzled on a pan until cooked and juicy and creamy mushrooms sauce served with vegetables, chips,salads and rice",
     "img" : "images/main-course-lunch/main-course-lunch6.jpg",
    },
    {
     "Category": "Lunch",
     "Name": "Chicken Goujons",
     "Price": 105,
     "Price in Euro (Euro\/TL = 17.5) as of july 12th 2022": 6,
     "briefdescription": "Crispy chicken fingers on top of freshly homemade fries",
     "img" : "images/main-course-lunch/main-course-lunch7.jpg",
    },
    {
    "Category": "Lunch",
    "Name": "Calamari",
     "Price": 180,
     "Price in Euro (Euro\/TL = 17.5) as of july 12th 2022": 10.3,
     "briefdescription": "a golden crispy deep-fried dish of squid served with vegetables, chips,salads and rice",
     "img" : "images/main-course-lunch/main-course-lunch8.jpg",

    },
    {
        "Category": "Lunch",
        "Name": "Sword Fish ",
        "Price": 190,
        "Price in Euro (Euro\/TL = 17.5) as of july 12th 2022": 10.9,
        "briefdescription": "Freshly cooked sword fish served with vegetables, chips,salads and rice.",
        "img" : "images/main-course-lunch/main-course-lunch9.jpg",
       },
       {
        "Category": "Lunch",
        "Name": "Fresh Red Sea Bream",
        "Price": 270,
        "Price in Euro (Euro\/TL = 17.5) as of july 12th 2022": 10.9,
        "briefdescription": "Freshly cooked Red Sea Bream served with vegetables, chips,salads and rice.",
        "img" : "images/main-course-lunch/main-course-lunch19.jpg",
       },   
     {
      "Category": "Lunch",
      "Name": "Garlik Prawns",
      "Price": 285,
      "Price in Euro (Euro\/TL = 17.5) as of july 12th 2022": 16.3,
      "briefdescription": "Shrimps fried in fresh garlick, and cream.",
      "img" : "images/main-course-lunch/main-course-lunch10.jpg",

     },

       {
        "Category": "Lunch",
        "Name": "Mediterranean Salad ",
        "Price": 120,
        "Price in Euro (Euro\/TL = 17.5) as of july 12th 2022": 6.9,
        "briefdescription": 'Salad with fresh tomatoes,cucumber,olives,lettuce,cariander, and with grilled halloumi.',
        "img" : "images/main-course-lunch/main-course-lunch11.jpg",

       },
       {
        "Category": "Lunch",
        "Name": "Chicken Caesar Salad ",
        "Price": 120,
        "Price in Euro (Euro\/TL = 17.5) as of july 12th 2022": 6.9,
        "briefdescription": 'Salad with fresh chicken breats, tomatoes,cucumber,lettuce,cariander.',
        "img" : "images/main-course-lunch/main-course-lunch12.jpg",

       },
       {
        "Category": "Lunch",
        "Name": "Tuna Fish Salad",
        "Price": 130,
        "Price in Euro (Euro\/TL = 17.5) as of july 12th 2022": 7.4,
        "briefdescription": 'Salad with fresh tuna tomatoes,cucumber,olives,lettuce,cariander.',
        "img" : "images/main-course-lunch/main-course-lunch13.jpg",

       },
       {
        "Category": "Lunch",
        "Name": "Homemade Burger ",
        "Price": 125,
        "Price in Euro (Euro\/TL = 17.5) as of july 12th 2022": 7.1,
        "briefdescription": 'Burger made with homemade fresh beef patty that is not frozen served with fries.',
        "img" : "images/main-course-lunch/main-course-lunch14.jpg",

       },
       {
        "Category": "Lunch",
        "Name": "Homemade Cheese Burger ",
        "Price": 130,
        "Price in Euro (Euro\/TL = 17.5) as of july 12th 2022": 7.4,
        "briefdescription": 'Burger made with homemade fresh beef patty that is not frozen with cheese served with fries.',
        "img" : "images/main-course-lunch/main-course-lunch15.jpg",

       },
       {
        "Category": "Lunch",
        "Name": "Avenue Special(with mushroom)",
        "Price": 135,
        "Price in Euro (Euro\/TL = 17.5) as of july 12th 2022": 7.7,
        "briefdescription":'Burger made with homemade fresh beef patty that is not frozen with cheese and fresh mushrooms served with fries.',
        "img" : "images/main-course-lunch/main-course-lunch16.jpg",

       },
       {
        "Category": "Lunch",
        "Name": "Chicken Burger ",
        "Price": 100,
        "Price in Euro (Euro\/TL = 17.5) as of july 12th 2022": 5.7,
        "briefdescription": 'Burger made with fresh chicken breast served with fries.',
        "img" : "images/main-course-lunch/main-course-lunch17.jpg",
       },



    {
     "Category": "Wines",
     "Name": "Casanova Linaje Sauvignon Blanc",
     "Price": 320,
     "Price in Euro (Euro\/TL = 17.5) as of july 12th 2022": "18.4",
     "briefdescription": "Eye: bright light yellow.Nose:vegetables and fruit aswell as herbs and refula.Palate:fresh lively good balance between fruit and acidity",
     "img" : "images/wines/wine1.jpg",

    },
    {
     "Category": "Wines",
     "Name": "Casanova antano Sauvignon Blanc",
     "Price": 420,
     "Price in Euro (Euro\/TL = 17.5) as of july 12th 2022": 24,
     "briefdescription": "Eye:pale yellow with greenish hues.Nose:Fresh notes of vegetable such as tomato leaves.Palate: fresh alive and consistent with the aroma elegant and balnced acidity.",
     "img" : "images/wines/wine2.png",

    },
    {
     "Category": "Wines",
     "Name": "Casanova reserve collection Sauvignon Blanc",
     "Price": 455,
     "Price in Euro (Euro\/TL = 17.5) as of july 12th 2022": 26,
     "briefdescription": "Eye:pale yellow with greenish reflections. Nose:to tomatoe leaves,reccula and herbs.Palate: elegant fresh and intense, vegetaş notes",
     "img" : "images/wines/wine2.png",

    },
    {
     "Category": "Wines",
     "Name": "paşaeli sidalan",
     "Price": 345,
     "Price in Euro (Euro\/TL = 17.5) as of july 12th 2022": "19.7",
     "briefdescription": "eye:pale gold with green glow. Nose:elegaqnt notes of citrus and red apple.Palate: Its creaminss and minerality in the palate is lifted with acidity.",
     "img" : "images/wines/wine3.jpg",

    },
    {
     "Category": "Wines",
     "Name": "Casanova linaje cabernet sauvignon",
     "Price": 320,
     "Price in Euro (Euro\/TL = 17.5) as of july 12th 2022": "18.3",
     "briefdescription": "Eye: deep bright red ruby red. Nose: Ripe red fruitssuch as black plum and strawberry jam. Palate:mediım body fruıty easy to drink.",
     "img" : "images/wines/wine4.jpg",

    },
    {
        "Category": "Wines",
        "Name": "Casanova reserve collection malbec",
        "Price": 455,
        "Price in Euro (Euro\/TL = 17.5) as of july 12th 2022": 26,
        "briefdescription": "Eye: deep bright ruby red. Nose:ripre red fruits such as black plum and strawberry jam. Palate: medium body fruity easy to drink.",
        "img" : "images/wines/wine6.jpg",

       },
       {
        "Category": "Wines",
        "Name": "Casanova reserve collection cabernet sauvignon",
        "Price": 455,
        "Price in Euro (Euro\/TL = 17.5) as of july 12th 2022": 26,
        "briefdescription": "Eye:Deep ruby red with purple hues. Nose:Presence of ripe fruits such as black plums and blackberries,touches of smoked bacon and black pepper.Palate: good body with mature silky tanins that lead to pleasant fisnish.",
        "img" : "images/wines/wine6.jpg",

       },
       {
        "Category": "Wines",
        "Name": "Paşaeli east west",
        "Price": 320,
        "Price in Euro (Euro\/TL = 17.5) as of july 12th 2022": 18.285714285714285,
        "briefdescription": "Eye: Deep and bright ruby red. Nose: Sweet herbs and fresh fruit aromas.Palate: warm and soft tannins, persistent and enjoyable finish.",
        "img" : "images/wines/wine8.jpg",

       },
       {
        "Category": "Wines",
        "Name": "casanova antano merlot",
        "Price": 420,
        "Price in Euro (Euro\/TL = 17.5) as of july 12th 2022": 24,
        "briefdescription": "Eye: Ruby red and brilliant violet. Nose:Ripe berries such as blueberries and blackberries. Spicy and smoky notes with a slight vanilla sweetness.Palate:medium body,silky and round tannins.",
        "img" : "images/wines/wine9.jpg",

       },
       {
        "Category": "Wines",
        "Name": "casanova antano shiraz",
        "Price": 420,
        "Price in Euro (Euro\/TL = 17.5) as of july 12th 2022": 24,
        "briefdescription": "Eye: dark red deep with vıolet hues. Nose: Ripe black fruitssuch as blackberries,blueberries and olives. Palate:",
        "img" : "images/wines/wine10.jpg",

       },
       {
        "Category": "Wines",
        "Name": "Paşaeli kaynaklar",
        "Price": 680,
        "Price in Euro (Euro\/TL = 17.5) as of july 12th 2022": 38.857142857142854,
        "briefdescription": "Eye: Deep dark red cherry color. Nose: Rich aroma of sweet and ripe blackberries and plum with dark chocolate notes. Palate: Firm and dense with chewy sweet tannins filled with pure fruits.",
        "img" : "images/wines/wine11.jpg",

       },
       {
        "Category": "Wines",
        "Name": "paşaeli K2",
        "Price": 530,
        "Price in Euro (Euro\/TL = 17.5) as of july 12th 2022": 30.285714285714285,
        "briefdescription": "Eye:Deep dark cherry red color.Nose: rich aroma of sweet ripe cassis and blackberries.Palate:firm and dense with chewy.",
        "img" : "images/wines/wine12.jpg",

       },
       {
        "Category": "Wines",
        "Name": "Paşaeli rose Çalkarasi",
        "Price": 345,
        "Price in Euro (Euro\/TL = 17.5) as of july 12th 2022": 19.714285714285715,
        "briefdescription": "Eye: Dark pink color. Nose:very perfumy with rasberries and strawberries followed by nectarine and cotton candy fruits. Palate: İts charming acidity and sweet tannins provoke a long finish.",
        "img" : "images/wines/wine13.jpg",

       },
     {
      "Category": "Soft drinks",
      "Name": "Iced Tea",
      "Price": 25,
      "Price in Euro (Euro\/TL = 17.5) as of july 12th 2022": 1.4285714285714286,
      "briefdescription": "Ice cold Iced tea.",
      "img" : "images/softdrinks/softdrinks1.jpg",

     },

     {
      "Category": "Soft drinks",
      "Name": "Ginger ale",
     "Price": 25,
      "Price in Euro (Euro\/TL = 17.5) as of july 12th 2022": 1.4285714285714286,
      "briefdescription": "Ice cold beverage served with glass.",
      "img" : "images/softdrinks/softdrinks2.jpg",
     },
     {
      "Category": "Soft drinks",
      "Name": "Fanta",
      "Price": 25,
      "Price in Euro (Euro\/TL = 17.5) as of july 12th 2022": 1.4285714285714286,
      "briefdescription": "Ice cold beverage served with glass.",
      "img" : "images/softdrinks/softdrinks3.jpg",
     },
     {
     "Category": "Soft drinks",
      "Name": "Sprite",
      "Price": 25,
      "Price in Euro (Euro\/TL = 17.5) as of july 12th 2022": 1.4285714285714286,
      "briefdescription": "Ice cold beverage served with glass.",
      "img" : "images/softdrinks/softdrinks4.jpg",
     },
     {
      "Category": "Soft drinks",
     "Name": "coca cola",
      "Price": 25,
      "Price in Euro (Euro\/TL = 17.5) as of july 12th 2022": 1.4285714285714286,
      "briefdescription": "Ice cold beverage served with glass.",
      "img" : "images/softdrinks/softdrinks5.jpg",
     },
     {
        "Category": "Soft drinks",
        "Name": "Milk",
        "Price": 25,
        "Price in Euro (Euro\/TL = 17.5) as of july 12th 2022": 1.4285714285714286,
        "briefdescription": "Fresh milk served with glass.",
        "img" : "images/softdrinks/softdrinks6.jpg",
       },
       {
        "Category": "Soft drinks",
        "Name": "Grapfruit juice",
        "Price": 25,
        "Price in Euro (Euro\/TL = 17.5) as of july 12th 2022": 1.4285714285714286,
        "briefdescription": "Ice cold beverage served with glass.",
        "img" : "images/softdrinks/softdrinks7.jpg",
       },
       {
        "Category": "Soft drinks",
        "Name": "Shark energy Drink",
        "Price": 40,
        "Price in Euro (Euro\/TL = 17.5) as of july 12th 2022": 2.2857142857142856,
        "briefdescription": "Ice cold beverage served with glass.",
        "img" : "images/softdrinks/softdrinks8.jpg",
       },
       {
        "Category": "Soft drinks",
        "Name": "small water",
        "Price": 15,
        "Price in Euro (Euro\/TL = 17.5) as of july 12th 2022": 0.8571428571428571,
        "briefdescription": "Ice cold beverage served with glass.",
        "img" : "images/softdrinks/softdrinks9.jpg",
       },
       {
        "Category": "Soft drinks",
        "Name": "large water",
        "Price": 25,
        "Price in Euro (Euro\/TL = 17.5) as of july 12th 2022": 1.4285714285714286,
        "briefdescription": "Ice cold beverage served with glass.",
        "img" : "images/softdrinks/softdrinks10.jpg",
       },
       {
        "Category": "Soft drinks",
        "Name": "Fresh juice",
        "Price": 35,
        "Price in Euro (Euro\/TL = 17.5) as of july 12th 2022": 2,
        "briefdescription": "Ice cold beverage served with glass.",
        "img" : "images/softdrinks/softdrinks11.jpg",
       },
       {
        "Category": "Soft drinks",
        "Name": "Lemonade",
        "Price": 30,
        "Price in Euro (Euro\/TL = 17.5) as of july 12th 2022": 1.7,
        "briefdescription": "Ice cold beverage served with glass.",
        "img" : "images/softdrinks/softdrinks12.jpg",
       },
 
       {
        "Category": "Beers",
         "Name": "Efes",
         "Price": 50,
         "Price in Euro (Euro\/TL = 17.5) as of july 12th 2022": 2.857142857142857,
         "briefdescription": "Ice cold beer.",
         "img" : "images/beers/beers1.jpg",
        },
       {
        "Category": "Beers",
         "Name": "Tuborg",
         "Price": 50,
         "Price in Euro (Euro\/TL = 17.5) as of july 12th 2022": 2.857142857142857,
         "briefdescription": "Ice cold beer.",
         "img" : "images/beers/beers2.jpg",
        },

     {
     "Category": "Beers",
      "Name": "Miller",
      "Price": 50,
      "Price in Euro (Euro\/TL = 17.5) as of july 12th 2022": 2.857142857142857,
      "briefdescription": "Ice cold beer.",
      "img" : "images/beers/beers3.jpg",
     },

    {
    "Category": "Beers",
      "Name": "Carlsberg",
     "Price": 50,
      "Price in Euro (Euro\/TL = 17.5) as of july 12th 2022": 2.857142857142857,
      "briefdescription": "Ice cold beer.",
      "img" : "images/beers/beers4.jpg",
     },
     {
      "Category": "Beers",
      "Name": "Bormonti",
      "Price": 50,
      "Price in Euro (Euro\/TL = 17.5) as of july 12th 2022": 2.857142857142857,
      "briefdescription": "Ice cold beer.",
      "img" : "images/beers/beers5.jpg",
     },
     {
      "Category": "Beers",
      "Name": "miller",
      "Price": 50,
      "Price in Euro (Euro\/TL = 17.5) as of july 12th 2022": 2.857142857142857,
      "briefdescription": "Ice cold beer.",
      "img" : "images/beers/beers6.jpg",
     },
     {
      "Category": "Craft Beers",
      "Name": "Kuzgun",
      "Price": 90,
      "Price in Euro (Euro\/TL = 17.5) as of july 12th 2022": 5.142857142857143,
      "briefdescription": "Ice cold beer.",
      "img" : "images/craftbeers/craftbeers1.jpg",

     },
     {
      "Category": "Craft Beers",
      "Name": "bugs belgian wit",
      "Price": 90,
      "Price in Euro (Euro\/TL = 17.5) as of july 12th 2022": 5.142857142857143,
      "briefdescription": "Ice cold beer.",
      "img" : "images/craftbeers/craftbeers2.jpg",
     },
     {
      "Category": "Craft Beers",
      "Name": "2kopru",
      "Price": 90,
     "Price in Euro (Euro\/TL = 17.5) as of july 12th 2022": 5.142857142857143,
      "briefdescription": "Ice cold beer.",
      "img" : "images/craftbeers/craftbeers3.jpg",
     },
     {
      "Category": "Craft Beers",
      "Name": "Antiochs",
      "Price": 90,
      "Price in Euro (Euro\/TL = 17.5) as of july 12th 2022": 5.142857142857143,
      "briefdescription": "Ice cold beer.",
      "img" : "images/craftbeers/craftbeers4.jpg",
     },

     {
      "Category": "Desserts",
      "Name": "Vanilla Ice cream",
      "Price": "15",
        "Price in Euro (Euro\/TL = 17.5) as of july 12th 2022": 0.8571428571428571,
      "briefdescription": 'Fresh Ice cream. 15 TL per scoop.',
      "img" : "images/desserts/desserts1.jpg",
     },
     {
      "Category": "Desserts",
      "Name": "Strawberry Ice cream",
      "Price": "15",
      "Price in Euro (Euro\/TL = 17.5) as of july 12th 2022": 0.8571428571428571,
      "briefdescription": 'Fresh Ice cream. 15 TL per scoop.',
      "img" : "images/desserts/desserts2.jpg",
     },
     {
      "Category": "Desserts",
      "Name": "Chocolate Ice cream",
      "Price": "15",
      "Price in Euro (Euro\/TL = 17.5) as of july 12th 2022": 0.8571428571428571,
      "briefdescription":'Fresh Ice cream. 15 TL per scoop.',
      "img" : "images/desserts/desserts3.jpg",
     },
     {
    "Category": "Desserts",
    "Name": "Cakes & Waffles (changes every week)",
      "Price": 48,
      "Price in Euro (Euro\/TL = 17.5) as of july 12th 2022": 2.742857142857143,
      "briefdescription": 'Home-made cakes',
      "img" : "images/desserts/desserts4.jpg",
     }
   ]


const sectionCenter = document.querySelector('.section-center')
const container = document.querySelector('.btn-container')

// create line of code that displays items once dom looads

window.addEventListener('DOMContentLoaded', function () {
    displayMenuItems(menu);
    displayMenuButtons()

    
});


// this function takes in a paramter to store something in it
function displayMenuItems(menuItems){
    // menuitems acts as placeholder for our list
   // code to allow us to modify list and access each item individually using map method
    // place code in variable
    let displayMenu = menuItems.map(function (item) {
        //  item refers to each object in the list
        return ` <article class="menu-item">
        <img src=${item.img} class="photo" alt=${item.title} >
        <div class="item-info" >
        <header>
            <h4 class="item-title">${item.Name}</h4>
            <h5 class=price>${item.Price}TL</h5>
            </header>
            <div class="underline-2" ></div>
            <p class="item-text" >
            ${item.briefdescription}
            </p>
        </div>
    </article>`;

    });
    // dsplay menu function will return article for each list item
    // to join each item together into one text use the 'join' method

    displayMenu = displayMenu.join('')
    console.log(displayMenu);
    // insert the items from the list into the html section
    sectionCenter.innerHTML = displayMenu
}


function displayMenuButtons(){
    const categories = menu.reduce(function(values,item){
        if(!values.includes(item.Category)) {
            values.push(item.Category)
        }
        return values
    },['All'])


    // create variable for dynamic html for buttons
    const categoryBtns = categories.map(function(category){
        return ` <button class="filter-btn" type="button" data-id="${category}">
        ${category}
        </button>`
    }).join('');
    // display dynamic buttons within the dom
    container.innerHTML = categoryBtns;
    
    // once buttons have been added dynamically
    // select them all and store in variable to be processed.
    const filterBtns = document.querySelectorAll('.filter-btn')
    // filter items
    filterBtns.forEach(function(btn){
        // add code to respond to click
        btn.addEventListener('click', function(e){
                // e parameter allows us to store specific button clicked
                // store dataset id of button clicked in variable
            const category = e.currentTarget.dataset.id
                // store list in variable with filter method to filter list categories
            const menuCategory = menu.filter(function(menuItem){
                // check to see if menu list category matches...
                // with data id on button from html dom
                    if(menuItem.Category === category){
                        return menuItem
                    }
                    
            });
            //run conditional operation chose what to display based on click.
            if(category === 'All'){
                // function that displays all items
                displayMenuItems(menu)
            }
            else{
                // function that displays category of items with dataset id from button click
                // displays items with category that mactch the data set id
                displayMenuItems(menuCategory)
            }
                // console.log(menuCategory)
            })
        })
    

}
