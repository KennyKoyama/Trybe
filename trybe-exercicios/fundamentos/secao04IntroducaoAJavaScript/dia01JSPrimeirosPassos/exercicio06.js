let random = Math.floor(Math.random() * 10);
let status = random >= 8 ? 'Approved'
           : random >= 6 ? 'Waiting list'
           : 'Failed';

switch (status) {
    case 'Approved':
        console.log(`Congrats, you've been approved!`);
        break;

    case 'Waiting list':
        console.log(`You're on our waiting list!`);
        break;

    case 'Failed':
        console.log(`Sorry, you've not been approved!`);
        break;

    default:
        console.log(`Wrong information`)
        break;
}