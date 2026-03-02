"use client";

import { useEffect } from "react";

/**
 * На первой загрузке/перезагрузке страницы убирает хэш из URL
 * и принудительно скроллит в начало, чтобы браузер не прыгал
 * к якорю (#experience, #skills и т.д.).
 * Обычные клики по ссылкам в навбаре работают как прежде.
 */
export default function ScrollReset() {
  useEffect(() => {
    if (window.location.hash) {
      // убираем хэш из адресной строки без перезагрузки
      history.replaceState(null, "", window.location.pathname);
    }
    window.scrollTo(0, 0);
  }, []);

  return null;
}
