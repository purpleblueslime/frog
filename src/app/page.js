'use client';
import { Window } from '@tauri-apps/api/window';
import { Howl } from 'howler';

export default function page() {
  const appWindow = new Window('main');
  const howl = [
    new Howl({ src: ['/kuru1.mp3'] }),
    new Howl({ src: ['/kuru2.mp3'] }),
    new Howl({ src: ['/kuruto.mp3'] }),
    new Howl({ src: ['/gululu.mp3'] }),
    new Howl({ src: ['/gururu.mp3'] }),
  ];

  const mouseDown = async () => {
    await appWindow.startDragging();
  };

  const hertaClick = () => {
    const kuru = howl[~~(Math.random() * howl.length)];
    kuru.play();
  };

  return (
    <div className='box'>
      <img className='herta' onClick={hertaClick} src='/kurukuru.gif' />
      <div className='bar' onMouseDown={mouseDown}></div>
    </div>
  );
}
