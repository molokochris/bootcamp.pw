window.onload = function () {

    //Home Page

    let tag = document.createElement("p");
    tag.innerHTML = "Hello! My name is <b>Moloko Chris Poopedi</b>. I am a self-taught Web Developer with experience in Python, C programming, Javascript, HTML, and CSS. Although I am not yet an expert in the field, I am always eager to learn and improve my skills. I am passionate about using technology to solve problems and create innovate solutions. Please feel free to explore my portfolio and get in touch if you have any questions or if you'd like to collaborate on a project. Thank you for visiting!";
    
    home_Parent = document.getElementById("Bio");
    if(home_Parent) {
        home_Parent.appendChild(tag);
    }

    //About Page:

    let personal_El = document.getElementById("personal_info");
    let education_El = document.getElementById("education");
    let projects_El = document.getElementById("projects");
    if (personal_El) {
        //Personal Info
        let firstNames = "Moloko Chris";
        let surName = "Poopedi";
        let province = "Limpopo Province";
        let city = "Polokwane";
        let village = "Moletjie Moshate";
        let suburb = "Koloti";
        let dateOfBirth = "08-07-1997";
        let gender = "Male";
        let race = "Black";

        let row1 = document.createElement("td");
        row1.setAttribute("style", "text-align: center; border-radius: 4px; box-shadow: 0 3px 5px rgb(83, 82, 82)");
        row1.innerHTML = '<h2 style="border: solid 2px whitesmoke; border-radius: 4px;">Personal Information:</h2>'+ "<h4>Name & Surname:</h4>" 
        + "<p>" + firstNames + " " + surName + "" +'<h4>Home Address:</h4><p>'
        + province + ', ' + city + ', <br>' +  village + ', ' +  suburb + '</p><h4>Date of Birth:</h4>'
        + "<p>" + dateOfBirth + "</p>" + "<h4>Gender:</h4>" + "<p>" + gender + "</p>"
        + "<h4>Race:</h4>" + "<p>" + race + "</p>";

        personal_El.appendChild(row1);
    }
    
    if(education_El) {
        let highSchool = "Mmakgabo Senior High School";
        let tertiaryEd = "University of Limpopo";
        let tertiaryQlf = "Bcom In Human Resource Management";
        let otherCerts = "Regen Institution:<br>Robotics and Cybersecurity(MICTSETA)";
        
        let row2 = document.createElement("td");
        row2.setAttribute("style", "text-align: center; border-radius: 4px; box-shadow: 0 3px 5px rgb(83, 82, 82)");
        row2.innerHTML = '<h2 style="border: solid 2px whitesmoke; border-radius: 4px;">Education:</h2>'+ "<h4>High-School:</h4>" 
        + "<p>" + highSchool + "</p>" +'<h4>Tertiary Education:</h4><p>'
        + tertiaryEd + "<br>" + tertiaryQlf + "<br>" + otherCerts;

        education_El.appendChild(row2);
    }

    if (projects_El) {
        let row3 = document.createElement("td");
        row3.setAttribute("style", "text-align: center; border-radius: 4px; box-shadow: 0 3px 5px rgb(83, 82, 82)");
        row3.innerHTML = '<h2 style="border: solid 2px whitesmoke; border-radius: 4px;">Projects:</h2>'
        + '<div style="color: rgb(83, 82, 82); text-align: center;">'
        + 'Python<span style="color: #627faa;">&#9733;</span><span style="color: #627faa;">&#9733;</span><span style="color: #627faa;">&#9733;</span><span style="color: lightgray;">&#9733;</span><span style="color: lightgray;">&#9733;</span>'
        + 'C<span style="color: #627faa;">&#9733;</span><span style="color: #627faa;">&#9733;</span><span style="color: #627faa;">&#9733;</span><span style="color: lightgray;">&#9733;</span><span style="color: lightgray;">&#9733;</span>'
        + 'JavaScript<span style="color: #627faa;">&#9733;</span><span style="color: #627faa;">&#9733;</span><span style="color: #627faa;">&#9733;</span><span style="color: lightgray;">&#9733;</span><span style="color: lightgray;">&#9733;</span>'
        + 'HTML/CSS<span style="color: #627faa;">&#9733;</span><span style="color: #627faa;">&#9733;</span><span style="color: #627faa;">&#9733;</span><span style="color: lightgray;">&#9733;</span><span style="color: lightgray;">&#9733;</span>'
        + '</div>';

        projects_El.appendChild(row3);
    }
}