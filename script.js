const darkMode = document.getElementById('darkmode');
const light = document.getElementById('paint1');


const MoonPath =
  'M15 28C15 43.464 28 56 28 56C12.536 56 0 43.464 0 28C0 12.536 12.536 0 28 0C28 0 15 12.536 15 28Z';


const SunPath =
  'M56 28C56 43.464 43.464 56 28 56C12.536 56 0 43.464 0 28C0 12.536 12.536 0 28 0C43.464 0 56 12.536 56 28Z';

let toggle = false;

darkMode.addEventListener('click', () => {
  console.log('clicked');

  const timeline = anime.timeline({
    duration: 1000,
    easing: 'easeOutExpo',
  });
  // add animation morph
  timeline
    .add({
      targets: '.sun',
      d: [{ value: toggle ? SunPath : MoonPath }],
    })
    .add(
      {
        targets: '#darkmode',
        rotate: toggle ? [135, -180] : [0, 135],
      },
      '-=630'
    )
    .add(
      {
        targets: '.section',
        backgroundImage: toggle
          ? 'linear-gradient(0deg, black, black'
          : 'linear-gradient(0deg, orangered, black',
            rotate: 0,
      },
      '-=600'
    );

    light.style.opacity = 1;
  if (!toggle) {
    toggle = true;
  } else {
    toggle = false;
  }
});


