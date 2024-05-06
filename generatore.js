// JavaScript source code
function fightGenerator() {
    const MAX = 4;
    var num = Math.trunc(MAX * Math.random()) + 1;
    switch (num) {
        case 1:
            incontro.src = "img/incontro_" + num + ".jpg";
            nome.innerHTML = "Emidio il Rospo Errante";
            description1.innerHTML = "Rospo - Santone - Catignano (PE)";
            vita.innerHTML = "VITA: 6";
            morale.innerHTML = "MORALE: / ";
            rDanno.innerHTML = "R.DANNO: 1d4";
            forzaAgilita.innerHTML = "FORZA +1 - AGILITA' +1";
            istintoCotenna.innerHTML = "ISTINTO -1 COTENNA 0";
            arma.innerHTML = "Bastone Consacrato - 1d6+1";
            story.innerHTML = "Emidio \u00E8 un pingue e amichevole rospo santone devoto a Santa Irene. Interessato al pettegolezzo e al sollazzo in parti uguali, ne sa una pi\u00F9 del diavolo anche perch\u00E8, se no, che santone sarebbe. Parla anche con le pietre della strada, non lascia niente di intentato, \u00E8 la memoria storica del suo gruppo. Ricorda pi\u00F9 le ricette delle preghiere e produce birra artigianale. Ha un animo ambiguo, vuole sapere sempre tutto ma di lui si sa poco, solo quello che lascia trasparire tra una portata e l'altra.";
            author.innerHTML = "Alain D'Ettorre";
            break;
        case 2:
            incontro.src = "img/incontro_" + num + ".jpg";
            nome.innerHTML = "Bearnando l'orso viaggiatore";
            description1.innerHTML = "Orso Marsicano - Scaltro - Bucchianico (CH)";
            vita.innerHTML = "VITA: 8";
            morale.innerHTML = "MORALE: / ";
            rDanno.innerHTML = "R.DANNO: 1d4";
            forzaAgilita.innerHTML = "FORZA +0 - AGILITA' +2";
            istintoCotenna.innerHTML = "ISTINTO +0 COTENNA +2";
            arma.innerHTML = "Arco Lungo Bucchianichese - 1d6+2";
            story.innerHTML = "L'orso BEARnando \u00E8 una versione anomala rispetto ai classici Orsi Marsicani: \u00E8 piú magro degli altri (sará solo una questione di pelo?), ma comunque atletico ed inesauribile. Ha sempre uno zanio in spalla in quanto viaggiatore in terre lontane e vicine. Con o senza armatura, veste sempre con camicia dalle maniche arrotolate, bretelle, pantaloni corti e calzari che ricordano quasi delle Converse!";
            author.innerHTML = "Simone Zuccarini";
            break;
        case 3:
            incontro.src = "img/incontro_" + num + ".jpg";
            nome.innerHTML = "Giannina";
            description1.innerHTML = "Orsa Marsicana - Bruto - San Giovanni Teatino (CH)";
            vita.innerHTML = "VITA: 8";
            morale.innerHTML = "MORALE: / ";
            rDanno.innerHTML = "R.DANNO: 1d4";
            forzaAgilita.innerHTML = "FORZA +2 - AGILITA' -1";
            istintoCotenna.innerHTML = "ISTINTO -1 COTENNA+2";
            arma.innerHTML = "Mattarello 'Judizie' - 1d4+2";
            story.innerHTML = "Giannina \u00E8 un’orsa anziana, vedova di lupo di mare che ogni tanto scuoteva per convincerlo di avere ragione. Dalla scomparsa del Compagno ha capito che la vita va' vissuta bene, e per questo ha iniziato a fumare cicoria e giocare a carte con chiunque le capiti a tiro. Per Giannnina il cibo è sacro, anche se cade dal tavolo basta soffiare, e va’ mangiato tutto in un sol boccone. Sempre! Si narra che è impossibile mangiare lo stufato velocemente come lei, alcuni giurano di averla vista rincorrere un istrice per cibarsene.";
            author.innerHTML = "Moreno Ranalli";
            break;
        default:
            incontro.src = "img/incontro_" + num + ".jpg";
            nome.innerHTML = "Isidoro Pungirovo";
            description1.innerHTML = "Cinghiale - Bruto - Pretoro (CH)";
            vita.innerHTML = "VITA: 9";
            morale.innerHTML = "MORALE: / ";
            rDanno.innerHTML = "R.DANNO: 1d4+1";
            forzaAgilita.innerHTML = "FORZA +3 - AGILITA' +0";
            istintoCotenna.innerHTML = "ISTINTO -1 COTENNA+2";
            arma.innerHTML = "Ascia 'gnorante - 1d8+3";
            story.innerHTML = "Isidoro \u00E8 solo. Isidoro \u00E8 in cerca di avventure, in cerca di uno scopo pi\u00F9 grande. Sopravvive, lotta sempre. Puoi assumerlo come guardia del corpo o assoldarlo. Non fa domande, si getta nella mischia, CARICA... Porta a termine il suo compito. Ogni volta una nuova cicatrice, medaglia al valore sulla sua cotenna. Combatte, mangia e ama con pari foga. Il destino lo condurr\u00E0 allo scopo grande. Nel frattempo si carica e BASTHA!";
            author.innerHTML = "Francesco Bucciarelli";
    }
}