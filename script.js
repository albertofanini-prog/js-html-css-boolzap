console.log('Welcome to Boolzapp!');

// const app = new Vue({
//     el: '#app',
//     data:{
//         myPic: 'zio.jpeg',
//         grandpaPic: 'nonno.jpeg',
//         anonymousPic:'anonimo.jpeg',
//         myName: 'Alberto',
//         grandpaName: 'Nonno',
//         anonymousName: '+39 349 2525956',
//         grandpaMessage:'Tutto fatto.',
//         anonymousMessage: 'Mi piacerebbe, ma devo andare a fare la spesa.',
//         date:'28/02/2022 12:07',
//         advTitle: 'Ricevi notifiche di nuovi utenti',
//         advText: 'Attiva notifiche desktop',
//         lastLogin:'Ultimo accesso 28/02/2022 12:07',

//     }
// })

//Creare istanza su cui lavorare
const app = new Vue({
    //Comunicare dove lavorare
    el: '#app',
    //Creare i dati da utilizzare
    data:{
        myPic: 'img/me.jpeg',
        myName: 'Alberto',
        advTitle: 'Ricevi notifiche di nuovi utenti',
        advText: 'Attiva notifiche desktop',
        lastLogin:'Ultimo accesso 28/02/2022 12:07',
        index: 0,
        writeNewOne: '',
        answer: 'ok',
        searchUser: '',
        contacts: [
            {
                name: 'Babe',
                avatar: 'img/arianna.jpeg',
                visible: true,
                messages: [
                {
                    date: '28/03/2020 14:10:40',
                    text: 'Alle 6 passo a prenderti babe',
                    status: 'sent'
                },
                {
                    date: '28/03/2020 14:20:10',
                    text: 'Andiamo a cena fuori e poooi...',
                    status: 'sent'
                },
                {
                    date: '28/03/2020 15:15:22',
                    text: 'Aggiudicato love',
                    status: 'received'
                }
                ],
            },
            {
                name: 'Nonno',
                avatar: 'img/nonno.jpeg',
                visible: true,
                messages: [
                {
                    date: '10/01/2020 15:30:55',
                    text: 'Hai portato la macchina ad aggiustare?',
                    status: 'sent'
                },
                {
                    date: '10/01/2020 15:50:00',
                    text: 'Ricordati di controllare la pressione delle gomme.',
                    status: 'sent'
                },
                {
                    date: '10/01/2020 16:15:22',
                    text: 'Tutto fatto!',
                    status: 'received'
                }
                ],
            },
            {
                name: 'Jimmy',
                avatar: 'img/business_man.jpeg',
                visible: true,
                messages: [
                {
                    date: '20/03/2020 11:30:00',
                    text: 'Ciao come stai?',
                    status: 'sent'
                },
                {
                    date: '20/03/2020 11:38:55',
                    text: 'Bene grazie! Te?? Stasera ci vediamo?',
                    status: 'received'
                },
                {
                    date: '20/03/2020 11:54:00',
                    text: 'Si! Aperitivo alle 6 al solito posto!',
                    status: 'sent'
                }
                ],
            },
            {
                name: 'Babe 2',
                avatar: 'img/marta.jpeg',
                visible: true,
                messages: [
                {
                    date: '28/03/2020 17:10:40',
                    text: 'Oggi non ci sono, lavoro :(',
                    status: 'sent'
                },
                {
                    date: '28/03/2020 17:20:10',
                    text: 'Uffa proprio stasera che volevo uscire',
                    status: 'received'
                },
                {
                    date: '28/03/2020 17:32:22',
                    text: 'Domani usciremo, promesso',
                    status: 'sent'
                }
                ],
            },
            {
                name: 'Anna',
                avatar: 'img/anna.jpeg',
                visible: true,
                messages: [
                {
                    date: '28/03/2020 10:10:40',
                    text: 'La Marianna va in campagna',
                    status: 'received'
                },
                {
                    date: '28/03/2020 10:20:10',
                    text: 'Sicura di non aver sbagliato chat?',
                    status: 'sent'
                },
                {
                    date: '28/03/2020 16:15:22',
                    text: 'Ah scusa!',
                    status: 'received'
                }
                ],
            },
            {
                name: 'Boss',
                avatar: 'img/boss.jpeg',
                visible: true,
                    messages: [
                {
                    date: '10/01/2020 13:30:55',
                    text: 'Buonasera, dovrei parlarle di alcune cose...',
                    status: 'sent'
                },
                {
                    date: '10/01/2020 13:50:00',
                    text: 'Ciao Alberto! Vieni pure nel mio ufficio domattina.',
                    status: 'received'
                }
                ],
            },
            {
                name: 'Dimitrov',
                avatar: 'img/dimitrov.jpeg',
                visible: true,
                    messages: [
                {
                    date: '10/01/2020 23:34:55',
                    text: 'Ti ho trovato la maccchina perfetta! Sportiva e con pochi km!',
                    status: 'received'
                },
                {
                    date: '10/01/2020 23:52:00',
                    text: 'Top Dimo! Mandami il link',
                    status: 'sent'
                },
                {
                    date: '10/01/2020 00:26:55',
                    text: 'Appena arivo a casa te lo mando',
                    status: 'received'
                }
                ],
            },
            {
                name: 'George',
                avatar: 'img/george.jpeg',
                visible: true,
                    messages: [
                {
                    date: '10/01/2020 14:54:55',
                    text: 'Raggiungimi stasera al molo, devo presentarti una persona',
                    status: 'received'
                },
                {
                    date: '10/01/2020 16:12:00',
                    text: 'Ma chi? Per cosa? A che ore?',
                    status: 'sent'
                },
                {
                    date: '10/01/2020 18:26:55',
                    text: 'A breve ti mando i dettagli',
                    status: 'received'
                }
                ],
            },
            {
                name: 'Mamma',
                avatar: 'img/mom.jpeg',
                visible: true,
                messages: [
                {
                    date: '28/03/2020 10:10:40',
                    text: 'Hai lasciato un casino!',
                    status: 'received'
                },
                {
                    date: '28/03/2020 10:20:10',
                    text: 'Non lavi mai i piatti',
                    status: 'received'
                },
                {
                    date: '28/03/2020 10:24:22',
                    text: 'Mamma ero di frettaa',
                    status: 'sent'
                }
                ],
            },
            {
                name: 'Nike Store',
                avatar: 'img/nike.jpeg',
                visible: true,
                messages: [
                {
                    date: '20/03/2020 16:30:00',
                    text: 'Ciao! Sarei interessato a sapere il prezzo delle Air Jordan 1 che hai come foto profilo!',
                    status: 'sent'
                },
                {
                    date: '20/03/2020 16:38:55',
                    text: 'Compreso di spedizione, grazie.',
                    status: 'sent'
                },
                {
                    date: '20/03/2020 16:56:00',
                    text: 'Ciao! Il prezzo di questo modello varia in base alla taglia e parte da 180€ fino a 250€. Per qualsiasi cosa siamo a disposizione!',
                    status: 'received'
                }
                ],
            },
            {
                name: 'Mark',
                avatar: 'img/mark.jpeg',
                visible: true,
                    messages: [
                {
                    date: '10/01/2020 19:54:55',
                    text: 'Bro domattina devo andare al mare a ritirare una moto! Vieni con me?',
                    status: 'received'
                },
                {
                    date: '10/01/2020 20:12:00',
                    text: 'Ci sto! A che ore partiamo?',
                    status: 'sent'
                },
                {
                    date: '10/01/2020 20:26:55',
                    text: 'Facciamo che ti aspetto alle 6 da me?',
                    status: 'received'
                },
                {
                    date: '10/01/2020 21:12:00',
                    text: 'Vai! A domattina allora',
                    status: 'sent'
                },
                ],
            },
        ]    
    },
    //Creare funzioni da utilizzare
    methods:{
        //Scrivere messaggio e inviare con tasto invio
        writeNewMessage: function(){
            //Se la barra del messaggio non è vuota
            if(this.writeNewOne !== ""){
                const user = this.contacts[this.index];
                //Creare un nuovo oggetto
                const newOne = {
                    text: this.writeNewOne,
                    status: 'sent',
                    date: 'Sent now',
                }
                //E inserirlo nei messaggi
                user.messages.push(newOne);
                //Pulire la barra di scrittura
                this.writeNewOne = "";
                //Avviare un timer per avere una risposta automatica
                setTimeout(this.reply, 1000); 
            }
        },
        //Ricevere una risposta automatica dal computer
        reply: function(){
            //console.log('Rispondo dopo 3 secondi');
            const user = this.contacts[this.index];
            //Creare l'oggetto da inviare come risposta
            const newOne = {
                text: 'Ricevuto!',
                status: 'received',
                date: 'Sent now',
            }
            //Inserirlo nella lista dei messaggi
            user.messages.push(newOne);
        },
        //Ricevere la data con dei valori precisi(hh,mm)
        getHours: function ( date ){
            const hour = date.split(' ')[1];
            return hour.substring(0, 5);
        },
    },
    computed: {
        // findHim(){
        //     let userFinder = this.contacts;

        //     if(this.searchUser != '' && this.searchUser){
        //         userFinder = userFinder.filter((element) =>{
        //             return element.name.toLowerCase().includes(this.searchUser.toLowerCase())
        //         })
        //     } return userFinder;
        // }
        chatFinder: function(){
            return this.contacts.filter(user =>{
                return user.name.toLowerCase().includes(this.searchUser.toLowerCase());
            })
        },
    }
})
