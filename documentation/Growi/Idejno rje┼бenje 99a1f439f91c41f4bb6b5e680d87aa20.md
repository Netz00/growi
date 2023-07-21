# Idejno rješenje

Rješenje je mentalnim modelom slično drugim posredničkim platformama uz neke svoje specifičnosti radi specifičnosti branše, influencer marketinga i same blockchain realizacije. Objašenjenje rješenja kreće od samih aktora pa podjelom sustava na manje djelove i objašnjavanjem svakog dijela zasebno (divide et impera) sljedećim redosljedom, verifikacija stranki u procesu, osiguravanje pouzdanih podataka i samog posredništva prilikom poslovanja. 

Svi aktori sustava su platforma društvene mreže, platforma Growi, influenceri, klijenti.

Društvene mreže su izvor podataka, klijenti su izvor potražnje, influenceri su izvor ponude, a followeri nemaju direktan dodir s platformom, ali su značajan dio ciklusa (radi njih i postoji ostatak dijagrama). Srednji spinner označava Cash Flow, od klijenta preko platforme do influencera, nakon čega indirektno se vaća klijentu u obliku ROI. U samome oblaku Growi se nalazi mnogo zadaća koje će biti detaljnije objašnjene sljedeće.

![Cash Flow and external actors preview](Idejno%20rje%C5%A1enje/ExternalActorsPreview.drawio.png)

Cash Flow and external actors preview

[ExternalActorsPreview.drawio](Idejno%20rje%C5%A1enje/ExternalActorsPreview.drawio)

---

Prvi dio koji bi growi riješio je pouzdanost izvora podataka. Influenceri bi se morali registrirati putem platforme i verificirati svoje račune društvenih mreža kako bi postali aktivni na platformi. Verifikacija znači davanje pristupa podacima društvene mreže Growi platformi, kako bi Growi platforma te podatke mogla prezentirati određenim klijentima. Na ovaj način postoji poveznica s influencerom na Growiu i stvarnim influencerom, te klijentima se mogu pružiti podaci s računa influencera.

Prije aktiviranja samog računa Growi će izračunati engagment influencera i provjeriti dodatne faktore kako bi provjerio radi li se o “stvarnom” influenceru, ukoliko se kriteriji ne zadovolje račun će biti blokiran dok se kriteriji računa ne zadovolje. Na ovaj način većina lažnih influencera se neće uspijeti registrirati do kraja i biti na platformi.

Osim verifikacije influencera nužna je i verifikacija klijentskih računa koja će zahtjevati vezanje broja telefona i osobnih podataka, kao pomoću kreditne kartice. Ime s bankovne kartice je ujedno i ime klijenta. Na ovaj način influenceri “znaju” tko je njihov klijent.

---

Pretraga influencera je jedan od jednostavnijih koraka. Klijent influencere možu pretraživati po kategorijama, full text search, lokaciji, broju influencera, engagmentu,… ili kombinacijom tih svih kriterija. Nakon što pronađe influencera može pregledati njegov opis, statistike koje je Growi izračunao, cjenik, te komentare i ocjene prethodnih klijenata kao i njih same. Osim toga može ga spremiti na listu, kontaktirati ga ili mu poslati ponudu (objašnjeno u sljedećem koraku).

![Flow public podataka za klijenta](Idejno%20rje%C5%A1enje/BuildingStats.drawio.png)

Flow public podataka za klijenta

[BuildingStats.drawio](Idejno%20rje%C5%A1enje/BuildingStats.drawio)

Jedan dio podataka za koje su influenceri ovlastili pristup Growi-u se redovito prikupljaju te spremaju. Prilikom toga se i računaju nove metrike za svakog influencera i ponavlja se ponovno postupak sa registracije, jeli račun zadovoljava kriterije, ako ne zadovoljava opet se blokira do ispunjena kriterija. Redovito uzorkovanje podataka i njihovo bilježenje je bitno kako bi klijent imao što bolju predođbu o influenceru i njegovoj povijesti. Podaci su dostupni svim klijentima na profilima influencera, radi se javnim podacima.

---

Kao treći segment platforme je posredništvo predočeno sljedećom vizualizacijom. Posredništvo je automatizirano putem pametnih ugovora. Osim same automatiziranosti, osigurava se 0 trust sustav.

Nakon što klijent pronađe influencera može ga kontaktirati i postaviti mu pitanje oko posla, pritom ima predloške najbitnijih pitanja. Druga opcija je da odmah ispuni ponudu posla te ga pošalje influenceru. Ponuda je custom forma koju klijent interaktivno gradi odgovarajući na pitanja o svome zahtjevu, te omogućava brže sklapanje posla. Influencer ima opciju da prima samo ponude, a zatim nastavi chat s klijentom ili chat otvoren za sve klijente i bez ponude.

Sljedeći opis je popraćen koracima na vizualizaciji ispod.

Zatim influencer pregledava ponudu i odbija je, dogovaraju se u chatu, zatim klijent prepravlja ponudu, i nakon nekoliko stotina iteracija klijent i influencer se dogovaraju i influencer prihvaća ponudu (1). Zatim influencer priprema medijske materijale s ostatkom objave u lažnu objavu na growi platformi (vidljiva je samo influenceru i klijentu) koju klijent treba potvrditi. Kada klijent potvrdi lažnu objavu, onda prelazi u ugovor koji se zapisuje na blockchain i ostaje trajno spremljen i naknadne promjene su moguće jedino uz poništenje posla i ponovno sklapanje novog posla (moguće korištenje starog kao predloška). Medijski dio objave se zapisuje u u obliku jedinstvenog hash-a, dok se ostali tekstualni sadržaj zapiše takav kao što i jest.

Nakon što je ugovor spremljen (2), čeka se klijenta da uplati novac na adresu ugovora. Nakon što je novac uplaćen on ostaje na adresi ugovora do kraja posla. Influencer se obavještava da je novac uplaćen i da može nastaviti s ispunjavanjem ugovora (3). 

Zatim influencer izvršava posao i klijent za to vrijeme ima uvid u realtime podatke vezane uz njegove objave. To se postiže pomoću pristupa kojeg je influencer ovlastio Growi. Ovi podaci su tajni i vezani samo uz objave koje influencer dopusti određenom klijentu da vidi jer se radi o objavama u svrhe ugovora. Pomoću toga klijent može kvalitetnije izračunati ROI.

Nakon isteka vremena u pametnom ugovoru, pametni ugovor provjerava profil influencera i objavu te njen sadržaj uspoređuje s onim kakav je trebao biti, i datum objave i datum promjene sadržaja objave. Ukoliko je ugovor ustanovi da nije bilo nepravilnosti, objava postoji, sadržaj je jednak dogovorenom, datum objave je unutar zadanog roka… novac se prebacuje na adresu influencera, u suprotnom novac je vraćen na prvobitnu adresu.

Nakon posla, klijent i influencer si ostavljaju međusobne rezencije u obliku komentara i ocjene 1-5.

![Pojednostavljeni slijed događaja poslovanja](Idejno%20rje%C5%A1enje/Middleman-Page-1.drawio.png)

Pojednostavljeni slijed događaja poslovanja

[Middleman.drawio](Idejno%20rje%C5%A1enje/Middleman.drawio)