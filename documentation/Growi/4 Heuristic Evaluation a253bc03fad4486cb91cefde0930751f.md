# 4. Heuristic Evaluation

# Jakob Nielsen’s 10 Heuristics

## 1. Match between system and the real world

> The system should speak the users' language, with words, phrases and concepts familiar to the user, rather than system-oriented terms.
> 

Ikone za promjenu između tamne i svijetle teme se vezuju sa suncem i mjesecom koji označavaju dan i noć.

![Untitled](4%20Heuristic%20Evaluation/Untitled.png)

![Untitled](4%20Heuristic%20Evaluation/Untitled%201.png)

![Untitled](4%20Heuristic%20Evaluation/Untitled%202.png)

Kartica influencera koristi žargon influencer marketinga, kao pojam engagment.

Informacije se pojavljuju logičkim redosljedom, tako da su slike na početku, a sama cijena na dnu kartice.

## 2. Consistency and standards

> Users should not have to wonder whether different words, situations, or actions mean the same thing. Follow platform conventions.
> 

Searchbar je konzistentan kroz više stranica i pridržava se klasičnog search bara i njegovih funkcionalnosti.

![Untitled](4%20Heuristic%20Evaluation/Untitled%203.png)

![Untitled](4%20Heuristic%20Evaluation/Untitled%204.png)

Mapiranje boja i botuna na početnoj stranici se nastavlja nakon klika na botun.

![Untitled](4%20Heuristic%20Evaluation/Untitled%205.png)

![Untitled](4%20Heuristic%20Evaluation/Untitled%206.png)

![Untitled](4%20Heuristic%20Evaluation/Untitled%207.png)

Korištenje istih fontova, botuna, linkova osigurava konzistentnost kroz stranicu.

## 3. Visibility of system status

> The system should always keep users informed about what is going on, through appropriate feedback within reasonable time.
> 

Navigacijska traka uvijek naznači trenutno otvorenu stranicu, te ta opcija nije klikabilna i nema efekte na prelazak mišom.

![Untitled](4%20Heuristic%20Evaluation/Untitled%208.png)

Na kartici influencera prilikom promjene slike promjeni se i obojani kružić na dnu u sredini te korisnika informira o trenutnom stanju.

![Untitled](4%20Heuristic%20Evaluation/Untitled%209.png)

Radi sporijeg učitavanja Instagram postova, korisniku se prikaže okvir posta sa spinnerom koja ga informira da se post učitava.

![Untitled](4%20Heuristic%20Evaluation/Untitled%2010.png)

Ukoliko korisnik unese u tražilicu pojam za koji nema preporuka, prikaže mu se poruka. Time je informiran da je sve uredu i da nema rezultata.

![Untitled](4%20Heuristic%20Evaluation/Untitled%2011.png)

Ukoliko korisnik nakon unosa se zaustavi na više od 300 ms prikazati će mu se preporuke (ako postoje).

![Untitled](4%20Heuristic%20Evaluation/Untitled%2012.png)

Ako korisnik ne unese ništa u tražili i pokuša pretraživati, biti će upozoren i pretraga neće biti izvršena.

![Untitled](4%20Heuristic%20Evaluation/Untitled%2013.png)

## 4. User control and freedom

> Users often choose system functions by mistake and will need a clearly marked "emergency exit" to leave the unwanted state without having to go through an extended dialogue. Support undo and redo.
> 

Korisnik ukoliko slučajno otvori prozor za spremanje profila na listu može jednostavno ga zatvoriti na X ikonu ili klikom bilo gdje van prozora.

![Untitled](4%20Heuristic%20Evaluation/Untitled%2014.png)

## 5. Error prevention

> Even better than good error messages is a careful design which prevents a problem from occurring in the first place. Either eliminate error-prone conditions or check for them and present users with a confirmation option before they commit to the action.
> 

