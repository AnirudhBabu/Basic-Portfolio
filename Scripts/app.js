/* Author: Anirudh Babu
   Student no.: 301105250
   Date  : 27/07/2020
   Website name: index.html
   Description: This script injects all text seen on the html page
*/
"use strict";
(function(){
    function highlightActiveLink() 
    {
        let navAnchors = document.querySelectorAll("li a");
        
        for (const anchor of navAnchors) 
        {
            if(document.title === "About me")
            { 
                if(anchor.getAttribute("href") === "index.html")
                {
                    anchor.parentElement.className = "nav-item active";
                }                
            }
            else
            {
                let toBeCompared = document.title.toLowerCase() + ".html";
                if(anchor.getAttribute("href") === toBeCompared)
                {
                    anchor.parentElement.className = "nav-item active";
                }
            }
        }        
    }
    
    function setContent()
    {
        highlightActiveLink();
        switch (document.title) {
            case "About me":
                AboutMeContent();
                break;
            case "Contact":
                ContactContent();
                break;
            case "Projects":
                ProjectsText();
                break;
            default:
                break;
        }
        loadFooter();

    }
    function AboutMeContent()
    {
        // step 1 - creates the XHR object
        let XHR = new XMLHttpRequest();

        // step 2 - sets the type of the message to be read as JSON
        XHR.responseType = 'json';

        // step 3 - configures the message
        XHR.open("GET", "./Scripts/paragraphs.json");

        // step 4 - Executes the request
        XHR.send();

        XHR.addEventListener("readystatechange", function(){
            if((XHR.readyState === 4) && (XHR.status === 200))
            {
                //stores the JSON content of the AboutMe object
                let aboutMeContent = XHR.response.AboutMe;

                //sets values from the read JSON appropriately
                document.getElementsByTagName("h1")[0].innerText = aboutMeContent.heading;
                document.getElementsByTagName("h2")[0].innerText = aboutMeContent.missionHeading;
                document.getElementsByTagName("p")[0].innerText = aboutMeContent.introText;
                document.getElementsByTagName("blockquote")[0].innerText = aboutMeContent.missionStatement;
                document.getElementsByTagName("h2")[1].innerText = aboutMeContent.hobbiesHeading;
                document.getElementsByClassName("fa-ul")[0].innerHTML = aboutMeContent.hobbies;
                document.getElementsByTagName("h2")[2].innerText = aboutMeContent.interestsHeading;
                document.getElementsByClassName("fa-ul")[1].innerHTML = aboutMeContent.interests;
            }
        });
        
    }
    function ContactContent()
    {
        // step 1 - creates the XHR object
        let XHR = new XMLHttpRequest();

        // step 2 - sets the type of the message to be read as JSON
        XHR.responseType = 'json';

        // step 3 - configures the message
        XHR.open("GET", "./Scripts/paragraphs.json");

        // step 4 - Executes the request
        XHR.send();

        XHR.addEventListener("readystatechange", function(){
            if((XHR.readyState === 4) && (XHR.status === 200))
            {
                //stores the JSON content of the AboutMe object
                let contactContent = XHR.response.Contact;

                //sets values from the read JSON appropriately
                
                /* let i = 0;
                let j = 0;
                for (const field in contactContent) {
                    if(i === 0){
                        ++i;
                        continue;
                    }
                    if(i === 11){
                        break;
                    }
                    console.log(field);
                    if (contactContent.hasOwnProperty(field) && i % 2 != 0) {
                        document.getElementsByTagName("label")[j].innerText = contactContent[field];
                        j % 4 != 0 ? ++j: ;                        
                    }
                    else{
                        document.getElementsByTagName("input")[i].setAttribute("placeholder", contactContent[field]);
                    }
                    ++i;                    
                }  */
                document.getElementsByTagName("h1")[0].innerText = contactContent.heading;
                document.getElementsByTagName("label")[0].innerText = contactContent.firstNameLabel;
                document.getElementsByTagName("input")[0].setAttribute("placeholder", contactContent.firstNamePlaceholder);
                document.getElementsByTagName("label")[1].innerText = contactContent.lastNameLabel;
                document.getElementsByTagName("input")[1].setAttribute("placeholder", contactContent.lastNamePlaceholder);
                document.getElementsByTagName("label")[2].innerText = contactContent.contactNumLabel;
                document.getElementsByTagName("input")[2].setAttribute("placeholder", contactContent.contactNumPlaceholder);
                document.getElementsByTagName("label")[3].innerText = contactContent.emailAddressLabel;
                document.getElementsByTagName("input")[3].setAttribute("placeholder", contactContent.emailAddressPlaceholder);
                document.getElementsByTagName("label")[4].innerText = contactContent.shortMessageLabel;
                document.getElementsByTagName("textarea")[0].setAttribute("placeholder", contactContent.shortMessagePlaceholder);
                document.getElementsByTagName("button")[1].innerHTML = contactContent.sendButton;
                document.getElementsByTagName("button")[2].innerHTML = contactContent.resetButton;
            }
        });
        
    }
    function ProjectsText()
    {
        let project1String = 
        `One of my favourite activities is to do these artwork which is done by making 3D triangular
        blocks of paper and then making a base upon which the desired structure is built. This work
        makes me feel rested and calm and I enjoy spending hours with it.`;
        let project2String = 
        `I enjoy participating in quiz competitions and have participated in many to my best.
        Participation in quizzes always pays off, whether you win or lose and that's something
         I have come to adore about these competitions.`;
         let project3String = 
        `I also enjoy travelling. I was born and brought up in Saudi Arabia for the whole of my life.
         I have travelled to various parts of India including Dhanushkodi, Rameswaram and Madurai.`
        document.getElementsByTagName("h1")[0].innerText = "Projects";
        document.getElementsByTagName("h2")[0].innerText = "3D Origami";
        document.getElementsByTagName("p")[0].innerText = project1String;
        document.getElementsByTagName("h2")[1].innerText = "Quiz competitions";
        document.getElementsByTagName("p")[1].innerText = project2String;
        document.getElementsByTagName("h2")[2].innerText = "Travel";
        document.getElementsByTagName("p")[2].innerText = project3String;
        document.getElementsByTagName("h5")[0].innerHTML = "&copy; Copyright 2020 - Anirudh Babu - Centennial College"; 
    }
    function loadHeader()
    {
        console.info("Header is on the way...");

        // step 1 - creates the XHR object
        let XHR = new XMLHttpRequest();

        // step 2 - configures the message
        XHR.open("GET", "./Views/partials/header.html");

        // step 3 - Executes the request
        XHR.send();

        XHR.addEventListener("readystatechange", function(){
            if((XHR.readyState === 4) && (XHR.status === 200))
            {
                let header = document.getElementsByTagName("header")[0];

                let headerData = XHR.responseText;

                header.innerHTML = headerData;
                
                setContent();
            }
        });
    }
    function loadFooter()
    {
        console.info("Footer is on the way...");

        // step 1 - creates the XHR object
        let XHR = new XMLHttpRequest();

        // step 2 - configures the message
        XHR.open("GET", "./Views/partials/footer.html");

        // step 3 - Executes the request
        XHR.send();

        XHR.addEventListener("readystatechange", function(){
            if((XHR.readyState === 4) && (XHR.status === 200))
            {
                let footer = document.getElementsByTagName("footer")[0];
                
                let footerData = XHR.responseText;

                footer.innerHTML = footerData;
            }
        });
    }
    function Start()
    {
        loadHeader();
    }
    window.addEventListener("load", Start);

})();
