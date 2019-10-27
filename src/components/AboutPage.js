import React from "react";
import Page from "./Page";

const firstLines = [
    "First - the people this dream wouldn’t come to life without:",
    "My life partner Tsofit ",
    "Hezi Ben-Moshe, Oded Soffrin, the Weinshtocks, Roni Khait, Natali Issahary, Adi Lokay ",
    "Thank you",
    '',
    "The Playa is a perfect canvas to twist time, perception & memory.",
    "I decided to explore image processing technologies to manipulate self-portraits in near real-time, so to create a dissonance between reality and resulting imagery, triggering the subject to re-compose the missing parts - using his memory.",
    "The “burn” philosophy is in the heart of this project:", 
    "The temporary human experience and footprints vs. eternity of the desert landscape.",
    "“Leave no trace” - all, but a fading memory of the moments.",
    "Questioning the limits of minimalist photography, and the “default” culture of sharing selfies, as these pictures are “encrypted” and can be seen only by the subject of the image.",
    "Gifting - as I would love to allow you the keep this fading memory image to try and recall the moment forever.",
]

const secondLines = [
    "I would love to get your feedback - did you like it?",
    "Hoping this installation will resonate, I consider roaming with my fading memories camera around different burn cities, as old-times photographers used to roam from village to village.",
    "Drop by camp Kusumo & look for “the fading memory experience” site for images download, feedbacks, etc.",
];
    

const last = [
    "Thank you,", "Avishay (The 5th) Mano", "Camp Kusumo - Burn.in.motion.2019"
];

const firstLinesHe = [
"לפני הכל - תודה ענקית מעומק ליבי לאנשים שבלעדיהם החלום הזה לא היה מתממש:",
"שותפתי לחיים צופית",
"חזי בן משה, עודד סופרין, הויינשטוקים, רוני חייט, נטלי יששכרי, עדי לוקיי",
"תודה!",
"",
"אירועי ברן הם המצע המושלם להשתעשעות בתפיסת הזמן, המקום והזכרון.",
"החלטתי לחקור טכנולוגיות עיבוד תמונה כדי לשנות פורטרטים עצמיים של המשתתפים בזמן אמת כדי לייצר דיסוננס בין המציאות לצילום, לעורר את",
"זכרונו של המשתתף להרכבה מחדש של החלקים החסרים, ולייצר חווית הזכרות בהווה.",
"המיצב נוגע ישירות בעקרונות קהילת הברן, וגם פותח הזדמנות להרהור בפילוסופיה (של הצילום) בימינו:",
"העיר הזמנית, זמניות האדם, ונצחיות המדבר",
"אי השארת עקבות - Leave No Trace",
"פרטיות הצילום - מהו צילום מינימליסטי? אילו מטרות צילום חוויות חיים משרת?",
"הענקת מתנות - אשמח להעניק את קצה-חוט הזכרון הזה למשתתפים."
];


const secondLinesHe = [
    "יש לי חלום להיות צלם נודד בין ערים זמניות של אירועי ברן בעולם, כפי שצלמים בראשית עידן המצלמה עברו בין כפרים והשאירו זכרונות.",
    "אתם מוזמנים לקפוץ למחנה קוסומו או לחפש בהמשך את אתר המיצב The Fading Memory Experience ליצירת קשר ולהורדת תמונות.",
    "תודה על השתתפותכם,"
];

const lastHe = [
    "אבישי ('החמישי') מנו",
    "מחנה קוסומו - ברן עם משה 2019"
];
const toPara = lines => lines.map(x => x ? <p>{x}</p> : <br/>);

export default () => {
  return (
    <Page>
      <div className="about-page">
        <h1>The Fading Memory Experience</h1>
        <div className="eng">
          
            {toPara(firstLines)}
          <h3>Last - Your feedback really matters!</h3>
            {toPara(secondLines)}
            <br/>
            <div className='final'>
                {toPara(last)}
            </div> 
        </div>
        <div className="heb">
        
            {toPara(firstLinesHe)}
            <h3>אשמח לקבל תגובות ומשוב</h3>
            {toPara(secondLinesHe)}
            <br/>
            <div className='final'>
                {toPara(lastHe)}
            </div> 
        </div>
      </div>
    </Page>
  );
};