Primjer dizajna otpornijeg na greške, tako da se korisnici ne moraju prisjetiti punog ili kompletno točnog naziva. Ili ako prilikom unosa pogriješe jedan ili dva znaka i dalje mogu dobiti isti rezultat. Ovaj search podržava fuzzy full text search te uračunava u svoj rad da će korisnik pogriješiti prilikom unosa. Stoga iako korisnik pogriješi, sustav je donekle otporan na to i neće se dogoditi greška.

![Untitled](4%20Heuristic%20Evaluation/Untitled%2015.png)

## 6. Help users recognize, diagnose, and recover from errors

> Error messages should be expressed in plain language (no codes), precisely indicate the problem, and constructively suggest a solution.
> 

Ukoliko korisnik pokuša otići na link koji ne postoji biti će odveden na prepoznatljivu 404 stranicu s botunom za povratak na početnu stranicu (oporavak).

![Untitled](4%20Heuristic%20Evaluation/Untitled%2016.png)

## 7. Recognition rather than recall

> Minimize the user's memory load by making objects, actions, and options visible. The user should not have to remember information from one part of the dialogue to another. Instructions for use of the system should be visible or easily retrievable whenever appropriate.
> 

Kada korisnik pretražuje u rezultatima se zelenom bojom prikaže poklapanje, tako da korisnik lakše uoči ostatak traženog dijela izraza. Također se ne mora prisjećati već samo prepozna traženo.

![Untitled](4%20Heuristic%20Evaluation/Untitled%2017.png)

Linkovi profila sadržavaju username, tako da korisnik i bez otvaranja linka zna username profila na koji taj link vodi.

![Untitled](4%20Heuristic%20Evaluation/Untitled%2018.png)

## 8. Flexibility and efficiency of use

> Accelerators -- unseen by the novice user -- may often speed up the interaction for the expert user such that the system can cater to both inexperienced and experienced users. Allow users to tailor frequent actions.
> 

Iskusniji korisnici mogu koristiti tipke strelica gore i dolje za pregledavanje preporuka. Tako da će iskusniji korisnik utipkati dio pojma, strelicom dolje naći željeno i tipkom enter odabrati profil. Dok će novi korisnici utipkati pojma, pomaknuti desnu ruku na miš, scrollati, mišom otići na željeni profil i odabrati ga klikom.

![Untitled](4%20Heuristic%20Evaluation/Untitled%2019.png)

## 9. Aesthetic and minimalist design

> Dialogues should not contain information which is irrelevant or rarely needed. Every extra unit of information in a dialogue competes with the relevant units of information and diminishes their relative visibility.
> 

Početna stranica pruža minimalan broj funkcionalnosti kako bi se korisnici što brže opredijelili i bili odvedeni na stranicu namijenjenu njima. Stoga nema ni navigacijske trake jer nisu sve stavke zajedničke tim dvjema vrstama korisnik.

![Untitled](4%20Heuristic%20Evaluation/Untitled%2020.png)

Također je na mnogo akcija umjesto teksta korištena ikona koja je već dobila svoje značenje, kao kod npr. promjene u dark mode, spremanja profila na listu, lokacije na kartici profila, ocjene profila na kartici sa zvjezdicama.

Kartica influencera prikazuje samo najbitnije informacije o profilu koje pružaju minimalan dovoljan uvid na kojeg korisnik odlučuje jeli treba dublje istražiti taj profil otvaranjem ga ili spremanjem za kasnije.

![Untitled](4%20Heuristic%20Evaluation/Untitled%2021.png)

## 10. Help and documentation

> Even though it is better if the system can be used without documentation, it may be necessary to provide help and documentation. Any such information should be easy to search, focused on the user's task, list concrete steps to be carried out, and not be too large.
> 

U footeru je link na About Us koji je u planu za implementaciju i ikone društvenih mreža s Gmail ikonom za kontakt.

![Untitled](4%20Heuristic%20Evaluation/Untitled%2022.png)