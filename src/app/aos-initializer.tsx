'use client';

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function AOSInitializer() {
  useEffect(() => {
    AOS.init({
        duration: 100,
        once: true,
        easing: 'ease-out',
        offset: 50,       // Diminuir o offset para animar mais cedo
        delay: 0,         // Garantir que não haja delay
        disableMutationObserver: false,
        throttleDelay: 99  // Aumentar a responsividade
    });
  }, []);

  return null; 
}