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
    let lookTo = ["housing","academic issues","security","finance","register","health","events","sports","organization","library","wi-fi","student card","student portal","calendar","fees","residences","Housing application", "modification","Technology and IT support","classes","Emergency","outlook","borrowing book","finance issues","academic ","academic issues","plagiarism","Bookshop","class attendance"];
    let got = findWords(input,lookTo);
    //hard coded answers 
    if (got == "housing") {
        return "Housing refers to student housing or accommodation. The University of Zululand's student housing department is responsible for assigning residences to students during their stay, which are categorized into two groups: off-campus and on-campus residents. Off-campus residents are those whose residences are outside the campus, and on-campus residents are those whose residences are found inside the campus.";
    } else if (got == "housing application"){
        return "In order to apply for residence on campus you need to have a printed proof of registration with a school stamp and claim for it online with the help of peer helpers. For online residence application you can visit this link that will provide you initial step-by-step application https://www.eafinder.com/za/unizulu-residence-online-application/";
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
    else if(got == "student portal"){
        return "A student portal refers to an online service used by educational institutions to set up their programs.This tool is the main communication channel between the university and the students.It's essential to know where most of information is shared like viewing academic record results.Here is the link to describe how to login to Unizulu student portal https://www.quickread.co.za/unizulu-its-login/ ";
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
        return "The University of Zululand takes campus security seriously. You can start by familiarizing yourself with the emergency contact numbers, such as campus security and PSD(Protective Service Department), and save them in your phone. Carring of student card around is neccesary"
    }
    else if(got == "modicifation"){
        return "Modification is a change or alteration to make something work better. To do modification at University of Zululand you need to fill in the form available at administration building , you can even download it online on this link https://www.unizulu.ac.za/wp-content/uploads/2021/03/ModificationForm.2021.pdf. After filling in the document you will need to visit the HOD or deputy offices for approval.Since the university has different departments you will visit the dean or HOD of the department you registered on.";

    }else if(got == "technology and it support"){
        return "The university has HP-Lab and B-Lab where you can collect laptop, you can visit this labs if you want to use university computer, if you want to get help about changing password. This labs hav some rules and regulations placed on the doors.";

    }else if(got == "classes"){
        return "The university have this venues for attending classes: SC's, AL's, NE's,LT's,E blocks, F blocks, D block and some other bulidings for writing tests or exams.";

    }else if(got == "emergency"){
        return "For emergency help you can call this number 035-9026-6599 & 035-902-6479, and Protective Services Department is close to ATM's, where you can report something like stolen laptop, Physical abuse.";

    }else if(got == "outlook"){
        return "Microsoft Outlook is an application that's used mainly to send and receive emails. It's also used to manage various types of personal data including calendar appointments and similar entries, tasks, contacts, and notes.You can downloa the microsoft outlook app on playstore and then sign in using your student email by writing student number and then add this extension .unizulu.ac.za";


    }else if(got == "borrowing book"){
        return "If you want to borrow a book you need to visit a library building, be registered to the university, bring your student card, know the title of the book you want to borrow, then you will visit librarian that will assist you in finding the book. Though it might happens that the book you want to borrow was already borrowed by other students you will have to reserved the book so that if the student return the book you will get notification that the book is  ow available you can come and collect it. There are some rules to be followed when you hav borrowed the book for example: you need to return the book on time,ensure that you update the book before is overdue if you want to, return the book as it was given to you with no lost pages and written and if you return the book after due date you will pay for it.";


    }else if(got == "finance issues"){
        return " If you have financial problem you can visit administration building at office number 7 where you will get help. The university of Zululand  allows students to study on debts,though it might happens that you are not funded for the whole semester and get the huge amount of money on the last month. This happens if your NSFAS is processing your information for a long time due to late NSFAS appications.";

    }else if(got == "academic "){
        return "The unizulu uses Moodle platform which is a free and open-source learning management system written in PHP and distributed under the GNU General Public License. Moodle is used for blended learning, distance education, flipped classroom and other online learning projects in schools, universities, workplaces and other sectors. This platfom will help students to get module slides, able to write quizes, check tasks grades and be able to see notifictions.";
    }else if(got == "academic issues"){
        return " The university pay for tutors to help students in their studies during tutorial period, though you can ask for help to them privately but you will have to consider payments.A student can also consults lecture on the class or visit the lecture on the office if he/she wants some clarification";

    }else if(got == "university rules"){
        return "This link https://www.unizulu.ac.za/wp-content/uploads/2017/08/VC-P1.pdf consists of university rules and procedures.";

    }else if(got == "plagiarism"){
        return"Plagiarism is the practice of taking someone else's work or ideas and passing them off as one's own.The university assigns that if a student was caughts plagiarising he/she will be penalised or even deregistered to the university.";
    }else if(got == "Bookshop"){
        return "The university has bookshop where students can buy studying materials like buying laptops,lab coats, pens, books etc.";

    }else if(got == "class attendance"){
        return "The university does not force students to attend classes, it only knows that a student has to be independent and know what she or he wants. But lack of attendance to student may have impact to their results as some lectures uses attendance register for the proof if the students come with issues during DP release period.";
    }
    // Simple responses
    if (input == "hello") {
        return "Hello there!";
    } else if (input == "goodbye") {
        return "Talk to you later!";
    } else {
        return "Are trying to kill me .... sorry I can't recognise the question live it in the feedback the team will get to you as soon as possible";
    }

}