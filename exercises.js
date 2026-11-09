// Database derivato dal compendio biomeccanico fornito dall'utente.
window.WORKOUT_EXERCISES = [
  {
    "id": "ex-01",
    "gruppo": "Spalle e cuffia",
    "nome": "Lento avanti con bilanciere",
    "inglese": "Overhead Barbell Press",
    "target": "Deltoide anteriore",
    "sinergici": "Deltoide laterale; tricipiti; trapezio superiore; core",
    "pattern": "Push",
    "attrezzatura": "Bilanciere"
  },
  {
    "id": "ex-02",
    "gruppo": "Spalle e cuffia",
    "nome": "Alzate laterali con manubri",
    "inglese": "Dumbbell Lateral Raise",
    "target": "Deltoide laterale",
    "sinergici": "Trapezio superiore; sovraspinato; deltoide anteriore",
    "pattern": "Isolation",
    "attrezzatura": "Manubri"
  },
  {
    "id": "ex-03",
    "gruppo": "Spalle e cuffia",
    "nome": "Alzate laterali al cavo",
    "inglese": "Cable Lateral Raise",
    "target": "Deltoide laterale",
    "sinergici": "Trapezio superiore; sovraspinato",
    "pattern": "Isolation",
    "attrezzatura": "Cavi"
  },
  {
    "id": "ex-04",
    "gruppo": "Spalle e cuffia",
    "nome": "Alzate posteriori a 90° con manubri",
    "inglese": "Bent-Over Dumbbell Rear Lateral Raise",
    "target": "Deltoide posteriore",
    "sinergici": "Romboidi; trapezio medio e inferiore; infraspinato",
    "pattern": "Pull",
    "attrezzatura": "Manubri"
  },
  {
    "id": "ex-05",
    "gruppo": "Spalle e cuffia",
    "nome": "Face pull al cavo",
    "inglese": "Cable Face Pull",
    "target": "Deltoide posteriore",
    "sinergici": "Infraspinato; piccolo rotondo; trapezio medio; romboidi",
    "pattern": "Pull",
    "attrezzatura": "Cavi"
  },
  {
    "id": "ex-06",
    "gruppo": "Spalle e cuffia",
    "nome": "Extrarotazioni alla puleggia",
    "inglese": "Cable External Rotation",
    "target": "Infraspinato",
    "sinergici": "Piccolo rotondo; deltoide posteriore",
    "pattern": "Rotation",
    "attrezzatura": "Cavi"
  },
  {
    "id": "ex-07",
    "gruppo": "Spalle e cuffia",
    "nome": "Intrarotazioni alla puleggia",
    "inglese": "Cable Internal Rotation",
    "target": "Sottoscapolare",
    "sinergici": "Gran dorsale; grande rotondo; pettorale maggiore",
    "pattern": "Rotation",
    "attrezzatura": "Cavi"
  },
  {
    "id": "ex-08",
    "gruppo": "Spalle e cuffia",
    "nome": "Push press con bilanciere",
    "inglese": "Barbell Push Press",
    "target": "Deltoide anteriore",
    "sinergici": "Quadricipiti; glutei; tricipiti; core",
    "pattern": "Push / Power",
    "attrezzatura": "Bilanciere"
  },
  {
    "id": "ex-09",
    "gruppo": "Pettorali",
    "nome": "Distensioni su panca piana",
    "inglese": "Flat Barbell Bench Press",
    "target": "Pettorale maggiore (sternocostale)",
    "sinergici": "Deltoide anteriore; tricipiti; brachiali",
    "pattern": "Push",
    "attrezzatura": "Bilanciere"
  },
  {
    "id": "ex-10",
    "gruppo": "Pettorali",
    "nome": "Distensioni su panca inclinata con manubri",
    "inglese": "Incline Dumbbell Bench Press",
    "target": "Pettorale maggiore (clavicolare)",
    "sinergici": "Deltoide anteriore; tricipiti; brachiali",
    "pattern": "Push",
    "attrezzatura": "Manubri"
  },
  {
    "id": "ex-11",
    "gruppo": "Pettorali",
    "nome": "Distensioni su panca declinata",
    "inglese": "Decline Barbell Bench Press",
    "target": "Pettorale maggiore (addominale)",
    "sinergici": "Tricipiti; brachiali; deltoide anteriore",
    "pattern": "Push",
    "attrezzatura": "Bilanciere"
  },
  {
    "id": "ex-12",
    "gruppo": "Pettorali",
    "nome": "Croci ai cavi alti",
    "inglese": "High-to-Low Cable Crossover",
    "target": "Pettorale maggiore (sternocostale / addominale)",
    "sinergici": "Deltoide anteriore",
    "pattern": "Isolation",
    "attrezzatura": "Cavi"
  },
  {
    "id": "ex-13",
    "gruppo": "Pettorali",
    "nome": "Piegamenti sulle braccia",
    "inglese": "Push-Up",
    "target": "Pettorale maggiore",
    "sinergici": "Tricipiti; brachiali; deltoide anteriore; core",
    "pattern": "Push",
    "attrezzatura": "Corpo libero"
  },
  {
    "id": "ex-14",
    "gruppo": "Pettorali",
    "nome": "Dip alle parallele",
    "inglese": "Parallel Bar Dips",
    "target": "Pettorale maggiore (fascio inferiore)",
    "sinergici": "Tricipiti; brachiali; deltoide anteriore",
    "pattern": "Push",
    "attrezzatura": "Corpo libero / parallele"
  },
  {
    "id": "ex-15",
    "gruppo": "Pettorali",
    "nome": "Pectoral machine",
    "inglese": "Machine Chest Fly",
    "target": "Pettorale maggiore",
    "sinergici": "Deltoide anteriore",
    "pattern": "Isolation",
    "attrezzatura": "Macchina"
  },
  {
    "id": "ex-16",
    "gruppo": "Dorso e colonna",
    "nome": "Trazioni alla sbarra supine",
    "inglese": "Chin-Up",
    "target": "Gran dorsale",
    "sinergici": "Bicipite brachiale; brachiale; romboidi",
    "pattern": "Pull",
    "attrezzatura": "Corpo libero"
  },
  {
    "id": "ex-17",
    "gruppo": "Dorso e colonna",
    "nome": "Lat machine avanti",
    "inglese": "Lat Pulldown",
    "target": "Gran dorsale",
    "sinergici": "Gran rotondo; bicipite brachiale; trapezio inferiore",
    "pattern": "Pull",
    "attrezzatura": "Cavi / macchina"
  },
  {
    "id": "ex-18",
    "gruppo": "Dorso e colonna",
    "nome": "Rematore con bilanciere",
    "inglese": "Barbell Bent-Over Row",
    "target": "Gran dorsale; romboidi",
    "sinergici": "Trapezio medio e inferiore; bicipite brachiale; erettori spinali",
    "pattern": "Pull",
    "attrezzatura": "Bilanciere"
  },
  {
    "id": "ex-19",
    "gruppo": "Dorso e colonna",
    "nome": "Rematore con manubrio a un braccio",
    "inglese": "One-Arm Dumbbell Row",
    "target": "Gran dorsale",
    "sinergici": "Grande rotondo; romboidi; bicipite brachiale",
    "pattern": "Pull",
    "attrezzatura": "Manubri"
  },
  {
    "id": "ex-20",
    "gruppo": "Dorso e colonna",
    "nome": "Pulley basso",
    "inglese": "Seated Cable Row",
    "target": "Romboidi; trapezio medio",
    "sinergici": "Gran dorsale; bicipite brachiale; erettori spinali",
    "pattern": "Pull",
    "attrezzatura": "Cavi"
  },
  {
    "id": "ex-21",
    "gruppo": "Dorso e colonna",
    "nome": "Pulldown a braccia tese",
    "inglese": "Straight-Arm Pulldown",
    "target": "Gran dorsale",
    "sinergici": "Grande rotondo; capo lungo del tricipite",
    "pattern": "Isolation / Pull",
    "attrezzatura": "Cavi"
  },
  {
    "id": "ex-22",
    "gruppo": "Dorso e colonna",
    "nome": "Stacchi da terra",
    "inglese": "Barbell Deadlift",
    "target": "Erettori spinali; glutei",
    "sinergici": "Ischiocrurali; trapezio; avambracci; quadricipiti",
    "pattern": "Hinge",
    "attrezzatura": "Bilanciere"
  },
  {
    "id": "ex-23",
    "gruppo": "Dorso e colonna",
    "nome": "Iperestensioni lombari",
    "inglese": "Back Extension",
    "target": "Erettori spinali",
    "sinergici": "Glutei; ischiocrurali",
    "pattern": "Hinge",
    "attrezzatura": "Macchina / panca"
  },
  {
    "id": "ex-24",
    "gruppo": "Braccia",
    "nome": "Curl con bilanciere",
    "inglese": "Barbell Biceps Curl",
    "target": "Bicipite brachiale",
    "sinergici": "Brachiale; brachioradiale",
    "pattern": "Pull",
    "attrezzatura": "Bilanciere"
  },
  {
    "id": "ex-25",
    "gruppo": "Braccia",
    "nome": "Curl a martello con manubri",
    "inglese": "Dumbbell Hammer Curl",
    "target": "Brachioradiale; brachiale",
    "sinergici": "Bicipite brachiale; flessori del polso",
    "pattern": "Pull",
    "attrezzatura": "Manubri"
  },
  {
    "id": "ex-26",
    "gruppo": "Braccia",
    "nome": "Curl su panca inclinata",
    "inglese": "Incline Dumbbell Curl",
    "target": "Bicipite brachiale (capo lungo)",
    "sinergici": "Brachiale",
    "pattern": "Pull",
    "attrezzatura": "Manubri"
  },
  {
    "id": "ex-27",
    "gruppo": "Braccia",
    "nome": "Distensioni tricipiti su panca stretta",
    "inglese": "Close-Grip Bench Press",
    "target": "Tricipite brachiale",
    "sinergici": "Pettorale maggiore; deltoide anteriore",
    "pattern": "Push",
    "attrezzatura": "Bilanciere"
  },
  {
    "id": "ex-28",
    "gruppo": "Braccia",
    "nome": "Pushdown ai cavi con corda",
    "inglese": "Cable Triceps Pushdown",
    "target": "Tricipite brachiale (capi laterale e mediale)",
    "sinergici": "Anconeo",
    "pattern": "Push",
    "attrezzatura": "Cavi"
  },
  {
    "id": "ex-29",
    "gruppo": "Braccia",
    "nome": "French press con bilanciere Z",
    "inglese": "EZ-Bar Skull Crusher",
    "target": "Tricipite brachiale (capo lungo)",
    "sinergici": "Anconeo",
    "pattern": "Push",
    "attrezzatura": "Bilanciere Z"
  },
  {
    "id": "ex-30",
    "gruppo": "Braccia",
    "nome": "Curl inverso con bilanciere",
    "inglese": "Reverse Barbell Curl",
    "target": "Brachioradiale; estensori del polso",
    "sinergici": "Bicipite brachiale",
    "pattern": "Pull",
    "attrezzatura": "Bilanciere"
  },
  {
    "id": "ex-31",
    "gruppo": "Core e addominali",
    "nome": "Crunch a terra",
    "inglese": "Floor Crunch",
    "target": "Retto dell'addome",
    "sinergici": "Obliqui interni ed esterni",
    "pattern": "Core / Flexion",
    "attrezzatura": "Corpo libero"
  },
  {
    "id": "ex-32",
    "gruppo": "Core e addominali",
    "nome": "Sollevamento gambe alla sbarra",
    "inglese": "Hanging Leg Raise",
    "target": "Retto dell'addome (fascio inferiore)",
    "sinergici": "Iliopsoas; tensore della fascia lata",
    "pattern": "Core / Flexion",
    "attrezzatura": "Corpo libero"
  },
  {
    "id": "ex-33",
    "gruppo": "Core e addominali",
    "nome": "Plank sugli avambracci",
    "inglese": "Forearm Plank",
    "target": "Trasverso dell'addome",
    "sinergici": "Retto dell'addome; obliqui; erettori spinali",
    "pattern": "Core / Stability",
    "attrezzatura": "Corpo libero"
  },
  {
    "id": "ex-34",
    "gruppo": "Core e addominali",
    "nome": "Russian twist con kettlebell",
    "inglese": "Russian Twist",
    "target": "Obliqui interni ed esterni",
    "sinergici": "Retto dell'addome; flessori dell'anca",
    "pattern": "Core / Rotation",
    "attrezzatura": "Kettlebell"
  },
  {
    "id": "ex-35",
    "gruppo": "Core e addominali",
    "nome": "Pallof press al cavo",
    "inglese": "Cable Pallof Press",
    "target": "Obliqui / trasverso (anti-rotazione)",
    "sinergici": "Trasverso dell'addome; gluteo medio",
    "pattern": "Core / Stability",
    "attrezzatura": "Cavi"
  },
  {
    "id": "ex-36",
    "gruppo": "Arti inferiori",
    "nome": "Squat con bilanciere dietro",
    "inglese": "Back Barbell Squat",
    "target": "Quadricipiti",
    "sinergici": "Grande gluteo; ischiocrurali; erettori spinali; core",
    "pattern": "Squat",
    "attrezzatura": "Bilanciere"
  },
  {
    "id": "ex-37",
    "gruppo": "Arti inferiori",
    "nome": "Front squat con bilanciere",
    "inglese": "Front Barbell Squat",
    "target": "Quadricipiti (prevalenza femorale)",
    "sinergici": "Grande gluteo; core; erettori spinali",
    "pattern": "Squat",
    "attrezzatura": "Bilanciere"
  },
  {
    "id": "ex-38",
    "gruppo": "Arti inferiori",
    "nome": "Leg press a 45°",
    "inglese": "45-Degree Leg Press",
    "target": "Quadricipiti",
    "sinergici": "Grande gluteo; adduttori",
    "pattern": "Squat",
    "attrezzatura": "Macchina"
  },
  {
    "id": "ex-39",
    "gruppo": "Arti inferiori",
    "nome": "Stacco rumeno con bilanciere",
    "inglese": "Romanian Deadlift",
    "target": "Ischiocrurali",
    "sinergici": "Grande gluteo; erettori spinali",
    "pattern": "Hinge",
    "attrezzatura": "Bilanciere"
  },
  {
    "id": "ex-40",
    "gruppo": "Arti inferiori",
    "nome": "Leg curl seduto",
    "inglese": "Seated Leg Curl",
    "target": "Ischiocrurali",
    "sinergici": "Gastrocnemio",
    "pattern": "Isolation",
    "attrezzatura": "Macchina"
  },
  {
    "id": "ex-41",
    "gruppo": "Arti inferiori",
    "nome": "Hip thrust con bilanciere",
    "inglese": "Barbell Hip Thrust",
    "target": "Grande gluteo",
    "sinergici": "Ischiocrurali; quadricipiti",
    "pattern": "Hinge",
    "attrezzatura": "Bilanciere"
  },
  {
    "id": "ex-42",
    "gruppo": "Arti inferiori",
    "nome": "Affondi con manubri",
    "inglese": "Dumbbell Lunges",
    "target": "Quadricipiti; grande gluteo",
    "sinergici": "Ischiocrurali; adduttori; core",
    "pattern": "Lunge",
    "attrezzatura": "Manubri"
  },
  {
    "id": "ex-43",
    "gruppo": "Arti inferiori",
    "nome": "Abductor machine",
    "inglese": "Hip Abduction Machine",
    "target": "Gluteo medio e piccolo",
    "sinergici": "Tensore della fascia lata",
    "pattern": "Isolation",
    "attrezzatura": "Macchina"
  },
  {
    "id": "ex-44",
    "gruppo": "Arti inferiori",
    "nome": "Adductor machine",
    "inglese": "Hip Adduction Machine",
    "target": "Adduttori (grande, lungo, breve)",
    "sinergici": "Pettineo; gracile",
    "pattern": "Isolation",
    "attrezzatura": "Macchina"
  },
  {
    "id": "ex-45",
    "gruppo": "Arti inferiori",
    "nome": "Calf raise in piedi",
    "inglese": "Standing Calf Raise",
    "target": "Gastrocnemio",
    "sinergici": "Soleo; tibiale posteriore",
    "pattern": "Isolation",
    "attrezzatura": "Macchina / bilanciere"
  },
  {
    "id": "ex-46",
    "gruppo": "Arti inferiori",
    "nome": "Calf raise seduto",
    "inglese": "Seated Calf Raise",
    "target": "Soleo",
    "sinergici": "Gastrocnemio",
    "pattern": "Isolation",
    "attrezzatura": "Macchina"
  }
];
