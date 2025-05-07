import { animate } from 'https://cdn.jsdelivr.net/npm/animejs@4.0.2/+esm';

animate('span', {
    y: [
        { to: '-2.75rem', ease: 'outExpo', duration: 600 },
        { to: 0, ease: 'outBounce', duration: 800, delay: 100 }
    ],
    rotate: {
        from: '-1turn',
        delay: 0
    },
    delay: (_, i) => i * 50,
    ease: 'inOutCirc',
    loopDelay: 1000,
    loop: false
});