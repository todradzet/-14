function getFeedback(score, name) {
    const threshold = 51;

    if (score < threshold) {
        let pointsLost = threshold - score;
        console.log(`სამწუხაროდ ${name}, თქვენ ვერ გადალახეთ მინიმალური ბარიერი, თქვენ დაგაკლდათ  ${pointsLost} 21 ქულა. უკეთესად მოემზადეთ.`);
    } else if (score >= threshold && score <= 90) {
        let pointsAbove = score - threshold;
        console.log(`გილოცავთ ${name}, თქვენ  ${pointsAbove} ქულაზე მეტი აიღეთ ბარიერზე.`);
    } else if (score > 90) {
        console.log(`გილოცავთ ${name}, ძალიან კარგი შედეგი გაქვთ!`);
    }
}


