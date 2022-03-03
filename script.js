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

const app = new Vue({
    el: '#app',
    data:{
        myPic: 'img/me.jpeg',
        myName: 'Alberto',
        advTitle: 'Ricevi notifiche di nuovi utenti',
        advText: 'Attiva notifiche desktop',
        lastLogin:'Ultimo accesso 28/02/2022 12:07',
        index: 0,
        writeNewOne: '',
        answer: 'ok',
        contacts: [
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
                    date: '20/03/2020 16:30:00',
                    text: 'Ciao come stai?',
                    status: 'sent'
                },
                {
                    date: '20/03/2020 16:30:55',
                    text: 'Bene grazie! Te?? Stasera ci vediamo?',
                    status: 'received'
                },
                {
                    date: '20/03/2020 16:35:00',
                    text: 'Si! Aperitivo alle 6 al solito posto!',
                    status: 'sent'
                }
            ],
            },
            {
                name: 'Anna',
                avatar: 'img/mom.jpeg',
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
                    date: '10/01/2020 15:30:55',
                    text: 'Buonasera, dovrei parlarle di alcune cose...',
                    status: 'sent'
                },
                {
                    date: '10/01/2020 15:50:00',
                    text: 'Ciao Alberto! Vieni pure nel mio ufficio domattina.',
                    status: 'received'
                }
            ],
            },
        ]    
    },
    methods:{
        writeNewMessage: function(){

            if(this.writeNewOne !== ""){

                const user = this.contacts[this.index];

                const newOne = {

                    text: this.writeNewOne,
                    status: 'sent',
                    date: 'Sent now',

                }

                user.messages.push(newOne);

                this.writeNewOne = "";

                setTimeout(this.reply, 3000); 
            }
        },
        reply: function(){
            //console.log('Rispondo dopo 3 secondi');
            const user = this.contacts[this.index];
            const newOne = {

                text: 'ok',
                status: 'received',
                date: 'Sent now',

            }
            user.messages.push(newOne);

        },
        getHours: function ( date ){
            const hour = date.split(' ')[1];
            return hour.substring(0, 5);
        }
    }
})
