function findWords(str, words) {
    let foundWords = [];
    words.forEach(word => {
        if (str.includes(word)) {
            foundWords.push(word);
            // foundWords.split(" ");
        }
    });
    return foundWords;
    // return foundwords[0];
}
function getBotResponse(input) {
    let lookTo = ["housing","academic issues","security","finance","register","health","events","sports","organization","library","wi-fi","student card","calendar","fees","gym"];
    let got = findWords(input,lookTo);
    //hard coded answers 
    if (got == "housing") {
        return "Housing refers to student housing or accommodation. The University of Zululand's student housing department is responsible for assigning residences to students during their stay, which are categorized into two groups: off-campus and on-campus residents. Off-campus residents are those whose residences are outside the campus, and on-campus residents are those whose residences are found inside the campus.";
    } else if (got == "health") {
        return "The University of Zululand typically has a health center(clinic) on campus that provides basic medical services to students. You can visit the clinic for general healthcare needs, vaccinations, and advice on staying healthy during your time at the university. They may also offer counseling services for mental health support. Check the health center's operating hours and services on the university's website or by contacting them directly.";
    } else if (got == "register") {
        return "To register for classes at the University of Zululand, you'll need to log in to the university's online student portal(ITS).There you can select your courses and complete the registration process. If you need assistance, the registrar's office is located in the admin building depending on the facult you are registering in for:\n\nFacult of Science office no: 10 or call (+27)35 902 6649\n\nFacult of Education office no: or call (+27)35 902 6000\n\nFacult of Humanities and Social Sciences office no: or call +(27)35 905 6660\n and they can help you with the registration process." ;
    }else if (got == "time table" ) {
        return "If you want to create or check a timetable visit the website of my celcat by searching 'myCelcat unizulu' then click the first link , you will then be able to check all your practical,tutorial and class time slots"
    }
    else if(got == "events"){
        return "To get involved in campus events and activities, keep an eye out for posters, emails, and announcements on bulletin boards or through societies. The university often hosts a variety of events, including cultural festivals, academic seminars, and sports tournaments. You can also inquire at the student affairs office/Student Service Department(SSD) for information on upcoming activities and how to participate."
    }
    else if(got == "organizations"){
        return "The University of Zululand offers a variety of student organizations and clubs to cater to different interests. You can explore options such as cultural clubs, academic clubs, sports teams, and more. Information about these organizations, including how to join, can often be found on bulletin boards around campus, on the university's social platforms and you check with Student Service Department ."
    }
    else if(got == "library"){
        return "The main library at the University of Zululand is located between HP lab and geography department check the link at the end for directions. The library's hours of operation may vary by semester but ussually closes at 23h00 , so it's best to check the library's website or inquire at the library's front desk for the most up-to-date information. They provide a wide range of resources, including books, journals,computers, and study spaces for students."
    }
    else if(got == "wi-fi"){
        return "You can connect to the university's Wi-Fi network by selecting the University_WiFi network from your device's available networks. You'll need to log in using your student number as username and moodle password as password, which you should receive upon enrollment. If you encounter any issues with Wi-Fi connectivity, you can contact the IT department(visit B lab or Hp lab) for assistance."
    }
    else if(got == "student card"){
       return "To obtain your student card, visit the university's ID card office , which is usually located next to PSD office. You'll need to provide proof of enrollment and a proof of residence by housing department. Once you have your student card, you can use it for various campus services, including library access, student discounts and attending other events."
    }
    else if(got == "calendar"){
        return "The academic calendar for the University of Zululand typically consists of two semesters: the first semester, which usually starts in february, and the second semester, which begins in July. You can find the specific dates, including registration periods, exam dates, and holidays, on the university's website or by contacting the academic affairs office."

    }
    else if(got == "fees"){
        return "Tuition fees can typically be paid through the university's online payment portal or use the instituion account number. The payment deadlines and accepted payment methods can be found on the university's website or by contacting the finance office. Make sure to meet the deadlines to avoid late fees or enrollment holds."
    }
    else if(got == "finance"){
        return "If you need anything concerning finance you can visit the admin and that is where the finance office are located, you will be assisted with any issue regarding finance such  NSFAS issues, scholarship, bursaries, and student loan";
    }
    else if(got == "security"){
        return "The University of Zululand takes campus security seriously. You can start by familiarizing yourself with the emergency contact numbers, such as campus security and PSD(Protective Service Department), and save them in your phone. Carring of student card around is neccesary to easly identified.You can also contact M Guard security by using there emegency app"
    }
    else if(got == "lost"){
        return "Should it happaen you loose one of your belonging you can contact the PSD(Protective Service Department) they will they will be able to he"

    }else if(got == "recreation"){
        return "There are several recreational activities you can enjoy on campus. You can join sports clubs like soccer, rugby, or netball, or participate in cultural dance and music groups. The university also hosts theater plays and game nights in the student art department."

    }else if(got == "gym"){
        return "Yes, there is a gym on campus. The university has a well-equipped fitness center located in the student recreational area(ellis park) and at BZ(Bhekuzulu Hall). It's a great place to work out and stay in shape. They offer a variety of exercise equipment, including cardio machines, weightlifting equipment, and even fitness classes. You can purchase a membership or pay a daily fee to access the gym facilities."
    }    


    // Simple responses
    if (input == "hello") {
        return "Hello there!";
    } else if (input == "goodbye") {
        return "Talk to you later!";
    } else {
        return "Are you trying to kill me .... sorry I can't recognise the question live it in the feedback the team will get to you as soon as possible";
    }

}