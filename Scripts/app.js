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
        //gets all the nav links and creates siteName that stores the name of the site to be compared to href
        let navAnchors = document.querySelectorAll("li a");
        let siteName = document.title.toLowerCase() + ".html";

        for (const anchor of navAnchors) 
        {
            //special separation as about me page has index.html as it's site name
            if(document.title === "About me")
            { 
                if(anchor.getAttribute("href") === "index.html")
                {
                    anchor.parentElement.className = "nav-item active";
                }
            }
            else
            {
                if(anchor.getAttribute("href") === siteName)
                {
                    anchor.parentElement.className = "nav-item active";
                }
            }
        }        
    }
    
    function setContent()
    {
        //calls this function here to counter the asynchronous nature of JavaScript
        highlightActiveLink();

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
                let Contents = XHR.response.myContent;

                //calls the appropriate function to load contents based on the title of the page
                switch (document.title) {
                    case "About me":
                        AboutMeContent(Contents[0]);
                        break;
                    case "Contact":
                        ContactContent(Contents[1]);
                        break;
                    case "Projects":
                        ProjectsContent(Contents[2]);
                        break;
                    default:
                        break;
                }
            }
                
        });

        //Again, method call is placed here to counter the async nature of JavaScript
        loadFooter();

    }
    function AboutMeContent(aboutMeContent)
    {
        //sets values from the read JSON array's first object appropriately  
        document.getElementsByTagName("h1")[0].innerText = aboutMeContent.heading;
        document.getElementsByTagName("h2")[0].innerText = aboutMeContent.missionHeading;
        document.getElementsByTagName("p")[0].innerText = aboutMeContent.introText;
        document.getElementsByTagName("blockquote")[0].innerText = aboutMeContent.missionStatement;
        document.getElementsByTagName("h2")[1].innerText = aboutMeContent.hobbiesHeading;
        document.getElementsByClassName("fa-ul")[0].innerHTML = aboutMeContent.hobbies;
        document.getElementsByTagName("h2")[2].innerText = aboutMeContent.interestsHeading;
        document.getElementsByClassName("fa-ul")[1].innerHTML = aboutMeContent.interests;
        
    }
    function ContactContent(contactContent)
    {
        //sets values from the read JSON array's second object appropriately
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
    function ProjectsContent(projectsContent)
    {
        //sets values from the read JSON array's third object appropriately
        document.getElementsByTagName("h1")[0].innerText = projectsContent.heading;
        document.getElementsByTagName("h2")[0].innerText = projectsContent.project1Heading;
        document.getElementsByTagName("p")[0].innerText = projectsContent.project1Text;
        document.getElementsByTagName("h2")[1].innerText = projectsContent.project2Heading;
        document.getElementsByTagName("p")[1].innerText = projectsContent.project2Text;
        document.getElementsByTagName("h2")[2].innerText = projectsContent.project3Heading;
        document.getElementsByTagName("p")[2].innerText = projectsContent.project3Text;
 
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
