/* Author: Anirudh Babu
   Date  : 28/06/2020
   Description: This script injects all text seen on the html page
*/
(function(){
    let title = document.querySelector("title").innerText;
    function AboutMeText()
    {
        let pString = 
        `I am a high school graduate aspiring to be a software engineer who enjoys coding.
         At Centennial, I am a student of the Software Engineering Technician Program. My 
         interests include reading, watching Youtube and listening music. `;
        let missionStatement =
        `   Strive to be a good software engineer who never stops learning and spreading knowledge`;
        document.getElementsByTagName("h1")[0].innerText = "About me";
        document.getElementsByTagName("h2")[0].innerText = "Mission Statement";
        document.getElementsByTagName("p")[0].innerText = pString;
        document.getElementsByTagName("blockquote")[0].innerText = missionStatement;
        document.getElementsByTagName("h2")[1].innerText = "Hobbies";
        document.getElementsByClassName("fa-ul")[0].innerHTML = 
        `<li><i class="fa-li fab fa-github-alt"></i> 3D Origami</li>
        <li><i class="fa-li fab fa-github-alt"></i> Reading</li>
        <li><i class="fa-li fab fa-github-alt"></i> Watching LinkedIn Learning</li>`;
        document.getElementsByTagName("h2")[2].innerText = "Interests";
        document.getElementsByClassName("fa-ul")[1].innerHTML = 
        `<li><i class="fa-li fab fa-github-alt"></i> Networking</li>
        <li><i class="fa-li fab fa-github-alt"></i> Data Science</li>
        <li><i class="fa-li fab fa-github-alt"></i> Programming</li>`;
        document.getElementsByTagName("h5")[0].innerHTML = "&copy; Copyright 2020 - Anirudh Babu - Centennial College";       
    }
    function ContactText()
    {
        document.getElementsByTagName("h1")[0].innerText = "Contact Us";
        document.getElementsByTagName("label")[0].innerText = "First Name";
        document.getElementsByTagName("input")[0].setAttribute("placeholder", "Enter your First name");
        document.getElementsByTagName("label")[1].innerText = "Last Name";
        document.getElementsByTagName("input")[1].setAttribute("placeholder", "Enter your Last name");
        document.getElementsByTagName("label")[2].innerText = "Contact Number";
        document.getElementsByTagName("input")[2].setAttribute("placeholder", "Enter your Contact Number");
        document.getElementsByTagName("label")[3].innerText = "Email address";
        document.getElementsByTagName("input")[3].setAttribute("placeholder", "Enter your email address");
        document.getElementsByTagName("label")[4].innerText = "Your Message";
        document.getElementsByTagName("textarea")[0].setAttribute("placeholder", "Type in anything you would like to let me know...");
        document.getElementsByTagName("button")[1].innerHTML = "<i class=\"fas fa-envelope-square\"></i> Send";
        document.getElementsByTagName("button")[2].innerHTML = "<i class=\"fas fa-comment-slash\"></i> Reset";
        document.getElementsByTagName("h5")[0].innerHTML = "&copy; Copyright 2020 - Anirudh Babu - Centennial College"; 
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
    switch (title) {
        case "About me":
            window.addEventListener("load", AboutMeText);
            break;
        case "Contact":
            window.addEventListener("load", ContactText);
            break;
        case "Projects":
            window.addEventListener("load", ProjectsText);
            break;
        default:
            break;
    }
    
    /*$(function () {
        $('[data-toggle="popover"]').popover()
      })*/



})();
