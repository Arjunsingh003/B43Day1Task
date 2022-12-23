//1.Given below is the JSON Object 
let obj=[
    {person:"Arjun",age:"25",company:"Robotics Informatics ltd"},
    {person:"Karan",age:"24",company:"Automabiles Inc"},
    {person:"Sarita",age:"35",company:"Sass by Sarita"}
 ]
 
 //Use all for loop to iterate over the above data .
 //ForLoop:
 for(let i=0; i<obj.length;i++){
    console.log(`
    Name:${obj[i].person}
    age:${obj[i].age}
    company:${obj[i].company}

    `)
 }

 /*Output using For Loop:
 Name:Arjun
 age:25
 company:Robotics Informatics ltd

 

 Name:Karan
 age:24
 company:Automabiles Inc



 Name:Sarita
 age:35
 company:Sass by Sarita*/

 //for Each Loop:
 obj.forEach(function(obj){
    console.log(`
        Name:${obj.person}
        age:${obj.age}
        company:${obj.company}

        `)
 })

 /*Output using For Each Loop:
 Name:Arjun
 age:25
 company:Robotics Informatics ltd

 

 Name:Karan
 age:24
 company:Automabiles Inc



 Name:Sarita
 age:35
 company:Sass by Sarita*/

 //For in Loop:
 for(const key in obj){
    console.log(`
        Name:${obj[key].person}
        age:${obj[key].age}
        company:${obj[key].company}

        `)

 }

  /*Output Using For in Loop:
 Name:Arjun
 age:25
 company:Robotics Informatics ltd

 

 Name:Karan
 age:24
 company:Automabiles Inc



 Name:Sarita
 age:35
 company:Sass by Sarita*/

 //for of Loop:
 for(const emp of obj){
    console.log(`
            Name:${emp.person}
            age:${emp.age}
            company:${emp.company}
    
            `)
    
 }

   /*Output using for of Loop:
 Name:Arjun
 age:25
 company:Robotics Informatics ltd

 

 Name:Karan
 age:24
 company:Automabiles Inc



 Name:Sarita
 age:35
 company:Sass by Sarita*/


// Task2: Creating a Resume in JSON format:

//Created a resume with below properties:

//Name,Dept,Phone Number, Address,College,project,Experience,Achievements,Hobbies,Strengths,Parents Details.
let resume=[{
    "Details":{
        "Name":"Arjun Singh",
        "Dept":"CSE",
        "PhoneNumber":8158968153,
        "Address":{
            "Apartment Name":"Sai Ayush Rameshaa Apt",
            "Address Line 1":"Kalki Nagar, 2nd Street",
            "Address Line 2":"AGS Colony",
            "Address Line 3":"6th Block, 6th Flat"
 
        },
        "Collage":"Thangavelu Engineering Collage",
        "Project":"Air Pollution Monitoring Sysytem using AI",
        "Experience":{
            "Company Name":"CSM Technology",
            "Designation":"Test Engineer",
            "Year Of Joining":"2022"
 
 
        },
        "Achievements":{
         "Internship":"Worked at Indo Global Technologies as a Trainee Web developer",
         "Achievement":"Quick Learner in the entire Trainee Batch"
 
 
        },
        "Hobbies":"Swimming, Dancing, Singing, Badminton, Hockey",
        "Strengths":"Perseverence, Team Player, Good Listener",
        "Parents":{
            "Mothers Name":"Sarita Devi",
            "Fathers Name":"Jetendra Singh",
            "Mothers Occupation":"Business Women",
            "Fathers Occupation":"Business Man",
            "Address":{
                "Address Line 1":"Rongli Bazaar, East Sikkim",
                "Address Line 2":"Near Rongli Bridge",
                "Pincode":717131
            }
 
        }
 
 
 
 
     } 
 }
]
