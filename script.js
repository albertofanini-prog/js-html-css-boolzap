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
        contacts: [
            {
                name: 'Nonno',
                avatar: 'img/nonno.jpeg',
                visible: true,
                messages: [
                {
                    date: '10/01/2020 15:30:55',
                    text: 'Hai portato a spasso il cane?',
                    status: 'sent'
                },
                {
                    date: '10/01/2020 15:50:00',
                    text: 'Ricordati di dargli da mangiare',
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
                name: 'Fabio',
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
                    text: 'Bene grazie! Stasera ci vediamo?',
                    status: 'received'
                },
                {
                    date: '20/03/2020 16:35:00',
                    text: 'Mi piacerebbe ma devo andare a fare la spesa.',
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
                    text: 'Sicuro di non aver sbagliato chat?',
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
                name: 'Luisa',
                avatar: 'img/babe.jpeg',
                visible: true,
                    messages: [
                {
                    date: '10/01/2020 15:30:55',
                    text: 'Lo sai che ha aperto una nuova pizzeria?',
                    status: 'sent'
                },
                {
                    date: '10/01/2020 15:50:00',
                    text: 'Si, ma preferirei andare al cinema',
                    status: 'received'
                }
            ],
            },
        ]    
    }
})
